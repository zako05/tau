const { chromium } = require('playwright');
const book = {
  image: {
    uri: '/images/bookimage2.jpg',
    locator: 'img'
  },
  title: {
    name: 'Eloquent JavaScript, Second Edition',
    uri: '/books?book=9781593275846',
  },
  author: {
    name: 'Marijn Haverbeke',
  },
  publisher: {
    name: 'No Starch Press',
  },
};

describe('Navigate over bookshelf', () => {
  let browser, context, page

  beforeAll(async() => {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://demoqa.com/books')
    await page.fill('#searchBox', 'eloquent')
  })

  afterAll(async() => {
    await browser.close()
  })

  let i = 1
  for(let attr in book) {
    test(`Should check if book ${attr} is OK`, async() => {
      if (book[attr].name != undefined) {
        const searchedBook =
          await page.locator(`.ReactTable .rt-tr-group:nth-child(1) div.rt-td:nth-child(${i++})`)
        expect(await searchedBook.innerText()).toBe(book[attr].name)
      } else {
        const searchedBook =
          await page.locator(`.ReactTable .rt-tr-group:nth-child(1) div.rt-td:nth-child(${i++}) ${book[attr].locator}`)
        expect(await searchedBook.getAttribute('src')).toBe(book[attr].uri)
      }
    })
  }
})
