import type { Tool } from "../types";
import { alts, feats } from "./define";

export const businessTools: Tool[] = [
  {
    id: "salesforce",
    name: "Salesforce",
    vendor: "Salesforce",
    category: "Business systems",
    summary: "The CRM a large share of enterprise sales and service teams run their day in.",
    reach: "The default system of record for customers in many large companies, especially in the US and Europe. “It’s in Salesforce” means the opportunity, the case, or the account.",
    licenseKind: "proprietary",
    licenseName: "Salesforce subscription",
    licenseNote: "Salesforce is closed SaaS. Apex and Lightning let customers write code on the platform. That code does not run anywhere else, and the platform is not open source.",
    gap: "Odoo, SuiteCRM, and EspoCRM cover CRM. The gap is the installed base of Apex, Flows, and AppExchange packages a company has already paid to build.",
    features: feats(`
Sales | Leads, accounts, contacts, and opportunities | The core objects: a lead becomes an account and contact, and an opportunity moves through stages with an amount and a close date.
Service | Cases and knowledge | Service Cloud turns the same database into a support desk, with a knowledge base agents search while they answer.
Automate | Flow | A graphical automation builder for updates, screens, and callouts. A lot of customer logic now lives in Flows rather than in code.
Code | Apex and Lightning Web Components | A Java-like language and a web component model that run only on Salesforce.
Data | Custom objects | Add your own tables and relationships. The CRM becomes a general business database, which is also how companies get stuck.
Report | Reports and dashboards | Filters over objects, summarized into a dashboard a manager refreshes.
Secure | Profiles, permission sets, and sharing | Field-level security, profiles, permission sets, and sharing rules. Admin work is mostly this.
Store | AppExchange | Install a vendor’s package into the org. Those packages are part of the lock-in.
Portal | Experience Cloud | Customer and partner portals built on the same data.
AI | Einstein and Agentforce | Predictive and generative features sold as add-ons, including agents that sit on CRM records. They are metered Salesforce products.
Release | Sandboxes | Copies of the org for development and testing. How many you get depends on the edition.
Mobile | Salesforce mobile app | The same objects on a phone, with layouts the admin configured.
`),
    links: [
      { label: "Product", href: "https://www.salesforce.com/" },
      { label: "Help", href: "https://help.salesforce.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Salesforce" },
    ],
    alternatives: alts([
      ["Odoo", "https://www.odoo.com", "LGPL-3.0 for Community", "An open CRM and ERP. The company sells enterprise modules on top."],
      ["SuiteCRM", "https://suitecrm.com", "AGPL-3.0", "A CRM descended from the open SugarCRM era."],
      ["EspoCRM", "https://www.espocrm.com", "AGPL-3.0", "A lighter open CRM you can host."],
    ]),
  },
  {
    id: "sap-s4hana",
    name: "SAP S/4HANA",
    vendor: "SAP",
    category: "Business systems",
    summary: "The ERP generation a large share of the world’s biggest companies are moving onto.",
    reach: "Finance, supply chain, and manufacturing at large enterprises. If a global manufacturer has one system of record, it is often SAP, and the current product name is S/4HANA.",
    licenseKind: "proprietary",
    licenseName: "SAP commercial license",
    licenseNote: "S/4HANA is proprietary. Customers buy named users and modules. Customizing it means ABAP or a side-by-side extension, not a fork.",
    gap: "ERPNext and Odoo cover smaller companies well. They do not carry a multinational manufacturer’s existing SAP configuration, auditors’ expectations, or the partner ecosystem.",
    features: feats(`
Finance | General ledger and controlling | Journal entries, accounts payable and receivable, asset accounting, and cost centers. This is the book of record.
Buy | Procurement | Purchase requisitions, purchase orders, and goods receipts tied to inventory.
Sell | Sales and distribution | Customer orders, pricing, delivery, and billing, from the quote through the invoice, in the same ledger as finance.
Make | Production planning | Plan and confirm manufacturing orders against bills of material and routings.
Store | Inventory and warehouse | Stock by plant and storage location, with warehouse processes in the modules that cover them.
Maintain | Plant maintenance | Work orders for equipment, which is its own module because factories run on it.
UI | Fiori launchpad | Role-based web apps on top of the same system, which is the current face of transactions that used to be SAP GUI screens.
Data | HANA underneath | The suite runs on SAP’s in-memory database. That database is part of the product, not a swappable open store.
Report | Embedded analytics | Operational reports on the same data, so a clerk and a controller are not exporting to a spreadsheet for every question.
Extend | In-app and side-by-side extension | Key-user changes inside the system, and larger extensions on SAP Business Technology Platform.
Migrate | Conversion from ECC | A defined, expensive path from the older ECC suite. The migration itself is why the lock-in continues into this generation.
Control | Authorizations | Authorization objects decide who can post, approve, or see a company code. Segregation of duties is an audit topic, not a theme.
`),
    links: [
      { label: "Product", href: "https://www.sap.com/products/erp/s4hana.html" },
      { label: "Help", href: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/SAP_S/4HANA" },
    ],
    alternatives: alts([
      ["ERPNext", "https://erpnext.com", "GPL-3.0", "An open ERP that smaller and mid-sized companies actually run."],
      ["Odoo", "https://www.odoo.com", "LGPL-3.0 for Community", "Modular ERP and CRM. Community is open. Many convenience modules are not."],
    ]),
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    vendor: "ServiceNow",
    category: "Business systems",
    summary: "The system large IT departments use to take incidents, changes, and requests.",
    reach: "The default IT service-management platform in large enterprises. Employees meet it as the portal where a laptop request or an outage ticket goes.",
    licenseKind: "proprietary",
    licenseName: "ServiceNow subscription",
    licenseNote: "ServiceNow is closed SaaS on a proprietary platform. Customers configure tables and flows. They do not get the server source.",
    gap: "GLPI and iTop cover ticketing you can host. The configuration-management database, the catalog, and the surrounding HR and security modules are the gap.",
    features: feats(`
ITSM | Incident, problem, and change | The three classic processes: something broke, something keeps breaking, and something is about to be changed.
CMDB | Configuration management database | A map of servers, applications, and owners that incidents can point at. Discovery products fill it.
Catalog | Service catalog | A storefront of requests, with approvals and tasks, which is the part employees actually see.
Knowledge | Knowledge base | Articles agents and employees search before opening a ticket.
Automate | Flow Designer | Integration and automation without writing a script for every step, plus business rules when a script is required.
Platform | Tables, ACLs, and UI Builder | The platform underneath: data tables, access control lists, and pages. Customers build internal apps on it.
Virtual | Virtual agent | A chatbot in front of the catalog, sold as part of the suite.
Analytics | Performance Analytics | Targets and trends on top of the operational tables.
Integrate | Integration Hub | Spokes that talk to other enterprise systems. They are licensed connectors.
Expand | HR, customer service, and security operations | The same platform sold into HR cases, customer cases, and security incidents. Each is another product on the bill.
Discover | MID Servers | An on-prem agent that reaches networks ServiceNow’s cloud cannot see directly, used by discovery.
Admin | Update sets and store apps | Move configuration between instances, and install ServiceNow Store apps.
`),
    links: [
      { label: "Product", href: "https://www.servicenow.com/" },
      { label: "Docs", href: "https://www.servicenow.com/docs/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/ServiceNow" },
    ],
    alternatives: alts([
      ["GLPI", "https://www.glpi-project.org", "GPL-3.0", "Asset inventory and a service desk you can host."],
      ["iTop", "https://www.itophub.io", "AGPL-3.0", "An open CMDB and ticketing tool aimed at ITIL-shaped teams."],
    ]),
  },
  {
    id: "shopify",
    name: "Shopify",
    vendor: "Shopify",
    category: "Business systems",
    summary: "The hosted store a large share of independent online retail runs on.",
    reach: "The default answer when a small or mid-sized brand wants a store without operating a server. Checkout, payments, and the theme are the product.",
    licenseKind: "proprietary",
    licenseName: "Shopify subscription",
    licenseNote: "The Shopify platform, admin, and checkout are proprietary. Hydrogen, the headless storefront framework, is MIT and still needs Shopify underneath. Liquid themes are not a self-hosted store.",
    gap: "Saleor, Medusa, and WooCommerce can run a store you host. Shopify’s checkout conversion work, app store, and Shop Pay are the gap.",
    features: feats(`
Catalog | Products, variants, and inventory | Products with options, SKUs, and stock across locations.
Checkout | Hosted checkout | The checkout is Shopify’s page, not a template the theme fully controls. That is deliberate and it is the part of the business they keep.
Pay | Shopify Payments and Shop Pay | A first-party processor in supported countries, and a accelerated checkout buyers can reuse across stores.
Orders | Orders, refunds, and fulfillment | Capture payment, refund, and hand a parcel to a carrier from the admin.
Themes | Themes and Liquid | A theme language for the storefront. Online Store 2.0 sections are how non-developers edit a homepage.
Apps | App store | Reviews, subscriptions, and shipping apps install into the admin. Many stores are a pile of apps.
Markets | International selling | Currencies, domains, and duties handled as markets rather than as a second store.
POS | Point of Sale | An in-person register that shares catalog and inventory with the online store.
Discount | Discounts and gift cards | Codes, automatic discounts, and gift cards managed in the admin.
Analytics | Reports | Sales, conversion, and acquisition reports in the admin.
Content | Email and abandoned checkout | Basic lifecycle messages. Many brands replace them with a dedicated email tool.
Headless | Hydrogen | An open-source React storefront kit. It is MIT. The cart and checkout it calls are still Shopify.
`),
    links: [
      { label: "Product", href: "https://www.shopify.com/" },
      { label: "Help", href: "https://help.shopify.com/" },
      { label: "Hydrogen source", href: "https://github.com/Shopify/hydrogen" },
    ],
    alternatives: alts([
      ["Medusa", "https://medusajs.com", "MIT", "An open commerce backend you host."],
      ["Saleor", "https://saleor.io", "BSD-3-Clause", "A GraphQL commerce engine, open source, with a company that also sells a cloud."],
      ["WooCommerce", "https://woocommerce.com", "GPL-3.0", "Store plugins on WordPress. You operate the site."],
    ]),
  },
  {
    id: "stripe",
    name: "Stripe",
    vendor: "Stripe",
    category: "Business systems",
    summary: "The payments API a large share of internet businesses charge cards with.",
    reach: "The default processor for startups and a common one for larger internet companies. If a tutorial shows a card form, it is often Stripe’s.",
    licenseKind: "proprietary",
    licenseName: "Stripe services agreement",
    licenseNote: "Stripe’s client libraries are often open source. The service, the dashboard, Radar, and Billing are not. You cannot run Stripe yourself.",
    gap: "There is no open source network that clears a card. Kill Bill and invoice tools cover subscription state. The card networks and the bank relationship are the actual product.",
    features: feats(`
Pay | Cards, wallets, and bank debits | A single API for cards and, by country, wallets and bank debits. Coverage is part of what you are buying.
Checkout | Checkout and Payment Element | A hosted payment page or an embeddable element that handles authentication and local payment methods.
Bill | Billing | Subscriptions, invoices, trials, and prorations. A large amount of SaaS billing logic sits in this product.
Connect | Connect | Split payments to sellers on a marketplace, with connected accounts and KYC handled by Stripe.
Radar | Radar | Fraud scoring and rules, included in a basic form and sold in a stronger form.
Tax | Tax | Calculation and, in places, remittance of sales tax. It is a separate product toggle.
Link | Payment Links and the customer portal | A no-code payment link, and a portal where a subscriber updates a card.
Test | Test mode | A full fake environment with test card numbers, which is why prototypes start here.
Events | Webhooks | Signed events for payment success, failure, and disputes. Losing the webhook handler is how apps get out of sync.
Dashboard | Reports and Sigma | The web dashboard, plus SQL over Stripe data on the Sigma add-on.
Identity | Identity and issuing | Identity verification, and card issuing, sold as additional Stripe products and not available in every country.
Terminal | Terminal | Card-present hardware and APIs for in-person payment, separate from the online API.
`),
    links: [
      { label: "Product", href: "https://stripe.com/" },
      { label: "Docs", href: "https://docs.stripe.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Stripe,_Inc." },
    ],
    alternatives: alts([
      ["Kill Bill", "https://killbill.io", "Apache-2.0", "Open subscription billing. You still need a payment processor underneath."],
      ["Invoice Ninja", "https://invoiceninja.com", "Elastic License 2.0 for recent versions", "Invoicing you can host. Newer source is source-available. Card processing is still a gateway."],
    ]),
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    vendor: "Intuit",
    category: "Business systems",
    summary: "The bookkeeping app a huge number of small businesses and their accountants share.",
    reach: "The default small-business ledger in the United States, and a common one in the other countries Intuit sells it. Accountants ask for the file or the login.",
    licenseKind: "proprietary",
    licenseName: "Intuit terms",
    licenseNote: "QuickBooks Online and QuickBooks Desktop are proprietary. Accountants’ familiarity is a form of lock-in that no export fully removes.",
    gap: "GnuCash, Akaunting, and Invoice Ninja can keep books. The gap is bank-feed coverage, payroll filings, and an accountant who already knows the product.",
    features: feats(`
Books | Chart of accounts | A ledger with the categories a small business needs, and opening balances.
Invoice | Invoices and estimates | Send an invoice, record a payment, and turn an estimate into an invoice.
Expense | Expenses and receipts | Record a bill, snap a receipt, and attach it to the transaction.
Bank | Bank feeds and reconciliation | Download transactions from a bank and match them to the books. The feed is the feature that saves the evening.
Tax | Sales tax | Rates and, in the US editions, sales-tax tracking that an accountant can work from.
Report | Profit and loss, balance sheet, cash flow | The three statements a lender or an owner asks for, as a report rather than a spreadsheet.
People | Accountant access | Invite an accountant into the same books, which is how the product spread.
Payroll | Payroll add-on | Pay employees and file payroll taxes where Intuit offers it. It is a major reason US businesses stay.
Inventory | Inventory | Track stock on higher editions. Many tiny businesses never turn it on.
Desktop | QuickBooks Desktop | The older installed product, still used by accountants who do not want the online edition. It is a separate closed app.
Class | Classes and locations | Tag transactions so one set of books can report by department or shop.
Apps | App marketplace | Payments, payroll, and industry apps connected to the same company file.
`),
    links: [
      { label: "Product", href: "https://quickbooks.intuit.com/" },
      { label: "Support", href: "https://quickbooks.intuit.com/learn-support/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/QuickBooks" },
    ],
    alternatives: alts([
      ["GnuCash", "https://www.gnucash.org", "GPL-2.0", "A serious open double-entry ledger. No bank-feed network comparable to Intuit’s."],
      ["Akaunting", "https://akaunting.com", "GPL-3.0", "Online accounting you can host."],
    ]),
  },
  {
    id: "epic-ehr",
    name: "Epic",
    vendor: "Epic Systems",
    category: "Business systems",
    summary: "The electronic health record a large share of major US hospitals run.",
    reach: "Clinicians in many large US health systems spend the day in Epic: orders, notes, results, and the patient portal. It is a US hospital system more than a global consumer app.",
    licenseKind: "proprietary",
    licenseName: "Epic customer license",
    licenseNote: "Epic is closed and sold to health systems, not downloaded. The workflows, the data model, and the modules are Epic’s. Customers configure. They do not fork.",
    gap: "OpenMRS, OpenEMR, and GNU Health are real open health records. They are not a drop-in for a US health system’s Epic build, billing, or MyChart population.",
    features: feats(`
Chart | Clinical documentation | Notes, histories, and results in one chart. Hyperspace is the clinician desktop most staff mean when they say Epic.
Orders | Order entry | Medications, labs, and imaging ordered in the chart, with order sets the hospital configured.
Meds | Medication administration | A record of what was given, tied to the order, used on inpatient wards.
Inbox | In Basket | Staff messages, results to sign, and chart deficiencies. It is the work queue.
Portal | MyChart | The patient portal: results, messages, visits, and bills. Patients know this name even when they do not know the name Epic.
Schedule | Cadence | Scheduling for clinics. The module name is part of how the hospital talks.
Bill | Resolute | Hospital and professional billing. The clinical chart and the bill are the same vendor on purpose.
Report | Clarity | A relational reporting database customers query for operations and research extracts. It is Epic’s reporting path, not a public schema.
Decide | BestPractice advisories | Decision-support popups the organization configured, fired from orders and charting.
Mobile | Mobile clinician apps | Phone and tablet apps for the same chart, used on rounds.
Configure | SmartForms, SmartSets, and flowsheets | The building blocks analysts use to make one health system’s Epic look different from another’s.
Modules | One system, many settings | Inpatient, clinic, emergency, and perioperative workflows are configurations and modules of the same product, which is why a go-live takes years.
`),
    links: [
      { label: "Epic Systems", href: "https://www.epic.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Epic_Systems" },
      { label: "MyChart", href: "https://www.mychart.org/" },
    ],
    alternatives: alts([
      ["OpenMRS", "https://openmrs.org", "MPL-2.0", "An open medical record platform used by real care programs, especially outside US commercial hospitals."],
      ["OpenEMR", "https://www.open-emr.org", "GPL-3.0", "An open clinic record and billing system."],
      ["GNU Health", "https://www.gnuhealth.org", "GPL-3.0", "An open health and hospital information system."],
    ]),
  },
  {
    id: "workday",
    name: "Workday",
    vendor: "Workday",
    category: "Business systems",
    summary: "The HR and finance cloud a lot of large employers use for the worker record.",
    reach: "Common as the system of record for employees at large companies: job, pay, time, and often recruiting. Workers meet it on day one and on payday.",
    licenseKind: "proprietary",
    licenseName: "Workday subscription",
    licenseNote: "Workday is closed SaaS. There is no self-hosted edition and no source. Configuration lives in the tenant and moves when you leave only as an export.",
    gap: "Odoo and ERPNext cover HR for smaller organizations. A global company’s payroll filings, security model, and Workday process history are the gap.",
    features: feats(`
Core | Worker records and organizations | A person, a position, a supervisory org, and a job profile. Almost every other module hangs off that.
Process | Business process framework | Hires, changes, and terminations are configurable processes with approvals. This framework is the product’s personality.
Hire | Recruiting | Requisitions, candidates, and offers in the same system as the worker record.
Pay | Payroll | Payroll in the countries Workday supports, which is a deciding feature and not available everywhere.
Time | Time tracking | Clock and timesheet entry that feeds payroll.
Benefits | Benefits administration | Enrollment in health and retirement plans during an annual event the employee actually sees.
Talent | Performance and talent | Goals, reviews, and succession data, sold as part of the HCM suite.
Learn | Learning | Courses assigned to workers. Many companies also keep a separate learning tool.
Finance | Financials | General ledger, payables, and procurement as a sibling product on the same vendor, not always in the same purchase.
Security | Security groups | Access is granted through security groups tied to roles and organizations. It is its own discipline.
Report | Custom reports and calculated fields | Admins build reports without a separate warehouse, until the questions get too heavy.
Tenant | Vendor-operated releases | You do not patch a server. Behavior changes on Workday’s release schedule, twice a year in the long-standing cadence.
`),
    links: [
      { label: "Product", href: "https://www.workday.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Workday,_Inc." },
      { label: "Community", href: "https://community.workday.com/" },
    ],
    alternatives: alts([
      ["ERPNext", "https://erpnext.com", "GPL-3.0", "Open HR and payroll features for organizations that can operate it."],
      ["Odoo", "https://www.odoo.com", "LGPL-3.0 for Community", "Employees, time off, and recruiting in an open suite, with paid add-ons."],
    ]),
  },
];
