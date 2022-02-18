const {Given, When, Then} = require ('@cucumber/cucumber');
const data = require('../src/data')
const value = require('../src/files')


Given(/^url for weatherApp is (.+)$/, (url)=>{
    value.urlPath = url
})

When(/^I make a (.+) request to (.+)$/, (request,path) =>{
    value.path = path
})

Then(/^I try to register a weather stations (.+) API Key (.+)$/, (data,key) => {
   value.key = key
})

Then('I should get error message', () => {
    data.withoutAPIKey()
})

Then(/^I try to register two stations and verify HTTP response code is (.+)$/, (responseCode) => {
    data.registerData1(responseCode)
    data.registerData2(responseCode)

})

Then('I should verify that data is stored successfully in DB and details are same', () => {
    data.verifyData()
})

