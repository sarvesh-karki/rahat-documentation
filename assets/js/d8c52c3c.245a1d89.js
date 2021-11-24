"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6754],{603905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var a=o(667294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return o?a.createElement(f,i(i({ref:t},u),{},{components:o})):a.createElement(f,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},470857:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=o(487462),n=o(263366),r=(o(667294),o(603905)),i=["components"],l={},s="Release 2.4.0",c={permalink:"/blog/2021/10/29/ Release 2.4.0",source:"@site/blog/2021-10-29 Release 2.4.0.md",title:"Release 2.4.0",description:"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates.",date:"2021-10-29T00:00:00.000Z",formattedDate:"October 29, 2021",tags:[],readingTime:1.63,truncated:!1,authors:[],nextItem:{title:" Release 2.3.0",permalink:"/blog/2021/09/29/ Release 2.3.0"}},u={authorsImageUrls:[]},p=[{value:"KoBotoolbox",id:"kobotoolbox",children:[],level:2},{value:"Smart Contract",id:"smart-contract",children:[],level:2},{value:"Bug Fixes",id:"bug-fixes",children:[],level:2}],d={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates. "),(0,r.kt)("h2",{id:"kobotoolbox"},"KoBotoolbox"),(0,r.kt)("p",null,"KoBotoolbox",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},",")," an open-source suite for data collection, has been integrated into Rahat.KoBotoolbox is mostly used by humanitarian, aid organizations for data collection. The main motive to integrate the KoBotoolbox in the Rahat Agency app was to collect the data of beneficiaries online and offline. Moreover, this will also let onboarded aid agencies import their already existing data entered from Kobotool Box into the agency app. The integration of Kobotool Box will allow non-users of aid agencies to onboard the beneficiary in the Rahat ecosystem. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/kobo.png",alt:"KoBotoolbox"})),(0,r.kt)("p",null,"In order to onboard beneficiaries into the Rahat application from KoBotoolbox first, the details of the Beneficiary are uploaded in the KoBotoolbox. Then the data uploaded in the Kobotool box will be updated in Agency app after the data entree goes online. "),(0,r.kt)("p",null,"In order to onboard beneficiaries into the Rahat application from KoBotoolbox, the Data collector collects the data through koBoToolbox forms which are available in web and android applications. If the collector is offline at a moment, data will be stored on their device and will be pushed to the KoBotoolbox server as soon as the device goes online. The uploaded data in the kobotoolbox can be dynamically imported by the agency admin to their Rahat DB."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/rumsan-group/kobotool-box.png",alt:"KoBotoolbox1.0"})),(0,r.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,r.kt)("p",null,"Talking about the Smart contract updates in Rahat 2.4.0, we have enhanced the contracts of our last release i.e. Meta Transaction enabled for the Social Mobilizer app and Vendor app. We enabled Smart Contract to support Meta-Transactions to be carried out by multiple relayers."),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("p",null,"We have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:"),(0,r.kt)("p",null,"For more details, you can view our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/releases/tag/v2.4.0"},"Release Note. ")),(0,r.kt)("p",null,"To know about our next release updates, you can go through our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/issues"},"Issue Board ")),(0,r.kt)("p",null,"Last Update: 10/29/2021"))}h.isMDXComponent=!0}}]);