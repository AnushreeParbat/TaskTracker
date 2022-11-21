import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep(/^the Task Tracker page is open$/, () => {
  cy.visit("http://localhost:3000/");
});
defineStep(/^user clicks on "plus" button$/, () => {
  cy.get('[class = "fas fa-plus"]').click();
});
defineStep(/^the user types in the "Task" text field$/, () => {
  cy.get('input[placeholder="Add Task"]')
    .type("Presentation")
    .should("have.value", "Presentation");
});
defineStep(/^the user types in the "Day & Time" text field$/, () => {
  cy.get('input[placeholder="Add Day & Time"]')
    .type("21th Nov 1pm")
    .should("have.value", "21th Nov 1pm");
});
defineStep(/^the user clicks the "Save Task" button$/, () => {
  cy.contains("Save Task").click();
});
defineStep(/^verify Success pop is shown$/, () => {
  cy.get(".swal-modal").contains("Success").should("be.visible");
  cy.get(".swal-button").should("be.visible").click();
});
defineStep(/^verify task added succesfully$/, () => {
  cy.contains("Presentation").should("be.visible");
});

defineStep(/^the user clicks on "trash" button$/, () => {
  cy.wait(1000);
  cy.get(".fas.fa-trash").first().click();
});
defineStep(/^the user clicks "yes" button ?$/, () => {
  cy.wait(1000);
  cy.contains("Yes").click();
});

defineStep(/^verify deleted pop is shown$/, () => {
  cy.contains("Deleted!").should("be.visible");
  cy.get(".swal2-actions").should("be.visible").click();
});

defineStep(/^verify task deleted succesfully$/, () => {
  cy.contains("Doctors Appointment").should("not.exist");
});
