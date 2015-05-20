$(document).ready(function(){$(".bx-slider").bxSlider({mode:"fade",captions:!0,controls:!0})}),$(".tabs-stage div").hide(),$(".tabs-stage div:first").show(),$(".tabs-nav li:first").addClass("tab-active"),$(".tabs-nav a").on("click",function(t){t.preventDefault(),$(".tabs-nav li").removeClass("tab-active"),$(this).parent().addClass("tab-active"),$(".tabs-stage div").hide(),$($(this).attr("href")).show()}),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in t)i=t[n],null!=i&&(e[n]=i);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function n(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return n.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},n.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},n.prototype.start=function(){var t,e,n,i;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(i=this.boxes,e=0,n=i.length;n>e;e++)t=i[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},n.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},n.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},n.prototype.applyStyle=function(t,e){var n,i,s;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration"),this.customStyle(t,e,i,n,s)},n.prototype.resetStyle=function(){var t,e,n,i,s;for(i=this.boxes,s=[],e=0,n=i.length;n>e;e++)t=i[e],s.push(t.setAttribute("style","visibility: visible;"));return s},n.prototype.customStyle=function(t,e,n,i,s){return e?(t.style.visibility="hidden",t.style["-webkit-animation-name"]="none",t.style["animation-name"]="none"):(t.style.visibility="visible",t.style["-webkit-animation-name"]=window.getComputedStyle(t).getPropertyValue("webkitAnimationName"),t.style["animation-name"]=window.getComputedStyle(t).getPropertyValue("animationName")),n&&(t.style["-webkit-animation-duration"]=n,t.style["-moz-animation-duration"]=n,t.style["animation-duration"]=n),i&&(t.style["-webkit-animation-delay"]=i,t.style["-moz-animation-delay"]=i,t.style["animation-delay"]=i),s&&(t.style["-webkit-animation-iteration-count"]=s,t.style["-moz-animation-iteration-count"]=s,t.style["animation-iteration-count"]=s),t},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,s;for(i=this.boxes,s=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):s.push(t));return s}.call(this),!this.boxes.length)?this.stop():void 0},n.prototype.offsetTop=function(t){var e;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},n.prototype.isVisible=function(t){var e,n,i,s,o;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=window.pageYOffset,s=o+this.element.clientHeight-n,i=this.offsetTop(t),e=i+t.clientHeight,s>=i&&e>=o},n.prototype.util=function(){return this._util||(this._util=new t)},n.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},n}()}.call(this),!function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),c=function(){o.settings=t.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in e)if(void 0!==t.style[e[n]])return o.cssPrefix=e[n].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d()},d=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",f()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&T(),o.active.last=o.settings.startSlide==m()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&E(),o.settings.auto&&o.settings.autoControls&&C(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),u(e,g)},u=function(e,n){var i=e.find("img, iframe").length;if(0==i)return void n();var s=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++s==i&&n()}).each(function(){this.complete&&t(this).load()})})},g=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,n=o.children.slice(0,e).clone().addClass("bx-clone"),i=o.children.slice(-e).clone().addClass("bx-clone");r.append(n).prepend(i)}o.loader.remove(),b(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(h()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",V),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&W(),o.settings.pager&&D(o.settings.startSlide),o.settings.controls&&N(),o.settings.touchEnabled&&!o.settings.ticker&&q()},h=function(){var e=0,n=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;i<=o.settings.maxSlides-1;i++)n=n.add(s+i>=o.children.length?o.children.eq(i-1):o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},f=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},v=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},m=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/x();else for(var e=0,n=0;e<o.children.length;)++t,e=n+v(),n+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else t=Math.ceil(o.children.length/v());return t},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},b=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();S(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var n=o.children.length-o.settings.minSlides,e=o.children.eq(n).position();S(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*x()).position();o.active.index==m()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0))}},S=function(t,e,n,i){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"==e?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()})):"reset"==e?r.css(o.animProp,s):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(i.resetValue,"reset",0),$()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,n,o.settings.easing,function(){I()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){S(i.resetValue,"reset",0),$()})}},y=function(){for(var e="",n=m(),i=0;n>i;i++){var s="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(i),o.pagerEl.addClass("bx-custom-pager")):(s=i+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(e)},w=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),y()),o.pagerEl.delegate("a","click",A)},E=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",k),o.controls.prev.bind("click",P),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},C=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",M),o.controls.autoEl.delegate(".bx-stop","click",z),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),H(o.settings.autoStart?"stop":"start")},T=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},k=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},P=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},M=function(t){r.startAuto(),t.preventDefault()},z=function(t){r.stopAuto(),t.preventDefault()},A=function(e){o.settings.auto&&r.stopAuto();var n=t(e.currentTarget),i=parseInt(n.attr("data-slide-index"));i!=o.active.index&&r.goToSlide(i),e.preventDefault()},D=function(e){var n=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(n=Math.ceil(o.children.length/o.settings.maxSlides)),void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+n)):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(n,i){t(i).find("a").eq(e).addClass("active")}))},I=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==m()-1&&o.carousel?t=o.children.eq((m()-1)*x()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},H=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},N=function(){1==m()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==m()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},W=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var n=o.children.first().position();e="horizontal"==o.settings.mode?-n.left:-n.top}S(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var n=o.settings.speed/e,i="horizontal"==o.settings.mode?"left":"top",s=n*(e-Math.abs(parseInt(r.css(i))));$(s)}),$()},$=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},n={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():n=o.children.first().position();var i="horizontal"==o.settings.mode?-e.left:-e.top,s="horizontal"==o.settings.mode?-n.left:-n.top,a={resetValue:s};S(i,"ticker",speed,a)},q=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",j)},j=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",O),o.viewport.bind("touchend",F)}},O=function(t){var e=t.originalEvent,n=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),i=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*n>i&&o.settings.preventDefaultSwipeX?t.preventDefault():3*i>n&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},F=function(t){o.viewport.unbind("touchmove",O);var e=t.originalEvent,n=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var i=Math.abs(o.touch.start.x-o.touch.end.x);i>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var i=0;"horizontal"==o.settings.mode?(i=o.touch.end.x-o.touch.start.x,n=o.touch.originalPos.left):(i=o.touch.end.y-o.touch.start.y,n=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&i>0||o.active.last&&0>i)?S(n,"reset",200):Math.abs(i)>=o.settings.swipeThreshold?(0>i?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(n,"reset",200)}o.viewport.unbind("touchend",F)},V=function(){var e=t(window).width(),n=t(window).height();(a!=e||l!=n)&&(a=e,l=n,r.redrawSlider())};return r.goToSlide=function(e,n){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?m()-1:e>=m()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==n?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==n&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=m()-1,o.settings.pager&&D(o.active.index),o.settings.controls&&N(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),I()});else{o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed);var i=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),i=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==n){var c=1==o.settings.moveSlides?o.settings.maxSlides-x():(m()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(c);s=a.position()}else if("next"==n&&0==o.active.index)s=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var d=e*x();s=o.children.eq(d).position()}if("undefined"!=typeof s){var u="horizontal"==o.settings.mode?-(s.left-i):-s.top;S(u,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&H("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&H("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(f()),o.viewport.css("height",h()),o.settings.ticker||b(),o.active.last&&(o.active.index=m()-1),o.active.index>=m()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(y(),D(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",V))},r.reloadSlider=function(t){void 0!=t&&(s=t),r.destroySlider(),c()},c(),this}}(jQuery),window.Modernizr=function(t,e,n){function i(t){b.cssText=t}function s(t,e){return i(E.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var s=t[i];if(!r(s,"-")&&b[s]!==n)return"pfx"==e?s:!0}return!1}function l(t,e,i){for(var s in t){var r=e[t[s]];if(r!==n)return i===!1?t[s]:o(r,"function")?r.bind(i||e):r}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+T.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?a(s,e):(s=(t+" "+k.join(i+" ")+i).split(" "),l(s,e,n))}function d(){p.input=function(n){for(var i=0,s=n.length;s>i;i++)A[n[i]]=!!(n[i]in S);return A.list&&(A.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var i,s,o,r=0,a=t.length;a>r;r++)S.setAttribute("type",s=t[r]),i="text"!==S.type,i&&(S.value=y,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&S.style.WebkitAppearance!==n?(v.appendChild(S),o=e.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,v.removeChild(S)):/^(search|tel)$/.test(s)||(i=/^(url|email)$/.test(s)?S.checkValidity&&S.checkValidity()===!1:S.value!=y)),z[t[r]]=!!i;return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,g,h="2.8.3",p={},f=!0,v=e.documentElement,m="modernizr",x=e.createElement(m),b=x.style,S=e.createElement("input"),y=":)",w={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",T=C.split(" "),k=C.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},M={},z={},A={},D=[],I=D.slice,H=function(t,n,i,s){var o,r,a,l,c=e.createElement("div"),d=e.body,u=d||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=s?s[i]:m+(i+1),c.appendChild(a);return o=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),c.id=m,(d?c:u).innerHTML+=o,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=v.style.overflow,v.style.overflow="hidden",v.appendChild(u)),r=n(c,t),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),v.style.overflow=l),!!r},N=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return H("@media "+e+" { #"+m+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},L=function(){function t(t,s){s=s||e.createElement(i[t]||"div"),t="on"+t;var r=t in s;return r||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),r=o(s[t],"function"),o(s[t],"undefined")||(s[t]=n),s.removeAttribute(t))),s=null,r}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),W={}.hasOwnProperty;g=o(W,"undefined")||o(W.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return W.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=I.call(arguments,1),i=function(){if(this instanceof i){var s=function(){};s.prototype=e.prototype;var o=new s,r=e.apply(o,n.concat(I.call(arguments)));return Object(r)===r?r:o}return e.apply(t,n.concat(I.call(arguments)))};return i}),M.flexbox=function(){return c("flexWrap")},M.flexboxlegacy=function(){return c("boxDirection")},M.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!t.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:H(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!t.postMessage},M.websqldatabase=function(){return!!t.openDatabase},M.indexedDB=function(){return!!c("indexedDB",t)},M.hashchange=function(){return L("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},M.history=function(){return!(!t.history||!history.pushState)},M.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},M.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},M.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),r(b.backgroundColor,"rgba")},M.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),r(b.backgroundColor,"rgba")||r(b.backgroundColor,"hsla")},M.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return c("backgroundSize")},M.borderimage=function(){return c("borderImage")},M.borderradius=function(){return c("borderRadius")},M.boxshadow=function(){return c("boxShadow")},M.textshadow=function(){return""===e.createElement("div").style.textShadow},M.opacity=function(){return s("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return c("animationName")},M.csscolumns=function(){return c("columnCount")},M.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+E.join(n+t)).slice(0,-t.length)),r(b.backgroundImage,"gradient")},M.cssreflections=function(){return c("boxReflect")},M.csstransforms=function(){return!!c("transform")},M.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in v.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},M.csstransitions=function(){return c("transition")},M.fontface=function(){var t;return H('@font-face {font-family:"font";src:url("https://")}',function(n,i){var s=e.getElementById("smodernizr"),o=s.sheet||s.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(r)&&0===r.indexOf(i.split(" ")[0])}),t},M.generatedcontent=function(){var t;return H(["#",m,"{font:0/0 a}#",m,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},M.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},M.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},M.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(t){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(t){return!1}},M.webworkers=function(){return!!t.Worker},M.applicationcache=function(){return!!t.applicationCache},M.svg=function(){return!!e.createElementNS&&!!e.createElementNS(P.svg,"svg").createSVGRect},M.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==P.svg},M.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(P.svg,"animate")))},M.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(P.svg,"clipPath")))};for(var $ in M)g(M,$)&&(u=$.toLowerCase(),p[u]=M[$](),D.push((p[u]?"":"no-")+u));return p.input||d(),p.addTest=function(t,e){if("object"==typeof t)for(var i in t)g(t,i)&&p.addTest(i,t[i]);else{if(t=t.toLowerCase(),p[t]!==n)return p;e="function"==typeof e?e():e,"undefined"!=typeof f&&f&&(v.className+=" "+(e?"":"no-")+t),p[t]=e}return p},i(""),x=S=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=x.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=m[t[f]];return e||(e={},v++,t[f]=v,m[v]=e),e}function o(t,n,i){if(n||(n=e),d)return n.createElement(t);i||(i=s(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||h.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function r(t,n){if(t||(t=e),d)return t.createDocumentFragment();n=n||s(t);for(var o=n.frag.cloneNode(),r=0,a=i(),l=a.length;l>r;r++)o.createElement(a[r]);return o}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return x.shivMethods?o(n,t,e):e.createElem(n)
},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(x,e.frag)}function l(t){t||(t=e);var i=s(t);return!x.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||a(t,i),t}var c,d,u="3.7.0",g=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",v=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,d=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,d=!0}}();var x={elements:g.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:g.shivCSS!==!1,supportsUnknownElements:d,shivMethods:g.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:r};t.html5=x,l(e)}(this,e),p._version=h,p._prefixes=E,p._domPrefixes=k,p._cssomPrefixes=T,p.mq=N,p.hasEvent=L,p.testProp=function(t){return a([t])},p.testAllProps=c,p.testStyles=H,p.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+D.join(" "):""),p}(this,this.document);