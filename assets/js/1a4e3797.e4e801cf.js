"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2138],{5846:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(6540),a=r(4586);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},1283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var s=r(6540),a=r(4586),n=r(7823),c=r(5260),l=r(8774),o=r(1312),u=r(5846),i=r(5391),h=r(6347),d=r(2303),m=r(1088);const p=function(){const e=(0,d.A)(),t=(0,h.W6)(),r=(0,h.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(m.Hg)&&m.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(5891),f=r(2384),x=r(9913),y=r(6841),j=r(3810),S=r(7674),A=r(2849),C=r(4471);const w="searchContextInput_mXoe",v="searchQueryInput_CFBF",P="searchResultItem_U687",_="searchResultItemPath_uIbk",b="searchResultItemSummary_oZHr",F="searchQueryColumn_q7nx",R="searchContextColumn_oWAF";var T=r(3385),$=r(4848);function I(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=(0,u.W)(),{searchValue:n,searchContext:l,searchVersion:h,updateSearchPath:d,updateSearchContext:x}=p(),[y,j]=(0,s.useState)(n),[S,C]=(0,s.useState)(),[P,_]=(0,s.useState)(),b=`${e}${h}`,I=(0,s.useMemo)((()=>y?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{d(y),S&&(y?S(y,(e=>{_(e)})):_(void 0))}),[y,S]);const N=(0,s.useCallback)((e=>{j(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&j(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(m.Hg)||l||m.dz?await(0,g.Z)(b,l):{wrappedIndexes:[],zhDictionary:[]};C((()=>(0,f.m)(e,t,100)))}()}),[l,b]),(0,$.jsxs)(s.Fragment,{children:[(0,$.jsxs)(c.A,{children:[(0,$.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,$.jsx)("title",{children:I})]}),(0,$.jsxs)("div",{className:"container margin-vert--lg",children:[(0,$.jsx)("h1",{children:I}),(0,$.jsxs)("div",{className:"row",children:[(0,$.jsx)("div",{className:(0,i.A)("col",{[F]:Array.isArray(m.Hg),"col--9":Array.isArray(m.Hg),"col--12":!Array.isArray(m.Hg)}),children:(0,$.jsx)("input",{type:"search",name:"q",className:v,"aria-label":"Search",onChange:N,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(m.Hg)?(0,$.jsx)("div",{className:(0,i.A)("col","col--3","padding-left--none",R),children:(0,$.jsxs)("select",{name:"search-context",className:w,id:"context-selector",value:l,onChange:e=>x(e.target.value),children:[m.dz&&(0,$.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),m.Hg.map((e=>{const{label:r,path:s}=(0,T.p)(e,t);return(0,$.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!S&&y&&(0,$.jsx)("div",{children:(0,$.jsx)(A.A,{})}),P&&(P.length>0?(0,$.jsx)("p",{children:r(P.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))}):(0,$.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,$.jsx)("section",{children:P&&P.map((e=>(0,$.jsx)(H,{searchResult:e},e.document.i)))})]})]})}function H(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===x.i.Title,o=r===x.i.Keywords,u=r===x.i.Description,i=u||o,h=c||i,d=r===x.i.Content,p=(c?t.b:s.b).slice(),g=d||i?t.s:t.t;h||p.push(s.t);let f="";if(m.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);f=`?${e.toString()}`}return(0,$.jsxs)("article",{className:P,children:[(0,$.jsx)("h2",{children:(0,$.jsx)(l.A,{to:t.u+f+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,y.Z)(g,a):(0,j.C)(g,(0,S.g)(n,"t"),a,100)}})}),p.length>0&&(0,$.jsx)("p",{className:_,children:(0,C.$)(p)}),(d||u)&&(0,$.jsx)("p",{className:b,dangerouslySetInnerHTML:{__html:(0,j.C)(t.t,(0,S.g)(n,"t"),a,100)}})]})}const N=function(){return(0,$.jsx)(n.A,{children:(0,$.jsx)(I,{})})}}}]);