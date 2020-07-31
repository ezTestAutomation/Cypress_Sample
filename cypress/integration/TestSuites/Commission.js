/// <reference types="cypress"/>
import LoginPageElement from "../Resources/LoginPage"
import LeftMenu from "../Resources/LeftMenu"
import commission from "../Resources/Commission"

describe("7319_Create successfully when inputting value into all fields",function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_commission = new commission()

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
      })
    })

    it("Login page and navigate to Commission then input value into all fields", function(){
       el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
       el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
       el_left_menu.click_category()
       el_left_menu.verify_hoa_hong_in_Category()
       el_left_menu.click_on_HoaHong()

       el_commission.click_on_commission()
        el_commission.verify_title_of_commission()

        var name = cy.common.RandonString(10)
        el_commission.input_text_into_commission_name(name)
        const number = cy.common.randNumber(12)
        el_commission.input_text_into_txt_max_amount_money(number)
        el_commission.click_on_save_button()
        el_commission.verify_message_notify_sucessful(name)
        el_commission.input_text_into_search_textbox(name)
        const todaysDate = Cypress.moment().format('DD-MM-YYYY')
        el_commission.verify_commission_has_been_added_on_data_grid("DDBH", name, "", "", number+" ₫", todaysDate, "", "Đang hoạt động")
    })
    
})

describe("7318_Create commission successfully when input value into required fields", function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_commission = new commission()

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
      })
    })

    it("Create commission successfully when input value into required fields", function(){
       //cy.visit(this.logins.baseUrl)
       el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
       el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
       el_left_menu.click_category()
       el_left_menu.verify_hoa_hong_in_Category()
       el_left_menu.click_on_HoaHong()

       el_commission.click_on_commission()
        el_commission.verify_title_of_commission()

        var name = cy.common.RandonString(10)
        el_commission.input_text_into_commission_name(name)
        const number = cy.common.randNumber(12)
        el_commission.input_text_into_txt_max_amount_money(number)
        el_commission.click_on_save_button()
        el_commission.verify_message_notify_sucessful(name)
        el_commission.input_text_into_search_textbox(name)
        const todaysDate = Cypress.moment().format('DD-MM-YYYY')
        el_commission.verify_commission_has_been_added_on_data_grid("DDBH", name, "", "", number+" ₫", todaysDate, "", "Đang hoạt động")
    })
})


describe("7333_Creat commission unsucessfully when inputting empty value into required fields", function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_commission = new commission()

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
       el_left_menu.verify_hoa_hong_in_Category()
       el_left_menu.click_on_HoaHong()
       el_commission.click_on_commission()
        el_commission.verify_title_of_commission()
        el_commission.input_text_into_txt_max_amount_money(" ")
        el_commission.click_on_save_button()
        el_commission.verify_name_commission_validate_text_box("  Vui lòng nhập tên hoa hồng")
        el_commission.verify_max_amount_validate_text_box("  Vui lòng nhập hạn mức tối đa")
  
    })
})



describe("7450_Create commission unsuccessfully when inputting empty value into max amount text box", function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_commission = new commission()

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
      })
    })

    it("Create commission unsuccessfully when inputting empty value into max amount text box", function(){
       //cy.visit(this.logins.baseUrl)
       el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
       el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
       el_left_menu.click_category()
       el_left_menu.verify_hoa_hong_in_Category()
       el_left_menu.click_on_HoaHong()

       el_commission.click_on_commission()
        el_commission.verify_title_of_commission()

        var name = cy.common.RandonString(10)
        el_commission.input_text_into_commission_name(name)
        const number = cy.common.randNumber(12)
        el_commission.input_text_into_txt_max_amount_money(number)
        el_commission.check_on_fixed_amount()
        el_commission.click_on_save_button()
        el_commission.verify_fixed_amount_validate_text_box("  Vui lòng nhập số tiền cố định")
        
    })
})


describe("7325_Create commission successfully when checking on apply for the sale present ", function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_commission = new commission()

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
      })
    })

    it("Create commission successfully when checking on apply for the sale present", function(){
       //cy.visit(this.logins.baseUrl)
       el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
       el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
       el_left_menu.click_category()
       el_left_menu.verify_hoa_hong_in_Category()
       el_left_menu.click_on_HoaHong()

       el_commission.click_on_commission()
        el_commission.verify_title_of_commission()

        var name = cy.common.RandonString(10)
        el_commission.input_text_into_commission_name(name)
        const number = cy.common.randNumber(10)
        el_commission.input_text_into_txt_max_amount_money(number)
        el_commission.check_on_chk_apply_for_sale_present()
        el_commission.click_on_save_button()
        el_commission.verify_message_notify_sucessful(name)
        el_commission.input_text_into_search_textbox(name)
        const todaysDate = Cypress.moment().format('DD-MM-YYYY')
        el_commission.verify_commission_has_been_added_on_data_grid("DDBH", name, "", "", number+" ₫", todaysDate, "", "Đang hoạt động")
    })

})