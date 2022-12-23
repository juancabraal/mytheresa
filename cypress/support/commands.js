Cypress.Commands.add("getByTestId", (testId, options) =>
  cy.get(`[data-testid="${testId}"]`, options)
);

Cypress.Commands.add(
  "getSliderNavigationBySlideTestId",
  (testId, arrowDirection, options) =>
    cy
      .get(`[data-testid="${testId}"]`, options)
      .parent()
      .parent()
      .parent()
      .find(`.swiper-button-${arrowDirection}`)
);

Cypress.Commands.add("getCurrentSlidenByTestId", (testId, options) =>
  cy.get(`[data-testid="${testId}"]`, options).parent()
);

Cypress.Commands.add("moveSlide", (from, to, options) =>
  cy.get(`[data-testid="${testId}"]`, options).parent()
);

Cypress.Commands.add(
  "swipeSlide",
  { prevSubject: true },
  (subject, direction) =>
    cy
      .wrap(subject)
      .trigger("pointerdown", { which: 1 })
      .trigger("pointermove", direction)
      .trigger("pointerup", { force: true })
);

Cypress.Commands.add("getSliderByCategoryId", (id, options) =>
  cy.get(`#${id}`, options).find(".swiper").first()
);

Cypress.Commands.add("addToWishList", (items) =>
  window.localStorage.setItem("mytheresaWishList", JSON.stringify(items))
);

Cypress.Commands.add("shouldBeOnCorrectPage", (path, title) => {
  cy.url().should("include", `/detail/${path}`);
  cy.wait(1000);
  cy.get(".movie-content .title").contains(title);
});
