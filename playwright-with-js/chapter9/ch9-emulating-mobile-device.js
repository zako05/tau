const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];
const lang = { code: 'sk-SK', buttonName: 'Prijať všetko' };

(async() => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    ...iPhone,
    permissions: ['geolocation'],
    geolocation: { latitude: 48.127381, longitude: 17.109366 },
    locale: lang.code,
  })

  const page = await context.newPage()
  await page.goto('https://google.com/maps')
  const acceptAll = page.getByRole('button', { name: lang.buttonName })
  await acceptAll.click()

  // await page.waitForTimeout(5000)

  await browser.close()
})();
