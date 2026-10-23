"""Genuine browser checks against the built plugin with deterministic fetch fixtures (no live DSH)."""
from pathlib import Path
import json, base64, shutil
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parents[1]
out = root / 'node_modules/.cache/ui-fixture'
shutil.copyfile(root / 'scripts/ui-fixture.html', out / 'index.html')
errors = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True, args=['--no-sandbox'])
    page = browser.new_page(viewport={'width': 1440, 'height': 1100}, device_scale_factor=1)
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto((out/'index.html').as_uri())
    page.locator('.mdb-followup-composer').wait_for()
    assert page.locator('.mdb-final .mdb-markdown h1').count() == 1
    assert page.locator('.mdb-final .mdb-markdown table').count() == 1
    assert page.locator('.mdb-final .mdb-markdown .katex').count() >= 3
    assert page.locator('.mdb-final pre').get_attribute('dir') == 'ltr'
    assert page.locator('.mdb-final .mdb-markdown ul').evaluate('(e)=>getComputedStyle(e).direction') == 'rtl'
    assert page.locator('.mdb-final .mdb-markdown li').first.evaluate('(e)=>getComputedStyle(e).direction') == 'rtl'
    assert page.evaluate('window.BAD === undefined')
    assert 'p1' not in page.locator('.mdb-final .mdb-markdown').inner_text()
    page.screenshot(path=str(out/'arabic-markdown.png'), full_page=True)
    form = page.locator('.mdb-followup-composer')
    files = form.locator('input[type=file]')
    # Valid 1px PNG, synthetic file fixtures only.
    png = base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAGAAAABACAIAAABqVuVZAAAAvElEQVR4nO2QwQkAMAyEsv/S7RSJCMK9T3HezOp23w8Adv8C0QC7f4FogN2/QDTA7l8gGmD3LxANsPsXiAbY/QtEA+z+BaIBdv8C0QC7f4FogN2/QDTA7l8gGmD3LxANsPsXiAbY/QtEA+z+BaIBdv8C0QC7f4FogN2/QDTA7l8gGmD3LxANsPsXiAbY/QtEA+z+BaIBdv8C0QC7f4FogN2/QDTA7l8gGmD3LxANsPsXiAbY/QtEA+z+24AP5WHpWrATTmoAAAAASUVORK5CYII=')
    files.set_input_files({'name':'selected.png','mimeType':'image/png','buffer':png})
    form.locator('.mdb-draft-image').wait_for()
    assert form.locator('.mdb-draft-image').count()==1
    form.locator('.mdb-draft-image button').click()
    assert form.locator('.mdb-draft-image').count()==0
    # Clipboard event uses File/DataTransfer and the actual React onPaste path.
    def transfer(event, name, mime='image/png'):
        page.evaluate('''([event,name,mime,data])=>{const bytes=Uint8Array.from(atob(data),c=>c.charCodeAt(0));const file=new File([bytes],name,{type:mime});const dt=new DataTransfer();dt.items.add(file); const form=document.querySelector('.mdb-followup-composer'); const e=new Event(event,{bubbles:true,cancelable:true});Object.defineProperty(e,event==='paste'?'clipboardData':'dataTransfer',{value:dt});form.dispatchEvent(e)}''',[event,name,mime,base64.b64encode(png).decode()])
    transfer('paste','pasted.png')
    form.locator('.mdb-draft-image').wait_for()
    form.locator('textarea').fill('New visual evidence')
    page.evaluate('window.__fixture.failNext=true')
    form.locator('button[type=submit]').click()
    page.get_by_text('Fixture submission failed; draft must remain').wait_for()
    assert form.locator('textarea').input_value()=='New visual evidence'
    assert form.locator('.mdb-draft-image').count()==1
    form.locator('button[type=submit]').click()
    page.wait_for_function('window.__fixture.snapshot.sessions[0].followUps.length===1')
    page.wait_for_function("document.querySelector('.mdb-followup-composer textarea').value===''")
    assert form.locator('.mdb-draft-image').count()==0
    assert page.locator('.mdb-followup-message img').count()>=1
    transfer('drop','dropped.png')
    form.locator('.mdb-draft-image').wait_for()
    assert form.locator('textarea').input_value()==''
    assert form.locator('button[type=submit]').is_enabled()
    form.locator('button[type=submit]').click()
    page.wait_for_function('window.__fixture.snapshot.sessions[0].followUps.length===2')
    assert page.evaluate('window.__fixture.snapshot.sessions[0].followUps[1].text')==''
    transfer('drop','bad.svg','image/svg+xml')
    form.get_by_role('alert').wait_for()
    assert form.locator('.mdb-draft-image').count()==0
    transfer('drop','new.png')
    form.locator('.mdb-draft-image').wait_for()
    page.locator('.mdb-transcript > summary').click()
    page.locator('.mdb-followup-message').first.wait_for()
    assert page.locator('.mdb-followup-message img').count() >= 2
    page.screenshot(path=str(out/'continuation-images.png'), full_page=True)
    assert not errors, errors
    (out/'browser-results.json').write_text(json.dumps({'kind':'built plugin UI with synthetic fetch; not live DSH','checks':['Arabic GFM/math/code rendering','safe HTML','readable participant labels','file selection','remove','clipboard paste','drop','validation error','failed submit retains draft and images','text plus image submit','image-only submit','multiple continuation turns','persisted preview read'], 'pageErrors':errors,'followUps':page.evaluate('window.__fixture.snapshot.sessions[0].followUps.length')},indent=2),encoding='utf-8')
    browser.close()
print('Browser UI regression checks passed (fixture, not live providers).')
