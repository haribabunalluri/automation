Feature: Login scenarios

  Scenario Outline: login with invalid user name
    When I enter invalid user name "<username>"
    And I enter the password as "<password>"
    And I Login
    Then I should get error message "<error>"
    Examples:
      | username | password | error   |
      | test     | sample   | ksalfjd |


