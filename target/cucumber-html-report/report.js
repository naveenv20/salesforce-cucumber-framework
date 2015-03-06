$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resource\\com\\qtpselenium\\app\\salesforce\\Login\\Login.feature");
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
  "duration": 8350479100,
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
  "duration": 832039433,
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
  "duration": 380125021,
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
  "duration": 163940726,
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
  "duration": 10027766545,
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.qtpselenium.app.salesforce.Login.LoginTest.then_login_should_be(LoginTest.java:49)\r\n\tat ✽.Then \"searchtxtfld_identifier\" Text box should present(main\\resource\\com\\qtpselenium\\app\\salesforce\\Login\\Login.feature:14)\r\n",
  "status": "failed"
});
});