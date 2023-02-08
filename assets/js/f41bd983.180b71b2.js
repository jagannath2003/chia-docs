"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},h),{},{components:n})):a.createElement(f,s({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"Epoch and Difficulty",slug:"/epoch-and-difficulty"},s=void 0,r={unversionedId:"consensus/epoch-and-difficulty",id:"consensus/epoch-and-difficulty",title:"Epoch and Difficulty",description:"Sub-epoch: Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 \\* (N+1) blocks have been included since genesis.",source:"@site/docs/consensus/epoch-and-difficulty.md",sourceDirName:"consensus",slug:"/epoch-and-difficulty",permalink:"/epoch-and-difficulty",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/epoch-and-difficulty.md",tags:[],version:"current",frontMatter:{title:"Epoch and Difficulty",slug:"/epoch-and-difficulty"},sidebar:"tutorialSidebar",previous:{title:"Foliage",permalink:"/consensus-foliage"},next:{title:"Block Validation",permalink:"/block-validation"}},l={},c=[{value:"Sub Epochs",id:"sub-epochs",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sub-epoch"),": Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 ","*"," (N+1) blocks have been included since genesis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epoch"),": Epoch N starts when epoch N-1 ends (except for 0th epoch), and it ends at the end of the first slot where 4608 ","*"," (N + 1) blocks have been included since genesis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Difficulty"),": A constant that scales the number of iterations for a given proof of space. Iterations are computed as difficulty / quality."),(0,o.kt)("p",null,"Every 4608 blocks, the difficulty adjustment is automatically performed. This modifies two parameters: The slot_iterations parameter, and the difficulty parameter."),(0,o.kt)("p",null,"The sub_slot_iterations parameter is reset so a 600-second slot requires close to slot_iterations many iterations. The reset is done using the values from the last epoch to approximate the iterations-per-second ratio, concretely."),(0,o.kt)("p",null,"We'll define ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch$")," as the period beginning with the last block that was infused ",(0,o.kt)("em",{parentName:"p"},"prior")," to the current epoch, and ending with the last block that was infused ",(0,o.kt)("em",{parentName:"p"},"in")," the current epoch. Thus, ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch$")," is a slightly shifted period that occurs for each epoch."),(0,o.kt)("p",null,"The values ",(0,o.kt)("inlineCode",{parentName:"p"},"t1"),",",(0,o.kt)("inlineCode",{parentName:"p"},"i1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"w1")," denote the timestamp, iterations (since genesis), and weight (since genesis) at the beginning of ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch$"),". Along the same lines, ",(0,o.kt)("inlineCode",{parentName:"p"},"(t2,i2,w2)")," are the values at the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch$"),"."),(0,o.kt)("p",null,"Here's how we calculate iterations per second:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iterations per second = floor(num iterations in last epoch / duration of last epoch)\n                      = floor((i2 - i1) / (t2 - t1))\n")),(0,o.kt)("p",null,"That is, the delta in total iterations from the start to the end of the epoch, divided by the delta in timestamps."),(0,o.kt)("p",null,"Sub-slot iterations is the total number of iterations per ten-minute sub-slot.\nSignage point interval iterations is sub-slot iterations divided by 64 (the number of signage points per sub-slot)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"sub slot iterations = iterations per second * 600\nsp interval iterations = floor(sub slot iterations / 64)\n")),(0,o.kt)("p",null,"Note that we don\u2019t take the iterations and time exactly at the end of an epoch, but at the last infusion point of a block in an epoch (aka ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch$"),"), the reason being simply that we only have timestamps available when blocks are infused."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"weight/sec of last epoch = (new weight - old weight) / duration of last epoch\n                         = (w2 - w1) / (t2 - t1)\n\nnew difficulty = (weight/sec * target seconds) / target number of blocks\n               = ((w2 - w1) / (t2 - t1) * (4608/64) * 600) / 4608\n")),(0,o.kt)("p",null,"This can be rearranged to use only one floor division:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"new difficulty = floor(75 * (w2 - w1) / (16 * (t2 - t1)))\n")),(0,o.kt)("p",null,"The sub-slot iterations are adjusted such that each slot lasts around 600 seconds.\nThe difficulty is adjusted such that every challenge gets 32 blocks on average with fewer iterations than slot_iterations."),(0,o.kt)("p",null,"It is important to note that the VDF iterations per slot is not material to the weight.\nThat is, if there were two identical worlds where VDF speeds were equal and space was equal, but the sub-slot iterations parameter was twice as high in one world, then the blockchain with the higher sub-slot iterations would get twice as many blocks included per slot, but each slot would take twice as long. The weight per second added to the chain would be the same in both cases."),(0,o.kt)("p",null,"Another way to look at it is that increasing sub-slot iterations increases the number of blocks per slot, but it also makes slots last longer, and thus has no effect on weight per second."),(0,o.kt)("h2",{id:"sub-epochs"},"Sub Epochs"),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/three-vdf-chains"},"Three VDF Chains page"),", the challenge chain is completely separate and does not refer to anything in the rewards chain. If these chains stayed separate forever, an attacker with a faster VDF would be able to look into the far future and predict challenges. The attacker could create one block per slot, with limited space, thus creating a whole challenge chain. This would allow them to create plots and instantly create proofs of space for these plots that will win in the future, and then delete the plots (a long range replotting attack). This would enable them to fill their reward chain and increase their weight."),(0,o.kt)("p",null,"The solution to this is to periodically (every 384 blocks, which is an average of 2 hours) infuse the reward chain into the challenge chain. This means that the attacker can only perform the replotting attack for a few hours into the future. Plotting takes some time, but even if the attacker could replot instantly, the cost of a replotting attack will outweigh the benefits. This is because we do not infuse the ",(0,o.kt)("em",{parentName:"p"},"current")," reward chain output; instead we infuse the ",(0,o.kt)("em",{parentName:"p"},"previous")," sub-epoch's reward chain output (two hours in the past)."),(0,o.kt)("p",null,"The cost of creating a plot includes the electricity to calculate all of the tables, the RAM necessary while creating this plot, and the fixed infrastructure costs (space, power, cooling, etc). Assuming the worst case scenario of a super fast VDF, and instant ASIC plotting - the benefits would be equivalent to the benefits of storing that plot on a HDD for a few hours. Note that this would not guarantee a winning plot; it would be the equivalent of storing a normal plot."),(0,o.kt)("p",null,"It is clear that this attack is not worthwhile, and that storing the plots is much cheaper. This is discussed in further detail in the ",(0,o.kt)("a",{parentName:"p",href:"/consensus-attacks#replotting"},"Attacks and Countermeasures page"),"."),(0,o.kt)("p",null,"The above explains why the sub-epoch interval should be kept relatively low. But why can\u2019t we further reduce it to lower than 2 hours to further disincentivize replotting attacks? The reason is that whenever non-canonical data is infused into the challenge chain (which the reward chain contains, see the ",(0,o.kt)("a",{parentName:"p",href:"/consensus-foliage"},"Foliage page")," for more info), an opportunity for grinding occurs. This means an attacker can possibly choose to include or exclude blocks to manipulate what the challenge will be 2 hours into the future. If this time is too short, they can gain a small space advantage by doing this more often."),(0,o.kt)("p",null,"The second (and completely separate) purpose for sub-epochs is to act as checkpoints in a Flyclient-like protocol explained in the ",(0,o.kt)("a",{parentName:"p",href:"/light-clients"},"Light Clients page"),", to increase the efficiency of light clients."))}u.isMDXComponent=!0}}]);