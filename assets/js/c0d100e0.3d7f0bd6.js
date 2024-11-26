"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2072],{6954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"consensus/multiple-blocks","title":"Multiple Blocks","description":"Figure 7: multiple blocks. Sp1 = signage point 1","source":"@site/docs/consensus/multiple-blocks.md","sourceDirName":"consensus","slug":"/consensus-multiple-blocks","permalink":"/consensus-multiple-blocks","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/multiple-blocks.md","tags":[],"version":"current","frontMatter":{"title":"Multiple Blocks","slug":"/consensus-multiple-blocks"},"sidebar":"tutorialSidebar","previous":{"title":"Harvester Algorithm","permalink":"/harvester-algorithm"},"next":{"title":"Three VDF Chains","permalink":"/three-vdf-chains"}}');var o=n(4848),i=n(8453);const l={title:"Multiple Blocks",slug:"/consensus-multiple-blocks"},r=void 0,a={},c=[];function h(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"/img/multiple-blocks.png",alt:"drawing"}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(t.p,{children:"Figure 7: multiple blocks. Sp1 = signage point 1"})})]}),"\n",(0,o.jsx)(t.p,{children:"As you can see in Figure 7, multiple blocks can get infused into the same sub-slot. Chia's system targets one block every 18.75 seconds on average (32 blocks per sub-slot), and this is adjusted every 4608 blocks (around 24 hours) through the work difficulty algorithm."}),"\n",(0,o.jsx)(t.p,{children:"VDF proofs span:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"from the previous infusion point before the current signage point to the current signage point, and"}),"\n",(0,o.jsx)(t.li,{children:"from the previous infusion point to the current infusion point.\nThis means that the VDF proofs required for each block can overlap."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In the example in Figure 7, B2 contains a VDF proof from B1 to sp2, and from B1 to B2. B3 contains a proof from B1 to sp3, and from B2 to B3. B2 does not depend at all on B3, but B3 depends on B2, since its VDF is from B2's infusion point."}),"\n",(0,o.jsxs)(t.p,{children:["As discussed in ",(0,o.jsx)(t.a,{href:"/signage-and-infusion-points",children:"Signage and Infusion Points page"}),", the blocks get created at the signage points, but they are missing the infusion point VDF. Once this VDF is added, the block is finished, and forms part of the blockchain."]}),"\n",(0,o.jsx)(t.p,{children:"The signatures get created and added by the farmers at the signage points, and broadcast to the whole network.\nThere are no signatures at the infusion point; the only things added at the infusion point are the VDFs."}),"\n",(0,o.jsxs)(t.p,{children:["Finally, note that there can be multiple winners at the same signage point, all of which can be included into the blockchain. That would be the case in the diagram, if ",(0,o.jsx)(t.code,{children:"sp2 == sp3"}),". The one which gets included first is the one with the lower ",(0,o.jsx)(t.code,{children:"required_iters"}),", and thus earlier infusion point."]}),"\n",(0,o.jsx)(t.p,{children:"You may be wondering what happens if a farmer makes a copy of a plot and the plot becomes eligible for infusion. Do the plots each win a block reward? No -- two blocks get created, but only one will be infused. The full nodes will only propagate the first copy of the block they see. The timelord node is ultimately connected to exactly one full node, so even if multiple identical blocks make it to that full node, they will not both be sent to the timelord for infusion."}),"\n",(0,o.jsx)(t.p,{children:"It is possible (albeit very unlikely) for two non-identical blocks to have the same infusion point, even though their hashes don't match. In this case, the full nodes will reject the second block they receive because each block must have total_iters > prev block total_iters."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(6540);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);