"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8868],{3031:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=l(5893),s=l(1151);l(4866),l(5162);const r={sidebar_label:"Plotting Setup",title:"Plotting Setup",slug:"/plotting-setup"},i=void 0,o={id:"plotting/plotting-setup",title:"Plotting Setup",description:"When it comes to plotting and farming in Chia, there is no one-size-fits-all solution. Hopefully after reading this section, you will have the information to help you make an informed decision about how to set up your farm. Hopefully after reading this section, you will have the information to help you make an informed decision about how to set up your farm.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/plotting/plotting-setup.md",sourceDirName:"plotting",slug:"/plotting-setup",permalink:"/zh-Hans/plotting-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-setup.md",tags:[],version:"current",frontMatter:{sidebar_label:"Plotting Setup",title:"Plotting Setup",slug:"/plotting-setup"}},a={},c=[{value:"Farm Size",id:"farm-size",level:2},{value:"To compress or not to compress",id:"to-compress-or-not-to-compress",level:2},{value:"Choosing a compression level",id:"choosing-a-compression-level",level:2}];function u(e){const t={em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When it comes to plotting and farming in Chia, there is no one-size-fits-all solution. Hopefully after reading this section, you will have the information to help you make an informed decision about how to set up your farm. Hopefully after reading this section, you will have the information to help you make an informed decision about how to set up your farm."}),"\n",(0,n.jsx)(t.h2,{id:"farm-size",children:"Farm Size"}),"\n",(0,n.jsx)(t.p,{children:"Welcome to the Chia farming community! You're in good company -- over 100,000 people all over the world are currently farming on Chia. Farms of all sizes are covered, from 1-TB microfarms to multi-PB whales. You're in good company -- over 100,000 people all over the world are currently farming on Chia. Farms of all sizes are covered, from 1-TB microfarms to multi-PB whales."}),"\n",(0,n.jsx)(t.p,{children:"How big will your farm be?"}),"\n",(0,n.jsxs)(t.p,{children:["You don't have to answer this question right away. Many farmers start with a single used hard drive and an old laptop or desktop. This is a great way to get started because you don't have to buy any equipment. Once they see how it works, many farmers choose to grow their farms. But it might help to have an ",(0,n.jsx)(t.em,{children:"idea"})," of how big you want your farm to be before you get started. If you do buy any equipment, it will help to have the most optimal setup."]}),"\n",(0,n.jsx)(t.h2,{id:"to-compress-or-not-to-compress",children:"To compress or not to compress"}),"\n",(0,n.jsx)(t.p,{children:"As explained previously, most new farmers will choose to create plots with some amount of compression. As explained previously, most new farmers will choose to create plots with some amount of compression. Even if you choose to farm with C1 or C2 plots, which a Raspberry Pi can handle without issue, your rewards will be 16-18% higher than with uncompressed plots. And there is very little downside to farming with these plots -- they only consume a tiny amount more electricity than C0 (uncompressed) plots. And there is very little downside to farming with these plots -- they only consume a tiny amount more electricity than C0 (uncompressed) plots."}),"\n",(0,n.jsx)(t.p,{children:"And if you plan to set up a large farm of 1 PiB or more, using compressed plots is a no-brainer. The larger your farm, the higher the benefits of using compressed plots. The larger your farm, the higher the benefits of using compressed plots."}),"\n",(0,n.jsx)(t.p,{children:"Of course, if you already have a small farm that is up and running with uncompressed plots, you may not want to go through the trouble of replotting just to increase your rewards by a bit. This is also fine -- uncompressed plots will continue to be supported going forward. This is also fine -- uncompressed plots will continue to be supported going forward."}),"\n",(0,n.jsx)(t.h2,{id:"choosing-a-compression-level",children:"Choosing a compression level"}),"\n",(0,n.jsx)(t.p,{children:"As discussed previously, plots only need to be created once, after which they can be farmed for many years. But this still leaves the decision of plotting machines and farming machines to use. But this still leaves the decision of plotting machines and farming machines to use."}),"\n",(0,n.jsx)(t.p,{children:"One thing to keep in mind is that a farming computer only cares about the completed plots. It doesn't care how that plot was created, or how long it took. It doesn't care how that plot was created, or how long it took."}),"\n",(0,n.jsx)(t.p,{children:"With that in mind, the following table will give you an idea of what compression level to use, given your farming computer. This assumes you will use the Bladbit plotter that comes prepackaged with Chia installations: This assumes you will use the Bladbit plotter that comes prepackaged with Chia installations:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{style:{textAlign:"left"},children:[(0,n.jsx)("br",{}),"Level"]}),(0,n.jsxs)(t.th,{style:{textAlign:"left"},children:["Size ",(0,n.jsx)("br",{}),"(GiB)"]}),(0,n.jsxs)(t.th,{style:{textAlign:"left"},children:["Relative ",(0,n.jsx)("br",{}),"Size"]}),(0,n.jsxs)(t.th,{style:{textAlign:"left"},children:["Reward ",(0,n.jsx)("br",{}),"Increase"]}),(0,n.jsxs)(t.th,{style:{textAlign:"left"},children:["Farm ",(0,n.jsx)("br",{})," With"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"101.4"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"100%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pi 4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C1"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"87.5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"86.3%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"15.9%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pi 4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"86.0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"84.8%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"17.9%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pi 4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"84.5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"83.3%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"20.0%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pi 4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C4"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"82.9"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"81.8%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"22.3%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pi 4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"81.3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"80.2%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"24.7%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Fast CPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C6"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"79.6"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"78.5%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"27.4%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Fast CPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C7"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"78.0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"76.9%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"29.8%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C9"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"75.2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"74.2%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"34.8%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GPU"})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5162:(e,t,l)=>{l.d(t,{Z:()=>i});l(7294);var n=l(512);const s={tabItem:"tabItem_Ymn6"};var r=l(5893);function i(e){let{children:t,hidden:l,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:l,children:t})}},4866:(e,t,l)=>{l.d(t,{Z:()=>w});var n=l(7294),s=l(512),r=l(2466),i=l(6550),o=l(469),a=l(1980),c=l(7392),u=l(812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:s}}=e;return{value:t,label:l,attributes:n,default:s}}))}(l);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function f(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:l}=e;const s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,a._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:l=!1,groupId:s}=e,r=h(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=p({queryString:l,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(l);return[s,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:s}),x=(()=>{const e=c??m;return f({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=l(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=l(5893);function b(e){let{className:t,block:l,selectedValue:n,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,l=a.indexOf(t),s=o[l].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=a.indexOf(e.currentTarget)+1;t=a[l]??a[0];break}case"ArrowLeft":{const l=a.indexOf(e.currentTarget)-1;t=a[l]??a[a.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},t),children:o.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function j(e){let{lazy:t,children:l,selectedValue:s}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...t,...e}),(0,y.jsx)(j,{...t,...e})]})}function w(e){const t=(0,g.Z)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,l)=>{l.d(t,{Z:()=>o,a:()=>i});var n=l(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);