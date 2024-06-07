import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as r}from"./Button-D3ULYY6T.js";import{c as N}from"./createLucideIcon-CtRCGPks.js";import"./index-BP8_t0zE.js";import"./index-GJGSU1ij.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=N("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),p=["primary","secondary","tertiary","text"],I=["xl","lg","md","sm","xs"],T={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:p,description:"버튼 종류",control:{type:"select"}},size:{options:I,description:"버튼 크기",control:{type:"select"}},disabled:{description:"disabled props",control:{type:"boolean"}}},args:{variant:"primary",size:"md",disabled:!1}},n={args:{},render:t=>e.jsx("section",{className:"p-4 w-480px flex flex-row justify-center",children:e.jsx(r,{...t,children:"Button"})})},o={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-row justify-center gap-4",children:I.map(t=>e.jsx(r,{size:t,children:"Button"}))})},a={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-row justify-center gap-4",children:p.map(t=>e.jsx(r,{variant:t,children:"Button"}))})},c={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-row justify-center gap-4",children:p.map(t=>e.jsx(r,{variant:t,disabled:!0,children:"Button"}))})},i={args:{},render:()=>e.jsxs("section",{className:"p-4 w-480px flex flex-row justify-center gap-4",children:[e.jsx(r,{leftIcon:e.jsx(s,{size:"24"}),children:"Button"}),e.jsx(r,{rightIcon:e.jsx(s,{size:"24"}),children:"Button"}),e.jsx(r,{leftIcon:e.jsx(s,{size:"24"}),rightIcon:e.jsx(s,{size:"24"}),children:"Button"})]})};var u,l,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: (props: ButtonProps) => {
    return <section className="p-4 w-480px flex flex-row justify-center">
        <Button {...props}>Button</Button>
      </section>;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,x,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {sizes.map(size => <Button size={size}>Button</Button>)}
      </section>;
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,g,j;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {variants.map(variant => <Button variant={variant}>Button</Button>)}
      </section>;
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var h,y,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {variants.map(variant => <Button variant={variant} disabled>Button</Button>)}
      </section>;
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,S,v;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row justify-center gap-4">
        <Button leftIcon={<Search size="24" />}>Button</Button>
        <Button rightIcon={<Search size="24" />}>Button</Button>
        <Button leftIcon={<Search size="24" />} rightIcon={<Search size="24" />}>Button</Button>
      </section>;
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const A=["Default","Size","Variant","Disabled","WithIcon"];export{n as Default,c as Disabled,o as Size,a as Variant,i as WithIcon,A as __namedExportsOrder,T as default};
