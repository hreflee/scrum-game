(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={index:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/scrum-game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("af92")},"03fa":function(t,e,r){},"05f6":function(t,e,r){},"21cb":function(t,e,r){"use strict";var n=r("f30d"),a=r.n(n);a.a},"27f6":function(t,e,r){},2806:function(t,e,r){"use strict";(function(t){r("a4d3"),r("4de4"),r("7db0"),r("c740"),r("4160"),r("d81d"),r("13d5"),r("fb6a"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("2fa7"),a=r("e0eb");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={projectStatus:{config:{numOfSprint:0,numOfDayPreSprint:0},current:{sprintNo:0,dayNo:0}},stories:[],remainTimeForEachDay:[]};var s={createProject:function(t,e,r){return c.projectStatus.config={numOfSprint:e,numOfDayPreSprint:r},c.projectStatus.current={sprintNo:0,dayNo:0},c.stories=[],c.remainTimeForEachDay=[],a["a"].getRandom(100)},setProjectCurrentStatus:function(t,e,r){c.projectStatus.current={sprintNo:e,dayNo:r}},getProjectConfig:function(t){return c.projectStatus.config},getProjectCurrentStatus:function(t){return c.projectStatus.current},reloadStoriesList:function(t,e){c.stories=e.map((function(t,e){return i({},t,{id:e})}))},getStory:function(t,e){return c.stories.find((function(t){return t.id===e}))},getAllStories:function(t){return c.stories},updateStory:function(t,e){var r=c.stories.findIndex((function(t){return t.id===e.id}));r>=0&&(c.stories[r]=e)},updateStories:function(t,e){var r=e.reduce((function(t,e,r){return Object.assign(t,Object(n["a"])({},e.id,r))}),{});c.stories.forEach((function(t,n){var a=r[t.id];void 0!==a&&(c.stories[n]=e[a])}))},getBacklog:function(t){return c.stories.filter((function(t){return!t.isChosen}))},getBlockedStories:function(t){return c.stories.filter((function(t){return t.isBlocked}))},getLatestRemainTime:function(t){return c.remainTimeForEachDay.slice(-1)[0]},updateLatestRemainTime:function(t,e){c.remainTimeForEachDay.pop(),c.remainTimeForEachDay.push(e)},pushRemainTime:function(t,e){c.remainTimeForEachDay.push(e)},getAllRemainTime:function(t){return c.remainTimeForEachDay}};e["a"]=s}).call(this,r("4362"))},"2b36":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("7db0"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("2fa7"),a=r("a115"),o=r("8081"),i=r("e0eb");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={EVENT:1,PROBLEM:2,SOLUTION:3},l=12,d={init:function(t){return a["b"].createBackLog(t,o["a"].getInitialBacklog())},dice:function(t){return i["a"].getRandom(l)},drawCard:function(t){var e=i["a"].getRandom(3),r={id:i["a"].getId(),type:e,timeDelta:0,isUsed:!1,description:""};if(e===u.EVENT)r.timeDelta=Math.pow(-1,i["a"].getRandom(2))*i["a"].getRandom(5),r.description="You ".concat(r.timeDelta>0?"gain":"loss"," ").concat(Math.abs(r.timeDelta)," hour(s) working time today.");else{var a,c=(a={},Object(n["a"])(a,u.PROBLEM,"You met some problem today. The story you are working on will be blocked."),Object(n["a"])(a,u.SOLUTION,"You got a solution. You can unblock a story."),a);r.description=c[e]}return o["a"].addCard(t,r),r},diceAndDrawCard:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.dice(t),n=this.drawCard(t),i=e;switch(e&&!e.isBlocked&&(i=s({},e,{remainTime:e.remainTime-r}),a["b"].updateStory(t,i)),n.type){case u.EVENT:return e&&this.useCard(t,n,i,-r),{workTime:r,card:n,hint:"You got a EVENT card. Your work time today will be changed."};case u.SOLUTION:var c=a["b"].getBlockedStories(t);return{workTime:r,card:n,hint:c.length?"You got a SOLUTION card. You can unblock a story.":"You got a SOLUTION card. The story won't be blocked when you or your teammate get a PROBLEM card the next time."};case u.PROBLEM:var l=o["a"].getAllCards(t),d=l.find((function(t){return t.type===u.SOLUTION&&!t.isUsed}));return e&&this.useCard(t,n,i),d?(this.useCard(t,d,i),{workTime:r,card:n,hint:"You got a PROBLEM card. But you or your teammate got a SOLUTION card before. This PROBLEM card will not work and one SOLUTION card will be used."}):{workTime:r,card:n,hint:"You got a PROBLEM card. The story you working on will be blocked"}}},useCard:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-l-1;switch(o["a"].updateCard(t,s({},e,{isUsed:!0})),e.type){case u.EVENT:var i=Math.max(e.timeDelta,n);return void a["b"].updateStory(t,s({},r,{remainTime:r.remainTime-i}));case u.SOLUTION:return void a["b"].updateStory(t,s({},r,{isBlocked:!1}));case u.PROBLEM:return void a["b"].updateStory(t,s({},r,{isBlocked:!0}))}}};e["b"]=i["a"].decorateApis("Game",d)},"45c2":function(t,e,r){"use strict";var n=r("05f6"),a=r.n(n);a.a},"5a8c":function(t,e,r){"use strict";var n=r("27f6"),a=r.n(n);a.a},"6b0e":function(t,e,r){"use strict";var n=r("96e4"),a=r.n(n);a.a},"72ee":function(t,e,r){},"76c2":function(t,e,r){"use strict";var n=r("72ee"),a=r.n(n);a.a},"7ce0":function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return p}));r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("13d5"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n,a=r("2fa7"),o=r("c434"),i=r.n(o),c=r("2b36"),s=r("a115"),u=r("e40c");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={INIT:"INIT",ENT_MEMBER:"ENT_MEMBER",ENT_PRJ_CFG:"ENT_PRJ_CFG",SPRINT_START:"SPRINT_START",SEL_TODO:"SEL_TODO",DAY_START:"DAY_START",BEFORE_PICK_STORY:"BEFORE_PICK_STORY",PICK_STORY:"PICK_STORY",NO_STORY:"NO_STORY",DICE_AND_DRAW:"DICE_AND_DRAW",UNBLOCK_STORY:"UNBLOCK_STORY",USER_DONE:"USER_DONE",SPRINT_SUM:"SPRINT_SUM",GAME_END:"GAME_END"},m={CLICK_START_GAME:"clickStartGame",ENTER_MEMBER_INFO:"enterMemberInfo",ENTER_PRJ_CONFIG:"enterPrjConfig",SET_NEXT_SPRINT:"setNextSprint",SAVE_TODO:"saveTodo",SET_NEXT_DAY:"setNextDay",GET_STORY_STATUS:"getStoryStatus",PICK_STORY:"pickStory",GOT_REASON:"gotReason",GOT_RESULT:"gotResult",SELECT_UNBLOCK:"selectUnblock",SET_NEXT_MEMBER:"setNextMember",SPRINT_SUM_DONE:"sprintSumDone"},b={CLICK_START_GAME:{from:f.INIT,to:f.ENT_MEMBER},ENTER_MEMBER_INFO:{from:f.ENT_MEMBER,to:f.ENT_PRJ_CFG,onBefore:function(t){s["b"].createGroup(t),u["a"].commit("setMemberList",t)}},ENTER_PRJ_CONFIG:{from:f.ENT_PRJ_CFG,to:f.SPRINT_START,onBefore:function(t){u["a"].commit("updateProjectId",s["b"].createProject(t)),setTimeout((function(){c["b"].init(n)}))}},SET_NEXT_SPRINT:{autoFire:!0,from:f.SPRINT_START,to:function(){var t=s["b"].setToNextSprint(n),e=t.success;return e?(u["a"].commit("setToNextSprint"),u["a"].commit("updateDashboard"),f.SEL_TODO):f.GAME_END}},SAVE_TODO:{from:f.SEL_TODO,to:f.DAY_START,onBefore:function(t){s["b"].saveTodo(n,t)}},SET_NEXT_DAY:{autoFire:!0,from:f.DAY_START,to:function(){return s["b"].setToNextDay(n)?(u["a"].commit("updateDashboard"),u["a"].commit("setToNextDay"),f.BEFORE_PICK_STORY):(u["a"].commit("setToFirstMember"),f.SPRINT_SUM)}},GET_STORY_STATUS:{autoFire:!0,from:f.BEFORE_PICK_STORY,to:function(){var t=s["b"].getOverallStoryStatus(n);return t!==s["a"].COMMON?(u["a"].commit("updateNoStoryReason",t),f.NO_STORY):f.PICK_STORY}},PICK_STORY:{from:f.PICK_STORY,to:f.DICE_AND_DRAW,onBefore:function(t){var e=c["b"].diceAndDrawCard(n,t);u["a"].commit("updateDiceAndDrawResult",e)}},GOT_REASON:{from:f.NO_STORY,to:function(){var t=u["a"].state.gameStatus.noStoryReason;if(setTimeout((function(){u["a"].commit("updateNoStoryReason",s["a"].COMMON)})),t===s["a"].ALL_DONE)return f.SPRINT_SUM;var e=c["b"].diceAndDrawCard(n);return u["a"].commit("updateDiceAndDrawResult",e),f.DICE_AND_DRAW}},GOT_RESULT:{from:f.DICE_AND_DRAW,to:function(){var t=u["a"].state.diceAndDrawResult.card.type===c["a"].SOLUTION;if(u["a"].commit("updateDashboard"),t){var e=s["b"].getBlockedStories(n).length;return e?f.UNBLOCK_STORY:f.USER_DONE}return f.USER_DONE}},SELECT_UNBLOCK:{from:f.UNBLOCK_STORY,to:f.USER_DONE,onBefore:function(t){c["b"].useCard(n,u["a"].state.diceAndDrawResult.card,t),u["a"].commit("updateDashboard")}},SET_NEXT_MEMBER:{from:f.USER_DONE,to:function(){return u["a"].getters.currentFinalMember?f.DAY_START:(u["a"].commit("setToNextMember"),f.BEFORE_PICK_STORY)}},SPRINT_SUM_DONE:{from:f.SPRINT_SUM,to:f.SPRINT_START}},p=new i.a({init:f.INIT,transitions:Object.keys(m).map((function(t){return{name:m[t],from:b[t].from,to:function(){var e=b[t],r=e.onBefore,n=e.to;return r&&r.apply(void 0,arguments),"function"===typeof n?n.apply(void 0,arguments):n}}}))});u["a"].commit("updateGlobalState",f.INIT);var O=Object.keys(b).map((function(t){return b[t].autoFire?{state:b[t].from,trans:m[t]}:null})).filter((function(t){return t})).reduce((function(t,e){return d({},t,Object(a["a"])({},e.state,e.trans))}),{});p.observe("onAfterTransition",(function(t,e){console.log(t,e),u["a"].commit("updateGlobalState",t.to),setTimeout((function(){var e=O[t.to];e&&p[e]()}))})),u["a"].watch((function(){return u["a"].state.projectId}),(function(t){n=t}))}).call(this,r("4362"))},8081:function(t,e,r){"use strict";(function(t){var n=r("e0eb"),a={initBacklog:[{id:n["a"].getId(),description:"Users can exchange emails securely with predefined recipients.",totalTime:24,remainTime:24,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can send large files securely.",totalTime:21,remainTime:21,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can set time limits on emails for reading.",totalTime:27,remainTime:27,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can send emails securely to unspecified recipients.",totalTime:30,remainTime:30,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Administrators of organizations can monitor emails.",totalTime:16,remainTime:16,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Each organization can set security policies and define recipients groups.",totalTime:24,remainTime:24,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can manage their emails effectively.",totalTime:43,remainTime:43,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users and administrators can backup emails securely.",totalTime:23,remainTime:23,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users and administrators can delete emails completely.",totalTime:36,remainTime:36,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can access emails from mobile.",totalTime:68,remainTime:68,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users can send short messages securely to each other.",totalTime:28,remainTime:28,isBlocked:!1,isChosen:!1},{id:n["a"].getId(),description:"Users don’t want to receive spam-letters.",totalTime:24,remainTime:24,isBlocked:!1,isChosen:!1}],gotCards:[]};var o={getInitialBacklog:function(){return a.initBacklog},addCard:function(t,e){a.gotCards.push(e)},getAllCards:function(t){return a.gotCards},updateCard:function(t,e){n["a"].findAndReplaceArrayItem(a.gotCards,e,"id")}};e["a"]=o}).call(this,r("4362"))},"96e4":function(t,e,r){},"9bc4":function(t,e,r){"use strict";var n=r("ddec"),a=r.n(n);a.a},a115:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("13d5"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("2fa7"),a=r("2806"),o=r("e0eb");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={COMMON:0,ALL_BLOCKED:1,ALL_DONE:2},u={createGroup:function(t){return o["a"].getRandom(100)},createProject:function(t){return a["a"].createProject(t.groupId,t.numOfSprint,t.numOfDayPreSprint)},createBackLog:function(t,e){return a["a"].reloadStoriesList(t,e),a["a"].pushRemainTime(t,e.reduce((function(t,e){return t+e.totalTime}),0)),this.getDashboard(t)},setToNextSprint:function(t){var e=a["a"].getProjectConfig(t),r=e.numOfSprint,n=a["a"].getProjectCurrentStatus(t),o=n.sprintNo;if(o<r){var i=a["a"].getBacklog(t);return a["a"].setProjectCurrentStatus(t,o+1,0),{success:!0,backlog:i}}return{success:!1,backlog:[]}},saveTodo:function(t,e){return a["a"].updateStories(t,e.map((function(t){return c({},t,{isChosen:!0})}))),this.getDashboard(t)},setToNextDay:function(t){var e=a["a"].getProjectConfig(t),r=e.numOfDayPreSprint,n=a["a"].getProjectCurrentStatus(t),o=n.sprintNo,i=n.dayNo,c=a["a"].getLatestRemainTime(t);return i<r&&(a["a"].setProjectCurrentStatus(t,o,i+1),a["a"].pushRemainTime(t,c),!0)},getOverallStoryStatus:function(t){var e=this.getDashboard(t).taskBoard,r=e.todo,n=e.processing;return r.length?s.COMMON:n.length?n.filter((function(t){return!t.isBlocked})).length>0?s.COMMON:s.ALL_BLOCKED:s.ALL_DONE},updateStory:function(t,e){var r=a["a"].getStory(t,e.id),n=a["a"].getLatestRemainTime(t);return e.remainTime<0&&(e.remainTime=0),a["a"].updateLatestRemainTime(t,n-(r.remainTime-e.remainTime)),a["a"].updateStory(t,e),this.getDashboard(t)},getDashboard:function(t){var e=a["a"].getAllStories(t),r=a["a"].getAllRemainTime(),n={backlog:[],todo:[],processing:[],done:[]};return e.forEach((function(t){if(t.isChosen){var e=t.totalTime,r=t.remainTime,a=t.isBlocked;r!==e||a?r>0?n.processing.push(t):n.done.push(t):n.todo.push(t)}else n.backlog.push(t)})),{taskBoard:n,remainTimeForEachDay:r}},getBlockedStories:function(t){return a["a"].getBlockedStories(t)}};e["b"]=o["a"].decorateApis("TaskMgr",u)},a2e1:function(t,e,r){},af92:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5c96"),o=r.n(a),i=(r("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"app",attrs:{direction:"vertical"}},[r("start"),r("ent-member"),r("ent-prj-cfg"),r("sel-todo"),r("state-hint"),r("dice-draw-result"),r("task-board"),r("summarize")],1)}),c=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.globalState===t.GS.INIT?r("div",{staticClass:"comp-start"},[r("el-button",{staticClass:"start-btn",attrs:{type:"primary",size:"large"},on:{click:t.startGame}},[t._v("Start")])],1):t._e()},u=[],l=r("2f62"),d=r("7ce0"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{staticClass:"comp-story-card",attrs:{cardType:"Story",showSelectBtn:"",selected:t.selected,desc:t.story.description},on:{select:function(e){return t.$emit("select")},remove:function(e){return t.$emit("remove")}}},[r("div",{attrs:{slot:"operation"},slot:"operation"},[t.showSelect?r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.emitChange(!0)}}},[t._v(" Select ")]):t._e(),t.showMultiSelect?r("el-button",{attrs:{size:"mini",circle:"",type:t.selected?"primary":"info",icon:"el-icon-check"},on:{click:function(e){return t.emitChange(!t.selected)}}}):t._e()],1),r("div",{staticClass:"story-more-info"},[r("el-tag",{style:{visibility:t.story.isBlocked?"visible":"hidden"},attrs:{slot:"card-title-tag",size:"mini",type:"danger",effect:"dark"},slot:"card-title-tag"},[t._v("Blocked")]),r("p",{staticClass:"work-time"},[t._v("work time: "+t._s(t.story.remainTime)+"/"+t._s(t.story.totalTime))])],1)])},m=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"comp-card"},[r("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.cardType))]),t._t("operation")],2),r("div",{staticClass:"card-content"},[r("p",{staticClass:"desc"},[t._v(t._s(t.desc))]),t._t("default")],2)])},p=[],O={name:"card",props:{selected:Boolean,showSelectBtn:Boolean,cardType:String,desc:String},methods:{emitChange:function(){this.selected?this.$emit("remove"):this.$emit("select")}}},S=O,h=(r("f228"),r("2877")),y=Object(h["a"])(S,b,p,!1,null,"5c882963",null),g=y.exports,T={components:{Card:g},name:"story-card",props:{story:Object,showSelect:{type:Boolean,default:!1},selected:Boolean,showMultiSelect:{type:Boolean,default:!1}},methods:{emitChange:function(t){t?this.$emit("select"):this.$emit("remove")}}},_=T,v=(r("c730"),Object(h["a"])(_,f,m,!1,null,"54d9f2bc",null)),E=v.exports,C={components:{Card:g,StoryCard:E},name:"start",data:function(){return{GS:d["a"]}},computed:Object(l["c"])(["globalState"]),methods:{startGame:function(){d["c"][d["b"].CLICK_START_GAME]()}}},j=C,R=(r("21cb"),Object(h["a"])(j,s,u,!1,null,"2788db4c",null)),D=R.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.globalState===t.GS.ENT_MEMBER,"show-close":!1,title:"Enter your team member information"}},[t._l(t.members,(function(e,n){return r("el-form",{key:e.id,staticClass:"member-item",attrs:{inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"memberItem.name"}})],1),r("el-form-item",{attrs:{label:"Avatar"}},[r("el-avatar",{attrs:{src:e.avatar}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(e){return t.removeMember(n)}}})],1)],1)})),r("div",{staticClass:"add-btn-wrapper"},[r("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.addMember}},[t._v("Add a member")])],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)],2)},w=[],P=(r("a434"),r("e0eb"));function k(){return"https://www.gravatar.com/avatar/093e34c7f263445fd59ed8da31d1aa".concat(Math.round(100*Math.random()),".jpg?s=256&d=identicon&f=y")}var I,M={name:"ent-member",data:function(){return{GS:d["a"],members:[{id:P["a"].getId(),name:"Mary",avatar:k()},{id:P["a"].getId(),name:"James",avatar:k()},{id:P["a"].getId(),name:"John",avatar:k()}]}},computed:Object(l["c"])(["globalState"]),methods:{removeMember:function(t){this.members.splice(t,1)},addMember:function(){this.members.push({id:P["a"].getId(),name:"",avatar:k()})},submit:function(){d["c"][d["b"].ENTER_MEMBER_INFO](this.members)}}},B=M,A=(r("6b0e"),Object(h["a"])(B,N,w,!1,null,"4db223ae",null)),L=A.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.globalState===t.GS.ENT_PRJ_CFG,"show-close":!1,title:"Enter your project configuration"}},[r("el-form",[r("el-form-item",{attrs:{label:"Number of sprint"}},[r("el-input-number",{model:{value:t.projectConfig.numOfSprint,callback:function(e){t.$set(t.projectConfig,"numOfSprint",e)},expression:"projectConfig.numOfSprint"}})],1),r("el-form-item",{attrs:{label:"Number of day pre sprint"}},[r("el-input-number",{model:{value:t.projectConfig.numOfDayPreSprint,callback:function(e){t.$set(t.projectConfig,"numOfDayPreSprint",e)},expression:"projectConfig.numOfDayPreSprint"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)],1)},U=[],G={name:"ent-prj-cfg",data:function(){return{GS:d["a"],projectConfig:{numOfSprint:3,numOfDayPreSprint:3}}},computed:Object(l["c"])(["globalState"]),methods:{submit:function(){d["c"][d["b"].ENTER_PRJ_CONFIG](this.projectConfig)}}},Y=G,F=Object(h["a"])(Y,x,U,!1,null,"a163ab06",null),K=F.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("el-header",{staticClass:"comp-state-hint",attrs:{height:"80px"}},[r("div",{staticClass:"current-state"},[r("div",{staticClass:"col"},[r("p",{staticClass:"label"},[t._v("Spring #")]),r("p",{staticClass:"data"},[t._v(t._s(t.currentSprint))])]),r("div",{staticClass:"col"},[r("p",{staticClass:"label"},[t._v("Day #")]),r("p",{staticClass:"data"},[t._v(t._s(t.currentDay))])]),r("div",{staticClass:"col"},[r("p",{staticClass:"label"},[t._v("Member")]),r("p",{staticClass:"data"},[r("el-avatar",{staticClass:"avatar",attrs:{src:t.currentMember.avatar,size:"small"}}),r("span",[t._v(t._s(t.currentMember.name))])],1)])]),r("div",{staticClass:"hint"},[r("p",{staticClass:"hint-text"},[t._v(t._s(t.hintText))]),[t.GS.USER_DONE,t.GS.NO_STORY].includes(t.globalState)?r("el-button",{attrs:{type:"primary"},on:{click:t.setNextMember}},[t._v(" Continue "),r("i",{staticClass:"el-icon-arrow-right el-icon--right"})]):t._e()],1)]):t._e()},J=[],z=(r("a4d3"),r("4de4"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("2532"),r("159b"),r("2fa7")),V=r("a115");function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(r,!0).forEach((function(e){Object(z["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var H=(I={},Object(z["a"])(I,d["a"].PICK_STORY,(function(){return"Select your job for today."})),Object(z["a"])(I,d["a"].UNBLOCK_STORY,(function(){return"Choose a story to unblock."})),Object(z["a"])(I,d["a"].USER_DONE,(function(){return"Your job today is done."})),Object(z["a"])(I,d["a"].NO_STORY,(function(t){var e;return(e={},Object(z["a"])(e,V["a"].ALL_BLOCKED,"All stories are blocked, you must dice and draw card now."),Object(z["a"])(e,V["a"].ALL_DONE,"Congratulation! All todo stories for current sprint are done. Go to next sprint now."),e)[t]})),I),q={name:"state-hint",computed:X({},Object(l["c"])(["globalState"]),{},Object(l["c"])({currentSprint:function(t){return t.gameStatus.currentSprint},currentDay:function(t){return t.gameStatus.currentDay},noStoryReason:function(t){return t.gameStatus.noStoryReason}}),{},Object(l["b"])(["currentMember"]),{show:function(){return![d["a"].INIT,d["a"].ENT_MEMBER,d["a"].ENT_PRJ_CFG].includes(this.globalState)},hintText:function(){return(H[this.globalState]||function(){return""})(this.noStoryReason)}}),data:function(){return{GS:d["a"]}},methods:{setNextMember:function(){var t,e=(t={},Object(z["a"])(t,d["a"].USER_DONE,d["b"].SET_NEXT_MEMBER),Object(z["a"])(t,d["a"].NO_STORY,d["b"].GOT_REASON),t)[this.globalState];d["c"][e]()}}},Q=q,Z=(r("76c2"),Object(h["a"])(Q,$,J,!1,null,"075cef13",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showComponent?r("el-main",{staticClass:"comp-task-board"},[r("el-table",{attrs:{data:t.taskBoard}},t._l(t.colNames,(function(e){return r("el-table-column",{key:e,attrs:{prop:e,label:e.toUpperCase(),"class-name":"col","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.row;return r("div",{staticClass:"card-wrapper"},[a[e]?r("story-card",{attrs:{story:a[e],"show-select":t.shouldShowSelect(a[e],e)},on:{select:function(r){return t.selectStory(a[e])}}}):t._e()],1)}}],null,!0)})})),1)],1):t._e()},rt=[],nt=(r("d81d"),r("13d5"),r("284c"));function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?at(r,!0).forEach((function(e){Object(z["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var it={components:{StoryCard:E},name:"task-board",data:function(){return{colNames:["todo","processing","done"]}},computed:ot({},Object(l["c"])(["globalState"]),{taskBoard:function(){for(var t=this.colNames,e=this.$store.state.taskBoard,r=this.colNames.reduce((function(t,r){return ot({},t,Object(z["a"])({},r,e[r]))}),{}),n=Math.max.apply(Math,Object(nt["a"])(t.map((function(t){return r[t].length})))),a=[],o=function(e){var n={};t.forEach((function(t){r[t][e]&&(n[t]=r[t][e])})),a.push(n)},i=0;i<n;i++)o(i);return a},showComponent:function(){return![d["a"].INIT,d["a"].ENT_MEMBER,d["a"].ENT_PRJ_CFG].includes(this.globalState)},showStorySelect:function(){return[d["a"].PICK_STORY,d["a"].UNBLOCK_STORY].includes(this.globalState)}}),methods:{selectStory:function(t){var e,r=(e={},Object(z["a"])(e,d["a"].PICK_STORY,d["b"].PICK_STORY),Object(z["a"])(e,d["a"].UNBLOCK_STORY,d["b"].SELECT_UNBLOCK),e)[this.globalState];d["c"][r](t)},shouldShowSelect:function(t,e){return!(!this.showStorySelect||"done"===e)&&(this.globalState===d["a"].PICK_STORY?!t.isBlocked:this.globalState===d["a"].UNBLOCK_STORY?t.isBlocked:void 0)}}},ct=it,st=(r("9bc4"),Object(h["a"])(ct,et,rt,!1,null,"3f0b344e",null)),ut=st.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.show,"show-close":!1,title:t.title}},[r("div",{ref:"chartContainer"}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.continueClick}},[t._v(t._s(t.globalState===t.GS.SPRINT_SUM?"Continue":"Replay"))])],1)])},dt=[],ft=(r("fb6a"),r("ea7f")),mt=r.n(ft);function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function pt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(r,!0).forEach((function(e){Object(z["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ot={name:"summarize",data:function(){return{GS:d["a"]}},computed:pt({},Object(l["c"])(["globalState","remainTimeForEachDay"]),{show:function(){return[d["a"].SPRINT_SUM,d["a"].GAME_END].includes(this.globalState)},title:function(){var t;return(t={},Object(z["a"])(t,d["a"].SPRINT_SUM,"Burn-down chart until now"),Object(z["a"])(t,d["a"].GAME_END,"Burn-down chart for all days"),t)[this.globalState]}}),watch:{show:function(t){t&&this.drawChart()}},methods:{drawChart:function(){var t=this,e=this.remainTimeForEachDay[0],r=this.remainTimeForEachDay.slice(-1)[0];console.log(e,r);var n=(e-r)/(this.remainTimeForEachDay.length-1),a=Math.ceil(r/n);this.$nextTick((function(){mt.a.chart(t.$refs.chartContainer,{title:{text:null},xAxis:{categories:t.remainTimeForEachDay.map((function(t,e){return e}))},yAxis:{title:{text:"Remain time"}},legend:{enabled:!1},series:[{type:"line",color:"black",zIndex:2,marker:{enabled:!0},enableMouseTracking:!1,data:t.remainTimeForEachDay.map((function(t,e){return[e,t]}))},{type:"line",color:"black",marker:{enabled:!1},dashStyle:"dash",zIndex:2,enableMouseTracking:!1,data:[[t.remainTimeForEachDay.length-1,r],[t.remainTimeForEachDay.length-1+a,0]]},{type:"column",name:"remain time",data:t.remainTimeForEachDay}]})}))},continueClick:function(){this.globalState===d["a"].SPRINT_SUM?d["c"][d["b"].SPRINT_SUM_DONE]():location.reload()}}},St=Ot,ht=Object(h["a"])(St,lt,dt,!1,null,"a22a840a",null),yt=ht.exports,gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.show,title:"Select some stories into todo list for current sprint","show-close":!1,width:"80%",top:"5vh"}},[r("div",{staticClass:"list"},t._l(t.backlog,(function(e){return r("story-card",{key:e.id,staticClass:"story-item",attrs:{story:e,"show-multi-select":"",selected:t.isStorySelected(e.id)},on:{select:function(r){return t.selectStory(e)},remove:function(r){return t.removeStory(e.id)}}})})),1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)])},Tt=[];r("7db0"),r("c740");function _t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_t(r,!0).forEach((function(e){Object(z["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_t(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Et,Ct={components:{StoryCard:E},name:"sel-todo",data:function(){return{GS:d["a"],selectedStories:[]}},computed:vt({},Object(l["c"])({globalState:"globalState",backlog:function(t){return t.taskBoard.backlog}}),{show:function(){return this.globalState===d["a"].SEL_TODO}}),watch:{show:function(t){t&&(this.selectedStories=[])}},methods:{isStorySelected:function(t){return void 0!==this.selectedStories.find((function(e){return e.id===t}))},selectStory:function(t){this.selectedStories.push(t)},removeStory:function(t){var e=this.selectedStories.findIndex((function(e){return e.id===t}));e>=0&&this.selectedStories.splice(e,1)},submit:function(){d["c"][d["b"].SAVE_TODO](this.selectedStories)}}},jt=Ct,Rt=(r("45c2"),Object(h["a"])(jt,gt,Tt,!1,null,"6775c8fe",null)),Dt=Rt.exports,Nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.globalState===t.GS.DICE_AND_DRAW,title:"Get your dice and draw card result","show-close":!1}},[t.globalState===t.GS.DICE_AND_DRAW?r("div",{staticClass:"result-container"},[r("div",{staticClass:"row"},[r("p",{staticClass:"label"},[t._v("Dice result")]),r("p",{staticClass:"dice-result"},[t._v(t._s(t.diceAndDrawResult.workTime))])]),r("div",{staticClass:"row"},[r("p",{staticClass:"label"},[t._v("Draw card result")]),r("card",{attrs:{cardType:t.CardTypeText[t.diceAndDrawResult.card.type],desc:t.diceAndDrawResult.card.description}})],1),r("p",{staticClass:"hint"},[t._v(t._s(t.diceAndDrawResult.hint))])]):t._e(),r("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Got it")])],1)])},wt=[],Pt=r("2b36"),kt=(Et={},Object(z["a"])(Et,Pt["a"].EVENT,"Event"),Object(z["a"])(Et,Pt["a"].PROBLEM,"Problem"),Object(z["a"])(Et,Pt["a"].SOLUTION,"Solution"),Et),It={components:{Card:g},name:"dice-draw-result",data:function(){return{GS:d["a"],CardTypeText:kt}},computed:Object(l["c"])(["globalState","diceAndDrawResult"]),methods:{submit:function(){d["c"][d["b"].GOT_RESULT]()}}},Mt=It,Bt=(r("b9d7"),Object(h["a"])(Mt,Nt,wt,!1,null,"19785a39",null)),At=Bt.exports,Lt={name:"app",components:{DiceDrawResult:At,SelTodo:Dt,Summarize:yt,TaskBoard:ut,StateHint:tt,StoryCard:E,EntPrjCfg:K,EntMember:L,Start:D},mounted:function(){}},xt=Lt,Ut=(r("5a8c"),Object(h["a"])(xt,i,c,!1,null,null,null)),Gt=Ut.exports,Yt=r("e40c");n["default"].config.productionTip=!1,n["default"].use(o.a),new n["default"]({store:Yt["a"],render:function(t){return t(Gt)}}).$mount("#app")},b9d7:function(t,e,r){"use strict";var n=r("03fa"),a=r.n(n);a.a},c730:function(t,e,r){"use strict";var n=r("a2e1"),a=r.n(n);a.a},daaf:function(t,e,r){},ddec:function(t,e,r){},e0eb:function(t,e,r){"use strict";(function(t){r("99af"),r("c740"),r("4160"),r("fb6a"),r("6b93"),r("b64b"),r("159b");var n=r("bf2d"),a=-1,o={getRandom:function(t){var e=Math.ceil(Math.log10(t));return Math.round(Math.random()*Math.pow(10,e))%t+1},getId:function(){return++a},findAndReplaceArrayItem:function(t,e,r){var a=null;switch(Object(n["a"])(r)){case"string":a=function(t){return t[r]===e[r]};break;case"function":a=function(t){return r(t,e)};break;default:}var o=t.findIndex(a);o>=0&&(t[o]=e)},decorateApis:function(t,e){return e}};e["a"]=o}).call(this,r("4362"))},e40c:function(t,e,r){"use strict";var n=r("2b0e"),a=r("2f62"),o=r("a115"),i={state:{members:[],currentMemberIndex:0},getters:{currentMember:function(t){return t.members[t.currentMemberIndex]||{}},currentFinalMember:function(t){return t.currentMemberIndex===t.members.length-1}},mutations:{setMemberList:function(t,e){t.members=e},setToNextMember:function(t){t.currentMemberIndex++},setToFirstMember:function(t){t.currentMemberIndex=0}}},c={state:{currentSprint:0,currentDay:0,noStoryReason:0},mutations:{setToNextDay:function(t){t.currentDay++},setToNextSprint:function(t){t.currentDay=0,t.currentSprint++},updateNoStoryReason:function(t,e){t.noStoryReason=e}}};n["default"].use(a["a"]);var s=new a["a"].Store({state:{globalState:"",projectId:0,diceAndDrawResult:{},taskBoard:{backlog:[],todo:[],processing:[],done:[]},remainTimeForEachDay:[]},mutations:{updateGlobalState:function(t,e){t.globalState=e},updateProjectId:function(t,e){t.projectId=e},updateDiceAndDrawResult:function(t,e){t.diceAndDrawResult=e},updateDashboard:function(t){var e=o["b"].getDashboard(t.projectId),r=e.taskBoard,n=e.remainTimeForEachDay;t.taskBoard=r,t.remainTimeForEachDay=n}},modules:{member:i,gameStatus:c}});e["a"]=s},f228:function(t,e,r){"use strict";var n=r("daaf"),a=r.n(n);a.a},f30d:function(t,e,r){}});
//# sourceMappingURL=index.faeb111e.js.map