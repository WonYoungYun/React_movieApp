(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),i=n.n(s),o=(n(17),n(1)),c=n.n(o),l=n(4),m=n(5),u=n(6),v=n(9),p=n(7),f=n(10),d=(n(21),n(23),n(8)),_=n.n(d),g=function(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"movie_poster"})},h=function(e){return e.genres.map(function(e,t){return r.a.createElement(E,{genre:e,key:t})})},E=function(e){var t=e.genre;return r.a.createElement("span",{className:"movie_genre"},t)},y=function(e){var t=e.title,n=e.poster,a=e.genres,s=e.synopsis;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie_columns"},r.a.createElement(g,{poster:n,alt:t})),r.a.createElement("div",{className:"movie_columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"movie_genres"},r.a.createElement(h,{genres:a})),r.a.createElement("div",{className:"movie_synodivsis"},r.a.createElement(_.a,{text:s,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},b=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={},n.__renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(y,{title:e.title,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n.__getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.__callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n.__callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.__getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App-loading"},this.state.movies?this.__renderMovies():"Loading...")}}]),t}(a.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.a3a5be29.chunk.js.map