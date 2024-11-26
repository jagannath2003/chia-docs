"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6738],{4701:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"resources/glossary","title":"Glossary","description":"This guide will act as a glossary for many of the concepts utilised in Chia.","source":"@site/docs/resources/glossary.md","sourceDirName":"resources","slug":"/glossary","permalink":"/zh-Hans/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/resources/glossary.md","tags":[],"version":"current","frontMatter":{"title":"Glossary","slug":"/glossary"},"sidebar":"tutorialSidebar","previous":{"title":"Storage Benchmarks","permalink":"/zh-Hans/storage-benchmarks"},"next":{"title":"Timelord Contest","permalink":"/zh-Hans/resources/timelord-contest"}}');var i=s(4848),a=s(8453);const r={title:"Glossary",slug:"/glossary"},o="The Great Chia Glossary",l={},h=[];function c(e){const n={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"the-great-chia-glossary",children:"The Great Chia Glossary"})}),"\n",(0,i.jsx)(n.p,{children:"This guide will act as a glossary for many of the concepts utilised in Chia.\nIf you are familiar with how Bitcoin transactions work, a lot of this will be familiar."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Aggregated Signature/AggSig"})," - Aggregated Signatures allow us to condense multiple signatures into a single aggregated signature, such that if we know a public key and value we can verify if it exists inside of the single aggregate. This uses BLS non-interactive aggregation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Authorized Payees"})," - Authorized Payees is a smart contract that means that Wallet A can give Wallet B some money, but Wallet B is only allowed to spend that money in ways that Wallet A has explicitly authorised."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CATs"})," - Chia Asset Token - a special kind of chia coin which are created by users. A CAT is a uniquely marked subset of chia which can't be forged and can be linked to other assets. More information can be found on the ",(0,i.jsx)(n.a,{href:"https://chialisp.com/docs/puzzles/cats",children:"CATs Puzzles page"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CAT1"})," - First version of the Chia token standard, there was a bug in this standard and its fix deprecated the standard creating the CAT2 standard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CAT2"})," - Second version of the Chia token standard, there was a bug in the first standard and its fix deprecated the standard creating the CAT2 standard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Chia"})," - Uppercase \u201cChia\u201d. The software, the blockchain, or the company."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"chia"}),' - Lowercase "chia" represents the coin aka "xch".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Chia Network Inc."})," - Proper format for Chia the company's name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"chia reference wallet"})," - our own implementation which supports many features, but does not use wallet SDK and contains other wallets - e.g CAT wallets, DID wallet, NFT wallets and is mapped to a specific wallet key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ChiaLisp"})," - ChiaLisp is the Turing-complete functional language which the puzzles for spending coin are programmed in. For more information see our ",(0,i.jsx)(n.a,{href:"https://chialisp.com/",children:"Chialisp site"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CHIPs"})," - CHia Improvement Proposals."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CLVM"})," - The CLVM is the ChiaLisp Virtual Machine which is the sandboxed environment that puzzles and solutions are run in. The CLVM only runs the compiled minimal version of ChiaLisp, though a compiler can convert the higher level ChiaLisp to the compiled minimal version. See more about that ",(0,i.jsx)(n.a,{href:"https://chialisp.com/clvm/",children:"here"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CNI"})," - Chia Network Inc."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Coin (TXO/transaction output)"})," - A coin stores value. All coins are generated as the output of a transaction or a coinbase reward or fee target. A coin is spent exactly once, allowing its value to go into other coins, and is then permanently destroyed. Each unspent coin is locked with a ChiaLisp program which is that coin\u2019s puzzle, and whoever has the information to solve that puzzle is the person who can spend that coin. The most basic puzzle has a public key and accepts a solution which contains a list of conditions signed by the corresponding private key, so only the owner of the private key can unlock the coin and spend it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Coin ID/CoinName (TXO ID/transaction output ID)"})," - The ID of a coin in Chia is generated by hashing the primary input ID, puzzle hash, and amount concatenated in that order. This is very different from Bitcoin which uses much more data to form the TXO ID, restricting what smart contracts are capable of. (See also: ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/SegWit",children:"SegWit"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DAO"})," - Decentralized Autonomous Organization."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dApp"})," - Decentralized Application."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DataLayer\u2122"})," - Datalayer connects an offchain database to the chia blockchain via merkel tree hashes ensuring any and all changes to the database are transparent and auditable. ",(0,i.jsx)(n.a,{href:"https://chia.net/chia-datalayer",children:"https://chia.net/chia-datalayer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Decentralised ID (DID)"})," - A decentralised ID is a smart contract that enables a wallet to act as an ID which can create messages to other IDs. Based on the work of the ",(0,i.jsx)(n.a,{href:"https://identity.foundation/",children:"identity foundation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Farming"})," - Verifying transactions and creating blocks on the chia blockchain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"full node rpc api"})," - Full node access with JSON formatting."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"green paper"})," - Overviews the chia blockchain and the various new technologies implemented at the consensus level."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Light Wallet"})," - Chia client functionality - a chia wallet that does not require a full node but rather gets balance and transaction data from peers in a decentralized method."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NFT"})," - Non-fungible Token, a token that is inherently and provably unique."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NFT0"})," - Chia\u2019s in development NFT standard before NFT1 was launched."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NFT1"})," - Chia\u2019s current NFT standard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Op Constraints/Conditions"})," - Constraints are returned by the puzzle when it\u2019s passed the solution. If all of the returned conditions are met then a transaction is valid."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PFP"})," - Profile picture."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"plugin wallet"})," - A wallet implementation that uses the wallet SDK to provide extremely easy access to adding new coins and app types."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PoS or POS"})," - Proof of Stake."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PoSpace"})," - Proof of Space."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PoST"})," - Proof of Space and Time."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prepend Signature"})," - Prepend signatures are used so that we can retain metadata about the structure of an aggregated signature."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Primary Input/Parent"})," - When a coin is created the coin that was used as input in the transaction is designated as the primary input. This is used to create the coin ID. If more than one coin is used up as an input in a transaction then one of the coins is designated the primary input, and the others simply reinforce the transaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Puzzle (Scriptpubkey)"})," - A ChiaLisp program which specifies the behaviour of a coin when it is spent. A puzzle can either reject a solution or output a set of constraints."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Puzzle Generator"})," - A wallet will use a Puzzle Generator to define how it wants to receive transactions. Most wallets will want to generate the standard transaction, however by storing a ChiaLisp program that generate a puzzle, all a Sending Wallet needs to do is ask the Recipient Wallet what its Program Generator is and then run that to create the puzzle to lock the coin up with."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Puzzle Generator ID"})," - This is the hash of a wallet's puzzle generator. A wallet can do a hash-lookup and see if it already knows the source code for that puzzle generator. If not, it will request the full source code and store that information in its lookup table."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Rue"})," - Rue is an alternative language to Chialisp that compiles to CLVM which the puzzles for spending coin are programmed. Rue is being developed by a community member (Rigidity) and more information can be found on his ",(0,i.jsx)(n.a,{href:"https://github.com/Rigidity/rue",children:"github repo"})," or the ",(0,i.jsx)(n.a,{href:"https://rue-lang.com/",children:"Rue website"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Smart Contract/Puzzle"})," - A smart contract is a specialised ChiaLisp puzzle which locks a coin up and enables complex blockchain interactions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution (Scriptsig)"})," - This is some ChiaLisp which is passed to the puzzle for evaluation when a transaction is submitted. For more information about how transactions work, and how solutions can generate new coins check out this ",(0,i.jsx)(n.a,{href:"https://docs.chia.net/guides/crash-course/signatures/#build-a-solution",children:"guide"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Spend/CoinSolution"})," - A spend is a reveal of a coin's ID, along with the full puzzle code, and a solution to be ran with the puzzle. The result of a spend is determined by the returned Op Constraints after running the puzzle with the solution."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Spend Bundle"})," - A spend bundle is a collection of spends grouped together with an aggregated signature to be sent to the network."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unspents (UTXO set/unspent transaction output set)"})," - This is the set of all unspent coins on the network. It is used to check if a transaction is valid, acting as a lookup for the puzzles. It maps a coin ID to a birthdate in blockheight. A transaction must contain a reveal of the information used to calculate the ID in order for it to be possible to validate because the unspents doesn\u2019t contain that information, only hashes which can be used to validate it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unspent Coin (UTXO/unspent transaction output)"})," - A coin which has been created but not yet spent and hence is storing value."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VDF"})," - Verifiable Delay Function. This creates the proofs of time in a method that is verifiable and requires some amount of time to complete."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VPB"})," - Virtual Private Blockchain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Wallet"})," - Software written to interact with transactions. Chia uses Hierarchical Deterministic Wallets (HD Wallets). This means that they can generate many different public keys that are all valid and verifiable as unique to that wallet. A wallet contains a coin if it possesses the information necessary to unlock that coin and create a transaction which spends it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"wallet protocol"})," - Communication protocol for wallets and full nodes to interact via WebSocket Streamable integrations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"wallet rpc api"})," - Wallet node access with JSON formatting."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"wallet SDK"})," - Software that calls wallet protocol, potentially abstracting out sync and rollbacks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"white paper"})," - Overviews Chia Network Inc as a business and its founding objectives."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);