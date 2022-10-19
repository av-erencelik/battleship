(()=>{"use strict";var t={563:(t,e,s)=>{s.d(e,{Z:()=>a});var n=s(81),o=s.n(n),i=s(645),r=s.n(i)()(o());r.push([t.id,"",""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",n=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),n&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),n&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);n&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),s&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=s):l[2]=s),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function s(t){for(var s=-1,n=0;n<e.length;n++)if(e[n].identifier===t){s=n;break}return s}function n(t,n){for(var i={},r=[],a=0;a<t.length;a++){var c=t[a],d=n.base?c[0]+n.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=s(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=o(h,n);n.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function o(t,e){var s=e.domAPI(e);s.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<i.length;r++){var a=s(i[r]);e[a].references--}for(var c=n(t,o),d=0;d<i.length;d++){var l=s(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,s){var n=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var n="";s.supports&&(n+="@supports (".concat(s.supports,") {")),s.media&&(n+="@media ".concat(s.media," {"));var o=void 0!==s.layer;o&&(n+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),n+=s.css,o&&(n+="}"),s.media&&(n+="}"),s.supports&&(n+="}");var i=s.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.nc=void 0,(()=>{let t,e,n,o,i=document.querySelector("#boom"),r=document.querySelector("#miss");function a(s){!function(s){if(t.isTurn){if(o.receiveAttack(s))return c(o.missedCoordinates,o.hitCoordinates,!0),void f();c(o.missedCoordinates,o.hitCoordinates,!0),f(),e.isTurn=!0,t.isTurn=!1}if(e.isTurn){let s=m();for(c(n.missedCoordinates,n.hitCoordinates,!1),f();s;)s=m(),c(n.missedCoordinates,n.hitCoordinates,!1),f();t.isTurn=!0,e.isTurn=!1}}(s.getAttribute("data-computer-index"))}function c(t,e,s){if(s){for(let e of t){let t=document.querySelector(`[data-computer-index="${e}"]`);t.classList.contains("miss")||(t.classList.add("miss"),t.style.opacity="0.01",setTimeout((()=>{t.style.opacity="1"}),500),r.play()),t.classList.remove("empty")}for(let t of e){let e=document.querySelector(`[data-computer-index="${t}"]`);e.classList.contains("hit")||(e.classList.add("hit"),e.style.opacity="0.01",setTimeout((()=>{e.style.opacity="1"}),500),i.play()),e.classList.remove("empty")}}else setTimeout((()=>{for(let e of t){let t=document.querySelector(`[data-player-index="${e}"]`);t.classList.contains("miss")||(t.classList.add("miss"),t.style.opacity="0.01",setTimeout((()=>{t.style.opacity="1"}),500),r.play())}for(let t of e){let e=document.querySelector(`[data-player-index="${t}"]`);e.classList.contains("hit")||(e.style.opacity="0.01",e.classList.add("hit"),setTimeout((()=>{e.style.opacity="1"}),500),i.play())}}),1500)}function d(t){let e={};return e.length=t,e.hits=0,e.sunk=!1,e.hit=function(){e.hits<e.length&&e.hits++},e.isSunk=function(){e.hits===e.length&&(e.sunk=!0)},e}function l(){let t={missedCoordinates:[],hitCoordinates:[],shipCoordinates:[],board:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},e=d(4),s=d(3),n=d(3),o=d(2),i=d(2),r=d(2),a=d(1),c=d(1),l=d(1),p=d(1);return t.placeShips4=function(){let s=Math.floor(100*Math.random());const n=String(s).slice(-1);Number(n)>=7?(t.board[s]=e,t.board[s-1]=e,t.board[s-2]=e,t.board[s-3]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s-1),t.shipCoordinates.push(s-2),t.shipCoordinates.push(s-3)):(t.board[s]=e,t.board[s+1]=e,t.board[s+2]=e,t.board[s+3]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s+1),t.shipCoordinates.push(s+2),t.shipCoordinates.push(s+3))},t.placeShips3=function(e){let s=Math.floor(100*Math.random());const n=String(s).slice(-1);Number(n)>=8?t.board[s]||t.board[s-1]||t.board[s-2]?this.placeShips3(e):(t.board[s]=e,t.board[s-1]=e,t.board[s-2]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s-1),t.shipCoordinates.push(s-2)):t.board[s]||t.board[s+1]||t.board[s+2]?this.placeShips3(e):(t.board[s]=e,t.board[s+1]=e,t.board[s+2]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s+1),t.shipCoordinates.push(s+2))},t.placeShips2=function(e){let s=Math.floor(100*Math.random());const n=String(s).slice(-1);9==Number(n)?t.board[s]||t.board[s-1]?this.placeShips2(e):(t.board[s]=e,t.board[s-1]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s-1)):t.board[s]||t.board[s+1]?this.placeShips2(e):(t.board[s]=e,t.board[s+1]=e,t.shipCoordinates.push(s),t.shipCoordinates.push(s+1))},t.placeShips1=function(e){let s=Math.floor(100*Math.random());const n=String(s).slice(-1);Number(n);t.board[s]?this.placeShips1(e):(t.board[s]=e,t.shipCoordinates.push(s))},t.placeShips=function(){this.placeShips4(),this.placeShips3(s),this.placeShips3(n),this.placeShips2(o),this.placeShips2(i),this.placeShips2(r),this.placeShips1(a),this.placeShips1(c),this.placeShips1(l),this.placeShips1(p)},t.receiveAttack=function(e){if(!t.missedCoordinates.some((t=>t===e))&&!t.hitCoordinates.some((t=>t===e)))return 0===t.board[e]?(t.missedCoordinates.push(e),!1):(t.board[e].hit(),t.board[e].isSunk(),t.hitCoordinates.push(e),!0)},t.checkAllShipsSunk=function(){return!0===a.sunk&&!0===c.sunk&&!0===l.sunk&&!0===p.sunk&&!0===o.sunk&&!0===i.sunk&&!0===r.sunk&&!0===s.sunk&&!0===n.sunk&&!0===e.sunk},t}function p(t="computer",e=!1){let s={};return s.name=t,s.isTurn=e,s}function u(){return Math.floor(100*Math.random())}function h(){t=p("player",!0),e=p(),n=l(),o=l(),n.placeShips(),o.placeShips(),function(){const t=document.getElementById("playersBoard"),e=document.getElementById("computersBoard"),s=document.getElementById("title1"),n=document.getElementById("title2");t.style.display="grid",e.style.display="grid",s.style.display="block",n.style.display="block",setTimeout((function(){t.style.translate="0px",e.style.translate="0px",s.style.translate="0px",n.style.translate="0px"}),750);for(let e=0;e<100;e++){let s=document.createElement("div");s.classList.add("tile"),s.setAttribute("data-player-index",e),t.appendChild(s)}for(let t=0;t<100;t++){let s=document.createElement("div");s.classList.add("tile"),s.setAttribute("data-computer-index",t),s.classList.add("empty"),s.addEventListener("click",(()=>{a(s)}),{once:!0}),e.appendChild(s)}}(),function(t){for(let e of t)document.querySelector(`[data-player-index="${e}"]`).classList.add("ship")}(n.shipCoordinates)}function m(){let t=u();for(;n.missedCoordinates.some((e=>e===t))||n.hitCoordinates.some((e=>e===t));)t=u();return n.receiveAttack(t)}function f(){o.checkAllShipsSunk()&&function(t){const e=document.getElementById("playersBoard"),s=document.getElementById("computersBoard"),n=document.getElementById("title1"),o=document.getElementById("title2");setTimeout((()=>{e.style.translate="2000px",s.style.translate="2000px",n.style.translate="2000px",o.style.translate="2000px"}),250),setTimeout((()=>{e.style.display="none",s.style.display="none",n.style.display="none",o.style.display="none"}),750);const i=document.createElement("h2");i.textContent=`Winner is ${t.name}`,document.getElementById("boards").appendChild(i),setTimeout((function(){i.style.translate="0px"}),250)}(t)}var y=s(379),b=s.n(y),v=s(795),C=s.n(v),S=s(569),g=s.n(S),x=s(565),k=s.n(x),T=s(216),E=s.n(T),L=s(589),M=s.n(L),I=s(563),B={};B.styleTagTransform=M(),B.setAttributes=k(),B.insert=g().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=E();b()(I.Z,B);I.Z&&I.Z.locals&&I.Z.locals;const A=document.getElementById("start");A.addEventListener("click",(()=>{A.style.translate="1400px",setTimeout((function(){A.style.display="none"}),800),h()}))})()})();