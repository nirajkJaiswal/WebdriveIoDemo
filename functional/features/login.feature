Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When User clicks on SignIn link
    When I login with valid username and password
    When I Click on Tshirt link
    When I try to quick view first product
    When I add item to cart and proceed to checkout
    When I Proceed to Payment page


