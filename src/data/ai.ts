import { row } from "./define";

const builderAlternative: [string, string, string, string] = [
  "bolt.diy", "https://github.com/Decentralised-AI/bolt.diy", "MIT",
  "A self-hosted prompt-to-app workspace. Bring a model provider and your own deployment. Its WebContainers dependency requires a separate license for commercial production use.",
];
const agentAlternative: [string, string, string, string] = [
  "OpenClaw", "https://github.com/openclaw/openclaw", "MIT",
  "A self-hosted personal assistant that connects chat channels to agents and tools. You configure the model, integrations, permissions, and runtime; it is not the same managed service.",
];

/** Application-level descriptions, checked against the linked official sources. */
export const aiTools = [
  row({
    id: "lovable", name: "Lovable", vendor: "Lovable", category: "AI builders",
    summary: "Build and publish web apps by describing what you want in a conversation.",
    reach: "For founders, product teams, and people building internal tools.",
    licenseName: "Lovable terms", licenseNote: "The hosted builder is proprietary. Ownership of generated app code is separate from access to the builder's source.",
    gap: "Open builders can generate and edit apps, but you still need model access, backend setup, and deployment. They do not reproduce Lovable's managed workflow.",
    features: `Build | Prompt-to-app | Describe an application and iterate on its generated code through chat.
Build | Live preview | Review the running application while requesting further changes.
Backend | Database and authentication | Build apps with backend data and user sign-in using supported services.
Code | Git sync | Move the project code into a connected Git repository for your own workflow.
Team | Shared workspaces | Organize projects with collaborators inside a shared workspace.
Publish | Hosting and domains | Publish an app to a live URL and connect a custom domain where supported.`,
    links: [["Product", "https://lovable.dev/"], ["Documentation", "https://docs.lovable.dev/introduction/welcome"]],
    alts: [builderAlternative],
  }),
  row({
    id: "bolt", name: "Bolt", vendor: "StackBlitz", category: "AI builders",
    summary: "An AI workspace for turning prompts into working websites and applications.",
    reach: "For people prototyping and shipping web applications from a browser.",
    licenseName: "Bolt service terms", licenseNote: "This listing covers the hosted Bolt service. Public starter code and bolt.diy are separate from the complete hosted product.",
    gap: "bolt.diy offers an open prompt-and-preview workflow. Model access, production hosting, and operating the backend remain your responsibility.",
    features: `Build | Natural-language changes | Ask the agent to create an app or change an existing project in chat.
Workspace | Browser development | Work on application code and run the project in a browser workspace.
Preview | Running app preview | Inspect the application as it runs while making iterative changes.
Backend | Data-backed apps | Build workflows that store application data, such as accounts and saved items.
Publish | App publishing | Publish the project so other people can open and use the application.`,
    links: [["Product", "https://bolt.new/"], ["Documentation", "https://support.bolt.new/get-started/intro-bolt"], ["Quickstart", "https://support.bolt.new/building/quickstart"]],
    alts: [builderAlternative],
  }),
  row({
    id: "v0", name: "v0", vendor: "Vercel", category: "AI builders",
    summary: "A conversational app builder with live previews, GitHub workflows, and Vercel deployment.",
    reach: "For designers and developers building interfaces and full-stack web applications.",
    licenseName: "Vercel v0 terms", licenseNote: "The hosted generation service is proprietary. Generated project code is distinct from the service itself.",
    gap: "An open builder can generate and preview web apps, but does not include v0's managed agents or the integrated Vercel deployment workflow.",
    features: `Build | Conversational generation | Describe a screen or application and refine the resulting code in chat.
Preview | Live feedback | Preview the app while reviewing the agent's progress and code changes.
Code | Repository import | Bring an existing GitHub codebase into the workspace to continue development.
Code | Branches and pull requests | Connect generated changes to a GitHub branch and pull-request workflow.
Backend | Service integrations | Connect supported databases and storage services to a project.
Publish | Vercel deployment | Build and deploy the application to Vercel from the project workspace.`,
    links: [["Product", "https://v0.app/"], ["Documentation", "https://v0.app/docs"], ["GitHub workflows", "https://v0.app/docs/github"]],
    alts: [builderAlternative],
  }),
  row({
    id: "muse", name: "Muse", vendor: "Meta", category: "AI assistants",
    summary: "A personal AI agent that carries out tasks across the web and connected apps.",
    reach: "For people delegating everyday planning and digital tasks to an assistant.",
    licenseName: "Meta Muse service terms", licenseNote: "The managed personal agent is proprietary. Published components do not make the complete hosted service open source.",
    gap: "Open agent frameworks can operate tools and browsers, but require setup and model access. They do not match Muse's consumer integrations, payment workflow, or managed personal environment.",
    features: `Chat | App and WhatsApp conversations | Give the assistant instructions in its app or through WhatsApp.
Tasks | Multi-step planning | Turn a goal into a plan and let the agent work through the steps.
Browser | Web actions | The agent can navigate websites and fill forms to complete a task.
Tasks | Background work | Long-running tasks can continue after you leave the application.
Control | Approval requests | The agent returns for approval before actions such as sending email or purchasing.
Context | Personal memory | Retain relevant preferences and details to inform later tasks and suggestions.`,
    links: [["Product", "https://ai.meta.com/muse/"], ["Introduction and capabilities", "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/"]],
    alts: [agentAlternative],
  }),
  row({
    id: "instinct", name: "Instinct", vendor: "Instinct", category: "AI assistants",
    summary: "A personal assistant you text or call to handle everyday tasks and arrangements.",
    reach: "For people who want to delegate tasks through familiar communication channels.",
    licenseName: "Instinct terms of service", licenseNote: "Instinct is a proprietary hosted assistant governed by its service terms.",
    gap: "Open agents provide building blocks for tool use, but a comparable personal assistant needs telephony, account integrations, model access, and reliable task execution.",
    features: `Chat | Text and voice requests | Reach the assistant by text or phone rather than a separate work dashboard.
Tools | Phone and computer use | Use phone and computer interactions to work through a requested task.
Errands | Purchases and gifts | Delegate shopping tasks such as groceries or sending a gift.
Planning | Appointments and trips | Request help arranging an appointment or planning a short trip.
Admin | Bill disputes | Ask for help disputing a bill as one of the service's documented use cases.`,
    links: [["Product and use cases", "https://instinct.com/"], ["Terms", "https://instinct.com/terms"]],
    alts: [agentAlternative],
  }),
];
