"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8970],{8589:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=r(5893),i=r(1151);const a={title:"Farming on Many Machines",slug:"/farming-on-many-machines"},c="\u5982\u4f55\u5728\u5176\u5b83\u4e0d\u662f\u4e3b\u8981\u8bbe\u5907\u7684\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272",o={id:"farming/farming-many-machines",title:"Farming on Many Machines",description:"\u53e6\u4e00\u4e2a\u6807\u9898:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/farming/farming-many-machines.md",sourceDirName:"farming",slug:"/farming-on-many-machines",permalink:"/zh-Hans/farming-on-many-machines",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/farming/farming-many-machines.md",tags:[],version:"current",frontMatter:{title:"Farming on Many Machines",slug:"/farming-on-many-machines"},sidebar:"tutorialSidebar",previous:{title:"Compressed Plots",permalink:"/zh-Hans/farming-compressed-plots"},next:{title:"\u8054\u5408\u8015\u79cd\uff08Pool Farming\uff09",permalink:"/zh-Hans/pool-farming"}},l={},h=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u8bbe\u7f6e\u6b65\u9aa4",id:"\u8bbe\u7f6e\u6b65\u9aa4",level:2},{value:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u7684\u826f\u597d\u5b89\u5168\u5b9e\u8df5",id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u7684\u826f\u597d\u5b89\u5168\u5b9e\u8df5",level:2},{value:"\u4fdd\u6301\u5bc6\u94a5\u5206\u79bb",id:"\u4fdd\u6301\u5bc6\u94a5\u5206\u79bb",level:3},{value:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u751f\u6210\u5730\u5757",id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u751f\u6210\u5730\u5757",level:4},{value:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272",id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272",level:4},{value:"\u94b1\u5305\u4fdd\u6301\u72ec\u7acb(Separate)",id:"\u94b1\u5305\u4fdd\u6301\u72ec\u7acbseparate",level:3},{value:"\u5982\u4f55\u67e5\u770b\u5bc6\u94a5",id:"\u5982\u4f55\u67e5\u770b\u5bc6\u94a5",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u754c\u9762cli",level:3},{value:"\u4f7f\u7528\u56fe\u5f62\u7528\u6237\u754c\u9762\uff08GUI\uff09",id:"\u4f7f\u7528\u56fe\u5f62\u7528\u6237\u754c\u9762gui",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u53e6\u4e00\u4e2a\u6807\u9898:"}),"\n",(0,s.jsx)(n.h1,{id:"\u5982\u4f55\u5728\u5176\u5b83\u4e0d\u662f\u4e3b\u8981\u8bbe\u5907\u7684\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272",children:"\u5982\u4f55\u5728\u5176\u5b83\u4e0d\u662f\u4e3b\u8981\u8bbe\u5907\u7684\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Always make sure to protect yourself from malicious actors by ",(0,s.jsx)(n.a,{href:"https://www.chia.net/2021/05/28/securing-your-chia-how-to-be-a-hard-target/",children:"securing your chia and making yourself a hard target"})]})}),"\n",(0,s.jsx)(n.p,{children:"This guide will show you how to run a harvester on each machine in your network. This architecture is composed of one main machine which runs the farmer, full node, and wallet, and other machines which run only the harvester. \u53ea\u6709\u4e3b\u673a\u5c06\u8fde\u63a5\u5230Chia\u7f51\u7edc\u3002 This architecture is composed of one main machine which runs the farmer, full node, and wallet, and other machines which run only the harvester. \u53ea\u6709\u4e3b\u673a\u5c06\u8fde\u63a5\u5230Chia\u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.p,{children:"This is the recommended setup for all Chia farms that use more than one computer. It uses less bandwidth, space and CPU versus running a full node on each computer. It also keeps your keys safer because they will only need to be stored on one computer. Finally, it makes your overall farm quicker and more efficient when replying to challenges. It uses less bandwidth, space and CPU versus running a full node on each computer. It also keeps your keys safer because they will only need to be stored on one computer. Finally, it makes your overall farm quicker and more efficient when replying to challenges."}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u969c\u6536\u5272\u8282\u70b9\u4e0e\u4e3b\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\u5b89\u5168\uff0c\u4f7f\u7528TLS\uff08Transport Layer Security\uff09\u534f\u8bae\uff0c\u5176\u4e2d",(0,s.jsx)(n.strong,{children:"\u4e3b\u673a"}),"\u5c06\u5145\u5f53\u79c1\u6709\u8bc1\u4e66\u9881\u53d1\u673a\u6784(CA)\uff0c\u7528\u4e8e\u7b7e\u7f72\u6240\u6709\u8bc1\u4e66\u3002 \u6bcf\u4e2a\u6536\u5272\u8282\u70b9\u5fc5\u987b\u62e5\u6709\u81ea\u5df1\u7684\u7b7e\u540d\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u4e0e",(0,s.jsx)(n.strong,{children:"\u4e3b\u673a"}),"\u6b63\u786e\u901a\u4fe1\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"                                       _____  \u6536\u5272\u673a 1 (\u8bc1\u4e66 A)\n                                      /\n\u5176\u4ed6\u7f51\u7edc\u8282\u70b9  --------   \u4e3b\u673a (CA) ------  \u6536\u5272\u673a 2 (\u8bc1\u4e66 B)\n                                      \\_____  \u6536\u5272\u673a 3 (\u8bc1\u4e66 C)\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you are more of a visual learner, JM made a video outlining the steps from this tutorial. This video is from 2021, but the steps are still relevant today: This video is from 2021, but the steps are still relevant today:"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QpgXr3aeU5g",title:"Farming on multiple systems",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h2,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First, make sure Chia is installed on all machines and initialized by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia init\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When creating plots on the harvesters, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia plots create -f <farmer_key> -p <pool_key>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"<farmer_key>"})," and ",(0,s.jsx)(n.code,{children:"<pool_key>"})," can be obtained by running the following command on your main machine:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys show\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u751f\u6210\u5730\u5757\u540e\uff0c\u8bf7\u8fd0\u884c",(0,s.jsx)(n.code,{children:"chia plots check"}),"\u547d\u4ee4\u786e\u4fdd\u4e00\u5207\u6b63\u5e38\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A copy of your ",(0,s.jsx)(n.strong,{children:"main"})," machine CA directory needs to be accessible by your harvester machines. This directory is located in: This directory is located in:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/.chia/mainnet/config/ssl/ca\n"})}),"\n",(0,s.jsx)(n.p,{children:"Options to make this directory accessible include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Share the directory on a network drive"}),"\n",(0,s.jsx)(n.li,{children:"Copy it using a USB key"}),"\n",(0,s.jsx)(n.li,{children:"Do a network copy to each harvester"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8f83\u5927\u7684\u66f4\u65b0\u53ef\u80fd\u9700\u8981\u60a8\u590d\u5236\u65b0\u7684",(0,s.jsx)(n.code,{children:"ca"}),"\u5185\u5bb9\u3002 Verify that the harvester does not report SSL errors on connection attempts."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e\u6b65\u9aa4",children:"\u8bbe\u7f6e\u6b65\u9aa4"}),"\n",(0,s.jsx)(n.p,{children:"For each harvester, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure your ",(0,s.jsx)(n.strong,{children:"main"})," machine's IP address on port 8447 is accessible by your harvester machines"]}),"\n",(0,s.jsx)(n.li,{children:"Shut down all Chia daemon processes by running:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia stop all -d\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5907\u4efd\u6536\u5272\u8282\u70b9\u4e2d\u7684\u6240\u6709\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["Run the following command on your harvester, where ",(0,s.jsx)(n.code,{children:"<directory>"})," is the copy of your ",(0,s.jsx)(n.strong,{children:"main"})," machine's ",(0,s.jsx)(n.code,{children:"/ca"})," directory that you put in a temp folder:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia init -c <directory>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a\u7531\u4e3b\u673aCA\u7b7e\u540d\u7684\u65b0\u8bc1\u4e66\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["For step 4, you are using a copy of your ",(0,s.jsx)(n.code,{children:"/ca"})," directory from your main machine temporarily. \u8bf7\u52ff\u66ff\u6362\u6536\u5272\u8282\u70b9\u4e0a\u7684",(0,s.jsx)(n.code,{children:"/ca"}),"\u6587\u4ef6\u5939\u3002 \u8bf7\u52ff\u66ff\u6362\u6536\u5272\u8282\u70b9\u4e0a\u7684",(0,s.jsx)(n.code,{children:"/ca"}),"\u6587\u4ef6\u5939\u3002 \u5c06",(0,s.jsx)(n.code,{children:"/ca"}),"\u76ee\u5f55\u653e\u5165\u6536\u5272\u8282\u70b9\u4e0a\u7684\u4e34\u65f6\u6587\u4ef6\u5939\u4e2d\u3002 \u5c06\u6682\u65f6\u5411\u6536\u5272\u8282\u70b9\u5c55\u793a\u8fd9\u4e9b\u6587\u4ef6\uff0c\u7136\u540e\u53ef\u4ee5\u5220\u9664\u4e34\u65f6\u6587\u4ef6\u5939\u4e2d\u7684",(0,s.jsx)(n.code,{children:"/ca"}),"\u76ee\u5f55\u3002 This keeps your system more secure by limiting the exposure to your certificates."]})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Open the following file in each harvester:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/.chia/mainnet/config/config.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Search for the remote ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"harvester"})}),"'s farmer_peer section (NOT ",(0,s.jsx)(n.code,{children:"full_node"}),"). Enter the local IP address of your main machine (typically ",(0,s.jsx)(n.code,{children:"192.168.xxx.yyy"}),") as the ",(0,s.jsx)(n.code,{children:"host"})," value. Enter the local IP address of your main machine (typically ",(0,s.jsx)(n.code,{children:"192.168.xxx.yyy"}),") as the ",(0,s.jsx)(n.code,{children:"host"})," value."]}),"\n",(0,s.jsxs)(n.p,{children:["In other words, replace ",(0,s.jsx)(n.code,{children:"<Main.Machine.IP>"})," in the following snippet with your main machine's local IP:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"harvester:\n  chia_ssl_ca:\n    crt: config/ssl/ca/chia_ca.crt\n    key: config/ssl/ca/chia_ca.key\n  farmer_peer:\n    host: <Main.Machine.IP>\n    port: 8447\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Launch the harvester by running the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia start harvester -r\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should see a new connection on your main machine in your ",(0,s.jsx)(n.code,{children:"INFO"})," level logs."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"To stop the harvester, run the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia stop harvester\n"})})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u4e0d\u80fd\u5c06\u6574\u4e2a ",(0,s.jsx)(n.code,{children:"config/ssl"})," \u76ee\u5f55\u4ece\u4e00\u53f0\u673a\u5668\u590d\u5236\u5230\u53e6\u4e00\u53f0\u673a\u5668\u3002 \u6bcf\u4e2a\u6536\u5272\u8282\u70b9\u5fc5\u987b\u62e5\u6709\u4e0d\u540c\u7684TLS\u8bc1\u4e66\uff0c\u4ee5\u4fbf",(0,s.jsx)(n.strong,{children:"\u4e3b\u673a"}),"\u5c06\u5176\u8bc6\u522b\u4e3a\u4e0d\u540c\u7684\u6536\u5272\u8282\u70b9\u3002 \u5982\u679c\u5c06",(0,s.jsx)(n.strong,{children:"\u76f8\u540c"}),"\u8bc1\u4e66\u5171\u4eab\u5728\u4e0d\u540c\u673a\u5668\u4e4b\u95f4\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u610f\u5916\u7684\u9519\u8bef\uff0c\u5305\u62ec\u6536\u5272\u8282\u70b9\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["A few minutes after the GUI starts running, it will begin to show harvester plots. The easiest way to see if it's working is to go the ",(0,s.jsx)(n.code,{children:"Farm"})," tab, and check the ",(0,s.jsx)(n.code,{children:"Last Attempted Proof"})," pane. Every nine seconds or so, you should see the different harvesters reporting numbers under ",(0,s.jsx)(n.code,{children:"Plots Passed Filter"})," such as ",(0,s.jsx)(n.code,{children:"0 / 26"}),", ",(0,s.jsx)(n.code,{children:"1 / 412"}),", ",(0,s.jsx)(n.code,{children:"3 / 864"}),", etc."]})}),"\n",(0,s.jsx)(n.p,{children:"After your farmer has been running for a few minutes, you can run the following command to obtain a list of harvesters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia farm summary\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to debug, you can set the logging level to ",(0,s.jsx)(n.code,{children:"DEBUG"})," by running this command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia configure --log-level DEBUG\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will need to restart your farmer for the change to take effect:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia start -r farmer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"~/.chia/mainnet/log/debug.log"}),"\uff0c\u68c0\u67e5\u662f\u5426\u51fa\u73b0\u4ee5\u4e0b\u7c7b\u4f3c\u7684\u6d88\u606f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[time stamp] farmer farmer_server   : DEBUG   -> new_signage_point_harvester to peer [harvester IP address] [peer id - 64 char hexadecimal]\n[time stamp] farmer farmer_server   : DEBUG   <- farming_info from peer [peer id - 64 char hexadecimal] [harvester IP address]\n[time stamp] farmer farmer_server   : DEBUG   <- new_proof_of_space from peer [peer id - 64 char hexadecimal] [harvester IP address]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u51fa\u7ad9\u7684 ",(0,s.jsx)(n.code,{children:"new_signage_point_harvester"})," \u6d88\u606f\u8868\u793a\u519c\u573a\u8282\u70b9\u5411\u60a8\u7684\u6536\u5272\u8282\u70b9\u53d1\u9001\u4e86\u6311\u6218\uff0c\u800c\u4f20\u5165\u7684 ",(0,s.jsx)(n.code,{children:"farming_info"})," \u6d88\u606f\u8868\u793a\u60a8\u7684\u6536\u5272\u8282\u70b9\u7ed9\u51fa\u4e86\u56de\u5e94\u3002 \u800c ",(0,s.jsx)(n.code,{children:"new_proof_of_space"})," \u6d88\u606f\u8868\u793a\u6536\u5272\u8282\u70b9\u627e\u5230\u4e86\u5bf9\u8be5\u6311\u6218\u7684\u8bc1\u660e\u3002 \u60a8\u5c06\u4f1a\u6536\u5230\u6bd4 ",(0,s.jsx)(n.code,{children:"new_proof_of_space"})," \u6d88\u606f\u66f4\u591a\u7684 ",(0,s.jsx)(n.code,{children:"new_signage_point"})," \u548c ",(0,s.jsx)(n.code,{children:"farming_info"})," \u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u5982\u4f55\u627e\u5230\u65e5\u5fd7\u6587\u4ef6\uff1a ",(0,s.jsx)(n.a,{href:"/check-if-things-are-working",children:"Where to Find Things"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u7684\u826f\u597d\u5b89\u5168\u5b9e\u8df5",children:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u7684\u826f\u597d\u5b89\u5168\u5b9e\u8df5"}),"\n",(0,s.jsxs)(n.p,{children:["(\u8fd9\u57fa\u672c\u4e0a\u662f\u91cd\u590d\u4e86\u5728",(0,s.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/discussions/1116#discussioncomment-420398",children:"\u6b64\u8ba8\u8bba"}),"\u4e2d@mariano54\u7684\u89c2\u70b9\u3002 )"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u5168\u662f\u5173\u4e8e\u505a\u51fa\u66f4\u597d\u7684\u9009\u62e9\u3002 \u6c38\u8fdc\u65e0\u6cd5\u8fbe\u5230100%\u7684\u5b89\u5168\u6027\uff0c\u4f46\u53ef\u4ee5\u59cb\u7ec8\u901a\u8fc7\u505a\u51fa\u66f4\u597d\u7684\u9009\u62e9\u6765\u63d0\u9ad8\u5b89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4fdd\u6301\u5bc6\u94a5\u5206\u79bb",children:"\u4fdd\u6301\u5bc6\u94a5\u5206\u79bb"}),"\n",(0,s.jsxs)(n.p,{children:["\u6362\u53e5\u8bdd\u8bf4\uff0c",(0,s.jsx)(n.em,{children:"\u53ea\u4f7f\u7528\u4e0e\u673a\u5668\u7528\u9014\u76f8\u7b26\u7684\u5bc6\u94a5"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3b\u5bc6\u94a5\uff08master/farming key\uff09\u4e0d\u5e94\u8be5\u51fa\u73b0\u5728\u7528\u4e8e\u751f\u6210\u5730\u5757\u7684\u673a\u5668\u4e0a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u5bc6\u94a5\uff08master/farming key\uff09\u4e0d\u5e94\u8be5\u51fa\u73b0\u5728\u6536\u5272\u8282\u70b9\u673a\u5668\u4e0a\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u751f\u6210\u5730\u5757",children:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u751f\u6210\u5730\u5757"}),"\n",(0,s.jsxs)(n.p,{children:["As stated ",(0,s.jsx)(n.a,{href:"/farming-on-many-machines#%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6",children:"above"}),", run the following command when creating plots:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia plots create -f <farmer_key> -p <pool_key>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you use the ",(0,s.jsx)(n.code,{children:"-f"})," and ",(0,s.jsx)(n.code,{children:"-p"})," parameters, you do not need to copy the keys to the local plotting machine."]}),"\n",(0,s.jsx)(n.h4,{id:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272",children:"\u5728\u591a\u53f0\u673a\u5668\u4e0a\u8fdb\u884c\u6536\u5272"}),"\n",(0,s.jsxs)(n.p,{children:["Rather than maintaining a copy of your farmer's certificates on each harvester, follow the ",(0,s.jsx)(n.a,{href:"/farming-on-many-machines#%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6",children:"above"})," steps to keep them in one place while farming."]}),"\n",(0,s.jsx)(n.h3,{id:"\u94b1\u5305\u4fdd\u6301\u72ec\u7acbseparate",children:"\u94b1\u5305\u4fdd\u6301\u72ec\u7acb(Separate)"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u8ba9\u94b1\u5305\u53d7\u5230\u9ed1\u5ba2\u653b\u51fb\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4e0d\u8ba9\u5b83\u66b4\u9732\u5728\u4e92\u8054\u7f51\u4e0a\u3002 \u4ee5\u4e0b\u662f\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\uff1a",(0,s.jsx)(n.a,{href:"/chia-key-management",children:"Chia\u94a5\u5319\u7ba1\u7406"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u7528\u4e8eChia\u5956\u52b1\u7684\u5956\u52b1\u5730\u5740\u4e5f\u5e94\u8be5\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bc6\u94a5\uff0c\u5e76\u4e14\u5e94\u8be5\u4fdd\u5b58\u5728\u4e00\u4e2a\u79bb\u7ebf\u7684\u673a\u5668\u4e0a\u3002 \u53ef\u4ee5\u5728\u53e6\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u751f\u6210\u4e00\u4e2a\u5730\u5740\uff0c\u5e76\u5c06\u8be5\u5730\u5740\u653e\u5165config.yaml\u6587\u4ef6\u4e2d\u7684 farmer.xch_target_address \u548c pool.xch_target_address \u5b57\u6bb5\u4e2d\uff0c\u8fd9\u6837\uff0c\u5982\u679c\u60a8\u7684\u8015\u79cd\u673a\u5668\u53d7\u5230\u9ed1\u5ba2\u653b\u51fb\uff0c\u5c31\u4e0d\u4f1a\u4e22\u5931\u4ee5\u524d\u7684\u5956\u52b1\u3002 \uff08",(0,s.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/discussions/1116#discussioncomment-420398",children:"\u6765\u6e90"}),"\uff09"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4f55\u67e5\u770b\u5bc6\u94a5",children:"\u5982\u4f55\u67e5\u770b\u5bc6\u94a5"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u4ec5\u5728\u5b89\u5168\u7684\u5730\u65b9\u67e5\u770b\u5bc6\u94a5\uff0c\u5e76\u786e\u4fdd\u6ca1\u6709\u5176\u4ed6\u4eba\u80fd\u770b\u5230\u60a8\u7684\u5c4f\u5e55\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u754c\u9762cli",children:"\u4f7f\u7528\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys show\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u56fe\u5f62\u7528\u6237\u754c\u9762gui",children:"\u4f7f\u7528\u56fe\u5f62\u7528\u6237\u754c\u9762\uff08GUI\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,s.jsx)(n.em,{children:"\u6ce8\u9500"})," \u56fe\u6807\u3002 \u4f1a\u770b\u5230\u5217\u51fa\u7684\u94b1\u5305\u3002 \u70b9\u51fb\u773c\u775b\u56fe\u6807\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var s=r(7294);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);