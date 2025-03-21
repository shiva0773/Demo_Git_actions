const { expect } = require("@playwright/test")

exports.placeOrder = class placeOrder {

    constructor(page) {

        this.page = page
        this.selectprod = page.locator("//*[contains(text(),'Products')]")
        this.beverages = page.locator('#my-beverages-table')
        this.list = page.locator("//*[contains(text(),'Chang')]")
        this.lists = page.locator("//*[@class='product_list sortable']//tr/td/a")
        this.home = page.locator('#home')
        this.order = page.locator('#login_button')
        this.editorder = page.locator("//*[@name='edit_your_cart']")
        this.next_btn = page.locator("(//*[@class='next action-button'])[1]")
        this.scroll = page.mouse
    }


    async AddtoCart(product) {

        await this.selectprod.click()
        await this.beverages.click()


        const prod_list = await this.lists.all()
        console.log(prod_list.length)

        for (let list of prod_list) {

            const value = await list.textContent()
             console.log(value)

            if (value.includes(product)) {

                await list.click({ force: true })
                break
            }

        }

        //await this.list.click()
      
        await this.order.click();
       
        await this.editorder.click();
        await this.scroll.down();
        await this.scroll.down();

        //await this.next_btn.click()








    }

}


