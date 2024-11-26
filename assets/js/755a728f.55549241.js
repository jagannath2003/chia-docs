"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5364],{1443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"block-validation/block-format","title":"Block Format","description":"Full Block","source":"@site/docs/block-validation/block-format.md","sourceDirName":"block-validation","slug":"/block-format","permalink":"/block-format","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/block-validation/block-format.md","tags":[],"version":"current","frontMatter":{"title":"Block Format","slug":"/block-format"},"sidebar":"tutorialSidebar","previous":{"title":"Light Clients","permalink":"/light-clients"},"next":{"title":"Block Rewards","permalink":"/block-rewards"}}');var i=t(4848),s=t(8453);const r={title:"Block Format",slug:"/block-format"},a=void 0,l={},c=[{value:"Full Block",id:"full-block",level:2},{value:"transactions_generator update",id:"transactions_generator-update",level:2},{value:"When",id:"when",level:3},{value:"Why",id:"why",level:3},{value:"Where",id:"where",level:3},{value:"What",id:"what",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"full-block",children:"Full Block"}),"\n",(0,i.jsxs)(n.p,{children:["The full block is the data structure that contains all information required for validating and adding block ",(0,i.jsx)(n.code,{children:"N"}),", assuming all blocks up to ",(0,i.jsx)(n.code,{children:"N - 1"})," have already been added. FullBlocks are sent over the network protocol, and also sometimes stored\non disk for the purpose of serving other nodes in the future."]}),"\n",(0,i.jsxs)(n.p,{children:["The FullBlock has fields for both the trunk and the foliage of the blockchain. The ",(0,i.jsx)(n.code,{children:"header_hash"}),", which is used as the block identifier, is the hash of the ",(0,i.jsx)(n.code,{children:"foliage"})," field in streamable format (see the ",(0,i.jsx)(n.a,{href:"/serialization-protocol",children:"Serialization Protocol page"}),"). This commits to all relevant data and to all previous blocks."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"finished_sub_sots"}),": List[EndOfSubSlotBundle]: This contains all sub-slots that have been completed since the previous block in the chain (block ",(0,i.jsx)(n.code,{children:"N-1"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"reward_chain_block"}),": RewardChainBlock: This is trunk data for the reward chain and challenge chain, including vdf outputs and proof of space."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"challenge_chain_sp_proof"}),": Optional[VDFProof]: Proof of the VDF for the challenge chain signage point, not provided for the first signage point, since that is and end of sub slot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"challenge_chain_ip_proof"})," VDFProof: VDF proof from the previous cc infusion, up the infusion point."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"reward_chain_sp_proof"}),": Optional[VDFProof]: Proof of the VDF for the reward chain signage point, not provided for the first signage point, since that is and end of sub slot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"reward_chain_ip_proof"})," VDFProof: VDF proof from the previous rc infusion, up to the infusion point."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"infused_challenge_chain_ip_proof"}),": Optional[VDFProof]: The ICC proof, only present if deficit < 16"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"foliage"}),": Foliage: Foliage data for the reward chain block, the hash of this is the ",(0,i.jsx)(n.code,{children:"header_hash"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"foliage_transaction_block"}),": Optional[FoliageTransactionBlock]: Transaction related metadata that is relevant for light clients (not actual transactions), only for tx blocks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"transactions_info"}),": Optional[TransactionsInfo]: Transaction related metadata that is not relevant for light clients (not actual transactions), only for tx blocks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"transactions_generator"}),": Optional[SerializedProgram]: A clvm/rust program that generates all transactions (spends). See the next section for an important ",(0,i.jsx)(n.a,{href:"#transactions_generator-update",children:"update"})," due to the 2.1.0 hard fork."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"transactions_generator_ref_list"}),": List[uint32]: A list of block heights of previous generators referenced by this block's generator."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"transactions_generator-update",children:"transactions_generator update"}),"\n",(0,i.jsxs)(n.p,{children:["Chia underwent a hard fork in version 2.1.0. This included updates to the ",(0,i.jsx)(n.code,{children:"transactions_generator"})," code."]}),"\n",(0,i.jsx)(n.h3,{id:"when",children:"When"}),"\n",(0,i.jsxs)(n.p,{children:["The hard fork will activate at block ",(0,i.jsx)(n.code,{children:"5 496 000"}),", which is expected to occur in June 2024. All nodes need to be compatible with the new implementation prior to this block."]}),"\n",(0,i.jsx)(n.h3,{id:"why",children:"Why"}),"\n",(0,i.jsxs)(n.p,{children:["Among other changes, the ",(0,i.jsx)(n.code,{children:"transactions_generator"})," code was ported to Rust."]}),"\n",(0,i.jsx)(n.p,{children:"There were multiple reasons for this update:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"As an optimization -- Rust is generally more performant than Python"}),"\n",(0,i.jsx)(n.li,{children:"To support back refs"}),"\n",(0,i.jsx)(n.li,{children:"To make block validation faster"}),"\n",(0,i.jsx)(n.li,{children:"To enable compression with block refs by referencing subtrees of prior transactions"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"where",children:"Where"}),"\n",(0,i.jsx)(n.p,{children:"The code for these changes is held in two primary locations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/clvm_rs/blob/main/src/serde/de_br.rs",children:"clvm_rs"})," repo has the new serialization and deserialization code."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/chia_rs/tree/main/crates/chia-consensus/src/gen",children:"chia_rs"})," repo has the consensus generator code."]}),"\n",(0,i.jsxs)(n.li,{children:["The Rust program for running the generator is ",(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/chia_rs/blob/main/crates/chia-consensus/src/gen/run_block_generator.rs",children:"run_block_generator.rs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"what",children:"What"}),"\n",(0,i.jsx)(n.p,{children:"Two important changes went into this update:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Allow serializing CLVM in a new, more compact form. This doesn't affect how CLVM is executed, it's just a matter of encoding. It does have some important consequences:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Farmers can effectively stuff more transactions into blocks, because with a more compact encoding, you can fit more for the same byte-cost."}),"\n",(0,i.jsx)(n.li,{children:"The new implementation can take advantage of the de-duplication in the new serialization format, by caching tree-hashes. This effectively de-duplicates the work of hashing puzzles."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"About the new serialization format:"}),"\n",(0,i.jsxs)(n.p,{children:["The atom ",(0,i.jsx)(n.code,{children:"0xfe"})," is followed by another atom, which is interpreted as a path into the environment (the same form as in CLVM). It references a node from a part of the tree that has already been deserialized (thus, allowing for de-duplicating sub-trees)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The generator ROM implementation was ported from CLVM to Rust. This also doesn't affect the behavior of anything (other than the CLVM cost, as explained below). It just speeds up block validation."}),"\n",(0,i.jsx)(n.p,{children:"About the generator ROM:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is the code that invokes the generator in a block."}),"\n",(0,i.jsx)(n.li,{children:"The return value is a list of spends."}),"\n",(0,i.jsx)(n.li,{children:"The ROM validates all spends by checking the puzzle hashes and calling into all puzzles passing in their solutions."}),"\n",(0,i.jsxs)(n.li,{children:["The work done by the ROM no longer charges a CLVM cost, which has two primary benefits:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It allows farmers to put more transactions into blocks."}),"\n",(0,i.jsx)(n.li,{children:"It makes it easier for the farmer to predict the total cost of a block as it's including transactions."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/chips/blob/main/CHIPs/chip-0011.md#block-generator-optimizations",children:"CHIP-0011"})," contains more info about the generator optimizations."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);