class SupplierElements{
    create_button(){
        return cy.get('#btnCreateSupplier')
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

    combobox_Money_type_accept_sup(){
        return cy.get('.bottom-group > .content-collapse > .k-widget > .k-dropdown-wrap')
    }

    textbox_pay_method_sup(){
        return cy.get('#PayMethod')
    }

    textbox_due_date_sup(){
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

    textbox_address_sup(){
        return cy.get('#txtCode')
    }


    textbox_contact_name_sup(){
        return cy.get('#txtCode')
    }


    textbox_phone_sup(){
        return cy.get('#txtCode')
    }


    textbox_email_sup(){
        return cy.get('#txtCode')
    }





}
export default SupplierElements;