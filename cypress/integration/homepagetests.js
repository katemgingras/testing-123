/* Check that elements are loaded onto the page */
beforeEach({
    cy.visit('/index.html')
})

describe('Check page content exists and is correct', () => {
    it('Checks the h1 element is about dogs', () => {
        cy.get('h1').should('exist')
            .should('contain', 'Dogs')
    })
})