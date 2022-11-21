Feature: Delete Task

  Scenario: Verify user deletes task from TaskTracker application
    Given the Task Tracker page is open
    When the user clicks on "trash" button
    And the user clicks "yes" button
    And verify deleted pop is shown
    Then verify task deleted succesfully