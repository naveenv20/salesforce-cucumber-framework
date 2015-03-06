$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\qtpselenium\\app\\salesforce\\Login\\Login.feature");
formatter.feature({
  "id": "login-into-salesforce",
  "description": "\r\nIn order to work \r\nAs a Sales person\r\nI want to Login",
  "name": "Login into Salesforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "login-into-salesforce;logging-into-salesforce",
  "description": "",
  "name": "Logging into Salesforce",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Browser\"",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I enter \"Username\" as \"naveen_v201985@rediffmail.com\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I enter \"Password\" as \"greffendor8*\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I click on the \"loginbutton\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "Login should be \"success\"",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Browser",
      "offset": 18
    }
  ],
  "location": "LoginTest.I_go_to_salesforce(String,String)"
});
formatter.result({
  "duration": 19550152980,
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
  "duration": 309532,
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
  "duration": 305017,
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
  "duration": 197460,
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
  "duration": 186787,
  "status": "passed"
});
});