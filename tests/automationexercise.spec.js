const {test,expect} = require('@playwright/test')
const register_sign = require('../Pageobjectmodel/automationexercise/Register')
const enteraccountinfo = require('../Pageobjectmodel/automationexercise/EnterAccountInformation')
const data = require('../Data/automationexercise.json')
const { sign } = require('crypto')
const { waitForDebugger } = require('inspector')
const exp = require('constants')

require('dotenv').config()

test('Register',async({page})=>{

await page.goto(process.env.automation_URL)


const login = new register_sign.register(page)

await login.signup(data.name,data.mailid)

await expect(page.locator("//*[contains(text(),'Enter Account')]")).toBeVisible()

const accountinfo = new enteraccountinfo.info(page)

await accountinfo.enterAccount(process.env.pass,data.Day,data.Month,data.Year)

await accountinfo.addressinfo(data.firstname,data.lastname,data.company,data.address,data.address2,data.country,data.State,data.City,data.Zipcode,data.number)
await page.waitForTimeout(3000)
await page.locator("//button[contains(text(),'Create Account')]").click()

const success=await page.locator("//*[@class='title text-center']").textContent()
console.log(success)
const congrts = await page.locator("(//*[@class='title text-center']//following-sibling::p)[2]").textContent()
console.log(congrts)
await page.locator("//*[@class='btn btn-primary']").click()
await expect(page).toHaveTitle('Automation Exercise')
await expect(page).toHaveURL(process.env.automation_URL)

})  