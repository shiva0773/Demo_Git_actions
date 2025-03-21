
const {test,expect} = require('@playwright/test')
const contus = require('../Pageobjectmodel/automationexercise/Contact')
const path = require('path')



require('dotenv').config()

test('contactus',async({page})=>{

    await page.goto(process.env.automation_URL)

    await expect(page).toHaveURL(process.env.automation_URL)

    const contact_us = new contus.Contact(page)

  await contact_us.enter_details()

await page.locator("//*[@name='upload_file']").setInputFiles(path.join("C:/Users/shivakumar.gundra/Downloads", 'certificate_86eec45129bf959b2ef59075699e7b55 2.pdf'))

await page.locator("//*[@name='submit']").click()

await page.waitForTimeout(3000)
})