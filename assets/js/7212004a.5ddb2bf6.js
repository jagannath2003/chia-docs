"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5528],{6549:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(5893),t=n(1151);const o={title:"How Chia Consensus Works",slug:"/consensus-basics"},r=void 0,a={id:"academy/blockchain-basics/consensus-basics",title:"How Chia Consensus Works",description:"Learning objectives",source:"@site/docs/academy/blockchain-basics/consensus-basics.md",sourceDirName:"academy/blockchain-basics",slug:"/consensus-basics",permalink:"/consensus-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/blockchain-basics/consensus-basics.md",tags:[],version:"current",frontMatter:{title:"How Chia Consensus Works",slug:"/consensus-basics"},sidebar:"academy",previous:{title:"Blockchain Basics Overview",permalink:"/academy/blockchain-basics"},next:{title:"What are Timelords",permalink:"/timelord-basics"}},c={},l=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Farmers"}),": Understand the basic role of farmers in providing proofs of space."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Timelords"}),": Understand the basic role of timelords in providing proofs of time."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Plot Filter"}),": Understand the basic role of the plot filter and its effect on the eligibility of proofs of space."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"content",children:"Content"}),"\n",(0,i.jsx)(s.p,{children:"In this lesson, we review the basics of consensus, the process by which to determine the true state of a blockchain."}),"\n",(0,i.jsx)("div",{class:"videoWrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/JJnGAwsJjXQ",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"script",children:"Script"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Expand for the full script "}),(0,i.jsxs)(s.p,{children:["00:00",(0,i.jsx)(s.br,{}),"\n","Consensus is the process by which to determine the true state of a blockchain. In short, by randomly selecting which node authorizes a new block, it becomes difficult for a bad actor to inject a false truth to the system."]}),(0,i.jsx)(s.p,{children:'00:20\nWith Chia, the consensus method is called Proof of Space and Time. Nodes begin by pre-generating hashes to store on spare disk space, called "plots". While this takes a lot of work, the work is only done once, and the results are stored and referenced continuously.'}),(0,i.jsx)(s.p,{children:'00:40\nWe call these nodes "Farmers".'}),(0,i.jsx)(s.p,{children:"The Timelord is a program that broadcasts a proof of time to the network to first prove that time has passed since the last challenge, and then to generate a new challenge to distribute to the Farmers. This challenge is what determines the winner of the current block."}),(0,i.jsx)(s.p,{children:"01:00\nNext, a plot filter is implemented that automatically disqualifies a subset of plots. This further randomizes the winner, and is implemented fairly so each Farmer has the same chance of passing the filter. If the filter is passed, the Farmer will check their plots to find a quality proof of space,"}),(0,i.jsx)(s.p,{children:"01:20\nand submit it to the chain. If the proof is the highest quality, the Farmer is granted authority to process and add the block to the chain, and rewarded with XCH."}),(0,i.jsx)(s.p,{children:"This consensus method maintains trustless security through high-decentralization while remaining energy efficient."}),(0,i.jsx)(s.p,{children:"01:40"})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Proof of Space:"}),' Chia relies on Proof of Space where the user stores deterministic x value tables in "plots" not to be confused with Proof of Capacity (PoC) where users store data of other network participants (like filecoin).']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Timelords:"})," Timelords play the role of issuing challenges, verifying proofs of space, and infusing blocks to the chain. Farmers submit their Proofs of Space to Timelords but it is the Timelords that infuse blocks."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Plot Filter:"})," The plot filter in Chia consensus automatically disqualifies a portion of plots from being valid Proofs of Space for a specific challenge, these plots can contain valid Proofs of Space for future challenges."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 1 - Consensus Method",type:"tip",children:[(0,i.jsx)(s.p,{children:"What is the consensus method used by Chia?"}),(0,i.jsx)(s.p,{children:"A: Proof of Work\nB: Proof of Stake\nC: Proof of Space and Time\nD: Proof of Plots"})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(s.p,{children:"C: Proof of Space and Time"})]}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 2 - Proof of Time",type:"tip",children:[(0,i.jsx)(s.p,{children:"What system is used to prove that time is passing?"}),(0,i.jsx)(s.p,{children:"A: Farmer\nB: Timelord\nC: Plot\nD: Node"})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(s.p,{children:"B: Timelord"})]}),"\n",(0,i.jsx)(s.admonition,{title:"Question 3 - Proofs of Space",type:"tip",children:(0,i.jsx)(s.p,{children:"What does a farmer check for valid proofs of space?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.p,{children:"Plots (deterministic x-value tables)"})]}),"\n",(0,i.jsx)(s.admonition,{title:"Question 4 - Quality Proofs",type:"tip",children:(0,i.jsx)(s.p,{children:"What is the current (as of December 2023) ratio of plots that contain eligible proofs of space and what is the name of this ratio?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.p,{children:"1/512 , the plot filter."})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsx)(s.h3,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Consensus ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/consensus-intro",children:"detailed documentation"}),": details the Chia consensus including proofs of space and time, timelords, vdfs, and more."]}),"\n",(0,i.jsxs)(s.li,{children:["Farming ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/farming-basics",children:"basics"}),": overviews the farming process and how to get started."]}),"\n",(0,i.jsxs)(s.li,{children:["Timelords ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/timelord-algorithm",children:"detailed documentation"}),": details the timelords role in the consensus model."]}),"\n",(0,i.jsxs)(s.li,{children:["Plot filter ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/signage-and-infusion-points",children:"calculations"}),": overviews the process by which the plot filter effects the number of plots containing eligible proofs."]}),"\n",(0,i.jsxs)(s.li,{children:["Support ",(0,i.jsx)(s.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var i=n(7294);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);