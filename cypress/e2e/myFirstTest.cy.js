const navBarText = Cypress.env("navBarText")

context('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has an h1 type on the page', () => {
    cy.visit('/commands/actions')
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.visit('/commands/actions')
    cy.get('h1').should('contain.text', 'Actions')
  })

  it('renders a paragraph under the h1', () => {
    cy.visit('/commands/actions')
    cy.get('.container').eq('1').find('p').should('exist')
  })

  it('renders a section with the correct elements', () => {
    cy.visit('/commands/actions')
    cy.get('.container').eq('2').within(() => {
      cy.get('h4').should('exist')
      cy.get('p').should('exist')
    })
  })

  it('correctly renders the cypress website link', () => {
    cy.visit('/commands/actions')
    cy.findByText(navBarText).should('exist')
  })

  it('types into an email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(1000).then(() => { console.log('test is finished')
      cy.log('test is finished')
      fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json())
      .then((data) => {console.log('data:', data);})
    })
  })

  it('shows an active class for the current page', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq('2').should('have.class', 'active')
  })

  it('should not have an active class on inactive pages', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu')
    .find('li').eq('0')
    .should('not.have.class', 'active')
    .find('a')
    .should('have.attr', 'href', '/commands/querying')
  })

  it('links to the action page correctly', () => {
    cy.visit('/')
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', '/commands/actions')
  })

  it('links to the action page correctly', () => {
    cy.visit('/')
    cy.findAllByText('Actions').first().click({ force: true})
    cy.url().should('include', '/commands/actions')
  })

  it('lets you type in an input field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })


  it('lets you clear an input field', () => {
    cy.visit('/commands/actions')
    cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
    .clear().should('have.value', '')
  })

  it('lets you check a checkbox', () => {
    cy.visit('/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  })
})
