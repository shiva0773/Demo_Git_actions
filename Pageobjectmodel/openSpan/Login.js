
exports.LoginOpenSpan= class LoginOpenSpan{

constructor(page){

this.page = page

this.username = page.locator('#user_name')
this.password = page.locator('#user_pass')
this.sign_btn = page.locator('#login_button')
this.press_enter = page.keyboard
}


async login(user_name,user_pass){
await this.username.fill(user_name)
await this.password.fill(user_pass)
await this.press_enter.press("Enter")
await this.sign_btn.click()

}


} 