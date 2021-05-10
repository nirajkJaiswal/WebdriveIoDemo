Feature: The Internet Guinea Pig Website

    Scenario Outline: As a user, I can log into the secure area

        Given I am on the login page
        When User clicks on SignIn link
        When I provide email id to create account
        When I enter all mandatory fields & submit registraion form
        Then I should see my name on homepage
        When I logout from portal
        Then I can see landing page

        