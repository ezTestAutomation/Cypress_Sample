class CommissionElement{
    get_create_button()
    {
        return cy.get('#btnCreateCommission')
    }

    txt_commission_name()
    {
        return cy.get('#txtName')
    }

    txt_max_amount_money()
    {
        return cy.get(':nth-child(1) > .k-widget > .k-numeric-wrap > .k-formatted-value')
    }

    chk_apply_for_sale_present()
    {
        return cy.get('.k-checkbox')
    }

    txt_amount_money()
    {
        return cy.get('.col-sm-11 > :nth-child(2)')
    }

    txt_percent_commission()
    {
        return cy.get('.col-sm-11 > :nth-child(6)')
    }

    txt_percent_money()
    {
        return cy.get('.col-sm-11 > :nth-child(10)')
    }

    title_commission()
    {
        return cy.get('.title-page')
    }

    save_button()
    {
        return cy.get('#btnSaveCreateCommission')
    }

    message_notify()
    {
        return cy.get('.message')
    }

    txt_search_button()
    {
        return cy.get('#search-grid')
    }

    grid_table_commission()
    {
        return cy.get("table > tbody > tr")
    }

    cell_code_commission(){
        return cy.get("table tbody tr td:nth-child(2)")
    }

    cell_name_commission(){
        return cy.get("table tbody tr td:nth-child(3)")
    }

    cell_type_commission(){
        return cy.get("table tbody tr td:nth-child(4)")
    }

    cell_amount_commission(){
        return cy.get("table tbody tr td:nth-child(5)")
    }
    cell_max_amount_money(){
        return cy.get("table tbody tr td:nth-child(6)")
    }

    cell_date_created(){
        return cy.get("table tbody tr td:nth-child(7)")
    }

    cell_date_updated(){
        return cy.get("table tbody tr td:nth-child(8)")
    }

    cell_status(){
        return cy.get("table>tbody>tr>td:nth-child(9)")
    }

    cell_context_button(){
        return cy.get("table>tbody>tr>td:nth-child(10) > #button-menu-context")
    }

    rad_fixed_amount(){
        return cy.get('#curTypeFixedAmount')
    }

    rad_percent_sale(){
        return cy.get('#curTypePercentSale')
    }

    rad_profit_percent(){
        return cy.get('#curTypeProfitPercent')
    }

    text_validate_name_commission(){
        return cy.get('#Name_validationMessage')
    }

    text_validate_max_commission_amount_validate(){
        return cy.get('#MaxCommissionAmount_validationMessage')
    }

    text_fixed_rate_validate(){
        return cy.get('#FixedRate_validationMessage')
    }

    



}
export default CommissionElement;