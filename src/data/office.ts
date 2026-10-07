import type { Tool } from "../types";
import { alts, feats } from "./define";

export const officeTools: Tool[] = [
  {
    id: "excel",
    name: "Microsoft Excel",
    vendor: "Microsoft",
    category: "Office and documents",
    summary: "The spreadsheet that most business models still live in.",
    reach: "The default calculation surface in finance, operations, and small business. A huge amount of company logic exists only as a workbook someone emails around.",
    licenseKind: "proprietary",
    licenseName: "Microsoft 365 / Office license",
    licenseNote: "Excel is closed. Microsoft 365 is a subscription for the current desktop, web, and mobile apps. There is no source grant for the calculation engine.",
    gap: "LibreOffice Calc and OnlyOffice open and save xlsx. Pivot fidelity, Power Query, VBA, and the long tail of financial models are where replacements still break.",
    features: feats(`
Modeling | Cells, tables, and worksheets | Grids of formulas, Excel Tables that expand as rows are added, and workbooks that can hold many sheets with cross-sheet references.
Modeling | Formulas and dynamic arrays | XLOOKUP, FILTER, SORT, UNIQUE, LET, LAMBDA, and spill ranges. A single formula can return many cells, which is how current models avoid a column of copied expressions.
Analysis | PivotTables and PivotCharts | Drag fields into rows, columns, values, and filters to summarize a table. PivotCharts stay tied to that summary.
Data | Power Query | Import, clean, append, and merge data from files, databases, and web pages. Refresh reruns the steps instead of making someone paste again.
Data | Power Pivot and the Data Model | Relationships and DAX measures for models that are larger than one flat sheet. This is the piece that starts to resemble a local semantic model.
Charts | Charts and conditional formatting | Column, line, waterfall, and combo charts, plus color scales, data bars, and formula-driven formats on the cells themselves.
Collaboration | Co-authoring | On files stored in OneDrive or SharePoint, several people edit one workbook with presence, comments, and version history.
Protection | Sheet protection and sensitivity labels | Lock parts of a sheet, require a password to change structure, and, in a Microsoft 365 tenant with Purview, apply a label that can encrypt the file.
Automation | VBA macros | Record or write Visual Basic for Applications. A large installed base of finance and operations logic still ships this way and does not move cleanly.
Automation | Office Scripts and Power Automate | TypeScript-style scripts in Excel for the web, and flows that push workbook data into the rest of Microsoft 365.
What-if | Goal Seek, scenarios, and Solver | Goal Seek and Scenario Manager cover simple what-if cases. Solver handles constrained optimization. The richer Solver add-in is a separate Frontline license.
Review | Comments and version history | Threaded comments in Microsoft 365, older cell notes, and a version history when the file lives in OneDrive or SharePoint.
Platform | Desktop, web, and mobile | The same xlsx opens in the desktop app, Excel for the web, and the phone apps. Formula and Power Query coverage is broadest on the desktop.
Connections | Refreshable external data | ODBC and Power Query connectors keep a workbook pointed at a database instead of a one-time export.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/microsoft-365/excel" },
      { label: "Help", href: "https://support.microsoft.com/excel" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_Excel" },
    ],
    alternatives: alts([
      ["LibreOffice Calc", "https://www.libreoffice.org", "MPL-2.0", "Opens xlsx and has its own pivot tables and macros. Complex Excel workbooks often need repairs."],
      ["OnlyOffice Spreadsheet", "https://www.onlyoffice.com", "AGPL-3.0", "A collaborative editor with Microsoft-format compatibility. The company also sells a proprietary edition."],
    ]),
  },
  {
    id: "word",
    name: "Microsoft Word",
    vendor: "Microsoft",
    category: "Office and documents",
    summary: "The document editor contracts, schools, and publishers still exchange.",
    reach: "The docx file is the interchange format for a huge share of professional writing. If a lawyer, teacher, or agency says “send a Word doc,” this is the app they mean.",
    licenseKind: "proprietary",
    licenseName: "Microsoft 365 / Office license",
    licenseNote: "The docx format is a published ECMA/ISO standard. The Word application, its layout engine, and its track-changes behavior are not open source.",
    gap: "LibreOffice Writer and OnlyOffice open docx. The fights start with complex numbering, tracked changes from many authors, and content controls.",
    features: feats(`
Writing | Styles and navigation | Paragraph and character styles, plus a navigation pane built from headings, so a long document has a structure instead of one-off formatting.
Review | Track changes and comments | Insertions, deletions, moves, and threaded comments, with accept and reject. This is the editorial workflow most organizations already know.
References | Notes, citations, and tables of contents | Footnotes, endnotes, a citation manager, bibliographies, captions, cross-references, and a table of contents generated from heading styles.
Layout | Sections, headers, and wrapping | Different headers per section, columns, text boxes, and images with wrapping. Page layout is the part other editors approximate.
Mail | Mail merge | Letters, labels, and emails driven from an Excel sheet or a contact list.
Collaboration | Real-time co-authoring | Several people in one document on OneDrive or SharePoint, with presence and version history.
Forms | Content controls | Dropdowns, date pickers, and plain-text controls, often locked so a template can be filled without restyling it.
Automation | VBA and macros | Desktop automation, including firm-specific macros that have been in use for years.
Compare | Compare and combine | A diff of two documents, and a way to merge comments and edits that came back in separate copies.
Editor | Spelling and grammar | Editor suggestions for spelling, grammar, and clarity inside the document.
Accessibility | Accessibility checker and Read Aloud | Flags missing alt text and heading problems, and reads the document aloud.
Export | PDF export | Export a PDF from the same layout engine, with options for tags. Tagged-PDF quality still depends on how the document was built.
Security | Restrict editing and sensitivity labels | Limit a file to comments or tracked changes, and apply a Purview label that can encrypt it when the tenant has that service.
Platform | Desktop, web, and mobile | Word for the web covers everyday writing. Macros and some layout features stay on the desktop app.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/microsoft-365/word" },
      { label: "Help", href: "https://support.microsoft.com/word" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_Word" },
    ],
    alternatives: alts([
      ["LibreOffice Writer", "https://www.libreoffice.org", "MPL-2.0", "A full word processor with docx support. Track-changes round trips with Word are the usual breakage."],
      ["OnlyOffice Docs", "https://www.onlyoffice.com", "AGPL-3.0", "Collaborative documents aimed at Microsoft compatibility."],
    ]),
  },
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint",
    vendor: "Microsoft",
    category: "Office and documents",
    summary: "The slide deck that board meetings and classrooms are still built around.",
    reach: "The default presentation file in companies and schools. pptx is what people attach when they say they have a deck.",
    licenseKind: "proprietary",
    licenseName: "Microsoft 365 / Office license",
    licenseNote: "PowerPoint is closed. The pptx container is a documented format. The design engine, animation model, and Presenter View are Microsoft’s application.",
    gap: "LibreOffice Impress and OnlyOffice open pptx. Animation, embedded media, and SmartArt survive inconsistently.",
    features: feats(`
Slides | Slide master and layouts | A master controls type, colors, and placeholders so a 40-slide deck does not drift one slide at a time.
Design | Designer | On Microsoft 365, Designer proposes layouts for a slide’s content. It is a cloud feature, not a local open algorithm.
Present | Presenter View | Notes, the next slide, and a timer on one screen, while the audience sees only the slides.
Present | Recording and rehearsal | Record narration and timings, rehearse, and export a video of the deck.
Motion | Morph and the animation pane | Morph interpolates objects between slides. The animation pane times entrance, emphasis, exit, and motion paths.
Media | Embedded video and audio | Place media on a slide and control playback as part of the presentation.
Graphics | Charts, SmartArt, and icons | Editable charts from worksheet data, diagram layouts, and an icon library.
Collaboration | Co-authoring and comments | Simultaneous editing on OneDrive or SharePoint, plus comments anchored to a slide.
Live | PowerPoint Live in Teams | Present a deck inside a Teams meeting so attendees can move around slides without asking the presenter to go back.
Templates | Themes and templates | Organizational templates carry fonts, colors, and sample slides.
Accessibility | Accessibility checker | Finds reading-order problems, missing alt text, and low contrast before a deck is sent.
Export | Video, PDF, and handouts | Export a movie, a PDF, or a notes handout from the same file.
Platform | Desktop, web, and mobile | Authoring is fullest on the desktop. The web app covers presenting and lighter edits.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/microsoft-365/powerpoint" },
      { label: "Help", href: "https://support.microsoft.com/powerpoint" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_PowerPoint" },
    ],
    alternatives: alts([
      ["LibreOffice Impress", "https://www.libreoffice.org", "MPL-2.0", "Opens pptx. Complex animation and embedded fonts are the usual loss."],
      ["OnlyOffice Presentation", "https://www.onlyoffice.com", "AGPL-3.0", "A collaborative slide editor with Microsoft-format ambitions."],
    ]),
  },
  {
    id: "gmail",
    name: "Gmail",
    vendor: "Google",
    category: "Office and documents",
    summary: "The mailbox a huge share of personal and Workspace email lands in.",
    reach: "A default consumer inbox, and the mail half of Google Workspace for companies and schools that are not on Microsoft 365.",
    licenseKind: "proprietary",
    licenseName: "Google Terms of Service / Workspace agreement",
    licenseNote: "Gmail is a closed service. IMAP and POP can expose mail to other clients when an admin allows it. That is access to the mailbox, not a right to run Gmail.",
    gap: "Any IMAP client can read a mailbox Google allows to be opened. Running your own mail server, or a client such as Thunderbird, does not reproduce Gmail’s spam filtering or Workspace admin controls.",
    features: feats(`
Inbox | Categories and conversation view | Primary, Promotions, Social, and Updates split a busy inbox. Conversation view stacks a thread into one row.
Search | Search operators | from, to, has:attachment, newer_than, label, and the rest of Gmail’s query language, against Google’s index of the mailbox.
Organize | Labels and filters | Mail gets labels rather than a single folder. Filters can label, archive, forward, or star as messages arrive.
Compose | Smart Compose and Smart Reply | Suggested phrases while writing, and short replies above a thread. Both call Google’s models.
Send | Schedule send, undo send, and confidential mode | Delay a message, retract it for a few seconds, or send a message that expires and can require a passcode. Confidential mode is not independent end-to-end encryption.
Triage | Snooze and multiple inboxes | Hide a thread until a time you pick, or stack several inbox sections on one screen.
Meet | Chat and Meet beside the inbox | Workspace accounts get Chat and Meet entry points in the same window as mail.
Storage | Shared Google Account quota | Mail storage counts against the same pool as Drive and, on consumer accounts, Photos.
Security | Phishing warnings and account 2-step | Suspicious-mail banners, plus the Google account’s 2-step verification in front of the mailbox.
Admin | Routing and retention | Workspace admins can route mail, restrict IMAP, and, on editions that include it, hold messages for compliance.
Offline | Offline Gmail | A browser mode that reads and queues mail without a connection, then syncs.
Add-ons | Add-ons and Apps Script | Third-party panels in the mailbox, and scripts that process mail for a Workspace domain.
`),
    links: [
      { label: "Product", href: "https://workspace.google.com/products/gmail/" },
      { label: "Help", href: "https://support.google.com/mail" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Gmail" },
    ],
    alternatives: alts([
      ["Thunderbird", "https://www.thunderbird.net", "MPL-2.0", "A full open mail client. It talks to servers. It is not a hosted Gmail replacement."],
      ["Modoboa", "https://modoboa.org", "ISC", "A mail-server admin console for people willing to run the server themselves."],
    ]),
  },
  {
    id: "google-docs",
    name: "Google Docs",
    vendor: "Google",
    category: "Office and documents",
    summary: "The collaborative document editor that made simultaneous typing normal.",
    reach: "The default writing surface in schools and in companies on Google Workspace, and a common way to share a draft by link.",
    licenseKind: "proprietary",
    licenseName: "Google Workspace / consumer Google terms",
    licenseNote: "Docs is a closed web application. Files can be exported to open formats. The editor, the suggestion model, and the real-time service are not open source.",
    gap: "Collabora Online, CryptPad, and OnlyOffice cover collaborative writing. Google’s sharing model and the installed habit of “just send a Docs link” are the gap.",
    features: feats(`
Writing | Real-time multiplayer editing | Several cursors in one document, with names on the carets. This is the behavior the product is known for.
Review | Suggesting mode and comments | Edits can land as suggestions the owner accepts, and comments can be assigned and resolved.
Structure | Styles, outline, and table of contents | Heading styles feed an outline and a generated table of contents.
Layout | Pages and pageless | A printed-page mode and a pageless mode for documents that are really long memos.
Insert | Tables, images, drawings, and equations | Ordinary document objects, plus a drawing surface and an equation editor.
Chips | Smart chips | People, dates, files, and calendar events can be inserted as chips that stay linked to Google’s directory.
Automation | Apps Script | A JavaScript environment that reads and writes the document and can run on a trigger.
History | Version history | Named versions and a playback of who changed what, stored by Google with the file.
Sharing | Link permissions | Restricted, or anyone with the link, at viewer, commenter, or editor. That permission model is the distribution mechanism.
Voice | Voice typing | Dictation into the document from Chrome.
Offline | Offline editing | Chrome can edit recently opened files without a connection when the user turns the feature on.
Export | Download as Word, PDF, or text | A copy leaves Google’s format. The canonical file remains in Drive unless someone changes that habit.
`),
    links: [
      { label: "Product", href: "https://workspace.google.com/products/docs/" },
      { label: "Help", href: "https://support.google.com/docs" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Docs" },
    ],
    alternatives: alts([
      ["CryptPad", "https://cryptpad.org", "AGPL-3.0", "Collaborative documents encrypted so the server cannot read them. A different trust model than Docs."],
      ["Collabora Online", "https://www.collaboraonline.com", "MPL-2.0", "LibreOffice in a browser, usually beside Nextcloud."],
    ]),
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    vendor: "Google",
    category: "Office and documents",
    summary: "The spreadsheet people share when they do not want to email an xlsx.",
    reach: "The default collaborative grid in education, startups, and many operations teams. It is also the lightweight database behind a lot of internal tools.",
    licenseKind: "proprietary",
    licenseName: "Google Workspace / consumer Google terms",
    licenseNote: "Sheets is closed. Exports to xlsx and CSV are copies. The calculation service and the simultaneous-editing backend are Google’s.",
    gap: "Grids in Nextcloud, OnlyOffice, and LibreOffice cover ordinary formulas. QUERY, IMPORTRANGE, and Apps Script are the features teams notice are missing.",
    features: feats(`
Formulas | QUERY, FILTER, ARRAYFORMULA, and lookups | QUERY runs a SQL-like expression over a range. FILTER and ARRAYFORMULA fill columns without dragging. VLOOKUP and XLOOKUP cover classic joins inside the sheet.
Collaboration | Simultaneous editing | Many people in one grid, with cursors and a comment thread, which is why teams use it instead of passing a file.
Analysis | Pivot tables | Summaries of a range, with calculated fields, refreshed as the source changes.
Charts | Charts and sparkline formulas | Embedded charts, and SPARKLINE formulas that draw inside a cell.
Validation | Data validation and dropdowns | Constrain a cell to a list, a number range, or a checkbox so a shared tracker does not rot.
Protection | Protected ranges | Lock a header or a formula column while leaving the input cells editable for everyone else.
Forms | Google Forms responses | A form can append submissions straight into a sheet.
Automation | Apps Script and macros | Record a macro or write JavaScript that runs on edit, on a timer, or from a menu.
Import | IMPORTRANGE and IMPORTDATA | Pull a range from another spreadsheet, or a CSV from a URL. The live link is the feature.
Big data | Connected Sheets | On eligible Workspace editions, a sheet can query BigQuery without downloading the warehouse into the grid.
History | Version history | Restore an earlier copy when a collaborator sorts the wrong column.
Notify | Conditional notifications | Email someone when a column changes, which is how a sheet becomes a tiny workflow.
`),
    links: [
      { label: "Product", href: "https://workspace.google.com/products/sheets/" },
      { label: "Help", href: "https://support.google.com/docs" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Sheets" },
    ],
    alternatives: alts([
      ["LibreOffice Calc", "https://www.libreoffice.org", "MPL-2.0", "A desktop spreadsheet. Collaboration needs another layer."],
      ["NocoDB", "https://nocodb.com", "AGPL-3.0", "A spreadsheet-like interface on a real database. A better fit when the sheet has become an app."],
    ]),
  },
  {
    id: "google-drive",
    name: "Google Drive",
    vendor: "Google",
    category: "Office and documents",
    summary: "The file locker underneath Docs, Sheets, and a great many shared links.",
    reach: "Personal Google accounts and almost every Workspace domain. If a school or company says “it’s in the Drive,” this is the product.",
    licenseKind: "proprietary",
    licenseName: "Google terms",
    licenseNote: "Drive is a closed sync and sharing service. The desktop client is proprietary. Files you store there are yours to export. The service is not something you can host.",
    gap: "Nextcloud and ownCloud cover sync, sharing, and office integration on a server you run. Google’s search and the habit of link-sharing are the gap.",
    features: feats(`
Files | My Drive and shared drives | A personal drive, plus shared drives whose files belong to the team rather than to the person who uploaded them.
Sync | Drive for desktop | A Windows and macOS client that streams or mirrors files. The client is closed even though it shows up as a folder.
Sharing | Link permissions and expiry | Viewer, commenter, and editor links, with expiration and, on Workspace, limits on who can send a file outside the domain.
Search | Full-text search | Search across file names and the contents of file types Google can index, including scans it has run OCR on.
Storage | Pooled quota | One storage number shared by Drive, Gmail, and consumer Photos.
Versions | Version history | Non-Google files keep earlier uploads, up to the retention the account allows.
Open | Open with other apps | A file can be handed to a third-party editor installed from Workspace’s app list.
Admin | Sharing restrictions and DLP | Admins can block external sharing and, on higher editions, apply data-loss rules and Vault holds.
Encryption | Client-side encryption | Eligible enterprise editions can encrypt files with keys held outside Google. It is an add-on mode, not the default.
Offline | Offline files | Mark files for offline use in the browser or the desktop client.
Shared | Shared with me | A view of everything other people have opened to your account, separate from files you own.
Comments | Drive-level comments on files | Comment on a PDF or image in the preview, without converting it into a Doc.
`),
    links: [
      { label: "Product", href: "https://workspace.google.com/products/drive/" },
      { label: "Help", href: "https://support.google.com/drive" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Drive" },
    ],
    alternatives: alts([
      ["Nextcloud", "https://nextcloud.com", "AGPL-3.0", "Sync, share, and office apps on a server you control."],
      ["Syncthing", "https://syncthing.net", "MPL-2.0", "Folder sync between devices, without a central file locker or link sharing."],
    ]),
  },
  {
    id: "notion",
    name: "Notion",
    vendor: "Notion Labs",
    category: "Office and documents",
    summary: "The connected workspace that replaced a lot of internal wikis and trackers.",
    reach: "Widely used by product teams, startups, and students as the place a wiki, a task board, and a notes app got merged into one login.",
    licenseKind: "proprietary",
    licenseName: "Notion terms of service",
    licenseNote: "Notion is a closed hosted service. There is a public API. There is no open-source server that runs a Notion workspace.",
    gap: "AppFlowy, AFFiNE, and Outline cover parts of the wiki-and-database idea. Notion’s block editor plus databases plus the template ecosystem is the combination that is hard to match in one open app.",
    features: feats(`
Pages | Nested pages and blocks | A page is a tree of blocks: text, toggles, headings, embeds, and databases. Pages live inside other pages.
Databases | Multiple views of one collection | The same records as a table, board, calendar, timeline, gallery, or list.
Databases | Relations, rollups, and formulas | Link a task to a project, roll up a number, and compute a formula without leaving the page.
Wikis | Wikis and verified pages | A wiki layout for a team’s durable documents, with a verification state so people can see whether a page is maintained.
Share | Public pages and guests | Publish a page to the web, or invite a guest to one page without giving them the whole workspace.
Permissions | Page permissions | Inheritance down the tree, with overrides, which is how a workspace mixes an open wiki and a private HR page.
Collaboration | Comments, mentions, and live editing | Comment on a block, mention a person, and type in the same page.
Import | Importers | Bring in Markdown, CSV, Word, Google Docs, and Confluence exports. The import is a copy into Notion’s model.
API | Public API | Create and update pages and database rows from outside. The API does not let you host the product.
Search | Workspace search | Search across pages the account can see.
AI | Notion AI | Draft, summarize, and ask questions across pages the user can access. It is a paid layer on the closed workspace.
Templates | Template gallery | A large gallery of setups for wikis, CRMs, and class notes. The templates are content, not source you can run elsewhere.
`),
    links: [
      { label: "Product", href: "https://www.notion.com/" },
      { label: "Help", href: "https://www.notion.com/help" },
      { label: "Developers", href: "https://developers.notion.com/" },
    ],
    alternatives: alts([
      ["AppFlowy", "https://appflowy.com", "AGPL-3.0", "An open workspace aimed directly at the Notion-shaped job, still catching up on collaboration."],
      ["AFFiNE", "https://affine.pro", "MIT", "A local-first document and whiteboard editor with a different shape than Notion’s databases."],
      ["Outline", "https://www.getoutline.com", "BSL-1.1", "A team wiki. The license is source-available, not OSI. Listed because teams use it as a wiki, with that caveat."],
    ]),
  },
  {
    id: "wps-office",
    name: "WPS Office",
    vendor: "Kingsoft",
    category: "Office and documents",
    summary: "The office suite that, in China, sits beside or instead of Microsoft 365.",
    reach: "Kingsoft said the desktop version was past 100 million daily active users. The South China Morning Post reported that claim on 2 January 2025. WPS is the suite Chinese government and industry documents name when they are not naming Microsoft.",
    licenseKind: "proprietary",
    licenseName: "Kingsoft end-user license",
    licenseNote: "WPS is proprietary. A free tier exists in many regions and is still closed. Compatibility with Microsoft formats is a product feature, not an open implementation of Office.",
    gap: "LibreOffice is the open suite. It does not ship Kingsoft’s Chinese-language government templates, and organizations that standardized on WPS’s cloud are not one export away.",
    features: feats(`
Suites | Writer, Spreadsheets, and Presentation | One install covers the three document types people expect from an office suite, with a shared account and a tabbed window.
Compatibility | Microsoft format compatibility | Open and save docx, xlsx, and pptx. That compatibility is why it spread as a substitute rather than as a new format.
PDF | PDF reading and conversion | Read, annotate, and convert PDFs inside the same suite, which Kingsoft sells as part of the daily document flow.
Cloud | Account sync | Documents tied to a WPS cloud account so the same file shows up on the phone and the desktop.
Collaborate | Cloud co-editing | Shared cloud documents support simultaneous editing in Kingsoft’s hosted service.
Linux | A first-party Linux build | Unlike Microsoft 365, WPS ships a Linux desktop version, which matters in Chinese government deployments that are not on Windows.
Templates | Template store | A catalog of resumes, contracts, and official-style documents, including formats used in Chinese administration.
Membership | Free tier and paid membership | The free desktop build is usable and, in some regions, shows promotions. A membership removes limits and adds cloud and PDF features.
Macros | Partial VBA compatibility | Macros aimed at documents that originated in Microsoft Office. Compatibility is partial. It is not a promise that a firm’s VBA port will run.
AI | Account-tied writing assistant | Current releases add an assistant for drafting and summarizing. It requires a Kingsoft account and is part of the closed product.
Multi-device | Phone and web editors | Edit the same cloud document on Android, iOS, and a browser, with the desktop apps as the full editors.
Export | PDF and long-document output | Export to PDF from the writer, which is the path a lot of official documents take out of the suite.
`),
    links: [
      { label: "Product", href: "https://www.wps.com/" },
      { label: "SCMP report on scale", href: "https://www.scmp.com/tech/tech-war/article/3293142/chinas-microsoft-office-rival-reaches-100-million-daily-users-amid-self-reliance-drive" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/WPS_Office" },
    ],
    alternatives: alts([
      ["LibreOffice", "https://www.libreoffice.org", "MPL-2.0", "The mature open office suite. Format compatibility is good and not identical, and it has no WPS cloud."],
      ["OnlyOffice", "https://www.onlyoffice.com", "AGPL-3.0", "Another Microsoft-format editor, with a community edition you can host."],
    ]),
  },
];
