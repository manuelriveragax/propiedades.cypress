Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://propiedades.gleeze.com/Account/Login",
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

Cypress.Commands.add("loginUi", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

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
