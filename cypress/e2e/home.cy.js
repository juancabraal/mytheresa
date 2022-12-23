/// <reference types="cypress" />

import { results as discoverItems } from "../fixtures/discoverResponse.json";
import { results as topRatedItems } from "../fixtures/topRatedResponse.json";
import { results as trendingItems } from "../fixtures/trendingResponse.json";

describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/3/movie/popular*", {
      fixture: "trendingResponse.json",
    });
    cy.intercept("GET", "/3/movie/top_rated*", {
      fixture: "topRatedResponse.json",
    });
    cy.intercept("GET", "/3/discover/movie*", {
      fixture: "discoverResponse.json",
    });
    cy.visit("http://localhost:8080/");
    cy.viewport(1024, 768);
  });

  it("navigate to detail page with category discover", () => {
    cy.getByTestId("movie-discover-0").click();

    cy.shouldBeOnCorrectPage(
      `discover/${discoverItems[0].id}`,
      discoverItems[0].title
    );
  });

  it("navigate to detail page with category trending", () => {
    cy.getByTestId("movie-trending-0").click();

    cy.shouldBeOnCorrectPage(
      `trending/${trendingItems[0].id}`,
      trendingItems[0].title
    );
  });

  it("navigate to detail page with category top-rated", () => {
    cy.getByTestId("movie-top-rated-0").click();

    cy.shouldBeOnCorrectPage(
      `top-rated/${topRatedItems[0].id}`,
      topRatedItems[0].title
    );
  });

  it("should scroll to the next discover slide when drag the slide to the left", () => {
    const testId = "movie-discover-0";

    cy.getCurrentSlidenByTestId(testId).swipeSlide("left");
    cy.wait(500);

    cy.getByTestId(testId).should("not.be.visible");
  });

  it("should scroll to the prev discover slide when drag the slide to the right", () => {
    const testIdFirstSlide = "movie-discover-0";
    const testIdSecondSlide = "movie-discover-1";

    cy.getCurrentSlidenByTestId(testIdFirstSlide).swipeSlide("left");
    cy.wait(500);
    cy.getCurrentSlidenByTestId(testIdSecondSlide).swipeSlide("right");
    cy.wait(500);

    cy.getByTestId(testIdFirstSlide).should("be.visible");
  });

  it("should scroll to the next trending slide when clicked the navigation arrow", () => {
    const testId = "movie-trending-0";

    cy.getSliderNavigationBySlideTestId(testId, "next").click();
    cy.wait(1000);

    cy.getByTestId(testId).should("not.be.visible");
  });

  it("should scroll to the prev trending slide when clicked the navigation arrow", () => {
    const testId = "movie-trending-0";

    cy.getSliderNavigationBySlideTestId(testId, "next").click();
    cy.getSliderNavigationBySlideTestId(testId, "prev").click();
    cy.wait(1000);

    cy.getByTestId(testId).should("be.visible");
  });

  it("should scroll to the next top rated slide when clicked the navigation arrow", () => {
    const testId = "movie-top-rated-0";

    cy.getSliderNavigationBySlideTestId(testId, "next").click();
    cy.wait(1000);

    cy.getByTestId(testId).should("not.be.visible");
  });

  it("should scroll to the prev top rated slide when clicked the navigation arrow", () => {
    const testId = "movie-top-rated-0";

    cy.getSliderNavigationBySlideTestId(testId, "next").click();
    cy.getSliderNavigationBySlideTestId(testId, "prev").click();
    cy.wait(1000);

    cy.getByTestId(testId).should("be.visible");
  });

  it("should have only 2 slides items on mobile", () => {
    cy.viewport(425, 768);
    cy.getSliderByCategoryId("trending")
      .find(".swiper-slide:visible")
      .should("have.length", 2);
  });

  it("should have only 3 slides items on tablet", () => {
    cy.viewport(768, 974);
    cy.getSliderByCategoryId("trending")
      .find(".swiper-slide:visible")
      .should("have.length", 3);
  });
});
