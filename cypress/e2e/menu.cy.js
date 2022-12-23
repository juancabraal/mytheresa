/// <reference types="cypress" />

import discoverResponse from "../fixtures/discoverResponse.json";

function assertIsOnCorrectPage(page) {
  cy.url().should("include", page);
}

function addCategory(item, category) {
  return {
    ...item,
    category,
  };
}

const discoverItems = discoverResponse.results;

describe("Menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/wish-list");
    cy.addToWishList([addCategory(discoverItems[1], "discover")]);
  });

  it("navigate to home page when click on logo", () => {
    cy.getByTestId("go-home-button").click();

    assertIsOnCorrectPage("/");
  });

  it("navigate to wish list page when click on the heart", () => {
    cy.getByTestId("go-home-button").click();
    cy.getByTestId("go-wish-list-button").click();

    assertIsOnCorrectPage("wish-list");
  });

  it("should exist a badge on the heart button when there is movie added", () => {
    cy.getByTestId("go-wish-list-button")
      .find(".heart-badge")
      .first()
      .should("be.visible");
  });

  it("should exist a badge with the count of how many movies added to the list", () => {
    cy.getByTestId("go-wish-list-button")
      .get(".heart-badge")
      .first()
      .should("have.text", 1);
  });

  it("should not exist a badge when there is no movie added", () => {
    cy.addToWishList([]);

    cy.getByTestId("go-wish-list-button")
      .get(".heart-badge")
      .should("not.exist");
  });

  it("should change the page language when select one item from language dropdown", () => {
    const dropdownButton = cy
      .getByTestId("language-dropdown-menu")
      .find("button")
      .first();

    dropdownButton.click();
    cy.wait(500);
    cy.getByTestId("language-pt").click();

    dropdownButton.should("have.text", "Português");
  });

  it("Should show short format of language when select it from language dropdown on mobile", () => {
    cy.viewport(425, 768);

    const dropdownButton = cy
      .getByTestId("language-dropdown-menu")
      .find("button")
      .first();

    dropdownButton.click();
    cy.wait(500);
    cy.getByTestId("language-pt").click();

    dropdownButton.should("have.text", "PT");
  });
});
