(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PoSu:function(t,e,a){"use strict";a.r(e),a.d(e,"CodeforcesModule",(function(){return q}));var n=a("ofXK"),i=a("DKVz"),c=a("tyNb"),r=a("fXoL"),s=a("LCvv"),o=a("wZkO");const l={userRatingPrefix:"https://codeforces.com/api/user.rating?",contestPrefix:"https://codeforces.com/contest"},u=[{scoreLow:0,scoreHigh:1200,color:"#cccccc",name:"Newbie"},{scoreLow:1200,scoreHigh:1400,color:"#70eb74",name:"Pupil"},{scoreLow:1400,scoreHigh:1600,color:"#76ddbb",name:"Specialist"},{scoreLow:1600,scoreHigh:1900,color:"#aaa9fc",name:"Expert"},{scoreLow:1900,scoreHigh:2100,color:"#ec84fc",name:"Candidate Master"},{scoreLow:2100,scoreHigh:2300,color:"#fecc88",name:"Master"},{scoreLow:2300,scoreHigh:2400,color:"#fcbb54",name:"International Master"},{scoreLow:2400,scoreHigh:2600,color:"#f47476",name:"Grandmaster"},{scoreLow:2600,scoreHigh:3e3,color:"#f24533",name:"International Grandmaster"},{scoreLow:3e3,scoreHigh:4e3,color:"#ab2e16",name:"Legendary grandmaster"}];let h=(()=>{class t{constructor(){}static getUrl(){return l}static getColors(){return u}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const b=h.getColors();let m=(()=>{class t{constructor(){this.chartOption={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[]},yAxis:{type:"value",scale:!0},series:[{data:[],type:"line"}]},this.echartsInstance=null,this.newChartOption=null}set userRatingList(t){this.userRatingListPrivate=t,this.updateRatingGraph(this.userRatingListPrivate)}get userRatingList(){return this.userRatingListPrivate}ngOnInit(){const t={top:10,right:10,pieces:[]};b.forEach(e=>{t.pieces.push({gt:e.scoreLow,lte:e.scoreHigh,color:e.color})}),this.chartOption.visualMap=[t]}onChartInit(t){null===this.echartsInstance&&(this.echartsInstance=t,null!==this.newChartOption&&(this.echartsInstance.setOption(this.newChartOption),this.newChartOption=null))}updateRatingGraph(t){if(0===t.length)return;const e=this.chartOption,a=[];for(let i=0;i<t.length;i++)a.push(i);e.xAxis.data=a;const n=[];t.forEach(t=>{n.push(t.newRating)}),e.series[0].data=n,null!==this.echartsInstance?this.echartsInstance.setOption(e):this.newChartOption=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-rating-graph"]],inputs:{userRatingList:"userRatingList"},decls:1,vars:1,consts:[["echarts","",1,"demo-chart",3,"options","chartInit"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Xb("chartInit",(function(t){return e.onChartInit(t)})),r.Qb()),2&t&&r.hc("options",e.chartOption)},directives:[i.a],styles:[".demo-chart[_ngcontent-%COMP%]{height:80vh}"]}),t})();var g=a("M9IT"),p=a("+0xr");function d(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"contestId"),r.Qb())}function f(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(t.contestId)}}function R(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"contestName"),r.Qb())}function w(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(t.contestName)}}function L(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"handle"),r.Qb())}function C(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(t.handle)}}function y(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"newRating"),r.Qb())}function M(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit,a=r.bc();r.tc("color",a.calcColor(t.newRating)),r.Ab(1),r.yc(t.newRating)}}function A(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"oldRating"),r.Qb())}function v(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(t.oldRating)}}function O(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"rank"),r.Qb())}function Q(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(t.rank)}}function x(t,e){1&t&&(r.Rb(0,"mat-header-cell"),r.xc(1,"Date"),r.Qb())}function I(t,e){if(1&t&&(r.Rb(0,"mat-cell"),r.xc(1),r.cc(2,"date"),r.Qb()),2&t){const t=e.$implicit;r.Ab(1),r.yc(r.ec(2,1,1e3*t.ratingUpdateTimeSeconds,"y/M/d HH:mm","+0800"))}}function P(t,e){1&t&&r.Mb(0,"mat-header-row")}function H(t,e){1&t&&r.Mb(0,"mat-row")}const D=function(){return[10,20,50,100]};let k=(()=>{class t{constructor(){this.displayedColumns=["contestId","contestName","newRating","rank","ratingUpdateTimeSeconds"],this.userRatingListPrivate=[]}set userRatingList(t){this.userRatingListPrivate=t,this.dataSource$=new p.k(t),this.dataSource$.paginator=this.paginator}get userRatingList(){return this.userRatingListPrivate}calcColor(t){const e=h.getColors();for(const a in e)if(t<e[a].scoreHigh)return e[a].color;return"#000000"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-user-rating"]],viewQuery:function(t,e){var a;1&t&&r.sc(g.a,!0),2&t&&r.lc(a=r.Yb())&&(e.paginator=a.first)},inputs:{userRatingList:"userRatingList"},decls:26,vars:5,consts:[[1,"mat-elevation-z8"],["aria-label","Elements",3,"dataSource"],["matColumnDef","contestId"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","contestName"],["matColumnDef","handle"],["matColumnDef","newRating"],[3,"color",4,"matCellDef"],["matColumnDef","oldRating"],["matColumnDef","rank"],["matColumnDef","ratingUpdateTimeSeconds"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"mat-table",1),r.Pb(2,2),r.wc(3,d,2,0,"mat-header-cell",3),r.wc(4,f,2,1,"mat-cell",4),r.Ob(),r.Pb(5,5),r.wc(6,R,2,0,"mat-header-cell",3),r.wc(7,w,2,1,"mat-cell",4),r.Ob(),r.Pb(8,6),r.wc(9,L,2,0,"mat-header-cell",3),r.wc(10,C,2,1,"mat-cell",4),r.Ob(),r.Pb(11,7),r.wc(12,y,2,0,"mat-header-cell",3),r.wc(13,M,2,3,"mat-cell",8),r.Ob(),r.Pb(14,9),r.wc(15,A,2,0,"mat-header-cell",3),r.wc(16,v,2,1,"mat-cell",4),r.Ob(),r.Pb(17,10),r.wc(18,O,2,0,"mat-header-cell",3),r.wc(19,Q,2,1,"mat-cell",4),r.Ob(),r.Pb(20,11),r.wc(21,x,2,0,"mat-header-cell",3),r.wc(22,I,3,5,"mat-cell",4),r.Ob(),r.wc(23,P,1,0,"mat-header-row",12),r.wc(24,H,1,0,"mat-row",13),r.Qb(),r.Mb(25,"mat-paginator",14),r.Qb()),2&t&&(r.Ab(1),r.hc("dataSource",e.dataSource$),r.Ab(22),r.hc("matHeaderRowDef",e.displayedColumns),r.Ab(1),r.hc("matRowDefColumns",e.displayedColumns),r.Ab(1),r.hc("pageSizeOptions",r.ic(4,D)))},directives:[p.j,p.c,p.e,p.b,p.g,p.i,g.a,p.d,p.a,p.f,p.h],pipes:[n.e],styles:[""]}),t})();var S=a("Wp6s"),N=a("kmnG"),X=a("qFsG"),$=a("3Pt+"),U=a("bTqV");const Y=[{path:"",component:(()=>{class t{constructor(t){this.cfapi=t,this.CroMarmotRatingList=[],this.YeXiaoRainRatingList=[],this.Allen3RatingList=[],this.CustomRatingList=[],this.customName=""}ngOnInit(){this.cfapi.getUserRating("Cro-Marmot").then(t=>{this.CroMarmotRatingList=t.result}),this.cfapi.getUserRating("YeXiaoRain").then(t=>{this.YeXiaoRainRatingList=t.result}),this.cfapi.getUserRating("Allen_3").then(t=>{this.Allen3RatingList=t.result})}queryCustom(){""!==this.customName&&this.cfapi.getUserRating(this.customName).then(t=>{this.CustomRatingList=t.result})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(s.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-codeforces"]],decls:18,vars:9,consts:[[1,"tab-group"],["label","Cro-Marmot"],[3,"userRatingList"],["label","YeXiaoRain"],["label","Allen_3"],["label","Custom"],["matInput","","placeholder","Profile",3,"ngModel","ngModelChange"],["mat-stroked-button","",3,"click"]],template:function(t,e){1&t&&(r.Rb(0,"mat-tab-group",0),r.Rb(1,"mat-tab",1),r.Mb(2,"app-rating-graph",2),r.Mb(3,"app-user-rating",2),r.Qb(),r.Rb(4,"mat-tab",3),r.Mb(5,"app-rating-graph",2),r.Mb(6,"app-user-rating",2),r.Qb(),r.Rb(7,"mat-tab",4),r.Mb(8,"app-rating-graph",2),r.Mb(9,"app-user-rating",2),r.Qb(),r.Rb(10,"mat-tab",5),r.Rb(11,"mat-card"),r.Rb(12,"mat-form-field"),r.Rb(13,"input",6),r.Xb("ngModelChange",(function(t){return e.customName=t})),r.Qb(),r.Qb(),r.Rb(14,"button",7),r.Xb("click",(function(){return e.queryCustom()})),r.xc(15,"query"),r.Qb(),r.Qb(),r.Mb(16,"app-rating-graph",2),r.Mb(17,"app-user-rating",2),r.Qb(),r.Qb()),2&t&&(r.Ab(2),r.hc("userRatingList",e.CroMarmotRatingList),r.Ab(1),r.hc("userRatingList",e.CroMarmotRatingList),r.Ab(2),r.hc("userRatingList",e.YeXiaoRainRatingList),r.Ab(1),r.hc("userRatingList",e.YeXiaoRainRatingList),r.Ab(2),r.hc("userRatingList",e.Allen3RatingList),r.Ab(1),r.hc("userRatingList",e.Allen3RatingList),r.Ab(4),r.hc("ngModel",e.customName),r.Ab(3),r.hc("userRatingList",e.CustomRatingList),r.Ab(1),r.hc("userRatingList",e.CustomRatingList))},directives:[o.b,o.a,m,k,S.a,N.b,X.a,$.a,$.f,$.h,U.a],styles:[".tab-group[_ngcontent-%COMP%]{height:100%}.full-width[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let G=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[c.b.forChild(Y)],c.b]}),t})();var T=a("kJ4b");let q=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[T.a,i.b.forRoot({echarts:()=>a.e(1).then(a.t.bind(null,"MT78",7))}),$.c,G,n.c]]}),t})()}}]);