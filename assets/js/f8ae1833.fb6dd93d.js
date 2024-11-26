"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[154],{1018:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"consensus/signage-and-infusion-points","title":"Signage and Infusion Points","description":"Each sub-slot in both the challenge chain and the reward chain is divided into 64 smaller VDFs. Between each of these smaller VDFs is a point called a signage point. Timelords publish the VDF output and proof when they reach each signage point.","source":"@site/docs/consensus/signage-and-infusion-points.md","sourceDirName":"consensus","slug":"/signage-and-infusion-points","permalink":"/signage-and-infusion-points","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/signage-and-infusion-points.md","tags":[],"version":"current","frontMatter":{"title":"Signage and Infusion Points","slug":"/signage-and-infusion-points"},"sidebar":"tutorialSidebar","previous":{"title":"Challenges","permalink":"/consensus-challenges"},"next":{"title":"Harvester Algorithm","permalink":"/harvester-algorithm"}}');var s=i(4848),o=i(8453);const a={title:"Signage and Infusion Points",slug:"/signage-and-infusion-points"},r=void 0,h={},l=[{value:"Rationale for choosing 64 signage points",id:"rationale-for-choosing-64-signage-points",level:2},{value:"Definitions",id:"definitions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Each sub-slot in both the challenge chain and the reward chain is divided into 64 smaller VDFs. Between each of these smaller VDFs is a point called a ",(0,s.jsx)(n.strong,{children:"signage point"}),". Timelords publish the VDF output and proof when they reach each signage point."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The challenge and reward chains both have signage points. The infused challenge chain, however, does not."})}),"\n",(0,s.jsxs)(n.p,{children:["The signage points occur every 9.375 seconds (64 signage points per 600-second sub-slot). The number of iterations between each signage point is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"sp_interval_iterations"})}),", which is equal to ",(0,s.jsx)(n.em,{children:"sub-slot_iterations / 64"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The challenge at the start of the sub-slot is also a valid signage point. As each of the 64 signage points in the sub-slot is reached, those points are broadcast, starting from the fastest timelord's full node, and propagating to every other full node on the network."}),"\n",(0,s.jsx)(n.p,{children:"Farmers receive these signage points and compute a hash for each plot, at each signage point. If the hash starts with nine zeros, the plot passes the filter for that signage point, and can proceed. This disqualifies around 511/512 of all plot files in the network, for that signage point. The formula to compute the filter hash is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"plot filter bits = sha256(plot id + sub slot challenge + cc signage point)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The proof of space challenge is computed as the hash of the plot filter bits:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PoSpace challenge = sha256(plot filter bits)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using this challenge, the farmers fetch quality strings for each plot that made it past the filter. Recall that this process requires around seven random disk seeks, which takes around 70 ms on a slow HDD. The quality string is a hash derived from part of the proof of space (but the whole proof of space has yet to be retrieved)."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For both of our ",(0,s.jsx)(n.a,{href:"/consensus-challenges",children:"previous example"}),", as well as the next example, we'll use the following values:"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"sub-slot_iterations = 100,000,000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"sp_interval_iterations = sub-slot_iterations / 64 = 1,562,500"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The farmer computes the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"required_iterations"})})," for each proof of space. If the ",(0,s.jsx)(n.em,{children:"required_iterations < sp_interval_iterations"}),", the proof of space is eligible for inclusion into the blockchain. At this point, the farmer fetches the entire proof of space from disk (which requires 64 disk seeks, or 640 ms on a slow HDD), creates an unfinished block, and broadcasts it to the network."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For the vast majority of eligible plots, ",(0,s.jsx)(n.em,{children:"required_iterations"})," will be far too high, since on average 32 will qualify for the whole network for each 10-minute sub-slot. This is a random process so it's possible (though unlikely) for a large number of proofs to qualify. Any plot that does meet the ",(0,s.jsx)(n.em,{children:"required_iterations"})," for a signage point will qualify as there is no rivalry between winning plots."]})}),"\n",(0,s.jsx)(n.p,{children:"The exact method for required_iterations is the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'sp_quality_string = sha256(quality_string + cc_signage_point)\nrequired_iterations = (difficulty\n    * difficulty_constant_factor\n    * int.from_bytes(sp_quality_string, "big", signed=False)\n    // pow(2, 256) * expected_plot_size(size))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The difficulty constant factor is based on the initial constants of the blockchain. For Chia, it is ",(0,s.jsx)(n.em,{children:"2^67"}),". The difficulty varies per epoch, as explained in ",(0,s.jsx)(n.a,{href:"/epoch-and-difficulty",children:"Section 3.11"})," 'Section 3.11: Epochs and Difficulty Adjustment'). As you can see, the ",(0,s.jsx)(n.code,{children:"sp_quality_string"})," is converted into a random number between 0 and 1, by dividing it by ",(0,s.jsx)(n.em,{children:"2^256"}),", and then multiplied by the plot size."]}),"\n",(0,s.jsxs)(n.p,{children:["For consensus purposes, the ",(0,s.jsx)(n.code,{children:"expected_plot_size"})," is ",(0,s.jsx)(n.code,{children:"((2 * k) + 1) * (2 ** (k - 1))"}),", where ",(0,s.jsx)(n.code,{children:"k>=32<50"}),". The actual plot size is that value times a constant factor, in bytes. This is because each entry in the plot is around ",(0,s.jsx)(n.code,{children:"k+0.5"})," bits, and there are around ",(0,s.jsx)(n.code,{children:"2 ** k"})," entries."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"signage_point_iterations"})," is the number of iterations from the start of the sub-slot to the signage point."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," is the number of iterations from the start of the sub-slot at which the block with at least the required quality can be included into the blockchain. This is calculated as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"infusion_iterations = (signage_point_iterations + 3 * sp_interval_iterations + required_iterations) % sub-slot_iterations\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," will be between 3 and 4 signage points after the current signage point. Farmers must submit their proofs and blocks before the infusion point is reached. The modulus is there to allow overflows into the next sub-slot, if the signage point is near the end of the sub-slot. This is expanded on in ",(0,s.jsx)(n.a,{href:"/overflow-blocks",children:"Section 3.9"})," 'Section 3.9: Overflow Blocks and Weight')."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["More information on infusion points is available in the ",(0,s.jsx)(n.a,{href:"/proof-of-time#infusion",children:"VDFs page"}),"."]})}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/signage-points.png",alt:"drawing"}),(0,s.jsx)("figcaption",{children:(0,s.jsx)(n.p,{children:"Figure 5: timelords create proofs for both the signage point and the infusion point. But they only infuse (change the VDF classgroup) for the latter. Squares symbolize infusions, where a new VDF is started."})})]}),"\n",(0,s.jsxs)(n.p,{children:["Figure 5 shows the infusion point as a green square marked ",(0,s.jsx)(n.code,{children:"b1"}),". The first and last blocks of the sub-slot are marked ",(0,s.jsx)(n.code,{children:"r1"})," and ",(0,s.jsx)(n.code,{children:"r2"}),", respectively. For this example, the farmer will create the block at the time of the signage point marked with a red arrow, which we'll call ",(0,s.jsx)(n.code,{children:"b1'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["At ",(0,s.jsx)(n.code,{children:"b1"}),", the farmer's block gets combined with the VDF output for that point. This creates a new input for the VDF from that point on, i.e. we infuse the farmer's block into the VDF. ",(0,s.jsx)(n.code,{children:"b1"})," is only fully valid after two events have occurred:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"infusion_iterations"})," has been reached, and"]}),"\n",(0,s.jsxs)(n.li,{children:["Two VDF proofs have been included: one from ",(0,s.jsx)(n.code,{children:"r1"})," to the signage point and one from ",(0,s.jsx)(n.code,{children:"r1"})," to ",(0,s.jsx)(n.code,{children:"b1"}),". (Actually it's more since there are three VDF chains, explained in ",(0,s.jsx)(n.a,{href:"/three-vdf-chains",children:"Section 3.8"})," 'Section 3.8: Three VDF Chains'))."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In Figure 5, the farmer creates the block at the time of the signage point, ",(0,s.jsx)(n.code,{children:"b1'"}),". However, ",(0,s.jsx)(n.code,{children:"b1'"})," is not finished yet, since it needs the infusion point VDF. Once the ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," VDF has been released, it is added to ",(0,s.jsx)(n.code,{children:"b1'"})," to form the finished block at ",(0,s.jsx)(n.code,{children:"b1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Recall that in this example,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"sub-slot_iterations = 100,000,000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"sp_interval_iterations = 1,562,500"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For each of the 64 signage points, as they are released to the network every 9.375 seconds, or every 1,562,500 iterations, the farmer computes the plot filter and sees how many plots pass. For each passing plot, the farmer calculates ",(0,s.jsx)(n.em,{children:"required_iterations"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's say the farmer calculates ",(0,s.jsx)(n.em,{children:"required_iterations < 1,562,500"})," once in the sub-slot. (We'll assume the exact ",(0,s.jsx)(n.em,{children:"required_iterations = 782,800"})," in this instance.) Figure 5 shows this happening at the 20th signage point."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"infusion_iterations"})," is then computed as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"infusion_iterations\n  = signage_point_iterations + (3 * sp_interval_iterations) + required_iterations\n  = (signage point * sp_interval_iterations) + (3 * sp_interval_iterations) + required_iterations\n  = (20 * 1,562,500) + (3 * 1,562,600) + 782,700\n  = 36,722,300\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After realizing they have won (at the 20th infusion point), the farmer fetches the whole proof of space, makes a block (optionally including transactions), and broadcasts this to the network. The block has until ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," (typically a few seconds) to reach timelords, who will infuse the block, creating the infusion point VDFs. With these VDFs, the block can be finished and added to the blockchain by full nodes."]}),"\n",(0,s.jsx)(n.h2,{id:"rationale-for-choosing-64-signage-points",children:"Rationale for choosing 64 signage points"}),"\n",(0,s.jsxs)(n.p,{children:["Chia's original consensus, which was phased out before the launch of mainnet, used a single signage point per 10-minute subslot. This left the network vulnerable to short-range ",(0,s.jsx)(n.a,{href:"/consensus-attacks#replotting",children:"replotting attacks"}),", where an attacker initiates a plot's creation after a signage point, and completes the plot before the next infusion point. The attacker could always choose a plot that passes the plot filter (because the signage point is hashed with the subslot challenge and the plot ID in calculating the filter) and then delete the plot after the infusion point. For a 512-filter, this would result in the attacker mimicking 512 plots (~51 TiB). In reality, under the original consensus, they would only need to own single computer capable of creating a plot in less than ten minutes."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Technically this isn't an ",(0,s.jsx)(n.em,{children:"attack"}),' because -- even if successful -- the "attacker" wouldn\'t gain an ability to cheat the network. However the "attacker" ',(0,s.jsx)(n.em,{children:"would"})," be using the network in an unintended way, effectively turning Chia into a Proof of Work system. Therefore, Chia's new consensus was intentionally designed to discourage this behavior."]})}),"\n",(0,s.jsxs)(n.p,{children:["The new consensus was introduced during Chia's beta phase. One of the modifications was to increase the number of signage points to 64 per 10-minute subslot, or one every 9.375 (600/64) seconds, on average. The Challenge Chain was also introduced (see the ",(0,s.jsx)(n.a,{href:"/three-vdf-chains",children:"Three VDF Chains page"})," for more info). The maximum distance between a signage point and the next infusion point is now 4 signage points (see the ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," formula, above), or 37.5 seconds. This is the maximum amount of time for the attack to be possible, but for it to be consistently applied, the minimum time of 28.125 seconds must be applied. Assuming a few extra seconds for network latency and other factors, the attack is now only possible if one can create a new plot in less than 25 seconds."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'Keep in mind that this "attack" is really mimicking the ownership of around 51 TiB of storage. Even when it does become possible to run the attack consistently, it will likely be much cheaper to use the network as intended, storing plots on non-volatile storage.'})}),"\n",(0,s.jsx)(n.p,{children:"This begs the question: why not use even more signage points in the consensus? The simple answer is because as the signage points increase, it becomes more difficult for the timelords and nodes to keep up with the network. Sixty-four signage points per subslot was deemed enough to discourage the attack laid out above, while still allowing the timelords and nodes to perform as intended and to stay in sync."}),"\n",(0,s.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Quality string"}),": A small part of the proof of space, 2 ",(0,s.jsx)(n.em,{children:"x values"})," out of the total 64 ",(0,s.jsx)(n.em,{children:"x values"}),", which can be retrieved efficiently from disk, and which values_to_fetch is determined by the signage point."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"sp_quality_string"})}),': A hash of the quality string concatenated with the challenge chain\'s signage point. This hash is what ultimately decides the "luck" of a certain proof, using the size of ',(0,s.jsx)(n.em,{children:"required_iterations"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"sp_interval_iterations"})}),": Defined as ",(0,s.jsx)(n.em,{children:"floor(sub-slot_iterations / 64)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Signage points"}),": 64 intermediary points in time within a sub-slot in both the challenge and reward chains, for which VDFs are periodically released. At each signage point, a VDF output is created and broadcast through the network. The first signage point in the sub-slot is the challenge itself. Each block has a signage point such that the proof of space in the block must be eligible for that signage point."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"required_iterations"})}),": A number computed using the quality string, used to choose proofs of space which are eligible to make blocks. The vast majority of proofs of space will have ",(0,s.jsx)(n.em,{children:"required_iterations"})," which are too high, and thus not eligible for inclusion into the chain. This number is used to compute the infusion point."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Infusion point"}),": The point in time at ",(0,s.jsx)(n.em,{children:"infusion_iterations"})," from the challenge point, for a proof of space with a certain challenge and ",(0,s.jsx)(n.em,{children:"infusion_iterations"}),". At this point, the farmer's block gets infused into the reward chain VDF. The infusion point of a block is always between 3 and 4 signage points after the signage point of that block. Computed as ",(0,s.jsx)(n.em,{children:"signage_point_iterations + 3 * sp_interval_iterations + required_iterations"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The delay between the signage point and infusion point has many benefits, including defense against orphaning and selfish farming, decreased forks, and no VDF pauses. This delay of around 28 seconds is given so that farmers have enough time to sign without delaying the slot VDF. Well-behaving farmers sign only one signage point with each proof of space, meaning that attackers cannot easily reorg the chain."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);