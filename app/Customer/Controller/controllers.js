function getEle(id) {
    return document.getElementById(id);
}

function renderProductList(productArr) {
    let result = '';
    for (let i = 0; i < productArr.length; i++) {
        let product = productArr[i];
        result += `
        <div class="col-sm-4">
                    <div class="card">
                            <div class="card-header">
                                <img class="card__header__img"
                                    src="${product.img}"
                                    alt="">
                            </div>
                            <div class="card-body d-flex justify-content-between">
                                <div class="card-body-left">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p>Screen: ${product.screen}</p>
                                    <p>backCamera: ${product.backCamera}</p>
                                    <p>frontCamera: ${product.fontCamera}</p>
                                    <p>desc: ${product.desc}</p>
                                </div>
                                <div>
                                    <p style="text-decoration: line-through;">$1100</p>
                                    <h5 class="card-text">$${product.price}</h5>
                                </div>
                            </div>
                        <div class="card-footer text-muted text-center" onclick="getId('${product.id}')"">
                            Buy Now
                        </div>

                    </div>
                </div>`
    }
    getEle('productList').innerHTML = result;
}

const filter = async () => {
    const value = getEle('selectBrand').value
    let res = await axios({
        url: 'https://64709e383de51400f724a07e.mockapi.io/Product',
        method: 'GET',
    })

    let mangTimKiem = res.data;

    if (value !== 'all') {
        mangTimKiem = res.data.filter((item) => {
            let type = item.type.toLowerCase();
            return type === value
        });
    }
    renderProductList(mangTimKiem);

    if (value == '0') {
        location.reload();
    }
}

const renderCart = (cart) => {
    let show = '';

    cart.forEach((cartItem) => {

        show += `
            <div id="cartItem">
                <div class="madia-left d-flex">
                    <img style="width: 20%;" src="${cartItem.Item.img}" alt="">
                        <div class="media-body ml-2">
                            <h2>${cartItem.Item.name}</h2>
                            <div class="slCart">
                                <input id="inputSL" class="tangGiamSL" max="10" placeholder="số lượng" min="0" onchange="tangGiamQuantity(${cartItem.Item.id})" value="${cartItem.quantity}" type="number"></input>
                                <span>x $${cartItem.Item.price}</span>
                            </div>
                        </div>
                    <div class="remove-cartItem" onclick=deleteItem(${cartItem.Item.id})>x</div>
                </div>
            </div>
            `
    })


    // render quantity
    renderQuantity();

    // render money cart
    renderTongTienCart();

    // render cart
    getEle('renderCart').innerHTML = show;

}

const renderQuantity = () => {
    let quantity = 0;
    cart.cartArr.forEach((cartItem) => {
        quantity += cartItem.quantity;
    })
    getEle('quantity').innerHTML = quantity;
}

const renderTongTienCart = () => {
    let tongTien = 0;
    let showMoney = '';
    cart.cartArr.forEach((cartItem) => {
        tongTien += cartItem.tongTien;
        showMoney = `<span>Tổng tiền: </span><span style="font-size: 20px">${tongTien}$</span>`
    })

    if (!tongTien) {
        showMoney = `<span>Tổng tiền: </span><span style="font-size: 20px">0$</span>`
    }
    getEle('tongTien').innerHTML = showMoney;
}

const deleteItem = (id) => {
    cart.deleteItem(id);
    renderCart(cart.cartArr);
}

const tangGiamQuantity = (id) => {
    let index = cart.layThongTin(id)
    let input = document.getElementsByClassName('tangGiamSL');
    let quantity = Number(input[index].value);
    let cartItem = cart.capNhatItem(index, quantity);
    renderTongTienCart();
    renderQuantity();
}

const thanhToan = () => {
    document.getElementsByClassName('close')[0].click();
    cart.cartArr = [];
    renderCart(cart.cartArr);
}