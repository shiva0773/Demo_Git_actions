
exports.payment = class payment{

constructor(page){


this.page = page

this.bilme = page.locator('#bill_me')
this.creditcard = page.locator('#credit_card')
this.cardtype = page.locator('#card_type')
this.security = page.locator('#security_code')
this.cardnumber = page.locator('#card_number')
this.month = page.locator('#expiry_month')
this.year = page.locator('#expiry_year')
this.submit= page.locator('#submit_button')

}

async billpayment(cardtype,securitycode,cardNumber,mnth,yr){

await this.bilme.check()
await this.creditcard.check()
await this.cardtype.selectOption({value:cardtype})
await this.security.fill(securitycode)
await this.cardnumber.fill(cardNumber)
await this.month.selectOption({value:mnth})
await this.year.selectOption({value:yr})
await this.submit.click()



}



}