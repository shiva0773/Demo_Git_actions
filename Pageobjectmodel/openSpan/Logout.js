
exports.logout = class logout{

constructor(page){

this.page = page

this.home = page.locator("(//*[contains(text(),'Home')])[1]")
this.profileimg = page.locator("(//*[@id='user_information_account']//li/a)[1]")
this.time = page.waitForTimeout(2000)
this.signout = page.locator("//*[contains(text(),'Sign Out')]")

}

async signoff (){

   // await this.home.click()
    await this.time
    await this.profileimg.click()
    await this.signout.click()


}



}