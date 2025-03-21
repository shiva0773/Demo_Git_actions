

exports.checkOut= class checkOut{


    constructor(page){

this.page=page
this.firstname = page.locator('#first-name')
this.lastname = page.locator('#last-name')
this.postalcode = page.locator('#postal-code')
this.continue = page.locator('#continue')
    }

    
async checkOut(f_Name,l_Name,postal){

await this.firstname.fill(f_Name)
await this.lastname.fill(l_Name)
await this.postalcode.fill(postal)
await this.continue.click()

}


}