(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,n,t){e.exports=t.p+"static/media/ava.2c37a9e6.jpg"},295:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(95);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},296:function(e,n,t){e.exports={users:"Users_users__1N4T-",user:"Users_user__3rXLp"}},298:function(e,n,t){e.exports={pages:"Paginator_pages__2PPGh",page:"Paginator_page__31VU5",selectedPage:"Paginator_selectedPage__13SmY"}},303:function(e,n,t){"use strict";t.r(n);var r=t(49),a=t(50),o=t(52),u=t(51),l=t(0),s=t.n(l),i=t(20),c=t(96),p=t(69),f=t(296),g=t.n(f),m=t(295),h=t(298),d=t.n(h),P=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,i=Math.ceil(n/t),c=[],p=1;p<=i;p++)c.push(p);var f=Math.ceil(i/u),g=Object(l.useState)(1),h=Object(m.a)(g,2),P=h[0],v=h[1],y=(P-1)*u+1,b=P*u;return s.a.createElement("div",{className:d.a.pages},P>1&&s.a.createElement("button",{onClick:function(){v(P-1)}},"Prev"),c.filter((function(e){return e>=y&&e<=b})).map((function(e){var n=r===e?d.a.selectedPage:"";return s.a.createElement("span",{className:d.a.page+" "+n,onClick:function(n){a(e)}},e)})),f>P&&s.a.createElement("button",{onClick:function(){v(P+1)}},"Next"))},v=t(293),y=t.n(v),b=t(12),w=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollow,a=e.follow,o=n;return s.a.createElement("div",{className:g.a.user,key:o.id},s.a.createElement("span",null,s.a.createElement(b.b,{to:"/profile/"+o.id},s.a.createElement("img",{className:"avatar",src:null!=o.photos.small?o.photos.small:y.a}))),o.followed?s.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){r(o.id)}},"Unfollow "):s.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){a(o.id)}},"Follow"),s.a.createElement("span",null,s.a.createElement("span",null,o.name),s.a.createElement("span",null,o.status)),s.a.createElement("span",null,s.a.createElement("span",null,"u.location.city"),",",s.a.createElement("span",null,"u.location.country")))};function E(e,n){return e===n}function C(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function S(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var _=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,u=r.pop(),l=S(r),s=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return s.apply(null,e)}));return i.resultFunc=u,i.dependencies=l,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,t=null,r=null;return function(){return C(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var j=_((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),U=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},O=function(e){return e.usersPage.followingInProgress},F=function(e){var n=e.currentPage,t=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,o=Object(p.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged"]);return s.a.createElement("div",{className:g.a.users},s.a.createElement(P,{currentPage:n,onPageChanged:a,totalItemsCount:t,pageSize:r}),o.users.map((function(e){return s.a.createElement(w,{user:e,followingInProgress:o.followingInProgress,key:e.id,unfollow:o.unfollow,follow:o.follow})})))},N=t(53),x=t(8),A=function(e){Object(o.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).onPageChanged=function(e){var n=a.props.pageSize;a.props.getUsers(e,n)},a}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(N.a,null):null,s.a.createElement(F,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(s.a.Component);n.default=Object(x.d)(Object(i.b)((function(e){return{users:j(e),pageSize:U(e),totalUsersCount:k(e),currentPage:z(e),isFetching:I(e),followingInProgress:O(e)}}),{follow:c.b,unfollow:c.f,setCurrentPage:c.d,toggleFollowingProgress:c.e,getUsers:c.c}))(A)}}]);
//# sourceMappingURL=4.a7aa3b19.chunk.js.map