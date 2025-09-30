import{$ as sc,Ab as fr,Bb as pr,Cb as xs,Da as oc,Db as Wi,Eb as cc,Fb as tt,Gb as Oe,Ha as td,Hb as Co,Ia as mt,Ib as nd,L as Ku,Pb as hc,Q as ic,Qa as ed,Ra as ac,S as Ju,Ta as Ke,U as wo,Z as pi,_ as mi,a as Xn,aa as rc,ab as lc,b as fi,bc as id,c as So,cc as sd,ec as rd,ha as yn,i as $u,ic as mr,jb as kt,jc as od,kb as W,lb as j,lc as ad,mb as se,qa as Qu,sb as ur,ub as qn,wb as je,x as Zu,zb as dr}from"./chunk-FV7N2273.js";var In=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(In||{});function Fe(i,t){return{type:In.Trigger,name:i,definitions:t,options:{}}}function Le(i,t=null){return{type:In.Animate,styles:t,timings:i}}function Zt(i){return{type:In.Style,styles:i,offset:null}}function Eo(i,t,e){return{type:In.State,name:i,styles:t,options:e}}function uc(i){return{type:In.Keyframes,steps:i}}function Ue(i,t,e=null){return{type:In.Transition,expr:i,animation:t,options:e}}function gr(i,t,e=null){return{type:In.Query,selector:i,animation:t,options:e}}function Ao(i,t){return{type:In.Stagger,timings:i,animation:t}}var Mg={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},AC=fi(Xn({},Mg),{"[class.ng-submitted]":"isSubmitted"});var Sg=new Ju("",{providedIn:"root",factory:()=>ld}),ld="always";var wg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ac({type:i});static \u0275inj=ic({})}return i})();var cd=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Sg,useValue:e.callSetDisabledState??ld}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=ac({type:i});static \u0275inj=ic({imports:[wg]})}return i})();var Od=0,Yc=1,Fd=2;var jc=1,Ld=2,Fn=3,Qn=0,$e=1,Ln=2,ii=0,Ki=1,Wr=2,$c=3,Zc=4,Ud=5,wi=100,Nd=101,kd=102,Bd=103,Vd=104,zd=200,Hd=201,Gd=202,Wd=203,Ko=204,Jo=205,Xd=206,qd=207,Yd=208,jd=209,$d=210,Zd=211,Kd=212,Jd=213,Qd=214,va=0,ba=1,Ma=2,Ji=3,Sa=4,wa=5,Ca=6,Ea=7,Kc=0,tf=1,ef=2,si=0,nf=1,sf=2,rf=3,of=4,af=5,lf=6,cf=7;var Nc=300,ns=301,is=302,Aa=303,Ta=304,Xr=306,Qo=1e3,Si=1001,ta=1002,fn=1003,hf=1004;var qr=1005;var Cn=1006,Pa=1007;var Pi=1008;var An=1009,Jc=1010,Qc=1011,Hs=1012,Ra=1013,Ri=1014,Un=1015,Gs=1016,Ia=1017,Da=1018,Ws=1020,th=35902,eh=35899,nh=1021,ih=1022,gn=1023,Ds=1026,Xs=1027,sh=1028,Oa=1029,rh=1030,Fa=1031;var La=1033,Yr=33776,jr=33777,$r=33778,Zr=33779,Ua=35840,Na=35841,ka=35842,Ba=35843,Va=36196,za=37492,Ha=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,ja=37813,$a=37814,Za=37815,Ka=37816,Ja=37817,Qa=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,ol=36283,al=36284,ll=36285,cl=36286;var Sr=2300,ea=2301,Zo=2302,kc=2400,Bc=2401,Vc=2402;var uf=3200,df=3201;var ff=0,pf=1,ri="",an="srgb",Qi="srgb-linear",wr="linear",oe="srgb";var $i=7680;var zc=519,mf=512,gf=513,_f=514,oh=515,xf=516,yf=517,vf=518,bf=519,Hc=35044;var ah="300 es",Sn=2e3,Cr=2001;var ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dc=Math.PI/180,na=180/Math.PI;function Kr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Cg(i,t){return(i%t+t)%t}function fc(i,t,e){return(1-e)*i+e*t}function _r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ne=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ei=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*_,v=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let C=Math.sqrt(w),E=Math.atan2(C,m*v);p=Math.sin(p*E)/C,a=Math.sin(a*E)/C}let y=a*v;if(l=l*p+d*y,c=c*p+f*y,h=h*p+g*y,u=u*p+_*y,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new N,hd=new ei,Bt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],w=s[4],y=s[7],C=s[2],E=s[5],A=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*p+a*w+l*E,r[6]=o*m+a*y+l*A,r[1]=c*_+h*v+u*C,r[4]=c*p+h*w+u*E,r[7]=c*m+h*y+u*A,r[2]=d*_+f*v+g*C,r[5]=d*p+f*w+g*E,r[8]=d*m+f*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mc=new Bt;function lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){let i=Er("canvas");return i.style.display="block",i}var ud={};function Os(i){i in ud||(ud[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dd=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eg(){let i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var Kt=Eg();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=Er("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ag=0,Fs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tg=0,_c=new N,Ii=(()=>{class i extends ti{constructor(e=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,s=Si,r=Si,o=Cn,a=Pi,l=gn,c=An,h=i.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Kr(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let s=e[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[n]=s}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Nc,i.DEFAULT_ANISOTROPY=1,i})(),ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,C=(m+1)/2,E=(h+d)/4,A=(u+_)/4,P=(g+p)/4;return w>y&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=A/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ii(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends Ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends Ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),Po.subVectors(this.max,xr),vs.subVectors(t.a,xr),bs.subVectors(t.b,xr),Ms.subVectors(t.c,xr),gi.subVectors(bs,vs),_i.subVectors(Ms,bs),Xi.subVectors(vs,Ms);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Xi.z,Xi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Xi.z,0,-Xi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Xi.y,Xi.x,0];return!xc(e,vs,bs,Ms,Po)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,vs,bs,Ms,Po))?!1:(Ro.crossVectors(gi,_i),e=[Ro.x,Ro.y,Ro.z],xc(e,vs,bs,Ms,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new N,new N,new N,new N,new N,new N,new N,new N],vn=new N,To=new Ci,vs=new N,bs=new N,Ms=new N,gi=new N,_i=new N,Xi=new N,xr=new N,Po=new N,Ro=new N,qi=new N;function xc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pg=new Ci,yr=new N,yc=new N,Ei=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(yc)),this.expandByPoint(yr.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jn=new N,vc=new N,Io=new N,xi=new N,bc=new N,Do=new N,Mc=new N,Ls=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=xi.dot(this.direction),l=-xi.dot(Io),c=xi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vc).addScaledVector(Io,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){bc.subVectors(e,t),Do.subVectors(n,t),Mc.crossVectors(bc,Do);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);let l=a*this.direction.dot(Do.crossVectors(xi,Do));if(l<0)return null;let c=a*this.direction.dot(bc.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(Mc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rg,t,Ig)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),yi.crossVectors(n,rn),yi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),yi.crossVectors(n,rn)),yi.normalize(),Oo.crossVectors(rn,yi),s[0]=yi.x,s[4]=Oo.x,s[8]=rn.x,s[1]=yi.y,s[5]=Oo.y,s[9]=rn.y,s[2]=yi.z,s[6]=Oo.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],w=n[7],y=n[11],C=n[15],E=s[0],A=s[4],P=s[8],b=s[12],S=s[1],R=s[5],F=s[9],H=s[13],Z=s[2],k=s[6],G=s[10],q=s[14],V=s[3],et=s[7],ct=s[11],yt=s[15];return r[0]=o*E+a*S+l*Z+c*V,r[4]=o*A+a*R+l*k+c*et,r[8]=o*P+a*F+l*G+c*ct,r[12]=o*b+a*H+l*q+c*yt,r[1]=h*E+u*S+d*Z+f*V,r[5]=h*A+u*R+d*k+f*et,r[9]=h*P+u*F+d*G+f*ct,r[13]=h*b+u*H+d*q+f*yt,r[2]=g*E+_*S+p*Z+m*V,r[6]=g*A+_*R+p*k+m*et,r[10]=g*P+_*F+p*G+m*ct,r[14]=g*b+_*H+p*q+m*yt,r[3]=v*E+w*S+y*Z+C*V,r[7]=v*A+w*R+y*k+C*et,r[11]=v*P+w*F+y*G+C*ct,r[15]=v*b+w*H+y*q+C*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,w=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,E=e*v+n*w+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=v*A,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*A,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=w*A,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*A,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=y*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=C*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,v=l*c,w=l*h,y=l*u,C=n.x,E=n.y,A=n.z;return s[0]=(1-(_+m))*C,s[1]=(f+y)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+w)*A,s[9]=(p-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ss.set(s[0],s[1],s[2]).length(),o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Cr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ss=new N,bn=new ye,Rg=new N(0,0,0),Ig=new N(1,1,1),yi=new N,Oo=new N,rn=new N,pd=new ye,md=new ei,ts=(()=>{class i{constructor(e=0,n=0,s=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,r=this._order){return this._x=e,this._y=n,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dg=0,gd=new N,ws=new ei,$n=new ye,Fo=new N,vr=new N,Og=new N,Fg=new ei,_d=new N(1,0,0),xd=new N(0,1,0),yd=new N(0,0,1),vd={type:"added"},Lg={type:"removed"},Cs={type:"childadded",child:null},Sc={type:"childremoved",child:null},pn=(()=>{class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,n=new ts,s=new ei,r=new N(1,1,1);function o(){s.setFromEuler(n,!1)}function a(){n.setFromQuaternion(s,void 0,!1)}n._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new Bt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,n){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Fo.copy(e):Fo.set(e,n,s);let r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(vr,Fo,this.up):$n.lookAt(Fo,vr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ws.setFromRotationMatrix($n),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lg),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>fi(Xn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>Xn({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(n){let l=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),h.length>0&&(s.textures=h),u.length>0&&(s.images=u),d.length>0&&(s.shapes=d),f.length>0&&(s.skeletons=f),g.length>0&&(s.animations=g),_.length>0&&(s.nodes=_)}return s.object=r,s;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){let r=e.children[s];this.add(r.clone())}return this}}return i.DEFAULT_UP=new N(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Mn=new N,Zn=new N,wc=new N,Kn=new N,Es=new N,As=new N,bd=new N,Cc=new N,Ec=new N,Ac=new N,Tc=new ve,Pc=new ve,Rc=new ve,Mi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Zn.subVectors(n,e),wc.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Zn),l=Mn.dot(wc),c=Zn.dot(Zn),h=Zn.dot(wc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Tc.setScalar(0),Pc.setScalar(0),Rc.setScalar(0),Tc.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,n),Rc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Rc,r.z),o}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Zn.subVectors(t,e),Mn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,n),As.subVectors(r,n),Cc.subVectors(t,n);let l=Es.dot(Cc),c=As.dot(Cc);if(l<=0&&c<=0)return e.copy(n);Ec.subVectors(t,s);let h=Es.dot(Ec),u=As.dot(Ec);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Es,o);Ac.subVectors(t,r);let f=Es.dot(Ac),g=As.dot(Ac);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(As,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return bd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(bd,a);let m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Es,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Cg(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Kt.workingToColorSpace(Ge.copy(this),t),Math.round(jt(Ge.r*255,0,255))*65536+Math.round(jt(Ge.g*255,0,255))*256+Math.round(jt(Ge.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=an){Kt.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Lo);let n=fc(vi.h,Lo.h,e),s=fc(vi.s,Lo.s,e),r=fc(vi.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Wt;Wt.NAMES=wf;var Ug=0,ni=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Ki,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pr=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new N,Uo=new ne,Ng=0,We=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_r(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_r(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_r(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}};var Rr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wn=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},kg=0,dn=new ye,Dc=new pn,Ts=new N,on=new Ci,br=new Ci,De=new N,ln=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lh(t)?Ir:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(on.min,br.min),on.expandByPoint(De),De.addVectors(on.max,br.max),on.expandByPoint(De)):(on.expandByPoint(br.min),on.expandByPoint(br.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),De.add(Ts)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new N,l[P]=new N;let c=new N,h=new N,u=new N,d=new ne,f=new ne,g=new ne,_=new N,p=new N;function m(P,b,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(_),a[b].add(_),a[S].add(_),l[P].add(p),l[b].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,b=v.length;P<b;++P){let S=v[P],R=S.start,F=S.count;for(let H=R,Z=R+F;H<Z;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new N,y=new N,C=new N,E=new N;function A(P){C.fromBufferAttribute(s,P),E.copy(C);let b=a[P];w.copy(b),w.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(E,b);let R=y.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,R)}for(let P=0,b=v.length;P<b;++P){let S=v[P],R=S.start,F=S.count;for(let H=R,Z=R+F;H<Z;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new ye,Yi=new Ls,No=new Ei,Sd=new N,ko=new N,Bo=new N,Vo=new N,Oc=new N,zo=new N,wd=new N,Ho=new N,mn=class extends pn{constructor(t=new ln,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Oc.fromBufferAttribute(u,t),o?zo.addScaledVector(Oc,h):zo.addScaledVector(Oc.sub(e),h))}e.add(zo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(No.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(No,Sd)===null||Yi.origin.distanceToSquared(Sd)>(t.far-t.near)**2))&&(Md.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Md),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,C=w;y<C;y+=3){let E=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);s=Go(this,m,t,n,c,h,u,E,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=Go(this,o,t,n,c,h,u,v,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,C=w;y<C;y+=3){let E=y,A=y+1,P=y+2;s=Go(this,m,t,n,c,h,u,E,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=p,w=p+1,y=p+2;s=Go(this,o,t,n,c,h,u,v,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Bg(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:i}}function Go(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ko),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Vo);let h=Bg(i,t,e,n,ko,Bo,Vo,wd);if(h){let u=new N;Mi.getBarycoord(wd,ko,Bo,Vo,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Mi.getNormal(ko,Bo,Vo,d.normal),h.face=d,h.barycoord=u}return h}var Us=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(h,3)),this.setAttribute("uv",new wn(u,2));function g(_,p,m,v,w,y,C,E,A,P,b){let S=y/A,R=C/P,F=y/2,H=C/2,Z=E/2,k=A+1,G=P+1,q=0,V=0,et=new N;for(let ct=0;ct<G;ct++){let yt=ct*R-H;for(let Lt=0;Lt<k;Lt++){let Qt=Lt*S-F;et[_]=Qt*v,et[p]=yt*w,et[m]=Z,c.push(et.x,et.y,et.z),et[_]=0,et[p]=0,et[m]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(Lt/A),u.push(1-ct/P),q+=1}}for(let ct=0;ct<P;ct++)for(let yt=0;yt<A;yt++){let Lt=d+yt+k*ct,Qt=d+yt+k*(ct+1),te=d+(yt+1)+k*(ct+1),qt=d+(yt+1)+k*ct;l.push(Lt,Qt,qt),l.push(Qt,te,qt),V+=6}a.addGroup(f,V,b),f+=V,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Vg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ch(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Cf={clone:ss,merge:Xe},zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Vg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Dr=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new N,Cd=new ne,Ed=new ne,Ne=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Cd,Ed),e.subVectors(Ed,Cd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Rs=1,oa=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Ps,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Ps,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Ps,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Ps,Rs,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Ps,Rs,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ps,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends Ii{constructor(t=[],e=ns,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},aa=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Us(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ii});r.uniforms.tEquirect.value=e;let o=new mn(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Cn),new oa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Zi=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gg={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ks=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Fc=new N,Wg=new N,Xg=new Bt,Dn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fc.subVectors(n,e).cross(Wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xg.getNormalMatrix(t),s=this.coplanarPoint(Fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new Ei,qg=new ne(.5,.5),Wo=new N,Bs=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],v=r[12],w=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,m-g,C-v).normalize(),s[1].setComponents(c+o,f+h,m+g,C+v).normalize(),s[2].setComponents(c+a,f+u,m+_,C+w).normalize(),s[3].setComponents(c-a,f-u,m-_,C-w).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,m-p,C-y).normalize();else if(s[4].setComponents(c-l,f-d,m-p,C-y).normalize(),e===Sn)s[5].setComponents(c+l,f+d,m+p,C+y).normalize();else if(e===Cr)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=qg.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wo.x=s.normal.x>0?t.max.x:t.min.x,Wo.y=s.normal.y>0?t.max.y:t.min.y,Wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},la=new N,ca=new N,Ad=new ye,Mr=new Ls,Xo=new Ei,Lc=new N,Td=new N,Fr=class extends pn{constructor(t=new ln,e=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)la.fromBufferAttribute(e,s-1),ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=la.distanceTo(ca);t.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;Ad.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(Ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),v=h.getX(_+1),w=qo(this,t,Mr,l,m,v,_);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=qo(this,t,Mr,l,_,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=qo(this,t,Mr,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=qo(this,t,Mr,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,s),ca.fromBufferAttribute(a,r),e.distanceSqToSegment(la,ca,Lc,Td)>n)return;Lc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lc);if(!(c<t.near||c>t.far))return{distance:c,point:Td.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var zs=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pd=new ye,Gc=new Ls,Yo=new Ei,jo=new N,Lr=class extends pn{constructor(t=new ln,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Pd.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=c.getX(g);jo.fromBufferAttribute(u,p),Rd(jo,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jo.fromBufferAttribute(u,g),Rd(jo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rd(i,t,e,n,s,r,o){let a=Gc.distanceSqToPoint(i);if(a<e){let l=new N;Gc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ur=class extends Ii{constructor(t,e,n=Ri,s,r,o,a=fn,l=fn,c,h=Ds,u=1){if(h!==Ds&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nr=class extends Ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var kr=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let w=0;w<c;w++){let y=w*u-r;g.push(y,-v,0),_.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let w=v+c*m,y=v+c*(m+1),C=v+1+c*(m+1),E=v+1+c*m;f.push(w,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ha=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $o(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,a=2*e-n;break;case Vc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=t,l=2*n-e;break;case Vc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+v*o[c+C]+w*o[l+C]+y*o[u+C];return r}},fa=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},pa=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$o(e,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$o(t.times,Array),values:$o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Yg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=ea;var Ai=class extends cn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Sr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var _a=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},Br=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends cn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Sr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var Vr=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Uc=new ye,Id=new N,Dd=new N,Wc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Id.setFromMatrixPosition(t.matrixWorld),e.position.copy(Id),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zr=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xc=class extends Wc{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gr=class extends Vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ya=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hh="\\[\\]\\.:\\/",jg=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",$g="[^"+hh.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",uh),Kg=/(WCOD+)?/.source.replace("WCOD",$g),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),t0=new RegExp("^"+Zg+Kg+Jg+Qg+"$"),e0=["material","materials","bones","map"],qc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=(()=>{class i{constructor(e,n,s){this.path=n,this.parsedPath=s||i.parseTrackName(n),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,s){return e&&e.isAnimationObjectGroup?new i.Composite(e,n,s):new i(e,n,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){let n=t0.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);e0.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(n);if(s!==void 0)return s}if(e.children){let s=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=s(l.children);if(c)return c}return null},r=s(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)e[n++]=s[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,s=n.objectName,r=n.propertyName,o=n.propertyIndex;if(e||(e=i.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let h=n.objectIndex;switch(s){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[r];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=qc,i})();Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RC=new Float32Array(1);function dh(i,t,e,n){let s=n0(n);switch(e){case nh:return i*t;case sh:return i*t/s.components*s.byteLength;case Oa:return i*t/s.components*s.byteLength;case rh:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case ih:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case La:return i*t*4/s.components*s.byteLength;case Yr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Va:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(i){switch(i){case An:case Jc:return{byteLength:1,components:1};case Hs:case Qc:case Gs:return{byteLength:2,components:1};case Ia:case Da:return{byteLength:2,components:4};case Ri:case Ra:case Un:return{byteLength:4,components:1};case th:case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $f(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function s0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:_0,iridescence_fragment:x0,bumpmap_pars_fragment:y0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:w0,color_pars_fragment:C0,color_pars_vertex:E0,color_vertex:A0,common:T0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:R0,displacementmap_pars_vertex:I0,displacementmap_vertex:D0,emissivemap_fragment:O0,emissivemap_pars_fragment:F0,colorspace_fragment:L0,colorspace_pars_fragment:U0,envmap_fragment:N0,envmap_common_pars_fragment:k0,envmap_pars_fragment:B0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:$0,lights_pars_begin:Z0,lights_toon_fragment:J0,lights_toon_pars_fragment:Q0,lights_phong_fragment:t_,lights_phong_pars_fragment:e_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:__,morphcolor_vertex:x_,morphnormal_vertex:y_,morphtarget_pars_vertex:v_,morphtarget_vertex:b_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:w_,normal_pars_vertex:C_,normal_vertex:E_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:R_,iridescence_pars_fragment:I_,opaque_fragment:D_,packing:O_,premultiplied_alpha_fragment:F_,project_vertex:L_,dithering_fragment:U_,dithering_pars_fragment:N_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:z_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:j_,specularmap_pars_fragment:$_,tonemapping_fragment:Z_,tonemapping_pars_fragment:K_,transmission_fragment:J_,transmission_pars_fragment:Q_,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:dx,distanceRGBA_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:_x,meshbasic_vert:xx,meshbasic_frag:yx,meshlambert_vert:vx,meshlambert_frag:bx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:wx,meshnormal_frag:Cx,meshphong_vert:Ex,meshphong_frag:Ax,meshphysical_vert:Tx,meshphysical_frag:Px,meshtoon_vert:Rx,meshtoon_frag:Ix,points_vert:Dx,points_frag:Ox,shadow_vert:Fx,shadow_frag:Lx,sprite_vert:Ux,sprite_frag:Nx},lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Nn={basic:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Xe([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Xe([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Xe([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Xe([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Xe([lt.lights,lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Nn.physical={uniforms:Xe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var hl={r:0,b:0,g:0},rs=new ts,kx=new ye;function Bx(i,t,e,n,s,r,o){let a=new Wt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1,C=g(w);C===null?m(a,l):C&&C.isColor&&(m(C,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,y){let C=g(y);C&&(C.isCubeTexture||C.mapping===Xr)?(h===void 0&&(h=new mn(new Us(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ss(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(y.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(rs)),h.material.toneMapped=Kt.getTransfer(C.colorSpace)!==oe,(u!==C||d!==C.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new mn(new kr(2,2),new En({name:"BackgroundMaterial",uniforms:ss(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(C.colorSpace)!==oe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,y){w.getRGB(hl,ch(i)),n.buffers.color.setClear(hl.r,hl.g,hl.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:_,addToRenderList:p,dispose:v}}function Vx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,R,F,H,Z){let k=!1,G=u(H,F,R);r!==G&&(r=G,c(r.object)),k=f(S,H,F,Z),k&&g(S,H,F,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(S,R,F,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,F){let H=F.wireframe===!0,Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let k=Z[R.id];k===void 0&&(k={},Z[R.id]=k);let G=k[H];return G===void 0&&(G=d(l()),k[H]=G),G}function d(S){let R=[],F=[],H=[];for(let Z=0;Z<e;Z++)R[Z]=0,F[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,R,F,H){let Z=r.attributes,k=R.attributes,G=0,q=F.getAttributes();for(let V in q)if(q[V].location>=0){let ct=Z[V],yt=k[V];if(yt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function g(S,R,F,H){let Z={},k=R.attributes,G=0,q=F.getAttributes();for(let V in q)if(q[V].location>=0){let ct=k[V];ct===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));let yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),Z[V]=yt,G++}r.attributes=Z,r.attributesNum=G,r.index=H}function _(){let S=r.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function p(S){m(S,0)}function m(S,R){let F=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;F[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),Z[S]!==R&&(i.vertexAttribDivisor(S,R),Z[S]=R)}function v(){let S=r.newAttributes,R=r.enabledAttributes;for(let F=0,H=R.length;F<H;F++)R[F]!==S[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function w(S,R,F,H,Z,k,G){G===!0?i.vertexAttribIPointer(S,R,F,Z,k):i.vertexAttribPointer(S,R,F,H,Z,k)}function y(S,R,F,H){_();let Z=H.attributes,k=F.getAttributes(),G=R.defaultAttributeValues;for(let q in k){let V=k[q];if(V.location>=0){let et=Z[q];if(et===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){let ct=et.normalized,yt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;let Qt=Lt.buffer,te=Lt.type,qt=Lt.bytesPerElement,Y=te===i.INT||te===i.UNSIGNED_INT||et.gpuType===Ra;if(et.isInterleavedBufferAttribute){let Q=et.data,gt=Q.stride,Ot=et.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<V.locationSize;Et++)m(V.location+Et,Q.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<V.locationSize;Et++)p(V.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Et=0;Et<V.locationSize;Et++)w(V.location+Et,yt/V.locationSize,te,ct,gt*qt,(Ot+yt/V.locationSize*Et)*qt,Y)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q,et.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Q=0;Q<V.locationSize;Q++)w(V.location+Q,yt/V.locationSize,te,ct,yt*qt,yt/V.locationSize*Q*qt,Y)}}else if(G!==void 0){let ct=G[q];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(V.location,ct);break;case 3:i.vertexAttrib3fv(V.location,ct);break;case 4:i.vertexAttrib4fv(V.location,ct);break;default:i.vertexAttrib1fv(V.location,ct)}}}}v()}function C(){P();for(let S in n){let R=n[S];for(let F in R){let H=R[F];for(let Z in H)h(H[Z].object),delete H[Z];delete R[F]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let F in R){let H=R[F];for(let Z in H)h(H[Z].object),delete H[Z];delete R[F]}delete n[S.id]}function A(S){for(let R in n){let F=n[R];if(F[S.id]===void 0)continue;let H=F[S.id];for(let Z in H)h(H[Z].object),delete H[Z];delete F[S.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function zx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function Gx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Dn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,w=v*4,y=m.clippingState||null;l.value=y,y=h(g,d,w,f);for(let C=0;C!==w;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=f;w!==_;++w,y+=4)o.copy(u[w]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Wx(i){let t=new WeakMap;function e(o,a){return a===Aa?o.mapping=ns:a===Ta&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Aa||a===Ta)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new aa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=4,Ef=[.125,.215,.35,.446,.526,.582],ls=20,fh=new zr,Af=new Wt,ph=null,mh=0,gh=0,_h=!1,as=(1+Math.sqrt(5))/2,qs=1/as,Tf=[new N(-as,qs,0),new N(as,qs,0),new N(-qs,0,as),new N(qs,0,as),new N(0,as,-qs),new N(0,as,qs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Xx=new N,fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Xx}=r;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,t.scissorTest=!1,ul(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Gs,format:gn,colorSpace:Qi,depthBuffer:!1},s=Pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=Yx(r,t,e)}return s}_compileMaterial(t){let e=new mn(this._lodPlanes[0],t);this._renderer.compile(e,fh)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Af),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Pr({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),p=new mn(new Us,_),m=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,m=!0):(_.color.copy(Af),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let C=this._cubeSize;ul(s,y*C,w>2?C:0,C,C),u.setRenderTarget(s),m&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ul(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mn(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ls;p>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);let m=[],v=0;for(let A=0;A<ls;++A){let P=A/_,b=Math.exp(-P*P/2);m.push(b),A===0?v+=b:A<p&&(v+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let y=this._sizeLods[s],C=3*y*(s>w-Ys?s-w+Ys:0),E=4*(this._cubeSize-y);ul(e,C,E,3*y,2*y),l.setRenderTarget(e),l.render(u,fh)}};function qx(i){let t=[],e=[],n=[],s=i,r=i-Ys+1+Ef.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ys?l=Ef[o-i+Ys-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),w=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,P=E>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(b,_*g*E),w.set(d,p*g*E);let S=[E,E,E,E,E,E];y.set(S,m*g*E)}let C=new ln;C.setAttribute("position",new We(v,_)),C.setAttribute("uv",new We(w,p)),C.setAttribute("faceIndex",new We(y,m)),t.push(C),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pf(i,t,e){let n=new On(i,t,e);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ul(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yx(i,t,e){let n=new Float32Array(ls),s=new N(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rf(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function If(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Aa||l===Ta,h=l===ns||l===is;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new fl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new fl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $x(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let w=0,y=v.length;w<y;w+=3){let C=v[w+0],E=v[w+1],A=v[w+2];d.push(C,E,E,A,A,C)}}else if(g!==void 0){let v=g.array;_=g.version;for(let w=0,y=v.length/3-1;w<y;w+=3){let C=w+0,E=w+1,A=w+2;d.push(C,E,E,A,A,C)}}else return;let p=new(lh(d)?Ir:Rr)(d,1);p.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*_[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qx(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let C=a.attributes.position.count*y,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let A=new Float32Array(C*E*4*u),P=new Ar(A,C,E,u);P.type=Un,P.needsUpdate=!0;let b=y*4;for(let R=0;R<u;R++){let F=m[R],H=v[R],Z=w[R],k=C*E*4*R;for(let G=0;G<F.count;G++){let q=G*b;g===!0&&(s.fromBufferAttribute(F,G),A[k+q+0]=s.x,A[k+q+1]=s.y,A[k+q+2]=s.z,A[k+q+3]=0),_===!0&&(s.fromBufferAttribute(H,G),A[k+q+4]=s.x,A[k+q+5]=s.y,A[k+q+6]=s.z,A[k+q+7]=0),p===!0&&(s.fromBufferAttribute(Z,G),A[k+q+8]=s.x,A[k+q+9]=s.y,A[k+q+10]=s.z,A[k+q+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ne(C,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ty(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zf=new Ii,Df=new Ur(1,1),Kf=new Ar,Jf=new ra,Qf=new Or,Of=[],Ff=[],Lf=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function $s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Of[s];if(r===void 0&&(r=new Float32Array(s),Of[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pl(i,t){let e=Ff[t];e===void 0&&(e=new Int32Array(t),Ff[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Te(e,n))return;Nf.set(n),i.uniformMatrix2fv(this.addr,!1,Nf),Pe(e,n)}}function oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Te(e,n))return;Uf.set(n),i.uniformMatrix3fv(this.addr,!1,Uf),Pe(e,n)}}function ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Te(e,n))return;Lf.set(n),i.uniformMatrix4fv(this.addr,!1,Lf),Pe(e,n)}}function ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function dy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function my(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Df.compareFunction=oh,r=Df):r=Zf,e.setTexture2D(t||r,s)}function _y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qf,s)}function yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kf,s)}function vy(i){switch(i){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}function by(i,t){i.uniform1fv(this.addr,t)}function My(i,t){let e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function Sy(i,t){let e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function wy(i,t){let e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function Cy(i,t){let e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ey(i,t){let e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ay(i,t){let e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ty(i,t){i.uniform1iv(this.addr,t)}function Py(i,t){i.uniform2iv(this.addr,t)}function Ry(i,t){i.uniform3iv(this.addr,t)}function Iy(i,t){i.uniform4iv(this.addr,t)}function Dy(i,t){i.uniform1uiv(this.addr,t)}function Oy(i,t){i.uniform2uiv(this.addr,t)}function Fy(i,t){i.uniform3uiv(this.addr,t)}function Ly(i,t){i.uniform4uiv(this.addr,t)}function Uy(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zf,r[o])}function Ny(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jf,r[o])}function ky(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qf,r[o])}function By(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kf,r[o])}function Vy(i){switch(i){case 5126:return by;case 35664:return My;case 35665:return Sy;case 35666:return wy;case 35674:return Cy;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Ty;case 35667:case 35671:return Py;case 35668:case 35672:return Ry;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Oy;case 36295:return Fy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return By}}var yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vy(e.type)}},vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vy(e.type)}},bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function kf(i,t){i.seq.push(t),i.map[t.id]=t}function zy(i,t,e){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kf(e,c===void 0?new yh(a,i,t):new vh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new bh(a),kf(e,u)),e=u}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zy(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hy=37297,Gy=0;function Wy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Vf=new Bt;function Xy(i){Kt._getMatrix(Vf,Kt.workingColorSpace,i);let t=`mat3( ${Vf.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Wy(i.getShaderSource(t),a)}else return r}function qy(i,t){let e=Xy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yy(i,t){let e;switch(t){case nf:e="Linear";break;case sf:e="Reinhard";break;case rf:e="Cineon";break;case of:e="ACESFilmic";break;case lf:e="AgX";break;case cf:e="Neutral";break;case af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new N;function jy(){Kt.getLuminanceCoefficients(dl);let i=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Zy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ky(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jr(i){return i!==""}function Hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(Jy,tv)}var Qy=new Map;function tv(i,t){let e=Ht[t];if(e===void 0){let n=Qy.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(i){return i.replace(ev,nv)}function nv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function sv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function ov(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case tf:t="ENVMAP_BLENDING_MIX";break;case ef:t="ENVMAP_BLENDING_ADD";break}return t}function av(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=iv(e),c=sv(e),h=rv(e),u=ov(e),d=av(e),f=$y(e),g=Zy(r),_=s.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(p=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Ht.tonemapping_pars_fragment:"",e.toneMapping!==si?Yy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,qy("linearToOutputTexel",e.outputColorSpace),jy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Mh(o),o=Hf(o,e),o=Gf(o,e),a=Mh(a),a=Hf(a,e),a=Gf(a,e),o=Wf(o),a=Wf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=v+p+o,y=v+m+a,C=Bf(s,s.VERTEX_SHADER,w),E=Bf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",Z=s.getShaderInfoLog(E)||"",k=F.trim(),G=H.trim(),q=Z.trim(),V=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,E);else{let ct=zf(s,C,"vertex"),yt=zf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+ct+`
`+yt)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||q==="")&&(et=!1);et&&(R.diagnostics={runnable:V,programLog:k,vertexShader:{log:G,prefix:p},fragmentShader:{log:q,prefix:m}})}s.deleteShader(C),s.deleteShader(E),P=new js(s,_),b=Ky(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Hy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var cv=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wh(t),e.set(t,n)),n}},wh=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function hv(i,t,e,n,s,r,o){let a=new Tr,l=new Sh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,R,F,H){let Z=F.fog,k=H.geometry,G=b.isMeshStandardMaterial?F.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),V=q&&q.mapping===Xr?q.image.height:null,et=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ct!==void 0?ct.length:0,Lt=0;k.morphAttributes.position!==void 0&&(Lt=1),k.morphAttributes.normal!==void 0&&(Lt=2),k.morphAttributes.color!==void 0&&(Lt=3);let Qt,te,qt,Y;if(et){let ie=Nn[et];Qt=ie.vertexShader,te=ie.fragmentShader}else Qt=b.vertexShader,te=b.fragmentShader,l.update(b),qt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);let Q=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ot=H.isInstancedMesh===!0,Et=H.isBatchedMesh===!0,$t=!!b.map,ze=!!b.matcap,I=!!q,me=!!b.aoMap,Nt=!!b.lightMap,It=!!b.bumpMap,vt=!!b.normalMap,ge=!!b.displacementMap,bt=!!b.emissiveMap,zt=!!b.metalnessMap,Ie=!!b.roughnessMap,Ce=b.anisotropy>0,T=b.clearcoat>0,x=b.dispersion>0,U=b.iridescence>0,$=b.sheen>0,J=b.transmission>0,X=Ce&&!!b.anisotropyMap,Ct=T&&!!b.clearcoatMap,ot=T&&!!b.clearcoatNormalMap,Mt=T&&!!b.clearcoatRoughnessMap,St=U&&!!b.iridescenceMap,st=U&&!!b.iridescenceThicknessMap,dt=$&&!!b.sheenColorMap,Rt=$&&!!b.sheenRoughnessMap,wt=!!b.specularMap,ht=!!b.specularColorMap,Vt=!!b.specularIntensityMap,D=J&&!!b.transmissionMap,rt=J&&!!b.thicknessMap,at=!!b.gradientMap,pt=!!b.alphaMap,nt=b.alphaTest>0,K=!!b.alphaHash,xt=!!b.extensions,Ut=si;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let he={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:Qt,fragmentShader:te,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Et,batchingColor:Et&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:ze,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:V,aoMap:me,lightMap:Nt,bumpMap:It,normalMap:vt,displacementMap:d&&ge,emissiveMap:bt,normalMapObjectSpace:vt&&b.normalMapType===pf,normalMapTangentSpace:vt&&b.normalMapType===ff,metalnessMap:zt,roughnessMap:Ie,anisotropy:Ce,anisotropyMap:X,clearcoat:T,clearcoatMap:Ct,clearcoatNormalMap:ot,clearcoatRoughnessMap:Mt,dispersion:x,iridescence:U,iridescenceMap:St,iridescenceThicknessMap:st,sheen:$,sheenColorMap:dt,sheenRoughnessMap:Rt,specularMap:wt,specularColorMap:ht,specularIntensityMap:Vt,transmission:J,transmissionMap:D,thicknessMap:rt,gradientMap:at,opaque:b.transparent===!1&&b.blending===Ki&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:nt,alphaHash:K,combine:b.combine,mapUv:$t&&_(b.map.channel),aoMapUv:me&&_(b.aoMap.channel),lightMapUv:Nt&&_(b.lightMap.channel),bumpMapUv:It&&_(b.bumpMap.channel),normalMapUv:vt&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:bt&&_(b.emissiveMap.channel),metalnessMapUv:zt&&_(b.metalnessMap.channel),roughnessMapUv:Ie&&_(b.roughnessMap.channel),anisotropyMapUv:X&&_(b.anisotropyMap.channel),clearcoatMapUv:Ct&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(b.sheenRoughnessMap.channel),specularMapUv:wt&&_(b.specularMap.channel),specularColorMapUv:ht&&_(b.specularColorMap.channel),specularIntensityMapUv:Vt&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:rt&&_(b.thicknessMap.channel),alphaMapUv:pt&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||Ce),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&($t||pt),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:bt&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===$e,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(S,b),w(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function w(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=g[b.type],R;if(S){let F=Nn[S];R=Cf.clone(F.uniforms)}else R=b.uniforms;return R}function C(b,S){let R;for(let F=0,H=h.length;F<H;F++){let Z=h[F];if(Z.cacheKey===S){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new lv(i,S,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function uv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||dv),n.length>1&&n.sort(d||qf),s.length>1&&s.sort(d||qf)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Yf,i.set(n,[o])):s>=r.length?(o=new Yf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Wt};break;case"SpotLight":e={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function mv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gv=0;function _v(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xv(i){let t=new pv,e=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,w=0,y=0,C=0,E=0,A=0;c.sort(_v);for(let b=0,S=c.length;b<S;b++){let R=c[b],F=R.color,H=R.intensity,Z=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*H,u+=F.g*H,d+=F.b*H;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],H);A++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=G,f++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(H),G.distance=Z,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;let q=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,q.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=q.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=k,y++}_++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(F).multiplyScalar(H),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let q=R.shadow,V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=G,g++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(H),G.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[m]=G,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=A,n.version=gv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let w=c[m];if(w.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(w.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(w.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function jf(i){let t=new xv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new jf(i),t.set(s,[a])):r>=o.length?(a=new jf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(i,t,e){let n=new Bs,s=new ne,r=new ne,o=new ve,a=new ha({depthPacking:df}),l=new ua,c={},h=e.maxTextureSize,u={[Qn]:$e,[$e]:Qn,[Ln]:Ln},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:vv,fragmentShader:bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let m=this.type;this.render=function(E,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ii),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=m!==Fn&&this.type===Fn,Z=m===Fn&&this.type!==Fn;for(let k=0,G=E.length;k<G;k++){let q=E[k],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();if(s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y)),V.map===null||H===!0||Z===!0){let yt=this.type!==Fn?{minFilter:fn,magFilter:fn}:{};V.map!==null&&V.map.dispose(),V.map=new On(s.x,s.y,yt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ct=V.getViewportCount();for(let yt=0;yt<ct;yt++){let Lt=V.getViewport(yt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(o),V.updateMatrices(q,yt),n=V.getFrustum(),y(A,P,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&v(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,S,R)};function v(E,A){let P=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,P,f,_,null)}function w(E,A,P,b){let S=null,R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=S.uuid,H=A.uuid,Z=c[F];Z===void 0&&(Z={},c[F]=Z);let k=Z[H];k===void 0&&(k=S.clone(),Z[H]=k,A.addEventListener("dispose",C)),S=k}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Fn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=P}return S}function y(E,A,P,b,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let H=t.update(E),Z=E.material;if(Array.isArray(Z)){let k=H.groups;for(let G=0,q=k.length;G<q;G++){let V=k[G],et=Z[V.materialIndex];if(et&&et.visible){let ct=w(E,et,b,S);E.onBeforeShadow(i,E,A,P,H,ct,V),i.renderBufferDirect(P,null,H,ct,E,V),E.onAfterShadow(i,E,A,P,H,ct,V)}}}else if(Z.visible){let k=w(E,Z,b,S);E.onBeforeShadow(i,E,A,P,H,k,null),i.renderBufferDirect(P,null,H,k,E,null),E.onAfterShadow(i,E,A,P,H,k,null)}}let F=E.children;for(let H=0,Z=F.length;H<Z;H++)y(F[H],A,P,b,S)}function C(E){E.target.removeEventListener("dispose",C);for(let P in c){let b=c[P],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Sv={[va]:ba,[Ma]:Ca,[Sa]:Ea,[Ji]:wa,[ba]:va,[Ca]:Ma,[Ea]:Sa,[wa]:Ji};function wv(i,t){function e(){let D=!1,rt=new ve,at=null,pt=new ve(0,0,0,0);return{setMask:function(nt){at!==nt&&!D&&(i.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){D=nt},setClear:function(nt,K,xt,Ut,he){he===!0&&(nt*=Ut,K*=Ut,xt*=Ut),rt.set(nt,K,xt,Ut),pt.equals(rt)===!1&&(i.clearColor(nt,K,xt,Ut),pt.copy(rt))},reset:function(){D=!1,at=null,pt.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,at=null,pt=null,nt=null;return{setReversed:function(K){if(rt!==K){let xt=t.get("EXT_clip_control");K?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),rt=K;let Ut=nt;nt=null,this.setClear(Ut)}},getReversed:function(){return rt},setTest:function(K){K?Q(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(K){at!==K&&!D&&(i.depthMask(K),at=K)},setFunc:function(K){if(rt&&(K=Sv[K]),pt!==K){switch(K){case va:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=K}},setLocked:function(K){D=K},setClear:function(K){nt!==K&&(rt&&(K=1-K),i.clearDepth(K),nt=K)},reset:function(){D=!1,at=null,pt=null,nt=null,rt=!1}}}function s(){let D=!1,rt=null,at=null,pt=null,nt=null,K=null,xt=null,Ut=null,he=null;return{setTest:function(ie){D||(ie?Q(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ie){rt!==ie&&!D&&(i.stencilMask(ie),rt=ie)},setFunc:function(ie,Wn,Rn){(at!==ie||pt!==Wn||nt!==Rn)&&(i.stencilFunc(ie,Wn,Rn),at=ie,pt=Wn,nt=Rn)},setOp:function(ie,Wn,Rn){(K!==ie||xt!==Wn||Ut!==Rn)&&(i.stencilOp(ie,Wn,Rn),K=ie,xt=Wn,Ut=Rn)},setLocked:function(ie){D=ie},setClear:function(ie){he!==ie&&(i.clearStencil(ie),he=ie)},reset:function(){D=!1,rt=null,at=null,pt=null,nt=null,K=null,xt=null,Ut=null,he=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,w=null,y=null,C=null,E=null,A=new Wt(0,0,0),P=0,b=!1,S=null,R=null,F=null,H=null,Z=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,q=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=q>=2);let et=null,ct={},yt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Qt=new ve().fromArray(yt),te=new ve().fromArray(Lt);function qt(D,rt,at,pt){let nt=new Uint8Array(4),K=i.createTexture();i.bindTexture(D,K),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<at;xt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(rt+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return K}let Y={};Y[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Ji),It(!1),vt(Yc),Q(i.CULL_FACE),me(ii);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function gt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ot(D,rt){return u[D]!==rt?(i.bindFramebuffer(D,rt),u[D]=rt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Et(D,rt){let at=f,pt=!1;if(D){at=d.get(rt),at===void 0&&(at=[],d.set(rt,at));let nt=D.textures;if(at.length!==nt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let K=0,xt=nt.length;K<xt;K++)at[K]=i.COLOR_ATTACHMENT0+K;at.length=nt.length,pt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,pt=!0);pt&&i.drawBuffers(at)}function $t(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let ze={[wi]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};ze[Bd]=i.MIN,ze[Vd]=i.MAX;let I={[zd]:i.ZERO,[Hd]:i.ONE,[Gd]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[$d]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[Xd]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[qd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function me(D,rt,at,pt,nt,K,xt,Ut,he,ie){if(D===ii){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),D!==Ud){if(D!==p||ie!==b){if((m!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),m=wi,y=wi),ie)switch(D){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wr:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,w=null,C=null,E=null,A.set(0,0,0),P=0,p=D,b=ie}return}nt=nt||rt,K=K||at,xt=xt||pt,(rt!==m||nt!==y)&&(i.blendEquationSeparate(ze[rt],ze[nt]),m=rt,y=nt),(at!==v||pt!==w||K!==C||xt!==E)&&(i.blendFuncSeparate(I[at],I[pt],I[K],I[xt]),v=at,w=pt,C=K,E=xt),(Ut.equals(A)===!1||he!==P)&&(i.blendColor(Ut.r,Ut.g,Ut.b,he),A.copy(Ut),P=he),p=D,b=!1}function Nt(D,rt){D.side===Ln?gt(i.CULL_FACE):Q(i.CULL_FACE);let at=D.side===$e;rt&&(at=!at),It(at),D.blending===Ki&&D.transparent===!1?me(ii):me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let pt=D.stencilWrite;a.setTest(pt),pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function vt(D){D!==Od?(Q(i.CULL_FACE),D!==R&&(D===Yc?i.cullFace(i.BACK):D===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),R=D}function ge(D){D!==F&&(G&&i.lineWidth(D),F=D)}function bt(D,rt,at){D?(Q(i.POLYGON_OFFSET_FILL),(H!==rt||Z!==at)&&(i.polygonOffset(rt,at),H=rt,Z=at)):gt(i.POLYGON_OFFSET_FILL)}function zt(D){D?Q(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=i.TEXTURE0+k-1),et!==D&&(i.activeTexture(D),et=D)}function Ce(D,rt,at){at===void 0&&(et===null?at=i.TEXTURE0+k-1:at=et);let pt=ct[at];pt===void 0&&(pt={type:void 0,texture:void 0},ct[at]=pt),(pt.type!==D||pt.texture!==rt)&&(et!==at&&(i.activeTexture(at),et=at),i.bindTexture(D,rt||Y[D]),pt.type=D,pt.texture=rt)}function T(){let D=ct[et];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function Rt(D){te.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function wt(D,rt){let at=c.get(rt);at===void 0&&(at=new WeakMap,c.set(rt,at));let pt=at.get(D);pt===void 0&&(pt=i.getUniformBlockIndex(rt,D.name),at.set(D,pt))}function ht(D,rt){let pt=c.get(rt).get(D);l.get(rt)!==pt&&(i.uniformBlockBinding(rt,pt,D.__bindingPointIndex),l.set(rt,pt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,ct={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,w=null,y=null,C=null,E=null,A=new Wt(0,0,0),P=0,b=!1,S=null,R=null,F=null,H=null,Z=null,Qt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:gt,bindFramebuffer:Ot,drawBuffers:Et,useProgram:$t,setBlending:me,setMaterial:Nt,setFlipSided:It,setCullFace:vt,setLineWidth:ge,setPolygonOffset:bt,setScissorTest:zt,activeTexture:Ie,bindTexture:Ce,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:St,texImage3D:st,updateUBOMapping:wt,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Ct,scissor:dt,viewport:Rt,reset:Vt}}function Cv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Er("canvas")}function _(T,x,U){let $=1,J=Ce(T);if((J.width>U||J.height>U)&&($=U/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor($*J.width),Ct=Math.floor($*J.height);u===void 0&&(u=g(X,Ct));let ot=x?g(X,Ct):u;return ot.width=X,ot.height=Ct,ot.getContext("2d").drawImage(T,0,0,X,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Ct+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,U,$,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),x===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){let Ct=J?wr:Kt.getTransfer($);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=Ct===oe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(T,x){let U;return T?x===null||x===Ri||x===Ws?U=i.DEPTH24_STENCIL8:x===Un?U=i.DEPTH32F_STENCIL8:x===Hs&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ri||x===Ws?U=i.DEPTH_COMPONENT24:x===Un?U=i.DEPTH_COMPONENT32F:x===Hs&&(U=i.DEPTH_COMPONENT16),U}function C(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function E(T){let x=T.target;x.removeEventListener("dispose",E),P(x),x.isVideoTexture&&h.delete(x)}function A(T){let x=T.target;x.removeEventListener("dispose",A),S(x)}function P(T){let x=n.get(T);if(x.__webglInit===void 0)return;let U=T.source,$=d.get(U);if($){let J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys($).length===0&&d.delete(U)}n.remove(T)}function b(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let U=T.source,$=d.get(U);delete $[x.__cacheKey],o.memory.textures--}function S(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=T.textures;for(let $=0,J=U.length;$<J;$++){let X=n.get(U[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(U[$])}n.remove(T)}let R=0;function F(){R=0}function H(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function Z(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function k(T,x){let U=n.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,T,x);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function G(T,x){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function q(T,x){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function V(T,x){let U=n.get(T);if(T.version>0&&U.__version!==T.version){Q(U,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}let et={[Qo]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},ct={[fn]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},yt={[mf]:i.NEVER,[bf]:i.ALWAYS,[gf]:i.LESS,[oh]:i.LEQUAL,[_f]:i.EQUAL,[vf]:i.GEQUAL,[xf]:i.GREATER,[yf]:i.NOTEQUAL};function Lt(T,x){if(x.type===Un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Pa||x.magFilter===qr||x.magFilter===Pi||x.minFilter===Cn||x.minFilter===Pa||x.minFilter===qr||x.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==qr&&x.minFilter!==Pi||x.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qt(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",E));let $=x.source,J=d.get($);J===void 0&&(J={},d.set($,J));let X=Z(x);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[X].usedTimes++;let Ct=J[T.__cacheKey];Ct!==void 0&&(J[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(x)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return U}function te(T,x,U){return Math.floor(Math.floor(T/U)/x)}function qt(T,x,U,$){let X=T.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,$,x.data);else{X.sort((st,dt)=>st.start-dt.start);let Ct=0;for(let st=1;st<X.length;st++){let dt=X[Ct],Rt=X[st],wt=dt.start+dt.count,ht=te(Rt.start,x.width,4),Vt=te(dt.start,x.width,4);Rt.start<=wt+1&&ht===Vt&&te(Rt.start+Rt.count-1,x.width,4)===ht?dt.count=Math.max(dt.count,Rt.start+Rt.count-dt.start):(++Ct,X[Ct]=Rt)}X.length=Ct+1;let ot=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),St=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let st=0,dt=X.length;st<dt;st++){let Rt=X[st],wt=Math.floor(Rt.start/4),ht=Math.ceil(Rt.count/4),Vt=wt%x.width,D=Math.floor(wt/x.width),rt=ht,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Vt,D,rt,at,U,$,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Y(T,x,U){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let J=Qt(T,x),X=x.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+U);let Ct=n.get(X);if(X.version!==Ct.__version||J===!0){e.activeTexture(i.TEXTURE0+U);let ot=Kt.getPrimaries(Kt.workingColorSpace),Mt=x.colorSpace===ri?null:Kt.getPrimaries(x.colorSpace),St=x.colorSpace===ri||ot===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let st=_(x.image,!1,s.maxTextureSize);st=Ie(x,st);let dt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),wt=w(x.internalFormat,dt,Rt,x.colorSpace,x.isVideoTexture);Lt($,x);let ht,Vt=x.mipmaps,D=x.isVideoTexture!==!0,rt=Ct.__version===void 0||J===!0,at=X.dataReady,pt=C(x,st);if(x.isDepthTexture)wt=y(x.format===Xs,x.type),rt&&(D?e.texStorage2D(i.TEXTURE_2D,1,wt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,wt,st.width,st.height,0,dt,Rt,null));else if(x.isDataTexture)if(Vt.length>0){D&&rt&&e.texStorage2D(i.TEXTURE_2D,pt,wt,Vt[0].width,Vt[0].height);for(let nt=0,K=Vt.length;nt<K;nt++)ht=Vt[nt],D?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Rt,ht.data):e.texImage2D(i.TEXTURE_2D,nt,wt,ht.width,ht.height,0,dt,Rt,ht.data);x.generateMipmaps=!1}else D?(rt&&e.texStorage2D(i.TEXTURE_2D,pt,wt,st.width,st.height),at&&qt(x,st,dt,Rt)):e.texImage2D(i.TEXTURE_2D,0,wt,st.width,st.height,0,dt,Rt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,wt,Vt[0].width,Vt[0].height,st.depth);for(let nt=0,K=Vt.length;nt<K;nt++)if(ht=Vt[nt],x.format!==gn)if(dt!==null)if(D){if(at)if(x.layerUpdates.size>0){let xt=dh(ht.width,ht.height,x.format,x.type);for(let Ut of x.layerUpdates){let he=ht.data.subarray(Ut*xt/ht.data.BYTES_PER_ELEMENT,(Ut+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ut,ht.width,ht.height,1,dt,he)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,wt,ht.width,ht.height,st.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,Rt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,wt,ht.width,ht.height,st.depth,0,dt,Rt,ht.data)}else{D&&rt&&e.texStorage2D(i.TEXTURE_2D,pt,wt,Vt[0].width,Vt[0].height);for(let nt=0,K=Vt.length;nt<K;nt++)ht=Vt[nt],x.format!==gn?dt!==null?D?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Rt,ht.data):e.texImage2D(i.TEXTURE_2D,nt,wt,ht.width,ht.height,0,dt,Rt,ht.data)}else if(x.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,wt,st.width,st.height,st.depth),at)if(x.layerUpdates.size>0){let nt=dh(st.width,st.height,x.format,x.type);for(let K of x.layerUpdates){let xt=st.data.subarray(K*nt/st.data.BYTES_PER_ELEMENT,(K+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,dt,Rt,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Rt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,st.width,st.height,st.depth,0,dt,Rt,st.data);else if(x.isData3DTexture)D?(rt&&e.texStorage3D(i.TEXTURE_3D,pt,wt,st.width,st.height,st.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Rt,st.data)):e.texImage3D(i.TEXTURE_3D,0,wt,st.width,st.height,st.depth,0,dt,Rt,st.data);else if(x.isFramebufferTexture){if(rt)if(D)e.texStorage2D(i.TEXTURE_2D,pt,wt,st.width,st.height);else{let nt=st.width,K=st.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,wt,nt,K,0,dt,Rt,null),nt>>=1,K>>=1}}else if(Vt.length>0){if(D&&rt){let nt=Ce(Vt[0]);e.texStorage2D(i.TEXTURE_2D,pt,wt,nt.width,nt.height)}for(let nt=0,K=Vt.length;nt<K;nt++)ht=Vt[nt],D?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt,Rt,ht):e.texImage2D(i.TEXTURE_2D,nt,wt,dt,Rt,ht);x.generateMipmaps=!1}else if(D){if(rt){let nt=Ce(st);e.texStorage2D(i.TEXTURE_2D,pt,wt,nt.width,nt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Rt,st)}else e.texImage2D(i.TEXTURE_2D,0,wt,dt,Rt,st);p(x)&&m($),Ct.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,U){if(x.image.length!==6)return;let $=Qt(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);let X=n.get(J);if(J.version!==X.__version||$===!0){e.activeTexture(i.TEXTURE0+U);let Ct=Kt.getPrimaries(Kt.workingColorSpace),ot=x.colorSpace===ri?null:Kt.getPrimaries(x.colorSpace),Mt=x.colorSpace===ri||Ct===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!St&&!st?dt[K]=_(x.image[K],!0,s.maxCubemapSize):dt[K]=st?x.image[K].image:x.image[K],dt[K]=Ie(x,dt[K]);let Rt=dt[0],wt=r.convert(x.format,x.colorSpace),ht=r.convert(x.type),Vt=w(x.internalFormat,wt,ht,x.colorSpace),D=x.isVideoTexture!==!0,rt=X.__version===void 0||$===!0,at=J.dataReady,pt=C(x,Rt);Lt(i.TEXTURE_CUBE_MAP,x);let nt;if(St){D&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Vt,Rt.width,Rt.height);for(let K=0;K<6;K++){nt=dt[K].mipmaps;for(let xt=0;xt<nt.length;xt++){let Ut=nt[xt];x.format!==gn?wt!==null?D?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Ut.width,Ut.height,wt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Vt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Ut.width,Ut.height,wt,ht,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Vt,Ut.width,Ut.height,0,wt,ht,Ut.data)}}}else{if(nt=x.mipmaps,D&&rt){nt.length>0&&pt++;let K=Ce(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(st){D?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,wt,ht,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,dt[K].width,dt[K].height,0,wt,ht,dt[K].data);for(let xt=0;xt<nt.length;xt++){let he=nt[xt].image[K].image;D?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,he.width,he.height,wt,ht,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Vt,he.width,he.height,0,wt,ht,he.data)}}else{D?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,ht,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,wt,ht,dt[K]);for(let xt=0;xt<nt.length;xt++){let Ut=nt[xt];D?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,wt,ht,Ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Vt,wt,ht,Ut.image[K])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function gt(T,x,U,$,J,X){let Ct=r.convert(U.format,U.colorSpace),ot=r.convert(U.type),Mt=w(U.internalFormat,Ct,ot,U.colorSpace),St=n.get(x),st=n.get(U);if(st.__renderTarget=x,!St.__hasExternalTextures){let dt=Math.max(1,x.width>>X),Rt=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,Mt,dt,Rt,x.depth,0,Ct,ot,null):e.texImage2D(J,X,Mt,dt,Rt,0,Ct,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,st.__webglTexture,0,ge(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,st.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(T,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=y(x.stencilBuffer,J),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=ge(x);bt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,T)}else{let $=x.textures;for(let J=0;J<$.length;J++){let X=$[J],Ct=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),Mt=w(X.internalFormat,Ct,ot,X.colorSpace),St=ge(x);U&&bt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Mt,x.width,x.height):bt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);let J=$.__webglTexture,X=ge(x);if(x.depthTexture.format===Ds)bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Xs)bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function $t(T){let x=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let $=T.texture.mipmaps;$&&$.length>0?Et(x.__webglFramebuffer[0],T):Et(x.__webglFramebuffer,T)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Ot(x.__webglDepthbuffer[$],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{let $=T.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ot(x.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(T,x,U){let $=n.get(T);x!==void 0&&gt($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&$t(T)}function I(T){let x=T.texture,U=n.get(T),$=n.get(x);T.addEventListener("dispose",A);let J=T.textures,X=T.isWebGLCubeRenderTarget===!0,Ct=J.length>1;if(Ct||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),X){U.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ot]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)U.__webglFramebuffer[ot][Mt]=i.createFramebuffer()}else U.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)U.__webglFramebuffer[ot]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ot=0,Mt=J.length;ot<Mt;ot++){let St=n.get(J[ot]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&bt(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){let Mt=J[ot];U.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ot]);let St=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),dt=w(Mt.internalFormat,St,st,Mt.colorSpace,T.isXRRenderTarget===!0),Rt=ge(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,U.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)gt(U.__webglFramebuffer[ot][Mt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt);else gt(U.__webglFramebuffer[ot],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,Mt=J.length;ot<Mt;ot++){let St=J[ot],st=n.get(St),dt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,st.__webglTexture),Lt(dt,St),gt(U.__webglFramebuffer,T,St,i.COLOR_ATTACHMENT0+ot,dt,0),p(St)&&m(dt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Lt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)gt(U.__webglFramebuffer[Mt],T,x,i.COLOR_ATTACHMENT0,ot,Mt);else gt(U.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ot,0);p(x)&&m(ot),e.unbindTexture()}T.depthBuffer&&$t(T)}function me(T){let x=T.textures;for(let U=0,$=x.length;U<$;U++){let J=x[U];if(p(J)){let X=v(T),Ct=n.get(J).__webglTexture;e.bindTexture(X,Ct),m(X),e.unbindTexture()}}}let Nt=[],It=[];function vt(T){if(T.samples>0){if(bt(T)===!1){let x=T.textures,U=T.width,$=T.height,J=i.COLOR_BUFFER_BIT,X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(T),ot=x.length>1;if(ot)for(let St=0;St<x.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let Mt=T.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<x.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let st=n.get(x[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,J,i.NEAREST),l===!0&&(Nt.length=0,It.length=0,Nt.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Nt.push(X),It.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let St=0;St<x.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let st=n.get(x[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ge(T){return Math.min(s.maxSamples,T.samples)}function bt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ie(T,x){let U=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Qi&&U!==ri&&(Kt.getTransfer(U)===oe?($!==gn||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=I,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=bt}function Ev(i,t){function e(n,s=ri){let r,o=Kt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Gs)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===gn)return i.RGBA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===sh)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===rh)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Yr||n===jr||n===$r||n===Zr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===ka||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===za)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:Av,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Ch,m={},v=e.getContextAttributes(),w=null,y=null,C=[],E=[],A=new ne,P=null,b=new Ne;b.viewport=new ve;let S=new Ne;S.viewport=new ve;let R=[b,S],F=new ya,H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Ns,C[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Ns,C[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Ns,C[Y]=Q),Q.getHandSpace()};function k(Y){let Q=E.indexOf(Y.inputSource);if(Q===-1)return;let gt=C[Q];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<C.length;Y++){let Q=E[Y];Q!==null&&(E[Y]=null,C[Y].disconnect(Q))}H=null,Z=null,p.reset();for(let Y in m)delete m[Y];t.setRenderTarget(w),f=null,d=null,u=null,s=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=function(Y){return So(this,null,function*(){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&(yield e.makeXRCompatible()),P=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ot=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?Xs:Ds,Ot=v.stencil?Ws:Ri);let $t={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new On(d.textureWidth,d.textureHeight,{format:gn,type:An,depthTexture:new Ur(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new On(f.framebufferWidth,f.framebufferHeight,{format:gn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){let gt=Y.removed[Q],Ot=E.indexOf(gt);Ot>=0&&(E[Ot]=null,C[Ot].disconnect(gt))}for(let Q=0;Q<Y.added.length;Q++){let gt=Y.added[Q],Ot=E.indexOf(gt);if(Ot===-1){for(let $t=0;$t<C.length;$t++)if($t>=E.length){E.push(gt),Ot=$t;break}else if(E[$t]===null){E[$t]=gt,Ot=$t;break}if(Ot===-1)break}let Et=C[Ot];Et&&Et.connect(gt)}}let V=new N,et=new N;function ct(Y,Q,gt){V.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(gt.matrixWorld);let Ot=V.distanceTo(et),Et=Q.projectionMatrix.elements,$t=gt.projectionMatrix.elements,ze=Et[14]/(Et[10]-1),I=Et[14]/(Et[10]+1),me=(Et[9]+1)/Et[5],Nt=(Et[9]-1)/Et[5],It=(Et[8]-1)/Et[0],vt=($t[8]+1)/$t[0],ge=ze*It,bt=ze*vt,zt=Ot/(-It+vt),Ie=zt*-It;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ce=ze+zt,T=I+zt,x=ge-Ie,U=bt+(Ot-Ie),$=me*I/T*Ce,J=Nt*I/T*Ce;Y.projectionMatrix.makePerspective(x,U,$,J,Ce,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,gt=Y.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),F.near=S.near=b.near=Q,F.far=S.far=b.far=gt,(H!==F.near||Z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,Z=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;let Ot=Y.parent,Et=F.cameras;yt(F,Ot);for(let $t=0;$t<Et.length;$t++)yt(Et[$t],Ot);Et.length===2?ct(F,b,S):F.projectionMatrix.copy(b.projectionMatrix),Lt(Y,F,Ot)};function Lt(Y,Q,gt){gt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=na*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let Qt=null;function te(Y,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ot=!1;gt.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let I=0;I<gt.length;I++){let me=gt[I],Nt=null;if(f!==null)Nt=f.getViewport(me);else{let vt=u.getViewSubImage(d,me);Nt=vt.viewport,I===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let It=R[I];It===void 0&&(It=new Ne,It.layers.enable(I),It.viewport=new ve,R[I]=It),It.matrix.fromArray(me.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(me.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),I===0&&(F.matrix.copy(It.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(It)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let I=u.getDepthInformation(gt[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<gt.length;I++){let me=gt[I].camera;if(me){let Nt=m[me];Nt||(Nt=new Nr,m[me]=Nt);let It=u.getCameraImage(me);Nt.sourceTexture=It}}}}for(let gt=0;gt<C.length;gt++){let Ot=E[gt],Et=C[gt];Ot!==null&&Et!==void 0&&Et.update(Ot,Q,c||o)}Qt&&Qt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let qt=new $f;qt.setAnimationLoop(te),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}},os=new ts,Pv=new ye;function Rv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ch(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,w,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,os.copy(y),os.x*=-1,os.y*=-1,os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(os)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let y=w.program;n.uniformBlockBinding(v,y)}function c(v,w){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",p));let C=w.program;n.updateUBOMapping(v,C);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let w=u();v.__bindingPointIndex=w;let y=i.createBuffer(),C=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let w=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,A=y.length;E<A;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=P.length;b<S;b++){let R=P[b];if(f(R,E,b,C)===!0){let F=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],Z=0;for(let k=0;k<H.length;k++){let G=H[k],q=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+Z,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,Z),Z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,w,y,C){let E=v.value,A=w+"_"+y;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{let P=C[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(v){let w=v.uniforms,y=0,C=16;for(let A=0,P=w.length;A<P;A++){let b=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,R=b.length;S<R;S++){let F=b[S],H=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,k=H.length;Z<k;Z++){let G=H[Z],q=_(G),V=y%C,et=V%q.boundary,ct=V+et;y+=et,ct!==0&&C-ct<q.storage&&(y+=C-ct),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}let E=y%C;return E>0&&(y+=C-E),v.__size=y,v.__cache={},this}function _(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),w}function p(v){let w=v.target;w.removeEventListener("dispose",p);let y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Qr=class{constructor(t={}){let{canvas:e=Mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,v=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=an;let E=0,A=0,P=null,b=-1,S=null,R=new ve,F=new ve,H=null,Z=new Wt(0),k=0,G=e.width,q=e.height,V=1,et=null,ct=null,yt=new ve(0,0,G,q),Lt=new ve(0,0,G,q),Qt=!1,te=new Bs,qt=!1,Y=!1,Q=new ye,gt=new N,Ot=new ve,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ze(){return P===null?V:1}let I=n;function me(M,O){return e.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),I===null){let O="webgl2";if(I=me(O,M),I===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Nt,It,vt,ge,bt,zt,Ie,Ce,T,x,U,$,J,X,Ct,ot,Mt,St,st,dt,Rt,wt,ht,Vt;function D(){Nt=new $x(I),Nt.init(),wt=new Ev(I,Nt),It=new Hx(I,Nt,t,wt),vt=new wv(I,Nt),It.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),ge=new Jx(I),bt=new uv,zt=new Cv(I,Nt,vt,bt,It,wt,ge),Ie=new Wx(y),Ce=new jx(y),T=new s0(I),ht=new Vx(I,T),x=new Zx(I,T,ge,ht),U=new ty(I,x,T,ge),st=new Qx(I,It,zt),ot=new Gx(bt),$=new hv(y,Ie,Ce,Nt,It,ht,ot),J=new Rv(y,bt),X=new fv,Ct=new yv(Nt),St=new Bx(y,Ie,Ce,vt,U,f,l),Mt=new Mv(y,U,It),Vt=new Iv(I,ge,It,vt),dt=new zx(I,Nt,ge),Rt=new Kx(I,Nt,ge),ge.programs=$.programs,y.capabilities=It,y.extensions=Nt,y.properties=bt,y.renderLists=X,y.shadowMap=Mt,y.state=vt,y.info=ge}D();let rt=new Eh(y,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(G,q,!1))},this.getSize=function(M){return M.set(G,q)},this.setSize=function(M,O,B=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,q=O,e.width=Math.floor(M*V),e.height=Math.floor(O*V),B===!0&&(e.style.width=M+"px",e.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(G*V,q*V).floor()},this.setDrawingBufferSize=function(M,O,B){G=M,q=O,V=B,e.width=Math.floor(M*B),e.height=Math.floor(O*B),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,O,B,z){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,O,B,z),vt.viewport(R.copy(yt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Lt)},this.setScissor=function(M,O,B,z){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,O,B,z),vt.scissor(F.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(M){vt.setScissorTest(Qt=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,B=!0){let z=0;if(M){let L=!1;if(P!==null){let it=P.texture.format;L=it===La||it===Fa||it===Oa}if(L){let it=P.texture.type,ut=it===An||it===Ri||it===Hs||it===Ws||it===Ia||it===Da,_t=St.getClearColor(),ft=St.getClearAlpha(),Pt=_t.r,Dt=_t.g,At=_t.b;ut?(g[0]=Pt,g[1]=Dt,g[2]=At,g[3]=ft,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Pt,_[1]=Dt,_[2]=At,_[3]=ft,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}O&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),St.dispose(),X.dispose(),Ct.dispose(),bt.dispose(),Ie.dispose(),Ce.dispose(),U.dispose(),ht.dispose(),Vt.dispose(),$.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Rn),rt.removeEventListener("sessionend",Gu),Hi.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let M=ge.autoReset,O=Mt.enabled,B=Mt.autoUpdate,z=Mt.needsUpdate,L=Mt.type;D(),ge.autoReset=M,Mt.enabled=O,Mt.autoUpdate=B,Mt.needsUpdate=z,Mt.type=L}function nt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){let O=M.target;O.removeEventListener("dispose",K),xt(O)}function xt(M){Ut(M),bt.remove(M)}function Ut(M){let O=bt.get(M).programs;O!==void 0&&(O.forEach(function(B){$.releaseProgram(B)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,B,z,L,it){O===null&&(O=Et);let ut=L.isMesh&&L.matrixWorld.determinant()<0,_t=mg(M,O,B,z,L);vt.setMaterial(z,ut);let ft=B.index,Pt=1;if(z.wireframe===!0){if(ft=x.getWireframeAttribute(B),ft===void 0)return;Pt=2}let Dt=B.drawRange,At=B.attributes.position,Yt=Dt.start*Pt,ae=(Dt.start+Dt.count)*Pt;it!==null&&(Yt=Math.max(Yt,it.start*Pt),ae=Math.min(ae,(it.start+it.count)*Pt)),ft!==null?(Yt=Math.max(Yt,0),ae=Math.min(ae,ft.count)):At!=null&&(Yt=Math.max(Yt,0),ae=Math.min(ae,At.count));let Me=ae-Yt;if(Me<0||Me===1/0)return;ht.setup(L,z,_t,B,ft);let fe,le=dt;if(ft!==null&&(fe=T.get(ft),le=Rt,le.setIndex(fe)),L.isMesh)z.wireframe===!0?(vt.setLineWidth(z.wireframeLinewidth*ze()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(L.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),vt.setLineWidth(Tt*ze()),L.isLineSegments?le.setMode(I.LINES):L.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else L.isPoints?le.setMode(I.POINTS):L.isSprite&&le.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))le.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Tt=L._multiDrawStarts,_e=L._multiDrawCounts,ee=L._multiDrawCount,nn=ft?T.get(ft).bytesPerElement:1,_s=bt.get(z).currentProgram.getUniforms();for(let sn=0;sn<ee;sn++)_s.setValue(I,"_gl_DrawID",sn),le.render(Tt[sn]/nn,_e[sn])}else if(L.isInstancedMesh)le.renderInstances(Yt,Me,L.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_e=Math.min(B.instanceCount,Tt);le.renderInstances(Yt,Me,_e)}else le.render(Yt,Me)};function he(M,O,B){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=$e,M.needsUpdate=!0,Mo(M,O,B),M.side=Qn,M.needsUpdate=!0,Mo(M,O,B),M.side=Ln):Mo(M,O,B)}this.compile=function(M,O,B=null){B===null&&(B=M),m=Ct.get(B),m.init(O),w.push(m),B.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),M!==B&&M.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights();let z=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let it=L.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let _t=it[ut];he(_t,B,L),z.add(_t)}else he(it,B,L),z.add(it)}),m=w.pop(),z},this.compileAsync=function(M,O,B=null){let z=this.compile(M,O,B);return new Promise(L=>{function it(){if(z.forEach(function(ut){bt.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){L(M);return}setTimeout(it,10)}Nt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ie=null;function Wn(M){ie&&ie(M)}function Rn(){Hi.stop()}function Gu(){Hi.start()}let Hi=new $f;Hi.setAnimationLoop(Wn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){ie=M,rt.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},rt.addEventListener("sessionstart",Rn),rt.addEventListener("sessionend",Gu),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,P),m=Ct.get(M,w.length),m.init(O),w.push(m),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(Q,Sn,O.reversedDepth),Y=this.localClippingEnabled,qt=ot.init(this.clippingPlanes,Y),p=X.get(M,v.length),p.init(),v.push(p),rt.enabled===!0&&rt.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&ec(it,O,-1/0,y.sortObjects)}ec(M,O,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(et,ct),$t=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,$t&&St.addToRenderList(p,M),this.info.render.frame++,qt===!0&&ot.beginShadows();let B=m.state.shadowsArray;Mt.render(B,M,O),qt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=p.opaque,L=p.transmissive;if(m.setupLights(),O.isArrayCamera){let it=O.cameras;if(L.length>0)for(let ut=0,_t=it.length;ut<_t;ut++){let ft=it[ut];Xu(z,L,M,ft)}$t&&St.render(M);for(let ut=0,_t=it.length;ut<_t;ut++){let ft=it[ut];Wu(p,M,ft,ft.viewport)}}else L.length>0&&Xu(z,L,M,O),$t&&St.render(M),Wu(p,M,O);P!==null&&A===0&&(zt.updateMultisampleRenderTarget(P),zt.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,O),ht.resetDefaultState(),b=-1,S=null,w.pop(),w.length>0?(m=w[w.length-1],qt===!0&&ot.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function ec(M,O,B,z){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){z&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let ut=U.update(M),_t=M.material;_t.visible&&p.push(M,ut,_t,B,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){let ut=U.update(M),_t=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ot.copy(ut.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(_t)){let ft=ut.groups;for(let Pt=0,Dt=ft.length;Pt<Dt;Pt++){let At=ft[Pt],Yt=_t[At.materialIndex];Yt&&Yt.visible&&p.push(M,ut,Yt,B,Ot.z,At)}}else _t.visible&&p.push(M,ut,_t,B,Ot.z,null)}}let it=M.children;for(let ut=0,_t=it.length;ut<_t;ut++)ec(it[ut],O,B,z)}function Wu(M,O,B,z){let L=M.opaque,it=M.transmissive,ut=M.transparent;m.setupLightsView(B),qt===!0&&ot.setGlobalState(y.clippingPlanes,B),z&&vt.viewport(R.copy(z)),L.length>0&&bo(L,O,B),it.length>0&&bo(it,O,B),ut.length>0&&bo(ut,O,B),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Xu(M,O,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new On(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Gs:An,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let it=m.state.transmissionRenderTarget[z.id],ut=z.viewport||R;it.setSize(ut.z*y.transmissionResolutionScale,ut.w*y.transmissionResolutionScale);let _t=y.getRenderTarget(),ft=y.getActiveCubeFace(),Pt=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(Z),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),$t&&St.render(B);let Dt=y.toneMapping;y.toneMapping=si;let At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),qt===!0&&ot.setGlobalState(y.clippingPlanes,z),bo(M,B,z),zt.updateMultisampleRenderTarget(it),zt.updateRenderTargetMipmap(it),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ae=0,Me=O.length;ae<Me;ae++){let fe=O[ae],le=fe.object,Tt=fe.geometry,_e=fe.material,ee=fe.group;if(_e.side===Ln&&le.layers.test(z.layers)){let nn=_e.side;_e.side=$e,_e.needsUpdate=!0,qu(le,B,z,Tt,_e,ee),_e.side=nn,_e.needsUpdate=!0,Yt=!0}}Yt===!0&&(zt.updateMultisampleRenderTarget(it),zt.updateRenderTargetMipmap(it))}y.setRenderTarget(_t,ft,Pt),y.setClearColor(Z,k),At!==void 0&&(z.viewport=At),y.toneMapping=Dt}function bo(M,O,B){let z=O.isScene===!0?O.overrideMaterial:null;for(let L=0,it=M.length;L<it;L++){let ut=M[L],_t=ut.object,ft=ut.geometry,Pt=ut.group,Dt=ut.material;Dt.allowOverride===!0&&z!==null&&(Dt=z),_t.layers.test(B.layers)&&qu(_t,O,B,ft,Dt,Pt)}}function qu(M,O,B,z,L,it){M.onBeforeRender(y,O,B,z,L,it),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(y,O,B,z,M,it),L.transparent===!0&&L.side===Ln&&L.forceSinglePass===!1?(L.side=$e,L.needsUpdate=!0,y.renderBufferDirect(B,O,z,L,M,it),L.side=Qn,L.needsUpdate=!0,y.renderBufferDirect(B,O,z,L,M,it),L.side=Ln):y.renderBufferDirect(B,O,z,L,M,it),M.onAfterRender(y,O,B,z,L,it)}function Mo(M,O,B){O.isScene!==!0&&(O=Et);let z=bt.get(M),L=m.state.lights,it=m.state.shadowsArray,ut=L.state.version,_t=$.getParameters(M,L.state,it,O,B),ft=$.getProgramCacheKey(_t),Pt=z.programs;z.environment=M.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(M.isMeshStandardMaterial?Ce:Ie).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",K),Pt=new Map,z.programs=Pt);let Dt=Pt.get(ft);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===ut)return ju(M,_t),Dt}else _t.uniforms=$.getUniforms(M),M.onBeforeCompile(_t,y),Dt=$.acquireProgram(_t,ft),Pt.set(ft,Dt),z.uniforms=_t.uniforms;let At=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=ot.uniform),ju(M,_t),z.needsLights=_g(M),z.lightsStateVersion=ut,z.needsLights&&(At.ambientLightColor.value=L.state.ambient,At.lightProbe.value=L.state.probe,At.directionalLights.value=L.state.directional,At.directionalLightShadows.value=L.state.directionalShadow,At.spotLights.value=L.state.spot,At.spotLightShadows.value=L.state.spotShadow,At.rectAreaLights.value=L.state.rectArea,At.ltc_1.value=L.state.rectAreaLTC1,At.ltc_2.value=L.state.rectAreaLTC2,At.pointLights.value=L.state.point,At.pointLightShadows.value=L.state.pointShadow,At.hemisphereLights.value=L.state.hemi,At.directionalShadowMap.value=L.state.directionalShadowMap,At.directionalShadowMatrix.value=L.state.directionalShadowMatrix,At.spotShadowMap.value=L.state.spotShadowMap,At.spotLightMatrix.value=L.state.spotLightMatrix,At.spotLightMap.value=L.state.spotLightMap,At.pointShadowMap.value=L.state.pointShadowMap,At.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function Yu(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=js.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function ju(M,O){let B=bt.get(M);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function mg(M,O,B,z,L){O.isScene!==!0&&(O=Et),zt.resetTextureUnits();let it=O.fog,ut=z.isMeshStandardMaterial?O.environment:null,_t=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qi,ft=(z.isMeshStandardMaterial?Ce:Ie).get(z.envMap||ut),Pt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color,Me=si;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=y.toneMapping);let fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=fe!==void 0?fe.length:0,Tt=bt.get(z),_e=m.state.lights;if(qt===!0&&(Y===!0||M!==S)){let Ye=M===S&&z.id===b;ot.setState(z,M,Ye)}let ee=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==_e.state.version||Tt.outputColorSpace!==_t||L.isBatchedMesh&&Tt.batching===!1||!L.isBatchedMesh&&Tt.batching===!0||L.isBatchedMesh&&Tt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Tt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Tt.instancing===!1||!L.isInstancedMesh&&Tt.instancing===!0||L.isSkinnedMesh&&Tt.skinning===!1||!L.isSkinnedMesh&&Tt.skinning===!0||L.isInstancedMesh&&Tt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Tt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Tt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Tt.instancingMorph===!1&&L.morphTexture!==null||Tt.envMap!==ft||z.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ot.numPlanes||Tt.numIntersection!==ot.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==Dt||Tt.morphTargets!==At||Tt.morphNormals!==Yt||Tt.morphColors!==ae||Tt.toneMapping!==Me||Tt.morphTargetsCount!==le)&&(ee=!0):(ee=!0,Tt.__version=z.version);let nn=Tt.currentProgram;ee===!0&&(nn=Mo(z,O,L));let _s=!1,sn=!1,hr=!1,xe=nn.getUniforms(),hn=Tt.uniforms;if(vt.useProgram(nn.program)&&(_s=!0,sn=!0,hr=!0),z.id!==b&&(b=z.id,sn=!0),_s||S!==M){vt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",M.projectionMatrix),xe.setValue(I,"viewMatrix",M.matrixWorldInverse);let Ze=xe.map.cameraPosition;Ze!==void 0&&Ze.setValue(I,gt.setFromMatrixPosition(M.matrixWorld)),It.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,sn=!0,hr=!0)}if(L.isSkinnedMesh){xe.setOptional(I,L,"bindMatrix"),xe.setOptional(I,L,"bindMatrixInverse");let Ye=L.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),xe.setValue(I,"boneTexture",Ye.boneTexture,zt))}L.isBatchedMesh&&(xe.setOptional(I,L,"batchingTexture"),xe.setValue(I,"batchingTexture",L._matricesTexture,zt),xe.setOptional(I,L,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",L._indirectTexture,zt),xe.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",L._colorsTexture,zt));let un=B.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&st.update(L,B,nn),(sn||Tt.receiveShadow!==L.receiveShadow)&&(Tt.receiveShadow=L.receiveShadow,xe.setValue(I,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hn.envMap.value=ft,hn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(hn.envMapIntensity.value=O.environmentIntensity),sn&&(xe.setValue(I,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&gg(hn,hr),it&&z.fog===!0&&J.refreshFogUniforms(hn,it),J.refreshMaterialUniforms(hn,z,V,q,m.state.transmissionRenderTarget[M.id]),js.upload(I,Yu(Tt),hn,zt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(js.upload(I,Yu(Tt),hn,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xe.setValue(I,"center",L.center),xe.setValue(I,"modelViewMatrix",L.modelViewMatrix),xe.setValue(I,"normalMatrix",L.normalMatrix),xe.setValue(I,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ye=z.uniformsGroups;for(let Ze=0,nc=Ye.length;Ze<nc;Ze++){let Gi=Ye[Ze];Vt.update(Gi,nn),Vt.bind(Gi,nn)}}return nn}function gg(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function _g(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,O,B){let z=bt.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),bt.get(M.texture).__webglTexture=O,bt.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let B=bt.get(M);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};let xg=I.createFramebuffer();this.setRenderTarget=function(M,O=0,B=0){P=M,E=O,A=B;let z=!0,L=null,it=!1,ut=!1;if(M){let ft=bt.get(M);if(ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)zt.setupRenderTarget(M);else if(ft.__hasExternalTextures)zt.rebindTextures(M,bt.get(M.texture).__webglTexture,bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let At=M.depthTexture;if(ft.__boundDepthTexture!==At){if(At!==null&&bt.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(M)}}let Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);let Dt=bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?L=Dt[O][B]:L=Dt[O],it=!0):M.samples>0&&zt.useMultisampledRTT(M)===!1?L=bt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?L=Dt[B]:L=Dt,R.copy(M.viewport),F.copy(M.scissor),H=M.scissorTest}else R.copy(yt).multiplyScalar(V).floor(),F.copy(Lt).multiplyScalar(V).floor(),H=Qt;if(B!==0&&(L=xg),vt.bindFramebuffer(I.FRAMEBUFFER,L)&&z&&vt.drawBuffers(M,L),vt.viewport(R),vt.scissor(F),vt.setScissorTest(H),it){let ft=bt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,B)}else if(ut){let ft=O;for(let Pt=0;Pt<M.textures.length;Pt++){let Dt=bt.get(M.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,B,ft)}}else if(M!==null&&B!==0){let ft=bt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ft.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(M,O,B,z,L,it,ut,_t=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft){vt.bindFramebuffer(I.FRAMEBUFFER,ft);try{let Pt=M.textures[_t],Dt=Pt.format,At=Pt.type;if(!It.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-z&&B>=0&&B<=M.height-L&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),I.readPixels(O,B,z,L,wt.convert(Dt),wt.convert(At),it))}finally{let Pt=P!==null?bt.get(P).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=function(M,O,B,z,L,it,ut,_t=0){return So(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft)if(O>=0&&O<=M.width-z&&B>=0&&B<=M.height-L){vt.bindFramebuffer(I.FRAMEBUFFER,ft);let Pt=M.textures[_t],Dt=Pt.format,At=Pt.type;if(!It.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),I.readPixels(O,B,z,L,wt.convert(Dt),wt.convert(At),0);let ae=P!==null?bt.get(P).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,ae);let Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield Sf(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(Yt),I.deleteSync(Me),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(M,O=null,B=0){let z=Math.pow(2,-B),L=Math.floor(M.image.width*z),it=Math.floor(M.image.height*z),ut=O!==null?O.x:0,_t=O!==null?O.y:0;zt.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ut,_t,L,it),vt.unbindTexture()};let yg=I.createFramebuffer(),vg=I.createFramebuffer();this.copyTextureToTexture=function(M,O,B=null,z=null,L=0,it=null){it===null&&(L!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=L,L=0):it=0);let ut,_t,ft,Pt,Dt,At,Yt,ae,Me,fe=M.isCompressedTexture?M.mipmaps[it]:M.image;if(B!==null)ut=B.max.x-B.min.x,_t=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,Pt=B.min.x,Dt=B.min.y,At=B.isBox3?B.min.z:0;else{let un=Math.pow(2,-L);ut=Math.floor(fe.width*un),_t=Math.floor(fe.height*un),M.isDataArrayTexture?ft=fe.depth:M.isData3DTexture?ft=Math.floor(fe.depth*un):ft=1,Pt=0,Dt=0,At=0}z!==null?(Yt=z.x,ae=z.y,Me=z.z):(Yt=0,ae=0,Me=0);let le=wt.convert(O.format),Tt=wt.convert(O.type),_e;O.isData3DTexture?(zt.setTexture3D(O,0),_e=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(zt.setTexture2DArray(O,0),_e=I.TEXTURE_2D_ARRAY):(zt.setTexture2D(O,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let ee=I.getParameter(I.UNPACK_ROW_LENGTH),nn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_s=I.getParameter(I.UNPACK_SKIP_PIXELS),sn=I.getParameter(I.UNPACK_SKIP_ROWS),hr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);let xe=M.isDataArrayTexture||M.isData3DTexture,hn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let un=bt.get(M),Ye=bt.get(O),Ze=bt.get(un.__renderTarget),nc=bt.get(Ye.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,Ze.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,nc.__webglFramebuffer);for(let Gi=0;Gi<ft;Gi++)xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(M).__webglTexture,L,At+Gi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(O).__webglTexture,it,Me+Gi)),I.blitFramebuffer(Pt,Dt,ut,_t,Yt,ae,ut,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(L!==0||M.isRenderTargetTexture||bt.has(M)){let un=bt.get(M),Ye=bt.get(O);vt.bindFramebuffer(I.READ_FRAMEBUFFER,yg),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,vg);for(let Ze=0;Ze<ft;Ze++)xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,L,At+Ze):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,L),hn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ye.__webglTexture,it,Me+Ze):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ye.__webglTexture,it),L!==0?I.blitFramebuffer(Pt,Dt,ut,_t,Yt,ae,ut,_t,I.COLOR_BUFFER_BIT,I.NEAREST):hn?I.copyTexSubImage3D(_e,it,Yt,ae,Me+Ze,Pt,Dt,ut,_t):I.copyTexSubImage2D(_e,it,Yt,ae,Pt,Dt,ut,_t);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else hn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(_e,it,Yt,ae,Me,ut,_t,ft,le,Tt,fe.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,it,Yt,ae,Me,ut,_t,ft,le,fe.data):I.texSubImage3D(_e,it,Yt,ae,Me,ut,_t,ft,le,Tt,fe):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,it,Yt,ae,ut,_t,le,Tt,fe.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,it,Yt,ae,fe.width,fe.height,le,fe.data):I.texSubImage2D(I.TEXTURE_2D,it,Yt,ae,ut,_t,le,Tt,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_s),I.pixelStorei(I.UNPACK_SKIP_ROWS,sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hr),it===0&&O.generateMipmaps&&I.generateMipmap(_e),vt.unbindTexture()},this.initRenderTarget=function(M){bt.get(M).__webglFramebuffer===void 0&&zt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};function no(i){return i+.5|0}var Di=(i,t,e)=>Math.max(Math.min(i,e),t);function to(i){return Di(no(i*2.55),0,255)}function Oi(i){return Di(no(i*255),0,255)}function oi(i){return Di(no(i/2.55)/100,0,1)}function tp(i){return Di(no(i*100),0,100)}var _n={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ph=[..."0123456789ABCDEF"],Ov=i=>Ph[i&15],Fv=i=>Ph[(i&240)>>4]+Ph[i&15],ml=i=>(i&240)>>4===(i&15),Lv=i=>ml(i.r)&&ml(i.g)&&ml(i.b)&&ml(i.a);function Uv(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&_n[i[1]]*17,g:255&_n[i[2]]*17,b:255&_n[i[3]]*17,a:t===5?_n[i[4]]*17:255}:(t===7||t===9)&&(e={r:_n[i[1]]<<4|_n[i[2]],g:_n[i[3]]<<4|_n[i[4]],b:_n[i[5]]<<4|_n[i[6]],a:t===9?_n[i[7]]<<4|_n[i[8]]:255})),e}var Nv=(i,t)=>i<255?t(i):"";function kv(i){var t=Lv(i)?Ov:Fv;return i?"#"+t(i.r)+t(i.g)+t(i.b)+Nv(i.a,t):void 0}var Bv=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function sp(i,t,e){let n=t*Math.min(e,1-e),s=(r,o=(r+i/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Vv(i,t,e){let n=(s,r=(s+i/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function zv(i,t,e){let n=sp(i,1,.5),s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)n[s]*=1-t-e,n[s]+=t;return n}function Hv(i,t,e,n,s){return i===s?(t-e)/n+(t<e?6:0):t===s?(e-i)/n+2:(i-t)/n+4}function Rh(i){let e=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(e,n,s),o=Math.min(e,n,s),a=(r+o)/2,l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=Hv(e,n,s,h,r),l=l*60+.5),[l|0,c||0,a]}function Ih(i,t,e,n){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,n)).map(Oi)}function Dh(i,t,e){return Ih(sp,i,t,e)}function Gv(i,t,e){return Ih(zv,i,t,e)}function Wv(i,t,e){return Ih(Vv,i,t,e)}function rp(i){return(i%360+360)%360}function Xv(i){let t=Bv.exec(i),e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?to(+t[5]):Oi(+t[5]));let s=rp(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=Gv(s,r,o):t[1]==="hsv"?n=Wv(s,r,o):n=Dh(s,r,o),{r:n[0],g:n[1],b:n[2],a:e}}function qv(i,t){var e=Rh(i);e[0]=rp(e[0]+t),e=Dh(e),i.r=e[0],i.g=e[1],i.b=e[2]}function Yv(i){if(!i)return;let t=Rh(i),e=t[0],n=tp(t[1]),s=tp(t[2]);return i.a<255?`hsla(${e}, ${n}%, ${s}%, ${oi(i.a)})`:`hsl(${e}, ${n}%, ${s}%)`}var ep={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},np={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function jv(){let i={},t=Object.keys(np),e=Object.keys(ep),n,s,r,o,a;for(n=0;n<t.length;n++){for(o=a=t[n],s=0;s<e.length;s++)r=e[s],a=a.replace(r,ep[r]);r=parseInt(np[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}var gl;function $v(i){gl||(gl=jv(),gl.transparent=[0,0,0,0]);let t=gl[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Zv=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Kv(i){let t=Zv.exec(i),e=255,n,s,r;if(t){if(t[7]!==n){let o=+t[7];e=t[8]?to(o):Di(o*255,0,255)}return n=+t[1],s=+t[3],r=+t[5],n=255&(t[2]?to(n):Di(n,0,255)),s=255&(t[4]?to(s):Di(s,0,255)),r=255&(t[6]?to(r):Di(r,0,255)),{r:n,g:s,b:r,a:e}}}function Jv(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${oi(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}var Th=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Zs=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Qv(i,t,e){let n=Zs(oi(i.r)),s=Zs(oi(i.g)),r=Zs(oi(i.b));return{r:Oi(Th(n+e*(Zs(oi(t.r))-n))),g:Oi(Th(s+e*(Zs(oi(t.g))-s))),b:Oi(Th(r+e*(Zs(oi(t.b))-r))),a:i.a+e*(t.a-i.a)}}function _l(i,t,e){if(i){let n=Rh(i);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=Dh(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function op(i,t){return i&&Object.assign(t||{},i)}function ip(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=Oi(i[3]))):(t=op(i,{r:0,g:0,b:0,a:1}),t.a=Oi(t.a)),t}function tb(i){return i.charAt(0)==="r"?Kv(i):Xv(i)}var eo=class i{constructor(t){if(t instanceof i)return t;let e=typeof t,n;e==="object"?n=ip(t):e==="string"&&(n=Uv(t)||$v(t)||tb(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=op(this._rgb);return t&&(t.a=oi(t.a)),t}set rgb(t){this._rgb=ip(t)}rgbString(){return this._valid?Jv(this._rgb):void 0}hexString(){return this._valid?kv(this._rgb):void 0}hslString(){return this._valid?Yv(this._rgb):void 0}mix(t,e){if(t){let n=this.rgb,s=t.rgb,r,o=e===r?.5:e,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=Qv(this._rgb,t._rgb,e)),this}clone(){return new i(this.rgb)}alpha(t){return this._rgb.a=Oi(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=no(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return _l(this._rgb,2,t),this}darken(t){return _l(this._rgb,2,-t),this}saturate(t){return _l(this._rgb,1,t),this}desaturate(t){return _l(this._rgb,1,-t),this}rotate(t){return qv(this._rgb,t),this}};function Vn(){}var _p=(()=>{let i=0;return()=>i++})();function Gt(i){return i==null}function ue(i){if(Array.isArray&&Array.isArray(i))return!0;let t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Xt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function be(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function Qe(i,t){return be(i)?i:t}function Ft(i,t){return typeof i>"u"?t:i}var xp=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,Uh=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function ce(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function re(i,t,e,n){let s,r,o;if(ue(i))if(r=i.length,n)for(s=r-1;s>=0;s--)t.call(e,i[s],s);else for(s=0;s<r;s++)t.call(e,i[s],s);else if(Xt(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)t.call(e,i[o[s]],o[s])}function ro(i,t){let e,n,s,r;if(!i||!t||i.length!==t.length)return!1;for(e=0,n=i.length;e<n;++e)if(s=i[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Ml(i){if(ue(i))return i.map(Ml);if(Xt(i)){let t=Object.create(null),e=Object.keys(i),n=e.length,s=0;for(;s<n;++s)t[e[s]]=Ml(i[e[s]]);return t}return i}function yp(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function eb(i,t,e,n){if(!yp(i))return;let s=t[i],r=e[i];Xt(s)&&Xt(r)?Js(s,r,n):t[i]=Ml(r)}function Js(i,t,e){let n=ue(t)?t:[t],s=n.length;if(!Xt(i))return i;e=e||{};let r=e.merger||eb,o;for(let a=0;a<s;++a){if(o=n[a],!Xt(o))continue;let l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],i,o,e)}return i}function tr(i,t){return Js(i,t,{merger:nb})}function nb(i,t,e){if(!yp(i))return;let n=t[i],s=e[i];Xt(n)&&Xt(s)?tr(n,s):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Ml(s))}var ap={"":i=>i,x:i=>i.x,y:i=>i.y};function ib(i){let t=i.split("."),e=[],n="";for(let s of t)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function sb(i){let t=ib(i);return e=>{for(let n of t){if(n==="")break;e=e&&e[n]}return e}}function ci(i,t){return(ap[t]||(ap[t]=sb(t)))(i)}function El(i){return i.charAt(0).toUpperCase()+i.slice(1)}var er=i=>typeof i<"u",ai=i=>typeof i=="function",Nh=(i,t)=>{if(i.size!==t.size)return!1;for(let e of i)if(!t.has(e))return!1;return!0};function vp(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}var Jt=Math.PI,de=2*Jt,rb=de+Jt,Sl=Number.POSITIVE_INFINITY,ob=Jt/180,we=Jt/2,cs=Jt/4,lp=Jt*2/3,li=Math.log10,Tn=Math.sign;function nr(i,t,e){return Math.abs(i-t)<e}function kh(i){let t=Math.round(i);i=nr(i,t,i/1e3)?t:i;let e=Math.pow(10,Math.floor(li(i))),n=i/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function bp(i){let t=[],e=Math.sqrt(i),n;for(n=1;n<e;n++)i%n===0&&(t.push(n),t.push(i/n));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function ab(i){return typeof i=="symbol"||typeof i=="object"&&i!==null&&!(Symbol.toPrimitive in i||"toString"in i||"valueOf"in i)}function ds(i){return!ab(i)&&!isNaN(parseFloat(i))&&isFinite(i)}function Mp(i,t){let e=Math.round(i);return e-t<=i&&e+t>=i}function Bh(i,t,e){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function xn(i){return i*(Jt/180)}function Al(i){return i*(180/Jt)}function Vh(i){if(!be(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function zh(i,t){let e=t.x-i.x,n=t.y-i.y,s=Math.sqrt(e*e+n*n),r=Math.atan2(n,e);return r<-.5*Jt&&(r+=de),{angle:r,distance:s}}function wl(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function lb(i,t){return(i-t+rb)%de-Jt}function ke(i){return(i%de+de)%de}function ir(i,t,e,n){let s=ke(i),r=ke(t),o=ke(e),a=ke(r-s),l=ke(o-s),c=ke(s-r),h=ke(s-o);return s===r||s===o||n&&r===o||a>l&&c<h}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Sp(i){return Re(i,-32768,32767)}function zn(i,t,e,n=1e-6){return i>=Math.min(t,e)-n&&i<=Math.max(t,e)+n}function Tl(i,t,e){e=e||(o=>i[o]<t);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,e(r)?s=r:n=r;return{lo:s,hi:n}}var kn=(i,t,e,n)=>Tl(i,e,n?s=>{let r=i[s][t];return r<e||r===e&&i[s+1][t]===e}:s=>i[s][t]<e),wp=(i,t,e)=>Tl(i,e,n=>i[n][t]>=e);function Cp(i,t,e){let n=0,s=i.length;for(;n<s&&i[n]<t;)n++;for(;s>n&&i[s-1]>e;)s--;return n>0||s<i.length?i.slice(n,s):i}var Ep=["push","pop","shift","splice","unshift"];function Ap(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ep.forEach(e=>{let n="_onData"+El(e),s=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...r){let o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function Hh(i,t){let e=i._chartjs;if(!e)return;let n=e.listeners,s=n.indexOf(t);s!==-1&&n.splice(s,1),!(n.length>0)&&(Ep.forEach(r=>{delete i[r]}),delete i._chartjs)}function Gh(i){let t=new Set(i);return t.size===i.length?i:Array.from(t)}var Wh=(function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame})();function Xh(i,t){let e=[],n=!1;return function(...s){e=s,n||(n=!0,Wh.call(window,()=>{n=!1,i.apply(t,e)}))}}function Tp(i,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(i,t,n)):i.apply(this,n),t}}var Pl=i=>i==="start"?"left":i==="end"?"right":"center",Be=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Pp=(i,t,e,n)=>i===(n?"left":"right")?e:i==="center"?(t+e)/2:t;function qh(i,t,e){let n=t.length,s=0,r=n;if(i._sorted){let{iScale:o,vScale:a,_parsed:l}=i,c=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null,h=o.axis,{min:u,max:d,minDefined:f,maxDefined:g}=o.getUserBounds();if(f){if(s=Math.min(kn(l,h,u).lo,e?n:kn(t,h,o.getPixelForValue(u)).lo),c){let _=l.slice(0,s+1).reverse().findIndex(p=>!Gt(p[a.axis]));s-=Math.max(0,_)}s=Re(s,0,n-1)}if(g){let _=Math.max(kn(l,o.axis,d,!0).hi+1,e?0:kn(t,h,o.getPixelForValue(d),!0).hi+1);if(c){let p=l.slice(_-1).findIndex(m=>!Gt(m[a.axis]));_+=Math.max(0,p)}r=Re(_,s,n)-s}else r=n-s}return{start:s,count:r}}function Yh(i){let{xScale:t,yScale:e,_scaleRanges:n}=i,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return i._scaleRanges=s,!0;let r=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,s),r}var xl=i=>i===0||i===1,cp=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*de/e)),hp=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*de/e)+1,Ks={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*we)+1,easeOutSine:i=>Math.sin(i*we),easeInOutSine:i=>-.5*(Math.cos(Jt*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>xl(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>xl(i)?i:cp(i,.075,.3),easeOutElastic:i=>xl(i)?i:hp(i,.075,.3),easeInOutElastic(i){return xl(i)?i:i<.5?.5*cp(i*2,.1125,.45):.5+.5*hp(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Ks.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Ks.easeInBounce(i*2)*.5:Ks.easeOutBounce(i*2-1)*.5+.5};function jh(i){if(i&&typeof i=="object"){let t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function $h(i){return jh(i)?i:new eo(i)}function Oh(i){return jh(i)?i:new eo(i).saturate(.5).darken(.1).hexString()}var cb=["x","y","borderWidth","radius","tension"],hb=["color","borderColor","backgroundColor"];function ub(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:hb},numbers:{type:"number",properties:cb}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function db(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var up=new Map;function fb(i,t){t=t||{};let e=i+JSON.stringify(t),n=up.get(e);return n||(n=new Intl.NumberFormat(i,t),up.set(e,n)),n}function sr(i,t,e){return fb(t,e).format(i)}var Rp={values(i){return ue(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";let n=this.chart.options.locale,s,r=i;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=pb(i,e)}let o=li(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),sr(i,n,l)},logarithmic(i,t,e){if(i===0)return"0";let n=e[t].significand||i/Math.pow(10,Math.floor(li(i)));return[1,2,3,5,10,15].includes(n)||t>.8*e.length?Rp.numeric.call(this,i,t,e):""}};function pb(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var oo={formatters:Rp};function mb(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:oo.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var Li=Object.create(null),Rl=Object.create(null);function io(i,t){if(!t)return i;let e=t.split(".");for(let n=0,s=e.length;n<s;++n){let r=e[n];i=i[r]||(i[r]=Object.create(null))}return i}function Fh(i,t,e){return typeof t=="string"?Js(io(i,t),e):Js(io(i,""),t)}var Lh=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Oh(s.backgroundColor),this.hoverBorderColor=(n,s)=>Oh(s.borderColor),this.hoverColor=(n,s)=>Oh(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Fh(this,t,e)}get(t){return io(this,t)}describe(t,e){return Fh(Rl,t,e)}override(t,e){return Fh(Li,t,e)}route(t,e,n,s){let r=io(this,t),o=io(this,n),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){let l=this[a],c=o[s];return Xt(l)?Object.assign({},c,l):Ft(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}},pe=new Lh({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ub,db,mb]);function gb(i){return!i||Gt(i.size)||Gt(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function so(i,t,e,n,s){let r=t[s];return r||(r=t[s]=i.measureText(s).width,e.push(s)),r>n&&(n=r),n}function Ip(i,t,e,n){n=n||{};let s=n.data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(s=n.data={},r=n.garbageCollect=[],n.font=t),i.save(),i.font=t;let o=0,a=e.length,l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&!ue(u))o=so(i,s,r,o,u);else if(ue(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!ue(d)&&(o=so(i,s,r,o,d));i.restore();let f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function Ui(i,t,e){let n=i.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*n)/n+s}function Zh(i,t){!t&&!i||(t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore())}function Il(i,t,e,n){Kh(i,t,e,n,null)}function Kh(i,t,e,n,s){let r,o,a,l,c,h,u,d,f=t.pointStyle,g=t.rotation,_=t.radius,p=(g||0)*ob;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(e,n),i.rotate(p),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(_)||_<=0)){switch(i.beginPath(),f){default:s?i.ellipse(e,n,s/2,_,0,0,de):i.arc(e,n,_,0,de),i.closePath();break;case"triangle":h=s?s/2:_,i.moveTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=lp,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=lp,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),i.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(p+cs)*l,u=Math.cos(p+cs)*(s?s/2-c:l),a=Math.sin(p+cs)*l,d=Math.sin(p+cs)*(s?s/2-c:l),i.arc(e-u,n-a,c,p-Jt,p-we),i.arc(e+d,n-o,c,p-we,p),i.arc(e+u,n+a,c,p,p+we),i.arc(e-d,n+o,c,p+we,p+Jt),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,i.rect(e-h,n-l,2*h,2*l);break}p+=cs;case"rectRot":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+d,n-o),i.lineTo(e+u,n+a),i.lineTo(e-d,n+o),i.closePath();break;case"crossRot":p+=cs;case"cross":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"star":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o),p+=cs,u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"line":o=s?s/2:Math.cos(p)*_,a=Math.sin(p)*_,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a);break;case"dash":i.moveTo(e,n),i.lineTo(e+Math.cos(p)*(s?s/2:_),n+Math.sin(p)*_);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function Bn(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function ao(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function lo(i){i.restore()}function Dp(i,t,e,n,s){if(!t)return i.lineTo(e.x,e.y);if(s==="middle"){let r=(t.x+e.x)/2;i.lineTo(r,t.y),i.lineTo(r,e.y)}else s==="after"!=!!n?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function Op(i,t,e,n){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function _b(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),Gt(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function xb(i,t,e,n,s){if(s.strikethrough||s.underline){let r=i.measureText(n),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,h),i.lineTo(a,h),i.stroke()}}function yb(i,t){let e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function Ni(i,t,e,n,s,r={}){let o=ue(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="",l,c;for(i.save(),i.font=s.string,_b(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&yb(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),Gt(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,e,n,r.maxWidth)),i.fillText(c,e,n,r.maxWidth),xb(i,e,n,c,r),n+=Number(s.lineHeight);i.restore()}function rr(i,t){let{x:e,y:n,w:s,h:r,radius:o}=t;i.arc(e+o.topLeft,n+o.topLeft,o.topLeft,1.5*Jt,Jt,!0),i.lineTo(e,n+r-o.bottomLeft),i.arc(e+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,Jt,we,!0),i.lineTo(e+s-o.bottomRight,n+r),i.arc(e+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,we,0,!0),i.lineTo(e+s,n+o.topRight),i.arc(e+s-o.topRight,n+o.topRight,o.topRight,0,-we,!0),i.lineTo(e+o.topLeft,n)}var vb=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bb=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Mb(i,t){let e=(""+i).match(vb);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}var Sb=i=>+i||0;function Dl(i,t){let e={},n=Xt(t),s=n?Object.keys(t):t,r=Xt(i)?n?o=>Ft(i[o],i[t[o]]):o=>i[o]:()=>i;for(let o of s)e[o]=Sb(r(o));return e}function Jh(i){return Dl(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ki(i){return Dl(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Ve(i){let t=Jh(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ae(i,t){i=i||{},t=t||pe.font;let e=Ft(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=Ft(i.style,t.style);n&&!(""+n).match(bb)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);let s={family:Ft(i.family,t.family),lineHeight:Mb(Ft(i.lineHeight,t.lineHeight),e),size:e,style:n,weight:Ft(i.weight,t.weight),string:""};return s.string=gb(s),s}function or(i,t,e,n){let s=!0,r,o,a;for(r=0,o=i.length;r<o;++r)if(a=i[r],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),s=!1),e!==void 0&&ue(a)&&(a=a[e%a.length],s=!1),a!==void 0))return n&&!s&&(n.cacheable=!1),a}function Fp(i,t,e){let{min:n,max:s}=i,r=Uh(t,(s-n)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function hi(i,t){return Object.assign(Object.create(i),t)}function Ol(i,t=[""],e,n,s=()=>i[0]){let r=e||i;typeof n>"u"&&(n=Np("_fallback",i));let o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>Ol([a,...i],t,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Lp(a,l,()=>Ib(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return fp(a).includes(l)},ownKeys(a){return fp(a)},set(a,l,c){let h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function us(i,t,e,n){let s={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:Qh(i,n),setContext:r=>us(i,r,e,n),override:r=>us(i.override(r),t,e,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Lp(r,o,()=>Cb(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function Qh(i,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:s=t.allKeys}=i;return{allKeys:s,scriptable:e,indexable:n,isScriptable:ai(e)?e:()=>e,isIndexable:ai(n)?n:()=>n}}var wb=(i,t)=>i?i+El(t):t,tu=(i,t)=>Xt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Lp(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t)||t==="constructor")return i[t];let n=e();return i[t]=n,n}function Cb(i,t,e){let{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i,a=n[t];return ai(a)&&o.isScriptable(t)&&(a=Eb(t,a,i,e)),ue(a)&&a.length&&(a=Ab(t,a,i,o.isIndexable)),tu(t,a)&&(a=us(a,s,r&&r[t],o)),a}function Eb(i,t,e,n){let{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(r,o||n);return a.delete(i),tu(i,l)&&(l=eu(s._scopes,s,i,l)),l}function Ab(i,t,e,n){let{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&n(i))return t[r.index%t.length];if(Xt(t[0])){let l=t,c=s._scopes.filter(h=>h!==l);t=[];for(let h of l){let u=eu(c,s,i,h);t.push(us(u,r,o&&o[i],a))}}return t}function Up(i,t,e){return ai(i)?i(t,e):i}var Tb=(i,t)=>i===!0?t:typeof i=="string"?ci(t,i):void 0;function Pb(i,t,e,n,s){for(let r of t){let o=Tb(e,r);if(o){i.add(o);let a=Up(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==n)return a}else if(o===!1&&typeof n<"u"&&e!==n)return null}return!1}function eu(i,t,e,n){let s=t._rootScopes,r=Up(t._fallback,e,n),o=[...i,...s],a=new Set;a.add(n);let l=dp(a,o,e,r||e,n);return l===null||typeof r<"u"&&r!==e&&(l=dp(a,o,r,l,n),l===null)?!1:Ol(Array.from(a),[""],s,r,()=>Rb(t,e,n))}function dp(i,t,e,n,s){for(;e;)e=Pb(i,t,e,n,s);return e}function Rb(i,t,e){let n=i._getTarget();t in n||(n[t]={});let s=n[t];return ue(s)&&Xt(e)?e:s||{}}function Ib(i,t,e,n){let s;for(let r of t)if(s=Np(wb(r,i),e),typeof s<"u")return tu(i,s)?eu(e,n,i,s):s}function Np(i,t){for(let e of t){if(!e)continue;let n=e[i];if(typeof n<"u")return n}}function fp(i){let t=i._keys;return t||(t=i._keys=Db(i._scopes)),t}function Db(i){let t=new Set;for(let e of i)for(let n of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(n);return Array.from(t)}function nu(i,t,e,n){let{iScale:s}=i,{key:r="r"}=this._parsing,o=new Array(n),a,l,c,h;for(a=0,l=n;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(ci(h,r),c)};return o}var Ob=Number.EPSILON||1e-14,Qs=(i,t)=>t<i.length&&!i[t].skip&&i[t],kp=i=>i==="x"?"y":"x";function Fb(i,t,e,n){let s=i.skip?t:i,r=t,o=e.skip?t:e,a=wl(r,s),l=wl(o,r),c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;let u=n*c,d=n*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function Lb(i,t,e){let n=i.length,s,r,o,a,l,c=Qs(i,0);for(let h=0;h<n-1;++h)if(l=c,c=Qs(i,h+1),!(!l||!c)){if(nr(t[h],0,Ob)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function Ub(i,t,e="x"){let n=kp(e),s=i.length,r,o,a,l=Qs(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Qs(i,c+1),!a)continue;let h=a[e],u=a[n];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${n}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${n}`]=u+r*t[c])}}function Nb(i,t="x"){let e=kp(t),n=i.length,s=Array(n).fill(0),r=Array(n),o,a,l,c=Qs(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=Qs(i,o+1),!!l){if(c){let h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?Tn(s[o-1])!==Tn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Lb(i,s,r),Ub(i,r,t)}function yl(i,t,e){return Math.max(Math.min(i,e),t)}function kb(i,t){let e,n,s,r,o,a=Bn(i[0],t);for(e=0,n=i.length;e<n;++e)o=r,r=a,a=e<n-1&&Bn(i[e+1],t),r&&(s=i[e],o&&(s.cp1x=yl(s.cp1x,t.left,t.right),s.cp1y=yl(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=yl(s.cp2x,t.left,t.right),s.cp2y=yl(s.cp2y,t.top,t.bottom)))}function Bp(i,t,e,n,s){let r,o,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Nb(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=Fb(c,a,i[Math.min(r+1,o-(n?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&kb(i,e)}function Fl(){return typeof window<"u"&&typeof document<"u"}function Ll(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Cl(i,t,e){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=i,n}var Ul=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function Bb(i,t){return Ul(i).getPropertyValue(t)}var Vb=["top","right","bottom","left"];function hs(i,t,e){let n={};e=e?"-"+e:"";for(let s=0;s<4;s++){let r=Vb[s];n[r]=parseFloat(i[t+"-"+r+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}var zb=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Hb(i,t){let e=i.touches,n=e&&e.length?e[0]:i,{offsetX:s,offsetY:r}=n,o=!1,a,l;if(zb(s,r,i.target))a=s,l=r;else{let c=t.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Bi(i,t){if("native"in i)return i;let{canvas:e,currentDevicePixelRatio:n}=t,s=Ul(e),r=s.boxSizing==="border-box",o=hs(s,"padding"),a=hs(s,"border","width"),{x:l,y:c,box:h}=Hb(i,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top),{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-d)/g*e.height/n)}}function Gb(i,t,e){let n,s;if(t===void 0||e===void 0){let r=i&&Ll(i);if(!r)t=i.clientWidth,e=i.clientHeight;else{let o=r.getBoundingClientRect(),a=Ul(r),l=hs(a,"border","width"),c=hs(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=Cl(a.maxWidth,r,"clientWidth"),s=Cl(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:n||Sl,maxHeight:s||Sl}}var vl=i=>Math.round(i*10)/10;function Vp(i,t,e,n){let s=Ul(i),r=hs(s,"margin"),o=Cl(s.maxWidth,i,"clientWidth")||Sl,a=Cl(s.maxHeight,i,"clientHeight")||Sl,l=Gb(i,t,e),{width:c,height:h}=l;if(s.boxSizing==="content-box"){let d=hs(s,"border","width"),f=hs(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,n?c/n:h-r.height),c=vl(Math.min(c,o,l.maxWidth)),h=vl(Math.min(h,a,l.maxHeight)),c&&!h&&(h=vl(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&h>l.height&&(h=l.height,c=vl(Math.floor(h*n))),{width:c,height:h}}function iu(i,t,e){let n=t||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);let o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}var zp=(function(){let i=!1;try{let t={get passive(){return i=!0,!1}};Fl()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i})();function su(i,t){let e=Bb(i,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Fi(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Hp(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:n==="middle"?e<.5?i.y:t.y:n==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Gp(i,t,e,n){let s={x:i.cp2x,y:i.cp2y},r={x:t.cp1x,y:t.cp1y},o=Fi(i,s,e),a=Fi(s,r,e),l=Fi(r,t,e),c=Fi(o,a,e),h=Fi(a,l,e);return Fi(c,h,e)}var Wb=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},Xb=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function fs(i,t,e){return i?Wb(t,e):Xb()}function ru(i,t){let e,n;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=n)}function ou(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Wp(i){return i==="angle"?{between:ir,compare:lb,normalize:ke}:{between:zn,compare:(t,e)=>t-e,normalize:t=>t}}function pp({start:i,end:t,count:e,loop:n,style:s}){return{start:i%e,end:t%e,loop:n&&(t-i+1)%e===0,style:s}}function qb(i,t,e){let{property:n,start:s,end:r}=e,{between:o,normalize:a}=Wp(n),l=t.length,{start:c,end:h,loop:u}=i,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][n]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:i.style}}function au(i,t,e){if(!e)return[i];let{property:n,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Wp(n),{start:h,end:u,loop:d,style:f}=qb(i,t,e),g=[],_=!1,p=null,m,v,w,y=()=>l(s,w,m)&&a(s,w)!==0,C=()=>a(r,m)===0||l(r,w,m),E=()=>_||y(),A=()=>!_||C();for(let P=h,b=h;P<=u;++P)v=t[P%o],!v.skip&&(m=c(v[n]),m!==w&&(_=l(m,s,r),p===null&&E()&&(p=a(m,s)===0?P:b),p!==null&&A()&&(g.push(pp({start:p,end:P,loop:d,count:o,style:f})),p=null),b=P,w=m));return p!==null&&g.push(pp({start:p,end:u,loop:d,count:o,style:f})),g}function lu(i,t){let e=[],n=i.segments;for(let s=0;s<n.length;s++){let r=au(n[s],i.points,t);r.length&&e.push(...r)}return e}function Yb(i,t,e,n){let s=0,r=t-1;if(e&&!n)for(;s<t&&!i[s].skip;)s++;for(;s<t&&i[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&i[r%t].skip;)r--;return r%=t,{start:s,end:r}}function jb(i,t,e,n){let s=i.length,r=[],o=t,a=i[t],l;for(l=t+1;l<=e;++l){let c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:t%s,end:(l-1)%s,loop:n}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:n}),r}function Xp(i,t){let e=i.points,n=i.options.spanGaps,s=e.length;if(!s)return[];let r=!!i._loop,{start:o,end:a}=Yb(e,s,r,n);if(n===!0)return mp(i,[{start:o,end:a,loop:r}],e,t);let l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return mp(i,jb(e,o,l,c),e,t)}function mp(i,t,e,n){return!n||!n.setContext||!e?t:$b(i,t,e,n)}function $b(i,t,e,n){let s=i._chart.getContext(),r=gp(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=e.length,c=[],h=r,u=t[0].start,d=u;function f(g,_,p,m){let v=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=v;for(;e[_%l].skip;)_+=v;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:p,style:m}),h=m,u=_%l)}}for(let g of t){u=a?u:g.start;let _=e[u%l],p;for(d=u+1;d<=g.end;d++){let m=e[d%l];p=gp(n.setContext(hi(s,{type:"segment",p0:_,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),Zb(p,h)&&f(u,d-1,g.loop,h),_=m,h=p}u<d-1&&f(u,d-1,g.loop,h)}return c}function gp(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Zb(i,t){if(!t)return!1;let e=[],n=function(s,r){return jh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(t,n)}function bl(i,t,e){return i.options.clip?i[e]:t[e]}function Kb(i,t){let{xScale:e,yScale:n}=i;return e&&n?{left:bl(e,t,"left"),right:bl(e,t,"right"),top:bl(n,t,"top"),bottom:bl(n,t,"bottom")}:t}function cu(i,t){let e=t._clip;if(e.disabled)return!1;let n=Kb(t,i.chartArea);return{left:e.left===!1?0:n.left-(e.left===!0?0:e.left),right:e.right===!1?i.width:n.right+(e.right===!0?0:e.right),top:e.top===!1?0:n.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?i.height:n.bottom+(e.bottom===!0?0:e.bottom)}}var bu=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,s){let r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Wh.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;let r=n.items,o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,t,"progress")),r.length||(n.running=!1,this._notify(s,n,t,"complete"),n.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let n=e.items,s=n.length-1;for(;s>=0;--s)n[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},ui=new bu,qp="transparent",Jb={boolean(i,t,e){return e>.5?t:i},color(i,t,e){let n=$h(i||qp),s=n.valid&&$h(t||qp);return s&&s.valid?s.mix(n,e).hexString():t},number(i,t,e){return i+(t-i)*e}},Mu=class{constructor(t,e,n,s){let r=e[n];s=or([t.to,s,r,t.from]);let o=or([t.from,r,s]);this._active=!0,this._fn=t.fn||Jb[t.type||typeof o],this._easing=Ks[t.easing]||Ks.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);let s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=or([t.to,e,s,t.from]),this._from=or([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to,l;if(this._active=r!==a&&(o||e<n),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){let e=t?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][e]()}},Xl=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Xt(t))return;let e=Object.keys(pe.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{let r=t[s];if(!Xt(r))return;let o={};for(let a of e)o[a]=r[a];(ue(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(t,e){let n=e.options,s=tM(t,n);if(!s)return[];let r=this._createAnimations(s,n);return n.$shared&&Qb(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){let n=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now(),l;for(l=o.length-1;l>=0;--l){let c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}let h=e[c],u=r[c],d=n.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new Mu(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let n=this._createAnimations(t,e);if(n.length)return ui.add(this._chart,n),!0}};function Qb(i,t){let e=[],n=Object.keys(t);for(let s=0;s<n.length;s++){let r=i[n[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function tM(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Yp(i,t){let e=i&&i.options||{},n=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:n?r:s,end:n?s:r}}function eM(i,t,e){if(e===!1)return!1;let n=Yp(i,e),s=Yp(t,e);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function nM(i){let t,e,n,s;return Xt(i)?(t=i.top,e=i.right,n=i.bottom,s=i.left):t=e=n=s=i,{top:t,right:e,bottom:n,left:s,disabled:i===!1}}function qm(i,t){let e=[],n=i._getSortedDatasetMetas(t),s,r;for(s=0,r=n.length;s<r;++s)e.push(n[s].index);return e}function jp(i,t,e,n={}){let s=i.keys,r=n.mode==="single",o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,n.all)continue;break}c=i.values[l],be(c)&&(r||t===0||Tn(t)===Tn(c))&&(t+=c)}return!h&&!n.all?0:t}function iM(i,t){let{iScale:e,vScale:n}=t,s=e.axis==="x"?"x":"y",r=n.axis==="x"?"x":"y",o=Object.keys(i),a=new Array(o.length),l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[s]:h,[r]:i[h]};return a}function hu(i,t){let e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function sM(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function rM(i){let{min:t,max:e,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function oM(i,t,e){let n=i[t]||(i[t]={});return n[e]||(n[e]={})}function $p(i,t,e,n){for(let s of t.getMatchingVisibleMetas(n).reverse()){let r=i[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Zp(i,t){let{chart:e,_cachedMeta:n}=i,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,h=sM(r,o,n),u=t.length,d;for(let f=0;f<u;++f){let g=t[f],{[l]:_,[c]:p}=g,m=g._stacks||(g._stacks={});d=m[c]=oM(s,h,_),d[a]=p,d._top=$p(d,o,!0,n.type),d._bottom=$p(d,o,!1,n.type);let v=d._visualValues||(d._visualValues={});v[a]=p}}function uu(i,t){let e=i.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function aM(i,t){return hi(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function lM(i,t,e){return hi(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function co(i,t){let e=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){t=t||i._parsed;for(let s of t){let r=s._stacks;if(!r||r[n]===void 0||r[n][e]===void 0)return;delete r[n][e],r[n]._visualValues!==void 0&&r[n]._visualValues[e]!==void 0&&delete r[n]._visualValues[e]}}}var du=i=>i==="reset"||i==="none",Kp=(i,t)=>t?i:Object.assign({},i),cM=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:qm(e,!0),values:null},zi=(()=>{class i{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=hu(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&co(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,n=this._cachedMeta,s=this.getDataset(),r=(d,f,g,_)=>d==="x"?f:d==="r"?_:g,o=n.xAxisID=Ft(s.xAxisID,uu(e,"x")),a=n.yAxisID=Ft(s.yAxisID,uu(e,"y")),l=n.rAxisID=Ft(s.rAxisID,uu(e,"r")),c=n.indexAxis,h=n.iAxisID=r(c,o,a,l),u=n.vAxisID=r(c,a,o,l);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(h),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){let e=this._cachedMeta;this._data&&Hh(this._data,this),e._stacked&&co(e)}_dataCheck(){let e=this.getDataset(),n=e.data||(e.data=[]),s=this._data;if(Xt(n)){let r=this._cachedMeta;this._data=iM(n,r)}else if(s!==n){if(s){Hh(s,this);let r=this._cachedMeta;co(r),r._parsed=[]}n&&Object.isExtensible(n)&&Ap(n,this),this._syncList=[],this._data=n}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let n=this._cachedMeta,s=this.getDataset(),r=!1;this._dataCheck();let o=n._stacked;n._stacked=hu(n.vScale,n),n.stack!==s.stack&&(r=!0,co(n),n.stack=s.stack),this._resyncElements(e),(r||o!==n._stacked)&&(Zp(this,n._parsed),n._stacked=hu(n.vScale,n))}configure(){let e=this.chart.config,n=e.datasetScopeKeys(this._type),s=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){let{_cachedMeta:s,_data:r}=this,{iScale:o,_stacked:a}=s,l=o.axis,c=e===0&&n===r.length?!0:s._sorted,h=e>0&&s._parsed[e-1],u,d,f;if(this._parsing===!1)s._parsed=r,s._sorted=!0,f=r;else{ue(r[e])?f=this.parseArrayData(s,r,e,n):Xt(r[e])?f=this.parseObjectData(s,r,e,n):f=this.parsePrimitiveData(s,r,e,n);let g=()=>d[l]===null||h&&d[l]<h[l];for(u=0;u<n;++u)s._parsed[u+e]=d=f[u],c&&(g()&&(c=!1),h=d);s._sorted=c}a&&Zp(this,f)}parsePrimitiveData(e,n,s,r){let{iScale:o,vScale:a}=e,l=o.axis,c=a.axis,h=o.getLabels(),u=o===a,d=new Array(r),f,g,_;for(f=0,g=r;f<g;++f)_=f+s,d[f]={[l]:u||o.parse(h[_],_),[c]:a.parse(n[_],_)};return d}parseArrayData(e,n,s,r){let{xScale:o,yScale:a}=e,l=new Array(r),c,h,u,d;for(c=0,h=r;c<h;++c)u=c+s,d=n[u],l[c]={x:o.parse(d[0],u),y:a.parse(d[1],u)};return l}parseObjectData(e,n,s,r){let{xScale:o,yScale:a}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,h=new Array(r),u,d,f,g;for(u=0,d=r;u<d;++u)f=u+s,g=n[f],h[u]={x:o.parse(ci(g,l),f),y:a.parse(ci(g,c),f)};return h}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,s){let r=this.chart,o=this._cachedMeta,a=n[e.axis],l={keys:qm(r,!0),values:n._stacks[e.axis]._visualValues};return jp(l,a,o.index,{mode:s})}updateRangeFromParsed(e,n,s,r){let o=s[n.axis],a=o===null?NaN:o,l=r&&s._stacks[n.axis];r&&l&&(r.values=l,a=jp(r,o,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,n){let s=this._cachedMeta,r=s._parsed,o=s._sorted&&e===s.iScale,a=r.length,l=this._getOtherScale(e),c=cM(n,s,this.chart),h={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=rM(l),f,g;function _(){g=r[f];let p=g[l.axis];return!be(g[e.axis])||u>p||d<p}for(f=0;f<a&&!(!_()&&(this.updateRangeFromParsed(h,e,g,c),o));++f);if(o){for(f=a-1;f>=0;--f)if(!_()){this.updateRangeFromParsed(h,e,g,c);break}}return h}getAllParsedValues(e){let n=this._cachedMeta._parsed,s=[],r,o,a;for(r=0,o=n.length;r<o;++r)a=n[r][e.axis],be(a)&&s.push(a);return s}getMaxOverflow(){return!1}getLabelAndValue(e){let n=this._cachedMeta,s=n.iScale,r=n.vScale,o=this.getParsed(e);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:r?""+r.getLabelForValue(o[r.axis]):""}}_update(e){let n=this._cachedMeta;this.update(e||"default"),n._clip=nM(Ft(this.options.clip,eM(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,n=this.chart,s=this._cachedMeta,r=s.data||[],o=n.chartArea,a=[],l=this._drawStart||0,c=this._drawCount||r.length-l,h=this.options.drawActiveElementsOnTop,u;for(s.dataset&&s.dataset.draw(e,o,l,c),u=l;u<l+c;++u){let d=r[u];d.hidden||(d.active&&h?a.push(d):d.draw(e,o))}for(u=0;u<a.length;++u)a[u].draw(e,o)}getStyle(e,n){let s=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(e||0,s)}getContext(e,n,s){let r=this.getDataset(),o;if(e>=0&&e<this._cachedMeta.data.length){let a=this._cachedMeta.data[e];o=a.$context||(a.$context=lM(this.getContext(),e,a)),o.parsed=this.getParsed(e),o.raw=r.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=aM(this.chart.getContext(),this.index)),o.dataset=r,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=s,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",s){let r=n==="active",o=this._cachedDataOpts,a=e+"-"+n,l=o[a],c=this.enableOptionSharing&&er(s);if(l)return Kp(l,c);let h=this.chart.config,u=h.datasetElementScopeKeys(this._type,e),d=r?[`${e}Hover`,"hover",e,""]:[e,""],f=h.getOptionScopes(this.getDataset(),u),g=Object.keys(pe.elements[e]),_=()=>this.getContext(s,r,n),p=h.resolveNamedOptions(f,g,_,d);return p.$shared&&(p.$shared=c,o[a]=Object.freeze(Kp(p,c))),p}_resolveAnimations(e,n,s){let r=this.chart,o=this._cachedDataOpts,a=`animation-${n}`,l=o[a];if(l)return l;let c;if(r.options.animation!==!1){let u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),d);c=u.createResolver(f,this.getContext(e,s,n))}let h=new Xl(r,c&&c.animations);return c&&c._cacheable&&(o[a]=Object.freeze(h)),h}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||du(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){let s=this.resolveDataElementOptions(e,n),r=this._sharedOptions,o=this.getSharedOptions(s),a=this.includeOptions(n,o)||o!==r;return this.updateSharedOptions(o,n,s),{sharedOptions:o,includeOptions:a}}updateElement(e,n,s,r){du(r)?Object.assign(e,s):this._resolveAnimations(n,r).update(e,s)}updateSharedOptions(e,n,s){e&&!du(n)&&this._resolveAnimations(void 0,n).update(e,s)}_setStyle(e,n,s,r){e.active=r;let o=this.getStyle(n,r);this._resolveAnimations(n,s,r).update(e,{options:!r&&this.getSharedOptions(o)||o})}removeHoverStyle(e,n,s){this._setStyle(e,s,"active",!1)}setHoverStyle(e,n,s){this._setStyle(e,s,"active",!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){let n=this._data,s=this._cachedMeta.data;for(let[l,c,h]of this._syncList)this[l](c,h);this._syncList=[];let r=s.length,o=n.length,a=Math.min(o,r);a&&this.parse(0,a),o>r?this._insertElements(r,o-r,e):o<r&&this._removeElements(o,r-o)}_insertElements(e,n,s=!0){let r=this._cachedMeta,o=r.data,a=e+n,l,c=h=>{for(h.length+=n,l=h.length-1;l>=a;l--)h[l]=h[l-n]};for(c(o),l=e;l<a;++l)o[l]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(e,n),s&&this.updateElements(o,e,n,"reset")}updateElements(e,n,s,r){}_removeElements(e,n){let s=this._cachedMeta;if(this._parsing){let r=s._parsed.splice(e,n);s._stacked&&co(s,r)}s.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[n,s,r]=e;this[n](s,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);let s=arguments.length-2;s&&this._sync(["_insertElements",e,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}return i})();function hM(i,t){if(!i._cache.$bar){let e=i.getMatchingVisibleMetas(t),n=[];for(let s=0,r=e.length;s<r;s++)n=n.concat(e[s].controller.getAllParsedValues(i));i._cache.$bar=Gh(n.sort((s,r)=>s-r))}return i._cache.$bar}function uM(i){let t=i.iScale,e=hM(t,i.type),n=t._length,s,r,o,a,l=()=>{o===32767||o===-32768||(er(a)&&(n=Math.min(n,Math.abs(o-a)||n)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return n}function dM(i,t,e,n){let s=e.barThickness,r,o;return Gt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*n,o=1),{chunk:r/n,ratio:o,start:t.pixels[i]-r/2}}function fM(i,t,e,n){let s=t.pixels,r=s[i],o=i>0?s[i-1]:null,a=i<s.length-1?s[i+1]:null,l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);let c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/n,ratio:e.barPercentage,start:c}}function pM(i,t,e,n){let s=e.parse(i[0],n),r=e.parse(i[1],n),o=Math.min(s,r),a=Math.max(s,r),l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function Ym(i,t,e,n){return ue(i)?pM(i,t,e,n):t[e.axis]=e.parse(i,n),t}function Jp(i,t,e,n){let s=i.iScale,r=i.vScale,o=s.getLabels(),a=s===r,l=[],c,h,u,d;for(c=e,h=e+n;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(o[c],c),l.push(Ym(d,u,r,c));return l}function fu(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function mM(i,t,e){return i!==0?Tn(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function gM(i){let t,e,n,s,r;return i.horizontal?(t=i.base>i.x,e="left",n="right"):(t=i.base<i.y,e="bottom",n="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:n,reverse:t,top:s,bottom:r}}function _M(i,t,e,n){let s=t.borderSkipped,r={};if(!s){i.borderSkipped=r;return}if(s===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:a,reverse:l,top:c,bottom:h}=gM(i);s==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===n?s=c:(e._bottom||0)===n?s=h:(r[Qp(h,o,a,l)]=!0,s=c)),r[Qp(s,o,a,l)]=!0,i.borderSkipped=r}function Qp(i,t,e,n){return n?(i=xM(i,t,e),i=tm(i,e,t)):i=tm(i,t,e),i}function xM(i,t,e){return i===t?e:i===e?t:i}function tm(i,t,e){return i==="start"?t:i==="end"?e:i}function yM(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}var vM=(()=>{class i extends zi{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(e,n,s,r){return Jp(e,n,s,r)}parseArrayData(e,n,s,r){return Jp(e,n,s,r)}parseObjectData(e,n,s,r){let{iScale:o,vScale:a}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,h=o.axis==="x"?l:c,u=a.axis==="x"?l:c,d=[],f,g,_,p;for(f=s,g=s+r;f<g;++f)p=n[f],_={},_[o.axis]=o.parse(ci(p,h),f),d.push(Ym(ci(p,u),_,a,f));return d}updateRangeFromParsed(e,n,s,r){super.updateRangeFromParsed(e,n,s,r);let o=s._custom;o&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,o.min),e.max=Math.max(e.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let n=this._cachedMeta,{iScale:s,vScale:r}=n,o=this.getParsed(e),a=o._custom,l=fu(a)?"["+a.start+", "+a.end+"]":""+r.getLabelForValue(o[r.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,s,r){let o=r==="reset",{index:a,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),h=l.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,r);for(let g=n;g<n+s;g++){let _=this.getParsed(g),p=o||Gt(_[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),m=this._calculateBarIndexPixels(g,u),v=(_._stacks||{})[l.axis],w={horizontal:h,base:p.base,enableBorderRadius:!v||fu(_._custom)||a===v._top||a===v._bottom,x:h?p.head:m.center,y:h?m.center:p.head,height:h?m.size:Math.abs(p.size),width:h?Math.abs(p.size):m.size};f&&(w.options=d||this.resolveDataElementOptions(g,e[g].active?"active":r));let y=w.options||e[g].options;_M(w,y,v,a),yM(w,y,u.ratio),this.updateElement(e[g],g,w,r)}}_getStacks(e,n){let{iScale:s}=this._cachedMeta,r=s.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),o=s.options.stacked,a=[],l=this._cachedMeta.controller.getParsed(n),c=l&&l[s.axis],h=u=>{let d=u._parsed.find(g=>g[s.axis]===c),f=d&&d[u.vScale.axis];if(Gt(f)||isNaN(f))return!0};for(let u of r)if(!(n!==void 0&&h(u))&&((o===!1||a.indexOf(u.stack)===-1||o===void 0&&u.stack===void 0)&&a.push(u.stack),u.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(s=>e[s].axis===n).shift()}_getAxis(){let e={},n=this.getFirstScaleIdForIndexAxis();for(let s of this.chart.data.datasets)e[Ft(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,s){let r=this._getStacks(e,s),o=n!==void 0?r.indexOf(n):-1;return o===-1?r.length-1:o}_getRuler(){let e=this.options,n=this._cachedMeta,s=n.iScale,r=[],o,a;for(o=0,a=n.data.length;o<a;++o)r.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));let l=e.barThickness;return{min:l||uM(n),pixels:r,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:e.grouped,ratio:l?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:n,_stacked:s,index:r},options:{base:o,minBarLength:a}}=this,l=o||0,c=this.getParsed(e),h=c._custom,u=fu(h),d=c[n.axis],f=0,g=s?this.applyStack(n,c,s):d,_,p;g!==d&&(f=g-d,g=d),u&&(d=h.barStart,g=h.barEnd-h.barStart,d!==0&&Tn(d)!==Tn(h.barEnd)&&(f=0),f+=d);let m=!Gt(o)&&!u?o:f,v=n.getPixelForValue(m);if(this.chart.getDataVisibility(e)?_=n.getPixelForValue(f+g):_=v,p=_-v,Math.abs(p)<a){p=mM(p,n,l)*a,d===l&&(v-=p/2);let w=n.getPixelForDecimal(0),y=n.getPixelForDecimal(1),C=Math.min(w,y),E=Math.max(w,y);v=Math.max(Math.min(v,E),C),_=v+p,s&&!u&&(c._stacks[n.axis]._visualValues[r]=n.getValueForPixel(_)-n.getValueForPixel(v))}if(v===n.getPixelForValue(l)){let w=Tn(p)*n.getLineWidthForValue(l)/2;v+=w,p-=w}return{size:p,base:v,head:_,center:_+p/2}}_calculateBarIndexPixels(e,n){let s=n.scale,r=this.options,o=r.skipNull,a=Ft(r.maxBarThickness,1/0),l,c,h=this._getAxisCount();if(n.grouped){let u=o?this._getStackCount(e):n.stackCount,d=r.barThickness==="flex"?fM(e,n,r,u*h):dM(e,n,r,u*h),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(Ft(f,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,o?e:void 0)+g;l=d.start+d.chunk*_+d.chunk/2,c=Math.min(a,d.chunk*d.ratio)}else l=s.getPixelForValue(this.getParsed(e)[s.axis],e),c=Math.min(a,n.min*n.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){let e=this._cachedMeta,n=e.vScale,s=e.data,r=s.length,o=0;for(;o<r;++o)this.getParsed(o)[n.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}return i})(),bM=(()=>{class i extends zi{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,n,s,r){let o=super.parsePrimitiveData(e,n,s,r);for(let a=0;a<o.length;a++)o[a]._custom=this.resolveDataElementOptions(a+s).radius;return o}parseArrayData(e,n,s,r){let o=super.parseArrayData(e,n,s,r);for(let a=0;a<o.length;a++){let l=n[s+a];o[a]._custom=Ft(l[2],this.resolveDataElementOptions(a+s).radius)}return o}parseObjectData(e,n,s,r){let o=super.parseObjectData(e,n,s,r);for(let a=0;a<o.length;a++){let l=n[s+a];o[a]._custom=Ft(l&&l.r&&+l.r,this.resolveDataElementOptions(a+s).radius)}return o}getMaxOverflow(){let e=this._cachedMeta.data,n=0;for(let s=e.length-1;s>=0;--s)n=Math.max(n,e[s].size(this.resolveDataElementOptions(s))/2);return n>0&&n}getLabelAndValue(e){let n=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:o}=n,a=this.getParsed(e),l=r.getLabelForValue(a.x),c=o.getLabelForValue(a.y),h=a._custom;return{label:s[e]||"",value:"("+l+", "+c+(h?", "+h:"")+")"}}update(e){let n=this._cachedMeta.data;this.updateElements(n,0,n.length,e)}updateElements(e,n,s,r){let o=r==="reset",{iScale:a,vScale:l}=this._cachedMeta,{sharedOptions:c,includeOptions:h}=this._getSharedOptions(n,r),u=a.axis,d=l.axis;for(let f=n;f<n+s;f++){let g=e[f],_=!o&&this.getParsed(f),p={},m=p[u]=o?a.getPixelForDecimal(.5):a.getPixelForValue(_[u]),v=p[d]=o?l.getBasePixel():l.getPixelForValue(_[d]);p.skip=isNaN(m)||isNaN(v),h&&(p.options=c||this.resolveDataElementOptions(f,g.active?"active":r),o&&(p.options.radius=0)),this.updateElement(g,f,p,r)}}resolveDataElementOptions(e,n){let s=this.getParsed(e),r=super.resolveDataElementOptions(e,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let o=r.radius;return n!=="active"&&(r.radius=0),r.radius+=Ft(s&&s._custom,o),r}}return i})();function MM(i,t,e){let n=1,s=1,r=0,o=0;if(t<de){let a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(w,y,C)=>ir(w,a,l,!0)?1:Math.max(y,y*e,C,C*e),g=(w,y,C)=>ir(w,a,l,!0)?-1:Math.min(y,y*e,C,C*e),_=f(0,c,u),p=f(we,h,d),m=g(Jt,c,u),v=g(Jt+we,h,d);n=(_-m)/2,s=(p-v)/2,r=-(_+m)/2,o=-(p+v)/2}return{ratioX:n,ratioY:s,offsetX:r,offsetY:o}}var Hu=(()=>{class i extends zi{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let n=e.data;if(n.labels.length&&n.datasets.length){let{labels:{pointStyle:s,color:r}}=e.legend.options;return n.labels.map((o,a)=>{let c=e.getDatasetMeta(0).controller.getStyle(a);return{text:o,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!e.getDataVisibility(a),index:a}})}return[]}},onClick(e,n,s){s.chart.toggleDataVisibility(n.index),s.chart.update()}}}};constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){let s=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=s;else{let o=c=>+s[c];if(Xt(s[e])){let{key:c="value"}=this._parsing;o=h=>+ci(s[h],c)}let a,l;for(a=e,l=e+n;a<l;++a)r._parsed[a]=o(a)}}_getRotation(){return xn(this.options.rotation-90)}_getCircumference(){return xn(this.options.circumference)}_getRotationExtents(){let e=de,n=-de;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){let r=this.chart.getDatasetMeta(s).controller,o=r._getRotation(),a=r._getCircumference();e=Math.min(e,o),n=Math.max(n,o+a)}return{rotation:e,circumference:n-e}}update(e){let n=this.chart,{chartArea:s}=n,r=this._cachedMeta,o=r.data,a=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,l=Math.max((Math.min(s.width,s.height)-a)/2,0),c=Math.min(xp(this.options.cutout,l),1),h=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:_,offsetY:p}=MM(d,u,c),m=(s.width-a)/f,v=(s.height-a)/g,w=Math.max(Math.min(m,v)/2,0),y=Uh(this.options.radius,w),C=Math.max(y*c,0),E=(y-C)/this._getVisibleDatasetWeightTotal();this.offsetX=_*y,this.offsetY=p*y,r.total=this.calculateTotal(),this.outerRadius=y-E*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-E*h,0),this.updateElements(o,0,o.length,e)}_circumference(e,n){let s=this.options,r=this._cachedMeta,o=this._getCircumference();return n&&s.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*o/de)}updateElements(e,n,s,r){let o=r==="reset",a=this.chart,l=a.chartArea,h=a.options.animation,u=(l.left+l.right)/2,d=(l.top+l.bottom)/2,f=o&&h.animateScale,g=f?0:this.innerRadius,_=f?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(n,r),v=this._getRotation(),w;for(w=0;w<n;++w)v+=this._circumference(w,o);for(w=n;w<n+s;++w){let y=this._circumference(w,o),C=e[w],E={x:u+this.offsetX,y:d+this.offsetY,startAngle:v,endAngle:v+y,circumference:y,outerRadius:_,innerRadius:g};m&&(E.options=p||this.resolveDataElementOptions(w,C.active?"active":r)),v+=y,this.updateElement(C,w,E,r)}}calculateTotal(){let e=this._cachedMeta,n=e.data,s=0,r;for(r=0;r<n.length;r++){let o=e._parsed[r];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(e){let n=this._cachedMeta.total;return n>0&&!isNaN(e)?de*(Math.abs(e)/n):0}getLabelAndValue(e){let n=this._cachedMeta,s=this.chart,r=s.data.labels||[],o=sr(n._parsed[e],s.options.locale);return{label:r[e]||"",value:o}}getMaxBorderWidth(e){let n=0,s=this.chart,r,o,a,l,c;if(!e){for(r=0,o=s.data.datasets.length;r<o;++r)if(s.isDatasetVisible(r)){a=s.getDatasetMeta(r),e=a.data,l=a.controller;break}}if(!e)return 0;for(r=0,o=e.length;r<o;++r)c=l.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let s=0,r=e.length;s<r;++s){let o=this.resolveDataElementOptions(s);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let s=0;s<e;++s)this.chart.isDatasetVisible(s)&&(n+=this._getRingWeight(s));return n}_getRingWeight(e){return Math.max(Ft(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}return i})(),SM=(()=>{class i extends zi{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let n=this._cachedMeta,{dataset:s,data:r=[],_dataset:o}=n,a=this.chart._animationsDisabled,{start:l,count:c}=qh(n,r,a);this._drawStart=l,this._drawCount=c,Yh(n)&&(l=0,c=r.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=r;let h=this.resolveDatasetElementOptions(e);this.options.showLine||(h.borderWidth=0),h.segment=this.options.segment,this.updateElement(s,void 0,{animated:!a,options:h},e),this.updateElements(r,l,c,e)}updateElements(e,n,s,r){let o=r==="reset",{iScale:a,vScale:l,_stacked:c,_dataset:h}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,r),f=a.axis,g=l.axis,{spanGaps:_,segment:p}=this.options,m=ds(_)?_:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||o||r==="none",w=n+s,y=e.length,C=n>0&&this.getParsed(n-1);for(let E=0;E<y;++E){let A=e[E],P=v?A:{};if(E<n||E>=w){P.skip=!0;continue}let b=this.getParsed(E),S=Gt(b[g]),R=P[f]=a.getPixelForValue(b[f],E),F=P[g]=o||S?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,b,c):b[g],E);P.skip=isNaN(R)||isNaN(F)||S,P.stop=E>0&&Math.abs(b[f]-C[f])>m,p&&(P.parsed=b,P.raw=h.data[E]),d&&(P.options=u||this.resolveDataElementOptions(E,A.active?"active":r)),v||this.updateElement(A,E,P,r),C=b}}getMaxOverflow(){let e=this._cachedMeta,n=e.dataset,s=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return s;let o=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(s,o,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}return i})(),jm=(()=>{class i extends zi{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let n=e.data;if(n.labels.length&&n.datasets.length){let{labels:{pointStyle:s,color:r}}=e.legend.options;return n.labels.map((o,a)=>{let c=e.getDatasetMeta(0).controller.getStyle(a);return{text:o,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!e.getDataVisibility(a),index:a}})}return[]}},onClick(e,n,s){s.chart.toggleDataVisibility(n.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,n){super(e,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let n=this._cachedMeta,s=this.chart,r=s.data.labels||[],o=sr(n._parsed[e].r,s.options.locale);return{label:r[e]||"",value:o}}parseObjectData(e,n,s,r){return nu.bind(this)(e,n,s,r)}update(e){let n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,e)}getMinMax(){let e=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((s,r)=>{let o=this.getParsed(r).r;!isNaN(o)&&this.chart.getDataVisibility(r)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){let e=this.chart,n=e.chartArea,s=e.options,r=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(r/2,0),a=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),l=(o-a)/e.getVisibleDatasetCount();this.outerRadius=o-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(e,n,s,r){let o=r==="reset",a=this.chart,c=a.options.animation,h=this._cachedMeta.rScale,u=h.xCenter,d=h.yCenter,f=h.getIndexAngle(0)-.5*Jt,g=f,_,p=360/this.countVisibleElements();for(_=0;_<n;++_)g+=this._computeAngle(_,r,p);for(_=n;_<n+s;_++){let m=e[_],v=g,w=g+this._computeAngle(_,r,p),y=a.getDataVisibility(_)?h.getDistanceFromCenterForValue(this.getParsed(_).r):0;g=w,o&&(c.animateScale&&(y=0),c.animateRotate&&(v=w=f));let C={x:u,y:d,innerRadius:0,outerRadius:y,startAngle:v,endAngle:w,options:this.resolveDataElementOptions(_,m.active?"active":r)};this.updateElement(m,_,C,r)}}countVisibleElements(){let e=this._cachedMeta,n=0;return e.data.forEach((s,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(e,n,s){return this.chart.getDataVisibility(e)?xn(this.resolveDataElementOptions(e,n).angle||s):0}}return i})(),wM=(()=>{class i extends Hu{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}return i})(),CM=(()=>{class i extends zi{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(e){let n=this._cachedMeta.vScale,s=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(s[n.axis])}}parseObjectData(e,n,s,r){return nu.bind(this)(e,n,s,r)}update(e){let n=this._cachedMeta,s=n.dataset,r=n.data||[],o=n.iScale.getLabels();if(s.points=r,e!=="resize"){let a=this.resolveDatasetElementOptions(e);this.options.showLine||(a.borderWidth=0);let l={_loop:!0,_fullLoop:o.length===r.length,options:a};this.updateElement(s,void 0,l,e)}this.updateElements(r,0,r.length,e)}updateElements(e,n,s,r){let o=this._cachedMeta.rScale,a=r==="reset";for(let l=n;l<n+s;l++){let c=e[l],h=this.resolveDataElementOptions(l,c.active?"active":r),u=o.getPointPositionForValue(l,this.getParsed(l).r),d=a?o.xCenter:u.x,f=a?o.yCenter:u.y,g={x:d,y:f,angle:u.angle,skip:isNaN(d)||isNaN(f),options:h};this.updateElement(c,l,g,r)}}}return i})(),EM=(()=>{class i extends zi{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(e){let n=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:o}=n,a=this.getParsed(e),l=r.getLabelForValue(a.x),c=o.getLabelForValue(a.y);return{label:s[e]||"",value:"("+l+", "+c+")"}}update(e){let n=this._cachedMeta,{data:s=[]}=n,r=this.chart._animationsDisabled,{start:o,count:a}=qh(n,s,r);if(this._drawStart=o,this._drawCount=a,Yh(n)&&(o=0,a=s.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:l,_dataset:c}=n;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!c._decimated,l.points=s;let h=this.resolveDatasetElementOptions(e);h.segment=this.options.segment,this.updateElement(l,void 0,{animated:!r,options:h},e)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(s,o,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,n,s,r){let o=r==="reset",{iScale:a,vScale:l,_stacked:c,_dataset:h}=this._cachedMeta,u=this.resolveDataElementOptions(n,r),d=this.getSharedOptions(u),f=this.includeOptions(r,d),g=a.axis,_=l.axis,{spanGaps:p,segment:m}=this.options,v=ds(p)?p:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||o||r==="none",y=n>0&&this.getParsed(n-1);for(let C=n;C<n+s;++C){let E=e[C],A=this.getParsed(C),P=w?E:{},b=Gt(A[_]),S=P[g]=a.getPixelForValue(A[g],C),R=P[_]=o||b?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,A,c):A[_],C);P.skip=isNaN(S)||isNaN(R)||b,P.stop=C>0&&Math.abs(A[g]-y[g])>v,m&&(P.parsed=A,P.raw=h.data[C]),f&&(P.options=d||this.resolveDataElementOptions(C,E.active?"active":r)),w||this.updateElement(E,C,P,r),y=A}this.updateSharedOptions(d,r,u)}getMaxOverflow(){let e=this._cachedMeta,n=e.data||[];if(!this.options.showLine){let l=0;for(let c=n.length-1;c>=0;--c)l=Math.max(l,n[c].size(this.resolveDataElementOptions(c))/2);return l>0&&l}let s=e.dataset,r=s.options&&s.options.borderWidth||0;if(!n.length)return r;let o=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,o,a)/2}}return i})(),AM=Object.freeze({__proto__:null,BarController:vM,BubbleController:bM,DoughnutController:Hu,LineController:SM,PieController:wM,PolarAreaController:jm,RadarController:CM,ScatterController:EM});function ps(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Su=class i{static override(t){Object.assign(i.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return ps()}parse(){return ps()}format(){return ps()}add(){return ps()}diff(){return ps()}startOf(){return ps()}endOf(){return ps()}},TM={_date:Su};function PM(i,t,e,n){let{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale,l=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){let c=a._reversePixels?wp:kn;if(n){if(s._sharedOptions){let h=r[0],u=typeof h.getRange=="function"&&h.getRange(t);if(u){let d=c(r,t,e-u),f=c(r,t,e+u);return{lo:d.lo,hi:f.hi}}}}else{let h=c(r,t,e);if(l){let{vScale:u}=s._cachedMeta,{_parsed:d}=i,f=d.slice(0,h.lo+1).reverse().findIndex(_=>!Gt(_[u.axis]));h.lo-=Math.max(0,f);let g=d.slice(h.hi).findIndex(_=>!Gt(_[u.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:r.length-1}}function vo(i,t,e,n,s){let r=i.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){let{index:c,data:h}=r[a],{lo:u,hi:d}=PM(r[a],t,o,s);for(let f=u;f<=d;++f){let g=h[f];g.skip||n(g,c,f)}}}function RM(i){let t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(n,s){let r=t?Math.abs(n.x-s.x):0,o=e?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function pu(i,t,e,n,s){let r=[];return!s&&!i.isPointInArea(t)||vo(i,e,t,function(a,l,c){!s&&!Bn(a,i.chartArea,0)||a.inRange(t.x,t.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function IM(i,t,e,n){let s=[];function r(o,a,l){let{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],n),{angle:u}=zh(o,{x:t.x,y:t.y});ir(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return vo(i,e,t,r),s}function DM(i,t,e,n,s,r){let o=[],a=RM(e),l=Number.POSITIVE_INFINITY;function c(h,u,d){let f=h.inRange(t.x,t.y,s);if(n&&!f)return;let g=h.getCenterPoint(s);if(!(!!r||i.isPointInArea(g))&&!f)return;let p=a(t,g);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return vo(i,e,t,c),o}function mu(i,t,e,n,s,r){return!r&&!i.isPointInArea(t)?[]:e==="r"&&!n?IM(i,t,e,s):DM(i,t,e,n,s,r)}function em(i,t,e,n,s){let r=[],o=e==="x"?"inXRange":"inYRange",a=!1;return vo(i,e,t,(l,c,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),n&&!a?[]:r}var OM={evaluateInteractionItems:vo,modes:{index(i,t,e,n){let s=Bi(t,i),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?pu(i,s,r,n,o):mu(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{let h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,n){let s=Bi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1,a=e.intersect?pu(i,s,r,n,o):mu(i,s,r,!1,n,o);if(a.length>0){let l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,n){let s=Bi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return pu(i,s,r,n,o)},nearest(i,t,e,n){let s=Bi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return mu(i,s,r,e.intersect,n,o)},x(i,t,e,n){let s=Bi(t,i);return em(i,s,"x",e.intersect,n)},y(i,t,e,n){let s=Bi(t,i);return em(i,s,"y",e.intersect,n)}}},$m=["left","top","right","bottom"];function ho(i,t){return i.filter(e=>e.pos===t)}function nm(i,t){return i.filter(e=>$m.indexOf(e.pos)===-1&&e.box.axis===t)}function uo(i,t){return i.sort((e,n)=>{let s=t?n:e,r=t?e:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function FM(i){let t=[],e,n,s,r,o,a;for(e=0,n=(i||[]).length;e<n;++e)s=i[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function LM(i){let t={};for(let e of i){let{stack:n,pos:s,stackWeight:r}=e;if(!n||!$m.includes(s))continue;let o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function UM(i,t){let e=LM(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=t,r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];let{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*n:l&&t.availableWidth,a.height=s):(a.width=n,a.height=h?h*s:l&&t.availableHeight)}return e}function NM(i){let t=FM(i),e=uo(t.filter(c=>c.box.fullSize),!0),n=uo(ho(t,"left"),!0),s=uo(ho(t,"right")),r=uo(ho(t,"top"),!0),o=uo(ho(t,"bottom")),a=nm(t,"x"),l=nm(t,"y");return{fullSize:e,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:ho(t,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function im(i,t,e,n){return Math.max(i[e],t[e])+Math.max(i[n],t[n])}function Zm(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function kM(i,t,e,n){let{pos:s,box:r}=e,o=i.maxPadding;if(!Xt(s)){e.size&&(i[s]-=e.size);let u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,i[s]+=e.size}r.getPadding&&Zm(o,r.getPadding());let a=Math.max(0,t.outerWidth-im(o,i,"left","right")),l=Math.max(0,t.outerHeight-im(o,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function BM(i){let t=i.maxPadding;function e(n){let s=Math.max(t[n]-i[n],0);return i[n]+=s,s}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function VM(i,t){let e=t.maxPadding;function n(s){let r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return n(i?["left","right"]:["top","bottom"])}function mo(i,t,e,n){let s=[],r,o,a,l,c,h;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||t.w,a.height||t.h,VM(a.horizontal,t));let{same:u,other:d}=kM(t,e,a,n);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&mo(s,t,e,n)||h}function Nl(i,t,e,n,s){i.top=e,i.left=t,i.right=t+n,i.bottom=e+s,i.width=n,i.height=s}function sm(i,t,e,n){let s=e.padding,{x:r,y:o}=t;for(let a of i){let l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){let u=t.w*h,d=c.size||l.height;er(c.start)&&(o=c.start),l.fullSize?Nl(l,s.left,o,e.outerWidth-s.right-s.left,d):Nl(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{let u=t.h*h,d=c.size||l.width;er(c.start)&&(r=c.start),l.fullSize?Nl(l,r,s.top,d,e.outerHeight-s.bottom-s.top):Nl(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var qe={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){let e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,n){if(!i)return;let s=Ve(i.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=NM(i.boxes),l=a.vertical,c=a.horizontal;re(i.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});let h=l.reduce((_,p)=>p.box.options&&p.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Zm(d,Ve(n));let f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=UM(l.concat(c),u);mo(a.fullSize,f,u,g),mo(l,f,u,g),mo(c,f,u,g)&&mo(l,f,u,g),BM(f),sm(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,sm(a.rightAndBottom,f,u,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},re(a.chartArea,_=>{let p=_.box;Object.assign(p,i.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}},ql=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,s){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):n)}}isAttached(t){return!0}updateConfig(t){}},wu=class extends ql{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},Gl="$chartjs",zM={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},rm=i=>i===null||i==="";function HM(i,t){let e=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[Gl]={initial:{height:n,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",rm(s)){let r=su(i,"width");r!==void 0&&(i.width=r)}if(rm(n))if(i.style.height==="")i.height=i.width/(t||2);else{let r=su(i,"height");r!==void 0&&(i.height=r)}return i}var Km=zp?{passive:!0}:!1;function GM(i,t,e){i&&i.addEventListener(t,e,Km)}function WM(i,t,e){i&&i.canvas&&i.canvas.removeEventListener(t,e,Km)}function XM(i,t){let e=zM[i.type]||i.type,{x:n,y:s}=Bi(i,t);return{type:e,chart:t,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function Yl(i,t){for(let e of i)if(e===t||e.contains(t))return!0}function qM(i,t,e){let n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(let a of r)o=o||Yl(a.addedNodes,n),o=o&&!Yl(a.removedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function YM(i,t,e){let n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(let a of r)o=o||Yl(a.removedNodes,n),o=o&&!Yl(a.addedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}var _o=new Map,om=0;function Jm(){let i=window.devicePixelRatio;i!==om&&(om=i,_o.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function jM(i,t){_o.size||window.addEventListener("resize",Jm),_o.set(i,t)}function $M(i){_o.delete(i),_o.size||window.removeEventListener("resize",Jm)}function ZM(i,t,e){let n=i.canvas,s=n&&Ll(n);if(!s)return;let r=Xh((a,l)=>{let c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{let l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),jM(i,r),o}function gu(i,t,e){e&&e.disconnect(),t==="resize"&&$M(i)}function KM(i,t,e){let n=i.canvas,s=Xh(r=>{i.ctx!==null&&e(XM(r,i))},i);return GM(n,t,s),s}var Cu=class extends ql{acquireContext(t,e){let n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(HM(t,e),n):null}releaseContext(t){let e=t.canvas;if(!e[Gl])return!1;let n=e[Gl].initial;["height","width"].forEach(r=>{let o=n[r];Gt(o)?e.removeAttribute(r):e.setAttribute(r,o)});let s=n.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Gl],!0}addEventListener(t,e,n){this.removeEventListener(t,e);let s=t.$proxies||(t.$proxies={}),o={attach:qM,detach:YM,resize:ZM}[e]||KM;s[e]=o(t,e,n)}removeEventListener(t,e){let n=t.$proxies||(t.$proxies={}),s=n[e];if(!s)return;({attach:gu,detach:gu,resize:gu}[e]||WM)(t,e,s),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return Vp(t,e,n,s)}isAttached(t){let e=t&&Ll(t);return!!(e&&e.isConnected)}};function JM(i){return!Fl()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?wu:Cu}var Pn=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){let{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return ds(this.x)&&ds(this.y)}getProps(t,e){let n=this.$animations;if(!e||!n)return this;let s={};return t.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}};function QM(i,t){let e=i.options.ticks,n=tS(i),s=Math.min(e.maxTicksLimit||n,n),r=e.major.enabled?nS(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return iS(t,c,r,o/s),c;let h=eS(r,t,s);if(o>0){let u,d,f=o>1?Math.round((l-a)/(o-1)):null;for(kl(t,c,h,Gt(f)?0:a-f,a),u=0,d=o-1;u<d;u++)kl(t,c,h,r[u],r[u+1]);return kl(t,c,h,l,Gt(f)?t.length:l+f),c}return kl(t,c,h),c}function tS(i){let t=i.options.offset,e=i._tickSize(),n=i._length/e+(t?0:1),s=i._maxLength/e;return Math.floor(Math.min(n,s))}function eS(i,t,e){let n=sS(i),s=t.length/e;if(!n)return Math.max(s,1);let r=bp(n);for(let o=0,a=r.length-1;o<a;o++){let l=r[o];if(l>s)return l}return Math.max(s,1)}function nS(i){let t=[],e,n;for(e=0,n=i.length;e<n;e++)i[e].major&&t.push(e);return t}function iS(i,t,e,n){let s=0,r=e[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(t.push(i[o]),s++,r=e[s*n])}function kl(i,t,e,n,s){let r=Ft(n,0),o=Math.min(Ft(s,i.length),i.length),a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-n,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(i[c]),a++,h=Math.round(r+a*e))}function sS(i){let t=i.length,e,n;if(t<2)return!1;for(n=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==n)return!1;return n}var rS=i=>i==="left"?"right":i==="right"?"left":i,am=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,lm=(i,t)=>Math.min(t||i,i);function cm(i,t){let e=[],n=i.length/t,s=i.length,r=0;for(;r<s;r+=n)e.push(i[Math.floor(r)]);return e}function oS(i,t,e){let n=i.ticks.length,s=Math.min(t,n-1),r=i._startPixel,o=i._endPixel,a=1e-6,l=i.getPixelForTick(s),c;if(!(e&&(n===1?c=Math.max(l-r,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function aS(i,t){re(i,e=>{let n=e.gc,s=n.length/2,r;if(s>t){for(r=0;r<s;++r)delete e.data[n[r]];n.splice(0,s)}})}function fo(i){return i.drawTicks?i.tickLength:0}function hm(i,t){if(!i.display)return 0;let e=Ae(i.font,t),n=Ve(i.padding);return(ue(i.text)?i.text.length:1)*e.lineHeight+n.height}function lS(i,t){return hi(i,{scale:t,type:"scale"})}function cS(i,t,e){return hi(i,{tick:e,index:t,type:"tick"})}function hS(i,t,e){let n=Pl(i);return(e&&t!=="right"||!e&&t==="right")&&(n=rS(n)),n}function uS(i,t,e,n){let{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:h}=l,u=0,d,f,g,_=o-s,p=a-r;if(i.isHorizontal()){if(f=Be(n,r,a),Xt(e)){let m=Object.keys(e)[0],v=e[m];g=h[m].getPixelForValue(v)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=am(i,e,t);d=a-r}else{if(Xt(e)){let m=Object.keys(e)[0],v=e[m];f=h[m].getPixelForValue(v)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=am(i,e,t);g=Be(n,o,s),u=e==="left"?-we:we}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}var gs=class i extends Pn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=Qe(t,Number.POSITIVE_INFINITY),e=Qe(e,Number.NEGATIVE_INFINITY),n=Qe(n,Number.POSITIVE_INFINITY),s=Qe(s,Number.NEGATIVE_INFINITY),{min:Qe(t,n),max:Qe(e,s),minDefined:be(t),maxDefined:be(e)}}getMinMax(t){let{min:e,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:n};let a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(n=Math.max(n,o.max));return e=r&&e>n?n:e,n=s&&e>n?e:n,{min:Qe(e,Qe(n,e)),max:Qe(n,Qe(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ce(this.options.beforeUpdate,[this])}update(t,e,n){let{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Fp(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let l=a<this.ticks.length;this._convertTicksToLabels(l?cm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=QM(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ce(this.options.afterUpdate,[this])}beforeSetDimensions(){ce(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ce(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ce(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ce(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=ce(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){ce(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ce(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,n=lm(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation,o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}let h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=Re(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(t.offset?.5:1)),l=this.maxHeight-fo(t.grid)-e.padding-hm(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=Al(Math.min(Math.asin(Re((h.highest.height+6)/a,-1,1)),Math.asin(Re(l/c,-1,1))-Math.asin(Re(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ce(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ce(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){let l=hm(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=fo(r)+l):(t.height=this.maxHeight,t.width=fo(r)+l),n.display&&this.ticks.length){let{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=n.padding*2,g=xn(this.labelRotation),_=Math.cos(g),p=Math.sin(g);if(a){let m=n.mirror?0:p*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{let m=n.mirror?0:_*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(c,h,p,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,s){let{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){let h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1),d=0,f=0;l?c?(d=s*t.width,f=n*e.height):(d=n*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ce(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)Gt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,n=this.ticks;e<n.length&&(n=cm(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){let{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/lm(e,n)),c=0,h=0,u,d,f,g,_,p,m,v,w,y,C;for(u=0;u<e;u+=l){if(g=t[u].label,_=this._resolveTickFontOptions(u),s.font=p=_.string,m=r[p]=r[p]||{data:{},gc:[]},v=_.lineHeight,w=y=0,!Gt(g)&&!ue(g))w=so(s,m.data,m.gc,w,g),y=v;else if(ue(g))for(d=0,f=g.length;d<f;++d)C=g[d],!Gt(C)&&!ue(C)&&(w=so(s,m.data,m.gc,w,C),y+=v);o.push(w),a.push(y),c=Math.max(w,c),h=Math.max(y,h)}aS(r,e);let E=o.indexOf(c),A=a.indexOf(h),P=b=>({width:o[b]||0,height:a[b]||0});return{first:P(0),last:P(e-1),widest:P(E),highest:P(A),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return Sp(this._alignToPixels?Ui(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let n=e[t];return n.$context||(n.$context=cS(this.getContext(),t,n))}return this.$context||(this.$context=lS(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=xn(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=fo(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,p=_/2,m=function(G){return Ui(n,G,_)},v,w,y,C,E,A,P,b,S,R,F,H;if(o==="top")v=m(this.bottom),A=this.bottom-d,b=v-p,R=m(t.top)+p,H=t.bottom;else if(o==="bottom")v=m(this.top),R=t.top,H=m(t.bottom)-p,A=v+p,b=this.top+d;else if(o==="left")v=m(this.right),E=this.right-d,P=v-p,S=m(t.left)+p,F=t.right;else if(o==="right")v=m(this.left),S=t.left,F=m(t.right)-p,E=v+p,P=this.left+d;else if(e==="x"){if(o==="center")v=m((t.top+t.bottom)/2+.5);else if(Xt(o)){let G=Object.keys(o)[0],q=o[G];v=m(this.chart.scales[G].getPixelForValue(q))}R=t.top,H=t.bottom,A=v+p,b=A+d}else if(e==="y"){if(o==="center")v=m((t.left+t.right)/2);else if(Xt(o)){let G=Object.keys(o)[0],q=o[G];v=m(this.chart.scales[G].getPixelForValue(q))}E=v-p,P=E-d,S=t.left,F=t.right}let Z=Ft(s.ticks.maxTicksLimit,u),k=Math.max(1,Math.ceil(u/Z));for(w=0;w<u;w+=k){let G=this.getContext(w),q=r.setContext(G),V=a.setContext(G),et=q.lineWidth,ct=q.color,yt=V.dash||[],Lt=V.dashOffset,Qt=q.tickWidth,te=q.tickColor,qt=q.tickBorderDash||[],Y=q.tickBorderDashOffset;y=oS(this,w,l),y!==void 0&&(C=Ui(n,y,et),c?E=P=S=F=C:A=b=R=H=C,f.push({tx1:E,ty1:A,tx2:P,ty2:b,x1:S,y1:R,x2:F,y2:H,width:et,color:ct,borderDash:yt,borderDashOffset:Lt,tickWidth:Qt,tickColor:te,tickBorderDash:qt,tickBorderDashOffset:Y}))}return this._ticksLength=u,this._borderValue=v,f}_computeLabelItems(t){let e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=fo(n.grid),f=d+h,g=u?-h:f,_=-xn(this.labelRotation),p=[],m,v,w,y,C,E,A,P,b,S,R,F,H="middle";if(s==="top")E=this.bottom-g,A=this._getXAxisLabelAlignment();else if(s==="bottom")E=this.top+g,A=this._getXAxisLabelAlignment();else if(s==="left"){let k=this._getYAxisLabelAlignment(d);A=k.textAlign,C=k.x}else if(s==="right"){let k=this._getYAxisLabelAlignment(d);A=k.textAlign,C=k.x}else if(e==="x"){if(s==="center")E=(t.top+t.bottom)/2+f;else if(Xt(s)){let k=Object.keys(s)[0],G=s[k];E=this.chart.scales[k].getPixelForValue(G)+f}A=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")C=(t.left+t.right)/2-f;else if(Xt(s)){let k=Object.keys(s)[0],G=s[k];C=this.chart.scales[k].getPixelForValue(G)}A=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?H="top":l==="end"&&(H="bottom"));let Z=this._getLabelSizes();for(m=0,v=a.length;m<v;++m){w=a[m],y=w.label;let k=r.setContext(this.getContext(m));P=this.getPixelForTick(m)+r.labelOffset,b=this._resolveTickFontOptions(m),S=b.lineHeight,R=ue(y)?y.length:1;let G=R/2,q=k.color,V=k.textStrokeColor,et=k.textStrokeWidth,ct=A;o?(C=P,A==="inner"&&(m===v-1?ct=this.options.reverse?"left":"right":m===0?ct=this.options.reverse?"right":"left":ct="center"),s==="top"?c==="near"||_!==0?F=-R*S+S/2:c==="center"?F=-Z.highest.height/2-G*S+S:F=-Z.highest.height+S/2:c==="near"||_!==0?F=S/2:c==="center"?F=Z.highest.height/2-G*S:F=Z.highest.height-R*S,u&&(F*=-1),_!==0&&!k.showLabelBackdrop&&(C+=S/2*Math.sin(_))):(E=P,F=(1-R)*S/2);let yt;if(k.showLabelBackdrop){let Lt=Ve(k.backdropPadding),Qt=Z.heights[m],te=Z.widths[m],qt=F-Lt.top,Y=0-Lt.left;switch(H){case"middle":qt-=Qt/2;break;case"bottom":qt-=Qt;break}switch(A){case"center":Y-=te/2;break;case"right":Y-=te;break;case"inner":m===v-1?Y-=te:m>0&&(Y-=te/2);break}yt={left:Y,top:qt,width:te+Lt.width,height:Qt+Lt.height,color:k.backdropColor}}p.push({label:y,font:b,textOffset:F,options:{rotation:_,color:q,strokeColor:V,strokeWidth:et,textAlign:ct,textBaseline:H,translation:[C,E],backdrop:yt}})}return p}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-xn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width,c,h;return e==="left"?s?(h=this.right+r,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:n,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,s,r,o),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){let e=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),r,o,a=(l,c,h)=>{!h.width||!h.color||(n.save(),n.lineWidth=h.width,n.strokeStyle=h.color,n.setLineDash(h.borderDash||[]),n.lineDashOffset=h.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){let l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;let a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue,c,h,u,d;this.isHorizontal()?(c=Ui(t,this.left,o)-o/2,h=Ui(t,this.right,a)+a/2,u=d=l):(u=Ui(t,this.top,o)-o/2,d=Ui(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let n=this.ctx,s=this._computeLabelArea();s&&ao(n,s);let r=this.getLabelItems(t);for(let o of r){let a=o.options,l=o.font,c=o.label,h=o.textOffset;Ni(n,c,0,h,l,a)}s&&lo(n)}drawTitle(){let{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;let r=Ae(n.font),o=Ve(n.padding),a=n.align,l=r.lineHeight/2;e==="bottom"||e==="center"||Xt(e)?(l+=o.bottom,ue(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;let{titleX:c,titleY:h,maxWidth:u,rotation:d}=uS(this,l,e,a);Ni(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:hS(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,n=Ft(t.grid&&t.grid.z,-1),s=Ft(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==i.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[],r,o;for(r=0,o=e.length;r<o;++r){let a=e[r];a[n]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return Ae(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},lr=class{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),n;pS(e)&&(n=this.register(e));let s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,dS(t,o,n),this.override&&pe.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){let e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in pe[s]&&(delete pe[s][n],this.override&&delete Li[n])}};function dS(i,t,e){let n=Js(Object.create(null),[e?pe.get(e):{},pe.get(t),i.defaults]);pe.set(t,n),i.defaultRoutes&&fS(t,i.defaultRoutes),i.descriptors&&pe.describe(t,i.descriptors)}function fS(i,t){Object.keys(t).forEach(e=>{let n=e.split("."),s=n.pop(),r=[i].concat(n).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");pe.route(r,s,l,a)})}function pS(i){return"id"in i&&"defaults"in i}var Eu=class{constructor(){this.controllers=new lr(zi,"datasets",!0),this.elements=new lr(Pn,"elements"),this.plugins=new lr(Object,"plugins"),this.scales=new lr(gs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(s=>{let r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):re(s,o=>{let a=n||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,n){let s=El(t);ce(n["before"+s],[],n),e[t](n),ce(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){let s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return s}},Gn=new Eu,Au=class{constructor(){this._init=[]}notify(t,e,n,s){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,n);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,s){s=s||{};for(let r of t){let o=r.plugin,a=o[n],l=[e,s,r.options];if(ce(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){Gt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let n=t&&t.config,s=Ft(n.options&&n.options.plugins,{}),r=mS(n);return s===!1&&!e?[]:_S(t,r,s,e)}_notifyStateChanges(t){let e=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,n),t,"stop"),this._notify(s(n,e),t,"start")}};function mS(i){let t={},e=[],n=Object.keys(Gn.plugins.items);for(let r=0;r<n.length;r++)e.push(Gn.getPlugin(n[r]));let s=i.plugins||[];for(let r=0;r<s.length;r++){let o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function gS(i,t){return!t&&i===!1?null:i===!0?{}:i}function _S(i,{plugins:t,localIds:e},n,s){let r=[],o=i.getContext();for(let a of t){let l=a.id,c=gS(n[l],s);c!==null&&r.push({plugin:a,options:xS(i.config,{plugin:a,local:e[l]},c,o)})}return r}function xS(i,{plugin:t,local:e},n,s){let r=i.pluginScopeKeys(t),o=i.getOptionScopes(n,r);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Tu(i,t){let e=pe.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function yS(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function vS(i,t){return i===t?"_index_":"_value_"}function um(i){if(i==="x"||i==="y"||i==="r")return i}function bS(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Pu(i,...t){if(um(i))return i;for(let e of t){let n=e.axis||bS(e.position)||i.length>1&&um(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function dm(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function MS(i,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(e.length)return dm(i,"x",e[0])||dm(i,"y",e[0])}return{}}function SS(i,t){let e=Li[i.type]||{scales:{}},n=t.scales||{},s=Tu(i.type,t),r=Object.create(null);return Object.keys(n).forEach(o=>{let a=n[o];if(!Xt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);let l=Pu(o,a,MS(o,i),pe.scales[a.type]),c=vS(l,s),h=e.scales||{};r[o]=tr(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(o=>{let a=o.type||i.type,l=o.indexAxis||Tu(a,t),h=(Li[a]||{}).scales||{};Object.keys(h).forEach(u=>{let d=yS(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),tr(r[f],[{axis:d},n[f],h[u]])})}),Object.keys(r).forEach(o=>{let a=r[o];tr(a,[pe.scales[a.type],pe.scale])}),r}function Qm(i){let t=i.options||(i.options={});t.plugins=Ft(t.plugins,{}),t.scales=SS(i,t)}function tg(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function wS(i){return i=i||{},i.data=tg(i.data),Qm(i),i}var fm=new Map,eg=new Set;function Bl(i,t){let e=fm.get(i);return e||(e=t(),fm.set(i,e),eg.add(e)),e}var po=(i,t,e)=>{let n=ci(t,e);n!==void 0&&i.add(n)},Ru=class{constructor(t){this._config=wS(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=tg(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),Qm(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Bl(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Bl(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Bl(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,n=this.type;return Bl(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let n=this._scopeCache,s=n.get(t);return(!s||e)&&(s=new Map,n.set(t,s)),s}getOptionScopes(t,e,n){let{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;let l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>po(l,t,u))),h.forEach(u=>po(l,s,u)),h.forEach(u=>po(l,Li[r]||{},u)),h.forEach(u=>po(l,pe,u)),h.forEach(u=>po(l,Rl,u))});let c=Array.from(l);return c.length===0&&c.push(Object.create(null)),eg.has(e)&&o.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,Li[e]||{},pe.datasets[e]||{},{type:e},pe,Rl]}resolveNamedOptions(t,e,n,s=[""]){let r={$shared:!0},{resolver:o,subPrefixes:a}=pm(this._resolverCache,t,s),l=o;if(ES(o,e)){r.$shared=!1,n=ai(n)?n():n;let c=this.createResolver(t,n,a);l=us(o,n,c)}for(let c of e)r[c]=l[c];return r}createResolver(t,e,n=[""],s){let{resolver:r}=pm(this._resolverCache,t,n);return Xt(e)?us(r,e,void 0,s):r}};function pm(i,t,e){let n=i.get(t);n||(n=new Map,i.set(t,n));let s=e.join(),r=n.get(s);return r||(r={resolver:Ol(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}var CS=i=>Xt(i)&&Object.getOwnPropertyNames(i).some(t=>ai(i[t]));function ES(i,t){let{isScriptable:e,isIndexable:n}=Qh(i);for(let s of t){let r=e(s),o=n(s),a=(o||r)&&i[s];if(r&&(ai(a)||CS(a))||o&&ue(a))return!0}return!1}var AS="4.5.0",TS=["top","bottom","left","right","chartArea"];function mm(i,t){return i==="top"||i==="bottom"||TS.indexOf(i)===-1&&t==="x"}function gm(i,t){return function(e,n){return e[i]===n[i]?e[t]-n[t]:e[i]-n[i]}}function _m(i){let t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ce(e&&e.onComplete,[i],t)}function PS(i){let t=i.chart,e=t.options.animation;ce(e&&e.onProgress,[i],t)}function ng(i){return Fl()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}var Wl={},xm=i=>{let t=ng(i);return Object.values(Wl).filter(e=>e.canvas===t).pop()};function RS(i,t,e){let n=Object.keys(i);for(let s of n){let r=+s;if(r>=t){let o=i[s];delete i[s],(e>0||r>t)&&(i[r+e]=o)}}}function IS(i,t,e,n){return!e||i.type==="mouseout"?null:n?t:i}var Kl=(()=>{class i{static defaults=pe;static instances=Wl;static overrides=Li;static registry=Gn;static version=AS;static getChart=xm;static register(...e){Gn.add(...e),ym()}static unregister(...e){Gn.remove(...e),ym()}constructor(e,n){let s=this.config=new Ru(n),r=ng(e),o=xm(r);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");let a=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||JM(r)),this.platform.updateConfig(s);let l=this.platform.acquireContext(r,a.aspectRatio),c=l&&l.canvas,h=c&&c.height,u=c&&c.width;if(this.id=_p(),this.ctx=l,this.canvas=c,this.width=u,this.height=h,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Au,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Tp(d=>this.update(d),a.resizeDelay||0),this._dataChanges=[],Wl[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}ui.listen(this,"complete",_m),ui.listen(this,"progress",PS),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:n},width:s,height:r,_aspectRatio:o}=this;return Gt(e)?n&&o?o:r?s/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Gn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():iu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Zh(this.canvas,this.ctx),this}stop(){return ui.stop(this),this}resize(e,n){ui.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){let s=this.options,r=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,n,o),l=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,iu(this,l,!0)&&(this.notifyPlugins("resize",{size:a}),ce(s.onResize,[this,a],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){let n=this.options.scales||{};re(n,(s,r)=>{s.id=r})}buildOrUpdateScales(){let e=this.options,n=e.scales,s=this.scales,r=Object.keys(s).reduce((a,l)=>(a[l]=!1,a),{}),o=[];n&&(o=o.concat(Object.keys(n).map(a=>{let l=n[a],c=Pu(a,l),h=c==="r",u=c==="x";return{options:l,dposition:h?"chartArea":u?"bottom":"left",dtype:h?"radialLinear":u?"category":"linear"}}))),re(o,a=>{let l=a.options,c=l.id,h=Pu(c,l),u=Ft(l.type,a.dtype);(l.position===void 0||mm(l.position,h)!==mm(a.dposition))&&(l.position=a.dposition),r[c]=!0;let d=null;if(c in s&&s[c].type===u)d=s[c];else{let f=Gn.getScale(u);d=new f({id:c,type:u,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(l,e)}),re(r,(a,l)=>{a||delete s[l]}),re(s,a=>{qe.configure(this,a,a.options),qe.addBox(this,a)})}_updateMetasets(){let e=this._metasets,n=this.data.datasets.length,s=e.length;if(e.sort((r,o)=>r.index-o.index),s>n){for(let r=n;r<s;++r)this._destroyDatasetMeta(r);e.splice(n,s-n)}this._sortedMetasets=e.slice(0).sort(gm("order","index"))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((s,r)=>{n.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){let e=[],n=this.data.datasets,s,r;for(this._removeUnreferencedMetasets(),s=0,r=n.length;s<r;s++){let o=n[s],a=this.getDatasetMeta(s),l=o.type||this.config.type;if(a.type&&a.type!==l&&(this._destroyDatasetMeta(s),a=this.getDatasetMeta(s)),a.type=l,a.indexAxis=o.indexAxis||Tu(l,this.options),a.order=o.order||0,a.index=s,a.label=""+o.label,a.visible=this.isDatasetVisible(s),a.controller)a.controller.updateIndex(s),a.controller.linkScales();else{let c=Gn.getController(l),{datasetElementType:h,dataElementType:u}=pe.datasets[l];Object.assign(c,{dataElementType:Gn.getElement(u),datasetElementType:h&&Gn.getElement(h)}),a.controller=new c(this,s),e.push(a.controller)}}return this._updateMetasets(),e}_resetElements(){re(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){let n=this.config;n.update();let s=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;let o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let h=0,u=this.data.datasets.length;h<u;h++){let{controller:d}=this.getDatasetMeta(h),f=!r&&o.indexOf(d)===-1;d.buildOrUpdateElements(f),a=Math.max(+d.getMaxOverflow(),a)}a=this._minPadding=s.layout.autoPadding?a:0,this._updateLayout(a),r||re(o,h=>{h.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(gm("z","_idx"));let{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){re(this.scales,e=>{qe.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options,n=new Set(Object.keys(this._listeners)),s=new Set(e.events);(!Nh(n,s)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(let{method:s,start:r,count:o}of n){let a=s==="_removeElements"?-o:o;RS(e,r,a)}}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let n=this.data.datasets.length,s=o=>new Set(e.filter(a=>a[0]===o).map((a,l)=>l+","+a.splice(1).join(","))),r=s(0);for(let o=1;o<n;o++)if(!Nh(r,s(o)))return;return Array.from(r).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;qe.update(this,this.width,this.height,e);let n=this.chartArea,s=n.width<=0||n.height<=0;this._layers=[],re(this.boxes,r=>{s&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,o)=>{r._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,s=this.data.datasets.length;n<s;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,s=this.data.datasets.length;n<s;++n)this._updateDataset(n,ai(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){let s=this.getDatasetMeta(e),r={meta:s,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(s.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ui.has(this)?this.attached&&!ui.running(this)&&ui.start(this):(this.draw(),_m({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:s,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){let n=this._sortedMetasets,s=[],r,o;for(r=0,o=n.length;r<o;++r){let a=n[r];(!e||a.visible)&&s.push(a)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){let n=this.ctx,s={meta:e,index:e.index,cancelable:!0},r=cu(this,e);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&ao(n,r),e.controller.draw(),r&&lo(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(e){return Bn(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,s,r){let o=OM.modes[n];return typeof o=="function"?o(this,e,s,r):[]}getDatasetMeta(e){let n=this.data.datasets[e],s=this._metasets,r=s.filter(o=>o&&o._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},s.push(r)),r}getContext(){return this.$context||(this.$context=hi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let n=this.data.datasets[e];if(!n)return!1;let s=this.getDatasetMeta(e);return typeof s.hidden=="boolean"?!s.hidden:!n.hidden}setDatasetVisibility(e,n){let s=this.getDatasetMeta(e);s.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,s){let r=s?"show":"hide",o=this.getDatasetMeta(e),a=o.controller._resolveAnimations(void 0,r);er(n)?(o.data[n].hidden=!s,this.update()):(this.setDatasetVisibility(e,s),a.update(o,{visible:s}),this.update(l=>l.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){let n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),ui.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Zh(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Wl[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,n=this.platform,s=(o,a)=>{n.addEventListener(this,o,a),e[o]=a},r=(o,a,l)=>{o.offsetX=a,o.offsetY=l,this._eventHandler(o)};re(this.options.events,o=>s(o,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,n=this.platform,s=(c,h)=>{n.addEventListener(this,c,h),e[c]=h},r=(c,h)=>{e[c]&&(n.removeEventListener(this,c,h),delete e[c])},o=(c,h)=>{this.canvas&&this.resize(c,h)},a,l=()=>{r("attach",l),this.attached=!0,this.resize(),s("resize",o),s("detach",a)};a=()=>{this.attached=!1,r("resize",o),this._stop(),this._resize(0,0),s("attach",l)},n.isAttached(this.canvas)?l():a()}unbindEvents(){re(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},re(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,s){let r=s?"set":"remove",o,a,l,c;for(n==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+r+"DatasetHoverStyle"]()),l=0,c=e.length;l<c;++l){a=e[l];let h=a&&this.getDatasetMeta(a.datasetIndex).controller;h&&h[r+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let n=this._active||[],s=e.map(({datasetIndex:o,index:a})=>{let l=this.getDatasetMeta(o);if(!l)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:l.data[a],index:a}});!ro(s,n)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,n))}notifyPlugins(e,n,s){return this._plugins.notify(this,e,n,s)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,s){let r=this.options.hover,o=(c,h)=>c.filter(u=>!h.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),a=o(n,e),l=s?e:o(e,n);a.length&&this.updateHoverStyle(a,r.mode,!1),l.length&&r.mode&&this.updateHoverStyle(l,r.mode,!0)}_eventHandler(e,n){let s={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=a=>(a.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",s,r)===!1)return;let o=this._handleEvent(e,n,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,r),(o||s.changed)&&this.render(),this}_handleEvent(e,n,s){let{_active:r=[],options:o}=this,a=n,l=this._getActiveElements(e,r,s,a),c=vp(e),h=IS(e,this._lastEvent,s,c);s&&(this._lastEvent=null,ce(o.onHover,[e,l,this],this),c&&ce(o.onClick,[e,l,this],this));let u=!ro(l,r);return(u||n)&&(this._active=l,this._updateHoverStyles(l,r,n)),this._lastEvent=h,u}_getActiveElements(e,n,s,r){if(e.type==="mouseout")return[];if(!s)return n;let o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,r)}}return i})();function ym(){return re(Kl.instances,i=>i._plugins.invalidate())}function DS(i,t,e){let{startAngle:n,x:s,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,u=Math.min(c/o,ke(n-e));if(i.beginPath(),i.arc(s,r,o-c/2,n+u/2,e-u/2),a>0){let d=Math.min(c/a,ke(n-e));i.arc(s,r,a+c/2,e-d/2,n+d/2,!0)}else{let d=Math.min(c/2,o*ke(n-e));if(h==="round")i.arc(s,r,d,e-Jt/2,n+Jt/2,!0);else if(h==="bevel"){let f=2*d*d,g=-f*Math.cos(e+Jt/2)+s,_=-f*Math.sin(e+Jt/2)+r,p=f*Math.cos(n+Jt/2)+s,m=f*Math.sin(n+Jt/2)+r;i.lineTo(g,_),i.lineTo(p,m)}}i.closePath(),i.moveTo(0,0),i.rect(0,0,i.canvas.width,i.canvas.height),i.clip("evenodd")}function OS(i,t,e){let{startAngle:n,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t,c=s/a;i.beginPath(),i.arc(r,o,a,n-c,e+c),l>s?(c=s/l,i.arc(r,o,l,e+c,n-c,!0)):i.arc(r,o,s,e+we,n-we),i.closePath(),i.clip()}function FS(i){return Dl(i,["outerStart","outerEnd","innerStart","innerEnd"])}function LS(i,t,e,n){let s=FS(i.options.borderRadius),r=(e-t)/2,o=Math.min(r,n*t/2),a=l=>{let c=(e-Math.min(r,l))*n/2;return Re(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Re(s.innerStart,0,o),innerEnd:Re(s.innerEnd,0,o)}}function ar(i,t,e,n){return{x:e+i*Math.cos(t),y:n+i*Math.sin(t)}}function jl(i,t,e,n,s,r){let{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,u=Math.max(t.outerRadius+n+e-c,0),d=h>0?h+n+e+c:0,f=0,g=s-l;if(n){let k=h>0?h-n:0,G=u>0?u-n:0,q=(k+G)/2,V=q!==0?g*q/(q+n):g;f=(g-V)/2}let _=Math.max(.001,g*u-e/Jt)/u,p=(g-_)/2,m=l+p+f,v=s-p-f,{outerStart:w,outerEnd:y,innerStart:C,innerEnd:E}=LS(t,d,u,v-m),A=u-w,P=u-y,b=m+w/A,S=v-y/P,R=d+C,F=d+E,H=m+C/R,Z=v-E/F;if(i.beginPath(),r){let k=(b+S)/2;if(i.arc(o,a,u,b,k),i.arc(o,a,u,k,S),y>0){let et=ar(P,S,o,a);i.arc(et.x,et.y,y,S,v+we)}let G=ar(F,v,o,a);if(i.lineTo(G.x,G.y),E>0){let et=ar(F,Z,o,a);i.arc(et.x,et.y,E,v+we,Z+Math.PI)}let q=(v-E/d+(m+C/d))/2;if(i.arc(o,a,d,v-E/d,q,!0),i.arc(o,a,d,q,m+C/d,!0),C>0){let et=ar(R,H,o,a);i.arc(et.x,et.y,C,H+Math.PI,m-we)}let V=ar(A,m,o,a);if(i.lineTo(V.x,V.y),w>0){let et=ar(A,b,o,a);i.arc(et.x,et.y,w,m-we,b)}}else{i.moveTo(o,a);let k=Math.cos(b)*u+o,G=Math.sin(b)*u+a;i.lineTo(k,G);let q=Math.cos(S)*u+o,V=Math.sin(S)*u+a;i.lineTo(q,V)}i.closePath()}function US(i,t,e,n,s){let{fullCircles:r,startAngle:o,circumference:a}=t,l=t.endAngle;if(r){jl(i,t,e,n,l,s);for(let c=0;c<r;++c)i.fill();isNaN(a)||(l=o+(a%de||de))}return jl(i,t,e,n,l,s),i.fill(),l}function NS(i,t,e,n,s){let{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:u,borderDashOffset:d,borderRadius:f}=l,g=l.borderAlign==="inner";if(!c)return;i.setLineDash(u||[]),i.lineDashOffset=d,g?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let _=t.endAngle;if(r){jl(i,t,e,n,_,s);for(let p=0;p<r;++p)i.stroke();isNaN(a)||(_=o+(a%de||de))}g&&OS(i,t,_),l.selfJoin&&_-o>=Jt&&f===0&&h!=="miter"&&DS(i,t,_),r||(jl(i,t,e,n,_,s),i.stroke())}var Iu=class extends Pn{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){let s=this.getProps(["x","y"],n),{angle:r,distance:o}=zh(s,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),d=(this.options.spacing+this.options.borderWidth)/2,f=Ft(u,l-a),g=ir(r,a,l)&&a!==l,_=f>=de||g,p=zn(o,c+d,h+d);return _&&p}getCenterPoint(t){let{x:e,y:n,startAngle:s,endAngle:r,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,h=(s+r)/2,u=(o+a+c+l)/2;return{x:e+Math.cos(h)*u,y:n+Math.sin(h)*u}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:n}=this,s=(e.offset||0)/4,r=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=n>de?Math.floor(n/de):0,n===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*s,Math.sin(a)*s);let l=1-Math.sin(Math.min(Jt,n||0)),c=s*l;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,US(t,this,c,r,o),NS(t,this,c,r,o),t.restore()}};function ig(i,t,e=t){i.lineCap=Ft(e.borderCapStyle,t.borderCapStyle),i.setLineDash(Ft(e.borderDash,t.borderDash)),i.lineDashOffset=Ft(e.borderDashOffset,t.borderDashOffset),i.lineJoin=Ft(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=Ft(e.borderWidth,t.borderWidth),i.strokeStyle=Ft(e.borderColor,t.borderColor)}function kS(i,t,e){i.lineTo(e.x,e.y)}function BS(i){return i.stepped?Dp:i.tension||i.cubicInterpolationMode==="monotone"?Op:kS}function sg(i,t,e={}){let n=i.length,{start:s=0,end:r=n-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:t.loop,ilen:c<l&&!h?n+c-l:c-l}}function VS(i,t,e,n){let{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=sg(s,e,n),h=BS(r),{move:u=!0,reverse:d}=n||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(i.moveTo(g.x,g.y),u=!1):h(i,_,g,d,r.stepped),_=g);return l&&(g=s[(a+(d?c:0))%o],h(i,_,g,d,r.stepped)),!!l}function zS(i,t,e,n){let s=t.points,{count:r,start:o,ilen:a}=sg(s,e,n),{move:l=!0,reverse:c}=n||{},h=0,u=0,d,f,g,_,p,m,v=y=>(o+(c?a-y:y))%r,w=()=>{_!==p&&(i.lineTo(h,p),i.lineTo(h,_),i.lineTo(h,m))};for(l&&(f=s[v(0)],i.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[v(d)],f.skip)continue;let y=f.x,C=f.y,E=y|0;E===g?(C<_?_=C:C>p&&(p=C),h=(u*h+y)/++u):(w(),i.lineTo(y,C),g=E,u=0,_=p=C),m=C}w()}function Du(i){let t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?zS:VS}function HS(i){return i.stepped?Hp:i.tension||i.cubicInterpolationMode==="monotone"?Gp:Fi}function GS(i,t,e,n){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,n)&&s.closePath()),ig(i,t.options),i.stroke(s)}function WS(i,t,e,n){let{segments:s,options:r}=t,o=Du(t);for(let a of s)ig(i,r,a.style),i.beginPath(),o(i,t,a,{start:e,end:e+n-1})&&i.closePath(),i.stroke()}var XS=typeof Path2D=="function";function qS(i,t,e,n){XS&&!t.options.segment?GS(i,t,e,n):WS(i,t,e,n)}var Jl=(()=>{class i extends Pn{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){let s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){let r=s.spanGaps?this._loop:this._fullLoop;Bp(this._points,s,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Xp(this,this.options.segment))}first(){let e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){let e=this.segments,n=this.points,s=e.length;return s&&n[e[s-1].end]}interpolate(e,n){let s=this.options,r=e[n],o=this.points,a=lu(this,{property:n,start:r,end:r});if(!a.length)return;let l=[],c=HS(s),h,u;for(h=0,u=a.length;h<u;++h){let{start:d,end:f}=a[h],g=o[d],_=o[f];if(g===_){l.push(g);continue}let p=Math.abs((r-g[n])/(_[n]-g[n])),m=c(g,_,p,s.stepped);m[n]=e[n],l.push(m)}return l.length===1?l[0]:l}pathSegment(e,n,s){return Du(this)(e,this,n,s)}path(e,n,s){let r=this.segments,o=Du(this),a=this._loop;n=n||0,s=s||this.points.length-n;for(let l of r)a&=o(e,this,l,{start:n,end:n+s-1});return!!a}draw(e,n,s,r){let o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),qS(e,this,s,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}return i})();function vm(i,t,e,n){let s=i.options,{[e]:r}=i.getProps([e],n);return Math.abs(t-r)<s.radius+s.hitRadius}var YS=(()=>{class i extends Pn{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,s){let r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,n){return vm(this,e,"x",n)}inYRange(e,n){return vm(this,e,"y",n)}getCenterPoint(e){let{x:n,y:s}=this.getProps(["x","y"],e);return{x:n,y:s}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);let s=n&&e.borderWidth||0;return(n+s)*2}draw(e,n){let s=this.options;this.skip||s.radius<.1||!Bn(this,n,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Il(e,s,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}}return i})();function rg(i,t){let{x:e,y:n,base:s,width:r,height:o}=i.getProps(["x","y","base","width","height"],t),a,l,c,h,u;return i.horizontal?(u=o/2,a=Math.min(e,s),l=Math.max(e,s),c=n-u,h=n+u):(u=r/2,a=e-u,l=e+u,c=Math.min(n,s),h=Math.max(n,s)),{left:a,top:c,right:l,bottom:h}}function Vi(i,t,e,n){return i?0:Re(t,e,n)}function jS(i,t,e){let n=i.options.borderWidth,s=i.borderSkipped,r=Jh(n);return{t:Vi(s.top,r.top,0,e),r:Vi(s.right,r.right,0,t),b:Vi(s.bottom,r.bottom,0,e),l:Vi(s.left,r.left,0,t)}}function $S(i,t,e){let{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),s=i.options.borderRadius,r=ki(s),o=Math.min(t,e),a=i.borderSkipped,l=n||Xt(s);return{topLeft:Vi(!l||a.top||a.left,r.topLeft,0,o),topRight:Vi(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Vi(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Vi(!l||a.bottom||a.right,r.bottomRight,0,o)}}function ZS(i){let t=rg(i),e=t.right-t.left,n=t.bottom-t.top,s=jS(i,e/2,n/2),r=$S(i,e/2,n/2);return{outer:{x:t.left,y:t.top,w:e,h:n,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:n-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function _u(i,t,e,n){let s=t===null,r=e===null,a=i&&!(s&&r)&&rg(i,n);return a&&(s||zn(t,a.left,a.right))&&(r||zn(e,a.top,a.bottom))}function KS(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function JS(i,t){i.rect(t.x,t.y,t.w,t.h)}function xu(i,t,e={}){let n=i.x!==e.x?-t:0,s=i.y!==e.y?-t:0,r=(i.x+i.w!==e.x+e.w?t:0)-n,o=(i.y+i.h!==e.y+e.h?t:0)-s;return{x:i.x+n,y:i.y+s,w:i.w+r,h:i.h+o,radius:i.radius}}var Ou=class extends Pn{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:n,backgroundColor:s}}=this,{inner:r,outer:o}=ZS(this),a=KS(o.radius)?rr:JS;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,xu(o,e,r)),t.clip(),a(t,xu(r,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,xu(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,n){return _u(this,t,e,n)}inXRange(t,e){return _u(this,t,null,e)}inYRange(t,e){return _u(this,null,t,e)}getCenterPoint(t){let{x:e,y:n,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?n:(n+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}},QS=Object.freeze({__proto__:null,ArcElement:Iu,BarElement:Ou,LineElement:Jl,PointElement:YS}),Fu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],bm=Fu.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function og(i){return Fu[i%Fu.length]}function ag(i){return bm[i%bm.length]}function t1(i,t){return i.borderColor=og(t),i.backgroundColor=ag(t),++t}function e1(i,t){return i.backgroundColor=i.data.map(()=>og(t++)),t}function n1(i,t){return i.backgroundColor=i.data.map(()=>ag(t++)),t}function i1(i){let t=0;return(e,n)=>{let s=i.getDatasetMeta(n).controller;s instanceof Hu?t=e1(e,t):s instanceof jm?t=n1(e,t):s&&(t=t1(e,t))}}function Mm(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function s1(i){return i&&(i.borderColor||i.backgroundColor)}function r1(){return pe.borderColor!=="rgba(0,0,0,0.1)"||pe.backgroundColor!=="rgba(0,0,0,0.1)"}var o1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;let{data:{datasets:n},options:s}=i.config,{elements:r}=s,o=Mm(n)||s1(s)||r&&Mm(r)||r1();if(!e.forceOverride&&o)return;let a=i1(i);n.forEach(a)}};function a1(i,t,e,n,s){let r=s.samples||n;if(r>=e)return i.slice(t,t+e);let o=[],a=(e-2)/(r-2),l=0,c=t+e-1,h=t,u,d,f,g,_;for(o[l++]=i[h],u=0;u<r-2;u++){let p=0,m=0,v,w=Math.floor((u+1)*a)+1+t,y=Math.min(Math.floor((u+2)*a)+1,e)+t,C=y-w;for(v=w;v<y;v++)p+=i[v].x,m+=i[v].y;p/=C,m/=C;let E=Math.floor(u*a)+1+t,A=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:P,y:b}=i[h];for(f=g=-1,v=E;v<A;v++)g=.5*Math.abs((P-p)*(i[v].y-b)-(P-i[v].x)*(m-b)),g>f&&(f=g,d=i[v],_=v);o[l++]=d,h=_}return o[l++]=i[c],o}function l1(i,t,e,n){let s=0,r=0,o,a,l,c,h,u,d,f,g,_,p=[],m=t+e-1,v=i[t].x,y=i[m].x-v;for(o=t;o<t+e;++o){a=i[o],l=(a.x-v)/y*n,c=a.y;let C=l|0;if(C===h)c<g?(g=c,u=o):c>_&&(_=c,d=o),s=(r*s+a.x)/++r;else{let E=o-1;if(!Gt(u)&&!Gt(d)){let A=Math.min(u,d),P=Math.max(u,d);A!==f&&A!==E&&p.push(fi(Xn({},i[A]),{x:s})),P!==f&&P!==E&&p.push(fi(Xn({},i[P]),{x:s}))}o>0&&E!==f&&p.push(i[E]),p.push(a),h=C,r=0,g=_=c,u=d=f=o}}return p}function lg(i){if(i._decimated){let t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Sm(i){i.data.datasets.forEach(t=>{lg(t)})}function c1(i,t){let e=t.length,n=0,s,{iScale:r}=i,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=Re(kn(t,r.axis,o).lo,0,e-1)),c?s=Re(kn(t,r.axis,a).hi+1,n,e)-n:s=e-n,{start:n,count:s}}var h1={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){Sm(i);return}let n=i.width;i.data.datasets.forEach((s,r)=>{let{_data:o,indexAxis:a}=s,l=i.getDatasetMeta(r),c=o||s.data;if(or([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;let h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:u,count:d}=c1(l,c),f=e.threshold||4*n;if(d<=f){lg(s);return}Gt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let g;switch(e.algorithm){case"lttb":g=a1(c,u,d,n,e);break;case"min-max":g=l1(c,u,d,n);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=g})},destroy(i){Sm(i)}};function u1(i,t,e){let n=i.segments,s=i.points,r=t.points,o=[];for(let a of n){let{start:l,end:c}=a;c=Ql(l,c,s);let h=Lu(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}let u=lu(t,h);for(let d of u){let f=Lu(e,r[d.start],r[d.end],d.loop),g=au(a,s,f);for(let _ of g)o.push({source:_,target:d,start:{[e]:wm(h,f,"start",Math.max)},end:{[e]:wm(h,f,"end",Math.min)}})}}return o}function Lu(i,t,e,n){if(n)return;let s=t[i],r=e[i];return i==="angle"&&(s=ke(s),r=ke(r)),{property:i,start:s,end:r}}function d1(i,t){let{x:e=null,y:n=null}=i||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Ql(o,a,s);let l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function Ql(i,t,e){for(;t>i;t--){let n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function wm(i,t,e,n){return i&&t?n(i[e],t[e]):i?i[e]:t?t[e]:0}function cg(i,t){let e=[],n=!1;return ue(i)?(n=!0,e=i):e=d1(i,t),e.length?new Jl({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function Cm(i){return i&&i.fill!==!1}function f1(i,t,e){let s=i[t].fill,r=[t],o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!be(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function p1(i,t,e){let n=x1(i);if(Xt(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return be(s)&&Math.floor(s)===s?m1(n[0],t,s,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function m1(i,t,e,n){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function g1(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:Xt(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function _1(i,t,e){let n;return i==="start"?n=e:i==="end"?n=t.options.reverse?t.min:t.max:Xt(i)?n=i.value:n=t.getBaseValue(),n}function x1(i){let t=i.options,e=t.fill,n=Ft(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function y1(i){let{scale:t,index:e,line:n}=i,s=[],r=n.segments,o=n.points,a=v1(t,e);a.push(cg({x:null,y:t.bottom},n));for(let l=0;l<r.length;l++){let c=r[l];for(let h=c.start;h<=c.end;h++)b1(s,o[h],a)}return new Jl({points:s,options:{}})}function v1(i,t){let e=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){let r=n[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function b1(i,t,e){let n=[];for(let s=0;s<e.length;s++){let r=e[s],{first:o,last:a,point:l}=M1(r,t,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function M1(i,t,e){let n=i.interpolate(t,e);if(!n)return{};let s=n[e],r=i.segments,o=i.points,a=!1,l=!1;for(let c=0;c<r.length;c++){let h=r[c],u=o[h.start][e],d=o[h.end][e];if(zn(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:n}}var $l=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){let{x:s,y:r,radius:o}=this;return e=e||{start:0,end:de},t.arc(s,r,o,e.end,e.start,!0),!n.bounds}interpolate(t){let{x:e,y:n,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}};function S1(i){let{chart:t,fill:e,line:n}=i;if(be(e))return w1(t,e);if(e==="stack")return y1(i);if(e==="shape")return!0;let s=C1(i);return s instanceof $l?s:cg(s,n)}function w1(i,t){let e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function C1(i){return(i.scale||{}).getPointPositionForValue?A1(i):E1(i)}function E1(i){let{scale:t={},fill:e}=i,n=g1(e,t);if(be(n)){let s=t.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function A1(i){let{scale:t,fill:e}=i,n=t.options,s=t.getLabels().length,r=n.reverse?t.max:t.min,o=_1(e,t,r),a=[];if(n.grid.circular){let l=t.getPointPositionForValue(0,r);return new $l({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function yu(i,t,e){let n=S1(t),{chart:s,index:r,line:o,scale:a,axis:l}=t,c=o.options,h=c.fill,u=c.backgroundColor,{above:d=u,below:f=u}=h||{},g=s.getDatasetMeta(r),_=cu(s,g);n&&o.points.length&&(ao(i,e),T1(i,{line:o,target:n,above:d,below:f,area:e,scale:a,axis:l,clip:_}),lo(i))}function T1(i,t){let{line:e,target:n,above:s,below:r,area:o,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;i.save();let h=r;r!==s&&(c==="x"?(Em(i,n,o.top),vu(i,{line:e,target:n,color:s,scale:a,property:c,clip:l}),i.restore(),i.save(),Em(i,n,o.bottom)):c==="y"&&(Am(i,n,o.left),vu(i,{line:e,target:n,color:r,scale:a,property:c,clip:l}),i.restore(),i.save(),Am(i,n,o.right),h=s)),vu(i,{line:e,target:n,color:h,scale:a,property:c,clip:l}),i.restore()}function Em(i,t,e){let{segments:n,points:s}=t,r=!0,o=!1;i.beginPath();for(let a of n){let{start:l,end:c}=a,h=s[l],u=s[Ql(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Am(i,t,e){let{segments:n,points:s}=t,r=!0,o=!1;i.beginPath();for(let a of n){let{start:l,end:c}=a,h=s[l],u=s[Ql(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(e,h.y),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(e,u.y)}i.lineTo(e,t.first().y),i.closePath(),i.clip()}function vu(i,t){let{line:e,target:n,property:s,color:r,scale:o,clip:a}=t,l=u1(e,n,s);for(let{source:c,target:h,start:u,end:d}of l){let{style:{backgroundColor:f=r}={}}=c,g=n!==!0;i.save(),i.fillStyle=f,P1(i,o,a,g&&Lu(s,u,d)),i.beginPath();let _=!!e.pathSegment(i,c),p;if(g){_?i.closePath():Tm(i,n,d,s);let m=!!n.pathSegment(i,h,{move:_,reverse:!0});p=_&&m,p||Tm(i,n,u,s)}i.closePath(),i.fill(p?"evenodd":"nonzero"),i.restore()}}function P1(i,t,e,n){let s=t.chart.chartArea,{property:r,start:o,end:a}=n||{};if(r==="x"||r==="y"){let l,c,h,u;r==="x"?(l=o,c=s.top,h=a,u=s.bottom):(l=s.left,c=o,h=s.right,u=a),i.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),u=Math.min(u,e.bottom)),i.rect(l,c,h-l,u-c),i.clip()}}function Tm(i,t,e,n){let s=t.interpolate(e,n);s&&i.lineTo(s.x,s.y)}var R1={id:"filler",afterDatasetsUpdate(i,t,e){let n=(i.data.datasets||[]).length,s=[],r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Jl&&(l={visible:i.isDatasetVisible(o),index:o,fill:p1(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=f1(s,o,e.propagate))},beforeDraw(i,t,e){let n=e.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){let a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&yu(i.ctx,a,r))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){let r=n[s].$filler;Cm(r)&&yu(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,t,e){let n=t.meta.$filler;!Cm(n)||e.drawTime!=="beforeDatasetDraw"||yu(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Pm=(i,t)=>{let{boxHeight:e=t,boxWidth:n=t}=i;return i.usePointStyle&&(e=Math.min(e,t),n=i.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},I1=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index,Zl=class extends Pn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=ce(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,s)=>t.sort(n,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}let n=t.labels,s=Ae(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Pm(n,r),c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,s){let{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a,u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,_)=>{let p=n+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,n,s){let{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t,u=a,d=0,f=0,g=0,_=0;return this.legendItems.forEach((p,m)=>{let{itemWidth:v,itemHeight:w}=D1(n,e,r,p,s);m>0&&f+w+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,_++,d=f=0),l[m]={left:g,top:f,col:_,width:v,height:w},d=Math.max(d,v),f+=w+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=fs(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Be(n,this.left+s,this.right-this.lineWidths[a]);for(let c of e)a!==c.row&&(a=c.row,l=Be(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Be(n,this.top+t+s,this.bottom-this.columnSizes[a].height);for(let c of e)c.col!==a&&(a=c.col,l=Be(n,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let t=this.ctx;ao(t,this),this._draw(),lo(t)}}_draw(){let{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=pe.color,l=fs(t.rtl,this.left,this.width),c=Ae(o.font),{padding:h}=o,u=c.size,d=u/2,f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;let{boxWidth:g,boxHeight:_,itemHeight:p}=Pm(o,u),m=function(E,A,P){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();let b=Ft(P.lineWidth,1);if(s.fillStyle=Ft(P.fillStyle,a),s.lineCap=Ft(P.lineCap,"butt"),s.lineDashOffset=Ft(P.lineDashOffset,0),s.lineJoin=Ft(P.lineJoin,"miter"),s.lineWidth=b,s.strokeStyle=Ft(P.strokeStyle,a),s.setLineDash(Ft(P.lineDash,[])),o.usePointStyle){let S={radius:_*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:b},R=l.xPlus(E,g/2),F=A+d;Kh(s,S,R,F,o.pointStyleWidth&&g)}else{let S=A+Math.max((u-_)/2,0),R=l.leftForLtr(E,g),F=ki(P.borderRadius);s.beginPath(),Object.values(F).some(H=>H!==0)?rr(s,{x:R,y:S,w:g,h:_,radius:F}):s.rect(R,S,g,_),s.fill(),b!==0&&s.stroke()}s.restore()},v=function(E,A,P){Ni(s,P.text,E,A+p/2,c,{strikethrough:P.hidden,textAlign:l.textAlign(P.textAlign)})},w=this.isHorizontal(),y=this._computeTitleHeight();w?f={x:Be(r,this.left+h,this.right-n[0]),y:this.top+h+y,line:0}:f={x:this.left+h,y:Be(r,this.top+y+h,this.bottom-e[0].height),line:0},ru(this.ctx,t.textDirection);let C=p+h;this.legendItems.forEach((E,A)=>{s.strokeStyle=E.fontColor,s.fillStyle=E.fontColor;let P=s.measureText(E.text).width,b=l.textAlign(E.textAlign||(E.textAlign=o.textAlign)),S=g+d+P,R=f.x,F=f.y;l.setWidth(this.width),w?A>0&&R+S+h>this.right&&(F=f.y+=C,f.line++,R=f.x=Be(r,this.left+h,this.right-n[f.line])):A>0&&F+C>this.bottom&&(R=f.x=R+e[f.line].width+h,f.line++,F=f.y=Be(r,this.top+y+h,this.bottom-e[f.line].height));let H=l.x(R);if(m(H,F,E),R=Pp(b,R+g+d,w?R+S:this.right,t.rtl),v(l.x(R),F,E),w)f.x+=S+h;else if(typeof E.text!="string"){let Z=c.lineHeight;f.y+=hg(E,Z)+h}else f.y+=C}),ou(this.ctx,t.textDirection)}drawTitle(){let t=this.options,e=t.title,n=Ae(e.font),s=Ve(e.padding);if(!e.display)return;let r=fs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=n.size/2,c=s.top+l,h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=Be(t.align,u,this.right-d);else{let g=this.columnSizes.reduce((_,p)=>Math.max(_,p.height),0);h=c+Be(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}let f=Be(a,u,u+d);o.textAlign=r.textAlign(Pl(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,Ni(o,e.text,f,h,n)}_computeTitleHeight(){let t=this.options.title,e=Ae(t.font),n=Ve(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if(zn(t,this.left,this.right)&&zn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],zn(t,s.left,s.left+s.width)&&zn(e,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(t){let e=this.options;if(!L1(t.type,e))return;let n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){let s=this._hoveredItem,r=I1(s,n);s&&!r&&ce(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&ce(e.onHover,[t,n,this],this)}else n&&ce(e.onClick,[t,n,this],this)}};function D1(i,t,e,n,s){let r=O1(n,i,t,e),o=F1(s,n,t.lineHeight);return{itemWidth:r,itemHeight:o}}function O1(i,t,e,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+n.measureText(s).width}function F1(i,t,e){let n=i;return typeof t.text!="string"&&(n=hg(t,e)),n}function hg(i,t){let e=i.text?i.text.length:0;return t*e}function L1(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var U1={id:"legend",_element:Zl,start(i,t,e){let n=i.legend=new Zl({ctx:i.ctx,options:e,chart:i});qe.configure(i,n,e),qe.addBox(i,n)},stop(i){qe.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){let n=i.legend;qe.configure(i,n,e),n.options=e},afterUpdate(i){let t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){let n=t.datasetIndex,s=e.chart;s.isDatasetVisible(n)?(s.hide(n),t.hidden=!0):(s.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){let t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{let c=l.controller.getStyle(e?0:void 0),h=Ve(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}},xo=class extends Pn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let s=ue(n.text)?n.text.length:1;this._padding=Ve(n.padding);let r=s*Ae(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){let t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){let{top:e,left:n,bottom:s,right:r,options:o}=this,a=o.align,l=0,c,h,u;return this.isHorizontal()?(h=Be(a,n,r),u=e+t,c=r-n):(o.position==="left"?(h=n+t,u=Be(a,s,e),l=Jt*-.5):(h=r-t,u=Be(a,e,s),l=Jt*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let n=Ae(e.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Ni(t,e.text,0,0,n,{color:e.color,maxWidth:l,rotation:c,textAlign:Pl(e.align),textBaseline:"middle",translation:[o,a]})}};function N1(i,t){let e=new xo({ctx:i.ctx,options:t,chart:i});qe.configure(i,e,t),qe.addBox(i,e),i.titleBlock=e}var k1={id:"title",_element:xo,start(i,t,e){N1(i,e)},stop(i){let t=i.titleBlock;qe.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){let n=i.titleBlock;qe.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Vl=new WeakMap,B1={id:"subtitle",start(i,t,e){let n=new xo({ctx:i.ctx,options:e,chart:i});qe.configure(i,n,e),qe.addBox(i,n),Vl.set(i,n)},stop(i){qe.removeBox(i,Vl.get(i)),Vl.delete(i)},beforeUpdate(i,t,e){let n=Vl.get(i);qe.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},go={average(i){if(!i.length)return!1;let t,e,n=new Set,s=0,r=0;for(t=0,e=i.length;t<e;++t){let a=i[t].element;if(a&&a.hasValue()){let l=a.tooltipPosition();n.add(l.x),s+=l.y,++r}}return r===0||n.size===0?!1:{x:[...n].reduce((a,l)=>a+l)/n.size,y:s/r}},nearest(i,t){if(!i.length)return!1;let e=t.x,n=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){let l=i[r].element;if(l&&l.hasValue()){let c=l.getCenterPoint(),h=wl(t,c);h<s&&(s=h,a=l)}}if(a){let l=a.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function Hn(i,t){return t&&(ue(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function di(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function V1(i,t){let{element:e,datasetIndex:n,index:s}=t,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:e}}function Rm(i,t){let e=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=t,l=Ae(t.bodyFont),c=Ae(t.titleFont),h=Ae(t.footerFont),u=r.length,d=s.length,f=n.length,g=Ve(t.padding),_=g.height,p=0,m=n.reduce((y,C)=>y+C.before.length+C.lines.length+C.after.length,0);if(m+=i.beforeBody.length+i.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),m){let y=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*y+(m-f)*l.lineHeight+(m-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let v=0,w=function(y){p=Math.max(p,e.measureText(y).width+v)};return e.save(),e.font=c.string,re(i.title,w),e.font=l.string,re(i.beforeBody.concat(i.afterBody),w),v=t.displayColors?o+2+t.boxPadding:0,re(n,y=>{re(y.before,w),re(y.lines,w),re(y.after,w)}),v=0,e.font=h.string,re(i.footer,w),e.restore(),p+=g.width,{width:p,height:_}}function z1(i,t){let{y:e,height:n}=t;return e<n/2?"top":e>i.height-n/2?"bottom":"center"}function H1(i,t,e,n){let{x:s,width:r}=n,o=e.caretSize+e.caretPadding;if(i==="left"&&s+r+o>t.width||i==="right"&&s-r-o<0)return!0}function G1(i,t,e,n){let{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=i,c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),H1(c,i,t,e)&&(c="center"),c}function Im(i,t,e){let n=e.yAlign||t.yAlign||z1(i,e);return{xAlign:e.xAlign||t.xAlign||G1(i,t,e,n),yAlign:n}}function W1(i,t){let{x:e,width:n}=i;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function X1(i,t,e){let{y:n,height:s}=i;return t==="top"?n+=e:t==="bottom"?n-=s+e:n-=s/2,n}function Dm(i,t,e,n){let{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=ki(o),g=W1(t,a),_=X1(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:Re(g,0,n.width-t.width),y:Re(_,0,n.height-t.height)}}function zl(i,t,e){let n=Ve(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-n.right:i.x+n.left}function Om(i){return Hn([],di(i))}function q1(i,t,e){return hi(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Fm(i,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}var ug={beforeTitle:Vn,title(i){if(i.length>0){let t=i[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:Vn,beforeBody:Vn,beforeLabel:Vn,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");let e=i.formattedValue;return Gt(e)||(t+=e),t},labelColor(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Vn,afterBody:Vn,beforeFooter:Vn,footer:Vn,afterFooter:Vn};function tn(i,t,e,n){let s=i[t].call(e,n);return typeof s>"u"?ug[t].call(e,n):s}var Lm=(()=>{class i extends Pn{static positioners=go;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let n=this.chart,s=this.options.setContext(this.getContext()),r=s.enabled&&n.options.animation&&s.animations,o=new Xl(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=q1(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){let{callbacks:s}=n,r=tn(s,"beforeTitle",this,e),o=tn(s,"title",this,e),a=tn(s,"afterTitle",this,e),l=[];return l=Hn(l,di(r)),l=Hn(l,di(o)),l=Hn(l,di(a)),l}getBeforeBody(e,n){return Om(tn(n.callbacks,"beforeBody",this,e))}getBody(e,n){let{callbacks:s}=n,r=[];return re(e,o=>{let a={before:[],lines:[],after:[]},l=Fm(s,o);Hn(a.before,di(tn(l,"beforeLabel",this,o))),Hn(a.lines,tn(l,"label",this,o)),Hn(a.after,di(tn(l,"afterLabel",this,o))),r.push(a)}),r}getAfterBody(e,n){return Om(tn(n.callbacks,"afterBody",this,e))}getFooter(e,n){let{callbacks:s}=n,r=tn(s,"beforeFooter",this,e),o=tn(s,"footer",this,e),a=tn(s,"afterFooter",this,e),l=[];return l=Hn(l,di(r)),l=Hn(l,di(o)),l=Hn(l,di(a)),l}_createItems(e){let n=this._active,s=this.chart.data,r=[],o=[],a=[],l=[],c,h;for(c=0,h=n.length;c<h;++c)l.push(V1(this.chart,n[c]));return e.filter&&(l=l.filter((u,d,f)=>e.filter(u,d,f,s))),e.itemSort&&(l=l.sort((u,d)=>e.itemSort(u,d,s))),re(l,u=>{let d=Fm(e.callbacks,u);r.push(tn(d,"labelColor",this,u)),o.push(tn(d,"labelPointStyle",this,u)),a.push(tn(d,"labelTextColor",this,u))}),this.labelColors=r,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=l,l}update(e,n){let s=this.options.setContext(this.getContext()),r=this._active,o,a=[];if(!r.length)this.opacity!==0&&(o={opacity:0});else{let l=go[s.position].call(this,r,this._eventPosition);a=this._createItems(s),this.title=this.getTitle(a,s),this.beforeBody=this.getBeforeBody(a,s),this.body=this.getBody(a,s),this.afterBody=this.getAfterBody(a,s),this.footer=this.getFooter(a,s);let c=this._size=Rm(this,s),h=Object.assign({},l,c),u=Im(this.chart,s,h),d=Dm(s,h,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:d.x,y:d.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,s,r){let o=this.getCaretPosition(e,s,r);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(e,n,s){let{xAlign:r,yAlign:o}=this,{caretSize:a,cornerRadius:l}=s,{topLeft:c,topRight:h,bottomLeft:u,bottomRight:d}=ki(l),{x:f,y:g}=e,{width:_,height:p}=n,m,v,w,y,C,E;return o==="center"?(C=g+p/2,r==="left"?(m=f,v=m-a,y=C+a,E=C-a):(m=f+_,v=m+a,y=C-a,E=C+a),w=m):(r==="left"?v=f+Math.max(c,u)+a:r==="right"?v=f+_-Math.max(h,d)-a:v=this.caretX,o==="top"?(y=g,C=y-a,m=v-a,w=v+a):(y=g+p,C=y+a,m=v+a,w=v-a),E=y),{x1:m,x2:v,x3:w,y1:y,y2:C,y3:E}}drawTitle(e,n,s){let r=this.title,o=r.length,a,l,c;if(o){let h=fs(s.rtl,this.x,this.width);for(e.x=zl(this,s.titleAlign,s),n.textAlign=h.textAlign(s.titleAlign),n.textBaseline="middle",a=Ae(s.titleFont),l=s.titleSpacing,n.fillStyle=s.titleColor,n.font=a.string,c=0;c<o;++c)n.fillText(r[c],h.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+l,c+1===o&&(e.y+=s.titleMarginBottom-l)}}_drawColorBox(e,n,s,r,o){let a=this.labelColors[s],l=this.labelPointStyles[s],{boxHeight:c,boxWidth:h}=o,u=Ae(o.bodyFont),d=zl(this,"left",o),f=r.x(d),g=c<u.lineHeight?(u.lineHeight-c)/2:0,_=n.y+g;if(o.usePointStyle){let p={radius:Math.min(h,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},m=r.leftForLtr(f,h)+h/2,v=_+c/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,Il(e,p,m,v),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,Il(e,p,m,v)}else{e.lineWidth=Xt(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let p=r.leftForLtr(f,h),m=r.leftForLtr(r.xPlus(f,1),h-2),v=ki(a.borderRadius);Object.values(v).some(w=>w!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,rr(e,{x:p,y:_,w:h,h:c,radius:v}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),rr(e,{x:m,y:_+1,w:h-2,h:c-2,radius:v}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(p,_,h,c),e.strokeRect(p,_,h,c),e.fillStyle=a.backgroundColor,e.fillRect(m,_+1,h-2,c-2))}e.fillStyle=this.labelTextColors[s]}drawBody(e,n,s){let{body:r}=this,{bodySpacing:o,bodyAlign:a,displayColors:l,boxHeight:c,boxWidth:h,boxPadding:u}=s,d=Ae(s.bodyFont),f=d.lineHeight,g=0,_=fs(s.rtl,this.x,this.width),p=function(b){n.fillText(b,_.x(e.x+g),e.y+f/2),e.y+=f+o},m=_.textAlign(a),v,w,y,C,E,A,P;for(n.textAlign=a,n.textBaseline="middle",n.font=d.string,e.x=zl(this,m,s),n.fillStyle=s.bodyColor,re(this.beforeBody,p),g=l&&m!=="right"?a==="center"?h/2+u:h+2+u:0,C=0,A=r.length;C<A;++C){for(v=r[C],w=this.labelTextColors[C],n.fillStyle=w,re(v.before,p),y=v.lines,l&&y.length&&(this._drawColorBox(n,e,C,_,s),f=Math.max(d.lineHeight,c)),E=0,P=y.length;E<P;++E)p(y[E]),f=d.lineHeight;re(v.after,p)}g=0,f=d.lineHeight,re(this.afterBody,p),e.y-=o}drawFooter(e,n,s){let r=this.footer,o=r.length,a,l;if(o){let c=fs(s.rtl,this.x,this.width);for(e.x=zl(this,s.footerAlign,s),e.y+=s.footerMarginTop,n.textAlign=c.textAlign(s.footerAlign),n.textBaseline="middle",a=Ae(s.footerFont),n.fillStyle=s.footerColor,n.font=a.string,l=0;l<o;++l)n.fillText(r[l],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+s.footerSpacing}}drawBackground(e,n,s,r){let{xAlign:o,yAlign:a}=this,{x:l,y:c}=e,{width:h,height:u}=s,{topLeft:d,topRight:f,bottomLeft:g,bottomRight:_}=ki(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(l+d,c),a==="top"&&this.drawCaret(e,n,s,r),n.lineTo(l+h-f,c),n.quadraticCurveTo(l+h,c,l+h,c+f),a==="center"&&o==="right"&&this.drawCaret(e,n,s,r),n.lineTo(l+h,c+u-_),n.quadraticCurveTo(l+h,c+u,l+h-_,c+u),a==="bottom"&&this.drawCaret(e,n,s,r),n.lineTo(l+g,c+u),n.quadraticCurveTo(l,c+u,l,c+u-g),a==="center"&&o==="left"&&this.drawCaret(e,n,s,r),n.lineTo(l,c+d),n.quadraticCurveTo(l,c,l+d,c),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){let n=this.chart,s=this.$animations,r=s&&s.x,o=s&&s.y;if(r||o){let a=go[e.position].call(this,this._active,this._eventPosition);if(!a)return;let l=this._size=Rm(this,e),c=Object.assign({},a,this._size),h=Im(n,e,c),u=Dm(e,c,h,n);(r._to!==u.x||o._to!==u.y)&&(this.xAlign=h.xAlign,this.yAlign=h.yAlign,this.width=l.width,this.height=l.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){let n=this.options.setContext(this.getContext()),s=this.opacity;if(!s)return;this._updateAnimationTarget(n);let r={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;let a=Ve(n.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&l&&(e.save(),e.globalAlpha=s,this.drawBackground(o,e,r,n),ru(e,n.textDirection),o.y+=a.top,this.drawTitle(o,e,n),this.drawBody(o,e,n),this.drawFooter(o,e,n),ou(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){let s=this._active,r=e.map(({datasetIndex:l,index:c})=>{let h=this.chart.getDatasetMeta(l);if(!h)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:h.data[c],index:c}}),o=!ro(s,r),a=this._positionChanged(r,n);(o||a)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,s=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,o=this._active||[],a=this._getActiveElements(e,o,n,s),l=this._positionChanged(a,e),c=n||!ro(a,o)||l;return c&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),c}_getActiveElements(e,n,s,r){let o=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,o.mode,o,s);return o.reverse&&a.reverse(),a}_positionChanged(e,n){let{caretX:s,caretY:r,options:o}=this,a=go[o.position].call(this,e,n);return a!==!1&&(s!==a.x||r!==a.y)}}return i})(),Y1={id:"tooltip",_element:Lm,positioners:go,afterInit(i,t,e){e&&(i.tooltip=new Lm({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){let t=i.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",fi(Xn({},e),{cancelable:!0}))===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){let e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ug},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},j1=Object.freeze({__proto__:null,Colors:o1,Decimation:h1,Filler:R1,Legend:U1,SubTitle:B1,Title:k1,Tooltip:Y1}),$1=(i,t,e,n)=>(typeof t=="string"?(e=i.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Z1(i,t,e,n){let s=i.indexOf(t);if(s===-1)return $1(i,t,e,n);let r=i.lastIndexOf(t);return s!==r?e:s}var K1=(i,t)=>i===null?null:Re(Math.round(i),0,t);function Um(i){let t=this.getLabels();return i>=0&&i<t.length?t[i]:i}var J1=(()=>{class i extends gs{static id="category";static defaults={ticks:{callback:Um}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let n=this._addedLabels;if(n.length){let s=this.getLabels();for(let{index:r,label:o}of n)s[r]===o&&s.splice(r,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Gt(e))return null;let s=this.getLabels();return n=isFinite(n)&&s[n]===e?n:Z1(s,e,Ft(n,e),this._addedLabels),K1(n,s.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:n}=this.getUserBounds(),{min:s,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(s=0),n||(r=this.getLabels().length-1)),this.min=s,this.max=r}buildTicks(){let e=this.min,n=this.max,s=this.options.offset,r=[],o=this.getLabels();o=e===0&&n===o.length-1?o:o.slice(e,n+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let a=e;a<=n;a++)r.push({value:a});return r}getLabelForValue(e){return Um.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}return i})();function Q1(i,t){let e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=i,f=r||1,g=h-1,{min:_,max:p}=t,m=!Gt(o),v=!Gt(a),w=!Gt(c),y=(p-_)/(u+1),C=kh((p-_)/g/f)*f,E,A,P,b;if(C<1e-14&&!m&&!v)return[{value:_},{value:p}];b=Math.ceil(p/C)-Math.floor(_/C),b>g&&(C=kh(b*C/g/f)*f),Gt(l)||(E=Math.pow(10,l),C=Math.ceil(C*E)/E),s==="ticks"?(A=Math.floor(_/C)*C,P=Math.ceil(p/C)*C):(A=_,P=p),m&&v&&r&&Mp((a-o)/r,C/1e3)?(b=Math.round(Math.min((a-o)/C,h)),C=(a-o)/b,A=o,P=a):w?(A=m?o:A,P=v?a:P,b=c-1,C=(P-A)/b):(b=(P-A)/C,nr(b,Math.round(b),C/1e3)?b=Math.round(b):b=Math.ceil(b));let S=Math.max(Vh(C),Vh(A));E=Math.pow(10,Gt(l)?S:l),A=Math.round(A*E)/E,P=Math.round(P*E)/E;let R=0;for(m&&(d&&A!==o?(e.push({value:o}),A<o&&R++,nr(Math.round((A+R*C)*E)/E,o,Nm(o,y,i))&&R++):A<o&&R++);R<b;++R){let F=Math.round((A+R*C)*E)/E;if(v&&F>a)break;e.push({value:F})}return v&&d&&P!==a?e.length&&nr(e[e.length-1].value,a,Nm(a,y,i))?e[e.length-1].value=a:e.push({value:a}):(!v||P===a)&&e.push({value:P}),e}function Nm(i,t,{horizontal:e,minRotation:n}){let s=xn(n),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+i).length;return Math.min(t/r,o)}var cr=class extends gs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Gt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds(),{min:s,max:r}=this,o=l=>s=e?s:l,a=l=>r=n?r:l;if(t){let l=Tn(s),c=Tn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:n}=t,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,n=this.getTickLimit();n=Math.max(2,n);let s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=Q1(s,r);return t.bounds==="ticks"&&Bh(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){let t=this.ticks,e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){let s=(n-e)/Math.max(t.length-1,1)/2;e-=s,n+=s}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return sr(t,this.chart.options.locale,this.options.ticks.format)}},Uu=class extends cr{static id="linear";static defaults={ticks:{callback:oo.formatters.numeric}};determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=be(t)?t:0,this.max=be(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,n=xn(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}},yo=i=>Math.floor(li(i)),ms=(i,t)=>Math.pow(10,yo(i)+t);function km(i){return i/Math.pow(10,yo(i))===1}function Bm(i,t,e){let n=Math.pow(10,e),s=Math.floor(i/n);return Math.ceil(t/n)-s}function tw(i,t){let e=t-i,n=yo(e);for(;Bm(i,t,n)>10;)n++;for(;Bm(i,t,n)<10;)n--;return Math.min(n,yo(i))}function ew(i,{min:t,max:e}){t=Qe(i.min,t);let n=[],s=yo(t),r=tw(t,e),o=r<0?Math.pow(10,Math.abs(r)):1,a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10,u=Math.floor((c-h)/Math.pow(10,r)),d=Qe(i.min,Math.round((l+h+u*Math.pow(10,r))*o)/o);for(;d<e;)n.push({value:d,major:km(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(r++,u=2,o=r>=0?1:o),d=Math.round((l+h+u*Math.pow(10,r))*o)/o;let f=Qe(i.max,d);return n.push({value:f,major:km(f),significand:u}),n}var Nu=class extends gs{static id="logarithmic";static defaults={ticks:{callback:oo.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let n=cr.prototype.parse.apply(this,[t,e]);if(n===0){this._zero=!0;return}return be(n)&&n>0?n:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=be(t)?Math.max(0,t):null,this.max=be(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!be(this._userMin)&&(this.min=t===ms(this.min,0)?ms(this.min,-1):ms(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),n=this.min,s=this.max,r=a=>n=t?n:a,o=a=>s=e?s:a;n===s&&(n<=0?(r(1),o(10)):(r(ms(n,-1)),o(ms(s,1)))),n<=0&&r(ms(s,-1)),s<=0&&o(ms(n,1)),this.min=n,this.max=s}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},n=ew(e,this);return t.bounds==="ticks"&&Bh(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":sr(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=li(t),this._valueRange=li(this.max)-li(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(li(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};function ku(i){let t=i.ticks;if(t.display&&i.display){let e=Ve(t.backdropPadding);return Ft(t.font&&t.font.size,pe.font.size)+e.height}return 0}function nw(i,t,e){return e=ue(e)?e:[e],{w:Ip(i,t.string,e),h:e.length*t.lineHeight}}function Vm(i,t,e,n,s){return i===n||i===s?{start:t-e/2,end:t+e/2}:i<n||i>s?{start:t-e,end:t}:{start:t,end:t+e}}function iw(i){let t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),n=[],s=[],r=i._pointLabels.length,o=i.options.pointLabels,a=o.centerPointLabels?Jt/r:0;for(let l=0;l<r;l++){let c=o.setContext(i.getPointLabelContext(l));s[l]=c.padding;let h=i.getPointPosition(l,i.drawingArea+s[l],a),u=Ae(c.font),d=nw(i.ctx,u,i._pointLabels[l]);n[l]=d;let f=ke(i.getIndexAngle(l)+a),g=Math.round(Al(f)),_=Vm(g,h.x,d.w,0,180),p=Vm(g,h.y,d.h,90,270);sw(e,t,f,_,p)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=aw(i,n,s)}function sw(i,t,e,n,s){let r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e)),a=0,l=0;n.start<t.l?(a=(t.l-n.start)/r,i.l=Math.min(i.l,t.l-a)):n.end>t.r&&(a=(n.end-t.r)/r,i.r=Math.max(i.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,i.t=Math.min(i.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,i.b=Math.max(i.b,t.b+l))}function rw(i,t,e){let n=i.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,l=i.getPointPosition(t,n+s+o,r),c=Math.round(Al(ke(l.angle+we))),h=hw(l.y,a.h,c),u=lw(c),d=cw(l.x,a.w,u);return{visible:!0,x:l.x,y:h,textAlign:u,left:d,top:h,right:d+a.w,bottom:h+a.h}}function ow(i,t){if(!t)return!0;let{left:e,top:n,right:s,bottom:r}=i;return!(Bn({x:e,y:n},t)||Bn({x:e,y:r},t)||Bn({x:s,y:n},t)||Bn({x:s,y:r},t))}function aw(i,t,e){let n=[],s=i._pointLabels.length,r=i.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:ku(r)/2,additionalAngle:o?Jt/s:0},c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];let u=rw(i,h,l);n.push(u),a==="auto"&&(u.visible=ow(u,c),u.visible&&(c=u))}return n}function lw(i){return i===0||i===180?"center":i<180?"left":"right"}function cw(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function hw(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function uw(i,t,e){let{left:n,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Gt(a)){let l=ki(t.borderRadius),c=Ve(t.backdropPadding);i.fillStyle=a;let h=n-c.left,u=s-c.top,d=r-n+c.width,f=o-s+c.height;Object.values(l).some(g=>g!==0)?(i.beginPath(),rr(i,{x:h,y:u,w:d,h:f,radius:l}),i.fill()):i.fillRect(h,u,d,f)}}function dw(i,t){let{ctx:e,options:{pointLabels:n}}=i;for(let s=t-1;s>=0;s--){let r=i._pointLabelItems[s];if(!r.visible)continue;let o=n.setContext(i.getPointLabelContext(s));uw(e,o,r);let a=Ae(o.font),{x:l,y:c,textAlign:h}=r;Ni(e,i._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function dg(i,t,e,n){let{ctx:s}=i;if(e)s.arc(i.xCenter,i.yCenter,t,0,de);else{let r=i.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<n;o++)r=i.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function fw(i,t,e,n,s){let r=i.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!n||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),dg(i,e,o,n),r.closePath(),r.stroke(),r.restore())}function pw(i,t,e){return hi(i,{label:e,index:t,type:"pointLabel"})}var Bu=class extends cr{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:oo.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=Ve(ku(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=be(t)&&!isNaN(t)?t:0,this.max=be(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ku(this.options))}generateTickLabels(t){cr.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{let s=ce(this.options.pointLabels.callback,[e,n],this);return s||s===0?s:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){let t=this.options;t.display&&t.pointLabels.display?iw(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,s))}getIndexAngle(t){let e=de/(this._pointLabels.length||1),n=this.options.startAngle||0;return ke(t*e+xn(n))}getDistanceFromCenterForValue(t){if(Gt(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Gt(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let n=e[t];return pw(this.getContext(),t,n)}}getPointPosition(t,e,n=0){let s=this.getIndexAngle(t)-we+n;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:n,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:s,bottom:r}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let n=this.ctx;n.save(),n.beginPath(),dg(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:n,grid:s,border:r}=e,o=this._pointLabels.length,a,l,c;if(e.pointLabels.display&&dw(this,o),s.display&&this.ticks.forEach((h,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);let d=this.getContext(u),f=s.setContext(d),g=r.setContext(d);fw(this,f,l,o,g)}}),n.display){for(t.save(),a=o-1;a>=0;a--){let h=n.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=h;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;let s=this.getIndexAngle(0),r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;let c=n.setContext(this.getContext(l)),h=Ae(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;let u=Ve(c.backdropPadding);t.fillRect(-o/2-u.left,-r-h.size/2-u.top,o+u.width,h.size+u.height)}Ni(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}},tc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},en=Object.keys(tc);function zm(i,t){return i-t}function Hm(i,t){if(Gt(t))return null;let e=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts,o=t;return typeof n=="function"&&(o=n(o)),be(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(ds(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Gm(i,t,e,n){let s=en.length;for(let r=en.indexOf(i);r<s-1;++r){let o=tc[en[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=n)return en[r]}return en[s-1]}function mw(i,t,e,n,s){for(let r=en.length-1;r>=en.indexOf(e);r--){let o=en[r];if(tc[o].common&&i._adapter.diff(s,n,o)>=t-1)return o}return en[e?en.indexOf(e):0]}function gw(i){for(let t=en.indexOf(i)+1,e=en.length;t<e;++t)if(tc[en[t]].common)return en[t]}function Wm(i,t,e){if(!e)i[t]=!0;else if(e.length){let{lo:n,hi:s}=Tl(e,t),r=e[n]>=t?e[n]:e[s];i[r]=!0}}function _w(i,t,e,n){let s=i._adapter,r=+s.startOf(t[0].value,n),o=t[t.length-1].value,a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=e[a],l>=0&&(t[l].major=!0);return t}function Xm(i,t,e){let n=[],s={},r=t.length,o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,n.push({value:a,major:!1});return r===0||!e?n:_w(i,n,s,e)}var Vu=(()=>{class i extends gs{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){let s=e.time||(e.time={}),r=this._adapter=new TM._date(e.adapters.date);r.init(n),tr(s.displayFormats,r.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Hm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,n=this._adapter,s=e.time.unit||"day",{min:r,max:o,minDefined:a,maxDefined:l}=this.getUserBounds();function c(h){!a&&!isNaN(h.min)&&(r=Math.min(r,h.min)),!l&&!isNaN(h.max)&&(o=Math.max(o,h.max))}(!a||!l)&&(c(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=be(r)&&!isNaN(r)?r:+n.startOf(Date.now(),s),o=be(o)&&!isNaN(o)?o:+n.endOf(Date.now(),s)+1,this.min=Math.min(r,o-1),this.max=Math.max(r+1,o)}_getLabelBounds(){let e=this.getLabelTimestamps(),n=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],s=e[e.length-1]),{min:n,max:s}}buildTicks(){let e=this.options,n=e.time,s=e.ticks,r=s.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let o=this.min,a=this.max,l=Cp(r,o,a);return this._unit=n.unit||(s.autoSkip?Gm(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):mw(this,l.length,n.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:gw(this._unit),this.initOffsets(r),e.reverse&&l.reverse(),Xm(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,s=0,r,o;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?s=o:s=(o-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;n=Re(n,0,a),s=Re(s,0,a),this._offsets={start:n,end:s,factor:1/(n+1+s)}}_generate(){let e=this._adapter,n=this.min,s=this.max,r=this.options,o=r.time,a=o.unit||Gm(o.minUnit,n,s,this._getLabelCapacity(n)),l=Ft(r.ticks.stepSize,1),c=a==="week"?o.isoWeekday:!1,h=ds(c)||c===!0,u={},d=n,f,g;if(h&&(d=+e.startOf(d,"isoWeek",c)),d=+e.startOf(d,h?"day":a),e.diff(s,n,a)>1e5*l)throw new Error(n+" and "+s+" are too far apart with stepSize of "+l+" "+a);let _=r.ticks.source==="data"&&this.getDataTimestamps();for(f=d,g=0;f<s;f=+e.add(f,l,a),g++)Wm(u,f,_);return(f===s||r.bounds==="ticks"||g===1)&&Wm(u,f,_),Object.keys(u).sort(zm).map(p=>+p)}getLabelForValue(e){let n=this._adapter,s=this.options.time;return s.tooltipFormat?n.format(e,s.tooltipFormat):n.format(e,s.displayFormats.datetime)}format(e,n){let r=this.options.time.displayFormats,o=this._unit,a=n||r[o];return this._adapter.format(e,a)}_tickFormatFunction(e,n,s,r){let o=this.options,a=o.ticks.callback;if(a)return ce(a,[e,n,s],this);let l=o.time.displayFormats,c=this._unit,h=this._majorUnit,u=c&&l[c],d=h&&l[h],f=s[n],g=h&&d&&f&&f.major;return this._adapter.format(e,r||(g?d:u))}generateTickLabels(e){let n,s,r;for(n=0,s=e.length;n<s;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let n=this._offsets,s=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+s)*n.factor)}getValueForPixel(e){let n=this._offsets,s=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+s*(this.max-this.min)}_getLabelSize(e){let n=this.options.ticks,s=this.ctx.measureText(e).width,r=xn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(r),a=Math.sin(r),l=this._resolveTickFontOptions(0).size;return{w:s*o+l*a,h:s*a+l*o}}_getLabelCapacity(e){let n=this.options.time,s=n.displayFormats,r=s[n.unit]||s.millisecond,o=this._tickFormatFunction(e,0,Xm(this,[e],this._majorUnit),r),a=this._getLabelSize(o),l=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return l>0?l:1}getDataTimestamps(){let e=this._cache.data||[],n,s;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,s=r.length;n<s;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],n,s;if(e.length)return e;let r=this.getLabels();for(n=0,s=r.length;n<s;++n)e.push(Hm(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Gh(e.sort(zm))}}return i})();function Hl(i,t,e){let n=0,s=i.length-1,r,o,a,l;e?(t>=i[n].pos&&t<=i[s].pos&&({lo:n,hi:s}=kn(i,"pos",t)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(t>=i[n].time&&t<=i[s].time&&({lo:n,hi:s}=kn(i,"time",t)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);let c=o-r;return c?a+(l-a)*(t-r)/c:a}var zu=class extends Vu{static id="timeseries";static defaults=Vu.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Hl(e,this.min),this._tableRange=Hl(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:n}=this,s=[],r=[],o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=n&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){let t=this.min,e=this.max,n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(Hl(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return Hl(this._table,n*this._tableRange+this._minPos,!0)}},xw=Object.freeze({__proto__:null,CategoryScale:J1,LinearScale:Uu,LogarithmicScale:Nu,RadialLinearScale:Bu,TimeScale:Vu,TimeSeriesScale:zu}),fg=[AM,QS,j1,xw];var yw=["particleCanvas"],vw=["demoCanvas"],bw=["ctaCanvas"],Mw=["performanceChart"];function Sw(i,t){if(i&1&&(W(0,"div",84)(1,"div",85),tt(2),j(),W(3,"div",86),tt(4),j()()),i&2){let e=t.$implicit,n=je();mt(),lc("data-value",e.value),mt(),nd(" ",n.animatedValue(e.id),"",e.suffix," "),mt(2),Oe(e.label)}}function ww(i,t){if(i&1){let e=ur();W(0,"div",87),qn("mouseenter",function(){let s=pi(e).$implicit,r=je();return mi(r.hoveredTech.set(s.name))})("mouseleave",function(){pi(e);let s=je();return mi(s.hoveredTech.set(null))}),W(1,"div",88),se(2,"div",89)(3,"i"),j(),W(4,"h4"),tt(5),j(),W(6,"div",90)(7,"div",91)(8,"span",92),tt(9),j()()(),W(10,"p",93),tt(11),j()()}if(i&2){let e=t.$implicit,n=t.index,s=je();xs("animation-delay",n*100,"ms"),kt("@techCardAnimation",void 0),mt(2),Wi("active",s.hoveredTech()===e.name),mt(),cc("tech-icon-"+e.icon),mt(2),Oe(e.name),mt(2),xs("width",e.proficiency,"%"),Wi("advanced",e.level==="Advanced")("intermediate",e.level==="Intermediate"),mt(2),Oe(e.level),mt(2),Oe(e.description)}}function Cw(i,t){if(i&1){let e=ur();W(0,"button",94),qn("click",function(){let s=pi(e).$implicit,r=je();return mi(r.selectedContribution.set(s.id))}),tt(1),j()}if(i&2){let e=t.$implicit,n=je();Wi("active",n.selectedContribution()===e.id),mt(),Co(" ",e.title," ")}}function Ew(i,t){if(i&1&&(W(0,"span",110),tt(1),j()),i&2){let e=t.$implicit;mt(),Oe(e)}}function Aw(i,t){if(i&1&&(W(0,"div",111)(1,"div",112),se(2,"i"),j(),W(3,"div",113)(4,"div",114),tt(5),j(),W(6,"div",115),tt(7),j(),W(8,"div",116),tt(9),j()()()),i&2){let e=t.$implicit;kt("@bounceIn",void 0),mt(),xs("background",e.color||"#0053A1"),mt(),cc(e.icon||"icon-check"),mt(3),Oe(e.metric),mt(2),Oe(e.context),mt(2),Oe(e.details)}}function Tw(i,t){if(i&1&&(W(0,"li"),se(1,"span",117),tt(2),j()),i&2){let e=t.$implicit;kt("@fadeInLeft",void 0),mt(2),Co(" ",e," ")}}function Pw(i,t){if(i&1){let e=ur();W(0,"button",56),qn("click",function(){let s=pi(e).index,r=je(3);return mi(r.selectedCodeTab.set(s))}),tt(1),j()}if(i&2){let e=t.$implicit,n=t.index,s=je(3);Wi("active",s.selectedCodeTab()===n),mt(),Co(" ",e.title," ")}}function Rw(i,t){if(i&1&&(W(0,"div",125)(1,"h5"),tt(2,"Before"),j(),W(3,"pre"),se(4,"code",126),j()()),i&2){let e=je().ngIf,n=je(3);mt(4),kt("innerHTML",n.highlightCode(e.before,e.language),oc)}}function Iw(i,t){if(i&1&&(W(0,"div",127)(1,"h5"),tt(2,"After"),j(),W(3,"pre"),se(4,"code",126),j()()),i&2){let e=je().ngIf,n=je(3);mt(4),kt("innerHTML",n.highlightCode(e.after,e.language),oc)}}function Dw(i,t){if(i&1&&(W(0,"div",122),Ke(1,Rw,5,1,"div",123)(2,Iw,5,1,"div",124),j()),i&2){let e=t.ngIf;mt(),kt("ngIf",e.before),mt(),kt("ngIf",e.after)}}function Ow(i,t){if(i&1&&(W(0,"div",118)(1,"div",119),Ke(2,Pw,2,3,"button",120),j(),Ke(3,Dw,3,2,"div",121),j()),i&2){let e=je().ngIf,n=je();mt(2),kt("ngForOf",e.codeSnippets),mt(),kt("ngIf",e.codeSnippets&&e.codeSnippets[n.selectedCodeTab()])}}function Fw(i,t){if(i&1&&(W(0,"div",95)(1,"div",96)(2,"h3"),tt(3),j(),W(4,"div",97),Ke(5,Ew,2,1,"span",98),j()(),W(6,"div",99)(7,"div",100)(8,"h4"),se(9,"i",101),tt(10," Problem"),j(),W(11,"p"),tt(12),j()(),W(13,"div",102)(14,"h4"),se(15,"i",103),tt(16," Solution"),j(),W(17,"p"),tt(18),j()()(),W(19,"div",104),Ke(20,Aw,10,8,"div",105),j(),W(21,"div",106)(22,"h4"),tt(23,"Impact & Results"),j(),W(24,"ul",107),Ke(25,Tw,3,2,"li",108),j()(),Ke(26,Ow,4,2,"div",109),j()),i&2){let e=t.ngIf;kt("@slideAnimation",void 0),mt(3),Oe(e.title),mt(2),kt("ngForOf",e.technologies),mt(7),Oe(e.problem),mt(6),Oe(e.solution),mt(2),kt("ngForOf",e.metrics),mt(5),kt("ngForOf",e.impact),mt(),kt("ngIf",e.codeSnippets==null?null:e.codeSnippets.length)}}function Lw(i,t){if(i&1&&(W(0,"span",137),tt(1),j()),i&2){let e=t.$implicit;mt(),Oe(e)}}function Uw(i,t){if(i&1&&(W(0,"div",128),se(1,"div",129),W(2,"div",130)(3,"div",131)(4,"div",132)(5,"span",133),tt(6),j()()(),W(7,"div",134)(8,"h4"),tt(9),j(),W(10,"p"),tt(11),j(),W(12,"div",135),Ke(13,Lw,2,1,"span",136),j()()()()),i&2){let e=t.$implicit,n=t.index;xs("animation-delay",n*200,"ms"),kt("@timelineAnimation",void 0),mt(3),xs("background-image","url("+e.image+")"),mt(3),Oe(e.date),mt(3),Oe(e.title),mt(2),Oe(e.description),mt(2),kt("ngForOf",e.tags)}}Kl.register(...fg);var pg=class i{particleCanvas;demoCanvas;ctaCanvas;performanceChart;destroy$=new $u;platformId=wo(Qu);http=wo(od);isLoaded=yn(!1);hoveredTech=yn(null);selectedContribution=yn("pipeline");selectedCodeTab=yn(0);isAnimating=yn(!0);counterValues=new Map;animatedValue(t){return Math.floor(this.counterValues.get(t)||0)}heroMetrics=yn([{id:"performance",value:70,suffix:"%",label:"Performance Improvement"},{id:"months",value:5,suffix:"",label:"Months at CERN"},{id:"people",value:17500,suffix:"+",label:"CERN Community"},{id:"systems",value:3,suffix:"",label:"Major Refactors"}]);technologies=yn([{name:"Three.js/WebGL",level:"Advanced",icon:"three",description:"Built complex 3D visualization systems with custom shaders",proficiency:90},{name:"Angular/TypeScript",level:"Advanced",icon:"angular",description:"Architected modular, type-safe component systems",proficiency:95},{name:"GLSL Shaders",level:"Intermediate",icon:"shader",description:"Developed custom vertex/fragment shaders for particle rendering",proficiency:75},{name:"C++/Gaudi",level:"Intermediate",icon:"cpp",description:"Integrated with CERN's Gaudi framework for data processing",proficiency:65},{name:"Python",level:"Advanced",icon:"python",description:"Automated data pipeline optimization and file processing",proficiency:85},{name:"GitLab CI/CD",level:"Intermediate",icon:"gitlab",description:"Implemented automated testing and deployment pipelines",proficiency:70}]);contributions=yn([{id:"pipeline",title:"Data Pipeline Optimization",problem:"JSON export contained redundant data causing 3-5x file bloat and severe performance degradation when loading events",solution:"Identified and fixed nested loop bug in C++ export, eliminated duplicate tracks, and created Python cleanup script for historical data",impact:["Reduced uncompressed JSON size by 73% (5.8MB to 1.6MB)","Achieved 67% reduction in compressed files","Retroactively cleaned 6 years of historical event data","Improved initial load times by 60%"],metrics:[{metric:"73%",context:"File size reduction",details:"Eliminated duplicate track objects through algorithmic fix",icon:"icon-compress",color:"#00C896"},{metric:"67%",context:"Compression improvement",details:"Better compression ratios from cleaner data structure",icon:"icon-optimize",color:"#0053A1"},{metric:"6 years",context:"Historical data cleaned",details:"Python script with checkpoint/resume for EOS stability",icon:"icon-history",color:"#FF6B35"}],technologies:["C++","Python","JSON","Gaudi Framework"],codeSnippets:[{language:"cpp",title:"Track Export Fix",before:`// Before: Nested loop causing duplicates
for (auto& track : allTracks) {
    for (auto& velo : veloTracks) {
        if (track.hasVelo()) {
            json["tracks"].push_back(track);
            json["tracks"].push_back(velo); // Duplicate!
        }
    }
}`,after:`// After: Proper track filtering
std::set<TrackID> exportedTracks;
for (auto& track : allTracks) {
    if (exportedTracks.insert(track.id()).second) {
        json["tracks"].push_back(track);
    }
}`}]},{id:"camera",title:"Camera & Controls Refactor",problem:"Orthographic and perspective cameras desynchronized, overlay renderer interfered with main view, zoom behavior inconsistent",solution:"Implemented explicit camera synchronization, decoupled overlay system with proper aspect handling, fixed orthographic zoom calculations",impact:["Eliminated all camera desynchronization bugs","Enabled reliable multi-viewport layouts","Improved zoom precision for detector analysis","Reduced camera-related bug reports by 90%"],metrics:[{metric:"100%",context:"Sync reliability",details:"Perfect camera state synchronization between modes",icon:"icon-sync",color:"#00C896"},{metric:"90%",context:"Bug reduction",details:"Camera-related issues virtually eliminated",icon:"icon-bug",color:"#0053A1"},{metric:"4",context:"Viewport support",details:"Multiple synchronized camera views",icon:"icon-view",color:"#FF6B35"}],technologies:["Three.js","TypeScript","WebGL"],codeSnippets:[{language:"typescript",title:"Camera Synchronization",before:`// Before: No synchronization
switchCamera(type: string) {
    this.activeCamera = type === 'ortho' ? 
        this.orthoCamera : this.perspCamera;
}`,after:`// After: Explicit synchronization
switchCamera(type: string) {
    const source = this.activeCamera;
    const target = type === 'ortho' ? 
        this.orthoCamera : this.perspCamera;
    
    // Sync position and orientation
    target.position.copy(source.position);
    target.quaternion.copy(source.quaternion);
    
    // Maintain zoom level equivalence
    if (type === 'ortho') {
        const dist = source.position.length();
        target.zoom = BASE_ZOOM / dist;
    }
    
    this.activeCamera = target;
}`}]},{id:"selection",title:"Selection System Overhaul",problem:"Legacy OutlinePass post-processing caused 60-70% performance overhead, no multi-selection support, visual artifacts",solution:"Replaced with EdgesGeometry approach using custom shaders, native multi-object support, rainbow gradient effects",impact:["60-70% performance improvement in selection operations","Sub-5ms click detection latency","Native multi-object selection capability","Cleaner visual output with true geometric edges"],metrics:[{metric:"70%",context:"Faster selection",details:"Direct geometry vs post-processing",icon:"icon-speed",color:"#00C896"},{metric:"<5ms",context:"Click latency",details:"Near-instant object selection",icon:"icon-click",color:"#0053A1"},{metric:"\u221E",context:"Multi-selection",details:"Unlimited concurrent selections",icon:"icon-select",color:"#FF6B35"}],technologies:["Three.js","GLSL","WebGL","TypeScript"]},{id:"tracks",title:"Unified Tracks Subsystem",problem:"Fragmented track rendering code, no material pooling, inefficient shader compilation, poor API design",solution:"Created three-component architecture with singleton material factory, configuration profiles, and clean manager API",impact:["Reduced material memory footprint by 80%","Unified rendering pipeline for all track types","Extensible architecture for future experiments","Clean, intuitive API for developers"],metrics:[{metric:"80%",context:"Memory reduction",details:"Material pooling and reuse",icon:"icon-memory",color:"#00C896"},{metric:"1",context:"Unified API",details:"Single interface for all tracks",icon:"icon-api",color:"#0053A1"},{metric:"10x",context:"Faster initialization",details:"Shader compilation caching",icon:"icon-rocket",color:"#FF6B35"}],technologies:["Three.js","GLSL Shaders","TypeScript","Design Patterns"]}]);currentContribution=hc(()=>this.contributions().find(t=>t.id===this.selectedContribution()));experiences=yn([{title:"LHCb Detector Visit",date:"April 3, 2025",description:"Toured the LHCb forward spectrometer 100m underground at Point 8",image:"/assets/lhcb-detector.jpg",tags:["Physics","Engineering","Underground"]},{title:"Antiproton Decelerator",date:"April 9, 2025",description:"Explored antimatter research facilities and learned about matter-antimatter asymmetry",image:"/assets/antiproton.jpg",tags:["Antimatter","Research","Innovation"]},{title:"Pr\xE9vessin Data Centre",date:"June 18, 2025",description:"Witnessed Tier-0 computing infrastructure processing petabytes of collision data",image:"/assets/data-centre.jpg",tags:["Computing","Big Data","Infrastructure"]},{title:"ATLAS Collaboration Meeting",date:"July 15, 2025",description:"Presented Phoenix improvements to cross-experiment collaboration",image:"/assets/atlas-meeting.jpg",tags:["Collaboration","Presentation","Networking"]}]);particleScene;particleRenderer;particleCamera;particleSystem;demoScene;demoRenderer;demoCamera;demoControls;demoTracks=[];ngOnInit(){mr(this.platformId)&&(this.startCounterAnimations(),setTimeout(()=>{this.isLoaded.set(!0)},500))}ngAfterViewInit(){mr(this.platformId)&&(this.initParticleSystem(),this.initDemoScene(),this.initPerformanceChart(),this.setupScrollAnimations())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.cleanupThreeJS()}startCounterAnimations(){this.heroMetrics().forEach(t=>{let e=t.value,n=2e3,s=60,r=e/s,o=0,a=Zu(n/s).pipe(Ku(this.destroy$)).subscribe(()=>{o=Math.min(o+r,e),this.counterValues.set(t.id,o),o>=e&&a.unsubscribe()})})}initParticleSystem(){if(!this.particleCanvas)return;let t=this.particleCanvas.nativeElement,e=t.clientWidth,n=t.clientHeight;this.particleScene=new ks,this.particleCamera=new Ne(75,e/n,.1,1e3),this.particleCamera.position.z=50,this.particleRenderer=new Qr({canvas:t,alpha:!0,antialias:!0}),this.particleRenderer.setSize(e,n),this.particleRenderer.setPixelRatio(window.devicePixelRatio);let s=new ln,r=500,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let h=0;h<r*3;h+=3){o[h]=(Math.random()-.5)*100,o[h+1]=(Math.random()-.5)*100,o[h+2]=(Math.random()-.5)*100;let u=new Wt;u.setHSL(Math.random()*.3+.5,.8,.6),a[h]=u.r,a[h+1]=u.g,a[h+2]=u.b}s.setAttribute("position",new We(o,3)),s.setAttribute("color",new We(a,3));let l=new zs({size:2,vertexColors:!0,transparent:!0,opacity:.8,blending:Wr});this.particleSystem=new Lr(s,l),this.particleScene.add(this.particleSystem);let c=()=>{this.isAnimating()&&(requestAnimationFrame(c),this.particleSystem&&(this.particleSystem.rotation.x+=5e-4,this.particleSystem.rotation.y+=.001),this.particleRenderer?.render(this.particleScene,this.particleCamera))};c()}initDemoScene(){if(!this.demoCanvas)return;let t=this.demoCanvas.nativeElement,e=t.clientWidth,n=t.clientHeight;this.demoScene=new ks,this.demoScene.background=new Wt(658983),this.demoCamera=new Ne(60,e/n,.1,1e3),this.demoCamera.position.set(30,30,30),this.demoRenderer=new Qr({canvas:t,antialias:!0}),this.demoRenderer.setSize(e,n),this.demoRenderer.setPixelRatio(window.devicePixelRatio);let s=new Gr(16777215,.6);this.demoScene.add(s);let r=new Hr(16777215,.4);r.position.set(10,10,5),this.demoScene.add(r),this.createDemoTracks();let o=()=>{requestAnimationFrame(o),this.demoRenderer?.render(this.demoScene,this.demoCamera)};o()}createDemoTracks(){if(!this.demoScene)return;let t=[51350,21409,16739125,15267069];for(let e=0;e<4;e++){let n=[],s=10+e*3,r=50;for(let c=0;c<=r;c++){let h=c/r*Math.PI*2,u=Math.cos(h)*s,d=Math.sin(h*2)*5+e*2,f=Math.sin(h)*s;n.push(new N(u,d,f))}let o=new ln().setFromPoints(n),a=new Vs({color:t[e],linewidth:2,transparent:!0,opacity:.8}),l=new Fr(o,a);this.demoScene.add(l),this.demoTracks.push(l)}}initPerformanceChart(){if(!this.performanceChart)return;let t=this.performanceChart.nativeElement.getContext("2d");t&&new Kl(t,{type:"line",data:{labels:["Before","Pipeline Fix","Camera Refactor","Selection Overhaul","Tracks System"],datasets:[{label:"Frame Rate (FPS)",data:[30,45,50,55,60],borderColor:"#00C896",backgroundColor:"rgba(0, 200, 150, 0.1)",tension:.4},{label:"Memory Usage (MB)",data:[250,180,160,120,100],borderColor:"#FF6B35",backgroundColor:"rgba(255, 107, 53, 0.1)",tension:.4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"#E8F4FD"}},title:{display:!0,text:"Performance Improvements Timeline",color:"#E8F4FD",font:{size:16}}},scales:{y:{ticks:{color:"#E8F4FD"},grid:{color:"rgba(232, 244, 253, 0.1)"}},x:{ticks:{color:"#E8F4FD"},grid:{color:"rgba(232, 244, 253, 0.1)"}}}}})}setupScrollAnimations(){if(!mr(this.platformId))return;let t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".metric-card, .tech-card, .challenge-card").forEach(e=>t.observe(e))}cleanupThreeJS(){this.particleRenderer?.dispose(),this.demoRenderer?.dispose()}scrollToContent(){document.querySelector(".context-section")?.scrollIntoView({behavior:"smooth"})}resetDemo(){this.demoCamera&&(this.demoCamera.position.set(30,30,30),this.demoCamera.lookAt(0,0,0))}toggleAnimation(){this.isAnimating.set(!this.isAnimating())}highlightCode(t,e){let n={cpp:["for","auto","if","return","void","const","std"],typescript:["const","let","function","return","if","this","type","interface"]},s=t;return(n[e]||[]).forEach(o=>{let a=new RegExp(`\\b${o}\\b`,"g");s=s.replace(a,`<span style="color: #00C896;">${o}</span>`)}),s=s.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,'<span style="color: #FF6B35;">$&</span>'),s=s.replace(/(\/\/.*$)/gm,'<span style="color: #666;">$&</span>'),s}onWindowResize(){if(mr(this.platformId)){if(this.particleCamera&&this.particleRenderer&&this.particleCanvas){let t=this.particleCanvas.nativeElement;this.particleCamera.aspect=t.clientWidth/t.clientHeight,this.particleCamera.updateProjectionMatrix(),this.particleRenderer.setSize(t.clientWidth,t.clientHeight)}if(this.demoCamera&&this.demoRenderer&&this.demoCanvas){let t=this.demoCanvas.nativeElement;this.demoCamera.aspect=t.clientWidth/t.clientHeight,this.demoCamera.updateProjectionMatrix(),this.demoRenderer.setSize(t.clientWidth,t.clientHeight)}}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=ed({type:i,selectors:[["app-cern-portfolio"]],viewQuery:function(e,n){if(e&1&&(dr(yw,5),dr(vw,5),dr(bw,5),dr(Mw,5)),e&2){let s;fr(s=pr())&&(n.particleCanvas=s.first),fr(s=pr())&&(n.demoCanvas=s.first),fr(s=pr())&&(n.ctaCanvas=s.first),fr(s=pr())&&(n.performanceChart=s.first)}},hostBindings:function(e,n){e&1&&qn("resize",function(){return n.onWindowResize()},td)},decls:242,vars:28,consts:[["particleCanvas",""],["demoCanvas",""],["performanceChart",""],["ctaCanvas",""],[1,"cern-portfolio"],[1,"hero-section"],[1,"particle-background"],[1,"hero-overlay"],[1,"hero-content"],[1,"hero-badge"],[1,"pulse-dot"],[1,"hero-title"],[1,"gradient-text"],[1,"highlight"],[1,"subtitle"],[1,"hero-meta"],[1,"meta-item"],[1,"icon","icon-calendar"],[1,"icon","icon-location"],[1,"icon","icon-role"],[1,"hero-metrics"],["class","metric-card",4,"ngFor","ngForOf"],[1,"cta-button",3,"click"],["viewBox","0 0 24 24",1,"arrow-icon"],["d","M7 10l5 5 5-5"],[1,"context-section"],[1,"container"],[1,"section-header"],[1,"section-title"],[1,"section-subtitle"],[1,"challenge-grid"],[1,"challenge-card","main"],[1,"card-icon"],[1,"icon-wrapper"],["viewBox","0 0 100 100"],["cx","50","cy","50","r","45",1,"orbit"],["cx","50","cy","5","r","5",1,"particle"],[1,"stats-row"],[1,"stat"],[1,"stat-value"],[1,"stat-label"],[1,"challenge-card"],[1,"feature-list"],[1,"constraint-list"],[1,"icon-warning"],[1,"tech-stack-section"],[1,"tech-grid"],["class","tech-card",3,"animation-delay","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"contributions-section"],[1,"contribution-tabs"],["class","tab-button",3,"active","click",4,"ngFor","ngForOf"],["class","contribution-content",4,"ngIf"],[1,"demo-section"],[1,"demo-container"],[1,"demo-canvas"],[1,"demo-controls"],[3,"click"],[1,"control-info"],[1,"results-section"],[1,"results-grid"],[1,"result-card","performance"],[1,"card-front"],[1,"icon-performance"],[1,"result-value"],[1,"card-back"],[1,"result-card","quality"],[1,"icon-quality"],[1,"result-card","impact"],[1,"icon-impact"],[1,"performance-chart"],[1,"experience-section"],[1,"experience-timeline"],[1,"timeline-line"],["class","experience-item",3,"animation-delay",4,"ngFor","ngForOf"],[1,"cta-section"],[1,"cta-content"],[1,"cta-buttons"],["href","#",1,"btn-primary"],[1,"icon-github"],["href","#",1,"btn-secondary"],[1,"icon-linkedin"],["href","#",1,"btn-tertiary"],[1,"icon-download"],[1,"cta-particles"],[1,"metric-card"],[1,"metric-value"],[1,"metric-label"],[1,"tech-card",3,"mouseenter","mouseleave"],[1,"tech-icon"],[1,"icon-glow"],[1,"proficiency-bar"],[1,"proficiency-fill"],[1,"proficiency-label"],[1,"tech-description"],[1,"tab-button",3,"click"],[1,"contribution-content"],[1,"contribution-header"],[1,"tech-tags"],["class","tech-tag",4,"ngFor","ngForOf"],[1,"problem-solution"],[1,"problem-card"],[1,"icon-problem"],[1,"solution-card"],[1,"icon-solution"],[1,"metrics-grid"],["class","metric-item",4,"ngFor","ngForOf"],[1,"impact-section"],[1,"impact-list"],[4,"ngFor","ngForOf"],["class","code-viewer",4,"ngIf"],[1,"tech-tag"],[1,"metric-item"],[1,"metric-icon"],[1,"metric-content"],[1,"metric-number"],[1,"metric-context"],[1,"metric-details"],[1,"impact-marker"],[1,"code-viewer"],[1,"code-tabs"],[3,"active","click",4,"ngFor","ngForOf"],["class","code-comparison",4,"ngIf"],[1,"code-comparison"],["class","code-before",4,"ngIf"],["class","code-after",4,"ngIf"],[1,"code-before"],[3,"innerHTML"],[1,"code-after"],[1,"experience-item"],[1,"timeline-dot"],[1,"experience-card"],[1,"experience-image"],[1,"image-overlay"],[1,"experience-date"],[1,"experience-content"],[1,"experience-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"]],template:function(e,n){if(e&1){let s=ur();W(0,"div",4)(1,"section",5)(2,"div",6),se(3,"canvas",null,0),j(),W(5,"div",7)(6,"div",8)(7,"div",9),se(8,"span",10),W(9,"span"),tt(10,"CERN \u2022 LHCb Collaboration"),j()(),W(11,"h1",11)(12,"span",12),tt(13,"Particle Physics"),j(),W(14,"span",13),tt(15,"Visualization"),j(),W(16,"span",14),tt(17,"at the World's Largest Physics Laboratory"),j()(),W(18,"div",15)(19,"div",16),se(20,"i",17),W(21,"span"),tt(22,"March - August 2025"),j()(),W(23,"div",16),se(24,"i",18),W(25,"span"),tt(26,"Geneva, Switzerland"),j()(),W(27,"div",16),se(28,"i",19),W(29,"span"),tt(30,"Software Engineering Intern"),j()()(),W(31,"div",20),Ke(32,Sw,5,4,"div",21),j(),W(33,"button",22),qn("click",function(){return pi(s),mi(n.scrollToContent())}),W(34,"span"),tt(35,"Explore My Contributions"),j(),sc(),W(36,"svg",23),se(37,"path",24),j()()()()(),rc(),W(38,"section",25)(39,"div",26)(40,"div",27)(41,"h2",28),tt(42,"The Challenge"),j(),W(43,"p",29),tt(44,"Visualizing 40 Million Particle Collisions per Second"),j()(),W(45,"div",30)(46,"div",31)(47,"div",32)(48,"div",33),sc(),W(49,"svg",34),se(50,"circle",35)(51,"circle",36),j()()(),rc(),W(52,"h3"),tt(53,"The Large Hadron Collider"),j(),W(54,"p"),tt(55,"Processing petabytes of data from billions of particle collisions requires extreme optimization and innovative visualization techniques."),j(),W(56,"div",37)(57,"div",38)(58,"span",39),tt(59,"27 km"),j(),W(60,"span",40),tt(61,"Circumference"),j()(),W(62,"div",38)(63,"span",39),tt(64,"40 MHz"),j(),W(65,"span",40),tt(66,"Collision Rate"),j()(),W(67,"div",38)(68,"span",39),tt(69,"14 TeV"),j(),W(70,"span",40),tt(71,"Energy"),j()()()(),W(72,"div",41)(73,"h4"),tt(74,"Phoenix Event Display"),j(),W(75,"p"),tt(76,"Web-based 3D visualization platform for particle physics experiments"),j(),W(77,"ul",42)(78,"li"),tt(79,"Real-time 3D rendering"),j(),W(80,"li"),tt(81,"Complex detector geometry"),j(),W(82,"li"),tt(83,"Multi-experiment support"),j(),W(84,"li"),tt(85,"Educational outreach tool"),j()()(),W(86,"div",41)(87,"h4"),tt(88,"Technical Constraints"),j(),W(89,"p"),tt(90,"Browser limitations requiring creative solutions"),j(),W(91,"ul",43)(92,"li"),se(93,"span",44),tt(94," GPU memory limits"),j(),W(95,"li"),se(96,"span",44),tt(97," 60 FPS requirement"),j(),W(98,"li"),se(99,"span",44),tt(100," Mobile compatibility"),j(),W(101,"li"),se(102,"span",44),tt(103," Large dataset handling"),j()()()()()(),W(104,"section",45)(105,"div",26)(106,"h2",28),tt(107,"Technology Mastery"),j(),W(108,"div",46),Ke(109,ww,12,16,"div",47),j()()(),W(110,"section",48)(111,"div",26)(112,"h2",28),tt(113,"Technical Contributions"),j(),W(114,"div",49),Ke(115,Cw,2,3,"button",50),j(),Ke(116,Fw,27,8,"div",51),j()(),W(117,"section",52)(118,"div",26)(119,"h2",28),tt(120,"Interactive Particle Track Visualization"),j(),W(121,"p",29),tt(122,"Try hovering and clicking on the particle tracks"),j(),W(123,"div",53),se(124,"canvas",54,1),W(126,"div",55)(127,"button",56),qn("click",function(){return pi(s),mi(n.resetDemo())}),tt(128,"Reset View"),j(),W(129,"button",56),qn("click",function(){return pi(s),mi(n.toggleAnimation())}),tt(130),j(),W(131,"div",57)(132,"p")(133,"strong"),tt(134,"Controls:"),j()(),W(135,"ul")(136,"li"),tt(137,"\u{1F5B1}\uFE0F Left click + drag to rotate"),j(),W(138,"li"),tt(139,"\u{1F5B1}\uFE0F Right click + drag to pan"),j(),W(140,"li"),tt(141,"\u26B2 Scroll to zoom"),j(),W(142,"li"),tt(143,"\u{1F446} Click tracks to select"),j()()()()()()(),W(144,"section",58)(145,"div",26)(146,"h2",28),tt(147,"Quantified Impact"),j(),W(148,"div",59)(149,"div",60)(150,"div",61),se(151,"i",62),W(152,"h3"),tt(153,"Performance"),j(),W(154,"div",63),tt(155,"70%"),j(),W(156,"p"),tt(157,"Faster Selection"),j()(),W(158,"div",64)(159,"h4"),tt(160,"Performance Gains"),j(),W(161,"ul")(162,"li"),tt(163,"60-70% faster object selection"),j(),W(164,"li"),tt(165,"Sub-5ms click detection"),j(),W(166,"li"),tt(167,"60% memory reduction"),j(),W(168,"li"),tt(169,"Smooth 60 FPS maintained"),j()()()(),W(170,"div",65)(171,"div",61),se(172,"i",66),W(173,"h3"),tt(174,"Code Quality"),j(),W(175,"div",63),tt(176,"100%"),j(),W(177,"p"),tt(178,"Test Coverage"),j()(),W(179,"div",64)(180,"h4"),tt(181,"Engineering Excellence"),j(),W(182,"ul")(183,"li"),tt(184,"Modular architecture"),j(),W(185,"li"),tt(186,"TypeScript strict mode"),j(),W(187,"li"),tt(188,"Comprehensive docs"),j(),W(189,"li"),tt(190,"CI/CD integration"),j()()()(),W(191,"div",67)(192,"div",61),se(193,"i",68),W(194,"h3"),tt(195,"User Impact"),j(),W(196,"div",63),tt(197,"1000+"),j(),W(198,"p"),tt(199,"Physicists Worldwide"),j()(),W(200,"div",64)(201,"h4"),tt(202,"Global Reach"),j(),W(203,"ul")(204,"li"),tt(205,"Used by LHCb collaboration"),j(),W(206,"li"),tt(207,"Educational outreach"),j(),W(208,"li"),tt(209,"Public engagement"),j(),W(210,"li"),tt(211,"Research enablement"),j()()()()(),W(212,"div",69),se(213,"canvas",null,2),j()()(),W(215,"section",70)(216,"div",26)(217,"h2",28),tt(218,"CERN Experience"),j(),W(219,"div",71),se(220,"div",72),Ke(221,Uw,14,9,"div",73),j()()(),W(222,"section",74)(223,"div",26)(224,"div",75)(225,"h2"),tt(226,"Let's Build Something Amazing Together"),j(),W(227,"p"),tt(228,"From particle physics to your next challenge"),j(),W(229,"div",76)(230,"a",77),se(231,"i",78),tt(232," View GitHub "),j(),W(233,"a",79),se(234,"i",80),tt(235," Connect on LinkedIn "),j(),W(236,"a",81),se(237,"i",82),tt(238," Download Full Report "),j()()(),W(239,"div",83),se(240,"canvas",null,3),j()()()()}e&2&&(Wi("loaded",n.isLoaded()),kt("@fadeIn",void 0),mt(),kt("@heroAnimation",void 0),mt(6),kt("@slideInLeft",void 0),mt(4),kt("@titleAnimation",void 0),mt(7),kt("@fadeInUp",void 0),mt(13),kt("@metricsAnimation",void 0),mt(),kt("ngForOf",n.heroMetrics()),mt(),kt("@pulseAnimation",void 0),mt(5),kt("@sectionAnimation",void 0),mt(8),kt("@cardAnimation",void 0),mt(26),kt("@cardAnimation",void 0),mt(14),kt("@cardAnimation",void 0),mt(18),kt("@sectionAnimation",void 0),mt(5),kt("ngForOf",n.technologies()),mt(),kt("@sectionAnimation",void 0),mt(5),kt("ngForOf",n.contributions()),mt(),kt("ngIf",n.currentContribution()),mt(),kt("@sectionAnimation",void 0),mt(13),Oe(n.isAnimating()?"Pause":"Play"),mt(14),kt("@sectionAnimation",void 0),mt(5),kt("@cardFlip",void 0),mt(21),kt("@cardFlip",void 0),mt(21),kt("@cardFlip",void 0),mt(24),kt("@sectionAnimation",void 0),mt(6),kt("ngForOf",n.experiences()),mt(),kt("@sectionAnimation",void 0))},dependencies:[rd,id,sd,ad,cd],styles:['@charset "UTF-8";@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_nghost-%COMP%]{display:block;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;color:#e8f4fd;background:#0a0e27;overflow-x:hidden}.cern-portfolio[_ngcontent-%COMP%]{position:relative;opacity:0;transition:opacity .5s ease}.cern-portfolio.loaded[_ngcontent-%COMP%]{opacity:1}.hero-section[_ngcontent-%COMP%]{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}.particle-background[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0}.particle-background[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%}.hero-overlay[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;background:radial-gradient(ellipse at center,#0a0e2799,#0a0e27e6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:2rem}.hero-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;text-align:center}.hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1.5rem;background:linear-gradient(135deg,#0053a133,#ff6b3533);border:1px solid rgba(0,83,161,.5);border-radius:50px;margin-bottom:2rem;font-size:.9rem;text-transform:uppercase;letter-spacing:.1em}.hero-badge[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%]{width:8px;height:8px;background:#00c896;border-radius:50%;animation:_ngcontent-%COMP%_pulse 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.5)}}.hero-title[_ngcontent-%COMP%]{margin-bottom:2rem}.hero-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{display:block;font-size:clamp(2.5rem,8vw,5rem);font-weight:800;background:linear-gradient(135deg,#0053a1,#00c896,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.5rem}.hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{display:block;font-size:clamp(2rem,6vw,4rem);font-weight:700;color:#e8f4fd;margin-bottom:1rem}.hero-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{display:block;font-size:clamp(1rem,2vw,1.5rem);font-weight:300;color:#e8f4fdb3}.hero-meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem;margin-bottom:3rem}.hero-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:1rem;color:#e8f4fde6}.hero-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;color:#00c896}.hero-metrics[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:2rem;max-width:800px;margin:0 auto 3rem}.hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]{padding:1.5rem;background:linear-gradient(135deg,#0053a11a,#00c8961a);border:1px solid rgba(0,83,161,.3);border-radius:12px;transition:all .3s ease}.hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);border-color:#00c896;box-shadow:0 10px 30px #00c8964d}.hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#00c896;margin-bottom:.5rem}.hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%]{font-size:.9rem;color:#e8f4fdb3;text-transform:uppercase;letter-spacing:.05em}.cta-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2.5rem;background:linear-gradient(135deg,#0053a1,#00c896);border:none;border-radius:50px;color:#fff;font-size:1.1rem;font-weight:600;cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}.cta-button[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#00c896,#ff6b35);opacity:0;transition:opacity .3s ease}.cta-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 10px 30px #00c89666}.cta-button[_ngcontent-%COMP%]:hover:before{opacity:1}.cta-button[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{transform:translateY(3px)}.cta-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:1}.cta-button[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{width:20px;height:20px;stroke:currentColor;stroke-width:2;fill:none;transition:transform .3s ease;position:relative;z-index:1}.context-section[_ngcontent-%COMP%]{padding:5rem 0;background:linear-gradient(180deg,#0a0e27,#0f1329)}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:3rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin-bottom:1rem;background:linear-gradient(135deg,#0053a1,#00c896);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.section-subtitle[_ngcontent-%COMP%]{font-size:1.25rem;color:#e8f4fdb3}.challenge-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{padding:2rem;background:linear-gradient(135deg,#0053a11a,#00c8960d);border:1px solid rgba(0,83,161,.3);border-radius:16px;transition:all .3s ease}.challenge-card.main[_ngcontent-%COMP%]{grid-column:1/-1;text-align:center}.challenge-card.main[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{width:100px;height:100px;margin:0 auto 2rem}.challenge-card.main[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.challenge-card.main[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.challenge-card.main[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .orbit[_ngcontent-%COMP%]{fill:none;stroke:#0053a1;stroke-width:2;opacity:.5}.challenge-card.main[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]{fill:#00c896;animation:_ngcontent-%COMP%_orbit 4s linear infinite}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);border-color:#00c896;box-shadow:0 10px 30px #00c89633}.challenge-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem;color:#e8f4fd}.challenge-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:1rem;color:#00c896}.challenge-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#e8f4fdb3;line-height:1.6;margin-bottom:1rem}@keyframes _ngcontent-%COMP%_orbit{0%{transform:rotate(0) translate(45px) rotate(0)}to{transform:rotate(360deg) translate(45px) rotate(-360deg)}}.stats-row[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:3rem;margin-top:2rem}.stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]{text-align:center}.stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;font-size:1.75rem;font-weight:700;color:#00c896;margin-bottom:.25rem}.stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%]{display:block;font-size:.875rem;color:#e8f4fd80;text-transform:uppercase;letter-spacing:.05em}.feature-list[_ngcontent-%COMP%], .constraint-list[_ngcontent-%COMP%]{list-style:none;padding:0}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .constraint-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.75rem 0 .75rem 2rem;position:relative;color:#e8f4fdb3}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before, .constraint-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#00c896;font-weight:700}.constraint-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";color:#ff6b35}.tech-stack-section[_ngcontent-%COMP%]{padding:5rem 0;background:#0a0e27}.tech-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem}.tech-card[_ngcontent-%COMP%]{padding:2rem;background:linear-gradient(135deg,#0053a11a,#00c8960d);border:1px solid rgba(0,83,161,.3);border-radius:16px;transition:all .3s ease;cursor:pointer}.tech-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px) scale(1.02);border-color:#00c896;box-shadow:0 15px 40px #00c8964d;background:linear-gradient(135deg,#0053a133,#00c8961a)}.tech-card[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]{position:relative;width:60px;height:60px;margin-bottom:1.5rem}.tech-card[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]   .icon-glow[_ngcontent-%COMP%]{position:absolute;inset:-10px;background:radial-gradient(circle,rgba(0,200,150,.4),transparent);border-radius:50%;opacity:0;transition:opacity .3s ease}.tech-card[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]   .icon-glow.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_glow-pulse 2s infinite}.tech-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:1rem;color:#e8f4fd}.tech-card[_ngcontent-%COMP%]   .proficiency-bar[_ngcontent-%COMP%]{height:6px;background:#ffffff1a;border-radius:3px;overflow:hidden;margin-bottom:1rem}.tech-card[_ngcontent-%COMP%]   .proficiency-bar[_ngcontent-%COMP%]   .proficiency-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,#0053a1,#00c896);transition:width 1s ease;position:relative}.tech-card[_ngcontent-%COMP%]   .proficiency-bar[_ngcontent-%COMP%]   .proficiency-fill.advanced[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c896,#00e5aa)}.tech-card[_ngcontent-%COMP%]   .proficiency-bar[_ngcontent-%COMP%]   .proficiency-fill.intermediate[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0053a1,#0080ff)}.tech-card[_ngcontent-%COMP%]   .proficiency-bar[_ngcontent-%COMP%]   .proficiency-fill[_ngcontent-%COMP%]   .proficiency-label[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:.6rem;text-transform:uppercase;letter-spacing:.05em;color:#fff;font-weight:600}.tech-card[_ngcontent-%COMP%]   .tech-description[_ngcontent-%COMP%]{font-size:.9rem;color:#e8f4fd99;line-height:1.4}@keyframes _ngcontent-%COMP%_glow-pulse{0%,to{transform:scale(1);opacity:.4}50%{transform:scale(1.2);opacity:.8}}.contributions-section[_ngcontent-%COMP%]{padding:5rem 0;background:linear-gradient(180deg,#0a0e27,#0f1329)}.contribution-tabs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:3rem;justify-content:center}.contribution-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]{padding:.75rem 1.5rem;background:#0053a11a;border:1px solid rgba(0,83,161,.3);border-radius:50px;color:#e8f4fdb3;font-size:.95rem;cursor:pointer;transition:all .3s ease}.contribution-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover{background:#0053a133;border-color:#0053a1;color:#e8f4fd}.contribution-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0053a1,#00c896);border-color:transparent;color:#fff;transform:scale(1.05)}.contribution-content[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .5s ease}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.contribution-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:1rem}.contribution-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;color:#e8f4fd}.contribution-header[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.contribution-header[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]{padding:.25rem .75rem;background:#00c89633;border:1px solid #00C896;border-radius:20px;font-size:.85rem;color:#00c896}.problem-solution[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:3rem}.problem-solution[_ngcontent-%COMP%]   .problem-card[_ngcontent-%COMP%], .problem-solution[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]{padding:1.5rem;background:linear-gradient(135deg,#ff6b351a,#ff6b350d);border:1px solid rgba(255,107,53,.3);border-radius:12px}.problem-solution[_ngcontent-%COMP%]   .problem-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .problem-solution[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:#ff6b35;margin-bottom:1rem}.problem-solution[_ngcontent-%COMP%]   .problem-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .problem-solution[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#e8f4fdcc;line-height:1.6}.problem-solution[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#00c8961a,#00c8960d);border-color:#00c8964d}.problem-solution[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#00c896}.metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;margin-bottom:3rem}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]{display:flex;gap:1.5rem}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;flex-shrink:0}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-content[_ngcontent-%COMP%]{flex:1}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-content[_ngcontent-%COMP%]   .metric-number[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:#00c896;margin-bottom:.25rem}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-content[_ngcontent-%COMP%]   .metric-context[_ngcontent-%COMP%]{font-size:1rem;color:#e8f4fd;margin-bottom:.5rem}.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-content[_ngcontent-%COMP%]   .metric-details[_ngcontent-%COMP%]{font-size:.9rem;color:#e8f4fd99;line-height:1.4}.impact-section[_ngcontent-%COMP%]{background:#0053a10d;padding:2rem;border-radius:12px;border:1px solid rgba(0,83,161,.2)}.impact-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem;color:#e8f4fd;margin-bottom:1.5rem}.impact-section[_ngcontent-%COMP%]   .impact-list[_ngcontent-%COMP%]{list-style:none;padding:0}.impact-section[_ngcontent-%COMP%]   .impact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1rem 0 1rem 2.5rem;position:relative;color:#e8f4fdcc;line-height:1.6;border-bottom:1px solid rgba(255,255,255,.05)}.impact-section[_ngcontent-%COMP%]   .impact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.impact-section[_ngcontent-%COMP%]   .impact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .impact-marker[_ngcontent-%COMP%]{position:absolute;left:0;top:1.2rem;width:8px;height:8px;background:#00c896;border-radius:50%}.impact-section[_ngcontent-%COMP%]   .impact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .impact-marker[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-4px;border:2px solid #00C896;border-radius:50%;opacity:.3}.code-viewer[_ngcontent-%COMP%]{margin-top:3rem}.code-viewer[_ngcontent-%COMP%]   .code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:1rem}.code-viewer[_ngcontent-%COMP%]   .code-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 1rem;background:#0053a11a;border:1px solid rgba(0,83,161,.3);color:#e8f4fdb3;cursor:pointer;transition:all .3s ease}.code-viewer[_ngcontent-%COMP%]   .code-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#0053a1;border-color:#0053a1;color:#fff}.code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}.code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-before[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-after[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:.5rem 1rem;margin:0;background:#ff6b3533;color:#ff6b35;font-size:.9rem;text-transform:uppercase;letter-spacing:.05em}.code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-before[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-after[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:1.5rem;background:#0a0e27;border:1px solid rgba(255,255,255,.1);overflow-x:auto}.code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-before[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-after[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Fira Code,monospace;font-size:.9rem;line-height:1.5}.code-viewer[_ngcontent-%COMP%]   .code-comparison[_ngcontent-%COMP%]   .code-after[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{background:#00c89633;color:#00c896}.demo-section[_ngcontent-%COMP%]{padding:5rem 0;background:#0a0e27}.demo-container[_ngcontent-%COMP%]{position:relative;background:linear-gradient(135deg,#0053a11a,#00c8960d);border:1px solid rgba(0,83,161,.3);border-radius:16px;overflow:hidden}.demo-container[_ngcontent-%COMP%]   .demo-canvas[_ngcontent-%COMP%]{width:100%;height:500px}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;background:#0a0e27e6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:1rem;border-radius:12px;border:1px solid rgba(0,83,161,.3)}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;padding:.5rem 1rem;margin-bottom:.5rem;background:linear-gradient(135deg,#0053a1,#00c896);border:none;border-radius:8px;color:#fff;cursor:pointer;transition:all .3s ease}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 5px 15px #00c8964d}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   .control-info[_ngcontent-%COMP%]{margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.1)}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   .control-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.9rem;color:#00c896}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   .control-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.demo-container[_ngcontent-%COMP%]   .demo-controls[_ngcontent-%COMP%]   .control-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.85rem;color:#e8f4fdb3;padding:.25rem 0}.results-section[_ngcontent-%COMP%]{padding:5rem 0;background:linear-gradient(180deg,#0a0e27,#0f1329)}.results-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:3rem}.result-card[_ngcontent-%COMP%]{position:relative;height:300px;transform-style:preserve-3d;transition:transform .6s;cursor:pointer}.result-card[_ngcontent-%COMP%]:hover{transform:rotateY(180deg)}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:16px;padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0053a133,#00c8961a);border:2px solid rgba(0,83,161,.3)}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:3rem;color:#00c896;margin-bottom:1rem}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem;color:#e8f4fd}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .result-value[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;color:#00c896;margin-bottom:.5rem}.result-card[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#e8f4fdb3}.result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0053a1,#00c896);transform:rotateY(180deg)}.result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;color:#fff;margin-bottom:1.5rem}.result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#ffffffe6;padding:.5rem 0 .5rem 1.5rem;position:relative}.result-card[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2192";position:absolute;left:0;color:#fff}.performance-chart[_ngcontent-%COMP%]{background:#0053a10d;padding:2rem;border-radius:16px;border:1px solid rgba(0,83,161,.2)}.performance-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{max-height:400px}.experience-section[_ngcontent-%COMP%]{padding:5rem 0;background:#0a0e27}.experience-timeline[_ngcontent-%COMP%]{position:relative;padding:2rem 0}.experience-timeline[_ngcontent-%COMP%]   .timeline-line[_ngcontent-%COMP%]{position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(180deg,transparent,#0053A1,#00C896,transparent);transform:translate(-50%)}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{position:relative;margin-bottom:3rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:nth-child(2n)   .experience-card[_ngcontent-%COMP%]{margin-left:auto;margin-right:2rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:nth-child(odd)   .experience-card[_ngcontent-%COMP%]{margin-right:auto;margin-left:2rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:20px;height:20px;background:#00c896;border:4px solid #0A0E27;border-radius:50%;transform:translate(-50%,-50%);z-index:1}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-8px;border:2px solid #00C896;border-radius:50%;opacity:.3;animation:_ngcontent-%COMP%_pulse 2s infinite}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{width:calc(50% - 4rem);background:linear-gradient(135deg,#0053a11a,#00c8960d);border:1px solid rgba(0,83,161,.3);border-radius:16px;overflow:hidden;transition:all .3s ease}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 10px 30px #00c8964d}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-image[_ngcontent-%COMP%]{height:200px;background-size:cover;background-position:center;position:relative}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(10,14,39,.8));display:flex;align-items:flex-end;padding:1rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .experience-date[_ngcontent-%COMP%]{background:#00c896e6;color:#fff;padding:.25rem .75rem;border-radius:20px;font-size:.85rem;font-weight:600}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-content[_ngcontent-%COMP%]{padding:1.5rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;color:#e8f4fd;margin-bottom:.5rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#e8f4fdb3;line-height:1.5;margin-bottom:1rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-content[_ngcontent-%COMP%]   .experience-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-content[_ngcontent-%COMP%]   .experience-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:.2rem .6rem;background:#0053a133;border:1px solid rgba(0,83,161,.5);border-radius:12px;font-size:.8rem;color:#00c896}.cta-section[_ngcontent-%COMP%]{padding:5rem 0;background:linear-gradient(135deg,#0f1329,#0a0e27);position:relative;overflow:hidden}.cta-content[_ngcontent-%COMP%]{text-align:center;position:relative;z-index:1}.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin-bottom:1rem;background:linear-gradient(135deg,#00c896,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;color:#e8f4fdb3;margin-bottom:2rem}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;border-radius:50px;text-decoration:none;font-weight:600;transition:all .3s ease}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0053a1,#00c896);color:#fff}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-primary[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 10px 30px #00c89666}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]{background:transparent;border:2px solid #00C896;color:#00c896}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]:hover{background:#00c8961a;transform:translateY(-2px)}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-tertiary[_ngcontent-%COMP%]{background:transparent;border:2px solid rgba(232,244,253,.3);color:#e8f4fdcc}.cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-tertiary[_ngcontent-%COMP%]:hover{border-color:#ff6b35;color:#ff6b35;transform:translateY(-2px)}.cta-particles[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0}.cta-particles[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%}@media (max-width: 768px){.hero-metrics[_ngcontent-%COMP%], .challenge-grid[_ngcontent-%COMP%], .tech-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.contribution-tabs[_ngcontent-%COMP%]{flex-direction:column}.contribution-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]{width:100%}.experience-timeline[_ngcontent-%COMP%]   .timeline-line[_ngcontent-%COMP%], .experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{left:1rem}.experience-timeline[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{width:calc(100% - 3rem);margin-left:3rem!important;margin-right:0!important}.results-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.skeleton[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ffffff1a,#fff3,#ffffff1a);background-size:200% 100%;animation:_ngcontent-%COMP%_skeleton-loading 1.5s infinite}@keyframes _ngcontent-%COMP%_skeleton-loading{0%{background-position:200% 0}to{background-position:-200% 0}}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInLeft .5s ease}.slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInRight .5s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideInLeft{0%{opacity:0;transform:translate(-30px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideInRight{0%{opacity:0;transform:translate(30px)}to{opacity:1;transform:translate(0)}}'],data:{animation:[Fe("fadeIn",[Ue(":enter",[Zt({opacity:0}),Le("500ms ease-in",Zt({opacity:1}))])]),Fe("heroAnimation",[Ue(":enter",[gr(".hero-badge",[Zt({opacity:0,transform:"translateY(-20px)"}),Le("600ms ease-out",Zt({opacity:1,transform:"translateY(0)"}))],{optional:!0})])]),Fe("titleAnimation",[Ue(":enter",[gr("span",[Zt({opacity:0,transform:"translateY(20px)"}),Ao(200,[Le("600ms ease-out",Zt({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])]),Fe("fadeInUp",[Ue(":enter",[Zt({opacity:0,transform:"translateY(20px)"}),Le("600ms ease-out",Zt({opacity:1,transform:"translateY(0)"}))])]),Fe("metricsAnimation",[Ue(":enter",[gr(".metric-card",[Zt({opacity:0,transform:"scale(0.9)"}),Ao(100,[Le("500ms ease-out",Zt({opacity:1,transform:"scale(1)"}))])],{optional:!0})])]),Fe("pulseAnimation",[Eo("*",Zt({transform:"scale(1)"})),Ue("* => *",[Le("1000ms ease-in-out",uc([Zt({transform:"scale(1)"}),Zt({transform:"scale(1.05)"}),Zt({transform:"scale(1)"})]))])]),Fe("sectionAnimation",[Ue(":enter",[Zt({opacity:0,transform:"translateY(50px)"}),Le("800ms ease-out",Zt({opacity:1,transform:"translateY(0)"}))])]),Fe("cardAnimation",[Ue(":enter",[Zt({opacity:0,transform:"translateY(30px) scale(0.95)"}),Le("600ms ease-out",Zt({opacity:1,transform:"translateY(0) scale(1)"}))])]),Fe("techCardAnimation",[Ue(":enter",[Zt({opacity:0,transform:"translateY(20px) rotateX(-10deg)"}),Le("500ms ease-out",Zt({opacity:1,transform:"translateY(0) rotateX(0)"}))])]),Fe("slideAnimation",[Ue(":enter",[Zt({opacity:0,transform:"translateX(-30px)"}),Le("500ms ease-out",Zt({opacity:1,transform:"translateX(0)"}))])]),Fe("bounceIn",[Ue(":enter",[Zt({opacity:0,transform:"scale(0.7)"}),Le("600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",Zt({opacity:1,transform:"scale(1)"}))])]),Fe("fadeInLeft",[Ue(":enter",[Zt({opacity:0,transform:"translateX(-20px)"}),Le("500ms ease-out",Zt({opacity:1,transform:"translateX(0)"}))])]),Fe("cardFlip",[Eo("*",Zt({transform:"rotateY(0)"})),Ue("* => *",[Le("600ms ease-in-out",Zt({transform:"rotateY(180deg)"}))])]),Fe("timelineAnimation",[Ue(":enter",[Zt({opacity:0,transform:"scale(0.8)"}),Le("600ms ease-out",Zt({opacity:1,transform:"scale(1)"}))])]),Fe("slideInLeft",[Ue(":enter",[Zt({opacity:0,transform:"translateX(-50px)"}),Le("600ms ease-out",Zt({opacity:1,transform:"translateX(0)"}))])])]}})};export{pg as CernPortfolioComponent};
