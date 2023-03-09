const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 })
  const page = await browser.newPage()
  await page.goto('https://demoqa.com/frames')
  const frame = page.frame({ url: /\/sample/ })
  console.log(await frame.locator('h1#sampleHeading').innerText())
  await browser.close()
})();
