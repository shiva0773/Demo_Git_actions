const {test,expect} = require('@playwright/test')
const login = require('../Pageobjectmodel/openSpan/Login')
const orderBeverages = require('../Pageobjectmodel/openSpan/placeOrder')
const addAddress = require('../Pageobjectmodel/openSpan/addAdress')
const payBill = require('../Pageobjectmodel/openSpan/Payment')
const loggingout = require('../Pageobjectmodel/openSpan/Logout')

const data = require('../Data/Openspan.json')
require("dotenv").config()


test('OrderBevarages',async ({page})=>{

    //Goto Openspan Url
await page.goto(process.env.openspanUrl)
await expect(page).toHaveTitle(data.title)

let loginpage = new login.LoginOpenSpan(page)
//Enter username and Password
await loginpage.login(process.env.spanuser,process.env.spanpass)

await expect(page).toHaveURL(process.env.haveurlspan)

await expect(page.locator('#title_and_home_link')).toHaveText(data.title1)

for(const product of data.product){
let orderBev = new orderBeverages.placeOrder(page)



await orderBev.AddtoCart(product)

await page.waitForTimeout(5000)

//await expect(page.locator("//*[contains(text(),'Step 2 Tell Us Who You Are')]")).toContainText()

await expect(page).toHaveTitle(data.title2)
await page.waitForTimeout(2000)
await page.locator("(//*[@class='next action-button'])[1]").click()

await page.screenshot({path:"Screenshots/SS1.png",fullPage:true})

let billingadd = new addAddress.billingAdd(page)

await billingadd.enterAddress(data.fistname,data.lastname,data.companyname,data.address,data.zip,data.areacode,data.phone)

let paybillamount = new payBill.payment(page)
await paybillamount.billpayment(data.cardtype,data.s_code,data.card_num,data.month,data.year)

await page.waitForTimeout(2000)

const ordernum = await page.locator("//*[@style='margin-bottom: 10px;']").textContent()
await page.screenshot({path:`Screenshots/ordernumer${ordernum}_${new Date().getDate()}.png`})
await console.log(ordernum)

let loggedout = new loggingout.logout(page)

await loggedout.signoff()

await expect(page).toHaveURL(process.env.openspanUrl)

await loginpage.login(process.env.spanuser, process.env.spanpass);
await expect(page).toHaveURL(process.env.haveurlspan);
await expect(page.locator('#title_and_home_link')).toHaveText(data.title1);


}

})




