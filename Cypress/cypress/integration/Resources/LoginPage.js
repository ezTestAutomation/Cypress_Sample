import LoginPageElement from "../Elements/LoginPageElement"

class LoginPage
{
    constructor() {
        this.el = new LoginPageElement();
    }

    visit_and_login_page(url, text, text1){
        cy.visit(url)
        this.el.getUserName().type(text)
        this.el.getPassword().type(text1)
        this.el.getLoginBtn().click()
    }

    verify_navigate_admin_name(text){
        cy.get('.brc_Name').should("have.text", text)
    }





}

export default LoginPage