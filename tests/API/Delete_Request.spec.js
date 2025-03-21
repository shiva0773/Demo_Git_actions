const {test,expect} = require ('@playwright/test')


test ('delete api request',async({request})=>{

const response=await request.delete('https://reqres.in/api/users?page=1&id=7')

expect(response.status()).toBe(204)

})