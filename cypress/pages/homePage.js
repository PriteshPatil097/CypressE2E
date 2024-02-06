export class homePage{
    weblocators = {
        searchInputField : '.form-control.input-lg',
        click_search: '.input-group-btn > .btn',
        click_addtocart_btn : 'img[title="MacBook"]',
        addtoCart : 'Add to Cart',

        successMessages: 'div.alert.alert-success.alert-dismissible'

        }

        clickSearchInputField(productName) {
            cy.get(this.weblocators.searchInputField).click().type(productName)
            cy.get(this.weblocators.click_search).click()
        }
        productAddtocCart(){
            cy.get(this.weblocators.click_addtocart_btn).click()
        }
        verifyValidationMessage(){
            return cy.get(this.weblocators.successMessages)
        }

}