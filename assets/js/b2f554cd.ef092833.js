"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[1477],{430010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Release 2.7.0","metadata":{"permalink":"/blog/2022/01/31/ Release 2.7.0","source":"@site/blog/2022-01-31 Release 2.7.0.md","title":"Release 2.7.0","description":"With the new beginning of the year, Rahat is here with its new Release 2.7.0. This release was mostly focused on the development of Rahat\u2019s new tool, Aid Connect, and the integration of NFT in the Social Mobilizer app.","date":"2022-01-31T00:00:00.000Z","formattedDate":"January 31, 2022","tags":[],"readingTime":2.105,"truncated":false,"authors":[],"nextItem":{"title":"Release 2.6.0","permalink":"/blog/2021/12/30/ Release 2.6.0"}},"content":"With the new beginning of the year, Rahat is here with its new Release 2.7.0. This release was mostly focused on the development of Rahat\u2019s new tool, Aid Connect, and the integration of NFT in the Social Mobilizer app. \\n\\n## Aid Connect\\nAid Connect is a mobile responsive  Beneficiary Registration Tool that is used to collect the Beneficiary data by people or organization who is not associated with an aid agency. With the help of the Beneficiary Registration Tool, people outside the aid agency can collect the data of beneficiaries and send the data to Agency app. \\n\\nTalking about the functionality, the Rahat Agency app will have an Aid connect  section where they will be able to generate a random link in regards to the project. \\n\\n![Rahat Agency App Nav Bar](https://assets.rumsan.com/esatya/aid-connect-00.png)\\n\\n*Aid Connect in Naviagation Bar of Rahat Agency App*\\n\\n![Rahat Agency App Aid connect](https://assets.rumsan.com/esatya/aid-connect-01.png) \\n\\n*Aid Connect in Rahat Agency App*\\n\\nThis link will be forwarded to the data collector through a communication medium like email, messenger. Now, the Data collector will open the link where they will be able to add the beneficiary, view the list of beneficiaries, edit or delete the data if required. After reviewing all the information, the data collector will send the data to the Rahat agency app. \\n\\n![Aid Connect](https://assets.rumsan.com/esatya/aid-connect-02.png) \\n\\n*Aid Connect Tool used by Data collector*\\n\\nNow, the data sent from the Aid connect will be sent to the beneficiary onboarding area i.e Aid Connect section. Now, the Agency will review all the beneficiary data and only the valid beneficiaries will be onboard to the Rahat ecosystem. In this way, an individual or organization who is not a part of the agency can send the beneficiary data to Rahat Agency. \\nTo know more about Aid connect, [Click Here](https://docs.rahat.io/docs/next/rahat-beneficiary-registration-tool)\\n\\n## NFT integration in Mobilizer app \\nIn our Release 2.5.0, we had started developing  [NFT module (Non-fungible Token)](https://ethereum.org/en/nft/)  in our Rahat Applications. In this release, we have integrated the NFT module in Rahat mobilizer App, one of the applications of Rahat. \\nNow, Social Mobilizers can issue NFT to the beneficiary. In a simpler term, Social mobilizers can issue specific aid material in form of a Package to the beneficiary. Aid agencies will create a package/NFT that represents aid material or a group of aid material to be distributed to beneficiaries. Then social mobilizer will issue the package to beneficiaries using the Mobilizer app. \\n\\n \\nFor more details, you can view our [Release Note](https://github.com/esatya/rahat/releases/tag/v2.7.0)\\n\\nTo know about our next release updates, you can go through our [Issue Board] (https://github.com/esatya/rahat/issues)"},{"id":"Release 2.6.0","metadata":{"permalink":"/blog/2021/12/30/ Release 2.6.0","source":"@site/blog/2021-12-30 Release 2.6.0.md","title":"Release 2.6.0","description":"The final release for the year 2021 from Rahat. This month Rahat team has deployed a native wallet- Rumsan wallet, improvised on Rahat application code coverage, auto-deployement feature and minor User Experience improvements.","date":"2021-12-30T00:00:00.000Z","formattedDate":"December 30, 2021","tags":[],"readingTime":2.855,"truncated":false,"authors":[],"prevItem":{"title":"Release 2.7.0","permalink":"/blog/2022/01/31/ Release 2.7.0"},"nextItem":{"title":"Release 2.5.0","permalink":"/blog/2021/11/26/ Release 2.5.0"}},"content":"The final release for the year 2021 from Rahat. This month Rahat team has deployed a native wallet- Rumsan wallet, improvised on Rahat application code coverage, auto-deployement feature and minor User Experience improvements. \\n\\n## Native Rumsan Wallet App\\n\\nRumsan wallet is an integral part of Rahat\u2019s application. It is used by the Rahat Agency to log in to the Agency app and to sign the transaction. In this release, we have deployed the Android application of the Rumsan wallet. \\n\\nRumsan wallet is used by the users of the agency to log in to the Agency app. It is a digital signature base (password-less unique digital signature/identifier) that provides a unique identifier to the aid agency. \\n\\nThe application is still in the development stage. However, we have deployed major functionalities of the wallet. You can create your wallet, Sign in to a connected Desktop/web application, and Send tokens to another wallet address. \\n\\nTo know more about Rumsan wallet, you can go through the [Rumsan Digital Wallet Blog](https://rahat.io/blogs/rahat-rumsan-digital-wallet/). \\n\\n## Automated Deployment: Cloudfare\\n\\nAs we all know, all the Rahat Application is managed in Github which can be accessed by Cloudflare. We have connected our [rahat-agency](<https://github.com/esatya/rahat-agency>) repository to the Continuous Integration Service. \\n\\n![Autodeployment](https://assets.rumsan.com/esatya/autodeloyment.png)\\n\\nWith this integration, It instantly re-deploys our app with the changes that we made. As our deployment is taking place, we can hit \\"View build\\" and can see specific information about this deployment, along with any logs. Moreover, Github provides you, its own unique deploy hash at the beginning of the URL which lets us uniquely reference each deployment\\n\\n## Default community health file management \\n\\nAs mentioned in the previous release, Rahat is an open-source project with mixed licensing. We welcome anyone to contribute to our project. In order to coordinate with our contributors, there are community health files such as Issue template, Code of Conduct in our repositories which are managed by the .github folder. \\n\\n[`.github`](https://github.com/esatya/.github) is just a convention folder used to place Github-related stuff inside it. Currently, the Rahat .github folder consists of Issue Templates, Code of Conduct.md, and Contributing.md file. This .github folder is linked to all the repositories of Rahat. \\n\\n## Enhanced Quality Assurance\\n\\nRahat team has been constantly working on building better software quality Rahat applications. The developers have upgraded the codebase of Rahat. To test the code coverage of the Application, we have used [Jest](https://jestjs.io/).\\n\\nThis enhancement has helped us identify the vulnerabilities of the Rahat application, eliminate the unnecessary codes and identify missing codes. \\n\\nYou can view our test coverage report at [Coveralls.](https://coveralls.io/github/esatya)\\n\\n## UX improvements \\n\\nIn this release, we have added some minor enhancements to Rahat Agency app for a better user experience. \\n\\n- Agencies can reject the vendor and mobilizers\u2019 request \\n- Agencies can assign vendors to a project while approving the vendor. And the vendor can also be assigned to multiple projects. \\n- Upload beneficiary using excel sheet. \\n- Agencies can view the user who has onboarded the beneficiary. \\n- Agencies can generate 1000 pre-generated QR codes which will be used by social mobilizers. \\n## Bug Fixes \\nWe have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:\\n\\n- Mobilizer Error handling during registration and bug-fixes [#128](https://github.com/esatya/rahat/pull/128)\\n- Fix Mobilizer Approval [#131](https://github.com/esatya/rahat/pull/131)\\n- Fix Status toggle of Mobilizer.[#140](https://github.com/esatya/rahat-agency/pull/140)\\n\\nFor more details, you can view our [Release Note](https://github.com/esatya/rahat/releases/tag/v2.6.0)\\n\\nTo know about our next release updates, you can go through our [Issue Board] (https://github.com/esatya/rahat/issues)"},{"id":"Release 2.5.0","metadata":{"permalink":"/blog/2021/11/26/ Release 2.5.0","source":"@site/blog/2021-11-26 Release 2.5.0.md","title":"Release 2.5.0","description":"Here we are again with another release of Rahat. You will find quite an achievement in our Rahat project in Release 2.5.0. Some of the major releases include NFT module development, wallet-based native vendor app development, Opensource licensing, and the launch of the Rahat Documentation site.","date":"2021-11-26T00:00:00.000Z","formattedDate":"November 26, 2021","tags":[],"readingTime":2.89,"truncated":false,"authors":[],"prevItem":{"title":"Release 2.6.0","permalink":"/blog/2021/12/30/ Release 2.6.0"},"nextItem":{"title":"Release 2.4.0","permalink":"/blog/2021/10/29/ Release 2.4.0"}},"content":"Here we are again with another release of Rahat. You will find quite an achievement in our Rahat project in Release 2.5.0. Some of the major releases include NFT module development, wallet-based native vendor app development, Opensource licensing, and the launch of the Rahat Documentation site. \\n ## Rahat Open source Licensing \\n\\nWe have built Rahat as an open-source technology with the belief that it will engage broader blockchain community in Nepal and abroad in aidtech space. Rahat is using mixed licensing. : **AGPL 3.0** for Stand-alone app , **L-GPL 3.0** for Reusable libraries and **CC- by SA 4.0** for Documentation.\\n\\nTo know more about Rahat licensing, Visit [Licenses](https://docs.rahat.io/docs/licenses)\\n\\nWe welcome any kinds of suggestions/contributions from our stakeholders: Developers, System users. In order to contribute to our project, you can visit our [Contribution Guidelines](https://docs.rahat.io/docs/contribution-guidelines). \\n \\n## NFT Module\\nRahat has integrated NFT Module in the ecosystem which is represented as a package in the application. Each NFT token symbolizes a commodity or group of commodities which will be distributed to beneficiaries. \\n\\nNFT( Non- Fungible Token) is a cryptographic asset on a blockchain that has unique identification codes and metadata that distinguish them from one another.NFT can be used as a medium for commercial transactions, however, this cannot be traded or exchanged at equivalency.NFTs can be used to represent real-world items, people\u2019s identities, property rights, and more.\\n![NFT](https://assets.rumsan.com/esatya/nft.png)\\n\\nIf we look at NFT in the Rahat ecosystem, we are representing it as a package. Aid agency can create a package/NFT that represents aid material or a group of aid material to be distributed to beneficiaries. Then the aid agency or social mobilizer will issue the package to beneficiaries using their respective application. Similarly, Vendors have an option to charge packages along with Token to the beneficiaries. This will depend totally on beneficiaries. \\n![NFT](https://assets.rumsan.com/esatya/nft-1.png)\\n\\nWith the implementation of NFT in Rahat, we are trying to eliminate confusion between agencies and vendors by representing aid materials in terms of a package/NFT. \\n## Native Vendor App \\nFinally, we have developed our 1st mobile application of Rahat. A native-wallet-based Vendor App will be used by vendors to receive and send tokens of Beneficiaries issued by the agency. \\n\\nMobile Vendor app is built using React Native and is currently tested for android users only. This app is the blockchain wallet on its core developed using ethers.js library and configured in a way to be used for rahat tokens only.\\n\\nVendors will create their wallet account as they register to Rahat. They will receive their unique wallet address. After successful registration, they can perform their transactions.\\n![Vendor Mobile App](https://assets.rumsan.com/esatya/vendor-app.gif)\\n\\nThe current version of the Vendor app has fulfilled the basic requirements i.e. Registration, Charge Customer, and Redeem Token. \\nIf you want to contribute to our native Vendor app, visit our Rahat-vendor-app repository (https://github.com/esatya/rahat-vendor-app)\\n## Rahat Documentation Site \\n\\nRahat has launched its documentation website. The website is mainly focused on the technical knowledge of Rahat. The site is built using Docusaurus 2, a modern static website generator.\\n\\nYou can visit our official documentation website at https://docs.rahat.io/ \\n\\nIf you want to contribute to our Rahat documentation, visit our Rahat-documentation repository https://github.com/esatya/rahat-documentation.\\n\\n## Bug Fixes \\nWe have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:\\n\\n- NFT data cleanups and fix beneficiary issued token quantity\\n\\nFor more details, you can view our [Release Note](https://github.com/esatya/rahat/releases/tag/v2.5.0)\\n\\nTo know about our next release updates, you can go through our [Issue Board](https://github.com/esatya/rahat/issues)\\n\\nLast Update: 11/26/2021"},{"id":"Release 2.4.0","metadata":{"permalink":"/blog/2021/10/29/ Release 2.4.0","source":"@site/blog/2021-10-29 Release 2.4.0.md","title":"Release 2.4.0","description":"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates.","date":"2021-10-29T00:00:00.000Z","formattedDate":"October 29, 2021","tags":[],"readingTime":1.63,"truncated":false,"authors":[],"prevItem":{"title":"Release 2.5.0","permalink":"/blog/2021/11/26/ Release 2.5.0"},"nextItem":{"title":" Release 2.3.0","permalink":"/blog/2021/09/29/ Release 2.3.0"}},"content":"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates. \\n## KoBotoolbox \\nKoBotoolbox[,](https://www.kobotoolbox.org/) an open-source suite for data collection, has been integrated into Rahat.KoBotoolbox is mostly used by humanitarian, aid organizations for data collection. The main motive to integrate the KoBotoolbox in the Rahat Agency app was to collect the data of beneficiaries online and offline. Moreover, this will also let onboarded aid agencies import their already existing data entered from Kobotool Box into the agency app. The integration of Kobotool Box will allow non-users of aid agencies to onboard the beneficiary in the Rahat ecosystem. \\n\\n![KoBotoolbox](https://assets.rumsan.com/rumsan-group/kobo.png)\\n\\nIn order to onboard beneficiaries into the Rahat application from KoBotoolbox first, the details of the Beneficiary are uploaded in the KoBotoolbox. Then the data uploaded in the Kobotool box will be updated in Agency app after the data entree goes online. \\n\\nIn order to onboard beneficiaries into the Rahat application from KoBotoolbox, the Data collector collects the data through koBoToolbox forms which are available in web and android applications. If the collector is offline at a moment, data will be stored on their device and will be pushed to the KoBotoolbox server as soon as the device goes online. The uploaded data in the kobotoolbox can be dynamically imported by the agency admin to their Rahat DB.\\n\\n![KoBotoolbox1.0](https://assets.rumsan.com/rumsan-group/kobotool-box.png)\\n\\n## Smart Contract \\nTalking about the Smart contract updates in Rahat 2.4.0, we have enhanced the contracts of our last release i.e. Meta Transaction enabled for the Social Mobilizer app and Vendor app. We enabled Smart Contract to support Meta-Transactions to be carried out by multiple relayers.\\n\\n## Bug Fixes \\nWe have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:\\n\\nFor more details, you can view our [Release Note. ](https://github.com/esatya/rahat/releases/tag/v2.4.0)\\n\\nTo know about our next release updates, you can go through our [Issue Board ](https://github.com/esatya/rahat/issues)\\n\\nLast Update: 10/29/2021"},{"id":" Release 2.3.0","metadata":{"permalink":"/blog/2021/09/29/ Release 2.3.0","source":"@site/blog/2021-09-29 Release 2.3.0.md","title":" Release 2.3.0","description":"Release 2.3.0- Changelog","date":"2021-09-29T00:00:00.000Z","formattedDate":"September 29, 2021","tags":[],"readingTime":4.345,"truncated":false,"authors":[],"prevItem":{"title":"Release 2.4.0","permalink":"/blog/2021/10/29/ Release 2.4.0"},"nextItem":{"title":" Release 2.2.0","permalink":"/blog/2021/08/30/ Release 2.2.0"}},"content":"**Release 2.3.0- Changelog**\xa0\\n\\nWe are back with another release. Rahat September release is mostly focused on the feedback/ suggestions by the stakeholders of Rahat application.\\n\\n**Rahat Mobilizer app**\xa0\\n\\nRahat is introducing a new application in the ecosystem,\xa0[Rahat Mobilizer app.](https://mobilizer.rahat.io/)The urge for the Mobilizer app was seen during the recent pilot of Rahat. Rahat Mobilizer app will be used by the social mobilizer, volunteers of the Relief distribution project, to onboard the beneficiary in the project on the spot.\\n\\nPreviously, social mobilizers used to look for the beneficiaries who need the Aid material. Afterward, the list of beneficiaries was sent to the aid agency. The aid agency was the only one who could onboard the beneficiary to the project. Rahat Mobilizer app will eliminate a business process, sending the beneficiary list to aid agency. Now, Mobilizers, themselves, will be able to onboard the beneficiary to the relief distribution process.\xa0\\n\\nIn this Release, we have worked on the phase 1 development of the Mobilizer app. The basic feature of the mobilizer app are: registration of the Mobilizer account,\xa0 onboarding Beneficires to the project, Issuing tokens to the onboarded beneficiaries, and view the transaction details. Every Mobilizer account will be assigned to a particular project. All the onboarding and issuing tokens will be done from the assigned projects only.\\n\\n![social mobilizer app 1.0](https://assets.rumsan.com/rumsan-group/social-mobilizer-1.gif)\\n\\nAgency will be overseeing all the activities of the Mobilizer. Agency approves the registration of the mobilizer in the Agency, assigns the project to the mobilizer. Afterward, the agency will be able to view all the transactionsMobilizersizer through the agency app. This release also occupies the development of the Mobilizer section in the agency app. Basic User Interface in the Mobilizer section is updated in the release.\xa0\\n\\nIn Rahat, we have two different ways to onboard the beneficiary. One is registering beneficiaries using their phone number. And if the beneficiaries do not have phones, they are onboarded through a QR code. Since the Mobilizer app can onboard the Beneficiary, Agency needs to provide the Qr code to the mobilizer so that they can onboard Beneficiary who does not have a Phone. This release also occupies a new feature in the agency app where Agency can generate QR code that is not assigned to any beneficiary. The pre-generated QR code will be handed over to Mobilizer for onboarding the beneficiary using the QR code.\xa0\\n\\n**Agency App Improvements**\xa0\\n\\nWe have some minor changes in the agency app in the September release.\xa0\\n\\n- **Display Registration Date- Time**\xa0\\n\\nEarlier, agency users could not view the registration date of the Vendor, Mobilizers, and Beneficiary which had created difficulty for the users to track the concerned stakeholders. We have added a column in the list of stakeholders where Agency users can view the Registration Date and Time.\xa0\\n\\n![social mobilizer app 1.1](https://assets.rumsan.com/rumsan-group/software-release-2.3.0-blogs.png)\\n\\n- **Beneficiary Search by the project.**\xa0\\n\\nWe have enabled a search feature where Agency app users can search the beneficiary by Project. Previously, we only had Search by Name and Search by Phone number enabled in Beneficiary Section.\\n\\n**User Management**\xa0\\n\\nOne of the main focuses of this release in Rahat was Agency User Sign up. Previously, the users of agency, admin and project, managers were on board by the existing user of the agency app. New Users of the agency app would provide their Rumsan wallet account to the Admin of the agency app and the admin would create an account for the Users. But now, Sign up process has been implemented in the Agency app. New Users can send the registration request to the agency themselves. New Users just need to scan the QR code of the Agency login page, fill up the registration form and submit it. After the agency approves the request, new users will be assigned to their roles, Admin or Project Manager, and New Users will be successfully onboarded to the agency application.\xa0\\n\\nThe implementation of Sign up process has eliminated the business process of back and forth communication between Agency Admin and New Users.\xa0\\n\\n**Multi Token System (Rahat-Contracts)**\\n\\nRahat Contracts now support ERC20 and ERC1155 Token Standards which can be regulated within the Rahat system. Both tokens can function seamlessly in every Rahat process at the Smart Contract level.\\n\\nAn ERC20 token is treated as the Fungible token and can be pegged to any coins/Fiat currency within the Rahat ecosystem\\n\\nERC1155 is used to represent the Non-Fungible token and can be used to represent any commodity or goods used within the Rahat ecosystem.\\n\\nConsidering the technical challenges faced to manage the gas fees to be paid by Vendors and Mobilizers during the Rahat processes, the Rahat contract now offers the options for the agency to relay all the transactions of Vendors and Mobilizers. They can simply sign the transaction to be executed and delegate it to the relayers of the agency who facilitates to pay their transaction fees enabling the meta-transaction for vendors and mobilizers.\\n\\n**Bug fixes**\\n\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes:\\n\\n\\\\- Fix Error while manually adding mobilizer\\n\\nFor more details, you can view our\xa0[Release Note.\xa0](https://github.com/esatya/rahat/releases/tag/v2.3.0)\\n\\nTo know about our next release updates, you can go through our\xa0[Issue Board\xa0](https://github.com/esatya/rahat/issues)\\n\\nLast Update: 09/29/2021"},{"id":" Release 2.2.0","metadata":{"permalink":"/blog/2021/08/30/ Release 2.2.0","source":"@site/blog/2021-08-30 Release 2.2.0.md","title":" Release 2.2.0","description":"Rahat 2.2.0- Change Log","date":"2021-08-30T00:00:00.000Z","formattedDate":"August 30, 2021","tags":[],"readingTime":2.85,"truncated":false,"authors":[],"prevItem":{"title":" Release 2.3.0","permalink":"/blog/2021/09/29/ Release 2.3.0"},"nextItem":{"title":" Release 2.1.0","permalink":"/blog/2021/07/28/ Release 2.1.0"}},"content":"**Rahat 2.2.0- Change Log**\xa0\\n\\nWelcome to the August Release of Rahat. In this Rahat v2.2.0 release, our major focus is on Smart Contract Testing and improvement in UI/UX of Rahat agency web-app.\\n\\n**Quality Assurance**\xa0\\n\\nDevelopers of Rahat have manually checked all the functionalities and analyzed the vulnerability of the application. We have used automated tools like[\xa0Slither](https://github.com/crytic/slither/wiki)\xa0 and \xa0[Manticore](https://github.com/trailofbits/manticore/wiki)\xa0to visualize and analyze the smart contract code structure. On the part of Unit testing,[Jest](https://jestjs.io/)was for all smart contracts and[\xa0MongoDB](https://www.mongodb.com/)\xa0controller functions testing with several data points. Each function code was tested to get the result.\\n\\nIn case of User acceptance testing, altogether 102 test cases were developed for the Agency app where 72 test cases passed whereas 29 test cases failed. Here is the detailed documentation of UAT.[Rahat_UAT_Agency_App.](https://bit.ly/3zmWGVj)\\n\\n**User Interface Updates**\xa0\\n\\n![user Interface Updates](https://assets.rumsan.com/rumsan-group/userinterfaceupdates.png)\\n\\n*Figure: Project Details Page*\\n\\n![vendor Detail Page](https://assets.rumsan.com/rumsan-group/vendor-detail-page.png)\\n*Figure: Vendor Details Page*\\n\\n![beneficiary detail page](https://assets.rumsan.com/rumsan-group/beneficiary-details-page.png)\\n*Figure: Beneficiary Details Page*\\n\\nWe had initiated the changes of UI/UX in Rahat Agency app last month. This update is the extension of the previous release. All the requirements gathered from feedbacks and suggestions are coming in the implementation phase. In Rahat 2.2.0 release, you can see major updates from the User Interface point of View. We have redesigned the detail page of Project, Beneficiary, and Vendor. We have also added some more detailed information about the respective system users. You can view the changes in the pictures down below. With the changes in User Interface, the API of the Project and Vendors has been realigned.\xa0\xa0\\n\\n**User Experience Updates**\xa0\\n\\nAlong with the update in User Interface, there is an enhancement in User Experience as well. Rahat 2.2.0 release has a new feature where system users can easily upload the files of Beneficiaries and Vendors in the agency app. The files are stored in a private IPFS swarm. The data stored in private IPFS can only be viewed by people with a shared secret key. Hence, the documents uploaded in Rahat are secure. The data table of Rahat has also been redesigned according to the changes in the application. Similarly, we have redesigned the Passcode modal window with a better view for users to enter the passcode.\xa0\\n\\n![user experience update](https://assets.rumsan.com/rumsan-group/user-experience-update.png)\\n\\n*Figure: Passcode Modal*\\n\\nPreviously, the beneficiaries assigned to the projects were only visible in the Beneficiary section. Now, you can also view the Beneficiaries in the project details section as well. This will ease the Agency app Users to study the project through a sole screen display.\xa0\\n\\n**User Management**\xa0\\n\\nIn the previous Release, user roles were updated. Admin and Manager were created as a user role in the Agency web app. In this release, we have a minor enhancement in the User management module. From now onwards, when the Admin of the Agency app creates a project, he/she can assign a Project Manager to a particular project. The Project Manager assigned to the project will only be able to oversee the particular project. However, this feature will be upgraded in later releases.\\n\\n**Bug fixes**\xa0\\n\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes.\\n\\n\\\\- \xa0 Fix the payload data validations in Projects AP.\\n\\n\\\\- \xa0 Fix image uploads to IPFS.\\n\\n\\\\- \xa0 Issue tokens to beneficiaries from beneficiary involved projects only.\\n\\nFor more details, you can view our\xa0[Release Note.](https://github.com/esatya/rahat/releases/tag/v2.2.0)\\n\\nTo know about our next release updates, you can go through our[\xa0Issue Board.\xa0](https://github.com/esatya/rahat/issues)\\n\\nLast Update: 08/30/20"},{"id":" Release 2.1.0","metadata":{"permalink":"/blog/2021/07/28/ Release 2.1.0","source":"@site/blog/2021-07-28 Release 2.1.0.md","title":" Release 2.1.0","description":"Rahat release version 2.1.0","date":"2021-07-28T00:00:00.000Z","formattedDate":"July 28, 2021","tags":[],"readingTime":1.875,"truncated":false,"authors":[],"prevItem":{"title":" Release 2.2.0","permalink":"/blog/2021/08/30/ Release 2.2.0"}},"content":"**Rahat release version 2.1.0**\\n\\nWe\u2019re very excited to share that Rahat will be posting release blogs for new features and improvements every month. In this release, we have improvised the User Experience for Rahat agency app, Reporting, updated User Management, and resolved minor bugs.\\n\\n**Improvisation of User Experience**\\n\\nThe foremost accomplishment of every application is a better user experience. With constant feedback and suggestions from the end-user, we realize how we can improvise the user experience. In Rahat 2.0, we have updated our\xa0**Rahat Agency App**\xa0with a better UI. The whole Agency app has been redesigned with a much better look and feel. Along with that, a\xa0**Bulk Token Issue token**\xa0has been added to the system which helps to issue tokens to beneficiaries at once.\\n\\n**Reporting**\\n\\nWhen you log in to your application, the first thing you want to see would be your overall status. In this version of the Rahat Agency App, we have done the same. We have updated the\xa0**Dashboard**\xa0of App so that you can analyze the overview of your application immediately after logging in. As you log in to the Rahat Agency app, you can track the status of the agency in the dashboard through numbers and charts. You can also Export the chart for your future reference. Moreover, in this version, you can also track the tokens that are redeemed by the Vendors of Rahat. The new reporting improvement is aligned with most of the overview of the Agency app.\\n\\n**User Management Update**\\n\\nIn previous versions of the Agency App, we only had Admin as the user role. From several pilots and feedback, we saw the need for different\xa0**roles**\xa0in the application. So, we have added a Manager role for this release. The manager of the Agency app will have certain restrictions in the application. They will not be able to access the project section of the Agency app.\\n\\n**Bug fixes**\\n\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes:\\n\\n- Fix pagination of the beneficiary table while filtering beneficiary.\\n- Add permission to user roles.\\n- Reload login QR-code if the web-socket client id expires.\\n- Role update and bug fixes.\\n\\nFor more details, you can view our\xa0[Release Note](https://github.com/esatya/rahat/releases/tag/v2.1.0)\\n\\nLast Update: 07/28/2021"}]}')}}]);