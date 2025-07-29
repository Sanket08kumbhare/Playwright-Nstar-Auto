 
Feature: Login functionality

  Background: User tries to log in with valid credentials
    Given User navigate to the login page
    When User enter the email 
    And User enter the password
    And User click the login button
    When I navigate to the application and verify the code
    Then I should see the success message
    

Scenario: User Login to the Dashboard page
When user click on login button it will re-direct to the Dashboard page 
  
  @regression
Scenario: User can add new Organization
    Given User can re-direct to the oragization page
    Then User can add new Orgaization and mentioned all the details for the page
    Then User can click on submit button
    Then User can verify the Orgaization management list page

@regression
Scenario: User is able to add a new Project
Given the user navigates to the Projects page
When the user clicks on the "Add Project" button
And the user enters the project details
Then the newly added project should be visible in the Project Management list  

@smoke
Scenario: User can add a Test after creating a new Project
Given the user clicks on Total Test count to start creating a new Test
When the user is redirected to the Test Management page and selects "Add Test" button
Then the user enters all essential and mandatory details
And the user submits the Test after filling in the data
And the user verifies that the Test appears in the Test Management list page

@sanity
  Scenario: After you create a new test, fill in the Test Master details
    Given the user creates a new test and clicks on the Total Observation count
    Then the user is redirected to the Test Masters page and fills in the Execute Summary
    And the user uploads or adds items in the Checklist
    And the user uploads a CSV file in the Resource List
    And the user uploads a CSV file in the Walkthrough Summary
    And the user enters data in Business Logic

@observation
Scenario: After adding Test user can add Observation successfully without any error
Given the user adds a new Observation and saves it

@checklist
Scenario: Automatically create a new checklist upon redirecting to the dashboard page
Given the user navigates to the Master module and clicks on the "Checklist" sub-module
Then the user should first clear any existing content before adding a new checklist
Then click on the "Add Test Type" button to add a new checklist and complete the form
Then verify that the checklist is successfully added
Then the user can import a checklist using the "Import CSV File" option, ensuring the file is uploaded correctly

   

   
