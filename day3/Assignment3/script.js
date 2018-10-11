/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-geolocation-setclasses !*/
 !function(n,e,o){function s(n){var e=l.className,o=Modernizr._config.classPrefix||"";if(f&&(e=e.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+n.join(" "+o),f?l.className.baseVal=e:l.className=e)}function a(n,e){return typeof n===e}function i(){var n,e,o,s,i,l,f;for(var c in r)if(r.hasOwnProperty(c)){if(n=[],e=r[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(s=a(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],f=l.split("."),1===f.length?Modernizr[f[0]]=s:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=s),t.push((s?"":"no-")+f.join("-"))}}var t=[],l=e.documentElement,f="svg"===l.nodeName.toLowerCase(),r=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){r.push({name:n,fn:e,options:o})},addAsyncTest:function(n){r.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),i(),s(t),delete c.addTest,delete c.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);

var mainContent = document.getElementById('main-content');
var image = document.createElement('img');
image.style.width = '90%';
image.style.maxWidth = '500px';
image.style.paddingTop = '30px';
image.style.marginRight = 'auto';
if (Modernizr.geolocation) {
    image.src = 'https://placekitten.com/500/400';
    mainContent.appendChild(image);
} else {
    image = document.createElement('img');
    image.src = 'http://www.placepuppy.net/500/400';
    mainContent.appendChild(image);
}

if (history.length === 1) {
    document.body.bgColor = 'lightblue';
} else {
    document.body.bgColor = 'salmon';
}

var heading = document.getElementById('cheesy');
heading.style.color = 'darkorange';
heading.style.background = '#AFFF33';
heading.style.padding = '5px auto';
heading.style.width = '100%';
heading.style.textAlign = 'center';

var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.display = 'flex';
    listItems[i].style.justifyContent = 'center';
    listItems[i].style.width = '250px';
    listItems[i].style.margin = '0 auto';
    listItems[i].style.fontSize = '24px';
    listItems[i].style.margin = '20px 0';
}
//Style odd list items
for (var i = 0; i < listItems.length; i += 2) {
    listItems[i].style.border = 'blue 3px solid';
    listItems[i].style.background = 'lightgreen';
}
//Style even list items
for (var i = 1; i < listItems.length; i += 2) {
    listItems[i].style.border = 'red 3px solid';
    listItems[i].style.background = 'gold';
}

var bodyElement = document.getElementsByTagName('body')[0];
bodyElement.style.display = 'flex';
bodyElement.style.flexDirection = 'column';
bodyElement.style.alignItems = 'center';
bodyElement.style.maxWidth = '800px';
bodyElement.style.margin = '0 auto';
bodyElement.style.width = '80%';
bodyElement.style.marginBottom = '100px';

var unorderedList = document.getElementsByTagName('ul')[0];
unorderedList.style.padding = '0';

mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';
mainContent.style.alignItems = 'center';
mainContent.style.fontSize = '1.2em';

var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.textDecoration = 'none';
    anchors[i].style.color = 'darkgreen';
}