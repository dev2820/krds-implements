import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as h}from"./index-BP8_t0zE.js";import{c as b}from"./cn-BeVKbU-K.js";const s=h.forwardRef(({className:e,...g},f)=>r.jsx("textarea",{className:b("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","invalid:border-error invalid:bg-error-50","disabled:cursor-not-allowed disabled:bg-grey-50 disabled:opacity-50",e),ref:f,...g}));s.displayName="Textarea";s.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const w={title:"Components/Textarea",component:s,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/textarea"}}},tags:["autodocs"],argTypes:{},args:{}},a={render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(s,{placeholder:"Type your message here.",...e})})},o={args:{placeholder:"Type your message here."},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(s,{required:!0,...e})})},n={args:{placeholder:"Type your message here."},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(s,{disabled:!0,...e})})};var t,p,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (props: TextareaProps) => {
    return <section className="p-4 w-480px">
        <Textarea placeholder="Type your message here." {...props} />
      </section>;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,i,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: (props: TextareaProps) => {
    return <section className="p-4 w-480px">
        <Textarea required {...props} />
      </section>;
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: (props: TextareaProps) => {
    return <section className="p-4 w-480px">
        <Textarea disabled {...props} />
      </section>;
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const N=["Default","Invalid","Disabled"];export{a as Default,n as Disabled,o as Invalid,N as __namedExportsOrder,w as default};
