const { test, expect, xlsx, login, data, order, billing, payment, logout } = require('../setup');

test('OrderBevarages',async({page})=>{
    test.setTimeout(80000)
await page.goto(process.env.openspanUrl)

const logpage = new login.LoginOpenSpan(page)

await logpage.login(process.env.spanuser,process.env.spanpass)

await expect(page).toHaveURL(process.env.haveurlspan)

//Read product details from Excel file

const wb = xlsx.readFile('OrderDeatils.xlsx')
const ws = wb.Sheets['Sheet1']
const product1 = xlsx.utils.sheet_to_json(ws)
console.log(data.product)
console.log(product1)
for(const prod of product1){


const orderbev = new order.placeOrder(page)

await orderbev.AddtoCart(prod.Products)
await page.waitForTimeout(5000)

await expect(page).toHaveTitle(data.title2)
await page.waitForTimeout(2000)
await page.locator("(//*[@class='next action-button'])[1]").click()

await page.screenshot({path:"Screenshots/SS1.png",fullPage:true})


const billing1 = new billing.billingAdd(page)

await billing1.enterAddress(data.fistname,data.lastname,data.companyname,data.address,data.zip,data.areacode,data.phone)

const paybill = new payment.payment(page)

await paybill.billpayment(data.cardtype,data.s_code,data.card_num,data.month,data.year)

const ordernum = await page.locator("//*[@style='margin-bottom: 10px;']").textContent()
await page.waitForTimeout(3000);
await page.screenshot({path:`Screenshots/ordernumer${ordernum}_${new Date().getDate()}.png`})
console.log(ordernum)

//Write order number back to Excel file
const rowIndex = product1.indexOf(prod)+2
ws[`B${rowIndex}`] = {v:ordernum}

await page.locator("(//*[contains(text(),'Home')])[1]").click()
await page.waitForTimeout(3000);
}
 // Save the updated Excel file
xlsx.writeFile(wb,'OrderDeatils.xlsx')
const loggedout = new logout.logout(page)

await loggedout.signoff()

await expect(page).toHaveURL(process.env.openspanUrl)



})