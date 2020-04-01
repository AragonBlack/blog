---
title: Aragon Black Quarterly Report
slug: aragon-black-quartely-report
date_published: 2019-09-20T00:00:00.000Z
date_updated: 2019-09-20T14:09:15.000Z
tags: Black echoes
draft: true
---

*After four and a half months on the Flock Program, we are eager to share with you our progress so far on the deliverables described in [AGP-34](https://github.com/aragon/flock/blob/master/teams/Aragon%20Black/2019%20-%20Q3%20%26%20Q4.md) in this very first Aragon Black Quarterly Report.*

*We are also very happy to give you a sneak peek at the [draft of our upcoming AGP](https://hackmd.io/c3VKqR95SuaM1ELcUZ5mfg?view) where you can find our prospective next steps in more detail and give us your precious feedback before we submit a final version to the Flock repo.*

*You can contact us anytime through our [keybase channe](https://keybase.io/team/aragonblack.public)l.*

# I01 - Fundraising

## 2019 deliverables

**Fundraising app.** Develop an opinionated but ready-to-use fundraising app - based on the previous library -* implementing the *[*Apiary*](https://github.com/1Hive/Apiary)* scheme designed by *[*@lkngtn*](https://twitter.com/lkngtn?lang=en)*.*

**Fundraising library. **Develop a modular fundraising library providing low-level building-blocks: curves, taxation mechanisms, withdrawal mechanisms, etc.

## Longer-term deliverables

**Fee and signaling.** Design and discuss a token economic model for Fundraising, relying on buy / sell order fees and an ANT-based staking mechanism for DAO signaling.

**Discovery platform.** Develop an Aragon Network wide fundraising platform allowing Aragon users to discover and join new DAOs.

## Progress: 85%

- [Coded ](https://github.com/AragonBlack/fundraising)and deployed [Rinkeby ](https://rinkeby.aragon.org/#/0x94d94ce1e782785079d63e6bd565afe13979864f/0x929e90523efe06df881079ceaf3f2a7098a8bbb2)Fundraising apps (Agent/Reserve Pool, Controller, Market Maker, Tap) based on Apiary design enabling DAICOs with multi-collateral batched bancor bonding curve, long tail liquidity, and tap mechanism.
- Received and integrated feedback from 2 rounds of Consensys audit of the smart contracts.
- Cross Flock support on architecture, pre-sale contracts, front end, design, code reviews.
- Application and selection process for onboarding guidance to projects followed by mechanism design, Bonding Curve Parameterization, and DAO architecture workshops.
- Publication of widely shared articles around Fundraising [[1]](https://blog.aragon.org/introducing-aragon-fundraising/)[[2]](https://blog.aragon.black/aragon-fundraising-the-return-of-the-commons/)  and draft documentation[[3]](https://fundraising.aragon.black/).
- Taxation/Fee mechanism via the updateBeneficiary(address _beneficiary) function and permissions configuration.
- Modular curve shape via parameterization (real and virtual balance, connector weight).
- Withdrawal mechanisms implemented on the reserve plus grace period for tap updates.
- Project token vesting support in the presale configuration.
- R&D on the upcoming discovery, ranking and staking platform for Fundraising DAOs and it’s  potential token economics models.

## Coming next

- Pushing to mainnet version 1.0.0 (targeted for mid-october), experiment and iterate with feedback from the ecosystem to identify areas of improvement and lay down foundation for version 2.0.0.
- Receiving and integrating feedback from 3rd round of  smart-contract audits, user testing and simulation with on-boarded projects and front-end finalization
- Big focus area on the upcoming discovery, ranking and staking platform!
- Study custom implementation deployment for potential use by the Aragon Court.
- Increase value of ANT with mechanisms to support arbitrage of ANT backed curves.

# I02 - Aragon PM

## 2019 deliverables

**Frontend.** Develop a dApp allowing to easily search and browse through aragonPM registries and repos [an aragonPM equivalent to [**npmjs.com**](https://www.npmjs.com/)**].**

**NPM compatibility.** Develop an enhanced version of aragonPM-serve complying with the NPM Registry API to enforce aragonPM - NPM compatibility.

## Longer-term deliverables

**Linking fee and insurance.** Design and discuss an ANT-based token economics model for aragonPM registries, relying on linking fees and an insurance system.

**pando | aragonPM.** Develop a common contribution and dependency tracking system shared by aragonPM and pando to serve as the foundation of a possible token-economic model for aragonPM repos.

## Progress: 60%

- Developed an MVP website to search and browse APM packages. There is need for additional styling and improvement with publication of this MVP in the coming weeks.
- Identified roadblocks with lack of standardized metadata in APM packages.
- Studied deployment of an APM token bonded to ANT for registry of packages.

## Coming next

- Address need for more standardized metadata in APM packages to fetch more information to display for further progress.
- Developing a full featured version of the APM website.

# I03 - Aragon Development Infrastructure

## 2019 deliverables

**Pando.** Keep on developing and enhancing the pando protocol and all related DAO templates for mainnet launch.

**Experimentation**. Experiment using pando to host non-sensitive Aragon repositories: documentation, Aragon Monthly, etc.

## Longer-term deliverables

Contribution economics. Work closely with all the other Aragon teams to design [and experiment with] possible reward systems for Aragon contributors.

GitHub drop-out. Support Aragon teams in experimenting with pando to gradually migrate Aragon codebase to a fully decentralized infrastructure.

PandoHub / AragonHub. Ship everything we have learned in this initiative into a ready-to-use decentralized alternative to GitHub.

Custom Open Source licence. Deliver of a fork of the [**Contributive Commons Licence**](http://contributivecommons.org/licence-contributive-commons-by-co-sa-1-complete/)in order to implement an isomorphism between DAOs governance rules - as defined through blockchain-based smart contracts - and nation-states juridical frameworks.

## Progress: 80%

- Coded and deployed [Rinkeby Pando App](https://rinkeby.aragon.org/#/0xe048d120Be1aEf0D198437f7f8752F64618FD02A/) after 1 year of R&D supported by 2 Nest Grants
- Refactored IPLD library for faster propagation of commits via IPFS
- Markdown Editing from the Aragon Client pending updates in the rest of the stack
- Sketches for the complete redesign of the App
- R&D on supporting decentralized merging via off-chain verification.
- R&D on integrations of Dot voting and Sourcecred for rewarding contributors.
- [POC specification for Contributive Commons L](https://docs.google.com/document/d/1fzNkwv6-Z5o8KuOe-nBar5QBQaUWDgVGZPwb3Puc7y8/edit)icence currently under development for implementation.
- [Legal code under review](https://app.openlaw.io/template/Contributive%20Commons%20Licence) by the consulting firm [Inno3](https://inno3.fr/)
- Smart legal contract template for [results based funding](https://app.openlaw.io/template/IMPACT%20RESULTS%20BASED%20FUNDING) on Open Law for one of our onboarded projects.

## Coming next

- Expriment with decentralized merging systems
- Leverage synergies between Pando and the rest of the Aragon Stack
- Ship Pando mainnet app with new design and markdown editing
- On the topic of a Github alternative there are strong reasons for mass adoption of such a platform however given the resources necessary for such an effort this deliverable is a longer term objective.

# I04 - Generics Aragon Stack

The Aragon Black team is committed to help improving the existing Aragon stack in every aspect it entails with a particular focus on the following topics.

**Monolithic app**. Work closely with all the other Aragon team to allow Aragon apps to handle multiple contracts.

**CLI apps.** Enhance the aragonCLI to potentially serve as a foundational layer for aragon-related node / CLI apps.

## Progress: Unquantifiable?

- Aragon Mesh has taken stewardship of Aragon CLI
- Merged PR for Agent PR
- Contributed to Aragon Design System components
- Feedbacks and improvements to the new template system

## Coming next

- Focus on Aragom PM improvements as detailled in I02
- Implement a revamped and lighter version of Aragon JS
- Keep contributing to various parts of the stack on a needs adjusted basis

# I05 - Generics | Aragon Community / Ecosystem

The Aragon Black team is committed to help extend the existing Aragon community / ecosystem and spread the philosophy of Aragon's [manifesto](https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/) in every aspect it entails with a particular focus on the following topics.

## 2019 deliverables

On-boarding. Help on-board common-driven organizations [political organizations, artistic organizations, cooperatives, etc.] into the Aragon ecosystem to develop real-world use cases.

Interviews / theorization. Manage interviews with and publications from « outsiders » of our crypto-ecosystem: political activists, philosophers, etc. Aragon Black has a long experience in the publishing / journalism field. We thus intend to launch a dedicated blog to drive dialogues and theorization experimentations around the DAO / crypto landscape.

Book. Publish, at the end of this year, a book compiling these articles [under a CC licence] to offer the Aragon ecosystem more visibility outside of the crypto-space.

## Longer-term deliverables

Aragon / pando based publishing platform. Develop a Medium-like dApp based on Aragon / pando allowing to « thank » and reward authors, proofreaders, etc. through an Aragon DAO linked token.

## Progress: 85%

- Received 60 applications for onboarding support to Fundraising which we winded down to 5 after a selection process. Conducted mechanism design and parametrization sessions with these projects in domains such as: DeFi, impact bonds, humanitarian aid, self-organized eco-collectivities, open-source software etc... We will be unveiling the names of some of these projects once our public experimentation phase opens.
- Approx 25 public meetups and workshops: Web3, Dappcon, Ethereum Berlin, Parity, Akasha, DAOcon, P2P Foundation, MIT etc...
- Launched [Aragon Black Blog](https://blog.aragon.black/) with 13 posts to date between vade mecum (pedagogical content), black monthly (feature articles),interviews with ecosystem thought leaders, team members and crypto outsiders!
- Designed a Publishing DAO and Manifest DAO proof of concepts and held 3 workshops with the MIT’s Automated Autonomous Legal Entities working group for mechanism design review and legal outcomes classification.

## Coming next

- Deploy test DAOs for experimenting and feedback and simulating presale and post-initialization scenarios for projects.
- Enrich the Black Blog with additional categories, languages, and community participation.
- Integrate Publishing DAO to a decentralized merchandising dapp for dispatching the book.

# Financial Transparency

**Flock Funding:**

- +450K DAI

**Expenses:**

- Payroll & Contractors: -338K DAI
- Travel Expenses: -15 K DAI
- Equipment: -14K DAI
- Co-working: -1K DAI
- Service Expenses: -2K DAI

**Balance:**

- +81K DAI
