"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{698:function(e,a,i){i.r(a),i.d(a,{default:function(){return f}});var t=i(8152),s=i(1523),c=i(9271),n=i(2791),o="MovieDetailsPage_container__VyXai",l="MovieDetailsPage_btn__oGTxV",r="MovieDetailsPage_wrapper__3wAUt",h="MovieDetailsPage_img__jzc+4",d="MovieDetailsPage_right__+R0z4",v="MovieDetailsPage_header__IMlk0",m="MovieDetailsPage_descr__oE9Cz",_="MovieDetailsPage_list__div34",p="MovieDetailsPage_link__ZE1Eo",u="MovieDetailsPage_activeLink__ukBb5 MovieDetailsPage_link__ZE1Eo",g=i(1959),x=i(184),j=(0,n.lazy)((function(){return i.e(900).then(i.bind(i,1900))})),k=(0,n.lazy)((function(){return i.e(457).then(i.bind(i,2457))}));function f(){var e=(0,c.UO)().movieId,a=(0,n.useState)(null),i=(0,t.Z)(a,2),f=i[0],b=i[1],N=(0,c.$B)().url,w=(0,c.k6)();(0,n.useEffect)((function(){(0,g.Z)("movie",e).then((function(e){return e.data})).then(b)}),[e]);return(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("button",{className:l,onClick:w.goBack,children:"Go back"}),f&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("img",{className:h,src:f.poster_path?"https://image.tmdb.org/t/p/w400".concat(f.poster_path):"http://placehold.it/300x400/808080&text=No_poster",alt:f.title?f.title:f.name}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsxs)("h1",{className:v,children:[f.title?f.title:f.name," (",f.release_date.slice(0,4),")"]}),(0,x.jsxs)("p",{className:m,children:["Popularity: ",f.popularity]}),(0,x.jsx)("h2",{className:v,children:"Overview"}),(0,x.jsx)("p",{className:m,children:f.overview}),(0,x.jsx)("h2",{className:v,children:"Genres"}),(0,x.jsx)("p",{className:m,children:f.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,x.jsx)("h2",{className:v,children:"Auditional information"}),(0,x.jsxs)("ul",{className:_,children:[(0,x.jsx)("li",{children:(0,x.jsx)(s.OL,{activeClassName:u,className:p,to:"".concat(N,"/cast"),children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(s.OL,{activeClassName:u,className:p,to:"".concat(N,"/reviews"),children:"Reviews"})})]})]}),(0,x.jsxs)(n.Suspense,{fallback:(0,x.jsx)("h1",{children:"loading..."}),children:[(0,x.jsx)(c.AW,{path:"/movies/:movieId/cast",children:(0,x.jsx)(j,{})}),(0,x.jsx)(c.AW,{path:"/movies/:movieId/reviews",children:(0,x.jsx)(k,{})})]})]})}},1959:function(e,a,i){i.d(a,{Z:function(){return n}});var t=i(4569),s=i.n(t),c="72b81a8bb303f29cc8e049d7d5cd52a0";function n(e,a){return"trending"===e?s().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)):"movie"===e?s().get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat(c)):"search"===e?s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(a)):"cast"===e?s().get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat(c,"&language=en-US")):"review"===e?s().get("https://api.themoviedb.org/3/movie/".concat(a,"/reviews?api_key=").concat(c,"&language=en-US")):void 0}}}]);
//# sourceMappingURL=698.55a6840f.chunk.js.map