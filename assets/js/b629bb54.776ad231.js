"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9839],{9743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started/testnets","title":"Testnets","description":"testnet11 is the only supported testnet. Older testnets may remain active, but Chia Network Inc. longer officially supports them.","source":"@site/docs/getting-started/testnets.md","sourceDirName":"getting-started","slug":"/testnets","permalink":"/testnets","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/testnets.md","tags":[],"version":"current","frontMatter":{"title":"Testnets","slug":"/testnets"},"sidebar":"tutorialSidebar","previous":{"title":"Advanced Installation","permalink":"/installation"},"next":{"title":"Timelords","permalink":"/timelord-install"}}');var s=n(4848),a=n(8453);const o={title:"Testnets",slug:"/testnets"},r=void 0,l={},c=[{value:"Join the official testnet",id:"join-the-official-testnet",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure Chia for testnet",id:"configure-chia-for-testnet",level:3},{value:"Download the official testnet database (optional)",id:"download-the-official-testnet-database-optional",level:3},{value:"Start your node and connect to peers",id:"start-your-node-and-connect-to-peers",level:3},{value:"Fund a testnet wallet (optional)",id:"fund-a-testnet-wallet-optional",level:3},{value:"Dual farming mainnet and testnet",id:"dual-farming-mainnet-and-testnet",level:2},{value:"Set Up mainnet installation",id:"set-up-mainnet-installation",level:3},{value:"Set Up testnet installation",id:"set-up-testnet-installation",level:3},{value:"Swap between mainnet and testnet",id:"swap-between-mainnet-and-testnet",level:3},{value:"Create a local testnet for fast, private testing",id:"create-a-local-testnet-for-fast-private-testing",level:2},{value:"Testnet support",id:"testnet-support",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"testnet11 is the only supported testnet."})," Older testnets may remain active, but Chia Network Inc. longer officially supports them."]}),(0,s.jsxs)(t.p,{children:["Testnets can be used to test the chia software with coins that have no real world value.",(0,s.jsx)(t.br,{}),"\n","If you want to run the Chia blockchain mainnet, use the ",(0,s.jsx)(t.a,{href:"/installation",children:"mainnet installation"})," instructions."]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"join-the-official-testnet",children:"Join the official testnet"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Minimum Chia version is 2.1.0 ",(0,s.jsx)(t.a,{href:"/installation",children:"installed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["All chia processes have been stopped with ",(0,s.jsx)(t.code,{children:"chia stop all-d"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"configure-chia-for-testnet",children:"Configure Chia for testnet"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Initialize chia\nchia init\n\n# Generate keys (if they have not already been generated)\nchia keys generate\n\n# Configure Chia for the currently-active testnet\nchia configure --testnet true\n"})}),"\n",(0,s.jsx)(t.h3,{id:"download-the-official-testnet-database-optional",children:"Download the official testnet database (optional)"}),"\n",(0,s.jsx)(t.p,{children:"This step is optional, but it will speed up syncing with the testnet."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Linux users: ",(0,s.jsx)(t.code,{children:"wget https://databases.chia.net/file/chia-public-databases/blockchain_v2_testnet11.sqlite.gz"})," while in the directory (a v1 db is not available for testnet11)."]}),"\n",(0,s.jsxs)(t.li,{children:["Windows users: download it from ",(0,s.jsx)(t.a,{href:"https://downloads.chia.net/testnet11/",children:"https://downloads.chia.net/testnet11/"})," and move it to the db folder in the mainnet/ directory in the Chia root folder (i.e. ",(0,s.jsx)(t.code,{children:"~/.chia/mainnet/db"})," is the database directory)."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Make sure to unzip the database before continuing to the next step."})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Prior to starting your node, it is recommended to delete ",(0,s.jsx)(t.code,{children:"peers.dat"}),", located in ",(0,s.jsx)(t.code,{children:"~/.chia/mainnet/db"}),". If you don't delete this file you might see ",(0,s.jsx)(t.code,{children:"WARNING  Invalid handshake with peer"})," in your log file. The reason for this is that peers.dat will contain mainnet peers, which are not running on the testnet. If you do see these warnings, there's no requirement to take further action -- they'll eventually stop appearing as your invalid peers are replaced with valid ones."]})}),"\n",(0,s.jsx)(t.h3,{id:"start-your-node-and-connect-to-peers",children:"Start your node and connect to peers"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Note - make sure to delete the peers.dat file in ~/.chia/mainnet/db prior to starting your node\n# Start your node\nchia start farmer\n\n# Check sync status\nchia show -s`\n\n# Once the node is synced, you can check the wallet status\nchia wallet show\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fund-a-testnet-wallet-optional",children:"Fund a testnet wallet (optional)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Get a testnet wallet address differentiated from mainnet wallet addresses by beginning with txch instead of xch\nchia wallet get_address\n"})}),"\n",(0,s.jsx)(t.p,{children:"Input your testnet wallet address into one of the faucets. If it says you are in the queue, it has worked."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Chia Official ",(0,s.jsx)(t.a,{href:"https://testnet11-faucet.chia.net/",children:"testnet faucet"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Community developed and managed ",(0,s.jsx)(t.a,{href:"https://txchfaucet.com/",children:"testnet faucet"}),". ",(0,s.jsx)(t.em,{children:"Thank you to Steve Stepp for building and managing this faucet!"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Funds will not appear in your wallet until you are fully synced to the blockchain."})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"dual-farming-mainnet-and-testnet",children:"Dual farming mainnet and testnet"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"These instructions are tailored for Linux. A similar approach could likely be followed for MacOS."})}),"\n",(0,s.jsx)(t.p,{children:"In some cases, you may want to farm the same plots you farm on mainnet on one of the testnets as well, without removing them from mainnet. This is doable with a bit of extra legwork to set up unique ports for the testnet chia installation."}),"\n",(0,s.jsx)(t.p,{children:"There are a couple options for setting this up. You can either ensure you have the CHIA_ROOT set to unique values for each instance you want to run, or else run the installations on separate users. These instructions will show setting a specific CHIA_ROOT."}),"\n",(0,s.jsx)(t.h3,{id:"set-up-mainnet-installation",children:"Set Up mainnet installation"}),"\n",(0,s.jsxs)(t.p,{children:["For the mainnet installation, we will stick with the default ports and CHIA_ROOT, so these steps are essentially no different than the standard ",(0,s.jsx)(t.a,{href:"/installation",children:"installation instructions"})]}),"\n",(0,s.jsx)(t.h3,{id:"set-up-testnet-installation",children:"Set Up testnet installation"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["(Optional) Install ",(0,s.jsx)(t.code,{children:"yq"})," to make editing the yaml files easier ",(0,s.jsx)(t.a,{href:"https://github.com/mikefarah/yq#install",children:"https://github.com/mikefarah/yq#install"}),".",(0,s.jsx)(t.br,{}),"\n","Alternatively, you can manually edit the ports in ",(0,s.jsx)(t.code,{children:"config.yaml"}),"."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Export the Chia root\nexport CHIA_ROOT=~/.chia/testnet\n\n# Initialize testnet\nchia init\n\n# Configure Chia for the currently-active testnet\nchia configure --testnet true\n\n# Edit the file `~/.chia/testnet/config/config.yaml` and set the following fields to the new port values.\n# Use the ports listed or choose any you desire as long as they are different than the default values for mainnet.\n\nyq -i -y '.daemon_port = 55401' ~/.chia/testnet/config/config.yaml\nyq -i -y '.ui.daemon_port = 55401' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.ui.port = 8802' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.farmer.port = 8547' ~/.chia/testnet/config/config.yaml\nyq -i -y '.full_node.farmer_peer.port = 8547' ~/.chia/testnet/config/config.yaml\nyq -i -y '.harvester.farmer_peer.port = 8547' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.harvester.port = 8548' ~/.chia/testnet/config/config.yaml\nyq -i -y '.farmer.harvester_peer.port = 8548' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.wallet.port = 8649' ~/.chia/testnet/config/config.yaml\nyq -i -y '.full_node.wallet_peer.port = 8649' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.full_node.rpc_port = 8800' ~/.chia/testnet/config/config.yaml\nyq -i -y '.ui.rpc_port = 8800' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.farmer.rpc_port = 8571' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.harvester.rpc_port = 8572' ~/.chia/testnet/config/config.yaml\n\nyq -i -y '.wallet.rpc_port = 9456' ~/.chia/testnet/config/config.yaml\n\n# Start Chia\nchia start farmer\n"})}),"\n",(0,s.jsx)(t.h3,{id:"swap-between-mainnet-and-testnet",children:"Swap between mainnet and testnet"}),"\n",(0,s.jsxs)(t.p,{children:["To swap between running commands for mainnet and running commands for testnet, you need to ensure your ",(0,s.jsx)(t.code,{children:"CHIA_ROOT"})," is set properly before running any commands"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Mainnet: ",(0,s.jsx)(t.code,{children:"export CHIA_ROOT=~/.chia/mainnet"})]}),"\n",(0,s.jsxs)(t.li,{children:["Testnet: ",(0,s.jsx)(t.code,{children:"export CHIA_ROOT=~/.chia/testnet"})]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"create-a-local-testnet-for-fast-private-testing",children:"Create a local testnet for fast, private testing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"These instructions are tailored for Linux. A similar approach could likely be followed for MacOS."})}),"\n",(0,s.jsxs)(t.ol,{start:"0",children:["\n",(0,s.jsxs)(t.li,{children:["Stop all chia processes. Check that they have stopped with ",(0,s.jsx)(t.code,{children:"ps -ef | grep chia"})]}),"\n",(0,s.jsxs)(t.li,{children:["Create a new chia root using ",(0,s.jsx)(t.code,{children:'export CHIA_ROOT="~/.chia/my_testnet"'}),", then ",(0,s.jsx)(t.code,{children:"chia init"}),". Don't forget to export CHIA_ROOT, or prefix your chia commands with ",(0,s.jsx)(t.code,{children:'CHIA_ROOT="~/.chia/my_testnet"'})," if you want to run on my_testnet when starting a new terminal."]}),"\n",(0,s.jsxs)(t.li,{children:["Create a new entry in config.yaml with a different ",(0,s.jsx)(t.a,{href:"https://docs.chia.net/consensus-challenges/#genesis-challenge",children:"GENESIS_CHALLENGE"}),", and reduced ",(0,s.jsx)(t.code,{children:"DIFFICULTY_CONSTANT_FACTOR"}),". ",(0,s.jsx)(t.code,{children:"2^67"})," constant factor is around 110PiB assuming a fast timelord. So if you have around 110GiB, you can set it to ",(0,s.jsx)(t.code,{children:"2 ^ 47"}),". Decrease ",(0,s.jsx)(t.code,{children:"SUB_SLOT_ITERS_STARTING"})," to something like ",(0,s.jsx)(t.code,{children:"2^23"})," if you are using a slow computer. Decrease ",(0,s.jsx)(t.code,{children:"PLOT_FILTER"})," if you want to have more proof checks per signage point."]}),"\n",(0,s.jsxs)(t.li,{children:["Make sure to add ",(0,s.jsx)(t.strong,{children:"my_testnet"})," to all places that need it, like ",(0,s.jsx)(t.code,{children:"network_overrides.config"}),", and ",(0,s.jsx)(t.code,{children:"selected_network"})]}),"\n",(0,s.jsx)(t.li,{children:"Change the introducer URLs to point to localhost so you don't contact the real ones"}),"\n",(0,s.jsxs)(t.li,{children:["Do ",(0,s.jsx)(t.code,{children:"sh install-timelord.sh"})]}),"\n",(0,s.jsxs)(t.li,{children:["Run the system with ",(0,s.jsx)(t.code,{children:"chia start all"})]}),"\n",(0,s.jsxs)(t.li,{children:["If you have installed the gui, run ",(0,s.jsx)(t.code,{children:"(cd chia-blockchain-gui && npm run electron &)"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can generate a new genesis challenge by running python, and entering the following commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from secrets import token_bytes\nprint(token_bytes().hex())\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"testnet-support",children:"Testnet support"}),"\n",(0,s.jsxs)(t.p,{children:["Join Our ",(0,s.jsx)(t.a,{href:"https://discord.gg/chia",children:"Discord"})," and jump into the #testnet channel for support"]}),"\n",(0,s.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);