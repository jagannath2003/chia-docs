"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5338],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(o),u=n,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return o?a.createElement(f,i(i({ref:t},h),{},{components:o})):a.createElement(f,i({ref:t},h))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6240:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={title:"Summary",slug:"/pool-protocol"},i=void 0,l={unversionedId:"protocol/pool/pool-protocol",id:"protocol/pool/pool-protocol",title:"Summary",description:"The Chia pool protocol has been designed for security and decentralization. It does not rely on any 3rd party, closed code, or trusted behavior.",source:"@site/docs/protocol/pool/pool-protocol.md",sourceDirName:"protocol/pool",slug:"/pool-protocol",permalink:"/zh/pool-protocol",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/pool/pool-protocol.md",tags:[],version:"current",frontMatter:{title:"Summary",slug:"/pool-protocol"},sidebar:"tutorialSidebar",previous:{title:"Peer Protocol",permalink:"/zh/peer-protocol"},next:{title:"Pool Protocol 1.0 Specification",permalink:"/zh/pool-protocol-specification"}},s={},p=[{value:"Customization",id:"customization",level:3},{value:"Pool Protocol Summary",id:"pool-protocol-summary",level:3},{value:"Receiving partials",id:"receiving-partials",level:3},{value:"Collecting pool rewards",id:"collecting-pool-rewards",level:3},{value:"Calculating farmer rewards",id:"calculating-farmer-rewards",level:3},{value:"1/8 vs 7/8",id:"18-vs-78",level:3},{value:"Difficulty",id:"difficulty",level:3},{value:"Points",id:"points",level:3},{value:"Difficulty adjustment algorithm",id:"difficulty-adjustment-algorithm",level:3},{value:"Making payments",id:"making-payments",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Chia pool protocol has been designed for security and decentralization. It does not rely on any 3rd party, closed code, or trusted behavior."),(0,n.kt)("p",null,"Some of the protocol's highlights:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The farmer can never steal from the pool by double farming."),(0,n.kt)("li",{parentName:"ul"},"The farmer does not need collateral to join a pool. They only need a wallet with one mojo (and potentially a transaction fee) to create a singleton."),(0,n.kt)("li",{parentName:"ul"},"The farmer can easily and securely change pools."),(0,n.kt)("li",{parentName:"ul"},"The farmer can run a full node (increasing decentralization) on low-end hardware, such as a Raspberry Pi 4."),(0,n.kt)("li",{parentName:"ul"},"The farmer can start a new full node, using only their 24-word seed phrase to log in to Chia's software, and the pooling configuration is detected, without requiring a central server."),(0,n.kt)("li",{parentName:"ul"},"The farmer chooses which transactions to include from their full node and creates transaction blocks in a decentralized way.")),(0,n.kt)("h3",{id:"customization"},"Customization"),(0,n.kt)("p",null,"Several things can be customized by pool operators, while still adhering to the protocol. These include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How long the timeout is for leaving the pool"),(0,n.kt)("li",{parentName:"ul"},"How difficulty adjustment happens"),(0,n.kt)("li",{parentName:"ul"},"Fees to take, and how much to pay in blockchain fees"),(0,n.kt)("li",{parentName:"ul"},"How farmers' points are counted when paying (",(0,n.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Comparison_of_mining_pools"},"PPS, PPLNS,")," etc)"),(0,n.kt)("li",{parentName:"ul"},"How farmers receive payouts (XCH, BTC, ETH, etc), and how often"),(0,n.kt)("li",{parentName:"ul"},"What store (DB) is used - by default it's an SQLite db. Users can use their own store implementations, based on\n",(0,n.kt)("inlineCode",{parentName:"li"},"AbstractPoolStore"),", by supplying them to ",(0,n.kt)("inlineCode",{parentName:"li"},"pool_server.start_pool_server")),(0,n.kt)("li",{parentName:"ul"},"What happens (in terms of response) after a successful login"),(0,n.kt)("li",{parentName:"ul"},"The backend architecture of the pool")),(0,n.kt)("p",null,"However, some things cannot be changed. These are described in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/pool-reference/blob/main/SPECIFICATION.md"},"pool specification"),", and mostly relate to validation, protocol, and the singleton format for smart coins."),(0,n.kt)("h3",{id:"pool-protocol-summary"},"Pool Protocol Summary"),(0,n.kt)("p",null,"When not pooling, farmers receive signage points from full nodes every 9 seconds, and send these signage points to the harvester."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"/signage-and-infusion-points"},"Signage and Infusion Points page")," for more details.")),(0,n.kt)("p",null,"Each signage point is sent along with the ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"difficulty"),", two network-wide parameters which are adjusted every 4608 blocks (~24 hours). The ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters")," is the number of VDF iterations performed in 10 minutes for the fastest VDF in the network. This increases if the fastest timelord's speed increases. The difficulty is similarly affected by timelord speed (it goes up when timelord speed increases, since blocks come faster), but it's also affected by the total amount of space in the network. These two parameters determine how difficult it is to \"win\" a block and find a proof."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"/consensus-challenges"},"Challenges page")," for more details.")),(0,n.kt)("p",null,"Since only about one farmer worldwide finds a proof every 18.75 seconds (two signage points), this means the chances of finding one are tiny, with the default ",(0,n.kt)("inlineCode",{parentName:"p"},"difficulty")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters"),". For pooling, we increase the ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters")," to a constant, but very high number: 37,600,000,000 (37.6 billion), and then we decrease the difficulty to an artificially lower one, so that proofs can be found more frequently."),(0,n.kt)("p",null,"The farmer communicates with one or several pools through an HTTPS protocol, and sets their own local difficulty for each pool. Then, when sending signage points to the harvester, the pool ",(0,n.kt)("inlineCode",{parentName:"p"},"difficulty")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters")," are used. This means that the farmer can find proofs very often, perhaps every 10 minutes, even for small farms."),(0,n.kt)("p",null,"These \"partial\" proofs, however, are not sent to the full node to create a block. They are instead only sent to the pool. This means that the other full nodes in the network do not have to see and validate everyone else's proofs, and the network can scale to millions of farmers, as long as the pool scales properly. Only one of a given pool's farmers needs to win a block for the entire pool to be rewarded proportionally to their space."),(0,n.kt)("p",null,"The pool then keeps track of how many proofs (partials) each farmer sends, weighing them by difficulty. Occasionally (for example every three days), the pool can perform a payout to farmers based on how many partials they submitted. Farmers with more space, and thus more points, will get linearly more rewards."),(0,n.kt)("p",null,"Instead of farmers using a ",(0,n.kt)("inlineCode",{parentName:"p"},"pool_public_key")," when plotting, they now use a puzzle hash, referred to as the ",(0,n.kt)("inlineCode",{parentName:"p"},"p2_singleton_puzzle_hash"),", also known as the ",(0,n.kt)("inlineCode",{parentName:"p"},"pool_contract_address"),". These values go into the plot itself, and cannot be changed after creating the plot, since they are hashed into the ",(0,n.kt)("inlineCode",{parentName:"p"},"plot_id"),". The pool contract address is the address of a chialisp contract called a ",(0,n.kt)("em",{parentName:"p"},"singleton")," or plot NFT. The farmer must first create a singleton on the blockchain, which stores the pool information of the pool that that singleton is assigned to. When making a plot, the address of that singleton is used, and therefore that plot is tied to that singleton forever."),(0,n.kt)("p",null,"When a block is found by the farmer, 7/8 of the block reward (the pool portion) go into the singleton. When the farmer claims these funds they are sent directly to the pool's target address. The other 1/8 of the reward, plus transaction fees, are sent directly to the farmer."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The block reward's payout amount will change according to the halving cycle, detailed in the ",(0,n.kt)("a",{parentName:"p",href:"/block-rewards#halvings"},"Block Rewards page"),". However, the 7/8 - 1/8 ratio will always remain the same.")),(0,n.kt)("p",null,"The farmer can also configure their payout instructions, so that the pool knows where to send the occasional rewards to. Optionally a farmer can opt out of a pool by updating the singleton and then claiming future rewards for themselves."),(0,n.kt)("h3",{id:"receiving-partials"},"Receiving partials"),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"partial")," is a proof of space with some additional metadata and authentication info from the farmer, which meets certain minimum difficulty requirements. Partials must be real proofs of space responding to blockchain signage points, and they must be submitted within the blockchain time window (~28 seconds after the signage point)."),(0,n.kt)("p",null,"The pool server:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"receives partials from the users"),(0,n.kt)("li",{parentName:"ol"},"validates that the partials are correct and correspond to a valid signage point on the blockchain"),(0,n.kt)("li",{parentName:"ol"},"Adds the partials to a queue.")),(0,n.kt)("p",null,"A few minutes later, the pool pulls from the queue, and checks that the signage point for that partial is still in the blockchain. If everything is good, the partial is counted as valid, and the points are added for that farmer."),(0,n.kt)("h3",{id:"collecting-pool-rewards"},"Collecting pool rewards"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"/img/pooling-absorb.png",alt:"drawing",width:"600"})),(0,n.kt)("p",null,"The pool periodically searches the blockchain for new pool rewards (according to the ",(0,n.kt)("a",{parentName:"p",href:"/block-rewards"},"rewards schedule"),") that go to the various ",(0,n.kt)("inlineCode",{parentName:"p"},"p2_singleton_puzzle_hashes")," of each of the farmers. These coins are locked, and can only be spent along with the singleton that they correspond to. The singleton is also locked to a ",(0,n.kt)("inlineCode",{parentName:"p"},"target_puzzle_hash"),". Anyone can spend the singleton and the ",(0,n.kt)("inlineCode",{parentName:"p"},"p2_singleton_puzzle_hash")," coin, as long as it's a block reward, and all conditions are met. Some of these conditions require that the singleton always create exactly one new child singleton with the same launcher ID, and that the coinbase funds are sent to the ",(0,n.kt)("inlineCode",{parentName:"p"},"target_puzzle_hash"),"."),(0,n.kt)("h3",{id:"calculating-farmer-rewards"},"Calculating farmer rewards"),(0,n.kt)("p",null,"Periodically (for example once a day), the pool executes a payment loop, going through the recent partials that have been submitted by farmers, and making payouts to some, or all farmers. The exact method for computing balance and payout logic can be customized by the pool operator."),(0,n.kt)("h3",{id:"18-vs-78"},"1/8 vs 7/8"),(0,n.kt)("p",null,"Note that the coinbase rewards in Chia are divided into two coins: the farmer coin and the pool coin. The farmer coin (1/8 of the reward, plus transaction fees) only goes to the puzzle hash signed by the farmer private key, while the pool coin (7/8 of the reward) goes to the pool. This split of 7/8 - 1/8 exists to deter attacks where one pool tries to destroy another by farming partials, but never submitting winning blocks."),(0,n.kt)("p",null,"If a farmer is not a member of a pool, the farmer coin and the pool coin are both sent directly to the farmer."),(0,n.kt)("h3",{id:"difficulty"},"Difficulty"),(0,n.kt)("p",null,"The difficulty allows the pool operator to control how many partials per day they are receiving from each farmer. The difficulty can be adjusted separately for each farmer. A reasonable target would be 300 partials per day, to ensure frequent feedback to the farmer, and low variability."),(0,n.kt)("p",null,"A difficulty of 1 results in approximately 10 partials per day per k32 plot. This is the minimum difficulty that V1 of the protocol supports. However, a pool may set a higher minimum difficulty for efficiency."),(0,n.kt)("p",null,"When calculating whether a proof is high-quality enough for being awarded points, the pool should use ",(0,n.kt)("inlineCode",{parentName:"p"},"sub_slot_iters=37600000000"),". If the farmer submits a proof that is not good enough for the current difficulty, the pool should respond by setting\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"current_difficulty")," in the response."),(0,n.kt)("h3",{id:"points"},"Points"),(0,n.kt)("p",null,"X points are awarded for submitting a partial with difficulty X, which means that points scale linearly with difficulty."),(0,n.kt)("p",null,"For example, 100 TiB of space should yield approximately 10,000 points per day, whether the difficulty is set to 100 or 200. It should not matter what difficulty is set for a farmer, as long as they are consistently submitting partials. The specification does not require pools to pay out proportionally by points, but the payout scheme should be clear to farmers, and points should be acknowledged and accumulated points returned in the response."),(0,n.kt)("h3",{id:"difficulty-adjustment-algorithm"},"Difficulty adjustment algorithm"),(0,n.kt)("p",null,"The following is a simple difficulty adjustment algorithm executed by the pool, provided in the reference implementation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obtain the last successful partial for this launcher id"),(0,n.kt)("li",{parentName:"ul"},"If > 6 hours, divide difficulty by 5"),(0,n.kt)("li",{parentName:"ul"},"If > 45 minutes < 6 hours, divide difficulty by 1.5"),(0,n.kt)("li",{parentName:"ul"},"If < 45 minutes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If have < 300 partials at this difficulty, maintain same difficulty"),(0,n.kt)("li",{parentName:"ul"},"Else, multiply the difficulty by (24 ","*"," 3600 / (time taken for 300 partials))")))),(0,n.kt)("p",null,"Notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6 hours is used to handle rare cases where a farmer's storage drops dramatically."),(0,n.kt)("li",{parentName:"ul"},"The 45 minutes is similar, but for less extreme cases."),(0,n.kt)("li",{parentName:"ul"},"Finally, the last case of < 45 minutes should properly handle users with increasing space, or slightly decreasing space.")),(0,n.kt)("p",null,"This algorithm targets 300 partials per day, but different numbers can be used based on\nperformance and user preference."),(0,n.kt)("p",null,"The pool can also improve this algorithm or change it however they wish."),(0,n.kt)("p",null,"For example the farmer can provide their own ",(0,n.kt)("inlineCode",{parentName:"p"},"suggested_difficulty"),", and the pool can decide whether to update that farmer's difficulty. The pool should be careful to only accept the latest authentication_public_key when setting difficulty or pool payout info. The initial reference client and pool do not use the ",(0,n.kt)("inlineCode",{parentName:"p"},"suggested_difficulty"),"."),(0,n.kt)("h3",{id:"making-payments"},"Making payments"),(0,n.kt)("p",null,"Note that the payout info can be changed through ",(0,n.kt)("inlineCode",{parentName:"p"},"PUT /farmer"),". The user can choose where rewards are paid out to, and this does not have to be an XCH address. The pool should ONLY update the payout info for successful partials with the latest seen authentication key for that launcher_id."))}d.isMDXComponent=!0}}]);