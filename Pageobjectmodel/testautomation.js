import { faker, Faker } from '@faker-js/faker'

exports.testautomation = class testautomation{

constructor(page){

this.page = page

this.name = page.locator('#name')
this.email= page.locator('#email')
this.phone = page.locator('#phone')
this.message = page.locator('#textarea')
this.male = page.locator('#male')
this.female= page.locator('#female')
this.days = page.locator("//*[contains(text(),'Monday')]//preceding-sibling::input")
//this.country = page.locator("//*[@id='country']//option")
this.country = page.getByLabel('Country:')
this.color = page.getByLabel('Colors:')
this.animal = page.getByLabel('animals:')

}

async fileds(){

await this.name.fill(faker.string.alpha({length:8}))
await this.email.fill(faker.internet.email())
await this.phone.fill(faker.phone.number())
await this.message.fill(faker.string.alphanumeric({length:50}))
await this.male.click()
await this.female.click()
await this.days.click()
await this.country.selectOption({value:'india'});
await this.color.selectOption({value:'Red'})
await this.color.selectOption({value:'Blue'})
await this.animal.selectOption({value:'Deer'})
await this.animal.selectOption({value:'Cat'})


}





}