// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Custome Commands

Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('form > .btn').click()
})

Cypress.Commands.add("LoginAPI", () => {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail": "pritesh@yopmail.com","userPassword":"Test@123"}).
    then(function(responce)
    {
    expect(responce.status).to.eq(200)
    Cypress.env('token', responce.body.token);

    })
    })




    


