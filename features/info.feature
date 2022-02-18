Feature: weatherApp

    Scenario: API Testing
        Given url for weatherApp is http://api.openweathermap.org/data/3.0/
        When I make a POST request to stations
        Then I try to register a weather stations without API Key ""
        And I should get error message
    
    Scenario: API Testing 2
        Given url for weatherApp is http://api.openweathermap.org/data/3.0/
        When I make a POST request to stations
        Then I try to register a weather stations With API Key Enter_Api_Key
        And I try to register two stations and verify HTTP response code is 201
    
    Scenario: API Testing 3
        Given url for weatherApp is http://api.openweathermap.org/data/3.0/
        When I make a POST request to stations
        Then I try to register a weather stations With API Key Enter_Api_Key
        And I should verify that data is stored successfully in DB and details are same
    


