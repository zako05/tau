const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 })
  const page = await browser.newPage()
  await page.goto('http://the-internet.herokuapp.com/key_presses')

  const removables = ' exit vim'
  const alternates = ' walk into mordor'
  await page.click('input')
  await page.keyboard.type(`one does not simply ${removables}`)
  await page.keyboard.down('Shift')
  let n = 0
  while(n < removables.length) {
    await page.keyboard.press('ArrowLeft')
    n++
  }
  await page.keyboard.up('Shift')
  await page.keyboard.press('Backspace')
  await page.keyboard.type(alternates, {delay: 100})

  await browser.close()
})();
