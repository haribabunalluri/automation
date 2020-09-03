$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with invalid user name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid user name \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error"
      ]
    },
    {
      "cells": [
        "test",
        "sample",
        "ksalfjd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with invalid user name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid user name \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdef.loginStedDef.iEnterInvalidUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"sample\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.loginStedDef.iEnterThePasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.loginStedDef.iLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message \"ksalfjd\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdef.loginStedDef.iShouldGetErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});