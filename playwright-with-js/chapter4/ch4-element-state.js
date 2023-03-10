const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://demoqa.com/automation-practice-form')

  const firstName = page.locator('#firstName')
  // const secondName = page.locator('#secondName')
  const sportCheck = page.locator('#hobbies-checkbox-1')
  const submit = page.locator('#submit')

  console.log('disabled: ', await firstName.isDisabled())
  console.log('enabled: ', await firstName.isEnabled())
  console.log('editable: ', await firstName.isEditable())
  console.log('checked: ', await sportCheck.isChecked())
  console.log('visible: ', await sportCheck.isVisible())
  console.log('hidden ', await submit.isHidden())

  await browser.close()
})();
