"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8330],{8033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=t(5893),r=t(1151),s=t(4866),a=t(5162);const o={title:"Timelords",slug:"/timelord-install"},l=void 0,d={id:"getting-started/timelords",title:"Timelords",description:"DO NOT overclock ASICs, overclocking diminishes the life of the ASIC!",source:"@site/docs/getting-started/timelords.md",sourceDirName:"getting-started",slug:"/timelord-install",permalink:"/timelord-install",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/timelords.md",tags:[],version:"current",frontMatter:{title:"Timelords",slug:"/timelord-install"},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/testnets"},next:{title:"Basics",permalink:"/plotting-basics"}},c={},h=[{value:"Timelord Requirements and Dependencies",id:"timelord-requirements-and-dependencies",level:2},{value:"Installing a Timelord",id:"installing-a-timelord",level:2},{value:"ASIC Cluster Setup",id:"asic-cluster-setup",level:4},{value:"Installing a Timelord from Source",id:"installing-a-timelord-from-source",level:3},{value:"ASIC Timelord Systemd Setup",id:"asic-timelord-systemd-setup",level:2},{value:"Example ASIC systemd File",id:"example-asic-systemd-file",level:3},{value:"Using the systemd Service",id:"using-the-systemd-service",level:3},{value:"Troubleshooting a Timelord",id:"troubleshooting-a-timelord",level:2},{value:"Timelord support",id:"timelord-support",level:2},{value:"Timelord FAQ",id:"timelord-faq",level:2},{value:"What are the hardware requirements for running a Timelord?",id:"what-are-the-hardware-requirements-for-running-a-timelord",level:3},{value:"Can a Single ASIC Compete with an ASIC Cluster?",id:"can-a-single-asic-compete-with-an-asic-cluster",level:3},{value:"Can I Overclock the ASIC to Get More Performance or Higher IPS?",id:"can-i-overclock-the-asic-to-get-more-performance-or-higher-ips",level:3},{value:"What Voltage Should I Use for an ASIC Timelord?",id:"what-voltage-should-i-use-for-an-asic-timelord",level:3},{value:"What OS is Compatible with Running a Timelord?",id:"what-os-is-compatible-with-running-a-timelord",level:3},{value:"What System Resources are most Important for an ASIC?",id:"what-system-resources-are-most-important-for-an-asic",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DO NOT"})," overclock ASICs, overclocking diminishes the life of the ASIC!"]})}),"\n",(0,i.jsxs)(n.p,{children:["Timelord architecture information can be found ",(0,i.jsx)(n.a,{href:"/timelord-architecture",children:"here"}),".",(0,i.jsx)(n.br,{}),"\n","The hw_vdf_client parameter information can be found ",(0,i.jsx)(n.a,{href:"/asic-cli",children:"here"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"timelord-requirements-and-dependencies",children:"Timelord Requirements and Dependencies"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Due to restrictions on how\xa0",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B",children:"MSVC"}),"\xa0handles 128 bit numbers and how Python relies upon MSVC, it is not possible to build and run Timelords of all types on Windows.",(0,i.jsx)(n.br,{}),"\n","Running a timelord on a farming machine will reduce the efficiency of the farmer and the timelord, for this reason it is recommended to have a dedicated machine for running timelords."]})}),"\n",(0,i.jsx)(n.p,{children:"Requirements:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Software Timelord","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With the release of ASIC timelords, software timelords will have a near impossible time competing. It is recommended to only run a software timelord for experimentation and learning purposes."}),"\n",(0,i.jsx)(n.li,{children:"Dedicated host machine that is a modern gaming PC with minimum 6 fast cores and 8GB of RAM."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Bluebox Timelord","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dedicated host machine that is a modern gaming PC with minimum 6 fast cores and 8GB of RAM."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ASIC Timelord","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ASIC hardware"}),"\n",(0,i.jsx)(n.li,{children:"Dedicated host machine that is a modern gaming PC with minimum 6 fast cores and 8GB of RAM."}),"\n",(0,i.jsx)(n.li,{children:"Two USB-C cables (one for power and one for data). Preferably USB-C to USB-C but we have successfully tested USB-A to USB-C without too much performance loss."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Dependencies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"linux OS, our testing has been with Ubuntu 22 and newer"}),"\n",(0,i.jsx)(n.li,{children:"git (if installing from source)"}),"\n",(0,i.jsx)(n.li,{children:"ca-certificates curl gnupg (if installing from APT or if running an ASIC - RECOMMENDED)"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-timelord",children:"Installing a Timelord"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Timelords execute sequential verifiable delay functions (proofs of time or VDFs), that get added to blocks to make them valid. This requires fast CPUs and a few cores per VDF."})}),"\n",(0,i.jsxs)(s.Z,{defaultValue:"sw-tl",groupId:"timelord",values:[{label:"Software TL",value:"sw-tl"},{label:"Bluebox TL",value:"bb-tl"},{label:"Hardware (ASIC) TL",value:"hw-tl"}],children:[(0,i.jsxs)(a.Z,{value:"sw-tl",children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"chia-blockchain-cli"})," instead of ",(0,i.jsx)(n.code,{children:"chia-blockchain"})," for CLI only version that does not have a GUI."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Install packages\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\n\n# Add GPG key\ncurl -sL https://repo.chia.net/FD39E6D3.pubkey.asc | sudo gpg --dearmor -o /usr/share/keyrings/chia.gpg\n\n# Set up repository\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/debian/ stable main" | sudo tee /etc/apt/sources.list.d/chia.list > /dev/null\nsudo apt-get update\n\n# Install chia-blockchain\nsudo apt-get install chia-blockchain\n\n# Launch timelord\nchia start node timelord &\n'})})]}),(0,i.jsx)(a.Z,{value:"bb-tl",children:(0,i.jsxs)(n.p,{children:["The bluebox timelord must be installed from scratch following the instructions ",(0,i.jsx)(n.a,{href:"/timelord-install#installing-a-timelord-from-source",children:"here"}),"."]})}),(0,i.jsxs)(a.Z,{value:"hw-tl",children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DO NOT"})," overclock ASICs, overclocking diminishes the life of the ASIC!",(0,i.jsx)(n.br,{}),"\n","Detailed information about the hw_vdf_client parameters can be found ",(0,i.jsx)(n.a,{href:"/asic-cli",children:"here"}),"."]})}),(0,i.jsx)(n.h4,{id:"asic-cluster-setup",children:"ASIC Cluster Setup"}),(0,i.jsx)(n.p,{children:"It is recommended to use three host machines for ASIC clusters in a setup similar to:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"                                                  _____ ASIC 2 (ASIC software only, IP set to main machine)\n                                                 /\nMain Machine (ASIC 1)  --------------------------\n(chia node, timelord-only, and ASIC software)    \\_____  ASIC 3 (ASIC software only, IP set to main machine)\n"})}),(0,i.jsxs)(n.p,{children:["For an ASIC cluster you will need to follow the below install steps on the main machine to include the chia node, timelord-only, and ASIC software processes are all being run on the main machine.",(0,i.jsx)(n.br,{}),"\n","The additional ASIC hosts will only need the ASIC software installed (noted in the below install instructions)."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Install packages\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\n\n# Add GPG key\ncurl -sL https://repo.chia.net/FD39E6D3.pubkey.asc | sudo gpg --dearmor -o /usr/share/keyrings/chia.gpg\n\n# Set up repositories (first is for chia and second is for the hw vdf repo, for clusters the chia software is only needed on the main machine all other hosts need the hw vdf repo)\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/debian/ stable main" | sudo tee /etc/apt/sources.list.d/chia.list > /dev/null\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/chiavdf-hw/debian/ stable main" | sudo tee /etc/apt/sources.list.d/chiavdf-hw.list > /dev/null\nsudo apt-get update\n\n# Install chia-blockchain and ASIC repos (for clusters the chia software is only needed on the main machine all other hosts need the hw vdf repo)\nsudo apt-get install chia-blockchain\nsudo apt-get install chiavdf-hw\n\n# Launch the ASIC timelord services (for clusters verify the IP address is correct and launch with only 1 VDF for each)\nhw_vdf_client --ip 127.0.0.1 8000 3\n\n# Launch timelord services in chia (for clusters only the main machine should be running the node and timelord services)\nchia start node timelord-only\n'})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"installing-a-timelord-from-source",children:"Installing a Timelord from Source"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["On MacOS x86_64 and all Linux distributions, building a Timelord is as easy as running ",(0,i.jsx)(n.code,{children:"chia start timelord &"})," in the virtual environment. You can also run ",(0,i.jsx)(n.code,{children:"./vdf_bench square_asm 400000"})," once you've built Timelord to give you a sense of your optimal and unloaded ips. Each run of ",(0,i.jsx)(n.code,{children:"vdf_bench"}),' can be surprisingly variable and, in production, the actual ips you will obtain will usually be about 20% lower due to load of creating proofs. The default configuration for Timelords is good enough to just let you start it up. Set your log level to INFO and then grep for "Estimated IPS:" to get a sense of what actual ips your Timelord is achieving.',(0,i.jsx)(n.br,{}),"\n","Detailed information about the hw_vdf_client parameters can be found ",(0,i.jsx)(n.a,{href:"/asic-cli",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Download chia-blockchain (for clusters the chia software is only needed on the main machine all other hosts need the hw vdf repo)\ngit clone https://github.com/Chia-Network/chia-blockchain -b latest --recurse-submodules\n\n# Change directory\ncd chia-blockchain\n\n# Install dependencies\nsh install.sh\n\n# Activate virtual environment\n. ./activate\n\n# Initialize\nchia init\n. ./activate\n\n# Install timelord\nsh install-timelord.sh\n\n# Start timelord (skip this step and proceed below if installing a bluebox or ASIC timelord)\nchia start node timelord\n\n# Bluebox timelord setup\nOnce you build the Timelord with `sh install-timelord.sh` in the virtual environment, you will need to make some changes to `~/.chia/VERSION/config.yaml`.\n- In the `timelord:` section, set `bluebox_mode:` to `True`.\n(Note: It is possible to run a bluebox timelord on a separate machine from your full node. If you wish to run them separately, make the change listed below on your full node machine.)\n- In the `full_node:` section and set `send_uncompact_interval:` to something greater than 0. We recommend `300` seconds there so that your Bluebox has some time to prove through a lot of the un-compacted Proofs of Time before the node drops more into its lap.\n\n# Additional config.yaml change ONLY for running a bluebox timelord on a separate machine from full node\n- In the config.yaml of your bluebox timelord, go to the 'timelord:' section under 'full_node_peers' and, modify the 'host' value from 'localhost' to the local IP of your full node (i.e. 192.168.1.3)\n\n## Start the daemon, timelord-launcher, timelord, and node for a Bluebox timelord + full node running on the same device\nchia start node timelord\n\n## Start the daemon, timelord-launcher, and timelord for a Bluebox timelord connecting to a separate full node\nchia start timelord-launcher-only timelord-only\n\nNote - The default settings may otherwise work but if the total effort is a little too much for whatever machine you are on you can also lower the `process_count:` from 3 to 2, or even 1, in the `timelord_launcher:` section. You know it is working if you see `VDF Client: Sent proof` in your logs at INFO level.\n\n# ASIC timelord setup: install the timelord repo, run the timelord-only chia service, and run the ASIC software\n## Install packages\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\n\n## Add GPG key\ncurl -sL https://repo.chia.net/FD39E6D3.pubkey.asc | sudo gpg --dearmor -o /usr/share/keyrings/chia.gpg\n\n## Set up hw vdf repository (for clusters the chia software is only needed on the main machine all other hosts need the hw vdf repo)\necho \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/chiavdf-hw/debian/ stable main\" | sudo tee /etc/apt/sources.list.d/chiavdf-hw.list > /dev/null\nsudo apt-get update\n\n## Install ASIC repo\nsudo apt-get install chiavdf-hw\n\n# Launch the ASIC timelord services (for clusters verify the IP address is correct and launch with only 1 VDF for each)\nhw_vdf_client --ip 127.0.0.1 8000 3\n\n## Launch the timelord-only chia service (for clusters only the main machine should be running the node and timelord services)\nchia start node timelord-only\n\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"asic-timelord-systemd-setup",children:"ASIC Timelord Systemd Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Below is an example of a systemd service file to run the ASIC hw vdf processes.",(0,i.jsx)(n.br,{}),"\n","NOTE - make sure to replace ",(0,i.jsx)(n.code,{children:"USERNAME"})," with your system's username."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Create systemd service\nsudo nano /etc/systemd/system/chiahw-vdf.service\n\n# Copy the data from below replacing USERNAME with your system's username\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-asic-systemd-file",children:"Example ASIC systemd File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[Unit]\nDescription=Chia HW VDF Service\n\n[Service]\nType=simple\nExecStart=/usr/bin/hw_vdf_client --ip 127.0.0.1 8000 3\nUser=USERNAME\nGroup=USERNAME\nLimitNOFILE=1048576\nLimitNPROC=1048576\nLimitCORE=infinity\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Save and start the systemd service\nCTRL+O # save the file\nCTRL-X # exit the nano editor\n\n# Reload and start the systemd services\nsudo systemctl daemon-reload\nsudo systemctl enable chiahw-vdf.service\nsudo systemctl start chiahw-vdf.service\nsudo systemctl status chiahw-vdf.service\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-the-systemd-service",children:"Using the systemd Service"}),"\n",(0,i.jsxs)(n.p,{children:["Restart the ASIC systemd software:\n",(0,i.jsx)(n.code,{children:"sudo systemctl restart chiahw-vdf.service"})]}),"\n",(0,i.jsxs)(n.p,{children:["Stop the ASIC systemd software:\n",(0,i.jsx)(n.code,{children:"sudo systemctl stop chiahw-vdf.service"})]}),"\n",(0,i.jsxs)(n.p,{children:["Check status of the ASIC systemd software:\n",(0,i.jsx)(n.code,{children:"sudo systemctl status chiahw-vdf.service"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting-a-timelord",children:"Troubleshooting a Timelord"}),"\n",(0,i.jsxs)(n.p,{children:["For troubleshooting steps please refer to the documentation ",(0,i.jsx)(n.a,{href:"/troubleshooting/timelords",children:"here"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"timelord-support",children:"Timelord support"}),"\n",(0,i.jsxs)(n.p,{children:["Join Our ",(0,i.jsx)(n.a,{href:"https://discord.gg/chia",children:"Discord"})," and jump into the #support channel for support"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"timelord-faq",children:"Timelord FAQ"}),"\n",(0,i.jsx)(n.h3,{id:"what-are-the-hardware-requirements-for-running-a-timelord",children:"What are the hardware requirements for running a Timelord?"}),"\n",(0,i.jsx)(n.p,{children:"There are no specific requirements as timelords are a fastest wins process. This means that those with higher end hardware are more likely to generate Proofs of Time than those with lower end hardware.\nCurrently, a modern gaming PC with 8 cores and 8 GB of RAM is recommended when running an ASIC or Bluebox timelord. With the release of ASIC timelords, software timelords will have a near impossible time competing. It is recommended to only run a software timelord for experimentation and learning purposes."}),"\n",(0,i.jsx)(n.h3,{id:"can-a-single-asic-compete-with-an-asic-cluster",children:"Can a Single ASIC Compete with an ASIC Cluster?"}),"\n",(0,i.jsx)(n.p,{children:"The nature of timelords is to create three VDF chains, one can create the chains themselves in parallel (i.e. one on each ASIC) but one cannot break down the VDFs themselves to parallelize them.\nThis means that the ASIC cluster will always have an advantage but there are times when a single ASIC can reasonably compete. This almost always requires the block farming node to be closer in physical proximity to the single ASIC than to the ASIC cluster establishing a minor time advantage for the single ASIC"}),"\n",(0,i.jsx)(n.h3,{id:"can-i-overclock-the-asic-to-get-more-performance-or-higher-ips",children:"Can I Overclock the ASIC to Get More Performance or Higher IPS?"}),"\n",(0,i.jsx)(n.p,{children:"While one can overclock the ASIC we very strongly recommend against doing such. Overclocking the ASICs will lead to diminishing longevity of the machine and only provides a minor increase in performance making it inefficient to overclock an ASIC."}),"\n",(0,i.jsx)(n.h3,{id:"what-voltage-should-i-use-for-an-asic-timelord",children:"What Voltage Should I Use for an ASIC Timelord?"}),"\n",(0,i.jsxs)(n.p,{children:["It is highly recommend to use the default ",(0,i.jsx)(n.code,{children:"0.88"})," voltage."]}),"\n",(0,i.jsx)(n.h3,{id:"what-os-is-compatible-with-running-a-timelord",children:"What OS is Compatible with Running a Timelord?"}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to use a linux OS to run timelords as these are the most performant.\nIf running on a MAC, one can compile the chia repo from source and run the timelord services but this is currently only compatible with Intel chips and not compatible with the silicon chip.\nWindows is not recommended, due to restrictions on how\xa0",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B",children:"MSVC"}),"\xa0handles 128 bit numbers and how Python relies upon MSVC, it is not possible to build and run Timelords of all types on Windows."]}),"\n",(0,i.jsx)(n.h3,{id:"what-system-resources-are-most-important-for-an-asic",children:"What System Resources are most Important for an ASIC?"}),"\n",(0,i.jsx)(n.p,{children:"The single thread speed is one of the most important factors for having a faster ASIC."}),"\n",(0,i.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var i=t(512);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var i=t(7294),r=t(512),s=t(2466),a=t(6550),o=t(469),l=t(1980),d=t(7392),c=t(812);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,h]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=d??f;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function w(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(d(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function j(e){const n=(0,g.Z)();return(0,v.jsx)(x,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);