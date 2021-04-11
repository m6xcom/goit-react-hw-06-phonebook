(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={form:"ContactForm_form__2Rofv",addContactBtn:"ContactForm_addContactBtn__31clS"}},29:function(t,e,n){t.exports={title:"Filter_title__2yCVP"}},32:function(t,e,n){t.exports={contactsListItem:"ContactsList_contactsListItem__26k2H"}},48:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var c,r,a=n(0),o=n.n(a),u=n(12),s=n.n(u),i=n(6),l=(n(48),n(8)),b=n(2),f=n(4),j=n(33),d=n(3),O=Object(b.b)("contacts/addContactRequest"),p=Object(b.b)("contacts/addContactSuccess"),h=Object(b.b)("contacts/addContactError"),m=Object(b.b)("contacts/fetchContactRequest"),v=Object(b.b)("contacts/fetchContactSuccess"),x=Object(b.b)("contacts/fetchContactError"),C=Object(b.b)("contacts/deleteContactRequest"),g=Object(b.b)("contacts/deleteContactSuccess"),y=Object(b.b)("contacts/deleteContactError"),w=Object(b.b)("contacts/filterChange"),k=Object(b.c)([],(c={},Object(f.a)(c,v,(function(t,e){return e.payload})),Object(f.a)(c,x,(function(t,e){var n=e.payload;console.log(n)})),Object(f.a)(c,p,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(f.a)(c,h,(function(t,e){var n=e.payload;console.log(n)})),Object(f.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),_=Object(b.c)("",Object(f.a)({},w.type,(function(t,e){return e.payload}))),L=Object(b.c)("",(r={},Object(f.a)(r,O,(function(){return!0})),Object(f.a)(r,p,(function(){return!1})),Object(f.a)(r,h,(function(){return!1})),Object(f.a)(r,m,(function(){return!0})),Object(f.a)(r,v,(function(){return!1})),Object(f.a)(r,x,(function(){return!1})),Object(f.a)(r,C,(function(){return!0})),Object(f.a)(r,g,(function(){return!1})),Object(f.a)(r,y,(function(){return!1})),r)),F=Object(d.c)({items:k,filter:_,loading:L}),N=Object(b.a)({reducer:{contacts:F},devTools:!1,middleware:Object(b.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})}),S=n(9),R=n.n(S),B=n(7),E=n.n(B),I=n(14),q=n(10),A=n.n(q);A.a.defaults.baseURL="http://localhost:4040";var D=n(13),J=function(t){return t.contacts.filter},M=function(t){return t.contacts.items},P=Object(D.a)([J,M],(function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),T=n(18),z=n.n(T),H=n(1),U=Object(i.b)((function(t){return{contacts:M(t)}}),(function(t){return{addContact:function(e){return t(function(t){return function(){var e=Object(I.a)(E.a.mark((function e(n){var c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O()),e.prev=1,e.next=4,A.a.post("/contacts",t);case 4:return c=e.sent,e.next=7,c.data;case 7:r=e.sent,n(p(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(h(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))((function(t){var e=t.contacts,n=t.addContact,c=R.a.generate(),r=R.a.generate();return Object(H.jsxs)("form",{className:z.a.form,onSubmit:function(t){t.preventDefault(),e.every((function(e){return e.name.toLowerCase()!==t.target.children.name.value.toLowerCase()}))?n({id:R.a.generate(),name:t.target.children.name.value,number:t.target.children.number.value}):alert("".concat(t.target.children.name.value," is already in contacts.")),t.target.reset()},children:[Object(H.jsx)("label",{htmlFor:c,children:"Name"}),Object(H.jsx)("input",{id:c,name:"name",type:"text"}),Object(H.jsx)("label",{htmlFor:r,children:"Number"}),Object(H.jsx)("input",{id:r,name:"number",type:"tel"}),Object(H.jsx)("button",{className:z.a.addContactBtn,type:"submit",children:"Add contact"})]})})),V=n(29),G=n.n(V),K=Object(i.b)(null,(function(t){return{filterChange:function(e){return t(w(e))}}}))((function(t){var e=t.filterChange,n=R.a.generate();return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("label",{className:G.a.title,htmlFor:n,children:"Find contacts by name"}),Object(H.jsx)("input",{id:n,type:"text",onChange:function(t){e(t.target.value.toLowerCase())},name:"filter"})]})})),Q=n(30),W=n(31),X=n(35),Y=n(34),Z=n(32),$=n.n(Z),tt=function(t){Object(X.a)(n,t);var e=Object(Y.a)(n);function n(){var t;Object(Q.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).componentDidMount=function(){(0,t.props.fetchContacts)()},t}return Object(W.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter,c=t.deleteContact;return Object(H.jsx)("ul",{children:e.filter((function(t){return t.name.toLowerCase().includes(n)})).map((function(t){return Object(H.jsxs)("li",{className:$.a.contactsListItem,children:[Object(H.jsxs)("p",{children:[t.name," : ",t.number]}),Object(H.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"})]},t.id)}))})}}]),n}(a.Component),et=Object(i.b)((function(t){return{contacts:P(t),filter:J(t)}}),(function(t){return{deleteContact:function(e){return t((n=e,function(){var t=Object(I.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,A.a.delete("/contacts/".concat(n));case 4:e(g(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(y(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n},fetchContacts:function(){return t(function(){var t=Object(I.a)(E.a.mark((function t(e){var n,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,A.a.get("/contacts");case 4:return n=t.sent,t.next=7,n.data;case 7:c=t.sent,e(v(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e(x(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())}}}))(tt),nt=(n(77),function(){return Object(H.jsxs)("div",{className:"wrapper",children:[Object(H.jsx)("h2",{children:"Phonebook"}),Object(H.jsx)(U,{}),Object(H.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),Object(H.jsx)(K,{}),Object(H.jsx)(et,{})]})});s.a.render(Object(H.jsx)(o.a.StrictMode,{children:Object(H.jsx)(i.a,{store:N,children:Object(H.jsx)(nt,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.98fb0794.chunk.js.map