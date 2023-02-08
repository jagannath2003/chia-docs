"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={title:"Plotting Software",slug:"/plotting-software"},r=void 0,l={unversionedId:"plotting/plotting-software",id:"plotting/plotting-software",title:"Plotting Software",description:"We are introducing the ability to choose alternative plotters when creating plots both in the Chia GUI and the CLI.",source:"@site/docs/plotting/plotting-software.md",sourceDirName:"plotting",slug:"/plotting-software",permalink:"/plotting-software",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-software.md",tags:[],version:"current",frontMatter:{title:"Plotting Software",slug:"/plotting-software"},sidebar:"tutorialSidebar",previous:{title:"Plotting Basics",permalink:"/plotting-basics"},next:{title:"K Sizes",permalink:"/k-sizes"}},s={},p=[{value:"madMAx",id:"madmax",level:2},{value:"Bladebit",id:"bladebit",level:2},{value:"How to use in Chia",id:"how-to-use-in-chia",level:2},{value:"Installation",id:"installation",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are introducing the ability to choose alternative plotters when creating plots both in the Chia GUI and the CLI."),(0,a.kt)("p",null,"The plotters supported include Bladebit, madMAx, and the original reference chiapos plotter. Each plotter has slightly different hardware requirements and may need slightly different options specified."),(0,a.kt)("h2",{id:"madmax"},"madMAx"),(0,a.kt)("p",null,"We are packaging a version of madMAx from a Chia Network fork, however, there are no substantial changes in the functionality of this plotter and we do not anticipate making improvements or responding to issues in madMAx. Issues with the madMAx plotter should continue to be addressed through the original madMAx repository on GitHub (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/madMAx43v3r/chia-plotter"},"https://github.com/madMAx43v3r/chia-plotter"),'). The Chia Network fork serves primarily as a means of generating build artifacts. We are including the madMAx plotter with the express permission of "madMAx43v3r" (',(0,a.kt)("a",{parentName:"p",href:"https://github.com/madMAx43v3r"},"https://github.com/madMAx43v3r"),")"),(0,a.kt)("p",null,"For details on settings and usage of madMAx please refer to the original madMAx GitHub repository, or run the help command\n",(0,a.kt)("inlineCode",{parentName:"p"},"chia plotters madmax -h")),(0,a.kt)("p",null,"The recommended configuration to start at is to set -r to the number of physical CPU cores in the system. The DRAM is set automatically determined by core count and bucket size, with less DRAM being used with larger buckets. The default of 256 is generally recommended for NVMe SSDs, although people can try different combinations to obtain the best plotting speeds."),(0,a.kt)("h2",{id:"bladebit"},"Bladebit"),(0,a.kt)("p",null,"Bladebit is a high-performance, RAM-only, k32-only plotter. It has high memory requirements: at least 416 GiB of RAM is required. Typically it is meant for high-end plotting setups. Bladebit is now an official part of Chia and it has been used successfully to produce petabytes worth of plots."),(0,a.kt)("p",null,"It was written from scratch with the intention of saturating CPU and memory usage. It can create a single k32 plot in as fast as 3 minutes, 12 seconds on Intel Ice Lake Xeon CPUs."),(0,a.kt)("p",null,"Linux and Windows are both supported, with Linux currently yielding significantly faster plot times. macOS is not supported at this time and bladebit is not available to select in the UI on macOS."),(0,a.kt)("p",null,"When using Bladebit the typical bottleneck becomes the final write to disk. To ensure uninterrupted plotting, users tend to choose to write the plots temporarily to a set of NVMe drives and then moving them from the NVMe drive to their final destination, whilst the next consecutive plot continues."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chia plotters bladebit -h\n")),(0,a.kt)("h2",{id:"how-to-use-in-chia"},"How to use in Chia"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"chia")," command for creating plots called ",(0,a.kt)("inlineCode",{parentName:"p"},"plotters"),". For compatibility, the original command for creating plots ",(0,a.kt)("inlineCode",{parentName:"p"},"chia plots create")," remains in place, however, this will always use the reference chiapos plotter. In order to use the other plotters, you must use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"chia plotters")," command. Command line options differ with each plotter, so be sure to check the available options using ",(0,a.kt)("inlineCode",{parentName:"p"},"chia plotters <plotter> -h"),'. Available plotter values include "chiapos", "bladebit", and "madmax".'),(0,a.kt)("p",null,"The UI also has new functionality to support selecting a plotter."),(0,a.kt)("p",null,"Note: Not all features are available for every plotter."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The bladebit and madMAx plotters will come packaged together with the installers on each platform. Using the install package (deb, rpm, dmg, exe) is the easiest way to get properly configured for using Chia with the alternative plotters. This is the supported method for installing and using Chia with the alternative plotters."),(0,a.kt)("p",null,"When running Chia by cloning the chia-blockchain git repository, it\u2019s possible to have the Chia CLI build and install BladeBit and madmax plotters from source. To install a plotter, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"chia plotters install <plotter>")," command, where ",(0,a.kt)("inlineCode",{parentName:"p"},"<plotter>"),' is either "bladebit" or "madmax". Chia will attempt to configure and build the specified plotter, but variations in OS environments may yield build failures. When using the ',(0,a.kt)("inlineCode",{parentName:"p"},"chia plotters install")," command, the source and built plotters will reside in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/plotters")," directory on macOS and Linux, or the ",(0,a.kt)("inlineCode",{parentName:"p"},"%HOMEDRIVE%%HOMEPATH%\\.chia\\mainnet\\plotters")," directory on Windows."))}d.isMDXComponent=!0}}]);