"use strict";(self.webpackChunkmytheresa=self.webpackChunkmytheresa||[]).push([[896],{2378:(e,t,i)=>{i.d(t,{F:()=>m});var n=i(8648),r=(i(2043),i(6042)),o=function(e,t){var i=t||"Error desconhecido. Tente novamente depois.",n=e&&e.response&&e.response.data&&e.response.data.messages;return Array.isArray(n)?Array.from(n).join("<br />"):"string"==typeof n?n:i},a=n.Z.create({responseType:"json",baseURL:"https://api.themoviedb.org/3/",validateStatus:function(e){return e>=200&&e<400}});function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}a.interceptors.request.use((function(e){return e.headers.Authorization="bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU1NjE2NzAzOWUwMzY2ODUwYjE3YTZkZThjZDg4NCIsInN1YiI6IjViMzNmYzgxMGUwYTI2M2ZmMzAxYzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kHNS5tjs0dPYD9MVcQB4gXnV3ouKnt4JitxQaNmVbUo"),e})),function(e){e.interceptors.response.use(void 0,(function(e){console.log("error",e);var t,i,n,a,s=e.config,c=s.failureNotification;if(c){var l=c.message;t={id:"".concat(s.baseUrl).concat(s.url),type:"error",message:o(e,l)},i=t.id,n=t.message,a=t.type,(0,r.Am)(n,{toastId:i,position:r.Am.POSITION.TOP_RIGHT,autoClose:5e3,pauseOnHover:!0,type:a,closeButton:!0})}return Promise.reject(e)}))}(a);var m=function(e){return function(t,i){return a(t,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"==typeof e?{method:e}:e}(l(l({},i),{},{failureNotification:e})))}}},1679:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(7294),r=i(3757),o=i(9250),a=i(2378),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=t*(10*e/100);return i},c=i(6195),l=i(9503),d=i(5808),m=i(9257),u=i(221),A=(i(8949),i(445),i(5893));const v=function(e){var t=e.children,i=n.Children.toArray(t);return(0,A.jsx)(u.tq,{slidesPerView:4,spaceBetween:24,navigation:!0,pagination:{clickable:!0},modules:[m.W_],breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:24},1024:{slidesPerView:4,spaceBetween:24}},children:n.Children.map(i,(function(e){return(0,A.jsx)(u.o5,{children:e},e.props.movieid)}))})};i(9170);const f=function(e){var t=e.children,i=n.Children.toArray(t);return(0,A.jsx)(u.tq,{spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},modules:[m.pt,m.tl],children:n.Children.map(i,(function(e){return(0,A.jsx)(u.o5,{children:e},e.props.movieid)}))})};var p=i(6631),g=function(e){var t=e.isSingle,i=e.movieList,n=e.onItemClicked;return t?(0,A.jsx)(f,{children:i.map((function(e){return(0,A.jsx)(d.Z,{className:"movie-item",style:{backgroundImage:'url("http://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'")')},onClick:function(){return n(e)},movieid:e.id,children:(0,A.jsx)("div",{className:"movie-title",children:e.title})},e.id)}))}):(0,A.jsx)(v,{children:i.map((function(e){return(0,A.jsx)(d.Z,{className:"movie-item",style:{backgroundImage:'url("http://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'")')},onClick:function(){return n(e)},movieid:e.id,children:(0,A.jsxs)("div",{className:"movie-info",children:[(0,A.jsx)("div",{className:"title",children:(0,A.jsx)("h4",{children:e.title||e.name})}),(0,A.jsxs)("div",{className:"date-star-rating",children:[(0,A.jsx)("p",{children:(t=e.release_date||e.first_air_date,i=new Date(t),[i.getDate(),i.getMonth()+1,i.getFullYear()].join("/"))}),(0,A.jsx)(l.Z,{rating:s(e.vote_average),numberOfStars:5,starSpacing:"1px",starRatedColor:"white",starEmptyColor:"rgba(255,255,255, 0.5)",starDimension:"13px"})]})]})},e.id);var t,i}))})};const h=function(e){var t=e.category,i=e.endpoint,s=e.customMovieList,l=e.isSingle,d=void 0!==l&&l,m=e.itemCount,u=e.errorMessage,v=(0,o.s0)(),f=(0,r.ZP)(i,(0,a.F)({message:u})),h=f.data,y=f.isValidating,b=(0,n.useMemo)((function(){var e,t=Array.from((null==h||null===(e=h.data)||void 0===e?void 0:e.results)||s||[]);return m?t.slice(0,m):t}),[h,s]);return(0,A.jsx)("div",{children:y?(0,A.jsx)(p.Z,{}):(0,A.jsx)(g,{isSingle:d,movieList:b,onItemClicked:function(e){v((0,c.L)("/detail/".concat(t||e.category,"/").concat(e.id)))}})})}},6631:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(9016),r=i(3379),o=i.n(r),a=i(7795),s=i.n(a),c=i(569),l=i.n(c),d=i(3565),m=i.n(d),u=i(9216),A=i.n(u),v=i(4589),f=i.n(v),p=i(624),g={};g.styleTagTransform=f(),g.setAttributes=m(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=A();o()(p.Z,g);p.Z&&p.Z.locals&&p.Z.locals;var h=i(5893);const y=function(){return(0,h.jsx)("div",{className:"loading",children:(0,h.jsx)("img",{src:n.$})})}},8249:(e,t,i)=>{i.d(t,{Z:()=>n});const n={DISCOVER:"DISCOVER",TRENDING:"TRENDING","TOP-RATED":"TOP-RATED"}},9280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var n=i(7294),r=i(1871),o=i(9250),a=i(3757),s=i(9887),c=i(9520),l=i(2378),d=i(8249),m=i(6195),u=i(5893);const A=function(e){var t=e.posterUrl;return(0,u.jsx)("div",{className:"movie-post-image",children:(0,u.jsx)("img",{src:t&&"http://image.tmdb.org/t/p/w500/".concat(t)})})};var v=i(3106);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["children","animationKey"];function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){y(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function y(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function b(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var x={visible:{y:0,opacity:1},hidden:{y:30,opacity:0}};const j=function(e){var t=e.children,i=e.animationKey,n=b(e,p);return(0,u.jsx)(v.E.div,h(h({initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.5},variants:x},n),{},{children:t}),i)};var w=i(5808),O=i(2730);const N=function(e){var t=e.children;return(0,u.jsx)(v.E.div,{className:"box",whileHover:{scale:1.2},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17},children:t})};var B=i(3379),Z=i.n(B),Y=i(7795),E=i.n(Y),P=i(569),S=i.n(P),D=i(3565),C=i.n(D),I=i(9216),M=i.n(I),G=i(4589),L=i.n(G),k=i(3658),T={};T.styleTagTransform=L(),T.setAttributes=C(),T.insert=S().bind(null,"head"),T.domAPI=E(),T.insertStyleElement=M();Z()(k.Z,T);k.Z&&k.Z.locals&&k.Z.locals;function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o,a,s=[],c=!0,l=!1;try{if(o=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;c=!1}else for(;!(c=(n=o.call(i)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{if(!c&&null!=i.return&&(a=i.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}const Q=function(e){var t=e.title,i=e.children,r=R((0,n.useState)(!0),2),o=r[0],a=r[1];return(0,u.jsxs)("div",{className:"accordion",children:[(0,u.jsxs)(v.E.button,{whileTap:{scale:.97},onClick:function(){return a(!o)},animate:o?"open":"closed",className:"accordion-title",children:[t,(0,u.jsx)(v.E.div,{variants:{open:{rotate:180},closed:{rotate:0}},transition:{duration:.2},style:{originY:.55},children:(0,u.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 20 20",children:(0,u.jsx)("path",{d:"M0 7 L 20 7 L 10 16"})})})]}),(0,u.jsx)(c.M,{initial:!1,children:o&&(0,u.jsx)(v.E.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:i},"content")})]})};const z=function(e){var t=e.endpoint,i=e.children,r=e.defaultReturn,o=void 0===r?{}:r,s=e.errorMessage,c=(0,a.ZP)(t,(0,l.F)({message:s})).data;return i((0,n.useMemo)((function(){return(null==c?void 0:c.data)||o}),[c]))};var U=i(1679),K=i(2602),V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",n=Array.from(e).sort((function(e,t){return t.popularity-e.popularity}));return i&&(n=n.filter((function(e,t,n){return n.findIndex((function(t){return t[i]===e[i]}))===t}))),n.slice(0,t)};const J=function(e){var t=e.infoList,i=e.itemDescription,n=e.count,r=void 0===n?5:n,o=e.uniqueBy;return(0,u.jsx)("ul",{children:V(t||[],r,o).map((function(e){return(0,u.jsx)("li",{children:i(e)},e.id)}))})};var H=i(6631),W=(i(6776),i(3026)),q={};q.styleTagTransform=L(),q.setAttributes=C(),q.insert=S().bind(null,"head"),q.domAPI=E(),q.insertStyleElement=M();Z()(W.Z,q);W.Z&&W.Z.locals&&W.Z.locals;function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o,a,s=[],c=!0,l=!1;try{if(o=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;c=!1}else for(;!(c=(n=o.call(i)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{if(!c&&null!=i.return&&(a=i.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}const $=function(){var e=(0,s.$G)(),t=e.t,i=e.i18n,v=(0,n.useContext)(O.v),f=v.addItemToList,p=v.removeItemFromList,g=v.isItemInList,h=(0,o.UO)(),y=h.category,b=h.id,x=(0,o.s0)(),B=X((0,K.B)(),1)[0]<=1024,Z="language=".concat(i.resolvedLanguage),Y=(0,a.ZP)("movie/".concat(b,"?").concat(Z),(0,l.F)({message:t("movieDetailFailure")})),E=Y.data,P=Y.isLoading,S=(0,n.useMemo)((function(){return(null==E?void 0:E.data)||{}}),[E]);(0,n.useEffect)((function(){Object.keys(d.Z).includes(String(y).toUpperCase())||x((0,m.L)("/"))}),[y]);var D=g(S.id);return(0,u.jsx)(c.M,{children:P?(0,u.jsx)(H.Z,{}):(0,u.jsxs)("div",{className:"home-container movie-detail movie-".concat(y,"-detail"),children:[(0,u.jsxs)("div",{className:"movie-principal-info-container",children:[!B&&(0,u.jsx)(j,{animationKey:"Poster",transition:{duration:.5,delay:.3},children:(0,u.jsx)(A,{posterUrl:S.poster_path})}),(0,u.jsxs)("div",{className:"movie-content",children:[(0,u.jsx)(j,{animationKey:"Title",transition:{duration:.5,delay:.4},children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:S.title}),(0,u.jsx)(N,{children:(0,u.jsx)(w.Z,{onClick:function(){return D?p(S.id):f(S,y)},className:"wish-button",children:D?(0,u.jsx)(r.$0H,{fontSize:25,className:"wish-added"}):(0,u.jsx)(r.BgW,{fontSize:25,className:"wish-add"})})})]})}),(0,u.jsx)(j,{animationKey:"Genre",transition:{duration:.5,delay:.5},children:(0,u.jsx)("div",{className:"movie-info-list genre",children:(0,u.jsx)(J,{infoList:S.genres,itemDescription:function(e){return e.name}})})}),B&&(0,u.jsx)(j,{animationKey:"Poster",transition:{duration:.5,delay:.5},children:(0,u.jsx)(A,{posterUrl:S.poster_path})}),(0,u.jsx)(j,{animationKey:"sinopse",transition:{duration:.5,delay:.6},children:(0,u.jsx)("div",{className:"sinopse",children:(0,u.jsx)(Q,{title:t("movieDetailSinopse"),children:S.overview})})}),(0,u.jsx)(j,{animationKey:"Creators",transition:{duration:.5,delay:.7},children:(0,u.jsx)("div",{className:"movie-info-list",children:(0,u.jsx)(Q,{title:t("movieDetailCreators"),children:(0,u.jsx)(z,{endpoint:"/movie/".concat(b,"/credits?").concat(Z),errorMessage:t("movieDetailCreatorsFailure"),children:function(e){var t=e.crew;return(0,u.jsx)(J,{infoList:t,itemDescription:function(e){return"".concat(e.name," (").concat(e.department,")")}})}})})})}),(0,u.jsx)(j,{animationKey:"Stars",transition:{duration:.5,delay:.8},children:(0,u.jsx)("div",{className:"movie-info-list",children:(0,u.jsx)(Q,{title:t("movieDetailStars"),children:(0,u.jsx)(z,{endpoint:"/movie/".concat(b,"/credits?").concat(Z),errorMessage:t("movieDetailStarsFailure"),children:function(e){var t=e.cast;return(0,u.jsx)(J,{infoList:t,itemDescription:function(e){return"".concat(e.name," (").concat(e.character,")")}})}})})})})]})]}),(0,u.jsxs)("div",{className:"movie-content",children:[(0,u.jsx)(j,{animationKey:"reviews",transition:{duration:.5,delay:.9},children:(0,u.jsx)("div",{className:"movie-info-list review",children:(0,u.jsx)(Q,{title:t("movieDetailReviews"),children:(0,u.jsx)(z,{endpoint:"/movie/".concat(b,"/reviews?").concat(Z),errorMessage:t("movieDetailReviewersFailure"),children:function(e){var t=e.results;return(0,u.jsx)(J,{infoList:t,uniqueBy:"",count:2,itemDescription:function(e){return(0,u.jsxs)("div",{className:"review-item",children:[(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h4",{children:e.author})}),(0,u.jsx)("div",{className:"comment",children:e.content})]})}})}})})})}),(0,u.jsx)(j,{animationKey:"recommendations",transition:{duration:.5,delay:1},children:(0,u.jsxs)("div",{className:"movie-list-section",children:[(0,u.jsx)("div",{className:"list-title",children:t("movieDetailRecommendations")}),(0,u.jsx)(z,{endpoint:"/movie/".concat(b,"/recommendations?").concat(Z),defaultReturn:[],errorMessage:t("movieDetailRecommendationFailure"),children:function(e){var t=e.results;return(0,u.jsx)(U.Z,{category:y,customMovieList:t,endpoint:null,itemCount:5})}})]})})]})]})})}},6668:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(9887),r=i(1679),o=i(8249),a=(i(6776),i(5893));const s=function(){var e=(0,n.$G)(),t=e.t,i=e.i18n,s="language=".concat(i.resolvedLanguage);return(0,a.jsxs)("div",{className:"home-container",children:[(0,a.jsx)("div",{className:"movie-big-section",children:(0,a.jsx)(r.Z,{category:o.Z.DISCOVER.toLowerCase(),endpoint:"discover/movie?".concat(s),isSingle:!0,itemCount:5,errorMessage:t("movieListDiscoverFailure")})}),(0,a.jsxs)("div",{className:"movie-list-section",children:[(0,a.jsx)("div",{className:"list-title",children:t("homeSectionTrending")}),(0,a.jsx)(r.Z,{category:o.Z.TRENDING.toLowerCase(),endpoint:"movie/popular?".concat(s),itemCount:20,errorMessage:t("movieListPopularFailure")})]}),(0,a.jsxs)("div",{className:"movie-list-section",children:[(0,a.jsx)("div",{className:"list-title",children:t("homeSectionTopRated")}),(0,a.jsx)(r.Z,{category:o.Z["TOP-RATED"].toLowerCase(),endpoint:"movie/top_rated?".concat(s),itemCount:20,errorMessage:t("movieListTopRatedFailure")})]})]})}},8574:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var n=i(7294),r=i(9887),o=i(2730),a=i(1679),s=(i(6776),i(5893));const c=function(){var e=(0,r.$G)().t,t=(0,n.useContext)(o.v).wishList;return(0,s.jsx)("div",{className:"home-container",children:(0,s.jsxs)("div",{className:"movie-list-section",children:[(0,s.jsx)("div",{className:"list-title",children:e("wishListTitle")}),(0,s.jsx)(a.Z,{customMovieList:t,endpoint:null,itemCount:null})]})})}},3658:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),r=i.n(n),o=i(3645),a=i.n(o)()(r());a.push([e.id,".accordion-title{background-color:rgba(0,0,0,0);border:none;font-size:24px;width:100%;display:flex;justify-content:space-between;color:#fff;padding:8px 0px;border-bottom:1px solid #6b6b6b;font-weight:700;margin-bottom:16px}.accordion-title path{fill:#fff}",""]);const s=a},624:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),r=i.n(n),o=i(3645),a=i.n(o)()(r());a.push([e.id,".loading{padding:16px;max-width:100px;text-align:center;margin:0 auto}",""]);const s=a},3026:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),r=i.n(n),o=i(3645),a=i.n(o)()(r());a.push([e.id,".movie-detail,.movie-detail .movie-principal-info-container{display:flex;flex-direction:column;gap:24px}.movie-detail .movie-principal-info-container{flex-direction:row}.movie-detail .movie-info-list{color:#fff}.movie-detail .movie-info-list ul{margin:0;padding:0;display:flex;flex-direction:column;gap:16px}.movie-detail .movie-info-list ul li{list-style-type:none}.movie-detail .movie-post-image{flex:1}.movie-detail .movie-post-image img{width:100%}.movie-detail .movie-content{display:flex;flex-direction:column;gap:24px;width:100%}.movie-detail .movie-content .wish-button{margin-right:-16px}.movie-detail .movie-content .wish-button .wish-added{color:#c0392b}.movie-detail .movie-content .title{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:spacing(1)}.movie-detail .movie-content .title h2{margin:0}.movie-detail .movie-content .sinopse,.movie-detail .movie-content .title,.movie-detail .movie-content .movie-info-list{color:#fff}.movie-detail .movie-content .genre ul{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.movie-detail .movie-content .genre li{padding:8px;border:1px solid #fff;border-radius:8px}.movie-detail .movie-content .genre li:last-child{margin-right:0px}",""]);const s=a},3932:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(8081),r=i.n(n),o=i(3645),a=i.n(o)()(r());a.push([e.id,".home-container{height:100%;display:flex;flex-direction:column;gap:40px}.home-container .movie-big-section,.home-container .movie-list-section{width:100%}.home-container .movie-big-section .movie-item,.home-container .movie-list-section .movie-item{padding:0;width:100%;height:100%;position:relative;background-position:center;background-repeat:no-repeat;background-size:cover}.home-container .movie-big-section .swiper,.home-container .movie-big-section .movie-item,.home-container .movie-list-section .swiper,.home-container .movie-list-section .movie-item{overflow:hidden;border-radius:16px}.home-container .movie-big-section .swiper{height:350px}.home-container .movie-big-section .swiper .swiper-pagination{text-align:right;padding-right:24px}.home-container .movie-big-section .swiper .swiper-pagination .swiper-pagination-bullet{background-color:rgba(255,255,255,.3);width:16px;height:16px}.home-container .movie-big-section .swiper .swiper-pagination .swiper-pagination-bullet-active{background-color:#fff}.home-container .movie-big-section .movie-item .movie-title{padding:32px 24px;position:absolute;left:0;bottom:0;z-index:10;width:100%;font-weight:bold;font-size:24px;background:#000;color:#fff;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);text-align:left}.home-container .movie-list-section .list-title{margin-bottom:24px;color:#eaeef4;font-size:24px}.home-container .movie-list-section .swiper{height:288px}.home-container .movie-list-section .swiper-button-disabled{display:none}.home-container .movie-list-section .movie-info{display:none;position:absolute;bottom:0;left:0;padding:8px 16px;background-color:#171717;width:100%;text-align:left}.home-container .movie-list-section .movie-info h4,.home-container .movie-list-section .movie-info p{margin:0}.home-container .movie-list-section .movie-info .title{font-weight:700;font-size:14px;margin-bottom:8px}.home-container .movie-list-section .movie-info .date-star-rating{font-size:12px;display:flex;align-items:center;justify-content:space-between}.home-container .movie-list-section .movie-item{border-width:1px;border-style:solid;border-color:rgba(0,0,0,0)}.home-container .movie-list-section .movie-item:hover{border-color:#df0404}.home-container .movie-list-section .movie-item:hover .movie-info{display:block}",""]);const s=a},6776:(e,t,i)=>{var n=i(3379),r=i.n(n),o=i(7795),a=i.n(o),s=i(569),c=i.n(s),l=i(3565),d=i.n(l),m=i(9216),u=i.n(m),A=i(4589),v=i.n(A),f=i(3932),p={};p.styleTagTransform=v(),p.setAttributes=d(),p.insert=c().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u();r()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals},9954:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"}}]);