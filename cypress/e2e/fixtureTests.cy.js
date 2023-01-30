const token = "abc123"

context('My First Test', () => {
  beforeEach(() => {
    cy.fixture('example').then( function(data) { 
      this.data = data
      cy.log("this", this.data)
    })})

  it('sets a token in local storage', () => {
    cy.window().then((window)=>{
      window.localStorage.setItem('token', token)
    })
  })

  it('gets a token from local storage', () => {
    cy.window().then((window)=>{
      window.localStorage.getItem('token', token)
    })
  })

  it('uses fixture data in a network request', function(){
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log("res:", res)
    }) 
  })

  it('pulls data from a fixture', () => {
    cy.fixture('example').then((data) => { 
      cy.log(data)})
  })

  it('updates fixture data in line', () => {
    cy.fixture('example').then((data) => { 
      data.email = "update@mail.com"
      cy.log("updated:", data)
    })
  })
})