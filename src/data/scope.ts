/**
 * The reviewed directory, grouped for browsing.
 *
 * Every id below points at a researched record in the archive. The groups are
 * intentionally broad enough to make a 300+ catalog useful without turning
 * the index into an unfiltered dump of names.
 */
export const directoryGroups: Record<string, readonly string[]> = {
  "Work & projects": [
    "notion", "jira", "linear", "asana", "clickup", "monday", "trello",
    "airtable", "coda", "smartsheet", "todoist", "productboard", "aha",
  ],
  "Chat & meetings": [
    "teams", "slack", "zoom", "loom", "calendly", "miro", "google-meet",
    "discord", "webex", "ringcentral", "google-calendar", "lark",
  ],
  "AI builders": ["lovable", "bolt", "v0", "replit", "devin", "windsurf", "github-copilot"],
  "AI assistants": [
    "grok", "muse", "instinct", "chatgpt", "claude", "perplexity", "gemini",
    "midjourney", "runway", "elevenlabs", "descript", "datarobot", "jasper",
    "suno", "tabnine",
  ],
  "Docs & knowledge": [
    "confluence", "gitbook", "slite", "craft", "onenote", "obsidian", "google-docs",
    "word", "wps-office", "overleaf", "sharepoint", "google-drive",
  ],
  "Office & spreadsheets": ["excel", "powerpoint", "google-sheets"],
  "Design & media": [
    "figma", "canva", "photoshop", "premiere-pro", "webflow", "framer", "squarespace",
    "wix", "wordpress-com", "sketch", "illustrator", "after-effects", "lightroom",
    "final-cut", "indesign", "davinci-resolve", "pro-tools", "ableton", "logic-pro",
    "solidworks", "revit", "fusion-360", "rhino", "unity", "unreal", "sketchup", "cinema-4d",
    "autocad", "matlab",
  ],
  "Sales & CRM": [
    "hubspot", "pipedrive", "outreach", "gong", "salesloft", "zoominfo", "salesforce",
    "dynamics-365",
  ],
  "Customer support": [
    "intercom", "zendesk", "freshdesk", "front", "helpscout", "gorgias", "kustomer",
    "genesys",
  ],
  "Marketing & content": [
    "mailchimp", "klaviyo", "customer-io", "braze", "attentive", "beehiiv", "grammarly",
    "substack", "medium", "marketo", "google-ads", "meta-ads", "linkedin-ads", "tiktok-ads", "the-trade-desk",
  ],
  "Analytics & feedback": [
    "mixpanel", "amplitude", "hotjar", "pendo", "fullstory", "statsig", "looker", "tableau",
    "mode", "power-bi", "google-analytics", "typeform", "surveymonkey", "qualtrics", "logrocket", "optimizely",
  ],
  "Automation": ["zapier", "make", "workato", "uipath", "power-automate", "boomi", "mulesoft", "power-apps"],
  "Hiring & people": [
    "greenhouse", "lever", "ashby", "workable", "bamboohr", "lattice", "gusto", "rippling",
    "adp", "ukg", "deel", "remote", "workday",
  ],
  "Business operations": [
    "docusign", "ironclad", "expensify", "freshbooks", "quickbooks", "netsuite", "bill-com",
    "sage-intacct", "concur", "servicenow", "sap-s4hana", "epic-ehr", "athenahealth", "veeva",
    "eventbrite", "luma", "patreon",
  ],
  "Developer tools": [
    "github", "cursor", "vscode", "intellij-ultimate", "pycharm", "webstorm", "datagrip", "phpstorm",
    "goland", "clion", "rubymine", "postman", "docker-desktop", "coderabbit", "greptile", "azure-devops",
    "bitbucket", "circleci", "buildkite", "harness", "teamcity", "octopus", "sourcegraph", "codesandbox",
    "stackblitz", "graphite", "browserstack", "saucelabs", "lambdatest", "jfrog", "sonarcloud", "terraform",
  ],
  "Observability & delivery": [
    "datadog", "splunk", "new-relic", "dynatrace", "honeycomb", "pagerduty", "sentry", "launchdarkly",
  ],
  "Security & identity": [
    "snyk", "wiz", "crowdstrike", "sentinelone", "zscaler", "socket", "semgrep-cloud", "checkmarx",
    "palo-alto", "tenable", "knowbe4", "proofpoint", "lastpass", "okta", "entra-id", "1password", "auth0", "clerk",
  ],
  "Infrastructure & cloud": [
    "cloudflare", "fastly", "vercel", "netlify", "heroku", "render", "railway", "digitalocean", "firebase",
    "algolia", "mapbox", "aws", "azure", "gcp",
  ],
  "Data platforms": [
    "snowflake", "databricks", "bigquery", "redshift", "oracle-database", "clickhouse-cloud", "elastic-cloud",
    "confluent", "fivetran", "dbt-cloud", "segment", "pinecone", "palantir", "informatica", "alteryx", "hex", "mongodb",
  ],
  "Files & storage": ["dropbox", "box", "onedrive", "icloud"],
  "Finance & commerce": [
    "stripe", "shopify", "xero", "square", "paypal", "adyen", "plaid", "brex", "ramp", "factset", "pitchbook",
    "bigcommerce", "adobe-commerce", "etsy", "amazon-seller", "ebay", "ecwid",
  ],
  "Communication & email": [
    "gmail", "whatsapp", "wechat", "imessage", "dingtalk", "line", "telegram", "messenger", "wecom", "kakaotalk",
    "superhuman", "outlook", "mailgun", "twilio", "sendgrid",
  ],
  "Social & community": ["linkedin", "x", "reddit", "pinterest", "snapchat", "threads", "nextdoor", "instagram", "tiktok"],
  "Education & research": [
    "canvas-lms", "blackboard", "google-classroom", "kahoot", "quizlet", "teachable", "mathematica", "sas", "spss",
    "stata", "jmp", "westlaw",
  ],
  "Platforms & devices": ["windows-11", "macos", "ios", "android-gms", "chrome"],
  "Media & consumer": ["google-maps", "youtube", "spotify", "bloomberg-terminal", "vimeo"],
};

export const directoryEntries = Object.entries(directoryGroups).flatMap(([category, ids]) =>
  ids.map((id) => ({ id, category })),
);
