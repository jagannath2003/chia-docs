(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8871],{6727:(e,s,i)=>{"use strict";i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=i(4848),r=i(8453),l=i(3823);const c={title:"Signatures",slug:"/chialisp-signatures"},t=void 0,o={id:"academy/chialisp/chialisp-signatures",title:"Signatures",description:"\u5728\u8fd9\u8282\u8bfe\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528\u7b7e\u540d\u6765\u4fdd\u62a4\u5e01\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/academy/chialisp/chialisp-signatures.md",sourceDirName:"academy/chialisp",slug:"/chialisp-signatures",permalink:"/zh-Hans/chialisp-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/chialisp/chialisp-signatures.md",tags:[],version:"current",frontMatter:{title:"Signatures",slug:"/chialisp-signatures"},sidebar:"academy",previous:{title:"Smart Coins",permalink:"/zh-Hans/chialisp-smart-coin"},next:{title:"Inner Puzzles",permalink:"/zh-Hans/chialisp-inner-puzzle"}},a={},d=[{value:"\u5b66\u4e60\u76ee\u6807",id:"\u5b66\u4e60\u76ee\u6807",level:2},{value:"\u5185\u5bb9",id:"\u5185\u5bb9",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u77e5\u8bc6\u68c0\u6d4b",id:"\u77e5\u8bc6\u68c0\u6d4b",level:2},{value:"\u9644\u52a0\u8d44\u6e90",id:"\u9644\u52a0\u8d44\u6e90",level:2},{value:"\u53ef\u8fd0\u884c\u7684Chialisp\u548cclvm\u63d2\u4ef6",id:"\u53ef\u8fd0\u884c\u7684chialisp\u548cclvm\u63d2\u4ef6",level:3},{value:"Chialisp \u63d2\u4ef6",id:"chialisp-\u63d2\u4ef6",level:4},{value:"Clvm\u63d2\u4ef6",id:"clvm\u63d2\u4ef6",level:4},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"\u5728\u8fd9\u8282\u8bfe\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528\u7b7e\u540d\u6765\u4fdd\u62a4\u5e01\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u5b66\u4e60\u76ee\u6807",children:"\u5b66\u4e60\u76ee\u6807"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u7b7e\u540d\uff08Signing\u3001Signatures\uff09"}),"\uff1a\u4e86\u89e3\u7b7e\u540d\u7684\u7528\u9014\u548c\u597d\u5904\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Chialisp \u5e93\u6587\u4ef6"}),"\uff1a\u4e86\u89e3\u7b80\u5316\u5f00\u53d1\u7684\u6709\u7528Chialisp\u5e93\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u5185\u5bb9",children:"\u5185\u5bb9"}),"\n",(0,n.jsx)("div",{class:"videoWrapper",children:(0,n.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/zD1rhLKgc9Y",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:" Expand for the full script "}),(0,n.jsxs)(s.p,{children:["00:00",(0,n.jsx)(s.br,{}),"\n","\u6211\u4eec\u521b\u5efa\u4e86\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u667a\u80fd\u5e01\uff0c\u5e76\u5c06\u5176\u5b89\u5168\u5730\u4fdd\u62a4\uff0c\u53ea\u6709\u62e5\u6709\u6b63\u786e\u5bc6\u7801\u7684\u4eba\u624d\u80fd\u4f7f\u7528\u5b83\u3002 \u5728\u672c\u89c6\u9891\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u7b7e\u540d\u6765\u4fdd\u62a4\u6211\u4eec\u7684\u5e01\uff0c\u4ee5\u4fbf\u53ea\u6709\u62e5\u6709\u6b63\u786e\u7b7e\u540d\u7684\u4eba\u624d\u80fd\u4f7f\u7528\u8fd9\u4e2a\u5e01\u3002"]}),(0,n.jsxs)(s.p,{children:["00:20",(0,n.jsx)(s.br,{}),"\n","\u90a3\u4e48\u4ec0\u4e48\u662f\u7b7e\u540d\uff1f \u6570\u5b57\u7b7e\u540d\u5141\u8bb8\u60a8\u4f7f\u7528\u79c1\u94a5\u5bf9\u6d88\u606f\u8fdb\u884c\u7b7e\u540d\u3002 \u7136\u540e\uff0c\u63a5\u6536\u65b9\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684\u516c\u94a5\u9a8c\u8bc1\u6b64\u6d88\u606f\u3002 \u8ba9\u6211\u4eec\u4ece\u7b7e\u7f72\u6d88\u606f\u5e76\u9a8c\u8bc1\u5b83\u7684\u793a\u4f8b\u5f00\u59cb\u3002"]}),(0,n.jsxs)(s.p,{children:["00:40",(0,n.jsx)(s.br,{}),"\n","\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"chia keys sign --message"}),"\uff0c\u6d88\u606f\u4e3a ",(0,n.jsx)(s.code,{children:'"hello"'}),"\uff0c",(0,n.jsx)(s.code,{children:"--hdpath m"}),"\uff0c\u7136\u540e\u9009\u62e9\u60a8\u7684\u94b1\u5305ID\u3002 \u6b64\u8fc7\u7a0b\u5c06\u4f7f\u7528\u60a8\u7684\u79c1\u94a5\u5bf9\u6d88\u606f 'hello' \u8fdb\u884c\u7b7e\u540d\u3002 \u8981\u9a8c\u8bc1\u6b64\u6d88\u606f\uff0c\u6211\u4eec\u5c06\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"chia keys verify"}),"\uff0c\u8f93\u5165\u6d88\u606f\uff0c\u7136\u540e\u662f\u7b7e\u540d\u548c\u53d1\u9001\u65b9\u7684\u516c\u94a5\u3002 (",(0,n.jsx)(s.code,{children:"chia keys verify --message hello --signature [SIG] --public_key [PUB_KEY]"}),")"]}),(0,n.jsxs)(s.p,{children:["01:00",(0,n.jsx)(s.br,{}),"\n","\u73b0\u5728\u6211\u4eec\u77e5\u9053\u7b7e\u540d\u7684\u5de5\u4f5c\u539f\u7406\u4e86\uff0c\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u53ea\u6709\u5728\u63d0\u4f9b\u6b63\u786e\u7b7e\u540d\u65f6\u624d\u80fd\u82b1\u8d39\u7684\u5e01\u3002 \u56e0\u6b64\uff0c\u5728\u6211\u4eec\u7684 chialisp \u6587\u4ef6\u4e2d\uff0c\u8ba9\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u7684\u6a21\u5757\u3002 \u7b2c\u4e00\u4e2a\u5c06\u662f\u6211\u4eec\u7a0d\u540e\u5c06\u6dfb\u52a0\u7684\u516c\u94a5\u3002 \u8fd9\u5c06\u786e\u5b9a\u8c01\u53ef\u4ee5\u82b1\u8d39\u8fd9\u4e2a\u5e01\u3002"]}),(0,n.jsxs)(s.p,{children:["01:20",(0,n.jsx)(s.br,{}),"\n","\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c06\u662f\u51b3\u5b9a\u5982\u4f55\u82b1\u8d39\u5e01\u7684\u6761\u4ef6\u3002 \u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5305\u542b\u4e00\u4e9b\u5e93\uff0c\u4ee5\u4f7f\u6211\u4eec\u7684\u4ee3\u7801\u66f4\u6613\u4e8e\u7f16\u5199\u3002 \u7b2c\u4e00\u4e2a\u5e93\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u7f16\u5199\u7684\u6761\u4ef6\u4ee3\u7801\u800c\u4e0d\u662f\u6570\u5b57\u4ee3\u7801\uff0c\u7b2c\u4e8c\u4e2a\u5e93\u662f\u4e00\u4e2a\u7528\u4e8e\u6811\u54c8\u5e0c\u7684\u5e93\u3002"]}),(0,n.jsxs)(s.p,{children:["01:40",(0,n.jsx)(s.br,{}),"\n","\u8981\u5b89\u88c5\u8fd9\u4e9b\u5e93\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u3002 ",(0,n.jsx)(s.code,{children:"cdv clsp retrieve sha256tree condition-codes"}),". \u56de\u5230\u6211\u4eec\u7684 chialisp \u6587\u4ef6\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"c"})," \u5b9a\u4e49\u4e00\u4e2a\u7ec4\u5408\u8bed\u53e5\uff0c\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u521b\u5efa\u4e00\u4e2a\u7531 ",(0,n.jsx)(s.code,{children:"AGG_SIG_ME"})," \u6761\u4ef6\u3001\u6211\u4eec\u7684\u516c\u94a5\u53c2\u6570\u548c\u901a\u8fc7\u6811\u54c8\u5e0c\u5e93\u7684\u6761\u4ef6\u53c2\u6570\u7ec4\u6210\u7684\u5217\u8868\u3002 (",(0,n.jsx)(s.code,{children:"(c (list AGG_SIG_ME PUBLIC_KEY (sha256tree conditions)) conditions)"}),")"]}),(0,n.jsxs)(s.p,{children:["02:00",(0,n.jsx)(s.br,{}),"\n","\u7ec4\u5408\u8bed\u53e5\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c06\u662f\u4f20\u9012\u5230\u7a0b\u5e8f\u4e2d\u7684\u6761\u4ef6\u3002 \u90a3\u4e48\u8fd9\u662f\u505a\u4ec0\u4e48\u7684\u5462\uff1f ",(0,n.jsx)(s.code,{children:"AGG_SIG_ME"})," \u6761\u4ef6\u662f\u4e00\u4e2a\u6807\u51c6\u6761\u4ef6\uff0c\u7528\u516c\u94a5\u7b7e\u540d\u6d88\u606f\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u5728\u952e\u548c\u6d88\u606f\u662f\u6761\u4ef6\u53c2\u6570\u7684\u6811\u54c8\u5e0c\u4e4b\u540e\u5bf9\u952e\u8fdb\u884c\u66f2\u7ebf\u5904\u7406\u3002"]}),(0,n.jsxs)(s.p,{children:["02:20",(0,n.jsx)(s.br,{}),"\n","\u6211\u4eec\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u9632\u6b62\u519c\u6c11\u4fee\u6539\u6761\u4ef6\u3002 \u56e0\u6b64\uff0c\u4e3a\u4e86\u82b1\u8d39\u5e01\uff0c\u7528\u6237\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\u5305\u542b\u6761\u4ef6\u5217\u8868\u7684\u89e3\u51b3\u65b9\u6848\uff1b\u6216\u8005\u4ed6\u4eec\u5e0c\u671b\u5982\u4f55\u82b1\u8d39\u5e01\u7684\u65b9\u5f0f\uff1b\u4ee5\u53ca\u4e00\u4e2a\u7b7e\u540d\uff0c\u4ee5\u8868\u660e\u4ed6\u4eec\u662f\u6388\u6743\u8fdb\u884c\u64cd\u4f5c\u7684\u4eba\u3002"]}),(0,n.jsxs)(s.p,{children:["02:40",(0,n.jsx)(s.br,{}),"\n","\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff0c\u8be5\u89e3\u51b3\u65b9\u6848\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"CREATE_COIN"})," \u6761\u4ef6\u6765\u89e3\u9501\u5e01\u7684\u4ef7\u503c\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u56de\u6211\u4eec\u7684\u94b1\u5305\u3002 \u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5b8c\u6210\u521b\u5efa\u6b64\u5e01\u3002 \u6211\u4eec\u5c06\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"chia keys show"})," \u83b7\u53d6\u6211\u4eec\u7684\u4e3b\u516c\u94a5\uff0c\u5e76\u5c06\u5176\u66f2\u7ebf\u5316\u5230\u6211\u4eec\u7684\u7a0b\u5e8f\u4e2d\u3002 \u91cd\u8981\u7684\u662f\u8981\u7528 ",(0,n.jsx)(s.code,{children:"0x"})," \u524d\u7f00\u8868\u793a\u5b83\u662f\u4e00\u4e2a\u503c\u3002"]}),(0,n.jsxs)(s.p,{children:["03:00",(0,n.jsx)(s.br,{}),"\n","\u73b0\u5728\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"opc"})," \u83b7\u53d6\u62fc\u56fe\u5c55\u793a\uff0c\u5e76\u8f93\u5165\u7f16\u8bd1\u4ee3\u7801\u3002 \u8bb0\u5f97\u4fdd\u5b58\u8fd9\u4e2a\u4ee5\u5907\u5c06\u6765\u4f7f\u7528\u3002 \u5bf9\u4e8e\u62fc\u56fe\u54c8\u5e0c\uff0c\u6211\u4eec\u5c06\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"opc -h"})," \u5e76\u8f93\u5165\u7f16\u8bd1\u4ee3\u7801\u3002 \u6211\u4eec\u4e5f\u4f1a\u4fdd\u5b58\u8fd9\u4e2a\u4ee5\u5907\u5c06\u6765\u4f7f\u7528\u3002 \u6211\u4eec\u9700\u8981\u5c06\u62fc\u56fe\u54c8\u5e0c\u7f16\u7801\u6210\u4e00\u4e2a\u5730\u5740\u3002 \u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cdv encode --prefix txch"})," \u5e76\u8f93\u5165\u62fc\u56fe\u54c8\u5e0c\u3002"]}),(0,n.jsxs)(s.p,{children:["03:20",(0,n.jsx)(s.br,{}),"\n","\u8fd9\u7ed9\u4e86\u6211\u4eec\u62fc\u56fe\u5730\u5740\u3002 \u73b0\u5728\uff0c\u6211\u4eec\u5c06\u53d1\u9001\u4e00\u5b9a\u91cf\u7684 chia \u5230\u8fd9\u4e2a\u5730\u5740\u4ee5\u9501\u5b9a\u5b83\u3002 \u7136\u540e\u6211\u4eec\u4f1a\u68c0\u67e5\u72b6\u6001\u3002 \u4e00\u65e6\u786e\u8ba4\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u82b1\u8d39\u5b83\u4e86\u3002"]}),(0,n.jsxs)(s.p,{children:["03:40",(0,n.jsx)(s.br,{}),"\n","\u8981\u82b1\u8d39\u8fd9\u4e2a\u5e01\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u82b1\u8d39\u5305\u3002 \u770b\u4e00\u4e0b\u8fd9\u4e2a\u5927\u7eb2\u3002 \u8fd9\u5e94\u8be5\u770b\u8d77\u6765\u5f88\u719f\u6089\uff0c\u5c31\u50cf\u6211\u4eec\u5728\u4e0a\u4e00\u4e2a\u89c6\u9891\u4e2d\u521b\u5efa\u7684\u82b1\u8d39\u5305\u4e00\u6837\u3002 \u6211\u4eec\u9700\u8981\u56db\u4ef6\u4e1c\u897f\uff0c\u5e01\u8bb0\u5f55\uff0c\u6211\u4eec\u5df2\u7ecf\u8ba1\u7b97\u8fc7\u7684\u62fc\u56fe\u5c55\u793a\uff0c\u6211\u4eec\u60f3\u8981\u63d0\u4f9b\u7684\u89e3\u51b3\u65b9\u6848\u4ee5\u53ca\u4e00\u4e2a\u805a\u5408\u7b7e\u540d\u6765\u6388\u6743\u6211\u4eec\u7684\u82b1\u8d39\u3002"]}),(0,n.jsxs)(s.p,{children:["04:00",(0,n.jsx)(s.br,{}),"\n","\u8981\u83b7\u53d6\u5e01\u8bb0\u5f55\uff0c\u8bf7\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cdv rpc coinrecords --by puzzlehash"}),"\uff0c\u5e76\u8f93\u5165\u4e4b\u524d\u7684\u62fc\u56fe\u54c8\u5e0c\u3002 \u590d\u5236\u5e01\u5bf9\u8c61\uff0c\u5e76\u5c06\u5176\u7c98\u8d34\u5230\u82b1\u8d39\u5305\u6a21\u677f\u4e2d\u3002 \u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u8f93\u5165\u6211\u4eec\u4e4b\u524d\u8ba1\u7b97\u8fc7\u7684\u62fc\u56fe\u5c55\u793a\u3002 \u5bf9\u4e8e\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u5c06\u9700\u8981\u505a\u4e00\u4e9b\u5de5\u4f5c\u3002"]}),(0,n.jsxs)(s.p,{children:["04:20",(0,n.jsx)(s.br,{}),"\n","\u6211\u4eec\u5c06\u4f7f\u7528\u6807\u51c6\u6761\u4ef6 ",(0,n.jsx)(s.code,{children:"CREATE_COIN"})," \u6765\u89e3\u9501\u5e01\u7684\u4ef7\u503c\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u56de\u6211\u4eec\u7684\u94b1\u5305\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u9700\u8981\u6211\u4eec\u7684\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"chia wallet get address"})," \u83b7\u53d6\uff0c\u7136\u540e\u89e3\u7801\u4ee5\u83b7\u53d6\u94b1\u5305\u5730\u5740\u62fc\u56fe\u54c8\u5e0c\uff0c\u5e76\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"cdv decode"})," \u548c\u6211\u4eec\u7684\u5730\u5740\u3002"]}),(0,n.jsxs)(s.p,{children:["04:40",(0,n.jsx)(s.br,{}),"\n","\u4e3a\u4e86\u5236\u4f5c\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u5c06\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u5176\u4e2d ",(0,n.jsx)(s.code,{children:"51"})," \u662f ",(0,n.jsx)(s.code,{children:"CREATE_COIN"})," \u6761\u4ef6\u4ee3\u7801\uff0c\u6211\u4eec\u7684\u94b1\u5305\u5730\u5740\u62fc\u56fe\u54c8\u5e0c\uff0c\u4ee5\u53ca\u4e00\u4e2a\u4ee5 mojo \u4e3a\u5355\u4f4d\u7684\u91d1\u989d\u3002 \u6211\u4eec\u53ef\u4ee5\u5c06\u6b64\u54cd\u5e94\u8f93\u5165\u5230\u6211\u4eec\u7684\u82b1\u8d39\u5305\u7684\u89e3\u51b3\u65b9\u6848\u4e2d\u3002"]}),(0,n.jsxs)(s.p,{children:["05:00",(0,n.jsx)(s.br,{}),"\n","\u6700\u540e\uff0c\u805a\u5408\u7b7e\u540d\u3002 \u8bf7\u8bb0\u4f4f\uff0c\u6211\u4eec\u6b63\u5728\u7b7e\u540d\u7684\u6d88\u606f\u662f\u6211\u4eec\u7684\u6761\u4ef6\u7684\u6811\u54c8\u5e0c\uff1b\u6216\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848\u3002 \u9996\u5148\uff0c\u8ba9\u6211\u4eec\u751f\u6210\u8be5\u54c8\u5e0c\u3002 \u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5e01 ID \u548c\u8d77\u6e90\u6311\u6218\u3002 \u8d77\u6e90\u6311\u6218\u662f\u6bcf\u4e2a\u7f51\u7edc\u7684\u6807\u51c6\u503c\u3002"]}),(0,n.jsxs)(s.p,{children:["05:20",(0,n.jsx)(s.br,{}),"\n","\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165 ",(0,n.jsx)(s.code,{children:"chia show -s"})," \u5e76\u641c\u7d22 'genesis challenge' \u6765\u627e\u5230\u9002\u5f53\u7684\u6311\u6218\u3002 \u5bf9\u4e8e\u5e01 ID\uff0c\u5b9e\u9645\u4e0a\u6211\u4eec\u9700\u8981\u7236 ID\u3001\u62fc\u56fe\u54c8\u5e0c\u548c\u91d1\u989d\uff0c\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u5728\u6211\u4eec\u4e4b\u524d\u590d\u5236\u7684\u5e01\u8bb0\u5f55\u4e2d\u627e\u5230\u3002"]}),(0,n.jsxs)(s.p,{children:["05:40",(0,n.jsx)(s.br,{}),"\n","\u8981\u83b7\u53d6\u5e01 ID\uff0c\u6211\u4eec\u5c06\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cdv inspect -id coins"}),"\uff0c\u7136\u540e\u8f93\u5165\u7236 ID\u3001\u62fc\u56fe\u54c8\u5e0c\u548c\u91d1\u989d\u3002 \uff08",(0,n.jsx)(s.code,{children:"cdv inspect -id coins --parent-id [PARENT_ID] --puzzle-hash [PUZZLE_HASH] --amount [AMOUNT]"}),"\uff09",(0,n.jsx)(s.code,{children:"AGG_SIG_ME"})," \u6761\u4ef6\u671f\u671b\u6761\u4ef6\u6811\u54c8\u5e0c\u3001\u5e01 ID \u548c\u8d77\u6e90\u6311\u6218\u7684\u8fde\u63a5\uff0c\u56e0\u6b64\u8fd0\u884c"]}),(0,n.jsxs)(s.p,{children:["06:00",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.code,{children:"concat"})," \u6761\u4ef6\u6811\u54c8\u5e0c\u3001\u5e01 ID \u548c\u8d77\u6e90\u6311\u6218\u3002 \u786e\u4fdd\u4f7f\u7528\u524d\u7f00 ",(0,n.jsx)(s.code,{children:"0x"})," \u8868\u793a\u8fd9\u4e9b\u90fd\u662f\u503c\u3002 \u73b0\u5728\u8ba9\u6211\u4eec\u5bf9\u6b64\u6d88\u606f\u8fdb\u884c\u7b7e\u540d\uff0c\u5e76\u4e14\u7531\u4e8e\u6211\u4eec\u6ca1\u6709\u5c06\u5176\u7528\u4f5c\u503c\uff0c\u8bf7\u8bb0\u4f4f\u8fd9\u6b21\u5220\u9664 ",(0,n.jsx)(s.code,{children:"0x"})," \u524d\u7f00\u3002"]}),(0,n.jsxs)(s.p,{children:["06:20",(0,n.jsx)(s.br,{}),"\n","\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5c06\u6b64\u7b7e\u540d\u8f93\u5165\u5230\u6211\u4eec\u7684\u82b1\u8d39\u5305\u4e2d\u5e76\u8fdb\u884c\u63a8\u9001\u3002 \u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cdv rpc pushtx spendbundle.json"}),"\u3002 \u5982\u679c\u60a8\u7684\u7b7e\u540d\u4e0d\u6b63\u786e\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u4e2a\u5931\u8d25\u6d88\u606f\u3002 \u5426\u5219\uff0c\u606d\u559c\uff01 \u60a8\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u667a\u80fd\u5e01\uff0c\u5e76\u4f7f\u7528\u7b7e\u540d\u8fdb\u884c\u4e86\u4fdd\u62a4\u3002"]}),(0,n.jsxs)(s.p,{children:["06:40",(0,n.jsx)(s.br,{}),"\n","\u5728\u672c\u89c6\u9891\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u7b7e\u540d\u7684\u5de5\u4f5c\u539f\u7406\u3001\u5b83\u4eec\u7684\u91cd\u8981\u6027\u4ee5\u53ca\u5982\u4f55\u5c06\u5b83\u4eec\u5b9e\u73b0\u5230\u667a\u80fd\u5e01\u4e2d\u3002 \u975e\u5e38\u611f\u8c22\u89c2\u770b\uff0c\u6211\u4eec\u4e0b\u6b21\u89c1\u3002"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"0x \u524d\u7f00\uff1a"})," \u91cd\u8981\u7684\u662f\u8981\u8ddf\u8e2a\u6211\u4eec\u5982\u4f55\u4f7f\u7528\u4e0d\u540c\u7684\u503c\uff0c\u5e76\u4e86\u89e3 Chialisp \u5c06\u5982\u4f55\u5904\u7406\u5b83\u4eec\u3002 \u4e00\u4e2a\u5e38\u89c1\u7684\u5c0f\u9519\u8bef\u662f\u5fd8\u8bb0\u5411\u503c\u9644\u52a0 ",(0,n.jsx)(s.code,{children:"0x"}),"\uff0c\u6216\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5c06\u5176\u5220\u9664\u4ee5\u544a\u8bc9\u62fc\u56fe\u5982\u4f55\u6b63\u786e\u5904\u7406\u53c2\u6570\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u201c\u6682\u5b58\u4ee5\u5907\u540e\u7528\u201d\uff1a"})," \u5728\u672c\u8bfe\u7a0b\u7684\u51e0\u4e2a\u5730\u65b9\uff0c\u6211\u4eec\u751f\u6210\u4e86\u9700\u8981\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u7684\u7ed3\u679c\uff0c\u6709\u65f6\u5019\u662f\u591a\u6b21\u3002 \u8fd9\u4e9b\u7ed3\u679c\u4e5f\u6ca1\u6709\u660e\u663e\u7684\u6307\u793a\u7b26\u8868\u660e\u5b83\u4eec\u662f\u4ec0\u4e48\u3002 \u4e3a\u4e86\u4ee5\u540e\u4f7f\u7528\uff0c\u5c06\u8fd9\u4e9b\u7ed3\u679c\u4e34\u65f6\u4fdd\u5b58\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u662f\u5f88\u6709\u5e2e\u52a9\u7684\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u77e5\u8bc6\u68c0\u6d4b",children:"\u77e5\u8bc6\u68c0\u6d4b"}),"\n",(0,n.jsx)(s.admonition,{title:"\u95ee\u9898 1 - \u5bc6\u94a5",type:"tip",children:(0,n.jsx)(s.p,{children:"\u6b63\u786e\u8fd8\u662f\u9519\u8bef\u3002 \u4f60\u9700\u8981\u4f7f\u7528\u67d0\u4eba\u7684\u79c1\u94a5\u6765\u9501\u5b9a\u4e00\u679a\u786c\u5e01\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u80fd\u591f\u82b1\u8d39\u3002"})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,n.jsx)(s.p,{children:"\u9519\u8bef \u4f60\u5e94\u8be5\u4f7f\u7528\u4ed6\u4eec\u7684\u516c\u94a5\u3002 \u79c1\u94a5\u5e94\u4fdd\u5bc6\uff0c\u6c38\u8fdc\u4e0d\u5e94\u900f\u9732\u7ed9\u4efb\u4f55\u4eba\u3002"})]}),"\n",(0,n.jsx)(s.admonition,{title:"\u95ee\u9898 2 - \u805a\u5408\u7b7e\u540d",type:"tip",children:(0,n.jsx)(s.p,{children:"\u805a\u5408\u7b7e\u540d\u7531\u54ea\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1f"})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"AGG_SIG_ME"}),"\u6761\u4ef6\u671f\u671b\u4ee5\u4e0b\u503c\u7684\u4e32\u8054\uff1a"]}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u6761\u4ef6\u7684\u6811\u54c8\u5e0c\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5e01\u7684ID\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u521b\u4e16\u6311\u6218\u3002"}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u9644\u52a0\u8d44\u6e90",children:"\u9644\u52a0\u8d44\u6e90"}),"\n",(0,n.jsx)(s.h3,{id:"\u53ef\u8fd0\u884c\u7684chialisp\u548cclvm\u63d2\u4ef6",children:"\u53ef\u8fd0\u884c\u7684Chialisp\u548cclvm\u63d2\u4ef6"}),"\n",(0,n.jsxs)(s.p,{children:["\u6709\u5173\u4f7f\u7528\u8fd9\u4e9b\u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.jsx)(s.a,{href:"/academy-overview#%E5%8F%AF%E8%BF%90%E8%A1%8C%E7%9A%84chialisp%E5%92%8Cclvm%E6%8F%92%E4%BB%B6",children:"\u5b66\u9662\u6982\u8ff0"}),"\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"chialisp-\u63d2\u4ef6",children:"Chialisp \u63d2\u4ef6"}),"\n",(0,n.jsx)(l.A,{flavor:"chialisp",input:"(10 99)",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-chialisp",children:'(mod (arg1 arg2)\n    (if (> (+ arg1 arg2) 100) "large" "small")\n)\n'})})}),"\n",(0,n.jsx)(s.h4,{id:"clvm\u63d2\u4ef6",children:"Clvm\u63d2\u4ef6"}),"\n",(0,n.jsx)(l.A,{flavor:"clvm",input:"(1)",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-chialisp",children:'(a (i 2 (q 1 . "true") (q 1 . "false")) 1)\n'})})}),"\n",(0,n.jsx)(s.h3,{id:"\u94fe\u63a5",children:"\u94fe\u63a5"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.chia.net/guides/chialisp-concepts",children:"Chialisp\u57fa\u672c\u6982\u5ff5"}),"\uff1a\u5305\u62ec\u67ef\u91cc\u5316\uff08currying\uff09\u3001\u5185\u90e8\u8c1c\u9898\uff08inner puzzles\uff09\u548c\u6761\u4ef6\u53d8\u6362\uff08morphing conditions\uff09\u7684\u6982\u8ff0\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u6307\u5bfc\u6027\u7684",(0,n.jsx)(s.a,{href:"https://docs.chia.net/guides/",children:"Chialisp\u6f14\u7ec3"}),"\uff1a\u5b89\u88c5\u3001\u521b\u5efa\u667a\u80fd\u5e01\u548c\u4f7f\u7528BLS\u7b7e\u540d\u7684\u6307\u5357\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["Chialisp",(0,n.jsx)(s.a,{href:"https://chialisp.com/",children:"\u8be6\u7ec6\u6587\u6863"}),"\uff1a\u63d0\u4f9b\u6709\u5173Chialisp\u5404\u4e2a\u65b9\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["Support ",(0,n.jsx)(s.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3823:(e,s,i)=>{"use strict";i.d(s,{A:()=>y});var n=i(5293),r=i(11),l=i(1765),c=i(6540),t=i(5604),o=i(6069),a=i.n(o),d=i(5871),h=i.n(d),p=i(9031),x=i.n(p);function j(e){return e instanceof Array||(0,c.isValidElement)(e)?c.Children.toArray(e).reduce(((e,s)=>{let i="";return i=(0,c.isValidElement)(s)&&m(s)?j(s.props.children):(0,c.isValidElement)(s)&&!m(s)?"":u(s),e.concat(i)}),""):u(e)}function u(e){return null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString()}function m(e){return(0,c.isValidElement)(e)&&Boolean(e.props.children)}var g=i(4848);function y(e){let{children:s,flavor:i,input:o,tests:a,reporter:d}=e;const{colorMode:p}=(0,n.G)(),u=(0,c.useMemo)((()=>j(s).trim()),[]),[m,y]=(0,c.useState)(u),[f,v]=(0,c.useState)(o??Object.keys(a??{})[0]?.trim()??""),[C,E]=(0,c.useState)(""),[S,k]=(0,c.useState)(0n),[w,A]=(0,c.useState)(null),I=e=>e.replace("Error: ",""),_=(e,s)=>{try{return e.run(s)}catch(i){return E(`While evaluating: ${I(""+i)}`),null}},z=()=>{const e=(()=>{try{return r.Program.fromSource(m)}catch(e){return E(`While parsing: ${I(""+e)}`),null}})();if(!e)return;const s="clvm"===i||e.isCons&&e.first.equals(r.Program.fromText("mod")),n=(e=>{if(i&&"chialisp"!==i)return e;try{return e.compile().value}catch(s){return E(`While compiling: ${I(""+s)}`),null}})(e);if(!n)return;const l=f?r.Program.fromSource(f):r.Program.nil,c=s?_(n,l):{value:n,cost:0n};c&&(E(c.value.toSource()),k(c.cost));let t=!0;for(const[i,o]of Object.entries(a??{})){const e=r.Program.fromSource(i),l=s?_(n,e)?.value:n;if(!l||l.toSource()!==o){t=!1;break}}d?.(t),A(t)},G=w?t.CMH:t.QCr,[F,D]=c.useState(!1);return(0,c.useEffect)((()=>D(!0)),[]),(0,g.jsx)(l.f4,{Prism:globalThis.Prism,theme:F&&("dark"===p?h():x()),code:m,language:"chialisp",children:e=>{let{className:s,style:n}=e;return(0,g.jsxs)("pre",{className:s,style:{...n,position:"relative"},children:[f?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{code:f,setCode:v,language:"chialisp"}),(0,g.jsx)("hr",{style:{marginTop:"14px",marginBottom:"14px"}})]}):"",(0,g.jsx)(b,{code:m,setCode:y,language:"chialisp"}),(0,g.jsx)("div",{style:{position:"absolute",top:"16px",right:"16px"},children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[(0,g.jsx)("span",{style:{marginRight:"8px"},children:i&&"chialisp"!==i?"CLVM":"Chialisp"}),!f&&(0,g.jsx)(t.TlQ,{size:24,className:"icon-button",cursor:"pointer",onClick:()=>v("()")}),(0,g.jsx)(t.gSK,{size:24,className:"icon-button",cursor:"pointer",onClick:z})]})}),C?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("hr",{style:{marginTop:"14px",marginBottom:"14px"}}),(0,g.jsx)("div",{style:{display:"inline-block"},children:(0,g.jsx)(b,{code:C,language:"chialisp"})}),C&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:{display:"inline-block",position:"absolute",right:"60px"},children:(0,g.jsx)(b,{code:`Cost: ${S}`,language:"chialisp"})}),(0,g.jsx)(G,{size:24,color:w?"#77FF77":"#FF7777",style:{position:"absolute",bottom:"16px",right:"16px"}})]})]}):""]})}})}function b(e){let{code:s,setCode:i,language:r}=e;const{colorMode:t}=(0,n.G)(),[o,d]=c.useState(!1);return(0,c.useEffect)((()=>d(!0)),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.f4,{Prism:globalThis.Prism,theme:o&&("dark"===t?h():x()),code:s,language:r,children:e=>{let{tokens:n,getLineProps:r,getTokenProps:l}=e,c=n.map(((e,s)=>(0,g.jsx)("div",{...r({line:e}),children:e.map(((e,s)=>(0,g.jsx)("span",{...l({token:e})},s)))},s)));return i?(0,g.jsx)(a(),{value:s,onValueChange:e=>i(e),highlight:()=>c,padding:0}):c}})})}},5871:e=>{e.exports={plain:{color:"#F8F8F2",backgroundColor:"#282A36",fontWeight:"bold"},styles:[{types:["keyword"],style:{color:"rgb(189, 147, 249)"}},{types:["listop","class-name","quotes"],style:{color:"rgb(80, 250, 123)"}},{types:["builtin"],style:{color:"rgb(5, 227, 223)"}},{types:["number","hexadecimal","string","boolean"],style:{color:"rgb(255, 184, 108)",fontWeight:"normal"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["variable"],style:{fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)",fontWeight:"normal"}},{types:["function","car"],style:{color:"rgb(241, 250, 140)"}}]}},9031:e=>{e.exports={plain:{color:"#383a42",backgroundColor:"#fafafa",fontWeight:"bold"},styles:[{types:["keyword"],style:{color:"#990096"}},{types:["listop","class-name","quotes"],style:{color:"#006100"}},{types:["builtin"],style:{color:"#127EAF"}},{types:["number","hexadecimal","string","boolean"],style:{color:"#B35C00",fontWeight:"normal"}},{types:["punctuation","symbol"],style:{color:"#383a42"}},{types:["variable"],style:{fontStyle:"italic"}},{types:["comment"],style:{color:"#73737D",fontWeight:"normal"}},{types:["function","car"],style:{color:"#0045DB"}}]}}}]);