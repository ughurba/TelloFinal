const locators = {
  login: {
    emailInput: 'input[placeholder="nümunə@gmail.com"]',
    passwordInput: 'input[placeholder="Şifrənizi daxil edin"]',
  },
  admin: {
    emailInput: 'input[id="email"]',
    passwordInput: 'input[id="password"]',
    signInButton:
      ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.css-1vhaqj4-MuiButtonBase-root-MuiButton-root",
  },
  register: {
    nameInput: 'input[placeholder="Adınızı daxil edin"]',
    surnameInput: 'input[placeholder="Soyadınızı daxil edin"]',
    emailInput: 'input[placeholder="nümunə@gmail.com"]',
    passwordInput: 'input[placeholder="Şifrənizi daxil edin"]',
    registerButton: ".MuiButtonBase-root",
  },
};
describe("auth sehfesin test edek", () => {
  it("logine girek", () => {
    Cypress.LocalStorage.clear();
    cy.visit("/Login");
    cy.get(locators.login.emailInput)
      .type("test@mail.ru")
      .should("have.value", "test@mail.ru");
    cy.get(locators.login.passwordInput)
      .type("Test12345678")
      .should("have.value", "Test12345678");
    cy.get(".MuiButtonBase-root").click();
    cy.url().should("include", "/UserProfile");
  });
  it("register test", () => {
    Cypress.LocalStorage.clear();

    cy.visit("/Register");
    cy.get(locators.register.nameInput)
      .type("test")
      .should("have.value", "test");
    cy.get(locators.register.surnameInput)
      .type("testSurname")
      .should("have.value", "testSurname");
    cy.get(locators.register.emailInput)
      .type("test@mail.ru")
      .should("have.value", "test@mail.ru");
    cy.get(locators.register.passwordInput)
      .type("Test12345678")
      .should("have.value", "Test12345678");
    cy.get(locators.register.registerButton).click();
    cy.contains("Bu e-mail istifadəçi artıq mövcuddur");
  });
});
