"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1418],{2934:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=o(4848),i=o(8453);const r={title:"Checking Farm Health",slug:"/checking-farm-health"},s=void 0,a={id:"troubleshooting/checking-farm-health",title:"Checking Farm Health",description:'"Is my farm working?"',source:"@site/docs/troubleshooting/checking-farm-health.md",sourceDirName:"troubleshooting",slug:"/checking-farm-health",permalink:"/checking-farm-health",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/troubleshooting/checking-farm-health.md",tags:[],version:"current",frontMatter:{title:"Checking Farm Health",slug:"/checking-farm-health"},sidebar:"tutorialSidebar",previous:{title:"Check if Things are Working",permalink:"/troubleshooting/check-if-things-are-working"},next:{title:"Farming FAQ",permalink:"/farming-faq"}},l={},h=[{value:"GUI health",id:"gui-health",level:2},{value:"Farm panel",id:"farm-panel",level:3},{value:"Farm Health",id:"farm-health",level:4},{value:"Netspace",id:"netspace",level:4},{value:"Farming Rewards",id:"farming-rewards",level:4},{value:"Pooling Health",id:"pooling-health",level:4},{value:"Last Attempted Proof",id:"last-attempted-proof",level:4},{value:"Harvest panel",id:"harvest-panel",level:3},{value:"CLI Health",id:"cli-health",level:2},{value:"Check if your farm thinks it&#39;s farming",id:"check-if-your-farm-thinks-its-farming",level:3},{value:"Change the log level output",id:"change-the-log-level-output",level:3},{value:"Check if your plots are passing the filter",id:"check-if-your-plots-are-passing-the-filter",level:3},{value:"Checking for proofs",id:"checking-for-proofs",level:3},{value:"Can a Double NAT scenario impact my farm&#39;s ability to send valid proofs to the network?",id:"can-a-double-nat-scenario-impact-my-farms-ability-to-send-valid-proofs-to-the-network",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'"Is my farm working?"'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It's one of the most common questions farmers ask themselves. This is understandable -- it is possible for those with small- and medium-size farms to go weeks or months without winning a block reward, even if everything is working properly."}),"\n",(0,n.jsxs)(t.p,{children:["The easiest mitigation against this anxiety is to ",(0,n.jsx)(t.a,{href:"/pool-farming",children:"join a pool"}),". Your pool will occasionally send you partial challenges in order to estimate your farm's size. If everything is working properly, your pool will report a size for your farm that comes close to its actual size."]}),"\n",(0,n.jsx)(t.p,{children:"Beyond joining a pool, there are a few other things you can do to make sure your farm is working properly, whether you use the GUI or the CLI."}),"\n",(0,n.jsx)(t.h2,{id:"gui-health",children:"GUI health"}),"\n",(0,n.jsx)(t.p,{children:"The new Farm and Harvest panels in 2.0 make it easy to get an overview of your farm's health."}),"\n",(0,n.jsx)(t.h3,{id:"farm-panel",children:"Farm panel"}),"\n",(0,n.jsx)("div",{style:{textAlign:"left"},children:(0,n.jsx)("img",{src:"/img/farm_health/01.png",alt:"Farm panel"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Here is how to interpret each of the statistics in the above image:"}),"\n",(0,n.jsx)(t.h4,{id:"farm-health",children:"Farm Health"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sync status"})," -- Shows whether your full node is synced."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Plots passing filter"}),' -- Shows whether the "correct" number of plots are passing the ',(0,n.jsx)(t.a,{href:"/faq#what-is-the-plot-filter-and-why-didnt-my-plot-pass-it",children:"plot filter"}),". The popup, as shown in the above image, contains several stats. As long as the numbers next to ",(0,n.jsx)(t.code,{children:"Total plots passing filter"})," and ",(0,n.jsx)(t.code,{children:"Expected Total plots passing filter"})," are similar, this aspect of your farm is working properly."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Missing signage points"})," -- Chia's consensus is designed such that 64 ",(0,n.jsx)(t.a,{href:"/signage-and-infusion-points",children:"signage points"})," are broadcast every 10 minutes, or 9216 signage points per day. You are ineligible to win a block at any missed signage points. It is normal to miss a few signage points per day, for example due to a temporary outage in your local network. However, if you miss 100 or more signage points per day, there is likely something wrong. The two most common causes for this are that your harvester is overwhelmed (fix this by moving some HDDs to another harvester), or that your network is experiencing frequent outages."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Stale partials"}),' -- Your pool will send partial challenges to your node in order to estimate how much space you are contributing. If your node doesn\'t respond to a partial challenge quickly, it will be considered "stale". Just as with missing signage points, an occasional stale partial is nothing to worry about. If you experience a frequent number of stale partials, the causes and solutions tend to be the same as with missing signage points.']}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"netspace",children:"Netspace"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Netspace"})," -- This shows an estimate of the total amount of space on Chia's entire network."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Farming Space"})," -- This is hidden behind the popup dialog in the above image. It is your local node's contribution of space to the network."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"farming-rewards",children:"Farming Rewards"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Time to Win"})," -- This is only an estimation of when you will create your next block, based on the percentage of the total netspace you are contributing. You have a 50% chance of winning sooner than this, and a 50% chance of winning later. It is not uncommon for 5x this amount of time to elapse between block wins, even if your farm is set up perfectly. Also keep in mind that the probability that you will win the next block does not increase as more time elapses. The Gambler's Fallacy applies here."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated daily XCH"})," -- The formula for this is ",(0,n.jsx)(t.code,{children:"(1 day / Estimated Time to Win) * block reward"}),". If you join a pool, this is roughly how much you should receive each day. However, you need to account for pool fees, as well as the fact that 1/8 of the reward goes directly to the farmer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated monthly XCH"})," -- Same as above, but taken as a monthly estimate."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"pooling-health",children:"Pooling Health"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Valid Partials"})," -- Partial proofs your node has successfully returned to your pool, expressed as both a number and a percentage. See above for more info on partials."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Stale Partials"})," -- The percent and number of partials your node has failed to return on time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Invalid partials"})," -- The percent and number of partials your node has returned that were invalid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Missing partials"})," -- The percent and number of partials your node has failed to return."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"last-attempted-proof",children:"Last Attempted Proof"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Plots Passed Filter"})," -- At each signage point, a certain number of your plots will pass the plot filter. The numerator indicates the number of plots that are eligible to play in that specific Proof of Space lottery. For small farms, this number is often 0. The denominator indicates your farm's total number of plots."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Proofs Found"})," -- The number of valid proofs found at that signage point. If you are not in a pool, a number greater than 0 indicates that you have successfully found a proof and will likely win a block reward at the next transaction block. If you are in a pool, a number greater than 0 likely means that a valid partial proof was found and will be returned to your pool."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"harvest-panel",children:"Harvest panel"}),"\n",(0,n.jsx)("div",{style:{textAlign:"left"},children:(0,n.jsx)("img",{src:"/img/farm_health/02.png",alt:"Harvest panel"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"In the above image:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total farm size raw"})," -- The actual amount of space your farm is contributing to the network."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total farm size effective"})," -- The amount of space your farm is effectively contributing, with uncompressed (C0) plots as the baseline. For example, if your farm consists entirely of C3 plots, according to the ",(0,n.jsx)(t.a,{href:"/plotting-compression#compression-table",children:"plot compression table"}),", your farm's effective size should be 20% larger than its actual size. If you are using plots with a mixture of compression levels, the effective size of each of your plots will be taken into account in this number's calculation."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cli-health",children:"CLI Health"}),"\n",(0,n.jsx)(t.h3,{id:"check-if-your-farm-thinks-its-farming",children:"Check if your farm thinks it's farming"}),"\n",(0,n.jsx)(t.p,{children:"Before going further, please make sure whether your farm actually considers itself to be farming. There's a good chance that you might not since you are still syncing blocks."}),"\n",(0,n.jsxs)(t.p,{children:["To check the status of your farm, ",(0,n.jsx)(t.code,{children:"../activate"})," as usual and then type ",(0,n.jsx)(t.code,{children:"chia farm summary"}),". If the first line of the output looks like like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Farming status: Farming\n"})}),"\n",(0,n.jsx)(t.p,{children:"..then you know no broader errors have occurred."}),"\n",(0,n.jsx)(t.h3,{id:"change-the-log-level-output",children:"Change the log level output"}),"\n",(0,n.jsxs)(t.p,{children:["To get detailed information about how your farm operates, you need to set the log-level of your farmer to ",(0,n.jsx)(t.code,{children:"INFO"}),". For this you need to edit the Chia config under ",(0,n.jsx)(t.code,{children:"~/.chia/mainnet/config"}),". You are looking for a part of the file that looks like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"farmer:\n  logging: &id001\n    log_filename: log/debug.log\n    log_level: INFO\n    log_stdout: false\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"log_level"})," has any other value than ",(0,n.jsx)(t.code,{children:"INFO"}),", change it to ",(0,n.jsx)(t.code,{children:"INFO"})," accordingly and save the file."]}),"\n",(0,n.jsx)(t.h3,{id:"check-if-your-plots-are-passing-the-filter",children:"Check if your plots are passing the filter"}),"\n",(0,n.jsxs)(t.p,{children:["The most important metric to look out for is, whether your plots are passing the plot filter on your harvesting machines. In a usual setup, this involves checking the logs under ",(0,n.jsx)(t.code,{children:"~/.chia/mainnet/log"})," to see if at least for some rounds, plots are marked as ",(0,n.jsx)(t.strong,{children:"eligible for farming"})," by the harvester."]}),"\n",(0,n.jsxs)(t.p,{children:["Your ",(0,n.jsx)(t.code,{children:"~/.chia/mainnet/log"})," directory may look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"username@chia-farmer:~/.chia/mainnet/log$ tree\n.\n\u251c\u2500\u2500 debug.log\n\u251c\u2500\u2500 debug.log.1\n\u251c\u2500\u2500 debug.log.2\n\u251c\u2500\u2500 debug.log.3\n\u251c\u2500\u2500 debug.log.4\n\u251c\u2500\u2500 debug.log.5\n\u251c\u2500\u2500 debug.log.6\n\u2514\u2500\u2500 debug.log.7\n\n0 directories, 8 files\n"})}),"\n",(0,n.jsx)(t.p,{children:"Each log file contains log information about all the services ran by Chia. If you're running a full node, these can be convoluted. We're only interested whether or not plots pass the plot filter. We can check this, by running a command like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cat debug.log | grep "[0-9] plots were eligible for farming"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"cat"})," command is a *nix program to get content of a file. With the pipe operator ",(0,n.jsx)(t.code,{children:"|"}),'we "pipe" the output to another program called ',(0,n.jsx)(t.code,{children:"grep"})," which can filter textual input. We filter for ",(0,n.jsx)(t.code,{children:'"[0-9] plots were eligible for farming"'})," to see if we already had eligible plots."]}),"\n",(0,n.jsx)(t.p,{children:"Example output may look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"09:55:43.847 harvester src.harvester.harvester : INFO     1 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.13772 s. Total 100 plots\n09:55:52.737 harvester src.harvester.harvester : INFO     3 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.43679 s. Total 100 plots\n09:56:01.646 harvester src.harvester.harvester : INFO     2 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.14055 s. Total 100 plots\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"If you are seeing output like above here, this is already good!"})}),"\n",(0,n.jsx)(t.p,{children:"It means that plots are passing the plot filter and your farm seems to work as intended. Do this for each log file to see whether or not you had any outages or whether something went wrong."}),"\n",(0,n.jsx)(t.h3,{id:"checking-for-proofs",children:"Checking for proofs"}),"\n",(0,n.jsx)(t.p,{children:"If you have had eligible plots in the past, there's a chance that you might have already found a proof, but it didn't get accepted by the network."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Please keep in mind that finding a proof does not constitute to winning a plot (getting a payout). Even if you find a proof, it needs to compete with other proofs and win to actually receive a reward."})}),"\n",(0,n.jsx)(t.p,{children:"To check whether you have already found proofs, you can run the same command as before, but with a different filter:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cat debug.log | grep "Found [1-9] proofs"\n'})}),"\n",(0,n.jsx)(t.p,{children:"A possible result may look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"12:30:01.492 harvester src.harvester.harvester : INFO     1 plots were eligible for farming 23d3a7c90f... Found 1 proofs. Time: 0.57000 s. Total 100 plots\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you do this for all your log files and get a result, ",(0,n.jsx)(t.strong,{children:"great!"})," This means your farm is 100% working as expected. You might not have won a block yet, but you already came very close once, or a few times!"]}),"\n",(0,n.jsx)(t.h3,{id:"can-a-double-nat-scenario-impact-my-farms-ability-to-send-valid-proofs-to-the-network",children:"Can a Double NAT scenario impact my farm's ability to send valid proofs to the network?"}),"\n",(0,n.jsx)(t.p,{children:"Yes and no. Double NAT, while quirky, should work due to Chia's uPnP support. You likely won't be able to seed blocks to other nodes this way though. A \"Double NAT\" scenario occurs, when a client (harvester or node) is inside a network that is NAT'ed two times.\nIt usually involves a client being behind two routers, instead of one and looks like this:"}),"\n",(0,n.jsx)(t.p,{children:"Internet --\x3e Router --\x3e Router --\x3e Client"}),"\n",(0,n.jsx)(t.p,{children:"Certain networking setups can impact the full nodes ability to participate in farming. As long as there aren't any telling signs in the logs that farming isn't working (namely logs with ERROR, WARNING tags that are network related) its unlikely that this is the case."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);