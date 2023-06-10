let cart = new Cart();
function fetchProductList() {
    axios({
        url: 'https://64709e383de51400f724a07e.mockapi.io/Product',
        method: 'GET',
    })
        .then(function (res) {
            renderProductList(res.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

fetchProductList()

const getId = (id) => {
    axios({
        url: `https://64709e383de51400f724a07e.mockapi.io/Product/${id}`,
        method: 'GET',
    })
        .then(function (res) {
            let cartItem = new CartItem(res.data.id, res.data.img, res.data.name, res.data.price)
            let item = cart.cartArr.find(cartItem => cartItem.Item.id == id);
            let tongTien = cartItem.tinhTien();
            if (item) {
                item.quantity++
                cartItem.quantity++
                item.tinhTien();
            } else {
                // cartArr.push(cartItem);
                cart.addItem(cartItem);
            }
            renderCart(cart.cartArr);
        })
        .catch(function (err) {
            console.log(err);
        })
}
