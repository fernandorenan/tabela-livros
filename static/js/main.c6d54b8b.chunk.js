(this["webpackJsonptabela-livros"]=this["webpackJsonptabela-livros"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),i=(n(12),n(4)),a=n(5),l=n(7),d=n(6),j=n(0),u=function(e){return Object(j.jsxs)("div",{className:"container-setinhas",children:[Object(j.jsx)("div",{onClick:function(){return e.ordCresc()},children:"\ud83e\udc45"}),Object(j.jsx)("div",{onClick:function(){return e.ordDesc()},children:"\ud83e\udc47"})]})},h=function(e){return Object(j.jsxs)("thead",{children:[Object(j.jsx)("tr",{children:Object(j.jsx)("th",{colSpan:"4",children:"Tabela de Livros"})}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("th",{children:["ISBN ",Object(j.jsx)(u,{ordCresc:e.ordenarCrescente,ordDesc:e.ordenarDescrescente})]}),Object(j.jsxs)("th",{children:["T\xedtulo ",Object(j.jsx)(u,{ordCresc:e.ordenarCrescente,ordDesc:e.ordenarDescrescente})]}),Object(j.jsxs)("th",{children:["Autor ",Object(j.jsx)(u,{ordCresc:e.ordenarCrescente,ordDesc:e.ordenarDescrescente})]}),Object(j.jsx)("th",{})]})]})},b=function(e){return Object(j.jsx)("button",{className:"botao remover",onClick:function(){return e.delecao(e.livroid)},children:"Remover"})},v=function(e){return Object(j.jsx)("tbody",{children:e.livros.map((function(t,n){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:t.titulo}),Object(j.jsx)("td",{children:t.autor}),Object(j.jsx)("td",{children:Object(j.jsx)(b,{delecao:e.removerLinha,livroid:t.id})})]},t.id)}))})},O=function(e){return Object(j.jsx)("tfoot",{children:Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{colSpan:"4",children:["Quantidade de Livros na tabela: ",e.livros.length]})})})},f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={livros:[]},e.handleRemoverLinha=function(t){var n=e.state.livros.filter((function(e){return e.id!==t}));e.setState({livros:n})},e.handleOrdenarCrescente=function(t){var n=e.state.livros.sort((function(e,t){return e.titulo<t.titulo?-1:0}));e.setState({livros:n})},e.handleOrdenarDecrescente=function(t){var n=e.state.livros.sort((function(e,t){return e.titulo<t.titulo?-1:0}));n.reverse(),e.setState({livros:n})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fernandorenan.github.io/tabela-livros/api/livros.json").then((function(e){return e.json()})).then((function(t){return e.setState({livros:t})})).catch((function(e){console.log("Erro na requisi\xe7\xe3o")})).finally((function(){console.log("Sempre retorna")}))}},{key:"render",value:function(){return Object(j.jsxs)("table",{className:"tabela",children:[Object(j.jsx)(h,{ordenarCrescente:this.handleOrdenarCrescente,ordenarDescrescente:this.handleOrdenarDecrescente}),Object(j.jsx)(O,{livros:this.state.livros}),Object(j.jsx)(v,{livros:this.state.livros,removerLinha:this.handleRemoverLinha})]})}}]),n}(r.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.c6d54b8b.chunk.js.map