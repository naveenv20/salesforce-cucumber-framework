$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\qtpselenium\\app\\salesforce\\Login\\Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into Salesforce",
  "description": "\r\nIn order to work \r\nAs a Sales person\r\nI want to Login",
  "id": "login-into-salesforce",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Logging into Salesforce",
  "description": "",
  "id": "login-into-salesforce;logging-into-salesforce",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I go to \"http://salesforce.com\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Username\" as \"naveen_v201985@rediffmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Password\" as \"greffendor8*\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the \"loginbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://salesforce.com",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 36
    }
  ],
  "location": "LoginTest.I_go_to_salesforce(String,String)"
});
formatter.result({
  "duration": 892793644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 9
    },
    {
      "val": "naveen_v201985@rediffmail.com",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 117819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 9
    },
    {
      "val": "greffendor8*",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 151892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 16
    }
  ],
  "location": "LoginTest.I_clickonbutton(String)"
});
formatter.result({
  "duration": 120692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.then_login_should_be(String)"
});
formatter.result({
  "duration": 112482,
  "status": "passed"
});
});