/// <reference types="cypress" />

import MovieResponse from "../fixtures/detail/detailResponse.json";
import { results as recommendationsItems } from "../fixtures/detail/recommendationsResponse.json";

describe("Detail Page", () => {
  beforeEach(() => {
    cy.intercept("GET", `/3/movie/${MovieResponse.id}*`, {
      fixture: "detail/detailResponse.json",
    });
    cy.intercept("GET", `/3/movie/${MovieResponse.id}/credits*`, {
      fixture: "detail/creditsResponse.json",
    });
    cy.intercept("GET", `/3/movie/${MovieResponse.id}/reviews`, {
      fixture: "detail/reviewsResponse.json",
    });
    cy.intercept("GET", `/3/movie/${MovieResponse.id}/recommendations`, {
      fixture: "detail/recommendationsResponse.json",
    });
    cy.visit(`http://localhost:8080/detail/trending/${MovieResponse.id}`);
    cy.viewport(1024, 768);
    cy.addToWishList([]);
  });

  it("should add movie to the wisth list when clicked", () => {
    cy.getByTestId("wish-button-toggle").click();

    cy.getByTestId("go-wish-list-button")
      .get(".heart-badge")
      .first()
      .should("have.text", 1);
  });

  it("should be able to remove movie from the wisth list when clicked", () => {
    cy.getByTestId("wish-button-toggle").click();
    cy.wait(1000);
    cy.getByTestId("wish-button-toggle").click();

    cy.getByTestId("go-wish-list-button")
      .get(".heart-badge")
      .should("not.exist");
  });

  it("should close sinopse accordion when clicked", () => {
    const testId = "sinopse-accordion";
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("not.be.visible");
  });

  it("should close creators accordion when clicked", () => {
    const testId = "creators-accordion";
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("not.be.visible");
  });

  it("should close crew accordion when clicked", () => {
    const testId = "crew-accordion";
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("not.be.visible");
  });

  it("should close reviewers accordion when clicked", () => {
    const testId = "reviewers-accordion";
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("not.be.visible");
  });

  it("should reopen sinopse accordion when clicked", () => {
    const testId = "sinopse-accordion";
    cy.getByTestId(testId).click();
    cy.wait(500);
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("be.visible");
  });

  it("should reopen creators accordion when clicked", () => {
    const testId = "creators-accordion";
    cy.getByTestId(testId).click();
    cy.wait(500);
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("be.visible");
  });

  it("should reopen crew accordion when clicked", () => {
    const testId = "crew-accordion";
    cy.getByTestId(testId).click();
    cy.wait(500);
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("be.visible");
  });

  it("should reopen reviewers accordion when clicked", () => {
    const testId = "reviewers-accordion";
    cy.getByTestId(testId).click();
    cy.wait(500);
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("be.visible");
  });

  it("should reopen reviewers accordion when clicked", () => {
    const testId = "reviewers-accordion";
    cy.getByTestId(testId).click();
    cy.wait(500);
    cy.getByTestId(testId).click();

    cy.getByTestId(testId)
      .parent()
      .find(".accordion-content")
      .should("be.visible");
  });

  it("should change movie when click in one of the recommendation list", () => {
    cy.getByTestId("movie-trending-0").click();

    cy.shouldBeOnCorrectPage(
      `trending/${recommendationsItems[0].id}`,
      recommendationsItems[0].title
    );
  });
});
