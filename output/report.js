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
  "name": "I go to \"URL\" on \"Browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Username_identifier\" as \"Username\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Password_identifier\" as \"Password\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the \"Login_Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"searchtxtfld_identifier\" Text box should present",
  "keyword": "Then "
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
  "duration": 8063294029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username_identifier",
      "offset": 9
    },
    {
      "val": "Username",
      "offset": 34
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 948616887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password_identifier",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 34
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 445011057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login_Button",
      "offset": 16
    }
  ],
  "location": "LoginTest.I_clickonbutton(String)"
});
formatter.result({
  "duration": 130220364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchtxtfld_identifier",
      "offset": 1
    }
  ],
  "location": "LoginTest.then_login_should_be(String)"
});
formatter.result({
  "duration": 10033037661,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat com.qtpselenium.app.salesforce.Login.LoginTest.then_login_should_be(LoginTest.java:48)\r\n\tat ✽.Then \"searchtxtfld_identifier\" Text box should present(com\\qtpselenium\\app\\salesforce\\Login\\Login.feature:14)\r\n",
  "status": "failed"
});
});