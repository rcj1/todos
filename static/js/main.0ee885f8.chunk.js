(this["webpackJsonptodos-frontend"]=this["webpackJsonptodos-frontend"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(7),r=n(19),i=n.n(r),c=(n(25),n(9)),o=n(10),l=n(12),d=n(11),h=n(2),b=n(0),m=function(e){var t=e.onSignout;return Object(b.jsx)(s.b,{className:"pr3 link dim underline pointer f3",style:{display:"flex",justifyContent:"flex-end"},onClick:t,to:"/",children:"Sign Out "})},j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSignin=function(e){fetch("https://whispering-forest-93215.herokuapp.com/",{method:"get",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"hello"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})},a.state={signInEmail:"",signInPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("article",{className:"br2 shadow-5 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center",children:Object(b.jsx)("main",{className:"pa4 black-80 center",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign In"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{className:"pa2 input-reset bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"b pa2 input-reset bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(b.jsx)("div",{className:"b ph3 pv2 input-reset center b--black bg-transparent grow pointer f6 dib",children:Object(b.jsx)(s.b,{to:"/",onClick:this.onSignin,children:"Sign In"})}),Object(b.jsx)("div",{className:"lh-copy mt3 center",children:Object(b.jsx)(s.b,{to:"/register",className:"f6 center link dim black db pointer",children:"Register"})})]})})})})}}]),n}(a.Component),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({registerName:e.target.value})},a.onEmailChange=function(e){a.setState({registerEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({registerPassword:e.target.value})},a.onRegister=function(e){a.state.registerPassword&&a.state.registerName&&a.state.registerEmail.includes("@")?fetch("https://whispering-forest-93215.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.registerEmail,name:a.state.registerName,password:a.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){e.name?a.props.onLoadUser(e):console.log(e)})).catch((function(e){return console.log})):alert("Please fill out form.")},a.state={registerName:"",registerEmail:"",registerPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("article",{className:"br2 dark-gray shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center",children:Object(b.jsx)("main",{className:"pa4 black-80 center",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:" b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Register"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{className:"b pa2 input-reset  bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{className:"pa2 input-reset  bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"b pa2 input-reset  bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(b.jsx)("div",{className:"b ph3 pv2 input-reset center b--black bg-transparent grow pointer f6 dib",children:Object(b.jsx)(s.b,{to:"/register",onClick:this.onRegister,children:"Register"})}),Object(b.jsx)("div",{className:"lh-copy mt3 center",children:Object(b.jsx)(s.b,{to:"/",className:"f6 center link dim black db pointer",children:"Sign in"})})]})})})})}}]),n}(a.Component),g=function(e){var t=e.name,n=e.number;return Object(b.jsx)("p",{className:"center",children:"".concat(t,", you have ").concat(n," todos.")})},p=function(e){var t=e.onContentChange,n=e.onDateChange,a=e.onAddTask;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"center general-text",children:"Enter todo and deadline: (Time defaults to end of selected day)"}),Object(b.jsxs)("div",{className:"center",children:[Object(b.jsx)("input",{className:"f4 mr1",type:"text",onChange:t}),Object(b.jsx)("input",{className:"f4 ml1",type:"date",onChange:n}),Object(b.jsx)("button",{className:"w-5 ml3 grow bg-light-blue",onClick:a,children:"Add Task"})]})]})},f=function(e){var t=e.date,n=e.content,a=e.onDone,s=function(e){var t=new Date(e);t.setDate(t.getDate()+1);var n=t.toString().split(" ").slice(1,4).join(" "),a=new Date;a.setDate(a.getDate()+1);var s=new Date;return s.setDate(s.getDate()+7),t<a?["bg-red",n]:t<s?["bg-orange",n]:["bg-green",n]};return Object(b.jsxs)("div",{className:"mv3 w-70 center",children:[Object(b.jsx)("p",{className:"w-50 ".concat(s(t)[0]," pv3 b"),children:"".concat(n," by ").concat(s(t)[1])}),Object(b.jsx)("button",{className:"w-10 ml3 mv3 grow bg-light-blue",onClick:function(){return a(t,n)},children:"Done \u2705"})]})},O=function(e){var t=e.choreList,n=e.onDone;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(f,{date:e.date,content:e.task,onDone:n})}))})},x={signedin:!1,content:"",date:"",user:{name:"",email:"",todos:[]}},v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSignout=function(){e.setState(x)},e.onLoadUser=function(t){e.setState({user:{name:t.name,email:t.email,todos:t.todos?t.todos:[]},signedin:!0})},e.onContentChange=function(t){e.setState({content:t.target.value})},e.onDateChange=function(t){e.setState({date:t.target.value})},e.updateTodoState=function(t){Array.isArray(t)?e.setState({user:{email:e.state.user.email,name:e.state.user.name,todos:t}}):console.log(t)},e.onAddTask=function(){var t=new Date(e.state.date);t.setDate(t.getDate()+1),fetch("https://whispering-forest-93215.herokuapp.com/updatedb",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,task:e.state.content,date:e.state.date})}).then((function(e){return e.json()})).then((function(t){return e.updateTodoState(t)})).catch((function(e){return alert("Error adding task")}))},e.onDone=function(t,n){fetch("https://whispering-forest-93215.herokuapp.com/deletefromdb",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,task:n,date:t})}).then((function(e){return e.json()})).then((function(t){return e.updateTodoState(t)})).catch((function(e){return alert("Error deleting task")}))},e.state=x,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"/",children:this.state.signedin?Object(b.jsx)(h.a,{to:"/signedin"}):Object(b.jsx)(j,{onLoadUser:this.onLoadUser})}),Object(b.jsx)(h.b,{path:"/register",children:this.state.signedin?Object(b.jsx)(h.a,{to:"/signedin"}):Object(b.jsx)(u,{onLoadUser:this.onLoadUser})}),Object(b.jsx)(h.b,{path:"/signedin",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{onSignout:this.onSignout}),Object(b.jsx)(g,{name:this.state.user.name,number:this.state.user.todos.length}),Object(b.jsx)(p,{onContentChange:this.onContentChange,onDateChange:this.onDateChange,onAddTask:this.onAddTask}),Object(b.jsx)(O,{choreList:this.state.user.todos,onDone:this.onDone})]})})]})})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};n(32);i.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.0ee885f8.chunk.js.map