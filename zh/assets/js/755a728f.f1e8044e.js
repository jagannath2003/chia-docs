"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4981],{6509:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(5893),i=n(1151);const r={title:"Block Format",slug:"/block-format"},s=void 0,l={id:"block-validation/block-format",title:"Block Format",description:"Full Block",source:"@site/docs/block-validation/block-format.md",sourceDirName:"block-validation",slug:"/block-format",permalink:"/zh/block-format",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/block-validation/block-format.md",tags:[],version:"current",frontMatter:{title:"Block Format",slug:"/block-format"},sidebar:"tutorialSidebar",previous:{title:"Light Clients",permalink:"/zh/light-clients"},next:{title:"Block Rewards",permalink:"/zh/block-rewards"}},a={},c=[{value:"Full Block",id:"full-block",level:2}];function h(o){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"full-block",children:"Full Block"}),"\n",(0,t.jsxs)(e.p,{children:["The full block is the data structure that contains all information required for validating and adding block ",(0,t.jsx)(e.code,{children:"N"}),", assuming all blocks up to ",(0,t.jsx)(e.code,{children:"N - 1"})," have already been added. FullBlocks are sent over the network protocol, and also sometimes stored\non disk for the purpose of serving other nodes in the future."]}),"\n",(0,t.jsxs)(e.p,{children:["The FullBlock has fields for both the trunk and the foliage of the blockchain. The ",(0,t.jsx)(e.code,{children:"header_hash"}),", which is used as the block identifier, is the hash of the ",(0,t.jsx)(e.code,{children:"foliage"})," field in streamable format (see the ",(0,t.jsx)(e.a,{href:"/serialization-protocol",children:"Serialization Protocol page"}),"). This commits to all relevant data and to all previous blocks."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"finished_sub_sots"}),": List[EndOfSubSlotBundle]: This contains all sub-slots that have been completed since the previous block in the chain (block ",(0,t.jsx)(e.code,{children:"N-1"}),")."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"reward_chain_block"}),": RewardChainBlock: This is trunk data for the reward chain and challenge chain, including vdf outputs and proof of space."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"challenge_chain_sp_proof"}),": Optional[VDFProof]: Proof of the VDF for the challenge chain signage point, not provided for the first signage point, since that is and end of sub slot."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"challenge_chain_ip_proof"})," VDFProof: VDF proof from the previous cc infusion, up the infusion point."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"reward_chain_sp_proof"}),": Optional[VDFProof]: Proof of the VDF for the reward chain signage point, not provided for the first signage point, since that is and end of sub slot."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"reward_chain_ip_proof"})," VDFProof: VDF proof from the previous rc infusion, up to the infusion point."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"infused_challenge_chain_ip_proof"}),": Optional[VDFProof]: The ICC proof, only present if deficit < 16"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"foliage"}),": Foliage: Foliage data for the reward chain block, the hash of this is the ",(0,t.jsx)(e.code,{children:"header_hash"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"foliage_transaction_block"}),": Optional[FoliageTransactionBlock]: Transaction related metadata that is relevant for light clients (not actual transactions), only for tx blocks."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"transactions_info"}),": Optional[TransactionsInfo]: Transaction related metadata that is not relevant for light clients (not actual transactions), only for tx blocks."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"transactions_generator"}),": Optional[SerializedProgram]: A clvm program that generates all transactions (spends)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"transactions_generator_ref_list"}),": List[uint32]: A list of block heights of previous generators referenced by this block's generator."]}),"\n"]})]})}function d(o={}){const{wrapper:e}={...(0,i.a)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(h,{...o})}):h(o)}},1151:(o,e,n)=>{n.d(e,{Z:()=>l,a:()=>s});var t=n(7294);const i={},r=t.createContext(i);function s(o){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function l(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:s(o.components),t.createElement(r.Provider,{value:e},o.children)}}}]);