const {test,expect} = require('@playwright/test')


test('Check API Request Time',async({request})=>{

const starttime =Date.now()
    const response=await request.get('https://reqres.in/api/users?page=1')
    const endtime = Date.now()

    console.log(`Responsetime : ${endtime-starttime}ms`)

    expect(endtime - starttime).toBeLessThan(500)




})