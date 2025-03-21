const {test,expect} = require('@playwright/test')


test('get api request',async({request})=>{

const response=await request.get('https://reqres.in/api/users/2')

console.log(response)

expect(response.ok()).toBeTruthy()

expect(response.status()).toBe(200)

const responsebody=await response.json()

console.log(responsebody)

expect(responsebody.data).toHaveProperty('email', 'janet.weaver@reqres.in')
expect(responsebody.data).toHaveProperty('first_name', 'Janet')
expect(responsebody.data).toHaveProperty( 'last_name', 'Weaver')




})