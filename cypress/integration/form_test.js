describe('Inputs', () => {
  it('can navigate to the website', () => {
      cy.visit('http://localhost:3001/pizza')
      cy.url().should('include', 'http://localhost:3001/pizza')
  })

  it('should do some basic math', () => {
        expect(1+1).to.equal(2); //assertions
        expect(1+2).to.not.equal(4);
        expect({}).not.to.equal({}); // === is true (deep equality)
        expect({}).to.eql({}) // == is true
      });

  it('can type a name', () => {
      cy.get('input[name=name]')
      .type('Bill')
      .should('have.value', 'Bill')
  })
})

describe('Checkboxes and submit', () => {
  it("can select a pizza size", () => {
      cy.get("select")
        .select("12inch")
        .should("have.value", "12inch")
  })

  it('can select toppings', () => {
        cy.get(':nth-child(1) > :nth-child(1) > input').check();
        cy.get(':nth-child(1) > :nth-child(4) > input').check();
        cy.get('.toppings > :nth-child(2) > :nth-child(1) > input').check();
      });

  it("can submit the form data", () => {
      cy.get("button")
        .click()     
  })
})