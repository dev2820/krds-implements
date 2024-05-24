import{r as a}from"./index-BP8_t0zE.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:l,...i},u)=>a.createElement("svg",{ref:u,...p,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:c("lucide",s),...i},[...l.map(([m,d])=>a.createElement(m,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(e,r)=>{const t=a.forwardRef(({className:o,...s},n)=>a.createElement(f,{ref:n,iconNode:r,className:c(`lucide-${w(e)}`,o),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=h("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);export{g as C,h as c};
