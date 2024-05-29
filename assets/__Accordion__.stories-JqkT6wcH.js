import{j as c}from"./jsx-runtime-CexXSJP5.js";import{_ as b,a as oe}from"./index-BzXAZrtB.js";import{r as d,a}from"./index-BP8_t0zE.js";import{a as te,b as M,c as ne,$ as Ce}from"./index-B-Fq2cco.js";import{$ as Ae,a as ge}from"./index-BLeooBoX.js";import{$ as D}from"./index-CVdj8qPy.js";import{$ as he}from"./index-DWSS8tOu.js";import{$ as re}from"./index-C_YK_fqk.js";import{c as F}from"./cn-BeVKbU-K.js";import{T as xe}from"./index-CDfRmw7X.js";import{C as ve}from"./chevron-down-IPPJBYSD.js";import"./index-BxmsGmlx.js";import"./Display-BzLlPsAt.js";import"./index-Bb4qSo10.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";import"./createLucideIcon-CtRCGPks.js";const ce="Collapsible",[Ie,ae]=te(ce),[ye,L]=Ie(ce),_e=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,open:t,defaultOpen:s,disabled:r,onOpenChange:i,...l}=e,[u=!1,f]=M({prop:t,defaultProp:s,onChange:i});return d.createElement(ye,{scope:o,disabled:r,contentId:re(),open:u,onOpenToggle:d.useCallback(()=>f($=>!$),[f])},d.createElement(D.div,b({"data-state":K(u),"data-disabled":r?"":void 0},l,{ref:n})))}),Ee="CollapsibleTrigger",we=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,...t}=e,s=L(Ee,o);return d.createElement(D.button,b({type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":K(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled},t,{ref:n,onClick:ne(e.onClick,s.onOpenToggle)}))}),se="CollapsibleContent",De=d.forwardRef((e,n)=>{const{forceMount:o,...t}=e,s=L(se,e.__scopeCollapsible);return d.createElement(he,{present:o||s.open},({present:r})=>d.createElement(Re,b({},t,{ref:n,present:r})))}),Re=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,present:t,children:s,...r}=e,i=L(se,o),[l,u]=d.useState(t),f=d.useRef(null),$=oe(n,f),C=d.useRef(0),y=C.current,I=d.useRef(0),_=I.current,w=i.open||l,E=d.useRef(w),A=d.useRef();return d.useEffect(()=>{const p=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(p)},[]),Ce(()=>{const p=f.current;if(p){A.current=A.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const m=p.getBoundingClientRect();C.current=m.height,I.current=m.width,E.current||(p.style.transitionDuration=A.current.transitionDuration,p.style.animationName=A.current.animationName),u(t)}},[i.open,t]),d.createElement(D.div,b({"data-state":K(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!w},r,{ref:$,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...e.style}}),w&&s)});function K(e){return e?"open":"closed"}const Ne=_e,Be=we,je=De,v="Accordion",Pe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[z,Te,Oe]=Ae(v),[B,Ao]=te(v,[Oe,ae]),G=ae(),ie=a.forwardRef((e,n)=>{const{type:o,...t}=e,s=t,r=t;return a.createElement(z.Provider,{scope:e.__scopeAccordion},o==="multiple"?a.createElement(Ye,b({},r,{ref:n})):a.createElement(Ve,b({},s,{ref:n})))});ie.propTypes={type(e){const n=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof n=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(n)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[de,ke]=B(v),[le,Se]=B(v,{collapsible:!1}),Ve=a.forwardRef((e,n)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},collapsible:r=!1,...i}=e,[l,u]=M({prop:o,defaultProp:t,onChange:s});return a.createElement(de,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:u,onItemClose:a.useCallback(()=>r&&u(""),[r,u])},a.createElement(le,{scope:e.__scopeAccordion,collapsible:r},a.createElement(ue,b({},i,{ref:n}))))}),Ye=a.forwardRef((e,n)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},...r}=e,[i=[],l]=M({prop:o,defaultProp:t,onChange:s}),u=a.useCallback($=>l((C=[])=>[...C,$]),[l]),f=a.useCallback($=>l((C=[])=>C.filter(y=>y!==$)),[l]);return a.createElement(de,{scope:e.__scopeAccordion,value:i,onItemOpen:u,onItemClose:f},a.createElement(le,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(ue,b({},r,{ref:n}))))}),[Me,j]=B(v),ue=a.forwardRef((e,n)=>{const{__scopeAccordion:o,disabled:t,dir:s,orientation:r="vertical",...i}=e,l=a.useRef(null),u=oe(l,n),f=Te(o),C=ge(s)==="ltr",y=ne(e.onKeyDown,I=>{var _;if(!Pe.includes(I.key))return;const w=I.target,E=f().filter(S=>{var V;return!((V=S.ref.current)!==null&&V!==void 0&&V.disabled)}),A=E.findIndex(S=>S.ref.current===w),p=E.length;if(A===-1)return;I.preventDefault();let m=A;const P=0,T=p-1,O=()=>{m=A+1,m>T&&(m=P)},k=()=>{m=A-1,m<P&&(m=T)};switch(I.key){case"Home":m=P;break;case"End":m=T;break;case"ArrowRight":r==="horizontal"&&(C?O():k());break;case"ArrowDown":r==="vertical"&&O();break;case"ArrowLeft":r==="horizontal"&&(C?k():O());break;case"ArrowUp":r==="vertical"&&k();break}const $e=m%p;(_=E[$e].ref.current)===null||_===void 0||_.focus()});return a.createElement(Me,{scope:o,disabled:t,direction:s,orientation:r},a.createElement(z.Slot,{scope:o},a.createElement(D.div,b({},i,{"data-orientation":r,ref:u,onKeyDown:t?void 0:y}))))}),Y="AccordionItem",[Fe,H]=B(Y),Le=a.forwardRef((e,n)=>{const{__scopeAccordion:o,value:t,...s}=e,r=j(Y,o),i=ke(Y,o),l=G(o),u=re(),f=t&&i.value.includes(t)||!1,$=r.disabled||e.disabled;return a.createElement(Fe,{scope:o,open:f,disabled:$,triggerId:u},a.createElement(Ne,b({"data-orientation":r.orientation,"data-state":fe(f)},l,s,{ref:n,disabled:$,open:f,onOpenChange:C=>{C?i.onItemOpen(t):i.onItemClose(t)}})))}),Ke="AccordionHeader",ze=a.forwardRef((e,n)=>{const{__scopeAccordion:o,...t}=e,s=j(v,o),r=H(Ke,o);return a.createElement(D.h3,b({"data-orientation":s.orientation,"data-state":fe(r.open),"data-disabled":r.disabled?"":void 0},t,{ref:n}))}),U="AccordionTrigger",Ge=a.forwardRef((e,n)=>{const{__scopeAccordion:o,...t}=e,s=j(v,o),r=H(U,o),i=Se(U,o),l=G(o);return a.createElement(z.ItemSlot,{scope:o},a.createElement(Be,b({"aria-disabled":r.open&&!i.collapsible||void 0,"data-orientation":s.orientation,id:r.triggerId},l,t,{ref:n})))}),He="AccordionContent",We=a.forwardRef((e,n)=>{const{__scopeAccordion:o,...t}=e,s=j(v,o),r=H(He,o),i=G(o);return a.createElement(je,b({role:"region","aria-labelledby":r.triggerId,"data-orientation":s.orientation},i,t,{ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function fe(e){return e?"open":"closed"}const Ue=ie,pe=Le,qe=ze,be=Ge,me=We,W=Ue,g=d.forwardRef(({className:e,...n},o)=>c.jsx(pe,{ref:o,className:F("first:border-t border-b border-border [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:color-text-disabled",e),...n}));g.displayName=pe.displayName;const h=d.forwardRef(({className:e,children:n,...o},t)=>c.jsx(qe,{className:"flex",children:c.jsxs(be,{ref:t,className:F("flex w-full gap-5 flex-1 items-start text-start justify-between overflow-hidden py-7 transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:hover:no-underline",e),...o,children:[c.jsx(xe.Body,{size:"lg",bold:!0,className:"flex-1 text-pretty",children:n}),c.jsx(ve,{size:16,className:"shrink-0 transition-transform duration-200"})]})}));h.displayName=be.displayName;const x=d.forwardRef(({className:e,children:n,...o},t)=>c.jsx(me,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:c.jsx("div",{className:F("pb-7 pt-0",e),children:n})}));x.displayName=me.displayName;g.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};x.__docgenInfo={description:"",methods:[]};const Je=["single","multiple"],go={title:"Components/Accordion",component:W,parameters:{layout:"centered",docs:{description:{component:`아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현된다. 일반적으로 헤더 목록은 컨트롤 요소로 활용되며 사용자는 필요에 따라 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있다.

KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_04_07.html<br/>
API Reference: https://www.radix-ui.com/primitives/docs/components/accordion`}}},tags:["autodocs"],argTypes:{type:{options:Je,description:"타입 (싱글/멀티 타입)",control:{type:"select"}},collapsible:{description:"single타입일 때 accordion을 닫을 수 있는지 여부",control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{type:"single",collapsible:!1,disabled:!1}},R={args:{},render:e=>c.jsx("div",{className:"p-4 w-480px",children:c.jsxs(W,{className:"w-full",...e,children:[c.jsxs(g,{value:"item-1",children:[c.jsx(h,{children:"Is it accessible?"}),c.jsx(x,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),c.jsxs(g,{value:"item-2",children:[c.jsx(h,{children:"Is it styled?"}),c.jsx(x,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),c.jsxs(g,{value:"item-3",children:[c.jsx(h,{children:"Is it animated?"}),c.jsx(x,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]}),c.jsxs(g,{value:"item-4",children:[c.jsx(h,{children:"Is it long enough loooooooooooong to break new line?"}),c.jsx(x,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})},N={args:{disabled:!0},render:e=>c.jsx("div",{className:"p-4 w-480px",children:c.jsxs(W,{className:"w-full",...e,children:[c.jsxs(g,{value:"item-1",children:[c.jsx(h,{children:"Is it accessible?"}),c.jsx(x,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),c.jsxs(g,{value:"item-2",children:[c.jsx(h,{children:"Is it styled?"}),c.jsx(x,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),c.jsxs(g,{value:"item-3",children:[c.jsx(h,{children:"Is it animated?"}),c.jsx(x,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})};var q,J,Q;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: (props: AccordionProps) => {
    return <div className="p-4 w-480px">
        <Accordion className="w-full" {...props}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is it long enough loooooooooooong to break new line?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  }
}`,...(Q=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: (props: AccordionProps) => {
    return <div className="p-4 w-480px">
        <Accordion className="w-full" {...props}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  }
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ho=["Default","Disabled"];export{R as Default,N as Disabled,ho as __namedExportsOrder,go as default};
