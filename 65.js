"use strict";(self.webpackChunkmytheresa=self.webpackChunkmytheresa||[]).push([[65],{8585:(e,t,n)=>{n.d(t,{F:()=>o});var i=n(8648),r=(n(2043),i.Z.create({responseType:"json",baseURL:"https://api.themoviedb.org/3/"}));r.interceptors.request.use((function(e){return e.headers.Authorization="bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU1NjE2NzAzOWUwMzY2ODUwYjE3YTZkZThjZDg4NCIsInN1YiI6IjViMzNmYzgxMGUwYTI2M2ZmMzAxYzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kHNS5tjs0dPYD9MVcQB4gXnV3ouKnt4JitxQaNmVbUo"),e}));var o=function(e,t){return r(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"==typeof e?{method:e}:e}(t))}},1629:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(3379),r=n.n(i),o=n(7795),a=n.n(o),A=n(569),c=n.n(A),s=n(3565),l=n.n(s),m=n(9216),u=n.n(m),d=n(4589),f=n.n(d),v=n(4919),p={};p.styleTagTransform=f(),p.setAttributes=l(),p.insert=c().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u();r()(v.Z,p);v.Z&&v.Z.locals&&v.Z.locals;var g=n(5893);const h=function(e){var t=e.imageUrl;return(0,g.jsx)("div",{className:"movie-backdrop-image",style:{backgroundImage:t&&'url("http://image.tmdb.org/t/p/w500/'.concat(t,'")')}})}},1231:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(6893),r=n(9503),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=t*(10*e/100);return n},a=new Intl.NumberFormat(void 0,{style:"currency",currency:"BRL"}),A=function(e){return a.format(e)},c=n(3379),s=n.n(c),l=n(7795),m=n.n(l),u=n(569),d=n.n(u),f=n(3565),v=n.n(f),p=n(9216),g=n.n(p),h=n(4589),b=n.n(h),y=n(980),x={};x.styleTagTransform=b(),x.setAttributes=v(),x.insert=d().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=g();s()(y.Z,x);y.Z&&y.Z.locals&&y.Z.locals;var j=n(5893);const w=function(e){var t,n,a,c,s=e.movieDetail,l=e.showDescription,m=void 0===l||l,u=e.showRevenue,d=void 0===u||u,f=e.showExternalSite,v=void 0===f||f,p=e.movieAction,g=(t=s.budget,n=s.revenue,0===t||0===n?0:100*(1-t/n)).toFixed(2);return(0,j.jsxs)("div",{className:"movie-information",children:[(0,j.jsxs)("div",{className:"title",children:[(0,j.jsx)("h2",{children:s.title}),p]}),(0,j.jsxs)("ul",{className:"list-info",children:[(0,j.jsxs)("li",{className:"date",children:[(0,j.jsx)(i.vlc,{}),(0,j.jsx)("h4",{children:(a=s.release_date,c=new Date(a),[c.getDate(),c.getMonth()+1,c.getFullYear()].join("/"))})]}),(0,j.jsxs)("li",{className:"ratio",children:[(0,j.jsx)(r.Z,{rating:o(s.vote_average),numberOfStars:5,starRatedColor:"#f39c12",starSpacing:"1px",starDimension:"16px"}),(0,j.jsx)("h4",{children:"".concat(s.vote_average," (").concat(s.vote_count,")")})]})]}),m&&(0,j.jsx)("div",{className:"description",children:(0,j.jsx)("p",{children:s.overview})}),d&&(0,j.jsxs)("ul",{className:"list-info",children:[(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{children:"Budget"}),(0,j.jsx)("h4",{children:A(s.budget)})]}),(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{children:"Revenue"}),(0,j.jsxs)("h4",{children:[A(s.revenue),(0,j.jsx)("span",{className:g>0?"pos-revenue":"neg-revenue",children:" (".concat(g>0?"+".concat(g):g,"%)")})]})]})]}),v&&(0,j.jsx)("div",{className:"external-site",children:(0,j.jsx)("a",{href:s.homepage,target:"_blank",children:s.homepage})})]})}},8227:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(5893);const r=function(e){var t=e.posterUrl;e.fadeProps;return(0,i.jsx)("div",{className:"movie-post-image",children:(0,i.jsx)("img",{src:t&&"http://image.tmdb.org/t/p/w500/".concat(t)})})}},6968:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(3106),r=n(5893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=["children"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m=function(e){var t=e.children,n=l(e,a);return(0,r.jsx)(i.E.div,c(c({initial:{opacity:0},animate:{opacity:1},transition:{duration:.5}},n),{},{children:t}))}},3724:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(3106),r=n(5893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=["children"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m=function(e){var t=e.children,n=l(e,a);return(0,r.jsx)(i.E.div,c(c({initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5}},n),{},{children:t}))}},7691:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var i=n(7294),r=n(9250),o=n(4593),a=n(1379),A=n(221),c=n(8585),s=(n(8949),n(4511),n(9170),n(445),n(3379)),l=n.n(s),m=n(7795),u=n.n(m),d=n(569),f=n.n(d),v=n(3565),p=n.n(v),g=n(9216),h=n.n(g),b=n(4589),y=n.n(b),x=n(375),j={};j.styleTagTransform=y(),j.setAttributes=p(),j.insert=f().bind(null,"head"),j.domAPI=u(),j.insertStyleElement=h();l()(x.Z,j);x.Z&&x.Z.locals&&x.Z.locals;var w=n(3793),O=n(6195),Z=n(8227),B=n(1629),Y=n(1231),P=n(3724),E=n(6968),N=n(5808),S=n(5893),G={slideUp:{y:0,opacity:1}},I={enter:{opacity:1}};const D=function(e){var t=e.movie,n=e.category,o=e.isActive,a=(0,r.s0)(),A=(0,w._)(),c=(0,w._)();return(0,i.useEffect)((function(){o&&(A.start("slideUp"),c.start("enter"))}),[o]),(0,S.jsxs)("div",{className:"movie-slide",children:[(0,S.jsx)(B.Z,{imageUrl:t.backdrop_path}),(0,S.jsxs)("div",{className:"movie-content",children:[(0,S.jsx)(P.Z,{variants:G,animate:A,transition:{duration:.5,delay:.5},children:(0,S.jsx)(Z.Z,{posterUrl:t.poster_path})}),(0,S.jsx)(E.Z,{variants:I,animate:c,transition:{duration:.5,delay:.8},children:(0,S.jsx)(Y.Z,{movieDetail:t,showRevenue:!1,showExternalSite:!1,movieAction:(0,S.jsx)(N.Z,{variant:"contained",onClick:function(){return a((0,O.L)("/detail/".concat(n.toLowerCase(),"/").concat(t.id)))},className:"more-info-btn",children:"More info"})})})]})]})};function M(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}const U=function(e){var t=e.category,n=(0,o.ZP)((function(e){return"movie/".concat(String(t).replace("-","_").toLowerCase(),"?").concat(new URLSearchParams({page:e+1}))}),c.F),r=n.data,s=n.isValidating,l=n.size,m=n.setSize,u=(0,i.useMemo)((function(){var e;return r?(e=[]).concat.apply(e,M(r.map((function(e){return e.data.results})))):[]}),[r]);return(0,S.jsx)(A.tq,{slidesPerView:1,pagination:{clickable:!0},navigation:!0,modules:[a.tl,a.W_,a.gI],grabCursor:!0,effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},onSlideChange:function(e){e.activeIndex!==u.length-2||s||m(l+1)},className:"movie-slider",children:u.map((function(e){return(0,S.jsx)(A.o5,{children:function(n){var i=n.isActive;return(0,S.jsx)(D,{movie:e,category:t,isActive:i})}},e.id)}))})};var k=n(8249),Q=n(3932),R={};R.styleTagTransform=y(),R.setAttributes=p(),R.insert=f().bind(null,"head"),R.domAPI=u(),R.insertStyleElement=h();l()(Q.Z,R);Q.Z&&Q.Z.locals&&Q.Z.locals;const z=function(){var e=(0,r.TH)().search;return(0,i.useEffect)((function(){var t=e.slice(1).toUpperCase();if(e&&e.startsWith("?")&&Object.keys(k.Z).indexOf(t)>=0){var n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}}),[e]),(0,S.jsxs)("div",{className:"home-container",children:[(0,S.jsx)("div",{className:"movie-section",id:k.Z.POPULAR,children:(0,S.jsx)(U,{category:k.Z.POPULAR})}),(0,S.jsx)("div",{className:"movie-section",id:k.Z["TOP-RATED"],children:(0,S.jsx)(U,{category:k.Z["TOP-RATED"]})}),(0,S.jsx)("div",{className:"movie-section",id:k.Z.UPCOMING,children:(0,S.jsx)(U,{category:k.Z.UPCOMING})})]})}},4919:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(8081),r=n.n(i),o=n(3645),a=n.n(o)()(r());a.push([e.id,".movie-backdrop-image{background-position:center;background-repeat:no-repeat;background-size:cover}",""]);const A=a},980:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(8081),r=n.n(i),o=n(3645),a=n.n(o)()(r());a.push([e.id,".movie-information{width:100%;color:#eaeef4;padding:16px 24px 40px 24px}.movie-information h2,.movie-information h4,.movie-information p{margin:0}.movie-information .title{margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:spacing(1)}.movie-information .list-info{margin:0;padding:0}.movie-information .list-info .date,.movie-information .list-info .ratio{display:flex;flex-direction:row;align-items:center;display:inline-flex;gap:8px}.movie-information .list-info li{list-style:none;display:inline-block;margin:0px 16px 16px 0px}.movie-information .list-info li h4{margin-top:8px}.movie-information .list-info li h4 .pos-revenue{color:#27ae60}.movie-information .list-info li h4 .neg-revenue{color:#c0392b}.movie-information .external-site a{color:#eaeef4}.movie-information .date-ratio-info,.movie-information .description,.movie-information .amount-values{margin-bottom:16px}",""]);const A=a},375:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(8081),r=n.n(i),o=n(3645),a=n.n(o)()(r());a.push([e.id,".movie-slider .swiper-button-prev,.movie-slider .swiper-button-next{color:#eaeef4}.movie-slider .swiper-pagination-bullet-active{background-color:#eaeef4}.movie-slider .movie-slide{width:100%;height:100vh;height:calc(var(--vh, 1vh)*100);display:flex;flex-direction:row;align-items:center;display:flex;flex-direction:row;justify-content:center;position:relative}.movie-slider .movie-slide .movie-backdrop-image{position:absolute;top:0;right:0;bottom:0;left:0;filter:blur(5px);-webkit-filter:blur(5px);backdrop-filter:blur(5px)}.movie-slider .movie-slide .movie-content{z-index:10;width:100%}.movie-slider .movie-slide .movie-content .movie-post-image{display:flex;flex-direction:row;align-items:center;display:flex;flex-direction:row;justify-content:center}.movie-slider .movie-slide .movie-content .movie-post-image img{max-height:70%;max-width:70%}.movie-slider .movie-slide .movie-content .movie-information{position:absolute;bottom:0;right:0;left:0;background:rgba(0,0,0,.7);color:#fff;padding-top:24px}@media screen and (max-width: 430px){.movie-slider .movie-slide .movie-content .movie-information{padding-bottom:96px}.movie-slider .movie-slide .movie-content .movie-information .more-info-btn{position:absolute;width:calc(100% - 60px);bottom:40px}}",""]);const A=a},3932:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(8081),r=n.n(i),o=n(3645),a=n.n(o)()(r());a.push([e.id,".home-container{overflow-y:scroll;scroll-snap-type:y mandatory}.home-container,.home-container .movie-section{height:100vh;height:calc(var(--vh, 1vh)*100)}.home-container .movie-section{scroll-snap-align:center}",""]);const A=a},9954:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"}}]);