const BasePage = require('./base.page')

class HomePage extends BasePage {
  constructor(page) {
    super(page)

    // locators
    this.loggedUser = '.logged-user-name'
    this.balances = '.balance-value'
  }

  async getUserName() {
    let user = await page.locator(this.loggedUser)
    return await user.innerText()
  }

  async getBalance(balType) {
    let balArray = await this.page.locators(this.balances)
    if (balType == 'total') {
      return (await balArray[0].locator('span')).innerText()
    } else if (balType == 'credit') {
      return (await balArray[1]).innerText()
    } else {
      return (await balArray[2]).innerText()
    }
  }

  async navigate() {
    await super.navigate('app.html')
  }
}

module.exports = HomePage
