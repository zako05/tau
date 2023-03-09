const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: false, slowMo: 300})
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/dropdown')
  // const dropdown = await page.$('#dropdown')
  // .$ is deprecate, use page.locator() instead
  // https://playwright.dev/docs/api/class-page#page-query-selector
  const dropdown = page.locator('#dropdown')
  await dropdown.selectOption({ value: '1' })
  await dropdown.selectOption({ label: 'Option 2' })
  await dropdown.selectOption({ index: 1 })
  // const availableOptions = await dropdown.$$('option')
  // .$$ is deprecate, use page.locator() instead
  // https://playwright.dev/docs/api/class-page#page-query-selector-all
  // const availableOptions = await dropdown.locator('option').all()
  let count = 1
  for (let availableOption of await dropdown.locator('option').all()) {
    console.log(`count${count}: ${await availableOption.innerText()}`)
    count++
  }
  // let count = 1
  // for (let availableOption of availableOptions) {
  //   console.log(`count${count}: ${await availableOption.innerText()}`)
  //   count++
  // }
  // forEach() method does not wait for asynchronous operations to complete before moving on to the next iteration!!!
  //
  // count = 1
  // console.log('--------')
  // availableOptions.forEach(async availableOption => {
  //   console.log(`count${count}: ${await availableOption.innerText()}`)
  //   count++
  // })
  await browser.close()
})();
