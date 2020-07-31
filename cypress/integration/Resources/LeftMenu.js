import LeftMenuElement from "../Elements/LeftMenuElement"

class LeftMenu{
    constructor(){
        this.el = new LeftMenuElement();
    }

    click_category(){
        this.el.get_category().click()
    }

    verify_hoa_hong_in_Category(){
        this.el.get_HoaHong().should("have.text", "Hoa Hồng")
    }

    click_on_HoaHong(){
        this.el.get_HoaHong().click()
    }

    verify_supplier_in_Category(){
        this.el.get_supplier().should("have.text", "Nhà Cung Cấp")
    }

    click_on_supllier(){
        this.el.get_supplier().click()
    }


}

export default LeftMenu;