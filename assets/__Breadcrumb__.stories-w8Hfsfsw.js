import{j as r}from"./jsx-runtime-CexXSJP5.js";import{$ as y}from"./index-BzXAZrtB.js";import{c as L}from"./index-Bb4qSo10.js";import{r as t}from"./index-BP8_t0zE.js";import{c as d}from"./cn-BeVKbU-K.js";const m=t.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));m.displayName="Breadcrumb";const u=t.forwardRef(({className:e,...a},n)=>r.jsx("ol",{ref:n,className:d("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a}));u.displayName="BreadcrumbList";const s=t.forwardRef(({className:e,...a},n)=>r.jsx("li",{ref:n,className:d("inline-flex items-center gap-1.5",e),...a}));s.displayName="BreadcrumbItem";const p=t.forwardRef(({asChild:e,className:a,...n},b)=>{const N=e?y:"a";return r.jsx(N,{ref:b,className:d("transition-colors hover:text-foreground",a),...n})});p.displayName="BreadcrumbLink";const l=t.forwardRef(({className:e,...a},n)=>r.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:d("font-normal text-foreground",e),...a}));l.displayName="BreadcrumbPage";const _=L("",{variants:{type:{slash:"i-t-slash",dash:"i-t-dash",arrow:"i-t-arrow"}},defaultVariants:{type:"slash"}}),c=({type:e,children:a,className:n,...b})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",n),...b,children:a??r.jsx("i",{className:d(_({type:e}),"text-6")})});c.displayName="BreadcrumbSeparator";const B=({className:e,...a})=>r.jsxs("span",{role:"presentation","aria-hidden":"true",className:d("flex h-9 w-9 items-center justify-center",e),...a,children:[r.jsx("span",{className:"h-4 w-4",children:"..."}),r.jsx("span",{className:"sr-only",children:"More"})]});B.displayName="BreadcrumbElipssis";m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"};const E={title:"Components/Breadcrumb",component:m,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/breadcrumb"}}},tags:["autodocs"],args:{}},o={args:{},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(m,{...e,children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(p,{asChild:!0,children:r.jsx("a",{href:"/",children:"Home"})})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(B,{})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(p,{asChild:!0,children:r.jsx("a",{href:"/docs/components",children:"Components"})})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(l,{children:"Breadcrumb"})})]})})})},i={args:{},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(m,{...e,children:r.jsxs(u,{children:[r.jsx(s,{children:"Link 1"}),r.jsx(c,{}),r.jsx(s,{children:"Link 2"}),r.jsx(c,{type:"slash"}),r.jsx(s,{children:"Link 3"}),r.jsx(c,{type:"dash"}),r.jsx(s,{children:"Link 4"}),r.jsx(c,{type:"arrow"}),r.jsx(s,{children:r.jsx(l,{children:"Current"})})]})})})};var x,h,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: (props: BreadcrumbProps) => {
    return <section className="p-4 w-480px">
        <Breadcrumb {...props}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/">Home</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/docs/components">Components</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>;
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,g,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: (props: BreadcrumbProps) => {
    return <section className="p-4 w-480px">
        <Breadcrumb {...props}>
          <BreadcrumbList>
            <BreadcrumbItem>Link 1</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Link 2</BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>Link 3</BreadcrumbItem>
            <BreadcrumbSeparator type="dash" />
            <BreadcrumbItem>Link 4</BreadcrumbItem>
            <BreadcrumbSeparator type="arrow" />
            <BreadcrumbItem>
              <BreadcrumbPage>Current</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>;
  }
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const R=["Default","Separator"];export{o as Default,i as Separator,R as __namedExportsOrder,E as default};
