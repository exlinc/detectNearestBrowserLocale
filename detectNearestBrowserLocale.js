!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.detectNearestBrowserLocale=n()}(this,function(){"use strict";return function(e){if(void 0===e&&(e=[]),0<e.length){for(var n=0,t=navigator.languages.length;n<t;++n)for(var r=navigator.languages[n];;){if(e.includes(r))return r;var a=r.lastIndexOf("-");if(a<0)break;r=r.substring(0,a)}return e[0]}return navigator.language}});
