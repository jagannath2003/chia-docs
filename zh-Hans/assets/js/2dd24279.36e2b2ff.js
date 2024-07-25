"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4927],{3381:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(5893),i=t(1151);const o={title:"Costs",slug:"/coin-set-costs"},r=void 0,a={id:"coin-set-model/costs",title:"Costs",description:"Cost is a unit of measurement that represents resources expended to record a transaction in a block. Cost is a unit of measurement that is used to represent the available space in a block. It is measured by the amount of computing power required to execute the programs within it, as well as the physical drive space required to store data on each node's machine.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/coin-set-model/costs.md",sourceDirName:"coin-set-model",slug:"/coin-set-costs",permalink:"/zh-Hans/coin-set-costs",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/costs.md",tags:[],version:"current",frontMatter:{title:"Costs",slug:"/coin-set-costs"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh-Hans/coin-set-intro"},next:{title:"Conditions",permalink:"/zh-Hans/conditions"}},c={},l=[{value:"Cost Calculation",id:"cost-calculation",level:2},{value:"Minimum Specs - Farming",id:"farming-spec",level:2},{value:"Minimum Specs - Syncing",id:"syncing-specs",level:2},{value:"Maximum Block Cost",id:"max-block-cost",level:2},{value:"Generator Execution",id:"generator-execution",level:4},{value:"Generator Signature Validation",id:"generator-signature-validation",level:4},{value:"Generator Cost",id:"generator-cost",level:3},{value:"Generator Program Size",id:"generator-size",level:3},{value:"Generator Program Coins",id:"generator-program-coins",level:3},{value:"Maximum Cost Per Block",id:"maximum-cost-per-block",level:3},{value:"Maximum Block Size",id:"maximum-block-size",level:3},{value:"Estimated Transaction Costs",id:"estimated-transaction-costs",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Cost is a unit of measurement that represents resources expended to record a transaction in a block. Cost is a unit of measurement that is used to represent the available space in a block. It is measured by the amount of computing power required to execute the programs within it, as well as the physical drive space required to store data on each node's machine."}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"The maximum cost per block is 11,000,000,000 (11 billion), which is typically equivalent to around 400 KB of space. However, not every block is completely full."}),(0,n.jsx)(s.p,{children:"It is important to keep the cost usage of programs on the Chia blockchain as low as possible, to minimize the network pressure and resulting fees incurred."})]}),"\n",(0,n.jsx)(s.h2,{id:"cost-calculation",children:"Cost Calculation"}),"\n",(0,n.jsxs)(s.p,{children:["Cost has several components. First, every CLVM program uses a certain amount of cost during execution, based on the operators and the values they are called on. You can refer to the ",(0,n.jsx)(s.a,{href:"https://chialisp.com/costs",children:"Cost page"})," on the Chialisp website to learn more about the cost of various CLVM operators."]}),"\n",(0,n.jsxs)(s.p,{children:["Additionally, certain conditions in a coin spend have a cost associated with them as well. Additionally, certain conditions in a coin spend have a cost associated with them as well. A few common examples are ",(0,n.jsx)(s.a,{href:"https://chialisp.com/conditions#create-coin",children:(0,n.jsx)(s.code,{children:"CREATE_COIN"})})," and ",(0,n.jsx)(s.a,{href:"/conditions#agg-sig-me",children:(0,n.jsx)(s.code,{children:"AGG_SIG_ME"})}),", which are expensive operations."]}),"\n",(0,n.jsxs)(s.p,{children:["Finally, each byte of data that gets added to the blockchain has a cost of 12,000. Spend bundles are created using a serialized format of CLVM programs, calculated by running ",(0,n.jsx)(s.a,{href:"https://chialisp.com/commands#serialize",children:"opc"})," on the original CLVM program. Each two-digit pair of this format is equivalent to one byte, which costs 12,000 to store on the blockchain."]}),"\n",(0,n.jsx)(s.p,{children:"Aside from cost, the maximum number of atoms and pairs (counted separately) in a CLVM program is 2^31 apiece. If this threshold is exceeded, the program will terminate. However, this is likely a moot point, since it's extremely unlikely to write a program with this many atoms or pairs without exceeding the maximum cost per block."}),"\n",(0,n.jsx)(s.h2,{id:"farming-spec",children:"Minimum Specs - Farming"}),"\n",(0,n.jsx)(s.p,{children:"The minimum spec machine to run a full node is the Raspberry Pi 4. How do we know if this machine can stay synced? The worst case scenario occurs when multiple full transaction blocks are created with the minimum amount of time between them. This will temporarily put maximum load on the system. If the Pi can stay synced in this scenario, then it easily should be able to stay synced under normal load."}),"\n",(0,n.jsx)(s.p,{children:"The first question we must answer is how much time elapses between transaction blocks. The first question we must answer is how much time elapses between transaction blocks. Chia's consensus mandates that at least three signage points must be reached before infusion_iterations may occur, so the minimum time between blocks is the following:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"3 signage points * signage point time\n3 signage points * (600 seconds per sub-slot / 64 signage points per sub-slot)\n3 signage points * 9.375 seconds per signage point\n"})}),"\n",(0,n.jsx)(s.p,{children:"Which is 28.125 seconds."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"average"})," time between transaction blocks is ",(0,n.jsx)(s.a,{href:"/consensus-foliage#transaction-block-time",children:"51.95 seconds"}),". The lower a given time interval between transaction blocks (down to 28.125 seconds), the lower the probability of a transaction block being created in that time interval."]})}),"\n",(0,n.jsx)(s.p,{children:'A transaction block is considered "full" when it contains 2000 outputs. For this document, we\'ll assume this translates to 1000 vanilla transactions, each with two inputs and two outputs. This would give the network an average of 19.25 (1000/51.95) transactions per second.'}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"A transaction with only one input and one output is also possible. In theory, a block could therefore hold up to 2000 transactions, in which case the network would process an average of 38.5 (2000/51.95) transactions per second."})}),"\n",(0,n.jsxs)(s.p,{children:["With this goal in mind, Chia has created a ",(0,n.jsx)(s.strong,{children:"generator program"}),' that processes 2000 compressed inputs and outputs. This program simulates a "full block".']}),"\n",(0,n.jsx)(s.p,{children:"To calculate the total amount of time for a Raspberry Pi 4 to process a full block, we must take into account three factors:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The time required to run the generator program (2000 inputs and outputs)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The Raspberry Pi 4 accomplishes this in 5.2 seconds"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The time required to validate 2000 public keys","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"2.2 seconds"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The time required to validate 2000 aggregate signatures","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"10.63 seconds"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Therefore, the total amount of time required for a Raspberry Pi 4 to process a full block is 5.2 + 2.2 + 10.63 = 18.03 seconds. This is 10.095 seconds faster than the minimum time between blocks, and 33.92 seconds faster than the average. When considering other factors such as network latency and time required to fetch a full proof (",(0,n.jsx)(s.a,{href:"/proof-of-space#farming",children:"640 ms on a slow HDD"}),"), this still allows plenty of leeway for a Raspberry Pi 4 to stay synced and collect farming rewards."]}),"\n",(0,n.jsx)(s.h2,{id:"syncing-specs",children:"Minimum Specs - Syncing"}),"\n",(0,n.jsx)(s.p,{children:"As a benchmark, we use the Raspberry Pi 4, Chia's minimum spec machine for farming. A Raspberry Pi 4 has four cores, so it can validate a pre-existing block in 18.03 / 4 = 4.5075 seconds, which is around 11.5 times the average real-time rate of 51.95 seconds. Even in the worst-case scenario where every transaction block is full, the Pi can sync faster than the chain is being created."}),"\n",(0,n.jsx)(s.h2,{id:"max-block-cost",children:"Maximum Block Cost"}),"\n",(0,n.jsx)(s.p,{children:"Now that we've established that a Raspberry Pi 4 can, indeed, sync and farm, even when every transaction block is full, we'll calculate the maximum cost per block."}),"\n",(0,n.jsx)(s.p,{children:"There are three categories that go into determining a block's maximum cost:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Generator program cost, which is split into two parts","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Execution cost"}),"\n",(0,n.jsx)(s.li,{children:"Signature validation cost"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Generator program size (each byte has a cost)"}),"\n",(0,n.jsx)(s.li,{children:"Generator program coins (each new coin has a cost)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In the case of calculating the maximum cost, these three categories are to be given equal weight. We'll go through each of the categories individually."}),"\n",(0,n.jsx)(s.h4,{id:"generator-execution",children:"Generator Execution"}),"\n",(0,n.jsx)(s.p,{children:"(This is the first half of 1, above.)"}),"\n",(0,n.jsx)(s.p,{children:"An Intel Macbook Pro was used as a reference platform to determine baseline costs based on CPU usage. The costs were then hand-tweaked for various reasons:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["To ascribe additional cost to operations that allocate memory, i.e. the operand per-byte cost was inflated. This additional cost is called ",(0,n.jsx)(s.code,{children:"MALLOC_PER_BYTE_COST"})," and amounts to 10 cost per byte."]}),"\n",(0,n.jsxs)(s.li,{children:["The especially CPU intensive BLS operations (",(0,n.jsx)(s.code,{children:"point_add"})," and ",(0,n.jsx)(s.code,{children:"pubkey_for_exp"}),") had their cost inflated to not differ too much from the Raspberry Pi 4."]}),"\n",(0,n.jsxs)(s.li,{children:["Some operations that do not allocate memory and end up being common in relatively simple programs had their cost deflated. Specifically, ",(0,n.jsx)(s.code,{children:"if"}),", ",(0,n.jsx)(s.code,{children:"cons"}),", ",(0,n.jsx)(s.code,{children:"listp"}),", ",(0,n.jsx)(s.code,{children:"first"}),", and ",(0,n.jsx)(s.code,{children:"rest"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The result is that the generator program has an execution cost of 1 317 054 957."}),"\n",(0,n.jsx)(s.h4,{id:"generator-signature-validation",children:"Generator Signature Validation"}),"\n",(0,n.jsx)(s.p,{children:"(This is the second half of 1, above.)"}),"\n",(0,n.jsx)(s.p,{children:"The signature validation cost is based on computation time. BLS operations involve public key and aggregate signature validation, which are multiplied by the number of outputs."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Time per public key validation: 0.179370 ms"}),"\n",(0,n.jsx)(s.li,{children:"Time per aggregate signature validation: 0.972140 ms"}),"\n",(0,n.jsx)(s.li,{children:"Total time for 2000 key and signature validations: (0.179370 + 0.972140) * 2000 = 2303.02 ms"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Each 1 cost is designed to require 1 nanosecond, so we need to multiply the result by 1 million (ns/ms)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Cost for the generator program's BLS operations: ",(0,n.jsx)(s.code,{children:"2303.02 * 1 000 000 = 2 303 020 000"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Using this info, we can also calculate the cost of each ",(0,n.jsx)(s.code,{children:"AGG_SIG_UNSAFE"})," and ",(0,n.jsx)(s.code,{children:"AGG_SIG_ME"})," condition in all CLVM programs:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Cost per BLS condition: ",(0,n.jsx)(s.code,{children:"(0.179370 + 0.972140) * 1 000 000 = 1 151 510"}),". We round this number up to 1 200 000."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"generator-cost",children:"Generator Cost"}),"\n",(0,n.jsx)(s.p,{children:"(This is the total cost of 1, above.)"}),"\n",(0,n.jsxs)(s.p,{children:["Taking the previous two calculations into account, the total cost to execute and run the BLS operations of the generator program is: ",(0,n.jsx)(s.code,{children:"1 317 054 957 + 2 303 020 000 = 3 620 074 957"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"generator-size",children:"Generator Program Size"}),"\n",(0,n.jsx)(s.p,{children:"(This is the cost of 2, above.)"}),"\n",(0,n.jsx)(s.p,{children:"We know that 1, 2, and 3 all will be assigned equal maximum costs, which we've already established is 3 620 074 957. This is the size-based cost of the generator program."}),"\n",(0,n.jsxs)(s.p,{children:["The generator program itself is 298 249 bytes. Each byte, therefore has a cost of ",(0,n.jsx)(s.code,{children:"3 620 074 957 / 298 249 = 12 137.76"}),". We round this number to 12 000 per byte. This is the cost per bye of all CLVM programs."]}),"\n",(0,n.jsx)(s.h3,{id:"generator-program-coins",children:"Generator Program Coins"}),"\n",(0,n.jsx)(s.p,{children:"(This is the cost of 3, above.)"}),"\n",(0,n.jsxs)(s.p,{children:["Just like the previous calculation, the total cost of the generator program's coins is 3 620 074 957. The generator program creates 2000 coins, so the cost per ",(0,n.jsx)(s.code,{children:"CREATE_COIN"})," in all CLVM programs is ",(0,n.jsx)(s.code,{children:"3 620 074 957 / 2000 = 1 810 037.4785"}),". We round this number to 1 800 000."]}),"\n",(0,n.jsx)(s.h3,{id:"maximum-cost-per-block",children:"Maximum Cost Per Block"}),"\n",(0,n.jsx)(s.p,{children:"To calculate the maximum cost per block, we simply add the generator program's execution, size, and coin costs:"}),"\n",(0,n.jsxs)(s.p,{children:["Theoretical maximum cost per block: ",(0,n.jsx)(s.code,{children:"3 620 074 957 + 3 620 074 957 + 3 620 074 957 = 10 860 224 871"})," We round this number to 11 000 000 000."]}),"\n",(0,n.jsx)(s.h3,{id:"maximum-block-size",children:"Maximum Block Size"}),"\n",(0,n.jsxs)(s.p,{children:["The theoretical maximum size of a single block is ",(0,n.jsx)(s.code,{children:"maximum cost per block / cost per byte"}),", or ",(0,n.jsx)(s.code,{children:"11 000 000 000 / 12 000 = 916 667 bytes"}),". However, this number ignores the costs of all operators. If you want a CLVM program to do anything useful, the maximum size would be closer to 400 KB."]}),"\n",(0,n.jsx)(s.p,{children:"Even this number is not realistic because it assumes that a single program will take up an entire block. The maximum number of vanilla transactions (with two outputs) per block is 1000. Therefore, if there is fee pressure on Chia's blockchain, a 400 KB program would need to include a larger fee than the top 1000 vanilla transactions in the mempool -- combined -- in order for a farmer to include it."}),"\n",(0,n.jsx)(s.h3,{id:"estimated-transaction-costs",children:"Estimated Transaction Costs"}),"\n",(0,n.jsx)(s.p,{children:"The below chart contains costs for various transactions on the blockchain, each of these assumes the inputs and outputs have been optimized and represent a best case scenario."}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"/mempool/#fee-required-for-inclusion",children:"minimum effective"})," fee represents 5 x the clvm cost and is the minimum fee recognized by the default consensus rules (any fee less would be the same as 1 mojo). This means one needs to use at least the fees listed below during moderate fee pressure but greater fees might be needed for time sensitive transactions to process in a timely manner."]}),(0,n.jsx)(s.p,{children:"Please note that the costs and fees listed are for vanilla versions of these transactions, they can vary based on the number of input and output coins needed so consider these the bare minimum. Transactions with a '*' are listed with a fee of 3 x the minimum effective fee. This is to ensure the fees are more realistic for how coins are distributed in users wallets but note that vanilla versions of these would be 1/3 that which is listed."})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Transaction Type"}),(0,n.jsx)(s.th,{children:"clvm Cost"}),(0,n.jsx)(s.th,{children:"Minimum Effective Fee"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Full Block (with 50% cap)"})}),(0,n.jsx)(s.td,{children:"5,500,000,000"}),(0,n.jsx)(s.td,{children:"27,500,000,000 mojo (0.0275 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Standard Transaction"})}),(0,n.jsx)(s.td,{children:"6,000,000"}),(0,n.jsx)(s.td,{children:"90,000,000 mojo (0.00009 xch) *"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"PlotNFT Creation"})}),(0,n.jsx)(s.td,{children:"18,000,000"}),(0,n.jsx)(s.td,{children:"90,000,000 mojo (0.00009 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Minting NFT with DID"})}),(0,n.jsx)(s.td,{children:"123,000,000"}),(0,n.jsx)(s.td,{children:"615,000,000 mojo (0.000615 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Minting NFT without DID"})}),(0,n.jsx)(s.td,{children:"53,000,000"}),(0,n.jsx)(s.td,{children:"265,000,000 mojo (0.000265 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Adding URI to NFT with DID"})}),(0,n.jsx)(s.td,{children:"71,000,000"}),(0,n.jsx)(s.td,{children:"355,000,000 mojo (0.000355 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Adding URI to NFT without DID"})}),(0,n.jsx)(s.td,{children:"41,000,000"}),(0,n.jsx)(s.td,{children:"205,000,000 mojo (0.000205 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Transfer NFT with DID"})}),(0,n.jsx)(s.td,{children:"67,000,000"}),(0,n.jsx)(s.td,{children:"335,000,000 mojo (0.000335 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Assign DID to NFT"})}),(0,n.jsx)(s.td,{children:"107,000,000"}),(0,n.jsx)(s.td,{children:"535,000,000 mojo (0.000535 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Send Clawback Transaction"})}),(0,n.jsx)(s.td,{children:"10,000,000"}),(0,n.jsx)(s.td,{children:"150,000,000 mojo (0.00015 xch) *"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Claim Clawback Transaction"})}),(0,n.jsx)(s.td,{children:"1,400,000"}),(0,n.jsx)(s.td,{children:"7,000,000 mojo (.000007 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Clawback Clawback Transaction"})}),(0,n.jsx)(s.td,{children:"15,600,000"}),(0,n.jsx)(s.td,{children:"75,800,000 mojo (.0000758 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Combine 500 Farming Rewards"})}),(0,n.jsx)(s.td,{children:"3,100,000,000"}),(0,n.jsx)(s.td,{children:"15,500,000,000 mojo (.0155 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Split 1 Coin into 2"})}),(0,n.jsx)(s.td,{children:"11,000,000"}),(0,n.jsx)(s.td,{children:"55,000,000 mojo (.000055 xch)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Cat Transaction"})}),(0,n.jsx)(s.td,{children:"37,000,000"}),(0,n.jsx)(s.td,{children:"555,000,000 mojo (.000555 xch) *"})]})]})]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>r});var n=t(7294);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);