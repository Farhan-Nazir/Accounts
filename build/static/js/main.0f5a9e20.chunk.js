(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(407)},218:function(e,t,a){},220:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},221:function(e,t,a){},401:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(218),a(20)),l=a(21),s=a(23),u=a(22),m=a(24),p=(a(220),a(221),a(412)),d=a(408),h=a(411),b=a(409),y=a(148),v=a(19),f=a(72),E=a.n(f),k=a(53),N=a.n(k),g=a(54),j=a.n(g),O=a(55),S=a.n(O),w=a(153),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={top:!1,left:!1,bottom:!1,right:!1},a.toggleDrawer=function(e,t){return function(){a.setState(Object(y.a)({},e,t))}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.NavItems,r=c.a.createElement("div",{className:a.list},c.a.createElement(N.a,null,n.map(function(t){return c.a.createElement(j.a,{button:!0,key:t.id,component:e.props.Component,to:t.link},c.a.createElement(S.a,{primary:t.name}))})));return c.a.createElement("div",null,c.a.createElement(w.a,{onClick:this.toggleDrawer("left",!0),style:{width:40,height:40,marginTop:"1em",color:"inherit",cursor:"pointer"}}),c.a.createElement(E.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},c.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},r)))}}]),t}(c.a.Component),A=Object(v.withStyles)({list:{width:250},fullList:{width:"auto"}})(C),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Main Screen")}}]),t}(n.Component),I=a(77),D=a(26),R=a(150),T=a.n(R),x=a(73),B=[{name:"Id",options:{filter:!1,sort:!0}},{name:"Type",options:{filter:!0,sort:!0}},{name:"Acc. No",options:{filter:!1,sort:!1}},{name:"Acc. Name",options:{filter:!0,sort:!1}},{name:"Currency",options:{filter:!0,sort:!1}},{name:"Balance",options:{filter:!1,sort:!1}},{name:"Status",options:{filter:!0,sort:!1}}],M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({data:Object(I.a)(x.data)})}},{key:"render",value:function(){var e=this,t={filter:!0,filterType:"multiSelect",responsive:"stacked",selectableRows:!1,rowHover:!0,onRowClick:function(t){return console.log(t[0]),e.props.ID(t[0])}},a=this.state.data.map(function(e){return[e.id,e.type,e.accountNo,e.accountName,e.currency,e.balance,e.status]});return c.a.createElement(T.a,{title:"Accounts List",data:a,columns:B,options:t})}}]),t}(n.Component),F=(a(401),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={id:1,data:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({data:Object(I.a)(x.data)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.id,r=Object.values(a);return console.log("Screen send",n),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"All Invoices For 2018"),c.a.createElement("div",{className:"data-table"},c.a.createElement(M,{ID:function(t){return e.setState({id:t})}})),c.a.createElement("div",{className:"detail-box"},c.a.createElement(D.a,null,c.a.createElement(D.c,{title:r[n-1].accountName}),c.a.createElement(D.b,null,"Type: ",r[n-1].type)),c.a.createElement(D.a,null,c.a.createElement(D.b,null,"Acc #: ",r[n-1].accountNo," "),c.a.createElement(D.b,null,"Status: ",r[n-1].status)),c.a.createElement(D.a,null,c.a.createElement(D.b,null,"Currency:",r[n-1].currency," "),c.a.createElement(D.b,null,"Balance: ",r[n-1].balance))))}}]),t}(n.Component));Object(p.a)(function(e){return c.a.createElement(G,e)});var G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={navItems:[{id:1,name:"Invoices",link:"/"},{id:1,name:"Main Screen",link:"/main"}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"menu_btn"},c.a.createElement(A,{NavItems:this.state.navItems,Component:d.a})),c.a.createElement(h.a,null,c.a.createElement(b.a,{exact:!0,path:"/",component:F}),c.a.createElement(b.a,{path:"/main",component:K})))}}]),t}(n.Component),W=Object(p.a)(G),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(W,null))}}]),t}(n.Component),J=a(410);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(J.a,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e){e.exports={data:[{id:1,accountNo:"3030032525",accountName:"Thomas Persson",type:"Savings",currency:"SEK",balance:"2,58525.00 kr",status:"Active"},{id:2,accountNo:"525010032525",accountName:"Erik Fors",type:"Checking",currency:"SEK",balance:"8,58525.00 kr",status:"Active"},{id:3,accountNo:"181802521",accountName:"Anna Gram",type:"Savings",currency:"SEK",balance:"85,000.00 kr",status:"Checking"},{id:4,accountNo:"3582546665",accountName:"Reham Karimi",type:"Checking",currency:"SEK",balance:"140,452.00 kr",status:"Active"},{id:5,accountNo:"3030032525",accountName:"Thomas Persson",type:"Savings",currency:"SEK",balance:"2,58525.00 kr",status:"Active"},{id:6,accountNo:"525010032525",accountName:"Erik Fors",type:"Checking",currency:"SEK",balance:"8,58525.00 kr",status:"Blocked"},{id:7,accountNo:"181802521",accountName:"Anna Gram",type:"Savings",currency:"SEK",balance:"85,000.00 kr",status:"Closed"},{id:8,accountNo:"3582546665",accountName:"Reham Karimi",type:"Checking",currency:"SEK",balance:"140,452.00 kr",status:"Active"},{id:9,accountNo:"456709876",accountName:"Christoffer",type:"Savings",currency:"EUR",balance:" \u20ac 2,58525.00",status:"Active"},{id:10,accountNo:"556678787",accountName:"Karin Magne",type:"Checking",currency:"SEK",balance:"8,58525.00 kr",status:"Active"},{id:11,accountNo:"181802521",accountName:"Anna Gram",type:"Savings",currency:"SEK",balance:"85,000.00 kr",status:"Checking"},{id:12,accountNo:"3582546665",accountName:"Reham Karimi",type:"Checking",currency:"SEK",balance:"140,452.00 kr",status:"Active"},{id:13,accountNo:"3030032525",accountName:"Thomas Persson",type:"Savings",currency:"SEK",balance:"2,58525.00 kr",status:"Active"},{id:14,accountNo:"525010032525",accountName:"Erik Fors",type:"Checking",currency:"SEK",balance:"8,58525.00 kr",status:"Blocked"},{id:15,accountNo:"181802521",accountName:"Anna Gram",type:"Savings",currency:"SEK",balance:"85,000.00 kr",status:"Closed"},{id:16,accountNo:"3582546665",accountName:"Reham Karimi",type:"Checking",currency:"SEK",balance:"140,452.00 kr",status:"Active"}]}}},[[213,2,1]]]);
//# sourceMappingURL=main.0f5a9e20.chunk.js.map