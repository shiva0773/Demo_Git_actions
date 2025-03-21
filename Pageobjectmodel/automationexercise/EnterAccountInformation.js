import { faker } from '@faker-js/faker';

exports.info = class info{

constructor (page){

this.page = page

this.title=page.locator('#id_gender1')
this.title1= page.locator('#id_gender2')
this.password=page.locator('#password')
this.day = page.locator('#days')
this.month = page.locator("//*[@class='form-control' and @id='months']")
this.yr = page.locator('#years')
this.newsletter_Radio = page.locator('#newsletter')
this.specialoffer_radio= page.locator('#optin')
this.first_name = page.locator('#first_name')
this.last_name = page.locator('#last_name')
this.company = page.locator('#company')
this.address = page.locator('#address1')
this.address2 = page.locator('#address2')
this.country = page.locator('#country')
this.state = page.locator('#state')
this.city  = page.locator ('#city')
this.zip = page.locator('#zipcode')
this.mobile = page.locator('#mobile_number')
this.createaccount_btn = page.locator("//button[contains(text(),'Create Account')]")

}




async enterAccount(password,days,month_value,year){

    await this.title1.click()
    await this.title.click()
await this.password.fill(password)
await this.day.selectOption({value:days})
await this.yr.selectOption({value:year})
await this.month.selectOption(month_value)
await this.newsletter_Radio.check()
await this.specialoffer_radio.check()
}

async addressinfo(f_name,l_name,company,add,add1,conty,state,city,code,num){



await this.first_name.fill(f_name)
await this.last_name.fill(l_name)
await this.company.fill(company)
await this.address.fill(add)
await this.address2.fill(add1)
await this.country.selectOption(conty)
await this.city.fill(city)
await this.state.fill(state)
await this.zip.fill(code)
await this.mobile.fill(num)


}


}