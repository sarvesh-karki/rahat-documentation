"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8009,4608],{724608:function(e,t,n){n.r(t);var a=n(667294),i=n(41750),r=n(595999);t.default=function(){return a.createElement(i.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},84084:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(667294),i=n(746291),r=n(276775),l=n(652263),o=n(487462),c=n(263366),s=n(813919),u=n(239960),m=n(732822),d=n(131839),h=n(79443);var f=function(){var e=(0,a.useContext)(h.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(393783),v=n(386010),b="sidebar_049v",k="sidebarWithHideableNavbar_+-wJ",E="menu_wZHw",_="menuLinkText_3ood",g="menuWithAnnouncementBar_POKL",C="sidebarMenuIcon_KGmN",w="sidebarMenuCloseIcon_KCjV",N=["item","onItemClick","collapsible","activePath"],Z=["item","onItemClick","activePath","collapsible"];var y=function e(t,n){return"link"===t.type?(a=t.href,i=n,(r=function(e){return e.endsWith("/")?e:e+"/"})(a)===r(i)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,i,r};function M(e){var t,n,i,r=e.item,l=e.onItemClick,s=e.collapsible,u=e.activePath,m=(0,c.Z)(e,N),d=r.items,h=r.label,f=y(r,u),p=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),b=(0,a.useState)((function(){return!!s&&(!f&&r.collapsed)})),k=b[0],E=b[1];(0,a.useEffect)((function(){f&&!p&&k&&E(!1)}),[f,p,k]);var g=(0,a.useCallback)((function(e){e.preventDefault(),E((function(e){return!e}))}),[E]);return 0===d.length?null:a.createElement("li",{className:(0,v.Z)("menu__list-item",{"menu__list-item--collapsed":k}),key:h},a.createElement("a",(0,o.Z)({className:(0,v.Z)("menu__link",(t={"menu__link--sublist":s,"menu__link--active":s&&f},t[_]=!s,t)),onClick:s?g:void 0,href:s?"#!":void 0},m),h),a.createElement("ul",{className:"menu__list"},d.map((function(e){return a.createElement(P,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:s,activePath:u})}))))}function x(e){var t=e.item,n=e.onItemClick,i=e.activePath,r=(e.collapsible,(0,c.Z)(e,Z)),l=t.href,m=t.label,d=t.deprecated,h=y(t,i);return a.createElement("li",{className:"menu__list-item",key:m},a.createElement(u.Z,(0,o.Z)({className:(0,v.Z)("menu__link",{"menu__link--active":h,"menu__link--deprecated":d}),style:{justifyContent:"start"},to:l},(0,s.Z)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},r),d&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:{alignSelf:"center",flexShrink:0,marginRight:"calc(var(--ifm-menu-link-padding-horizontal) / 1.5)"},fill:"currentColor",width:"18px",height:"18px"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"})),m))}function P(e){return"category"===e.item.type?a.createElement(M,e):a.createElement(x,e)}var S=function(e){var t,n,i=(0,a.useState)(!1),r=i[0],o=i[1],c=(0,l.Z)().siteConfig,s=(c=void 0===c?{}:c).themeConfig.navbar,u=(s=void 0===s?{}:s).hideOnScroll,h=void 0!==u&&u,_=f().isAnnouncementBarClosed,N=(0,a.useState)(0),Z=N[0],y=N[1];(0,m.RF)((function(e){var t=e.scrollY;y(t)}));var M=e.docsSidebars,x=e.path,S=e.sidebar,I=e.sidebarCollapsible;(0,d.Z)(r);var L=(0,p.Z)();if((0,a.useEffect)((function(){"desktop"===L&&o(!1)}),[L]),!S)return null;var F=M[S];if(!F)throw new Error('Cannot find the sidebar "'+S+'" in the sidebar config!');return a.createElement("div",{className:(0,v.Z)(b,(t={},t[k]=h,t))},a.createElement("div",{className:(0,v.Z)("menu","menu--responsive",E,(n={"menu--show":r},n[g]=!_&&0===Z,n))},a.createElement("button",{"aria-label":r?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!r)}},r?a.createElement("span",{className:(0,v.Z)(C,w)},"\xd7"):a.createElement("svg",{"aria-label":"Menu",className:C,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.createElement("title",null,"Menu"),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.createElement("ul",{className:"menu__list"},F.map((function(e,t){return a.createElement(P,{key:t,item:e,onItemClick:function(e){e.target.blur(),o(!1)},collapsible:I,activePath:x})})))))},I=n(41750),L=n(724608),F="docPage_U8ei",T="docSidebarContainer_Kjcc",z="docMainContainer_EmTR";var R=function(e){var t=e.route,n=e.docsMetadata,o=e.location,c=t.routes.find((function(e){return(0,r.LX)(o.pathname,e)}))||{},s=n.permalinkToSidebar,u=n.docsSidebars,m=n.version,d=s[c.path],h=(0,l.Z)(),f=h.siteConfig,p=(f=void 0===f?{}:f).themeConfig,v=void 0===p?{}:p,b=h.isClient,k=v.sidebarCollapsible,E=void 0===k||k;return 0===Object.keys(c).length?a.createElement(L.default,e):a.createElement(I.Z,{version:m,key:b},a.createElement("div",{className:F},d&&a.createElement("div",{className:T,role:"complementary"},a.createElement(S,{docsSidebars:u,path:c.path,sidebar:d,sidebarCollapsible:E})),a.createElement("main",{className:z},(0,i.Z)(t.routes))))}}}]);