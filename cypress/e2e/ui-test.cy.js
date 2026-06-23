describe('SauceDemo E2E Tests', () => {
  beforeEach(() => {
    cy.visit('https://saucedemo.com/')
  })

  it('Login dengan credentials valid', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Login gagal dengan username salah', () => {
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Login gagal dengan password kosong', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })

  it('Add produk ke cart', () => {  
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
  })

  it('Checkout flow complete', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart.html')
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', 'checkout-step-one.html')
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', 'checkout-step-two.html')
  })
})