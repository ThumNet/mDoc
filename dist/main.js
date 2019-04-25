!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,a=[{key:"read",value:function(e){var n=window.mdoc.settings.startMdFile;if(!e||-1===e.indexOf("#"))return{mdPath:n,page:"#!"};if("#!"===(e=e.substring(e.indexOf("#"))))return{mdPath:n,page:"#!"};var t=e.lastIndexOf("#");return 0===t?{mdPath:e.substring(2),page:"#!".concat(e.substring(2))}:2===t?{mdPath:n,page:"#!".concat(e.substring(2,t)),scrollTo:e.substring(t+1)}:{mdPath:e.substring(2,t),page:"#!".concat(e.substring(2,t)),scrollTo:e.substring(t+1)}}}],(t=null)&&r(n.prototype,t),a&&r(n,a),e}();function o(){var e=new marked.Renderer;e.link=function(e,n,t){return/(\.md$)|(\.md#)/.test(e)&&(e="#!"+i(e)),marked.Renderer.prototype.link.call(this,e,n,t)},e.image=function(e,n,t){return marked.Renderer.prototype.image.call(this,i(e),n,t)},e.paragraph=function(e){var n=function(e){for(var n=[{trigger:"hint",className:"alert-success"},{trigger:"tip",className:"alert-success"},{trigger:"attention",className:"alert-warning"},{trigger:"warning",className:"alert-warning"},{trigger:"note",className:"alert-info"},{trigger:"danger",className:"alert-danger"}],t=0,r=n.length;t<r;t++){var a=new RegExp("^".concat(n[t].trigger,"(:|!)+.*"),"i");if(e.match(a))return n[t]}return null}(e);return n?'<p class="alert '.concat(n.className,'">').concat(e,"</p>\n"):marked.Renderer.prototype.paragraph.call(this,e)},e.heading=function(e,n,t,r){var o=this.options.headerPrefix+r.slug(t),i=a.read(location.hash).mdPath;return"<h".concat(n,' id="').concat(o,'">\n                    <span class="bd-content-title">\n                        ').concat(e,'\n                        <a class="anchorjs-link" href="#!').concat(i,"#").concat(o,'" data-anchorjs-icon="#"></a>\n                    </span>\n                </h').concat(n,">\n")},e.table=function(e,n){return n&&(n="<tbody>".concat(n,"</tbody>")),'<div class="table-responsive">\n                    <table class="table table-striped table-hover">\n                        <thead>'.concat(e,"</thead>\n                        ").concat(n,"\n                    </table>\n                </div>")},e.code=function(e,n,t){return"mermaid"===n?window.MSInputMethodContext&&document.documentMode?'<div class="alert alert-danger" role="alert">Mermaid is not supported when using Internet Explorer!</div><pre class="language-mermaid"><code>'.concat(e,"</code></pre>"):'<div class="mermaid">'.concat(e,"</div>"):"plantuml"===n?'<img src="'.concat(function(e){function n(e,n,r){var a=e>>2,o=(3&e)<<4|n>>4,i=(15&n)<<2|r>>6,c=63&r,s="";return s+=t(63&a),s+=t(63&o),s+=t(63&i),s+=t(63&c)}function t(e){return e<10?String.fromCharCode(48+e):(e-=10)<26?String.fromCharCode(65+e):(e-=26)<26?String.fromCharCode(97+e):0==(e-=26)?"-":1==e?"_":"?"}return"http://www.plantuml.com/plantuml/img/"+(r=e,r=unescape(encodeURIComponent(r)),function(e){for(var t="",r=0;r<e.length;r+=3)r+2==e.length?t+=n(e.charCodeAt(r),e.charCodeAt(r+1),0):r+1==e.length?t+=n(e.charCodeAt(r),0,0):t+=n(e.charCodeAt(r),e.charCodeAt(r+1),e.charCodeAt(r+2));return t}(RawDeflate.deflate(r,9)));var r}(e),'" />'):marked.Renderer.prototype.code.call(this,e,n,t)},marked.setOptions({renderer:e})}function i(e){var n,t,r=e&&-1!==e.indexOf("://"),o=!r&&0===e.indexOf("/"),i=(n=a.read(location.hash).mdPath,-1===(t=n.lastIndexOf("/"))?null:n.substring(0,t));return r||o||!i?e:i+"/"+e}function c(e){if(e.status>=200&&e.status<300)return e;var n=new Error(e.statusText||e.status);throw n.response=e,n}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=["Cerulean","Cosmo","Cyborg","Darkly","Flatly","Journal","Litera","Lumen","Lux","Materia","Minty","Pulse","Sandstone","Simplex","Sketchy","Slate","Solar","Spacelab","Superhero","United","Yeti"],u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,r=[{key:"renderApp",value:function(e,n,t){return"".concat(this.renderNav(e,n,t),'\n            <div class="container-fluid">\n                <div class="row flex-xl-nowrap admin-only">\n                    <div class="col-12">\n                        ').concat(this.renderThemes(),'\n                    </div>\n                </div>\n                <div class="row flex-xl-nowrap">\n                    <div class="col-12 col-md-3 col-xl-2 bd-sidebar" id="sidebar">                    \n                    </div>\n                    <div class="d-none d-xl-block col-xl-2 bd-toc" id="toc">\n                    </div>                \n                    <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main" id="main">\n                    </main>\n                </div>\n            </div>')}},{key:"renderNav",value:function(e,n,t){return'\n            <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-primary">\n                <a class="navbar-brand mr-0 mr-md-2" href="#!" aria-label="MDoc">'.concat(e||document.title,'</a>\n                <div class="navbar-nav-scroll mr-auto">\n                    <ul class="navbar-nav flex-row">\n                        ').concat(this.renderMenu(n),'\n                    </ul>\n                </div>\n                <span class="navbar-text">\n                    MDoc v').concat(t,'&nbsp;&nbsp;<a href="https://github.com/ThumNet/MDoc/"><svg xmlns="http://www.w3.org/2000/svg" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>\n                </span>\n            </header>')}},{key:"renderMenu",value:function(e){var n=e||[];if(0===n.length)return"";var t="";return n.forEach(function(e){var n="#!"+e.href,r=location.hash===n?"active":"";t+='<li class="nav-item '.concat(r,'">\n                        <a class="nav-link" href="').concat(n,'">').concat(e.title,"</a>\n                    </li>")}),t}},{key:"renderPrint",value:function(e){return'<div class="d-none d-print-block pb-3 text-muted">mDoc v'.concat(e,' - Printed from <a href="').concat(location.href,'">').concat(location.href,"</a> on ").concat((new Date).toLocaleString(),"</div>")}},{key:"renderGitLinks",value:function(e){if(!e)return"";var n,t,r=e,o=a.read(location.hash).mdPath;return 0===r.indexOf("https://github.com/")?(n="".concat(r,"/blob/master/").concat(o),t="".concat(r,"/commits/master/").concat(o)):(n="".concat(r,"?path=%2F").concat(encodeURIComponent(o),"&_a=contents"),t="".concat(r,"?path=%2F").concat(encodeURIComponent(o),"&_a=history")),'<div class="gitlinks float-right">\n            <a href="'.concat(n,'">Edit</a> | <a href="').concat(t,'">History</a>\n        </div>')}},{key:"renderToc",value:function(e){if(!e.length)return"";for(var n=a.read(location.hash).page,t=2,r='<ul class="section-nav">',o=0,i=e.length;o<i;o++){var c=parseInt(e[o].tagName.substring(1)),s=o<i-1?parseInt(e[o+1].tagName.substring(1)):c;r+='<li class="toc-entry toc-h'.concat(c,'">\n                        <a href="').concat(n,"#").concat(e[o].id,'" tabindex="-1">').concat(e[o].textContent,"</a>"),r+=c===s?"</li>":s>c?"<ul>":"</li></ul>",t=c}return t>2&&(r+="</ul>".repeat(t-2)),r+="</ul>"}},{key:"renderSidebar",value:function(e){if(!e)return"";var n=a.read(location.hash).mdPath;return'<form class="bd-search d-flex align-items-center" onsubmit="mdoc.performSearch(); return false;">\n                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n                    </form>\n                    <nav class="collapse bd-links">\n                        '.concat(function e(t,r){var a=""===t?"<ul>":0===n.indexOf(t)?'<ul class="nested active">':'<ul class="nested">';return Object.keys(r).forEach(function(o){if("file"===r[o]){var i=n===t+o?"current":"";a+='<li><a href="#!'.concat(t).concat(o,'" class="').concat(i,'" tabindex="-1">').concat(d(o),"</a></li>")}else{var c=0===n.indexOf(t+o+"/");a+='<li>\n                        <span class="'.concat(c?"caret caret-down":"caret",'">').concat(d(o),'</span>\n                        <button class="admin-only" onclick="mdoc.displayUnderPath(\'').concat(t+o+"/","'); return false;\">view all</button>\n                        ").concat(e("".concat(t).concat(o,"/"),r[o]),"\n                    </li>")}}),a+="</ul>"}("",e),"\n                    </nav>")}},{key:"renderSearch",value:function(e,n){var t="<h1>Search results</h1>\n            <p><strong>".concat(n.length,"</strong> results where found for the search for <strong>").concat(e,"</strong><p>");return n.forEach(function(n){t+='<div>\n                    <h4><a href="#!'.concat(n.Path,'">').concat(d(n.Path),"</a></h4>\n                    <p>\n                        ...").concat(function(e,n){var t=n.indexOf(e);return n.substring(0,t)+"<strong>"+e+"</strong>"+n.substring(t+e.length)}(e,n.Contents),'...\n                        <br /><small><a href="#!').concat(n.Path,'" tabindex="-1" class="text-muted">').concat(n.Path,"</a></small>  \n                    </p>\n                </div>")}),t}},{key:"renderError",value:function(e){var n="";if(e.response){var t=e.response,r=t.url.replace(window.origin,"");n="<p>The requested page <strong>".concat(r,"</strong> returned ").concat(t.status," - ").concat(t.statusText,"</p>")}else n="<p>".concat(e.message,"<p><pre>").concat(e.stack,"</pre>");return'<div class="alert alert-danger">\n                <h4 class="alert-heading">Oops something went wrong...</h4>\n                '.concat(n,"\n        </div>")}},{key:"renderThemes",value:function(){var e="<h4>Select a theme</h4>";return l.forEach(function(n){e+=' <button type="button" class="btn btn-outline-primary mt-1" onclick="mdoc.setTheme(\''.concat(n.toLowerCase(),"')\">").concat(n,"</button>")}),e+=' <button type="button" class="btn btn-outline-secondary mt-1" onclick="mdoc.resetTheme()">Reset</button>'}}],(t=null)&&s(n.prototype,t),r&&s(n,r),e}();function d(e){return e.lastIndexOf(".md")===e.length-3&&(e=e.slice(0,-3)),-1!==e.indexOf("/")&&(e=e.slice(e.lastIndexOf("/")+1)),e.length<=3?e.toUpperCase():e.split("-").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,r=[{key:"enableFor",value:function(e,n){[].forEach.call(document.querySelectorAll(e),function(e){e.addEventListener("click",function(){v(document,"FullScreen")||v(document,"IsFullScreen")?v(document,"CancelFullScreen"):v(n?e.closest(n):e,"RequestFullScreen")})})}}],(t=null)&&f(n.prototype,t),r&&f(n,r),e}(),p=["webkit","moz","ms","o",""];function v(e,n){for(var t,r,a=0;a<p.length&&!e[t];){if(t=n,""==p[a]&&(t=t.substr(0,1).toLowerCase()+t.substr(1)),"undefined"!=(r=h(e[t=p[a]+t])))return p=[p[a]],"function"==r?e[t]():e[t];a++}}function g(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y={version:"1.3",settings:{startMdFile:"index.md",settingsJson:"settings.json",contentJson:"content.json",defaultTheme:"flatly"},allContent:[]},w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),window.addEventListener("hashchange",this.navigateToHash.bind(this),!1),document.addEventListener("DOMContentLoaded",this.init.bind(this),!1),document.addEventListener("keyup",this.listenKeyboard.bind(this),!1),document.addEventListener("scroll",this.listenScroll.bind(this),!1),this.settings=y.settings,this.$app=document.getElementById("app")}var n,t,r;return n=e,(t=[{key:"init",value:function(){o(),this.loadSettings(),this.loadTheme()}},{key:"navigateToHash",value:function(e){var n=a.read(e.oldURL),t=a.read(e.newURL);if(t&&t.mdPath){if(n&&n.mdPath===t.mdPath&&"mdoc-search"!==n.scrollTo)return void this.scrollToHashOrTop(t.scrollTo);this.loadMarkdown(t.mdPath)}}},{key:"listenKeyboard",value:function(e){e.shiftKey&&e.ctrlKey&&65===e.which&&(this.$app.classList.contains("admin-mode")?this.scrollToHashOrTop():document.body.scrollTop=document.documentElement.scrollTop=0,this.$app.classList.toggle("admin-mode"))}},{key:"listenScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,n=g(document.querySelectorAll("#main h2, #main h3"));if(n.length){var t=document.querySelector(".toc-entry a.font-weight-bold"),r=n.filter(function(n){return n.offsetTop<=e}).pop();!r||t&&t.href.endsWith("#"+r.id)||(t&&t.classList.toggle("font-weight-bold"),document.querySelector('.toc-entry a[href$="#'+r.id+'"]').classList.add("font-weight-bold"))}}},{key:"loadSettings",value:function(){fetch(y.settings.settingsJson).then(c).then(function(e){return e.json()}).then(function(e){return y.settings=Object.assign(y.settings,e)}).finally(this.displayApp.bind(this))}},{key:"loadContent",value:function(){fetch(y.settings.contentJson).then(c).then(function(e){return e.json()}).then(this.handleContent.bind(this)).catch(function(e){console.error("Unabled to load contentJson",e)})}},{key:"loadTheme",value:function(){var e=localStorage.getItem("themeName")||y.settings.defaultTheme;if(n=document.getElementById("themeLink"))n.href=this.getThemeUrl(e);else{var n;(n=document.createElement("link")).id="themeLink",n.rel="stylesheet",n.href=this.getThemeUrl(e);var t=document.querySelector('link[rel="icon"]');t.parentNode.insertBefore(n,t.nextSibling)}}},{key:"loadMarkdown",value:function(e){console.log("loadMarkdown",e),fetch(e).then(c).then(function(e){return e.text()}).then(this.displayMarkdown.bind(this)).catch(this.displayError.bind(this))}},{key:"handleContent",value:function(e){y.allContent=e;var n=e.map(function(e){return e.Path});y.tree=function(e){var n={};if(e instanceof Array==0)throw new Error("Expected an Array of file paths, but saw "+e);function t(e,n,t,r){return t===r.length-1&&(e[n]="file"),e.hasOwnProperty(n)||(e[n]={}),e[n]}return e.forEach(function(e){var r=e.split("/");if(1===r.length)return n[r[0]]="file";r.reduce(t,n)}),n}(n),this.displaySidebar()}},{key:"performSearch",value:function(){var e=document.querySelector("form input[type=search]").value;e&&(this.searchDocs(e),this.displayToc())}},{key:"searchDocs",value:function(e){var n=[];y.allContent.forEach(function(t){var r=t.Contents.search(new RegExp(e,"i"));-1!==r&&n.push({Path:t.Path,Contents:t.Contents.substring(r-80,r+80)})}),this.$main.innerHTML=u.renderSearch(e,n),location.hash=a.read(location.hash).page+"#mdoc-search"}},{key:"displayApp",value:function(){this.$app.innerHTML=u.renderApp(y.settings.title,y.settings.nav,y.version),this.$main=document.getElementById("main"),this.$toc=document.getElementById("toc"),this.$sidebar=document.getElementById("sidebar");var e=a.read(location.hash);this.loadMarkdown(e.mdPath),this.loadContent()}},{key:"displayMarkdown",value:function(e){this.$app.classList.add("loaded"),this.$main.innerHTML=u.renderPrint(y.version)+u.renderGitLinks(y.settings.gitRepo)+marked(e),this.triggerMarkownRenderers()}},{key:"displayToc",value:function(){var e=document.querySelectorAll("#main h2, #main h3");this.$toc.innerHTML=u.renderToc(e)}},{key:"displaySidebar",value:function(){this.$sidebar.innerHTML=u.renderSidebar(y.tree);for(var e=document.getElementsByClassName("caret"),n=0;n<e.length;n++)e[n].addEventListener("click",function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.classList.toggle("caret-down")})}},{key:"displayUnderPath",value:function(e){var n=y.allContent.filter(function(n){return 0===n.Path.indexOf(e)}),t="<h1>Showing all files under: ".concat(e,"</h1>");n.forEach(function(e){t+=marked(e.Contents)}),this.$main.innerHTML=t,this.triggerMarkownRenderers()}},{key:"displayError",value:function(e){this.$app.classList.add("loaded"),this.$main.innerHTML=u.renderError(e)}},{key:"scrollToHashOrTop",value:function(){var e=a.read(location.hash),n=this.$app;e&&e.scrollTo&&(n=document.getElementById(e.scrollTo)),n.scrollIntoView(!0)}},{key:"setTheme",value:function(e){localStorage.setItem("themeName",e),this.loadTheme()}},{key:"resetTheme",value:function(){localStorage.removeItem("themeName"),this.loadTheme()}},{key:"getThemeUrl",value:function(e){return"https://netdna.bootstrapcdn.com/bootswatch/4.3.1/".concat(e.toLowerCase(),"/bootstrap.min.css")}},{key:"triggerMarkownRenderers",value:function(){-1!==this.$main.innerHTML.indexOf('<code class="')&&Prism.highlightAllUnder(this.$main,!1),-1!==this.$main.innerHTML.indexOf('<div class="mermaid"')&&(mermaid.init({startOnLoad:!1},"div.mermaid"),m.enableFor("div.mermaid")),m.enableFor("table.table-striped thead","table.table-striped"),this.scrollToHashOrTop(),this.displaySidebar(),this.displayToc()}}])&&b(n.prototype,t),r&&b(n,r),e}();if(!window.HashChangeEvent){var k=document.URL;window.addEventListener("hashchange",function(e){var n=k,t=document.URL;k=t,Object.defineProperties(e,{oldURL:{enumerable:!0,configurable:!0,value:n},newURL:{enumerable:!0,configurable:!0,value:t}})})}String.prototype.repeat||(String.prototype.repeat=function(e){return new Array(isNaN(e)?1:++e).join(this)}),window.mdoc=new w}]);