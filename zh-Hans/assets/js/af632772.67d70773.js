"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5114],{6472:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(5893),r=s(1151);const i={slug:"/custody/prefarm-audit-tutorial",title:"Prefarm Audit Tutorial"},o=void 0,l={id:"guides/custody/prefarm-audit",title:"Prefarm Audit Tutorial",description:"Chia Network Inc's prefarm is secured by a complex set of custodial rules. This document describes how to use the custody tool to audit the prefarm configuration. A moderate level of technical proficiency is probably needed to understand the details. For a high-level overview of the prefarm custody wallets, see our blog post.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custody/prefarm-audit.md",sourceDirName:"guides/custody",slug:"/custody/prefarm-audit-tutorial",permalink:"/zh-Hans/custody/prefarm-audit-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/custody/prefarm-audit.md",tags:[],version:"current",frontMatter:{slug:"/custody/prefarm-audit-tutorial",title:"Prefarm Audit Tutorial"},sidebar:"guides",previous:{title:"Custody Tool User Guide",permalink:"/zh-Hans/guides/custody-tool-user-guide"},next:{title:"Observer Wallet Guide",permalink:"/zh-Hans/guides/observer-wallet-guide"}},c={},d=[{value:"Prefarm Audit with the Internal Custody Tool",id:"prefarm-audit-with-the-internal-custody-tool",level:2},{value:"Prefarm Audit with Block Records",id:"prefarm-audit-with-block-records",level:2},{value:"Further reading",id:"further-reading",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Chia Network Inc's prefarm is secured by a complex set of custodial rules. This document describes how to use the custody tool to audit the prefarm configuration. A moderate level of technical proficiency is probably needed to understand the details. For a high-level overview of the prefarm custody wallets, see our ",(0,t.jsx)(n.a,{href:"https://www.chia.net/2022/10/29/a-new-home-for-the-prefarm/",children:"blog post"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Other relevant documents:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{target:"_blank",href:s(1846).Z+"",children:"Flow chart"})," to visualize how the custody tool works"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/guides/custody-tool-user-guide",children:"User guide"})," to help you get up and running"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/custody-tool",children:"CLI reference"})," for all custody commands used in this tutorial"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Chia-Network/prefarm-alert",children:"Prefarm Alert Tool"})," to access the public prefarm config files"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prefarm-audit-with-the-internal-custody-tool",children:"Prefarm Audit with the Internal Custody Tool"}),"\n",(0,t.jsxs)(n.p,{children:["The following steps assume that you have installed and setup the custody tool following the ",(0,t.jsx)(n.a,{href:"/guides/custody-tool-user-guide",children:"User guide"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the prefarm configuration files from the ",(0,t.jsx)(n.a,{href:"https://github.com/Chia-Network/prefarm-alert/tree/main/singleton-metadata",children:"Prefarm Alert Tool"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Run the custody tool command ",(0,t.jsx)(n.code,{children:"cic sync -c <config-file-path>.txt -db <unique_db_path>.sqlite"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"(venv) cic sync -c .\\prefarm_configs\\cold-us-public-config.txt -db .\\sync_cold_us.sqlite\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"NOTE: This command has no result if completed successfully, but, you will see the corresponding sqlite file created."})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Show details of the associated singleton by running ",(0,t.jsx)(n.code,{children:"cic show -c -db <unique_db_path>.sqlite"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"(venv) cic show -c -db ./sync_cold_us.sqlite\n\nCurrent time: 1696970325 (10/10/2023, 13:38:45)\n\nConfig up to date: True\n\nSingleton:\n  - launcher ID: 6c77dce3c3bab525dab7883e8ad513a8f3ff127e872009b12836cbb1c8f26647\n  - amount left: 0\n  - amount to claim: 9187500100033000911\n\nOutstanding events:\n  PAYMENTS:\n  REKEYS:\n\nConfig:\n - current root: 9ab73274c5ca6cd0250b7b6b0352ad3190593bdb8f312d8aff3636c95208b0fb\n - withdrawal timelock: 2592000 seconds\n - payment clawback period: 7776000 seconds\n - rekey cancellation period: 5184000 seconds\n - rekey penalty: 1296000 seconds\n - slow rekey timelock: 3888000 seconds\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This command shows the singleton launcher ID and the parameters associated with this specific prefarm wallet configuration (withdrawal, clawback, and cancellation periods)."})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Show the singleton p2 address by running ",(0,t.jsx)(n.code,{children:"cic p2_address -db <unique_db_path>.sqlite"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cic p2_address -db .\\sync_cold_us.sqlite\n\nxch1jj0gm4ahhlu3ke0r0fx955v8axr6za7rzz6hc0y26lewa7zw6fws5nwvv6\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"prefarm-audit-with-block-records",children:"Prefarm Audit with Block Records"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["NOTE: A high level of technical proficiency is needed to understand the details of this manual process for what the cic tool does above. This process is a high-level guide and does not display expected results for each step. The ",(0,t.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-dev-tools#install",children:"chia-dev-tools"})," are needed for this audit."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use the internal custody tool to reveal the current root and other curried parameters (steps 1-4 above)."}),"\n",(0,t.jsxs)(n.li,{children:["Curry the necessary parameters into the prefarm_inner.clsp ",(0,t.jsx)(n.code,{children:"(THIS_MOD_HASH, ROOT, STATE)"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"THIS_MOD_HASH"})," = this code's sha256 tree hash without its curried arguments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ROOT"})," = the current root provided by the internal custody tool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"STATE"})," = a tree with the following elements in order ",(0,t.jsx)(n.code,{children:"((REKEY_MOD_HASH . ACH_MOD_HASH) . (ACH_TIMELOCK . (BASE_REKEY_TIMELOCK . SLOW_REKEY_PENALTY)))"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"REKEY_MOD_HASH"})," = rekey puzzle sha256 tree hash without its curried arguments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ACH_MOD_HASH"})," = ach puzzle sha256 tree hash without its curried arguments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ACH_TIMELOCK"})," = integer of the ach timelock also referred to as the Withdrawal Timelock."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BASE_REKEY_TIMELOCK"})," = integer of the rekey timelock."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SLOW_REKEY_PENALTY"})," = integer of the slow rekey penalty."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Curry the necessary parameters into singleton_top_layer_v1_1.clsp ",(0,t.jsx)(n.code,{children:"(SINGLETON_STRUCT INNER_PUZZLE)"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SINGLETON_STRUCT"})," = a tree with the following elements in order ",(0,t.jsx)(n.code,{children:"(MOD_HASH . (LAUNCHER_ID . LAUNCHER_PUZZLE_HASH))"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MOD_HASH"})," = singleton_top_layer puzzle sha256 tree hash without its curried arguments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LAUNCHER_ID"})," = the ID of the singleton we are committed to paying."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LAUNCHER_PUZZLE_HASH"})," = the puzzle hash of the launcher."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"INNER_PUZZLE"})," = the compiled form of the inner puzzle (result of the previous curry)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Derive the puzzle hash from the compiled form of the singleton."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"opc -H <compiled_puzzle>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Convert the puzzle hash into the singleton p2 puzzle by currying the necessary parameters ",(0,t.jsx)(n.code,{children:"(SINGLETON_MOD_HASH, LAUNCHER_ID, LAUNCHER_PUZZLE_HASH)"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SINGLETON_MOD_HASH"})," - singleton_top_layer puzzle sha256 tree hash without its curried arguments ."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LAUNCHER_ID"})," - the ID of the singleton we are committed to paying."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LAUNCHER_PUZZLE_HASH"})," - the puzzle hash of the launcher."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Encode the singleton p2 puzzle to reveal the p2 address."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cdv encode -p xch <singleton_p2_puzzle>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"NOTE: This is the address used when sending funds to the vault."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.chia.net/2022/10/29/a-new-home-for-the-prefarm/",children:"A New Home for the Prefarm blog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.chia.net/2023/01/17/cypherpunks-in-sportcoats-chias-custody-is-a-killer-app/",children:"Cypherpunks in Sportcoats: Blockchain in the Real World"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1846:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/files/chia-custody-tool-5e6e2f18e8f98c0faaf11bdf5fea5971.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);