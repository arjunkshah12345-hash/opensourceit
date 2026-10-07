import type { Tool } from "../types";
import { alts, feats } from "./define";

export const collabTools: Tool[] = [
  {
    id: "teams",
    name: "Microsoft Teams",
    vendor: "Microsoft",
    category: "Collaboration",
    summary: "The chat and meetings app that arrives with Microsoft 365.",
    reach: "The default workplace communicator wherever the company already pays for Office. Many employees never chose it. It was turned on with the tenant.",
    licenseKind: "proprietary",
    licenseName: "Microsoft 365",
    licenseNote: "Teams is closed. Meetings, chat history, and the admin policies live in Microsoft’s cloud.",
    gap: "Element, Jitsi, and Nextcloud Talk cover chat and calls you can host. They do not inherit a company’s existing Office tenant, calendar, and file permissions.",
    features: feats(`
Chat | Teams and channels | An organization is split into teams, and each team into channels, with threaded conversations and a file tab backed by SharePoint.
Meetings | Calendar meetings | Schedule from Outlook or Teams, join from the desktop or a browser, and use the same identity as the Microsoft 365 account.
Meetings | Breakout rooms, recordings, and transcripts | Hosts can split a meeting, record it, and produce a transcript. Retention follows the tenant’s policy.
Meetings | Live captions | Captions during a call, with translation on supported plans and languages.
Present | PowerPoint Live | A deck presented inside the meeting so attendees can browse slides.
Rooms | Devices and webinars | Teams Rooms hardware for conference rooms, and webinar-style registration on higher plans.
Apps | Tabs and bots | A channel can host a Planner board, a website, or a bot. The app catalog is Microsoft’s.
Files | SharePoint underneath | Files shared in a team are SharePoint documents with that permission model, not a separate chat drive.
Calls | Phone system | Calling plans and operator connect turn Teams into a desk phone on eligible plans. It is a paid add-on, not the free chat client.
Whiteboard | Microsoft Whiteboard | A shared board in a meeting, stored with the Microsoft account.
Admin | Policies | Admins control who can record, which apps are allowed, guest access, and retention.
AI | Copilot in meetings | On tenants that buy it, a Copilot layer summarizes meetings and chats the user was allowed to see.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/microsoft-teams/group-chat-software" },
      { label: "Help", href: "https://support.microsoft.com/teams" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_Teams" },
    ],
    alternatives: alts([
      ["Element", "https://element.io", "AGPL-3.0", "A Matrix client. Chat and calls on a server you can host. No SharePoint."],
      ["Jitsi Meet", "https://jitsi.org/jitsi-meet/", "Apache-2.0", "Browser meetings you can run yourself. Lighter than a full workplace suite."],
    ]),
  },
  {
    id: "slack",
    name: "Slack",
    vendor: "Salesforce",
    category: "Collaboration",
    summary: "The channel-based chat tool that became the default for a generation of product companies.",
    reach: "Still the chat window in a large share of tech, agencies, and remote companies, even after Salesforce bought it and Teams took the Office-centric market.",
    licenseKind: "proprietary",
    licenseName: "Slack terms and a paid workspace subscription",
    licenseNote: "Slack is a closed hosted service. Message history on free workspaces is limited. You cannot run a Slack-compatible server from source.",
    gap: "Mattermost and Zulip are the serious open replacements. Migration of history, the app directory, and people’s refusal to change chat tools are the practical gap.",
    features: feats(`
Chat | Channels and threads | Public and private channels, with threads so a topic does not flood the channel.
Search | Message search | Search across the workspace’s history. On paid plans the history is the whole archive, not a rolling window.
Huddles | Audio huddles | A lightweight call inside a channel, without scheduling a meeting.
Canvases | Canvases | A document attached to a channel for the text that should not scroll away.
Clips | Video and audio clips | Record a short clip into the channel instead of typing a paragraph.
Workflows | Workflow Builder | No-code automations that post a form and drop the result in a channel.
Apps | App directory | Bots and integrations for GitHub, Jira, calendars, and internal tools, installed per workspace.
Connect | Slack Connect | A shared channel with another company’s Slack, which is how vendors and clients end up in the same thread.
Enterprise | Enterprise Grid | Multiple workspaces under one organization, with discovery APIs and tighter admin controls.
AI | Slack AI | Summaries and search answers over workspace history, sold as an add-on.
Admin | SSO, SCIM, and retention | SAML sign-in, user provisioning, and retention rules on business plans.
Notify | Do not disturb and reminders | Per-person quiet hours, keyword notifications, and reminders saved from a message.
`),
    links: [
      { label: "Product", href: "https://slack.com/" },
      { label: "Help", href: "https://slack.com/help" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Slack_(software)" },
    ],
    alternatives: alts([
      ["Mattermost", "https://mattermost.com", "MIT for Team Edition", "A self-hosted Slack-shaped server. The vendor also sells proprietary tiers."],
      ["Zulip", "https://zulip.com", "Apache-2.0", "Topic-based team chat you can host. The threading model is different on purpose."],
    ]),
  },
  {
    id: "zoom",
    name: "Zoom Meetings",
    vendor: "Zoom",
    category: "Collaboration",
    summary: "The video call that became the default link for classes, interviews, webinars, and anyone outside one company’s office tenant.",
    reach: "The meeting link people send when the attendees are not all inside one company’s Microsoft or Google tenant: classes, interviews, webinars, and family calls.",
    licenseKind: "proprietary",
    licenseName: "Zoom terms of service",
    licenseNote: "The Zoom client and the service are proprietary. There is no open Zoom server.",
    gap: "Jitsi and BigBlueButton cover teaching and meetings you host. Phone bridges, webinar registration, and the installed habit of a zoom.us link are the gap.",
    features: feats(`
Meetings | Host controls and waiting rooms | Mute, remove, lock, and park people in a waiting room before the host lets them in.
Meetings | Breakout rooms | Split a call into smaller rooms and pull everyone back.
Record | Local and cloud recording | Record on the host’s machine or to Zoom’s cloud, with a playback link.
Captions | Live transcription | Automated captions and a transcript of cloud recordings on eligible plans.
Interact | Polls, Q&A, and reactions | In-meeting polls, a webinar-style Q&A, and emoji reactions.
Webinars | Webinars | A sibling product for registration, panelists, and a view-only audience. It is priced separately from ordinary meetings.
Chat | Team chat | Persistent chat beside meetings, including channels. It is part of the Zoom client now, not only in-meeting chat.
Whiteboard | Zoom Whiteboard | A shared board that stays available after the meeting ends, so a brainstorm is not trapped inside the recording.
Apps | App marketplace | Embed other tools in the client. The marketplace is Zoom’s.
AI | AI Companion | Meeting summaries and drafting help, sold as Zoom’s own assistant layer.
Phone | Zoom Phone | A cloud phone system in the same vendor relationship. It is a different SKU from Meetings.
Rooms | Zoom Rooms | Software and appliance settings for a conference room, with a controller.
`),
    links: [
      { label: "Product", href: "https://www.zoom.com/" },
      { label: "Support", href: "https://support.zoom.com/hc" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Zoom_(software)" },
    ],
    alternatives: alts([
      ["Jitsi Meet", "https://jitsi.org/jitsi-meet/", "Apache-2.0", "Browser meetings without an account. You can host the server."],
      ["BigBlueButton", "https://bigbluebutton.org", "LGPL-3.0", "Built for classes: shared notes, polls, and breakout rooms."],
    ]),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    vendor: "Meta",
    category: "Collaboration",
    summary: "The default messenger for a large part of the world outside the US and China.",
    reach: "The app people in much of Latin America, Europe, Africa, and South Asia use for family, small business, and sometimes the only customer-support channel a shop has.",
    licenseKind: "proprietary",
    licenseName: "WhatsApp terms",
    licenseNote: "The client and the service are proprietary. Personal chats are end-to-end encrypted. That encryption does not make the product open source, and the Business Platform is a commercial API.",
    gap: "Signal is the open messenger with serious encryption. It does not move a country’s small-business customer chats, groups, or the network effect.",
    features: feats(`
Chat | One-to-one and group messages | Text, photos, documents, and voice notes in personal chats and groups, with disappearing messages and view-once media.
Encrypt | End-to-end encryption for personal chats | Personal messages and calls are end-to-end encrypted. Backups are a separate choice and can be encrypted with a password the user holds.
Calls | Voice and video calls | Encrypted calls, including group calls, from the same contact list as chat.
Status | Status | A 24-hour photo and video story, separate from the chat list.
Channels | Channels and communities | One-to-many channels, and communities that bundle related groups, which is how neighborhoods and schools organize.
Desktop | Linked devices | A desktop and web client linked to the phone, with multi-device so the phone does not have to be online for every message.
Business | Business app | A free business profile with catalogs and quick replies, aimed at shops that run customer chat from a phone.
API | Business Platform | A paid API for companies that send notifications and support messages at scale. Those business messages are a commercial product, not the same thing as a family chat.
Backup | Encrypted backups | Back up to Google Drive or iCloud, with an option for an end-to-end encrypted backup.
Payments | Payments in some countries | Send money inside the chat where Meta has launched payments. Availability is regional.
Privacy | Controls | Block, report, silence unknown callers, and choose who can see a profile photo and last seen.
Broadcast | Broadcast lists | One message sent individually to many contacts, without putting them in a group.
`),
    links: [
      { label: "Product", href: "https://www.whatsapp.com/" },
      { label: "FAQ", href: "https://faq.whatsapp.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/WhatsApp" },
    ],
    alternatives: alts([
      ["Signal", "https://signal.org", "AGPL-3.0", "Open clients and a published protocol. The network is Signal’s. It does not carry WhatsApp’s contacts and groups."],
      ["Element", "https://element.io", "AGPL-3.0", "Matrix chat you can host. A different social graph."],
    ]),
  },
  {
    id: "wechat",
    name: "WeChat",
    vendor: "Tencent",
    category: "Collaboration",
    summary: "The super-app that is messaging, payments, and a runtime for other software in China.",
    reach: "The default communications app for daily life in mainland China: family chat, paying a restaurant, booking a service, and opening a mini program that is effectively an app.",
    licenseKind: "proprietary",
    licenseName: "Tencent terms",
    licenseNote: "WeChat is closed. Mini programs are a platform developers target. They are not an open source client, and accounts are tied to a phone number and Tencent’s identity rules.",
    gap: "Nothing open replaces the combination of chat, Pay, official accounts, and mini programs. Signal or Element can replace a conversation. They cannot replace the rest of the super-app.",
    features: feats(`
Chat | Messages, groups, and calls | Text, voice notes, stickers, and voice and video calls. Group chats are a basic social unit, not an add-on.
Moments | Moments | A private-ish feed of photos and posts visible to contacts, which is the social half of the app.
Pay | WeChat Pay | QR payments in shops, peer-to-peer transfers, red packets, and in-app purchases. For many people this is the wallet.
Mini | Mini programs | Apps that run inside WeChat without a separate store install: transit, government forms, shops, and games.
Accounts | Official accounts | Brands and institutions publish articles and service menus. It is a distribution channel, not just a contact.
Video | Channels | A short-video and live surface inside the same app.
Scan | QR identity | Scan to add a person, join a group, pay a bill, or open a mini program. The QR code is the user interface.
Translate | In-chat translation | Translate a message without leaving the thread.
Work | WeCom is the sibling | Enterprise WeChat, or WeCom, is Tencent’s separate work suite. It is also closed, and it is how a lot of Chinese companies chat when they are not in a personal WeChat group.
Platform | One account, many services | The stickiness is that leaving chat also means leaving pay, mini programs, and official accounts.
Privacy | Contact-scoped identity | The app is built around a phone number and a social graph Tencent holds. Export is not a way to take the graph to another client.
Desktop | Desktop and web companions | A desktop client for chat, with the phone still central to account security.
`),
    links: [
      { label: "Product", href: "https://www.wechat.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/WeChat" },
      { label: "Tencent", href: "https://www.tencent.com/" },
    ],
    alternatives: alts([
      ["Signal", "https://signal.org", "AGPL-3.0", "Replaces the private chat, not Pay or mini programs."],
      ["Element", "https://element.io", "AGPL-3.0", "Hostable group chat. No payments network and no mini-program runtime."],
    ]),
  },
  {
    id: "imessage",
    name: "iMessage and FaceTime",
    vendor: "Apple",
    category: "Collaboration",
    summary: "The blue-bubble messenger and the video call that ship on every Apple device.",
    reach: "The default conversation for people inside Apple’s installed base, especially in the US. SMS still falls back for everyone else, which is the green bubble.",
    licenseKind: "proprietary",
    licenseName: "Apple software license",
    licenseNote: "iMessage and FaceTime are closed. Messages are end-to-end encrypted between Apple devices. There is no open server and no supported Android client.",
    gap: "Signal runs on iPhone and Android with open clients. It does not become the SMS fallback, and it does not turn blue inside Apple’s Messages app.",
    features: feats(`
Chat | iMessage | Texts, photos, and attachments between Apple devices, with end-to-end encryption, read receipts, and typing indicators.
SMS | SMS and MMS fallback | If the other person is not on iMessage, the same app sends a carrier text. That split is the product’s social effect.
Tapbacks | Reactions and effects | Tapback reactions, bubble and screen effects, and stickers, including Memoji.
Edit | Edit and undo send | Change or retract a recent message on current iOS versions.
Threads | Threads and group chats | Inline replies and group threads, with Focus filters that can silence a conversation.
Sync | iCloud sync | The same messages on iPhone, iPad, and Mac when Messages in iCloud is on.
Apps | iMessage apps | Sticker packs and small apps that run inside the conversation.
FaceTime | Audio and video calls | One or many people, from the Phone or FaceTime app, using an Apple ID rather than a phone-carrier video service.
FaceTime | SharePlay | Watch or listen together during a FaceTime call on supported apps.
Links | FaceTime links | A link that lets someone join from a browser in supported cases, without making FaceTime an open network.
Safety | Communication safety and check-in | On-device protections for some sensitive images, and Check In so a friend is told when you arrive.
SMS relay | Text message forwarding | An iPhone can relay SMS to a Mac. Android phones cannot join that relay as iMessage peers.
`),
    links: [
      { label: "Messages", href: "https://support.apple.com/messages" },
      { label: "FaceTime", href: "https://support.apple.com/facetime" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/IMessage" },
    ],
    alternatives: alts([
      ["Signal", "https://signal.org", "AGPL-3.0", "Open, encrypted, and cross-platform. People have to choose it. It does not replace SMS inside Messages."],
    ]),
  },
  {
    id: "discord",
    name: "Discord",
    vendor: "Discord",
    category: "Collaboration",
    summary: "The server-and-channel app that started with games and became a community host.",
    reach: "The default place for game groups, open-source communities, classes, and creator fandoms. Many projects that would once have used a forum now have a Discord.",
    licenseKind: "proprietary",
    licenseName: "Discord terms",
    licenseNote: "The client and the service are proprietary. Bots are written against Discord’s API. That API is not a right to run your own Discord.",
    gap: "Matrix and Rocket.Chat cover communities you host. Discord’s discoverability, voice quality expectations, and existing servers are the gap.",
    features: feats(`
Servers | Servers, channels, and roles | A community is a server of text, voice, and forum channels, with roles that grant permissions.
Voice | Voice, video, and screen share | Drop into a voice channel without placing a call. Share a screen or a camera from the same channel.
Stage | Stages and events | A moderated stage where a few people talk and a larger audience listens, plus scheduled events.
Threads | Threads and forums | Threads under a message, and forum channels for longer posts.
Safety | Moderation tools | Timeouts, bans, an audit log, AutoMod rules, and a safety setup for new servers.
Nitro | Nitro subscriptions | A paid personal plan for larger uploads, custom emoji, and higher stream quality. The free client is still proprietary.
Bots | Bot API | Moderation, music, and game bots are a large part of why communities stay. The API is Discord’s.
Activities | Activities | Shared mini-apps inside a voice channel.
Discovery | Server discovery and invites | Public servers can be found, and invites are the growth mechanism.
Notify | Notification settings per channel | Override a noisy server down to mentions only.
Family | Family Center | A parent view of a teen’s activity, in regions where Discord offers it.
Apps | Linked accounts and app directory | Connect other accounts and install apps into a server.
`),
    links: [
      { label: "Product", href: "https://discord.com/" },
      { label: "Support", href: "https://support.discord.com/" },
      { label: "Developer docs", href: "https://discord.com/developers/docs/intro" },
    ],
    alternatives: alts([
      ["Element", "https://element.io", "AGPL-3.0", "Matrix rooms for communities, including voice. The culture and the app directory are different."],
      ["Rocket.Chat", "https://www.rocket.chat", "MIT", "Team and community chat you can host. Some advanced features are on the vendor’s paid plans."],
    ]),
  },
  {
    id: "dingtalk",
    name: "DingTalk",
    vendor: "Alibaba",
    category: "Collaboration",
    summary: "The workplace suite a large share of Chinese companies actually open in the morning.",
    reach: "Alibaba’s work app: chat organized by the company org chart, plus attendance, approvals, and meetings. Widely deployed across Chinese firms, including listed companies.",
    licenseKind: "proprietary",
    licenseName: "Alibaba / DingTalk terms",
    licenseNote: "DingTalk is a closed cloud suite. There is no open server that speaks its protocol or carries its attendance and approval data.",
    gap: "Nextcloud plus a chat tool covers files and calls for a team that can choose its stack. It does not match DingTalk’s attendance hardware, approval habits, or the org-chart default in Chinese companies. Feishu and WeCom are the other closed suites in the same market.",
    features: feats(`
Chat | Org-structured messaging | Conversations follow the company directory. Work chat is the default, not a server someone has to design.
Attendance | Clock-in | GPS, Wi-Fi, or hardware clock-in for shifts. For a lot of companies this is the feature that makes the app mandatory.
Approvals | Approval flows | Leave, expenses, and procurement requests move through a configurable approval chain.
Meetings | Video meetings | Built-in meetings, including large live sessions, without a separate conferencing vendor.
Docs | Shared documents | Word-like and sheet-like cloud documents inside the same login as chat.
Calendar | Calendar and to-dos | Meetings and tasks tied to the org, not only to a personal calendar.
Apps | Internal applications | A platform for company-specific forms and mini apps that show up beside chat.
Admin | Organization console | Departments, roles, and app permissions administered as the company, which is the deployment model.
Live | Live streams | Company all-hands and training sessions inside the suite.
Security | Enterprise editions | Larger deployments get more isolated tenants and admin controls. The software remains Alibaba’s service.
Mobile | Phone-first | The phone app is the primary client for clock-in and approvals, with a desktop for longer work.
Sibling | Same market as WeCom and Feishu | Tencent’s WeCom and ByteDance’s Feishu, sold internationally as Lark, are the other closed suites companies in this market compare it with.
`),
    links: [
      { label: "Product", href: "https://www.dingtalk.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/DingTalk" },
      { label: "Lark, the related ByteDance suite", href: "https://www.larksuite.com/" },
    ],
    alternatives: alts([
      ["Nextcloud", "https://nextcloud.com", "AGPL-3.0", "Files, office, and talk on your own server. No equivalent attendance network."],
      ["Mattermost", "https://mattermost.com", "MIT", "Org chat you can host. Approvals and clock-in are something you would bolt on."],
    ]),
  },
  {
    id: "line",
    name: "LINE",
    vendor: "LY Corporation",
    category: "Collaboration",
    summary: "The messenger that is the default in Japan, Taiwan, and Thailand.",
    reach: "In Japan, a huge share of personal and business conversation happens in LINE, including official accounts that act like a company’s app. Taiwan and Thailand are the other core markets.",
    licenseKind: "proprietary",
    licenseName: "LINE terms",
    licenseNote: "The LINE app and service are proprietary. Stickers, official accounts, and LINE Pay are product features, not an open protocol.",
    gap: "Signal and Matrix replace chat. They do not replace official accounts, the sticker economy, or LINE Pay where people already run daily life through it.",
    features: feats(`
Chat | One-to-one, groups, and OpenChat | Personal chats, groups, and OpenChat rooms that people can join without already being contacts.
Calls | Voice and video | Calls from the same contact list, including group calls.
Stickers | Sticker shop | A large paid and free sticker catalog. Stickers are a primary way people write, not a side feature.
Official | Official accounts | Brands and governments message users, with menus and rich messages. For many services this is the customer channel.
Pay | LINE Pay | Wallet and QR payments in markets where it is offered.
Home | Timeline and LINE VOOM | A feed of posts and short video beside the chat list.
Keep | Keep | A personal locker for notes, photos, and files inside the account.
Desktop | Desktop and tablet clients | The same account on a computer, which is how offices end up living in LINE.
Family | Family and album tools | Shared albums and family-oriented services bundled with the messenger in its home markets.
Security | Letter Sealing | LINE’s end-to-end encryption option for eligible chats. Availability has varied by client and region. It is not a reason to treat the service as open.
Commerce | In-app services | Shopping, weather, and news modules differ by country. The super-app shape is part of the product in its strongest markets.
Business | LINE for business messaging | Companies pay to reach users through official accounts. That reach is the moat.
`),
    links: [
      { label: "Product", href: "https://line.me/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Line_(software)" },
      { label: "LY Corporation", href: "https://www.lycorp.co.jp/en/" },
    ],
    alternatives: alts([
      ["Signal", "https://signal.org", "AGPL-3.0", "A cross-platform open messenger. No sticker shop, official-account reach, or LINE Pay."],
    ]),
  },
  {
    id: "google-meet",
    name: "Google Meet",
    vendor: "Google",
    category: "Collaboration",
    summary: "The meeting link that comes with a Google account.",
    reach: "The default video call for schools and companies on Workspace, and a one-click meeting from Gmail or Calendar for personal accounts.",
    licenseKind: "proprietary",
    licenseName: "Google terms",
    licenseNote: "Meet is a closed service. Browser joining does not make the server open.",
    gap: "Jitsi runs in a browser and can be hosted. Classroom attendance, Calendar integration, and Workspace admin policies are the gap.",
    features: feats(`
Join | Browser joining | Participants can join from a browser without installing a client, which is why schools use it.
Calendar | Calendar and Gmail integration | A Meet link on a Calendar event, and Meet entry points inside Gmail.
Host | Host controls | Mute, remove, admit from a waiting room, and end the call for everyone.
Captions | Live captions | Automated captions during the call, with translation on supported accounts.
Record | Recordings and transcripts | On eligible Workspace editions, record to Drive and produce a transcript.
Breakout | Breakout rooms | Split a class or a meeting and visit the rooms as host.
Polls | Polls and Q&A | In-call questions for classes and all-hands.
Whiteboard | Jamboard’s successor surfaces | Drawing and annotation during a call. Google has retired Jamboard. Meet still has annotation tools in current clients.
Noise | Noise cancellation | Client-side filtering of background sound on supported devices.
Admin | Workspace policies | Who may record, whether external people can join, and how long recordings live.
Companion | In-call chat and reactions | Chat that stays with the meeting, plus reactions.
Large | Live streams | On higher editions, stream a meeting to a large view-only audience.
`),
    links: [
      { label: "Product", href: "https://workspace.google.com/products/meet/" },
      { label: "Help", href: "https://support.google.com/meet" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Meet" },
    ],
    alternatives: alts([
      ["Jitsi Meet", "https://jitsi.org/jitsi-meet/", "Apache-2.0", "Browser calls you can host. No Google Classroom roster."],
      ["BigBlueButton", "https://bigbluebutton.org", "LGPL-3.0", "A teaching-oriented meeting server."],
    ]),
  },
];
