var $timeline=function(f){"use strict";var kt=Object.defineProperty;var Dt=f=>{throw TypeError(f)};var Pt=(f,M,Y)=>M in f?kt(f,M,{enumerable:!0,configurable:!0,writable:!0,value:Y}):f[M]=Y;var st=(f,M,Y)=>Pt(f,typeof M!="symbol"?M+"":M,Y),gt=(f,M,Y)=>M.has(f)||Dt("Cannot "+Y);var a=(f,M,Y)=>(gt(f,M,"read from private field"),Y?Y.call(f):M.get(f)),k=(f,M,Y)=>M.has(f)?Dt("Cannot add the same private member more than once"):M instanceof WeakSet?M.add(f):M.set(f,Y),L=(f,M,Y,nt)=>(gt(f,M,"write to private field"),nt?nt.call(f,Y):M.set(f,Y),Y),A=(f,M,Y)=>(gt(f,M,"access private method"),Y);var q,O,j,D,U,P,I,y,bt,yt,wt,St,Yt,xt,Ft,Ht,at,K,V,$t;function M(d){return{all:d=d||new Map,on:function(i,n){var o=d.get(i);o?o.push(n):d.set(i,[n])},off:function(i,n){var o=d.get(i);o&&(n?o.splice(o.indexOf(n)>>>0,1):d.set(i,[]))},emit:function(i,n){var o=d.get(i);o&&o.slice().map(function(l){l(n)}),(o=d.get("*"))&&o.slice().map(function(l){l(i,n)})}}}var Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var vt={exports:{}};(function(d,i){(function(n,o){d.exports=o()})(Y,function(){var n=1e3,o=6e4,l=36e5,g="millisecond",$="second",T="minute",b="hour",w="day",x="week",v="month",B="quarter",_="year",N="date",ot="Invalid Date",dt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ft=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ht={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var s=["th","st","nd","rd"],t=h%100;return"["+h+(s[(t-20)%10]||s[t]||s[0])+"]"}},tt=function(h,s,t){var r=String(h);return!r||r.length>=s?h:""+Array(s+1-r.length).join(t)+h},G={s:tt,z:function(h){var s=-h.utcOffset(),t=Math.abs(s),r=Math.floor(t/60),e=t%60;return(s<=0?"+":"-")+tt(r,2,"0")+":"+tt(e,2,"0")},m:function h(s,t){if(s.date()<t.date())return-h(t,s);var r=12*(t.year()-s.year())+(t.month()-s.month()),e=s.clone().add(r,v),c=t-e<0,u=s.clone().add(r+(c?-1:1),v);return+(-(r+(t-e)/(c?e-u:u-e))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:v,y:_,w:x,d:w,D:N,h:b,m:T,s:$,ms:g,Q:B}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},z="en",X={};X[z]=ht;var Mt="$isDayjsObject",mt=function(h){return h instanceof ut||!(!h||!h[Mt])},ct=function h(s,t,r){var e;if(!s)return z;if(typeof s=="string"){var c=s.toLowerCase();X[c]&&(e=c),t&&(X[c]=t,e=c);var u=s.split("-");if(!e&&u.length>1)return h(u[0])}else{var p=s.name;X[p]=s,e=p}return!r&&e&&(z=e),e||!r&&z},F=function(h,s){if(mt(h))return h.clone();var t=typeof s=="object"?s:{};return t.date=h,t.args=arguments,new ut(t)},m=G;m.l=ct,m.i=mt,m.w=function(h,s){return F(h,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var ut=function(){function h(t){this.$L=ct(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Mt]=!0}var s=h.prototype;return s.parse=function(t){this.$d=function(r){var e=r.date,c=r.utc;if(e===null)return new Date(NaN);if(m.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(dt);if(u){var p=u[2]-1||0,S=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],p,u[3]||1,u[4]||0,u[5]||0,u[6]||0,S)):new Date(u[1],p,u[3]||1,u[4]||0,u[5]||0,u[6]||0,S)}}return new Date(e)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return m},s.isValid=function(){return this.$d.toString()!==ot},s.isSame=function(t,r){var e=F(t);return this.startOf(r)<=e&&e<=this.endOf(r)},s.isAfter=function(t,r){return F(t)<this.startOf(r)},s.isBefore=function(t,r){return this.endOf(r)<F(t)},s.$g=function(t,r,e){return m.u(t)?this[r]:this.set(e,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,r){var e=this,c=!!m.u(r)||r,u=m.p(t),p=function(J,E){var R=m.w(e.$u?Date.UTC(e.$y,E,J):new Date(e.$y,E,J),e);return c?R:R.endOf(w)},S=function(J,E){return m.w(e.toDate()[J].apply(e.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(E)),e)},H=this.$W,C=this.$M,W=this.$D,Q="set"+(this.$u?"UTC":"");switch(u){case _:return c?p(1,0):p(31,11);case v:return c?p(1,C):p(0,C+1);case x:var Z=this.$locale().weekStart||0,et=(H<Z?H+7:H)-Z;return p(c?W-et:W+(6-et),C);case w:case N:return S(Q+"Hours",0);case b:return S(Q+"Minutes",1);case T:return S(Q+"Seconds",2);case $:return S(Q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,r){var e,c=m.p(t),u="set"+(this.$u?"UTC":""),p=(e={},e[w]=u+"Date",e[N]=u+"Date",e[v]=u+"Month",e[_]=u+"FullYear",e[b]=u+"Hours",e[T]=u+"Minutes",e[$]=u+"Seconds",e[g]=u+"Milliseconds",e)[c],S=c===w?this.$D+(r-this.$W):r;if(c===v||c===_){var H=this.clone().set(N,1);H.$d[p](S),H.init(),this.$d=H.set(N,Math.min(this.$D,H.daysInMonth())).$d}else p&&this.$d[p](S);return this.init(),this},s.set=function(t,r){return this.clone().$set(t,r)},s.get=function(t){return this[m.p(t)]()},s.add=function(t,r){var e,c=this;t=Number(t);var u=m.p(r),p=function(C){var W=F(c);return m.w(W.date(W.date()+Math.round(C*t)),c)};if(u===v)return this.set(v,this.$M+t);if(u===_)return this.set(_,this.$y+t);if(u===w)return p(1);if(u===x)return p(7);var S=(e={},e[T]=o,e[b]=l,e[$]=n,e)[u]||1,H=this.$d.getTime()+t*S;return m.w(H,this)},s.subtract=function(t,r){return this.add(-1*t,r)},s.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||ot;var c=t||"YYYY-MM-DDTHH:mm:ssZ",u=m.z(this),p=this.$H,S=this.$m,H=this.$M,C=e.weekdays,W=e.months,Q=e.meridiem,Z=function(E,R,it,lt){return E&&(E[R]||E(r,c))||it[R].slice(0,lt)},et=function(E){return m.s(p%12||12,E,"0")},J=Q||function(E,R,it){var lt=E<12?"AM":"PM";return it?lt.toLowerCase():lt};return c.replace(ft,function(E,R){return R||function(it){switch(it){case"YY":return String(r.$y).slice(-2);case"YYYY":return m.s(r.$y,4,"0");case"M":return H+1;case"MM":return m.s(H+1,2,"0");case"MMM":return Z(e.monthsShort,H,W,3);case"MMMM":return Z(W,H);case"D":return r.$D;case"DD":return m.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return Z(e.weekdaysMin,r.$W,C,2);case"ddd":return Z(e.weekdaysShort,r.$W,C,3);case"dddd":return C[r.$W];case"H":return String(p);case"HH":return m.s(p,2,"0");case"h":return et(1);case"hh":return et(2);case"a":return J(p,S,!0);case"A":return J(p,S,!1);case"m":return String(S);case"mm":return m.s(S,2,"0");case"s":return String(r.$s);case"ss":return m.s(r.$s,2,"0");case"SSS":return m.s(r.$ms,3,"0");case"Z":return u}return null}(E)||u.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,r,e){var c,u=this,p=m.p(r),S=F(t),H=(S.utcOffset()-this.utcOffset())*o,C=this-S,W=function(){return m.m(u,S)};switch(p){case _:c=W()/12;break;case v:c=W();break;case B:c=W()/3;break;case x:c=(C-H)/6048e5;break;case w:c=(C-H)/864e5;break;case b:c=C/l;break;case T:c=C/o;break;case $:c=C/n;break;default:c=C}return e?c:m.a(c)},s.daysInMonth=function(){return this.endOf(v).$D},s.$locale=function(){return X[this.$L]},s.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),c=ct(t,r,!0);return c&&(e.$L=c),e},s.clone=function(){return m.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},h}(),Tt=ut.prototype;return F.prototype=Tt,[["$ms",g],["$s",$],["$m",T],["$H",b],["$W",w],["$M",v],["$y",_],["$D",N]].forEach(function(h){Tt[h[1]]=function(s){return this.$g(s,h[0],h[1])}}),F.extend=function(h,s){return h.$i||(h(s,ut,F),h.$i=!0),F},F.locale=ct,F.isDayjs=mt,F.unix=function(h){return F(1e3*h)},F.en=X[z],F.Ls=X,F.p={},F})})(vt);var Ct=vt.exports;const Lt=nt(Ct),rt=(d,i="MM/DD HH:mm")=>Lt(d).format(i),pt=(d,i)=>{let n,o=0;return(...l)=>{const g=Date.now(),$=g-o;!o||$>=i?(o=g,d.apply(void 0,l)):n||(n=setTimeout(()=>{o=g,d.apply(void 0,l),n=null},i-$))}},Ot=(d,i)=>{const n=document.createElement("canvas");n.width=n.height=1;const o=n.getContext("2d");o.fillStyle=d,o.fillRect(0,0,1,1);const l=o.getImageData(0,0,1,1).data;return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${i})`},_t=({xCenterPoint:d,cfg:i,timePerPixel:n,timeSpacing:o,currentTime:l,$canvas:g,screenScaleCount:$,scaleHeight:T,startTime:b,drawLine:w,drawText:x,drawArea:v})=>{const B=({space:N,scaleTimeFormat:ot,bgTimeFormat:dt,pointerTimeFormat:ft})=>{x({x:g.width-d/10,y:6,text:rt(l,dt),fontSize:`${g.height-5}px`,align:"right",baseLine:"top",color:i.bgTextColor});const ht=b%o,tt=ht/n;for(let G=0;G<$;G++){const z=G*i.scaleSpacing-tt-i.pointerWidth/2,X=b+G*o-ht;if(X%(o*N)===0){w({x:z,y:T.long}),x({x:z,y:g.height-T.long-5,text:rt(X,ot),baseLine:"bottom"});continue}w({x:z,y:T.short})}w({x:d-i.pointerWidth/2,y:g.height,width:i.pointerWidth,color:i.pointerColor}),v({startX:d-i.pointerDisplayWidth/2,startY:4,endX:d+i.pointerDisplayWidth/2,endY:4+i.pointerDisplayHeight,bgColor:i.pointerColor}),x({x:d,y:i.pointerDisplayHeight/2+5,text:rt(l,ft),align:"center",baseLine:"middle"})},_=i.thresholdsConfig[o];_&&B({space:_.space,scaleTimeFormat:_.scaleTimeFormat,bgTimeFormat:_.bgTimeFormat,pointerTimeFormat:_.pointerTimeFormat})},Et={fill:!0,width:1e3,height:60,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",fontFamily:"Arial",scaleColor:"#ffffff",scaleSpacing:7,areaBgColor:"#ffffff55",pointerColor:"#00aeec",pointerWidth:3,pointerDisplayWidth:100,pointerDisplayHeight:14,fps:60,zoom:3,timeSpacingList:[10,100,1e3,1e4,6e4,6e5,36e5,864e5,6048e5],thresholdsConfig:{10:{scaleTimeFormat:"mm:ss:SSS",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},100:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},1e3:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},1e4:{scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:12},6e4:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},6e5:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},36e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"MM/DD HH:mm",space:12},864e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"YYYY/MM/DD HH:mm",space:12},6048e5:{scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD",space:10}}};class Wt{constructor(i,n){k(this,y);st(this,"$canvas");st(this,"$canvasParent");st(this,"ctx");st(this,"cfg");k(this,q,M());k(this,O,0);k(this,j);k(this,D);k(this,U);k(this,P,!1);k(this,I,null);k(this,at,({x:i,y:n,width:o=1,color:l=this.cfg.scaleColor})=>{this.ctx.beginPath(),this.ctx.moveTo(i,this.$canvas.height),this.ctx.lineTo(i,this.$canvas.height-n),this.ctx.closePath(),this.ctx.strokeStyle=l,this.ctx.lineWidth=o,this.ctx.stroke()});k(this,K,({x:i,y:n,text:o,color:l=this.cfg.textColor,fontSize:g="11px",align:$="center",baseLine:T="alphabetic"})=>{this.ctx.beginPath(),this.ctx.font=`${g} ${this.cfg.fontFamily}`,this.ctx.fillStyle=l,this.ctx.textAlign=$,this.ctx.textBaseline=T,this.ctx.fillText(o,i,n)});k(this,V,({startX:i,startY:n,endX:o,endY:l,bgColor:g})=>{this.ctx.beginPath(),this.ctx.rect(i,n,o-i,l-n),this.ctx.fillStyle=g,this.ctx.fill()});if(!i)throw new Error("canvas Element Or Element ID is required!");typeof i=="string"?this.$canvas=document.querySelector(i):this.$canvas=i,this.ctx=this.$canvas.getContext("2d"),this.cfg={...Et,...n},n!=null&&n.pointColor&&(this.cfg.pointerColor=n.pointColor),n!=null&&n.pointWidth&&(this.cfg.pointerWidth=n.pointWidth);const{fill:o,width:l,height:g,zoom:$,timeSpacingList:T,scaleHeight:b,textColor:w,bgTextColor:x}=this.cfg;if(x||(this.cfg.bgTextColor=Ot(w,.18)),$<0||$>=T.length||$%1!==0)throw new Error(`zoom must be 0 ~ ${T.length-1}, and must be an integer`);if(o){const v=this.$canvas.parentElement;this.$canvasParent=v,this.$canvas.width=v.clientWidth,this.$canvas.height=v.clientHeight,new ResizeObserver(pt(A(this,y,xt).bind(this),200)).observe(v)}else this.$canvas.width=l,this.$canvas.height=g;L(this,D,T[$]),b!=null&&b.long&&(b!=null&&b.short)?L(this,U,b):L(this,U,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw(),this.$canvas.addEventListener("wheel",A(this,y,Yt).bind(this),{passive:!1}),this.$canvas.addEventListener("mousedown",A(this,y,bt).bind(this)),this.$canvas.addEventListener("touchstart",A(this,y,yt).bind(this),{passive:!1}),this.$canvas.addEventListener("touchmove",A(this,y,wt).bind(this),{passive:!1}),this.$canvas.addEventListener("touchend",A(this,y,St).bind(this))}draw({currentTime:i,areas:n,_privateFlag:o}={}){if(a(this,P)&&!o)return;L(this,O,i||Date.now()),L(this,j,n||[]);const l=Math.ceil(this.$canvas.width/this.cfg.scaleSpacing),g=l*a(this,D),$=a(this,O)-g/2,T=a(this,O)+g/2,b=this.$canvas.width/2,w=g/this.$canvas.width;A(this,y,Ft).call(this),a(this,V).call(this,{startX:0,startY:0,endX:this.$canvas.width,endY:this.$canvas.height,bgColor:this.cfg.bgColor}),a(this,j).forEach(x=>{const v=x.startTime<=$?0:Math.round((x.startTime-$)/w),B=x.endTime>=T?this.$canvas.width:Math.round((x.endTime-$)/w);v<this.$canvas.width&&B>0&&a(this,V).call(this,{startX:v,startY:0,endX:B,endY:this.$canvas.height,bgColor:x.bgColor||this.cfg.areaBgColor})}),_t.bind(this)({xCenterPoint:b,screenScaleCount:l,startTime:$,timePerPixel:w,scaleHeight:a(this,U),timeSpacing:a(this,D),currentTime:a(this,O),$canvas:this.$canvas,cfg:this.cfg,drawLine:a(this,at).bind(this),drawText:a(this,K).bind(this),drawArea:a(this,V).bind(this)}),A(this,y,Ht).call(this)}getCurrentTime(){return a(this,O)}on(i,n){a(this,q).on(i,n)}off(i,n){a(this,q).off(i,n)}}return q=new WeakMap,O=new WeakMap,j=new WeakMap,D=new WeakMap,U=new WeakMap,P=new WeakMap,I=new WeakMap,y=new WeakSet,bt=function(i){L(this,P,!0);let n=i.clientX,o=a(this,O);const l=pt(({clientX:T})=>{a(this,P)&&(o=Math.round(a(this,O)-a(this,D)/this.cfg.scaleSpacing*(T-n)),n=T,this.draw({currentTime:o,areas:a(this,j),_privateFlag:!0}))},1e3/this.cfg.fps),g=T=>{const b=this.$canvas.getBoundingClientRect(),w=T.clientX-b.left,x=T.clientY-b.top,v=3;(w<v||w>this.$canvas.width-v||x<v||x>this.$canvas.height-v)&&(this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g))},$=()=>{this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g),document.removeEventListener("mouseup",$),L(this,P,!1),A(this,y,$t).call(this,"dragged",o)};this.$canvas.addEventListener("mousemove",l),this.$canvas.addEventListener("mousemove",g),document.addEventListener("mouseup",$)},yt=function(i){i.preventDefault(),L(this,P,!0),L(this,I,i.touches[0].clientX)},wt=function(i){if(i.preventDefault(),!a(this,P)||a(this,I)===null)return;const n=i.touches[0],o=n.clientX-a(this,I),l=Math.round(a(this,O)-a(this,D)/this.cfg.scaleSpacing*o);L(this,I,n.clientX),this.draw({currentTime:l,areas:a(this,j),_privateFlag:!0})},St=function(){a(this,P)&&(L(this,P,!1),L(this,I,null),A(this,y,$t).call(this,"dragged",a(this,O)))},Yt=function(i){i.preventDefault();const n=this.cfg.timeSpacingList.findIndex(o=>o===a(this,D));i.deltaY<0&&n>0?(L(this,D,this.cfg.timeSpacingList[n-1]),this.draw({currentTime:a(this,O),areas:a(this,j),_privateFlag:!0})):i.deltaY>0&&n<this.cfg.timeSpacingList.length-1&&(L(this,D,this.cfg.timeSpacingList[n+1]),this.draw({currentTime:a(this,O),areas:a(this,j),_privateFlag:!0}))},xt=function(){this.$canvasParent&&(this.$canvas.width=this.$canvasParent.clientWidth,this.$canvas.height=this.$canvasParent.clientHeight,this.cfg.scaleHeight||L(this,U,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw({currentTime:a(this,O),areas:a(this,j)}))},Ft=function(){this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height)},Ht=function(){const i=()=>a(this,D)<1e3?`${a(this,D)}ms`:a(this,D)<6e4?`${Math.round(a(this,D)/100)/10}sec`:a(this,D)<36e5?`${Math.round(a(this,D)/100/60)/10}min`:a(this,D)<864e5?`${Math.round(a(this,D)/100/60/60)/10}hours`:a(this,D)<6048e5?`${Math.round(a(this,D)/100/60/60/24)/10}days`:`${Math.round(a(this,D)/100/60/60/24/7)/10}weeks`;a(this,K).call(this,{x:this.cfg.scaleSpacing+12,y:9,text:i(),align:"left",baseLine:"middle"}),this.ctx.beginPath(),this.ctx.moveTo(5,6),this.ctx.lineTo(5,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,6),this.ctx.strokeStyle=this.cfg.scaleColor,this.ctx.lineWidth=1.5,this.ctx.stroke()},at=new WeakMap,K=new WeakMap,V=new WeakMap,$t=function(...i){a(this,q).emit(...i)},f.default=Wt,f.format=rt,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),f}({});
