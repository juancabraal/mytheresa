"use strict";(self.webpackChunkmytheresa=self.webpackChunkmytheresa||[]).push([[272],{8585:(e,t,i)=>{i.d(t,{F:()=>r});var n=i(8648),o=(i(2043),n.Z.create({responseType:"json",baseURL:"https://api.themoviedb.org/3/"}));o.interceptors.request.use((function(e){return e.headers.Authorization="bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU1NjE2NzAzOWUwMzY2ODUwYjE3YTZkZThjZDg4NCIsInN1YiI6IjViMzNmYzgxMGUwYTI2M2ZmMzAxYzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kHNS5tjs0dPYD9MVcQB4gXnV3ouKnt4JitxQaNmVbUo"),e}));var r=function(e,t){return o(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"==typeof e?{method:e}:e}(t))}},1629:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(3379),o=i.n(n),r=i(7795),a=i.n(r),s=i(569),l=i.n(s),c=i(3565),m=i.n(c),d=i(9216),u=i.n(d),p=i(4589),v=i.n(p),h=i(4919),f={};f.styleTagTransform=v(),f.setAttributes=m(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u();o()(h.Z,f);h.Z&&h.Z.locals&&h.Z.locals;var g=i(5893);const b=function(e){var t=e.imageUrl;return(0,g.jsx)("div",{className:"movie-backdrop-image",style:{backgroundImage:t&&'url("http://image.tmdb.org/t/p/w500/'.concat(t,'")')}})}},1231:(e,t,i)=>{i.d(t,{Z:()=>O});var n=i(6893),o=i(9503),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=t*(10*e/100);return i},a=new Intl.NumberFormat(void 0,{style:"currency",currency:"BRL"}),s=function(e){return a.format(e)},l=i(3379),c=i.n(l),m=i(7795),d=i.n(m),u=i(569),p=i.n(u),v=i(3565),h=i.n(v),f=i(9216),g=i.n(f),b=i(4589),y=i.n(b),x=i(980),j={};j.styleTagTransform=y(),j.setAttributes=h(),j.insert=p().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=g();c()(x.Z,j);x.Z&&x.Z.locals&&x.Z.locals;var w=i(5893);const O=function(e){var t,i,a,l,c=e.movieDetail,m=e.showDescription,d=void 0===m||m,u=e.showRevenue,p=void 0===u||u,v=e.showExternalSite,h=void 0===v||v,f=e.movieAction,g=(t=c.budget,i=c.revenue,0===t||0===i?0:100*(1-t/i)).toFixed(2);return(0,w.jsxs)("div",{className:"movie-information",children:[(0,w.jsxs)("div",{className:"title",children:[(0,w.jsx)("h2",{children:c.title}),f]}),(0,w.jsxs)("ul",{className:"list-info",children:[(0,w.jsxs)("li",{className:"date",children:[(0,w.jsx)(n.vlc,{}),(0,w.jsx)("h4",{children:(a=c.release_date,l=new Date(a),[l.getDate(),l.getMonth()+1,l.getFullYear()].join("/"))})]}),(0,w.jsxs)("li",{className:"ratio",children:[(0,w.jsx)(o.Z,{rating:r(c.vote_average),numberOfStars:5,starRatedColor:"#f39c12",starSpacing:"1px",starDimension:"16px"}),(0,w.jsx)("h4",{children:"".concat(c.vote_average," (").concat(c.vote_count,")")})]})]}),d&&(0,w.jsx)("div",{className:"description",children:(0,w.jsx)("p",{children:c.overview})}),p&&(0,w.jsxs)("ul",{className:"list-info",children:[(0,w.jsxs)("li",{children:[(0,w.jsx)("p",{children:"Budget"}),(0,w.jsx)("h4",{children:s(c.budget)})]}),(0,w.jsxs)("li",{children:[(0,w.jsx)("p",{children:"Revenue"}),(0,w.jsxs)("h4",{children:[s(c.revenue),(0,w.jsx)("span",{className:g>0?"pos-revenue":"neg-revenue",children:" (".concat(g>0?"+".concat(g):g,"%)")})]})]})]}),h&&(0,w.jsx)("div",{className:"external-site",children:(0,w.jsx)("a",{href:c.homepage,target:"_blank",children:c.homepage})})]})}},8227:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(5893);const o=function(e){var t=e.posterUrl;e.fadeProps;return(0,n.jsx)("div",{className:"movie-post-image",children:(0,n.jsx)("img",{src:t&&"http://image.tmdb.org/t/p/w500/".concat(t)})})}},6968:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(3106),o=i(5893);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var a=["children"];function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const d=function(e){var t=e.children,i=m(e,a);return(0,o.jsx)(n.E.div,l(l({initial:{opacity:0},animate:{opacity:1},transition:{duration:.5}},i),{},{children:t}))}},3724:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(3106),o=i(5893);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var a=["children"];function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const d=function(e){var t=e.children,i=m(e,a);return(0,o.jsx)(n.E.div,l(l({initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5}},i),{},{children:t}))}},8581:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var n=i(7294),o=i(9583),r=i(9250),a=i(5591),s=i(8585),l=i(8249),c=i(6195),m=i(1231),d=i(8227),u=i(3724),p=i(1629),v=i(6968),h=i(5808),f=i(2730),g=i(3379),b=i.n(g),y=i(7795),x=i.n(y),j=i(569),w=i.n(j),O=i(3565),Z=i.n(O),S=i(9216),N=i.n(S),P=i(4589),k=i.n(P),I=i(3026),E={};E.styleTagTransform=k(),E.setAttributes=Z(),E.insert=w().bind(null,"head"),E.domAPI=x(),E.insertStyleElement=N();b()(I.Z,E);I.Z&&I.Z.locals&&I.Z.locals;var D=i(3106),z=i(5893);const T=function(e){var t=e.children;return(0,z.jsx)(D.E.div,{className:"box",whileHover:{scale:1.2},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17},children:t})};const A=function(){var e=(0,n.useContext)(f.v),t=e.addItemToList,i=e.removeItemFromList,g=e.isItemInList,b=(0,r.UO)(),y=b.category,x=b.id,j=Object.keys(l.Z),w=(0,r.s0)(),O=(0,a.ZP)("movie/".concat(x),s.F).data,Z=(0,n.useMemo)((function(){return(null==O?void 0:O.data)||{}}),[O]);(0,n.useEffect)((function(){j.includes(String(y).toUpperCase())||w((0,c.L)("/not-found"))}),[y]);var S=g(Z.id);return(0,z.jsxs)("div",{className:"movie-detail movie-".concat(y,"-detail"),children:[(0,z.jsx)(v.Z,{children:(0,z.jsx)(p.Z,{imageUrl:Z.backdrop_path})}),(0,z.jsxs)("div",{className:"movie-content",children:[(0,z.jsx)(u.Z,{transition:{duration:.5,delay:.5},children:(0,z.jsx)(d.Z,{posterUrl:Z.poster_path})}),(0,z.jsx)(u.Z,{transition:{duration:.5,delay:.8},children:(0,z.jsx)(m.Z,{movieDetail:Z,movieAction:(0,z.jsx)(T,{children:(0,z.jsx)(h.Z,{onClick:function(){return S?i(Z.id):t(Z,y)},className:"wish-button",children:S?(0,z.jsx)(o.$0H,{fontSize:25,className:"wish-added"}):(0,z.jsx)(o.BgW,{fontSize:25,className:"wish-add"})})})})})]})]})}},1224:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(7294),o=i(9250),r=i(9583),a=i(9520),s=i(3106),l=i(5893);const c=function(e){var t=e.children,i=n.Children.toArray(t);return(0,l.jsx)(a.M,{mode:"sync",children:n.Children.map(i,(function(e){return(0,l.jsx)(s.E.div,{layout:!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring"},children:e},e.props.movieId)}))})};var m=i(5808),d=i(1231),u=i(8227),p=i(2730),v=i(6195),h=i(3379),f=i.n(h),g=i(7795),b=i.n(g),y=i(569),x=i.n(y),j=i(3565),w=i.n(j),O=i(9216),Z=i.n(O),S=i(4589),N=i.n(S),P=i(68),k={};k.styleTagTransform=N(),k.setAttributes=w(),k.insert=x().bind(null,"head"),k.domAPI=b(),k.insertStyleElement=Z();f()(P.Z,k);P.Z&&P.Z.locals&&P.Z.locals;const I=function(){var e=(0,n.useContext)(p.v),t=e.wishList,i=e.removeItemFromList,a=(0,o.s0)();return(0,l.jsxs)("div",{className:"wish-list-container",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h2",{children:"Wish List"})}),(0,l.jsx)("div",{className:"list-container",children:(0,l.jsx)(c,{children:t.map((function(e){return(0,l.jsxs)("div",{className:"movie-item",movieId:e.id,children:[(0,l.jsx)(m.Z,{className:"movie-post-button",onClick:function(){return a((0,v.L)("/detail/".concat(e.category,"/").concat(e.id)))},children:(0,l.jsx)(u.Z,{posterUrl:e.poster_path})}),(0,l.jsx)(d.Z,{movieDetail:e,movieAction:(0,l.jsx)(m.Z,{className:"wish-button",onClick:function(){return i(e.id)},children:(0,l.jsx)(r.$0H,{fontSize:25,className:"wish-added"})}),showDescription:!1,showExternalSite:!1,showRevenue:!1})]},e.id)}))})})]})}},4919:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),o=i.n(n),r=i(3645),a=i.n(r)()(o());a.push([e.id,".movie-backdrop-image{background-position:center;background-repeat:no-repeat;background-size:cover}",""]);const s=a},980:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),o=i.n(n),r=i(3645),a=i.n(r)()(o());a.push([e.id,".movie-information{width:100%;color:#eaeef4;padding:16px 24px 40px 24px}.movie-information h2,.movie-information h4,.movie-information p{margin:0}.movie-information .title{margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:spacing(1)}.movie-information .list-info{margin:0;padding:0}.movie-information .list-info .date,.movie-information .list-info .ratio{display:flex;flex-direction:row;align-items:center;display:inline-flex;gap:8px}.movie-information .list-info li{list-style:none;display:inline-block;margin:0px 16px 16px 0px}.movie-information .list-info li h4{margin-top:8px}.movie-information .list-info li h4 .pos-revenue{color:#27ae60}.movie-information .list-info li h4 .neg-revenue{color:#c0392b}.movie-information .external-site a{color:#eaeef4}.movie-information .date-ratio-info,.movie-information .description,.movie-information .amount-values{margin-bottom:16px}",""]);const s=a},3026:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),o=i.n(n),r=i(3645),a=i.n(r)()(o());a.push([e.id,'.movie-detail{position:relative;height:100%;background:#000;overflow-y:auto}.movie-detail .movie-backdrop-image{height:50vh;height:calc(var(--vh, 1vh)*50);width:100%;position:relative}.movie-detail .movie-backdrop-image:before{content:" ";width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)}.movie-detail .movie-content{padding-top:100px;position:absolute;top:0;bottom:0;height:100%;width:100%;z-index:2;display:flex;flex-direction:column;align-items:center}.movie-detail .movie-content .wish-button{margin-right:-16px}.movie-detail .movie-content .wish-button .wish-added{color:#c0392b}.movie-detail .movie-content .movie-post-image{height:50vh;height:calc(var(--vh, 1vh)*50)}@media screen and (max-width: 487px){.movie-detail .movie-content .movie-post-image{margin:0px 32px}}.movie-detail .movie-content .movie-post-image img{max-height:100%;max-width:100%}.movie-popular-detail h2,.movie-popular-detail p,.movie-popular-detail h4{font-family:"Inter",sans-serif}.movie-top-rated-detail h2,.movie-top-rated-detail p,.movie-top-rated-detail h4{font-family:"Poppins",sans-serif}',""]);const s=a},68:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),o=i.n(n),r=i(3645),a=i.n(r)()(o());a.push([e.id,".wish-list-container{padding:40px 32px;padding-top:100px}.wish-list-container .title h2{margin:0px 0px 24px}.wish-list-container .list-container{display:flex;flex-direction:column;gap:16px}.wish-list-container .movie-item{border:1px solid rgba(0,0,0,.1);border-radius:5px;padding:16px;display:flex}@media screen and (max-width: 472px){.wish-list-container .movie-item{flex-direction:column}}.wish-list-container .movie-item .movie-post-image{height:200px}.wish-list-container .movie-item .movie-post-image img{height:100%}.wish-list-container .movie-item .movie-post-button,.wish-list-container .movie-item .movie-information .title button{padding:0}.wish-list-container .movie-item .movie-information h2,.wish-list-container .movie-item .movie-information h4,.wish-list-container .movie-item .movie-information svg,.wish-list-container .movie-item .movie-information p{margin:0;color:#000}",""]);const s=a}}]);