/*!
 * 
 *   eksli_1 v1.0.0
 *   undefined
 *
 *   Copyright (c) Łukasz Sobel and project contributors.
 *
 *   This source code is licensed under the undefined license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(function(){return(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var o=function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()}))},n=function(){var e,t,n;e=(new Date).getTime(),t=localStorage.getItem("lastFetchTime"),n=Math.floor((e-+t)/1e3/60/60/24),(!localStorage.getItem("countries")||n>=7)&&o(),o()};return window.addEventListener("load",(function(){n()})),t})()}));
//# sourceMappingURL=index.js.map