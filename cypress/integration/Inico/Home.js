/// <reference types="Cypress" />

describe("Home Page", () => {
  it("Should load home page", () => {
    cy.visit("http://propiedades.gleeze.com/");
  });
});
