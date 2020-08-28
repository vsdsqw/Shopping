var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
console.log(shoppingCart);
var table = document.querySelector("table");
var sum = document.getElementById("sum");

function render() {

    var isAllCheck = shoppingCart.every(value => {
        return value.isChecked;
    });
    console.log(isAllCheck)
    var str = `<thead>
                <tr>
                    <th class="product-subtotal"><input class="allCheck" type="checkbox" ${isAllCheck ? "checked" : ""} >全选</th>
                    <th class="product-thumbnail">图片</th>
                    <th class="product-name">商品名</th>
                    <th class="product-price">价格</th>
                    <th class="product-quantity">数量</th>
                    <th class="product-remove">删除商品</th>
                        </tr>
                </thead> 
                <tbody>`;
    shoppingCart.forEach(value => {
        str += `
                   <tr>
                       <td class="product-subtotal"><input data-id="${value.goods_id}" class="singleCheck" ${value.isChecked ? "checked" : ""} type="checkbox"/></td>
                       <td class="product-thumbnail">
                           <a href="product-virtual.html"><img src="${value.goods_small_logo}" alt="" /></a>
                       </td>
                       <td class="product-name" title="${value.goods_name}"><span style="display: inline-block;width: 300px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">${value.goods_name}</span></td>
                       <td class="product-price">${value.goods_price}</td>
                       <td class="product-quantity">${value.count}<button type="button" class="btn increase" data-id="${value.goods_id}">+</button ><button type="button" data-id="${value.goods_id}" class="btn decrease">-</button></td>
                       <td class="product-remove"><button type="button" class="close" aria-label="关闭">
                    <span class="del" aria-hidden="true" data-id="${value.goods_id}" >&times;</span>
                  </button></td>
                
        `;
        str += `</tbody>`;
    })


    if (!shoppingCart.length) {
        str = "<h1><a href='shop.html'>您的购物车空空如也，请去挑选一些商品吧！！！</a></h1>"
    }


    table.innerHTML = str;
}

function checkin() {
    var sumPrice = 0;
    shoppingCart.forEach(value => {
        if (value.isChecked) {
            sumPrice += value.goods_price * value.count;
        }
    });
    sum.innerHTML = "￥" + sumPrice;
    if (!shoppingCart.length) {
        sum.parentNode.style.display = "none";
    }
}

function update() {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
render();
checkin();
table.onclick = function(e) {
    if (e.target.className === "allCheck") {
        shoppingCart.forEach(value => {
            value.isChecked = e.target.checked;
        });
        render();
        checkin();

        return;
    }
    if (e.target.className === "singleCheck") {
        var id = e.target.getAttribute("data-id");
        var goodsInfo = shoppingCart.find(value => {
            return value.goods_id === id;
        });
        console.log(goodsInfo)
        goodsInfo.isChecked = e.target.checked;
        render();
        checkin();
        update();
        return;
    }
    if (e.target.className.includes("increase")) {
        var id = e.target.getAttribute("data-id");
        var goodsInfo = shoppingCart.find(value => {
            return value.goods_id === id;
        });

        goodsInfo.count++;
        render();
        checkin();
        update();
        return;
    }
    if (e.target.className.includes("decrease")) {
        var id = e.target.getAttribute("data-id");
        var goodsInfo = shoppingCart.find(value => {
            return value.goods_id === id;
        });
        goodsInfo.count--;
        if (goodsInfo.count <= 0) {
            goodsInfo.count = 0;
        }
        render();
        checkin();
        update();
        return;
    }

    if (e.target.className === "del") {
        var id = e.target.getAttribute("data-id");
        var goodsInfoIdx = shoppingCart.findIndex(value => {
            return value.goods_id === id;
        });
        shoppingCart.splice(goodsInfoIdx, 1);
        render();
        checkin();
        update();
        return;
    }

}