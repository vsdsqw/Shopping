"use strict";!function(n){n.fn.meanmenu=function(P){var e={meanMenuTarget:jQuery(this),meanMenuContainer:".mobile-menu-area .container",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"767",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};P=n.extend(e,P);var W=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var a=P.meanMenuTarget,t=P.meanMenuContainer,r=P.meanMenuClose,i=P.meanMenuCloseSize,m=P.meanMenuOpen,n=P.meanRevealPosition,e=P.meanRevealPositionDistance,s=P.meanRevealColour,u=P.meanScreenWidth,l=P.meanNavPush,o=".meanmenu-reveal",c=P.meanShowChildren,h=P.meanExpandableChildren,v=P.meanExpand,d=P.meanContract,y=P.meanRemoveAttrs,j=P.onePage,Q=P.meanDisplay,f=P.removeElements,g=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(g=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var p="",C=function(){if("center"===n){var e=(window.innerWidth||document.documentElement.clientWidth)/2-22+"px";p="left:"+e+";right:auto;",g?jQuery(".meanmenu-reveal").animate({left:e}):jQuery(".meanmenu-reveal").css("left",e)}},w=!1,x=!1;"right"===n&&(p="right:"+e+";left:auto;"),"left"===n&&(p="left:"+e+";right:auto;"),C();var A="",E=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(a).css("display",Q),x=w=!1,jQuery(f).removeClass("mean-remove")},M=function(){var e="background:"+s+";color:"+s+";"+p;if(W<=u){jQuery(f).addClass("mean-remove"),x=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var n=jQuery(a).html();jQuery(".mean-nav").html(n),y&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(a).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",l),jQuery(a).hide(),jQuery(".meanmenu-reveal").show(),jQuery(o).html(m),A=jQuery(o),jQuery(".mean-nav ul").hide(),c?h?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+v+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(v),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(d),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),A.removeClass("meanclose"),jQuery(A).click(function(e){e.preventDefault(),w=!1===w?(A.css("text-align","center"),A.css("text-indent","0"),A.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),!0):(jQuery(".mean-nav ul:first").slideUp(),!1),A.toggleClass("meanclose"),jQuery(A).is(".meanmenu-reveal.meanclose")?A.html(r):A.html(m),jQuery(f).addClass("mean-remove")}),j&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),w=!1,jQuery(A).toggleClass("meanclose").html(m)})}else E()};g||jQuery(window).resize(function(){W=window.innerWidth||document.documentElement.clientWidth,E(),W<=u?(M(),C()):E()}),jQuery(window).resize(function(){W=window.innerWidth||document.documentElement.clientWidth,g?(C(),W<=u?!1===x&&M():E()):(E(),W<=u&&(M(),C()))}),M()})}}(jQuery);