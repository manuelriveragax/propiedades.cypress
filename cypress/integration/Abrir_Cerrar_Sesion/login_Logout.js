/// <reference types="Cypress" />

describe("Login widget testing", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  it("should login successfully", () => {
    cy.visit("/");
    cy.get("[id=loginLink]").click();
    cy.url().should("include", "/Account/Login");

    // Input username and password to login
    cy.get("[id=Email]").type(username);
    cy.get("[id=Password]").type(password);
    cy.get("[type=submit]").click();

    // Greeting and username should be visible
    cy.contains("Hola").should("contain.text", username);

    // Should redirect to home after log in
    cy.url().should("include", "/");
  });
});

describe("Logout widget testing", () => {
  it("should logout successfulyl", () => {
    cy.contains("Cerrar").click();

    // Login button should be visible after logging out
    cy.get("[id=loginLink]").should("be.visible");

    //  Should redirect to home after log out
    cy.url().should("include", "/");
  });
});
