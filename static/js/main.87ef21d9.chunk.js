(this["webpackJsonpcomments-system"]=this["webpackJsonpcomments-system"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/heart.77100eea.svg"},26:function(e,t,a){e.exports=a.p+"static/media/filled-heart.f2610513.svg"},42:function(e,t,a){e.exports=a.p+"static/media/avatar.511718fc.svg"},43:function(e,t,a){e.exports=a.p+"static/media/comments.d68b6143.svg"},45:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),o=a(10),c=a(4),u=a(32),m=a(37),i=a.n(m),l=a(38),d=a(39),f=a(5),p={authUser:null,username:null};var h=a(15);function E(e,t){var a;switch(t.type){case"ADD_RESPONSES":return Object(f.a)({},e,{responses:[].concat(Object(h.a)(e.responses),Object(h.a)(t.payload.responses))});case"SET_RESPONSES_OVER":return Object(f.a)({},e,{isResponsesOver:!0});case"CREATE_RESPONSE":return a=[].concat(Object(h.a)(e.responses),[t.payload.response]),Object(f.a)({},e,{responses:a});case"SET_RESPONS_LIKES":return(a=e.responses)[t.payload.responseIndex].likesCount=t.payload.likesCount,Object(f.a)({},e,{responses:a});case"SET_IS_RESPONS_LIKED":return(a=e.responses)[t.payload.responseIndex].isLiked=t.payload.isLiked,Object(f.a)({},e,{responses:a});default:return e}}var b={comments:[],isCommentsOver:!1};var _=Object(o.combineReducers)({authUserStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_AUTH_USER":return{authUser:t.payload,username:null};case"SET_AUTH_USER_USERNAME":return Object(f.a)({},e,{username:t.payload});default:return e}},commentsStore:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_COMMENTS":return e=[].concat(Object(h.a)(a.comments),Object(h.a)(n.payload)),Object(f.a)({},a,{comments:e});case"SET_COMMENTS_OVER":return Object(f.a)({},a,{isCommentsOver:!0});case"CREATE_COMMENT":return e=[n.payload].concat(Object(h.a)(a.comments)),Object(f.a)({},a,{comments:e});case"SET_COMMENT_LIKES":return(e=a.comments)[n.payload.index].likesCount=n.payload.likesCount,Object(f.a)({},a,{comments:e});case"SET_IS_COMMENT_LIKED":return(e=a.comments)[n.payload.index].isLiked=n.payload.isLiked,Object(f.a)({},a,{comments:e});case"ADD_RESPONSES":case"SET_RESPONSES_OVER":case"CREATE_RESPONSE":case"SET_RESPONS_LIKES":case"SET_IS_RESPONS_LIKED":return t=E(t=a.comments[n.payload.commentIndex],n),(e=a.comments)[n.payload.commentIndex]=t,Object(f.a)({},a,{comments:e});default:return a}}}),v=a(6),O=a(14),g=function(e,t){return{type:"SET_COMMENT_LIKES",payload:{index:e,likesCount:t}}},S=function(e,t){return{type:"SET_IS_COMMENT_LIKED",payload:{index:e,isLiked:t}}},j=function(e,t,a){return{type:"SET_RESPONS_LIKES",payload:{commentIndex:e,responseIndex:t,likesCount:a}}},N=function(e,t,a){return{type:"SET_IS_RESPONS_LIKED",payload:{commentIndex:e,responseIndex:t,isLiked:a}}},y=a(40),R=a(41),C=a(13),k=a.n(C),x=(a(56),a(58),{apiKey:"AIzaSyDpt6WXqe7-GrSdSZxe1w1jD_h9XQIQWYA",authDomain:"comments-system-6e56a.firebaseapp.com",databaseURL:"https://comments-system-6e56a.firebaseio.com",projectId:"comments-system-6e56a",storageBucket:"comments-system-6e56a.appspot.com",messagingSenderId:"463788584226",appId:"1:463788584226:web:d0787997fe53b69d8d497b",measurementId:"G-LMGZ5VEP27"});var w=new function e(){var t=this;Object(R.a)(this,e),this.auth=void 0,this.db=void 0,this.parentURL=void 0,this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){var a;return null===(a=t.auth.currentUser)||void 0===a?void 0:a.updatePassword(e)},this.userRef=function(e){return t.db.collection("users").doc(e)},this.doCreateComment=function(e){return t.commentsRef().add(e)},this.commentsRef=function(){return t.db.collection("pages").doc(t.parentURL).collection("comments")},this.commentLikesRef=function(e){return e.collection("likes")},this.doCreateResponse=function(e,a){return t.responsesRef(e).add(a)},this.responsesRef=function(e){return e.collection("responses")},this.responseLikesRef=function(e){return e.collection("likes")},k.a.initializeApp(x),this.auth=k.a.auth(),this.db=k.a.firestore(),this.parentURL=function(){var e,t=window.location.search.substring(1).split("&"),a=Object(y.a)(t);try{for(a.s();!(e=a.n()).done;){var n=e.value.split("=");if("parentURL"===n[0])return n[1]}}catch(s){a.e(s)}finally{a.f()}return"default"}()},I=s.a.createContext(w);var U="/signin",L=a(42),T=a.n(L),P=a(43),A=a.n(P),D=function(){var e=Object(c.c)((function(e){return e.authUserStore})),t=e.authUser,a=e.username;a||(a="Loading...");var n="/comments"===Object(O.g)().pathname,r=n?"navbar__button navbar__button_pressed":"navbar__button",o=n?"navbar__button":"navbar__button navbar__button_pressed";return s.a.createElement("nav",{className:"navbar"},s.a.createElement(v.b,{to:"/comments",className:r},s.a.createElement("img",{className:"navbar__img",src:A.a,alt:"Comments"})),t?s.a.createElement(v.b,{to:"/account",className:o},a):s.a.createElement(v.b,{to:U,className:o},s.a.createElement("img",{className:"navbar__img",src:T.a,alt:"Sign In"})))},M=a(2),W=function(){var e=Object(O.f)(),t=Object(c.b)(),a=Object(n.useContext)(I),r=Object(c.c)((function(e){return e.authUserStore})),o=r.authUser,u=r.username,m=Object(n.useState)(""),i=Object(M.a)(m,2),l=i[0],d=i[1];var p=l?"message-form":"message-form message-form_closed";return o?s.a.createElement("form",{className:p,onSubmit:function(n){if(n.preventDefault(),l)if(u&&o){var s=l.replace("\n","__n"),r={authorUsername:u,authorUID:null===o||void 0===o?void 0:o.uid,text:s,created:k.a.firestore.Timestamp.fromMillis(Date.now())};a.doCreateComment(r).then((function(e){return t(function(e){return{type:"CREATE_COMMENT",payload:e}}(Object(f.a)({},r,{docRef:e,responses:[],isResponsesOver:!1})))})).then((function(){return d("")})).catch((function(e){return console.error("Error adding comment: ",e)}))}else o||e.push(U)}},s.a.createElement("textarea",{className:"message-form__text",value:l,onChange:function(e){return d(e.target.value)},maxLength:1e3,placeholder:"Write a comment..."}),s.a.createElement("button",{className:"message-form__submit",type:"submit",disabled:!l},"Write as ",u||"you")):s.a.createElement("div",{className:"message-form-sign-in"},s.a.createElement(v.b,{to:U},"Sign in")," to write a comment")},K=a(24),F=a.n(K),B=function(e){var t=e.commentRef,a=e.commentIndex,r=e.closeForm,o=Object(O.f)(),u=Object(c.b)(),m=Object(n.useContext)(I),i=Object(c.c)((function(e){return e.authUserStore})),l=i.authUser,d=i.username,p=Object(n.useState)(""),h=Object(M.a)(p,2),E=h[0],b=h[1];return l?s.a.createElement("form",{className:"message-form",onSubmit:function(e){if(e.preventDefault(),E)if(d&&l){var n=E.replace("\n","__n"),s={authorUsername:d,authorUID:null===l||void 0===l?void 0:l.uid,text:n,created:k.a.firestore.Timestamp.fromMillis(Date.now())};m.doCreateResponse(t,s).then((function(e){return u(function(e,t){return{type:"CREATE_RESPONSE",payload:{commentIndex:e,response:t}}}(a,Object(f.a)({},s,{docRef:e})))})).then((function(){return r()})).catch((function(e){return console.error("Error adding response: ",e)}))}else l||o.push(U)}},s.a.createElement("textarea",{className:"message-form__text",value:E,onChange:function(e){return b(e.target.value)},maxLength:1e3,placeholder:"Write a response..."}),s.a.createElement("button",{className:"message-form__submit",type:"submit",disabled:!E},"Reply as ",d||"you")):s.a.createElement("div",{className:"message-form-sign-in"},s.a.createElement(v.b,{to:U},"Sign in")," to write a response")},H=a(25),V=a.n(H),G=a(26),z=a.n(G),J=function(e){var t=e.response,a=e.responseIndex,r=e.commentIndex,o=Object(O.f)(),u=Object(c.b)(),m=Object(n.useContext)(I),i=Object(c.c)((function(e){return e.authUserStore.authUser}));Object(n.useEffect)((function(){!function(){var e=t.docRef;m.responseLikesRef(e).get().then((function(e){var t=e.docs.length,n=0!==e.docs.filter((function(e){return e.data().uid===(null===i||void 0===i?void 0:i.uid)})).length;u(j(r,a,t)),u(N(r,a,n))}))}()}),[i]);var l=t.isLiked?z.a:V.a,d=t.text.split("__n").map((function(e,t){return s.a.createElement("p",{key:t},e)}));return s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"message__author"},t.authorUsername),s.a.createElement("div",{className:"message__created"},F.a.unix(t.created.seconds).fromNow()),s.a.createElement("div",{className:"message__text"},d),s.a.createElement("button",{className:"message__like",onClick:function(){if(i){if(void 0!==t.likesCount&&void 0!==t.isLiked){var e=m.responseLikesRef(t.docRef).doc(i.uid);t.isLiked?(u(j(r,a,t.likesCount-1)),e.delete()):(u(j(r,a,t.likesCount+1)),e.set({uid:i.uid})),u(N(r,a,!t.isLiked))}}else o.push(U)}},s.a.createElement("img",{src:l,alt:"like"}),s.a.createElement("span",{className:"message__likes-count"},t.likesCount)))};var Q=function(e){var t=e.comment,a=e.commentIndex,r=e.shouldShowForm,o=e.closeForm,u=function(e,t){var a=Object(c.b)(),s=e.responses,r=e.isResponsesOver,o=Object(n.useContext)(I).responsesRef(e.docRef),u=Object(n.useState)(o.orderBy("created").limit(10)),m=Object(M.a)(u,2),i=m[0],l=m[1],d=Object(n.useState)(!1),p=Object(M.a)(d,2),h=p[0],E=p[1];function b(){h||(E(!0),i.get().then((function(e){if(e.docs.length<10&&a(function(e){return{type:"SET_RESPONSES_OVER",payload:{commentIndex:e}}}(t)),e.docs.length){var n=e.docs[e.docs.length-1];l(o.orderBy("created").limit(10).startAfter(n));var s=e.docs.map((function(e){return Object(f.a)({},e.data(),{docRef:e.ref})}));a(function(e,t){return{type:"ADD_RESPONSES",payload:{commentIndex:e,responses:t}}}(t,s)),E(!1)}})))}return Object(n.useEffect)((function(){(null===s||void 0===s?void 0:s.length)||b()}),[]),{responses:s,loadResponses:b,isResponsesOver:r,isLoading:h}}(t,a),m=u.responses,i=u.loadResponses,l=u.isResponsesOver,d=u.isLoading,p=null===m||void 0===m?void 0:m.map((function(e,t){return s.a.createElement(J,{key:e.created.nanoseconds,responseIndex:t,commentIndex:a,response:e})})),h=!l&&!d;return s.a.createElement("div",{className:"responses"},r&&s.a.createElement(B,{commentRef:t.docRef,commentIndex:a,closeForm:o}),p,h&&s.a.createElement("button",{onClick:i},"Load more responses"))},X=function(e){var t=e.comment,a=e.commentIndex,r=Object(O.f)(),o=Object(c.b)(),u=Object(n.useContext)(I),m=Object(c.c)((function(e){return e.authUserStore.authUser})),i=Object(n.useState)(!1),l=Object(M.a)(i,2),d=l[0],f=l[1];Object(n.useEffect)((function(){!function(){var e=t.docRef;u.commentLikesRef(e).get().then((function(e){var t=e.docs.length,n=0!==e.docs.filter((function(e){return e.data().uid===(null===m||void 0===m?void 0:m.uid)})).length;o(g(a,t)),o(S(a,n))}))}()}),[m]);var p=t.isLiked?z.a:V.a,h=t.text.split("__n").map((function(e,t){return s.a.createElement("p",{key:t},e)}));return s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"message__author"},t.authorUsername),s.a.createElement("div",{className:"message__created"},F.a.unix(t.created.seconds).fromNow()),s.a.createElement("div",{className:"message__text"},h),s.a.createElement("button",{className:"message__like",onClick:function(){if(m){if(void 0!==t.likesCount&&void 0!==t.isLiked){var e=u.commentLikesRef(t.docRef).doc(null===m||void 0===m?void 0:m.uid);t.isLiked?(o(g(a,t.likesCount-1)),e.delete()):(o(g(a,t.likesCount+1)),e.set({uid:null===m||void 0===m?void 0:m.uid})),o(S(a,!t.isLiked))}}else r.push(U)}},s.a.createElement("img",{src:p,alt:"like"}),s.a.createElement("span",{className:"message__likes-count"},t.likesCount)),s.a.createElement("button",{className:"message__reply",onClick:function(){m?f(!d):r.push(U)}},"Reply"),s.a.createElement(Q,{comment:t,commentIndex:a,shouldShowForm:d,closeForm:function(){f(!1)}}))};var Z,q=function(){var e=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.commentsStore})),a=t.comments,s=t.isCommentsOver,r=Object(n.useContext)(I),o=Object(n.useState)(r.commentsRef().orderBy("created","desc").limit(50)),u=Object(M.a)(o,2),m=u[0],i=u[1],l=Object(n.useState)(!1),d=Object(M.a)(l,2),p=d[0],h=d[1];function E(){p||(h(!0),m.get().then((function(t){if(t.docs.length<50&&e({type:"SET_COMMENTS_OVER"}),t.docs.length){var a=t.docs[t.docs.length-1];i(r.commentsRef().orderBy("created","desc").limit(50).startAfter(a));var n=t.docs.map((function(e){return Object(f.a)({},e.data(),{docRef:e.ref,responses:[],isResponsesOver:!1})}));e(function(e){return{type:"ADD_COMMENTS",payload:e}}(n)),h(!1)}})))}return Object(n.useEffect)((function(){a.length||E()}),[]),{comments:a,loadComments:E,isCommentsOver:s,isLoading:p}}(),t=e.comments,a=e.loadComments,r=e.isCommentsOver,o=e.isLoading,u=t.map((function(e,t){return s.a.createElement(X,{key:e.created.nanoseconds,commentIndex:t,comment:e})})),m=!r&&!o;return!r&&!t.length?s.a.createElement("p",null,"Loading..."):s.a.createElement("div",{className:"comments"},s.a.createElement(W,null),u,m&&s.a.createElement("button",{onClick:a},"Load more comments"))},Y=a(12),$=a.n(Y),ee=function(){var e=Object(O.f)(),t=Object(n.useContext)(I),a=Object(n.useState)(""),r=Object(M.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(""),m=Object(M.a)(u,2),i=m[0],l=m[1],d=Object(n.useState)(null),f=Object(M.a)(d,2),p=f[0],h=f[1];var E="auth-form__input",b="auth-form__input";E+=o&&!$.a.validate(o)?" auth-form__input_invalid":"",b+=i&&i.length<6?" auth-form__input_invalid":"";var _=i.length<6||!$.a.validate(o);return s.a.createElement("div",{className:"auth-form-background"},s.a.createElement("div",{className:"auth-form"},s.a.createElement("h2",{className:"auth-form__title"},"Sign In"),s.a.createElement("form",{onSubmit:function(a){a.preventDefault(),_||t.doSignInWithEmailAndPassword(o,i).then((function(){c(""),l(""),h(null),e.push("/comments")})).catch(h)}},s.a.createElement("input",{name:"email",className:E,value:o,onChange:function(e){return c(e.target.value.trim())},type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"password",className:b,value:i,onChange:function(e){return l(e.target.value.trim())},type:"password",placeholder:"Password"}),s.a.createElement("button",{disabled:_,type:"submit",className:"auth-form__input auth-form__button"},"Sign In"),p&&s.a.createElement("p",{className:"auth-form__error"},p.message)),s.a.createElement("p",{className:"auth-form__link"},"Don't have an account? ",s.a.createElement(v.b,{to:"/signup"},"Sign up")),s.a.createElement("p",{className:"auth-form__link"},"Forgot password? ",s.a.createElement(v.b,{to:"/password-reset"},"Reset"))))},te=function(){var e=Object(O.f)(),t=Object(n.useContext)(I),a=Object(n.useState)(""),r=Object(M.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(""),m=Object(M.a)(u,2),i=m[0],l=m[1],d=Object(n.useState)(""),f=Object(M.a)(d,2),p=f[0],h=f[1],E=Object(n.useState)(""),b=Object(M.a)(E,2),_=b[0],g=b[1],S=Object(n.useState)(null),j=Object(M.a)(S,2),N=j[0],y=j[1];var R="auth-form__input",C="auth-form__input",k="auth-form__input",x="auth-form__input";R+=o&&(o.length<3||o.length>15)?" auth-form__input_invalid":"",C+=i&&!$.a.validate(i)?" auth-form__input_invalid":"",k+=p&&(p.length<6||p.length>25)?" auth-form__input_invalid":"",x+=_&&_!==p?" auth-form__input_invalid":"";var w=p!==_||p.length<6||!$.a.validate(i)||""===o;return s.a.createElement("div",{className:"auth-form-background"},s.a.createElement("div",{className:"auth-form"},s.a.createElement("h2",{className:"auth-form__title"},"Sign Up"),s.a.createElement("form",{onSubmit:function(a){a.preventDefault(),w||t.doCreateUserWithEmailAndPassword(i,p).then((function(e){var a,n=null===(a=e.user)||void 0===a?void 0:a.uid;n&&t.userRef(n).set({username:o,email:i})})).then((function(){c(""),l(""),h(""),g(""),y(null),e.push("/comments")})).catch(y)}},s.a.createElement("input",{name:"username",className:R,value:o,onChange:function(e){return c(e.target.value.trim())},type:"text",placeholder:"Username"}),s.a.createElement("input",{name:"email",className:C,value:i,onChange:function(e){return l(e.target.value.trim())},type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"passwordOne",className:k,value:p,onChange:function(e){return h(e.target.value.trim())},type:"password",placeholder:"Password"}),s.a.createElement("input",{name:"passwordTwo",className:x,value:_,onChange:function(e){return g(e.target.value.trim())},type:"password",placeholder:"Confirm Password"}),s.a.createElement("button",{disabled:w,type:"submit",className:"auth-form__input auth-form__button"},"Sign Up"),N&&s.a.createElement("p",{className:"auth-form__error"},N.message)),s.a.createElement("p",{className:"auth-form__link"},"Already have an account? ",s.a.createElement(v.b,{to:U},"Sign in"))))},ae=function(){var e=Object(O.f)(),t=Object(n.useContext)(I),a=Object(n.useState)(""),r=Object(M.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(null),m=Object(M.a)(u,2),i=m[0],l=m[1];var d="auth-form__input";d+=o&&!$.a.validate(o)?" auth-form__input_invalid":"";var f=!$.a.validate(o);return s.a.createElement("div",{className:"auth-form-background"},s.a.createElement("div",{className:"auth-form"},s.a.createElement("h2",{className:"auth-form__title"},"Reset Password"),s.a.createElement("form",{onSubmit:function(){f||t.doPasswordReset(o).then((function(){c(""),l(null),e.push(U)})).catch(l)}},s.a.createElement("input",{name:"email",className:d,value:o,onChange:function(e){return c(e.target.value.trim())},type:"text",placeholder:"Email Address"}),s.a.createElement("button",{disabled:f,type:"submit",className:"auth-form__input auth-form__button"},"Send reset email"),i&&s.a.createElement("p",{className:"auth-form__error"},i.message)),s.a.createElement("p",{className:"auth-form__link"},"Recall password? ",s.a.createElement(v.b,{to:U},"Sign in"))))},ne=function(){var e=Object(n.useContext)(I),t=Object(O.f)();return s.a.createElement("button",{onClick:function(){e.doSignOut(),t.push("/comments")},className:"auth-form__input auth-form__button"},"Sign Out")},se=function(){var e=Object(n.useContext)(I),t=Object(n.useState)(""),a=Object(M.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),u=Object(M.a)(c,2),m=u[0],i=u[1],l=Object(n.useState)(null),d=Object(M.a)(l,2),f=d[0],p=d[1];var h="auth-form__input",E="auth-form__input";h+=r&&r.length<6?" auth-form__input_invalid":"",E+=m&&m!==r?" auth-form__input_invalid":"";var b=r!==m||r.length<6;return s.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),b||null===(a=e.doPasswordUpdate(r))||void 0===a||a.then((function(){o(""),i(""),p(null)})).catch(p)}},s.a.createElement("input",{name:"passwordOne",className:h,value:r,onChange:function(e){return o(e.target.value.trim())},type:"password",placeholder:"New Password"}),s.a.createElement("input",{name:"passwordTwo",className:E,value:m,onChange:function(e){return i(e.target.value.trim())},type:"password",placeholder:"Confirm Password"}),s.a.createElement("button",{disabled:b,type:"submit",className:"auth-form__input auth-form__button"},"Update password"),f&&s.a.createElement("p",{className:"auth-form__error"},f.message))},re=(Z=function(e){return!!e},function(e){return function(t){var a=Object(O.f)(),n=Object(c.c)((function(e){return e.authUserStore.authUser})),r=Z(n);return r||a.push(U),r?s.a.createElement(e,t):null}})((function(){var e=Object(c.c)((function(e){return e.authUserStore})),t=e.authUser,a=e.username;a||(a="Loading ...");var n=null===t||void 0===t?void 0:t.email;return s.a.createElement("div",{className:"auth-form-background"},s.a.createElement("div",{className:"auth-form"},s.a.createElement("h2",{className:"auth-form__title auth-form__username"},a),s.a.createElement("h2",{className:"auth-form__title auth-form__email"},n),s.a.createElement(se,null),s.a.createElement("hr",null),s.a.createElement(ne,null)))})),oe=(a(64),a(65),function(){return function(){var e=Object(c.b)(),t=Object(n.useContext)(I);Object(n.useEffect)((function(){return t.auth.onAuthStateChanged((function(a){e({type:"CHANGE_AUTH_USER",payload:a}),a&&t.userRef(null===a||void 0===a?void 0:a.uid).get().then((function(t){var a;if(t.exists){var n=null===(a=t.data())||void 0===a?void 0:a.username;e(function(e){return{type:"SET_AUTH_USER_USERNAME",payload:e}}(n))}}))}))}),[])}(),s.a.createElement(v.a,{basename:"/comments-system"},s.a.createElement(D,null),s.a.createElement(O.b,{exact:!0,path:"/"}," ",s.a.createElement(O.a,{to:"/comments"})," "),s.a.createElement(O.b,{path:"/comments",component:q}),s.a.createElement(O.b,{path:U,component:ee}),s.a.createElement(O.b,{path:"/signup",component:te}),s.a.createElement(O.b,{path:"/password-reset",component:ae}),s.a.createElement(O.b,{path:"/account",component:re}))}),ce={key:"root",blacklist:["commentsStore"],storage:i.a},ue=Object(u.a)(ce,_),me=Object(o.createStore)(ue,Object(d.composeWithDevTools)()),ie=Object(u.b)(me);Object(r.render)(s.a.createElement(s.a.StrictMode,null,s.a.createElement(c.a,{store:me},s.a.createElement(l.a,{loading:null,persistor:ie},s.a.createElement(I.Provider,{value:w},s.a.createElement(oe,null))))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.87ef21d9.chunk.js.map