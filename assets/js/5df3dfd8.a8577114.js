"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,d=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Farming on Many Machines",slug:"/farming-on-many-machines"},o=void 0,s={unversionedId:"farming/farming-many-machines",id:"farming/farming-many-machines",title:"Farming on Many Machines",description:"Another title for this:",source:"@site/docs/farming/farming-many-machines.md",sourceDirName:"farming",slug:"/farming-on-many-machines",permalink:"/farming-on-many-machines",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/farming/farming-many-machines.md",tags:[],version:"current",frontMatter:{title:"Farming on Many Machines",slug:"/farming-on-many-machines"},sidebar:"tutorialSidebar",previous:{title:"Farming Basics",permalink:"/farming-basics"},next:{title:"Pool Farming",permalink:"/pool-farming"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Steps",id:"setup-steps",level:2},{value:"Farming On Multiple Machines",id:"farming-on-multiple-machines",level:2},{value:"Plotting On Multiple Machines",id:"plotting-on-multiple-machines",level:3},{value:"Harvesting On Multiple Machines",id:"harvesting-on-multiple-machines",level:3},{value:"How to Find Your Keys",id:"how-to-find-your-keys",level:2},{value:"Using CLI",id:"using-cli",level:3},{value:"Using the GUI",id:"using-the-gui",level:3}],m={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Another title for this:"),(0,r.kt)("h1",{id:"how-to-harvest-on-other-machines-that-are-not-your-main-machine"},"How to harvest on other machines that are not your main machine"),(0,r.kt)("p",null,"This guide allows you to run a harvester on each machine, without having to run a full node, wallet, and farmer on each one. This keeps your system simpler, uses less bandwidth, space, CPU, and also keeps your keys safer. It also makes your overall farm quicker and more efficient when replying to challenges."),(0,r.kt)("p",null,"The architecture is composed of one main machine which runs the farmer, full node, and wallet, and other machines which run only the harvester. Only your main machine will connect to the Chia network."),(0,r.kt)("p",null,"To secure communication between your harvester and ",(0,r.kt)("strong",{parentName:"p"},"main")," machine, TLS is used where your ",(0,r.kt)("strong",{parentName:"p"},"main")," machine will be the private Certification Authority (CA) that signs all certificates. Each harvester must have its own signed certificate to properly communicate with your ",(0,r.kt)("strong",{parentName:"p"},"main")," machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                       _____  Harvester 1 (certificate A)\n                                      /\nother network peers  --------   Main machine (CA) ------  Harvester 2 (certificate B)\n                                      \\_____  Harvester 3 (certificate C)\n")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, make sure Chia is installed on all machines and initialized by running the CLI ",(0,r.kt)("inlineCode",{parentName:"li"},"chia init"),"."),(0,r.kt)("li",{parentName:"ul"},"When creating plots on the other harvesters, use ",(0,r.kt)("inlineCode",{parentName:"li"},"chia plots create -f farmer_key -p pool_key"),", inserting the farmer and pool keys from your main machine. Alternatively, you could copy your private keys over by using ",(0,r.kt)("inlineCode",{parentName:"li"},"chia keys add"),", but this is less secure. After creating a plot, run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia plots check")," to ensure everything is working correctly."),(0,r.kt)("li",{parentName:"ul"},"Make a copy of your ",(0,r.kt)("strong",{parentName:"li"},"main")," machine CA directory located in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/config/ssl/ca")," to be accessible by your harvester machines; you can share the ",(0,r.kt)("inlineCode",{parentName:"li"},"ssl/ca")," directory on a network drive, USB key, or do a network copy to each harvester. Be aware that major updates might need you to copy the new ",(0,r.kt)("inlineCode",{parentName:"li"},"ca")," contents. Verify that the harvester does not report SSL errors on connections attempts.")),(0,r.kt)("h2",{id:"setup-steps"},"Setup Steps"),(0,r.kt)("p",null,"Then for each harvester, follow these steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," For step 4, you are using a copy of your ",(0,r.kt)("inlineCode",{parentName:"p"},"/ca")," directory from your main machine temporarily. DO NOT replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"/ca")," folder on your harvester. Put the ",(0,r.kt)("inlineCode",{parentName:"p"},"/ca")," directory into a temp folder on your harvester. You're going to show your harvester these files temporarily and then you can delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"/ca")," directory in your temp folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure your ",(0,r.kt)("strong",{parentName:"li"},"main")," machines IP address on port 8447 is accessible by your harvester machines"),(0,r.kt)("li",{parentName:"ol"},"Shut down all Chia daemon processes with ",(0,r.kt)("inlineCode",{parentName:"li"},"chia stop all -d")),(0,r.kt)("li",{parentName:"ol"},"Make a backup of any settings in your harvester"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia init -c [directory]")," on your harvester, where ",(0,r.kt)("inlineCode",{parentName:"li"},"[directory]")," is the copy of your ",(0,r.kt)("strong",{parentName:"li"},"main")," machine ",(0,r.kt)("inlineCode",{parentName:"li"},"/ca")," directory that you put in a temp folder. This command creates a new certificate signed by your ",(0,r.kt)("strong",{parentName:"li"},"main")," machine's CA."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/config/config.yaml")," file in each harvester, and enter your main machine's IP address in the remote ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"harvester")),"'s farmer_peer section (NOT ",(0,r.kt)("inlineCode",{parentName:"li"},"full_node"),").",(0,r.kt)("br",{parentName:"li"}),"EX:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"harvester:\n  chia_ssl_ca:\n    crt: config/ssl/ca/chia_ca.crt\n    key: config/ssl/ca/chia_ca.key\n  farmer_peer:\n    host: Main.Machine.IP\n    port: 8447\n")),(0,r.kt)("p",null,"For example, this section would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"harvester:\n  chia_ssl_ca:\n    crt: config/ssl/ca/chia_ca.crt\n    key: config/ssl/ca/chia_ca.key\n  farmer_peer:\n    host: 192.168.1.23\n    port: 8447\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Launch the harvester by running CLI ",(0,r.kt)("inlineCode",{parentName:"li"},"chia start harvester -r")," and you should see a new connection on your main machine in your INFO level logs."),(0,r.kt)("li",{parentName:"ol"},"To stop the harvester, you run CLI ",(0,r.kt)("inlineCode",{parentName:"li"},"chia stop harvester"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Warning:")),(0,r.kt)("p",null,"You cannot copy the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"config/ssl")," directory from one machine to another. Each harvester must have a different set of TLS certificates for your ",(0,r.kt)("strong",{parentName:"p"},"main")," machine to recognize it as different harvesters. Unintended bugs can occur, including harvesters failing to work properly when the ",(0,r.kt)("strong",{parentName:"p"},"same")," certificates are shared among different machines."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Security Concern:")),(0,r.kt)("p",null,"Since beta27, the CA files are copied to each harvester, as the daemon currently needs it to startup correctly. This is not ideal, and a new way to distribute certificates will be implemented in a subsequent release post mainnet launch. Please be careful when running your harvester that is accessible from the open internet."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")),(0,r.kt)("p",null,'The GUI show harvester plots after running some minutes. The easiest way to see if it\'s working is to go the "Farm" tab, and check the "Last Attempted Proofs" pane. Here you should see the different harvesters reporting scans like 0/26 1/412 3/864, on an average of every 10~ second.'),(0,r.kt)("p",null,"From CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"chia farm summary")," will list remote harvesters after some minutes.\nIf you need to debug, you can set the logging level to DEBUG, with ",(0,r.kt)("inlineCode",{parentName:"p"},"chia configure --log-level DEBUG"),", or by setting your logging level to ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," on your main machine and restart Chia farmer ",(0,r.kt)("inlineCode",{parentName:"p"},"chia start -r farmer"),". Now you can check the log ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/log/debug.log")," and see if you get messages like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[time stamp] farmer farmer_server   : DEBUG   -> new_signage_point_harvester to peer [harvester IP address] [peer id - 64 char hexadecimal]\n[time stamp] farmer farmer_server   : DEBUG   <- farming_info from peer [peer id - 64 char hexadecimal] [harvester IP address]\n[time stamp] farmer farmer_server   : DEBUG   <- new_proof_of_space from peer [peer id - 64 char hexadecimal] [harvester IP address]\n")),(0,r.kt)("p",null,"The outgoing ",(0,r.kt)("inlineCode",{parentName:"p"},"new_signage_point_harvester")," message states the farmer sent a challenge to your harvester and the incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"farming_info")," message indicates a response. The ",(0,r.kt)("inlineCode",{parentName:"p"},"new_proof_of_space")," message states the harvester found a proof for the challenge. You will get more ",(0,r.kt)("inlineCode",{parentName:"p"},"new_signage_point")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"farming_info")," messages than ",(0,r.kt)("inlineCode",{parentName:"p"},"new_proof_of_space")," messages."),(0,r.kt)("p",null,"Here's how to find your logs: ",(0,r.kt)("a",{parentName:"p",href:"/check-if-things-are-working"},"Where to Find Things")),(0,r.kt)("h1",{id:"good-security-practices-on-many-machines"},"Good Security Practices on Many Machines"),(0,r.kt)("p",null,"(This is basically repeating what @mariano54 said in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/discussions/1116#discussioncomment-420398"},"this discussion"),".)"),(0,r.kt)("p",null,"Security is about making better choices. You can never be 100% secure, but you can always make better choices to become more secure."),(0,r.kt)("h1",{id:"keep-your-keys-separate"},"Keep Your Keys Separate"),(0,r.kt)("p",null,"In other words, ",(0,r.kt)("em",{parentName:"p"},"only use the keys specific to your machine's purpose"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your master/farming key should not be in your plotting machine(s)."),(0,r.kt)("li",{parentName:"ul"},"Your master/farming key should not be in your harvester machine(s).")),(0,r.kt)("h2",{id:"farming-on-multiple-machines"},"Farming On Multiple Machines"),(0,r.kt)("h3",{id:"plotting-on-multiple-machines"},"Plotting On Multiple Machines"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/farming-on-many-machines"},"Farming on Many Machines page")," is this relevant tidbit:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When creating plots on the other harvesters, use ",(0,r.kt)("inlineCode",{parentName:"p"},"chia plots create -f farmer_key -p pool_key"),", inserting the farmer and pool keys from your main machine. Alternatively, you could copy your private keys over by using ",(0,r.kt)("inlineCode",{parentName:"p"},"chia keys add"),", but this is less secure.")),(0,r.kt)("h3",{id:"harvesting-on-multiple-machines"},"Harvesting On Multiple Machines"),(0,r.kt)("p",null,"Follow the instructions on setting up certificates on harvesters on the ",(0,r.kt)("a",{parentName:"p",href:"/farming-on-many-machines"},"Farming on Many Machines page"),"."),(0,r.kt)("h1",{id:"keep-your-wallet-separate"},"Keep Your Wallet Separate"),(0,r.kt)("p",null,"One way to not get your wallet hacked is to not have it accessible to the internet. Here is how to do this: ",(0,r.kt)("a",{parentName:"p",href:"/chia-key-management"},"Chia Keys Management")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your reward address for Chia rewards should be a separate key as well, kept in an offline machine. You can generate an address on a different computer, and put this address in the config.yaml (farmer.xch_target_address and pool.xch_target_address), so if your farming machine gets hacked, you don't lose past rewards. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/discussions/1116#discussioncomment-420398"},"Source"),")")),(0,r.kt)("h2",{id:"how-to-find-your-keys"},"How to Find Your Keys"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ONLY VIEW YOUR KEYS IN A SAFE PLACE AND MAKE SURE NO ONE CAN SEE YOUR SCREEN.")),(0,r.kt)("h3",{id:"using-cli"},"Using CLI"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chia keys show")),(0,r.kt)("h3",{id:"using-the-gui"},"Using the GUI"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Logout")," icon at the top right. You will see your wallets listed. Click on the eye icon."))}h.isMDXComponent=!0}}]);