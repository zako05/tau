const { chromium } = require('playwright')

// run a function in the context of web page
describe('Evaluation example', () => {
  let browser, context, page

  beforeAll(async() => {
    browser = await chromium.launch({ headless: false })
  })

  beforeEach(async() => {
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/')
  })

  afterAll(async() => {
    await browser.close()
  })

  test('Should return the page title & h1 successfully', async() => {
    const elements = await page.evaluate(() => {
      const pageTitle = document.title
      const title = document.querySelector('h1.heading').textContent

      return {title, pageTitle}
    })

    expect(elements.pageTitle).toBe('The Internet')
    expect(elements.title).toBe('Welcome to the-internet')
  })
})
