Feature: Login into Salesforce

In order to work 
As a Sales person
I want to Login


Scenario: Logging into Salesforce

Given I go to "URL" on "Browser"
And I enter "Username_identifier" as "Username" 
And I enter "Password_identifier" as "Password"
And I click on the "Login_Button"
Then "searchtxtfld_identifier" Text box should present