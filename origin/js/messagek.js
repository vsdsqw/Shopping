var getParam = function(key) {
    var querystring = location.search.slice(1);
    var arr = querystring.split("$");
    for (var i = 0; i < arr.length; i++) {
        var subArr = arr[i].split("=");
        if (key === subArr[0]) {
            return subArr[1];
        }
    }
}
var id = getParam("id");

var box = document.getElementById("box");

TE.get("../php/getgoodsinfobyid.php", {
    id
}, ({
    error,
    data
}) => {
    box.innerHTML = `
    <div class="row">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="single-product-image">
        <div class="single-product-tab">
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home"><img alt="" src="${data.goods_big_logo}"></div>
            </div>
        </div>
    </div>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="single-product-info">
        <h1 class="product_title">${data.goods_name}</h1>
        <div class="price-box">
            <span class="new-price"> ${data.goods_price}</span>
        </div>
        <div class="pro-rating">
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
        </div>
        <div class="short-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla.</p>
        </div>
        <div class="stock-status">
            <label>当前库存为</label>: <strong>${data.goods_number}</strong>
        </div>
        <form action="#">
            <div class="quantity">
                <button type="submit">加入购物车</button>
            </div>
        </form>
        <div class="share_buttons">
            <a href="#"><img src="../resource/img/share-img.png" alt="" /></a>
        </div>
    </div>
</div>
</div>
${data.goods_introduce}
`
})