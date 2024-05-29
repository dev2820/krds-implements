import{j as d}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{B as I}from"./Button-DmHmLsAT.js";import{_ as i,a as N,$ as G}from"./index-BzXAZrtB.js";import{a as L,b as H,c as x}from"./index-B-Fq2cco.js";import{$ as U}from"./index-DgFB4Zkp.js";import{$ as Z,h as J,R as Q,a as W,b as X}from"./index-Zyr4e_aW.js";import{$ as Y}from"./index-C_YK_fqk.js";import{$ as j,a as ee,b as oe,c as te,d as re}from"./index-Cpo-ZMiz.js";import{$ as M}from"./index-DWSS8tOu.js";import{$ as ce}from"./index-CVdj8qPy.js";import{c as ne}from"./cn-BeVKbU-K.js";import"./index-Bb4qSo10.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";import"./index-BxmsGmlx.js";import"./index-CfPzEdaj.js";const k="Popover",[S,qe]=L(k,[j]),h=j(),[ae,$]=S(k),se=e=>{const{__scopePopover:r,children:n,open:p,defaultOpen:c,onOpenChange:t,modal:a=!1}=e,s=h(r),f=o.useRef(null),[l,v]=o.useState(!1),[g=!1,u]=H({prop:p,defaultProp:c,onChange:t});return o.createElement(ee,s,o.createElement(ae,{scope:r,contentId:Y(),triggerRef:f,open:g,onOpenChange:u,onOpenToggle:o.useCallback(()=>u(_=>!_),[u]),hasCustomAnchor:l,onCustomAnchorAdd:o.useCallback(()=>v(!0),[]),onCustomAnchorRemove:o.useCallback(()=>v(!1),[]),modal:a},n))},pe="PopoverTrigger",de=o.forwardRef((e,r)=>{const{__scopePopover:n,...p}=e,c=$(pe,n),t=h(n),a=N(r,c.triggerRef),s=o.createElement(ce.button,i({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":z(c.open)},p,{ref:a,onClick:x(e.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?s:o.createElement(re,i({asChild:!0},t),s)}),B="PopoverPortal",[ie,fe]=S(B,{forceMount:void 0}),ue=e=>{const{__scopePopover:r,forceMount:n,children:p,container:c}=e,t=$(B,r);return o.createElement(ie,{scope:r,forceMount:n},o.createElement(M,{present:n||t.open},o.createElement(Z,{asChild:!0,container:c},p)))},m="PopoverContent",le=o.forwardRef((e,r)=>{const n=fe(m,e.__scopePopover),{forceMount:p=n.forceMount,...c}=e,t=$(m,e.__scopePopover);return o.createElement(M,{present:p||t.open},t.modal?o.createElement($e,i({},c,{ref:r})):o.createElement(be,i({},c,{ref:r})))}),$e=o.forwardRef((e,r)=>{const n=$(m,e.__scopePopover),p=o.useRef(null),c=N(r,p),t=o.useRef(!1);return o.useEffect(()=>{const a=p.current;if(a)return J(a)},[]),o.createElement(Q,{as:G,allowPinchZoom:!0},o.createElement(K,i({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,a=>{var s;a.preventDefault(),t.current||(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,a=>{const s=a.detail.originalEvent,f=s.button===0&&s.ctrlKey===!0,l=s.button===2||f;t.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:x(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})))}),be=o.forwardRef((e,r)=>{const n=$(m,e.__scopePopover),p=o.useRef(!1),c=o.useRef(!1);return o.createElement(K,i({},e,{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a;if((a=e.onCloseAutoFocus)===null||a===void 0||a.call(e,t),!t.defaultPrevented){var s;p.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),t.preventDefault()}p.current=!1,c.current=!1},onInteractOutside:t=>{var a,s;(a=e.onInteractOutside)===null||a===void 0||a.call(e,t),t.defaultPrevented||(p.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=t.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(f))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),K=o.forwardRef((e,r)=>{const{__scopePopover:n,trapFocus:p,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:a,onEscapeKeyDown:s,onPointerDownOutside:f,onFocusOutside:l,onInteractOutside:v,...g}=e,u=$(m,n),_=h(n);return W(),o.createElement(X,{asChild:!0,loop:!0,trapped:p,onMountAutoFocus:c,onUnmountAutoFocus:t},o.createElement(U,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:v,onEscapeKeyDown:s,onPointerDownOutside:f,onFocusOutside:l,onDismiss:()=>u.onOpenChange(!1)},o.createElement(oe,i({"data-state":z(u.open),role:"dialog",id:u.contentId},_,g,{ref:r,style:{...g.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))}),me=o.forwardRef((e,r)=>{const{__scopePopover:n,...p}=e,c=h(n);return o.createElement(te,i({},c,p,{ref:r}))});function z(e){return e?"open":"closed"}const ve=se,ge=de,Pe=ue,V=le,xe=me,O=ve,q=ge,C=o.forwardRef(({children:e,className:r,align:n="center",sideOffset:p=4,...c},t)=>d.jsx(Pe,{children:d.jsxs(V,{ref:t,align:n,sideOffset:p,className:ne("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...c,children:[e,d.jsx(xe,{width:12,height:6,className:"fill-white -translate-y-1px drop-shadow-[0_0_0.5px_grey] ",style:{clipPath:"inset(0 -10px -10px -10px)"}})]})}));C.displayName=V.displayName;C.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:"'center'",computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const he=["left","right","bottom","top"],Ge={title:"Components/Popover",component:O,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/popover"}}},tags:["autodocs"],argTypes:{},args:{}},P={render:e=>d.jsx("section",{className:"p-4 w-480px",children:d.jsxs(O,{...e,children:[d.jsx(q,{children:d.jsx(I,{children:"Open"})}),d.jsx(C,{children:"Place content for the popover here."})]})})},b={args:{},render:e=>d.jsx("section",{className:"p-4 w-480px flex flex-row gap-4",children:he.map(r=>o.createElement(O,{...e,key:r},d.jsx(q,{children:d.jsx(I,{children:r})}),d.jsxs(C,{side:r,children:["The Popover will be located on the ",r]})))})};var E,w,R;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (props: PopoverProps) => {
    return <section className="p-4 w-480px">
        <Popover {...props}>
          <PopoverTrigger>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </section>;
  }
}`,...(R=(w=P.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,D,F,y,T;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: (props: PopoverProps) => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        {sides.map(side => <Popover {...props} key={side}>
            <PopoverTrigger>
              <Button>{side}</Button>
            </PopoverTrigger>
            <PopoverContent side={side}>
              The Popover will be located on the {side}
            </PopoverContent>
          </Popover>)}
      </section>;
  }
}`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Popover가 등장할 위치는 PopoverContent의 `side` 옵션을 통해 설정할 수 있다.",...(T=(y=b.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};const Le=["Default","Side"];export{P as Default,b as Side,Le as __namedExportsOrder,Ge as default};
