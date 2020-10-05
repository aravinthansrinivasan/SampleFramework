@Login
Feature: SalesForce Login
  Login Flows of Sales Force Application

  @Sprint1 @Login @Regression
  Scenario Outline: Verify valid user Login in SalesForce
    Given I am on the Login page of the Sales Force Application
    When I enter valid username <Username>
    And I enter valid password <Password>
    And I click on the LogIn Button
    Then I will be navigated to the DashBoard Page

    Examples: 
      | Username                           | Password  |
      | aravinthan.srinivasan@saggezza.com | Arav@1903 |

  @Sprint1 @Login @Regression
  Scenario Outline: Verify invalid user login in SalesForce
    Given I am on the Login page of the Sales Force Application
    When I enter invalid username<Username>
    And I enter invalid password <Password>
    And I click on the LogIn Button
    Then I will receive the error message "Please check your username and password. If you still can't log in, contact your Salesforce administrator."

    Examples: 
      | Username | Password |
      | testing  | test@123 |
