"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[2514],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},246252:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(487462),r=a(263366),o=(a(667294),a(603905)),i=["components"],l={},s="Release 2.6.0",u={permalink:"/blog/2021/12/30/ Release 2.6.0",source:"@site/blog/2021-12-30 Release 2.6.0.md",title:"Release 2.6.0",description:"The final release for the year 2021 from Rahat. This month Rahat team has deployed a native wallet- Rumsan wallet, improvised on Rahat application code coverage, auto-deployement feature and minor User Experience improvements.",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[],readingTime:2.855,truncated:!1,authors:[],prevItem:{title:"Release 2.7.0",permalink:"/blog/2022/01/31/ Release 2.7.0"},nextItem:{title:"Release 2.5.0",permalink:"/blog/2021/11/26/ Release 2.5.0"}},p={authorsImageUrls:[]},c=[{value:"Native Rumsan Wallet App",id:"native-rumsan-wallet-app",children:[],level:2},{value:"Automated Deployment: Cloudfare",id:"automated-deployment-cloudfare",children:[],level:2},{value:"Default community health file management",id:"default-community-health-file-management",children:[],level:2},{value:"Enhanced Quality Assurance",id:"enhanced-quality-assurance",children:[],level:2},{value:"UX improvements",id:"ux-improvements",children:[],level:2},{value:"Bug Fixes",id:"bug-fixes",children:[],level:2}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The final release for the year 2021 from Rahat. This month Rahat team has deployed a native wallet- Rumsan wallet, improvised on Rahat application code coverage, auto-deployement feature and minor User Experience improvements. "),(0,o.kt)("h2",{id:"native-rumsan-wallet-app"},"Native Rumsan Wallet App"),(0,o.kt)("p",null,"Rumsan wallet is an integral part of Rahat\u2019s application. It is used by the Rahat Agency to log in to the Agency app and to sign the transaction. In this release, we have deployed the Android application of the Rumsan wallet. "),(0,o.kt)("p",null,"Rumsan wallet is used by the users of the agency to log in to the Agency app. It is a digital signature base (password-less unique digital signature/identifier) that provides a unique identifier to the aid agency. "),(0,o.kt)("p",null,"The application is still in the development stage. However, we have deployed major functionalities of the wallet. You can create your wallet, Sign in to a connected Desktop/web application, and Send tokens to another wallet address. "),(0,o.kt)("p",null,"To know more about Rumsan wallet, you can go through the ",(0,o.kt)("a",{parentName:"p",href:"https://rahat.io/blogs/rahat-rumsan-digital-wallet/"},"Rumsan Digital Wallet Blog"),". "),(0,o.kt)("h2",{id:"automated-deployment-cloudfare"},"Automated Deployment: Cloudfare"),(0,o.kt)("p",null,"As we all know, all the Rahat Application is managed in Github which can be accessed by Cloudflare. We have connected our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat-agency"},"rahat-agency")," repository to the Continuous Integration Service. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.rumsan.com/esatya/autodeloyment.png",alt:"Autodeployment"})),(0,o.kt)("p",null,'With this integration, It instantly re-deploys our app with the changes that we made. As our deployment is taking place, we can hit "View build" and can see specific information about this deployment, along with any logs. Moreover, Github provides you, its own unique deploy hash at the beginning of the URL which lets us uniquely reference each deployment'),(0,o.kt)("h2",{id:"default-community-health-file-management"},"Default community health file management"),(0,o.kt)("p",null,"As mentioned in the previous release, Rahat is an open-source project with mixed licensing. We welcome anyone to contribute to our project. In order to coordinate with our contributors, there are community health files such as Issue template, Code of Conduct in our repositories which are managed by the .github folder. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/.github"},(0,o.kt)("inlineCode",{parentName:"a"},".github"))," is just a convention folder used to place Github-related stuff inside it. Currently, the Rahat .github folder consists of Issue Templates, Code of Conduct.md, and Contributing.md file. This .github folder is linked to all the repositories of Rahat. "),(0,o.kt)("h2",{id:"enhanced-quality-assurance"},"Enhanced Quality Assurance"),(0,o.kt)("p",null,"Rahat team has been constantly working on building better software quality Rahat applications. The developers have upgraded the codebase of Rahat. To test the code coverage of the Application, we have used ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"."),(0,o.kt)("p",null,"This enhancement has helped us identify the vulnerabilities of the Rahat application, eliminate the unnecessary codes and identify missing codes. "),(0,o.kt)("p",null,"You can view our test coverage report at ",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/esatya"},"Coveralls.")),(0,o.kt)("h2",{id:"ux-improvements"},"UX improvements"),(0,o.kt)("p",null,"In this release, we have added some minor enhancements to Rahat Agency app for a better user experience. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agencies can reject the vendor and mobilizers\u2019 request "),(0,o.kt)("li",{parentName:"ul"},"Agencies can assign vendors to a project while approving the vendor. And the vendor can also be assigned to multiple projects. "),(0,o.kt)("li",{parentName:"ul"},"Upload beneficiary using excel sheet. "),(0,o.kt)("li",{parentName:"ul"},"Agencies can view the user who has onboarded the beneficiary. "),(0,o.kt)("li",{parentName:"ul"},"Agencies can generate 1000 pre-generated QR codes which will be used by social mobilizers. ")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("p",null,"We have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mobilizer Error handling during registration and bug-fixes ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat/pull/128"},"#128")),(0,o.kt)("li",{parentName:"ul"},"Fix Mobilizer Approval ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat/pull/131"},"#131")),(0,o.kt)("li",{parentName:"ul"},"Fix Status toggle of Mobilizer.",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-agency/pull/140"},"#140"))),(0,o.kt)("p",null,"For more details, you can view our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/releases/tag/v2.6.0"},"Release Note")),(0,o.kt)("p",null,"To know about our next release updates, you can go through our ","[Issue Board]"," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat/issues"},"https://github.com/esatya/rahat/issues"),")"))}d.isMDXComponent=!0}}]);