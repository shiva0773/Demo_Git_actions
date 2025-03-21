
exports.billingAdd = class billingAdd{

constructor(page){

this.page = page

this.firstname = page.locator('#bfirst_name')
this.lastname = page.locator('#blast_name')
this.companyname = page.locator('#bcompany_name')
this.streetaddress = page.locator('#bstreet_address')
this.zipcode = page.locator('#bzip_code')
this.areacode = page.locator('#barea_code')
this.phone = page.locator('#bprimary_phone')
this.shipto= page.locator('#ship_to_bill')
this.clicknext = page.locator('#next2_button')

}

async enterAddress (f_name,l_name,compname,streetadd,zip,areaC,phonenum){


    await this.firstname.fill(f_name)
    await this.lastname.fill(l_name)
    await this.companyname.fill(compname)
    await this.streetaddress.fill(streetadd)
    await this.zipcode.fill(zip)
    await this.areacode.fill(areaC)
    await this.phone.fill(phonenum)
    await this.shipto.click()
    await this.clicknext.click()
}



}