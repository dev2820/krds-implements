import{j as r}from"./jsx-runtime-CexXSJP5.js";import{$ as R}from"./index-BzXAZrtB.js";import{r as b}from"./index-BP8_t0zE.js";import{c as $}from"./create-context-F0uuYADf.js";import{c as u}from"./cn-BeVKbU-K.js";import{c as S}from"./createLucideIcon-CtRCGPks.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=S("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=S("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),[H,v]=$({name:"Breadcrumb",hookName:"useBreadcrumbContext",providerName:"BreadcrumbProvider",defaultValue:{separator:"/",ellipsis:r.jsx(w,{size:16})}}),o=b.forwardRef(({separator:s,ellipsis:a,...n},t)=>{const h={separator:s??"/",ellipsis:a??r.jsx(w,{size:16})};return r.jsx(H,{value:h,children:r.jsx("nav",{ref:t,"aria-label":"breadcrumb",...n})})});o.displayName="Breadcrumb";const l=b.forwardRef(({className:s,...a},n)=>r.jsx("ol",{ref:n,className:u("flex flex-wrap items-center gap-2 break-words text-sm h-6",s),...a}));l.displayName="BreadcrumbList";const e=b.forwardRef(({className:s,...a},n)=>r.jsx("li",{ref:n,className:u("inline-flex items-center gap-1.5",s),...a}));e.displayName="BreadcrumbItem";const d=b.forwardRef(({asChild:s,className:a,...n},t)=>{const h=s?R:"a";return r.jsx(h,{ref:t,className:u("transition-colors hover:bg-secondary-5 active:bg-secondary-10 disabled:bg-transparent disabled:color-grayscale-50 rounded-2 underline p-6px",a),...n})});d.displayName="BreadcrumbLink";const c=({children:s,className:a,...n})=>{const{separator:t}=v();return r.jsx("li",{role:"presentation","aria-hidden":"true",className:u("",a),...n,children:s??t})};c.displayName="BreadcrumbSeparator";const p=({className:s,children:a,...n})=>{const{ellipsis:t}=v();return r.jsxs("span",{role:"presentation","aria-hidden":"true",className:u("flex h-9 w-9 items-center justify-center",s),...n,children:[r.jsx("span",{className:"h-4 w-4",children:a??t}),r.jsx("span",{className:"sr-only",children:"More"})]})};p.displayName="BreadcrumbElipssis";o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};e.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"};const O={title:"Components/Breadcrumb",component:o,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/breadcrumb"}}},tags:["autodocs"],args:{}},B={args:{},render:s=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(o,{...s,children:r.jsxs(l,{children:[r.jsx(e,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"/",children:"Home"})})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(p,{})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"/docs/components",children:"Components"})})}),r.jsx(c,{}),r.jsx(e,{children:"Breadcrumb"})]})})})},i={args:{},render:()=>r.jsx("section",{children:r.jsx(o,{separator:r.jsx(A,{size:12}),children:r.jsxs(l,{children:[r.jsx(e,{children:r.jsx(d,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(p,{})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"/docs/components",children:"Components"})})}),r.jsx(c,{}),r.jsx(e,{children:"Breadcrumb"})]})})})},m={args:{},render:()=>r.jsx("section",{children:r.jsx(o,{ellipsis:"...",children:r.jsxs(l,{children:[r.jsx(e,{children:r.jsx(d,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(p,{})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"/docs/components",children:"Components"})})}),r.jsx(c,{}),r.jsx(e,{children:"Breadcrumb"})]})})})};var x,j,C;B.parameters={...B.parameters,docs:{...(x=B.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>;
  }
}`,...(C=(j=B.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var f,I,y,g,L;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section>
        <Breadcrumb separator={<ChevronRight size={12} />}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>;
  }
}`,...(y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:y.source},description:{story:"separator attribute를 통해 separator를 변경할 수 있습니다.",...(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.description}}};var N,k,D,_,E;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section>
        <Breadcrumb ellipsis={'...'}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>;
  }
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:`ellipsis attribute를 통해 ellipsis를 변경할 수 있습니다.
ellipsis에는 Dropdown등을 적용해 생략된 링크들에 접근할 수 있게 할 수 있습니다.`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};const G=["Default","Separator","Ellipsis"];export{B as Default,m as Ellipsis,i as Separator,G as __namedExportsOrder,O as default};
