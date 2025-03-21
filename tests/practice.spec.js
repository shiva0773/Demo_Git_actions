const {test,expect}= require ('@playwright/test')

test('Reverse string',async({page})=>{

const text = 'shiva'

let rev=''

for(let i =text.length-1;i>=0;i--)
{

rev+=text.charAt(i)


}




rev=rev.substring(0,1).toUpperCase() + rev.substring(1).toLowerCase()
console.log(rev)
})