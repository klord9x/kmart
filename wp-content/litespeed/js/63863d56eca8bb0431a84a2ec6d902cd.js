(function(){var a,b;a=window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p;for(null==c&&(c={}),p=c.sticky_class,i=c.inner_scrolling,o=c.recalc_every,n=c.parent,l=c.offset_top,k=c.spacer,f=c.bottoming,null==l&&(l=0),null==n&&(n=void 0),null==i&&(i=!0),null==p&&(p="is_stuck"),d=a(document),null==f&&(f=!0),m=function(a){var b,c;return window.getComputedStyle?(a[0],b=window.getComputedStyle(a[0]),c=parseFloat(b.getPropertyValue("width"))+parseFloat(b.getPropertyValue("margin-left"))+parseFloat(b.getPropertyValue("margin-right")),"border-box"!==b.getPropertyValue("box-sizing")&&(c+=parseFloat(b.getPropertyValue("border-left-width"))+parseFloat(b.getPropertyValue("border-right-width"))+parseFloat(b.getPropertyValue("padding-left"))+parseFloat(b.getPropertyValue("padding-right"))),c):a.outerWidth(!0)},g=function(c,e,g,h,j,q,r,s){var t,u,v,w,x,y,z,A,B,C,D,E;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),x=d.height(),z=c.parent(),null!=n&&(z=z.closest(n)),!z.length)throw"failed to find stick parent";if(v=!1,t=!1,D=null!=k?k&&c.closest(k):a("<div />"),D&&D.css("position",c.css("position")),A=function(){var a,b,f;if(!s)return x=d.height(),a=parseInt(z.css("border-top-width"),10),b=parseInt(z.css("padding-top"),10),e=parseInt(z.css("padding-bottom"),10),g=z.offset().top+a+b,h=z.height(),v&&(v=!1,t=!1,null==k&&(c.insertAfter(D),D.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(p),f=!0),j=c.offset().top-(parseInt(c.css("margin-top"),10)||0)-l,q=c.outerHeight(!0),r=c.css("float"),D&&D.css({width:m(c),height:q,display:c.css("display"),"vertical-align":c.css("vertical-align"),float:r}),f?E():void 0},A(),q!==h)return w=void 0,y=l,C=o,E=function(){var a,m,n,u,B,E;if(!s)return n=!1,null!=C&&(C-=1)<=0&&(C=o,A(),n=!0),n||d.height()===x||(A(),n=!0),u=b.scrollTop(),null!=w&&(m=u-w),w=u,v?(f&&(B=u+q+y>h+g,t&&!B&&(t=!1,c.css({position:"fixed",bottom:"",top:y}).trigger("sticky_kit:unbottom"))),u<j&&(v=!1,y=l,null==k&&("left"!==r&&"right"!==r||c.insertAfter(D),D.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(p).trigger("sticky_kit:unstick")),i&&(E=b.height(),q+l>E&&(t||(y-=m,y=Math.max(E-q,y),y=Math.min(l,y),v&&c.css({top:y+"px"}))))):u>j&&(v=!0,a={position:"fixed",top:y},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(p),null==k&&(c.after(D),"left"!==r&&"right"!==r||D.append(c)),c.trigger("sticky_kit:stick")),v&&f&&(null==B&&(B=u+q+y>h+g),!t&&B)?(t=!0,"static"===z.css("position")&&z.css({position:"relative"}),c.css({position:"absolute",bottom:e,top:"auto"}).trigger("sticky_kit:bottom")):void 0},B=function(){return A(),E()},u=function(){if(s=!0,b.off("touchmove",E),b.off("scroll",E),b.off("resize",B),a(document.body).off("sticky_kit:recalc",B),c.off("sticky_kit:detach",u),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),z.position("position",""),v)return null==k&&("left"!==r&&"right"!==r||c.insertAfter(D),D.remove()),c.removeClass(p)},b.on("touchmove",E),b.on("scroll",E),b.on("resize",B),a(document.body).on("sticky_kit:recalc",B),c.on("sticky_kit:detach",u),setTimeout(E,0)}},h=0,j=this.length;h<j;h++)e=this[h],g(a(e));return this}}).call(this)
;