!function(a){woodmartThemeModule.$document.on("wdShopPageInit",function(){woodmartThemeModule.stickySidebarBtn()}),woodmartThemeModule.stickySidebarBtn=function(){var b=a(".wd-show-sidebar-btn"),c=a(".wd-sidebar-opener.wd-on-shop:not(.toolbar)");if(!(c.length<=0||b.length<=0||woodmartThemeModule.$window.width()>=1024)){var d=function(){b.offset().top+b.outerHeight()<woodmartThemeModule.$window.scrollTop()?c.addClass("wd-sticky"):c.removeClass("wd-sticky")};d(),woodmartThemeModule.$window.on("scroll",d),woodmartThemeModule.$window.on("resize",d)}},a(document).ready(function(){woodmartThemeModule.stickySidebarBtn()})}(jQuery)
;