const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 })
  const page = await browser.newPage()
  await page.goto('https://demoqa.com/alerts')
  // page.on('dialog', async dialog => {
  //   console.log(dialog.message())
  //   await dialog.accept()
  // })
  // await page.click('#alertButton')
  // page.on('dialog', async dialog => {
  //   console.log(dialog.message())
  //   await dialog.accept('Hello there')
  // })
  // await page.click('#promtButton')
  page.once('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.accept()
  })
  await page.click('#alertButton')
  page.once('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.accept('Hello there')
  })
  await page.click('#promtButton')
  await browser.close()
})();
