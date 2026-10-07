import type { Tool } from "../types";
import { alts, feats } from "./define";

export const worldTools: Tool[] = [
  {
    id: "snowflake",
    name: "Snowflake",
    vendor: "Snowflake",
    category: "Data and analytics",
    summary: "The cloud data warehouse a large share of analytics teams SQL against.",
    reach: "A common system of record for analytics once the data has left the operational database, especially in companies that do not want to run a warehouse themselves.",
    licenseKind: "proprietary",
    licenseName: "Snowflake customer agreement",
    licenseNote: "Snowflake is a proprietary service. Storage and compute are billed by Snowflake. You can query it with ordinary SQL. You cannot run the warehouse from source.",
    gap: "ClickHouse, DuckDB, and Postgres cover analytical SQL you operate. Snowflake’s separation of storage and compute, plus data sharing between companies, is the product.",
    features: feats(`
Compute | Virtual warehouses | Compute clusters that scale independently of the data. You pay for the warehouse while it runs, not as a single box you sized in advance.
Store | Columnar storage | Tables stored columnarly in the customer’s cloud account, queried without managing files yourself.
Time | Time Travel | Query a table as of a point in the past, within the retention window, and undrop objects that were deleted.
Clone | Zero-copy clones | A copy of a table or database that does not duplicate the bytes until someone writes.
Share | Secure data sharing | Grant another Snowflake account access to a table without sending a file. This is a major reason companies pick it.
Ingest | Snowpipe and stages | Load files landing in S3, GCS, or Azure, continuously or in batches, through a stage.
Access | Roles, masking, and row policies | Role-based access, dynamic data masking, and row access policies so a column can be hidden from a role.
Tasks | Streams and tasks | Change streams on a table and scheduled tasks that transform them, a light alternative to an external orchestrator.
Code | Snowpark | Python, Java, and Scala that run next to the data rather than pulling the data out.
Market | Marketplace | Buy and sell datasets inside the platform.
Govern | Resource monitors | Caps so a warehouse cannot spend without a limit the admin set.
Open | Iceberg and external tables | Query data that stays in an open table format or an external file. Compute still happens in Snowflake.
`),
    links: [
      { label: "Product", href: "https://www.snowflake.com/" },
      { label: "Docs", href: "https://docs.snowflake.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Snowflake_Inc." },
    ],
    alternatives: alts([
      ["ClickHouse", "https://clickhouse.com", "Apache-2.0", "A fast open analytical database you operate. The company also sells a cloud."],
      ["DuckDB", "https://duckdb.org", "MIT", "An in-process analytical engine. A different scale, and open."],
      ["PostgreSQL", "https://www.postgresql.org", "PostgreSQL License", "The open operational database. It is not a warehouse, and many stacks still end up needing one."],
    ]),
  },
  {
    id: "oracle-database",
    name: "Oracle Database",
    vendor: "Oracle",
    category: "Data and analytics",
    summary: "The database underneath a huge installed base of banks, telcos, and older enterprise apps.",
    reach: "Still the system of record in many institutions that bought it in the 1990s or 2000s and never left. A lot of application vendors also require it.",
    licenseKind: "proprietary",
    licenseName: "Oracle Database license",
    licenseNote: "Oracle Database is proprietary. Options such as Real Application Clusters and Partitioning have historically been licensed separately. Turning a feature on can change the bill. Read the current option list. The free edition is still Oracle’s license, not an OSI license.",
    gap: "PostgreSQL is the open database teams pick when they can choose. It does not run PL/SQL packages or RAC-shaped clusters as a drop-in.",
    features: feats(`
SQL | SQL and PL/SQL | A full SQL implementation plus PL/SQL packages, which is where decades of business logic actually sits.
Read | Read consistency | Queries see a consistent snapshot without blocking writers the way a naive lock would. Applications depend on that behavior.
Cluster | Real Application Clusters | More than one instance opening the same database, sold as an option and used for availability on big systems.
Standby | Data Guard | A managed standby database for failover and reporting off the primary.
Partition | Partitioning | Split a large table by range, list, or hash. Historically a separately licensed option.
Tenant | Pluggable databases | Many databases inside one container instance, which is how Oracle wants consolidation done.
Backup | RMAN | Recovery Manager backups, including incremental backups, as the supported path.
Tune | Diagnostics and tuning packs | Automatic Workload Repository and related advisors. They have been extra-cost packs. Confirm before you enable them.
Secure | Encryption and roles | Transparent data encryption and a role model, with Virtual Private Database for row filtering on supported editions.
Objects | Materialized views | Stored results of a query, refreshed on a schedule, used heavily in reporting schemas.
Cloud | Autonomous Database | A managed Oracle service on Oracle’s cloud. It is the same vendor, not an open alternative.
Admin | The license is part of operations | Features and packs are easy to turn on and expensive to discover later. That commercial behavior is part of using the product.
`),
    links: [
      { label: "Product", href: "https://www.oracle.com/database/" },
      { label: "Docs", href: "https://docs.oracle.com/en/database/oracle/oracle-database/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Oracle_Database" },
    ],
    alternatives: alts([
      ["PostgreSQL", "https://www.postgresql.org", "PostgreSQL License", "The open database most new systems should start with. Migration off PL/SQL is a project."],
      ["MariaDB", "https://mariadb.org", "GPL-2.0", "An open fork of MySQL, not an Oracle compatible engine, and a common exit from Oracle’s other database products."],
    ]),
  },
  {
    id: "power-bi",
    name: "Power BI",
    vendor: "Microsoft",
    category: "Data and analytics",
    summary: "The business-intelligence tool that rides along with Microsoft 365 and Excel.",
    reach: "The report layer in a huge number of companies that already pay Microsoft. Desktop is free to install. Sharing with the company is the paid service.",
    licenseKind: "proprietary",
    licenseName: "Power BI / Microsoft Fabric license",
    licenseNote: "Power BI Desktop and the Power BI service are proprietary. The sharing, refresh, and governance features are the paid product.",
    gap: "Metabase and Apache Superset cover dashboards on a database you run. Power Query familiarity and the Microsoft account model are the gap.",
    features: feats(`
Desktop | Power BI Desktop | A free-to-install authoring app for models and reports. The file is a PBIX. The app is closed.
Query | Power Query | The same cleanup language Excel users meet, pointed at databases, files, and services.
Model | Semantic models and DAX | Relationships between tables and DAX measures, which is where the business definition of “revenue” gets locked.
Visual | Reports and visuals | Interactive pages of charts, with a marketplace of extra visuals.
Share | Workspaces and apps | Publish to the service, organize workspaces, and package an app for a department.
Secure | Row-level security | A role sees only some rows, enforced by the model rather than by hiding a filter.
Refresh | Gateways and scheduled refresh | An on-prem gateway reaches data the cloud cannot see, and the service refreshes on a schedule.
Page | Paginated reports | Pixel-perfect pages for operational printouts, descended from SQL Server Reporting Services.
Alert | Dashboards and alerts | A pinned dashboard and a data alert when a tile crosses a threshold.
Embed | Embedding | Put a report in another application, with its own licensing rules.
Deploy | Deployment pipelines | Move a report from development to production on eligible plans.
AI | Copilot features | A generative layer on tenants that buy it, inside the same Microsoft login.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/power-platform/products/power-bi" },
      { label: "Docs", href: "https://learn.microsoft.com/power-bi/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_Power_BI" },
    ],
    alternatives: alts([
      ["Metabase", "https://www.metabase.com", "AGPL-3.0", "Open dashboards and questions on a SQL database. The company sells a cloud."],
      ["Apache Superset", "https://superset.apache.org", "Apache-2.0", "A fuller open BI application you operate."],
    ]),
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    vendor: "Google",
    category: "Data and analytics",
    summary: "The web and app analytics tag sitting on a huge share of sites.",
    reach: "The default analytics snippet for public websites. GA4 is the current product. A large fraction of marketing teams still start here because it is already connected to Google Ads.",
    licenseKind: "proprietary",
    licenseName: "Google Analytics terms",
    licenseNote: "The measurement product and the data it stores are Google’s service. The gtag.js snippet is not an open analytics server.",
    gap: "Matomo, Plausible, and Umami are open collectors you can run. Google Ads integration and the existing GA4 property history are the gap.",
    features: feats(`
Collect | Events and data streams | GA4 is event-based. A web stream and an app stream land in the same property.
Report | Reports and explorations | Standard reports plus a more free-form exploration for funnels and paths.
Audience | Audiences | Define a group from events and use it in Google products.
Convert | Conversions | Mark an event as a conversion so acquisition reports organize around it.
Ads | Google Ads link | Bring ad clicks and cost into the same property, which is the integration that keeps people from leaving.
Export | BigQuery export | On eligible setups, export events to BigQuery for SQL that the GA interface will not answer.
Attribute | Attribution reports | Credit a conversion across channels using Google’s models.
Debug | DebugView | See events from one device as they arrive, which is how an implementer checks a tag.
Consent | Consent mode | Tags change behavior when a banner records a refusal, so the same property can respect a consent signal.
Admin | Retention and filters | Data retention settings, internal-traffic filters, and property administration.
API | Measurement Protocol | Send events from a server, not only from the browser tag.
Threshold | Privacy thresholds | Reports suppress small groups. That behavior surprises people coming from older analytics and it is part of GA4.
`),
    links: [
      { label: "Product", href: "https://marketingplatform.google.com/about/analytics/" },
      { label: "Help", href: "https://support.google.com/analytics" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Analytics" },
    ],
    alternatives: alts([
      ["Matomo", "https://matomo.org", "GPL-3.0", "Full-featured analytics you can host, including older session-style reports."],
      ["Plausible", "https://plausible.io", "AGPL-3.0", "A small privacy-focused analytics tool. The cloud is paid. The code is AGPL."],
      ["Umami", "https://umami.is", "MIT", "A simple open web analytics app."],
    ]),
  },
  {
    id: "okta",
    name: "Okta",
    vendor: "Okta",
    category: "Security and identity",
    summary: "The login page in front of a lot of company SaaS.",
    reach: "A major workforce identity vendor. If a company portal sends you to Okta before Slack, Google, or Salesforce, this is why every app shares one password prompt.",
    licenseKind: "proprietary",
    licenseName: "Okta subscription",
    licenseNote: "Okta is closed SaaS. Auth0, which Okta owns, is the related customer-identity product and is also proprietary.",
    gap: "Keycloak and Authentik cover single sign-on you host. The application catalog, the vendor’s uptime, and the existing integrations are the gap.",
    features: feats(`
SSO | Single sign-on | SAML and OpenID Connect into a catalog of applications, so a worker signs in once.
Directory | Universal Directory | Users and groups as the directory, or synced from HR and from Active Directory.
MFA | MFA and Okta Verify | Push, OTP, and hardware-key factors, with Okta’s own phone app.
Passwordless | FastPass | Passwordless sign-in on managed devices, using Okta’s factor rather than a password.
Lifecycle | Provisioning | Create and remove accounts in downstream apps when HR joins or leaves a person.
Workflows | Workflows | A low-code automation layer for identity events.
API | API access management | Issue and govern tokens for APIs, not only for the browser SSO portal.
Log | System log | An audit log of sign-ins and admin changes, streamable to a SIEM.
Policy | Network zones and behavior | Block or step up a sign-in based on network and on Okta’s risk signals.
Catalog | Prebuilt integrations | A large catalog of SaaS connectors is the practical reason a deployment is fast.
Customer | Auth0 | The same company’s customer-identity product, aimed at an app’s end users rather than employees. Also closed.
Admin | Admin console | Delegated admins, groups, and the policies that become political inside a company.
`),
    links: [
      { label: "Product", href: "https://www.okta.com/" },
      { label: "Documentation", href: "https://help.okta.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Okta" },
    ],
    alternatives: alts([
      ["Keycloak", "https://www.keycloak.org", "Apache-2.0", "The usual open identity provider: SAML, OIDC, and a user directory you host."],
      ["Authentik", "https://goauthentik.io", "MIT", "A younger open identity provider with a modern admin UI."],
    ]),
  },
  {
    id: "entra-id",
    name: "Microsoft Entra ID",
    vendor: "Microsoft",
    category: "Security and identity",
    summary: "The directory behind Microsoft 365, formerly Azure Active Directory.",
    reach: "If a company runs Office, it almost always runs this directory. Conditional Access on top of it is the security control a large share of enterprises actually have.",
    licenseKind: "proprietary",
    licenseName: "Microsoft Entra ID, often included with Microsoft 365",
    licenseNote: "Entra ID is closed. A basic directory comes with Microsoft 365. P1 and P2 add Conditional Access, access reviews, and privileged identity. Those tiers are licenses, not source.",
    gap: "Keycloak can do SSO. It does not become the directory Office, Intune, and Windows already trust.",
    features: feats(`
Directory | Users and groups | The account store Office, Azure, and thousands of gallery apps authenticate against.
SSO | Gallery single sign-on | Prebuilt SAML and OIDC apps, plus the seamless sign-in to Microsoft 365 itself.
Conditional | Conditional Access | Require MFA, a compliant device, or a trusted network before a specific app opens. This is the control plane.
MFA | Multifactor authentication | Microsoft Authenticator, FIDO keys, and SMS, with the free tenant getting a thinner set than P1.
Hybrid | Entra Connect | Sync from on-premises Active Directory so the same person exists in both directories.
Apps | App registrations | OAuth and OIDC apps developers register, which is how internal tools get tokens.
Guests | B2B guests | Invite a partner into a team without making them an employee.
P2 | Identity Protection and PIM | Risky-sign-in detection and Privileged Identity Management, so a standing global admin is not required. These are P2 features.
Reviews | Access reviews | Periodic review of who still has a group or an app, on higher tiers.
Lifecycle | Lifecycle workflows | Joiner and leaver tasks tied to HR, on the governance add-ons.
Logs | Sign-in and audit logs | Exportable to Azure Monitor. The retention on the free tier is short.
Join | Device join | Windows devices join Entra and pick up Intune policy. The directory and the device are one system.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/security/business/identity-access/microsoft-entra-id" },
      { label: "Docs", href: "https://learn.microsoft.com/entra/identity/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Microsoft_Entra_ID" },
    ],
    alternatives: alts([
      ["Keycloak", "https://www.keycloak.org", "Apache-2.0", "Open SSO. It will not be the native directory for Microsoft 365."],
      ["Authentik", "https://goauthentik.io", "MIT", "Open identity provider for applications you control."],
    ]),
  },
  {
    id: "1password",
    name: "1Password",
    vendor: "AgileBits",
    category: "Security and identity",
    summary: "A widely used paid password manager for families and companies.",
    reach: "One of the main commercial password managers. Common in design and engineering teams that want shared vaults and a supportable admin console.",
    licenseKind: "proprietary",
    licenseName: "1Password subscription",
    licenseNote: "The apps and the service are proprietary. 1Password publishes a security design. Publishing a white paper is not the same as an open client. The Secret Key plus the account password is their described model.",
    gap: "Bitwarden and KeePassXC are open. Bitwarden’s hosted service is the closest product shape. Vaultwarden is an open server compatible with Bitwarden clients.",
    features: feats(`
Vaults | Items | Logins, credit cards, secure notes, documents, SSH keys, and API credentials in a vault.
Fill | Autofill | Fill logins in browsers and on phones, including passkeys on current clients.
Watch | Watchtower | Flags weak, reused, and breached passwords using breach data the service checks.
Share | Shared vaults | A family or a team shares a vault without pasting passwords into chat.
Travel | Travel Mode | Temporarily remove vaults from a device when crossing a border, then restore them. A distinctive feature of this product.
Admin | Business console | Groups, provisioning, and SSO unlock so a company can require the identity provider and still keep vault encryption.
Unlock | SSO and the Secret Key | Business plans can unlock with the company IdP. The published design still involves a Secret Key so AgileBits’ servers do not hold a usable vault alone.
CLI | Command-line and developer secrets | A CLI and service accounts for pipelines that need a secret at runtime.
Passkey | Passkeys | Store and use passkeys beside passwords.
Share | Item sharing | Send an item to someone, including outside the team where the product allows it.
Platform | Apps on major systems | Windows, macOS, Linux, iOS, Android, and browser extensions from the vendor.
Design | Published security design | The white paper describes the cryptography. You can read it. You cannot build the official client from it.
`),
    links: [
      { label: "Product", href: "https://1password.com/" },
      { label: "Support", href: "https://support.1password.com/" },
      { label: "Security design", href: "https://1password.com/security" },
    ],
    alternatives: alts([
      ["Bitwarden", "https://bitwarden.com", "GPL-3.0 for clients", "Open clients and an open server. The company also sells hosting."],
      ["KeePassXC", "https://keepassxc.org", "GPL-2.0", "A local password database. No cloud service unless you sync the file yourself."],
      ["Vaultwarden", "https://github.com/dani-garcia/vaultwarden", "AGPL-3.0", "A lightweight server compatible with Bitwarden clients."],
    ]),
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    category: "Artificial intelligence",
    summary: "The chat product that made hosted large language models a consumer habit.",
    reach: "A default place people go to draft, code, and ask. Teams and schools buy the business plans. The API is a separate product used by other software.",
    licenseKind: "proprietary",
    licenseName: "OpenAI terms",
    licenseNote: "ChatGPT and the flagship models behind it are closed. OpenAI publishes some open-weight models under their own licenses. That does not make the ChatGPT service, or GPT-class flagship models, open source.",
    gap: "Open WebUI plus a local or hosted open-weight model covers a private chat. It does not reproduce the flagship model quality, browsing integrations, or the consumer app.",
    features: feats(`
Chat | Conversations | A threaded chat with a model picker that changes by plan.
Files | File analysis | Upload a spreadsheet or a PDF and ask questions, including a code sandbox that can run analysis on the file.
Images | Image understanding and generation | Ask about an image, and generate images in the same conversation on plans that include it.
Voice | Voice conversations | Talk to the app and hear a spoken reply on supported clients.
Memory | Memory | The product can remember facts about the user across chats, and the user can turn that off.
GPTs | Custom GPTs | A packaged prompt, knowledge files, and actions, shared as a custom GPT.
Projects | Projects | A workspace that keeps instructions and files together for a recurring effort.
Search | Web search | Answers that browse current pages, with citations, when the tool is enabled.
Canvas | Canvas | A side panel for writing or code that the model edits with you, instead of only a chat transcript.
Work | Team and enterprise workspaces | An admin console, shared GPTs, and data controls that differ from the consumer default.
Connect | Connectors | On eligible plans, connect the chat to outside tools. The connector catalog is OpenAI’s.
API | The API is separate | Developers call models through the OpenAI API, with its own pricing and logs. The chat app is not the whole company.
`),
    links: [
      { label: "Product", href: "https://chatgpt.com/" },
      { label: "Help", href: "https://help.openai.com/" },
      { label: "API", href: "https://platform.openai.com/docs" },
    ],
    alternatives: alts([
      ["LibreChat", "https://github.com/LibreChat-AI/LibreChat", "MIT", "A self-hosted chat and agent interface. Bring your own model; it does not reproduce the hosted provider’s models or services."],
      ["Ollama", "https://ollama.com", "MIT", "Run open-weight models locally. Quality and tools differ from the hosted flagship."],
    ]),
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    category: "Artificial intelligence",
    summary: "Anthropic’s chat product, used heavily for writing and for coding.",
    reach: "A major alternative to ChatGPT for people and companies, with a strong following among developers because of Artifacts and the Claude Code terminal product.",
    licenseKind: "proprietary",
    licenseName: "Anthropic terms",
    licenseNote: "Claude.ai and the Claude models are closed. The API is a paid service. Anthropic does not publish the flagship weights as open source.",
    gap: "The same open chat interfaces and local models apply. Claude’s particular model and the Artifacts workspace are the product being paid for.",
    features: feats(`
Chat | Conversations | A chat with model choices that depend on the plan, including larger-context models for long documents.
Projects | Projects | A project holds instructions and knowledge files so a recurring workspace does not start from zero.
Artifacts | Artifacts | A live panel beside the chat for documents, diagrams, and small apps the model is building, separate from the transcript.
Files | File upload | PDFs, text, and images as context, within the plan’s limits.
Search | Web search | Browse for current information when that tool is on.
Style | Custom styles and instructions | Standing instructions for tone and for how the model should behave in an account.
Code | Claude Code | A terminal product, under the same vendor, that edits a local repository with the model. It is separate from the website and also closed.
Team | Team and enterprise plans | Shared workspaces, admin controls, and different data terms from the consumer default.
API | API | The same model families offered as an API with its own console, keys, and pricing.
Context | Long context | A selling point of the product is a large context window for big files. The exact limit depends on the model and plan.
Voice | Text-first | The core product is text, files, and artifacts. Treat newer voice or computer-use features as plan-specific rather than as the base product.
Policy | Usage policies | Acceptable-use rules are part of the contract. They are not a license to the model.
`),
    links: [
      { label: "Product", href: "https://claude.ai/" },
      { label: "Docs", href: "https://docs.anthropic.com/" },
      { label: "Anthropic", href: "https://www.anthropic.com/" },
    ],
    alternatives: alts([
      ["LibreChat", "https://github.com/LibreChat-AI/LibreChat", "MIT", "A self-hosted chat and agent interface. Bring your own model; it does not reproduce the hosted provider’s models or services."],
      ["Ollama", "https://ollama.com", "MIT", "Local open-weight models. Not a Claude-compatible service."],
    ]),
  },
  {
    id: "midjourney",
    name: "Midjourney",
    vendor: "Midjourney",
    category: "Artificial intelligence",
    summary: "The image generator a lot of commercial illustration now starts in.",
    reach: "One of the few image models non-designers and studios both name. It began in Discord and now has its own web app.",
    licenseKind: "proprietary",
    licenseName: "Midjourney terms",
    licenseNote: "The model and the service are closed. Plan terms govern commercial use. They are not an open-source license, and the weights are not published for you to run.",
    gap: "ComfyUI with open image models covers local generation. Taste, the productized workflow, and the commercial terms of a hosted model are the gap.",
    features: feats(`
Generate | Text to image | A prompt produces a set of images. The model is hosted. You do not download the weights.
Vary | Variations and upscale | Make siblings of an image you like, and upscale the one you keep.
Reference | Style and character references | Point at an image for style or for a character, so a series stays consistent. The product has exposed this as reference images rather than only as text.
Edit | Inpainting | Change a region of an image instead of rerolling the whole frame.
Web | Web app and Discord | The original interface was a Discord bot. The web app is now a first-class client. Both talk to the same closed service.
Stealth | Stealth mode | Higher plans can keep prompts out of the public gallery.
Gallery | Community gallery | A public feed of other people’s generations, which is also how the product markets itself.
Personal | Personalization | A profile that steers the model toward images you have ranked.
Video | Video on eligible plans | Image generation is the core. Video generation shows up when the current plan includes it.
Terms | Commercial use by plan | Whether you may sell an image depends on the subscription terms, not on an open license.
Editor | Canvas-style edits | Newer editing surfaces sit on top of generation so a picture can be extended or retouched in the product.
Account | Subscription and GPU time | Fast generations are metered. The plan is the product.
`),
    links: [
      { label: "Product", href: "https://www.midjourney.com/" },
      { label: "Docs", href: "https://docs.midjourney.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Midjourney" },
    ],
    alternatives: alts([
      ["ComfyUI", "https://github.com/comfyanonymous/ComfyUI", "GPL-3.0", "A node-based open interface for image models you have the right to run."],
      ["Stable Diffusion weights, where the license allows", "https://huggingface.co/stabilityai", "Varies by checkpoint", "Stability removed the old GitHub code repo in 2025. Model cards on Hugging Face say which checkpoints you may run. Many popular checkpoints are not open."],
    ]),
  },
  {
    id: "google-maps",
    name: "Google Maps",
    vendor: "Google",
    category: "Maps and media",
    summary: "The map on most phones, and the map embedded in most websites.",
    reach: "The default navigation app for a huge share of drivers, and the Maps Platform API behind store locators and delivery estimates.",
    licenseKind: "proprietary",
    licenseName: "Google Maps terms",
    licenseNote: "The map data, traffic, imagery, and the Maps Platform APIs are proprietary. You pay for the platform after a free tier. You cannot take the data and run your own Google Maps.",
    gap: "OpenStreetMap plus Organic Maps or OsmAnd covers navigation with open data. Street View coverage, live traffic, and the Places API businesses already pay for are the gap.",
    features: feats(`
Map | Map, satellite, and Street View | A road map, aerial imagery, and ground-level Street View photography. The imagery is Google’s.
Route | Directions | Driving, transit, walking, and cycling directions, with live traffic on driving routes.
Places | Place pages | Hours, photos, reviews, and a phone number for a business, which is also a local-search product.
Offline | Offline maps | Download a region on the phone for navigation without a connection.
Save | Saved lists | Save places into lists tied to a Google account.
Live | Live View | An augmented-reality walking mode in supported cities.
Custom | My Maps | A simple custom map with pins, separate from the developer API.
Business | Business profiles | A merchant claims a listing and answers reviews. That profile is a Google product.
API | Maps, Routes, and Places APIs | The paid developer platform websites use to embed a map, calculate a route, or autocomplete an address.
Indoor | Indoor maps | Floor plans for some venues, collected by Google.
Timeline | Location history | A history tied to the Google account, with controls Google has revised over time. Treat the current privacy settings as the source of truth.
Contribute | User photos and edits | People add photos and suggest edits. The result still lives in Google’s map.
`),
    links: [
      { label: "Product", href: "https://maps.google.com/" },
      { label: "Platform", href: "https://developers.google.com/maps" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Google_Maps" },
    ],
    alternatives: alts([
      ["Organic Maps", "https://organicmaps.app", "Apache-2.0", "Offline maps built on OpenStreetMap data, with no account."],
      ["OpenStreetMap", "https://www.openstreetmap.org", "ODbL", "The open map database. It is data and an editor, not a turn-by-turn product by itself."],
    ]),
  },
  {
    id: "youtube",
    name: "YouTube",
    vendor: "Google",
    category: "Maps and media",
    summary: "The video host the web points at when it points at a video.",
    reach: "The largest video site, a major music player, and a default classroom. Creators and advertisers treat it as infrastructure.",
    licenseKind: "proprietary",
    licenseName: "YouTube terms",
    licenseNote: "The player, the recommendations, the catalog, and Content ID are Google’s. Uploading a video does not make the platform open source.",
    gap: "PeerTube is an open, federated video host. It does not contain YouTube’s catalog, ads market, or recommendation graph.",
    features: feats(`
Watch | Hosting and playback | Upload a video and get a page, an embed, and adaptive playback. The player is YouTube’s.
Recommend | Subscriptions and recommendations | A home feed and a suggested column. The ranking is the product as much as the player.
Short | Shorts | A short-form feed inside the same app, competing with TikTok.
Live | Live streaming | Go live, chat, and keep the recording as a video.
Studio | YouTube Studio | Analytics, copyright claims, and audience data for the channel owner.
Content | Content ID | A rights system that scans uploads against a reference catalog and lets a rights holder claim or block. It is not a feature an open host can copy without the catalog.
Money | Premium and monetization | An ad-free subscription, and a partner program that pays some creators from ads.
Community | Comments, memberships, and posts | Comments, channel memberships, and community posts.
Caption | Captions and translations | Auto-captions and creator captions, plus translated tracks.
Music | Music and movies | A music app and rented movies live in the same account, as sibling storefronts.
Kids | YouTube Kids | A separate app with a different content set, still the same company.
Embed | Embeds | The iframe every news site uses. The embed terms are YouTube’s.
`),
    links: [
      { label: "Product", href: "https://www.youtube.com/" },
      { label: "Help", href: "https://support.google.com/youtube" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/YouTube" },
    ],
    alternatives: alts([
      ["PeerTube", "https://joinpeertube.org", "AGPL-3.0", "Federated video hosting. You publish to an instance. You do not get YouTube’s audience."],
    ]),
  },
  {
    id: "spotify",
    name: "Spotify",
    vendor: "Spotify",
    category: "Maps and media",
    summary: "The music streaming service that, in many countries, is what “play a song” means.",
    reach: "The leading paid music subscription in a large share of markets, and a major podcast host. The catalog is licensed, not owned by the listener.",
    licenseKind: "proprietary",
    licenseName: "Spotify terms",
    licenseNote: "The apps, the recommendation systems, and the catalog licenses are proprietary. Downloaded songs are not files you may move to another player.",
    gap: "Navidrome and Funkwhale stream a library you own. They do not include Spotify’s licensed catalog or its recommendation graphs.",
    features: feats(`
Play | Licensed catalog | Stream a large commercial catalog the service has licensed. The license is the product.
Lists | Playlists | Personal, collaborative, and editorial playlists, which is how most listening is organized.
Discover | Personalized mixes | Discover Weekly, Release Radar, and similar programmed playlists built from listening history.
DJ | AI DJ | A hosted voice that sequences music and talks over the transitions, where the app shows it.
Offline | Downloads | Premium accounts can download for offline play inside the app. The files are not a collection you control.
Pods | Podcasts and audiobooks | Spoken-word catalogs in the same app, with exclusive deals that change over time.
Connect | Spotify Connect | Play from the phone to a speaker that speaks Connect, while the phone stays the remote.
Free | Ad-supported tier | A limited free tier on phones and a fuller one on desktop in many countries, paid for by ads.
Social | Blend and sharing | A shared playlist between two people, and sharing to other apps.
Artists | Spotify for Artists | A separate closed dashboard where artists see plays and submit tracks. It is part of the same company.
Plans | Individual, family, and student | The commercial packaging. Audio quality and downloads depend on the plan.
Apps | Official clients only | The supported experience is Spotify’s apps. Third-party clients that pretend to be the app violate the service terms and are not listed here as alternatives.
`),
    links: [
      { label: "Product", href: "https://www.spotify.com/" },
      { label: "Support", href: "https://support.spotify.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Spotify" },
    ],
    alternatives: alts([
      ["Navidrome", "https://www.navidrome.org", "GPL-3.0", "A self-hosted streamer for music files you already have."],
      ["Funkwhale", "https://funkwhale.audio", "AGPL-3.0", "A federated music server. The catalog is whatever people upload, not the major-label catalog."],
    ]),
  },
  {
    id: "instagram",
    name: "Instagram",
    vendor: "Meta",
    category: "Maps and media",
    summary: "The photo and short-video network that is also a storefront.",
    reach: "A default social app for personal photos, creators, and small-business sales. Reels is its short-video feed. WhatsApp and Facebook are the sibling networks.",
    licenseKind: "proprietary",
    licenseName: "Meta terms",
    licenseNote: "Instagram is closed. There is no open client or open server. The graph, the ads, and the shop are Meta’s.",
    gap: "Pixelfed is federated photo sharing. It does not include Instagram’s audience, Reels distribution, or shopping.",
    features: feats(`
Feed | Feed, Stories, and Reels | A follower feed, 24-hour stories, and a short-video Reels feed that is now central to distribution.
Message | Direct messages | Private messages, including group threads and broadcast channels.
Explore | Explore | A recommendation surface of posts you do not follow.
Close | Close Friends | A smaller list for stories that should not go to every follower.
Shop | Shopping | Product tags and a shop for accounts that qualify, tied to Meta’s commerce rules.
Pro | Professional accounts | Insights, ads, and contact buttons for businesses and creators.
Edit | Editing tools | Filters, video edits, and templates inside the composer.
Ads | Ads manager | The same company’s ad system, shared in practice with Facebook advertising.
Collab | Collaborative posts | Two accounts can share one post so it appears on both profiles.
Safe | Account controls | Block, restrict, hidden words, and supervision tools for teen accounts. The details change with regulation.
Threads | Threads | A text app from the same company, linked to the Instagram account. It is another closed network.
Web | Partial web app | A usable website and a phone app. The full composer and some features stay on the phone.
`),
    links: [
      { label: "Product", href: "https://www.instagram.com/" },
      { label: "Help", href: "https://help.instagram.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Instagram" },
    ],
    alternatives: alts([
      ["Pixelfed", "https://pixelfed.org", "AGPL-3.0", "Federated photo sharing. The audience is whoever is on the fediverse, not Instagram’s graph."],
    ]),
  },
  {
    id: "tiktok",
    name: "TikTok",
    vendor: "ByteDance",
    category: "Maps and media",
    summary: "The short-video app whose For You feed is the product.",
    reach: "One of the most used mobile apps in the world, and a discovery engine for music, news, and shops. Douyin is the sibling product inside China.",
    licenseKind: "proprietary",
    licenseName: "TikTok terms",
    licenseNote: "The app, the recommendation system, and the sound catalog are proprietary. CapCut, the sibling editor, is also ByteDance’s and also closed.",
    gap: "PeerTube can host short video. It does not reproduce the For You ranking or the commercial sound library.",
    features: feats(`
Feed | For You feed | A full-screen feed ranked for the viewer, which is the app more than any following graph.
Create | Record and edit | Shoot, trim, and add text and effects in the phone, with a deep link to sounds.
Sound | Commercial sounds | A licensed sound library that videos reuse. The sound is a distribution channel for songs.
Duet | Duets and stitches | Respond beside someone else’s video or clip a piece of it, which is how formats spread.
Live | Live | Live video and gifting in regions where TikTok has turned it on.
Inbox | Direct messages | Private messages, with the limits TikTok places on who can message a stranger.
Shop | Shop | In-app shopping in countries where the shop has launched.
Creator | Creator tools | Analytics and monetization programs that TikTok revises by region. The names of the funds change.
Ads | Ads manager | A commercial ad system aimed at the same feed.
Effects | Effects | Face and world effects in the camera, a signature of the creator tools.
Desktop | Web and desktop viewing | Watching works on the web. Creation is still centered on the phone.
Sibling | CapCut | ByteDance’s editor, widely used even for video that is not posted to TikTok. It is a separate closed app.
`),
    links: [
      { label: "Product", href: "https://www.tiktok.com/" },
      { label: "Support", href: "https://support.tiktok.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/TikTok" },
    ],
    alternatives: alts([
      ["PeerTube", "https://joinpeertube.org", "AGPL-3.0", "Open video hosting. Distribution is federation, not a For You feed."],
    ]),
  },
  {
    id: "bloomberg-terminal",
    name: "Bloomberg Terminal",
    vendor: "Bloomberg",
    category: "Maps and media",
    summary: "The data, news, and chat desktop institutional finance still sits in front of.",
    reach: "A standard seat on trading floors and in asset managers. People pay a large per-seat subscription because the data and the chat network are both there.",
    licenseKind: "proprietary",
    licenseName: "Bloomberg subscription",
    licenseNote: "The Terminal is proprietary and priced for firms. The data licenses, the news, and Instant Bloomberg chat are the product. There is no open feed that is the same bundle.",
    gap: "OpenBB is an open research terminal for market data you have access to. It does not include Bloomberg’s consolidated real-time licenses or its chat network.",
    features: feats(`
Data | Cross-asset market data | Prices, histories, and reference data across asset classes, under Bloomberg’s licenses, in one keyboard-driven interface.
News | News and research | A newsroom and third-party research delivered in the same terminal as the prices.
Chat | Instant Bloomberg | A chat network of other terminal users. The chat is a reason seats survive even when a dataset exists elsewhere.
Excel | Excel add-in | Formulas that pull terminal data into a spreadsheet, which is how a lot of models on a desk actually work.
Screen | Launchpad | Custom multi-panel screens a trader lays out and keeps.
Function | Function codes | The interface is organized as functions you type. Learning those codes is part of the job. This index does not try to teach them.
Risk | Portfolio and risk screens | Portfolio analytics built into the terminal, rather than only a price page.
Filing | Filings and company data | Company financials and filings next to the market data.
Login | Dedicated login | Access is a firm subscription with its own authentication hardware or biometric check, not a consumer password.
Message | Messaging compliance | The chat exists in a regulated industry, so retention and supervision are part of why firms standardize on it.
API | Enterprise data products | Bulk data products for firms that do not want only the interactive terminal. They are separate contracts.
Price | Per-seat commercial product | Sold as an expensive seat, not as a download. The price changes. The public fact is that it is priced for institutions.
`),
    links: [
      { label: "Product", href: "https://www.bloomberg.com/professional/products/bloomberg-terminal/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Bloomberg_Terminal" },
      { label: "Bloomberg Professional", href: "https://www.bloomberg.com/professional/" },
    ],
    alternatives: alts([
      ["OpenBB", "https://github.com/OpenBB-finance/OpenBB", "AGPL-3.0", "An open investment-research app. You bring data sources. It is not a Bloomberg data license."],
    ]),
  },
  {
    id: "terraform",
    name: "Terraform",
    vendor: "IBM / HashiCorp",
    category: "Source-available",
    summary: "The infrastructure-as-code tool a huge number of teams still apply with. The license is no longer open source.",
    reach: "The usual way cloud infrastructure is described in code. In August 2023 HashiCorp moved it from the Mozilla Public License to the Business Source License. IBM now owns HashiCorp.",
    licenseKind: "source-available",
    licenseName: "Business Source License 1.1",
    licenseNote: "You can read the source. OSI does not recognize the Business Source License as open source. The license restricts competitive use. OpenTofu is the fork that stayed under an open license.",
    gap: "OpenTofu is the drop-in open fork for the language and the providers. HCP Terraform, the commercial remote runner and policy product, is a separate closed service.",
    features: feats(`
Language | HCL | A configuration language for resources, variables, outputs, and modules.
Plan | Plan and apply | A preview of what will change, then an apply that calls provider APIs. That loop is the product.
State | State file | A state snapshot of what exists, stored locally or in a remote backend, with locking so two applies do not collide.
Providers | Providers | Plugins for AWS, Azure, Google Cloud, Kubernetes, and thousands of other APIs. Many providers are separately licensed by their authors.
Modules | Modules | Reusable packages of configuration, published to a registry.
Workspace | Workspaces | Multiple named states from one configuration, used for environments.
Import | Import | Bring an existing resource under Terraform’s state without recreating it.
Test | Terraform test | A test framework for configurations, added in recent versions.
Cloud | HCP Terraform | The commercial hosted runner: remote state, VCS-driven applies, and policy. The CLI license change and this cloud are related but they are not the same SKU.
Policy | Policy as code | Sentinel policy on the commercial cloud. It is not part of the open fork’s promise.
Fork | The license change | Versions after the change are BSL. Older MPL-licensed releases stay under the license they shipped with. Check the tag you actually run.
IBM | Licensor | After the acquisition, the license names IBM as the successor to HashiCorp. The practical user-facing brand is still Terraform.
`),
    links: [
      { label: "Product", href: "https://developer.hashicorp.com/terraform" },
      { label: "Docs", href: "https://developer.hashicorp.com/terraform/docs" },
      { label: "License", href: "https://github.com/hashicorp/terraform/blob/main/LICENSE" },
    ],
    alternatives: alts([
      ["OpenTofu", "https://opentofu.org", "MPL-2.0", "The community fork that stayed on an OSI-approved license and tracks the Terraform language."],
    ]),
  },
  {
    id: "mongodb",
    name: "MongoDB Server",
    vendor: "MongoDB",
    category: "Source-available",
    summary: "The document database a generation of web apps was built on. The server license is not OSI open source.",
    reach: "Still a default choice when a team wants JSON documents and a managed cloud. Atlas is the hosted service. The server itself has been under the Server Side Public License since 2018.",
    licenseKind: "source-available",
    licenseName: "Server Side Public License",
    licenseNote: "OSI does not count the SSPL as open source. You can read and run the server. Offering it as a service triggers broad source obligations. Drivers are under their own permissive licenses. Atlas, the commercial cloud, is a separate proprietary service.",
    gap: "FerretDB speaks a Mongo-compatible protocol on top of Postgres. Postgres itself is the open database many of those apps could have used. Neither is a promise that every operator and aggregation behaves identically.",
    features: feats(`
Model | Documents and BSON | JSON-like documents in collections, stored as BSON, with a flexible schema.
Query | Query language and aggregation | Filters, updates, and an aggregation pipeline for multi-stage transformations.
Index | Indexes | Compound, multikey, text, geospatial, and TTL indexes.
Replica | Replica sets | A primary and secondaries for failover and read scaling.
Shard | Sharded clusters | Horizontal partitioning when one replica set is not enough.
Stream | Change streams | A feed of changes an application can tail.
Transaction | Multi-document transactions | Transactions across documents, which earlier versions did not have.
Auth | Community security | Authentication, authorization, and TLS in the server you can download. Auditing and some encryption features sit in the commercial build.
Atlas | Atlas is separate | The managed service adds backups, a UI, and Atlas Search. That cloud is proprietary even relative to the SSPL server.
Compass | Compass | A graphical client for browsing a deployment.
Series | Time series collections | A collection type aimed at measurements, with its own storage behavior.
Drivers | Drivers are not the server | Official drivers are permissively licensed. That does not relicense the server they talk to.
`),
    links: [
      { label: "Product", href: "https://www.mongodb.com/" },
      { label: "SSPL", href: "https://www.mongodb.com/licensing/server-side-public-license" },
      { label: "Docs", href: "https://www.mongodb.com/docs/" },
    ],
    alternatives: alts([
      ["PostgreSQL", "https://www.postgresql.org", "PostgreSQL License", "A relational database with strong JSON support. The usual open replacement when the team can change the app."],
      ["FerretDB", "https://github.com/FerretDB/FerretDB", "Apache-2.0", "A Mongo-compatible protocol translated onto Postgres. Docs live at docs.ferretdb.io."],
    ]),
  },
  {
    id: "sentry",
    name: "Sentry",
    vendor: "Sentry",
    category: "Source-available",
    summary: "The error tracker a large share of application teams install. The server is not OSI open source.",
    reach: "The default exception reporter in many web and mobile stacks. Sentry has written that compliance teams at more than 10,000 organizations reviewed the Fair Source license, and that the hosted product passed 100,000 cloud customers.",
    licenseKind: "source-available",
    licenseName: "Functional Source License 1.1 for the server; Apache-2.0 for SDKs",
    licenseNote: "SDKs are Apache-2.0. The Sentry server is FSL, which Sentry states is not an OSI open-source license. You may run it, but not offer a competing commercial Sentry. Each version converts to Apache-2.0 after two years.",
    gap: "GlitchTip aims at Sentry-compatible error tracking and is open source. Feature parity with performance, replay, and the hosted product is the gap.",
    features: feats(`
Errors | Exception capture | An SDK sends an exception with a stack trace, a release, and a user, and the server groups it into an issue.
Group | Issue grouping | Repeated events collapse into one issue so an inbox is not one row per user.
Release | Releases and suspect commits | Tie an error to a release and suggest the commit that introduced it.
Trace | Performance tracing | Transactions and spans for slow requests, sold as part of the product and not only as error logs.
Replay | Session replay | A playback of a user session on paid plans, with privacy masking. This is one of the features that keeps teams on the hosted product.
Cron | Cron monitoring | A check-in from a scheduled job so a job that never ran still pages someone.
Alert | Alerts | Rules that notify Slack, email, or a paging tool when an issue spikes.
Maps | Source maps | Unminify a production stack trace using source maps uploaded at build time.
SDK | Open SDKs | First-party SDKs for browsers, mobile, and servers under Apache-2.0. The license split is the point of this entry.
Host | Self-hosting under FSL | You can run the server. You cannot turn that into a competing hosted Sentry during the FSL window.
Quota | Quotas and sampling | Ingest limits and sampling so a noisy app does not exhaust the plan.
Integrate | GitHub, Slack, and Jira | Issue creation and notification in the tools a team already has.
`),
    links: [
      { label: "Product", href: "https://sentry.io/" },
      { label: "Licensing", href: "https://open.sentry.io/licensing/" },
      { label: "FSL announcement", href: "https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/" },
    ],
    alternatives: alts([
      ["GlitchTip", "https://glitchtip.com", "MIT", "Open error tracking compatible with Sentry SDKs for a useful subset of features."],
    ]),
  },
];
