"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,d=f["".concat(s,".").concat(h)]||f[h]||u[h]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Block Format",slug:"/block-format"},i=void 0,l={unversionedId:"block-validation/block-format",id:"block-validation/block-format",title:"Block Format",description:"Full Block",source:"@site/docs/block-validation/block-format.md",sourceDirName:"block-validation",slug:"/block-format",permalink:"/zh/block-format",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/block-validation/block-format.md",tags:[],version:"current",frontMatter:{title:"Block Format",slug:"/block-format"},sidebar:"tutorialSidebar",previous:{title:"Light Clients",permalink:"/zh/light-clients"},next:{title:"Block Rewards",permalink:"/zh/block-rewards"}},s={},c=[{value:"Full Block",id:"full-block",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"full-block"},"Full Block"),(0,r.kt)("p",null,"The full block is the data structure that contains all information required for validating and adding block ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),", assuming all blocks up to ",(0,r.kt)("inlineCode",{parentName:"p"},"N - 1")," have already been added. FullBlocks are sent over the network protocol, and also sometimes stored\non disk for the purpose of serving other nodes in the future."),(0,r.kt)("p",null,"The FullBlock has fields for both the trunk and the foliage of the blockchain. The ",(0,r.kt)("inlineCode",{parentName:"p"},"header_hash"),", which is used as the block identifier, is the hash of the ",(0,r.kt)("inlineCode",{parentName:"p"},"foliage")," field in streamable format (see the ",(0,r.kt)("a",{parentName:"p",href:"/serialization-protocol"},"Serialization Protocol page"),"). This commits to all relevant data and to all previous blocks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"finished_sub_sots"),": List","[EndOfSubSlotBundle]",": This contains all sub-slots that have been completed since the previous block in the chain (block ",(0,r.kt)("inlineCode",{parentName:"li"},"N-1"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reward_chain_block"),": RewardChainBlock: This is trunk data for the reward chain and challenge chain, including vdf outputs and proof of space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"challenge_chain_sp_proof"),": Optional","[VDFProof]",": Proof of the VDF for the challenge chain signage point, not provided for the first signage point, since that is and end of sub slot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"challenge_chain_ip_proof")," VDFProof: VDF proof from the previous cc infusion, up the infusion point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reward_chain_sp_proof"),": Optional","[VDFProof]",": Proof of the VDF for the reward chain signage point, not provided for the first signage point, since that is and end of sub slot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reward_chain_ip_proof")," VDFProof: VDF proof from the previous rc infusion, up to the infusion point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"infused_challenge_chain_ip_proof"),": Optional","[VDFProof]",": The ICC proof, only present if deficit < 16"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"foliage"),": Foliage: Foliage data for the reward chain block, the hash of this is the ",(0,r.kt)("inlineCode",{parentName:"li"},"header_hash"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"foliage_transaction_block"),": Optional","[FoliageTransactionBlock]",": Transaction related metadata that is relevant for light clients (not actual transactions), only for tx blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transactions_info"),": Optional","[TransactionsInfo]",": Transaction related metadata that is not relevant for light clients (not actual transactions), only for tx blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transactions_generator"),": Optional","[SerializedProgram]",": A clvm program that generates all transactions (spends)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transactions_generator_ref_list"),": List","[uint32]",": A list of block heights of previous generators referenced by this block's generator.")))}f.isMDXComponent=!0}}]);