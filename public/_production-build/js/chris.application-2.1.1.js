define(["jquery","chris.library","blocksit","prettify","jquery.hoverdir"],function(e,t){var n=function(){t.log("# cssModifier");var e=$(".ui-page-active"),n=e.width(),i=e.find("div#main"),s=e.find("aside#right-side");r(i,s,n),$(window).resize(function(){n=$(".ui-page-active").width(),r(i,s,n)})},r=function(e,n,r){t.log("responsive classes ..."),r<=767?(e.hasClass("col-12")&&e.removeClass("col-12 col-sm-8 col-lg-8"),n.hasClass("col-6")&&n.removeClass("col-6 col-sm-4 col-lg-4")):(e.hasClass("col-12")||e.addClass("col-12 col-sm-8 col-lg-8"),n.hasClass("col-6")||n.addClass("col-6 col-sm-4 col-lg-4"))},i=function(e){t.log("# initializeReadinglist");var n="readinglist_container",r=$("#"+e+" ."+n).width();t.log("containerWidth: "+r);var i=3;r<727&&(i=2),r<654&&(i=1),$("#"+e+" ."+n).BlocksIt({numOfCol:i,offsetX:0,offsetY:0,blockElement:".readinglist_box"}),t.log("blocksit got intialized"),t.isTouchDevice()||($("."+n+" > .readinglist_box").each(function(){$(this).hoverdir({hoverDelay:5})}),t.log
("hoverdir got intialized"))},s=function(e){t.log("# initializeBookmarks");var n=$("#bookmarks_container");n.off(),n.on("tap","a:not(#bookmarks_back)",function(e){e.preventDefault();var n=$(this).attr("data-chris-tag-key");t.log($(this).attr("href")+"?format=json");var r=$.ajax({url:$(this).attr("href")+"?format=json",type:"GET",dataType:"json"});r.done(function(e){t.log(e);if($.type(e.results)==="array"&&e.results.length>0){window.scrollTo(0,0);var r=$("section#core-box");r.css("overflow","hidden"),r.css("min-height",r.height());var i="";$.each(e.results,function(e,t){i+="<li>",i+='<a href="'+t.url+'" title="'+t.title+'">',i+=t.title+"<br>"+t.url,i+="</a>",i+="</li>"});var s=$('<div id="bookmarks_list"></div>'),o='<a class="btn btn-primary ui-link" href="/mybookmarks" id="bookmarks_back">BACK</a>';s.append(o);var u=$('<ul id="boomarks_'+n+'" data-role="listview" data-autodividers="true" data-inset="true">'+i+"</ul>");s.append(u);var a=$("#tags_list");a.css("width",a.width()),s.css("width"
,a.width());var f=r.find("#bookmarks_container");f.css("width",parseInt(r.width())*2+500),a.after(s),a.css("float","left"),s.css("float","left"),u.listview().trigger("create"),a.animate({width:"toggle"},300,function(){})}}),r.fail(function(e,n){t.log("bookmarks request failed: "+n)})}),n.on("tap","a#bookmarks_back",function(e){e.preventDefault(),t.log("#bookmarks_list click BACK"),window.scrollTo(0,0);var n=$("#tags_list");n.find("#bookmarks").find("li").find("a").removeClass($.mobile.activeBtnClass),n.animate({width:"toggle"},300,function(){var e=$("#bookmarks_list");e.remove()})})},o=function(){t.log("# loadFacebookSDK"),window.fbAsyncInit=function(){FB.init({appId:"424957510901747",status:!0,cookie:!0,xfbml:!0}),FB.XFBML.parse()},function(e){var t,n="facebook-jssdk",r=e.getElementsByTagName("script")[0];if(e.getElementById(n))return;t=e.createElement("script"),t.id=n,t.async=!0,t.src="//connect.facebook.net/en_US/all.js",r.parentNode.insertBefore(t,r)}(document)},u=function(){t.log("# initializeGoogleAnalytics 1"
),typeof _gaq!="undefined"&&(_gaq.push(["_setAccount","UA-16705563-1"]),hash=location.hash,t.log("found hash: "+hash),hash?_gaq.push(["_trackPageview",hash.substr(1)]):_gaq.push(["_trackPageview"]))},a=function(){t.log("# autoPopulateReadinglistForm");var e=$("#url").val();t.log(e),$("#alert_box").empty();if(e)$.post("/readinglist/admin/ajax/getwebsitedata?format=json",{articleurl:e},function(e){t.log(e.websiteData,"data.websiteData"),t.log(e.websiteData.description,"description"),t.log(e.websiteData.title,"title"),t.log(e.websiteData.favicon,"favicon"),t.log(e.websiteData.image,"image"),t.log(e.websiteData.domain,"domain");if(!e.websiteData.error)$("#title").val(e.websiteData.title),$("#headline").val(e.websiteData.description),$("#imageUrl").val(e.websiteData.image),$("#favicon").val(e.websiteData.favicon),$("#domain").val(e.websiteData.domain);else{var n=$("<div>",{"class":"alert alert-error",text:e.websiteData.error});$("#alert_box").html(n)}},"json");else{var n=$("<div>",{"class":"alert alert-error"
,text:"No URL given"});$("#alert_box").html(n)}};return{initializeApp:function(){t.log("app got intialized")},initializeReadinglist:i,initializeBookmarks:s,loadFacebookSDK:o,initializeGoogleAnalytics:u,autoPopulateReadinglistForm:a,cssModifier:n}});