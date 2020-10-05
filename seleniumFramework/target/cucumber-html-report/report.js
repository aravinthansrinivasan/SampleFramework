$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "SalesForce Login",
  "description": "Login Flows of Sales Force Application",
  "id": "salesforce-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify valid user Login in SalesForce",
  "description": "",
  "id": "salesforce-login;verify-valid-user-login-in-salesforce",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint1"
    },
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Login page of the Sales Force Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid username \u003cUsername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the LogIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will be navigated to the DashBoard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "salesforce-login;verify-valid-user-login-in-salesforce;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "salesforce-login;verify-valid-user-login-in-salesforce;;1"
    },
    {
      "cells": [
        "aravinthan.srinivasan@saggezza.com",
        "Arav@1903"
      ],
      "line": 15,
      "id": "salesforce-login;verify-valid-user-login-in-salesforce;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Verify valid user Login in SalesForce",
  "description": "",
  "id": "salesforce-login;verify-valid-user-login-in-salesforce;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Sprint1"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Login page of the Sales Force Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid username aravinthan.srinivasan@saggezza.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password Arav@1903",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the LogIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will be navigated to the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_the_login_page_of_the_sales_force_application()"
});
formatter.result({
  "duration": 111918600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aravinthan.srinivasan@saggezza.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 121957300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arav@1903",
      "offset": 23
    }
  ],
  "location": "LoginSteps.i_enter_valid_password(String)"
});
formatter.result({
  "duration": 66212400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.i_will_be_navigated_to_the_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify invalid user login in SalesForce",
  "description": "",
  "id": "salesforce-login;verify-invalid-user-login-in-salesforce",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Sprint1"
    },
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on the Login page of the Sales Force Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter invalid username\u003cUsername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter invalid password \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the LogIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I will receive the error message \"Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "salesforce-login;verify-invalid-user-login-in-salesforce;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 26,
      "id": "salesforce-login;verify-invalid-user-login-in-salesforce;;1"
    },
    {
      "cells": [
        "testing",
        "test@123"
      ],
      "line": 27,
      "id": "salesforce-login;verify-invalid-user-login-in-salesforce;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Verify invalid user login in SalesForce",
  "description": "",
  "id": "salesforce-login;verify-invalid-user-login-in-salesforce;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Sprint1"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on the Login page of the Sales Force Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter invalid usernametesting",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter invalid password test@123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the LogIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I will receive the error message \"Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_the_login_page_of_the_sales_force_application()"
});
formatter.result({
  "duration": 7117800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 24
    }
  ],
  "location": "LoginSteps.i_enter_invalid_username(String)"
});
formatter.result({
  "duration": 43942900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.i_enter_invalid_password(String)"
});
formatter.result({
  "duration": 41839000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.",
      "offset": 34
    }
  ],
  "location": "LoginSteps.i_will_receive_the_error_message_something(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
});