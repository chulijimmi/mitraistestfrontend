(this.webpackJsonpmitraistestfrontend=this.webpackJsonpmitraistestfrontend||[]).push([[0],{72:function(e,t,n){e.exports=n(89)},81:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(22),i=n.n(o),c=n(5),s=n(21),l=n(38),u=n(31),d=(n(81),n(24)),m=n(16),g=n(47),h=n(64),b=n(13),p={errorCode:"",errorMessage:"",showErrorComponent:!1};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_error_message":var n=t.payload,r=n.code,a=n.message;return Object(b.a)({},e,{errorCode:r,errorMessage:a,showErrorComponent:!0});case"show_error_message":return Object(b.a)({},e,{showErrorComponent:!0});case"hide_error_message":return Object(b.a)({},e,{},p);default:return e}}var v={mobileNumber:"",firstName:"",lastName:"",dob:{day:"",month:"",year:""},gender:2,email:"",showLoginButton:!1,isRegistered:!1,isFetchingApi:!1};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_state_registration":var n=t.payload,r=n.keyState,a=n.valState,o=Object(b.a)({},e);return o[r]=a,Object(b.a)({},e,{},o);case"set_dob_state_registration":var i=t.payload,c=i.keyDob,s=i.valDob,l=Object(b.a)({},e.dob);return l[c]=s,Object(b.a)({},e,{dob:Object(b.a)({},l)});case"show_login_button_registration":return Object(b.a)({},e,{showLoginButton:!0});case"hide_login_button_registration":return Object(b.a)({},e,{showLoginButton:!1});case"success_registration":return Object(b.a)({},v,{isRegistered:!0});case"set_is_fetching_api":var u=t.payload.statusFetch;return Object(b.a)({},e,{isFetchingApi:u});default:return e}}var y=n(53),E=n.n(y),w=n(65),O=n(12),j=n.n(O),k=n(17),S=function(e){return{type:"set_is_fetching_api",payload:{statusFetch:e}}},C=function(){return{type:"hide_error_message"}},_=function(e,t){return{type:"set_error_message",payload:{code:e,message:t}}},B=n(32),R=function(){var e=Object(B.a)(j.a.mark((function e(t,n){var r,a,o=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:{},e.next=3,fetch(t,{body:JSON.stringify(n),method:"POST",headers:Object(b.a)({},r,{"content-type":"application/json"})});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N={appGet:function(){var e=Object(B.a)(j.a.mark((function e(t){var n,r,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,fetch(t,{method:"GET",headers:Object(b.a)({},n,{"content-type":"application/json"})});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),appPost:R};function F(){return(F=Object(B.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mitraist.herokuapp.com/auth/signup",e.next=3,N.appPost("https://mitraist.herokuapp.com/auth/signup",t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={register:function(e){return F.apply(this,arguments)}},q=j.a.mark(T),M=j.a.mark(z),A=j.a.mark(I),D=function(e){return L.register({payload:e}).then((function(e){return e})).catch((function(e){return e}))};function T(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(k.d)(S(!0));case 2:return n.prev=2,n.next=5,Object(k.e)((function(e){return e.Registration}));case 5:return(e=n.sent).dob="".concat(e.dob.year,"-").concat(e.dob.month,"-").concat(e.dob.day),n.next=9,Object(k.b)(D,e);case 9:if(0===(t=n.sent).error){n.next=15;break}return n.next=13,Object(k.d)(_(t.error,t.message));case 13:n.next=21;break;case 15:return n.next=17,Object(k.d)({type:"success_registration"});case 17:return n.next=19,Object(k.d)({type:"hide_error_message"});case 19:return n.next=21,Object(k.d)({type:"show_login_button_registration"});case 21:n.next=26;break;case 23:throw n.prev=23,n.t0=n.catch(2),n.t0;case 26:return n.next=28,Object(k.d)(S(!1));case 28:case"end":return n.stop()}}),q,null,[[2,23]])}function z(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.f)("saga_registration",T);case 2:case"end":return e.stop()}}),M)}function I(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.c)(z)]);case 2:case"end":return e.stop()}}),A)}var P=j.a.mark(W);function W(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.c)(I)]);case 2:case"end":return e.stop()}}),P)}var Y,G=n(54),H={timeout:null,key:"root",storage:n.n(G).a,whitelist:[""],blacklist:[""]},J=Object(d.a)(),$=m.d,V=Object(h.a)(H,(Y=J,Object(m.c)({router:Object(u.b)(Y),ErrorHandling:f,Registration:x}))),K=Object(w.a)(),Q=Object(g.a)(J),U=[K,E.a];var X=n(8),Z=n(91),ee=n(110),te=n(112),ne=n(113),re=n(19);function ae(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function oe(){var e=Object(r.useState)(ae()),t=Object(re.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a(ae())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var ie="#000000",ce="#9c27b0",se="#388e3c",le="#f4382d",ue="#958d8d",de="#fafafa",me="#FFF";var ge=function(e){var t={container:{overflow:"hidden",display:"flex",position:"relative"},input:{flexGrow:1,width:"100%",padding:10,border:"1px solid black",marginBottom:15,fontSize:15},"&::focus":{outline:"none",border:"1px solid black",boxShadow:"0px 0px 0px 0.1"},error:{position:"relative",width:"100%"}};return a.a.createElement("div",{style:t.error},a.a.createElement("div",{style:t.container},a.a.createElement("input",{type:"text",style:t.input,onChange:function(t){e.onChange(t.target.value)},value:e.value,placeholder:e.label,onFocus:e.onFocus,onBlur:e.onBlur})))},he=n(108);var be=function(e){return a.a.createElement(he.a,{color:e.color,variant:"contained",fullWidth:!0,onClick:function(){return e.onClick()}},e.loading?"LOADING":e.label)},pe=n(4),fe=n.n(pe),ve=n(58),xe=n(29),ye=n(59),Ee=n(60),we=n(66);var Oe=function(e){var t,n={content:{width:"100%"},labelItems:{cursor:"pointer",width:"100%",textAlign:"left",float:"left",padding:"12px 0px",borderBottom:"1px solid rgb(239, 239, 239, 1)",display:"inline-block"},labelContent:{marginLeft:15,fontSize:14}},r=e.show,o=e.itemSelect;return o.length<1?null:a.a.createElement("div",{style:(t=r,{width:"100%",background:"white",border:"1px solid rgb(239, 239, 239, 1)",WebkitBoxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",MozBoxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",boxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",position:"absolute",zIndex:3,top:50,left:0,right:0,display:t?"block":"none",maxHeight:200,overflow:"scroll"})},o.map((function(t,r){return a.a.createElement("div",{key:r.toString(),style:n.content,className:"clearfix"},a.a.createElement("div",{style:n.labelItems,onClick:function(){return e.onSelect(t)}},a.a.createElement("span",{style:n.labelContent},t.label)))})))},je=n(61),ke=n.n(je),Se={container:{position:"relative"},filterButtonStyle:{border:"1px solid ".concat(ie)},labelFilterStyleButton:{fontSize:14,float:"left",padding:10},labelFilterStyleIcon:{float:"right"}},Ce=function(e){function t(e){var n;return Object(ve.a)(this,t),(n=Object(ye.a)(this,Object(Ee.a)(t).call(this,e))).state={open:!1},n}return Object(we.a)(t,e),Object(xe.a)(t,[{key:"handleFilterStyle",value:function(){this.setState({open:!this.state.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"renderButtonFilter",value:function(){var e=this.props.labelButton;return a.a.createElement("div",{style:Se.filterButtonStyle,className:"clearfix",onClick:this.handleClick.bind(this)},a.a.createElement("span",{style:Se.labelFilterStyleButton},e),a.a.createElement("span",{style:Se.labelFilterStyleIcon},a.a.createElement(ke.a,{color:"primary",fontSize:"large"})))}},{key:"renderItemSelectOption",value:function(){var e=this,t=this.props.data;return a.a.createElement(Oe,{show:this.state.open,itemSelect:t,onSelect:function(t){return e.props.onSelect(t)}})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:Se.container,onClick:function(){return e.handleFilterStyle()}},this.renderButtonFilter(),this.renderItemSelectOption())}}]),t}(r.Component),_e=n(62),Be=n.n(_e);Ce.propTypes={data:fe.a.array.isRequired,onSelect:fe.a.func.isRequired};var Re=Object(X.a)((function(e){return{dob:{paddingRight:0,marginBottom:15}}}))((function(e){var t=e.classes,n=oe().width,o=function(){return n<786?12:6},i=function(){return n<786?12:4},c=(new Date).getMonth()+1,s=Object(r.useState)({value:"01",label:"1"}),l=Object(re.a)(s,2),u=(l[0],l[1]),d=Object(r.useState)({value:c,label:"JAN"}),m=Object(re.a)(d,2),g=m[0],h=m[1],b=Object(r.useState)({value:"2020",label:"2020"}),p=Object(re.a)(b,2),f=p[0],v=p[1],x=Object(r.useState)([1]),y=Object(re.a)(x,2),E=y[0],w=y[1],O=Object(r.useState)("Date"),j=Object(re.a)(O,2),k=j[0],S=j[1],C=Object(r.useState)("Month"),_=Object(re.a)(C,2),B=_[0],R=_[1],N=Object(r.useState)("Year"),F=Object(re.a)(N,2),L=F[0],q=F[1],M=function(e,t){for(var n=new Date(e,t,0).getDate(),r=[],a=1;a<=n;a++){var o=a;r.push({value:o,label:a})}return r};return a.a.createElement(ee.a,{container:!0,item:!0,xs:12},a.a.createElement(a.a.Fragment,null,a.a.createElement(ee.a,{item:!0,xs:o(),sm:i(),style:{paddingRight:n>786?10:0},className:t.dob},a.a.createElement(Ce,{labelButton:B,data:function(){for(var e=Be.a.monthsShort(),t=[],n=1;n<=e.length;n++){var r=n;t.push({value:r,label:e[n-1]})}return t}(),onSelect:function(t){return function(t){h(t),e.onChangeMonth(t.value);var n=M(f.value,t.value);w(n),R(t.label)}(t)}})),a.a.createElement(ee.a,{item:!0,xs:o(),sm:i(),style:{paddingRight:n>786?10:0},className:t.dob},a.a.createElement(Ce,{labelButton:k,data:E,onSelect:function(t){return u(n=t),e.onChangeDay(n.value),void S(n.label);var n}})),a.a.createElement(ee.a,{item:!0,xs:o(),sm:i(),className:t.dob},a.a.createElement(Ce,{labelButton:L,data:function(){for(var e=[],t=(new Date).getFullYear(),n=0;n<=t;n++)n>1945&&e.unshift({value:n,label:n});return e}(),onSelect:function(t){return function(t){v(t),e.onChangeYear(t.value);var n=M(t.value,g.value);w(n),q(t.label)}(t)}}))))})),Ne=n(111),Fe=n(115);var Le=function(e){var t=Object(r.useState)(!1),n=Object(re.a)(t,2),o=(n[0],n[1]);return a.a.createElement(Ne.a,{control:a.a.createElement(Fe.a,{color:"primary",checked:e.checked}),label:e.label,onChange:function(t){o(t),e.onChange(t)}})};var qe=function(e){return a.a.createElement(ee.a,{container:!0,item:!0,xs:12},a.a.createElement(ee.a,{item:!0,xs:6,sm:6,align:"left"},a.a.createElement(Le,{label:"male",checked:1===e.checked,onChange:function(t){return e.onChange(1)}})),a.a.createElement(ee.a,{item:!0,xs:6,sm:6,align:"left"},a.a.createElement(Le,{label:"female",checked:0===e.checked,onChange:function(t){return e.onChange(0)}})))};var Me={isRequired:{error:201,message:"Mobile number is required"},isExist:{error:201,message:"Your mobile number is exist, plase use another"},isNotValid:{error:201,message:"Please enter valid indonesian mobile number"}},Ae={isRequired:{error:202,message:"First name is required"}},De={isRequired:{error:203,message:"Last name is required"}},Te={isRequired:{error:204,message:"Email is required and should valid email address"},isExist:{error:202,message:"Your email is not available, plase use other"}},ze=n(117),Ie=n(116),Pe={box:{padding:"10px 0px",background:le,border:"1px solid ".concat(ue),position:"relative",marginBottom:15},text:{color:me,fontSize:14},arrow:{margin:"0 auto",width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"10px solid ".concat(le),position:"absolute",left:0,right:0,bottom:-10}};var We=function(e){return a.a.createElement(ze.a,null,a.a.createElement(Ie.a,{timeout:500,classNames:"error"},a.a.createElement("div",{className:"errorBox",style:Pe.box,onClick:function(){return e.hide()}},a.a.createElement("div",{style:Pe.arrow}),a.a.createElement("span",{style:Pe.text},e.message))))};var Ye=Object(s.c)((function(e){var t=e.ErrorHandling,n=e.Registration;return{errorCode:t.errorCode,errorMessage:t.errorMessage,mobileNumber:n.mobileNumber,firstName:n.firstName,lastName:n.lastName,gender:n.gender,email:n.email,showLoginButton:n.showLoginButton,isFetchingApi:n.isFetchingApi}}),{sagaRegistration:function(){return{type:"saga_registration"}},setStateRegistration:function(e,t){return{type:"set_state_registration",payload:{keyState:e,valState:t}}},setDobStateRegistration:function(e,t){return{type:"set_dob_state_registration",payload:{keyDob:e,valDob:t}}},setErrorMessage:_,hideErrorMessage:C})(Object(X.a)((function(e){return{root:{flexGrow:1},grid:{margin:"0px auto"},gridBlock:{margin:"0px auto",left:0,right:0,width:"100%",height:464,position:"absolute",background:"#b9b9b996",zIndex:3e3},footerArea:{width:"100%",position:"absolute"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,background:de},title:{textAlign:"left",marginBottom:15}}}))((function(e){var t=e.classes,n=e.sagaRegistration,r=e.setStateRegistration,o=e.setDobStateRegistration,i=e.mobileNumber,c=e.firstName,s=e.lastName,l=e.isFetchingApi,u=e.gender,d=e.email,m=e.showLoginButton,g=e.errorCode,h=e.errorMessage,b=e.setErrorMessage,p=e.hideErrorMessage,f=oe().width;return a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,{sm:12},a.a.createElement((function(e){return e.show?a.a.createElement(ee.a,{item:!0,xs:12,sm:12,className:t.gridBlock}):a.a.createElement("div",null)}),{show:m}),a.a.createElement(ee.a,{item:!0,xs:12,sm:function(e){return e<1208&&e>786?6:e<786?12:6}(f),className:t.grid},a.a.createElement(ne.a,{elevation:0,className:t.paper},a.a.createElement((function(){return a.a.createElement(Z.a,{variant:"h5",component:"h1",className:t.title,color:"primary"},"Registration")}),null),201==g&&""!==h&&a.a.createElement(We,{hide:p,message:h}),a.a.createElement(ge,{label:"Mobile number",width:f,onBlur:function(){""==i&&b(Me.isRequired.error,Me.isRequired.message)},value:i,onChange:function(e){return r("mobileNumber",function(e){var t=e.length;if("0"==e.substr(0,1)){var n=e.substr(1,t);return"62".concat(n)}return e}(e))}}),202==g&&""!==h&&a.a.createElement(We,{hide:p,message:h}),a.a.createElement(ge,{label:"First name",width:f,onBlur:function(){""==c&&b(Ae.isRequired.error,Ae.isRequired.message)},value:c,onChange:function(e){return r("firstName",e)}}),203==g&&""!==h&&a.a.createElement(We,{hide:p,message:h}),a.a.createElement(ge,{label:"Last name",width:f,onBlur:function(){""==s&&b(De.isRequired.error,De.isRequired.message)},value:s,onChange:function(e){return r("lastName",e)}}),a.a.createElement(Re,{onChangeMonth:function(e){return o("month",e)},onChangeDay:function(e){return o("day",e)},onChangeYear:function(e){return o("year",e)}}),a.a.createElement(qe,{checked:u,onChange:function(e){return r("gender",e)}}),204==g&&""!==h&&a.a.createElement(We,{hide:p,message:h}),a.a.createElement(ge,{label:"Email",width:f,onBlur:function(){""==d&&b(Te.isRequired.error,Te.isRequired.message)},value:d,onChange:function(e){var t=function(e){if(e.length>6){return!1!==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,6})+$/.test(String(e).toLowerCase())}return!0}(e),n=Te.isRequired;t?p():b(n.error,n.message),r("email",e)}}),a.a.createElement(be,{loading:l,color:"secondary",label:"Register",onClick:function(){n()}})))))}))),Ge=n(63),He=n(114),Je={palette:{primary:{light:ie,main:ie,dark:ie,contrastText:"#fff"},secondary:{light:ce,main:ce,dark:ce,contrastText:"#fff"},error:{light:le,main:le,dark:le,contrastText:"#fff"},success:{light:se,main:se,dark:se,contrastText:"#fff"}},status:{danger:"orange"},typography:{button:{fontWeight:400,textAlign:"capitalize"}}},$e={footer:{marginTop:30,width:"100%",padding:30,background:ce,contentAlign:"center"},footerTitle:{color:me,textAlign:"center"}};function Ve(e){var t="".concat("/mitraistestfrontend"),n=e.action;return a.a.createElement(be,{label:"Login",onClick:function(){n(),e.history.push("".concat(t,"/login"),{})}})}function Ke(){return a.a.createElement("h1",{style:$e.footerTitle},"Footer")}var Qe=Object(s.c)((function(e){var t=e.Registration;return{showLoginButton:t.showLoginButton,hideLoginButtonRegistration:t.hideLoginButtonRegistration}}),{hideLoginButtonRegistration:function(){return{type:"hide_login_button_registration"}}})((function(e){var t=e.hideLoginButtonRegistration,n=e.showLoginButton;return a.a.createElement("div",{style:$e.footer},n?a.a.createElement(Ve,Object.assign({action:t},e)):a.a.createElement(Ke,null))}));var Ue=function(e){console.log("Props Registration",e);var t=Object(Ge.a)(Je);return a.a.createElement(He.a,{theme:t},a.a.createElement(Ye,e),a.a.createElement(Qe,e))},Xe={container:{width:"100vw",height:"100vh"},login:{background:de,width:"100%",height:500},titleLogin:{color:ie,textAlign:"center"},link:{marginTop:15,padding:15,background:ie,color:me,margin:"0px auto",display:"table",textDecoration:"none",borderRadius:5}};var Ze=function(e){return console.log("Props login",e),a.a.createElement("div",{style:Xe.container},a.a.createElement("div",{style:Xe.login},a.a.createElement("h4",{style:Xe.titleLogin},"This is login page"),a.a.createElement("button",{onMouseOver:function(e){e.target.style.background=ce},onMouseOut:function(e){e.target.style.background=ie},style:Xe.link,onClick:function(){return e.history.goBack()}},"Back to register")),a.a.createElement(Qe,null))},et=function(e){var t=Object(m.e)(V,e,$(m.a.apply(void 0,U),Object(m.a)(Q)));return K.run(W),t}();function tt(e){var t=e.history,n=e.context,r="".concat("/mitraistestfrontend");return a.a.createElement(u.a,{history:t,context:n},a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"".concat(r,"/"),render:function(){return a.a.createElement(l.a,{to:"".concat(r,"/register")})}}),a.a.createElement(l.b,{path:"".concat(r,"/register"),render:function(e){e.staticContext;var t=Object(c.a)(e,["staticContext"]);return a.a.createElement(Ue,t)}}),a.a.createElement(l.b,{path:"".concat(r,"/login"),render:function(e){e.staticContext;var t=Object(c.a)(e,["staticContext"]);return a.a.createElement(Ze,t)}})))}var nt=function(){return a.a.createElement(s.a,{store:et,context:s.b},a.a.createElement(tt,{history:J,context:s.b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.76564387.chunk.js.map