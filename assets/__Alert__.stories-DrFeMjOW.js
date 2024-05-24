import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as f}from"./index-Bb4qSo10.js";import{r as i}from"./index-BP8_t0zE.js";import{c as l}from"./cn-BeVKbU-K.js";const x=f("relative w-full rounded-lg border p-4 [&>i~*]:pl-7 [&>i+div]:translate-y-[-3px] [&>i]:absolute [&>i]:left-4 [&>i]:top-4 [&>i]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",error:"border-error/50 text-error dark:border-error [&>i]:text-error"}},defaultVariants:{variant:"default"}}),s=i.forwardRef(({className:r,variant:t,...a},n)=>e.jsx("div",{ref:n,role:"alert",className:l(x({variant:t}),r),...a}));s.displayName="Alert";const c=i.forwardRef(({className:r,children:t,...a},n)=>e.jsx("h5",{ref:n,className:l("mb-1 font-medium leading-none tracking-tight",r),...a,children:t}));c.displayName="AlertTitle";const d=i.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:l("text-sm [&_p]:leading-relaxed",r),...t}));d.displayName="AlertDescription";s.__docgenInfo={description:"",methods:[],displayName:"Alert"};c.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};d.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const g=["default","error"],y={title:"Components/Alert",component:s,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/alert"}}},tags:["autodocs"],argTypes:{variant:{options:g,description:"alert 타입",control:{type:"select"}}},args:{variant:"default"}},o={args:{},render:r=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs(s,{...r,children:[e.jsx("i",{className:"i-t-warning text-6"}),e.jsx(c,{children:"Heads up!"}),e.jsx(d,{children:"You can add components to your app using the cli."})]})})};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: (props: AlertProps) => {
    return <section className="p-4 w-480px">
        <Alert {...props}>
          <i className="i-t-warning text-6" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </section>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,y as default};
