import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as v}from"./index-Bb4qSo10.js";import{c as w}from"./cn-BeVKbU-K.js";import"./index-BP8_t0zE.js";const y=v("inline-flex items-center rounded-2px border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{subtle:"border-transparent",solid:"border-transparent",outline:"bg-transparent"},colorScheme:{primary:"bg-primary text-primary-foreground",success:"bg-success text-success-foreground",warning:"bg-warning text-warning-foreground",error:"bg-error text-error-foreground",info:"bg-info text-info-foreground"}},compoundVariants:[{variant:"outline",colorScheme:"primary",className:"bg-transparent border-primary text-primary-600"},{variant:"outline",colorScheme:"success",className:"bg-transparent border-success text-success-600"},{variant:"outline",colorScheme:"warning",className:"bg-transparent border-warning text-warning-600"},{variant:"outline",colorScheme:"error",className:"bg-transparent border-error text-error-600"},{variant:"outline",colorScheme:"info",className:"bg-transparent border-info text-info-600"},{variant:"subtle",colorScheme:"primary",className:"bg-primary-100 text-primary-800"},{variant:"subtle",colorScheme:"success",className:"bg-success-100 text-success-800"},{variant:"subtle",colorScheme:"warning",className:"bg-warning-100 text-warning-800"},{variant:"subtle",colorScheme:"error",className:"bg-error-100 text-error-800"},{variant:"subtle",colorScheme:"info",className:"bg-info-100 text-info-800"}],defaultVariants:{variant:"subtle",colorScheme:"primary"}});function a({className:e,variant:b,colorScheme:h,...S}){return r.jsx("div",{className:w(y({variant:b,colorScheme:h}),e),...S})}a.__docgenInfo={description:"",methods:[],displayName:"Badge"};const x=["subtle","solid","outline"],f=["primary","success","warning","error","info"],V={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/badge"}}},tags:["autodocs"],argTypes:{variant:{options:x,description:"badge 타입",control:{type:"select"}},colorScheme:{options:f,description:"badge 색상",control:{type:"select"}}},args:{variant:"subtle",colorScheme:"primary"}},s={args:{},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(a,{...e,children:"Badge"})})},o={args:{},render:()=>r.jsx("section",{className:"p-4 w-480px flex flex-row gap-4",children:x.map(e=>r.jsx(a,{variant:e,children:"Badge"},e))})},n={args:{},render:()=>r.jsx("section",{className:"p-4 w-480px flex flex-row gap-4",children:f.map(e=>r.jsx(a,{colorScheme:e,children:"Badge"},e))})};var t,c,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: (props: BadgeProps) => {
    return <section className="p-4 w-480px">
        <Badge {...props}>Badge</Badge>
      </section>;
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        {variants.map(variant => <Badge variant={variant} key={variant}>
            Badge
          </Badge>)}
      </section>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        {colorSchemes.map(colorScheme => <Badge colorScheme={colorScheme} key={colorScheme}>
            Badge
          </Badge>)}
      </section>;
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const C=["Default","Variant","ColorScheme"];export{n as ColorScheme,s as Default,o as Variant,C as __namedExportsOrder,V as default};
