(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),u=a(6),l=a.n(u),c=(a(12),a(1)),i=a(2),o=a(4),s=a(3),m=(a(13),function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.icon;return n.a.createElement("nav",{className:"bg-primary navbar"},n.a.createElement("h1",null,n.a.createElement("i",{className:a})," ",e))}}]),a}(r.Component));m.defaultProps={title:"Github Finder",icon:"fab fa-github-square"};var h=m,p=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(t=e.call.apply(e,[this].concat(n))).state={login:"mojombo",id:1,avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",html_url:"https://github.com/mojombo"},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.login,a=t.avatar_url,r=t.html_url;return n.a.createElement("div",{className:"text-center card"},n.a.createElement("img",{src:a,alt:a,className:"round-img",style:{width:"60px"}}),n.a.createElement("h3",null,e),n.a.createElement("div",null,n.a.createElement("a",{href:r,className:"btn btn-dark btn-sm my-1"},"More")))}}]),a}(r.Component),b=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(t=e.call.apply(e,[this].concat(n))).state={users:[{login:"mojombo",id:1,avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",gravatar_id:"",url:"https://api.github.com/users/mojombo",html_url:"https://github.com/mojombo"},{login:"defunkt",id:2,avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4",gravatar_id:"",url:"https://api.github.com/users/defunkt",html_url:"https://github.com/defunkt"},{login:"pjhyett",id:3,node_id:"MDQ6VXNlcjM=",avatar_url:"https://avatars0.githubusercontent.com/u/3?v=4",gravatar_id:"",url:"https://api.github.com/users/pjhyett",html_url:"https://github.com/pjhyett"},{login:"wycats",id:4,node_id:"MDQ6VXNlcjQ=",avatar_url:"https://avatars0.githubusercontent.com/u/4?v=4",gravatar_id:"",url:"https://api.github.com/users/wycats",html_url:"https://github.com/wycats"}]},t}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:d},this.state.users.map((function(t){return n.a.createElement(p,{key:t.id,login:t.login,avatar_url:t.avatar_url,html_url:t.html_url})})))}}]),a}(r.Component),d={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"10px"},v=b,g=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(h,{title:"Github Finder",icon:"fab fa-github-square"}),n.a.createElement("div",{className:"container"},n.a.createElement(v,null)))))}}]),a}(n.a.Component);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0cbbaf37.chunk.js.map