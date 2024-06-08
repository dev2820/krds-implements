import{j as t}from"./jsx-runtime-CexXSJP5.js";import{_ as m,$ as de}from"./index-GJGSU1ij.js";import{a as n,r as V}from"./index-BP8_t0zE.js";import{$ as le,c as J,a as ue}from"./index-CuNLDAYM.js";import{$ as fe,a as pe}from"./index-CA2EufPb.js";import{$ as Q}from"./index-C4bjqnC2.js";import{$ as X,a as be,b as me,c as Ce}from"./index-HLkx5aSV.js";import{$ as $e}from"./index-Dt4C4bkn.js";import{c as Y}from"./cn-BeVKbU-K.js";import{T as Ae}from"./index-VCO98ekG.js";import{C as ge}from"./chevron-down-IPPJBYSD.js";import"./index-BxmsGmlx.js";import"./index-TfAOQb-J.js";import"./Body-azYe1GGa.js";import"./index-Bb4qSo10.js";import"./Detail-maxWErGh.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Label-DOncBlms.js";import"./Links-V592Y3Tr.js";import"./Title-BYTkKWDv.js";import"./createLucideIcon-CtRCGPks.js";const $="Accordion",xe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[S,he,Ie]=fe($),[y,ao]=le($,[Ie,X]),O=X(),Z=n.forwardRef((e,r)=>{const{type:o,...a}=e,i=a,c=a;return n.createElement(S.Provider,{scope:e.__scopeAccordion},o==="multiple"?n.createElement(we,m({},c,{ref:r})):n.createElement(Ee,m({},i,{ref:r})))});Z.propTypes={type(e){const r=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof r=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(r)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[ee,ve]=y($),[oe,ye]=y($,{collapsible:!1}),Ee=n.forwardRef((e,r)=>{const{value:o,defaultValue:a,onValueChange:i=()=>{},collapsible:c=!1,...s}=e,[d,l]=J({prop:o,defaultProp:a,onChange:i});return n.createElement(ee,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:l,onItemClose:n.useCallback(()=>c&&l(""),[c,l])},n.createElement(oe,{scope:e.__scopeAccordion,collapsible:c},n.createElement(te,m({},s,{ref:r}))))}),we=n.forwardRef((e,r)=>{const{value:o,defaultValue:a,onValueChange:i=()=>{},...c}=e,[s=[],d]=J({prop:o,defaultProp:a,onChange:i}),l=n.useCallback(g=>d((C=[])=>[...C,g]),[d]),A=n.useCallback(g=>d((C=[])=>C.filter(w=>w!==g)),[d]);return n.createElement(ee,{scope:e.__scopeAccordion,value:s,onItemOpen:l,onItemClose:A},n.createElement(oe,{scope:e.__scopeAccordion,collapsible:!0},n.createElement(te,m({},c,{ref:r}))))}),[_e,E]=y($),te=n.forwardRef((e,r)=>{const{__scopeAccordion:o,disabled:a,dir:i,orientation:c="vertical",...s}=e,d=n.useRef(null),l=de(d,r),A=he(o),C=pe(i)==="ltr",w=ue(e.onKeyDown,x=>{var _;if(!xe.includes(x.key))return;const ie=x.target,D=A().filter(T=>{var P;return!((P=T.ref.current)!==null&&P!==void 0&&P.disabled)}),h=D.findIndex(T=>T.ref.current===ie),K=D.length;if(h===-1)return;x.preventDefault();let u=h;const B=0,j=K-1,N=()=>{u=h+1,u>j&&(u=B)},R=()=>{u=h-1,u<B&&(u=j)};switch(x.key){case"Home":u=B;break;case"End":u=j;break;case"ArrowRight":c==="horizontal"&&(C?N():R());break;case"ArrowDown":c==="vertical"&&N();break;case"ArrowLeft":c==="horizontal"&&(C?R():N());break;case"ArrowUp":c==="vertical"&&R();break}const se=u%K;(_=D[se].ref.current)===null||_===void 0||_.focus()});return n.createElement(_e,{scope:o,disabled:a,direction:i,orientation:c},n.createElement(S.Slot,{scope:o},n.createElement(Q.div,m({},s,{"data-orientation":c,ref:l,onKeyDown:a?void 0:w}))))}),k="AccordionItem",[De,M]=y(k),Be=n.forwardRef((e,r)=>{const{__scopeAccordion:o,value:a,...i}=e,c=E(k,o),s=ve(k,o),d=O(o),l=$e(),A=a&&s.value.includes(a)||!1,g=c.disabled||e.disabled;return n.createElement(De,{scope:o,open:A,disabled:g,triggerId:l},n.createElement(be,m({"data-orientation":c.orientation,"data-state":ne(A)},d,i,{ref:r,disabled:g,open:A,onOpenChange:C=>{C?s.onItemOpen(a):s.onItemClose(a)}})))}),je="AccordionHeader",Ne=n.forwardRef((e,r)=>{const{__scopeAccordion:o,...a}=e,i=E($,o),c=M(je,o);return n.createElement(Q.h3,m({"data-orientation":i.orientation,"data-state":ne(c.open),"data-disabled":c.disabled?"":void 0},a,{ref:r}))}),z="AccordionTrigger",Re=n.forwardRef((e,r)=>{const{__scopeAccordion:o,...a}=e,i=E($,o),c=M(z,o),s=ye(z,o),d=O(o);return n.createElement(S.ItemSlot,{scope:o},n.createElement(me,m({"aria-disabled":c.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId},d,a,{ref:r})))}),Te="AccordionContent",Pe=n.forwardRef((e,r)=>{const{__scopeAccordion:o,...a}=e,i=E($,o),c=M(Te,o),s=O(o);return n.createElement(Ce,m({role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation},s,a,{ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function ne(e){return e?"open":"closed"}const ke=Z,re=Be,Ve=Ne,ce=Re,ae=Pe,F=ke,f=V.forwardRef(({className:e,...r},o)=>t.jsx(re,{ref:o,className:Y("first:border-t border-b border-border [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:color-text-disabled",e),...r}));f.displayName=re.displayName;const p=V.forwardRef(({className:e,children:r,...o},a)=>t.jsx(Ve,{className:"flex",children:t.jsxs(ce,{ref:a,className:Y("flex w-full gap-5 flex-1 items-start text-start justify-between overflow-hidden py-7 transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:hover:no-underline",e),...o,children:[t.jsx(Ae.Body,{size:"lg",bold:!0,className:"flex-1 text-pretty",children:r}),t.jsx(ge,{size:16,className:"shrink-0 transition-transform duration-200"})]})}));p.displayName=ce.displayName;const b=V.forwardRef(({className:e,children:r,...o},a)=>t.jsx(ae,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:t.jsx("div",{className:Y("pb-7 pt-0",e),children:r})}));b.displayName=ae.displayName;f.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};b.__docgenInfo={description:"",methods:[]};const Ye=["single","multiple"],io={title:"Components/Accordion",component:F,parameters:{layout:"centered",docs:{description:{component:`아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현된다. 일반적으로 헤더 목록은 컨트롤 요소로 활용되며 사용자는 필요에 따라 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있다.

KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_04_07.html<br/>
API Reference: https://www.radix-ui.com/primitives/docs/components/accordion`}}},tags:["autodocs"],argTypes:{type:{options:Ye,description:"타입 (싱글/멀티 타입)",control:{type:"select"}},collapsible:{description:"single타입일 때 accordion을 닫을 수 있는지 여부",control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{type:"single",collapsible:!1,disabled:!1}},I={args:{},render:e=>t.jsx("div",{className:"p-4 w-480px",children:t.jsxs(F,{className:"w-full",...e,children:[t.jsxs(f,{value:"item-1",children:[t.jsx(p,{children:"Is it accessible?"}),t.jsx(b,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),t.jsxs(f,{value:"item-2",children:[t.jsx(p,{children:"Is it styled?"}),t.jsx(b,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),t.jsxs(f,{value:"item-3",children:[t.jsx(p,{children:"Is it animated?"}),t.jsx(b,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]}),t.jsxs(f,{value:"item-4",children:[t.jsx(p,{children:"Is it long enough loooooooooooong to break new line?"}),t.jsx(b,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})},v={args:{disabled:!0},render:e=>t.jsx("div",{className:"p-4 w-480px",children:t.jsxs(F,{className:"w-full",...e,children:[t.jsxs(f,{value:"item-1",children:[t.jsx(p,{children:"Is it accessible?"}),t.jsx(b,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),t.jsxs(f,{value:"item-2",children:[t.jsx(p,{children:"Is it styled?"}),t.jsx(b,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),t.jsxs(f,{value:"item-3",children:[t.jsx(p,{children:"Is it animated?"}),t.jsx(b,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})};var H,W,L;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(W=I.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var G,U,q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const so=["Default","Disabled"];export{I as Default,v as Disabled,so as __namedExportsOrder,io as default};
