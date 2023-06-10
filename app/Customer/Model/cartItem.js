class CartItem {
    constructor(_id, _img, _name, _price) {
        this.Item = {
            id: _id,
            img: _img,
            name: _name,
            price: _price,
        }
        this.quantity = 1;
        this.tongTien = 0;

        this.tinhTien = () => {
            return this.tongTien = this.Item.price * this.quantity;
        }
    }
}