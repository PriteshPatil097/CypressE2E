
describe('JWT Sesstion', ()=> {

    it('is logged in through locat storage', ()=>{
        cy.LoginAPI().then(function(){
cy.visit("https://rahulshettyacademy.com/client",{

onBeforeLoad: function(window){
    window.localStorage.setItem('token', Cypress.env('token'))
    cy.get(':nth-child(1) > .card > .card-body > .w-10').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
    cy.get('[placeholder="Select Country"]').type('Ind')

    cy.get('.ta-results button').each(($el, index, $list) => {
    if($el.text() == " India") {
        cy.wrap($el).click()
    }
    })
    cy.get('.action__submit').click();
   // cy.wait(2000)
    cy.get('#htmlData > tbody > tr:nth-child(6) > td > table > tbody > tr:nth-child(4) > button').click();

}

})


        })
       
    })

})

