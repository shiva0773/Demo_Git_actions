import { faker } from '@faker-js/faker';

exports.register = class register{

constructor(page){

this.page = page

this.signup_login = page.locator("//*[contains(text(),' Signup / Login')]")
this.name=page.locator("//*[@data-qa='signup-name']")
this.email = page.locator("//*[@data-qa='signup-email']")
this.signup_btn = page.locator("//*[@data-qa='signup-button']")

}

async signup (name,mailid){

await this.signup_login.click()
await this.name.fill(faker.internet.username())
await this.email.fill(faker.internet.email())
await this.signup_btn.click()

}





}