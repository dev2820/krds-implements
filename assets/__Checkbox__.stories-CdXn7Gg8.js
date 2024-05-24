import{j as e}from"./jsx-runtime-CexXSJP5.js";import{C as a}from"./Checkbox-CkF8mkKk.js";import"./index-BP8_t0zE.js";import"./index-BzXAZrtB.js";import"./index-B-Fq2cco.js";import"./index-CF1bRcOk.js";import"./index-CfPzEdaj.js";import"./index-DWSS8tOu.js";import"./index-BxmsGmlx.js";import"./index-CVdj8qPy.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const b=["md","lg","xl"],_={title:"Components/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/checkbox"}}},tags:["autodocs"],argTypes:{size:{description:"",options:b,control:{type:"select"}},indeterminate:{control:{type:"boolean"}}},args:{size:"lg",indeterminate:!1}},r={args:{},render:s=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",...s}),e.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})})},t={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-col gap-4",children:b.map(s=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",size:s}),e.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]},s))})},n={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",indeterminate:!0,defaultChecked:!0}),e.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})})};var o,c,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: (props: CheckboxProps) => {
    return <section className="p-4 w-480px">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" {...props} />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      </section>;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => <div className="flex items-center space-x-2" key={size}>
            <Checkbox id="terms" size={size} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </label>
          </div>)}
      </section>;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" indeterminate={true} defaultChecked={true} />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      </section>;
  }
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const F=["Default","Size","Indeterminate"];export{r as Default,n as Indeterminate,t as Size,F as __namedExportsOrder,_ as default};
