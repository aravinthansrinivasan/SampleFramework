@Dashboard
Feature: SalesForce Dashboard 
 
 @Sprint1 @Dashboard @Regression
  Scenario Outline: Verify contacts tab in Dashboard
    Given I am on the Login page of the Sales Force Application
    When I enter valid <Username>
    And I enter valid <Password>
    And I click on the LogIn Button
    Then I will be navigated to the DashBoard Page
    And Contacts tab will be displayed by default

    Examples: 
      | Username                           | Password  |
      | aravinthan.srinivasan@saggezza.com | Arav@1903 |
 
