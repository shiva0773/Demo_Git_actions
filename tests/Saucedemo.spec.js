const{test,expect} = require ('@playwright/test')
const { verify } = require('crypto')
const { title } = require('process')
const data = require('../Data/Saucedemo.json')

const login = require ('../Pageobjectmodel/Saucelogin')
const check = require('../Pageobjectmodel/checkout')
require("dotenv").config()

test('Login',async({page})=>{
 

    await page.goto(process.env.saucedemourl)

    await expect(page).toHaveTitle(data.title)

    let loginpage= new login.Login(page)
    await loginpage.logintoSauce(process.env.sauceUser,process.env.saucePass);

    
    await expect(page).toHaveTitle(data.title) 
     await expect(page).toHaveURL(process.env.haveurl)

await page.locator('.title').isEnabled()
await expect(page.locator('.title')).toHaveText(data.title1)

await page.locator("(//*[contains(text(),'Add to cart')])[1]").click()
await page.waitForTimeout(2000)
await page.locator('#remove-sauce-labs-backpack').isEnabled()
await page.locator('.shopping_cart_badge').click()
await expect(page.locator('#continue-shopping')).toHaveText(data.text)
await page.locator('#checkout').isVisible()
//await expect(page.locator("(//*[contains(text(),'Remove')])[1]")).isVisible()
await page.locator('#checkout').click()
let title= await page.locator('.title').textContent()
console.log(title)

await page.locator('#continue').click()


let invlaiduser = await page.locator("(//*[contains(text(),'Error: First Name is required')])[1]").textContent()
console.log(invlaiduser)

let checkoutpage = new check.checkOut(page)

await checkoutpage.checkOut(data.firstname,data.lastname,data.postal)

// await page.locator('#first-name').fill('social')
// await page.locator('#last-name').fill('network')
// await page.locator('#postal-code').fill('500082')
// await page.locator('#continue').click()

await page.locator('.summary_subtotal_label').isVisible()

let subtotal = await page.locator('.summary_subtotal_label').textContent()
subtotal=subtotal.split('$')
subtotal = parseFloat(subtotal[1])
console.log(subtotal)

let tax = await page.locator('.summary_tax_label').textContent()
tax=tax.split('$')
tax=parseFloat(tax[1])
console.log(tax)

let totalbal = await page.locator('.summary_total_label').textContent()

totalbal = totalbal.split('$')
totalbal = parseFloat(totalbal[1])
console.log(totalbal)    

let total = subtotal+tax

console.log(total)

await expect(totalbal).toBe(total)


await page.locator('#finish').click()

let success=await page.locator('.complete-header').textContent()

console.log(success)

await page.locator('#back-to-products').click()

await page.locator('.title').isEnabled()

await page.locator('#react-burger-menu-btn').click()
//await page.waitForTimeout(2000)
await page.locator('#logout_sidebar_link').isVisible()
await page.locator('#logout_sidebar_link').click()
await page.close()

})
