import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as v}from"./index-Bb4qSo10.js";import{r as t}from"./index-BP8_t0zE.js";import{c as s}from"./cn-BeVKbU-K.js";const _=v("rounded-lg text-card-foreground",{variants:{variant:{elevated:"bg-card-background-elevated shadow-sm",outline:"bg-card-background-outline border border-border",filled:"bg-card-background-fill"}},defaultVariants:{variant:"elevated"}}),d=t.forwardRef(({variant:r,className:a,...n},m)=>e.jsx("div",{ref:m,className:s(_({variant:r}),a),...n}));d.displayName="Card";const c=t.forwardRef(({className:r,...a},n)=>e.jsx("div",{ref:n,className:s("flex flex-col space-y-1.5 p-6",r),...a}));c.displayName="CardHeader";const p=t.forwardRef(({children:r,className:a,...n},m)=>e.jsx("h3",{ref:m,className:s("text-2xl font-semibold leading-none tracking-tight",a),...n,children:r}));p.displayName="CardTitle";const C=t.forwardRef(({className:r,...a},n)=>e.jsx("p",{ref:n,className:s("text-sm text-muted-foreground",r),...a}));C.displayName="CardDescription";const l=t.forwardRef(({className:r,...a},n)=>e.jsx("div",{ref:n,className:s("p-6 pt-0",r),...a}));l.displayName="CardContent";const x=t.forwardRef(({className:r,...a},n)=>e.jsx("div",{ref:n,className:s("flex items-center p-6 pt-0",r),...a}));x.displayName="CardFooter";d.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};x.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};p.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};C.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};l.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const N=["elevated","outline","filled"],T={title:"Components/Card",component:d,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/card"}}},tags:["autodocs"],argTypes:{variant:{options:N,description:"카드 타입",control:{type:"select"}}},args:{}},o={args:{},render:r=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs(d,{...r,children:[e.jsxs(c,{children:[e.jsx(p,{children:"Card Title"}),e.jsx(C,{children:"Card Description"})]}),e.jsx(l,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(x,{children:e.jsx("p",{children:"Card Footer"})})]})})},i={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-col gap-4",children:N.map(r=>e.jsxs(d,{variant:r,children:[e.jsx(c,{children:e.jsx(p,{children:"Lorem Ipsum"})}),e.jsx(l,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]},r))})};var f,u,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: (props: CardProps) => {
    return <section className="p-4 w-480px">
        <Card {...props}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>;
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-col gap-4">
        {variants.map(variant => <Card variant={variant} key={variant}>
            <CardHeader>
              <CardTitle>Lorem Ipsum</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </CardContent>
          </Card>)}
      </section>;
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const D=["Default","Variant"];export{o as Default,i as Variant,D as __namedExportsOrder,T as default};
