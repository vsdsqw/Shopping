"use strict";!function(){var e=[],o=document.getElementById("paginationContainer");TE.pGet("/php/getGoods.php",{}).then(function(t){if(t.error)throw new Error("请求失败");e=t.msg,new Pagination(o,t.msg,0,12).display(function(t){console.log(t);var o='<ul style="width:100%;" class="row wrap-column list-group list-group-horizontal-sm no-gutters" >';return t.forEach(function(t){o+='<li class="col col-4 list-group-item" style="padding:0 10px 20px 10px; border: none">\n                    <div class="card">\n                        <a href="./product-virtual.html?id='+t.goods_id+'"><img src="'+t.goods_small_logo+'" class="card-img-top" alt="..."></a>\n                        <div class="card-body">\n                            <p class="d-flex justify-content-between align-items-center card-text"><span>￥'+t.goods_price+'</span>\n                            <button type="button" data-id="'+t.goods_id+'" class="btn btn-primary">加入购物车</button>\n                            </p>\n                        </div>\n                    </div>\n                </li>'}),o+="</ul>"})}).catch(function(t){console.log(t)}),o.onclick=function(t){if("button"===t.target.tagName.toLowerCase()){var o=t.target.getAttribute("data-id");console.log("当前点的是按钮，商品id是"+o);var n=e.find(function(t){return t.goods_id===o}),i=localStorage.getItem("shoppingCart")||"[]",a=JSON.parse(i),r=a.find(function(t){return t.goods_id===o});r?r.count++:(n.count=1,a.push(n)),localStorage.setItem("shoppingCart",JSON.stringify(a)),location.href="Cart.html"}}}();