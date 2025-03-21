

exports.Login = class Login {

constructor (page){

this.page = page
this.username = page.locator('#user-name')
this.password = page.locator('#password')
this.sign_btn = page.locator('#login-button')

}

async logintoSauce(user,pass) {
    console.log("====================")
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.sign_btn.click()

}
  

    

};



