parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n=document.querySelector("tbody"),o=document.querySelector("td"),l=document.querySelector(".append-row"),i=document.querySelector(".remove-row"),c=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),d=10,u=2;l.onclick=function(){i.disabled&&(i.disabled=!1),n.rows.length<d&&(n.append(n.rows[0].cloneNode(!0)),n.rows.length===d&&(l.disabled=!0))},i.onclick=function(){l.disabled&&(l.disabled=!1),n.rows.length>u&&(n.rows[0].remove(),n.rows.length===u&&i.setAttribute("disabled","true"))},c.onclick=function(){var t,r=e(n.rows);try{for(r.s();!(t=r.n()).done;){var l=t.value;a.disabled&&(a.disabled=!1),l.children.length<d&&(l.append(o.cloneNode(!0)),l.children.length===d&&c.setAttribute("disabled","true"))}}catch(i){r.e(i)}finally{r.f()}},a.onclick=function(){var t,r=e(n.rows);try{for(r.s();!(t=r.n()).done;){var o=t.value;c.disabled&&(c.disabled=!1),o.children.length>u&&(o.children[0].remove(),o.children.length===u&&a.setAttribute("disabled","true"))}}catch(l){r.e(l)}finally{r.f()}};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f849a148.js.map