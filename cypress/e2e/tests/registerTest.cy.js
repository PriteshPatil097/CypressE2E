import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'



describe('Automation Test', ()=>{

    it('register flow', ()=>{
        registerObj.OpenURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.phone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterPolicyCheck()
        registerObj.enterContinuebtn()

        
    })
})