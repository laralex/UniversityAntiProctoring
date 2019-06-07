/**
 * Plugin: kk Star Ratings
 *
 * Description: js for the wordpress plugin kk Star Ratings.
 *
 * @package kk Star Ratings
 * @subpackage WordPress Plugin
 * @author Kamal Khan
 * @plugin_uri http://wakeusup.com/2011/05/kk-star-ratings/
 */
!function(e,t,n,s){e.fn.kkstarratings=function(t){e.fn.kkstarratings.options=e.extend({ajaxurl:null,nonce:null,func:null,grs:!1,msg:"Rate this post",fuelspeed:400,thankyou:"Thank you for rating.",error_msg:"An error occured.",tooltip:!0,tooltips:{0:{tip:"Poor",color:"red"},1:{tip:"Fair",color:"brown"},2:{tip:"Average",color:"orange"},3:{tip:"Good",color:"blue"},4:{tip:"Excellent",color:"green"}}},e.fn.kkstarratings.options,t||{});var n=[];return this.each(function(){n.push(e(this))}),e.fn.kkstarratings.fetch(n,0,"0%",e.fn.kkstarratings.options.msg,!0),this.each(function(){})},e.fn.kkstarratings.animate=function(i){if(i.hasClass("disabled"))e(".kksr-stars a",i).unbind("click").click(function(){return!1});else{var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};if(t.any())e(".kksr-stars a",i).unbind("click").click(function(){return e.fn.kkstarratings.click(i,e(this).attr("href").split("#")[1])});else{var n=e(".kksr-legend",i).html(),s=e(".kksr-fuel",i).css("width");e(".kksr-stars a",i).hover(function(){var a=e(this).attr("href").split("#")[1];0!=e.fn.kkstarratings.options.tooltip&&(null!=e.fn.kkstarratings.options.tooltips[a-1]?e(".kksr-legend",i).html('<span style="color:'+e.fn.kkstarratings.options.tooltips[a-1].color+'">'+e.fn.kkstarratings.options.tooltips[a-1].tip+"</span>"):e(".kksr-legend",i).html(n)),e(".kksr-fuel",i).stop(!0,!0).css("width","0%"),e(".kksr-stars a",i).each(function(t,n){var s=e(this),r=s.attr("href").split("#")[1];parseInt(r)<=parseInt(a)&&(e(".kksr-stars a",i).stop(!0,!0),s.hide().addClass("kksr-star").addClass("orange").fadeIn("fast"))})},function(){e(".kksr-stars a",i).removeClass("kksr-star").removeClass("orange"),0!=e.fn.kkstarratings.options.tooltip&&e(".kksr-legend",i).html(n),e(".kksr-fuel",i).stop(!0,!0).animate({width:s},e.fn.kkstarratings.options.fuelspeed)}).unbind("click").click(function(){return e.fn.kkstarratings.click(i,e(this).attr("href").split("#")[1])})}}},e.fn.kkstarratings.update=function(t,n,s,r,a){"true"==r&&e(".kksr-fuel",t).removeClass("yellow").addClass("orange"),e(".kksr-fuel",t).stop(!0,!0).animate({width:n},e.fn.kkstarratings.options.fuelspeed,"linear",function(){"true"==r&&(t.addClass("disabled"),e(".kksr-stars a",t).unbind("hover")),e.fn.kkstarratings.options.grs&&a?e.fn.kkstarratings.animate(t):e(".kksr-legend",t).stop(!0,!0).hide().html(s||e.fn.kkstarratings.options.msg).fadeIn("slow",function(){e.fn.kkstarratings.animate(t)})})},e.fn.kkstarratings.click=function(t,n){e(".kksr-stars a",t).unbind("hover").unbind("click").removeClass("kksr-star").removeClass("orange").click(function(){return!1});var s=e(".kksr-legend",t).html(),r=e(".kksr-fuel",t).css("width");return e.fn.kkstarratings.fetch(t,n,r,s,!1),!1},e.fn.kkstarratings.fetch=function(n,t,r,a,i){var s=[];e.each(n,function(){s.push(e(this).attr("data-id"))}),e.ajax({url:e.fn.kkstarratings.options.ajaxurl,data:"action="+e.fn.kkstarratings.options.func+"&id="+s+"&stars="+t+"&_wpnonce="+e.fn.kkstarratings.options.nonce,type:"post",dataType:"json",beforeSend:function(){e(".kksr-fuel",n).animate({width:"0%"},e.fn.kkstarratings.options.fuelspeed),t&&e(".kksr-legend",n).fadeOut("fast",function(){e(".kksr-legend",n).html('<span style="color: green">'+e.fn.kkstarratings.options.thankyou+"</span>")}).fadeIn("slow")},success:function(s){e.each(n,function(){var t=e(this),n=t.attr("data-id");s[n].success?e.fn.kkstarratings.update(t,s[n].fuel+"%",s[n].legend,s[n].disable,i):e.fn.kkstarratings.update(t,r,a,!1,i)})},complete:function(){},error:function(t){e(".kksr-legend",n).fadeOut("fast",function(){e(".kksr-legend",n).html('<span style="color: red">'+e.fn.kkstarratings.options.error_msg+"</span>")}).fadeIn("slow",function(){e.fn.kkstarratings.update(n,r,a,!1,i)})}})},e.fn.kkstarratings.options={ajaxurl:bhittani_plugin_kksr_js.ajaxurl,func:bhittani_plugin_kksr_js.func,nonce:bhittani_plugin_kksr_js.nonce,grs:bhittani_plugin_kksr_js.grs,tooltip:bhittani_plugin_kksr_js.tooltip,tooltips:bhittani_plugin_kksr_js.tooltips,msg:bhittani_plugin_kksr_js.msg,fuelspeed:bhittani_plugin_kksr_js.fuelspeed,thankyou:bhittani_plugin_kksr_js.thankyou,error_msg:bhittani_plugin_kksr_js.error_msg}}(jQuery,window,document),jQuery(document).ready(function(t){t(".kk-star-ratings").kkstarratings()});