/// <reference types="cypress" />

context("Viewport", () => {
	beforeEach(() => {
		cy.visit("http://localhost:8080");
	});

	it("Checks the viewport to match desktop", () => {
		cy.viewport("macbook-15");
		cy.get("[data-cy=button-group]").should("be.visible");
		cy.get(".react-multi-carousel-dot-list ").should("not.exist");
	});

	it("Checks the viewport to match tablet", () => {
		cy.viewport(900, 999);
		cy.get("[data-cy=button-group]").should("not.exist");
		cy.get(".react-multi-carousel-dot-list ").should("be.visible");
	});

	it("Checks the viewport to match mobile", () => {
		cy.viewport(600, 480);
		cy.get(".react-multi-carousel-dot-list ").should("be.visible");
	});
});
