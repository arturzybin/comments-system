(this["webpackJsonpcomments-system"]=this["webpackJsonpcomments-system"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/avatar.511718fc.svg"},40:function(e,t,a){e.exports=a.p+"static/media/comments.d68b6143.svg"},43:function(e,t,a){e.exports=a.p+"static/media/heart.77100eea.svg"},44:function(e,t,a){e.exports=a.p+"static/media/filled-heart.f2610513.svg"},45:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a(10),s=a(4),i=a(29),m=a(34),u=a.n(m),l=a(35),d=a(36),f=a(8),p={authUser:null,username:null};var b=a(23),v={comments:[],isCommentsOver:!1};var _=Object(c.combineReducers)({authUserStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_AUTH_USER":return{authUser:t.payload,username:null};case"SET_AUTH_USER_USERNAME":return Object(f.a)({},e,{username:t.payload});default:return e}},commentsStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return e=[].concat(Object(b.a)(t.comments),Object(b.a)(a.payload)),Object(f.a)({},t,{comments:e});case"SET_COMMENTS_OVER":return Object(f.a)({},t,{isCommentsOver:!0});case"CREATE_COMMENT":return e=[a.payload].concat(Object(b.a)(t.comments)),Object(f.a)({},t,{comments:e});case"SET_COMMENT_LIKES":return(e=t.comments)[a.payload.index].likesCount=a.payload.likesCount,Object(f.a)({},t,{comments:e});case"SET_IS_COMMENT_LIKED":return(e=t.comments)[a.payload.index].isLiked=a.payload.isLiked,Object(f.a)({},t,{comments:e});default:return t}}}),h=a(5),E=a(13),O=function(e,t){return{type:"SET_COMMENT_LIKES",payload:{index:e,likesCount:t}}},g=function(e,t){return{type:"SET_IS_COMMENT_LIKED",payload:{index:e,isLiked:t}}},j=a(37),S=a(38),N=a(16),C=a.n(N),y=(a(56),a(58),{apiKey:"AIzaSyDpt6WXqe7-GrSdSZxe1w1jD_h9XQIQWYA",authDomain:"comments-system-6e56a.firebaseapp.com",databaseURL:"https://comments-system-6e56a.firebaseio.com",projectId:"comments-system-6e56a",storageBucket:"comments-system-6e56a.appspot.com",messagingSenderId:"463788584226",appId:"1:463788584226:web:d0787997fe53b69d8d497b",measurementId:"G-LMGZ5VEP27"});var w=new function e(){var t=this;Object(S.a)(this,e),this.auth=void 0,this.db=void 0,this.parentURL=void 0,this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){var a;return null===(a=t.auth.currentUser)||void 0===a?void 0:a.updatePassword(e)},this.userRef=function(e){return t.db.collection("users").doc(e)},this.commentsRef=function(){return t.db.collection("pages").doc(t.parentURL).collection("comments")},this.commentLikesRef=function(e){return e.collection("likes")},this.doCreateComment=function(e){return t.commentsRef().add(e)},C.a.initializeApp(y),this.auth=C.a.auth(),this.db=C.a.firestore(),this.parentURL=function(){var e,t=window.location.search.substring(1).split("&"),a=Object(j.a)(t);try{for(a.s();!(e=a.n()).done;){var n=e.value.split("=");if("parentURL"===n[0])return n[1]}}catch(r){a.e(r)}finally{a.f()}return"default"}()},U=r.a.createContext(w);var k="/comments",R=a(39),x=a.n(R),T=a(40),A=a.n(T),M=function(){var e=Object(s.c)((function(e){return e.authUserStore})),t=e.authUser,a=e.username;a||(a="Loading...");var n=Object(E.g)().pathname===k,o=n?"navbar__button navbar__button_pressed":"navbar__button",c=n?"navbar__button":"navbar__button navbar__button_pressed";return r.a.createElement("nav",{className:"navbar"},r.a.createElement(h.b,{to:k,className:o},r.a.createElement("img",{className:"navbar__img",src:A.a,alt:"Comments"})),t?r.a.createElement(h.b,{to:"/account",className:c},a):r.a.createElement(h.b,{to:"/signin",className:c},r.a.createElement("img",{className:"navbar__img",src:x.a,alt:"Sign In"})))},L=a(3),I=function(){var e=Object(E.f)(),t=Object(s.b)(),a=Object(n.useContext)(U),o=Object(s.c)((function(e){return e.authUserStore})),c=o.authUser,i=o.username,m=Object(n.useState)(""),u=Object(L.a)(m,2),l=u[0],d=u[1];return r.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),i&&c){var r={authorUsername:i,authorUID:null===c||void 0===c?void 0:c.uid,text:l,created:C.a.firestore.Timestamp.fromMillis(Date.now())};a.doCreateComment(r).then((function(e){return t(function(e){return{type:"CREATE_COMMENT",payload:e}}(Object(f.a)({},r,{docRef:e})))})).then((function(){return d("")})).catch((function(e){return console.error("Error adding document: ",e)}))}else c||e.push("/signin")}},r.a.createElement("textarea",{value:l,onChange:function(e){return d(e.target.value)},maxLength:1e3,placeholder:"Write a comment..."}),r.a.createElement("button",{type:"submit"},"Write as You"))},P=a(42),D=a.n(P),W=a(43),H=a.n(W),G=a(44),K=a.n(G),B=function(e){var t=e.comment,a=e.commentIndex,o=Object(E.f)(),c=Object(s.b)(),i=Object(n.useContext)(U),m=Object(s.c)((function(e){return e.authUserStore.authUser}));Object(n.useEffect)((function(){!function(){var e=t.docRef;i.commentLikesRef(e).get().then((function(e){var t=e.docs.length,n=e.docs.filter((function(e){return e.data().uid===(null===m||void 0===m?void 0:m.uid)})).length>0;c(O(a,t)),c(g(a,n))}))}()}),[m]);var u=t.isLiked?K.a:H.a;return r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"comment__author"},t.authorUsername),r.a.createElement("div",{className:"comment__created"},D.a.unix(t.created.seconds).fromNow()),r.a.createElement("p",null,t.text),r.a.createElement("button",{className:"comment__like",onClick:function(){if(m){if(void 0!==t.likesCount&&void 0!==t.isLiked){var e=i.commentLikesRef(t.docRef).doc(null===m||void 0===m?void 0:m.uid);t.isLiked?(c(O(a,t.likesCount-1)),e.delete()):(c(O(a,t.likesCount+1)),e.set({uid:null===m||void 0===m?void 0:m.uid})),c(g(a,!t.isLiked))}}else o.push("/signin")}},r.a.createElement("img",{src:u,alt:"like",width:"20px"}),t.likesCount),r.a.createElement("button",{className:"comment__reply"},"Reply"),r.a.createElement("hr",null))};var V,z=function(){var e=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.commentsStore})),a=t.comments,r=t.isCommentsOver,o=Object(n.useContext)(U),c=Object(n.useState)(o.commentsRef().orderBy("created","desc").limit(50)),i=Object(L.a)(c,2),m=i[0],u=i[1],l=Object(n.useState)(!1),d=Object(L.a)(l,2),p=d[0],b=d[1];function v(){p||(b(!0),m.get().then((function(t){if(t.docs.length<50&&e({type:"SET_COMMENTS_OVER"}),t.docs.length){var a=t.docs[t.docs.length-1];u(o.commentsRef().orderBy("created","desc").limit(50).startAfter(a));var n=t.docs.map((function(e){return Object(f.a)({},e.data(),{docRef:e.ref})}));e(function(e){return{type:"ADD_COMMENTS",payload:e}}(n)),b(!1)}})))}return Object(n.useEffect)((function(){a.length||v()}),[]),{comments:a,loadComments:v,isCommentsOver:r}}(),t=e.comments,a=e.loadComments,o=e.isCommentsOver,c=t.map((function(e,t){return r.a.createElement(B,{key:e.created.nanoseconds,commentIndex:t,comment:e})}));return r.a.createElement("div",{className:"comments"},r.a.createElement(I,null),c,r.a.createElement("button",{onClick:a,disabled:o},"Load more comments"))},J=a(12),Q=a.n(J),X=function(){var e=Object(E.f)(),t=Object(n.useContext)(U),a=Object(n.useState)(""),o=Object(L.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(""),m=Object(L.a)(i,2),u=m[0],l=m[1],d=Object(n.useState)(null),f=Object(L.a)(d,2),p=f[0],b=f[1];var v="form__input",_="form__input";v+=c&&!Q.a.validate(c)?" form__input_invalid":"",_+=u&&u.length<6?" form__input_invalid":"";var O=u.length<6||!Q.a.validate(c);return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Sign In"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.doSignInWithEmailAndPassword(c,u).then((function(){s(""),l(""),b(null),e.push(k)})).catch(b)}},r.a.createElement("input",{name:"email",className:v,value:c,onChange:function(e){return s(e.target.value.trim())},type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",className:_,value:u,onChange:function(e){return l(e.target.value.trim())},type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:O,type:"submit",className:"form__input form__button"},"Sign In"),p&&r.a.createElement("p",{className:"form__error"},p.message)),r.a.createElement("p",{className:"form__link"},"Don't have an account? ",r.a.createElement(h.b,{to:"/signup"},"Sign up")),r.a.createElement("p",{className:"form__link"},"Forgot password? ",r.a.createElement(h.b,{to:"/password-reset"},"Reset"))))},Y=function(){var e=Object(E.f)(),t=Object(n.useContext)(U),a=Object(n.useState)(""),o=Object(L.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(""),m=Object(L.a)(i,2),u=m[0],l=m[1],d=Object(n.useState)(""),f=Object(L.a)(d,2),p=f[0],b=f[1],v=Object(n.useState)(""),_=Object(L.a)(v,2),O=_[0],g=_[1],j=Object(n.useState)(null),S=Object(L.a)(j,2),N=S[0],C=S[1];var y="form__input",w="form__input",R="form__input",x="form__input";y+=c&&c.length<3&&c.length>15?" form__input_invalid":"",w+=u&&!Q.a.validate(u)?" form__input_invalid":"",R+=p&&p.length<6&&p.length>25?" form__input_invalid":"",x+=O&&O!==p?" form__input_invalid":"";var T=p!==O||p.length<6||!Q.a.validate(u)||""===c;return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Sign Up"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.doCreateUserWithEmailAndPassword(u,p).then((function(e){var a,n=null===(a=e.user)||void 0===a?void 0:a.uid;n&&t.userRef(n).set({username:c,email:u})})).then((function(){s(""),l(""),b(""),g(""),C(null),e.push(k)})).catch(C)}},r.a.createElement("input",{name:"username",className:y,value:c,onChange:function(e){return s(e.target.value.trim())},type:"text",placeholder:"Username"}),r.a.createElement("input",{name:"email",className:w,value:u,onChange:function(e){return l(e.target.value.trim())},type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",className:R,value:p,onChange:function(e){return b(e.target.value.trim())},type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",className:x,value:O,onChange:function(e){return g(e.target.value.trim())},type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:T,type:"submit",className:"form__input form__button"},"Sign Up"),N&&r.a.createElement("p",{className:"form__error"},N.message)),r.a.createElement("p",{className:"form__link"},"Already have an account? ",r.a.createElement(h.b,{to:"/signin"},"Sign in"))))},Z=function(){var e=Object(E.f)(),t=Object(n.useContext)(U),a=Object(n.useState)(""),o=Object(L.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(null),m=Object(L.a)(i,2),u=m[0],l=m[1];var d="form__input";d+=c&&!Q.a.validate(c)?" form__input_invalid":"";var f=!Q.a.validate(c);return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Reset Password"),r.a.createElement("form",{onSubmit:function(){t.doPasswordReset(c).then((function(){s(""),l(null),e.push("/signin")})).catch(l)}},r.a.createElement("input",{name:"email",className:d,value:c,onChange:function(e){return s(e.target.value.trim())},type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:f,type:"submit",className:"form__input form__button"},"Send reset email"),u&&r.a.createElement("p",{className:"form__error"},u.message)),r.a.createElement("p",{className:"form__link"},"Recall password? ",r.a.createElement(h.b,{to:"/signin"},"Sign in"))))},q=function(){var e=Object(n.useContext)(U),t=Object(E.f)();return r.a.createElement("button",{onClick:function(){e.doSignOut(),t.push(k)},className:"form__input form__button"},"Sign Out")},F=function(){var e=Object(n.useContext)(U),t=Object(n.useState)(""),a=Object(L.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),i=Object(L.a)(s,2),m=i[0],u=i[1],l=Object(n.useState)(null),d=Object(L.a)(l,2),f=d[0],p=d[1];var b="form__input",v="form__input";b+=o&&o.length<6?" form__input_invalid":"",v+=m&&m!==o?" form__input_invalid":"";var _=o!==m||o.length<6;return r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),null===(a=e.doPasswordUpdate(o))||void 0===a||a.then((function(){c(""),u(""),p(null)})).catch(p)}},r.a.createElement("input",{name:"passwordOne",className:b,value:o,onChange:function(e){return c(e.target.value.trim())},type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",className:v,value:m,onChange:function(e){return u(e.target.value.trim())},type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:_,type:"submit",className:"form__input form__button"},"Update password"),f&&r.a.createElement("p",{className:"form__error"},f.message))},$=(V=function(e){return!!e},function(e){return function(t){var a=Object(E.f)(),n=Object(s.c)((function(e){return e.authUserStore.authUser})),o=V(n);return o||a.push("/signin"),o?r.a.createElement(e,t):null}})((function(){var e=Object(s.c)((function(e){return e.authUserStore})),t=e.authUser,a=e.username;a||(a="Loading ...");var n=null===t||void 0===t?void 0:t.email;return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title form__username"},a),r.a.createElement("h2",{className:"form__title form__email"},n),r.a.createElement(F,null),r.a.createElement("hr",null),r.a.createElement(q,null)))})),ee=(a(64),a(65),function(){return function(){var e=Object(s.b)(),t=Object(n.useContext)(U);Object(n.useEffect)((function(){return t.auth.onAuthStateChanged((function(a){e({type:"CHANGE_AUTH_USER",payload:a}),a&&t.userRef(null===a||void 0===a?void 0:a.uid).get().then((function(t){var a;if(t.exists){var n=null===(a=t.data())||void 0===a?void 0:a.username;e(function(e){return{type:"SET_AUTH_USER_USERNAME",payload:e}}(n))}}))}))}),[])}(),r.a.createElement(h.a,null,r.a.createElement(M,null),r.a.createElement(E.b,{exact:!0,path:"/"}," ",r.a.createElement(E.a,{to:k})," "),r.a.createElement(E.b,{path:"/comments-system"}," ",r.a.createElement(E.a,{to:k})," "),r.a.createElement(E.b,{path:k,component:z}),r.a.createElement(E.b,{path:"/signin",component:X}),r.a.createElement(E.b,{path:"/signup",component:Y}),r.a.createElement(E.b,{path:"/password-reset",component:Z}),r.a.createElement(E.b,{path:"/account",component:$}))}),te={key:"root",blacklist:["commentsStore"],storage:u.a},ae=Object(i.a)(te,_),ne=Object(c.createStore)(ae,Object(d.composeWithDevTools)()),re=Object(i.b)(ne);Object(o.render)(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:ne},r.a.createElement(l.a,{loading:null,persistor:re},r.a.createElement(U.Provider,{value:w},r.a.createElement(ee,null))))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.950d78da.chunk.js.map