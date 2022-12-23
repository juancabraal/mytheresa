/// <reference types="cypress" />

import { results as discoverItems } from "../fixtures/discoverResponse.json";
import { results as topRatedItems } from "../fixtures/topRatedResponse.json";
import { results as trendingItems } from "../fixtures/trendingResponse.json";

function addCategory(item, category) {
  return {
    ...item,
    category,
  };
}

describe("Wish Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/wish-list");
    cy.addToWishList([
      addCategory(discoverItems[1], "discover"),
      addCategory(trendingItems[0], "trending"),
      addCategory(topRatedItems[0], "top-rated"),
    ]);
  });

  it("navigate to detail page with category discover", () => {
    cy.getByTestId("movie-discover-0").click();

    cy.shouldBeOnCorrectPage(
      `discover/${discoverItems[1].id}`,
      discoverItems[1].title
    );
  });

  it("navigate to detail page with category trending", () => {
    cy.getByTestId("movie-trending-1").click();

    cy.shouldBeOnCorrectPage(
      `trending/${trendingItems[0].id}`,
      trendingItems[0].title
    );
  });

  it("navigate to detail page with category top-rated", () => {
    cy.getByTestId("movie-top-rated-2").click();

    cy.shouldBeOnCorrectPage(
      `top-rated/${topRatedItems[0].id}`,
      topRatedItems[0].title
    );
  });
});
