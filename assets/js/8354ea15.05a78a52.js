"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9436],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),l=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),p=l(a),d=r,m=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(m,i(i({ref:e},h),{},{components:a})):n.createElement(m,i({ref:e},h))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},81382:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"contribution-guidelines"},u="Contribution Guidelines",l={unversionedId:"contribution-guidelines",id:"version-1.0/contribution-guidelines",isDocsHomePage:!1,title:"Contribution Guidelines",description:"Namaste, Rahat development team would like to thank you for taking the time to contribute! We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:",source:"@site/versioned_docs/version-1.0/Contribution-Guidelines.md",sourceDirName:".",slug:"/contribution-guidelines",permalink:"/docs/contribution-guidelines",editUrl:"https://github.com/esatya?tab=repositories/versioned_docs/version-1.0/Contribution-Guidelines.md",tags:[],version:"1.0",frontMatter:{id:"contribution-guidelines"},sidebar:"version-1.0/tutorialSidebar",previous:{title:"OS Strategy",permalink:"/docs/os-strategy"},next:{title:"Code of Conduct",permalink:"/docs/code-of-conduct"}},h=[{value:"Contributing with an issue",id:"contributing-with-an-issue",children:[],level:2},{value:"Reporting Bugs",id:"reporting-bugs",children:[{value:"<strong>How Do I Submit A (Good) Bug Report?</strong>",id:"how-do-i-submit-a-good-bug-report",children:[],level:4}],level:2},{value:"Contribute beyond coding...",id:"contribute-beyond-coding",children:[{value:"For Feedbacks and Insights",id:"for-feedbacks-and-insights",children:[],level:3},{value:"For Documentation",id:"for-documentation",children:[],level:3},{value:"For Designs",id:"for-designs",children:[],level:3}],level:2},{value:"Connect with Rahat Contributors",id:"connect-with-rahat-contributors",children:[],level:2}],c={toc:h};function p(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Namaste"),", Rahat development team would like to thank you for taking the time to contribute! We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reporting a bug"),(0,o.kt)("li",{parentName:"ul"},"Discussing the current state of the code"),(0,o.kt)("li",{parentName:"ul"},"Submitting a fix"),(0,o.kt)("li",{parentName:"ul"},"Proposing new features"),(0,o.kt)("li",{parentName:"ul"},"Becoming a maintainer"),(0,o.kt)("li",{parentName:"ul"},"Getting involved with Rahat community")),(0,o.kt)("p",null,"We have created guidelines for contributing to Rahat project and packages. These are guidelines, not rules. We encourage you to use your best judgment, and feel free to recommend changes to this document in a pull request. We use github to host code, to track issues and feature requests, as well as accept pull requests."),(0,o.kt)("h1",{id:"how-to-contribute-to-the-rahat-project"},"How to contribute to the Rahat Project?"),(0,o.kt)("p",null,"This section guides you through submitting a bug report for Rahat. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports\nYou can submit a bug report or any suggestions on this project through github issues.\nWhen you are creating a bug report, please include as many details as possible. Fill out the required template, the information it asks for helps us resolve issues faster.\nThe best way to contribute to this project is by making a pull request in following ways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the Rahat project and work on your fork"),(0,o.kt)("li",{parentName:"ul"},"Create a new branch on which you want to make changes - \u201cgit checkout -b \u2018my-contribution\u2019 \u201d or push your changes on develop branch"),(0,o.kt)("li",{parentName:"ul"},"Please make one pull request per issue to avoid large merges."),(0,o.kt)("li",{parentName:"ul"},"Commit your change with a commit message describing the correction."),(0,o.kt)("li",{parentName:"ul"},"Submit a pull request against the Rahat repository.\nIn general, all pull requests must:"),(0,o.kt)("li",{parentName:"ul"},"Have a clear use case, fix a demonstrable bug or serve the greater good of the project"),(0,o.kt)("li",{parentName:"ul"},"Have unit tests, functional tests, and fuzz tests, where appropriate;"),(0,o.kt)("li",{parentName:"ul"},"Follow code style guidelines"),(0,o.kt)("li",{parentName:"ul"},"Not break the existing test suite;"),(0,o.kt)("li",{parentName:"ul"},"Where bugs are fixed, where possible, there should be unit tests demonstrating the bug and also proving the fix. This helps prevent regression."),(0,o.kt)("li",{parentName:"ul"},"Change relevant comments and documentation when the behavior of code changes.")),(0,o.kt)("h2",{id:"contributing-with-an-issue"},"Contributing with an issue"),(0,o.kt)("p",null,"If you find any bug and you're not sure how to fix it, or you don't know how to do a pull request, then you can create an Issue. Filing an Issue will help us see the problem and fix it.\nIssues in Rahat\u2019s",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/esatya"}," "),(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/esatya"},"Github repositories")," are the primary means by which bug reports, feedback, and general discussions are made. A contributor is invited to create an issue, discuss it, and provide a fix if needed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat"},"https://github.com/esatya/rahat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-agency"},"https://github.com/esatya/rahat-agency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-mobilizer"},"https://github.com/esatya/rahat-mobilizer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-vendor"},"https://github.com/esatya/rahat-vendor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-otp"},"https://github.com/esatya/rahat-otp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-documentation"},"https://github.com/esatya/rahat-documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat-uat"},"https://github.com/esatya/rahat-uat")," ")),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,"This section guides you through submitting a bug report for Rahat. Following these guidelines helps maintainers and the community understand your report \ud83d\udcdd, reproduce the behavior \ud83d\udcbb \ud83d\udcbb, and find related reports \ud83d\udd0e.\nBefore creating bug reports, please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/esatya/projects/2"},"this list")," as you might find out that you don't need to create one. When you are creating a bug report, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#how-do-i-submit-a-good-bug-report"},"include as many details as possible"),".\nNote: If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one."),(0,o.kt)("h4",{id:"how-do-i-submit-a-good-bug-report"},(0,o.kt)("strong",{parentName:"h4"},"How Do I Submit A (Good) Bug Report?")),(0,o.kt)("p",null,"Bugs are tracked as GitHub issues. After you've determined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#atom-and-packages"},"which repository")," your bug is related to, create an issue on that repository and provide the following information."),(0,o.kt)("h2",{id:"contribute-beyond-coding"},"Contribute beyond coding..."),(0,o.kt)("p",null,"You can share your skills and insights to support the Rahat community grow ."),(0,o.kt)("h3",{id:"for-feedbacks-and-insights"},"For Feedbacks and Insights"),(0,o.kt)("p",null,"If you have expertise and experience in cash transfer and want to share your insights and feedback with the community at ",(0,o.kt)("a",{parentName:"p",href:"mailto:suport@rahat.io"},"support@rahat.io")," or connect with us ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rahataid"},"[","t","]")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/p2kxaP2m8t"},"[","d","]"," ")),(0,o.kt)("h3",{id:"for-documentation"},"For Documentation"),(0,o.kt)("p",null,"We share our journey - and the lessons we learned on the way through reports, case studies, articles, blogs, and surveys. Contact us if you want to contribute and learn more \ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"mailto:suport@rahat.io"},"support@rahat.io")," or connect with us ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rahataid"},"[","t","]")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/p2kxaP2m8t"},"[","d","]"," ")),(0,o.kt)("h3",{id:"for-designs"},"For Designs"),(0,o.kt)("p",null,"If you are interested in creating and designing in UI/UX, animations, photos, infographics, IEC materials, tutorials, and explainers for the Rahat community -- feel free to contact us with any design-related questions \ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"mailto:suport@rahat.io"},"support@rahat.io "),"or connect with us ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rahataid"},"[","t","]")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/p2kxaP2m8t"},"[","d","]"," ")),(0,o.kt)("h1",{id:"style-guide"},"Style Guide"),(0,o.kt)("p",null,"This repository uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint"},"eslint "),"to enforce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"air-bnb coding styles"),"."),(0,o.kt)("h2",{id:"connect-with-rahat-contributors"},"Connect with Rahat Contributors"),(0,o.kt)("p",null,"If you want to connect with our contributors, you can connect us at ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/bockies/community?utm_source=badge&utm_medium=badge&utm_content=badge"},(0,o.kt)("img",{parentName:"a",src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/bockies/community"}))),(0,o.kt)("p",null,"Last updated : 11/15/2021"))}p.isMDXComponent=!0}}]);