import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as i}from"./index-Bb4qSo10.js";import{c as k}from"./cn-BeVKbU-K.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import{l as B}from"./Label-DOncBlms.js";import"./Links-V592Y3Tr.js";import"./Title-BYTkKWDv.js";import"./index-BP8_t0zE.js";const q=i("rounded-full size-1.5",{variants:{color:{primary:"bg-primary",new:"bg-point"}},defaultVariants:{color:"primary"}}),O=i(["h-5 px-3 rounded-full",B({size:"sm"})],{variants:{color:{primary:"bg-primary color-primary-foreground",new:"bg-point color-point-foreground"}},defaultVariants:{color:"primary"}}),D=i(["rounded-2 px-3 box-border h-6",B({size:"sm"})],{variants:{color:{primary:"",secondary:"",tertiary:"",danger:""},type:{solid:"",outline:"",subtle:""}},defaultVariants:{color:"primary",type:"solid"},compoundVariants:[{color:"primary",type:"solid",className:"bg-primary color-primary-foreground"},{color:"primary",type:"outline",className:"border border-primary color-primary-60"},{color:"primary",type:"subtle",className:"bg-primary-5 color-primary-60"},{color:"secondary",type:"solid",className:"bg-secondary color-secondary-foreground"},{color:"secondary",type:"outline",className:"border border-secondary color-secondary-60"},{color:"secondary",type:"subtle",className:"bg-secondary-5 color-secondary-60"},{color:"tertiary",type:"solid",className:"bg-grayscale-70 color-grayscale-foreground"},{color:"tertiary",type:"outline",className:"border border-grayscale-70 color-grayscale-80"},{color:"tertiary",type:"subtle",className:"bg-grayscale-20 color-grayscale-80"},{color:"danger",type:"solid",className:"bg-danger color-danger-foreground"},{color:"danger",type:"outline",className:"border border-danger color-danger-60"},{color:"danger",type:"subtle",className:"bg-danger-5 color-danger-60"}]});function a({className:e,variant:o="text",color:t="primary",type:C="solid",count:j=NaN,text:V="",isOverCount:h=!1,...T}){const _=o==="dot"?q({color:t!=="new"?"primary":"new"}):o==="count"?O({color:t!=="new"?"primary":"new"}):D({color:t==="new"?"danger":t,type:C});return r.jsxs("span",{role:"status",className:k("inline-flex place-items-center",_,e),...T,children:[o==="count"&&`${h?"+":""}${j}`,o==="text"&&V]})}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'dot' | 'count' | 'text'",elements:[{name:"literal",value:"'dot'"},{name:"literal",value:"'count'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'new' | 'secondary' | 'tertiary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'new'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'subtle'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"NaN",computed:!0}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},isOverCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S=["subtle","solid","outline"],z=["primary","secondary","tertiary","new","danger"],E=["dot","count","text"],M={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:E,description:"badge 타입",control:{type:"select"}},color:{options:z,description:"badge 색상 (secondary, tertiar, danger는 text 형태 한정)",control:{type:"select"}},type:{options:S,description:"badge 타입 (text 형태 한정)",control:{type:"select"}},text:{description:"문자열 badge의 텍스트",control:{type:"string"}},count:{description:"숫자 badge의 숫자",control:{type:"number"}},isOverCount:{description:"숫자 badge의 숫자",control:{type:"boolean"}}},args:{variant:"text",color:"primary",type:"solid",text:"배지",count:NaN,isOverCount:!1}},s={args:{},render:e=>r.jsx("section",{className:"p-4 w-480px",children:r.jsx(a,{...e})})},n={args:{},render:()=>r.jsx("section",{className:"p-4 w-480px flex flex-row gap-4",children:["primary","new"].map(e=>r.jsx(a,{variant:"dot",color:e},e))})},l={args:{},render:()=>r.jsxs("section",{className:"p-4 w-480px flex flex-row gap-4",children:[["primary","new"].map(e=>r.jsx(a,{variant:"count",color:e,count:3},e)),["primary","new"].map(e=>r.jsx(a,{variant:"count",color:e,count:999,isOverCount:!0},e))]})},c={args:{},render:()=>r.jsxs("section",{className:"p-4 w-480px flex flex-row gap-4",children:[r.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","tertiary","danger"].map(e=>r.jsx(a,{variant:"text",color:e,text:"배지",type:"solid"},e))}),r.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","tertiary","danger"].map(e=>r.jsx(a,{variant:"text",color:e,text:"배지",type:"outline"},e))}),r.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","tertiary","danger"].map(e=>r.jsx(a,{variant:"text",color:e,text:"배지",type:"subtle"},e))})]})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: (props: BadgeProps) => {
    return <section className="p-4 w-480px">
        <Badge {...props}></Badge>
      </section>;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        {['primary', 'new'].map(color => <Badge variant="dot" key={color} color={(color as Color)} />)}
      </section>;
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,f,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        {['primary', 'new'].map(color => <Badge variant="count" key={color} color={(color as Color)} count={3} />)}
        {['primary', 'new'].map(color => <Badge variant="count" key={color} color={(color as Color)} count={999} isOverCount />)}
      </section>;
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,N,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <section className="p-4 w-480px flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => <Badge variant="text" key={color} color={(color as Color)} text="배지" type="solid" />)}
        </div>
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => <Badge variant="text" key={color} color={(color as Color)} text="배지" type="outline" />)}
        </div>
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => <Badge variant="text" key={color} color={(color as Color)} text="배지" type="subtle" />)}
        </div>
      </section>;
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const Q=["Default","DotBadge","CountBadge","TextBadge"];export{l as CountBadge,s as Default,n as DotBadge,c as TextBadge,Q as __namedExportsOrder,M as default};
