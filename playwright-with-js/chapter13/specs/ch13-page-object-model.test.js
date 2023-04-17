const { chromium } = require('playwright')
const HomePage = require('../models/home.page')
const LoginPage = require('../models/login.page')

describe('foo', () => {
  let browser, context, page
  let homePage, loginPage

  beforeAll(async() => {
    browser = await chromium.launch({headless: false, slowMo: 300})
    context = await browser.newContext()
    page = await context.newPage()
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    await loginPage.navigate()
  })

  afterAll(async() => {
    browser.close()
  })

  it('Should login', async() => {
    await loginPage.login('username', 'password')
    expect(await page.title()).not.toBeNull()
  })
})
