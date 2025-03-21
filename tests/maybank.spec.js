const { test, expect } = require('@playwright/test')

const data = require('../Data/maybank.json')
const loginpage = require('../Pageobjectmodel/MBB/Login')
const payments = require('../Pageobjectmodel/MBB/Payment')
const transf = require('../Pageobjectmodel/MBB/Transfer')

require('dotenv').config()

test.beforeEach(async ({ page }) => {


    test.setTimeout(120000)

    await page.goto(process.env.May_url)

    let Mbb_login = new loginpage.Login(page)

    await Mbb_login.Login_Mbb(process.env.user, process.env.password)
})


test('payment', async ({ page }) => {

    const pay_mbb = new payments.Payment(page)

    await pay_mbb.pay(data.Billercode, data.ref1, data.amount),


        await page.waitForTimeout(5000)


})



test('Transfer', async ({ page }) => {

const trx = new transf.transfer(page)

await trx.transfer(data.accountinfo)

await page.waitForTimeout(5000)

})

