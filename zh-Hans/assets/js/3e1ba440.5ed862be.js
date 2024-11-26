"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5337],{322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"coin-set-model/coin-set-vs-utxo","title":"Coin Set vs UTXO Model","description":"The UTXO and coin set models of accounting are very similar and are often used interchangeably. This is fine in most contexts; coin set is based on UTXO, and there is a much larger difference between the coin set and account models. However, there are a few key differences, which we\'ll discuss in this section.","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/coin-set-model/coin-set-vs-utxo.md","sourceDirName":"coin-set-model","slug":"/coin-set-vs-utxo","permalink":"/zh-Hans/coin-set-vs-utxo","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/coin-set-vs-utxo.md","tags":[],"version":"current","frontMatter":{"title":"Coin Set vs UTXO Model","slug":"/coin-set-vs-utxo"},"sidebar":"tutorialSidebar","previous":{"title":"Security","permalink":"/zh-Hans/coin-set-security"},"next":{"title":"Coin Set vs Account Model","permalink":"/zh-Hans/coin-set-vs-account"}}');var i=t(4848),o=t(8453);const a={title:"Coin Set vs UTXO Model",slug:"/coin-set-vs-utxo"},r=void 0,c={},l=[{value:"First class objects",id:"first-class-objects",level:2},{value:"Transaction/coin processing",id:"transactioncoin-processing",level:2},{value:"Signature type",id:"signature-type",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The UTXO and coin set models of accounting are very similar and are often used interchangeably. This is fine in most contexts; coin set is based on UTXO, and there is a much larger difference between the coin set and account models. However, there are a few key differences, which we'll discuss in this section."}),"\n",(0,i.jsx)(n.h2,{id:"first-class-objects",children:"First class objects"}),"\n",(0,i.jsxs)(n.p,{children:["In the UTXO model, ",(0,i.jsx)(n.em,{children:"transactions"})," are first class objects. Each transaction has an ID and an output number, which is persisted in the system's overall state."]}),"\n",(0,i.jsxs)(n.p,{children:["In the coin set model, ",(0,i.jsx)(n.em,{children:"coins"}),' are first class objects (everything is a coin). "Transaction" is a term used to represent the spending of some coins and the creation of others. Coins are the only information persisted in the system\'s overall state.']}),"\n",(0,i.jsx)(n.h2,{id:"transactioncoin-processing",children:"Transaction/coin processing"}),"\n",(0,i.jsxs)(n.p,{children:["In Bitcoin's UTXO model, an individual block's transactions are organized as a Merkle tree, where each transaction in a block is a leaf, and the coinbase transaction is the root. The leaves must be sorted in topological, or natural, order. If transaction B spends an output of transaction A, then both A and B are allowed to occur in the same block, but A must be stored in an earlier position than B in the Merkle tree. The logic required to build such a tree requires a large amount of processing power. (See this ",(0,i.jsx)(n.a,{href:"https://medium.com/fcats-blockchain-incubator/understanding-the-bitcoin-blockchain-header-a2b0db06b515",children:"Medium article"})," for more info.)"]}),"\n",(0,i.jsx)(n.p,{children:"In Chia's coin set model, each of a block's transactions occur simultaneously. Chia uses two Merkle trees \u2013 one for removing coins, and one for adding them."}),"\n",(0,i.jsxs)(n.p,{children:["In a single Chia block, multiple coins can be created, and multiple coins can be spent. Individual coins can even be created and spent in the same block \u2013 these are known as ",(0,i.jsx)(n.em,{children:"ephemeral"})," coins. As long as the rules governing how the coins may be spent are followed, and as long as the total value added and removed is balanced (other than the coinbase coins), the transactions are valid."]}),"\n",(0,i.jsx)(n.p,{children:"This design comes with two advantages over UTXO: it removes the complex logic required to build a valid Merkle tree, and it reduces the viability of certain types of MEV such as front-running, back-running, and sandwich attacks."}),"\n",(0,i.jsx)(n.h2,{id:"signature-type",children:"Signature type"}),"\n",(0,i.jsx)(n.p,{children:"Chia uses BLS signatures, which allow for all signatures in a block to be combined, as if each block were a single transaction. This happens non-interactively - the parent of each coin is chosen automatically. For example, if three coins are spent and two are created, typically one of the spent coins will be designated as the parent of both of the new coins."}),"\n",(0,i.jsx)(n.p,{children:"Bitcoin has used signatures based on the Elliptic Curve Digital Signature Algorithm (ECDSA) since its inception. These signatures don't allow for transactions to be aggregated, so each one must be validated independently. As of the Taproot upgrade in 2021, Bitcoin is also able to use Schnorr signatures, which allow for aggregation. Schnorr signatures are an improvement over ECDSA, but they don't offer the ability to combine all signatures in a block into a single signature. They also use large Merkle trees to generate M of N multisigs, and they rely on random numbers to aggregate signatures. The BLS signatures used by Chia fix all of these problems, and more."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);