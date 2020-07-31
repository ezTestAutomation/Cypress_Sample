import LoginPageElement from "../Elements/SupplierElements"
import SupplierElements from "../Elements/SupplierElements"

class Supplier{
    constructor() {
        this.el = new SupplierElements();
    }

    click_on_create_button(){
        this.el.create_button().click()
    }

    select_value_on_combobox(text){
        this.el.combobox_Money_type_accept_sup().select(text)
    }

    select_value_on_country(str){
        this.el.combobox_country_sup().click({ force: true })
        this.el.dropdown_list_country().each(($el, index, $list)=>{
            const text = $el.text()
            
            if(text.includes(str))
            {
                this.el.dropdown_list_country().eq(index).click({ force: true })
            }
        })
    }

    select_value_on_city(str){
        this.el.combobox_city_sup().click({ force: true })
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



}

export default Supplier;