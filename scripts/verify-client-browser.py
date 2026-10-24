"""Exercise production dist/client.js inside a constrained DSH-like host.
No provider calls or profile mutations. Optional --saved snapshot.json reads local
user data for playback only: never printed, committed, or sent to a provider.
"""
from pathlib import Path
import argparse, json
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
out = root / 'node_modules/.cache/panel-review'
parser = argparse.ArgumentParser()
parser.add_argument('--saved', type=Path)
args = parser.parse_args()
html = (root / 'scripts/ui-fixture.html').read_text(encoding='utf-8').replace('<script src="fixture.js"></script>', '<script src="harness.js"></script>')
# The actual DSH main slot is height/width constrained, unlike a full-page fixture.
html = html.replace('</head>', '<style>html,body{height:100%;overflow:hidden}body{display:flex;flex-direction:column}#app{height:calc(100vh - 44px);min-height:0;width:calc(100vw - 280px);margin-inline-start:280px;overflow:hidden}</style></head>')
(out / 'index.html').write_text(html, encoding='utf-8')
results = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    for locale in ['en', 'ar']:
        page = browser.new_page(viewport={'width':1440,'height':1000})
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        config = {'locale': locale}
        if args.saved:
            config['snapshot'] = json.loads(args.saved.read_text(encoding='utf-8'))
        page.add_init_script('window.__DEBATE_BROWSER_CONFIG__=' + json.dumps(config, ensure_ascii=True))
        page.goto((out / 'index.html').as_uri())
        page.locator('.mdb-workspace').wait_for(timeout=20000)
        assert not errors, errors
        assert page.locator('.mdb-root').bounding_box()['height'] > 500
        if not args.saved:
            assert page.locator('.mdb-final .mdb-math').count() > 0, 'multiline math must render, not silently fall back'
            assert page.locator('[data-markdown-fallback]').count() == 0
            page.screenshot(path=str(out / f'exact-dist-{locale}.png'), full_page=True)
        count = page.locator('.mdb-history-select').count()
        for i in range(count):
            page.locator('.mdb-history-select').nth(i).click()
            page.wait_for_function('!document.querySelector(".mdb-history-select:disabled")')
            page.locator('.mdb-followup-composer').wait_for()
            assert not errors, errors
            page.locator('.mdb-followup-composer textarea').fill('Playback draft: العربية English')
        page.locator('.mdb-topbar-controls button').click()
        page.locator('.mdb-settings').wait_for(state='visible')
        assert page.locator('.mdb-settings select').count() > 0
        page.locator('.mdb-settings .mdb-settings-heading button').click()
        page.locator('.mdb-new-debate').click()
        page.locator('#mdb-question').wait_for()
        page.locator('#mdb-question').fill('Retained compose draft')
        page.evaluate('window.__debateBrowser.unmount()')
        page.wait_for_function('!document.querySelector(".mdb-root")')
        page.evaluate('window.__debateBrowser.mount()')
        page.locator('#mdb-question').wait_for()
        assert page.locator('#mdb-question').input_value() == 'Retained compose draft'
        # Constrained DSH center on a desktop-sized window must use panel width.
        page.set_viewport_size({'width':1024,'height':900}) # actual panel width744
        page.locator('.mdb-mobile-tabs').wait_for(state='visible')
        page.locator('.mdb-topbar-controls button').click()
        page.locator('.mdb-settings').wait_for(state='visible')
        assert page.locator('.mdb-main').is_hidden()
        page.locator('.mdb-mobile-tabs button').first.click() # history, then New
        page.locator('.mdb-new-debate').click()
        page.locator('#mdb-question').wait_for(state='visible')
        assert page.locator('.mdb-settings').is_hidden()
        # A mutation survives unmount/remount; do not reset busy on App remount.
        page.set_viewport_size({'width':1440,'height':1000})
        page.evaluate('window.__debateBrowser.setRequestDelay(400)')
        page.locator('.mdb-new-debate').click()
        page.evaluate('window.__debateBrowser.unmount(); window.__debateBrowser.mount()')
        page.locator('.mdb-new-debate').wait_for(state='attached')
        assert page.locator('.mdb-new-debate').is_disabled()
        page.wait_for_function('!document.querySelector(".mdb-new-debate:disabled")')
        assert not errors, errors
        dimensions = page.locator('.mdb-root').evaluate('(e)=>({client:e.clientHeight,scroll:e.scrollHeight,width:e.clientWidth,scrollWidth:e.scrollWidth})')
        assert dimensions['scrollWidth'] <= dimensions['width'] + 1
        results.append({'locale':locale,'sessionsRendered':count,'pageErrors':errors,'dimensions':dimensions,'checks':['all saved reviews/transcripts','exact production bundle','StrictMode mount','Arabic/English','bounded host slot','narrow desktop panel','settings/history/new navigation','draft across remount','pending mutation lock across remount']})
        page.close()
    browser.close()
(out / 'results.json').write_text(json.dumps(results, indent=2), encoding='utf-8')
print(json.dumps({'kind':'exact production dist; local saved-data playback' if args.saved else 'exact production dist; synthetic fixture','results':results}, ensure_ascii=True, indent=2))
