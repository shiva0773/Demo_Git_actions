const{test,expect} = require('@playwright/test')


test.beforeEach(async({page})=>{

await page.goto('https://translate.google.co.in/?sl=auto&tl=en&op=translate')


})

test('checkurl',async({page})=>{
await expect(page).toHaveTitle('Google Translate')

const message = await page.locator("(//*[@class='TcXXXb'])[1]").textContent()

await console.log(message)

})

test('checktext',async({page})=>{



    const message = await page.locator("(//*[@class='TcXXXb'])[2]").textContent()

    await console.log(message)


})