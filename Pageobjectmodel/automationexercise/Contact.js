import { faker } from '@faker-js/faker';

exports.Contact = class Contact{

constructor(page){

this.page = page

this.contactus_btn = page.locator("//*[@class='fa fa-envelope']")
this.getintouch = page.locator("//*[contains(text(),'Get In Touch')]")
this.name =page.locator("//*[@name='name']")
this.mail= page.locator("//*[@name='email']")
this.subject=page.locator("//*[@name='subject']")
this.message = page.locator('#message')
this.submit_btn = page.locator("//*[@name='submit']")


}


async enter_details(){


await this.contactus_btn.click()
const text=await this.getintouch.textContent()
console.log(text)
await this.name.fill(faker.internet.username())
await this.mail.fill(faker.internet.email())
await this.subject.fill(faker.string.alphanumeric({length:7}))
await this.message.fill(faker.string.alphanumeric({length:50}))


}





}