"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Release 2.4.0","metadata":{"permalink":"/blog/2021/10/29/ Release 2.4.0","source":"@site/blog/2021-10-29 Release 2.4.0.md","title":"Release 2.4.0","description":"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates.","date":"2021-10-29T00:00:00.000Z","formattedDate":"October 29, 2021","tags":[],"readingTime":1.63,"truncated":false,"authors":[],"nextItem":{"title":" Release 2.3.0","permalink":"/blog/2021/09/29/ Release 2.3.0"}},"content":"Rahat 2.4.0 released with some new features and integration. This release is mostly focused on third-party integration- Kobotool Box. and smart contract updates. \\r\\n## KoBotoolbox \\r\\nKoBotoolbox[,](https://www.kobotoolbox.org/) an open-source suite for data collection, has been integrated into Rahat.KoBotoolbox is mostly used by humanitarian, aid organizations for data collection. The main motive to integrate the KoBotoolbox in the Rahat Agency app was to collect the data of beneficiaries online and offline. Moreover, this will also let onboarded aid agencies import their already existing data entered from Kobotool Box into the agency app. The integration of Kobotool Box will allow non-users of aid agencies to onboard the beneficiary in the Rahat ecosystem. \\r\\n\\r\\n![KoBotoolbox](https://assets.rumsan.com/rumsan-group/kobo.png)\\r\\n\\r\\nIn order to onboard beneficiaries into the Rahat application from KoBotoolbox first, the details of the Beneficiary are uploaded in the KoBotoolbox. Then the data uploaded in the Kobotool box will be updated in Agency app after the data entree goes online. \\r\\n\\r\\nIn order to onboard beneficiaries into the Rahat application from KoBotoolbox, the Data collector collects the data through koBoToolbox forms which are available in web and android applications. If the collector is offline at a moment, data will be stored on their device and will be pushed to the KoBotoolbox server as soon as the device goes online. The uploaded data in the kobotoolbox can be dynamically imported by the agency admin to their Rahat DB.\\r\\n\\r\\n![KoBotoolbox1.0](https://assets.rumsan.com/rumsan-group/kobotool-box.png)\\r\\n\\r\\n## Smart Contract \\r\\nTalking about the Smart contract updates in Rahat 2.4.0, we have enhanced the contracts of our last release i.e. Meta Transaction enabled for the Social Mobilizer app and Vendor app. We enabled Smart Contract to support Meta-Transactions to be carried out by multiple relayers.\\r\\n\\r\\n## Bug Fixes \\r\\nWe have resolved some of the minor bugs of the Rahat application. Here is the list of bug fixes:\\r\\n\\r\\nFor more details, you can view our [Release Note. ](https://github.com/esatya/rahat/releases/tag/v2.4.0)\\r\\n\\r\\nTo know about our next release updates, you can go through our [Issue Board ](https://github.com/esatya/rahat/issues)\\r\\n\\r\\nLast Update: 10/29/2021"},{"id":" Release 2.3.0","metadata":{"permalink":"/blog/2021/09/29/ Release 2.3.0","source":"@site/blog/2021-09-29 Release 2.3.0.md","title":" Release 2.3.0","description":"Release 2.3.0- Changelog","date":"2021-09-29T00:00:00.000Z","formattedDate":"September 29, 2021","tags":[],"readingTime":4.345,"truncated":false,"authors":[],"prevItem":{"title":"Release 2.4.0","permalink":"/blog/2021/10/29/ Release 2.4.0"},"nextItem":{"title":" Release 2.2.0","permalink":"/blog/2021/08/30/ Release 2.2.0"}},"content":"**Release 2.3.0- Changelog**\xa0\\r\\n\\r\\nWe are back with another release. Rahat September release is mostly focused on the feedback/ suggestions by the stakeholders of Rahat application.\\r\\n\\r\\n**Rahat Mobilizer app**\xa0\\r\\n\\r\\nRahat is introducing a new application in the ecosystem,\xa0[Rahat Mobilizer app.](https://mobilizer.rahat.io/)The urge for the Mobilizer app was seen during the recent pilot of Rahat. Rahat Mobilizer app will be used by the social mobilizer, volunteers of the Relief distribution project, to onboard the beneficiary in the project on the spot.\\r\\n\\r\\nPreviously, social mobilizers used to look for the beneficiaries who need the Aid material. Afterward, the list of beneficiaries was sent to the aid agency. The aid agency was the only one who could onboard the beneficiary to the project. Rahat Mobilizer app will eliminate a business process, sending the beneficiary list to aid agency. Now, Mobilizers, themselves, will be able to onboard the beneficiary to the relief distribution process.\xa0\\r\\n\\r\\nIn this Release, we have worked on the phase 1 development of the Mobilizer app. The basic feature of the mobilizer app are: registration of the Mobilizer account,\xa0 onboarding Beneficires to the project, Issuing tokens to the onboarded beneficiaries, and view the transaction details. Every Mobilizer account will be assigned to a particular project. All the onboarding and issuing tokens will be done from the assigned projects only.\\r\\n\\r\\n![social mobilizer app 1.0](https://assets.rumsan.com/rumsan-group/social-mobilizer-1.gif)\\r\\n\\r\\nAgency will be overseeing all the activities of the Mobilizer. Agency approves the registration of the mobilizer in the Agency, assigns the project to the mobilizer. Afterward, the agency will be able to view all the transactionsMobilizersizer through the agency app. This release also occupies the development of the Mobilizer section in the agency app. Basic User Interface in the Mobilizer section is updated in the release.\xa0\\r\\n\\r\\nIn Rahat, we have two different ways to onboard the beneficiary. One is registering beneficiaries using their phone number. And if the beneficiaries do not have phones, they are onboarded through a QR code. Since the Mobilizer app can onboard the Beneficiary, Agency needs to provide the Qr code to the mobilizer so that they can onboard Beneficiary who does not have a Phone. This release also occupies a new feature in the agency app where Agency can generate QR code that is not assigned to any beneficiary. The pre-generated QR code will be handed over to Mobilizer for onboarding the beneficiary using the QR code.\xa0\\r\\n\\r\\n**Agency App Improvements**\xa0\\r\\n\\r\\nWe have some minor changes in the agency app in the September release.\xa0\\r\\n\\r\\n- **Display Registration Date- Time**\xa0\\r\\n\\r\\nEarlier, agency users could not view the registration date of the Vendor, Mobilizers, and Beneficiary which had created difficulty for the users to track the concerned stakeholders. We have added a column in the list of stakeholders where Agency users can view the Registration Date and Time.\xa0\\r\\n\\r\\n![social mobilizer app 1.1](https://assets.rumsan.com/rumsan-group/software-release-2.3.0-blogs.png)\\r\\n\\r\\n- **Beneficiary Search by the project.**\xa0\\r\\n\\r\\nWe have enabled a search feature where Agency app users can search the beneficiary by Project. Previously, we only had Search by Name and Search by Phone number enabled in Beneficiary Section.\\r\\n\\r\\n**User Management**\xa0\\r\\n\\r\\nOne of the main focuses of this release in Rahat was Agency User Sign up. Previously, the users of agency, admin and project, managers were on board by the existing user of the agency app. New Users of the agency app would provide their Rumsan wallet account to the Admin of the agency app and the admin would create an account for the Users. But now, Sign up process has been implemented in the Agency app. New Users can send the registration request to the agency themselves. New Users just need to scan the QR code of the Agency login page, fill up the registration form and submit it. After the agency approves the request, new users will be assigned to their roles, Admin or Project Manager, and New Users will be successfully onboarded to the agency application.\xa0\\r\\n\\r\\nThe implementation of Sign up process has eliminated the business process of back and forth communication between Agency Admin and New Users.\xa0\\r\\n\\r\\n**Multi Token System (Rahat-Contracts)**\\r\\n\\r\\nRahat Contracts now support ERC20 and ERC1155 Token Standards which can be regulated within the Rahat system. Both tokens can function seamlessly in every Rahat process at the Smart Contract level.\\r\\n\\r\\nAn ERC20 token is treated as the Fungible token and can be pegged to any coins/Fiat currency within the Rahat ecosystem\\r\\n\\r\\nERC1155 is used to represent the Non-Fungible token and can be used to represent any commodity or goods used within the Rahat ecosystem.\\r\\n\\r\\nConsidering the technical challenges faced to manage the gas fees to be paid by Vendors and Mobilizers during the Rahat processes, the Rahat contract now offers the options for the agency to relay all the transactions of Vendors and Mobilizers. They can simply sign the transaction to be executed and delegate it to the relayers of the agency who facilitates to pay their transaction fees enabling the meta-transaction for vendors and mobilizers.\\r\\n\\r\\n**Bug fixes**\\r\\n\\r\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes:\\r\\n\\r\\n\\\\- Fix Error while manually adding mobilizer\\r\\n\\r\\nFor more details, you can view our\xa0[Release Note.\xa0](https://github.com/esatya/rahat/releases/tag/v2.3.0)\\r\\n\\r\\nTo know about our next release updates, you can go through our\xa0[Issue Board\xa0](https://github.com/esatya/rahat/issues)\\r\\n\\r\\nLast Update: 09/29/2021"},{"id":" Release 2.2.0","metadata":{"permalink":"/blog/2021/08/30/ Release 2.2.0","source":"@site/blog/2021-08-30 Release 2.2.0.md","title":" Release 2.2.0","description":"Rahat 2.2.0- Change Log","date":"2021-08-30T00:00:00.000Z","formattedDate":"August 30, 2021","tags":[],"readingTime":2.85,"truncated":false,"authors":[],"prevItem":{"title":" Release 2.3.0","permalink":"/blog/2021/09/29/ Release 2.3.0"},"nextItem":{"title":" Release 2.1.0","permalink":"/blog/2021/07/28/ Release 2.1.0"}},"content":"**Rahat 2.2.0- Change Log**\xa0\\r\\n\\r\\nWelcome to the August Release of Rahat. In this Rahat v2.2.0 release, our major focus is on Smart Contract Testing and improvement in UI/UX of Rahat agency web-app.\\r\\n\\r\\n**Quality Assurance**\xa0\\r\\n\\r\\nDevelopers of Rahat have manually checked all the functionalities and analyzed the vulnerability of the application. We have used automated tools like[\xa0Slither](https://github.com/crytic/slither/wiki)\xa0 and \xa0[Manticore](https://github.com/trailofbits/manticore/wiki)\xa0to visualize and analyze the smart contract code structure. On the part of Unit testing,[Jest](https://jestjs.io/)was for all smart contracts and[\xa0MongoDB](https://www.mongodb.com/)\xa0controller functions testing with several data points. Each function code was tested to get the result.\\r\\n\\r\\nIn case of User acceptance testing, altogether 102 test cases were developed for the Agency app where 72 test cases passed whereas 29 test cases failed. Here is the detailed documentation of UAT.[Rahat_UAT_Agency_App.](https://bit.ly/3zmWGVj)\\r\\n\\r\\n**User Interface Updates**\xa0\\r\\n\\r\\n![user Interface Updates](https://assets.rumsan.com/rumsan-group/userinterfaceupdates.png)\\r\\n\\r\\n*Figure: Project Details Page*\\r\\n\\r\\n![vendor Detail Page](https://assets.rumsan.com/rumsan-group/vendor-detail-page.png)\\r\\n*Figure: Vendor Details Page*\\r\\n\\r\\n![beneficiary detail page](https://assets.rumsan.com/rumsan-group/beneficiary-details-page.png)\\r\\n*Figure: Beneficiary Details Page*\\r\\n\\r\\nWe had initiated the changes of UI/UX in Rahat Agency app last month. This update is the extension of the previous release. All the requirements gathered from feedbacks and suggestions are coming in the implementation phase. In Rahat 2.2.0 release, you can see major updates from the User Interface point of View. We have redesigned the detail page of Project, Beneficiary, and Vendor. We have also added some more detailed information about the respective system users. You can view the changes in the pictures down below. With the changes in User Interface, the API of the Project and Vendors has been realigned.\xa0\xa0\\r\\n\\r\\n**User Experience Updates**\xa0\\r\\n\\r\\nAlong with the update in User Interface, there is an enhancement in User Experience as well. Rahat 2.2.0 release has a new feature where system users can easily upload the files of Beneficiaries and Vendors in the agency app. The files are stored in a private IPFS swarm. The data stored in private IPFS can only be viewed by people with a shared secret key. Hence, the documents uploaded in Rahat are secure. The data table of Rahat has also been redesigned according to the changes in the application. Similarly, we have redesigned the Passcode modal window with a better view for users to enter the passcode.\xa0\\r\\n\\r\\n![user experience update](https://assets.rumsan.com/rumsan-group/user-experience-update.png)\\r\\n\\r\\n*Figure: Passcode Modal*\\r\\n\\r\\nPreviously, the beneficiaries assigned to the projects were only visible in the Beneficiary section. Now, you can also view the Beneficiaries in the project details section as well. This will ease the Agency app Users to study the project through a sole screen display.\xa0\\r\\n\\r\\n**User Management**\xa0\\r\\n\\r\\nIn the previous Release, user roles were updated. Admin and Manager were created as a user role in the Agency web app. In this release, we have a minor enhancement in the User management module. From now onwards, when the Admin of the Agency app creates a project, he/she can assign a Project Manager to a particular project. The Project Manager assigned to the project will only be able to oversee the particular project. However, this feature will be upgraded in later releases.\\r\\n\\r\\n**Bug fixes**\xa0\\r\\n\\r\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes.\\r\\n\\r\\n\\\\- \xa0 Fix the payload data validations in Projects AP.\\r\\n\\r\\n\\\\- \xa0 Fix image uploads to IPFS.\\r\\n\\r\\n\\\\- \xa0 Issue tokens to beneficiaries from beneficiary involved projects only.\\r\\n\\r\\nFor more details, you can view our\xa0[Release Note.](https://github.com/esatya/rahat/releases/tag/v2.2.0)\\r\\n\\r\\nTo know about our next release updates, you can go through our[\xa0Issue Board.\xa0](https://github.com/esatya/rahat/issues)\\r\\n\\r\\nLast Update: 08/30/20"},{"id":" Release 2.1.0","metadata":{"permalink":"/blog/2021/07/28/ Release 2.1.0","source":"@site/blog/2021-07-28 Release 2.1.0.md","title":" Release 2.1.0","description":"Rahat release version 2.1.0","date":"2021-07-28T00:00:00.000Z","formattedDate":"July 28, 2021","tags":[],"readingTime":1.875,"truncated":false,"authors":[],"prevItem":{"title":" Release 2.2.0","permalink":"/blog/2021/08/30/ Release 2.2.0"}},"content":"**Rahat release version 2.1.0**\\r\\n\\r\\nWe\u2019re very excited to share that Rahat will be posting release blogs for new features and improvements every month. In this release, we have improvised the User Experience for Rahat agency app, Reporting, updated User Management, and resolved minor bugs.\\r\\n\\r\\n**Improvisation of User Experience**\\r\\n\\r\\nThe foremost accomplishment of every application is a better user experience. With constant feedback and suggestions from the end-user, we realize how we can improvise the user experience. In Rahat 2.0, we have updated our\xa0**Rahat Agency App**\xa0with a better UI. The whole Agency app has been redesigned with a much better look and feel. Along with that, a\xa0**Bulk Token Issue token**\xa0has been added to the system which helps to issue tokens to beneficiaries at once.\\r\\n\\r\\n**Reporting**\\r\\n\\r\\nWhen you log in to your application, the first thing you want to see would be your overall status. In this version of the Rahat Agency App, we have done the same. We have updated the\xa0**Dashboard**\xa0of App so that you can analyze the overview of your application immediately after logging in. As you log in to the Rahat Agency app, you can track the status of the agency in the dashboard through numbers and charts. You can also Export the chart for your future reference. Moreover, in this version, you can also track the tokens that are redeemed by the Vendors of Rahat. The new reporting improvement is aligned with most of the overview of the Agency app.\\r\\n\\r\\n**User Management Update**\\r\\n\\r\\nIn previous versions of the Agency App, we only had Admin as the user role. From several pilots and feedback, we saw the need for different\xa0**roles**\xa0in the application. So, we have added a Manager role for this release. The manager of the Agency app will have certain restrictions in the application. They will not be able to access the project section of the Agency app.\\r\\n\\r\\n**Bug fixes**\\r\\n\\r\\nAlong with the improvements, we have resolved some of the minor bugs in the application. Here are the bug fixes:\\r\\n\\r\\n- Fix pagination of the beneficiary table while filtering beneficiary.\\r\\n- Add permission to user roles.\\r\\n- Reload login QR-code if the web-socket client id expires.\\r\\n- Role update and bug fixes.\\r\\n\\r\\nFor more details, you can view our\xa0[Release Note](https://github.com/esatya/rahat/releases/tag/v2.1.0)\\r\\n\\r\\nLast Update: 07/28/2021"}]}')}}]);