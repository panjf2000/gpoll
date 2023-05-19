(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),o=(t(0),t(242)),i={last_modified_on:"2023-05-19",$schema:"/.meta/.schemas/highlights.json",title:"Release candidate for gnet v2.3.0",description:"The first release candidate for gnet v2.3.0",author_github:"https://github.com/panjf2000",pr_numbers:["b493107"],release:"2.3.0-RC1",hide_on_release_notes:!1,tags:["type: tag","domain: v2.3.0-rc.1"]},c={date:"2023-05-19T00:00:00.000Z",description:"The first release candidate for gnet v2.3.0",permalink:"/highlights/2023-05-19-release-candidate-for-gnet-v2-3-0",readingTime:"2 min read",source:"@site/highlights/2023-05-19-release-candidate-for-gnet-v2-3-0.md",tags:[{label:"type: tag",permalink:"/highlights/tags/type-tag"},{label:"domain: v2.3.0-rc.1",permalink:"/highlights/tags/domain-v-2-3-0-rc-1"}],title:"Release candidate for gnet v2.3.0",truncated:!1,nextItem:{title:"Release of gnet v2.0.0",permalink:"/highlights/2022-02-27-release-of-gnet-v2"}},l=[{value:"Intro",id:"intro",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"intro"},"Intro"),Object(o.b)("p",null,"The two major updates in this release candidate are ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/460"}),"#460")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/461"}),"#461"),"."),Object(o.b)("p",null,"We introduced a new data structure ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," in #460 to displace the default ",Object(o.b)("inlineCode",{parentName:"p"},"map")," for managing connections internally, with the help of this new data structure, we can significantly reduce GC (Garbage Collection) latency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"goos: darwin\ngoarch: arm64\npkg: github.com/panjf2000/gnet/v2\n                                    \u2502     old      \u2502                 new                  \u2502\n                                    \u2502    sec/op    \u2502    sec/op     vs base                \u2502\nGC4El100k/Run-4-eventloop-100000-10    30.74m \xb1 3%   19.68m \xb1 10%  -35.98% (p=0.000 n=10)\nGC4El200k/Run-4-eventloop-200000-10    63.64m \xb1 3%   38.16m \xb1 11%  -40.04% (p=0.000 n=10)\nGC4El500k/Run-4-eventloop-500000-10   177.28m \xb1 8%   95.21m \xb1  4%  -46.29% (p=0.000 n=10)\ngeomean                                70.26m        41.51m        -40.92%\n\n                                    \u2502     old     \u2502                new                 \u2502\n                                    \u2502    B/op     \u2502    B/op      vs base               \u2502\nGC4El100k/Run-4-eventloop-100000-10   27.50 \xb1 35%   25.50 \xb1 33%       ~ (p=0.423 n=10)\nGC4El200k/Run-4-eventloop-200000-10   27.50 \xb1 53%   20.50 \xb1 66%       ~ (p=0.642 n=10)\nGC4El500k/Run-4-eventloop-500000-10   16.00 \xb1   ?   18.00 \xb1   ?       ~ (p=0.357 n=10)\ngeomean                               22.96         21.11        -8.04%\n\n                                    \u2502     old      \u2502                 new                 \u2502\n                                    \u2502  allocs/op   \u2502 allocs/op   vs base                 \u2502\nGC4El100k/Run-4-eventloop-100000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\nGC4El200k/Run-4-eventloop-200000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\nGC4El500k/Run-4-eventloop-500000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\ngeomean                                          \xb2               +0.00%                \xb2\n\xb9 all samples are equal\n\xb2 summaries must be >0 to compute geomean\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The more connections there are, the more pronounced the effect.")),Object(o.b)("p",null,"While we have performed sufficient testing on ",Object(o.b)("inlineCode",{parentName:"p"},"matrix"),", we are still using ",Object(o.b)("inlineCode",{parentName:"p"},"map")," as the default connection storage in this RC version for the sake of caution, but you can enable the new data structure by specifying build tags: -tags=gc_opt. This can be considered as a precautionary measure so that in case ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," has any unexpected bugs, you can quickly fall back to the default ",Object(o.b)("inlineCode",{parentName:"p"},"map"),". We will consider promoting ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," to be the default storage for connections in a subsequent official release."),Object(o.b)("p",null,"Another significant leap is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/461"}),"#461"),", you can now run ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," on Windows, it should be noted that the Windows version of ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," is intended for development purposes and is not recommended for use in production."),Object(o.b)("p",null,"Please visit ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/releases/tag/v2.3.0-rc.1"}),"Gnet v2.3.0 RC1")," for more details."))}s.isMDXComponent=!0},242:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(d,c({ref:n},p,{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);