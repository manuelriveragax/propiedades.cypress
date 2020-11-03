/// <reference types="Cypress" />

describe("/login", () => {
  beforeEach(() => {
    cy.visit("/Account/Login");
  });

  it("greets with Sign in", () => {
    cy.contains("h1", "Sing In");
  });

  it("links to #/register", () => {
    cy.contains("Need an account?").should(
      "have.attr",
      "href",
      "#/Account/Login"
    );
  });

  it("requires email", () => {
    cy.get("form").contains("Sign in").click();
    cy.get(".error-messages").should("contain", "email cant be blank");
  });

  it("requires password", () => {
    cy.get("[data-test=email]").type("joe@joe.com{enter}");
    cy.get(".error-messages").should("contain", "pw cant be blank");
  });

  it("requires valid username and password", () => {
    cy.get("[data-test=email]").type("joe@joe.com{enter}");
    cy.get("[data-test=password]").type("invalid{enter}");
    cy.get(".error-messages").should("contain", "email or pw is invalid");
  });

  it("navigates to #/ on successful login", () => {
    cy.get("[data-test=email]").type("joe@joe.com{enter}");
    cy.get("[data-test=password]").type("joe#{enter}");
    cy.hash().should("eq", "#/");
  });
});
