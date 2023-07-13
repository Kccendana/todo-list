(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(81),i=n.n(r),a=n(645),s=n.n(a)()(i());s.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #7f00ff;  /* fallback for old browsers */\n  background: linear-gradient(to right, #e100ff, #7f00ff);\n}\n\n.head {\n  border-bottom: 1px solid gray;\n  padding: 1em;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ni.fa-solid.fa-arrows-rotate {\n  font-size: 1.25em;\n  cursor: pointer;\n}\n\n.to-do-app {\n  width: 100%;\n  max-width: 540px;\n  padding: 2em;\n  background-color: aliceblue;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 10px 10px 15px -1px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.to-do {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.25em;\n  gap: 3em;\n}\n\nbutton {\n  font-size: 1em;\n  background: none;\n  border: none;\n  padding-right: 0.5em;\n  cursor: pointer;\n}\n\ninput.task-title,\ninput#title {\n  width: 100%;\n  padding: 0 40px 0 1rem;\n  line-height: 50px;\n  height: 50px;\n  border: none;\n}\n\ninput#title {\n  font-style: italic;\n}\n\ninput#title:focus,\ninput.task-title:focus {\n  outline: none;\n}\n\ninput.task-title:focus {\n  background-color: blanchedalmond;\n}\n\nform#add-new {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid gray;\n}\n\n#list-container li {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid rgb(158, 157, 157);\n  padding-left: 1em;\n}\n\n.checkbox-container {\n  width: 100%;\n  display: flex;\n  gap: 0.5em;\n}\n\nsection#list {\n  width: 100%;\n  max-width: 540px;\n  border: 1px solid gray;\n  box-shadow: 10px 10px 15px -1px rgba(0, 0, 0, 0.75);\n  margin-top: 5em;\n  border-radius: 10px;\n  background-color: white;\n}\n\nbutton.clear-completed {\n  width: 100%;\n  font-size: 1em;\n  padding: 1em;\n  background-color: #eae3e3;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\ninput:checked + * {\n  text-decoration: line-through;\n}\n",""]);const o=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},s=[],o=0;o<t.length;o++){var c=t[o],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,r);r.byIndex=o,e.splice(o,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var o=n(a[s]);e[o].references--}for(var c=r(t,i),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),a=n(569),s=n.n(a),o=n(565),c=n.n(o),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class m{constructor(){this.taskListArray=JSON.parse(localStorage.getItem("taskItems"))||[],this.taskListDiv=document.querySelector("#list-container"),this.form=document.querySelector(".form"),this.titleInput=document.querySelector("#title"),this.clearButton=document.getElementById("clearButton"),this.title=this.titleInput.value,this.displayTasks(),this.addEventListeners()}addTask(t){const e={index:this.taskListArray.length+1,title:t,completed:!1};this.taskListArray.push(e),localStorage.setItem("taskItems",JSON.stringify(this.taskListArray)),this.displayTasks()}removeTasks(t){this.taskListArray.splice(t,1),this.updateIndexes(),localStorage.setItem("taskItems",JSON.stringify(this.taskListArray)),this.displayTasks()}toggleTaskCompletion(t){this.taskListArray[t].completed=!this.taskListArray[t].completed,localStorage.setItem("taskItems",JSON.stringify(this.taskListArray)),this.displayTasks()}updateIndexes(){this.taskListArray.forEach(((t,e)=>{t.index=e+1}))}saveTasktoLocal(){localStorage.setItem("taskItems",JSON.stringify(taskListArray))}clearCompletedTasks(){this.taskListArray=this.taskListArray.filter((t=>!t.completed)),this.updateIndexes(),localStorage.setItem("taskItems",JSON.stringify(this.taskListArray)),this.displayTasks()}editTaskDescription(t,e){this.taskListArray[t].title=e,localStorage.setItem("taskItems",JSON.stringify(this.taskListArray))}displayTasks(){this.taskListDiv.innerHTML="",this.taskListArray.forEach(((t,e)=>{this.taskListDiv.innerHTML+=`\n        <li draggable="true" data-index="${e}" class= "draggable-list">\n          <div class="checkbox-container">\n            <input class="checkbox" type="checkbox" name="${t.title}" ${t.completed?"checked":""}>\n            <input class="task-title" type="text" value="${t.title}">\n          </div>\n          <button class="button" id="remove" data-index="${e}"><i class="fa-solid fa-ellipsis-vertical"></i></button>\n        </li>`})),document.querySelectorAll(".checkbox").forEach(((t,e)=>{t.addEventListener("change",(()=>{this.toggleTaskCompletion(e)}))})),document.querySelectorAll(".task-title").forEach(((t,e)=>{t.addEventListener("input",(t=>{const n=t.target.value;this.editTaskDescription(e,n)}))})),this.removeBtns=document.querySelectorAll(".button"),this.removeBtns.forEach((t=>{t.addEventListener("click",(t=>{const{index:e}=t.target.dataset;this.removeTasks(e)}))})),this.clearButton.addEventListener("click",(()=>{this.clearCompletedTasks()}))}addEventListeners(){this.form.addEventListener("submit",(t=>{t.preventDefault(),this.addTask(this.titleInput.value),this.titleInput.value=""}))}static initialize(){return new m}}m.initialize()})()})();