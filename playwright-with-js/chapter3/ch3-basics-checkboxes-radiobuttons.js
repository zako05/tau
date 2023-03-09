const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 })
  const page = await browser.newPage()
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')
  await page.locator('#accept-choices').click()
  // check the second checkbox
  const checks = await page.locator('#main div:nth-child(1) input[type=checkbox]').all()
  await checks[1].check()
  await checks[0].uncheck()
  // check the second radiobutton
  const radios= await page.locator('#main div:nth-child(1) input[type=radio]').all()
  await radios[1].check()
  await browser.close()
})();
