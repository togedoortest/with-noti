(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[41],{679:function(e,t,c){"use strict";c.r(t);var a=c(11),s=c(8),r=c.n(s),n=c(17),l=c(13),i=c(0),j=c(598),d=c(16),o=c(161),b=c(9),h=c(163),m=(c(250),c(33)),x=c.n(m),p=c(1),O=function(e){console.log(e.JobTitle);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"pb-3 pt-5 pt-4 pr-0  pl-5 ",children:[Object(p.jsx)("h6",{children:Object(p.jsx)("p",{children:e.JobTitle})}),Object(p.jsxs)("p",{className:"text-muted font-14",children:[Object(p.jsx)(d.a,{icon:o.a,className:"mr-2 text-primary"}),"Date posted : ",e.createdAt]})]}),Object(p.jsx)("td",{className:"pb-3 pt-5 pt-4 pr-0  pl-5 d-none d-md-table-cell",children:Object(p.jsx)("img",{style:{height:"70px",width:"120px",borderRadius:"5px"},src:"https://www.togedoortestgo.site/graphql/".concat(e.serviceImage),alt:"Cardcap",className:"image-fluid"})}),Object(p.jsx)("td",{className:"pb-3 pt-5  d-none d-sm-table-cell "}),Object(p.jsx)("td",{className:"pb-3 pt-5  pr-0  pl-4 pr-2",children:Object(p.jsxs)("ul",{className:"d-inline-flex pb-3 pt-5  pr-0  pl-4 pr-2 ",children:[Object(p.jsx)("li",{className:"mr-3",children:Object(p.jsx)(b.b,{to:{pathname:"/job/".concat(e._id)},children:Object(p.jsx)(d.a,{className:"font-14",icon:o.e})})}),Object(p.jsx)("li",{className:"mr-3",children:Object(p.jsx)(b.b,{to:{pathname:"/candidate/edit/".concat(e._id)},children:Object(p.jsx)(d.a,{className:"font-14",icon:o.c})})}),Object(p.jsx)("li",{className:"",children:Object(p.jsx)(d.a,{className:"font-14",icon:o.f,onClick:function(){var t;t=e._id,Object(h.confirmAlert)({title:"Confirm to delete project",message:"Are you sure to delete the project ?.",buttons:[{label:"Yes",onClick:function(){x.a.delete("https://www.togedoortestgo.site/graphql/services/".concat(t)).then((function(t){e.servicesAfterDelete(t.data),console.log(t.data)})).catch((function(e){console.log(e)}))}},{label:"No"}]})}})})]})})]})})},u=c(60),f=c(522),N=c(523),g=c(524),v=function(){return Object(p.jsxs)(f.a,{"aria-label":"Page navigation example justify-content-center",children:[Object(p.jsx)(N.a,{disabled:!0,className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",previous:!0,href:"#"})}),Object(p.jsx)(N.a,{active:!0,className:"mr-2",children:Object(p.jsx)(g.a,{className:"bg-primary border-primary",href:"#",children:"1"})}),Object(p.jsx)(N.a,{className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",href:"#",children:"2"})}),Object(p.jsx)(N.a,{className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",href:"#",children:"3"})}),Object(p.jsx)(N.a,{className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",href:"#",children:"..."})}),Object(p.jsx)(N.a,{className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",href:"#",children:"6"})}),Object(p.jsx)(N.a,{className:"mr-2",children:Object(p.jsx)(g.a,{className:"text-dark",next:!0,href:"#"})})]})};c(597),t.default=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],d=u.a.getState().auth.user;Object(i.useEffect)((function(){function e(){return(e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://www.togedoortestgo.site/graphql/services");case 2:t=e.sent,s(t.data.sort((function(e,t){return e.createdAt<t.createdAt?1:-1})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=function(e){s(e)};return Object(p.jsxs)(p.Fragment,{children:[c&&d?Object(p.jsxs)(j.a,{hover:!0,className:"manage-job-table",children:[Object(p.jsx)("thead",{className:"bg-primary text-white",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"py-4 pl-5",children:"Project title"}),Object(p.jsx)("th",{className:"d-none d-md-table-cell   py-4 pr-6 text-center",children:"Image"}),Object(p.jsx)("th",{className:" d-none d-sm-table-cell py-4 p-0 text-center "}),Object(p.jsx)("th",{className:"py-4 pl-5 text-center",children:"Action"})]})}),Object(p.jsx)("tbody",{className:" border mb-30",children:c&&d&&c.filter((function(e){return e.userID===d.id})).map((function(e,t){return Object(p.jsx)(O,Object(a.a)(Object(a.a)({},e),{},{servicesAfterDelete:o}),t)}))})]}):Object(p.jsx)("div",{children:"Loading..."}),Object(p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=41.4ae505a6.chunk.js.map