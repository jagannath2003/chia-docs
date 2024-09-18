"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8735],{5308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(4848),r=a(8453);a(1470),a(9365);const o={sidebar_label:"Technical Overview",title:"Technical Overview",slug:"/new-proof-technical-overview"},i=void 0,s={id:"new-proof-format/new-proof-technical-overview",title:"Technical Overview",description:"This section will go over some of the novel ideas for the proof of space and reasons why they are beneficial.",source:"@site/docs/new-proof-format/new-proof-technical-overview.md",sourceDirName:"new-proof-format",slug:"/new-proof-technical-overview",permalink:"/zh-Hans/new-proof-technical-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/new-proof-format/new-proof-technical-overview.md",tags:[],version:"current",frontMatter:{sidebar_label:"Technical Overview",title:"Technical Overview",slug:"/new-proof-technical-overview"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/zh-Hans/new-proof-faq"},next:{title:"Technical Details",permalink:"/zh-Hans/new-proof-details"}},l={},c=[{value:"New matching algorithm",id:"new-matching-algorithm",level:3},{value:"Challenge based on x values",id:"challenge-based-on-x-values",level:3},{value:"Default compression to drop first table",id:"default-compression-to-drop-first-table",level:3},{value:"Benes compression",id:"benes-compression",level:3}];function u(e){const t={h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This section will go over some of the novel ideas for the proof of space and reasons why they are beneficial."}),"\n",(0,n.jsx)(t.p,{children:"The most notable changes to the proof of space are:"}),"\n",(0,n.jsx)(t.h3,{id:"new-matching-algorithm",children:"New matching algorithm"}),"\n",(0,n.jsx)(t.p,{children:"This offers security with tunable difficulty per table, yet allows instant verification of proofs. As a result, we are able to increase the difficulty of plotting without affecting proof validation time. The benefit is that we can increase resistance to rental and compression attacks without wasting energy when validating proofs for the network."}),"\n",(0,n.jsx)(t.h3,{id:"challenge-based-on-x-values",children:"Challenge based on x values"}),"\n",(0,n.jsx)(t.p,{children:"A challenge will no longer start lookups based on a final y bucket. Instead, we use a special kind of scan filter on x values, specifically designed to constrain attackers against re-ordering data to accommodate various bit-dropping techniques. Now, an attacker is either restricted to organize data in a very specific way which severely limits the number of potential attacks, or the attacker must re-organize data by adding extra bits to account for that restructuring and incur a large penalty."}),"\n",(0,n.jsx)(t.h3,{id:"default-compression-to-drop-first-table",children:"Default compression to drop first table"}),"\n",(0,n.jsx)(t.p,{children:"There is a small amount of compression where the first table is dropped by default. The parameters for the compression are specifically chosen to be the easiest bits to drop and recompute, with minimal cpu time needed. This creates optimal settings, and further bit dropping by an attacker will very quickly impose economic disadvantages to create an upper bound on how much compression is viable even for future hardware."}),"\n",(0,n.jsx)(t.h3,{id:"benes-compression",children:"Benes compression"}),"\n",(0,n.jsx)(t.p,{children:"We can compress an additional 2 bits per entry (without bit dropping) and drop a whole lookup table using a Benes network. This results in up to ~20% additional space savings depending on k-size when compared to the HDD friendly format."}),"\n",(0,n.jsx)(t.p,{children:"In terms of impact to farmers, because we drop some data to optimize efficiency, a small amount of compute is required when fetching a final quality string, similar to the low C-levels of the bladebit formats. We will include an option to omit this low-level grinding if desired, so that many Petabytes could be farmed on a Raspberry Pi for instance, at the cost of adding more bits to the plot format (up to 10-15% more space)."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164);const r={tabItem:"tabItem_Ymn6"};var o=a(4848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},1470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(6540),r=a(4164),o=a(3104),i=a(6347),s=a(205),l=a(7485),c=a(1682),u=a(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(4848);function g(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,w.jsx)(g,{...t,...e}),(0,w.jsx)(y,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);