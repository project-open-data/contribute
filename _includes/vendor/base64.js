/*
 * $Id: base64.js,v 2.6 2012/08/24 05:23:18 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */(function(e){"use strict";var t;typeof module!="undefined"&&module.exports&&(t=require("buffer").Buffer);var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=function(e){var t={};for(var n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(n),i=String.fromCharCode,s=function(e){var t=e.charCodeAt(0);return t<128?e:t<2048?i(192|t>>>6)+i(128|t&63):i(224|t>>>12&15)+i(128|t>>>6&63)+i(128|t&63)},o=function(e){return e.replace(/[^\x00-\x7F]/g,s)},u=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),i=[n.charAt(r>>>18),n.charAt(r>>>12&63),t>=2?"=":n.charAt(r>>>6&63),t>=1?"=":n.charAt(r&63)];return i.join("")},a=e.btoa||function(e){return e.replace(/[\s\S]{1,3}/g,u)},f=t?function(e){return(new t(e)).toString("base64")}:function(e){return a(o(e))},l=function(e,t){return t?f(e).replace(/[+\/]/g,function(e){return e=="+"?"-":"_"}):f(e)},c=function(e){return l(e,!0)},h=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}/g,p=function(e){return i(e.length<3?(31&e.charCodeAt(0))<<6|63&e.charCodeAt(1):(15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2))},d=function(e){return e.replace(h,p)},v=function(e){var t=e.length,n=t%4,s=(t>0?r[e.charAt(0)]<<18:0)|(t>1?r[e.charAt(1)]<<12:0)|(t>2?r[e.charAt(2)]<<6:0)|(t>3?r[e.charAt(3)]:0),o=[i(s>>>16),i(s>>>8&255),i(s&255)];return o.length-=[0,0,2,1][n],o.join("")},m=e.atob||function(e){return e.replace(/[\s\S]{1,4}/g,v)},g=t?function(e){return(new t(e,"base64")).toString()}:function(e){return d(m(e))},y=function(e){return g(e.replace(/[-_]/g,function(e){return e=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};e.Base64={atob:m,btoa:a,fromBase64:y,toBase64:l,utob:o,encode:l,encodeURI:c,btou:d,decode:y};if(typeof Object.defineProperty=="function"){var b=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};e.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",b(function(){return y(this)})),Object.defineProperty(String.prototype,"toBase64",b(function(e){return l(this,e)}))}}})(this);