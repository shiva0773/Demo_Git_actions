

exports.order = class order {

constructor (page){

this.page = page

this.addtocart = page.locator('.btn_primary.btn_inventory')
this.cart = page.locator('.shopping_cart_link')
this.checkout = page.locator('.btn_action.checkout_button')


}

async addtocart() {
    console.log("====================")
    await this.addtocart.click()



}

}