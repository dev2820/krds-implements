import{$ as m,_ as l,a as S}from"./index-GJGSU1ij.js";import{r as t}from"./index-BP8_t0zE.js";import{$ as L,c as j,a as u,d as G}from"./index-CuNLDAYM.js";import{$ as D}from"./index-Dt4C4bkn.js";import{$ as W}from"./index-DusqUSmW.js";import{$ as z,R as K,h as U,a as V,b as Y}from"./index-CdIQimV-.js";import{$ as x}from"./index-TfAOQb-J.js";import{$ as p}from"./index-C4bjqnC2.js";const E="Dialog",[R,Z]=L(E),[q,i]=R(E),C=e=>{const{__scopeDialog:a,children:n,open:r,defaultOpen:c,onOpenChange:o,modal:s=!0}=e,d=t.useRef(null),$=t.useRef(null),[g=!1,b]=j({prop:r,defaultProp:c,onChange:o});return t.createElement(q,{scope:a,triggerRef:d,contentRef:$,contentId:D(),titleId:D(),descriptionId:D(),open:g,onOpenChange:b,onOpenToggle:t.useCallback(()=>b(k=>!k),[b]),modal:s},n)},B="DialogTrigger",O=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(B,n),o=m(a,c.triggerRef);return t.createElement(p.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":v(c.open)},r,{ref:o,onClick:u(e.onClick,c.onOpenToggle)}))}),P="DialogPortal",[H,h]=R(P,{forceMount:void 0}),A=e=>{const{__scopeDialog:a,forceMount:n,children:r,container:c}=e,o=i(P,a);return t.createElement(H,{scope:a,forceMount:n},t.Children.map(r,s=>t.createElement(x,{present:n||o.open},t.createElement(z,{asChild:!0,container:c},s))))},_="DialogOverlay",I=t.forwardRef((e,a)=>{const n=h(_,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(_,e.__scopeDialog);return o.modal?t.createElement(x,{present:r||o.open},t.createElement(J,l({},c,{ref:a}))):null}),J=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(_,n);return t.createElement(K,{as:S,allowPinchZoom:!0,shards:[c.contentRef]},t.createElement(p.div,l({"data-state":v(c.open)},r,{ref:a,style:{pointerEvents:"auto",...r.style}})))}),f="DialogContent",M=t.forwardRef((e,a)=>{const n=h(f,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(f,e.__scopeDialog);return t.createElement(x,{present:r||o.open},o.modal?t.createElement(Q,l({},c,{ref:a})):t.createElement(X,l({},c,{ref:a})))}),Q=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(null),c=m(a,n.contentRef,r);return t.useEffect(()=>{const o=r.current;if(o)return U(o)},[]),t.createElement(T,l({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,d=s.button===0&&s.ctrlKey===!0;(s.button===2||d)&&o.preventDefault()}),onFocusOutside:u(e.onFocusOutside,o=>o.preventDefault())}))}),X=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(!1),c=t.useRef(!1);return t.createElement(T,l({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var d;r.current||(d=n.triggerRef.current)===null||d===void 0||d.focus(),o.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:o=>{var s,d;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const $=o.target;((d=n.triggerRef.current)===null||d===void 0?void 0:d.contains($))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&c.current&&o.preventDefault()}}))}),T=t.forwardRef((e,a)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:o,...s}=e,d=i(f,n),$=t.useRef(null),g=m(a,$);return V(),t.createElement(t.Fragment,null,t.createElement(Y,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:o},t.createElement(W,l({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":v(d.open)},s,{ref:g,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),y="DialogTitle",N=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(y,n);return t.createElement(p.h2,l({id:c.titleId},r,{ref:a}))}),ee="DialogDescription",F=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(ee,n);return t.createElement(p.p,l({id:c.descriptionId},r,{ref:a}))}),te="DialogClose",w=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(te,n);return t.createElement(p.button,l({type:"button"},r,{ref:a,onClick:u(e.onClick,()=>c.onOpenChange(!1))}))});function v(e){return e?"open":"closed"}const oe="DialogTitleWarning",[ce,xe]=G(oe,{contentName:f,titleName:y,docsSlug:"dialog"}),ne=C,re=O,ae=A,se=I,de=M,le=N,ie=F,$e=w,ve=Object.freeze(Object.defineProperty({__proto__:null,Close:$e,Content:de,Description:ie,Dialog:C,DialogClose:w,DialogContent:M,DialogDescription:F,DialogOverlay:I,DialogPortal:A,DialogTitle:N,DialogTrigger:O,Overlay:se,Portal:ae,Root:ne,Title:le,Trigger:re,WarningProvider:ce,createDialogScope:Z},Symbol.toStringTag,{value:"Module"}));export{ne as $,ve as D,se as a,de as b,le as c,ie as d,re as e,ae as f,$e as g};