class Cart {
    constructor() {
        this.cartArr = [];

        this.addItem = (item) => {
            return this.cartArr.push(item);
        }

        this.layThongTin = (id) => {
            var index = -1;
            for (let i = 0; i < this.cartArr.length; i++) {
                let cartItem = this.cartArr[i];
                if (cartItem.Item.id == id) {
                    index = i;
                }
            }
            return index
        }

        this.deleteItem = (id) => {
            let index = this.layThongTin(id);
            if (index != -1) {
                this.cartArr.splice(index, 1);
            }
        }

        this.capNhatItem = (index, quantity) => {
            if (index != -1) {
                let cartItem = this.cartArr[index];
                cartItem.quantity = quantity;
                cartItem.tinhTien();
                return cartItem;
            }
        }
    }
}
