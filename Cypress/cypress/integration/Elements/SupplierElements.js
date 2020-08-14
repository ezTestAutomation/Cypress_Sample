class SupplierElements{

    //#region create

    create_button(){
        return cy.get('#btnCreateSupplier')
    }

    saveCreate_button(){
        return cy.get('#btnSaveCreateSupplier')
    }

    addNewItem_button(){
        return cy.get('#btnAddNewItem')
    }

    addNewItem_ForPopup_button(){
        return cy.get('#btnNewItem')
    }

    tab_general_create_supplier(){
        return cy.get('li[aria-controls="tabCreateSupplier-1"]')
    }

    tab_item_create_supplier(){
        return cy.get('li[aria-controls="tabCreateSupplier-2"]')
    }

    cancel_editItem_supplier(){
        return cy.get('div[class="k-grid-content k-auto-scrollable"]')
    }

    complete_addItem_supplier(){
        return cy.get('div[id="gridAddItemIndex"]').find('div[class="k-grid-content k-auto-scrollable"]').each(($th) => {
            $th.click()
        })
    }

    save_addItem_supplier_ofPopup(){
        return cy.get("#btnSaveAddItem")
    }

    //#endregion

    //#region edit

    tab_general_update_supplier(){
        return cy.get('li[aria-controls="tabUpdateSupplier-1"]')
    }

    tab_item_update_supplier(){
        return cy.get('li[aria-controls="tabUpdateSupplier-2"]')
    }

    viewDetail_supplier(str) {
        var elementTemp = null;
        cy.get('td[id="s2-code"]').find('a').each(($td, index, $list) => {
        if(elementTemp == null) {
            if($td[0].innerText == str) {       
                elementTemp = $td[0]
                elementTemp.click()
                }
            }
        })
    }

    saveEdit_supplier(){
        return cy.get('#btnSaveEditSupplier')
    }

    show_menu_changeStatus_supplier(){
        return cy.get("#toolbarSupplier").find('div[class="k-overflow-anchor k-button"]').each(($div) => {
            $div.click()
        })
    }

    click_changeStatus_supplier(str){
        cy.get('li[id="tbbactive_overflow"] > a > span[class="k-text"]').each(($span) => {
            if($span[0].innerText == str){
                cy.get('li[id="tbbactive_overflow"]').click()
            }
        })
        cy.get('li[id="tbbstop_overflow"] > a > span[class="k-text"]').each(($span) => {
            if($span[0].innerText == str){
                cy.get('li[id="tbbstop_overflow"]').click()
            }
        })    
    }

    //#endregion
    
    //#region delete
    click_show_delete_Popup(){
        return cy.get("#btnDeleteSupplier")
    }

    click_delete(){
        var deleteBtn = null
            cy.get('button').find('div[class="align-buttonDelete k-danger"]').each(($td, index, $list) => { 
            if(deleteBtn == null) {
                deleteBtn = $td[0]
                deleteBtn.click()
            }   
        })
    }

    //#endregion

    //#region context menu

    context_menu_viewDetail_supplier(str) {
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
        if(element == null) {
            var child = $td[0].children[0]
            if(child.innerText == str) {       
                element = child             
                var parentElement = $td[0].parentElement
                var menu = parentElement.children[7].children[0]
                    menu.click()
                }
            }   
        }).then(($t) => {
            cy.get("#menuItemControl-viewDetail").click().should("be.visible")
        })
    }

    context_menu_edit_supplier(str) {
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
        if(element == null) {
            var child = $td[0].children[0]
            if(child.innerText == str) {       
                element = child             
                var parentElement = $td[0].parentElement
                var menu = parentElement.children[7].children[0]
                    menu.click()
                }
            }   
        }).then(($t) => {
            cy.get("#menuItemControl-editSupplier").click().should("be.visible")
        })
    }

    context_menu_delete_supplier(str) {
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
        if(element == null) {
            var child = $td[0].children[0]
            if(child.innerText == str) {       
                element = child             
                var parentElement = $td[0].parentElement
                var menu = parentElement.children[7].children[0]
                    menu.click()
                }
            }   
        }).then(($t) => {
            cy.get("#menuItemControl-deleteSupplier").click().should("be.visible")
        })
    }

    context_menu_popupAddItem_supplier(str) {
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
        if(element == null) {
            var child = $td[0].children[0]
            if(child.innerText == str) {       
                element = child             
                var parentElement = $td[0].parentElement
                var menu = parentElement.children[7].children[0]
                    menu.click()
                }
            }   
        }).then(($t) => {
            cy.get("#menuItemControl-popupAddItem").click().should("be.visible")
        })
    }

    context_menu_popupListItem_supplier(str) {
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
        if(element == null) {
            var child = $td[0].children[0]
            if(child.innerText == str) {       
                element = child             
                var parentElement = $td[0].parentElement
                var menu = parentElement.children[7].children[0]
                    menu.click()
                }
            }   
        }).then(($t) => {
            cy.get("#menuItemControl-popupListItem").click().should("be.visible")
        })
    }

    //#endregion

    //#region common field

    check_row_in_grid_with_code(str){
        var element = null
        cy.get('div[id="gridSuppliers"]').find('tr > td[id="s2-code"]').each(($td, index, $list) => {
            if(element == null) {
                var child = $td[0].children[0]
                if(child.innerText == str) {       
                    element = child
                    var parentElement = $td[0].parentElement
                    var checkbox = parentElement.children[0].children[0]
                    checkbox.click()
                    }
                }   
            })
    }

    textbox_code_sup(){
        return cy.get('#txtCode')
    }

    textbox_name_sup(){
        return cy.get('#txtName')
    }


    textbox_web_sup(){
        return cy.get('#txtWebsite')
    }


    textbox_MST_sup(){
        return cy.get('#txtTaxNumber')
    }


    textbox_account_number_sup(){
        return cy.get('#txtAccountNumber')
    }
 
    combobox_currency_sup(){
        return cy.get('[aria-owns="ddlCurrency_listbox"] > .k-dropdown-wrap')
    }

    dropdown_list_currency(){
        return cy.get("#ddlCurrency_listbox > li")
    }

    textbox_pay_method_sup(){
        return cy.get('#PayMethod')
    }

    textbox_pay_term_sup(){
        return cy.get('#ddlPayTerm')
    }

    combobox_country_sup(){
        return cy.get(':nth-child(1) > .content-collapse > [tabindex="0"] > .k-dropdown-wrap')
    }

    dropdown_list_country(){
        return cy.get("#ddlCountry_listbox > li")
    }

    combobox_city_sup(){
        return cy.get('[aria-owns="ddlCity_listbox"] > .k-dropdown-wrap')
    }

    dropdown_list_city(){
        return cy.get("#ddlCity_listbox > li")
    }

    combobox_state_sup(){
        return cy.get('[aria-owns="ddlState_listbox"] > .k-dropdown-wrap ')
    }

    dropdown_list_state(){
        return cy.get("#ddlState_listbox > li")
    }

    combobox_item_sup(){
        return cy.get('[aria-owns="Item_listbox"] > .k-dropdown-wrap ')
    }

    dropdown_list_item(){
        return cy.get("#Item_listbox > li")
    }

    textbox_address_sup(){
        return cy.get('#txtAddress')
    }


    textbox_contact_name_sup(){
        return cy.get('#txtContactName')
    }


    textbox_phone_sup(){
        return cy.get('#txtPhoneNumber')
    }


    textbox_email_sup(){
        return cy.get('#txtEmailAddress')
    }

    numeric_lastReceiptCost_item(){
        return cy.get('#LastReceiptCost')
    }

    numeric_minOrderQty_item(){
        return cy.get('#MinOrderQty')
    }

    //#endregion

    //#region verify

    grid_table_supplier()
    {
        return cy.get("table > tbody > tr")
    }

    cell_code_supplier(){
        return cy.get("table tbody tr td:nth-child(2)")
    }

    cell_name_supplier(){
        return cy.get("table tbody tr td:nth-child(3)")
    }

    cell_numOfItems_supplier(){
        return cy.get("table tbody tr td:nth-child(4)")
    }

    cell_contactName_supplier(){
        return cy.get("table tbody tr td:nth-child(5)")
    }
    cell_phone_supplier(){
        return cy.get("table tbody tr td:nth-child(6)")
    }

    cell_status_supplier(){
        return cy.get("table tbody tr td:nth-child(7)")
    }

    cell_context_button(){
        return cy.get("table>tbody>tr>td:nth-child(8) > #button-menu-context")
    }

    message_notify()
    {
        return cy.get('.message')
    }

    //#endregion

    //#region remove Item

    button_remove_all_item()
    {
        cy.get('button[class="s2-k-danger"]').each(($btn, index, list) => {
            cy.get('button[class="s2-k-danger"]').click({ force: true, multiple: true })
        })
    }

    //#endregion
    
}
export default SupplierElements;