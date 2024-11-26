"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9350],{6081:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"coin-set-model/spend-bundles","title":"Spend Bundles","description":"A spend bundle is a set of spends of multiple coins, which is usually submitted to full nodes for inclusion into the blockchain. In Bitcoin, the equivalent data structure would be the transaction.","source":"@site/docs/coin-set-model/spend-bundles.md","sourceDirName":"coin-set-model","slug":"/spend-bundles","permalink":"/spend-bundles","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/spend-bundles.md","tags":[],"version":"current","frontMatter":{"title":"Spend Bundles","slug":"/spend-bundles"},"sidebar":"tutorialSidebar","previous":{"title":"Conditions","permalink":"/conditions"},"next":{"title":"Addresses","permalink":"/addresses"}}');var i=s(4848),o=s(8453);const a={title:"Spend Bundles",slug:"/spend-bundles"},d=void 0,r={},l=[{value:"Aggregate Signatures",id:"aggregate-signatures",level:2},{value:"Coins vs Spend Bundles",id:"coins-vs-spend-bundles",level:2},{value:"Additions and Removals",id:"additions-and-removals",level:2},{value:"What do full nodes store on-chain?",id:"what-do-full-nodes-store-on-chain",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A spend bundle is a set of spends of multiple coins, which is usually submitted to full nodes for inclusion into the blockchain. In Bitcoin, the equivalent data structure would be the transaction."}),"\n",(0,i.jsx)(n.p,{children:"Here is the spend bundle's basic construction:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class CoinSpend:\n    coin: Coin\n    puzzle_reveal: SerializedProgram\n    solution: SerializedProgram\n\nclass SpendBundle:\n    coin_spends: List[CoinSpend]\n    aggregated_signature: G2Element\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see in the code sample above, a spend bundle is a group of coin spends, where each coin spend includes the coin being spent, the puzzle program, and the solution program. Each solution is passed into each puzzle and run through the CLVM, where it outputs conditions. Two of the conditions -- ",(0,i.jsx)(n.code,{children:"AGG_SIG_ME"})," and ",(0,i.jsx)(n.code,{children:"AGG_SIG_UNSAFE"})," -- require\nthat a signature be present in order for the spend to be valid."]}),"\n",(0,i.jsxs)(n.p,{children:["Usually when making a transaction, a user would combine multiple spends, to achieve the desired value of the transaction. Users can also combine coins that represent ",(0,i.jsx)(n.a,{href:"https://chialisp.com/cats",children:"CATs"})," (Chia Asset Tokens), and send different types of values in the same spend bundle."]}),"\n",(0,i.jsx)(n.h2,{id:"aggregate-signatures",children:"Aggregate Signatures"}),"\n",(0,i.jsxs)(n.p,{children:["In Bitcoin, each spend has its own signature or signatures, one for each ",(0,i.jsx)(n.code,{children:"(public key, message)"})," combination. Then, each signature ",(0,i.jsx)(n.code,{children:"s_i"})," is passed through a signature verification algorithm: ",(0,i.jsx)(n.code,{children:"V(s, m, pk) -> T/F"}),", with the message ",(0,i.jsx)(n.code,{children:"m"})," and public key ",(0,i.jsx)(n.code,{children:"pk"}),", and would be valid if and only if ",(0,i.jsx)(n.code,{children:"V"})," returns true."]}),"\n",(0,i.jsx)(n.p,{children:"In Chia, BLS signatures are used. These signatures can be combined (added) together to produce an aggregate signature of the same size as the originals. Let's say we have three spend bundles, each with its own pair:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"s1 m1 pk1\ns2 m2 pk2\ns3 m3 pk3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With BLS signatures, farmers combine all three signatures ",(0,i.jsx)(n.code,{children:"s1, s2, and s3"})," into one signature ",(0,i.jsx)(n.code,{children:"s_agg"}),". The BLS signature verification can take multiple public keys and messages: ",(0,i.jsx)(n.code,{children:"V(s, [m1, m2, ... mx], [pk1, pk2, ... pkx]) -> T/F"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This allows the farmer to combine all three spend bundles into one spend bundle, with only one signature, which means less data is transmitted and stored on chain and disk."}),"\n",(0,i.jsxs)(n.p,{children:["Another benefit of these aggregate signatures is that when spending multiple coins, users will only transmit one signature, instead of one or more per spend. More information can be found in the ",(0,i.jsx)(n.a,{href:"/bls-keys",children:"BLS Keys page"}),". You can also read the ",(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/bls-signatures",children:"code for BLS signatures"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"coins-vs-spend-bundles",children:"Coins vs Spend Bundles"}),"\n",(0,i.jsx)(n.p,{children:"One major difference between Chia and other UTXO-based blockchain systems is that spend bundles are not a first-class object in the block database. Each block in Chia contains a list of removals and additions, where removals are the coins spent in that block, and additions are the coins added in that block."}),"\n",(0,i.jsx)(n.p,{children:"Let's say a farmer wants to include 1000 spend bundles into a block. First, they can combine all spend bundles into one, and then they can make the block. Each block will have exactly one signature for all spends. Full nodes that verify and store this block do not need to know the original information of which spends were bundled with which other spends."}),"\n",(0,i.jsx)(n.h2,{id:"additions-and-removals",children:"Additions and Removals"}),"\n",(0,i.jsxs)(n.p,{children:["In the figure below, you can see a spend bundle that was created by a user. The removals in the spend bundle are coins A, B, and C, and the additions are coins D and E. This is very similar to how the standard transaction script works in ",(0,i.jsx)(n.code,{children:"chia-blockchain"}),"."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"/img/spend-bundle.png",alt:"drawing"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's go through the different components in the image. First, let's say Alice wants to send 13 XCH to Bob. Alice looks at her coin database, and selects 3 unspent coins (A, B, and C) that add up to at least 13 XCH. Each one of these coins has an associated CLVM puzzle, which has a public key encoded inside of it. Let's denote these public keys as ",(0,i.jsx)(n.code,{children:"pkA"}),", ",(0,i.jsx)(n.code,{children:"pkB"}),", and ",(0,i.jsx)(n.code,{children:"pkC"}),". Alice needs to generate the puzzle and solution for each of the\nspends, in order to create the spend bundle."]}),"\n",(0,i.jsxs)(n.p,{children:["Each puzzle, when run with the solutions, returns an ",(0,i.jsx)(n.code,{children:"AGG_SIG"})," condition (either AGG_SIG_ME or AGG_SIG_UNSAFE). This means that a signature is required from the respective public key, in order for this spend to be valid."]}),"\n",(0,i.jsx)(n.p,{children:"Instead of providing 3 signatures, we can use BLS signature arithmetic to combine all three into one signature. There are two benefits to doing this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The resulting spend bundle will be smaller in bytes."}),"\n",(0,i.jsx)(n.li,{children:"The spend bundle can not be unbundled (the signature cannot be de-aggregated)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["That is, an attacker who obtains Alice's spend bundle is not able to pull apart the spend bundle in order to spend just one of the coins. When Alice sends this spend bundle to the Chia network, other full nodes will run the CLVM programs, collect all the ",(0,i.jsx)(n.code,{children:"AGG_SIG"})," conditions, and then verify them using the aggregate signature provided in the spend bundle."]}),"\n",(0,i.jsxs)(n.p,{children:["The first puzzle here for coin A also returns two ",(0,i.jsx)(n.code,{children:"CREATE_COIN"})," conditions. This means that two coins must be added to the coin database in order for spend A to be valid:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Coin D is for Bob (puzzle hash 0x1b54f and 13 XCH)."}),"\n",(0,i.jsx)(n.li,{children:"Coin E is Alice's change. She spent 14 XCH, but only wanted to send 13 XCH to Bob. Each coin's value must be spent entirely, so Alice needs to send 1 XCH to herself as change."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that the puzzle hash of coin E is the same as that of coin A. Puzzle hashes can be reused. When spending coin E, Alice would sign with the same key as before, but would most likely use a different message that spends to another recipient."}),"\n",(0,i.jsx)(n.p,{children:"Also note that only the first spend is creating the coins. This is the normal way to combine spends, since each coin must have exactly one parent. Spend A, by itself, would not be valid, since it creates more value (14 XCH) than it spends (5 XCH). However, the spend becomes valid when combined with spends B and C."}),"\n",(0,i.jsx)(n.p,{children:"Full nodes receive, validate, and store the spend bundle in memory. However, when creating a new block, farming nodes will combine many spend bundles from different users. This creates one large spend bundle with one signature. When looking at just the block, it is not always clear which spends were bundled together initially. However, we can see the net additions and removals in the whole block."}),"\n",(0,i.jsx)(n.h2,{id:"what-do-full-nodes-store-on-chain",children:"What do full nodes store on-chain?"}),"\n",(0,i.jsx)(n.p,{children:"Puzzles are only revealed when coins are spent; the puzzles are saved on-chain afterward for record-keeping purposes."}),"\n",(0,i.jsx)(n.p,{children:"Full nodes, therefore, store the history of the blockchain, which includes all revealed puzzles and solutions, for all spent coins. Full nodes also store a list of unspent coins, which only contains puzzle hashes, and not puzzles."}),"\n",(0,i.jsx)(n.p,{children:"Users are responsible for remembering and storing their own puzzles in order to spend their coins. Usually these are regenerated on the fly by wallet software, based on templates."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);