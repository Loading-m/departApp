(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e2334be"],{"230f":function(t,e,a){"use strict";var r=a("3fce"),n=a.n(r);n.a},"28bc":function(t,e,a){"use strict";var r=a("41b2"),n=a.n(r);n.a},"3fac":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("span",{staticClass:"nav-prev",class:{"nav-disabled":t.isPrevDisabled},on:{click:t.prev}},[t._v(" 前一天 ")]),a("span",{staticClass:"nav-current"},[t._v(t._s(t.currentString))]),a("span",{staticClass:"nav-next",class:{"nav-disabled":t.isNextDisabled},on:{click:t.next}},[t._v(" 后一天 ")])])},n=[],i=(a("a9e3"),a("5a0c")),s=a.n(i),c=(a("a471"),{name:"index",props:{date:{type:Number,required:!0},prev:{type:Function,required:!0},next:{type:Function,required:!0},isPrevDisabled:{type:Boolean,required:!0},isNextDisabled:{type:Boolean,required:!0}},data:function(){return{}},computed:{currentString:function(){var t=s()(this.date);return t.format("M月D日")+t.locale("zh-cn").format("ddd")}},methods:{}}),d=c,u=(a("230f"),a("2877")),o=Object(u["a"])(d,r,n,!1,null,"5fa929ff",null);e["a"]=o.exports},"3fce":function(t,e,a){},"41b2":function(t,e,a){},"4a44":function(t,e,a){"use strict";var r=a("8249"),n=a.n(r);n.a},"678b":function(t,e,a){"use strict";var r=a("a3dc"),n=a.n(r);n.a},6991:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header-wrapper"},[t.searchParsed?a("headers",{attrs:{title:t.trainNumber,"on-back":t.onBack}}):t._e()],1),a("div",{staticClass:"detail-wrapper"},[a("detail",{attrs:{"arrive-date":t.arriveDate,"arrive-station":t.arriveStation,"arrive-time-str":t.arriveTimeStr,"depart-date":t.departDate,"depart-station":t.departStation,"depart-time-str":t.departTimeStr,"duration-str":t.durationStr,"train-number":t.trainNumber}}),a("candidate",{attrs:{tickets:t.tickets}})],1)])},n=[],i=(a("d3b7"),a("25f0"),a("5530")),s=a("2f62"),c=a("6daa"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"candidate"},[a("ul",t._l(t.tickets,(function(e,r){return a("seat",{key:r,attrs:{idx:r,expanded:t.expandedIndex===r,type:e.type,"price-msg":e.priceMsg,"tickets-left":e.ticketsLeft,channels:e.channels,"on-toggle":t.onToggle}})})),1)])},u=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"bar",on:{click:function(e){return t.onToggle(t.idx)}}},[a("span",{staticClass:"seat"},[t._v(t._s(t.type))]),a("span",{staticClass:"price"},[a("i",[t._v("￥")]),t._v(t._s(t.priceMsg))]),a("span",{staticClass:"btn"},[t._v(t._s(t.expanded?"收起":"预订"))]),a("span",{staticClass:"num"},[t._v(t._s(t.ticketsLeft))])]),a("div",{staticClass:"channels",style:{height:t.expanded?55*t.channels.length+"px":0}},t._l(t.channels,(function(e){return a("channel",{key:e.name,attrs:{type:t.type,desc:e.desc,name:e.name}})})),1)])},_=[],l=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel"},[a("div",{staticClass:"middle"},[a("div",{staticClass:"name"},[t._v(t._s(t.name))]),a("div",{staticClass:"desc"},[t._v(t._s(t.desc))])]),a("router-link",{staticClass:"buy-wrapper",attrs:{to:t.src}},[a("div",{staticClass:"buy"},[t._v("买票")])])],1)}),p=[],T=a("c909"),S=a.n(T),f={name:"Channel",props:{name:{type:String,required:!0},desc:{type:String,required:!0},type:{type:String,required:!0}},data:function(){return{}},computed:{src:function(){return new S.a("/order").setSearch("type",this.type).toString()}},methods:{}},v=f,m=(a("935e"),a("2877")),E=Object(m["a"])(v,l,p,!1,null,"117356da",null),h=E.exports,C={name:"Seat",components:{Channel:h},props:{idx:{type:Number,required:!0},type:{type:String,required:!0},priceMsg:{type:String,required:!0},ticketsLeft:{type:String,required:!0},channels:{type:Array,required:!0},expanded:{type:Boolean,required:!0},onToggle:{type:Function,required:!0}},data:function(){return{}},methods:{}},b=C,A=(a("b309"),Object(m["a"])(b,o,_,!1,null,"207a3a4f",null)),I=A.exports,N={name:"Candidate",components:{Seat:I},props:{tickets:{type:Array,required:!0}},data:function(){return{expandedIndex:-1}},methods:{onToggle:function(t){t!==this.expandedIndex?this.expandedIndex=t:this.expandedIndex=-1}}},D=N,O=(a("678b"),Object(m["a"])(D,d,u,!1,null,"4309a4ec",null)),y=O.exports,R=a("a960"),g=a("3fac"),x=a("a3ad"),k=a("5a0c"),q=a.n(k),P=Object(s["a"])("ticket"),j=P.mapState,M=P.mapActions,V={name:"Index",components:{Detail:c["a"],Candidate:y,Headers:R["a"],Navs:g["a"]},data:function(){return{}},mounted:function(){var t=this.$route.query,e=t.aStation,a=t.dStation,r=t.date,n=t.trainNumber;this.ACTION_SET_DEPART_STATION(a),this.ACTION_SET_ARRIVE_STATION(e),this.ACTION_SET_DEPART_DATE(Object(x["a"])(q()(parseInt(r))).valueOf()),this.ACTION_SET_TRAIN_NUMBER(n),this.ACTION_SET_SEARCH_PARSED(!0),document.title=n+"",this.fetchData()},computed:Object(i["a"])({isPrevDisabled:function(){return Object(x["a"])(this.departDate)<=Object(x["a"])()},isNextDisabled:function(){return Object(x["a"])(this.departDate)-Object(x["a"])()>1728e6}},j({departDate:function(t){return t.departDate},arriveDate:function(t){return t.arriveDate},departTimeStr:function(t){return t.departTimeStr},arriveTimeStr:function(t){return t.arriveTimeStr},departStation:function(t){return t.departStation},arriveStation:function(t){return t.arriveStation},trainNumber:function(t){return t.trainNumber},durationStr:function(t){return t.durationStr},tickets:function(t){return t.tickets},isScheduleVisible:function(t){return t.isScheduleVisible},searchParsed:function(t){return t.searchParsed}})),methods:Object(i["a"])({},M(["ACTION_SET_DEPART_DATE","ACTION_SET_ARRIVE_DATE","ACTION_SET_DEPART_TIME_STR","ACTION_SET_ARRIVE_TIME_STR","ACTION_SET_DEPART_STATION","ACTION_SET_ARRIVE_STATION","ACTION_SET_TRAIN_NUMBER","ACTION_SET_TICKETS","ACTION_SET_SET_SCHEDULE_VISIBLE","ACTION_SET_TOGGLE_SCHEDULE_VISIBLE","ACTION_SET_SEARCH_PARSED","ACTION_SET_NEXT_DATE","ACTION_SET_PREV_DATE","ACTION_SET_DURATION_STR"]),{fetchData:function(){var t=this;if(this.searchParsed){var e=new S.a("/rest/ticket").setSearch("date",q()(this.departDate).format("YYYY-MM-DD")).setSearch("trainNumber",this.trainNumber).toString();fetch(e).then((function(e){return e.json().then((function(e){var a=e.detail,r=e.candidates,n=a.departTimeStr,i=a.arriveTimeStr,s=a.arriveDate,c=a.durationStr;t.ACTION_SET_ARRIVE_DATE(s),t.ACTION_SET_DEPART_TIME_STR(n),t.ACTION_SET_ARRIVE_TIME_STR(i),t.ACTION_SET_TICKETS(r),t.ACTION_SET_DURATION_STR(c)}))}))}},onBack:function(){this.$router.go(-1)},prev:function(){this.isPrevDisabled||this.ACTION_SET_PREV_DATE()},next:function(){this.isNextDisabled||this.ACTION_SET_NEXT_DATE()}})},w=V,B=(a("4a44"),Object(m["a"])(w,r,n,!1,null,"6b9bec53",null));e["default"]=B.exports},"6daa":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("p",{staticClass:"city"},[t._v(t._s(t.departStation))]),a("p",{staticClass:"time"},[t._v(t._s(t.departTimeStr))]),a("p",{staticClass:"date"},[t._v(t._s(t.departDateStr))])]),a("div",{staticClass:"middle"},[a("p",{staticClass:"train-name"},[t._v(t._s(t.trainNumber))]),a("p",{staticClass:"train-time"},[t._v("耗时"+t._s(t.durationStr))])]),a("div",{staticClass:"right"},[a("p",{staticClass:"city"},[t._v(t._s(t.arriveStation))]),a("p",{staticClass:"time"},[t._v(t._s(t.arriveTimeStr))]),a("p",{staticClass:"date"},[t._v(t._s(t.arriveDateStr))])])])])},n=[],i=(a("a9e3"),a("5a0c")),s=a.n(i),c=(a("a471"),{name:"Detail",props:{departDate:{type:Number,required:!0},arriveDate:{type:Number,required:!0},departTimeStr:{type:String},arriveTimeStr:{type:String},trainNumber:{type:String,required:!0},departStation:{type:String,required:!0},arriveStation:{type:String,required:!0},durationStr:{type:String}},data:function(){return{}},computed:{departDateStr:function(){return this.format(this.departDate)},arriveDateStr:function(){return this.format(this.arriveDate)}},methods:{format:function(t){var e=s()(t);return e.format("MM-DD")+""+e.locale("zh-cn").format("ddd")}}}),d=c,u=(a("28bc"),a("2877")),o=Object(u["a"])(d,r,n,!1,null,"695b0cab",null);e["a"]=o.exports},8249:function(t,e,a){},"8e0d":function(t,e,a){},"935e":function(t,e,a){"use strict";var r=a("f1cc"),n=a.n(r);n.a},a3dc:function(t,e,a){},b309:function(t,e,a){"use strict";var r=a("8e0d"),n=a.n(r);n.a},f1cc:function(t,e,a){}}]);