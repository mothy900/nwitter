(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(31),s=n.n(r),i=n(8),o=n(22),u=n(7),l=n(6),j=n.n(l),d=n(13),p=n(24);n(39),n(53),n(54);p.a.initializeApp({apiKey:"AIzaSyAx5AwVCLUJAe0WrKcwr2HE0xoyxB7IFPk",authDomain:"nwitter-2dc84.firebaseapp.com",projectId:"nwitter-2dc84",storageBucket:"nwitter-2dc84.appspot.com",messagingSenderId:"837227243878",appId:"1:837227243878:web:a9a9de84463218fc2080a7"});var b=p.a,f=p.a.auth(),h=p.a.firestore(),O=p.a.storage(),x=n(1),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),p=Object(i.a)(l,2),b=p[0],h=p[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,className:"container",children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"password",required:!0,value:o,onChange:w,className:"authInput"}),Object(x.jsx)("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Sign In"}),v&&Object(x.jsx)("span",{className:"authError",children:v})]}),Object(x.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:b?"Sign In":"Create Account"})]})},v=n(11),g=n(23),w=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new b.auth.GoogleAuthProvider:"github"===n&&(a=new b.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"authContainer",children:[Object(x.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"authBtns",children:[Object(x.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(x.jsx)(v.a,{icon:g.b})]}),Object(x.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(x.jsx)(v.a,{icon:g.a})]})]})]})},y=n(33),N=n(18),k=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),p=l[0],b=l[1],f=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").orderBy("createdAt").get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()})),Object(x.jsx)("div",{className:"nweet",children:s?Object(x.jsx)(x.Fragment,{children:n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(x.jsx)("input",{type:"text",placeholder:"Edit your Nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(x.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl}),n&&Object(x.jsxs)("div",{className:"nweet__actions",children:[Object(x.jsx)("span",{onClick:f,children:Object(x.jsx)(v.a,{icon:N.d})}),Object(x.jsx)("span",{onClick:m,children:Object(x.jsx)(v.a,{icon:N.a})})]})]})})},I=n(56),S=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1],b=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.prev=13,e.next=16,h.collection("nweets").add(o);case 16:s(""),p(""),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[13,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:b,className:"factoryForm",children:[Object(x.jsxs)("div",{className:"factoryInput__container",children:[Object(x.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(x.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(x.jsx)("span",{children:"Add photos"}),Object(x.jsx)(v.a,{icon:N.b})]}),Object(x.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(x.jsxs)("div",{className:"factoryForm__attachment",children:[Object(x.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(x.jsx)("span",{children:"Remove"}),Object(x.jsx)(v.a,{icon:N.c})]})]})]})},F=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=h.collection("nweets").onSnapshot((function(t){var n=t.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));return s(n),function(){return e()}}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(S,{userObj:t}),Object(x.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(x.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],p=Object(a.useState)(""),b=Object(i.a)(p,2),m=b[0],g=b[1],w=Object(a.useState)(null),y=Object(i.a)(w,2),k=y[0],I=y[1],S=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(j.a.mark((function e(a){var c,r,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c="",n.displayName===o){e.next=5;break}return e.next=5,n.updateProfile({displayName:o});case 5:if(t(),""===m){e.next=26;break}return r=O.ref().child("profilePic/".concat(n.uid)),e.next=10,r.putString(m,"data_url");case 10:return s=e.sent,e.next=13,s.ref.getDownloadURL();case 13:return c=e.sent,i={createdAt:Date.now(),creatorId:n.uid,profilePicUrl:c},e.prev=15,e.next=18,h.collection("profilePic").doc("IRQoXujxtcv93a8yILOQ").delete();case 18:return e.next=20,h.collection("profilePic").doc("".concat(n.uid)).set(i);case 20:g(""),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[15,23]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.collection("profilePic").doc("".concat(n.uid)),e.next=3,t.get();case 3:(a=e.sent).exists?console.log("Document data:",a.data()):console.log("No such document!"),I(a.data().profilePicUrl);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){S(),A()}));return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("form",{onSubmit:F,className:"profileForm",children:[Object(x.jsx)("div",{className:"profile_Img",children:Object(x.jsx)("img",{src:"".concat(k)})}),Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}}),Object(x.jsx)("div",{className:"profile-pic-upload",children:Object(x.jsxs)("label",{htmlFor:"profile-pic",className:"profilePic_input",children:[Object(x.jsx)("span",{children:"Add photos"}),Object(x.jsx)(v.a,{icon:N.b})]})}),Object(x.jsx)("input",{id:"profile-pic",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;g(t)},n.readAsDataURL(t)},style:{opacity:0,height:0}}),m&&Object(x.jsxs)("div",{className:"factoryForm__profilePic",children:[Object(x.jsx)("img",{src:"".concat(m),style:{backgroundImage:m}}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return g("")},children:[Object(x.jsx)("span",{children:"Remove"}),Object(x.jsx)(v.a,{icon:N.c})]})]})]}),Object(x.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/"),t()},children:"Log Out"})]})},C=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(x.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(x.jsx)("li",{children:Object(x.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(x.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(x.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},P=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(x.jsxs)(o.a,{children:[n&&Object(x.jsx)(C,{userObj:a}),Object(x.jsx)(u.c,{children:Object(x.jsx)(x.Fragment,{children:n?Object(x.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(F,{userObj:a})}),Object(x.jsx)(u.a,{exact:!0,path:"/profile",children:Object(x.jsx)(A,{userObj:a,refreshUser:t})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(w,{})})})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[n?Object(x.jsx)(P,{refreshUser:function(){var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing ...",Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)("footer",{className:"footer-print",children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})})]})};n(51);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d5541da9.chunk.js.map