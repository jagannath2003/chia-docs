"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3135],{2778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>h,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"consensus/epoch-and-difficulty","title":"Epoch and Difficulty","description":"Sub-epoch: Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 \\\\* (N+1) blocks have been included since genesis.","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/consensus/epoch-and-difficulty.md","sourceDirName":"consensus","slug":"/epoch-and-difficulty","permalink":"/zh-Hans/epoch-and-difficulty","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/epoch-and-difficulty.md","tags":[],"version":"current","frontMatter":{"title":"Epoch and Difficulty","slug":"/epoch-and-difficulty"},"sidebar":"tutorialSidebar","previous":{"title":"Foliage","permalink":"/zh-Hans/consensus-foliage"},"next":{"title":"Block Validation","permalink":"/zh-Hans/block-validation"}}');var i=n(4848),o=n(8453);const a={title:"Epoch and Difficulty",slug:"/epoch-and-difficulty"},h=void 0,r={},c=[{value:"Sub Epochs",id:"sub-epochs",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Sub-epoch"}),": Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 * (N+1) blocks have been included since genesis."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Epoch"}),": Epoch N starts when epoch N-1 ends (except for 0th epoch), and it ends at the end of the first slot where 4608 * (N + 1) blocks have been included since genesis."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Difficulty"}),": A constant that scales the number of iterations for a given proof of space. Iterations are computed as difficulty / quality."]}),"\n",(0,i.jsx)(t.p,{children:"Every 4608 blocks, the difficulty adjustment is automatically performed. This modifies two parameters: The slot_iterations parameter, and the difficulty parameter."}),"\n",(0,i.jsx)(t.p,{children:"The sub_slot_iterations parameter is reset so a 600-second slot requires close to slot_iterations many iterations. The reset is done using the values from the last epoch to approximate the iterations-per-second ratio, concretely."}),"\n",(0,i.jsxs)(t.p,{children:["We'll define ",(0,i.jsx)(t.code,{children:"epoch$"})," as the period beginning with the last block that was infused ",(0,i.jsx)(t.em,{children:"prior"})," to the current epoch, and ending with the last block that was infused ",(0,i.jsx)(t.em,{children:"in"})," the current epoch. Thus, ",(0,i.jsx)(t.code,{children:"epoch$"})," is a slightly shifted period that occurs for each epoch."]}),"\n",(0,i.jsxs)(t.p,{children:["The values ",(0,i.jsx)(t.code,{children:"t1"}),",",(0,i.jsx)(t.code,{children:"i1"})," and ",(0,i.jsx)(t.code,{children:"w1"})," denote the timestamp, iterations (since genesis), and weight (since genesis) at the beginning of ",(0,i.jsx)(t.code,{children:"epoch$"}),". Along the same lines, ",(0,i.jsx)(t.code,{children:"(t2,i2,w2)"})," are the values at the end of ",(0,i.jsx)(t.code,{children:"epoch$"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Here's how we calculate iterations per second:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"iterations per second = floor(num iterations in last epoch / duration of last epoch)\n                      = floor((i2 - i1) / (t2 - t1))\n"})}),"\n",(0,i.jsx)(t.p,{children:"That is, the delta in total iterations from the start to the end of the epoch, divided by the delta in timestamps."}),"\n",(0,i.jsx)(t.p,{children:"Sub-slot iterations is the total number of iterations per ten-minute sub-slot. Signage point interval iterations is sub-slot iterations divided by 64 (the number of signage points per sub-slot)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"sub slot iterations = iterations per second * 600\nsp interval iterations = floor(sub slot iterations / 64)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that we don't take the iterations and time exactly at the end of an epoch, but at the last infusion point of a block in an epoch (aka ",(0,i.jsx)(t.code,{children:"epoch$"}),"), the reason being simply that we only have timestamps available when blocks are infused."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"weight/sec of last epoch = (new weight - old weight) / duration of last epoch\n                         = (w2 - w1) / (t2 - t1)\n\nnew difficulty = (weight/sec * target seconds) / target number of blocks\n               = ((w2 - w1) / (t2 - t1) * (4608/64) * 600) / 4608\n"})}),"\n",(0,i.jsx)(t.p,{children:"This can be rearranged to use only one floor division:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"new difficulty = floor(75 * (w2 - w1) / (16 * (t2 - t1)))\n"})}),"\n",(0,i.jsx)(t.p,{children:"The sub-slot iterations are adjusted such that each slot lasts around 600 seconds. The difficulty is adjusted such that every challenge gets 32 blocks on average with fewer iterations than slot_iterations."}),"\n",(0,i.jsx)(t.p,{children:"It is important to note that the VDF iterations per slot is not material to the weight. That is, if there were two identical worlds where VDF speeds were equal and space was equal, but the sub-slot iterations parameter was twice as high in one world, then the blockchain with the higher sub-slot iterations would get twice as many blocks included per slot, but each slot would take twice as long. The weight per second added to the chain would be the same in both cases."}),"\n",(0,i.jsx)(t.p,{children:"Another way to look at it is that increasing sub-slot iterations increases the number of blocks per slot, but it also makes slots last longer, and thus has no effect on weight per second."}),"\n",(0,i.jsx)(t.h2,{id:"sub-epochs",children:"Sub Epochs"}),"\n",(0,i.jsxs)(t.p,{children:["As described in the ",(0,i.jsx)(t.a,{href:"/three-vdf-chains",children:"Three VDF Chains page"}),", the challenge chain is completely separate and does not refer to anything in the rewards chain. If these chains stayed separate forever, an attacker with a faster VDF would be able to look into the far future and predict challenges. The attacker could create one block per slot, with limited space, thus creating a whole challenge chain. This would allow them to create plots and instantly create proofs of space for these plots that will win in the future, and then delete the plots (a long range replotting attack). This would enable them to fill their reward chain and increase their weight."]}),"\n",(0,i.jsxs)(t.p,{children:["The solution to this is to periodically (every 384 blocks, which is an average of 2 hours) infuse the reward chain into the challenge chain. This means that the attacker can only perform the replotting attack for a few hours into the future. Plotting takes some time, but even if the attacker could replot instantly, the cost of a replotting attack will outweigh the benefits. This is because we do not infuse the ",(0,i.jsx)(t.em,{children:"current"})," reward chain output; instead we infuse the ",(0,i.jsx)(t.em,{children:"previous"})," sub-epoch's reward chain output (two hours in the past)."]}),"\n",(0,i.jsx)(t.p,{children:"The cost of creating a plot includes the electricity to calculate all of the tables, the RAM necessary while creating this plot, and the fixed infrastructure costs (space, power, cooling, etc). Assuming the worst case scenario of a super fast VDF, and instant ASIC plotting - the benefits would be equivalent to the benefits of storing that plot on a HDD for a few hours. Note that this would not guarantee a winning plot; it would be the equivalent of storing a normal plot."}),"\n",(0,i.jsxs)(t.p,{children:["It is clear that this attack is not worthwhile, and that storing the plots is much cheaper. This is discussed in further detail in the ",(0,i.jsx)(t.a,{href:"/consensus-attacks#replotting",children:"Attacks and Countermeasures page"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The above explains why the sub-epoch interval should be kept relatively low. But why can't we further reduce it to lower than 2 hours to further disincentivize replotting attacks? The reason is that whenever non-canonical data is infused into the challenge chain (which the reward chain contains, see the ",(0,i.jsx)(t.a,{href:"/consensus-foliage",children:"Foliage page"})," for more info), an opportunity for grinding occurs. This means an attacker can possibly choose to include or exclude blocks to manipulate what the challenge will be 2 hours into the future. If this time is too short, they can gain a small space advantage by doing this more often."]}),"\n",(0,i.jsxs)(t.p,{children:["The second (and completely separate) purpose for sub-epochs is to act as checkpoints in a Flyclient-like protocol explained in the ",(0,i.jsx)(t.a,{href:"/light-clients",children:"Light Clients page"}),", to increase the efficiency of light clients."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>h});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);