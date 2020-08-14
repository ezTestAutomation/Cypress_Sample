/// <reference types="cypress"/>
import LoginPageElement from "../Resources/LoginPage"
import LeftMenu from "../Resources/LeftMenu"
import Supplier from "../Resources/Supplier"

describe("Suppliers Management",function(){
    const el_Login = new LoginPageElement()
    const el_left_menu = new LeftMenu()
    const el_supplier = new Supplier()
    var rdCode = cy.common.randNumber(10, 10)

    var rdNumber = cy.common.randNumber(10, 10)
    var rdString = cy.common.RandomString(10)
    var rdString25 = cy.common.RandomString(25)
    
    var rdEditedNumber = cy.common.randNumber(9, 5)
    var rdEditedString = cy.common.RandomString(5)
    var rdEditedString25 = cy.common.RandomString(10)

    beforeEach(function(){
        cy.fixture('LoginPage.json').then(logins => {
        this.logins = logins
        el_Login.visit_and_login_page(this.logins.baseURL,this.logins.username, this.logins.password)
        el_Login.verify_navigate_admin_name(this.logins.navAfterLogin)
        el_left_menu.click_category()
        el_left_menu.verify_supplier_in_Category()
        el_left_menu.click_on_supllier()
      })
    })

    //#region button

    it("2943_Create Supplier", function(){        
        el_supplier.click_on_create_button()

        el_supplier.set_value_on_code(rdCode);
        el_supplier.set_value_on_name(rdString)
        el_supplier.set_value_on_web(rdString + ".com")
        el_supplier.set_value_on_mst(rdNumber)

        el_supplier.set_value_on_account_number(rdNumber)
        el_supplier.select_value_on_currency("sasasaas")
        el_supplier.set_value_on_pay_method(rdString)
        el_supplier.set_value_on_pay_term(rdString)

        el_supplier.select_value_on_country("Việt nam")
        el_supplier.select_value_on_city("Cần thơ")
        el_supplier.select_value_on_state("Vĩnh thạnh")
        el_supplier.set_value_on_address(rdString25)

        el_supplier.set_value_on_contact_name(rdString)
        el_supplier.set_value_on_phone(rdNumber)
        el_supplier.set_value_on_email(rdString + "@gmail.com")

        el_supplier.click_on_tab_create_item()

        cy.wait(1000)
        el_supplier.click_on_addNewItem_button()
        el_supplier.select_value_on_item("SP002")
        el_supplier.set_value_on_lastReceiptCost("150000")
        el_supplier.set_value_on_minOrder("1")
        el_supplier.cancel_editItem_supplier()
        el_supplier.click_on_saveCreate_button()

        cy.wait(1000)
        el_supplier.verify_message_notify_create_successful()

        cy.wait(1000)
        el_supplier.verify_supplier_has_been_added_on_data_grid(rdCode, rdString, "1", rdString, rdNumber, "Đang hoạt động")
    })

    it("2952_View Detail Supplier", function(){      
        el_supplier.click_on_viewDetail_supplier(rdCode)
        cy.wait(3000)
    })

    it("2945_Edit Supplier", function(){      
        el_supplier.click_on_viewDetail_supplier(rdCode)

        cy.get("#btnEditSupplier").click()

        el_supplier.set_value_on_name(rdEditedString)
        el_supplier.set_value_on_web(rdEditedString)
        el_supplier.set_value_on_mst(rdEditedNumber)

        el_supplier.set_value_on_account_number(rdEditedNumber)
        el_supplier.select_value_on_currency("sasasaas")
        el_supplier.set_value_on_pay_method(rdEditedString)
        el_supplier.set_value_on_pay_term(rdEditedString)

        el_supplier.select_value_on_country("Việt nam")
        el_supplier.select_value_on_city("Cần thơ")
        el_supplier.select_value_on_state("Vĩnh thạnh")
        el_supplier.set_value_on_address(rdEditedString25)

        el_supplier.set_value_on_contact_name(rdEditedString)
        el_supplier.set_value_on_phone(rdEditedNumber)
        el_supplier.set_value_on_email(rdEditedString)

        el_supplier.click_on_tab_update_item()

        cy.wait(1000)
        el_supplier.click_on_addNewItem_button()
        el_supplier.select_value_on_item("SP001")
        el_supplier.set_value_on_lastReceiptCost("110000")
        el_supplier.set_value_on_minOrder("0")
        el_supplier.cancel_editItem_supplier()

        cy.wait(1000)
        el_supplier.click_on_saveEdit_button()

        cy.wait(1000)
        el_supplier.verify_message_notify_edit_successful()

        cy.wait(1000)
        el_supplier.verify_supplier_has_been_updated_on_data_grid(rdCode, rdString + rdEditedString, "2",rdString + rdEditedString, rdNumber + rdEditedNumber, "Đang hoạt động")
    })

    it("4723_Show List Item Of Supplier", function(){ 
        el_supplier.click_contextMenu_popupListItem_supplier(rdCode)
        cy.wait(3000)
    })

    it("4811_Add new item to List Item Of Supplier", function(){ 
        el_supplier.click_contextMenu_popupAddItem_supplier(rdCode)

        cy.wait(1000)
        el_supplier.click_on_addNewItem_forPopup_button()
        el_supplier.select_value_on_item("SP00332")
        el_supplier.set_value_on_lastReceiptCost("9999")
        el_supplier.set_value_on_minOrder("0")
        el_supplier.complete_addItem_supplier()

        el_supplier.save_addItem_supplier_popup()
    })

    it("2946_Delete Suppliers", function(){      
        el_supplier.check_row_in_grid_with_code_value(rdCode)

        el_supplier.click_show_delete_Popup()

        cy.wait(1000)
        el_supplier.click_on_delete_button()

        cy.wait(1000)
        el_supplier.verify_message_notify_delete_successful(rdString + rdEditedString)
        
        cy.wait(1000)
        el_supplier.verify_supplier_has_been_deleted_on_data_grid(rdCode, rdString + rdEditedString, "2", rdString + rdEditedString, rdNumber + rdEditedNumber, "Đang hoạt động")
              
    })

    //#endregion

    //#region context menu

    it("xxxx_Change Status Supplier", function(){      
        el_supplier.check_row_in_grid_with_code_value(rdCode)

        el_supplier.click_showMenu_changeStatus_supplier()

        cy.wait(1000)
        el_supplier.click_changeStatus_supplier("Ngừng hoạt động")

        cy.wait(1000)
        el_supplier.verify_message_notify_change_status_successful()

        cy.wait(1000)
        el_supplier.verify_status_supplier_after_change(rdCode, "Ngừng hoạt động")
    })

    it("2945_Edit Supplier (With Context Menu)", function(){      
        el_supplier.click_contextMenu_edit_supplier("NCC1")

        el_supplier.set_value_on_name(rdEditedString)
        el_supplier.set_value_on_web(rdEditedString)
        el_supplier.set_value_on_mst(rdEditedNumber)

        el_supplier.set_value_on_account_number(rdEditedNumber)
        el_supplier.select_value_on_currency("sasasaas")
        el_supplier.set_value_on_pay_method(rdEditedString)
        el_supplier.set_value_on_pay_term(rdEditedString)

        el_supplier.select_value_on_country("Việt nam")
        el_supplier.select_value_on_city("Cần thơ")
        el_supplier.select_value_on_state("Vĩnh thạnh")
        el_supplier.set_value_on_address(rdEditedString25)

        el_supplier.set_value_on_contact_name(rdEditedString)
        el_supplier.set_value_on_phone(rdEditedNumber)
        el_supplier.set_value_on_email(rdEditedString)

        cy.wait(1000)
        el_supplier.click_on_tab_update_item()

        cy.wait(1000)
        el_supplier.click_remove_all_item()

        cy.wait(1000)
        el_supplier.click_on_saveEdit_button()

        cy.wait(1000)
        el_supplier.verify_message_notify_edit_successful(rdString + rdEditedString + rdEditedString)

        cy.wait(1000)
        el_supplier.verify_supplier_has_been_updated_on_data_grid(rdCode, rdString + rdEditedString + rdEditedString, "0",rdString + rdEditedString + rdEditedString, rdNumber + rdEditedNumber + rdEditedNumber, "Ngừng hoạt động")
    })

    it("2952_View Detail Supplier (With Context Menu)", function(){      
        el_supplier.click_contextMenu_viewDetail_supplier(rdCode)
        cy.wait(3000)
    })

    it("2946_Delete Suppliers (With Context Menu)", function(){      
        el_supplier.click_contextMenu_delete_supplier(rdCode)
        el_supplier.click_on_delete_button()

        cy.wait(1000)
        el_supplier.verify_message_notify_delete_successful(rdString + rdEditedString)
        
        cy.wait(1000)
        el_supplier.verify_supplier_has_been_deleted_on_data_grid(rdCode, rdString + rdEditedString + rdEditedString, "0", rdString + rdEditedString + rdEditedString, rdNumber + rdEditedNumber + rdEditedNumber, "Ngừng hoạt động")
                     
    })

    //#endregion
})