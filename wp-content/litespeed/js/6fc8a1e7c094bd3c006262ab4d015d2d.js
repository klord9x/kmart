!function(a){woodmartThemeModule.cartWidget=function(){var b=woodmartThemeModule.$body,c=a(".cart-widget-side"),d=a(".wd-close-side");b.on("click",".cart-widget-opener",function(a){h()||i()||a.preventDefault(),g()?e():setTimeout(function(){f()},10)}),b.on("click touchstart",".wd-close-side",function(){g()&&e()}),b.on("click",".close-side-widget",function(a){a.preventDefault(),g()&&e()}),woodmartThemeModule.$document.on("keyup",function(a){27===a.keyCode&&g()&&e()});var e=function(){c.removeClass("wd-opened"),d.removeClass("wd-close-side-opened")},f=function(){if(h()||i())return!1;c.addClass("wd-opened"),d.addClass("wd-close-side-opened")},g=function(){return c.hasClass("wd-opened")},h=function(){return woodmartThemeModule.$body.hasClass("woocommerce-cart")},i=function(){return woodmartThemeModule.$body.hasClass("woocommerce-checkout")}},a(document).ready(function(){woodmartThemeModule.cartWidget()})}(jQuery)
;