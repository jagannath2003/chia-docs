"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1715],{2585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(4848),a=r(8453);const s={title:"Storage - Chia Farming Workload Analysis",slug:"/chia-farming-workload"},n=void 0,d={id:"resources/chia-farming-workload",title:"Storage - Chia Farming Workload Analysis",description:"Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @LebanonJon on Discord, or @LebanonJon on Twitter",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/resources/chia-farming-workload.md",sourceDirName:"resources",slug:"/chia-farming-workload",permalink:"/zh-Hans/chia-farming-workload",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/resources/chia-farming-workload.md",tags:[],version:"current",frontMatter:{title:"Storage - Chia Farming Workload Analysis",slug:"/chia-farming-workload"},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/zh-Hans/references"},next:{title:"K\u503c\u5927\u5c0f",permalink:"/zh-Hans/k-sizes"}},o={},l=[{value:"\u6458\u8981",id:"\u6458\u8981",level:2},{value:"Proof of space verification",id:"proof-of-space-verification",level:2},{value:"Storage workload profile",id:"storage-workload-profile",level:2},{value:"Average IO Size per request",id:"average-io-size-per-request",level:3},{value:"Calculated data read and disk bandwidth",id:"calculated-data-read-and-disk-bandwidth",level:3},{value:"Hard drive rated workloads",id:"hard-drive-rated-workloads",level:3},{value:"Measured data",id:"measured-data",level:2},{value:"Measurement tools",id:"measurement-tools",level:3},{value:"System configuration",id:"system-configuration",level:3},{value:"Data durability, uncorrectable bit error rate, and Chia farming",id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming",level:2},{value:"UBER of standard storage devices",id:"uber-of-standard-storage-devices",level:3},{value:"UBER in Chia",id:"uber-in-chia",level:3},{value:"What happens when an error occurs?",id:"what-happens-when-an-error-occurs",level:3},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @LebanonJon on ",(0,i.jsx)(t.a,{href:"https://discorg.gg/chia",children:"Discord"}),", or ",(0,i.jsx)(t.a,{href:"https://twitter.com/LebanonJon",children:"@LebanonJon"})," on Twitter"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1AJP8j673qfbxxju87SjGs174DMVFpzjS/edit?usp=sharing&ouid=108662600751303250659&rtpof=true&sd=true",children:"Model"})," in Excel"]}),"\n",(0,i.jsx)(t.h2,{id:"\u6458\u8981",children:"\u6458\u8981"}),"\n",(0,i.jsx)(t.p,{children:"Chia uses a consensus called proof of space and time, in which participants prove to the network that they are storing a certain amount of data through a process called farming."}),"\n",(0,i.jsx)(t.p,{children:"Farmers respond to network challenges to earn rewards for securing the Chia network, which involves generating proofs of space from stored data. The protocol for farming and harvesting was designed for quick and efficient verification of proofs of space while minimizing disk io (input/output). A harvester service checks plot files for partial proofs of space when a challenge is received. There is a plot filter designed to significantly reduce the amount of disk io required by requiring that a hash of the plot id and challenge contains a certain amount of zeros. We will explore the theoretical disk io requirements based on the protocols, and look at measured disk utilization during a real farming workload. The Chia farming workload differs from traditional enterprise or consumer storage use cases since the data stored in plot files contains no user data. The Chia farming workload is read-only, completely random distribution, and a low amount of data transferred between the device and host. Data durability (defined as the probability of not losing user data) and error rate requirements for Chia are significantly reduced compared to storing user data and may constitute a new class of storage media and promote used hardware that otherwise would not be suitable."}),"\n",(0,i.jsx)(t.h2,{id:"proof-of-space-verification",children:"Proof of space verification"}),"\n",(0,i.jsxs)(t.p,{children:["The proof of space construction and the ",(0,i.jsx)(t.a,{href:"/proof-of-space",children:"Proof of Space page"})," contains the details on the format for plot files. A plot file size is determined by a k value where each plot is made up of 7 tables each with 2^k entries. When a challenge arrives the plot filter is applied to reduce the disk io by the value of the plot filter constant, which is currently set to 512. The probability of a plot being accessed each challenge, which happens on the signage point interval time, is 1/512. The probability of an individual disk being accessed can be found with the binomial distribution function cumulative probability with a probability per plot, n trials equal to the number of plots on the disk (probability of X successes \u2265 1) per signage point. The amount of IOPS (input/output operations per second) can be estimated by determining the mean of the plot filter passes per day and multiplying by the number of seeks required for a proof quality check. In the pooling protocol a pool operator requests several partial proofs of space per day per drive to verify that the pool participant is indeed storing as much data as they claim. The bandwidth and amount of data transferred can be estimated by looking at the average blocksize of the read requests multiplied by the IOPS."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Constants in proof of space that were chosen for Chia"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Signage point time (seconds): 9.375"}),"\n",(0,i.jsx)(t.li,{children:"Plot filter: 512"}),"\n",(0,i.jsx)(t.li,{children:"K value minimum: 32"}),"\n",(0,i.jsx)(t.li,{children:"IO Proof quality check: 9 read requests"}),"\n",(0,i.jsx)(t.li,{children:"IO Full proof of space (and partial request from pool): 64 read requests"}),"\n",(0,i.jsx)(t.li,{children:"Partials per day: set by pool operators, estimated at 300 for reference"}),"\n",(0,i.jsx)(t.li,{children:"Average IO size per request (kB): 14"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"storage-workload-profile",children:"Storage workload profile"}),"\n",(0,i.jsx)(t.p,{children:"We can estimate the storage workload on a given drive capacity (measured in TB, terabytes) by knowing the k size selected and n number of plots that fit on the drive."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Drive size (TB)"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"4"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"8"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"10"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"12"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"14"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"16"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"18"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"20"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"k value"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"32"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Number of plots"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"36"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"73"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"91"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"110"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"128"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"146"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"165"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"183"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"k value"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Number of plots"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"8"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"17"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"21"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"25"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"30"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"34"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"38"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"43"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Events per day, plots passing filter = signage points per day \u2715 n plots / filter constant number of reads =(Events per day, plots passing filter \u2715 IO Proof quality check) +(IO Full proof of space \u2715 Partials per day",(0,i.jsx)(t.br,{}),"\n","IOPS average =number of reads per day / 86400 seconds MB read per day = Number of reads \u2715 average IO size per request (kB) / 1000",(0,i.jsx)(t.br,{}),"\n","Bandwidth = IOPS * Block Size"]}),"\n",(0,i.jsx)(t.h3,{id:"average-io-size-per-request",children:"Average IO Size per request"}),"\n",(0,i.jsx)(t.p,{children:"An IO kernel trace was taken on a sample of drives to determine the block size requests on the block layer (commands sent directly to the drive over the SATA interface), and found that the majority of the IO commands sent were 12 and 16kB transfers. This will likely change very slightly with different storage hardware, operating systems, storage devices, drivers, and filesystems."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"iosize_hist",src:r(2974).A+"",title:"iosize_hist",width:"1027",height:"461"})}),"\n",(0,i.jsx)(t.p,{children:"Measured data from ext4 filesystem in Linux resulted in an average blocksize of 13.9kB with n=44 drives of capacity 18TB 14.5kB with n=94 drives capacity ranging from 8-18TB"}),"\n",(0,i.jsx)(t.h3,{id:"calculated-data-read-and-disk-bandwidth",children:"Calculated data read and disk bandwidth"}),"\n",(0,i.jsx)(t.p,{children:"Chia Farming Total Amount of data read per day per drive capacity"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"data_per_day",src:r(7365).A+"",title:"data_per_day",width:"1244",height:"856"})}),"\n",(0,i.jsx)(t.p,{children:"Bandwidth and amount of data read are all directly proportional to the number of io requests required for the proof quality checks and partial proof of space generation. K=32 with a difficulty of 1 is the theoretical maximum bandwidth for Chia farming. It is typical for a pool operator to automatically adjust the difficulty to target enough partials per day to get an accurate estimate of the farming capacity, without a significant increase in io on the device."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"bw_drive",src:r(110).A+"",title:"bw_drive",width:"1244",height:"856"})}),"\n",(0,i.jsx)(t.p,{children:"As expected, bandwidth per drive scales with the number of plots per drive (which is increased when a higher capacity disk is used) and increases with difficulty. K=34 offers a reduction in io requirements by reducing the number of plots per disk."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"prob_access",src:r(9966).A+"",title:"prob_access",width:"1244",height:"856"})}),"\n",(0,i.jsx)(t.h3,{id:"hard-drive-rated-workloads",children:"Hard drive rated workloads"}),"\n",(0,i.jsx)(t.p,{children:"Hard disk drive reliability is rated at a specified amount of data read and written per year, expressed in TB/year. Common 3.5in HDDs used in Chia farming are rated at 200-550TB per year workload depending on the drive model and recommended use case. The amount of data written for Chia is often just the size of the drive, because plots are generated on ephemeral storage and then sequentially copied over to the drive. The amount of data read can be calculated by looking at the bandwidth of the drive and multiplying it by time. In the worst case, with the largest hard drive on the market today at 20TB, full of k=32 plots, at difficulty 1 pooling would read an average of 2.1GB per day, or 750 GB per year. This is 0.37% of the rated workload assuming a 200TB/year - Chia is an extremely light workload compared to typical end-user workloads (e.g. NAS, file or object storage, video streaming)."}),"\n",(0,i.jsx)(t.h2,{id:"measured-data",children:"Measured data"}),"\n",(0,i.jsx)(t.p,{children:"Data was collected across a sample size of drives of varying capacity, as detailed in the system configuration. The duration of the measured data was 48 hours with a scraping period of 5s."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"capacity"}),(0,i.jsx)(t.th,{children:"Sample Size"}),(0,i.jsx)(t.th,{children:"bandwidth (kB/s)"}),(0,i.jsx)(t.th,{children:"IOPS"}),(0,i.jsx)(t.th,{children:"blocksize (kB)"}),(0,i.jsx)(t.th,{children:"latency (ms)"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"3.45"}),(0,i.jsx)(t.td,{children:"0.23"}),(0,i.jsx)(t.td,{children:"14.76"}),(0,i.jsx)(t.td,{children:"5.18"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"4.17"}),(0,i.jsx)(t.td,{children:"0.28"}),(0,i.jsx)(t.td,{children:"14.72"}),(0,i.jsx)(t.td,{children:"7.04"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"12"}),(0,i.jsx)(t.td,{children:"16"}),(0,i.jsx)(t.td,{children:"5.03"}),(0,i.jsx)(t.td,{children:"0.34"}),(0,i.jsx)(t.td,{children:"14.69"}),(0,i.jsx)(t.td,{children:"7.11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"14"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"6.02"}),(0,i.jsx)(t.td,{children:"0.41"}),(0,i.jsx)(t.td,{children:"14.72"}),(0,i.jsx)(t.td,{children:"5.21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"16"}),(0,i.jsx)(t.td,{children:"27"}),(0,i.jsx)(t.td,{children:"6.20"}),(0,i.jsx)(t.td,{children:"0.44"}),(0,i.jsx)(t.td,{children:"14.14"}),(0,i.jsx)(t.td,{children:"6.27"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"18"}),(0,i.jsx)(t.td,{children:"44"}),(0,i.jsx)(t.td,{children:"7.46"}),(0,i.jsx)(t.td,{children:"0.51"}),(0,i.jsx)(t.td,{children:"14.57"}),(0,i.jsx)(t.td,{children:"5.53"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Total"}),(0,i.jsx)(t.td,{children:"94"}),(0,i.jsx)(t.td,{children:"6.46"}),(0,i.jsx)(t.td,{children:"0.45"}),(0,i.jsx)(t.td,{children:"14.48"}),(0,i.jsx)(t.td,{children:"6.02"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"We compare the modeled metrics of an 18TB drive to the measure data collected"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric"}),(0,i.jsx)(t.th,{children:"Estimated/Modeled"}),(0,i.jsx)(t.th,{children:"Measured"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bandwidth per drive (kB/s)"}),(0,i.jsx)(t.td,{children:"4.59 kB/s"}),(0,i.jsx)(t.td,{children:"7.46 kB/s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IOPS"}),(0,i.jsx)(t.td,{children:"0.33"}),(0,i.jsx)(t.td,{children:"0.51"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Disk busy time"}),(0,i.jsx)(t.td,{children:"0.136%"}),(0,i.jsx)(t.td,{children:"0.24%"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Latency per request (ms)"}),(0,i.jsx)(t.td,{children:"4.3"}),(0,i.jsx)(t.td,{children:"6.02"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Disk IOPS"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"IOPS",src:r(4725).A+"",title:"IOPS",width:"1861",height:"1307"})}),"\n",(0,i.jsx)(t.p,{children:"Disk bandwidth"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"bw",src:r(9595).A+"",title:"bw",width:"1859",height:"1300"})}),"\n",(0,i.jsx)(t.p,{children:"Latency"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"latency",src:r(2254).A+"",title:"latency",width:"1854",height:"1761"})}),"\n",(0,i.jsx)(t.p,{children:"Disk Utilization"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"disk_busy",src:r(8089).A+"",title:"disk_busy",width:"1854",height:"1133"})}),"\n",(0,i.jsx)(t.p,{children:"CPU Busy Time"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"cpu busy time",src:r(7297).A+"",title:"cpu",width:"464",height:"226"})}),"\n",(0,i.jsx)(t.p,{children:"System CPU Utilization"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"system utilization",src:r(6674).A+"",title:"cpu",width:"1871",height:"410"})}),"\n",(0,i.jsx)(t.p,{children:"Network Traffic (Chia harvester only)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"network",src:r(3437).A+"",title:"network traffic",width:"1866",height:"404"})}),"\n",(0,i.jsx)(t.h3,{id:"measurement-tools",children:"Measurement tools"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://grafana.com/",children:"Grafana"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://prometheus.io/docs/guides/node-exporter/",children:"Node Exporter"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://prometheus.io/",children:"Prometheus"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Open-CAS/standalone-linux-io-tracer",children:"Standalone Linux IO Tracer"})}),"\n",(0,i.jsx)(t.li,{children:"dstat, iostat (sysstat)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"system-configuration",children:"System configuration"}),"\n",(0,i.jsx)(t.p,{children:"Measured data collected from the following system"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Motherboard: Intel R1208WFTYS\nIntel Xeon Gold 6140 CPU, 128GB DDR4 @ 2400MT/s\nHBA: LSI 9300-8e\nJBOD: Supermicro 90 Bay, SuperChassis 946ED-R2KJBOD\nDrive Models:\nSeagate Exos x16 16TB, Firmware SN03\nWD HC550 18TB, Firmware: PCGNW232WDC\nWD WD120EDAZ: 8, 10, 12, 14TB, Firmware: 81.00A81\n"})}),"\n",(0,i.jsx)(t.h2,{id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming",children:"Data durability, uncorrectable bit error rate, and Chia farming"}),"\n",(0,i.jsx)(t.p,{children:'UBER is defined as "A metric for the rate of occurrence of data errors, equal to the number of data errors per bits read." In HDD and SSD, UBER is generally reflected in lifetime values for an entire population, but the actual rates of error and rate of increase are dependent on many factors including time, temperature, and amount of wear on the storage media. In SSDs this is adjusted for and measured per the JESD218B specification which defines UBER for SSDs using "The numerator is the total count of data errors detected over the full TBW rating for the population of SSDs, or the sample of SSDs in the endurance verification."'}),"\n",(0,i.jsx)(t.h3,{id:"uber-of-standard-storage-devices",children:"UBER of standard storage devices"}),"\n",(0,i.jsxs)(t.p,{children:["Consumer HDDs are rated for less than 1 error per 10",(0,i.jsx)("sup",{children:"14"})," (sometimes shown as UBER of 10",(0,i.jsx)("sup",{children:"-14"}),"). This means that if a consumer reads on 800TB of data, they would expect a single read error on average."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Device"}),(0,i.jsx)(t.th,{children:"UBER"}),(0,i.jsx)(t.th,{children:"Data read per error"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Consumer HDD"}),(0,i.jsx)(t.td,{children:"10-14"}),(0,i.jsx)(t.td,{children:"800 TB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Enterprise HDD"}),(0,i.jsx)(t.td,{children:"10-15"}),(0,i.jsx)(t.td,{children:"8 PB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SSD"}),(0,i.jsx)(t.td,{children:"10-17"}),(0,i.jsx)(t.td,{children:"800 PB"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"uber-in-chia",children:"UBER in Chia"}),"\n",(0,i.jsx)(t.p,{children:"In a storage system containing user data, an uncorrectable read error on a single storage device is handled by redundancy or parity, generally through RAID, erasure code, mirror, or backup of the data. Plot files contain random cryptographic hashes. If a device containing plots fails, no useful data is lost. Therefore, the best practice for Chia is not to include any data protection. If there is a single uncorrectable read error somewhere on the storage device, we could therefore calculate the probability of reading that LBA (logical block address) by using the estimated amount of data read per day in the Chia farming workload - because the reads are perfectly random, each read request coming from the harvester service will have an equal probability of being accessed."}),"\n",(0,i.jsx)(t.p,{children:"Using the UBER and the estimated amount of data read per day with Chia farming, we can approximate the number of years it would take to encounter an error while farming Chia."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"UBER",src:r(9402).A+"",title:"UBER",width:"1200",height:"742"})}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-when-an-error-occurs",children:"What happens when an error occurs?"}),"\n",(0,i.jsxs)(t.p,{children:["Each k=32 plot file contains around 4.3 billion proofs. Depending on where the error occurs, in metadata, table 1, etc. there are a certain amount of proofs within a plot file that will be corrupted. In the absolute worst case that an entire plot file gets corrupted. A more likely case would just be that a certain percentage of proofs are corrupt, and the likelihood of reading those given the amount of data read per day in the Chia farming workload is extremely low. If the uncorrectable read error collides with a lookup for a partial proof of space, the farmer would fail that single request for a partial proof of space or proof quality check. This would lower the user's estimated capacity for a short duration, but then revert to the mean. In other words, an error in Chia farming is not catastrophic. Chia farming workload is a very good fit for a storage device with a higher error rate, potentially even with an UBER of greater than 10",(0,i.jsx)("sup",{children:"-13 "}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Chia is a light workload for a hard drive, 309 times lower disk busy time than an example hyperscale data center workload[2]. Plot files contain random cryptographic hashes that can easily be created and no user data, removing data durability requirements for data storage in Chia farming. Proof of space is a novel use case for hard drives and can accept storage media with a high UBER compared to typical consumer and enterprise workloads. Chia farming will constitute a new class of storage that is optimized for high capacity, write once / read many, low power, and high error rate. Chia farming is a great fit for hard drive technology optimized for sequential write only, such as SMR (Shingled Magnetic Recording), and in the future NVMe ZNS (Zoned Name Spaces) paired with high capacity storage of a lower media grade. Chia farming would be an ideal use case for used storage, given the storage media is high enough capacity to maintain a competitive TCO compared to new more power-efficient disks."}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.jedec.org/standards-documents/jesd218b01",children:"JEDEC "}),"JESD218B.01 SOLID STATE DRIVE (SSD) REQUIREMENTS AND ENDURANCE TEST METHOD"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.usenix.org/system/files/fast21-pan.pdf",children:"Facebook's Tectonic Filesystem: Efficiency from Exascale"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9595:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bw-873a300af25d7147fb8dcb19f2979bb8.png"},110:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bw_drive-07b3cb42e0a93978256f609a441c466a.png"},6674:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/cpu-4d37c79ab38c06322e3cfacba6775ebe.png"},7297:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/cpu1-88fa0b4b9b174a63da789a05aae7179b.png"},7365:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/data_per_day-63d731accc72197842f1076e5f7c7b7b.png"},8089:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/disk_busy-30e336f99ead8b64b141c1435abdef53.png"},4725:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/iops-73e6fe55c4999e2d6839ddaa4017bddf.png"},2974:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/iosize_hist-190219243e9e76c2bc5bb8d9145983e7.png"},2254:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/latency-660c0a26ba53ce3873f0cf30ba293a4f.png"},3437:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/net-a524b6533296a516877749e576e4c0de.png"},9966:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/prob_access-430f862506ceef20bba0cd6de8c9fea0.png"},9402:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/uber-09f9747bd8e9eb88c1981b038bafab88.png"},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var i=r(6540);const a={},s=i.createContext(a);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);