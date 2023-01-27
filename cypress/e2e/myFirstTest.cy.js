const navBarText = Cypress.env("navBarText")

context('My First Test', () => {
//   beforeEach(() => {
//     cy.visit('/commands/actions')
//   })

//   it('has an h1 type on the page', () => {
//     cy.get('h1').should('exist')
//   })

//   it('renders the correct h1 text', () => {
//     cy.get('h1').should('contain.text', 'Actions')
//   })

//   it('renders a paragraph under the h1', () => {
//     cy.get('.container').eq('1').find('p').should('exist')
//   })

//   it('renders a section with the correct elements', () => {
//     cy.get('.container').eq('2').within(() => {
//       cy.get('h4').should('exist')
//       cy.get('p').should('exist')
//     })
//   })

//   it('correctly renders the cypress website link', () => {
//     cy.findByText(navBarText).should('exist')
//   })

  it('types into an email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000)
    console.log('test is finished:');
  })
})
