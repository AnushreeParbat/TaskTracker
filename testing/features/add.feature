Feature: Add Task

  Scenario: Verify user adds task in TaskTracker application
    Given the Task Tracker page is open
    When user clicks on "plus" button
    And the user types in the "Task" text field
    And the user types in the "Day & Time" text field
    And the user clicks the "Save Task" button
    Then verify Success pop is shown
    And verify task added succesfully



