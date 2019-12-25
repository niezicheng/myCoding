/*
 Highcharts JS v7.1.2 (2019-06-03)

 Old IE (v6, v7, v8) module for Highcharts v6+.

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){"object"===typeof module&&module.exports?(f["default"]=f,module.exports=f):"function"===typeof define&&define.amd?define("highcharts/modules/oldie",["highcharts"],function(k){f(k);f.Highcharts=k;return f}):f("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(f){function k(d,f,h,w){d.hasOwnProperty(f)||(d[f]=w.apply(null,h))}f=f?f._modules:{};k(f,"modules/oldie.src.js",[f["parts/Globals.js"]],function(d){var f,h;h=d.Chart;var w=d.createElement,k=d.css,E=d.defined,p=d.deg2rad,
F=d.discardElement,g=d.doc,G=d.erase,y=d.extend;f=d.extendClass;var K=d.isArray,H=d.isNumber,z=d.isObject,L=d.merge,I=d.noop,A=d.pick,q=d.pInt,C=d.svg,x=d.SVGElement,u=d.SVGRenderer,v=d.win;d.getOptions().global.VMLRadialGradientURL="http://code.highcharts.com/7.1.2/gfx/vml-radial-gradient.png";g&&!g.defaultView&&(d.getStyle=function(a,b){var c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return d.pInt(a.style[b]);"opacity"===b&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-
2*d.getStyle(a,"padding"),0);a=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];"filter"===b&&(a=a.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100}));return""===a?1:d.pInt(a)});C||(d.addEvent(x,"afterInit",function(){"text"===this.element.nodeName&&this.css({position:"absolute"})}),d.Pointer.prototype.normalize=function(a,b){a=a||v.event;a.target||(a.target=a.srcElement);b||(this.chartPosition=b=d.offset(this.chart.container));return d.extend(a,{chartX:Math.round(Math.max(a.x,
a.clientX-b.left)),chartY:Math.round(a.y)})},h.prototype.ieSanitizeSVG=function(a){return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},
h.prototype.isReadyToRender=function(){var a=this;return C||v!=v.top||"complete"===g.readyState?!0:(g.attachEvent("onreadystatechange",function(){g.detachEvent("onreadystatechange",a.firstRender);"complete"===g.readyState&&a.firstRender()}),!1)},g.createElementNS||(g.createElementNS=function(a,b){return g.createElement(b)}),d.addEventListenerPolyfill=function(a,b){function c(a){a.target=a.srcElement||v;b.call(e,a)}var e=this;e.attachEvent&&(e.hcEventsIE||(e.hcEventsIE={}),b.hcKey||(b.hcKey=d.uniqueKey()),
e.hcEventsIE[b.hcKey]=c,e.attachEvent("on"+a,c))},d.removeEventListenerPolyfill=function(a,b){this.detachEvent&&(b=this.hcEventsIE[b.hcKey],this.detachEvent("on"+a,b))},h={docMode8:g&&8===g.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],e=["position: ","absolute",";"],n="div"===b;("shape"===b||n)&&e.push("left:0;top:0;width:1px;height:1px;");e.push("visibility: ",n?"hidden":"visible");c.push(' style\x3d"',e.join(""),'"/\x3e');b&&(c=n||"span"===b||"img"===b?c.join(""):
a.prepVML(c),this.element=w(c));this.renderer=a},add:function(a){var b=this.renderer,c=this.element,e=b.box,n=a&&a.inverted,e=a?a.element||a:e;a&&(this.parentGroup=a);n&&b.invertChild(c,e);e.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:x.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*p),c=Math.sin(a*
p);k(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,e,n){var d=e?Math.cos(e*p):1,f=e?Math.sin(e*p):0,r=A(this.elemHeight,this.element.offsetHeight),g;this.xCorr=0>d&&-a;this.yCorr=0>f&&-r;g=0>d*f;this.xCorr+=f*b*(g?1-c:c);this.yCorr-=d*b*(e?g?c:1-c:1);n&&"left"!==n&&(this.xCorr-=a*c*(0>d?-1:1),e&&(this.yCorr-=r*c*(0>f?-1:1)),k(this.element,
{textAlign:n}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)H(a[b])?c[b]=Math.round(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,G(c,b),c.push(b),b.destroyClip=function(){G(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:x.prototype.htmlCss,
safeRemoveChild:function(a){a.parentNode&&F(a)},destroy:function(){this.destroyClip&&this.destroyClip();return x.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=v.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=q(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var e=[],d,D=this.element,f=this.renderer,r,g=D.style,l,t=D.path,h,m,k,p;t&&"string"!==typeof t.value&&(t=
"x");m=t;if(a){k=A(a.width,3);p=(a.opacity||.15)/k;for(d=1;3>=d;d++)h=2*k+1-2*d,c&&(m=this.cutOffPath(t.value,h+.5)),l=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',h,'" filled\x3d"false" path\x3d"',m,'" coordsize\x3d"10 10" style\x3d"',D.style.cssText,'" /\x3e'],r=w(f.prepVML(l),null,{left:q(g.left)+A(a.offsetX,1),top:q(g.top)+A(a.offsetY,1)}),c&&(r.cutOff=h+1),l=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',p*d,'"/\x3e'],w(f.prepVML(l),null,null,r),b?b.element.appendChild(r):
D.parentNode.insertBefore(r,D),e.push(r);this.shadows=e}return this},updateShadows:I,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},getAttr:function(a){return this.docMode8?this.element[a]:this.element.getAttribute(a)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||w(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,
c){var e=this.shadows;a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(e)for(c=e.length;c--;)e[c].path=e[c].cutOff?this.cutOffPath(a,e[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var e=c.nodeName;"SPAN"===e?c.style.color=a:"IMG"!==e&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){w(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:I,rotationSetter:function(a,
b,c){c=c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*p)+1)+"px";c.top=Math.round(Math.cos(a*p))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;H(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&this.shadows.forEach(function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===
a?"-999em":0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}},h["stroke-opacitySetter"]=h["fill-opacitySetter"],
d.VMLElement=h=f(x,h),h.prototype.ySetter=h.prototype.widthSetter=h.prototype.heightSetter=h.prototype.xSetter,h={Element:h,isIE8:-1<v.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var e,d;this.alignedObjects=[];e=this.createElement("div").css({position:"relative"});d=e.element;a.appendChild(e.element);this.isVML=!0;this.box=d;this.boxWrapper=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!g.namespaces.hcv){g.namespaces.add("hcv","urn:schemas-microsoft-com:vml");
try{g.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(D){g.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,e){var d=this.createElement(),f=z(a);return y(d,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:e)-
1,getCSS:function(a){var b=a.element,c=b.nodeName,e=a.inverted,d=this.top-("shape"===c?b.offsetTop:0),f=this.left,b=f+this.width,n=d+this.height,d={clip:"rect("+Math.round(e?f:d)+"px,"+Math.round(e?n:b)+"px,"+Math.round(e?b:n)+"px,"+Math.round(e?d:f)+"px)"};!e&&a.docMode8&&"DIV"===c&&y(d,{width:b+"px",height:n+"px"});return d},updateClipping:function(){d.members.forEach(function(a){a.element&&a.css(d.getCSS(a))})}})},color:function(a,b,c,e){var f=this,g,h=/^rgba/,r,k,l="none";a&&a.linearGradient?
k="gradient":a&&a.radialGradient&&(k="pattern");if(k){var t,p,m=a.linearGradient||a.radialGradient,q,u,v,x,A,y="";a=a.stops;var z,C=[],E=function(){r=['\x3cfill colors\x3d"'+C.join(",")+'" opacity\x3d"',v,'" o:opacity2\x3d"',u,'" type\x3d"',k,'" ',y,'focus\x3d"100%" method\x3d"any" /\x3e'];w(f.prepVML(r),null,null,b)};q=a[0];z=a[a.length-1];0<q[0]&&a.unshift([0,q[1]]);1>z[0]&&a.push([1,z[1]]);a.forEach(function(a,b){h.test(a[1])?(g=d.color(a[1]),t=g.get("rgb"),p=g.get("a")):(t=a[1],p=1);C.push(100*
a[0]+"% "+t);b?(v=p,x=t):(u=p,A=t)});if("fill"===c)if("gradient"===k)c=m.x1||m[0]||0,a=m.y1||m[1]||0,q=m.x2||m[2]||0,m=m.y2||m[3]||0,y='angle\x3d"'+(90-180*Math.atan((m-a)/(q-c))/Math.PI)+'"',E();else{var l=m.r,F=2*l,G=2*l,H=m.cx,I=m.cy,J=b.radialReference,B,l=function(){J&&(B=e.getBBox(),H+=(J[0]-B.x)/B.width-.5,I+=(J[1]-B.y)/B.height-.5,F*=J[2]/B.width,G*=J[2]/B.height);y='src\x3d"'+d.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+F+","+G+'" origin\x3d"0.5,0.5" position\x3d"'+H+","+I+'" color2\x3d"'+
A+'" ';E()};e.added?l():e.onAdd=l;l=x}else l=t}else h.test(a)&&"IMG"!==b.tagName?(g=d.color(a),e[c+"-opacitySetter"](g.get("a"),c,b),l=g.get("rgb")):(l=b.getElementsByTagName(c),l.length&&(l[0].opacity=1,l[0].type="solid"),l=a);return l},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"',
'style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:u.prototype.html,path:function(a){var b={coordsize:"10 10"};K(a)?b.d=a:z(a)&&y(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var e=this.symbol("circle");z(a)&&(c=a.r,b=a.y,a=a.x);e.isCircle=!0;e.r=c;return e.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,
e,d){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:c,width:e,height:d});return f},createElement:function(a){return"rect"===a?this.symbol(a):u.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this;b=b.style;var e="IMG"===a.tagName&&a.style;k(a,{flip:"x",left:q(b.width)-(e?q(e.top):1),top:q(b.height)-(e?q(e.left):1),rotation:-90});[].forEach.call(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,e,d){var f=d.start,g=d.end,
h=d.r||c||e;c=d.innerR;e=Math.cos(f);var n=Math.sin(f),l=Math.cos(g),k=Math.sin(g);if(0===g-f)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*e,b+h*n,a+h*l,b+h*k];d.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*l,b+c*k,a+c*e,b+c*n,"x","e");f.isArc=!0;return f},circle:function(a,b,c,e,d){d&&E(d.r)&&(c=e=2*d.r);d&&d.isCircle&&(a-=c/2,b-=e/2);return["wa",a,b,a+c,b+e,a+c,b+e/2,a+c,b+e/2,"e"]},rect:function(a,b,c,d,f){return u.prototype.symbols[E(f)&&f.r?"callout":"square"].call(0,a,b,c,d,f)}}},
d.VMLRenderer=f=function(){this.init.apply(this,arguments)},f.prototype=L(u.prototype,h),d.Renderer=f);u.prototype.getSpanWidth=function(a,b){var c=a.getBBox(!0).width;!C&&this.forExport&&(c=this.measureSpanWidth(b.firstChild.data,a.styles));return c};u.prototype.measureSpanWidth=function(a,b){var c=g.createElement("span");a=g.createTextNode(a);c.appendChild(a);k(c,b);this.box.appendChild(c);b=c.offsetWidth;F(c);return b}});k(f,"masters/modules/oldie.src.js",[],function(){})});
//# sourceMappingURL=oldie.js.map
