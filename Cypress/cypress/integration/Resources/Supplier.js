import LoginPageElement from "../Elements/SupplierElements"
import SupplierElements from "../Elements/SupplierElements"

class Supplier{
    constructor() {
        this.el = new SupplierElements();
    }

    //#region create

    click_on_create_button(){
        this.el.create_button().click()
    }

    click_on_saveCreate_button(){
        this.el.saveCreate_button().click()
    }

    click_on_addNewItem_button(){
        this.el.addNewItem_button().click()
    }

    click_on_addNewItem_forPopup_button(){
        this.el.addNewItem_ForPopup_button().click()
    }

    click_on_tab_create_general(){
        this.el.tab_general_create_supplier().click()
    }

    click_on_tab_create_item(){
        this.el.tab_item_create_supplier().click()
    }

    cancel_editItem_supplier(){
        this.el.cancel_editItem_supplier().click()
    }

    complete_addItem_supplier(){
        this.el.complete_addItem_supplier()
    }

    save_addItem_supplier_popup(){
        this.el.save_addItem_supplier_ofPopup().click()
    }

    //#endregion

    //#region Edit

    click_on_viewDetail_supplier(str){
        this.el.viewDetail_supplier(str)
    }

    click_on_saveEdit_button(){
        this.el.saveEdit_supplier().click()
    }

    click_on_tab_update_general(){
        this.el.tab_general_update_supplier().click()
    }

    click_on_tab_update_item(){
        this.el.tab_item_update_supplier().click()
    }

    click_showMenu_changeStatus_supplier(){
        this.el.show_menu_changeStatus_supplier()
    }

    click_changeStatus_supplier(str){
        this.el.click_changeStatus_supplier(str)
    }

    //#endregion

    //#region delete

    click_show_delete_Popup(){
        this.el.click_show_delete_Popup().click()
    }

    click_on_delete_button(){
        this.el.click_delete()
    }

    //#endregion

    //#region context menu

    click_contextMenu_viewDetail_supplier(str){
        this.el.context_menu_viewDetail_supplier(str)
    }

    click_contextMenu_edit_supplier(str){
        this.el.context_menu_edit_supplier(str)
    }

    click_contextMenu_delete_supplier(str){
        this.el.context_menu_delete_supplier(str)
    }

    click_contextMenu_popupListItem_supplier(str){
        this.el.context_menu_popupListItem_supplier(str)
    }

    click_contextMenu_popupAddItem_supplier(str){
        this.el.context_menu_popupAddItem_supplier(str)
    }

    //#endregion
    
    //#region set value

    check_row_in_grid_with_code_value(str){
        this.el.check_row_in_grid_with_code(str)
    }

    select_value_on_currency(str){
        this.el.combobox_currency_sup().click({ force: true, multiple: true })
        this.el.dropdown_list_currency().each(($el, index, $list)=>{
            const text = $el.text()
            
            if(text.includes(str))
            {
                this.el.dropdown_list_currency().eq(index).click({ force: true })
            }
        })
    }

    select_value_on_country(str){
        this.el.combobox_country_sup().click({ force: true, multiple: true })
        this.el.dropdown_list_country().each(($el, index, $list)=>{
            const text = $el.text()
            
            if(text.includes(str))
            {
                this.el.dropdown_list_country().eq(index).click({ force: true })
            }
        })
    }

    select_value_on_city(str){
        this.el.combobox_city_sup().click({ force: true, multiple: true })
        this.el.dropdown_list_city().each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes(str))
            {
                this.el.dropdown_list_city().eq(index).click({ force: true })
            }
        })
    }

    select_value_on_state(str){
        this.el.combobox_state_sup().click({ force: true })
        this.el.dropdown_list_state().each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes(str))
            {
                this.el.dropdown_list_state().eq(index).click({ force: true })
            }
        })
    }

    select_value_on_item(str){
        this.el.combobox_item_sup().click({ force: true })
        this.el.dropdown_list_item().each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes(str))
            {
                this.el.dropdown_list_item().eq(index).click({ force: true })
            }
        })
    }

    set_value_on_code(str){
        this.el.textbox_code_sup().type(str)
    }

    set_value_on_name(str){
        this.el.textbox_name_sup().type(str)
    }

    set_value_on_web(str){
        this.el.textbox_web_sup().type(str)
    }

    set_value_on_mst(str){
        this.el.textbox_MST_sup().type(str)
    }

    set_value_on_account_number(str){
        this.el.textbox_account_number_sup().type(str)
    }

    set_value_on_pay_method(str){
        this.el.textbox_pay_method_sup().type(str)
    }

    set_value_on_pay_term(str){
        this.el.textbox_pay_term_sup().type(str)
    }

    set_value_on_address(str){
        this.el.textbox_address_sup().type(str)
    }

    set_value_on_contact_name(str){
        this.el.textbox_contact_name_sup().type(str)
    }

    set_value_on_phone(str){
        this.el.textbox_phone_sup().type(str)
    }

    set_value_on_email(str){
        this.el.textbox_email_sup().type(str)
    }

    set_value_on_lastReceiptCost(str){
        cy.common.setAttr(this.el.numeric_lastReceiptCost_item(), "style", "")
        this.el.numeric_lastReceiptCost_item().type(str)
    }

    set_value_on_minOrder(str){
        cy.common.setAttr(this.el.numeric_minOrderQty_item(), "style", "")
        this.el.numeric_minOrderQty_item().type(str)
    }

    //#endregion

    //#region verify

    verify_supplier_has_been_added_on_data_grid(code, name, numOfItem, contactName, phoneNumber, status)
    {
        this.el.grid_table_supplier().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(name))
            {
                this.el.cell_code_supplier().eq(index).then((text) =>{
                    expect(text.text()).to.include(code)
                })
    
                this.el.cell_name_supplier().eq(index).then((text) => {
                    expect(text.text()).includes(name)
                })
    
                this.el.cell_numOfItems_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(numOfItem)
                })
                this.el.cell_contactName_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(contactName)
                })
                this.el.cell_phone_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(phoneNumber)
                })
                this.el.cell_status_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(status)
                })
            }
        })
    }

    verify_supplier_has_been_updated_on_data_grid(code, name, numOfItem, contactName, phoneNumber, status)
    {
        this.el.grid_table_supplier().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(name))
            {   
                this.el.cell_code_supplier().eq(index).then((text) => {
                    expect(text.text()).includes(code)
                })

                this.el.cell_name_supplier().eq(index).then((text) => {
                    expect(text.text()).includes(name)
                })
    
                this.el.cell_numOfItems_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(numOfItem)
                })
                this.el.cell_contactName_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(contactName)
                })
                this.el.cell_phone_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(phoneNumber)
                })
                this.el.cell_status_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(status)
                })
            }
        })
    }

    verify_supplier_has_been_deleted_on_data_grid(code, name, numOfItem, contactName, phoneNumber, status)
    {
        this.el.grid_table_supplier().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(name))
            {
                this.el.cell_code_supplier().eq(index).then((text) =>{
                    expect(text.text()).not.equals(code)
                })
    
                this.el.cell_name_supplier().eq(index).then((text) => {
                    expect(text.text()).not.equals(name)
                })
    
                this.el.cell_numOfItems_supplier().eq(index).then((text) => {
                    expect(text.text()).not.equals(numOfItem)
                })
                this.el.cell_contactName_supplier().eq(index).then((text) => {
                    expect(text.text()).not.equals(contactName)
                })
                this.el.cell_phone_supplier().eq(index).then((text) => {
                    expect(text.text()).not.equals(phoneNumber)
                })
                this.el.cell_status_supplier().eq(index).then((text) => {
                    expect(text.text()).not.equals(status)
                })
            }
        })
    }

    verify_numOfItem_before_delete_supplier(code){
        this.el.grid_table_supplier().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(code))
            {
                this.el.cell_numOfItems_supplier().eq(index).then((text) => {
                    if(text.text() == "0")
                        return true
                    else return false
                })
            }
        })
    }

    verify_status_supplier_after_change(code, status){
        this.el.grid_table_supplier().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(code))
            {
                this.el.cell_status_supplier().eq(index).then((text) => {
                    expect(text.text()).to.equals(status)
                })
            }
        })
    }

    verify_message_notify_create_successful()
    {
        this.el.message_notify().then((text) => {
            expect(text.text()).includes("\n            Tạo mới nhà cung cấp thành công!\n            ")
        })
    }

    verify_message_notify_edit_successful()
    {
        this.el.message_notify().then((text) => {
            expect(text.text()).includes("\n            Sửa thông tin nhà cung cấp thành công!\n            ")
        })
    }

    verify_message_notify_delete_successful(str)
    {
        this.el.message_notify().then((text) => {
            expect(text.text()).includes("\n            ["+ str +"] xóa thành công!\n            ")
        })
    }

    verify_message_notify_change_status_successful()
    {
        this.el.message_notify().then((text) => {
            expect(text.text()).includes("\n            Thay đổi trạng thái thành công!\n            ")
        })
    }

    //#endregion

    //#region remove Item

    click_remove_all_item(){
        this.el.button_remove_all_item()
    }

    //#endregion

}

export default Supplier;