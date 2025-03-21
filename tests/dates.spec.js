const { test, expect } = require('@playwright/test')
const { format } = require('path')

test('Today Date', async ({ page }) => {

    const today = new Date()

    const todaydate = today.getDate().toString()

    console.log(todaydate)
})

test('full Date', async ({ page }) => {

    const today = new Date()
    const year = String(today.getFullYear())
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const date = String(today.getDate()).padStart(2, '0')
    const day = today.getDay()

    const fulldate = `${date}/${month}/${year}::${day}`
    console.log(fulldate)
})

test.only('random number', async ({ page }) => {

    const randomNumber = Math.floor(Math.random() * 25) + 1;
console.log(randomNumber)

})