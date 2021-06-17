(this["webpackJsonpmy-react-project-template"]=this["webpackJsonpmy-react-project-template"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(16),s=c.n(n),i=c(7),l=c(14),j=c(2),o=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,id:e.id,planet:e.origin.name,episode:e.episode,status:e.status}}))}))},h=c(0),u=function(e){return Object(h.jsxs)("article",{children:[Object(h.jsx)(i.b,{to:"./characterDetail/".concat(e.character.id),children:Object(h.jsx)("img",{className:"imgCharacter",src:e.character.image,alt:e.character.name,title:e.character.name})}),Object(h.jsx)("h3",{children:e.character.name}),Object(h.jsx)("p",{children:e.character.species})]})},m=function(e){var t=e.characters.map((function(e){return Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(u,{character:e})},e.id)}));return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{className:"characterCard",children:t})})},d=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"name"}),Object(h.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Buscar por nombre",name:"name",id:"name",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})},b=function(e){return Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"formWrap",children:Object(h.jsx)(d,{filterName:e.filterName,handleFilter:e.handleFilter})})},f=Object(h.jsx)("i",{className:"fas fa-user"}),O=Object(h.jsx)("i",{className:"fab fa-reddit-alien"}),p=function(e){return"human"===e.toLowerCase()?f:O},x=function(e){var t=e.character.species;return Object(h.jsxs)("section",{className:"characterDetailWrap",children:[Object(h.jsxs)(i.b,{to:"/",className:"linkBack",children:[Object(h.jsx)("i",{className:"fas fa-angle-left iconBack"})," Volver"]}),Object(h.jsxs)("article",{className:"characterDetail",children:[Object(h.jsx)("img",{className:"imgCharacter",src:e.character.image,alt:e.character.name}),Object(h.jsxs)("div",{className:"characterData",children:[Object(h.jsx)("h4",{children:e.character.name}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Especie: ",e.character.species]}),p(t)]}),Object(h.jsxs)("p",{children:["Planeta de origen: ",e.character.planet]}),Object(h.jsxs)("p",{children:["Episodios: ",e.character.episode.length]}),Object(h.jsxs)("p",{children:["Status: ",e.character.status]})]})]})]})},g={get:function(e){var t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},N=function(){return Object(h.jsxs)("main",{children:[Object(h.jsx)("p",{className:"notFoundText",children:"El personaje que buscas no existe"}),Object(h.jsxs)(i.b,{to:"/",className:"linkBack",children:[" ",Object(h.jsx)("i",{className:"fas fa-angle-left iconBack"})," Volver"]})]})},v=c.p+"static/media/Rick&MortyLogo.de13d484.png";c(28);var k=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),s=Object(l.a)(n,2),i=s[0],u=s[1];Object(a.useEffect)((function(){o().then((function(e){r(e)}))}),[]),Object(a.useEffect)((function(){g.set("characters",c)}),[c]),Object(a.useEffect)((function(){g.set("filterName",i)}),[i]);var d=c.filter((function(e){return e.name.toUpperCase().includes(i.toUpperCase())}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"headerLogo",children:Object(h.jsx)("img",{className:"imgLogo",src:v,alt:"Rick and Morty logo",title:"Rick and Morty logo"})}),Object(h.jsx)("main",{children:Object(h.jsxs)(j.c,{children:[Object(h.jsxs)(j.a,{exact:!0,path:"/",children:[Object(h.jsx)(b,{filterName:i,handleFilter:function(e){if("name"===e.key)u(e.value);else if("name"!==e.key)return Object(h.jsxs)("p",{children:["No hay ning\xfan personaje que coincida con ",e.value]})}}),Object(h.jsx)(m,{characters:d})]}),Object(h.jsx)(j.a,{path:"/characterdetail/:id",render:function(e){var t=e.match.params.id,a=c.find((function(e){return e.id===parseInt(t)}));return a?Object(h.jsx)(x,{character:a}):Object(h.jsx)(N,{})}})]})})]})};c(29);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(k,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.792b1c26.chunk.js.map