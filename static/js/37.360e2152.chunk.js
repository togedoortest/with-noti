(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[37],{467:function(e,t,a){"use strict";var c=a(13),r=a(0),s=a(438),o=a(449),n=a(477),l=a(152),i=a(450),j=a(16),b=a(161),d=a(682),m=a(654),x=a(439),h=a(655),p=a(656),O=a(9),g=a(1),u=function(e){var t=e.modal,a=e.toggle,c=e.children,r=e.to,s=e.title;return Object(g.jsxs)(d.a,{isOpen:t,toggle:a,className:"mt-13",children:[Object(g.jsxs)(m.a,{tag:"h6",toggle:a,className:"border-0",children:[Object(g.jsx)(j.a,{className:"text-primary mr-1",icon:b.c}),Object(g.jsx)("span",{className:"  text-dark",children:s})]}),Object(g.jsxs)(x.a,{children:[c&&Object(g.jsx)(h.a,{children:c}),Object(g.jsxs)(p.a,{className:"border-0 justify-content-start",children:[Object(g.jsx)(l.a,{color:"primary",onClick:a,children:"Save Updates"})," ",Object(g.jsx)(O.b,{to:r||"#",className:"text-primary",onClick:a,children:"cancel"})," "]})]})]})},f=a(247),v=a(248),y=a(244),N=a(160),w=function(e){var t=function(t){t.persist(),e.setUserBasicInfo(t.target.value,t.target.name)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampetext",sm:3,children:"First name :"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"text",name:"firstName",id:"exampleEmail",placeholder:"Please insert your first name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampetext",sm:3,children:"Last name :"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"text",name:"lastName",id:"exampleEmail",placeholder:"Please insert your last name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampetext",sm:3,children:"Job title :"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"text",name:"jobTitle",id:"exampleEmail",placeholder:"Please insert your job title",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampleEmail",sm:3,children:"Location :"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"text",name:"location",id:"exampleEmail",onChange:t,placeholder:"Please insert your location",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})]})},S=function(e){console.log(e);return Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampleText",sm:3,children:"Write Yourself:"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"textarea",name:"aboutMe",id:"exampleText",placeholder:"Write YourSelf",className:"border-top-0 border-left-0 border-right-0 boder-bottom",onChange:function(t){t.persist(),e.setUserAboutMe(t.target.value,t.target.name)}})})]})},C=function(){return Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampleEmail",sm:3,children:"Video Link :"}),Object(g.jsx)(y.a,{sm:9,children:Object(g.jsx)(N.a,{type:"text",name:"videolink",id:"exampleEmail",placeholder:"Youtube Url Or Browse Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})},F=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampleText",sm:3,children:"Gallery 01:"}),Object(g.jsxs)(y.a,{sm:9,children:[Object(g.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(g.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(g.jsx)(v.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(g.jsx)(N.a,{type:"file",name:"file",id:"exampleFile"})]})]}),Object(g.jsxs)(f.a,{row:!0,children:[Object(g.jsx)(v.a,{for:"exampleText",sm:3,children:"Gallery 02:"}),Object(g.jsxs)(y.a,{sm:9,children:[Object(g.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(g.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(g.jsx)(v.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(g.jsx)(N.a,{type:"file",name:"file",id:"exampleFile"})]})]})]})};t.a=function(e){var t=e.title,a=e.action,d=e.children,m=e.className,x=e.modalName,h=Object(r.useState)(!1),p=Object(c.a)(h,2),O=p[0],f=p[1],v=function(){return f(!O)},y=Object(r.useState)("Write Yourself:"),N=Object(c.a)(y,2),k=(N[0],N[1],function(t,a){e.setAboutMe(t,a)});return Object(g.jsxs)(s.a,{className:"".concat(m&&m),children:[Object(g.jsxs)(o.a,{tag:"h6",className:"d-flex justify-content-between align-items-center bg-primary",children:[Object(g.jsx)(n.a,{className:"m-0 text-white p-2",children:t}),a&&Object(g.jsxs)(l.a,{size:"sm",onClick:v,className:"btn-icon text-white",color:"link",children:["basic"===x&&Object(g.jsx)(u,{modal:O,toggle:v,title:"basic information",children:Object(g.jsx)(w,{setUserBasicInfo:k})}),"about"===x&&Object(g.jsx)(u,{modal:O,toggle:v,title:"About us",children:Object(g.jsx)(S,{setUserAboutMe:k})}),"videoLink"===x&&Object(g.jsx)(u,{modal:O,toggle:v,title:"Intro video",children:Object(g.jsx)(C,{})}),"gallery"===x&&Object(g.jsx)(u,{modal:O,toggle:v,title:"Intro video",children:Object(g.jsx)(F,{})}),Object(g.jsx)(j.a,{icon:b.c})]})]}),d&&Object(g.jsx)(i.a,{children:d})]})}},691:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(61),s=a(11),o=a(8),n=a.n(o),l=a(17),i=a(13),j=a(439),b=a(247),d=a(248),m=a(160),x=a(436),h=a(244),p=a(152),O=a(467),g=a(36),u=(a(118),a(33)),f=a.n(u),v=a(60),y=a(1),N=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.serviceID,a=Object(c.useState)([]),o=Object(i.a)(a,2),g=o[0],u=o[1],N=Object(c.useState)([]),w=Object(i.a)(N,2),S=w[0],C=w[1],F=Object(c.useState)(""),k=Object(i.a)(F,2),I=k[0],E=k[1],T=Object(c.useState)(""),A=Object(i.a)(T,2),J=A[0],L=A[1],P=Object(c.useState)(""),q=Object(i.a)(P,2),D=q[0],U=q[1],M=(v.a.getState(),Object(c.useState)("")),W=Object(i.a)(M,2),Y=W[0],B=W[1],G=Object(c.useState)({}),_=Object(i.a)(G,2),z=_[0],R=_[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(n.a.mark((function e(){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://www.togedoortestgo.site/graphql/services/".concat(t));case 3:a=e.sent,c=a.data,R(c),U(c.serviceImage),f.a.get("https://www.togedoortestgo.site/graphql/subCategories/".concat(c.subCategoryID)).then((function(e){console.log(e.data.name),E(e.data.name)})),f.a.get("https://www.togedoortestgo.site/graphql/categories/name/".concat(c.categoryName.split(" ").join("-"))).then((function(e){C(e.data.subcategories)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(e){var t=new FormData;J?(t.append("file",J),console.log(J),t.append("service",JSON.stringify(z)),f.a.patch("https://www.togedoortestgo.site/graphql/services/editServiceWithFile",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))):(console.log(z),console.log("editServiceNoFile"),t.append("service",JSON.stringify(z)),f.a.patch("https://www.togedoortestgo.site/graphql/services/editServiceNoFile",t).then((function(e){console.log(e),console.log("editServiceNoFile"),console.log(e.data)})).catch((function(e){console.log(e)})))},H=function(e){e.persist(),R(Object(s.a)(Object(s.a)({},z),{},Object(r.a)({},e.target.name,e.target.value))),console.log(z)};Object(c.useEffect)((function(){var e="";f.a.get("https://www.togedoortestgo.site/graphql/categories").then((function(t){e=t.data,u(e)}))}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.togedoortestgo.site/graphql/categories/name/".concat(Y.split(" ").join("-")));case 2:t=e.sent,C(t.data.subcategories),R(Object(s.a)(Object(s.a)({},z),{},{subCategoryID:t.data.subcategories[0]._id}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Y]);return Object(y.jsx)(y.Fragment,{children:z?Object(y.jsx)(O.a,{title:"Edit project",className:"mb-5",children:Object(y.jsxs)(j.a,{onSubmit:V,children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{for:"exampleSelect1",children:"Project category"}),Object(y.jsx)(m.a,{type:"select",value:z.categoryName,name:"categoryName",id:"exampleSelect1",onChange:function(e){e.persist(),R(Object(s.a)(Object(s.a)({},z),{},Object(r.a)({},e.target.name,e.target.value))),B(e.target.value),console.log(z)},children:g.map((function(e,t){return Object(y.jsx)("option",{children:e.name})}))})]}),Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{for:"exampleSelect1",children:"Sub category"}),Object(y.jsx)(m.a,{type:"select",value:I,name:"subCategoryID",id:"exampleSelect1",onChange:function(e){e.persist();var t=S.filter((function(t){return t.name===e.target.value}));R(Object(s.a)(Object(s.a)({},z),{},Object(r.a)({},e.target.name,t[0]._id))),E(e.target.value),console.log(z)},children:S.map((function(e,t){return Object(y.jsx)("option",{children:e.name},t)}))})]}),Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{for:"exampleEmail1",children:"Project title"}),Object(y.jsx)(m.a,{type:"text",value:z.JobTitle,name:"JobTitle",onChange:H})]}),Object(y.jsxs)(x.a,{form:!0,children:[Object(y.jsx)(h.a,{md:12,children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{for:"exampleSelect3",children:"Price"}),Object(y.jsx)(m.a,{type:"number",value:z.Salary,name:"Salary",onChange:H})]})}),Object(y.jsxs)(h.a,{md:12,children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{for:"exampleSelect3",className:"form-label",children:"About this project"}),Object(y.jsx)("textarea",{type:"text",className:"form-control",name:"description",value:z.description,rows:"5",onChange:H})]}),Object(y.jsxs)(d.a,{for:"exampleSelect3",className:"form-label",children:[" ","PROJECT IMAGE:"," "]})]}),Object(y.jsx)(h.a,{md:12,children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(m.a,{type:"file",name:"serviceImage",className:"custom-file-input",id:"customFile",onChange:function(e){L(e.target.files[0]),U(e.target.files[0].name),console.log(e.target.files[0]),console.log(e.target.files[0].name),console.log(e.target.name),R(Object(s.a)(Object(s.a)({},z),{},Object(r.a)({},e.target.name,e.target.files[0].name))),console.log(z)}}),Object(y.jsx)(d.a,{for:"customFile",name:"serviceImage",className:"custom-file-label",htmlFor:"customFile",children:D})]})}),Object(y.jsx)(h.a,{md:12,children:Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(p.a,{type:"submit",color:"primary",href:"/candidate/manage",lassName:"outline-hover--effect ",onClick:V,children:"Edit project"})})})]})]})}):Object(y.jsx)("div",{children:"Loading..."})})}));t.default=function(e){var t=e.match.params.serviceID;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(N,{serviceID:t,history:history})})}}}]);
//# sourceMappingURL=37.360e2152.chunk.js.map