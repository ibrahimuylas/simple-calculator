describe("Simple Calculator", () => {
  it("Makes a calculation with correct inputs", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="key-7"]').click();
    cy.get('[data-testid="key-*"]').click();
    cy.get('[data-testid="key-8"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "56");

    cy.get('[data-testid="key-AC"]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "");
  });

  it("Makes multiple calculations with correct inputs", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="key-7"]').click();
    cy.get('[data-testid="key-+"]').click();
    cy.get('[data-testid="key-8"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "15");

    cy.get('[data-testid="key--"]').click();
    cy.get('[data-testid="key-8"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "7");

    cy.get('[data-testid="key-*"]').click();
    cy.get('[data-testid="key-8"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "56");

    cy.get('[data-testid="key-/"]').click();
    cy.get('[data-testid="key-4"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "14");

    cy.get('[data-testid="key-AC"]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "");
  });

  it("Shows ERROR message on output when inputs are incorrect", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="key-."]').click();
    cy.get('[data-testid="key-+"]').click();
    cy.get('[data-testid="key-8"]').click();
    cy.get('[data-testid="key-="]').click();
    cy.get('[data-testid="calculator-output"]').should("have.value", "ERROR");
  });
});
