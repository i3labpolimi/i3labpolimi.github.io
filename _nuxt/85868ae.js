(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{257:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("105e3f1a",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";var n=r(11),o=r(0),c=r(3),f=r(105),l=r(18),d=r(13),m=r(185),v=r(39),_=r(104),h=r(184),N=r(4),I=r(70).f,x=r(32).f,E=r(16).f,C=r(259),y=r(260).trim,w="Number",S=o.Number,T=S.prototype,A=o.TypeError,k=c("".slice),L=c("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,r,n,o,c,f,l,code,d=h(t,"number");if(_(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=y(d),43===(e=L(d,0))||45===e){if(88===(r=L(d,2))||120===r)return NaN}else if(48===e){switch(L(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=k(d,2)).length,l=0;l<f;l++)if((code=L(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(f(w,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,R=function(t){var e=arguments.length<1?0:S(O(t)),r=this;return v(T,r)&&N((function(){C(r)}))?m(Object(e),r,R):e},$=n?I(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;$.length>j;j++)d(S,M=$[j])&&!d(R,M)&&E(R,M,x(S,M));R.prototype=T,T.constructor=R,l(o,w,R)}},259:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},260:function(t,e,r){var n=r(3),o=r(21),c=r(12),f=r(261),l=n("".replace),d="["+f+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),_=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,m,"")),2&t&&(r=l(r,v,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},261:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},262:function(t,e,r){"use strict";r(257)},263:function(t,e,r){var n=r(102)(!1);n.push([t.i,".card[data-v-10f49ad1]{border:2px solid #00f}img[data-v-10f49ad1]{height:100px}",""]),t.exports=n},264:function(t,e,r){"use strict";r.r(e);r(258);var n={name:"CardComponent",props:{name:{type:String,required:!0},img:{type:String,required:!0},id:{type:Number,required:!0},breed:{type:String,required:!0}},methods:{goToDetails:function(){this.$router.push("/details/".concat(this.id))}}},o=(r(262),r(22)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("img",{staticClass:"rounded card-img-top",attrs:{src:t.img,alt:""}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.breed))]),t._v(" "),r("div",{staticClass:"btn btn-primary",on:{click:function(e){return t.goToDetails()}}},[t._v("See Details")])])])}),[],!1,null,"10f49ad1",null);e.default=component.exports},266:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(58),{name:"ListPage",components:{Card:r(264).default},data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.get("/api/cats");case 3:return n=e.sent,data=n.data,e.abrupt("return",{catList:data});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(22),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page container mt-5"},[r("h1",[t._v("List page")]),t._v(" "),r("div",{staticClass:"row mt-3"},t._l(t.catList,(function(t,e){return r("card",{key:"cat-index-"+e,staticClass:"col-sm-2 m-2",attrs:{id:t.id,name:t.name,img:t.img,breed:t.breed}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(264).default})}}]);