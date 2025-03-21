const { expect } = require("allure-playwright")


exports.Payment = class Payment {

    constructor(page) {

        this.page = page

        this.pay_transfer = page.locator("//*[@class='nav navbar-nav navbar-right']//li/a")
        this.pay_transfer_btn = page.locator("//*[contains(text(),'PAY & TRANSFER')]")
        this.close_btn = page.getByLabel('Close')
        this.payto = page.locator("(//*[@class='RenderDesktopDropdown---clsTitle---1A7S9']//span)[2]")
        this.pay_DD = page.locator("//*[@role='menuitem']//div/span")
        this.enterbiilcode = page.locator("//*[@placeholder='Enter Biller Code']")
        this.press_enter = page.keyboard
        this.ref1 = page.locator('#ref1')
        this.ref2 = page.locator('#ref2')
        this.amount = page.locator('#amount')
        this.iagree_radio = page.locator("//*[@class='PaymentModal---radioButton---2ORD4']")
        this.pay_btn = page.locator("//*[contains(@class,'btn pull-right')]")
        this.firstamt = page.locator("//*[@class='TransactionSummary---account---zbSlm']//following-sibling::p")
        this.secondamt = page.locator("//*[@class='TransactionSummary---principalAmount---3J_Ga']")
        this.request_btn = page.locator("//button[@class='btn btn-success btn-request-tac']")



    }

    async pay(Bill_code, ref_id, amt) {

        await this.pay_transfer_btn.click()

        if (await this.close_btn.isEnabled()) {

            await this.close_btn.click()
        }

        await this.payto.click()
        const Paylist = await this.pay_DD.all()

        for (let list of Paylist) {

            const value = await list.textContent()
            await console.log(value)

            if (value.trim() === 'JomPAY') {

                await list.scrollIntoViewIfNeeded();
                await list.click({ force: true });
                break

            }


        }


        await this.enterbiilcode.fill(Bill_code)

        await this.press_enter.press("Enter")
        await this.ref1.fill(ref_id)
        await this.ref2.isEnabled()
        await this.amount.fill(amt)
        await this.iagree_radio.click()
        await this.pay_btn.click()
        await this.firstamt.isEnabled()
        const firstamount = await this.firstamt.textContent()
        const secondamount = await this.secondamt.textContent()
        console.log(firstamount)
        console.log(secondamount)

        if(firstamount === secondamount){

            console.log('both the amounts are same')
        }

        await this.request_btn.click()

    




    }





}