(window.webpackJsonp=window.webpackJsonp||[]).push([[13,100],{242:function(e,t,a){"use strict";a.r(t);a(26),a(20),a(19),a(53),a(255);var n=a(0),r=a.n(n),l=a(246),c=a(247),i=a.n(c),o=a(248),s=a(69),m=a(254),u=a(1),d=(a(78),a(276),a(277),a(249)),b=a(251),f=a.n(b);a(250);var h=a(261),g=a(262),p=a(154),v=a.n(p);a(155);function E(e){var t=e.item,a=e.level,l=e.onItemClick,c=e.collapsible,o=t.items,s=t.href,m=t.label,b=t.type,f=Object(n.useState)(t.collapsed),h=f[0],g=f[1],p=Object(n.useState)(null),v=p[0],k=p[1];switch(t.collapsed!==v&&(k(t.collapsed),g(t.collapsed)),b){case"category":if(0==o.length)return!1;if(1==a)return r.a.createElement("li",{className:i()("menu__list-item"),key:m},r.a.createElement("div",{className:"title"},m),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(E,{key:e.label,item:e,level:a+1,onItemClick:l,collapsible:c})}))));var y=o[0].href;return r.a.createElement("li",{className:i()("menu__list-item",{"menu__list-item--collapsed":h}),key:m},r.a.createElement(d.a,{activeClassName:"menu__link--active",className:i()("menu__link",{"menu__link--sublist":c}),to:y+"/",onClick:c&&"#!"==y?function(){return g(!h)}:void 0},m),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(E,{key:e.label,item:e,level:a+1,onItemClick:l,collapsible:c})}))));case"link":default:var _=[],N=m;if(m.includes("|")){var O=m.split("|",2);N=O[0],_=JSON.parse(O[1])}var w="hidden"==N;return r.a.createElement("li",{className:i()("menu__list-item",w&&"menu__list-item-hidden"),key:m},r.a.createElement(d.a,Object(u.a)({className:"menu__link",to:s+"/"},/^\/(?!\/)/.test(s)?{activeClassName:"menu__link--active",exact:!0,onClick:l}:{target:"_blank",rel:"noreferrer noopener"}),N,_.length>0&&r.a.createElement("span",{className:"badges"},_.includes("log")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with log events."},"L"),_.includes("metric")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with metric events."},"M"))))}}var k=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],c=Object(o.a)(),s=c.siteConfig,m=(s=void 0===s?{}:s).themeConfig.navbar,b=(m=void 0===m?{}:m).title,p=c.isClient,k=Object(g.a)(),y=k.logoLink,_=k.logoLinkProps,N=k.logoImageUrl,O=k.logoAlt,w=e.docsSidebars,j=e.path,C=e.sidebar,T=e.sidebarCollapsible;if(Object(h.a)(a),!C)return null;var x=w[C];if(!x)throw new Error('Cannot find the sidebar "'+C+'" in the sidebar config!');return T&&x.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,j)})),r.a.createElement("div",{className:i()("docs-sidebar",v.a.sidebar)},r.a.createElement(d.a,Object(u.a)({className:v.a.sidebarLogo,to:y},_),null!=N&&r.a.createElement(f.a,{key:p,src:N,alt:O}),null!=b&&r.a.createElement("strong",null,b)),r.a.createElement("div",{className:i()("menu","menu--responsive",v.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:i()(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},x.map((function(e){return e.items.length>0&&r.a.createElement(E,{key:e.label,item:e,level:1,onItemClick:function(){l(!1)},collapsible:T})})))))},y=a(280),_=a(328),N=a(305),O=a(156),w=a.n(O);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,c=t.routes.find((function(e){return Object(N.b)(n.pathname,e)}))||{},u=a.permalinkToSidebar,d=a.docsSidebars,b=a.version,f=u[c.path],h=Object(o.a)(),g=h.siteConfig,p=(g=void 0===g?{}:g).themeConfig,v=void 0===p?{}:p,E=h.isClient,O=v.sidebarCollapsible,j=void 0===O||O;return 0===Object.keys(c).length?r.a.createElement(_.default,e):r.a.createElement(m.a,{version:b,key:E},r.a.createElement("div",{className:i()(w.a.container,"container","container--l")},f&&r.a.createElement("div",{className:i()(w.a.sidebar)},r.a.createElement(k,{docsSidebars:d,path:c.path,sidebar:f,sidebarCollapsible:j})),r.a.createElement("main",{className:w.a.main},r.a.createElement(l.a,{components:y.a},Object(s.a)(t.routes)))))}},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||l;return a?r.a.createElement(f,i({ref:t},s,{components:a})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(248);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,l=Math.abs(r-a),c=Math.ceil(l/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),c<30&&(!i||i<a)?t:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},254:function(e,t,a){"use strict";a(263);var n=a(0),r=a.n(n),l=a(264),c=a(252),i=a(1),o=(a(265),a(249)),s=a(266),m=a(251),u=a.n(m),d=a(267),b=a.n(d),f=a(248),h=a(247),g=a.n(h),p=a(131),v=a.n(p),E=function(){return r.a.createElement("span",{className:g()(v.a.toggle,v.a.moon)})},k=function(){return r.a.createElement("span",{className:g()(v.a.toggle,v.a.sun)})},y=function(e){var t=Object(f.a)().isClient;return r.a.createElement(b.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(k,null)}},e))},_=a(253),N=a(250),O=a(270),w=a(261),j=a(262),C=a(257),T=a(132),x=a.n(T);function S(e){var t=e.href,a=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),s=e.to,m=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="8k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(_.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,c)||{},u=Object(N.a)(s);return r.a.createElement(o.a,Object(i.a)({className:g()("navbar__item navbar__link",m.className,{navbar__item__icon_only:m.hideText}),title:m.hideText?n:null,onClick:l},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:u}),!a&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:g()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var P=function(){var e,t=Object(f.a)(),a=t.siteConfig.themeConfig,l=a.navbar,c=(l=void 0===l?{}:l).title,m=l.links,d=void 0===m?[]:m,b=l.hideOnScroll,h=void 0!==b&&b,p=a.disableDarkMode,v=void 0!==p&&p,E=(t.isClient,Object(n.useState)(!1)),k=E[0],_=E[1],N=Object(n.useState)(!1),T=N[0],P=N[1],L=Object(C.a)(),M=L.isDarkTheme,I=L.setLightTheme,D=L.setDarkTheme,B=Object(O.a)(h),A=B.navbarRef,R=B.isNavbarVisible,F=Object(j.a)(),W=F.logoLink,V=F.logoLinkProps,H=F.logoImageUrl,J=F.logoAlt;Object(w.a)(k);var U=Object(n.useCallback)((function(){_(!0)}),[_]),q=Object(n.useCallback)((function(){_(!1)}),[_]),z=Object(n.useCallback)((function(e){return e.target.checked?D():I()}),[I,D]);return r.a.createElement("nav",{ref:A,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[x.a.navbarHideable]=h,e[x.a.navbarHidden]=!R,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:W},V),null!=H&&r.a.createElement(u.a,{className:"navbar__logo",src:H,alt:J}),null!=c&&r.a.createElement("strong",{className:T?x.a.hideLogoText:""},c)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(S,Object(i.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(S,Object(i.a)({},e,{right:!0,key:t}))})),!v&&r.a.createElement(y,{className:x.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:M,onChange:z}),r.a.createElement(s.a,{handleSearchBarToggle:P,isSearchBarExpanded:T}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:q,to:W},V),null!=H&&r.a.createElement(u.a,{className:"navbar__logo",src:H,alt:J}),null!=c&&r.a.createElement("strong",null,c)),!v&&k&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:M,onChange:z})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:q})))})))))))},L=a(9);a(133);var M=function(e){var t,a=e.block,n=e.buttonClass,l=e.center,c=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:g()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":l},t["mailing-list--"+i]=i,t))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:g()("input","input--"+i),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:g()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},I=a(134),D=a.n(I);function B(e){var t=e.to,a=e.href,n=e.label,l=Object(L.a)(e,["to","href","label"]),c=Object(N.a)(t);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var A=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var R=function(){var e=Object(f.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,c=n.links,i=void 0===c?[]:c,o=n.logo,s=void 0===o?{}:o,m=Object(N.a)(s.src);return a?r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(M,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"gnet's RSS feed"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(B,e))}))):null)}))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:D.a.footerLogoLink},r.a.createElement(A,{alt:s.alt,url:m})):r.a.createElement(A,{alt:s.alt,url:m}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:D.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},F=a(271),W=a(272),V=a(3);a(135);t.a=function(e){var t=Object(f.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=(a.tagline,a.title),o=a.themeConfig.image,s=a.url,m=e.children,u=e.title,d=e.noFooter,b=e.description,h=e.image,g=e.keywords,p=(e.permalink,e.version),v=u?u+" | "+i:i,E=h||o,k=s+Object(N.a)(E),y=Object(N.a)(n),_=Object(V.h)(),O=_?"https://gnet.host"+(_.pathname.endsWith("/")?_.pathname:_.pathname+"/"):null;return r.a.createElement(W.a,null,r.a.createElement(F.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:y}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:k}),E&&r.a.createElement("meta",{property:"twitter:image",content:k}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),E&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),E&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),O&&r.a.createElement("meta",{property:"og:url",content:O}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),O&&r.a.createElement("link",{rel:"canonical",href:O})),r.a.createElement(l.a,null),r.a.createElement(P,null),r.a.createElement("div",{className:"main-wrapper"},m),!d&&r.a.createElement(R,null)))}},278:function(e,t,a){"use strict";(function(e){var n=a(1),r=(a(276),a(277),a(78),a(79),a(287),a(0)),l=a.n(r),c=a(288),i=a.n(c),o=a(301),s=a(52),m=a(247),u=a.n(m),d=a(296),b=a(289),f=a.n(b),h=a(248),g=a(257),p=a(136),v=a.n(p);(void 0!==e?e:window).Prism=s.a,a(290),a(291),a(292),a(293),a(294),a(295);var E=/{([\d,-]+)}/,k=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,c=e.metastring,s=Object(h.a)().siteConfig.themeConfig.prism,m=void 0===s?{}:s,b=Object(r.useState)(!1),p=b[0],y=b[1],_=Object(r.useState)(!1),N=_[0],O=_[1];Object(r.useEffect)((function(){O(!0)}),[]);var w=Object(r.useRef)(null),j=Object(r.useRef)(null),C=[],T="",x=Object(g.a)().isDarkTheme,S=m.theme||d.a,P=m.darkTheme||S,L=x?P:S;if(c&&E.test(c)){var M=c.match(E)[1];C=f.a.parse(M).filter((function(e){return e>0}))}c&&k.test(c)&&(T=c.match(k)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return j.current&&(e=new i.a(j.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[j.current,w.current]);var I=a&&a.replace(/language-/,"");!I&&m.defaultLanguage&&(I=m.defaultLanguage);var D=function(){window.getSelection().empty(),y(!0),setTimeout((function(){return y(!1)}),2e3)};return l.a.createElement(o.a,Object(n.a)({},o.b,{key:N,theme:L,code:t.trim(),language:I}),(function(e){var t,a,r=e.className,c=e.style,i=e.tokens,o=e.getLineProps,s=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,T&&l.a.createElement("div",{style:c,className:v.a.codeBlockTitle},T),l.a.createElement("div",{className:v.a.codeBlockContent},l.a.createElement("button",{ref:j,type:"button","aria-label":"Copy code to clipboard",className:u()(v.a.copyButton,(t={},t[v.a.copyButtonWithTitle]=T,t)),onClick:D},p?"Copied":"Copy"),l.a.createElement("pre",{className:u()(r,v.a.codeBlock,(a={},a[v.a.codeBlockWithTitle]=T,a))},l.a.createElement("div",{ref:w,className:v.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=o({line:e,key:t});return C.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))})))}))))))}))}}).call(this,a(77))},280:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(249),i=a(278),o=a(259),s=a(141),m=a.n(s);t.a={code:function(e){var t=e.children;return"string"==typeof t?l.a.createElement(i.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:m.a.mdxCodeBlock},e))},h1:Object(o.a)("h1"),h2:Object(o.a)("h2"),h3:Object(o.a)("h3"),h4:Object(o.a)("h4"),h5:Object(o.a)("h5"),h6:Object(o.a)("h6")}},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(254);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);