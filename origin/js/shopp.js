;
(function() {

    var goodsArr = [];


    var paginationContainer = document.getElementById("paginationContainer");

    TE.pGet("/php/getGoods.php", {})
        .then((data) => {
            if (!data.error) {
                goodsArr = data.msg;
                var p = new Pagination(paginationContainer, data.msg, 0, 12);
                p.display(function(arr) {
                    console.log(arr)

                    var str = `<ul style="width:100%;" class="row wrap-column list-group list-group-horizontal-sm no-gutters" >`;
                    // 循环12条li出来
                    arr.forEach(value => {
                        str +=
                            `<li class="col col-4 list-group-item" style="padding:0 10px 20px 10px; border: none">
                    <div class="card">
                        <a href="./product-virtual.html?id=${value.goods_id}"><img src="${value.goods_small_logo}" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                            <p class="d-flex justify-content-between align-items-center card-text"><span>￥${value.goods_price}</span>
                            <button type="button" data-id="${value.goods_id}" class="btn btn-primary">加入购物车</button>
                            </p>
                        </div>
                    </div>
                </li>`;

                    });
                    str += `</ul>`;

                    return str;
                });
            } else {
                throw new Error("请求失败");
            }
        })
        .catch((err) => {
            console.log(err)
        })


    paginationContainer.onclick = function(e) {
        if (e.target.tagName.toLowerCase() === "button") {
            var goodsID = e.target.getAttribute("data-id");
            console.log("当前点的是按钮，商品id是" + goodsID);
            var goodsInfo = goodsArr.find((value) => {
                return value.goods_id === goodsID;
            })
            var shoppingCartString = localStorage.getItem("shoppingCart") || "[]";
            var shoppingCartArr = JSON.parse(shoppingCartString);
            var isExists = shoppingCartArr.find(value => value.goods_id === goodsID);
            if (isExists) {
                isExists.count++;
            } else {
                goodsInfo.count = 1;
                shoppingCartArr.push(goodsInfo);
            }
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartArr));
            location.href = "Cart.html";
        }
    }
})();