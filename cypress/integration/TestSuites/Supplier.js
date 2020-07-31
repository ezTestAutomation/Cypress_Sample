/// <reference types="cypress"/>
import LoginPageElement from "../Resources/LoginPage"
import LeftMenu from "../Resources/LeftMenu"
import Supplier from "../Resources/Supplier"

describe("2962_Input all info then click on save button",function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_supplier = new Supplier()

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
      })
    })

    it("Login page", function(){
        //cy.visit(this.logins.baseUrl)
        el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
        el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
        el_left_menu.click_category()
        el_left_menu.verify_supplier_in_Category()
        el_left_menu.click_on_supllier()
        el_supplier.click_on_create_button()
        el_supplier.select_value_on_country("Việt Nam")
        el_supplier.select_value_on_city("An Giang")
        el_supplier.select_value_on_state("Long Xuyên")

    })

})