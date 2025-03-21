
exports.transfer = class transfer {

    constructor(page) {

        this.page = page

        this.pay_transfer_btn = page.locator("//*[contains(text(),'PAY & TRANSFER')]")
        this.close_btn = page.getByLabel('Close')
        this.navigationmenu = page.locator("//*[@class='PayNavigation---desktopcontainer---24ED3']//div")
        this.transferTo = page.locator("//*[contains(text(),'Transfer To')]//following-sibling::div[contains(@class,'hidden-xs ')]//button")
        this.paytoList = page.locator("//*[@role='menuitem']//div/span")
        







    }

    async transfer(accountinfo){

        await this.pay_transfer_btn.click()
        
       if(await this.close_btn.isEnabled()) {

        await this.close_btn.click()
        }

        const headers = await this.navigationmenu.all()
        

        for(let heads of headers){

            const value = await heads.textContent()
            console.log(value)

            if(value.trim()==='TRANSFER'){

                await heads.click({force:true})

                break
            }
        }

        await this.transferTo.click()


        const Tlists = await this.paytoList.all()

        for(let list of Tlists){


            const val = await list.textContent()

            console.log(val)

            if(val.trim().includes(accountinfo)){

                await list.scrollIntoViewIfNeeded();
                await list.click()
                break
            }



        }





    }

}