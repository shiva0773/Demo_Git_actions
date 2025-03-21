const {test,expect}=require('@playwright/test')
const path = require('path')

test('Test Data Driven',async({page})=>{

    await page.goto('https://www.amazon.in/')

const value = ['Mobile','chargers','laptop','jeans']

for(let val of value){


await page.locator('#twotabsearchtextbox').fill(val)
await page.locator('#nav-search-submit-button').click()
await page.waitForTimeout(3000)
await page.screenshot({
    path: `Screenshots/ss${Date.now()}.png` 
});
await page.screenshot ({path:`Screenshots/${val}.png`})

await page.goto('https://www.amazon.in/')


}



})