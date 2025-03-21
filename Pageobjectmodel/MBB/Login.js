const { allowedNodeEnvironmentFlags } = require("process")


exports.Login = class Login{

constructor(page){

this.page =page

this.user = page.locator('#username')
this.login_btn = page.locator("//*[contains(text(),'LOGIN')]")
this.yes_btn = page.locator("//*[contains(text(),'YES')]")
this.pass = page.locator('#my-password-input')
this.Login= page.locator("//*[@class='btn btn-success btn btn-default']")
this.notification = page.locator("//*[@class='notification-title']")

}

async Login_Mbb(username,password){

await this.user.fill(username)
await this.login_btn.click()
await this.yes_btn.click()
await this.pass.fill(password)
await this.Login.isEnabled()
await this.Login.click()

if(await this.notification.isEnabled()){

    await this.notification.click()

}


}


}