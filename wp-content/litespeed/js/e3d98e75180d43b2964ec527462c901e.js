!function(a){woodmartThemeModule.$document.on("wdReplaceMainGallery",function(){woodmartThemeModule.productImagesGallery()}),a.each(["frontend/element_ready/wd_single_product_gallery.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(a){woodmartThemeModule.productImagesGallery(),a.find(".woocommerce-product-gallery").css("opacity","1")})}),woodmartThemeModule.productImagesGallery=function(){woodmartThemeModule.setupMainCarouselArg(),a(".woocommerce-product-gallery").each(function(){function b(){void 0!==a.fn.owlCarousel&&(g.trigger("destroy.owl.carousel"),g.addClass("owl-carousel").owlCarousel(woodmartThemeModule.mainCarouselArg),woodmartThemeModule.$document.trigger("wood-images-loaded"))}function c(){var b="";g.find(".woocommerce-product-gallery__image").each(function(){var c=a(this),d=c.data("thumb"),e=c.find("a img").attr("alt"),f=c.find("a img").attr("title");f||(f=c.find("a picture").attr("title")),b+='<div class="product-image-thumbnail"><img alt="'+e+'" title="'+f+'" src="'+d+'" /></div>'}),h.hasClass("slick-slider")?h.slick("unslick"):h.hasClass("owl-carousel")&&h.trigger("destroy.owl.carousel"),h.empty(),h.append(b)}function d(){h.slick({slidesToShow:woodmart_settings.product_gallery.thumbs_slider.items.vertical_items,slidesToScroll:woodmart_settings.product_gallery.thumbs_slider.items.vertical_items,vertical:!0,verticalSwiping:!0,infinite:!1}),h.on("click",".product-image-thumbnail",function(){g.trigger("to.owl.carousel",a(this).index())}),g.on("changed.owl.carousel",function(a){var b=a.item.index;h.slick("slickGoTo",b),h.find(".active-thumb").removeClass("active-thumb"),h.find(".product-image-thumbnail").eq(b).addClass("active-thumb")}),h.find(".product-image-thumbnail").eq(0).addClass("active-thumb"),h.imagesLoaded(function(){h.slick("setPosition")})}function e(){if(void 0!==a.fn.owlCarousel){h.addClass("owl-carousel").owlCarousel({rtl:woodmartThemeModule.$body.hasClass("rtl"),items:woodmart_settings.product_gallery.thumbs_slider.items.desktop,responsive:{1025:{items:woodmart_settings.product_gallery.thumbs_slider.items.desktop},769:{items:woodmart_settings.product_gallery.thumbs_slider.items.tablet_landscape},577:{items:woodmart_settings.product_gallery.thumbs_slider.items.tablet},0:{items:woodmart_settings.product_gallery.thumbs_slider.items.mobile}},dots:!1,nav:!0,navText:!1,navClass:["owl-prev wd-btn-arrow","owl-next wd-btn-arrow"]});var b=h.owlCarousel();h.on("mouseup",".owl-item",function(){var c=a(this).index();b.trigger("to.owl.carousel",c),g.trigger("to.owl.carousel",c)}),g.on("changed.owl.carousel",function(a){var c=a.item.index;b.trigger("to.owl.carousel",c),h.find(".active-thumb").removeClass("active-thumb"),h.find(".product-image-thumbnail").eq(c).addClass("active-thumb")}),h.find(".product-image-thumbnail").eq(0).addClass("active-thumb")}}var f=a(this),g=f.find(".woocommerce-product-gallery__wrapper:not(.quick-view-gallery)"),h=f.find(".thumbnails");h.addClass("thumbnails-ready"),(f.hasClass("thumbs-position-without")||f.hasClass("thumbs-position-centered")||f.hasClass("thumbs-position-bottom")||f.hasClass("thumbs-position-left")||f.hasClass("thumbs-position-carousel_two_columns"))&&("yes"===woodmart_settings.product_slider_auto_height?f.imagesLoaded(function(){b()}):b()),woodmartThemeModule.$window.width()<=1024&&(f.hasClass("thumbs-position-bottom_combined")||f.hasClass("thumbs-position-bottom_column")||f.hasClass("thumbs-position-bottom_grid"))&&b(),0!==h.length&&(c(),f.hasClass("thumbs-position-left")&&woodmartThemeModule.$body.width()>1024&&void 0!==a.fn.slick?d():e())})},woodmartThemeModule.$window.on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&woodmartThemeModule.$window.on("resize",woodmartThemeModule.debounce(function(){woodmartThemeModule.productImagesGallery()},300))}),a(document).ready(function(){woodmartThemeModule.productImagesGallery()})}(jQuery)
;