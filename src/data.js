const supertest = require('supertest');
const value = require('../src/files');


class data{   
    details1 = {
        "external_id" : "DEMO_TEST001",
        "name" : "Team Demo Test Station 001",
        "latitude" : 33.33,
        "lngitude" : -122.43,
        "altitude" : 222
    }

    details2 = {
        "external_id" : "DEMO_TEST002",
        "name" : "Team Demo Test Station 001",
        "latitude" : 44.44,
        "lngitude" : -122.44,
        "altitude" : 111
    }

    errorMessage = {
        cod: 401,
        message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
      }

     async withoutAPIKey(){
        const request = supertest(value.urlPath)
        const path = value.path
        const res = await request
             .get(`${path}?appid=${value.key}`);
         if (JSON.stringify(res.body) == JSON.stringify(this.errorMessage)) {
             console.log(res.body);
         } else {
             console.log("somthing went wrong");
         }       
    }

    async registerData1(responseCode){
        const request = supertest(value.urlPath)
        const path = value.path
        const res = await request
            .post(`${path}?appid=${value.key}`)
            .set({
                'Content-Type': 'application/json',
            })
            .send(this.details1);
        if (res.statusCode == responseCode) {
            console.log("data1 saved successfully");
        }
        else {
            console.log("error in saving data");
            console.log(res.statusCode);
        }
    
    }
    async registerData2(responseCode){
        const request = supertest(value.urlPath)
        const path = value.path
        const res = await request
            .post(`${path}?appid=${value.key}`)
            .set({
                'Content-Type': 'application/json',
            })
            .send(this.details2);
        if (res.statusCode == responseCode) {
            console.log("data2 saved successfully");
        }
        else {
            console.log("error in saving data");
            console.log(res.statusCode);
        }
        
    }

    async verifyData(){
        const request = supertest(value.urlPath)
        const path = value.path
        const res = await request
            .get(`${path}?appid=${value.key}`);
        if (res.data) {
            console.log('stations were successfully stored in DB');
        } else {
            console.log("stations were not stored in DB");
        }       
    }
  
}
module.exports = new data();