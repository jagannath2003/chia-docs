"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6901],{8971:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=i(5893),s=i(1151);const t={title:"How New Blocks are Formed",slug:"/block-formation-basics"},r=void 0,a={id:"academy/blockchain-basics/block-formation-basics",title:"How New Blocks are Formed",description:"Learning objectives",source:"@site/docs/academy/blockchain-basics/block-formation-basics.md",sourceDirName:"academy/blockchain-basics",slug:"/block-formation-basics",permalink:"/zh/block-formation-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/blockchain-basics/block-formation-basics.md",tags:[],version:"current",frontMatter:{title:"How New Blocks are Formed",slug:"/block-formation-basics"},sidebar:"academy",previous:{title:"What are Timelords",permalink:"/zh/timelord-basics"},next:{title:"Coin-Set Model Intro",permalink:"/zh/coinset-basics"}},l={},c=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transaction Validation"}),": Learn how nodes validate transactions for inclusion in a block."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block Formation"}),": Understand farmers role in forming blocks."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Mempool"}),": Review the mempool basics for transaction inclusion and removal."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,o.jsx)(n.p,{children:"In this lesson, we review the basics of block formation including the farmers role in validating transactions, forming blocks, and managing the mempool."}),"\n",(0,o.jsx)("div",{class:"videoWrapper",children:(0,o.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/5XAbF_gs07I",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"script",children:"Script"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:" Expand for the full script "}),(0,o.jsxs)(n.p,{children:["00:00",(0,o.jsx)(n.br,{}),"\n","Every time a transaction occurs, it first gets sent to a full node (a node that is staying synced with the current state of the network), which verifies that it is a valid transaction."]}),(0,o.jsx)(n.p,{children:"00:15\nThis verification ensures that the conditions and signatures are valid, and that the coins being spent are currently unspent and valid. The transaction is then added to the mempool waiting to be included in a block."}),(0,o.jsx)(n.p,{children:"00:30\nA Farmer that wins the challenge will form a block by retrieving transactions from the mempool, usually based on fee amount, until the maximum block size is reached. The block is then signed and added to the chain,"}),(0,o.jsx)(n.p,{children:"00:45\nand the relevant transactions are cleared from the mempool. In this way, transactions are propagated throughout the network very quickly, through the mempool, but are only confirmed once included in a block."}),(0,o.jsx)(n.p,{children:"01:00"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transaction Validation:"})," Transactions are validated by all nodes not only while blocks are being formed but also when the newly infused blocks are sent from peers, this eliminates a malicious actors ability from altering transactions even if they have the fastest timelord and have farmed the block."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block Formation vs Infusion:"})," Block formation is the process of combining proofs of space with transactions (the foliage) and is performed by the farmer while block infusion is the process of adding blocks to the chain itself and is performed by timelords."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Mempool:"})," All spend bundles (transactions) from the mempool that will be included in a block are aggregated together during block formation, this means that the specific spend bundle for a given transaction is not stored on-chain and is only available in the mempool."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,o.jsxs)(n.admonition,{title:"Question 1 - Transaction Validation",type:"tip",children:[(0,o.jsx)(n.p,{children:"What system validates transactions in Chia?"}),(0,o.jsx)(n.p,{children:"A. Timelords\nB. Farmers\nC. Harvesters\nD. Full Nodes"})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,o.jsx)(n.p,{children:"D. Full Nodes"})]}),"\n",(0,o.jsxs)(n.admonition,{title:"Question 2 - Block Formation",type:"tip",children:[(0,o.jsx)(n.p,{children:"Is the below statement True or False?"}),(0,o.jsx)(n.p,{children:"Full nodes are responsible for infusing blocks while timelords are responsible for forming blocks."})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,o.jsxs)(n.p,{children:["False, it is timelords that ",(0,o.jsx)(n.strong,{children:"infuse"})," blocks to the chain and the role of full nodes to ",(0,o.jsx)(n.strong,{children:"form"})," blocks while creating proofs of space."]})]}),"\n",(0,o.jsxs)(n.admonition,{title:"Question 3 - Mempool",type:"tip",children:[(0,o.jsx)(n.p,{children:"What is the Mempool?"}),(0,o.jsx)(n.p,{children:"A. Temporary storage on the network where transactions are queued before being confirmed.\nB. The amount of system memory the blockchain can access.\nC. The total size of all current plots on the network.\nD. Another name for the chia blockchain database."})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,o.jsx)(n.p,{children:"A. Temporary storage on the network where transactions are queued before being confirmed."})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,o.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Transaction validation ",(0,o.jsx)(n.a,{href:"https://docs.chia.net/block-validation/#body-validation",children:"overview"}),": dives into the requirements for validating the blocks body (which contains the transactions)."]}),"\n",(0,o.jsxs)(n.li,{children:["Block formation ",(0,o.jsx)(n.a,{href:"https://docs.chia.net/consensus-foliage",children:"overview"}),": explores the intricacies of the full nodes role in block formation and when transaction blocks are formed."]}),"\n",(0,o.jsxs)(n.li,{children:["Block Infusion ",(0,o.jsx)(n.a,{href:"https://docs.chia.net/signage-and-infusion-points/",children:"detailed documentation"}),": detailed information on how and when blocks are infused in the chain."]}),"\n",(0,o.jsxs)(n.li,{children:["Mempool ",(0,o.jsx)(n.a,{href:"https://docs.chia.net/mempool/",children:"detailed documentation"}),": detailed information on all aspects of mempool inclusion scenarios and how the mempool is updated."]}),"\n",(0,o.jsxs)(n.li,{children:["Support ",(0,o.jsx)(n.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var o=i(7294);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);