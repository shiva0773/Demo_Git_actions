const {test, expect} = require ('@playwright/test')

require('dotenv').config()



test('openurl',async({page})=>{

await page.goto('https://www.google.com')


})

test.only('enter text',async({page})=>{
    await page.goto('https://www.google.com')

await page.locator('#APjFqb').fill('mobiles')

await page.keyboard.press('Enter')


//await page.waitForTimeout(5000)

})