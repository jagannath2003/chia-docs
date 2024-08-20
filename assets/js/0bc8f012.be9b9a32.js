"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4976],{2860:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=s(5893),r=s(1151);s(4866),s(5162);const n={sidebar_label:"Basics",title:"Plotting Basics",slug:"/plotting-basics"},i=void 0,a={id:"plotting/plotting-basics",title:"Plotting Basics",description:"The Beginner's Guide to Farming will walk you through the steps required to install Chia and create your first plot. You are recommended to follow it prior to getting into the concepts introduced in this section, reviewing our plotting basics helps guide users from a high level perspective.",source:"@site/docs/plotting/plotting-basics.md",sourceDirName:"plotting",slug:"/plotting-basics",permalink:"/plotting-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-basics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Basics",title:"Plotting Basics",slug:"/plotting-basics"},sidebar:"tutorialSidebar",previous:{title:"Timelords",permalink:"/timelord-install"},next:{title:"Hardware",permalink:"/plotting-hardware"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Compressed plots",id:"compressed-plots",level:2},{value:"History",id:"history",level:3},{value:"Tradeoffs",id:"tradeoffs",level:3},{value:"K Sizes",id:"k-sizes",level:2},{value:"Compression Levels",id:"compression-levels",level:3},{value:"How to Get Help",id:"how-to-get-help",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/farming-guide",children:"Beginner's Guide to Farming"})," will walk you through the steps required to install Chia and create your first plot. You are recommended to follow it prior to getting into the concepts introduced in this section, reviewing our ",(0,o.jsx)(t.a,{href:"https://www.chia.net/2021/02/22/plotting-basics/",children:"plotting basics"})," helps guide users from a high level perspective."]})}),"\n",(0,o.jsxs)(t.p,{children:["At the center of every Chia farm is a ",(0,o.jsx)(t.em,{children:"farmer"}),", as well as at least one ",(0,o.jsx)(t.em,{children:"harvester"}),". Each harvester keeps track of one or more ",(0,o.jsx)(t.em,{children:"plots"})," on the same computer."]}),"\n",(0,o.jsx)(t.p,{children:"This section will give an overview of plots: what they are, how to create them, how to maintain them, etc. Later we'll delve deeper into the details."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"The full node, farmer, and harvester processes can all be run from the same computer. This is the recommended setup for those new to Chia farming. Later, plots can be added or moved to remote harvesters as needed."})}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Plots are files that consist almost entirely of cryptographic data. These files prove to the network that a computer is storing data, as part of Chia's Proof of Space consensus."}),"\n",(0,o.jsxs)(t.p,{children:["The plotting process is computationally intensive. Depending on a number of factors, the plotting computer, CPU, GPU, RAM, and/or storage devices (such as SSDs) are heavily utilized. However, this process is only performed when ",(0,o.jsx)(t.em,{children:"creating"})," a plot. Afterward, plots can typically be ",(0,o.jsx)(t.em,{children:"farmed"})," for many years, during which the farming computer, as well as the HDDs that store the plots, will remain mostly idle."]}),"\n",(0,o.jsxs)(t.p,{children:["While it is possible to run a Chia farm from a high-end plotting machine, many farmers choose to use low-end systems in order to save money on electricity. For example, the minimum spec hardware to run a Chia farm is a ",(0,o.jsx)(t.a,{href:"/installation#raspberry-pi",children:"Raspberry Pi 4"})," with 4 GB of RAM. As a result of these low requirements, Chia consumes less than 1% as much energy as Bitcoin, while preserving the same level of security. For more details, see ",(0,o.jsx)(t.a,{href:"https://chiapower.org/",children:"chiapower.org"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"It is possible to run a node without any plots. Your node will validate the network, but it will not be eligible to win any rewards. On the other hand, with a single plot, you can join a pool and collect regular (albeit small) rewards."})}),"\n",(0,o.jsx)(t.h2,{id:"compressed-plots",children:"Compressed plots"}),"\n",(0,o.jsx)(t.p,{children:'In 2023, some major changes were made to the plotting process, mostly due to the introduction of "compressed" plots.'}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Technically, ",(0,o.jsx)(t.strong,{children:"all"})," Chia plots are compressed -- they consist almost entirely of random cryptographic data, so they cannot be made much smaller using lossless techniques. However, in order to simplify the descriptions, we'll use the following terms for the different types of plots:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Uncompressed"})," -- Plots that are complete upon being created. Software capable of creating uncompressed plots includes the original ChiaPos, madMAx, and BladeBit RAM and disk. Nearly all plots created prior to 2023 are uncompressed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Compressed"})," -- Plots that are incomplete upon being created. Software capable of creating compressed plots includes BladeBit CUDA and GigaHorse. Compressed plots were introduced to the official Chia software in version 2.0."]}),"\n"]})]}),"\n",(0,o.jsx)(t.h3,{id:"history",children:"History"}),"\n",(0,o.jsx)(t.p,{children:"Chia plots consist of seven tables, the format of which was defined in mid-2020. The reference plotter included with version 1.0 was ChiaPoS, which only used one CPU core, and which produced uncompressed plots. When Chia's mainnet was launched in March 2021, all Chia plots were created with the ChiaPoS plotter."}),"\n",(0,o.jsx)(t.p,{children:"Later in 2021, the madMAx and BladeBit plotters were developed independently. These plotters fully utilized a plotting machine's resources, so they were significantly faster than the ChiaPoS plotter. For the first time, it became possible to create a plot entirely in RAM, thus eliminating the need for an enterprise SSD. However, these second-generation plotters still exclusively created uncompressed plots."}),"\n",(0,o.jsx)(t.p,{children:'By the end of 2022, it had become apparent that a form of "lossy" plot compression was possible. A few different competing techniques were being devised that involved omitting one or two tables, or some data held within, during the plotting process. The result was an incomplete plot, where the missing data could be added during the farming process. These techniques allowed plots to be 20-30% smaller than their uncompressed brethren, depending on how much data was omitted at the time of plotting.'}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["There are two basic types of compression -- lossless and lossy. For a brief overview of the differences, see ",(0,o.jsx)(t.a,{href:"https://www.howtogeek.com/744381/lossy-vs-lossless-compression-whats-the-difference/",children:"this article"}),". While compressed Chia plots don't actually use lossy compression, it still can serve as a useful analogy to how it works."]})}),"\n",(0,o.jsx)(t.p,{children:'Plot "compression" is possible because the data contained within a plot is deterministic. A plot\'s ID -- a 32-byte hash -- is all that is needed to determine the entirety of its contents. In other words, if you use the same ID (and k-value, as will be discussed later) to create plots on two different computers, the plots will be identical. It is therefore possible to generate any missing data on the fly. This, combined with other techniques such as brute-forcing a small number of bits, results in the plots being smaller.'}),"\n",(0,o.jsx)(t.p,{children:'By mid-2023, most new Chia plots were being created using these "compression" techniques. Each individual plot earns the same rewards as an equivalent uncompressed plot. However, because the compressed plots are smaller, more of them fit on each disk. Farmers therefore earn extra income compared with using uncompressed plots.'}),"\n",(0,o.jsxs)(t.p,{children:["In 2024, we proposed a new proof format that would make it much more difficult to compress plots. This is an ongoing project, which will not be complete until the end of 2026 according to current estimates. For more info, see our section dedicated to the ",(0,o.jsx)(t.a,{href:"/new-proof-introduction",children:"new proof format"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,o.jsx)(t.p,{children:'As with most technologies, compressed plots come with tradeoffs. The fact that they are left incomplete upon being created means that they require more energy to be "completed" while farming. Luckily, the lower levels of compression only require a small amount of extra energy, while yielding 15% more rewards. On the other hand, plots using the highest levels of compression require more compute while farming, thus necessitating the use of a GPU.'}),"\n",(0,o.jsx)(t.p,{children:"Chia's plot format was designed such that higher compression levels would yield linear gains in size, at a cost of an exponential increase in required computational power. Because of this tradeoff, it is unlikely that better techniques will emerge to compress plots by more than a few percent beyond their current levels. For deeper levels of compression to become viable, another table would need to be omitted. At that point, it would take longer for a farmer to finish a compressed plot than it would for a plotter to create an entire uncompressed plot."}),"\n",(0,o.jsx)(t.h2,{id:"k-sizes",children:"K Sizes"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"k"}),", as detailed in the ",(0,o.jsx)(t.a,{href:"/proof-of-space#plotting",children:"plotting"})," section, is a constant value that describes the size of each plot. The minimum k value for Chia is 32, which corresponds to 108.8 GB (101.4 GiB) for uncompressed plots. With each increase in k, the plot size is approximately doubled, as are the resources required for creating the plot. For this reason, k32 is the most common size on the network, accounting for 98% of the netspace."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["k32 is the minimum plot size eligible for farming on Chia's ",(0,o.jsx)(t.strong,{children:"mainnet"}),". If you want to test plotting and/or farming on a ",(0,o.jsx)(t.strong,{children:"testnet"}),", then it is also possible to use k25. These plots are only around 660 MB apiece, so they can be created quickly on a laptop."]})}),"\n",(0,o.jsxs)(t.p,{children:["Although not required, plots larger than k32 may be created. There is not a great benefit to using larger plot sizes as the chance of winning is proportional to plot file size. For example, a k33 plot is twice as large as a k32 plot, and it wins twice as many rewards. There are advanced tactics to using a larger ",(0,o.jsx)(t.code,{children:"k"})," value to reduce unused storage space or optimize drive idle states, but these won't be highly beneficial for the majority of people."]}),"\n",(0,o.jsx)(t.h3,{id:"compression-levels",children:"Compression Levels"}),"\n",(0,o.jsx)(t.p,{children:"The level of compression you choose will be highly dependent on your farming setup. The good news is that even those using a Raspberry Pi for their harvesters will be able to take advantage of the lower levels of compression. Additionally, each step up in compression level requires an exponential increase in computing power, while yielding a linear decrease in plot size. For these reasons, those who are farming with a Raspberry Pi can yield 20% higher rewards by using compressed plots, while those using the most powerful GPUs will see a modest increase over the benefits obtained by the Pi. Namely, C9 plots yield 35% higher rewards than C0 plots."}),"\n",(0,o.jsxs)(t.p,{children:["The next page will detail the various types of hardware that can be used for creating Chia plots. Later, we'll discuss the specific compression levels, including the hardware required to yield each increase in farming rewards and the actual file sizes broken down by ",(0,o.jsx)(t.a,{href:"https://docs.chia.net/k-sizes",children:"k-size with compression levels"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-get-help",children:"How to Get Help"}),"\n",(0,o.jsx)(t.p,{children:"If you are stumped about some aspect of plotting, farming, or Chia generally, we're here to help!"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Get help on CNI's official ",(0,o.jsx)(t.a,{href:"https://discord.gg/chia",children:"Discord"}),", in the ",(0,o.jsx)(t.code,{children:"#farming-and-plotting"})," and ",(0,o.jsx)(t.code,{children:"#support"})," channels."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Get more questions answered in the ",(0,o.jsx)(t.a,{href:"/plotting-faq",children:"plotting FAQ"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,t,s)=>{s.d(t,{Z:()=>i});s(7294);var o=s(512);const r={tabItem:"tabItem_Ymn6"};var n=s(5893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:s,children:t})}},4866:(e,t,s)=>{s.d(t,{Z:()=>j});var o=s(7294),r=s(512),n=s(2466),i=s(6550),a=s(469),l=s(1980),c=s(7392),h=s(812);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:o,default:r}}=e;return{value:t,label:s,attributes:o,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,n=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:s,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,h.Nk)(s);return[r,(0,o.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:r}),w=(()=>{const e=c??f;return p({value:e,tabValues:n})?e:null})();(0,a.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=s(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function v(e){let{className:t,block:s,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.o5)(),h=e=>{const t=e.currentTarget,s=l.indexOf(t),r=a[s].value;r!==o&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:a.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:h,...n,className:(0,r.Z)("tabs__item",w.tabItem,n?.className,{"tabs__item--active":o===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",w.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function j(e){const t=(0,g.Z)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var o=s(7294);const r={},n=o.createContext(r);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);