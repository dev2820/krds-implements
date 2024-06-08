import{_ as ht,$ as zt}from"./index-GJGSU1ij.js";import{r as $}from"./index-BP8_t0zE.js";import{r as he}from"./index-BxmsGmlx.js";import{$ as vt}from"./index-C4bjqnC2.js";import{$ as ge,e as we,b as _t}from"./index-CuNLDAYM.js";import{$ as xe}from"./index-B8rO3jFB.js";const ye=["top","right","bottom","left"],F=Math.min,M=Math.max,dt=Math.round,at=Math.floor,j=t=>({x:t,y:t}),ve={left:"right",right:"left",bottom:"top",top:"bottom"},be={start:"end",end:"start"};function xt(t,e,n){return M(t,F(e,n))}function V(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function bt(t){return t==="x"?"y":"x"}function $t(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(I(t))?"y":"x"}function At(t){return bt(Q(t))}function $e(t,e,n){n===void 0&&(n=!1);const o=J(t),i=At(t),r=$t(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ut(s)),[s,ut(s)]}function Ae(t){const e=ut(t);return[yt(t),e,yt(e)]}function yt(t){return t.replace(/start|end/g,e=>be[e])}function Pe(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Re(t,e,n,o){const i=J(t);let r=Pe(I(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(yt)))),r}function ut(t){return t.replace(/left|right|bottom|top/g,e=>ve[e])}function Oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Vt(t){return typeof t!="number"?Oe(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:i}=t;const r=Q(e),s=At(e),l=$t(s),c=I(e),a=r==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(J(e)){case"start":f[s]-=p*(n&&a?-1:1);break;case"end":f[s]+=p*(n&&a?-1:1);break}return f}const Ce=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Tt(a,o,c),p=o,f={},m=0;for(let g=0;g<l.length;g++){const{name:w,fn:h}=l[g],{x:v,y:x,data:y,reset:b}=await h({x:u,y:d,initialPlacement:o,placement:p,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});u=v??u,d=x??d,f={...f,[w]:{...f[w],...y}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=Tt(a,p,c)),g=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:f}};async function nt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=V(e,t),m=Vt(f),w=l[p?d==="floating"?"reference":"floating":d],h=mt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),v=d==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},b=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:x,strategy:c}):v);return{top:(h.top-b.top+m.top)/y.y,bottom:(b.bottom-h.bottom+m.bottom)/y.y,left:(h.left-b.left+m.left)/y.x,right:(b.right-h.right+m.right)/y.x}}const Ee=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=V(t,e)||{};if(a==null)return{};const d=Vt(u),p={x:n,y:o},f=At(i),m=$t(f),g=await s.getDimensions(a),w=f==="y",h=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",y=r.reference[m]+r.reference[f]-p[f]-r.floating[m],b=p[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let R=A?A[x]:0;(!R||!await(s.isElement==null?void 0:s.isElement(A)))&&(R=l.floating[x]||r.floating[m]);const S=y/2-b/2,_=R/2-g[m]/2-1,T=F(d[h],_),L=F(d[v],_),C=T,H=R-g[m]-L,O=R/2-g[m]/2+S,E=xt(C,O,H),D=!c.arrow&&J(i)!=null&&O!==E&&r.reference[m]/2-(O<C?T:L)-g[m]/2<0,P=D?O<C?O-C:O-H:0;return{[f]:p[f]+P,data:{[f]:E,centerOffset:O-E-P,...D&&{alignmentOffset:P}},reset:D}}}),Se=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...w}=V(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=I(i),v=I(l)===l,x=await(c.isRTL==null?void 0:c.isRTL(a.floating)),y=p||(v||!g?[ut(l)]:Ae(l));!p&&m!=="none"&&y.push(...Re(l,g,m,x));const b=[l,...y],A=await nt(e,w),R=[];let S=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&R.push(A[h]),d){const C=$e(i,s,x);R.push(A[C[0]],A[C[1]])}if(S=[...S,{placement:i,overflows:R}],!R.every(C=>C<=0)){var _,T;const C=(((_=r.flip)==null?void 0:_.index)||0)+1,H=b[C];if(H)return{data:{index:C,overflows:S},reset:{placement:H}};let O=(T=S.filter(E=>E.overflows[0]<=0).sort((E,D)=>E.overflows[1]-D.overflows[1])[0])==null?void 0:T.placement;if(!O)switch(f){case"bestFit":{var L;const E=(L=S.map(D=>[D.placement,D.overflows.filter(P=>P>0).reduce((P,X)=>P+X,0)]).sort((D,P)=>D[1]-P[1])[0])==null?void 0:L[0];E&&(O=E);break}case"initialPlacement":O=l;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Lt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Mt(t){return ye.some(e=>t[e]>=0)}const De=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=V(t,e);switch(o){case"referenceHidden":{const r=await nt(e,{...i,elementContext:"reference"}),s=Lt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Mt(s)}}}case"escaped":{const r=await nt(e,{...i,altBoundary:!0}),s=Lt(r,n.floating);return{data:{escapedOffsets:s,escaped:Mt(s)}}}default:return{}}}}};async function _e(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),l=J(n),c=Q(n)==="y",a=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,d=V(e,t);let{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*u,y:p*a}:{x:p*a,y:f*u}}const Te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await _e(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Le=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:h,y:v}=w;return{x:h,y:v}}},...c}=V(t,e),a={x:n,y:o},u=await nt(e,c),d=Q(I(i)),p=bt(d);let f=a[p],m=a[d];if(r){const w=p==="y"?"top":"left",h=p==="y"?"bottom":"right",v=f+u[w],x=f-u[h];f=xt(v,f,x)}if(s){const w=d==="y"?"top":"left",h=d==="y"?"bottom":"right",v=m+u[w],x=m-u[h];m=xt(v,m,x)}const g=l.fn({...e,[p]:f,[d]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}},Me=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=V(t,e),u={x:n,y:o},d=Q(i),p=bt(d);let f=u[p],m=u[d];const g=V(l,e),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const x=p==="y"?"height":"width",y=r.reference[p]-r.floating[x]+w.mainAxis,b=r.reference[p]+r.reference[x]-w.mainAxis;f<y?f=y:f>b&&(f=b)}if(a){var h,v;const x=p==="y"?"width":"height",y=["top","left"].includes(I(i)),b=r.reference[d]-r.floating[x]+(y&&((h=s.offset)==null?void 0:h[d])||0)+(y?0:w.crossAxis),A=r.reference[d]+r.reference[x]+(y?0:((v=s.offset)==null?void 0:v[d])||0)-(y?w.crossAxis:0);m<b?m=b:m>A&&(m=A)}return{[p]:f,[d]:m}}}},ke=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=V(t,e),c=await nt(e,l),a=I(n),u=J(n),d=Q(n)==="y",{width:p,height:f}=o.floating;let m,g;a==="top"||a==="bottom"?(m=a,g=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(g=a,m=u==="end"?"top":"bottom");const w=f-c.top-c.bottom,h=p-c.left-c.right,v=F(f-c[m],w),x=F(p-c[g],h),y=!e.middlewareData.shift;let b=v,A=x;if(d?A=u||y?F(x,h):h:b=u||y?F(v,w):w,y&&!u){const S=M(c.left,0),_=M(c.right,0),T=M(c.top,0),L=M(c.bottom,0);d?A=p-2*(S!==0||_!==0?S+_:M(c.left,c.right)):b=f-2*(T!==0||L!==0?T+L:M(c.top,c.bottom))}await s({...e,availableWidth:A,availableHeight:b});const R=await i.getDimensions(r.floating);return p!==R.width||f!==R.height?{reset:{rects:!0}}:{}}}};function tt(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function It(t){return t instanceof Node||t instanceof k(t).Node}function N(t){return t instanceof Element||t instanceof k(t).Element}function B(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function kt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function He(t){return["table","td","th"].includes(tt(t))}function Pt(t){const e=Rt(),n=W(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function We(t){let e=q(t);for(;B(e)&&!G(e);){if(Pt(e))return e;e=q(e)}return null}function Rt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(tt(t))}function W(t){return k(t).getComputedStyle(t)}function gt(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(t){if(tt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||Y(t);return kt(e)?e.host:e}function Yt(t){const e=q(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&it(e)?e:Yt(e)}function ot(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Yt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=k(i);return r?e.concat(s,s.visualViewport||[],it(i)?i:[],s.frameElement&&n?ot(s.frameElement):[]):e.concat(i,ot(i,[],n))}function Xt(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=dt(n)!==r||dt(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Ot(t){return N(t)?t:t.contextElement}function K(t){const e=Ot(t);if(!B(e))return j(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Xt(e);let s=(r?dt(n.width):n.width)/o,l=(r?dt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Fe=j(0);function jt(t){const e=k(t);return!Rt()||!e.visualViewport?Fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ne(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Ot(t);let s=j(1);e&&(o?N(o)&&(s=K(o)):s=K(t));const l=Ne(r,n,o)?jt(r):j(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(r){const p=k(r),f=o&&N(o)?k(o):o;let m=p,g=m.frameElement;for(;g&&o&&f!==m;){const w=K(g),h=g.getBoundingClientRect(),v=W(g),x=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,y=h.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;c*=w.x,a*=w.y,u*=w.x,d*=w.y,c+=x,a+=y,m=k(g),g=m.frameElement}}return mt({width:u,height:d,x:c,y:a})}const Be=[":popover-open",":modal"];function Ct(t){return Be.some(e=>{try{return t.matches(e)}catch{return!1}})}function ze(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=Y(o),l=e?Ct(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=j(1);const u=j(0),d=B(o);if((d||!d&&!r)&&((tt(o)!=="body"||it(s))&&(c=gt(o)),B(o))){const p=U(o);a=K(o),u.x=p.x+o.clientLeft,u.y=p.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function Ve(t){return Array.from(t.getClientRects())}function qt(t){return U(Y(t)).left+gt(t).scrollLeft}function Ie(t){const e=Y(t),n=gt(t),o=t.ownerDocument.body,i=M(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=M(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+qt(t);const l=-n.scrollTop;return W(o).direction==="rtl"&&(s+=M(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ye(t,e){const n=k(t),o=Y(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=Rt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Xe(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=B(t)?K(t):j(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function Ht(t,e,n){let o;if(e==="viewport")o=Ye(t,n);else if(e==="document")o=Ie(Y(t));else if(N(e))o=Xe(e,n);else{const i=jt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return mt(o)}function Ut(t,e){const n=q(t);return n===e||!N(n)||G(n)?!1:W(n).position==="fixed"||Ut(n,e)}function je(t,e){const n=e.get(t);if(n)return n;let o=ot(t,[],!1).filter(l=>N(l)&&tt(l)!=="body"),i=null;const r=W(t).position==="fixed";let s=r?q(t):t;for(;N(s)&&!G(s);){const l=W(s),c=Pt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||it(s)&&!c&&Ut(t,s))?o=o.filter(u=>u!==s):i=l,s=q(s)}return e.set(t,o),o}function qe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Ct(e)?[]:je(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const d=Ht(e,u,i);return a.top=M(d.top,a.top),a.right=F(d.right,a.right),a.bottom=F(d.bottom,a.bottom),a.left=M(d.left,a.left),a},Ht(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ue(t){const{width:e,height:n}=Xt(t);return{width:e,height:n}}function Ze(t,e,n){const o=B(e),i=Y(e),r=n==="fixed",s=U(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=j(0);if(o||!o&&!r)if((tt(e)!=="body"||it(i))&&(l=gt(e)),o){const d=U(e,!0,r,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=qt(i));const a=s.left+l.scrollLeft-c.x,u=s.top+l.scrollTop-c.y;return{x:a,y:u,width:s.width,height:s.height}}function wt(t){return W(t).position==="static"}function Wt(t,e){return!B(t)||W(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const n=k(t);if(Ct(t))return n;if(!B(t)){let i=q(t);for(;i&&!G(i);){if(N(i)&&!wt(i))return i;i=q(i)}return n}let o=Wt(t,e);for(;o&&He(o)&&wt(o);)o=Wt(o,e);return o&&G(o)&&wt(o)&&!Pt(o)?n:o||We(t)||n}const Ke=async function(t){const e=this.getOffsetParent||Zt,n=this.getDimensions,o=await n(t.floating);return{reference:Ze(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ge(t){return W(t).direction==="rtl"}const Je={convertOffsetParentRelativeRectToViewportRelativeRect:ze,getDocumentElement:Y,getClippingRect:qe,getOffsetParent:Zt,getElementRects:Ke,getClientRects:Ve,getDimensions:Ue,getScale:K,isElement:N,isRTL:Ge};function Qe(t,e){let n=null,o;const i=Y(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:u,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const f=at(u),m=at(i.clientWidth-(a+d)),g=at(i.clientHeight-(u+p)),w=at(a),v={rootMargin:-f+"px "+-m+"px "+-g+"px "+-w+"px",threshold:M(0,F(1,c))||1};let x=!0;function y(b){const A=b[0].intersectionRatio;if(A!==c){if(!x)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(y,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(t)}return s(!0),r}function tn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Ot(t),u=i||r?[...a?ot(a):[],...ot(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const d=a&&l?Qe(a,n):null;let p=-1,f=null;s&&(f=new ResizeObserver(h=>{let[v]=h;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,g=c?U(t):null;c&&w();function w(){const h=U(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,m=requestAnimationFrame(w)}return n(),()=>{var h;u.forEach(v=>{i&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),d==null||d(),(h=f)==null||h.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const en=Te,nn=Le,on=Se,rn=ke,sn=De,Ft=Ee,cn=Me,ln=(t,e,n)=>{const o=new Map,i={platform:Je,...n},r={...i.platform,_c:o};return Ce(t,e,{...i,platform:r})},an=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Ft({element:o.current,padding:i}).fn(n):{}:o?Ft({element:o,padding:i}).fn(n):{}}}};var ft=typeof document<"u"?$.useLayoutEffect:$.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!pt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Kt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Nt(t,e){const n=Kt(t);return Math.round(e*n)/n}function Bt(t){const e=$.useRef(t);return ft(()=>{e.current=t}),e}function fn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[u,d]=$.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,f]=$.useState(o);pt(p,o)||f(o);const[m,g]=$.useState(null),[w,h]=$.useState(null),v=$.useCallback(P=>{P!==A.current&&(A.current=P,g(P))},[]),x=$.useCallback(P=>{P!==R.current&&(R.current=P,h(P))},[]),y=r||m,b=s||w,A=$.useRef(null),R=$.useRef(null),S=$.useRef(u),_=c!=null,T=Bt(c),L=Bt(i),C=$.useCallback(()=>{if(!A.current||!R.current)return;const P={placement:e,strategy:n,middleware:p};L.current&&(P.platform=L.current),ln(A.current,R.current,P).then(X=>{const z={...X,isPositioned:!0};H.current&&!pt(S.current,z)&&(S.current=z,he.flushSync(()=>{d(z)}))})},[p,e,n,L]);ft(()=>{a===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[a]);const H=$.useRef(!1);ft(()=>(H.current=!0,()=>{H.current=!1}),[]),ft(()=>{if(y&&(A.current=y),b&&(R.current=b),y&&b){if(T.current)return T.current(y,b,C);C()}},[y,b,C,T,_]);const O=$.useMemo(()=>({reference:A,floating:R,setReference:v,setFloating:x}),[v,x]),E=$.useMemo(()=>({reference:y,floating:b}),[y,b]),D=$.useMemo(()=>{const P={position:n,left:0,top:0};if(!E.floating)return P;const X=Nt(E.floating,u.x),z=Nt(E.floating,u.y);return l?{...P,transform:"translate("+X+"px, "+z+"px)",...Kt(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:X,top:z}},[n,l,E.floating,u.x,u.y]);return $.useMemo(()=>({...u,update:C,refs:O,elements:E,floatingStyles:D}),[u,C,O,E,D])}const dn=$.forwardRef((t,e)=>{const{children:n,width:o=10,height:i=5,...r}=t;return $.createElement(vt.svg,ht({},r,{ref:e,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:$.createElement("polygon",{points:"0,0 30,0 15,10"}))}),un=dn,Gt="Popper",[Jt,_n]=ge(Gt),[mn,Qt]=Jt(Gt),pn=t=>{const{__scopePopper:e,children:n}=t,[o,i]=$.useState(null);return $.createElement(mn,{scope:e,anchor:o,onAnchorChange:i},n)},hn="PopperAnchor",gn=$.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=Qt(hn,n),s=$.useRef(null),l=zt(e,s);return $.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.createElement(vt.div,ht({},i,{ref:l}))}),te="PopperContent",[wn,xn]=Jt(te),yn=$.forwardRef((t,e)=>{var n,o,i,r,s,l,c,a;const{__scopePopper:u,side:d="bottom",sideOffset:p=0,align:f="center",alignOffset:m=0,arrowPadding:g=0,avoidCollisions:w=!0,collisionBoundary:h=[],collisionPadding:v=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:b="optimized",onPlaced:A,...R}=t,S=Qt(te,u),[_,T]=$.useState(null),L=zt(e,et=>T(et)),[C,H]=$.useState(null),O=xe(C),E=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,D=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,P=d+(f!=="center"?"-"+f:""),X=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},z=Array.isArray(h)?h:[h],ne=z.length>0,rt={padding:X,boundary:z.filter(An),altBoundary:ne},{refs:oe,floatingStyles:Et,placement:ie,isPositioned:st,middlewareData:Z}=fn({strategy:"fixed",placement:P,whileElementsMounted:(...et)=>tn(...et,{animationFrame:b==="always"}),elements:{reference:S.anchor},middleware:[en({mainAxis:p+D,alignmentAxis:m}),w&&nn({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?cn():void 0,...rt}),w&&on({...rt}),rn({...rt,apply:({elements:et,rects:Dt,availableWidth:de,availableHeight:ue})=>{const{width:me,height:pe}=Dt.reference,lt=et.floating.style;lt.setProperty("--radix-popper-available-width",`${de}px`),lt.setProperty("--radix-popper-available-height",`${ue}px`),lt.setProperty("--radix-popper-anchor-width",`${me}px`),lt.setProperty("--radix-popper-anchor-height",`${pe}px`)}}),C&&an({element:C,padding:g}),Pn({arrowWidth:E,arrowHeight:D}),y&&sn({strategy:"referenceHidden",...rt})]}),[St,re]=ee(ie),ct=we(A);_t(()=>{st&&(ct==null||ct())},[st,ct]);const se=(i=Z.arrow)===null||i===void 0?void 0:i.x,ce=(r=Z.arrow)===null||r===void 0?void 0:r.y,le=((s=Z.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ae,fe]=$.useState();return _t(()=>{_&&fe(window.getComputedStyle(_).zIndex)},[_]),$.createElement("div",{ref:oe.setFloating,"data-radix-popper-content-wrapper":"",style:{...Et,transform:st?Et.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ae,"--radix-popper-transform-origin":[(l=Z.transformOrigin)===null||l===void 0?void 0:l.x,(c=Z.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},$.createElement(wn,{scope:u,placedSide:St,onArrowChange:H,arrowX:se,arrowY:ce,shouldHideArrow:le},$.createElement(vt.div,ht({"data-side":St,"data-align":re},R,{ref:L,style:{...R.style,animation:st?void 0:"none",opacity:(a=Z.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))}),vn="PopperArrow",bn={top:"bottom",right:"left",bottom:"top",left:"right"},$n=$.forwardRef(function(e,n){const{__scopePopper:o,...i}=e,r=xn(vn,o),s=bn[r.placedSide];return $.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},$.createElement(un,ht({},i,{ref:n,style:{...i.style,display:"block"}})))});function An(t){return t!==null}const Pn=t=>({name:"transformOrigin",options:t,fn(e){var n,o,i,r,s;const{placement:l,rects:c,middlewareData:a}=e,d=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,p=d?0:t.arrowWidth,f=d?0:t.arrowHeight,[m,g]=ee(l),w={start:"0%",center:"50%",end:"100%"}[g],h=((o=(i=a.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+p/2,v=((r=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let x="",y="";return m==="bottom"?(x=d?w:`${h}px`,y=`${-f}px`):m==="top"?(x=d?w:`${h}px`,y=`${c.floating.height+f}px`):m==="right"?(x=`${-f}px`,y=d?w:`${v}px`):m==="left"&&(x=`${c.floating.width+f}px`,y=d?w:`${v}px`),{data:{x,y}}}});function ee(t){const[e,n="center"]=t.split("-");return[e,n]}const Tn=pn,Ln=gn,Mn=yn,kn=$n;export{_n as $,Tn as a,Mn as b,kn as c,Ln as d};