const {test,expect} = require('@playwright/test')

const Bio= require('../Pageobjectmodel/testautomation')
const { clearScreenDown } = require('readline')

require('dotenv').config()

test('automation',async({page})=>{

    await page.goto(process.env.testautomation_URL)

let filldetails = new Bio.testautomation(page)

await filldetails.fileds()

await page.waitForTimeout(5000)











})

