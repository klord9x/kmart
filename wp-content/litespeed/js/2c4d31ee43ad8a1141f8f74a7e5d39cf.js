!function(a){a.each(["frontend/element_ready/wd_single_product_add_to_cart.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(){woodmartThemeModule.variationsPrice()})}),woodmartThemeModule.variationsPrice=function(){"no"!==woodmart_settings.single_product_variations_price&&a(".variations_form").each(function(){var b=a(this),c=b.parents(".site-content").find(" p.price"),d=c.html();b.on("show_variation",function(a,b){b.price_html.length>1&&c.html(b.price_html)}),b.on("hide_variation",function(){c.html(d)})})},a(document).ready(function(){woodmartThemeModule.variationsPrice()})}(jQuery)
;