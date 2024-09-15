var $timeline=function(f){"use strict";var Lt=Object.defineProperty;var Mt=f=>{throw TypeError(f)};var _t=(f,p,w)=>p in f?Lt(f,p,{enumerable:!0,configurable:!0,writable:!0,value:w}):f[p]=w;var it=(f,p,w)=>_t(f,typeof p!="symbol"?p+"":p,w),dt=(f,p,w)=>p.has(f)||Mt("Cannot "+w);var h=(f,p,w)=>(dt(f,p,"read from private field"),w?w.call(f):p.get(f)),W=(f,p,w)=>p.has(f)?Mt("Cannot add the same private member more than once"):p instanceof WeakSet?p.add(f):p.set(f,w),k=(f,p,w,st)=>(dt(f,p,"write to private field"),st?st.call(f,w):p.set(f,w),w),J=(f,p,w)=>(dt(f,p,"access private method"),w);var R,_,P,D,U,X,H,Tt,Dt,yt,bt,wt,rt,Q,q,St;function p(m){return{all:m=m||new Map,on:function(s,n){var a=m.get(s);a?a.push(n):m.set(s,[n])},off:function(s,n){var a=m.get(s);a&&(n?a.splice(a.indexOf(n)>>>0,1):m.set(s,[]))},emit:function(s,n){var a=m.get(s);a&&a.slice().map(function(l){l(n)}),(a=m.get("*"))&&a.slice().map(function(l){l(s,n)})}}}var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function st(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var gt={exports:{}};(function(m,s){(function(n,a){m.exports=a()})(w,function(){var n=1e3,a=6e4,l=36e5,g="millisecond",$="second",M="minute",T="hour",S="day",F="week",y="month",z="quarter",O="year",I="date",at="Invalid Date",lt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,mt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ot={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var i=["th","st","nd","rd"],t=o%100;return"["+o+(i[(t-20)%10]||i[t]||i[0])+"]"}},K=function(o,i,t){var r=String(o);return!r||r.length>=i?o:""+Array(i+1-r.length).join(t)+o},V={s:K,z:function(o){var i=-o.utcOffset(),t=Math.abs(i),r=Math.floor(t/60),e=t%60;return(i<=0?"+":"-")+K(r,2,"0")+":"+K(e,2,"0")},m:function o(i,t){if(i.date()<t.date())return-o(t,i);var r=12*(t.year()-i.year())+(t.month()-i.month()),e=i.clone().add(r,y),c=t-e<0,u=i.clone().add(r+(c?-1:1),y);return+(-(r+(t-e)/(c?e-u:u-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:y,y:O,w:F,d:S,D:I,h:T,m:M,s:$,ms:g,Q:z}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},j="en",A={};A[j]=ot;var vt="$isDayjsObject",ft=function(o){return o instanceof ct||!(!o||!o[vt])},ht=function o(i,t,r){var e;if(!i)return j;if(typeof i=="string"){var c=i.toLowerCase();A[c]&&(e=c),t&&(A[c]=t,e=c);var u=i.split("-");if(!e&&u.length>1)return o(u[0])}else{var v=i.name;A[v]=i,e=v}return!r&&e&&(j=e),e||!r&&j},Y=function(o,i){if(ft(o))return o.clone();var t=typeof i=="object"?i:{};return t.date=o,t.args=arguments,new ct(t)},d=V;d.l=ht,d.i=ft,d.w=function(o,i){return Y(o,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var ct=function(){function o(t){this.$L=ht(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[vt]=!0}var i=o.prototype;return i.parse=function(t){this.$d=function(r){var e=r.date,c=r.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(lt);if(u){var v=u[2]-1||0,b=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)):new Date(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)}}return new Date(e)}(t),this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return d},i.isValid=function(){return this.$d.toString()!==at},i.isSame=function(t,r){var e=Y(t);return this.startOf(r)<=e&&e<=this.endOf(r)},i.isAfter=function(t,r){return Y(t)<this.startOf(r)},i.isBefore=function(t,r){return this.endOf(r)<Y(t)},i.$g=function(t,r,e){return d.u(t)?this[r]:this.set(e,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,r){var e=this,c=!!d.u(r)||r,u=d.p(t),v=function(B,L){var N=d.w(e.$u?Date.UTC(e.$y,L,B):new Date(e.$y,L,B),e);return c?N:N.endOf(S)},b=function(B,L){return d.w(e.toDate()[B].apply(e.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(L)),e)},x=this.$W,C=this.$M,E=this.$D,G="set"+(this.$u?"UTC":"");switch(u){case O:return c?v(1,0):v(31,11);case y:return c?v(1,C):v(0,C+1);case F:var Z=this.$locale().weekStart||0,tt=(x<Z?x+7:x)-Z;return v(c?E-tt:E+(6-tt),C);case S:case I:return b(G+"Hours",0);case T:return b(G+"Minutes",1);case M:return b(G+"Seconds",2);case $:return b(G+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,r){var e,c=d.p(t),u="set"+(this.$u?"UTC":""),v=(e={},e[S]=u+"Date",e[I]=u+"Date",e[y]=u+"Month",e[O]=u+"FullYear",e[T]=u+"Hours",e[M]=u+"Minutes",e[$]=u+"Seconds",e[g]=u+"Milliseconds",e)[c],b=c===S?this.$D+(r-this.$W):r;if(c===y||c===O){var x=this.clone().set(I,1);x.$d[v](b),x.init(),this.$d=x.set(I,Math.min(this.$D,x.daysInMonth())).$d}else v&&this.$d[v](b);return this.init(),this},i.set=function(t,r){return this.clone().$set(t,r)},i.get=function(t){return this[d.p(t)]()},i.add=function(t,r){var e,c=this;t=Number(t);var u=d.p(r),v=function(C){var E=Y(c);return d.w(E.date(E.date()+Math.round(C*t)),c)};if(u===y)return this.set(y,this.$M+t);if(u===O)return this.set(O,this.$y+t);if(u===S)return v(1);if(u===F)return v(7);var b=(e={},e[M]=a,e[T]=l,e[$]=n,e)[u]||1,x=this.$d.getTime()+t*b;return d.w(x,this)},i.subtract=function(t,r){return this.add(-1*t,r)},i.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||at;var c=t||"YYYY-MM-DDTHH:mm:ssZ",u=d.z(this),v=this.$H,b=this.$m,x=this.$M,C=e.weekdays,E=e.months,G=e.meridiem,Z=function(L,N,et,ut){return L&&(L[N]||L(r,c))||et[N].slice(0,ut)},tt=function(L){return d.s(v%12||12,L,"0")},B=G||function(L,N,et){var ut=L<12?"AM":"PM";return et?ut.toLowerCase():ut};return c.replace(mt,function(L,N){return N||function(et){switch(et){case"YY":return String(r.$y).slice(-2);case"YYYY":return d.s(r.$y,4,"0");case"M":return x+1;case"MM":return d.s(x+1,2,"0");case"MMM":return Z(e.monthsShort,x,E,3);case"MMMM":return Z(E,x);case"D":return r.$D;case"DD":return d.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return Z(e.weekdaysMin,r.$W,C,2);case"ddd":return Z(e.weekdaysShort,r.$W,C,3);case"dddd":return C[r.$W];case"H":return String(v);case"HH":return d.s(v,2,"0");case"h":return tt(1);case"hh":return tt(2);case"a":return B(v,b,!0);case"A":return B(v,b,!1);case"m":return String(b);case"mm":return d.s(b,2,"0");case"s":return String(r.$s);case"ss":return d.s(r.$s,2,"0");case"SSS":return d.s(r.$ms,3,"0");case"Z":return u}return null}(L)||u.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,r,e){var c,u=this,v=d.p(r),b=Y(t),x=(b.utcOffset()-this.utcOffset())*a,C=this-b,E=function(){return d.m(u,b)};switch(v){case O:c=E()/12;break;case y:c=E();break;case z:c=E()/3;break;case F:c=(C-x)/6048e5;break;case S:c=(C-x)/864e5;break;case T:c=C/l;break;case M:c=C/a;break;case $:c=C/n;break;default:c=C}return e?c:d.a(c)},i.daysInMonth=function(){return this.endOf(y).$D},i.$locale=function(){return A[this.$L]},i.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),c=ht(t,r,!0);return c&&(e.$L=c),e},i.clone=function(){return d.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},o}(),pt=ct.prototype;return Y.prototype=pt,[["$ms",g],["$s",$],["$m",M],["$H",T],["$W",S],["$M",y],["$y",O],["$D",I]].forEach(function(o){pt[o[1]]=function(i){return this.$g(i,o[0],o[1])}}),Y.extend=function(o,i){return o.$i||(o(i,ct,Y),o.$i=!0),Y},Y.locale=ht,Y.isDayjs=ft,Y.unix=function(o){return Y(1e3*o)},Y.en=A[j],Y.Ls=A,Y.p={},Y})})(gt);var Yt=gt.exports;const xt=st(Yt),nt=(m,s="MM/DD HH:mm")=>xt(m).format(s),$t=(m,s)=>{let n,a=0;return(...l)=>{const g=Date.now(),$=g-a;!a||$>=s?(a=g,m.apply(void 0,l)):n||(n=setTimeout(()=>{a=g,m.apply(void 0,l),n=null},s-$))}},Ft=(m,s)=>{const n=document.createElement("canvas");n.width=n.height=1;const a=n.getContext("2d");a.fillStyle=m,a.fillRect(0,0,1,1);const l=a.getImageData(0,0,1,1).data;return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${s})`},Ct=({xCenterPoint:m,cfg:s,timePerPixel:n,timeSpacing:a,currentTime:l,$canvas:g,screenScaleCount:$,scaleHeight:M,startTime:T,drawLine:S,drawText:F,drawArea:y})=>{const z=({space:I,scaleTimeFormat:at,bgTimeFormat:lt,pointerTimeFormat:mt})=>{F({x:g.width-m/10,y:6,text:nt(l,lt),fontSize:`${g.height-5}px`,align:"right",baseLine:"top",color:s.bgTextColor});const ot=T%a,K=ot/n;for(let V=0;V<$;V++){const j=V*s.scaleSpacing-K-s.pointerWidth/2,A=T+V*a-ot;if(A%(a*I)===0){S({x:j,y:M.long}),F({x:j,y:g.height-M.long-5,text:nt(A,at),baseLine:"bottom"});continue}S({x:j,y:M.short})}S({x:m-s.pointerWidth/2,y:g.height,width:s.pointerWidth,color:s.pointerColor}),y({startX:m-s.pointerDisplayWidth/2,startY:4,endX:m+s.pointerDisplayWidth/2,endY:4+s.pointerDisplayHeight,bgColor:s.pointerColor}),F({x:m,y:s.pointerDisplayHeight/2+5,text:nt(l,mt),align:"center",baseLine:"middle"})},O=s.thresholdsConfig[a];O&&z({space:O.space,scaleTimeFormat:O.scaleTimeFormat,bgTimeFormat:O.bgTimeFormat,pointerTimeFormat:O.pointerTimeFormat})},Ht={fill:!0,width:1e3,height:60,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",fontFamily:"Arial",scaleColor:"#ffffff",scaleSpacing:7,areaBgColor:"#ffffff55",pointerColor:"#00aeec",pointerWidth:3,pointerDisplayWidth:100,pointerDisplayHeight:14,fps:60,zoom:3,timeSpacingList:[10,100,1e3,1e4,6e4,6e5,36e5,864e5,6048e5],thresholdsConfig:{10:{scaleTimeFormat:"mm:ss:SSS",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},100:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},1e3:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},1e4:{scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:12},6e4:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},6e5:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},36e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"MM/DD HH:mm",space:12},864e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"YYYY/MM/DD HH:mm",space:12},6048e5:{scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD",space:10}}};class Ot{constructor(s,n){W(this,H);it(this,"$canvas");it(this,"$canvasParent");it(this,"ctx");it(this,"cfg");W(this,R,p());W(this,_,0);W(this,P);W(this,D);W(this,U);W(this,X,!1);W(this,rt,({x:s,y:n,width:a=1,color:l=this.cfg.scaleColor})=>{this.ctx.beginPath(),this.ctx.moveTo(s,this.$canvas.height),this.ctx.lineTo(s,this.$canvas.height-n),this.ctx.closePath(),this.ctx.strokeStyle=l,this.ctx.lineWidth=a,this.ctx.stroke()});W(this,Q,({x:s,y:n,text:a,color:l=this.cfg.textColor,fontSize:g="11px",align:$="center",baseLine:M="alphabetic"})=>{this.ctx.beginPath(),this.ctx.font=`${g} ${this.cfg.fontFamily}`,this.ctx.fillStyle=l,this.ctx.textAlign=$,this.ctx.textBaseline=M,this.ctx.fillText(a,s,n)});W(this,q,({startX:s,startY:n,endX:a,endY:l,bgColor:g})=>{this.ctx.beginPath(),this.ctx.rect(s,n,a-s,l-n),this.ctx.fillStyle=g,this.ctx.fill()});if(!s)throw new Error("canvas Element Or Element ID is required!");typeof s=="string"?this.$canvas=document.querySelector(s):this.$canvas=s,this.ctx=this.$canvas.getContext("2d"),this.cfg={...Ht,...n},n!=null&&n.pointColor&&(this.cfg.pointerColor=n.pointColor),n!=null&&n.pointWidth&&(this.cfg.pointerWidth=n.pointWidth);const{fill:a,width:l,height:g,zoom:$,timeSpacingList:M,scaleHeight:T,textColor:S,bgTextColor:F}=this.cfg;if(F||(this.cfg.bgTextColor=Ft(S,.18)),$<0||$>=M.length||$%1!==0)throw new Error(`zoom must be 0 ~ ${M.length-1}, and must be an integer`);if(a){const y=this.$canvas.parentElement;this.$canvasParent=y,this.$canvas.width=y.clientWidth,this.$canvas.height=y.clientHeight,new ResizeObserver($t(J(this,H,yt).bind(this),200)).observe(y)}else this.$canvas.width=l,this.$canvas.height=g;k(this,D,M[$]),T!=null&&T.long&&(T!=null&&T.short)?k(this,U,T):k(this,U,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw(),this.$canvas.addEventListener("wheel",J(this,H,Dt).bind(this),{passive:!1}),this.$canvas.addEventListener("mousedown",J(this,H,Tt).bind(this))}draw({currentTime:s,areas:n,_privateFlag:a}={}){if(h(this,X)&&!a)return;k(this,_,s||Date.now()),k(this,P,n||[]);const l=Math.ceil(this.$canvas.width/this.cfg.scaleSpacing),g=l*h(this,D),$=h(this,_)-g/2,M=h(this,_)+g/2,T=this.$canvas.width/2,S=g/this.$canvas.width;J(this,H,bt).call(this),h(this,q).call(this,{startX:0,startY:0,endX:this.$canvas.width,endY:this.$canvas.height,bgColor:this.cfg.bgColor}),h(this,P).forEach(F=>{const y=F.startTime<=$?0:Math.round((F.startTime-$)/S),z=F.endTime>=M?this.$canvas.width:Math.round((F.endTime-$)/S);y<this.$canvas.width&&z>0&&h(this,q).call(this,{startX:y,startY:0,endX:z,endY:this.$canvas.height,bgColor:F.bgColor||this.cfg.areaBgColor})}),Ct.bind(this)({xCenterPoint:T,screenScaleCount:l,startTime:$,timePerPixel:S,scaleHeight:h(this,U),timeSpacing:h(this,D),currentTime:h(this,_),$canvas:this.$canvas,cfg:this.cfg,drawLine:h(this,rt).bind(this),drawText:h(this,Q).bind(this),drawArea:h(this,q).bind(this)}),J(this,H,wt).call(this)}getCurrentTime(){return h(this,_)}on(s,n){h(this,R).on(s,n)}off(s,n){h(this,R).off(s,n)}}return R=new WeakMap,_=new WeakMap,P=new WeakMap,D=new WeakMap,U=new WeakMap,X=new WeakMap,H=new WeakSet,Tt=function(s){k(this,X,!0);let n=s.clientX,a=h(this,_);const l=$t(({clientX:M})=>{h(this,X)&&(a=Math.round(h(this,_)-h(this,D)/this.cfg.scaleSpacing*(M-n)),n=M,this.draw({currentTime:a,areas:h(this,P),_privateFlag:!0}))},1e3/this.cfg.fps),g=({offsetX:M,offsetY:T})=>{(M<3||M>this.$canvas.width-3||T<3||T>this.$canvas.height-3)&&(this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g))},$=()=>{this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g),document.removeEventListener("mouseup",$),k(this,X,!1),J(this,H,St).call(this,"dragged",a)};this.$canvas.addEventListener("mousemove",l),this.$canvas.addEventListener("mousemove",g),document.addEventListener("mouseup",$)},Dt=function(s){s.preventDefault();const n=this.cfg.timeSpacingList.findIndex(a=>a===h(this,D));s.deltaY<0&&n>0?(k(this,D,this.cfg.timeSpacingList[n-1]),this.draw({currentTime:h(this,_),areas:h(this,P),_privateFlag:!0})):s.deltaY>0&&n<this.cfg.timeSpacingList.length-1&&(k(this,D,this.cfg.timeSpacingList[n+1]),this.draw({currentTime:h(this,_),areas:h(this,P),_privateFlag:!0}))},yt=function(){this.$canvasParent&&(this.$canvas.width=this.$canvasParent.clientWidth,this.$canvas.height=this.$canvasParent.clientHeight,this.cfg.scaleHeight||k(this,U,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw({currentTime:h(this,_),areas:h(this,P)}))},bt=function(){this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height)},wt=function(){const s=()=>h(this,D)<1e3?`${h(this,D)}ms`:h(this,D)<6e4?`${Math.round(h(this,D)/100)/10}sec`:h(this,D)<36e5?`${Math.round(h(this,D)/100/60)/10}min`:h(this,D)<864e5?`${Math.round(h(this,D)/100/60/60)/10}hours`:h(this,D)<6048e5?`${Math.round(h(this,D)/100/60/60/24)/10}days`:`${Math.round(h(this,D)/100/60/60/24/7)/10}weeks`;h(this,Q).call(this,{x:this.cfg.scaleSpacing+12,y:9,text:s(),align:"left",baseLine:"middle"}),this.ctx.beginPath(),this.ctx.moveTo(5,6),this.ctx.lineTo(5,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,6),this.ctx.strokeStyle=this.cfg.scaleColor,this.ctx.lineWidth=1.5,this.ctx.stroke()},rt=new WeakMap,Q=new WeakMap,q=new WeakMap,St=function(...s){h(this,R).emit(...s)},f.default=Ot,f.format=nt,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),f}({});
