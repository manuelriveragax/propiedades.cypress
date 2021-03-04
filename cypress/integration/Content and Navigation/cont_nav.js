/// <reference types="Cypress" />

describe("Dropdown menu content and url navigation", () => {
  it("Logs in", () => {
    cy.loginUi();
  });

  // it("Administracion -> Configuracion", () => {
  //   cy.get(":nth-child(2) > .dropdown-toggle")
  //     .should("contain.text", "Administración")
  //     .click();
  //   cy.get(".open > .dropdown-menu > :nth-child(1) > a")
  //     .should("contain.text", "Configuración")
  //     .click();
  //   cy.url().should("include", "/Configuracions/Index");
  //   cy.contains("+ Configuraciones").should("be.visible");
  // });

  // it("Administracion -> Sucursales", () => {
  //   cy.get(":nth-child(2) > .dropdown-toggle")
  //     .should("contain.text", "Administración")
  //     .click();
  //   cy.contains("Sucursales").should("be.visible").click();
  //   cy.url().should("include", "/Sucursales/Index");
  //   cy.contains("+ Sucursales").should("be.visible");
  // });

  // it("Administracion -> Regiones", () => {
  //   cy.get(":nth-child(2) > .dropdown-toggle")
  //     .should("contain.text", "Administración")
  //     .click();
  //   cy.contains("Regiones").should("be.visible").click();
  //   cy.url().should("include", "/Regiones/Index");
  //   cy.contains("+ Regiones").should("be.visible");
  // });

  // it("Administracion -> Zonas", () => {
  //   cy.get(":nth-child(2) > .dropdown-toggle")
  //     .should("contain.text", "Administración")
  //     .click();
  //   cy.contains("Zonas").should("be.visible").click();
  //   cy.url().should("include", "/Zonas/Index");
  //   cy.contains("+ Zonas").should("be.visible");
  // });

  it("Administracion -> Roles", () => {
    cy.get(":nth-child(2) > .dropdown-toggle")
      .should("contain.text", "Administración")
      .click();
    cy.contains("Roles").should("be.visible").click();
    cy.url().should("include", "/AspNetRoles/Index");
    cy.contains("Agregar").should("be.visible");
  });

  it("Administracion -> Usuarios x Rol", () => {
    cy.get(":nth-child(2) > .dropdown-toggle")
      .should("contain.text", "Administración")
      .click();
    cy.contains("Usuarios x Rol").should("be.visible").click();
    cy.url().should("include", "/AspNetUserRoles/Index");
    cy.contains("Agregar").should("be.visible");
  });
});
