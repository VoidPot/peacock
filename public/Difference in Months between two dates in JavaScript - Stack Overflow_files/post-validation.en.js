(()=>{var e={p:""};(()=>{"use strict";e.p=document.getElementById("webpack-public-path").innerText+"Js/"})(),StackExchange=window.StackExchange=window.StackExchange||{},StackOverflow=window.StackOverflow=window.StackOverflow||{},StackExchange.postValidation=function(){var e=$("body").hasClass("js-ask-page-v2"),t=$("body").hasClass("js-staging-ground-wizard"),a="Title",r="Body",n="Tags",i="Mentions",o="EditComment",s="Excerpt",l="Email",c="General";const d="disable-blur-validation";function u(e,t,a){var r={Title:".js-post-title-field",Body:".js-post-body-field[data-post-type-id="+t+"]",Tags:".js-post-tags-field",Mentions:".js-post-mentions-field",EditComment:".js-post-edit-comment-field",Excerpt:".js-post-excerpt-field",Email:".js-post-email-field",ArticleType:".js-article-type-field",Date:".js-post-date-field",CommentForm:".js-comment-text-input",Subtitle:".js-post-subtitle-field",CtaLabel:".js-post-cta-label-field",CtaUrl:".js-post-cta-url-field"};return r[a]?e.find(r[a]):$()}function p(e,t,a){var r=u(e,t,a);return a===n||a===i?e.find(".js-tag-editor").filter((function(){return $(this).data("target-field")===r.get(0)})):r}var h=[];function f(i,c,d,u){const p=i.find('input[type="submit"]:visible, button[type="submit"]:visible').filter(":enabled");p.prop("disabled",!0),function(t,r,n){_(t,r,n,a,(function(t,a,n){var i=t.val(),o=$.trim(i).length,s=t.data("min-length"),l=t.data("max-length");0!==o||e?s&&o<s?a(__tr(["Title must be at least $minLength$ character.","Title must be at least $minLength$ characters."], {minLength: s}, "en", ["minLength"])):l&&o>l?a(__tr(["Title cannot be longer than $maxLength$ character.","Title cannot be longer than $maxLength$ characters."], {maxLength: l}, "en", ["maxLength"])):n({type:"POST",url:"/posts/validate-title",data:{title:i,postTypeId:r,fkey:StackExchange.options.user.fkey}}):a()}))}(i,c,d),function(a,n,i,o){_(a,n,i,r,(function(a,r,i){var s=a.val(),l=$.trim(s).length,c=a.data("min-length");0!==l||e?5!==n?14!==n?1!==n&&2!==n&&15!==n||i({type:"POST",url:"/posts/validate-body",data:{body:s,oldBody:a.prop("defaultValue"),isQuestion:1===n,isSuggestedEdit:o,isAskWizard:t,fkey:StackExchange.options.user.fkey}}):c&&l<c?r(__tr(["Body must be at least $minLength$ characters."], {minLength: c}, "en", [])):r():c&&l<c?r(__tr(["Wiki Body must be at least $minLength$ characters. You entered $actual$."], {minLength: c,actual: l}, "en", [])):r():r()}))}(i,c,d,u),function(e,t,a){_(e,t,a,o,(function(r,n,i){var o=r.val(),s=$.trim(o).length,l=r.data("min-length"),c=r.data("max-length");0!==s?l&&s<l?n(__tr(["Your edit summary must be at least $minLength$ character.","Your edit summary must be at least $minLength$ characters."], {minLength: l}, "en", ["minLength"])):c&&s>c?n(__tr(["Your edit summary cannot be longer than $maxLength$ character.","Your edit summary cannot be longer than $maxLength$ characters."], {maxLength: c}, "en", ["maxLength"])):E(e,t,a)||n():n()}))}(i,c,d),function(e,t,a){_(e,t,a,s,(function(e,t,a){var r=e.val(),n=$.trim(r).length,i=e.data("min-length"),o=e.data("max-length");0!==n?i&&n<i?t(__tr(["Wiki Excerpt must be at least $minLength$ characters; you entered $actual$."], {minLength: i,actual: n}, "en", [])):o&&n>o?t(__tr(["Wiki Excerpt cannot be longer than $maxLength$ characters; you entered $actual$."], {maxLength: o,actual: n}, "en", [])):t():t()}))}(i,c,d),function(e,t,a){_(e,t,a,l,(function(e,t,a){var r=e.val(),n=$.trim(r);0!==n.length?StackExchange.helpers.isEmailAddress(n)?t():t(__tr(["This email does not appear to be valid."], undefined, "en", [])):t()}))}(i,c,d),S(i,c,(function(){!function(t,a,r){_(t,a,r,n,(function(t,a,r,n){var i=t.val(),o=$.trim(i).length,s=$("#js-post-state").val();0!==o||e?r({type:"POST",url:"/posts/validate-tags",data:{tags:i,oldTags:t.prop("defaultValue"),fkey:StackExchange.options.user.fkey,postTypeId:n,postState:s},success:function(e){var a=t.closest(".js-post-form").find(".js-warned-tags-field");if(a.length){var r=a.val(),n=a.data("warned-tags")||[],i=((e.source||{}).Tags||[]).filter((function(e){return e&&-1===n.indexOf(e)}));i.length>0&&StackExchange.using("gps",(function(){i.forEach((function(e){StackExchange.gps.track("tag_warning.show",{tag:e},!0),r+=" "+e,n.push(e)})),a.val($.trim(r)).data("warned-tags",n),StackExchange.gps.sendPending()}))}}}):a()}))}(i,c,d),p.prop("disabled",!1)}))}function m(e,t){e.find('input[type="submit"]:visible, button[type="submit"]').removeClass("is-loading"),t||(StackExchange.helpers.enableSubmitButton(e),StackExchange.navPrevention&&StackExchange.navPrevention.start())}function g(e,t,a,r,n,i){$.ajax({type:"POST",dataType:"json",data:"article-on-teams"===a?v(e,i):e.serialize(),url:e.attr("action"),success:n,error:function(){var r=y(a,0);w(e,t,a,{General:[$("<span/>").text(r).html()]},0)},complete:function(){m(e,r)}})}function v(e,t){var a=e.serializeArray();if(t&&t.originalEvent&&t.originalEvent.submitter){var r=t.originalEvent.submitter.getAttribute("value"),n=t.originalEvent.submitter.getAttribute("name");r&&n&&a.push({name:n,value:r})}return $.param(a)}function b(){for(var e=0;e<h.length;e++)clearTimeout(h[e]);h=[]}function _(t,a,r,n,i){u(t,a,n).blur((function(){var o=this,s=$(this);if(!s.data(d)){var l=function(e){C(t,a,r,n,e)},c=function(e){return T(e,t,a,r,[n])};h.push(setTimeout((function(){var t=StackExchange.stacksValidation.handlerFor(s);t&&!e&&t.clear(),i.call(o,s,l,c,a)}),250))}}))}function E(e,t,a){return"[Edit removed during grace period]"===$.trim(u(e,t,o).val())&&(C(e,t,a,o,__tr(["Comment reserved for system use. Please use an appropriate comment."], undefined, "en", [])),!0)}function y(e,t){if(t>0)switch(e){case"question":return __tr(["Your question couldn't be submitted. Please see the error above.","Your question couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);case"answer":return __tr(["Your answer couldn't be submitted. Please see the error above.","Your answer couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);case"edit":return __tr(["Your edit couldn't be submitted. Please see the error above.","Your edit couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);case"tags":return __tr(["Your tags couldn't be submitted. Please see the error above.","Your tags couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);case"article":case"article-on-teams":return __tr(["Your article couldn't be submitted. Please see the errors above.","Your article couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);case"announcement":return __tr(["Your bulletin couldn't be published. Please see the errors above.","Your bulletin couldn't be published. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"]);default:return __tr(["Your post couldn't be submitted. Please see the error above.","Your post couldn't be submitted. Please see the errors above."], {specificErrorCount: t}, "en", ["specificErrorCount"])}else switch(e){case"question":return __tr(["An error occurred submitting the question."], undefined, "en", []);case"answer":return __tr(["An error occurred submitting the answer."], undefined, "en", []);case"edit":return __tr(["An error occurred submitting the edit."], undefined, "en", []);case"tags":return __tr(["An error occurred submitting the tags."], undefined, "en", []);case"article":case"article-on-teams":return __tr(["An error occurred submitting the article."], undefined, "en", []);case"announcement":return __tr(["An error occurred publishing the bulletin."], undefined, "en", []);default:return __tr(["An error occurred submitting the post."], undefined, "en", [])}}function w(e,t,a,r,n){var i=e.find(".js-general-error").text("").removeClass("d-none");P(e,i,r,null,c,t,a)||(n>0?i.text(y(a,n)):i.addClass("d-none"))}function x(e){var t=$(".js-post-review-summary").closest(".js-post-review-summary-container");if(t.length>0)t.filter(":visible").scrollIntoView();else{var a,r;L()&&($("#sidebar").animate({opacity:.4},500),a=setInterval((function(){L()||($("#sidebar").animate({opacity:1},500),clearInterval(a))}),500)),e.find(".validation-error, .js-stacks-validation.has-error").each((function(){var e=$(this).offset().top;(!r||e<r)&&(r=e)}));var n=function(){for(var t=0;t<3;t++)e.find(".message").animate({left:"+=5px"},100).animate({left:"-=5px"},100)};if(r){var i=$(".review-bar").length;r=Math.max(0,r-(i?125:30)),$("html, body").animate({scrollTop:r},n)}else n()}}function k(e,t,c,d,u){if(!d)return;const p=e.add("#js-comments-container");S(e,t,(function(){var e=j(p,t,c,[a,r,n,i,o,s,l,"ArticleType","Date","CommentForm","Subtitle","CtaLabel","CtaUrl"],d,u).length;w(p,t,c,d,e),x(p)}))}function S(e,t,a){var r=function(){1!==t||p(e,t,n).length?a():setTimeout(r,250)};r()}function T(e,t,a,r,n,i){return $.ajax(e).then((function(e){return i?$.when(i()).then((function(){return e})):e})).done((function(e){j(t,a,r,n,e.errors,e.warnings)})).fail((function(){j(t,a,r,n,{},{})}))}function j(e,t,a,r,n,i){for(var o=[],s=0;s<r.length;s++){var l=r[s];P(e,p(e,t,l),n,i,l,t,a)&&o.push(l)}return window.dispatchEvent(new Event("validation:complete")),o}function C(e,t,a,r,n){O(e,p(e,t,r),n?[$("<span/>").text(n).html()]:[],[],r,t,a)}function P(e,t,a,r,n,i,o){return O(e,t,a[n]||[],(r||{})[n]||[],n,i,o)}function O(t,a,r,n,i,o,s){var l=StackExchange.stacksValidation.handlerFor(a);return l?function(t,a,r,n,i){t.clear("error"),n.forEach((function(e){t.add("error",e)})),"edit"===r||"question"===r&&e||(t.clear("warning"),i.forEach((function(e){t.add("warning",e)})))}(l,0,s,r,n):function(e,t,a){e&&e.length&&(0===a.length||1===a.length&&""===a[0]||!$("html").has(e).length?function(e){var t=e.data("error-popup");t&&t.is(":visible")&&t.fadeOutAndRemove(),e.removeClass("validation-error"),e.removeData("error-popup"),e.removeData("error-message")}(e):function(e,t,a){var r=1===t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",n=e.data("error-popup");if(n&&n.is(":visible")){if(e.data("error-message")===r)return void(n.animateOffsetTop&&n.animateOffsetTop(0));n.fadeOutAndRemove()}var i=StackExchange.helpers.showMessage(e,r,a);i.find("a").attr("target","_blank"),i.click(b),e.addClass("validation-error").data("error-popup",i).data("error-message",r)}(e,a,function(e,t){var a=$("#sidebar, .sidebar").first().width()||270,r="lg"===StackExchange.responsive.currentRange();return e===c?{position:"inline",css:{display:"inline-block","margin-bottom":"10px"},closeOthers:!1,dismissable:!1,type:t}:{position:{my:r?"left top":"top center",at:r?"right center":"bottom center"},css:{"max-width":a,"min-width":a},closeOthers:!1,type:t}}(t,"error")))}(a,i,r),r.length&&u(t,o,i).data(d,!0).one("input change",(function(){$(this).data(d,null)})),t.find(".validation-error, .js-stacks-validation.has-error").length||t.find(".js-general-error").text(""),a.trigger("post:validated-field",[{errors:r,warnings:n,field:i,postTypeId:o,formType:s}]),r.length>0}function L(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var a=t.offset().left;return $(".message").each((function(){var t=$(this);if(t.offset().left+t.outerWidth()>a)return e=!0,!1})),e}return{initOnBlur:f,initOnBlurAndSubmit:function(e,t,a,r,i){var o;f(e,t,a,r);var s=function(r){if(e.trigger("post:submit-completed",[{formType:a,postTypeId:t,response:r}]),r.success)if(i)i(r);else{var n=window.location.href.split("#")[0],l=r.redirectTo.split("#")[0];0===l.indexOf("/")&&(l=window.location.protocol+"//"+window.location.hostname+l),window.onbeforeunload=null,o=!0,window.location=r.redirectTo,n.toLowerCase()===l.toLowerCase()&&window.location.reload(!0)}else r.captchaHtml?StackExchange.nocaptcha.init(r.captchaHtml,s):r.errors?(e.find(".js-post-prior-attempt-count").val((function(e,t){return(+t+1||0).toString()})),k(e,t,a,r.errors,r.warnings)):w(e,t,a,{General:[$("<span/>").text(r.message).html()]},0)};e.submit((function(r){if(e.find(".js-post-answer-while-asking-checkbox").is(":checked"))return!0;if(E(e,t,a))return StackExchange.helpers.enableSubmitButton(e),!1;if(b(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),e.find('input[type="submit"]:visible, button[type="submit"]').addClass("is-loading"),StackExchange.helpers.disableSubmitButton(e),StackExchange.options.site.enableNewTagCreationWarning&&14!=t&&15!=t){var i=u(e,t,n),l=i.prop("defaultValue");if(i.val()!==l)return $.ajax({type:"GET",url:"/posts/new-tags-warning",dataType:"json",data:{tags:i.val()},success:function(i){if(i.showWarning){var l={closeOthers:!0,shown:function(){$(".js-confirm-tag-creation").on("click",(function(n){return StackExchange.helpers.closePopups(),g(e,t,a,o,s,r),n.preventDefault(),!1}))},dismissing:function(){m(e,o)},returnElements:p(e,t,n).find("input:visible")};StackExchange.helpers.showModal($(i.html).elementNodesOnly(),l),StackExchange.helpers.bindMovablePopups()}else g(e,t,a,o,s,r)}}),!1}return setTimeout((function(){g(e,t,a,o,s,r)}),0),!1}))},showErrorsAfterSubmission:k,validatePostFields:function(e,i,o,s,l){if(1===i)return T({type:"POST",url:"/posts/validate-question",data:{title:u(e,i,a).val(),body:u(e,i,r).val(),tags:u(e,i,n).val(),fkey:StackExchange.options.user.fkey,isAskWizard:t}},e,i,o,[a,r,n],l).promise();if(2===i)return T({type:"POST",url:"/posts/validate-body",data:{body:u(e,i,r).val(),oldBody:u(e,i,r).prop("defaultValue"),isQuestion:!1,isSuggestedEdit:s||!1,fkey:StackExchange.options.user.fkey}},e,i,o,[r],l).promise();var c=$.Deferred();return c.reject(),c.promise()},scrollToErrors:x}}()})();