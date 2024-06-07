import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as f}from"./Button-D3ULYY6T.js";import{$ as _,a as g,b,c as y,d as N,e as j,f as w,g as C}from"./index-DfVvvjaF.js";import{r as d}from"./index-BP8_t0zE.js";import{c as o}from"./cn-BeVKbU-K.js";import"./index-GJGSU1ij.js";import"./index-Bb4qSo10.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";import"./index-CuNLDAYM.js";import"./index-Dt4C4bkn.js";import"./index-DusqUSmW.js";import"./index-C4bjqnC2.js";import"./index-BxmsGmlx.js";import"./index-CdIQimV-.js";import"./index-TfAOQb-J.js";const M=_,k=w,v=C,F=y,l=d.forwardRef(({className:a,...s},t)=>e.jsx(g,{ref:t,className:o("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s}));l.displayName=g.displayName;const i=d.forwardRef(({className:a,children:s,...t},$)=>e.jsxs(v,{children:[e.jsx(l,{}),e.jsxs(b,{ref:$,className:o("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...t,children:[s,e.jsxs(y,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx("i",{className:"i-t-close-big text-6"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));i.displayName=b.displayName;const r=({className:a,...s})=>e.jsx("div",{className:o("flex flex-col space-y-1.5 text-center sm:text-left",a),...s});r.displayName="ModalHeader";const c=({className:a,...s})=>e.jsx("div",{className:o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...s});c.displayName="ModalFooter";const m=d.forwardRef(({className:a,...s},t)=>e.jsx(N,{ref:t,className:o("text-lg font-semibold leading-none tracking-tight",a),...s}));m.displayName=N.displayName;const p=d.forwardRef(({className:a,...s},t)=>e.jsx(j,{ref:t,className:o("text-sm text-muted-foreground",a),...s}));p.displayName=j.displayName;l.__docgenInfo={description:"",methods:[]};i.__docgenInfo={description:"",methods:[]};r.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};c.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};m.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const W={title:"Components/Modal",component:M,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/componentsModal/"}}},tags:["autodocs"],argTypes:{},args:{}},n={args:{},render:()=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs(M,{children:[e.jsx(k,{asChild:!0,children:e.jsx(f,{children:"Share"})}),e.jsxs(i,{className:"sm:max-w-md",children:[e.jsxs(r,{children:[e.jsx(m,{children:"Share link"}),e.jsx(p,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx("label",{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx("input",{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsx("button",{type:"submit",className:"px-3",children:e.jsx("span",{className:"sr-only",children:"Copy"})})]}),e.jsx(c,{className:"sm:justify-end",children:e.jsx(F,{asChild:!0,children:e.jsx(f,{type:"button",size:"md",children:"Close"})})})]})]})})};var x,u,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px">
        <Modal>
          <ModalTrigger asChild>
            <Button>Share</Button>
          </ModalTrigger>
          <ModalContent className="sm:max-w-md">
            <ModalHeader>
              <ModalTitle>Share link</ModalTitle>
              <ModalDescription>
                Anyone who has this link will be able to view this.
              </ModalDescription>
            </ModalHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="link" className="sr-only">
                  Link
                </label>
                <input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
              </div>
              <button type="submit" className="px-3">
                <span className="sr-only">Copy</span>
              </button>
            </div>
            <ModalFooter className="sm:justify-end">
              <ModalClose asChild>
                <Button type="button" size="md">
                  Close
                </Button>
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>;
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const X=["Default"];export{n as Default,X as __namedExportsOrder,W as default};
