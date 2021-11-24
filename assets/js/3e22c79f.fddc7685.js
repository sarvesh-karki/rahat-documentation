"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[5318],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},360409:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(487462),a=n(263366),o=(n(667294),n(603905)),i=["components"],l={id:"getting-started-developer"},s="Getting Started Developer",p={unversionedId:"getting-started-developer",id:"getting-started-developer",isDocsHomePage:!1,title:"Getting Started Developer",description:"Rahat is a web-based application with node-js as backend and uses truffle as a tool to compile.",source:"@site/docs/Getting-Started-Developer .md",sourceDirName:".",slug:"/getting-started-developer",permalink:"/docs/next/getting-started-developer",editUrl:"https://github.com/esatya?tab=repositories/docs/Getting-Started-Developer .md",tags:[],version:"current",frontMatter:{id:"getting-started-developer"},sidebar:"tutorialSidebar",previous:{title:"Code of Conduct",permalink:"/docs/next/code-of-conduct"},next:{title:"Rahat Software Requirements Specifications",permalink:"/docs/next/rahat-software-requirements-specifications"}},c=[{value:"Pre-requisite",id:"pre-requisite",children:[],level:2},{value:"Installing Rahat Server",id:"installing-rahat-server",children:[],level:2},{value:"Installing Rahat Agency Dashboard",id:"installing-rahat-agency-dashboard",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-developer"},"Getting Started Developer"),(0,o.kt)("p",null,"Rahat is a web-based application with node-js as backend and uses truffle as a tool to compile.\nIt uses MongoDB as a database for regular non-blockchain data persistence and solidity smart contract to execute transactions on Ethereum blockchain."),(0,o.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,o.kt)("p",null,"To run Rahat in your system please make sure you have the following app and libraries installed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node-js --version == 10.18.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Yarn --version == 1.21.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoDB --version >= 4.2.8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Truffle --version == 5.1.22"))),(0,o.kt)("h2",{id:"installing-rahat-server"},"Installing Rahat Server"),(0,o.kt)("p",null,"To set up this software on your machine locally:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone this repository ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esatya/rahat"},"https://github.com/esatya/rahat")),(0,o.kt)("li",{parentName:"ol"},"Create a folder named \u2018config\u2019 on the root of this repository and add a local.json file. Add the configuration below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "app": {\n        "port": 3800,\n        "secret": "{32 characters}",\n        "url": "{url of your site: http://localhost:3800}",\n        "db": "mongodb://localhost:27017/rahat",\n        "cors": [\n            "*"\n        ]\n    },\n    "jwt": {\n        "duration": 3600000,\n        "duration_long": 604800000\n    },\n    "services": {},\n    "blockchain": {\n        "httpProvider": "http://localhost:8545",\n        "webSocketProvider": "ws://localhost:8545",\n        "networkId": "5777"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you are trying this in your local machine, please install ",(0,o.kt)("a",{parentName:"em",href:"https://www.trufflesuite.com/ganache"},"Ganache"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install required dependencies and compile smart contracts\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn setup"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the server\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, in your browser go to http://localhost:3800/documentation to see API endpoints that are available."))),(0,o.kt)("h2",{id:"installing-rahat-agency-dashboard"},"Installing Rahat Agency Dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone this repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esatya/rahat-agency"},"https://github.com/esatya/rahat-agency"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update .env file to add URL of your Rahat server\n",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_API_SERVER=http://localhost:3800"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install required dependencies and compile smart contracts\n`",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the server\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, in your browser go to http://localhost:3000 and follow the setup instructions on screen."))),(0,o.kt)("p",null,"The document is still a work in progress.\nFor the user manual ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manual"},"Click here.")),(0,o.kt)("p",null,"Last updated: 11/15/2021"))}d.isMDXComponent=!0}}]);