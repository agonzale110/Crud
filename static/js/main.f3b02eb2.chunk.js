(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(30),a(16)),u=a(9),i=a(2),m=a(7),s=a(45),d=a(46),b=a(35),E=a(51),f=a(38),p=a(47),v=a(48),g=a(50);a(32);var h=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),h=Object(m.a)(l,2),N=h[0],j=h[1],x=Object(n.useState)([]),O=Object(m.a)(x,2),y=O[0],C=O[1],I=Object(n.useState)(null),w=Object(m.a)(I,2),S=w[0],k=w[1],z=Object(n.useState)({nombre:"",apellido:"",cedula:""}),A=Object(m.a)(z,2),F=A[0],B=A[1],D=function(){B({nombre:"",apellido:"",cedula:""})},J=function(e,t){B(function(a){return Object(i.a)({},a,Object(u.a)({},e,t))})},L=function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(e.id=a),j(function(t){return[].concat(Object(o.a)(t),[e])})},P=function(){var e=!1;return Object.keys(F).forEach(function(t){var a;"id"!==t&&(F[t]&&F[t].trim()||(a="".concat(t," es requerido"),C(function(e){return[].concat(Object(o.a)(e),[a])}),e=!0))}),!e},T=function(e){var t=N.filter(function(t){return t.id!==e});j(t),D(),k(null)};return r.a.createElement(s.a,{className:"mt-4 justify-content-center"},r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(b.a,{xs:8},r.a.createElement(E.a,{onSubmit:function(e){if(e.preventDefault(),C([]),S){if(!P())return;T(S),L(Object(i.a)({},F),S),k(null)}else{if(!P())return;L(F),c(a+1)}D()}},r.a.createElement(f.a,{controlId:"nombre",label:"Nombre",className:"mb-3"},r.a.createElement(E.a.Control,{type:"text",size:"md",onChange:function(e){return J("nombre",e.target.value)},placeholder:"Ingrese su nombre",value:F.nombre})),r.a.createElement(f.a,{controlId:"apellido",label:"Apellido",className:"mb-3"},r.a.createElement(E.a.Control,{type:"text",size:"md",onChange:function(e){return J("apellido",e.target.value)},placeholder:"Ingrese su apellido",value:F.apellido})),r.a.createElement(f.a,{controlId:"cedula",label:"Cedula",className:"mb-3"},r.a.createElement(E.a.Control,{type:"text",size:"md",onChange:function(e){return J("cedula",e.target.value)},placeholder:"Ingrese su cedula",value:F.cedula})),S?r.a.createElement(p.a,{variant:"primary w-100",type:"submit"},"Editar"):r.a.createElement(p.a,{variant:"primary w-100",type:"submit"},"Agregar"))),r.a.createElement(b.a,{xs:8,className:"mt-4"},r.a.createElement(v.a,{striped:!0,responsive:!0,hover:!0,variant:"light"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"Id"),r.a.createElement("th",{className:"text-center"},"Nombre"),r.a.createElement("th",{className:"text-center"},"Apellido"),r.a.createElement("th",{className:"text-center"},"Cedula"),r.a.createElement("th",{className:"text-center"},"Acciones"))),r.a.createElement("tbody",null,N.map(function(e){return r.a.createElement("tr",{key:e.id+1},r.a.createElement("td",{className:"text-center"},e.id),r.a.createElement("td",{className:"text-center"},e.nombre),r.a.createElement("td",{className:"text-center"},e.apellido),r.a.createElement("td",{className:"text-center"},e.cedula),r.a.createElement("td",{className:"text-center"},r.a.createElement(p.a,{className:"me-2",onClick:function(){var t;B(t=e),k(t.id)},variant:"outline-primary",size:"sm"},"Editar"),r.a.createElement(p.a,{onClick:function(){T(e.id)},variant:"outline-danger",size:"sm"},"Borrar")))}))),0!==y.length&&r.a.createElement(g.a,{className:"text-uppercase",variant:"danger"},y.join(", ")))))};a(40);var N=function(){return r.a.createElement(h,null)},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,49)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),j()}},[[22,3,2]]]);
//# sourceMappingURL=main.f3b02eb2.chunk.js.map