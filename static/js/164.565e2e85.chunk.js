"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{2164:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(8152),i=a(2791),c={container:"HomePage_container__+8deC",header:"HomePage_header__IO4NJ",item:"HomePage_item__pwdYU"},o=a(1523),r=a(1959),s=a(184);function d(){var e=(0,i.useState)(null),t=(0,n.Z)(e,2),a=t[0],d=t[1];return(0,i.useEffect)((function(){(0,r.Z)("trending").then((function(e){return e.data.results})).then(d)}),[]),(0,s.jsxs)("div",{className:c.container,children:[(0,s.jsx)("h1",{className:c.header,children:"Trending today"}),(0,s.jsx)("ul",{className:c.list,children:a&&a.map((function(e){return(0,s.jsx)("li",{className:c.item,children:(0,s.jsx)(o.rU,{className:c.item,to:"/movies/".concat(e.id),children:e.title?e.title:e.name})},e.id)}))})]})}},1959:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(4569),i=a.n(n),c="72b81a8bb303f29cc8e049d7d5cd52a0";function o(e,t){return"trending"===e?i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)):"movie"===e?i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)):"search"===e?i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t)):"cast"===e?i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US")):"review"===e?i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US")):void 0}}}]);
//# sourceMappingURL=164.565e2e85.chunk.js.map