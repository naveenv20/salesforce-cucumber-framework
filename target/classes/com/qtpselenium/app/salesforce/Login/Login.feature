Feature: Login into Salesforce

In order to work 
As a Sales person
I want to Login


Scenario: Logging into Salesforce

Given I go to "http://salesforce.com" on "Mozilla"
And I enter "Username" as "naveen_v201985@rediffmail.com" 
And I enter "Password" as "greffendor8*"
And I click on the "loginbutton"
Then Login should be "success"