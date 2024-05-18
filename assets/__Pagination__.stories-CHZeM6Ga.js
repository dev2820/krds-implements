import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as x}from"./index-BP8_t0zE.js";import{c as o}from"./cn-BeVKbU-K.js";import{b as f}from"./Button-D7eua3L_.js";import"./index-BzXAZrtB.js";import"./index-Bb4qSo10.js";const c=({className:i,...a})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",i),...a});c.displayName="Pagination";const m=x.forwardRef(({className:i,...a},s)=>n.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",i),...a}));m.displayName="PaginationContent";const e=x.forwardRef(({className:i,...a},s)=>n.jsx("li",{ref:s,className:o("",i),...a}));e.displayName="PaginationItem";const t=({className:i,isActive:a,children:s,...h})=>n.jsx("a",{"aria-current":a?"page":void 0,className:o(f({variant:a?"outline":"ghost"}),"min-w-12 min-h-12 p-4",i),...h,children:s});t.displayName="PaginationLink";const g=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to previous page",className:o("gap-1 pl-2.5",i),...a,children:[n.jsx("i",{className:"i-t-chevron-right rotate-180 text-4"}),n.jsx("span",{children:"Previous"})]});g.displayName="PaginationPrevious";const d=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to next page",className:o("gap-1 pr-2.5",i),...a,children:[n.jsx("span",{children:"Next"}),n.jsx("i",{className:"i-t-chevron-right text-4"})]});d.displayName="PaginationNext";c.__docgenInfo={description:"",methods:[],displayName:"Pagination"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const v={title:"Components/Pagination",component:c,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/pagination"}}},tags:["autodocs"],argTypes:{},args:{}},r={args:{},render:()=>n.jsx("section",{className:"p-4 w-480px",children:n.jsx(c,{children:n.jsxs(m,{children:[n.jsx(e,{children:n.jsx(g,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:"..."}),n.jsx(e,{children:n.jsx(d,{href:"#"})})]})})})};var l,p,P;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>...</PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>;
  }
}`,...(P=(p=r.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,v as default};
