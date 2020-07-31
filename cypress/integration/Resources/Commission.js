import CommissionElement from "../Elements/CommissionElement"

class commission{
    constructor(){
        this.com = new CommissionElement();
    }

    click_on_commission(){
        this.com.get_create_button().click()
    }

    input_text_into_commission_name(text)
    {
        this.com.txt_commission_name().type(text)
    }

    input_text_into_txt_max_amount_money(text)
    {
        this.com.txt_max_amount_money().type(text)
    }

    check_on_chk_apply_for_sale_present()
    {
        this.com.chk_apply_for_sale_present().check()
    }

    input_text_into_txt_amount_money(text)
    {
        this.com.txt_amount_money().type(text)
    }

    input_text_into_txt_percent_commission(text)
    {
        this.com.txt_percent_commission().type(text)
    }

    input_text_into_txt_percent_money(text)
    {
        this.com.txt_percent_money().type(text)
    }

    verify_title_of_commission()
    {
        this.com.title_commission().should("have.text", "TẠO HOA HỒNG")
    }

    click_on_save_button()
    {
        this.com.save_button().click()
    }

    verify_message_notify_sucessful(text)
    {
        // cy.get('.message').then((text) => {
        //     expect(text.text()).includes("Tạo hoa hồng "+text+" thành công")
        // })

        this.com.message_notify().then((text) => {
            expect(text.text()).includes("Tạo hoa hồng")
        })
    }

    input_text_into_search_textbox(text)
    {
        this.com.txt_search_button().type(text)
    }

    verify_commission_has_been_added_on_data_grid(code, name, type, outcommission, maxammount, createddate, updateddate, status)
    {
        this.com.grid_table_commission().each(($e1, index, $list) =>{
            const text = $e1.text()
            if(text.includes(name))
            {
                this.com.cell_code_commission().eq(index).then((text) =>{
                    expect(text.text()).to.include(code)
                })
    
                this.com.cell_name_commission().eq(index).then((text) => {
                    expect(text.text()).includes(name)
                })
    
                this.com.cell_type_commission().eq(index).then((text) => {
                    expect(text.text()).to.equals(type)
                })
                this.com.cell_amount_commission().eq(index).then((text) => {
                    expect(text.text()).to.equals(outcommission)
                })
                this.com.cell_max_amount_money().eq(index).then((text) => {
                    expect(text.text()).to.equals(maxammount)
                })
                this.com.cell_date_created().eq(index).then((text) => {
                    expect(text.text()).to.equals(createddate)
                })

                this.com.cell_date_updated().eq(index).then((text) => {
                    expect(text.text()).to.equals(updateddate)
                })

                this.com.cell_status().eq(index).then((text) => {
                    expect(text.text()).to.equals(status)
                })

            }
        })
    }

    check_on_fixed_amount(){
        this.com.rad_fixed_amount().check()
    }

    check_on_percent_sale(){
        this.com.rad_percent_sale().check()
    }
    
    check_on_profit_percent(){
        this.com.rad_profit_percent().check()
    }

    verify_name_commission_validate_text_box(text){
        this.com.text_validate_name_commission().should("have.text", text)
    }

    verify_max_amount_validate_text_box(text){
        this.com.text_validate_max_commission_amount_validate().should("have.text", text)
    }
    
    verify_fixed_amount_validate_text_box(text){
        this.com.text_fixed_rate_validate().should("have.text", text)
    }
    

}

export default commission;

