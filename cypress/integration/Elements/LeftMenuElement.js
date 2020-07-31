class LeftMenuElement{
    get_category(){
        return cy.get(':nth-child(1) > .menu-toggle > span')
    }

    get_HoaHong(){
        return cy.get('.liParent > .ml-menu > :nth-child(4) > a > span')
    }

    get_supplier(){
        return cy.get('.liParent > .ml-menu > :nth-child(2) > a > span')
    }

}
export default LeftMenuElement
