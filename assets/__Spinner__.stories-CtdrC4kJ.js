import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as M}from"./index-Bb4qSo10.js";import{r as W}from"./index-BP8_t0zE.js";import{c as x}from"./cn-BeVKbU-K.js";const y={lg:48,md:32,sm:20},A=M("relative",{variants:{size:{lg:"size-48px",md:"size-32px",sm:"size-20px"}},defaultVariants:{size:"md"}}),a=W.forwardRef(({type:e="spin",progress:s,size:n,className:t,...f},c)=>{const o=e==="progress",i=e==="spin";n=n??"md";let p={spin:!1,progress:s??0};return i&&(p={spin:!0,progress:s??25}),r.jsxs("div",{className:x(A({size:n}),t),ref:c,role:o?"progressbar":"status","aria-busy":i?!0:void 0,"aria-live":"polite","aria-valuemin":o?0:void 0,"aria-valuemax":o?100:void 0,"aria-valuenow":o?s:void 0,...f,children:[r.jsx("span",{className:"sr-only",children:"loading"}),r.jsx(q,{size:y[n]}),r.jsx(D,{size:y[n],...p})]})});function q({size:e=32,className:s,...n}){const t=e===48?4:e===32?3:2;return r.jsx("span",{className:x("absolute color-grayscale-20",s),...n,children:r.jsx("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,xmlns:"http://www.w3.org/2000/svg",children:r.jsx("circle",{cx:e/2,cy:e/2,r:(e-t)/2,stroke:"currentColor",strokeWidth:t,fill:"none"})})})}function D({spin:e=!1,size:s=32,progress:n=0,className:t,...f}){const c=s===48?4:s===32?3:2,o=s/2,i=(s-c)/2,p=2*Math.PI*i,C=`${n/100*p} ${(1-n/100)*p}`,B=`${p/4}`;return r.jsx("span",{className:x("absolute color-primary transition-stroke",{"animate-spin":e},t),...f,children:r.jsx("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,xmlns:"http://www.w3.org/2000/svg",children:r.jsx("circle",{cx:o,cy:o,r:i,stroke:"currentColor",strokeWidth:c,fill:"none",strokeDasharray:C,strokeDashoffset:B,strokeLinecap:"round"})})})}a.__docgenInfo={description:"",methods:[],displayName:"Root",props:{type:{defaultValue:{value:"'spin'",computed:!1},required:!1}}};q.__docgenInfo={description:"",methods:[],displayName:"Track",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"Identifier",props:{spin:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const L=["spin","progress"],E=["lg","md","sm"],H={title:"Components/Spinner",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{options:L,description:"타입 (spin/progress 타입)",control:{type:"select"}},progress:{description:"spinner 트랙의 채워진 정도 (spin타입이면 기본 25)",control:{type:"number"}},size:{options:E,description:"spinner의 크기",control:{type:"select"}}},args:{type:"spin",progress:25,size:"md"}},d={args:{},render:e=>r.jsx(a,{...e})},l={args:{},render:()=>r.jsx(a,{type:"spin"})},u={args:{},render:()=>r.jsx(a,{type:"progress",progress:50})},m={args:{},render:()=>r.jsx("div",{className:"flex flex-row gap-4",children:E.map(e=>r.jsx(a,{type:"progress",size:e,progress:50}))})},g={args:{},render:()=>r.jsx("div",{className:"flex flex-row gap-4",children:[0,25,50,75,100].map(e=>r.jsx(a,{type:"progress",progress:e}))})};var v,h,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: (props: SpinnerProps) => {
    return <Spinner {...props} />;
  }
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,w,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Spinner type="spin" />;
  }
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var T,N,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Spinner type="progress" progress={50} />;
  }
}`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var b,P,I;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex flex-row gap-4">
        {sizes.map(size => <Spinner type="progress" size={size} progress={50} />)}
      </div>;
  }
}`,...(I=(P=m.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var V,$,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex flex-row gap-4">
        {[0, 25, 50, 75, 100].map(progress => <Spinner type="progress" progress={progress} />)}
      </div>;
  }
}`,...(R=($=g.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const J=["Default","TypeSpin","TypeProgress","Size","Progress"];export{d as Default,g as Progress,m as Size,u as TypeProgress,l as TypeSpin,J as __namedExportsOrder,H as default};
