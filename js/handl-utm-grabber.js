function getSearchParams(e,t){var r={},a=document.createElement("a");return a.href=e,a.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,t,a){r[t]=a})),t?r[t]:r}function GetQVars(e,t){return null!=t[e]?t[e]:""}function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,r,a){e[r]=a}));return e}jQuery((function(e){var t=getUrlVars();e.each(["utm_source","utm_medium","utm_term","utm_content","utm_campaign","gclid","email","username"],(function(e,r){var a=GetQVars(r,t);""!=a&&Cookies.set(r,a,{expires:30});var n=Cookies.get(r);null!=n&&(n=decodeURIComponent(n.replace(/[%]/g," ")),"username"==r&&(n=n.replace(/\+/g," ")),jQuery('input[name="'+r+'"]').val(n),jQuery("input#"+r).val(n),jQuery("input."+r).val(n))})),e(".utm-out").each((function(){var t=e.extend({},handl_utm,getSearchParams(this.href));this.href="",e.isEmptyObject(t)||(this.href+="?"+e.param(t))}))}));