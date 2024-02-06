import { homePage } from "../../pages/homePage";
const  homeObj = new homePage()
import testData from '../../fixtures/testData.json'

describe('automating homepage', ()=> {
    before(()=>{

        cy.login(testData.login.email,testData.login.password)
    })

    it('add to cart Flow', ()=>{
        homeObj.clickSearchInputField(testData.Product.productName)
        homeObj.productAddtocCart()
        //homeObj.verifyValidationMessage().should('contain',testData.message.successMessage).and('contain',testData.Product.productName)
        
    })


})