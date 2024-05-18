import{j as r}from"./jsx-runtime-CexXSJP5.js";import{L as m}from"./Label-BmHkjUBn.js";import{a as Y,_ as C}from"./index-BzXAZrtB.js";import{r as t}from"./index-BP8_t0zE.js";import{a as Z,b as ee,c as re}from"./index-B-Fq2cco.js";import{$ as te}from"./index-CF1bRcOk.js";import{$ as ae}from"./index-CfPzEdaj.js";import{$ as H}from"./index-CVdj8qPy.js";import{c as O}from"./index-Bb4qSo10.js";import{c as y}from"./cn-BeVKbU-K.js";import"./index-BxmsGmlx.js";const U="Switch",[se,je]=Z(U),[oe,ne]=se(U),ce=t.forwardRef((e,s)=>{const{__scopeSwitch:a,name:o,checked:c,defaultChecked:f,required:l,disabled:d,value:p="on",onCheckedChange:k,...j}=e,[i,S]=t.useState(null),J=Y(s,b=>S(b)),v=t.useRef(!1),_=i?!!i.closest("form"):!0,[u=!1,K]=ee({prop:c,defaultProp:f,onChange:k});return t.createElement(oe,{scope:a,checked:u,disabled:d},t.createElement(H.button,C({type:"button",role:"switch","aria-checked":u,"aria-required":l,"data-state":W(u),"data-disabled":d?"":void 0,disabled:d,value:p},j,{ref:J,onClick:re(e.onClick,b=>{K(Q=>!Q),_&&(v.current=b.isPropagationStopped(),v.current||b.stopPropagation())})})),_&&t.createElement(le,{control:i,bubbles:!v.current,name:o,value:p,checked:u,required:l,disabled:d,style:{transform:"translateX(-100%)"}}))}),de="SwitchThumb",ie=t.forwardRef((e,s)=>{const{__scopeSwitch:a,...o}=e,c=ne(de,a);return t.createElement(H.span,C({"data-state":W(c.checked),"data-disabled":c.disabled?"":void 0},o,{ref:s}))}),le=e=>{const{control:s,checked:a,bubbles:o=!0,...c}=e,f=t.useRef(null),l=te(a),d=ae(s);return t.useEffect(()=>{const p=f.current,k=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(k,"checked").set;if(l!==a&&i){const S=new Event("click",{bubbles:o});i.call(p,a),p.dispatchEvent(S)}},[l,a,o]),t.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:a},c,{tabIndex:-1,ref:f,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function W(e){return e?"checked":"unchecked"}const X=ce,pe=ie,me=O("peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted",{variants:{size:{sm:"h-16px w-26px",md:"h-20px w-34px"}},defaultVariants:{size:"md"}}),fe=O("pointer-events-none block rounded-full bg-background ring-0 transition-transform",{variants:{size:{sm:"h-3 w-3 data-[state=checked]:translate-x-10px data-[state=unchecked]:translate-x-0",md:"h-4 w-4 data-[state=checked]:translate-x-14px data-[state=unchecked]:translate-x-0"}},defaultVariants:{size:"md"}}),n=t.forwardRef(({size:e="md",className:s,...a},o)=>r.jsx(X,{className:y(me({size:e}),s),...a,ref:o,children:r.jsx(pe,{className:y(fe({size:e}))})}));n.displayName=X.displayName;n.__docgenInfo={description:"",methods:[],props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const G=["sm","md"],_e={title:"Components/Switch",component:n,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/switch"}}},tags:["autodocs"],argTypes:{size:{description:"스위치 사이즈",options:G,control:{type:"select"}},defaultChecked:{description:"스위치가 on으로 초기화 되어야하는지 여부",control:{type:"boolean"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},args:{size:"md",defaultChecked:!1,disabled:!1,required:!1}},h={args:{},render:e=>r.jsxs("section",{className:"p-4 flex flex-row items-center gap-2",children:[r.jsx(n,{id:"airplane-mode",...e}),r.jsx(m,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},x={args:{defaultChecked:!0},render:e=>r.jsx("section",{className:"p-4 flex flex-col items-center gap-2",children:G.map(s=>r.jsxs("div",{className:"flex flex-row items-center gap-2",children:[r.jsx(n,{id:"airplane-mode",...e,size:s}),r.jsx(m,{htmlFor:"airplane-mode",children:"Airplane Mode"})]},s))})},$={args:{defaultChecked:!0},render:e=>r.jsxs("section",{className:"p-4 flex flex-row items-center gap-2",children:[r.jsx(n,{id:"airplane-mode",...e}),r.jsx(m,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},g={args:{disabled:!0},render:e=>r.jsxs("section",{className:"p-4 flex flex-row items-center gap-2",children:[r.jsx(n,{id:"airplane-mode",...e}),r.jsx(m,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},w={args:{required:!0},render:e=>r.jsxs("section",{className:"p-4 flex flex-row items-center gap-2",children:[r.jsx(n,{id:"airplane-mode",...e}),r.jsx(m,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})};var N,P,E;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: (props: SwitchProps) => {
    return <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>;
  }
}`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var z,M,A;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  render: (props: SwitchProps) => {
    return <section className="p-4 flex flex-col items-center gap-2">
        {sizes.map(size => <div className="flex flex-row items-center gap-2" key={size}>
            <Switch id="airplane-mode" {...props} size={size} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>)}
      </section>;
  }
}`,...(A=(M=x.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,q,F;$.parameters={...$.parameters,docs:{...(L=$.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  render: (props: SwitchProps) => {
    return <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>;
  }
}`,...(F=(q=$.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,D,I;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: (props: SwitchProps) => {
    return <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>;
  }
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,V,B;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: (props: SwitchProps) => {
    return <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>;
  }
}`,...(B=(V=w.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const ye=["Default","Size","DefaultChecked","Disabled","Required"];export{h as Default,$ as DefaultChecked,g as Disabled,w as Required,x as Size,ye as __namedExportsOrder,_e as default};
