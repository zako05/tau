const { chromium, firefox } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 })
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/forgot_password')
  await browser.close()
})();

(async() => {
  const browser = await firefox.launch({ headless: false, slowMo: 100 })
  const page = await browser.newPage()
  await page.goto('http://google.com')
  await browser.close()
})();
