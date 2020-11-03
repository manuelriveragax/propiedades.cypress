import "./commands";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Cookies.defaults({
  preserve: [
    "__tawkuuid",
    "__RequestVerificationToken",
    ".AspNet.ApplicationCookie",
    "TawkConnectionTime",
    "1P_JAR",
  ],
});
