function(){return function(){var aa=this;function ba(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function h(a){return"string"==typeof a}function da(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function fa(a,b,c){fa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return fa.apply(null,arguments)}function ga(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function l(a){var b=m;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function n(a,b){for(var c=a.length,d=h(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function p(a,b,c){var d=c;n(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d}function q(a,b){for(var c=a.length,d=h(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function ha(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function ia(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function ja(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ka(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?la(a,b):!c&&ja(e,b)?-1*ma(a,b):!d&&ja(f,a)?ma(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);
d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(aa.Range.START_TO_END,d)}function ma(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return la(d,a)}function la(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function r(a,b,c){this.a=a;this.b=b||1;this.f=c||1};function na(a){this.b=a;this.a=0}function oa(a){a=a.match(pa);for(var b=0;b<a.length;b++)qa.test(a[b])&&a.splice(b,1);return new na(a)}var pa=RegExp("\\$?(?:(?![0-9-\\.])(?:\\*|[\\w-\\.]+):)?(?![0-9-\\.])(?:\\*|[\\w-\\.]+)|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),qa=/^\s/;function t(a,b){return a.b[a.a+(b||0)]}function u(a){return a.b[a.a++]}function w(a){return a.b.length<=a.a};function x(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function y(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function z(a,b,c,d,e){return ra.call(null,a,b,h(c)?c:null,h(d)?d:null,e||new B)}
function ra(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),n(b,function(b){a.a(b)&&C(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),n(b,function(b){b.className==d&&a.a(b)&&C(e,b)})):a instanceof D?sa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),n(b,function(a){y(a,c,d)&&C(e,a)}));return e}function ta(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)y(b,c,d)&&a.a(b)&&C(e,b);return e}
function sa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)y(b,c,d)&&a.a(b)&&C(e,b),sa(a,b,c,d,e)};function B(){this.b=this.a=null;this.l=0}function ua(a){this.node=a;this.a=this.b=null}function va(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;)c.node==d.node?(f=c,c=c.a,d=d.a):0<ka(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a),(f.b=e)?e.a=f:a.a=f,e=f,g++;for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}B.prototype.unshift=function(a){a=new ua(a);a.a=this.a;this.b?this.a.b=a:this.a=this.b=a;this.a=a;this.l++};
function C(a,b){var c=new ua(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function E(a){return(a=a.a)?a.node:null}function F(a){return(a=E(a))?x(a):""}function G(a,b){return new wa(a,!!b)}function wa(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function H(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.node};function m(a){this.i=a;this.b=this.g=!1;this.f=null}function I(a){return"\n  "+a.toString().split("\n").join("\n  ")}function xa(a,b){a.g=b}function ya(a,b){a.b=b}function J(a,b){var c=a.a(b);return c instanceof B?+F(c):+c}function K(a,b){var c=a.a(b);return c instanceof B?F(c):""+c}function L(a,b){var c=a.a(b);return c instanceof B?!!c.l:!!c};function M(a,b,c){m.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==za&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}l(M);
function N(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof B&&c instanceof B){b=G(b);for(d=H(b);d;d=H(b))for(e=G(c),f=H(e);f;f=H(e))if(a(x(d),x(f)))return!0;return!1}if(b instanceof B||c instanceof B){b instanceof B?(e=b,d=c):(e=c,d=b);f=G(e);for(var g=typeof d,k=H(f);k;k=H(f)){switch(g){case "number":k=+x(k);break;case "boolean":k=!!x(k);break;case "string":k=x(k);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(k,d)||e==c&&a(d,k))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}M.prototype.a=function(a){return this.c.m(this.h,this.o,a)};M.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+I(this.h);return a+=I(this.o)};function Aa(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}Aa.prototype.toString=function(){return this.a};var Ba={};
function P(a,b,c,d){if(Ba.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Aa(a,b,c,d);return Ba[a.toString()]=a}P("div",6,1,function(a,b,c){return J(a,c)/J(b,c)});P("mod",6,1,function(a,b,c){return J(a,c)%J(b,c)});P("*",6,1,function(a,b,c){return J(a,c)*J(b,c)});P("+",5,1,function(a,b,c){return J(a,c)+J(b,c)});P("-",5,1,function(a,b,c){return J(a,c)-J(b,c)});P("<",4,2,function(a,b,c){return N(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return N(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return N(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return N(function(a,b){return a>=b},a,b,c)});var za=P("=",3,2,function(a,b,c){return N(function(a,b){return a==b},a,b,c,!0)});P("!=",3,2,function(a,b,c){return N(function(a,b){return a!=b},a,b,c,!0)});P("and",2,2,function(a,b,c){return L(a,c)&&L(b,c)});P("or",1,2,function(a,b,c){return L(a,c)||L(b,c)});function Q(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");m.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}l(Q);Q.prototype.a=function(a){a=this.c.a(a);return Ca(this.h,a)};Q.prototype.toString=function(){var a;a="Filter:"+I(this.c);return a+=I(this.h)};function R(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&n(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});m.call(this,a.i);this.h=a;this.c=b;xa(this,a.g||q(b,function(a){return a.g}));ya(this,a.D&&!b.length||a.C&&!!b.length||q(b,function(a){return a.b}))}l(R);
R.prototype.a=function(a){return this.h.m.apply(null,ha(a,this.c))};R.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=p(this.c,function(a,b){return a+I(b)},"Arguments:"),a=a+I(b);return a};function Da(a,b,c,d,e,f,g,k,v){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==k?k:g;this.B=!!v}Da.prototype.toString=function(){return this.j};var Ea={};
function S(a,b,c,d,e,f,g,k){if(Ea.hasOwnProperty(a))throw Error("Function already created: "+a+".");Ea[a]=new Da(a,b,c,d,!1,e,f,g,k)}S("boolean",2,!1,!1,function(a,b){return L(b,a)},1);S("ceiling",1,!1,!1,function(a,b){return Math.ceil(J(b,a))},1);S("concat",3,!1,!1,function(a,b){return p(ia(arguments,1),function(b,d){return b+K(d,a)},"")},2,null);S("contains",2,!1,!1,function(a,b,c){b=K(b,a);a=K(c,a);return-1!=b.indexOf(a)},2);S("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
S("false",2,!1,!1,function(){return!1},0);S("floor",1,!1,!1,function(a,b){return Math.floor(J(b,a))},1);S("id",4,!1,!1,function(a,b){var c=a.a,d=9==c.nodeType?c:c.ownerDocument,c=K(b,a).split(/\s+/),e=[];n(c,function(a){a=d.getElementById(a);var b;if(!(b=!a)){a:if(h(e))b=h(a)&&1==a.length?e.indexOf(a,0):-1;else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=0<=b}b||e.push(a)});e.sort(ka);var f=new B;n(e,function(a){C(f,a)});return f},1);S("lang",2,!1,!1,function(){return!1},1);
S("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);S("local-name",3,!1,!0,function(a,b){var c=b?E(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);S("name",3,!1,!0,function(a,b){var c=b?E(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);S("namespace-uri",3,!0,!1,function(){return""},0,1,!0);S("normalize-space",3,!1,!0,function(a,b){return(b?K(b,a):x(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
S("not",2,!1,!1,function(a,b){return!L(b,a)},1);S("number",1,!1,!0,function(a,b){return b?J(b,a):+x(a.a)},0,1);S("position",1,!0,!1,function(a){return a.b},0);S("round",1,!1,!1,function(a,b){return Math.round(J(b,a))},1);S("starts-with",2,!1,!1,function(a,b,c){b=K(b,a);a=K(c,a);return 0==b.lastIndexOf(a,0)},2);S("string",3,!1,!0,function(a,b){return b?K(b,a):x(a.a)},0,1);S("string-length",1,!1,!0,function(a,b){return(b?K(b,a):x(a.a)).length},0,1);
S("substring",3,!1,!1,function(a,b,c,d){c=J(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?J(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=K(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);S("substring-after",3,!1,!1,function(a,b,c){b=K(b,a);a=K(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
S("substring-before",3,!1,!1,function(a,b,c){b=K(b,a);a=K(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);S("sum",1,!1,!1,function(a,b){for(var c=G(b.a(a)),d=0,e=H(c);e;e=H(c))d+=+x(e);return d},1,1,!0);S("translate",3,!1,!1,function(a,b,c,d){b=K(b,a);c=K(c,a);var e=K(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);S("true",2,!1,!1,function(){return!0},0);function D(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Fa(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}D.prototype.a=function(a){return null===this.b||this.b==a.nodeType};D.prototype.f=function(){return this.h};
D.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=I(this.c));return a};function T(a){m.call(this,3);this.c=a.substring(1,a.length-1)}l(T);T.prototype.a=function(){return this.c};T.prototype.toString=function(){return"Literal: "+this.c};function U(a,b){this.j=a.toLowerCase();var c;c="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.b=b?b.toLowerCase():c}U.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.j&&this.j!=a.localName.toLowerCase()?!1:"*"==this.b?!0:this.b==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};U.prototype.f=function(){return this.j};U.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.b?"":this.b+":")+this.j};function Ga(a){m.call(this,1);this.c=a}l(Ga);Ga.prototype.a=function(){return this.c};Ga.prototype.toString=function(){return"Number: "+this.c};function Ha(a,b){m.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=Ia||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}l(Ha);function V(){m.call(this,4)}l(V);V.prototype.a=function(a){var b=new B;a=a.a;9==a.nodeType?C(b,a):C(b,a.ownerDocument);return b};V.prototype.toString=function(){return"Root Helper Expression"};function Ja(){m.call(this,4)}l(Ja);Ja.prototype.a=function(a){var b=new B;C(b,a.a);return b};Ja.prototype.toString=function(){return"Context Helper Expression"};
function Ka(a){return"/"==a||"//"==a}Ha.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof B))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=G(b,e.c.a),g;if(e.g||e.c!=La)if(e.g||e.c!=Ma)for(g=H(f),b=e.a(new r(g));null!=(g=H(f));)g=e.a(new r(g)),b=va(b,g);else g=H(f),b=e.a(new r(g));else{for(g=H(f);(b=H(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new r(g))}}return b};
Ha.prototype.toString=function(){var a;a="Path Expression:"+I(this.h);if(this.c.length){var b=p(this.c,function(a,b){return a+I(b)},"Steps:");a+=I(b)}return a};function Na(a,b){this.a=a;this.b=!!b}
function Ca(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=G(b),f=b.l,g,k=0;g=H(e);k++){var v=a.b?f-k:k+1;g=d.a(new r(g,v,f));if("number"==typeof g)v=v==g;else if("string"==typeof g||"boolean"==typeof g)v=!!g;else if(g instanceof B)v=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!v){v=e;g=v.f;var A=v.a;if(!A)throw Error("Next must be called at least once before remove.");var O=A.b,A=A.a;O?O.a=A:g.a=A;A?A.b=O:g.b=O;g.l--;v.a=null}}return b}
Na.prototype.toString=function(){return p(this.a,function(a,b){return a+I(b)},"Predicates:")};function W(a,b,c,d){m.call(this,4);this.c=a;this.o=b;this.h=c||new Na([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(this.f={name:b.name,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}l(W);
W.prototype.a=function(a){var b=a.a,c=null,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?K(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=Oa)if(a=G((new W(Pa,new D("node"))).a(a)),b=H(a))for(c=this.m(b,d,e,f);null!=(b=H(a));)c=va(c,this.m(b,d,e,f));else c=new B;else c=z(this.o,b,d,e),c=Ca(this.h,c,f);else c=this.m(a.a,d,e,f);return c};W.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=Ca(this.h,a,d)};
W.prototype.toString=function(){var a;a="Step:"+I("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=I("Axis: "+this.c));a+=I(this.o);if(this.h.a.length){var b=p(this.h.a,function(a,b){return a+I(b)},"Predicates:");a+=I(b)}return a};function Qa(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}Qa.prototype.toString=function(){return this.j};var Ra={};function X(a,b,c,d){if(Ra.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new Qa(a,b,c,!!d);return Ra[a]=b}
X("ancestor",function(a,b){for(var c=new B,d=b;d=d.parentNode;)a.a(d)&&c.unshift(d);return c},!0);X("ancestor-or-self",function(a,b){var c=new B,d=b;do a.a(d)&&c.unshift(d);while(d=d.parentNode);return c},!0);var Ia=X("attribute",function(a,b){var c=new B,d=a.f(),e=b.attributes;if(e)if(a instanceof D&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)C(c,f);else(f=e.getNamedItem(d))&&C(c,f);return c},!1),Oa=X("child",function(a,b,c,d,e){return ta.call(null,a,b,h(c)?c:null,h(d)?d:null,e||new B)},!1,!0);
X("descendant",z,!1,!0);var Pa=X("descendant-or-self",function(a,b,c,d){var e=new B;y(b,c,d)&&a.a(b)&&C(e,b);return z(a,b,c,d,e)},!1,!0),La=X("following",function(a,b,c,d){var e=new B;do for(var f=b;f=f.nextSibling;)y(f,c,d)&&a.a(f)&&C(e,f),e=z(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);X("following-sibling",function(a,b){for(var c=new B,d=b;d=d.nextSibling;)a.a(d)&&C(c,d);return c},!1);X("namespace",function(){return new B},!1);
var Sa=X("parent",function(a,b){var c=new B;if(9==b.nodeType)return c;if(2==b.nodeType)return C(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&C(c,d);return c},!1),Ma=X("preceding",function(a,b,c,d){var e=new B,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,k=f.length;g<k;g++){var v=[];for(b=f[g];b=b.previousSibling;)v.unshift(b);for(var A=0,O=v.length;A<O;A++)b=v[A],y(b,c,d)&&a.a(b)&&C(e,b),e=z(a,b,c,d,e)}return e},!0,!0);
X("preceding-sibling",function(a,b){for(var c=new B,d=b;d=d.previousSibling;)a.a(d)&&c.unshift(d);return c},!0);var Ta=X("self",function(a,b){var c=new B;a.a(b)&&C(c,b);return c},!1);function Ua(a){m.call(this,1);this.c=a;this.g=a.g;this.b=a.b}l(Ua);Ua.prototype.a=function(a){return-J(this.c,a)};Ua.prototype.toString=function(){return"Unary Expression: -"+I(this.c)};function Va(a){m.call(this,4);this.c=a;xa(this,q(this.c,function(a){return a.g}));ya(this,q(this.c,function(a){return a.b}))}l(Va);Va.prototype.a=function(a){var b=new B;n(this.c,function(c){c=c.a(a);if(!(c instanceof B))throw Error("Path expression must evaluate to NodeSet.");b=va(b,c)});return b};Va.prototype.toString=function(){return p(this.c,function(a,b){return a+I(b)},"Union Expression:")};function Wa(a,b){this.a=a;this.b=b}function Xa(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=Ya(a);var d=u(a.a);if(!d)break;var e=(d=Ba[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new M(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new M(c.pop(),c.pop(),b);return b}function Y(a,b){if(w(a.a))throw Error(b);}function Za(a,b){var c=u(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function $a(a){a=u(a.a);if(")"!=a)throw Error("Bad token: "+a);}function ab(a){a=u(a.a);if(2>a.length)throw Error("Unclosed literal string");return new T(a)}
function bb(a){var b,c=[],d;if(Ka(t(a.a))){b=u(a.a);d=t(a.a);if("/"==b&&(w(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new V;d=new V;Y(a,"Missing next location step.");b=cb(a,b);c.push(b)}else{a:{b=t(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":u(a.a);b=Xa(a);Y(a,'unclosed "("');Za(a,")");break;case '"':case "'":b=ab(a);break;default:if(isNaN(+b))if(!Fa(b)&&/(?![0-9])[\w]/.test(d)&&"("==t(a.a,1)){b=u(a.a);b=
Ea[b]||null;u(a.a);for(d=[];")"!=t(a.a);){Y(a,"Missing function argument list.");d.push(Xa(a));if(","!=t(a.a))break;u(a.a)}Y(a,"Unclosed function argument list.");$a(a);b=new R(b,d)}else{b=null;break a}else b=new Ga(+u(a.a))}"["==t(a.a)&&(d=new Na(db(a)),b=new Q(b,d))}if(b)if(Ka(t(a.a)))d=b;else return b;else b=cb(a,"/"),d=new Ja,c.push(b)}for(;Ka(t(a.a));)b=u(a.a),Y(a,"Missing next location step."),b=cb(a,b),c.push(b);return new Ha(d,c)}
function cb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==t(a.a))return d=new W(Ta,new D("node")),u(a.a),d;if(".."==t(a.a))return d=new W(Sa,new D("node")),u(a.a),d;var f;if("@"==t(a.a))f=Ia,u(a.a),Y(a,"Missing attribute name");else if("::"==t(a.a,1)){if(!/(?![0-9])[\w]/.test(t(a.a).charAt(0)))throw Error("Bad token: "+u(a.a));c=u(a.a);f=Ra[c]||null;if(!f)throw Error("No axis with name: "+c);u(a.a);Y(a,"Missing node name")}else f=Oa;c=t(a.a);if(/(?![0-9])[\w\*]/.test(c.charAt(0)))if("("==
t(a.a,1)){if(!Fa(c))throw Error("Invalid node type: "+c);c=u(a.a);if(!Fa(c))throw Error("Invalid type name: "+c);Za(a,"(");Y(a,"Bad nodetype");e=t(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=ab(a);Y(a,"Bad nodetype");$a(a);c=new D(c,g)}else if(c=u(a.a),e=c.indexOf(":"),-1==e)c=new U(c);else{var g=c.substring(0,e),k;if("*"==g)k="*";else if(k=a.b(g),!k)throw Error("Namespace prefix not declared: "+g);c=c.substr(e+1);c=new U(c,k)}else throw Error("Bad token: "+u(a.a));e=new Na(db(a),f.a);return d||
new W(f,c,e,"//"==b)}function db(a){for(var b=[];"["==t(a.a);){u(a.a);Y(a,"Missing predicate expression.");var c=Xa(a);b.push(c);Y(a,"Unclosed predicate expression.");Za(a,"]")}return b}function Ya(a){if("-"==t(a.a))return u(a.a),new Ua(Ya(a));var b=bb(a);if("|"!=t(a.a))a=b;else{for(b=[b];"|"==u(a.a);)Y(a,"Missing next union location path."),b.push(bb(a));a.a.a--;a=new Va(b)}return a};function eb(a){switch(a.nodeType){case 1:return ga(fb,a);case 9:return eb(a.documentElement);case 11:case 10:case 6:case 12:return gb;default:return a.parentNode?eb(a.parentNode):gb}}function gb(){return null}function fb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?fb(a.parentNode,b):null};function hb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=oa(a);if(w(c))throw Error("Invalid XPath expression.");b?"function"==ca(b)||(b=fa(b.lookupNamespaceURI,b)):b=function(){return null};var d=Xa(new Wa(c,b));if(!w(c))throw Error("Bad token: "+u(c));this.evaluate=function(a,b){var c=d.a(new r(a));return new Z(c,b)}}
function Z(a,b){if(0==b)if(a instanceof B)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof B))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof B?F(a):""+a;break;case 1:this.numberValue=a instanceof B?+F(a):+a;break;case 3:this.booleanValue=a instanceof B?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
G(a);c=[];for(var e=H(d);e;e=H(d))c.push(e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:this.singleNodeValue=E(a);break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||0>a?null:c[a]}}Z.ANY_TYPE=0;
Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function ib(a){this.lookupNamespaceURI=eb(a)}
ba("wgxpath.install",function(a,b){var c=a||aa,d=c.document;if(!d.evaluate||b)c.XPathResult=Z,d.evaluate=function(a,b,c,d){return(new hb(a,c)).evaluate(b,d)},d.createExpression=function(a,b){return new hb(a,b)},d.createNSResolver=function(a){return new ib(a)}});ba("_",function(a){a=9==a.nodeType?a:a.ownerDocument||a.document;var b=a.documentElement;return a.width/Math.max(b.clientWidth,b.offsetWidth,b.scrollWidth)});; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
