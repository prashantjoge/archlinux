!function(r,e,t){function s(t,i,n){return t.call.apply(t.bind,arguments)}function o(i,n,t){if(!i)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),i.apply(n,t)}}return function(){return i.apply(n,arguments)}}function l(t,i,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?s:o).apply(null,arguments)}var a=Date.now||function(){return+new Date};function h(t,i){this.K=t,this.w=i||t,this.G=this.w.document}function f(t,i,n){(t=t.G.getElementsByTagName(i)[0])||(t=e.documentElement),t&&t.lastChild&&t.insertBefore(n,t.lastChild)}function u(t,i,n){i=i||[],n=n||[];for(var e=t.className.split(/\s+/),s=0;s<i.length;s+=1){for(var o=!1,a=0;a<e.length;a+=1)if(i[s]===e[a]){o=!0;break}o||e.push(i[s])}for(i=[],s=0;s<e.length;s+=1){for(o=!1,a=0;a<n.length;a+=1)if(e[s]===n[a]){o=!0;break}o||i.push(e[s])}t.className=i.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function c(t,i){for(var n=t.className.split(/\s+/),e=0,s=n.length;e<s;e++)if(n[e]==i)return!0;return!1}function p(t){if("string"==typeof t.na)return t.na;var i=t.w.location.protocol;return"about:"==i&&(i=t.K.location.protocol),"https:"==i?"https:":"http:"}function d(t,i){var n=t.createElement("link",{rel:"stylesheet",href:i,media:"all"}),e=!1;n.onload=function(){e||(e=!0)},n.onerror=function(){e||(e=!0)},f(t,"head",n)}function g(t,i,n,e){var s=t.G.getElementsByTagName("head")[0];if(s){var o=t.createElement("script",{src:i}),a=!1;return o.onload=o.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&s.removeChild(o))},s.appendChild(o),r.setTimeout(function(){a||(a=!0,n&&n(Error("Script load timeout")))},e||5e3),o}return null}function m(t,i){this.Y=t,this.ga=i}function v(t,i,n,e){this.c=null!=t?t:null,this.g=null!=i?i:null,this.D=null!=n?n:null,this.e=null!=e?e:null}h.prototype.createElement=function(t,i,n){if(t=this.G.createElement(t),i)for(var e in i)i.hasOwnProperty(e)&&("style"==e?t.style.cssText=i[e]:t.setAttribute(e,i[e]));return n&&t.appendChild(this.G.createTextNode(n)),t};var w=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function y(t){var i=null,n=null,e=null,s=null;return(t=w.exec(t))&&(null!==t[1]&&t[1]&&(i=parseInt(t[1],10)),null!==t[2]&&t[2]&&(n=parseInt(t[2],10)),null!==t[3]&&t[3]&&(e=parseInt(t[3],10)),null!==t[4]&&t[4]&&(s=/^[0-9]+$/.test(t[4])?parseInt(t[4],10):t[4])),new v(i,n,e,s)}function k(t,i,n,e,s,o,a,r){this.N=t,this.m=r}function n(t){this.a=t}v.prototype.compare=function(t){return this.c>t.c||this.c===t.c&&this.g>t.g||this.c===t.c&&this.g===t.g&&this.D>t.D?1:this.c<t.c||this.c===t.c&&this.g<t.g||this.c===t.c&&this.g===t.g&&this.D<t.D?-1:0},v.prototype.toString=function(){return[this.c,this.g||"",this.D||"",this.e||""].join("")},k.prototype.getName=function(){return this.N};var b=new k("Unknown",0,0,0,0,0,0,new m(!1,!1));function x(t){var i=C(t.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=i?(/BB\d{2}/.test(i)&&(i="BlackBerry"),i):""!=(t=C(t.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1))?("Mac_PowerPC"==t?t="Macintosh":"PlayStation"==t&&(t="Linux"),t):"Unknown"}function O(t){if((i=C(t.a,/(OS X|Windows NT|Android) ([^;)]+)/,2))||(i=C(t.a,/Windows Phone( OS)? ([^;)]+)/,2))||(i=C(t.a,/(iPhone )?OS ([\d_]+)/,2)))return i;if(i=C(t.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var i=i.split(/\s/),n=0;n<i.length;n+=1)if(/^[\d\._]+$/.test(i[n]))return i[n];return(t=C(t.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?t:"Unknown"}function S(t){var i=x(t),n=y(O(t)),e=y(C(t.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),s="Unknown",o=new v;o="Unknown";return/OPR\/[\d.]+/.test(t.a)?s="Opera":-1!=t.a.indexOf("Chrome")||-1!=t.a.indexOf("CrMo")||-1!=t.a.indexOf("CriOS")?s="Chrome":/Silk\/\d/.test(t.a)?s="Silk":"BlackBerry"==i||"Android"==i?s="BuiltinBrowser":-1!=t.a.indexOf("PhantomJS")?s="PhantomJS":-1!=t.a.indexOf("Safari")?s="Safari":-1!=t.a.indexOf("AdobeAIR")?s="AdobeAIR":-1!=t.a.indexOf("PlayStation")&&(s="BuiltinBrowser"),"BuiltinBrowser"==s?o="Unknown":"Silk"==s?o=C(t.a,/Silk\/([\d\._]+)/,1):"Chrome"==s?o=C(t.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=t.a.indexOf("Version/")?o=C(t.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==s?o=C(t.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==s?o=C(t.a,/OPR\/([\d.]+)/,1):"PhantomJS"==s&&(o=C(t.a,/PhantomJS\/([\d.]+)/,1)),o=y(o),new k(s,0,0,0,0,0,0,new m("AdobeAIR"==s?2<o.c||2==o.c&&5<=o.g:"BlackBerry"==i?10<=n.c:"Android"==i?2<n.c||2==n.c&&1<n.g:526<=e.c||525<=e.c&&13<=e.g,e.c<536||536==e.c&&e.g<11))}function C(t,i,n){return(t=t.match(i))&&t[n]?t[n]:""}function B(t){this.ma=t||"-"}function N(t,i){this.N=t,this.Z=4,this.O="n";var n=(i||"n4").match(/^([nio])([1-9])$/i);n&&(this.O=n[1],this.Z=parseInt(n[2],10))}function A(t){return t.O+t.Z}function j(t,i){this.d=t,this.q=t.w.document.documentElement,this.Q=i,this.j="wf",this.h=new B("-"),this.ha=!1!==i.events,this.F=!1!==i.classes}function P(t){if(t.F){var i=c(t.q,t.h.e(t.j,"active")),n=[],e=[t.h.e(t.j,"loading")];i||n.push(t.h.e(t.j,"inactive")),u(t.q,n,e)}_(t,"inactive")}function _(t,i,n){t.ha&&t.Q[i]&&(n?t.Q[i](n.getName(),A(n)):t.Q[i]())}function i(){this.C={}}function T(t,i){this.d=t,this.I=i,this.k=this.d.createElement("span",{"aria-hidden":"true"},this.I)}function I(t){f(t.d,"body",t.k)}function W(t){var i;i=[];for(var n=t.N.split(/,\s*/),e=0;e<n.length;e++){var s=n[e].replace(/['"]/g,"");-1==s.indexOf(" ")?i.push(s):i.push("'"+s+"'")}return i=i.join(","),n="normal","o"===t.O?n="oblique":"i"===t.O&&(n="italic"),"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+i+";font-style:"+n+";font-weight:"+t.Z+"00;"}function M(t,i,n,e,s,o,a,r){this.$=t,this.ka=i,this.d=n,this.o=e,this.m=s,this.I=r||"BESbswy",this.v={},this.X=o||3e3,this.ca=a||null,this.H=this.u=this.t=null,this.t=new T(this.d,this.I),this.u=new T(this.d,this.I),this.H=new T(this.d,this.I),t=W(t=new N("serif",A(this.o))),this.t.k.style.cssText=t,t=W(t=new N("sans-serif",A(this.o))),this.u.k.style.cssText=t,t=W(t=new N("monospace",A(this.o))),this.H.k.style.cssText=t,I(this.t),I(this.u),I(this.H),this.v.serif=this.t.k.offsetWidth,this.v["sans-serif"]=this.u.k.offsetWidth,this.v.monospace=this.H.k.offsetWidth}n.prototype.parse=function(){var t;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){t=x(this);var i=y(O(this)),n=null,e=C(this.a,/Trident\/([\d\w\.]+)/,1);n=-1!=this.a.indexOf("MSIE")?y(C(this.a,/MSIE ([\d\w\.]+)/,1)):y(C(this.a,/rv:([\d\w\.]+)/,1));""!=e&&y(e),t=new k("MSIE",0,0,0,0,0,0,new m("Windows"==t&&6<=n.c||"Windows Phone"==t&&8<=i.c,!1))}else if(-1!=this.a.indexOf("Opera"))t:if(t=y(C(this.a,/Presto\/([\d\w\.]+)/,1)),y(O(this)),null!==t.c||y(C(this.a,/rv:([^\)]+)/,1)),-1!=this.a.indexOf("Opera Mini/"))t=y(C(this.a,/Opera Mini\/([\d\.]+)/,1)),t=new k("OperaMini",0,0,0,x(this),0,0,new m(!1,!1));else{if(-1!=this.a.indexOf("Version/")&&null!==(t=y(C(this.a,/Version\/([\d\.]+)/,1))).c){t=new k("Opera",0,0,0,x(this),0,0,new m(10<=t.c,!1));break t}t=null!==(t=y(C(this.a,/Opera[\/ ]([\d\.]+)/,1))).c?new k("Opera",0,0,0,x(this),0,0,new m(10<=t.c,!1)):new k("Opera",0,0,0,x(this),0,0,new m(!1,!1))}else t=/OPR\/[\d.]+/.test(this.a)?S(this):/AppleWeb(K|k)it/.test(this.a)?S(this):-1!=this.a.indexOf("Gecko")?(t="Unknown",i=new v,y(O(this)),i=!1,-1!=this.a.indexOf("Firefox")?(t="Firefox",i=3<=(i=y(C(this.a,/Firefox\/([\d\w\.]+)/,1))).c&&5<=i.g):-1!=this.a.indexOf("Mozilla")&&(t="Mozilla"),n=y(C(this.a,/rv:([^\)]+)/,1)),i||(i=1<n.c||1==n.c&&9<n.g||1==n.c&&9==n.g&&2<=n.D),new k(t,0,0,0,x(this),0,0,new m(i,!1))):b;return t},B.prototype.e=function(t){for(var i=[],n=0;n<arguments.length;n++)i.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return i.join(this.ma)},N.prototype.getName=function(){return this.N},T.prototype.remove=function(){var t=this.k;t.parentNode&&t.parentNode.removeChild(t)};var E={sa:"serif",ra:"sans-serif",qa:"monospace"};function F(t,i,n){for(var e in E)if(E.hasOwnProperty(e)&&i===t.v[E[e]]&&n===t.v[E[e]])return!0;return!1}function L(t){var i=t.t.k.offsetWidth,n=t.u.k.offsetWidth;i===t.v.serif&&n===t.v["sans-serif"]||t.m.ga&&F(t,i,n)?a()-t.oa>=t.X?t.m.ga&&F(t,i,n)&&(null===t.ca||t.ca.hasOwnProperty(t.o.getName()))?R(t,t.$):R(t,t.ka):setTimeout(l(function(){L(this)},t),50):R(t,t.$)}function R(t,i){t.t.remove(),t.u.remove(),t.H.remove(),i(t.o)}function q(t,i,n,e){this.d=i,this.A=n,this.S=0,this.ea=this.ba=!1,this.X=e,this.m=t.m}function U(t,i,n,e,s){if(n=n||{},0===i.length&&s)P(t.A);else for(t.S+=i.length,s&&(t.ba=s),s=0;s<i.length;s++){var o=i[s],a=n[o.getName()],r=t.A,h=o;r.F&&u(r.q,[r.h.e(r.j,h.getName(),A(h).toString(),"loading")]),_(r,"fontloading",h),r=null,(r=new M(l(t.ia,t),l(t.ja,t),t.d,o,t.m,t.X,e,a)).start()}}function D(t){0==--t.S&&t.ba&&(t.ea?((t=t.A).F&&u(t.q,[t.h.e(t.j,"active")],[t.h.e(t.j,"loading"),t.h.e(t.j,"inactive")]),_(t,"active")):P(t.A))}function J(t){this.K=t,this.B=new i,this.pa=new n(t.navigator.userAgent),this.a=this.pa.parse(),this.U=this.V=0,this.R=this.T=!0}function K(t,i,n){this.P=t||i+$,this.s=[],this.W=[],this.fa=n||""}M.prototype.start=function(){this.oa=a();var t=W(t=new N(this.o.getName()+",serif",A(this.o)));this.t.k.style.cssText=t,t=W(t=new N(this.o.getName()+",sans-serif",A(this.o))),this.u.k.style.cssText=t,L(this)},q.prototype.ia=function(t){var i=this.A;i.F&&u(i.q,[i.h.e(i.j,t.getName(),A(t).toString(),"active")],[i.h.e(i.j,t.getName(),A(t).toString(),"loading"),i.h.e(i.j,t.getName(),A(t).toString(),"inactive")]),_(i,"fontactive",t),this.ea=!0,D(this)},q.prototype.ja=function(t){var i=this.A;if(i.F){var n=c(i.q,i.h.e(i.j,t.getName(),A(t).toString(),"active")),e=[],s=[i.h.e(i.j,t.getName(),A(t).toString(),"loading")];n||e.push(i.h.e(i.j,t.getName(),A(t).toString(),"inactive")),u(i.q,e,s)}_(i,"fontinactive",t),D(this)},J.prototype.load=function(t){this.d=new h(this.K,t.context||this.K),this.T=!1!==t.events,this.R=!1!==t.classes;var i=new j(this.d,t),n=[],e=t.timeout;i.F&&u(i.q,[i.h.e(i.j,"loading")]),_(i,"loading");n=this.B;var s,o=this.d,a=[];for(s in t)if(t.hasOwnProperty(s)){var r=n.C[s];r&&a.push(r(t[s],o))}for(n=a,this.U=this.V=n.length,t=new q(this.a,this.d,i,e),e=0,s=n.length;e<s;e++)(o=n[e]).L(this.a,l(this.la,this,o,i,t))},J.prototype.la=function(t,i,l,n){var f=this;n?t.load(function(t,i,n){var e,s,o,a,r,h;s=l,o=t,a=i,r=n,h=0==--(e=f).V,(e.R||e.T)&&setTimeout(function(){U(s,o,a||null,r||null,h)},0)}):(t=0==--this.V,this.U--,t&&0==this.U?P(i):(this.R||this.T)&&U(l,[],{},null,t))};var $="//fonts.googleapis.com/css";function V(t){this.s=t,this.da=[],this.M={}}K.prototype.e=function(){if(0==this.s.length)throw Error("No fonts to load!");if(-1!=this.P.indexOf("kit="))return this.P;for(var t=this.s.length,i=[],n=0;n<t;n++)i.push(this.s[n].replace(/ /g,"+"));return t=this.P+"?family="+i.join("%7C"),0<this.W.length&&(t+="&subset="+this.W.join(",")),0<this.fa.length&&(t+="&text="+encodeURIComponent(this.fa)),t};var H={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},G={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},X={i:"i",italic:"i",n:"n",normal:"n"},Q=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Y(t,i){this.a=new n(navigator.userAgent).parse(),this.d=t,this.f=i}V.prototype.parse=function(){for(var t=this.s.length,i=0;i<t;i++){var n=this.s[i].split(":"),e=n[0].replace(/\+/g," "),s=["n4"];if(2<=n.length){var o;if(o=[],a=n[1])for(var a,r=(a=a.split(",")).length,h=0;h<r;h++){var l;if((l=a[h]).match(/^[\w-]+$/)){var f=void 0;if(null==(l=Q.exec(l.toLowerCase())))f="";else{if(f=void 0,null==(f=l[1])||""==f)f="4";else{var u=G[f];f=u||(isNaN(f)?"4":f.substr(0,1))}f=[null==(l=l[2])||""==l?"n":X[l],f].join("")}l=f}else l="";l&&o.push(l)}0<o.length&&(s=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=H[n[0]])&&(this.M[e]=n))}for(this.M[e]||(n=H[e])&&(this.M[e]=n),n=0;n<s.length;n+=1)this.da.push(new N(e,s[n]))}};var Z={Arimo:!0,Cousine:!0,Tinos:!0};function z(t,i){this.d=t,this.f=i,this.p=[]}function tt(t,i){this.d=t,this.f=i,this.p=[]}function it(t,i){this.d=t,this.f=i,this.p=[]}function nt(t,i){this.d=t,this.f=i}Y.prototype.L=function(t,i){i(t.m.Y)},Y.prototype.load=function(t){var i,n,e=this.d;"MSIE"==this.a.getName()&&1!=this.f.blocking?(i=e,n=l(this.aa,this,t),function t(){i.G.body?n():setTimeout(t,0)}()):this.aa(t)},Y.prototype.aa=function(t){for(var i=this.d,n=new K(this.f.api,p(i),this.f.text),e=this.f.families,s=e.length,o=0;o<s;o++){var a=e[o].split(":");3==a.length&&n.W.push(a.pop());var r="";2==a.length&&""!=a[1]&&(r=":"),n.s.push(a.join(r))}(e=new V(e)).parse(),d(i,n.e()),t(e.da,e.M,Z)},z.prototype.J=function(t){var i=this.d;return p(this.d)+(this.f.api||"//f.fontdeck.com/s/css/js/")+(i.w.location.hostname||i.K.location.hostname)+"/"+t+".js"},z.prototype.L=function(t,l){var i=this.f.id,n=this.d.w,f=this;i?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[i]=function(t,i){for(var n=0,e=i.fonts.length;n<e;++n){var s=i.fonts[n];f.p.push(new N(s.name,(o="font-weight:"+s.weight+";font-style:"+s.style,h=r=a=void 0,a=4,r="n",h=null,o&&((h=o.match(/(normal|oblique|italic)/i))&&h[1]&&(r=h[1].substr(0,1).toLowerCase()),(h=o.match(/([1-9]00|normal|bold)/i))&&h[1]&&(/bold/i.test(h[1])?a=7:/[1-9]00/.test(h[1])&&(a=parseInt(h[1].substr(0,1),10)))),r+a)))}var o,a,r,h;l(t)},g(this.d,this.J(i),function(t){t&&l(!1)})):l(!1)},z.prototype.load=function(t){t(this.p)},tt.prototype.J=function(t){var i=p(this.d);return(this.f.api||i+"//use.typekit.net")+"/"+t+".js"},tt.prototype.L=function(t,o){var i=this.f.id,a=this.d.w,r=this;i?g(this.d,this.J(i),function(t){if(t)o(!1);else{if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var i=0;i<t.length;i+=2)for(var n=t[i],e=t[i+1],s=0;s<e.length;s++)r.p.push(new N(n,e[s]));try{a.Typekit.load({events:!1,classes:!1})}catch(t){}}o(!0)}},2e3):o(!1)},tt.prototype.load=function(t){t(this.p)},it.prototype.L=function(n,e){var s=this,o=s.f.projectId,t=s.f.version;if(o){var a=s.d.w;g(this.d,s.J(o,t),function(t){if(t)e(!1);else{if(a["__mti_fntLst"+o]&&(t=a["__mti_fntLst"+o]()))for(var i=0;i<t.length;i++)s.p.push(new N(t[i].fontfamily));e(n.m.Y)}}).id="__MonotypeAPIScript__"+o}else e(!1)},it.prototype.J=function(t,i){return p(this.d)+"//"+(this.f.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"")+"/"+t+".js"+(i?"?v="+i:"")},it.prototype.load=function(t){t(this.p)},nt.prototype.load=function(t){var i,n,e=this.f.urls||[],s=this.f.families||[],o=this.f.testStrings||{};for(i=0,n=e.length;i<n;i++)d(this.d,e[i]);for(e=[],i=0,n=s.length;i<n;i++){var a=s[i].split(":");if(a[1])for(var r=a[1].split(","),h=0;h<r.length;h+=1)e.push(new N(a[0],r[h]));else e.push(new N(a[0]))}t(e,o)},nt.prototype.L=function(t,i){return i(t.m.Y)};var et=new J(this);et.B.C.custom=function(t,i){return new nt(i,t)},et.B.C.fontdeck=function(t,i){return new z(i,t)},et.B.C.monotype=function(t,i){return new it(i,t)},et.B.C.typekit=function(t,i){return new tt(i,t)},et.B.C.google=function(t,i){return new Y(i,t)},this.WebFont||(this.WebFont={},this.WebFont.load=l(et.load,et),this.WebFontConfig&&et.load(this.WebFontConfig))}(this,document);