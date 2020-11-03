/// <reference types="Cypress" />

describe("Dropdown menu content and url navigation", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  it("Logs in", () => {
    cy.clearCookies();
    cy.visit("/");
    cy.get("#loginLink").click();
    cy.url().should("include", "/Account/Login");

    // Input username and password to login
    cy.get("#Email").type(username);
    cy.get("#Password").type(password);
    cy.get("input[value='Iniciar sesión']").click();

    // Greeting and username should be visible
    cy.contains("Hola").should("contain.text", username);

    // Should redirect to home after log in
    cy.url().should("include", "/");
  });

  it("Administracion content and navigation", () => {
    cy.get(":nth-child(2) > .dropdown-toggle")
      .should("contain.text", "Administración")
      .click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a")
      .should("contain.text", "Configuración")
      .click();
  });
});
