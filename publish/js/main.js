"use strict";!function(i){jQuery("nav#dropdown").meanmenu(),i(".portfolio-content").mixItUp(),i("li:first-child.filter").addClass("active"),i('[data-toggle="tooltip"]').tooltip(),i(".features-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:4,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsMobile:[767,1]}),i(".top-sells-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:4,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsMobile:[767,1]}),i(".latest-blog-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:3,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsMobile:[767,1]}),i(".brand-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:6,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,5],itemsDesktopSmall:[979,4],itemsTablet:[768,2],itemsMobile:[479,1]}),i(".category-curosel").owlCarousel({autoPlay:3e3,slideSpeed:3e3,items:5,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,5],itemsDesktopSmall:[979,4],itemsMobile:[767,1]}),i(".latest-deals-curosel").owlCarousel({autoPlay:!1,items:1,pagination:!1,navigation:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsMobile:[767,1]}),i(".top-sellers-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:4,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsMobile:[767,1]}),i(".new-product-curosel").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:2,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,2],itemsDesktopSmall:[979,1],itemsMobile:[767,1]}),i(".blog-curosel-home-3").owlCarousel({autoPlay:!1,slideSpeed:2e3,items:2,pagination:!0,navigation:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,2],itemsDesktopSmall:[979,1],itemsMobile:[767,1]}),i(".post-slider").owlCarousel({autoPlay:3e3,slideSpeed:2e3,items:1,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[600,1],itemsMobile:[767,1]}),i(".payment-accordion").collapse({accordion:!0,open:function(){this.slideDown(550)},close:function(){this.slideUp(550)}}),i.scrollUp({scrollText:'<i class="fa fa-angle-up"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"}),i("#showlogin").on("click",function(){i("#checkout-login").slideToggle(900)}),i("#showcoupon").on("click",function(){i("#checkout_coupon").slideToggle(900)}),i("#cbox").on("click",function(){i("#cbox_info").slideToggle(900)}),i("#ship-box").on("click",function(){i("#ship-box-info").slideToggle(1e3)}),i("[data-countdown]").each(function(){var e=i(this),a=i(this).data("countdown");e.countdown(a,function(a){e.html(a.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'))})}),i(function(){i("#slider-range").slider({range:!0,min:40,max:600,values:[60,570],slide:function(a,e){i("#amount").val("£"+e.values[0]+" - £"+e.values[1])}}),i("#amount").val("£"+i("#slider-range").slider("values",0)+" - £"+i("#slider-range").slider("values",1))}),i(".fancybox").fancybox(),i(".about-counter").counterUp({delay:50,time:3e3})}(jQuery);