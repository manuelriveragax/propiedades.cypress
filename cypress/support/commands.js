// Cypress.Commands.add("login", () => {
//   cy.visit("/Account/Login");
//   cy.get("[data-test=email]").type("joe@joe.com");
//   cy.get("[data-test=password]").type("joe{enter}");
//   cy.hash().should("eq", "#/");
// });

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://propiedades.gleeze.com/",
    body: {
      user: {
        email: "juan.sanchezaragon@gmail.com",
        password: "Adm1n$20",
      },
    },
  }).then((resp) => {
    window.localStorage.setItem("jwt", resp.body.user.token);
  });
});
