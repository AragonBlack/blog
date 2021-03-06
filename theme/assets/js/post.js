/*
 * Koenig Editor - Gallery
 * ------------
 */
var images=document.querySelectorAll(".kg-gallery-image img");images.forEach(function(e){var a=e.closest(".kg-gallery-image"),t=e.attributes.width.value/e.attributes.height.value;a.style.flex=t+" 1 0%"});

/*
 * lightense-images
 * ------------
 * Version : 1.0.5
 * Website : sparanoid.com/work/lightense-images/
 * Repo    : github.com/sparanoid/lightense-images
 * Author  : Tunghsiao Liu (@sparanoid)
 * License : MIT
 */ 

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e){switch("undefined"==typeof e?"undefined":i(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function t(e){var t=e.length;if(t)for(var r=0;r<t;r++)n(e[r]);else n(e)}function n(e){e.src&&(e.classList.add("lightense-target"),e.addEventListener("click",function(t){return B.keyboard&&(t.metaKey||t.ctrlKey)?z.open(e.src,"_blank"):void h(this)},!1))}function o(e){return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)}function a(e){return/(rgb\((?:\d{1,3}[,\)] ?){3}(?:\d?\.\d+\))?)/.test(e)}function s(e){return/(rgba\((?:\d{1,3}[,\)] ?){3}(?:\d?\.\d+\))?)/.test(e)}function c(e){var t;return o(e)?(t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),"rgba("+[t>>16&255,t>>8&255,255&t].join(", ")+", 1)"):a(e)?e.replace(")",", 1)"):s(e)?e:(console.log("Invalid color: "+e),L.background)}function l(e){var t=c(e),n=.7,r=/([\d\.]+)\)$/g,i=r.exec(t)[1];return t.replace(r,i*n+")")}function d(e,t){var n=E.head||E.getElementsByTagName("head")[0];E.getElementById(e)&&E.getElementById(e).remove();var r=E.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(E.createTextNode(t)),n.appendChild(r)}function u(){var e="\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: "+(B.zIndex-1)+";\n  padding: 0;\n  margin: 0;\n  transition: opacity "+B.time+"ms ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: "+B.background+";\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: "+l(B.background)+";\n    -webkit-backdrop-filter: blur(30px);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform "+B.time+"ms "+B.cubicBezier+";\n  z-index: "+B.zIndex+";\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform "+B.time+"ms "+B.cubicBezier+";\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}";d("lightense-images-css",e)}function g(){B.container=E.createElement("div"),B.container.className="lightense-backdrop",E.body.appendChild(B.container)}function p(e){var t=e.width,n=e.height,r=z.pageYOffset||E.documentElement.scrollTop||0,i=z.pageXOffset||E.documentElement.scrollLeft||0,o=B.target.getBoundingClientRect(),a=t/o.width,s=z.innerWidth||E.documentElement.clientWidth||0,c=z.innerHeight||E.documentElement.clientHeight||0,l=B.target.getAttribute("data-lightense-padding")||B.target.getAttribute("data-padding")||B.padding,d=s>l?s-l:s-L.padding,u=c>l?c-l:c-L.padding,g=t/n,p=d/u;t<d&&n<u?B.scaleFactor=a:g<p?B.scaleFactor=u/n*a:B.scaleFactor=d/t*a;var f=s/2,b=r+c/2,m=o.left+i+o.width/2,h=o.top+r+o.height/2;B.translateX=f-m,B.translateY=b-h}function f(){B.target.classList.add("lightense-open"),B.wrap=E.createElement("div"),B.wrap.className="lightense-wrap",setTimeout(function(){B.target.style.transform="scale("+B.scaleFactor+")"},20),B.target.parentNode.insertBefore(B.wrap,B.target),B.wrap.appendChild(B.target),setTimeout(function(){B.wrap.style.transform="translate("+Math.round(B.translateX)+"px, "+Math.round(B.translateY)+"px)"},20);var e={cubicBezier:B.target.getAttribute("data-lightense-cubic-bezier")||B.cubicBezier,background:B.target.getAttribute("data-lightense-background")||B.target.getAttribute("data-background")||B.background,zIndex:B.target.getAttribute("data-lightense-z-index")||B.zIndex},t=r({},B,e),n="\n    .lightense-backdrop {\n      z-index: "+(t.zIndex-1)+";\n      transition: opacity "+t.time+"ms ease;\n      background-color: "+t.background+";\n    }\n\n    @supports (-webkit-backdrop-filter: blur(30px)) {\n      .lightense-backdrop {\n        background-color: "+l(t.background)+";\n      }\n    }\n\n    .lightense-wrap {\n      transition: transform "+t.time+"ms "+t.cubicBezier+";\n      z-index: "+t.zIndex+";\n    }\n\n    .lightense-target {\n      transition: transform "+t.time+"ms "+t.cubicBezier+";\n    }";d("lightense-images-css-computed",n),B.container.style.visibility="visible",setTimeout(function(){B.container.style.opacity="1"},20)}function b(){v(),B.target.classList.remove("lightense-open"),B.wrap.style.transform="",B.target.style.transform="",B.target.classList.add("lightense-transitioning"),B.container.style.opacity="",setTimeout(function(){B.container.style.visibility="",B.container.style.backgroundColor="",B.wrap.parentNode.replaceChild(B.target,B.wrap),B.target.classList.remove("lightense-transitioning")},B.time)}function m(){var e=Math.abs(B.scrollY-z.scrollY);e>=B.offset&&b()}function h(e){if(B.target=e,B.target.classList.contains("lightense-open"))return b();B.scrollY=z.scrollY;var t=new Image;t.onload=function(){p(this),f(),y()},t.src=B.target.src}function y(){z.addEventListener("keyup",k,!1),z.addEventListener("scroll",m,!1),B.container.addEventListener("click",b,!1)}function v(){z.removeEventListener("keyup",k,!1),z.removeEventListener("scroll",m,!1),B.container.removeEventListener("click",b,!1)}function k(e){e.preventDefault(),27===e.keyCode&&b()}function x(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w=e(n),B=r({},L,i),u(),g(),t(w)}var w,z=window,E=document,L={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"rgba(255, 255, 255, .98)",zIndex:2147483647},B={};return x},a=o();e.exports=a}])});

/* Custom settings for lightense-images */
window.addEventListener('load', function () {
Lightense('.post-wrap img', {
  time: 300,
  padding: 60,
  offset: 30,
  keyboard: true,
  cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
  background: 'rgb(255, 255, 255)',
  zIndex: 999
});
}, false);

/*
 * Reframe
 * ------------
 * Version : 2.1.18
 * Website : dollarshaveclub.github.io/reframe.js
 * Repo    : github.com/dollarshaveclub/reframe.js
 * Author  : Jeff Wainwright (@yowainwright)
 * License : MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(-1!==r.className.split(" ").indexOf(n))return;var f=r.offsetHeight/r.offsetWidth*100,d=document.createElement("div");d.className=n;var a=d.style;a.position="relative",a.width="100%",a.paddingTop=f+"%";var s=r.style;s.position="absolute",s.width="100%",s.height="100%",s.left="0",s.top="0",r.parentNode.insertBefore(d,r),r.parentNode.removeChild(r),d.appendChild(r)}}});

/* Custom settings for Reframe */
reframe('iframe');