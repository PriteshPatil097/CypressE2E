/// <reference types="Cypress" />

export class registerPage{

weblocators={
firstName: '#input-firstname',
lastName: '#input-lastname',
email: '#input-email',
phone: '#input-telephone',
password: '#input-password',
confirmPassword: '#input-confirm',
policyCheck: 'input[type="checkbox"]',
continuebtn: '.pull-right > .btn'

}
OpenURL(){
    cy.visit(Cypress.env('URL'))
}

enterFirstName(Fname){
    cy.get(this.weblocators.firstName).type(Fname)
    
}
enterLastName(Lname){
    cy.get(this.weblocators.lastName).type(Lname)
}
enterEmail(email){
    cy.get(this.weblocators.email).type(email)
}
enterTelephone(phone){
    cy.get(this.weblocators.phone).type(phone)
}
enterPassword(password){
cy.get(this.weblocators.password).type(password)
cy.get(this.weblocators.confirmPassword).type(password)

}
enterPolicyCheck(){
cy.get(this.weblocators.policyCheck).click()

}
enterContinuebtn(){
    cy.get(this.weblocators.continuebtn).click()
}
}