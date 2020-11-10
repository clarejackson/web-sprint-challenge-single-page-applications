describe('Inputs', () => {
  it('can navigate to the website', () => {
      cy.visit('http://localhost:3001/pizza')
  })

  it('can do some basic math', () => {
        expect(1+1).to.equal(2); //assertions
        expect(1+2).to.not.equal(4);
        expect({}).not.to.equal({}); // === is true (deep equality)
        expect({}).to.eql({}) // == is true
      });

  it('can type a name', () => {
      cy.get('input[name=name]')
      .type('Clare')
      .should('have.value', 'Clare')
  })
})

describe('can check checkboxes and submit', () => {
  it("can select a pizza size", () => {
      cy.get("select")
        .select("12inch")
        .should("have.value", "12inch")
  })

  it("can select multiple toppings", () => {
    cy.get('[type="checkbox"]')
      .check()
});

  it("can submit the form data", () => {
      cy.get("button")
        .click()     
  })
})