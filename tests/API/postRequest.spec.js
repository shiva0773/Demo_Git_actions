const { test, expect } = require('@playwright/test')

test('post api request', async ({ request }) => {


    const response = await request.post('https://reqres.in/api/users', {

        data: {


            "name": "morpheus",
            "job": "leader"
        }


    })

    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(201)

    const responsebody = await response.json()

    console.log(responsebody)

    expect(responsebody).toHaveProperty('name', 'morpheus')
    expect(responsebody).toHaveProperty('job', 'leader')


})