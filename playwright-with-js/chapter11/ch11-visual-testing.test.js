const { chromium } = require('playwright');
const {
  ClassicRunner,
  Eyes,
  Target,
  RectangleSize
} = require('@applitools/eyes-playwright')

describe('foo', () => {
  const eyes = new Eyes(new ClassicRunner())
  let browser, context, page

  // jest.setTimeout(30000)

  beforeAll(async() => {
    browser = await chromium.launch({headless: false})
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/dynamic_content')
  })

  afterAll(async() => {
    browser.close()
  })

  test('boo', async() => {
    await page.waitForSelector('h3', {state: 'attached'})
    await eyes.open(page, 'The Internet', 'Dynamic content', new RectangleSize(800, 600))
    await eyes.check(Target.window().fully())
    await eyes.close(  )
  })
})
