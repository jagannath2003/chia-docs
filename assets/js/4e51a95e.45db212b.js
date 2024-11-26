"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5160],{5845:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"walletconnect/offers","title":"Offer Commands","description":"Commands","source":"@site/docs/walletconnect/offers.md","sourceDirName":"walletconnect","slug":"/walletconnect-offers","permalink":"/walletconnect-offers","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/walletconnect/offers.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Offers","title":"Offer Commands","slug":"/walletconnect-offers"},"sidebar":"tutorialSidebar","previous":{"title":"DIDs","permalink":"/walletconnect-dids"},"next":{"title":"Check if Things are Working","permalink":"/troubleshooting/check-if-things-are-working"}}');var s=r(4848),n=r(8453);const t={sidebar_label:"Offers",title:"Offer Commands",slug:"/walletconnect-offers"},i=void 0,l={},h=[{value:"Commands",id:"commands",level:2},{value:"<code>chia_getAllOffers</code>",id:"chia_getalloffers",level:3},{value:"Output Data",id:"output-data",level:4},{value:"<code>chia_getOffersCount</code>",id:"chia_getofferscount",level:3},{value:"Output Data",id:"output-data-1",level:4},{value:"<code>chia_cancelOffer</code>",id:"chia_canceloffer",level:3},{value:"Output Data",id:"output-data-2",level:4},{value:"<code>chia_checkOfferValidity</code>",id:"chia_checkoffervalidity",level:3},{value:"Output Data",id:"output-data-3",level:4},{value:"<code>chia_takeOffer</code>",id:"chia_takeoffer",level:3},{value:"Output Data",id:"output-data-4",level:4},{value:"<code>chia_getOfferSummary</code>",id:"chia_getoffersummary",level:3},{value:"Output Data",id:"output-data-5",level:4},{value:"<code>chia_getOfferData</code>",id:"chia_getofferdata",level:3},{value:"Output Data",id:"output-data-6",level:4},{value:"<code>chia_getOfferRecord</code>",id:"chia_getofferrecord",level:3},{value:"Output Data",id:"output-data-7",level:4},{value:"<code>chia_createOfferForIds</code>",id:"chia_createofferforids",level:3},{value:"Output Data",id:"output-data-8",level:4},{value:"Types",id:"types",level:2},{value:"TradeRecord",id:"traderecord",level:3},{value:"TradeStatus",id:"tradestatus",level:3}];function a(e){const d={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsx)(d.h3,{id:"chia_getalloffers",children:(0,s.jsx)(d.code,{children:"chia_getAllOffers"})}),"\n",(0,s.jsx)(d.p,{children:"Gets a list of offers, based on certain search criteria."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"start?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Start index."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"end?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"End index."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"sortKey?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Sort key."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"reverse?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether to reverse order."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"includeMyOffers?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether to include own offers."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"includeTakenOffers?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Whether to include taken offers."})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data",children:"Output Data"}),"\n",(0,s.jsxs)(d.p,{children:["The output is an array of type ",(0,s.jsx)(d.a,{href:"/walletconnect-offers#traderecord",children:(0,s.jsx)(d.code,{children:"TradeRecord[]"})}),"."]}),"\n",(0,s.jsx)(d.h3,{id:"chia_getofferscount",children:(0,s.jsx)(d.code,{children:"chia_getOffersCount"})}),"\n",(0,s.jsx)(d.p,{children:"Gets the number of owned offers, taken offers, and total offers."}),"\n",(0,s.jsx)(d.h4,{id:"output-data-1",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"myOffersCount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Number of owned offers."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"takenOffersCount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Number of taken offers."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"total"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Total number of offers."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_canceloffer",children:(0,s.jsx)(d.code,{children:"chia_cancelOffer"})}),"\n",(0,s.jsx)(d.p,{children:"Cancels an offer either on-chain by spending the coins or off-chain by only removing it from the list."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"secure"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether to cancel the offer on-chain."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Transaction fee in mojos."})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-2",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_checkoffervalidity",children:(0,s.jsx)(d.code,{children:"chia_checkOfferValidity"})}),"\n",(0,s.jsx)(d.p,{children:"Checks whether or not an offer is still valid."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offerData"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]})})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-3",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"id"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"valid"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether the offer is valid."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_takeoffer",children:(0,s.jsx)(d.code,{children:"chia_takeOffer"})}),"\n",(0,s.jsx)(d.p,{children:"Accepts an offer and completes the transaction."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Transaction fee in mojos."})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-4",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeRecord"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-offers#traderecord",children:(0,s.jsx)(d.code,{children:"TradeRecord"})})}),(0,s.jsx)(d.td,{children:"Trade record."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_getoffersummary",children:(0,s.jsx)(d.code,{children:"chia_getOfferSummary"})}),"\n",(0,s.jsx)(d.p,{children:"Gets the summary object of an offer."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offerData"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]})})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-5",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"id"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"summary"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"TradeSummary"})}),(0,s.jsx)(d.td,{children:"Trade summary."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_getofferdata",children:(0,s.jsx)(d.code,{children:"chia_getOfferData"})}),"\n",(0,s.jsx)(d.p,{children:"Gets the data of an offer."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offerId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]})})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-6",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeRecord"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-offers#traderecord",children:(0,s.jsx)(d.code,{children:"TradeRecord"})})}),(0,s.jsx)(d.td,{children:"Trade record."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_getofferrecord",children:(0,s.jsx)(d.code,{children:"chia_getOfferRecord"})}),"\n",(0,s.jsx)(d.p,{children:"Gets the trade record of an offer."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offerId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]})})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-7",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsxs)(d.td,{children:["Use ",(0,s.jsx)(d.a,{href:"/walletconnect-offers#chia_getofferdata",children:(0,s.jsx)(d.code,{children:"chia_getOfferData"})})," if you need this."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeRecord"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-offers#traderecord",children:(0,s.jsx)(d.code,{children:"TradeRecord"})})}),(0,s.jsx)(d.td,{children:"Trade record."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"success"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"chia_createofferforids",children:(0,s.jsx)(d.code,{children:"chia_createOfferForIds"})}),"\n",(0,s.jsx)(d.p,{children:"Creates an offer for wallet ids."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"any"})}),(0,s.jsx)(d.td,{children:"Offered asset amounts."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"driverDict"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"any"})}),(0,s.jsx)(d.td,{children:"Driver dict object."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"validateOnly?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether to only validate the offer."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"disableJSONFormatting?"})," ",(0,s.jsx)(d.em,{children:"(optional)"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether to disable JSON formatting."})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"output-data-8",children:"Output Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"offer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeRecord"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-offers#traderecord",children:(0,s.jsx)(d.code,{children:"TradeRecord"})})}),(0,s.jsx)(d.td,{children:"Trade record."})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(d.h3,{id:"traderecord",children:"TradeRecord"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Parameter"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"acceptedAtTime"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)("code",{children:"number | null"})}),(0,s.jsx)(d.td,{children:"Timestamp when the trade was accepted."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"coinsOfInterest"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-commands#coin",children:(0,s.jsx)(d.code,{children:"Coin[]"})})}),(0,s.jsx)(d.td,{children:"Coins involved in trade."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"confirmedAtIndex"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Confirmation block index."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"createdAtTime"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Timestamp when the trade was created."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"isMyOffer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:"Whether this is the wallet's own offer."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"pending"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Record<string, number>"})}),(0,s.jsx)(d.td,{children:"Pending amounts."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sent"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"Number of peers the transaction was sent to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sentTo"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-commands#peer",children:(0,s.jsx)(d.code,{children:"Peer[]"})})}),(0,s.jsx)(d.td,{children:"Peers the transaction was sent to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"status"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/walletconnect-offers#tradestatus",children:(0,s.jsx)(d.code,{children:"TradeStatus"})})}),(0,s.jsx)(d.td,{children:"Trade status."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"summary"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"any"})}),(0,s.jsx)(d.td,{children:"Trade summary metadata."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"takenOffer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)("code",{children:"string | null"})}),(0,s.jsx)(d.td,{children:"Taken bech32m encoded offer data."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tradeId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Trade id."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"_offerData"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Bech32m encoded offer data."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"tradestatus",children:"TradeStatus"}),"\n",(0,s.jsx)(d.p,{children:"Values that can be returned for the trade_status. Note that offers cannot be resynced and are not available on-chain so granular trade_status is not always available."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Value"}),(0,s.jsx)(d.th,{})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PENDING_ACCEPT"})}),(0,s.jsx)(d.td,{children:"Acceptance has been pushed to the chain and is pending confirmation."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PENDING_CONFIRM"})}),(0,s.jsx)(d.td,{children:"Acceptance has been pushed to the chain and is pending confirmation."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PENDING_CANCEL"})}),(0,s.jsx)(d.td,{children:"Cancelation has been pushed to the chain (if applicable) and is pending confirmation."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CANCELLED"})}),(0,s.jsx)(d.td,{children:"Offer cancellation has been confirmed onchain (if applicable)."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CONFIRMED"})}),(0,s.jsx)(d.td,{children:"Offer acceptance has been confirmed onchain."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FAILED"})}),(0,s.jsx)(d.td,{children:"Offer acceptance failed, review logs for reasoning of failure."})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>t,x:()=>i});var c=r(6540);const s={},n=c.createContext(s);function t(e){const d=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(n.Provider,{value:d},e.children)}}}]);