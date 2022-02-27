(()=>{"use strict";var e={466:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,'*{margin:0;padding:0;box-sizing:0;overflow:hidden}h1{color:#ffeb00;text-transform:uppercase;text-shadow:-1px 0 #000,-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000,1px 0px 0px #000,2px 1px 0px #000,3px 2px 0px #000,4px 3px 0px #000,5px 4px 0px #000;letter-spacing:5px;font-size:90px;background-color:#dd2a30;height:auto;display:flex;justify-content:center;align-items:center;margin-top:3%}h2{text-transform:uppercase;background-color:black;color:white;font-size:50px;font-style:italic;font-family:Impact;padding:5px;width:630px;position:relative;margin:0 auto;margin-top:50px;margin-bottom:20px}body{height:100hv;background-color:#dd2a30}.card{display:flex;justify-content:space-around}.wrapper{display:flex;justify-content:space-between;align-items:center;flex-direction:column;margin-top:100px;background-color:#dd2a30}.board-container{display:flex;justify-content:center;align-items:center;flex-direction:row}.container{background-color:#dd2a30;display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.btn-restart{background-color:black;color:white;padding:10px;width:20rem;height:6rem;font-size:28px;font-weight:bold;margin-top:20px}.aftonbladet{color:#ffeb00;background-color:#dd2a30;text-transform:uppercase;text-shadow:-1px 0 #000,-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000,2px 0px 0px #000,4px 1px 0px #000,5px 2px 0px #000,8px 3px 0px #000,8px 6px 0px #000;letter-spacing:3px;border-bottom:40px solid #dd2a30;font-size:70px}.grid{background-color:#dd2a30}.grid-element{border:"1px solid black";margin:"1px";list-style-type:"none";background-color:white}.modal{display:flex;width:100%;height:100%;position:fixed;top:0;left:0;background-color:#dd2a30;align-items:center;justify-content:center;flex-direction:column}.modal-container{height:auto;width:50rem;display:flex;align-items:center;flex-direction:column;background-color:white;border-radius:20px}.button-container{display:flex;justify-content:space-between;align-items:center;width:100%;height:6rem;background-color:green}.btn-play{background-color:black;color:white;padding:10px;width:100%;height:6rem;font-size:28px;font-weight:bold}.btn:hover{color:#ffeb00}.btn-difficulty{background-color:white;color:black;padding:10px;width:100%;height:100%;font-size:28px;font-weight:bold;border-top-width:0;border-bottom-width:0}.btn-difficulty:hover{background-color:black;color:white}.btn-difficulty:focus{background-color:black;color:white}.h2{text-transform:uppercase;background-color:black;text-decoration:underline;color:white;font-size:70px;font-style:italic;font-family:Impact;padding:5px;width:100%;height:6rem;padding-left:40%}.header-win{display:none}.header-loss{display:none}\n',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=o.base?d[0]+o.base:d[0],p=i[l]||0,s="".concat(l," ").concat(p);i[l]=p+1;var u=n(s),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:s,updater:m,references:1})}a.push(s)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),l=n(216),p=n.n(l),s=n(589),u=n.n(s),f=n(466),m={};let h,x,g,y,b,v,w,E,k,C,T,I,M;function S(e){h=e,x=e*e,y=Math.floor(993.28/e),g=Math.floor(1013.76/e),b="https://picsum.photos/1024/1024"}function j(e,t){e.id=t}function z(e,t){e.className=t}function B(e,t){e.dataset.index=t}function N(e){e.style.height="1024px",e.style.width="1024px"}function A(e){const t=document.createElement("p");return t.draggable="true",j(t,"tile"),z(t,"tile"),B(t,e),function(e,t){const{x:n,y:o}=function(e){return{x:y*(e%h),y:g*Math.floor(e/h)}}(t);e.style.height=`${g}px`,e.style.width=`${y}px`,e.style.backgroundImage=`url(${b})`,e.style.backgroundPosition=`-${n}px -${o}px`}(t,e),t}function L(e){const t=document.createElement("li");return j(t,"grid-element"),z(t,"grid-element"),B(t,e),function(e){e.style.height=`${g}px`,e.style.width=`${y}px`,e.style.borderLeft="3px solid #dd2a30",e.style.listStyleType="none"}(t),t}function $(e=4){S(e),v=function(){const e=document.createElement("div");return j(e,"board-container"),z(e,"board-container"),e}(),w=function(){const e=document.createElement("ul");return j(e,"rack"),z(e,"container"),N(e),e}(),E=function(){const e=document.createElement("ul");return j(e,"grid"),z(e,"container"),N(e),e}(),k=function(){const e=document.createElement("button");return j(e,"restart-button"),z(e,"btn-restart"),function(e){e.innerText="RESTART",e.type="submit"}(e),e.onclick=function(){document.getElementById("wrapper").removeChild(document.getElementById("board-container")),document.getElementById("wrapper").removeChild(document.getElementById("restart-button")),document.getElementById("modal").style.display="flex"},e}(),M=function(e){return e*e/2}(e),function(e){for(let t=0;t<x;t++){const n=L(t);e.appendChild(n)}}(E),function(e){for(let t=0;t<x;t++){const n=L(t),o=A(t);n.append(o),e.appendChild(n)}}(w),v.appendChild(E),v.appendChild(w);let t=document.getElementById("wrapper");t.appendChild(v),t.appendChild(k),function(e){for(let t=e.children.length;t>=0;t--)e.appendChild(e.children[Math.random()*t|0])}(w),T=document.querySelectorAll("li"),I=document.querySelectorAll("p"),function(e){for(let t=0;t<e.length;t++)e[t].addEventListener("dragstart",(function(e){C=e.target}),!1)}(I),function(e){for(let t=0;t<e.length;t++)e[t].addEventListener("dragover",(function(e){e.preventDefault()}),!1),e[t].addEventListener("drop",(function(e){e.preventDefault(),"grid-element"!==e.target.id||e.target.hasChildNodes()||(e.target.style.background="",C.parentNode.removeChild(C),e.target.appendChild(C));let t=0;document.getElementById("grid").childNodes.forEach((e=>{if(e.hasChildNodes()&&t++,t===x)if(P()){function e(){alert("Victory")}setTimeout(e,3e3)}else{function e(){alert("Try again!")}setTimeout(e,3e3)}}))}),!1)}(T)}function P(){const e=document.getElementById("grid").childNodes;let t=!0;return e.forEach((e=>{e.dataset?.index!==e.firstChild?.dataset?.index&&(t=!1)})),t}m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("span"),r=document.createElement("span");j(e,"modal"),z(t,"modal-container"),z(n,"button-container"),z(o,"h2"),z(r,"aftonbladet"),z(e,"modal"),function(e){for(let t=0;t<4;t++){const n=document.createElement("button");z(n,"btn-difficulty"),j(n,"btn-difficulty"),n.dataset.selected=!1,n.innerHTML=t+1,n.dataset.index=t+2,n.onclick=function(){$(n.dataset.index),document.getElementById("modal").style.display="none"},e.appendChild(n)}}(n),o.innerText="Select difficulty",r.innerText="Aftonbladet - The puzzle",t.appendChild(o),t.appendChild(n),e.appendChild(r),e.appendChild(t),document.getElementById("wrapper").appendChild(e)}()})()})();