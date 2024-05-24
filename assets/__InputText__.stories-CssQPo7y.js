import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as f}from"./index-BP8_t0zE.js";import{I as n}from"./InputText-SVOHhoIn.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const I=["xs","sm","md","lg"],E={title:"Components/InputText",component:n,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/input"}}},tags:["autodocs"],argTypes:{sizeVariant:{options:I,description:"input 크기",control:{type:"select"}},disabled:{control:{type:"boolean"}}},args:{size:"md",disabled:!1}},r={args:{},render:e=>s.jsx("section",{className:"p-4 w-480px",children:s.jsx(n,{type:"email",placeholder:"Email",...e})})},t={args:{},render:e=>s.jsx("section",{className:"p-4 w-480px flex flex-col gap-4",children:I.map(o=>f.createElement(n,{type:"email",placeholder:"Email",sizeVariant:o,...e,key:o}))})},a={args:{},render:e=>s.jsx("section",{className:"p-4 w-480px",children:s.jsx(n,{type:"password",...e})})};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: (props: InputTextProps) => {
    return <section className="p-4 w-480px">
        <InputText type="email" placeholder="Email" {...props} />
      </section>;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: (props: InputTextProps) => {
    return <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => <InputText type="email" placeholder="Email" sizeVariant={size} {...props} key={size} />)}
      </section>;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: (props: InputTextProps) => {
    return <section className="p-4 w-480px">
        <InputText type="password" {...props} />
      </section>;
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const j=["Default","SizeVariant","PasswordInput"];export{r as Default,a as PasswordInput,t as SizeVariant,j as __namedExportsOrder,E as default};
