import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as n}from"./Button-D7eua3L_.js";import"./index-BP8_t0zE.js";import"./index-BzXAZrtB.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const i=["solid","outline","ghost","link"],p=["lg","md","sm","xs"],a=["primary","grey","whiteAlpha","error","info"],h={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:`API Reference: https://ui.shadcn.com/docs/components/button <br/>
whiteAlpha colorScheme는 dark모드에서 확인이 가능합니다.`}}},tags:["autodocs"],argTypes:{variant:{options:i,description:"버튼 종류",control:{type:"select"}},size:{options:p,description:"버튼 크기",control:{type:"select"}},colorScheme:{options:a,description:"버튼 색상",control:{type:"select"}},disabled:{description:"disabled props",control:{type:"boolean"}}},args:{variant:"solid",size:"lg",colorScheme:"primary",disabled:!1}},o={args:{},render:c=>e.jsx("section",{className:"p-4 w-480px flex flex-row justify-center",children:e.jsx(n,{...c,children:"Button"})})};var t,r,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: (props: ButtonProps) => {
    return <section className="p-4 w-480px flex flex-row justify-center">
        <Button {...props}>Button</Button>
      </section>;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,h as default};
