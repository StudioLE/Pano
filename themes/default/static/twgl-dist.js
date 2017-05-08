/**
 * @license twgl.js 0.0.26 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
   Modifications to twgl.js:
   MB - added 6x2 stereo cubemap layout to 'setTextureFromElement()', use 'shift=1' to select offset
   MB - added 'twgl.m4.fromRotationTranslation()' for minimal quaternion webVR support (borrowed from Gregg Tavares's glmatrix library)
   MB - added 'twgl.m4.eularToQuat()' to convert onDeviceOrientation input to quaternion
   MB - added option 'shrink'.  Resize cubemap destination canvas to allow for bad GPU's (ie. where max cube map texture size = 1024) 
*/

!function(r,e){"function"==typeof define&&define.amd?define([],e):r.twgl=e()}(this,function(){var r,e,t;return function(n){function i(r,e){return g.call(r,e)}function o(r,e){var t,n,i,o,a,u,f,c,s,l,h,m=e&&e.split("/"),E=T.map,v=E&&E["*"]||{};if(r&&"."===r.charAt(0))if(e){for(r=r.split("/"),a=r.length-1,T.nodeIdCompat&&y.test(r[a])&&(r[a]=r[a].replace(y,"")),r=m.slice(0,m.length-1).concat(r),s=0;s<r.length;s+=1)if(h=r[s],"."===h)r.splice(s,1),s-=1;else if(".."===h){if(1===s&&(".."===r[2]||".."===r[0]))break;s>0&&(r.splice(s-1,2),s-=2)}r=r.join("/")}else 0===r.indexOf("./")&&(r=r.substring(2));if((m||v)&&E){for(t=r.split("/"),s=t.length;s>0;s-=1){if(n=t.slice(0,s).join("/"),m)for(l=m.length;l>0;l-=1)if(i=E[m.slice(0,l).join("/")],i&&(i=i[n])){o=i,u=s;break}if(o)break;!f&&v&&v[n]&&(f=v[n],c=s)}!o&&f&&(o=f,u=c),o&&(t.splice(0,u,o),r=t.join("/"))}return r}function a(r,e){return function(){var t=_.call(arguments,0);return"string"!=typeof t[0]&&1===t.length&&t.push(null),m.apply(n,t.concat([r,e]))}}function u(r){return function(e){return o(e,r)}}function f(r){return function(e){p[r]=e}}function c(r){if(i(d,r)){var e=d[r];delete d[r],A[r]=!0,h.apply(n,e)}if(!i(p,r)&&!i(A,r))throw new Error("No "+r);return p[r]}function s(r){var e,t=r?r.indexOf("!"):-1;return t>-1&&(e=r.substring(0,t),r=r.substring(t+1,r.length)),[e,r]}function l(r){return function(){return T&&T.config&&T.config[r]||{}}}var h,m,E,v,p={},d={},T={},A={},g=Object.prototype.hasOwnProperty,_=[].slice,y=/\.js$/;E=function(r,e){var t,n=s(r),i=n[0];return r=n[1],i&&(i=o(i,e),t=c(i)),i?r=t&&t.normalize?t.normalize(r,u(e)):o(r,e):(r=o(r,e),n=s(r),i=n[0],r=n[1],i&&(t=c(i))),{f:i?i+"!"+r:r,n:r,pr:i,p:t}},v={require:function(r){return a(r)},exports:function(r){var e=p[r];return"undefined"!=typeof e?e:p[r]={}},module:function(r){return{id:r,uri:"",exports:p[r],config:l(r)}}},h=function(r,e,t,o){var u,s,l,h,m,T,g=[],_=typeof t;if(o=o||r,"undefined"===_||"function"===_){for(e=!e.length&&t.length?["require","exports","module"]:e,m=0;m<e.length;m+=1)if(h=E(e[m],o),s=h.f,"require"===s)g[m]=v.require(r);else if("exports"===s)g[m]=v.exports(r),T=!0;else if("module"===s)u=g[m]=v.module(r);else if(i(p,s)||i(d,s)||i(A,s))g[m]=c(s);else{if(!h.p)throw new Error(r+" missing "+s);h.p.load(h.n,a(o,!0),f(s),{}),g[m]=p[s]}l=t?t.apply(p[r],g):void 0,r&&(u&&u.exports!==n&&u.exports!==p[r]?p[r]=u.exports:l===n&&T||(p[r]=l))}else r&&(p[r]=t)},r=e=m=function(r,e,t,i,o){if("string"==typeof r)return v[r]?v[r](e):c(E(r,e).f);if(!r.splice){if(T=r,T.deps&&m(T.deps,T.callback),!e)return;e.splice?(r=e,e=t,t=null):r=n}return e=e||function(){},"function"==typeof t&&(t=i,i=o),i?h(n,r,e,t):setTimeout(function(){h(n,r,e,t)},4),m},m.config=function(r){return m(r)},r._defined=p,t=function(r,e,t){if("string"!=typeof r)throw new Error("See almond README: incorrect module build, no module name");e.splice||(t=e,e=[]),i(p,r)||i(d,r)||(d[r]=[r,e,t])},t.amd={jQuery:!0}}(),t("node_modules/almond/almond.js",function(){}),t("twgl/twgl",[],function(){function r(r){ie=new Uint8Array([255*r[0],255*r[1],255*r[2],255*r[3]])}function e(r){ne=r}function t(r,e){for(var t=["webgl","experimental-webgl"],n=null,i=0;i<t.length;++i){try{n=r.getContext(t[i],e)}catch(o){}if(n)break}return n}function n(r,e){var n=t(r,e);return n}function i(r){return r.split("\n").map(function(r,e){return e+1+": "+r}).join("\n")}function o(r,e,t,n){var o=n||te,a=r.createShader(t);r.shaderSource(a,e),r.compileShader(a);var u=r.getShaderParameter(a,r.COMPILE_STATUS);if(!u){var f=r.getShaderInfoLog(a);return o(i(e)+"\n*** Error compiling shader: "+f),r.deleteShader(a),null}return a}function a(r,e,t,n,i){var o=i||te,a=r.createProgram();e.forEach(function(e){r.attachShader(a,e)}),t&&t.forEach(function(e,t){r.bindAttribLocation(a,n?n[t]:t,e)}),r.linkProgram(a);var u=r.getProgramParameter(a,r.LINK_STATUS);if(!u){var f=r.getProgramInfoLog(a);return o("Error in program linking:"+f),r.deleteProgram(a),null}return a}function u(r,e,t,n){var i,a="",u=document.getElementById(e);if(!u)throw"*** Error: unknown script element"+e;if(a=u.text,!t)if("x-shader/x-vertex"===u.type)i=r.VERTEX_SHADER;else if("x-shader/x-fragment"===u.type)i=r.FRAGMENT_SHADER;else if(i!==r.VERTEX_SHADER&&i!==r.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return o(r,a,t?t:i,n)}function f(r,e,t,n,i){for(var o=[],f=0;f<e.length;++f){var c=u(r,e[f],r[Ce[f]],i);if(!c)return null;o.push(c)}return a(r,o,t,n,i)}function c(r,e,t,n,i){for(var u=[],f=0;f<e.length;++f){var c=o(r,e[f],r[Ce[f]],i);if(!c)return null;u.push(c)}return a(r,u,t,n,i)}function s(r,e){return e===r.SAMPLER_2D?r.TEXTURE_2D:e===r.SAMPLER_CUBE?r.TEXTURE_CUBE_MAP:void 0}function l(r,e){function t(e,t){var i=r.getUniformLocation(e,t.name),o=t.type,a=t.size>1&&"[0]"===t.name.substr(-3);if(o===r.FLOAT&&a)return function(e){r.uniform1fv(i,e)};if(o===r.FLOAT)return function(e){r.uniform1f(i,e)};if(o===r.FLOAT_VEC2)return function(e){r.uniform2fv(i,e)};if(o===r.FLOAT_VEC3)return function(e){r.uniform3fv(i,e)};if(o===r.FLOAT_VEC4)return function(e){r.uniform4fv(i,e)};if(o===r.INT&&a)return function(e){r.uniform1iv(i,e)};if(o===r.INT)return function(e){r.uniform1i(i,e)};if(o===r.INT_VEC2)return function(e){r.uniform2iv(i,e)};if(o===r.INT_VEC3)return function(e){r.uniform3iv(i,e)};if(o===r.INT_VEC4)return function(e){r.uniform4iv(i,e)};if(o===r.BOOL&&a)return function(e){r.uniform1iv(i,e)};if(o===r.BOOL)return function(e){r.uniform1i(i,e)};if(o===r.BOOL_VEC2)return function(e){r.uniform2iv(i,e)};if(o===r.BOOL_VEC3)return function(e){r.uniform3iv(i,e)};if(o===r.BOOL_VEC4)return function(e){r.uniform4iv(i,e)};if(o===r.FLOAT_MAT2)return function(e){r.uniformMatrix2fv(i,!1,e)};if(o===r.FLOAT_MAT3)return function(e){r.uniformMatrix3fv(i,!1,e)};if(o===r.FLOAT_MAT4)return function(e){r.uniformMatrix4fv(i,!1,e)};if((o===r.SAMPLER_2D||o===r.SAMPLER_CUBE)&&a){for(var u=[],f=0;f<t.size;++f)u.push(n++);return function(e,t){return function(n){r.uniform1iv(i,t),n.forEach(function(n,i){r.activeTexture(r.TEXTURE0+t[i]),r.bindTexture(e,n)})}}(s(r,o),u)}if(o===r.SAMPLER_2D||o===r.SAMPLER_CUBE)return function(e,t){return function(n){r.uniform1i(i,t),r.activeTexture(r.TEXTURE0+t),r.bindTexture(e,n)}}(s(r,o),n++);throw"unknown type: 0x"+o.toString(16)}for(var n=0,i={},o=r.getProgramParameter(e,r.ACTIVE_UNIFORMS),a=0;o>a;++a){var u=r.getActiveUniform(e,a);if(!u)break;var f=u.name;"[0]"===f.substr(-3)&&(f=f.substr(0,f.length-3));var c=t(e,u);i[f]=c}return i}function h(r){r=r.uniformSetters||r;for(var e=arguments.length,t=1;e>t;++t){var n=arguments[t];if(Array.isArray(n))for(var i=n.length,o=0;i>o;++o)h(r,n[o]);else for(var a in n){var u=r[a];u&&u(n[a])}}}function m(r,e){function t(e){return function(t){r.bindBuffer(r.ARRAY_BUFFER,t.buffer),r.enableVertexAttribArray(e),r.vertexAttribPointer(e,t.numComponents||t.size,t.type||r.FLOAT,t.normalize||!1,t.stride||0,t.offset||0)}}for(var n={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES),o=0;i>o;++o){var a=r.getActiveAttrib(e,o);if(!a)break;var u=r.getAttribLocation(e,a.name);n[a.name]=t(u)}return n}function E(r,e){for(var t in e){var n=r[t];n&&n(e[t])}}function v(r,e,t){E(e.attribSetters||e,t.attribs),t.indices&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.indices)}function p(r,e,t,n,i){e=e.map(function(r){var e=document.getElementById(r);return e?e.text:r});var o=c(r,e,t,n,i);if(!o)return null;var a=l(r,o),u=m(r,o);return{program:o,uniformSetters:a,attribSetters:u}}function d(r,e){e=e||1,e=Math.max(1,e);var t=r.clientWidth*e|0,n=r.clientHeight*e|0;return r.width!==t||r.height!==n?(r.width=t,r.height=n,!0):!1}function T(r,e,t,n){if(e instanceof WebGLBuffer)return e;t=t||r.ARRAY_BUFFER;var i=r.createBuffer();return r.bindBuffer(t,i),r.bufferData(t,e,n||r.STATIC_DRAW),i}function A(r){return"indices"===r}function g(r){if(r instanceof Int8Array)return ae;if(r instanceof Uint8Array)return ue;if(r instanceof Int16Array)return fe;if(r instanceof Uint16Array)return ce;if(r instanceof Int32Array)return se;if(r instanceof Uint32Array)return le;if(r instanceof Float32Array)return he;throw"unsupported typed array type"}function _(r,e){switch(e){case r.BYTE:return Int8Array;case r.UNSIGNED_BYTE:return Uint8Array;case r.SHORT:return Int16Array;case r.UNSIGNED_SHORT:return Uint16Array;case r.INT:return Int32Array;case r.UNSIGNED_INT:return Uint32Array;case r.FLOAT:return Float32Array;default:throw"unknown gl type"}}function y(r){return r instanceof Int8Array?!0:r instanceof Uint8Array?!0:!1}function w(r){return r&&r.buffer&&r.buffer instanceof ArrayBuffer}function R(r,e){var t;if(t=r.indexOf("coord")>=0?2:r.indexOf("color")>=0?4:3,e%t>0)throw"can not guess numComponents. You should specify it.";return t}function U(r,e){if(w(r))return r;if(w(r.data))return r.data;Array.isArray(r)&&(r={data:r});var t=r.type;return t||(t="indices"===e?Uint16Array:Float32Array),new t(r.data)}function b(r,e){var t={};return Object.keys(e).forEach(function(n){if(!A(n)){var i=e[n],o=i.attrib||i.name||i.attribName||ne+n,a=U(i,n);t[o]={buffer:T(r,a,void 0,i.drawType),numComponents:i.numComponents||i.size||R(n),type:g(a),normalize:void 0!==i.normalize?i.normalize:y(a),stride:i.stride||0,offset:i.offset||0}}}),t}function x(r,e){var t={attribs:b(r,e)},n=e.indices;return n?(n=U(n,"indices"),t.indices=T(r,n,r.ELEMENT_ARRAY_BUFFER),t.numElements=n.length,t.elementType=n instanceof Uint32Array?r.UNSIGNED_INT:r.UNSIGNED_SHORT):t.numElements=Ne(e),t}function M(r,e){var t={};return Object.keys(e).forEach(function(n){var i="indices"===n?r.ELEMENT_ARRAY_BUFFER:r.ARRAY_BUFFER,o=U(e[n],n);t[n]=T(r,o,i)}),t}function P(r,e,t,n,i){var o=t.indices,a=void 0===n?t.numElements:n;i=void 0===i?0:i,o?r.drawElements(e,a,void 0===t.elementType?r.UNSIGNED_SHORT:t.elementType,i):r.drawArrays(e,i,a)}function I(r,e){var t=null,n=null;e.forEach(function(e){if(e.active!==!1){var i=e.programInfo,o=e.bufferInfo,a=!1;i!==t&&(t=i,r.useProgram(i.program),a=!0),(a||o!==n)&&(n=o,v(r,i,o)),h(i,e.uniforms),P(r,e.type||r.TRIANGLES,o,e.count,e.offset)}})}function B(r,e){void 0!==e.colorspaceConversion&&(De.colorSpaceConversion=r.getParameter(r.UNPACK_COLORSPACE_CONVERSION_WEBGL)),void 0!==e.premultiplyAlpha&&(De.premultiplyAlpha=r.getParameter(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL)),void 0!==e.flipY&&(De.flipY=r.getParameter(r.UNPACK_FLIP_Y_WEBGL))}function S(r,e){void 0!==e.colorspaceConversion&&r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De.colorSpaceConversion),void 0!==e.premultiplyAlpha&&r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,De.premultiplyAlpha),void 0!==e.flipY&&r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,De.flipY)}function C(r,e,t){var n=t.target||r.TEXTURE_2D;r.bindTexture(n,e),t.min&&r.texParameteri(n,r.TEXTURE_MIN_FILTER,t.min),t.mag&&r.texParameteri(n,r.TEXTURE_MAG_FILTER,t.mag),t.wrap&&(r.texParameteri(n,r.TEXTURE_WRAP_S,t.wrap),r.texParameteri(n,r.TEXTURE_WRAP_T,t.wrap)),t.wrapS&&r.texParameteri(n,r.TEXTURE_WRAP_S,t.wrapS),t.wrapT&&r.texParameteri(n,r.TEXTURE_WRAP_T,t.wrapT)}function N(r){return r=r||ie,w(r)?r:new Uint8Array([255*r[0],255*r[1],255*r[2],255*r[3]])}function D(r){return 0===(r&r-1)}function F(r,e,t,n,i){t=t||oe;var o=t.target||r.TEXTURE_2D;n=n||t.width,i=i||t.height,r.bindTexture(o,e),D(n)&&D(i)?r.generateMipmap(o):(r.texParameteri(o,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(o,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(o,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE))}function L(r,e){return e=e||{},e.cubeFaceOrder||[r.TEXTURE_CUBE_MAP_POSITIVE_X,r.TEXTURE_CUBE_MAP_NEGATIVE_X,r.TEXTURE_CUBE_MAP_POSITIVE_Y,r.TEXTURE_CUBE_MAP_NEGATIVE_Y,r.TEXTURE_CUBE_MAP_POSITIVE_Z,r.TEXTURE_CUBE_MAP_NEGATIVE_Z]}function O(r,e){var t=L(r,e),n=t.map(function(r,e){return{face:r,ndx:e}});return n.sort(function(r,e){return r.face-e.face}),n}function X(r){var e={};return Object.keys(r).forEach(function(t){e[t]=r[t]}),e}function G(r,e){var t=new Image;return t.onerror=function(){var n="couldn't load image: "+r;te(n),e(n,t)},t.onload=function(){e(null,t)},t.src=r,t}function V(r,e,t){t=t||oe;var n=t.target||r.TEXTURE_2D;if(r.bindTexture(n,e),t.color!==!1){var i=N(t.color);if(n===r.TEXTURE_CUBE_MAP)for(var o=0;6>o;++o)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,i);else r.texImage2D(n,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,i)}}function Y(r,e,t,n){t=t||oe,V(r,e,t),t=X(t);var i=G(t.src,function(i,o){i?n(i,e,o):(Fe(r,e,o,t),n(null,e,o))});return i}function k(r,e,t,n){function i(i){return function(o,h){--s,o?l.push(o):h.width!==h.height?l.push("cubemap face img is not a square: "+h.src):(B(r,t),r.bindTexture(f,e),5===s?L(r).forEach(function(e){r.texImage2D(e,0,a,a,u,h)}):r.texImage2D(i,0,a,a,u,h),S(r,t),r.generateMipmap(f)),0===s&&n&&n(l.length?l:void 0,c,e)}}var o=t.src;if(6!==o.length)throw"there must be 6 urls for a cubemap";var a=t.format||r.RGBA,u=t.type||r.UNSIGNED_BYTE,f=t.target||r.TEXTURE_2D;if(f!==r.TEXTURE_CUBE_MAP)throw"target must be TEXTURE_CUBE_MAP";V(r,e,t),t=X(t);var c,s=6,l=[],h=L(r,t);c=o.map(function(r,e){return G(r,i(h[e]))})}function W(r){switch(r){case Ee:case de:return 1;case Te:return 2;case ve:return 3;case pe:return 4;default:throw"unknown type: "+r}}function z(r,e){return w(e)?g(e):r.UNSIGNED_BYTE}function j(r,e,t,n){n=n||oe;var i=n.target||r.TEXTURE_2D,o=n.width,a=n.height,u=n.format||r.RGBA,f=n.type||z(r,t),c=W(u),s=t.length/c;if(s%1)throw"length wrong size of format: "+Se(r,u);if(o||a){if(a){if(!o&&(o=s/a,o%1))throw"can't guess width"}else if(a=s/o,a%1)throw"can't guess height"}else{var l=Math.sqrt(s/(i===r.TEXTURE_CUBE_MAP?6:1));l%1===0?(o=l,a=l):(o=s,a=1)}if(!w(t)){var h=_(r,f);t=new h(t)}if(r.pixelStorei(r.UNPACK_ALIGNMENT,n.unpackAlignment||1),B(r,n),i===r.TEXTURE_CUBE_MAP){var m=s/6*c;O(r,n).forEach(function(e){var n=m*e.ndx,i=t.subarray(n,n+m);r.texImage2D(e.face,0,u,o,a,0,u,f,i)})}else r.texImage2D(i,0,u,o,a,0,u,f,t);return S(r,n),{width:o,height:a}}function H(r,e,t){var n=t.target||r.TEXTURE_2D;r.bindTexture(n,e);var i=t.format||r.RGBA,o=t.type||r.UNSIGNED_BYTE;if(B(r,t),n===r.TEXTURE_CUBE_MAP)for(var a=0;6>a;++a)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,t.width,t.height,0,i,o,null);else r.texImage2D(n,0,i,t.width,t.height,0,i,o,null)}function q(r,e,t){e=e||oe;var n=r.createTexture(),i=e.target||r.TEXTURE_2D,o=e.width||1,a=e.height||1;r.bindTexture(i,n),i===r.TEXTURE_CUBE_MAP&&(r.texParameteri(i,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(i,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE));var u=e.src;if(u)if("function"==typeof u&&(u=u(r,e)),"string"==typeof u)Y(r,n,e,t);else if(w(u)||Array.isArray(u)&&("number"==typeof u[0]||Array.isArray(u[0])||w(u[0]))){var f=j(r,n,u,e);o=f.width,a=f.height}else if(Array.isArray(u)&&"string"==typeof u[0])k(r,n,e,t);else{if(!(u instanceof HTMLElement))throw"unsupported src type";Fe(r,n,u,e),o=u.width,a=u.height}else H(r,n,e);return e.auto!==!1&&F(r,n,e,o,a),C(r,n,e),n}function K(r,e,t,n,i){n=n||t.width,i=i||t.height;var o=t.target||r.TEXTURE_2D;r.bindTexture(o,e);var a,u=t.format||r.RGBA,f=t.src;if(a=f&&(w(f)||Array.isArray(f)&&"number"==typeof f[0])?t.type||z(r,f):t.type||r.UNSIGNED_BYTE,o===r.TEXTURE_CUBE_MAP)for(var c=0;6>c;++c)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,u,n,i,0,u,a,null);else r.texImage2D(o,0,u,n,i,0,u,a,null)}function Q(r){return"string"==typeof r||Array.isArray(r)&&"string"==typeof r[0]}function Z(r,e,t){function n(){0===o&&t&&setTimeout(function(){t(a.length?a:void 0,e)},0)}function i(r){--o,r&&a.push(r),n()}var o=0,a=[],u={};return Object.keys(e).forEach(function(t){var n=e[t],a=void 0;Q(n.src)&&(a=i,++o),u[t]=q(r,n,a)}),n(),u}function $(r){return Oe[r]}function J(r){return Xe[r]}function re(r,e,t,n){var i=r.FRAMEBUFFER,o=r.createFramebuffer();r.bindFramebuffer(i,o),t=t||r.drawingBufferWidth,n=n||r.drawingBufferHeight,e=e||Le;var a=0,u={framebuffer:o,attachments:[]};return e.forEach(function(e){var o=e.attachment,f=e.format,c=$(f);if(c||(c=be+a++),!o)if(J(f))o=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,o),r.renderbufferStorage(r.RENDERBUFFER,f,t,n);else{var s=X(e);s.width=t,s.height=n,s.auto=void 0===e.auto?!1:e.auto,o=q(r,s)}if(o instanceof WebGLRenderbuffer)r.framebufferRenderbuffer(i,c,r.RENDERBUFFER,o);else{if(!(o instanceof WebGLTexture))throw"unknown attachment type";r.framebufferTexture2D(i,c,e.texTarget||r.TEXTURE_2D,o,e.level||0)}u.attachments.push(o)}),u}function ee(r,e,t,n,i){n=n||r.drawingBufferWidth,i=i||r.drawingBufferHeight,t=t||Le,t.forEach(function(t,o){var a=e.attachments[o],u=t.format;if(a instanceof WebGLRenderbuffer)r.bindRenderbuffer(r.RENDERBUFFER,a),r.renderbufferStorage(r.RENDERBUFFER,u,n,i);else{if(!(a instanceof WebGLTexture))throw"unknown attachment type";K(r,a,t,n,i)}})}var te=window.console&&window.console.error?window.console.error.bind(window.console):function(){},ne="",ie=new Uint8Array([128,192,255,255]),oe={},ae=5120,ue=5121,fe=5122,ce=5123,se=5124,le=5125,he=5126,me=6402,Ee=6406,ve=6407,pe=6408,de=6409,Te=6410,Ae=32854,ge=32855,_e=36194,ye=33189,we=6401,Re=36168,Ue=34041,be=36064,xe=36096,Me=36128,Pe=33306,Ie=33071,Be=9729,Se=function(){function r(r){e||(e={},Object.keys(r).forEach(function(t){"number"==typeof r[t]&&(e[r[t]]=t)}))}var e;return function(t,n){return r(),e[n]||"0x"+n.toString(16)}}(),Ce=["VERTEX_SHADER","FRAGMENT_SHADER"],Ne=function(){var r=["position","positions","a_position"];return function(e){for(var t,n=0;n<r.length&&(t=r[n],!(t in e));++n);n===r.length&&(t=Object.keys(e)[0]);var i=e[t],o=i.length||i.data.length,a=i.numComponents||R(t,o),u=o/a;if(o%a>0)throw"numComponents "+a+" not correct for length "+o;return u}}(),De={},Fe=function(){var r=document.createElement("canvas").getContext("2d");return function(e,t,n,i){i=i||oe;var o=i.target||e.TEXTURE_2D,a=n.width,u=n.height,f=i.format||e.RGBA,c=i.type||e.UNSIGNED_BYTE;if(B(e,i),e.bindTexture(o,t),o===e.TEXTURE_CUBE_MAP){var s,l,h=n.width,m=n.height;if(800==h&&266==m&&(h=798),h/6===m)s=m,l=[0,0,1,0,2,0,3,0,4,0,5,0];else if(h/6===m/2)s=m/2,l=[0,0,1,0,2,0,3,0,4,0,5,0];else if(m/6===h)s=h,l=[0,0,0,1,0,2,0,3,0,4,0,5];else if(h/3===m/2)s=h/3,l=[0,0,1,0,2,0,0,1,1,1,2,1];else{if(h/2!==m/3)throw"can't figure out cube map from element: "+(n.src?n.src:n.nodeName);s=h/2,l=[0,0,1,0,0,1,1,1,0,2,1,2]}var E=s;i.isBadGpu&&s>256&&(E=1024),r.canvas.width=E,r.canvas.height=E,a=s,u=s;var v=i.shift?s:0;O(e,i).forEach(function(t){var i=l[2*t.ndx+0]*s,o=l[2*t.ndx+1]*s+v;r.drawImage(n,i,o,s,s,0,0,E,E),e.texImage2D(t.face,0,f,f,c,r.canvas)}),r.canvas.width=1,r.canvas.height=1}else e.texImage2D(o,0,f,f,c,n);S(e,i),i.auto!==!1&&F(e,t,i,a,u),C(e,t,i)}}(),Le=[{format:pe,type:ue,min:Be,wrap:Ie},{format:Ue}],Oe={};Oe[Ue]=Pe,Oe[we]=Me,Oe[Re]=Me,Oe[me]=xe,Oe[ye]=xe;var Xe={};return Xe[Ae]=!0,Xe[ge]=!0,Xe[_e]=!0,Xe[Ue]=!0,Xe[ye]=!0,Xe[we]=!0,Xe[Re]=!0,{createAttribsFromArrays:b,createBuffersFromArrays:M,createBufferInfoFromArrays:x,createAttributeSetters:m,createProgram:a,createProgramFromScripts:f,createProgramFromSources:c,createProgramInfo:p,createUniformSetters:l,drawBufferInfo:P,drawObjectList:I,getWebGLContext:n,resizeCanvasToDisplaySize:d,setAttributes:E,setAttributePrefix:e,setBuffersAndAttributes:v,setUniforms:h,createTexture:q,setEmptyTexture:H,setTextureFromArray:j,loadTextureFromUrl:Y,setTextureFromElement:Fe,setTextureFilteringForSize:F,setTextureParameters:C,setDefaultTextureColor:r,createTextures:Z,resizeTexture:K,createFramebufferInfo:re,resizeFramebufferInfo:ee}}),t("twgl/v3",[],function(){function r(r){p=r}function e(){return new p(3)}function t(r,e,t){return t=t||new p(3),t[0]=r[0]+e[0],t[1]=r[1]+e[1],t[2]=r[2]+e[2],t}function n(r,e,t){return t=t||new p(3),t[0]=r[0]-e[0],t[1]=r[1]-e[1],t[2]=r[2]-e[2],t}function i(r,e,t,n){return n=n||new p(3),n[0]=(1-t)*r[0]+t*e[0],n[1]=(1-t)*r[1]+t*e[1],n[2]=(1-t)*r[2]+t*e[2],n}function o(r,e,t){return t=t||new p(3),t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t}function a(r,e,t){return t=t||new p(3),t[0]=r[0]/e,t[1]=r[1]/e,t[2]=r[2]/e,t}function u(r,e,t){return t=t||new p(3),t[0]=r[1]*e[2]-r[2]*e[1],t[1]=r[2]*e[0]-r[0]*e[2],t[2]=r[0]*e[1]-r[1]*e[0],t}function f(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function c(r){return Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2])}function s(r){return r[0]*r[0]+r[1]*r[1]+r[2]*r[2]}function l(r,e){e=e||new p(3);var t=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],n=Math.sqrt(t);return n>1e-5?(e[0]=r[0]/n,e[1]=r[1]/n,e[2]=r[2]/n):(e[0]=0,e[1]=0,e[2]=0),e}function h(r,e){return e=e||new p(3),e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e}function m(r,e){return e=e||new p(3),e[0]=r[0],e[1]=r[1],e[2]=r[2],e}function E(r,e,t){return t=t||new p(3),t[0]=r[0]*e[0],t[1]=r[1]*e[1],t[2]=r[2]*e[2],t}function v(r,e,t){return t=t||new p(3),t[0]=r[0]/e[0],t[1]=r[1]/e[1],t[2]=r[2]/e[2],t}var p=Float32Array;return{add:t,copy:m,create:e,cross:u,divide:v,divScalar:a,dot:f,lerp:i,length:c,lengthSq:s,mulScalar:o,multiply:E,negate:h,normalize:l,setDefaultType:r,subtract:n}}),t("twgl/m4",["./v3"],function(r){function e(r){VecType=r}function t(r,e){return e=e||new D(16),e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[3]=-r[3],e[4]=-r[4],e[5]=-r[5],e[6]=-r[6],e[7]=-r[7],e[8]=-r[8],e[9]=-r[9],e[10]=-r[10],e[11]=-r[11],e[12]=-r[12],e[13]=-r[13],e[14]=-r[14],e[15]=-r[15],e}function n(r,e){return e=e||new D(16),e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function i(r){return r=r||new D(16),r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function o(r,e){if(e=e||new D(16),e===r){var t;return t=r[1],r[1]=r[4],r[4]=t,t=r[2],r[2]=r[8],r[8]=t,t=r[3],r[3]=r[12],r[12]=t,t=r[6],r[6]=r[9],r[9]=t,t=r[7],r[7]=r[13],r[13]=t,t=r[11],r[11]=r[14],r[14]=t,e}var n=r[0],i=r[1],o=r[2],a=r[3],u=r[4],f=r[5],c=r[6],s=r[7],l=r[8],h=r[9],m=r[10],E=r[11],v=r[12],p=r[13],d=r[14],T=r[15];return e[0]=n,e[1]=u,e[2]=l,e[3]=v,e[4]=i,e[5]=f,e[6]=h,e[7]=p,e[8]=o,e[9]=c,e[10]=m,e[11]=d,e[12]=a,e[13]=s,e[14]=E,e[15]=T,e}function a(r,e){e=e||new D(16);var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],u=r[5],f=r[6],c=r[7],s=r[8],l=r[9],h=r[10],m=r[11],E=r[12],v=r[13],p=r[14],d=r[15],T=h*d,A=p*m,g=f*d,_=p*c,y=f*m,w=h*c,R=i*d,U=p*o,b=i*m,x=h*o,M=i*c,P=f*o,I=s*v,B=E*l,S=a*v,C=E*u,N=a*l,F=s*u,L=t*v,O=E*n,X=t*l,G=s*n,V=t*u,Y=a*n,k=T*u+_*l+y*v-(A*u+g*l+w*v),W=A*n+R*l+x*v-(T*n+U*l+b*v),z=g*n+U*u+M*v-(_*n+R*u+P*v),j=w*n+b*u+P*l-(y*n+x*u+M*l),H=1/(t*k+a*W+s*z+E*j);return e[0]=H*k,e[1]=H*W,e[2]=H*z,e[3]=H*j,e[4]=H*(A*a+g*s+w*E-(T*a+_*s+y*E)),e[5]=H*(T*t+U*s+b*E-(A*t+R*s+x*E)),e[6]=H*(_*t+R*a+P*E-(g*t+U*a+M*E)),e[7]=H*(y*t+x*a+M*s-(w*t+b*a+P*s)),e[8]=H*(I*c+C*m+N*d-(B*c+S*m+F*d)),e[9]=H*(B*o+L*m+G*d-(I*o+O*m+X*d)),e[10]=H*(S*o+O*c+V*d-(C*o+L*c+Y*d)),e[11]=H*(F*o+X*c+Y*m-(N*o+G*c+V*m)),e[12]=H*(S*h+F*p+B*f-(N*p+I*f+C*h)),e[13]=H*(X*p+I*i+O*h-(L*h+G*p+B*i)),e[14]=H*(L*f+Y*p+C*i-(V*p+S*i+O*f)),e[15]=H*(V*h+N*i+G*f-(X*f+Y*h+F*i)),e}function u(r,e,t){t=t||new D(16);var n=r[0],i=r[1],o=r[2],a=r[3],u=r[4],f=r[5],c=r[6],s=r[7],l=r[8],h=r[9],m=r[10],E=r[11],v=r[12],p=r[13],d=r[14],T=r[15],A=e[0],g=e[1],_=e[2],y=e[3],w=e[4],R=e[5],U=e[6],b=e[7],x=e[8],M=e[9],P=e[10],I=e[11],B=e[12],S=e[13],C=e[14],N=e[15];return t[0]=n*A+i*w+o*x+a*B,t[1]=n*g+i*R+o*M+a*S,t[2]=n*_+i*U+o*P+a*C,t[3]=n*y+i*b+o*I+a*N,t[4]=u*A+f*w+c*x+s*B,t[5]=u*g+f*R+c*M+s*S,t[6]=u*_+f*U+c*P+s*C,t[7]=u*y+f*b+c*I+s*N,t[8]=l*A+h*w+m*x+E*B,t[9]=l*g+h*R+m*M+E*S,t[10]=l*_+h*U+m*P+E*C,t[11]=l*y+h*b+m*I+E*N,t[12]=v*A+p*w+d*x+T*B,t[13]=v*g+p*R+d*M+T*S,t[14]=v*_+p*U+d*P+T*C,t[15]=v*y+p*b+d*I+T*N,t}function f(r,e,t){return t=t||i(),r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11]),t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function c(e,t){return t=t||r.create(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function s(e,t,n){n=n||r.create();var i=4*t;return n[0]=e[i+0],n[1]=e[i+1],n[2]=e[i+2],n}function l(r,e,t,n,i){i=i||new D(16);var o=Math.tan(.5*Math.PI-.5*r),a=1/(t-n);return i[0]=o/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=o,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(t+n)*a,i[11]=-1,i[12]=0,i[13]=0,i[14]=t*n*a*2,i[15]=0,i}function h(r,e,t,n,i,o,a){return a=a||new D(16),a[0]=2/(e-r),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-t),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-1/(o-i),a[11]=0,a[12]=(e+r)/(r-e),a[13]=(n+t)/(t-n),a[14]=-i/(i-o),a[15]=1,a}function m(r,e,t,n,i,o,a){a=a||new D(16);var u=e-r,f=n-t,c=i-o;return a[0]=2*i/u,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*i/f,a[6]=0,a[7]=0,a[8]=(r+e)/u,a[9]=(n+t)/f,a[10]=o/c,a[11]=-1,a[12]=0,a[13]=0,a[14]=i*o/c,a[15]=0,a}function E(e,t,n,i){i=i||new D(16);var o=F,a=L,u=O;return r.normalize(r.subtract(e,t,u),u),r.normalize(r.cross(n,u,o),o),r.normalize(r.cross(u,o,a),a),i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=0,i[4]=a[0],i[5]=a[1],i[6]=a[2],i[7]=0,i[8]=u[0],i[9]=u[1],i[10]=u[2],i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function v(r,e){return e=e||new D(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function p(r,e,t){t=t||new D(16);var n=e[0],i=e[1],o=e[2],a=r[0],u=r[1],f=r[2],c=r[3],s=r[4],l=r[5],h=r[6],m=r[7],E=r[8],v=r[9],p=r[10],d=r[11],T=r[12],A=r[13],g=r[14],_=r[15];return r!==t&&(t[0]=a,t[1]=u,t[2]=f,t[3]=c,t[4]=s,t[5]=l,t[6]=h,t[7]=m,t[8]=E,t[9]=v,t[10]=p,t[11]=d),t[12]=a*n+s*i+E*o+T,t[13]=u*n+l*i+v*o+A,t[14]=f*n+h*i+p*o+g,t[15]=c*n+m*i+d*o+_,t}function d(r,e){e=e||new D(16);var t=Math.cos(r),n=Math.sin(r);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function T(r,e,t){t=t||new D(16);var n=r[4],i=r[5],o=r[6],a=r[7],u=r[8],f=r[9],c=r[10],s=r[11],l=Math.cos(e),h=Math.sin(e);return t[4]=l*n+h*u,t[5]=l*i+h*f,t[6]=l*o+h*c,t[7]=l*a+h*s,t[8]=l*u-h*n,t[9]=l*f-h*i,t[10]=l*c-h*o,t[11]=l*s-h*a,r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t}function A(r,e){e=e||new D(16);var t=Math.cos(r),n=Math.sin(r);return e[0]=t,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g(r,e,t){t=t||new D(16);var n=r[0],i=r[1],o=r[2],a=r[3],u=r[8],f=r[9],c=r[10],s=r[11],l=Math.cos(e),h=Math.sin(e);return t[0]=l*n-h*u,t[1]=l*i-h*f,t[2]=l*o-h*c,t[3]=l*a-h*s,t[8]=l*u+h*n,t[9]=l*f+h*i,t[10]=l*c+h*o,t[11]=l*s+h*a,r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t}function _(r,e){e=e||new D(16);var t=Math.cos(r),n=Math.sin(r);return e[0]=t,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function R(r,e,t){t=t||new D(16);var n=r[0],i=r[1],o=r[2],a=r[3],u=r[4],f=r[5],c=r[6],s=r[7],l=Math.cos(e),h=Math.sin(e);return t[0]=l*n+h*u,t[1]=l*i+h*f,t[2]=l*o+h*c,t[3]=l*a+h*s,t[4]=l*u-h*n,t[5]=l*f-h*i,t[6]=l*c-h*o,t[7]=l*s-h*a,r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t}function U(r,e,t){t=t||new D(16);var n=r[0],i=r[1],o=r[2],a=Math.sqrt(n*n+i*i+o*o);n/=a,i/=a,o/=a;var u=n*n,f=i*i,c=o*o,s=Math.cos(e),l=Math.sin(e),h=1-s;return t[0]=u+(1-u)*s,t[1]=n*i*h+o*l,t[2]=n*o*h-i*l,t[3]=0,t[4]=n*i*h-o*l,t[5]=f+(1-f)*s,t[6]=i*o*h+n*l,t[7]=0,t[8]=n*o*h+i*l,t[9]=i*o*h-n*l,t[10]=c+(1-c)*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function b(r,e,t,n){n=n||new D(16);var i=e[0],o=e[1],a=e[2],u=Math.sqrt(i*i+o*o+a*a);i/=u,o/=u,a/=u;var f=i*i,c=o*o,s=a*a,l=Math.cos(t),h=Math.sin(t),m=1-l,E=f+(1-f)*l,v=i*o*m+a*h,p=i*a*m-o*h,d=i*o*m-a*h,T=c+(1-c)*l,A=o*a*m+i*h,g=i*a*m+o*h,_=o*a*m-i*h,y=s+(1-s)*l,w=r[0],R=r[1],U=r[2],b=r[3],x=r[4],M=r[5],P=r[6],I=r[7],B=r[8],S=r[9],C=r[10],N=r[11];return n[0]=E*w+v*x+p*B,n[1]=E*R+v*M+p*S,n[2]=E*U+v*P+p*C,n[3]=E*b+v*I+p*N,n[4]=d*w+T*x+A*B,n[5]=d*R+T*M+A*S,n[6]=d*U+T*P+A*C,n[7]=d*b+T*I+A*N,n[8]=g*w+_*x+y*B,n[9]=g*R+_*M+y*S,n[10]=g*U+_*P+y*C,n[11]=g*b+_*I+y*N,r!==n&&(n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function M(r,e){return e=e||new D(16),e[0]=r[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=r[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function P(r,e,t){t=t||new D(16);var n=e[0],i=e[1],o=e[2];return t[0]=n*r[0],t[1]=n*r[1],t[2]=n*r[2],t[3]=n*r[3],t[4]=i*r[4],t[5]=i*r[5],t[6]=i*r[6],t[7]=i*r[7],t[8]=o*r[8],t[9]=o*r[9],t[10]=o*r[10],t[11]=o*r[11],r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),r}function I(e,t,n){n=n||r.create();var i=t[0],o=t[1],a=t[2],u=i*e[3]+o*e[7]+a*e[11]+e[15];return n[0]=(i*e[0]+o*e[4]+a*e[8]+e[12])/u,n[1]=(i*e[1]+o*e[5]+a*e[9]+e[13])/u,n[2]=(i*e[2]+o*e[6]+a*e[10]+e[14])/u,n}function B(e,t,n){n=n||r.create();var i=t[0],o=t[1],a=t[2];return n[0]=i*e[0]+o*e[4]+a*e[8],n[1]=i*e[1]+o*e[5]+a*e[9],n[2]=i*e[2]+o*e[6]+a*e[10],n}function S(e,t,n){n=n||r.create();var i=a(e),o=t[0],u=t[1],f=t[2];return n[0]=o*i[0]+u*i[1]+f*i[2],n[1]=o*i[4]+u*i[5]+f*i[6],n[2]=o*i[8]+u*i[9]+f*i[10],n}function C(r,e,t){var n=r[0],i=r[1],o=r[2],a=r[3],u=n+n,f=i+i,c=o+o,s=n*u,l=n*f,h=n*c,m=i*f,E=i*c,v=o*c,p=a*u,d=a*f,T=a*c;return t[0]=1-(m+v),t[1]=l+T,t[2]=h-d,t[3]=0,t[4]=l-T,t[5]=1-(s+v),t[6]=E+p,t[7]=0,t[8]=h+d,t[9]=E-p,t[10]=1-(s+m),t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function N(r,e,t){var n=Math.cos(r/2),i=Math.sin(r/2),o=Math.cos(e/2),a=Math.sin(e/2),u=Math.cos(t/2),f=Math.sin(t/2),c=n*o,s=i*a;return w=c*u-s*f,x=c*f+s*u,y=i*o*u+n*a*f,z=n*a*u-i*o*f,[x,y,z,w]}var D=Float32Array,F=r.create(),L=r.create(),O=r.create();return{axisRotate:b,axisRotation:U,create:i,copy:n,frustum:m,getAxis:s,getTranslation:c,identity:i,inverse:a,lookAt:E,multiply:u,negate:t,ortho:h,perspective:l,rotateX:T,rotateY:g,rotateZ:R,rotationX:d,rotationY:A,rotationZ:_,scale:P,scaling:M,setDefaultType:e,setTranslation:f,transformDirection:B,transformNormal:S,transformPoint:I,translate:p,translation:v,transpose:o,eularToQuat:N,fromRotationTranslation:C}}),t("twgl/primitives",["./twgl","./m4","./v3"],function(r,e,t){function n(r,e){var t=0;return r.push=function(){for(var e=0;e<arguments.length;++e){var n=arguments[e];if(n instanceof Array||n.buffer&&n.buffer instanceof ArrayBuffer)for(var i=0;i<n.length;++i)r[t++]=n[i];else r[t++]=n}},r.reset=function(r){t=r||0},r.numComponents=e,Object.defineProperty(r,"numElements",{get:function(){return this.length/this.numComponents|0}}),r}function i(r,e,t){var i=t||Float32Array;return n(new i(r*e),r)}function o(r){return"indices"!==r}function a(r){function e(e){for(var o=r[e],u=o.numComponents,f=i(u,a,o.constructor),c=0;a>c;++c)for(var s=t[c],l=s*u,h=0;u>h;++h)f.push(o[l+h]);n[e]=f}var t=r.indices,n={},a=t.length;return Object.keys(r).filter(o).forEach(e),n}function u(r){if(r.indices)throw"can't flatten normals of indexed vertices. deindex them first";for(var e=r.normal,t=e.length,n=0;t>n;n+=9){var i=e[n+0],o=e[n+1],a=e[n+2],u=e[n+3],f=e[n+4],c=e[n+5],s=e[n+6],l=e[n+7],h=e[n+8],m=i+u+s,E=o+f+l,v=a+c+h,p=Math.sqrt(m*m+E*E+v*v);m/=p,E/=p,v/=p,e[n+0]=m,e[n+1]=E,e[n+2]=v,e[n+3]=m,e[n+4]=E,e[n+5]=v,e[n+6]=m,e[n+7]=E,e[n+8]=v}return r}function f(r,e,t){for(var n=r.length,i=new Float32Array(3),o=0;n>o;o+=3)t(e,[r[o],r[o+1],r[o+2]],i),r[o]=i[0],r[o+1]=i[1],r[o+2]=i[2]}function c(r,e,n){n=n||t.create();var i=e[0],o=e[1],a=e[2];return n[0]=i*r[0]+o*r[1]+a*r[2],n[1]=i*r[4]+o*r[5]+a*r[6],n[2]=i*r[8]+o*r[9]+a*r[10],n}function s(r,t){return f(r,t,e.transformDirection),r}function l(r,t){return f(r,e.inverse(t),c),r}function h(r,t){return f(r,t,e.transformPoint),r}function m(r,e){return Object.keys(r).forEach(function(t){var n=r[t];t.indexOf("pos")>=0?h(n,e):t.indexOf("tan")>=0||t.indexOf("binorm")>=0?s(n,e):t.indexOf("norm")>=0&&l(n,e)}),r}function E(r,e,t){return r=r||2,e=e||0,t=t||0,r*=.5,{position:{numComponents:2,data:[e+-1*r,t+-1*r,e+1*r,t+-1*r,e+-1*r,t+1*r,e+1*r,t+1*r]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function v(r,t,n,o,a){r=r||1,t=t||1,n=n||1,o=o||1,a=a||e.identity();for(var u=(n+1)*(o+1),f=i(3,u),c=i(3,u),s=i(2,u),l=0;o>=l;l++)for(var h=0;n>=h;h++){var E=h/n,v=l/o;f.push(r*E-.5*r,0,t*v-.5*t),c.push(0,1,0),s.push(E,v)}for(var p=n+1,d=i(3,n*o*2,Uint16Array),l=0;o>l;l++)for(var h=0;n>h;h++)d.push((l+0)*p+h,(l+1)*p+h,(l+0)*p+h+1),d.push((l+1)*p+h,(l+1)*p+h+1,(l+0)*p+h+1);
var T=m({position:f,normal:c,texcoord:s,indices:d},a);return T}function p(r,e,t,n,o,a,u){if(0>=e||0>=t)throw Error("subdivisionAxis and subdivisionHeight must be > 0");n=n||0,o=o||Math.PI,a=a||0,u=u||2*Math.PI;for(var f=o-n,c=u-a,s=(e+1)*(t+1),l=i(3,s),h=i(3,s),m=i(2,s),E=0;t>=E;E++)for(var v=0;e>=v;v++){var p=v/e,d=E/t,T=c*p,A=f*d,g=Math.sin(T),_=Math.cos(T),y=Math.sin(A),w=Math.cos(A),R=_*y,U=w,b=g*y;l.push(r*R,r*U,r*b),h.push(R,U,b),m.push(1-p,d)}for(var x=e+1,M=i(3,e*t*2,Uint16Array),v=0;e>v;v++)for(var E=0;t>E;E++)M.push((E+0)*x+v,(E+0)*x+v+1,(E+1)*x+v),M.push((E+1)*x+v,(E+0)*x+v+1,(E+1)*x+v+1);return{position:l,normal:h,texcoord:m,indices:M}}function d(r){r=r||1;for(var e=r/2,t=[[-e,-e,-e],[+e,-e,-e],[-e,+e,-e],[+e,+e,-e],[-e,-e,+e],[+e,-e,+e],[-e,+e,+e],[+e,+e,+e]],n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],o=[[1,0],[0,0],[0,1],[1,1]],a=24,u=i(3,a),f=i(3,a),c=i(2,a),s=i(3,12,Uint16Array),l=0;6>l;++l){for(var h=P[l],m=0;4>m;++m){var E=t[h[m]],v=n[l],p=o[m];u.push(E),f.push(v),c.push(p)}var d=4*l;s.push(d+0,d+1,d+2),s.push(d+0,d+2,d+3)}return{position:u,normal:f,texcoord:c,indices:s}}function T(r,e,t,n,o,a,u){if(3>n)throw Error("radialSubdivisions must be 3 or greater");if(1>o)throw Error("verticalSubdivisions must be 1 or greater");for(var f=void 0===a?!0:a,c=void 0===u?!0:u,s=(f?2:0)+(c?2:0),l=(n+1)*(o+1+s),h=i(3,l),m=i(3,l),E=i(2,l),v=i(3,n*(o+s)*2,Uint16Array),p=n+1,d=Math.atan2(r-e,t),T=Math.cos(d),A=Math.sin(d),g=f?-2:0,_=o+(c?2:0),y=g;_>=y;++y){var w,R=y/o,U=t*R;0>y?(U=0,R=1,w=r):y>o?(U=t,R=1,w=e):w=r+(e-r)*(y/o),(-2===y||y===o+2)&&(w=0,R=0),U-=t/2;for(var b=0;p>b;++b){var x=Math.sin(b*Math.PI*2/n),M=Math.cos(b*Math.PI*2/n);h.push(x*w,U,M*w),m.push(0>y||y>o?0:x*T,0>y?-1:y>o?1:A,0>y||y>o?0:M*T),E.push(b/n,1-R)}}for(var y=0;o+s>y;++y)for(var b=0;n>b;++b)v.push(p*(y+0)+0+b,p*(y+0)+1+b,p*(y+1)+1+b),v.push(p*(y+0)+0+b,p*(y+1)+1+b,p*(y+1)+0+b);return{position:h,normal:m,texcoord:E,indices:v}}function A(r,e){e=e||[];for(var t=[],n=0;n<r.length;n+=4){var i=r[n],o=r.slice(n+1,n+4);o.push.apply(o,e);for(var a=0;i>a;++a)t.push.apply(t,o)}return t}function g(){var r=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0],t=A([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),n=A([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),o=r.length/3,a={position:i(3,o),texcoord:i(2,o),normal:i(3,o),color:i(4,o,Uint8Array),indices:i(3,o/3,Uint16Array)};a.position.push(r),a.texcoord.push(e),a.normal.push(t),a.color.push(n);for(var u=0;o>u;++u)a.indices.push(u);return a}function _(r,e,n,o,a,u,f){function c(r,e,t){return r+(e-r)*t}function s(e,n,i,f,s,l){for(var E=0;a>=E;E++){var T=n/(h-1),A=E/a,g=2*(T-.5),_=(u+A*m)*Math.PI,y=Math.sin(_),w=Math.cos(_),R=c(r,e,y),U=g*o,b=w*r,x=y*R;v.push(U,b,x);var M=t.add(t.multiply([0,y,w],i),f);p.push(M),d.push(T*s+l,A)}}function l(r,e){for(var t=0;a>t;++t)g.push(r+t+0,r+t+1,e+t+0),g.push(r+t+1,e+t+1,e+t+0)}if(0>=a)throw Error("subdivisionDown must be > 0");u=u||0,f=f||1;for(var h=2,m=f-u,E=2*(a+1)*(2+h),v=i(3,E),p=i(3,E),d=i(2,E),T=0;h>T;T++){var A=2*(T/(h-1)-.5);s(e,T,[1,1,1],[0,0,0],1,0),s(e,T,[0,0,0],[A,0,0],0,0),s(n,T,[1,1,1],[0,0,0],1,0),s(n,T,[0,0,0],[A,0,0],0,1)}var g=i(3,2*a*(2+h),Uint16Array),_=a+1;return l(0*_,4*_),l(5*_,7*_),l(6*_,2*_),l(3*_,1*_),{position:v,normal:p,texcoord:d,indices:g}}function y(r,e,t,n,i,o){return T(r,r,e,t,n,i,o)}function w(r,e,t,n,o,a){if(3>t)throw Error("radialSubdivisions must be 3 or greater");if(3>n)throw Error("verticalSubdivisions must be 3 or greater");o=o||0,a=a||2*Math.PI,range=a-o;for(var u=t+1,f=n+1,c=u*f,s=i(3,c),l=i(3,c),h=i(2,c),m=i(3,t*n*2,Uint16Array),E=0;f>E;++E)for(var v=E/n,p=v*Math.PI*2,d=Math.sin(p),T=r+d*e,A=Math.cos(p),g=A*e,_=0;u>_;++_){var y=_/t,w=o+y*range,R=Math.sin(w),U=Math.cos(w),b=R*T,x=U*T,M=R*d,P=U*d;s.push(b,g,x),l.push(M,A,P),h.push(y,1-v)}for(var E=0;n>E;++E)for(var _=0;t>_;++_){var I=1+_,B=1+E;m.push(u*E+_,u*B+_,u*E+I),m.push(u*B+_,u*B+I,u*E+I)}return{position:s,normal:l,texcoord:h,indices:m}}function R(r,e,t,n,o){if(3>e)throw Error("divisions must be at least 3");t=t?t:1,o=o?o:1,n=n?n:0;for(var a=(e+1)*(t+1),u=i(3,a),f=i(3,a),c=i(2,a),s=i(3,t*e*2,Uint16Array),l=0,h=r-n,m=0;t>=m;++m){for(var E=n+h*Math.pow(m/t,o),v=0;e>=v;++v){var p=2*Math.PI*v/e,d=E*Math.cos(p),T=E*Math.sin(p);if(u.push(d,0,T),f.push(0,1,0),c.push(1-v/e,m/t),m>0&&v!==e){var A=l+(v+1),g=l+v,_=l+v-e,y=l+(v+1)-e;s.push(A,g,_),s.push(A,_,y)}}l+=e+1}return{position:u,normal:f,texcoord:c,indices:s}}function U(r){return Math.random()*r|0}function b(r,e){e=e||{};var t=r.position.numElements,n=i(4,t,Uint8Array),o=e.rand||function(r,e){return 3>e?U(256):255};if(r.color=n,r.indices)for(var a=0;t>a;++a)n.push(o(a,0),o(a,1),o(a,2),o(a,3));else for(var u=e.vertsPerColor||3,f=t/u,a=0;f>a;++a)for(var c=[o(a,0),o(a,1),o(a,2),o(a,3)],s=0;u>s;++s)n.push(c);return r}function x(e){return function(t){var n=e.apply(this,Array.prototype.slice.call(arguments,1));return r.createBuffersFromArrays(t,n)}}function M(e){return function(t){var n=e.apply(null,Array.prototype.slice.call(arguments,1));return r.createBufferInfoFromArrays(t,n)}}var P=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];return{create3DFBufferInfo:M(g),create3DFBuffers:x(g),create3DFVertices:g,createAugmentedTypedArray:i,createCubeBufferInfo:M(d),createCubeBuffers:x(d),createCubeVertices:d,createPlaneBufferInfo:M(v),createPlaneBuffers:x(v),createPlaneVertices:v,createSphereBufferInfo:M(p),createSphereBuffers:x(p),createSphereVertices:p,createTruncatedConeBufferInfo:M(T),createTruncatedConeBuffers:x(T),createTruncatedConeVertices:T,createXYQuadBufferInfo:M(E),createXYQuadBuffers:x(E),createXYQuadVertices:E,createCresentBufferInfo:M(_),createCresentBuffers:x(_),createCresentVertices:_,createCylinderBufferInfo:M(y),createCylinderBuffers:x(y),createCylinderVertices:y,createTorusBufferInfo:M(w),createTorusBuffers:x(w),createTorusVertices:w,createDiscBufferInfo:M(R),createDiscBuffers:x(R),createDiscVertices:R,deindexVertices:a,flattenNormals:u,makeRandomVertexColors:b,reorientDirections:s,reorientNormals:l,reorientPositions:h,reorientVertices:m}}),t("main",["twgl/twgl","twgl/m4","twgl/v3","twgl/primitives"],function(r,e,t,n){return r.m4=e,r.v3=t,r.primitives=n,r}),e(["main"],function(r){return r},void 0,!0),t("build/js/twgl-includer-full",function(){}),e("main")});

/**
   VR support (using WebVR)
*/

    var vrHMD, vrSensor, vrEnabled = false;

    function initVR(callbackfn) {
        function enumerateVRDevices(vrdevs) {
            // First, find a HMD -- just use the first one we find
            vrdevs.every(function(e) {
                vrHMD = e;
                return (!e instanceof HMDVRDevice)
            })
            if (!vrHMD) return;
            if (callbackfn) callbackfn();

            // Then, find that HMD's position sensor
            vrdevs.every(function(e) {
                getCameraQuaternion = function() {
                    var quat = [0, 0, 0, 0];
                    if (vrSensor) {
                        var state = vrSensor.getState();
                        if (state.orientation)
                            quat = [state.orientation.x, state.orientation.y, state.orientation.z, state.orientation.w];
                    }
                    return quat;
                }
                vrSensor = e;
                return !((e.hardwareUnitId == vrHMD.hardwareUnitId) && (e instanceof PositionSensorVRDevice))
            })
        }
        if (navigator.getVRDevices)
            navigator.getVRDevices().then(enumerateVRDevices);
        else if (navigator.mozGetVRDevices)
            navigator.mozGetVRDevices(enumerateVRDevices);
    }

    initVR(function(){
    	setSvgIcon(1);
    });

    function startVRfullscreen() {
      if (!vrHMD) 
        console.log("couldn't find webVR. Opening to full screen, and displaying the info card on how to support Oculus by installing webVR.");

    if (isMobile)
      isDistortion = (isDistortion) ? 0 : 1;

    if (isMobile || vrEnabled)
    	isStereo = (isStereo) ? null:1;
      if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
      	if (document.msExitFullscreen) document.msExitFullscreen();
        if (document.webkitIsFullScreen) document.webkitExitFullscreen();
        if (document.mozFullScreen) document.mozCancelFullScreen();
      }
      else { 
      	  var t = { vrDisplay: vrHMD /*,vrDistortion: false */ }
          if (document.body.webkitRequestFullScreen) document.body.webkitRequestFullScreen(t)
          if (document.body.mozRequestFullScreen) document.body.mozRequestFullScreen(t)
          if (document.body.msRequestFullscreen) document.body.msRequestFullscreen()
      }
    }
    function fullScreenChange() {
    	var isFullscreen = (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenEnabled);
        vrEnabled = vrHMD && isFullscreen;
        //automatically switch to stereo mode if 'cardboard' or is 'webVR' enabled
        //update icon's
        if (!vrHMD) {
        	setSvgIcon((isFullscreen) ? 2:0);
    	}
    }
    document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
    document.addEventListener('mozfullscreenchange', fullScreenChange, false);
    document.addEventListener('fullscreenchange', fullScreenChange, false);
/**
   Command line URL Inputs - stereo=1, flipLR=1, msaa=1, fov=80.
*/

    var q = {};
    if (location.href.split('?')[1]) location.href.split('?')[1].split('&').forEach(function(i) {
        q[i.split('=')[0]] = i.split('=')[1];
    });

    var isMobile = navigator.userAgent.match(/iPhone|Android|iPad|iPod/);
    var isAndroid = navigator.userAgent.match(/Android/);
    var isIEwin = navigator.userAgent.match(/Trident/);  //IE11 cannot handle NPOT textures
    var isStereo = q.stereo || q.flipLR;  // flip left and right eye, for debugging stereo on desktop/ipad (cross your eyes)
    var isDistortion = q.distort;
    var fov = q.fov || 80;  // set the field of view
    var useMSAA = q.msaa || 1;



/**
   webgl - using twgl.js helper library.  Based on 'primitives' scenegraph example.  Added stereo and popup labels
*/

    twgl.setAttributePrefix("a_");
    var m4 = twgl.m4;
    var gl = twgl.getWebGLContext(c, {depth:true, antialias:true});
    var eye = [0, 0, 0];
    var camera = m4.identity();
    var view = m4.identity();
    var viewDirection = m4.identity();
    var viewDirectionProjection = m4.identity();
    var viewDirectionProjectionInverse = m4.identity();

    var objects = [];
    var drawObjects = [];

    function initStereoSkybox() {
        var programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
        var plane = twgl.primitives.createXYQuadBufferInfo(gl);

        var previewTxture = twgl.createTexture(gl, { 
        	target: 
	          	gl.TEXTURE_CUBE_MAP,
	            format: gl.LUMINANCE,
	            src: [ 0xF0, 0xE0, 0xD0, 0xC0, 0xB0, 0xA0, ]
            });

            var uniforms = {
                u_skybox: previewTxture,
                u_color: [1, 1, 1, 1],
                u_viewDirectionProjectionInverse: viewDirectionProjectionInverse,
                u_distortion: [1.0,0.05,0.07] // cardboard v1 [1.0,0.15,0.18] // SVR Glass [1.0,0.08,0.09]
            }
            drawObjects.push({
                programInfo: programInfo,
                bufferInfo: plane,
                uniforms: uniforms,
            });

            objects.push({
                skyboxL: previewTxture,
                skyboxR: previewTxture,
                fov: 90,
                uniforms: uniforms,
                type: 0
            });
    }

    var g_suspendRenderingLoop = false;
    var _fov = fov;

    function render(time) {
        //time *= 0.001;
        requestAnimationFrame(render);
        if (g_suspendRenderingLoop) return; //check for any movement.  

        var aspect = gl.canvas.width / gl.canvas.height * ((isStereo) ? 0.5 : 1.0);
        var projection = m4.perspective(_fov * Math.PI / 180, aspect, 0.5, 10);
        var quat = getCameraQuaternion();
        _fov += (fov-_fov)*0.1;

        m4.fromRotationTranslation(quat, eye, camera)
        m4.inverse(camera, view);
        m4.setTranslation(view, eye, viewDirection);
        m4.multiply(viewDirection, projection, viewDirectionProjection);
        m4.inverse(viewDirectionProjection, viewDirectionProjectionInverse);

        objects[0].uniforms.u_distortion[0] = (isDistortion==1) ? 1:0;

        //Render CubeMaps (either stereo or mono)
        if (!isStereo) {
            // Render Mono
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            twgl.drawObjectList(gl, drawObjects);
        } else {
            // Render Stereo
            gl.viewport(0, 0, gl.canvas.width / 2, gl.canvas.height);
            objects.forEach(function(obj) { obj.uniforms.u_skybox = obj.skyboxL });
            twgl.drawObjectList(gl, drawObjects);
            // Render Right
            gl.viewport(gl.canvas.width / 2, 0, gl.canvas.width / 2, gl.canvas.height);
            objects.forEach(function(obj) { obj.uniforms.u_skybox = obj.skyboxR });
            twgl.drawObjectList(gl, drawObjects);
        }
    }
    initStereoSkybox();
    requestAnimationFrame(render);



/**
   Input - Touch/Mouse and html5-DeviceOrientation
*/

    var ox, oy, dx, dy, ddx, ddy;
    var tx, ty, rx, ry;
    ox = 100, oy = 0.0, dx = -40, dy = 0.0, dz = 0.0, ddx = -70.0, ddy = 10.0;
    rx = -40.0, ry = -20.0, rz=0;

    var friction = 0.001;
    var Pii = Math.PI / 180;

    function $(elem) {return document.getElementById(elem)}
    function $$(elem) {return document.getElementById(elem).style}
    var getCameraQuaternion = function() {
        if (isMobile) friction = 0.7; //sensor refresh is 20Hz on ios8, 60Hz on ios9, and android 60Hz
        if ( (Math.abs(ddx + dx - rx) > 90) || (Math.abs(-ddy + dy - ry) > 90)) friction=1;
        if (Math.abs(dz - rz)>3) friction=1;
        rx += (ddx + dx - rx) * friction;
        ry += (-ddy + dy - ry) * friction;
        rz += (dz - rz) * friction;
        return m4.eularToQuat(rx * Pii, rz, ry * Pii);
    }

    window.onorientationchange = function() {
    	var isPortrait = (window.orientation == 0);
    	var isLandscape = !isPortrait && isMobile;
    	if (isLandscape && q.url) { isStereo = 1; isDistortion = 1; useMSAA = q.msaa || 2;}
    	twgl.resizeCanvasToDisplaySize(gl.canvas, useMSAA);
		$$('rotatePhone').cssText = (isPortrait && q.url) ? 'display:block':'display:none';
		$$('info-icon').cssText = (isMobile) ? 'display:none;':'';
    }
    window.onorientationchange();


    if (isMobile && window.DeviceOrientationEvent) {
        window.ondeviceorientation = function(e) {
            dx = e.alpha +0.01;
            dy = -(90.0 + e.gamma);
            dz = -e.beta * Pii;

            //Handle orientation quirk, if phone is landscape upside down
            if (window.orientation == -90) {
                dy = (isAndroid) ? -dy : 180.0 - dy;
                dx = (isAndroid) ? dx : 180.0 + dx;
                dz = -dz;
            }

            //Handle portrait
            if (window.orientation == 0) {
                isStereo = 0;
                dx = 90 + dx;
                dy = -(90 + dz / Pii);
                dz = 0; 
                isDistortion = null;
            }

        }
    }

    // twgl uses 'c' global for canvas
    var suspend_timer, m_button;
    c.onmouseup = function(evt) {
        evt.preventDefault();
        m_button = 0;
        window.clearTimeout(suspend_timer);
        suspend_timer = window.setTimeout(function() {
            g_suspendRenderingLoop = true;
        }, 4000);
    }

    c.onmousedown = function(evt) {
      m_button = 1;
      friction = 0.05;  //when the pano first opens, do a slow initial camera pan of the scene, to indicate to the user that this is not just a static image.  Also, the mouse cursor is changed to a spin symbol, to also help indicate that the user can spin the scene with their mouse. 
    }

    c.ontouchstart = function(evt) {
        evt.preventDefault();
        var tap = (isMobile) ? evt.touches[0] : evt;
        tx = tap.pageX;
        ty = tap.pageY;
    }

    c.ontouchmove = c.onmousemove = function(evt) {
        evt.preventDefault();
        var tap = (isMobile) ? evt.touches[0] : evt;
        ox = tx;
        oy = ty;
        tx = tap.pageX;
        ty = tap.pageY;
        if (isMobile || m_button) {
            ddx += (tx - ox) / 4;
            ddy -= (ty - oy) / 6;
            g_suspendRenderingLoop = false;
        }

    }

window.onresize = function() { twgl.resizeCanvasToDisplaySize(gl.canvas, useMSAA)}
var isviz = false;
function zoom() {fov=(fov<40)?110:(fov-30);g_suspendRenderingLoop=false; $$('icon-zoomin').cssText = (fov<39) ? 'display:none':'';}
function showinfo() {isviz=!isviz;if (isviz) $("infocard").focus(); else $("webvr-container").focus();}
function setSvgIcon(n) {
	var szWVR = '<svg viewBox="0 25 185 140"><g><g><path fill="white" stroke="black" stroke-width="1" id="_x3C_Path_x3E__9_" d="M171.2,144.2c0-5.6-3.6-7.2-8.8-7.2H155v26h6v-11h-0.4l6.4,11h6.2l-7.4-11.3    C169.3,151.1,171.2,147.6,171.2,144.2z M161.2,149H161v-9h0.3c2.7,0,4.8,1.2,4.8,4.4C166,147.6,164.1,149,161.2,149z"/>      <polygon fill="white" stroke="black" stroke-width="1" points="132.3,153 132.2,153 125.9,137 120.4,137 130.4,163 133.4,163 143.6,137 138.1,137   "/>      <path fill="white" stroke="black" stroke-width="1" id="_x3C_Path_x3E__8_" d="M105,147.9c1.6-1,2.3-2.5,2.3-4.4c0-5.2-3-6.5-7.9-6.5H93v26h8.1c4.8,0,8.4-2.9,8.4-8    C109.5,152.1,108.1,148.4,105,147.9z M98,140h0.8c2.2,0,3.7,0.8,3.7,3.5c0,2.7-1.2,3.5-3.7,3.5H98V140z M99.3,158H98v-7h1    c2.6,0,5.4,0,5.4,3.4S102,158,99.3,158z"/>      <polygon fill="white" stroke="black" stroke-width="1" points="65,163 79,163 79,158 71,158 71,151 79,151 79,147 71,147 71,140 79,140 79,137 65,137   "/>      <polygon fill="white" stroke="black" stroke-width="1" points="43.3,154 43.2,154 37.8,137 34.7,137 29.5,154 29.4,154 24.1,137 18.8,137 27.1,163 30.9,163 35.8,146 35.9,146     41.1,163 44.9,163 53.8,137 48.4,137 "/>    </g>    <circle fill="white" stroke="black" stroke-width="3" cx="62.4" cy="73.5" r="13.9"/>    <circle fill="white" stroke="black" stroke-width="3" cx="130" cy="73.5" r="13.9"/>    <path fill="white" stroke="black" stroke-width="3" id="_x3C_Path_x3E__5_" d="M129.6,117c34.5,0,56.1-43.9,56.1-43.9s-21.6-43.8-56.1-43.9c0,0-67.2,0.1-67.3,0.1   c-34.5,0-56.1,43.8-56.1,43.8S27.8,117,62.4,117c13.3,0,24.7-6.5,33.6-14.5C105,110.5,116.3,117,129.6,117z M85.7,91.7   c-6.2,5.7-14.1,10.6-23.5,10.6c-23.2,0-37.7-29.3-37.7-29.3s14.5-29.3,37.7-29.3c9.6,0,17.6,5,23.8,10.8c4.1,3.9,7.4,8.2,9.8,11.7   c2.4-3.5,5.8-8,10.1-11.9c6.2-5.7,14.1-10.6,23.6-10.6c23.2,0,37.7,29.3,37.7,29.3s-14.5,29.3-37.7,29.3c-9.3,0-17.1-4.7-23.3-10.3   c-4.4-4.1-7.9-8.6-10.4-12.2C93.4,83.2,90,87.7,85.7,91.7z"/>    <path fill="none" d="M0,0h192v192H0V0z"/></g></svg>'	
	var szFull = '<svg viewBox="2 2 19 19"><g fill="white"> <path d="M8.476,7.77l1.367-1.366h-3.44v3.439l1.366-1.366l2.327,2.328c0.098,0.098,0.226,0.146,0.354,0.146        s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L8.476,7.77z"/>      <path d="M12.902,12.196c-0.195-0.195-0.512-0.195-0.707,0c-0.196,0.195-0.196,0.512,0,0.707l2.326,2.326        l-1.365,1.365h3.441v-3.439l-1.367,1.367L12.902,12.196z"/>      <path d="M10.096,12.194l-2.327,2.328l-1.366-1.367v3.441h3.44l-1.367-1.367l2.327-2.328        c0.195-0.195,0.195-0.512,0-0.707S10.292,11.999,10.096,12.194z"/>      <path d="M13.158,6.403l1.365,1.366l-2.326,2.328c-0.195,0.195-0.195,0.512,0,0.707        c0.098,0.098,0.225,0.146,0.354,0.146c0.127,0,0.256-0.049,0.354-0.146l2.326-2.328l1.367,1.367v-3.44H13.158z"/>    </g></svg>'	
	var szExit = '<svg viewBox="0 0 24 24"><g fill="white"><path d="M7.341,6.635c-0.195-0.195-0.512-0.195-0.707,0c-0.195,0.195-0.195,0.512,0,0.707l1.749,1.75L7,10.475  h3.441V7.036L9.09,8.385L7.341,6.635z"/><path d="M14.563,13.857l1.367-1.367h-3.441v3.44l1.366-1.366l1.803,1.801c0.098,0.098,0.226,0.146,0.354,0.146  s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L14.563,13.857z"/><path d="M14.582,9.127l1.784-1.786c0.195-0.196,0.195-0.512,0-0.708c-0.195-0.194-0.512-0.195-0.707,0L13.875,8.42  l-1.386-1.386v3.441h3.44L14.582,9.127z"/><path d="M8.401,13.891l-1.766,1.768c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146  s0.256-0.049,0.354-0.146l1.766-1.768l1.332,1.333v-3.44H7.001L8.401,13.891z"/></g></svg>'	
	$("webvr-container").innerHTML = (n==1) ? szWVR : ((n==2) ? szExit : szFull );
}
setSvgIcon(0);
