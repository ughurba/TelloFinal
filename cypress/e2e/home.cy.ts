const homeLocators = {
  searchInput: "input[type=search]",
  searchList: ".sc-hlnMnd.emJmjo",
};
describe("testing home page", () => {
  it("search test", () => {
    cy.visit("/");
    cy.get(homeLocators.searchInput).type("samsung");
    cy.wait(1000);
    cy.get(homeLocators.searchList).contains("Samsung").click();
    cy.url().should("include", "/FullInfoProduct");
  });
});
