"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[139],{3983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(4848),t=s(8453);const i={title:"SSD\u7684\u8010\u4e45\u6027",slug:"/ssd-endurance"},d=void 0,l={id:"plotting/ssd-endurance",title:"SSD\u7684\u8010\u4e45\u6027",description:"The fastest plot creation is done completely in memory, but requires a server with a large amount of DRAM (256 GB for BladeBit CUDA, or 416 GB for BladeBit RAM). Most consumer motherboards don't support this much memory, so temporary storage must be used. This typically comes in the form of an SSD. Most consumer motherboards don't support this much memory, so temporary storage must be used. This typically comes in the form of an SSD.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/plotting/ssd-endurance.md",sourceDirName:"plotting",slug:"/ssd-endurance",permalink:"/zh-Hans/ssd-endurance",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/ssd-endurance.md",tags:[],version:"current",frontMatter:{title:"SSD\u7684\u8010\u4e45\u6027",slug:"/ssd-endurance"},sidebar:"tutorialSidebar",previous:{title:"How To Plot",permalink:"/zh-Hans/plotting-how-to"},next:{title:"\u79fb\u52a8\u5730\u5757",permalink:"/zh-Hans/moving-plots"}},o={},a=[{value:"\u8ba1\u7b97",id:"\u8ba1\u7b97",level:2},{value:"\u5728Linux\u4e2d\u76d1\u63a7\u8010\u4e45\u6027",id:"\u5728linux\u4e2d\u76d1\u63a7\u8010\u4e45\u6027",level:2},{value:"NVMe",id:"nvme",level:3},{value:"SATA",id:"sata",level:3},{value:"SAS",id:"sas",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The fastest plot creation is done completely in memory, but requires a server with a large amount of DRAM (256 GB for BladeBit CUDA, or 416 GB for BladeBit RAM). Most consumer motherboards don't support this much memory, so temporary storage must be used. This typically comes in the form of an SSD. Most consumer motherboards don't support this much memory, so temporary storage must be used. This typically comes in the form of an SSD."}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4eca\u7684\u4e3b\u6d41SSD\u4f7f\u7528NAND\u95ea\u5b58\u6280\u672f\u6765\u5b58\u50a8\u6570\u636e\u3002 NAND\u5177\u6709\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u6027\u548c\u4f4e\u6210\u672c\uff0c\u9002\u7528\u4e8e\u51e0\u4e4e\u6240\u6709\u7684\u8ba1\u7b97\u9886\u57df\uff0c\u5305\u62ec\u624b\u673a\u3001SD\u5361\u3001\u6d88\u8d39\u7ea7\u7b14\u8bb0\u672c\u7535\u8111\u548c\u6570\u636e\u4e2d\u5fc3\u3002 However, NAND must be erased before the cell is programmed, a process known as a program erase cycle. This can only be performed a certain amount of times before the NAND cell wears out and can no longer reliably store user data. \u4e00\u822c\u6765\u8bf4\uff0c\u8fd9\u88ab\u5b9a\u4e49\u4e3aSSD\u4e0d\u518d\u6ee1\u8db3UBER(\u4e0d\u53ef\u7ea0\u6b63\u4f4d\u9519\u8bef\u7387)\u3001\u4fdd\u6301\u65f6\u95f4(\u5728\u7ed9\u5b9a\u6e29\u5ea6\u4e0b\uff0c\u8bbe\u5907\u5728\u5173\u673a\u72b6\u6001\u4e0b\u53ef\u4ee5\u5b89\u5168\u5730\u5b58\u50a8\u7528\u6237\u6570\u636e\u7684\u65f6\u95f4)\u6216\u529f\u80fd\u6545\u969c(\u8bbe\u5907\u4e0d\u80fd\u518d\u5f00\u673a)\u7684\u6761\u4ef6\u3002"}),"\n",(0,r.jsxs)("div",{style:{textAlign:"left"},children:[(0,r.jsx)("img",{src:"/img/ssd-endurance/tbw_dwpd.png",alt:"TBW versus DWPD"}),(0,r.jsx)("figcaption",{style:{textAlign:"left"},children:(0,r.jsx)("em",{children:"Meme credit: Scrutinous"})})]}),"\n",(0,r.jsx)(n.p,{children:"\u8861\u91cfSSD\u8010\u4e45\u6027\u7684\u5ea6\u91cf\u6807\u51c6\u662f\u4ee5\u4e00\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e3a\u57fa\u7840\u7684\u5199\u5165\u603b\u91cf\uff0c\u5373TBW\u3002 \u4e00\u822c\u6765\u8bf4\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u662f\u6839\u636eJEDEC\u7ec4\u7ec7\u7684JESD219\u5de5\u4f5c\u8d1f\u8f7d\u6765\u5b9a\u4e49\u7684\u3002 An SSD can still plot well beyond meeting its rated TBW limit, because UBER can be measured (when seeing host errors) and retention is not required (Chia plotting requires temporary or ephemeral storage)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5730\u5757\u751f\u6210\u7a0b\u5e8f"}),(0,r.jsx)(n.th,{children:"\u7f13\u5b58/\u5185\u5b58\u78c1\u76d8"}),(0,r.jsx)(n.th,{children:"K=32\u7684\u5199\u5165\u6b21\u6570"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Chiapos beta (2020)"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.8 TBW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Chiapos 2021"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.4 TBW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"madMAx Chia_plot"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.43 TBW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"madMAx Chia_plot"}),(0,r.jsx)(n.td,{children:"110G"}),(0,r.jsx)(n.td,{children:"0.396 TBW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bladebit Disk"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.225 TBW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bladebit Disk"}),(0,r.jsx)(n.td,{children:">99G"}),(0,r.jsx)(n.td,{children:"0.381 TBW"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Consumer NVMe SSDs are generally not recommended due to their lower endurance, and they often employ caching algorithms to faster media (SLC, or single level cell) for great bursty performance. They do not perform well under heavy workload sustained I/O. \u867d\u7136\u6709\u4e00\u4e9b\u9ad8\u6027\u80fd\u7684\u6d88\u8d39\u7ea7NVMe SSD\u53ef\u4ee5\u63d0\u4f9b\u51fa\u8272\u7684\u751f\u6210\u5730\u5757\u6027\u80fd\uff0c\u4f46\u8f83\u4f4e\u7684TBW\u5c06\u5bfc\u81f4\u66f4\u5feb\u7684\u78e8\u635f\u3002 They do not perform well under heavy workload sustained I/O. \u867d\u7136\u6709\u4e00\u4e9b\u9ad8\u6027\u80fd\u7684\u6d88\u8d39\u7ea7NVMe SSD\u53ef\u4ee5\u63d0\u4f9b\u51fa\u8272\u7684\u751f\u6210\u5730\u5757\u6027\u80fd\uff0c\u4f46\u8f83\u4f4e\u7684TBW\u5c06\u5bfc\u81f4\u66f4\u5feb\u7684\u78e8\u635f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4e9b",(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/1mNUYRWeJUaijEZXupwP5k6IuATZGj1FB/edit#gid=1857251151",children:"\u8010\u4e45\u6027\u793a\u4f8b"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about SSD endurance from this ",(0,r.jsx)(n.a,{href:"https://www.snia.org/forums/cmsi/ssd-endurance",children:"SNIA whitepaper from JM"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u8ba1\u7b97",children:"\u8ba1\u7b97"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NAND P/E\u5faa\u73af=\u5728NANDcell\u8017\u5c3d\u4e4b\u524dNAND\u53ef\u4ee5\u6267\u884c\u7684\u7f16\u7a0b/\u64e6\u9664\u5468\u671f\u7684\u6570\u91cf\u3002 NAND\u4ee5\u9875\u9762\u4e3a\u5355\u4f4d\u7f16\u7a0b(\u5199\u5165)\u548c\u5757\u4e3a\u5355\u4f4d\u64e6\u9664(\u5305\u542b\u8bb8\u591a\u9875\u9762)"}),"\n",(0,r.jsx)(n.li,{children:"\u78e8\u635f - SSD\u4e0d\u518d\u6ee1\u8db3UBER(uncorrectable bit error rate,\u4e0d\u53ef\u7ea0\u6b63\u4f4d\u9519\u8bef\u7387)\u3001\u4fdd\u6301(\u5728\u5173\u673a\u72b6\u6001\u4e0b\u5b89\u5168\u5b58\u50a8\u6570\u636e\u7684\u65f6\u95f4)\u3001\u6545\u969c\u7387\u6216\u7528\u6237\u5bb9\u91cf"}),"\n",(0,r.jsx)(n.li,{children:"UBER = \u6570\u636e\u9519\u8bef\u6570\u91cf/\u8bfb\u53d6\u7684\u4f4d\u6570"}),"\n",(0,r.jsx)(n.li,{children:"WAF(Write Amplification Factor\uff0c\u5199\u653e\u5927\u56e0\u5b50)= NAND\u5199\u5165/\u4e3b\u673a\u5199\u5165"}),"\n",(0,r.jsx)(n.li,{children:"TBW\u6216PBW \u2013 \u5728\u8010\u4e45\u6027\u8017\u5c3d\u4e4b\u524d\u4e3b\u673a\u5199\u5165SSD\u7684\u91cf"}),"\n",(0,r.jsx)(n.li,{children:"TBW = \u9a71\u52a8\u5668\u5bb9\u91cf * \u5468\u671f\u6570 / WAF"}),"\n",(0,r.jsx)(n.li,{children:"DWPD(drive writes per day\uff0c\u6bcf\u5929\u9a71\u52a8\u5199\u5165\u6b21\u6570)\uff1a\u5728\u4fdd\u4fee\u671f\u5185(\u901a\u5e38\u4e3a5\u5e74)\u6bcf\u5929\u53ef\u4ee5\u5411\u8bbe\u5907\u5199\u5165\u7684\u6570\u636e\u91cf\uff0c\u800c\u4e0d\u4f1a\u78e8\u635f"}),"\n",(0,r.jsx)(n.li,{children:"DWPD = TBW/365/5/\u9a71\u52a8\u5668\u5bb9\u91cf"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5728linux\u4e2d\u76d1\u63a7\u8010\u4e45\u6027",children:"\u5728Linux\u4e2d\u76d1\u63a7\u8010\u4e45\u6027"}),"\n",(0,r.jsx)(n.h3,{id:"nvme",children:"NVMe"}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about the NVMe CLI on the ",(0,r.jsx)(n.a,{href:"https://github.com/linux-nvme/nvme-cli",children:"NVMe CLI GitHub repository"})," or ",(0,r.jsx)(n.a,{href:"https://nvmexpress.org/open-source-nvme-management-utility-nvme-command-line-interface-nvme-cli",children:"NVMe CLI blog post"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can read total endurance used with the following NVMe CLI command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nvme smart-log /dev/nvme0 | grep percentage_used\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is how to read the amount of writes that the drive has actually done:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nvme smart-log /dev/nvme0 | grep data_units_written\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bytes written = output _ 1000 _ 512B"}),"\n",(0,r.jsx)(n.p,{children:"TBW = \u8f93\u51fa _ 1000 _ 512B / (1000^4) \u6216 (1024^4)"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u627e\u51faNAND\u5199\u5165\u91cf\uff0c\u9700\u8981\u4f7f\u7528NVMe-CLI\u7684\u4f9b\u5e94\u5546\u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nvme <vendor name> help\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4f7f\u7528Intel SSD\u65f6\u7684\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nvme intel smart-log-add /dev/nvme0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sata",children:"SATA"}),"\n",(0,r.jsx)(n.p,{children:"\u5728SATA\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install smartmontools\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo smartctl -x /dev/sda | grep Logical\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo smartctl -a /dev/sda\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u627eMedia_Wearout_Indicator"}),"\n",(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u5bf9\u4e8eNVMe\u4e5f\u9002\u7528\u7684\u57fa\u672cSMART\u5065\u5eb7\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo smartctl -a /dev/nvme0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sas",children:"SAS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sg_logs /dev/sg1 --page=0x11\n"})}),"\n",(0,r.jsx)(n.p,{children:"Look for"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Percentage used endurance indicator: 0%\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Overview of SSD endurance testing from JEDEC industry standard here ",(0,r.jsx)(n.a,{href:"https://www.jedec.org/sites/default/files/Alvin_Cox%20%5BCompatibility%20Mode%5D_0.pdf",children:"https://www.jedec.org/sites/default/files/Alvin_Cox%20%5BCompatibility%20Mode%5D_0.pdf"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);