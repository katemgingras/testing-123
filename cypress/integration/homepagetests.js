/* Check that elements are loaded onto the page */

beforeEach(() => {
    cy.visit('index.html')
})

describe('Check page content exists and is correct', () => {
    it('Checks the h1 element displays correctly', () => {
        cy.get('h1').should('be.visible')
            .should('contain', 'Dogs')
    })
    it('Checks that there is paragraph text', () => {
        cy.get('p').should('be.visible')
            .should('contain', 'This project')
    })
})