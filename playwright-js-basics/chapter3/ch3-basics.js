const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 100})
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/forgot_password')
  const email = await page.$('#email')
  // .$ is deprecate, use page.locator() instead
  // https://playwright.dev/docs/api/class-page#page-query-selector
  // const email = page.locator('#email')
  await email.type('zako05@gmail.com', { delay: 50 })
  await page.click('button#form_submit')
  await browser.close()
})();
