import type { Tool } from "../types";
import { row } from "./define";

export const bulkTools: Tool[] = [
  row({
    id: "coderabbit",
    name: "CodeRabbit",
    vendor: "CodeRabbit",
    category: "Developer tools",
    summary: "AI code review that comments on a pull request before a teammate does.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A common review app on GitHub and GitLab for teams that want a first pass on every change.",
    licenseName: "CodeRabbit terms",
    licenseNote: "The review service, the models it calls, and the dashboard are proprietary.",
    gap: "An open reviewer plus a model you run can comment on a diff. Hosted learnings and the product workflow are the gap.",
    features: `Review | Line comments | Leaves comments on changed lines, covering bugs, missing tests, and risky patterns in the diff.
Summary | Walkthrough | Writes a short walkthrough of the diff so a reviewer can see intent before reading every file.
Learns | Review learnings | Stores preferences from past comments so later reviews follow the same house rules.
Chat | In-diff chat | A reviewer can ask about a hunk without leaving the pull request page.
Editor | IDE extension | Surfaces the same review comments inside the editor, not only on the forge.
Policy | Path filters | Skips generated files, chooses which languages to review, and tunes how loud the comments are.
Forge | GitHub and GitLab | Installs as an app and runs when a pull request is opened or updated.
Reports | Review metrics | Shows how many comments were resolved, so a team can tell whether the bot is noise.`,
    links: [["Product", "https://www.coderabbit.ai/"], ["Docs", "https://docs.coderabbit.ai/"]],
    alts: [["pr-agent", "https://github.com/qodo-ai/pr-agent", "Apache-2.0", "An open pull-request agent. You bring the model and the hosting."]],
  }),
  row({
    id: "greptile",
    name: "Greptile",
    vendor: "Greptile",
    category: "Developer tools",
    summary: "A code-review agent that indexes a repository and answers questions about the change.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by teams that want a reviewer which has already read the surrounding repository, not only the diff.",
    licenseName: "Greptile terms",
    licenseNote: "The index, the chat, and the hosted reviewer are proprietary.",
    gap: "You can index a repo with an open model and a local search index. The tuned product and the hosted context are the gap.",
    features: `Index | Repo index | Builds a searchable map of the repository so comments can cite code outside the diff.
Review | Pull request review | Comments on a pull request using that index, not only the lines that changed.
Chat | Codebase chat | Answers a question about how a function is used across the repository.
Context | Custom context | Lets a team point the reviewer at docs or rules that should apply to every review.
Forge | GitHub app | Runs from a GitHub app when a pull request is opened or updated.
Learning | Feedback | Uses reactions on comments to quiet the kinds of notes a team marks as unhelpful.
Search | Symbol search | Finds where a type or function is referenced before suggesting a change.
Access | Repo permissions | Reviews only the repositories an admin has installed the app on.`,
    links: [["Product", "https://www.greptile.com/"], ["Docs", "https://www.greptile.com/docs"]],
    alts: [["aider", "https://github.com/Aider-AI/aider", "Apache-2.0", "A terminal pair-programmer. It does not host a review dashboard."]],
  }),
  row({
    id: "linear",
    name: "Linear",
    vendor: "Linear",
    category: "Product work",
    summary: "A fast issue tracker used by product teams that want issues, cycles, and a roadmap in one place.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The default tracker at a lot of software companies that outgrew a spreadsheet and did not want Jira.",
    licenseName: "Linear terms",
    licenseNote: "The app, the sync service, and the API are proprietary.",
    gap: "An open tracker can hold issues and a board. Linear's speed, cycles, and the polish of the client are the gap.",
    features: `Issues | Issue records | Each issue has a status, priority, assignee, estimate, and a description written in the app.
Cycles | Timeboxed cycles | A cycle collects the issues a team intends to finish in a fixed span of days.
Projects | Projects and milestones | Groups issues into a project with a target date and a progress view.
Triage | Inbox triage | New issues land in triage so someone accepts, declines, or assigns them.
Views | Custom views | Filters issues into a saved view, such as everything blocked and assigned to you.
Roadmap | Roadmap view | Lays projects on a timeline so a company can see what is coming next.
Git | Pull request links | Connects a GitHub or GitLab pull request to the issue it closes.
Sync | Offline-feeling client | The desktop and web clients stay responsive while changes sync in the background.`,
    links: [["Product", "https://linear.app/"], ["Docs", "https://linear.app/docs"]],
    alts: [["Plane", "https://github.com/makeplane/plane", "AGPL-3.0", "An open issue tracker with projects, cycles, and a board."]],
  }),
  row({
    id: "clickup",
    name: "ClickUp",
    vendor: "ClickUp",
    category: "Product work",
    summary: "An all-in-one work hub that mixes tasks, docs, goals, and a chat-like inbox.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by operations and product teams that want tasks, docs, and goals in one subscription.",
    licenseName: "ClickUp terms",
    licenseNote: "The workspace, the apps, and the automation service are proprietary.",
    gap: "Open project tools cover tasks and docs separately. ClickUp's single workspace is the thing people pay for.",
    features: `Tasks | Nested tasks | A task can hold subtasks, checklists, assignees, dates, and custom fields.
Views | Many views | The same list of tasks can be a board, a calendar, a Gantt chart, or a table.
Docs | Docs in the workspace | Writes notes next to the tasks they describe, instead of in a separate wiki.
Goals | Goals and targets | Tracks a numeric target, such as a launch date or a count of finished tasks.
Automations | If-this-then-that | Moves a task, sets a field, or posts a message when a status changes.
Inbox | Assigned to me | Collects comments and assignments so a person can clear them from one inbox.
Time | Time tracking | Records time on a task and rolls it up to a project.
Guests | Guest access | Invites a client into one space without giving them the whole workspace.`,
    links: [["Product", "https://clickup.com/"], ["Docs", "https://help.clickup.com/"]],
    alts: [["OpenProject", "https://github.com/opf/openproject", "GPL-3.0", "An open project suite with work packages, wikis, and a Gantt chart."]],
  }),
  row({
    id: "asana",
    name: "Asana",
    vendor: "Asana",
    category: "Product work",
    summary: "A work-management product for tracking tasks, projects, and goals across a company.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A single current user total is not cited on this card.",
    reach: "A standard project tool in marketing, operations, and product teams that are not living in an engineering tracker.",
    licenseName: "Asana terms",
    licenseNote: "The work graph, the apps, and the rules engine are proprietary.",
    gap: "An open tracker can list tasks. Asana's goals, portfolios, and rules across a whole company are the gap.",
    features: `Tasks | Tasks and subtasks | A task has an assignee, a due date, a description, and a checklist of subtasks.
Projects | Project sections | A project groups tasks into sections such as backlog, doing, and done.
Portfolios | Portfolios | Rolls many projects into one view for a leader who is not in every board.
Goals | Company goals | Connects projects to a goal so progress on the work updates the goal.
Rules | Automation rules | Moves a task or assigns a person when a field changes.
Timeline | Timeline | Shows task dates on a horizontal timeline so overlaps are visible.
Forms | Intake forms | Turns a form submission into a task in a chosen project.
Workload | Workload view | Shows how many tasks each person already has before someone assigns more.`,
    links: [["Product", "https://asana.com/"], ["Docs", "https://asana.com/guide"]],
    alts: [["Taiga", "https://github.com/taigaio/taiga-back", "AGPL-3.0", "An open project tool with a backlog, a board, and issues."]],
  }),
  row({
    id: "monday",
    name: "Monday.com",
    vendor: "Monday.com",
    category: "Product work",
    summary: "A visual work operating system of boards, columns, and automations sold to whole companies.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A single current user total is not cited on this card.",
    reach: "Common in operations, marketing, and IT teams that want a board they can reshape without an admin.",
    licenseName: "monday.com terms",
    licenseNote: "The boards, the automation engine, and the apps are proprietary.",
    gap: "An open board can show columns and cards. monday's marketplace, automations, and multi-product suite are the gap.",
    features: `Boards | Boards and groups | A board holds groups of items, and each item is a row with custom columns.
Columns | Column types | Columns can be a person, a status, a date, a number, a file, or a formula.
Views | Extra views | The same board can open as a calendar, a chart, a Gantt view, or a form.
Automations | Automations | A recipe runs when a status changes, such as notifying a person or moving an item.
Dashboards | Dashboards | Combines numbers from several boards into one chart for a manager.
WorkForms | Intake forms | A public form creates a new item on a board.
Apps | Product suite | Separate products cover CRM, development tasks, and service tickets on the same account.
Guests | Guest and viewer seats | Shares one board with a client who should not see the rest of the account.`,
    links: [["Product", "https://monday.com/"], ["Docs", "https://support.monday.com/"]],
    alts: [["WeKan", "https://github.com/wekan/wekan", "MIT", "An open kanban board you can host yourself."]],
  }),
  row({
    id: "confluence",
    name: "Confluence",
    vendor: "Atlassian",
    category: "Knowledge",
    summary: "A company wiki for pages, spaces, and meeting notes, usually sitting next to Jira.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Atlassian. This card does not split Confluence revenue out of the company total.",
    reach: "The default internal wiki at companies that already pay Atlassian for Jira.",
    licenseName: "Atlassian Cloud terms",
    licenseNote: "Confluence Cloud pages, permissions, and the editor are proprietary.",
    gap: "An open wiki can store pages. Confluence's editor, page permissions, and the Jira link are the gap.",
    features: `Pages | Page editor | Writes a page with headings, tables, panels, and files, then publishes it to a space.
Spaces | Spaces | A space is a collection of pages with its own permissions, such as one team or one product.
Tree | Page tree | Organizes pages as a tree so a reader can walk from a parent page to its children.
Comments | Inline comments | A teammate highlights a sentence and leaves a comment on that passage.
Templates | Page templates | Starts a meeting note or a decision record from a template instead of a blank page.
Jira | Jira macros | Embeds a live list of Jira issues that match a query inside a page.
Search | Company search | Searches page titles and body text across the spaces a person is allowed to see.
Permissions | Page restrictions | Limits a page to named people even when the rest of the space is open.`,
    links: [["Product", "https://www.atlassian.com/software/confluence"], ["Docs", "https://support.atlassian.com/confluence-cloud/"]],
    alts: [["BookStack", "https://github.com/BookStackApp/BookStack", "MIT", "An open wiki of books, chapters, and pages you host."]],
  }),
  row({
    id: "azure-devops",
    name: "Azure DevOps",
    vendor: "Microsoft",
    category: "Developer tools",
    summary: "Microsoft's hosted suite for repos, boards, pipelines, test plans, and artifacts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Microsoft. Azure DevOps revenue is not reported as its own line.",
    reach: "The default forge for companies that already keep their code and identity in Azure.",
    licenseName: "Microsoft terms",
    licenseNote: "Azure DevOps Services is a proprietary hosted product. Some older clients had open pieces; the service is not.",
    gap: "Forgejo plus a CI runner covers repos and pipelines. Boards, test plans, and the Azure tie-in are the gap.",
    features: `Repos | Git repositories | Hosts Git repos with pull requests, branch policies, and required reviewers.
Boards | Work boards | Tracks work items on a board with a backlog, sprints, and a query language.
Pipelines | YAML pipelines | Runs build and release stages from a YAML file stored in the repository.
Artifacts | Package feeds | Publishes NuGet, npm, Maven, and Python packages to a private feed.
Tests | Test plans | Writes manual test cases and records the result of each run.
Wikis | Project wiki | Stores a markdown wiki next to the code of the same project.
Identity | Microsoft Entra | Signs people in through the same directory the rest of Microsoft 365 uses.
Policies | Branch policies | Blocks a merge until a build passes and the required reviewers approve.`,
    links: [["Product", "https://azure.microsoft.com/products/devops"], ["Docs", "https://learn.microsoft.com/azure/devops/"]],
    alts: [["Forgejo", "https://forgejo.org/", "MIT", "An open forge for Git repositories, issues, and pull requests."]],
  }),
  row({
    id: "bitbucket",
    name: "Bitbucket Cloud",
    vendor: "Atlassian",
    category: "Developer tools",
    summary: "Atlassian's Git host, with pull requests that sit next to Jira issues.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Atlassian. Bitbucket revenue is not reported alone on this card.",
    reach: "The Git host for teams that already live in Jira and want the pull request on the same account.",
    licenseName: "Atlassian Cloud terms",
    licenseNote: "Bitbucket Cloud is proprietary. The service is not the open-source Git binary.",
    gap: "Forgejo or GitLab's open core can host Git. The Jira connection and Atlassian account are the gap.",
    features: `Repos | Git hosting | Stores Git repositories with a web view of files, commits, and branches.
Pulls | Pull requests | Opens a review on a branch with comments, tasks, and a merge check.
Pipelines | Pipelines | Runs a build from a YAML file when someone pushes to the repository.
Jira | Jira issues | Links a commit or a pull request to a Jira issue key written in the message.
Permissions | Branch permissions | Restricts who can push to a branch and who can merge.
Snippets | Snippets | Shares a small file or a note without creating a full repository.
Deployments | Deployment view | Shows which build was deployed to an environment such as staging or production.
Codeowners | Default reviewers | Adds the usual reviewers when a pull request touches certain paths.`,
    links: [["Product", "https://bitbucket.org/"], ["Docs", "https://support.atlassian.com/bitbucket-cloud/"]],
    alts: [["Forgejo", "https://forgejo.org/", "MIT", "An open Git forge with issues and pull requests."]],
  }),
  row({
    id: "circleci",
    name: "CircleCI",
    vendor: "CircleCI",
    category: "Developer tools",
    summary: "A hosted continuous-integration service that runs builds from a config file in the repo.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A long-running choice for teams that want hosted build machines without running their own fleet.",
    licenseName: "CircleCI terms",
    licenseNote: "The hosted runners, the dashboard, and the orbs registry are proprietary.",
    gap: "Woodpecker or another open runner can execute a pipeline you host. CircleCI's machines and orbs are the gap.",
    features: `Config | Config file | A YAML file in the repository describes jobs, steps, and the image each job uses.
Orbs | Reusable orbs | A package of steps, such as an AWS deploy, can be imported instead of rewritten.
Parallel | Parallelism | Splits a test suite across several machines and reports one result.
Cache | Dependency cache | Saves downloaded dependencies between builds so the next run starts faster.
Insights | Test insights | Shows which tests fail most often and how long each job takes.
Contexts | Shared contexts | Injects secrets, such as a deploy key, into jobs that are allowed to use them.
Approval | Manual approval | Pauses a workflow until a person approves the production deploy.
SSH | Rerun with SSH | Opens a shell on a failed job so someone can inspect the machine.`,
    links: [["Product", "https://circleci.com/"], ["Docs", "https://circleci.com/docs/"]],
    alts: [["Woodpecker", "https://github.com/woodpecker-ci/woodpecker", "Apache-2.0", "An open CI system you host and attach to your forge."]],
  }),
  row({
    id: "buildkite",
    name: "Buildkite",
    vendor: "Buildkite",
    category: "Developer tools",
    summary: "A CI control plane that schedules jobs onto build machines you run yourself.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Chosen by teams that want the dashboard of a hosted CI and the machines inside their own network.",
    licenseName: "Buildkite terms",
    licenseNote: "The control plane, the agent protocol as a product, and the UI are proprietary.",
    gap: "An open CI server can schedule jobs on your machines. Buildkite's hosted control plane is the gap.",
    features: `Pipelines | Pipeline steps | A pipeline file lists steps, and each step runs as a command on an agent.
Agents | Your agents | Agents run on your hardware or your cloud account, not on Buildkite's machines.
Queues | Agent queues | Sends a job to a queue, such as a macOS queue or a GPU queue.
Dynamic | Dynamic pipelines | A step can upload more steps at runtime, so the graph depends on the change.
Artifacts | Build artifacts | Uploads logs and files from a step so a later step or a person can download them.
Packages | Package registry | Stores build outputs in a registry next to the pipeline that produced them.
Annotations | Annotations | A step can write a markdown note onto the build page.
Access | Team permissions | Limits who can start a pipeline and who can see its secrets.`,
    links: [["Product", "https://buildkite.com/"], ["Docs", "https://buildkite.com/docs"]],
    alts: [["Woodpecker", "https://github.com/woodpecker-ci/woodpecker", "Apache-2.0", "An open CI server and agent you host end to end."]],
  }),
  row({
    id: "harness",
    name: "Harness",
    vendor: "Harness",
    category: "Developer tools",
    summary: "A delivery platform for CI, continuous delivery, feature flags, and cloud cost.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Sold to platform teams that want one vendor for pipelines, flags, and deployment verification.",
    licenseName: "Harness terms",
    licenseNote: "The modules, the control plane, and the verification engine are proprietary.",
    gap: "Open CI, flags, and GitOps tools exist separately. Harness sells them as one commercial platform.",
    features: `Pipelines | CI pipelines | Builds and tests from a pipeline defined in the product or in a YAML file.
Delivery | Continuous delivery | Promotes a build through environments with approvals and a rollback.
Verify | Deployment verification | Watches metrics after a deploy and can roll back when an error rate jumps.
Flags | Feature flags | Turns a feature on for a percentage of users without shipping a new binary.
Cost | Cloud cost | Attributes cloud spend to a workload so a team can see an expensive service.
GitOps | GitOps | Syncs a Kubernetes cluster to a Git repository that holds the desired state.
Secrets | Secret management | Injects secrets into a pipeline without writing them into the YAML.
Policy | Policy as code | Blocks a pipeline that violates a rule, such as a missing test or an open CVE.`,
    links: [["Product", "https://www.harness.io/"], ["Docs", "https://developer.harness.io/"]],
    alts: [["Argo CD", "https://github.com/argoproj/argo-cd", "Apache-2.0", "An open GitOps controller for Kubernetes. It is not a full CI product."]],
  }),
  row({
    id: "teamcity",
    name: "TeamCity",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' build server for compiling, testing, and deploying from a central server.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of JetBrains. TeamCity revenue is not reported alone on this card.",
    reach: "A long-standing CI server in Java and .NET shops that already use IntelliJ or Rider.",
    licenseName: "JetBrains TeamCity license",
    licenseNote: "TeamCity is proprietary. The build server and the agents you license are not open source.",
    gap: "An open CI server can run the same compilers. TeamCity's UI, build chains, and the license are the gap.",
    features: `Projects | Build configurations | A project holds build configurations, each with steps, triggers, and parameters.
Chains | Build chains | One finished build can start the next, such as a package build after the tests pass.
Agents | Build agents | Agents on your machines pick up compatible builds from the server queue.
Tests | Test history | Stores the history of each test so a person can see when it started failing.
DSL | Kotlin DSL | Describes the build in Kotlin that the server stores as the configuration.
Artifacts | Artifact dependencies | A later build downloads artifacts produced by an earlier build.
Investigations | Failure investigations | Assigns a person to a failing build and mutes a known broken test.
Auth | Directory login | Signs agents and people in through the company's directory.`,
    links: [["Product", "https://www.jetbrains.com/teamcity/"], ["Docs", "https://www.jetbrains.com/help/teamcity/"]],
    alts: [["Woodpecker", "https://github.com/woodpecker-ci/woodpecker", "Apache-2.0", "An open CI system you host yourself."]],
  }),
  row({
    id: "octopus",
    name: "Octopus Deploy",
    vendor: "Octopus Deploy",
    category: "Developer tools",
    summary: "A release-management product that promotes a built package through environments.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Common in .NET and platform teams that want a separate release tool after the CI build finishes.",
    licenseName: "Octopus terms",
    licenseNote: "The server, the tentacle agents, and the runbooks are proprietary.",
    gap: "A script and an open GitOps tool can promote a release. Octopus's runbooks and environment model are the gap.",
    features: `Releases | Release promotion | A release moves from development to test to production with a gate at each step.
Projects | Deployment projects | A project describes the steps that install one application.
Variables | Variable sets | Substitutes a connection string or a feature flag per environment.
Runbooks | Runbooks | Runs an operational task, such as a restart, with the same permissions as a deploy.
Tenants | Multi-tenant deploys | Deploys the same release to many customer environments with different variables.
Targets | Deployment targets | Installs onto a machine, a Kubernetes cluster, or a cloud account.
Approvals | Manual intervention | Pauses a production deploy until a named person approves it.
Audit | Audit log | Records who deployed what, and to which environment, and when.`,
    links: [["Product", "https://octopus.com/"], ["Docs", "https://octopus.com/docs"]],
    alts: [["Argo CD", "https://github.com/argoproj/argo-cd", "Apache-2.0", "An open tool that syncs Kubernetes environments from Git."]],
  }),
  row({
    id: "launchdarkly",
    name: "LaunchDarkly",
    vendor: "LaunchDarkly",
    category: "Developer tools",
    summary: "A feature-flag service that turns product behavior on and off without a new deploy.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The flag service many product engineering teams name first when they want a controlled rollout.",
    licenseName: "LaunchDarkly terms",
    licenseNote: "The flag service, the SDKs' hosted evaluation, and the UI are proprietary. SDK source is not the product.",
    gap: "Unleash and GrowthBook are open flag servers you can host. LaunchDarkly's scale and experimentation are the gap.",
    features: `Flags | Boolean and multivariate flags | A flag can be on, off, or one of several variants, evaluated per user.
Targeting | Targeting rules | Serves a variant to a percentage of users, a country, or a named segment.
Segments | Segments | Builds a reusable group, such as employees or a beta cohort, and targets the flag at it.
Experiments | Experiments | Measures a metric for each variant so a team can see which one won.
SDKs | Client SDKs | Applications fetch flag values through SDKs for mobile, server, and the browser.
Approvals | Flag approvals | Requires a second person before a production flag changes.
Audit | Audit log | Records who changed a flag and what the previous rule was.
Relay | Relay proxy | A proxy in your network evaluates flags when the app should not call the vendor directly.`,
    links: [["Product", "https://launchdarkly.com/"], ["Docs", "https://docs.launchdarkly.com/"]],
    alts: [["Unleash", "https://github.com/Unleash/unleash", "AGPL-3.0", "The repository license is AGPL-3.0. Hosted Unleash is a separate service."]],
  }),
  row({
    id: "statsig",
    name: "Statsig",
    vendor: "Statsig",
    category: "Analytics",
    summary: "A product-experimentation warehouse for feature gates, A/B tests, and product analytics.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by product teams that want the flag and the experiment result in the same tool.",
    licenseName: "Statsig terms",
    licenseNote: "The warehouse, the gates, and the analytics UI are proprietary.",
    gap: "An open flag server plus a notebook can run an experiment. Statsig's combined warehouse is the gap.",
    features: `Gates | Feature gates | Turns a feature on for a rule, such as a percent of users or a single company.
Experiments | Experiments | Assigns users to variants and computes whether a metric moved.
Metrics | Metric warehouse | Defines a metric once and reuses it across experiments.
Layers | Experiment layers | Keeps two experiments from interfering by putting them in a shared layer.
Autotune | Multi-armed bandit | Shifts traffic toward the variant that is winning while the test is still running.
Events | Event logging | Applications log exposures and events through an SDK.
Holdouts | Holdout groups | Keeps a slice of users off a set of experiments so the combined effect can be measured.
Console | Console and warehouse | Analysts can query the same events the experiments use.`,
    links: [["Product", "https://statsig.com/"], ["Docs", "https://docs.statsig.com/"]],
    alts: [["GrowthBook", "https://github.com/growthbook/growthbook", "MIT", "An open experimentation platform you can host on your own data."]],
  }),
  row({
    id: "datadog",
    name: "Datadog",
    vendor: "Datadog",
    category: "Observability",
    summary: "A monitoring platform for metrics, traces, logs, and security signals from one agent.",
    users: "About 33,400 customers at the end of Q2 2026",
    revenue: "Q2 2026 revenue $1.12B",
    scaleNote: "Datadog Q2 2026 results. The revenue figure is one quarter, not a full year. Customer count is about 33,400.",
    reach: "The default observability vendor for a lot of cloud teams that do not want to run their own metrics stack.",
    licenseName: "Datadog terms",
    licenseNote: "The SaaS platform, the proprietary agent features, and the UI are not open source.",
    gap: "Prometheus and Grafana can graph metrics you host. Datadog's combined traces, logs, and agent are the gap.",
    features: `Metrics | Infrastructure metrics | An agent collects CPU, memory, and custom metrics and graphs them on a dashboard.
APM | Tracing | Application traces show which service in a request was slow.
Logs | Log management | Ingests logs, parses them, and lets a person search and alert on a pattern.
Dashboards | Dashboards | A dashboard mixes graphs from metrics, logs, and traces on one screen.
Monitors | Monitors | An alert fires when a metric crosses a threshold or a log pattern appears.
RUM | Real user monitoring | A browser snippet records page load and front-end errors from real sessions.
Security | Cloud security signals | Watches cloud configuration and runtime events next to the same telemetry.
Integrations | Integration catalog | Ships dashboards for common databases, queues, and cloud services.`,
    links: [["Product", "https://www.datadoghq.com/"], ["Docs", "https://docs.datadoghq.com/"]],
    alts: [["Grafana", "https://github.com/grafana/grafana", "AGPL-3.0", "An AGPL dashboard. SigNoz keeps a separate license under ee/, so it is not listed as one open grant."]],
  }),
  row({
    id: "splunk",
    name: "Splunk",
    vendor: "Cisco",
    category: "Observability",
    summary: "A log and security platform that indexes machine data so people can search it.",
    users: "Not disclosed as a single user total",
    revenue: "Not disclosed on this card",
    scaleNote: "Splunk is part of Cisco. A standalone current revenue line is not cited here.",
    reach: "The log platform many security and IT operations teams still mean when they say search the logs.",
    licenseName: "Splunk license",
    licenseNote: "Splunk Enterprise and Splunk Cloud are proprietary. Ingest pricing is part of the product.",
    gap: "An open log stack can index events. Splunk's search language, apps, and security suite are the gap.",
    features: `Search | Search processing language | A query language filters, stats, and charts events without exporting them first.
Indexes | Indexes | Events land in an index with a retention period and a sourcetype that says how to parse them.
Alerts | Scheduled alerts | A saved search runs on a timer and emails or pages when the count is too high.
Dashboards | Dashboards | Studio and classic dashboards pin searches as charts.
Apps | Apps | An app packages searches, dashboards, and field extractions for one product.
Forwarders | Forwarders | A forwarder on a machine ships logs to the indexers.
Security | Enterprise Security | A security app on top of the same indexes for detections and notable events.
Cloud | Splunk Cloud | The same search experience hosted, so the customer does not run the indexers.`,
    links: [["Product", "https://www.splunk.com/"], ["Docs", "https://docs.splunk.com/"]],
    alts: [["OpenSearch", "https://github.com/opensearch-project/OpenSearch", "Apache-2.0", "An open search engine often used for logs. You run the cluster."]],
  }),
  row({
    id: "new-relic",
    name: "New Relic",
    vendor: "New Relic",
    category: "Observability",
    summary: "An application-performance product for traces, errors, and browser timings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "A long-time APM choice for teams that want one agent in the application and a hosted UI.",
    licenseName: "New Relic terms",
    licenseNote: "The platform and the full agent experience are proprietary.",
    gap: "OpenTelemetry plus an open backend can trace a service. New Relic's curated UI is the gap.",
    features: `APM | Application traces | An agent records transactions and shows which method or query was slow.
Errors | Error inbox | Groups exceptions so a team triages one bug instead of one event per user.
Browser | Browser monitoring | A snippet times page loads and JavaScript errors in the browser.
Logs | Logs in context | Shows the logs that were written during a single trace.
Alerts | Alert conditions | Pages a person when an error rate or a latency percentile crosses a line.
Dashboards | Custom dashboards | Queries the same telemetry with NRQL and pins the chart.
Synthetics | Synthetic checks | A scripted browser or a ping hits an endpoint on a schedule.
Change | Change tracking | Marks a deploy on the chart so a regression lines up with a release.`,
    links: [["Product", "https://newrelic.com/"], ["Docs", "https://docs.newrelic.com/"]],
    alts: [["Grafana", "https://github.com/grafana/grafana", "AGPL-3.0", "An AGPL dashboard. SigNoz keeps a separate license under ee/, so it is not listed as one open grant."]],
  }),
  row({
    id: "dynatrace",
    name: "Dynatrace",
    vendor: "Dynatrace",
    category: "Observability",
    summary: "An enterprise observability platform that maps services and watches them with an agent.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "Sold to large IT estates that want one vendor to discover services and alert on them.",
    licenseName: "Dynatrace terms",
    licenseNote: "The platform, the OneAgent, and the Davis analysis are proprietary.",
    gap: "Open agents and a tracing backend can cover part of this. The automated topology and the suite are the gap.",
    features: `Agent | OneAgent | One agent on a host discovers processes and collects metrics, traces, and logs.
Topology | Smartscape | Draws which services call which, so an outage can be walked upstream.
Problems | Problem feed | Groups related alerts into one problem instead of a page per metric.
Traces | PurePaths | Follows a single user request across the services it touched.
Logs | Log monitoring | Ingests logs next to the traces from the same host.
Dashboards | Dashboards | Charts the same data for a team that wants a wall display.
Synthetics | Synthetic monitoring | Checks a URL or a click-path from outside the network.
Security | Runtime vulnerability | Flags a vulnerable library running in a process the agent already sees.`,
    links: [["Product", "https://www.dynatrace.com/"], ["Docs", "https://docs.dynatrace.com/"]],
    alts: [["Grafana", "https://github.com/grafana/grafana", "AGPL-3.0", "An open dashboard for metrics you already collect."]],
  }),
  row({
    id: "pagerduty",
    name: "PagerDuty",
    vendor: "PagerDuty",
    category: "Operations",
    summary: "An incident platform that pages the on-call person and tracks the response.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The product many on-call rotations mean when they say who gets paged at 3am.",
    licenseName: "PagerDuty terms",
    licenseNote: "The schedules, the mobile apps, and the incident workflow are proprietary.",
    gap: "An open on-call tool can rotate a schedule and send a page. PagerDuty's incident suite is the gap.",
    features: `Oncall | On-call schedules | A schedule says who is primary and who is secondary, including overrides for a holiday.
Escalation | Escalation policies | If the first person does not acknowledge, the page moves to the next step.
Alerts | Event intake | Monitoring tools post events, and routing rules decide which service they belong to.
Incidents | Incident records | An incident has a status, a commander, and a timeline of what was tried.
Mobile | Mobile app | The on-call person acknowledges or escalates from a phone.
Status | Status updates | Posts a customer-facing note while the incident is open.
Automation | Runbook automation | A response play can run a diagnostic job when an incident opens.
Analytics | Incident analytics | Reports how often a service pages and how long acknowledgement takes.`,
    links: [["Product", "https://www.pagerduty.com/"], ["Docs", "https://support.pagerduty.com/"]],
    alts: [["Grafana OnCall", "https://github.com/grafana/oncall", "AGPL-3.0", "An open on-call scheduler that pages from alerts you already have."]],
  }),
  row({
    id: "honeycomb",
    name: "Honeycomb",
    vendor: "Honeycomb",
    category: "Observability",
    summary: "A tracing product built around wide events and a query UI for high-cardinality data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Favored by teams that debug production by slicing one request many ways, not by a fixed dashboard.",
    licenseName: "Honeycomb terms",
    licenseNote: "The query service and the UI are proprietary. OpenTelemetry can send data in.",
    gap: "You can store wide events in an open columnar store. Honeycomb's query UI is the gap.",
    features: `Events | Wide events | One event can carry many fields, such as user id, endpoint, and a feature flag.
Query | BubbleUp and queries | A query groups by any field and compares a slow cohort with the rest.
Traces | Trace view | A waterfall shows spans in one request and which span was slow.
SLOs | Service level objectives | An SLO burns an error budget when latency or errors exceed the target.
Triggers | Triggers | An alert fires from a query, not only from a pre-aggregated metric.
Refinery | Sampling | A proxy keeps interesting traces and drops the rest so the bill stays bounded.
Boards | Boards | Pins the queries a team asks every Monday.
Open | OpenTelemetry in | Applications can send spans with OpenTelemetry instead of a private SDK only.`,
    links: [["Product", "https://www.honeycomb.io/"], ["Docs", "https://docs.honeycomb.io/"]],
    alts: [["Grafana", "https://github.com/grafana/grafana", "AGPL-3.0", "An AGPL dashboard for traces you already collect. SigNoz keeps a separate license under ee/."]],
  }),
  row({
    id: "snyk",
    name: "Snyk",
    vendor: "Snyk",
    category: "Security",
    summary: "A developer security product that scans code, dependencies, containers, and infrastructure as code.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The scanner many application teams meet first inside a pull request.",
    licenseName: "Snyk terms",
    licenseNote: "The vulnerability database service, the UI, and the hosted scans are proprietary.",
    gap: "Trivy and Grype can scan a lockfile or an image locally. Snyk's database service and the pull-request fixes are the gap.",
    features: `Open source | Dependency scan | Reads a lockfile and reports known vulnerabilities in libraries.
Code | Static analysis | Flags risky patterns in first-party code, not only in dependencies.
Containers | Image scan | Scans a container image for vulnerable packages in the base layers.
IaC | Infrastructure scan | Checks a Terraform or Kubernetes file for a misconfiguration before apply.
Pulls | Pull request checks | Comments on a pull request when a new dependency adds a vulnerability.
Fixes | Fix suggestions | Proposes an upgrade that clears a finding.
Reporting | Org reporting | Shows which projects still have a critical finding open.
Ignore | Ignore rules | A team can ignore a finding with a reason and an expiry.`,
    links: [["Product", "https://snyk.io/"], ["Docs", "https://docs.snyk.io/"]],
    alts: [["Trivy", "https://github.com/aquasecurity/trivy", "Apache-2.0", "An open scanner for dependencies, containers, and infrastructure files."]],
  }),
  row({
    id: "wiz",
    name: "Wiz",
    vendor: "Wiz",
    category: "Security",
    summary: "A cloud security platform that reads a cloud account and ranks the paths an attacker could take.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A widely bought cloud-security graph for companies with more than one cloud account.",
    licenseName: "Wiz terms",
    licenseNote: "The graph, the scanners, and the UI are proprietary.",
    gap: "Open cloud scanners can list misconfigurations. Wiz's attack-path graph across the estate is the gap.",
    features: `Graph | Security graph | Connects identities, networks, data stores, and vulnerabilities into one graph.
Posture | Cloud posture | Checks an account against benchmarks and lists the failing controls.
Workloads | Workload scan | Scans virtual machines and containers without putting an agent on every host.
Identity | Identity risks | Finds an identity that can reach a sensitive datastore from the internet.
Issues | Issues | Groups findings into an issue a person can assign and track.
Detections | Threat detections | Raises an event when a runtime signal matches a known attack pattern.
Code | Infrastructure code | Scans Terraform in the repository before it creates the risky resource.
Reports | Compliance reports | Exports a report for a framework such as SOC 2 or PCI.`,
    links: [["Product", "https://www.wiz.io/"], ["Docs", "https://docs.wiz.io/"]],
    alts: [["Prowler", "https://github.com/prowler-cloud/prowler", "Apache-2.0", "An open cloud-security scanner for AWS, Azure, and Google Cloud."]],
  }),
  row({
    id: "crowdstrike",
    name: "CrowdStrike Falcon",
    vendor: "CrowdStrike",
    category: "Security",
    summary: "An endpoint security platform that watches processes on laptops and servers from a cloud console.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current end-user total is not cited on this card.",
    reach: "One of the endpoint products large companies deploy when they replace a traditional antivirus.",
    licenseName: "CrowdStrike terms",
    licenseNote: "The sensor and the cloud console are proprietary.",
    gap: "An open EDR can collect process events. Falcon's sensor, cloud detections, and the console are the gap.",
    features: `Sensor | Falcon sensor | A sensor on the device records process, file, and network activity.
Detect | Detections | The cloud raises a detection when that activity matches a behavior.
Respond | Real time response | An analyst can pull a file or kill a process on a host from the console.
Intel | Threat intelligence | Attaches a named adversary or a malware family to a detection.
Identity | Identity protection | Watches directory activity, such as a risky sign-in, next to the endpoint.
Cloud | Cloud security | Extends the same console to cloud workload findings.
Discover | Asset inventory | Lists the hosts that have a sensor and the software installed on them.
Prevent | Prevention policies | A policy can block a known-bad behavior instead of only alerting.`,
    links: [["Product", "https://www.crowdstrike.com/"], ["Docs", "https://falcon.crowdstrike.com/documentation/"]],
    alts: [["Wazuh", "https://github.com/wazuh/wazuh", "GPL-2.0", "An open endpoint detection platform you host."]],
  }),
  row({
    id: "sentinelone",
    name: "SentinelOne",
    vendor: "SentinelOne",
    category: "Security",
    summary: "An autonomous endpoint product that detects and can roll back malware on a device.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current end-user total is not cited on this card.",
    reach: "A frequent alternative to CrowdStrike in endpoint shortlists.",
    licenseName: "SentinelOne terms",
    licenseNote: "The agent and the console are proprietary.",
    gap: "Open endpoint agents exist. SentinelOne's behavioral engine and the rollback feature are the gap.",
    features: `Agent | Endpoint agent | An agent watches processes and files on Windows, macOS, and Linux.
Storyline | Storyline | Groups the events of one attack into a single story instead of isolated alerts.
Rollback | Rollback | Can restore files changed by ransomware to a previous state on that device.
Hunt | Threat hunting | An analyst searches process history across the fleet.
Network | Network control | A policy can block an application from reaching the network.
Vulns | Vulnerability view | Lists vulnerable applications found on the same agents.
Cloud | Cloud workloads | Protects cloud virtual machines with the same console.
Response | Remote shell | Responds on a host from the console during an investigation.`,
    links: [["Product", "https://www.sentinelone.com/"], ["Docs", "https://www.sentinelone.com/platform/"]],
    alts: [["Wazuh", "https://github.com/wazuh/wazuh", "GPL-2.0", "An open detection platform for endpoints and logs."]],
  }),
  row({
    id: "zscaler",
    name: "Zscaler",
    vendor: "Zscaler",
    category: "Security",
    summary: "A cloud proxy that sends employee traffic through Zscaler instead of a traditional VPN concentrator.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "A common zero-trust replacement for the corporate VPN at large companies.",
    licenseName: "Zscaler terms",
    licenseNote: "The cloud proxy, the client connector, and the policy engine are proprietary.",
    gap: "A proxy you run can filter traffic. Zscaler's global cloud and the policy console are the gap.",
    features: `Web | Secure web gateway | Employee web traffic is inspected in the cloud against policy and threat feeds.
Private | Private access | A user reaches an internal application without a full network VPN.
Client | Client connector | A lightweight client on the laptop steers traffic to the nearest cloud node.
Policy | URL and app policy | Rules allow or block categories, tenants, or specific SaaS applications.
SSL | TLS inspection | Decrypts TLS where policy allows, so a download can be scanned.
Posture | Device posture | A rule can require disk encryption before private access is granted.
Logs | Logs and reports | Security staff search who visited which site.
Deception | Deception | Optional decoys sit in the private network to catch an intruder who scans it.`,
    links: [["Product", "https://www.zscaler.com/"], ["Docs", "https://help.zscaler.com/"]],
    alts: [["Traefik", "https://github.com/traefik/traefik", "MIT", "An open proxy for services you run. It is not a global secure-web gateway."]],
  }),
  row({
    id: "cloudflare",
    name: "Cloudflare",
    vendor: "Cloudflare",
    category: "Infrastructure",
    summary: "A network platform for DNS, CDN, WAF, and Workers in front of a public site or API.",
    users: "Not disclosed as one user total",
    revenue: "Not disclosed on this card",
    scaleNote: "Public company. A single consumer-user total is not cited here. Revenue is reported by Cloudflare each quarter.",
    reach: "The proxy in front of a huge share of the public web, from small sites to large APIs.",
    licenseName: "Cloudflare terms",
    licenseNote: "The network, the dashboard, and most paid products are proprietary. Some developer pieces are open; the service is not.",
    gap: "You can run a reverse proxy and a DNS server. Cloudflare's anycast network and the dashboard are the gap.",
    features: `DNS | Authoritative DNS | Hosts the DNS zone and answers queries on Cloudflare's network.
Proxy | Reverse proxy | Terminates TLS and caches static responses at the edge.
WAF | Web application firewall | Blocks requests that match a managed ruleset or a custom rule.
Workers | Workers | Runs a JavaScript or WebAssembly function at the edge, in front of the origin.
ZeroTrust | Access | Puts a login wall in front of an internal hostname without a VPN.
R2 | Object storage | Stores objects with an S3-compatible API on Cloudflare's network.
Pages | Pages | Builds and serves a static site from a Git repository.
Analytics | Traffic analytics | Shows requests, cache hit rate, and threats on the zone.`,
    links: [["Product", "https://www.cloudflare.com/"], ["Docs", "https://developers.cloudflare.com/"]],
    alts: [["Caddy", "https://github.com/caddyserver/caddy", "Apache-2.0", "An open web server with automatic HTTPS. You host it."]],
  }),
  row({
    id: "fastly",
    name: "Fastly",
    vendor: "Fastly",
    category: "Infrastructure",
    summary: "An edge cloud and CDN aimed at teams that want to program the cache in front of their origin.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current customer total is not cited on this card.",
    reach: "Used by media and API companies that care about purge speed and edge logic.",
    licenseName: "Fastly terms",
    licenseNote: "The edge network and the Compute platform are proprietary.",
    gap: "A CDN you configure, or a proxy you run, can cache. Fastly's edge program and the global purge are the gap.",
    features: `CDN | CDN cache | Caches responses at the edge and serves them without hitting the origin.
Purge | Instant purge | Invalidates a URL or a surrogate key across the network when content changes.
VCL | Edge configuration | A configuration language decides what to cache and what to pass through.
Compute | Compute | Runs a program at the edge for routing, auth, or a response transform.
TLS | TLS termination | Serves certificates at the edge so the origin sees less handshake load.
Image | Image optimizer | Resizes an image at the edge instead of storing every size at the origin.
Logs | Real-time logs | Streams request logs to a bucket or a logging vendor.
WAF | Next-gen WAF | Inspects requests at the edge for application attacks.`,
    links: [["Product", "https://www.fastly.com/"], ["Docs", "https://www.fastly.com/documentation/"]],
    alts: [["Varnish", "https://github.com/varnishcache/varnish-cache", "BSD-2-Clause", "An open caching proxy. You operate the machines."]],
  }),
  row({
    id: "vercel",
    name: "Vercel",
    vendor: "Vercel",
    category: "Infrastructure",
    summary: "A hosting platform for frontend and full-stack apps, best known for Next.js deploys.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The default place many Next.js apps are deployed, from side projects to company marketing sites.",
    licenseName: "Vercel terms",
    licenseNote: "The hosting platform, the dashboard, and the build network are proprietary. Next.js itself is open source.",
    gap: "You can host Next.js on any Node server. Vercel's preview deployments and the edge network are the gap.",
    features: `Git | Git deploys | A push to a branch builds the project and publishes a deployment.
Preview | Preview URLs | Every pull request gets a URL that runs that exact commit.
Edge | Edge network | Static files and some functions are served from a global network.
Functions | Serverless functions | An API route runs as a function without a long-lived server to patch.
Domains | Domains and TLS | Attaches a custom domain and provisions a certificate.
Env | Environment variables | Sets different secrets for preview, development, and production.
Analytics | Web analytics | A first-party analytics snippet reports page views without a separate vendor.
Rollback | Instant rollback | Points production back at a previous deployment.`,
    links: [["Product", "https://vercel.com/"], ["Docs", "https://vercel.com/docs"]],
    alts: [["Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open self-hosted platform that deploys apps from Git."]],
  }),
  row({
    id: "netlify",
    name: "Netlify",
    vendor: "Netlify",
    category: "Infrastructure",
    summary: "A Git-based host for static sites and serverless functions, with form handling and previews.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A common host for documentation sites, marketing sites, and Jamstack apps.",
    licenseName: "Netlify terms",
    licenseNote: "The build network, the CDN, and the dashboard are proprietary.",
    gap: "A static host you run can serve the files. Netlify's build bot, forms, and preview URLs are the gap.",
    features: `Build | Git builds | Connects a repository and runs the build command on every push.
Preview | Deploy previews | Opens a unique URL for a pull request so reviewers can click through the built site before it merges.
CDN | Global CDN | Serves the built files from a CDN with a certificate.
Functions | Functions | Runs a serverless function next to the static files.
Forms | Form handling | Accepts an HTML form post without a separate backend.
Identity | Identity | Adds a login widget for a gated page and stores those visitor accounts on Netlify rather than in your app.
Redirects | Redirect rules | A file in the repo maps old paths to new ones and sets headers.
Split | Split testing | Serves two branches to different slices of traffic.`,
    links: [["Product", "https://www.netlify.com/"], ["Docs", "https://docs.netlify.com/"]],
    alts: [["Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open platform for deploying sites from Git onto your servers."]],
  }),
  row({
    id: "heroku",
    name: "Heroku",
    vendor: "Salesforce",
    category: "Infrastructure",
    summary: "A platform that runs an app from a Git push onto managed dynos.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Salesforce. Heroku revenue is not split out on this card.",
    reach: "The platform a generation of web apps used when they wanted a database and a web process without servers.",
    licenseName: "Heroku terms",
    licenseNote: "The platform, the buildpacks service, and the add-on marketplace are proprietary.",
    gap: "Coolify or a container host can run the same app. Heroku's add-on marketplace and the dyno model are the gap.",
    features: `Dynos | Dynos | A web or worker process runs in a dyno that can be scaled up by count.
Git | Git push deploy | A git push to the Heroku remote builds and releases the app.
Buildpacks | Buildpacks | Detects the language and produces a slug without a Dockerfile.
Addons | Add-on marketplace | Attaches a database, a cache, or a log drain from a partner.
Pipelines | Pipelines | Promotes a slug from a review app to staging and then production.
Config | Config vars | Sets environment variables per app so a secret or a database URL is injected at boot and is not committed.
Review | Review apps | Spins up an app for a pull request and deletes it when the request closes.
Logs | Logplex | Tails application logs from the CLI or a drain.`,
    links: [["Product", "https://www.heroku.com/"], ["Docs", "https://devcenter.heroku.com/"]],
    alts: [["Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open self-hosted alternative to a push-to-deploy platform."]],
  }),
  row({
    id: "render",
    name: "Render",
    vendor: "Render",
    category: "Infrastructure",
    summary: "A cloud for web services, static sites, cron jobs, and managed databases.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A frequent choice for teams that want Heroku-like deploys with a Dockerfile or a native runtime.",
    licenseName: "Render terms",
    licenseNote: "The platform and the managed data services are proprietary.",
    gap: "You can run the same containers on a VM. Render's preview environments and managed Postgres are the gap.",
    features: `Services | Web services | Runs a web process from a repo or an image, with a health check and autoscaling.
Static | Static sites | Builds a frontend and serves it on a CDN.
Workers | Background workers | Runs a queue worker that does not listen on the public internet.
Cron | Cron jobs | Runs a command on a schedule and keeps the logs.
Datastores | Managed Postgres and Redis | Provisions a database next to the service and injects the connection string.
Previews | Preview environments | Creates a temporary stack for a pull request.
Env | Environment groups | Shares a set of secrets across several services.
Disks | Persistent disks | Attaches a disk when a service needs local files, not only a database.`,
    links: [["Product", "https://render.com/"], ["Docs", "https://render.com/docs"]],
    alts: [["Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open panel that deploys Docker apps on servers you own."]],
  }),
  row({
    id: "railway",
    name: "Railway",
    vendor: "Railway",
    category: "Infrastructure",
    summary: "A project-based host that deploys services from a repo and wires their variables together.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Popular with small teams that want a database and an app in one project canvas.",
    licenseName: "Railway terms",
    licenseNote: "The Railway dashboard and the hosted runtime are proprietary.",
    gap: "A Docker host you run can start the same services. Railway's canvas and usage billing are the gap.",
    features: `Projects | Project canvas | A project holds services, databases, and the variables that connect them.
Deploy | Repo deploy | A push builds the service with Nixpacks or a Dockerfile.
Databases | One-click databases | Adds Postgres, Redis, or MySQL without a separate account.
Variables | Shared variables | A variable reference wires one service's host into another's environment.
Environments | Environments | Production and a PR environment can exist in the same project.
Usage | Usage billing | The bill follows CPU, memory, and egress rather than a fixed dyno size only.
Observability | Logs and metrics | Each service has logs and a basic resource chart.
Templates | Templates | Starts a common stack, such as an app plus a database, from a template.`,
    links: [["Product", "https://railway.com/"], ["Docs", "https://docs.railway.com/"]],
    alts: [["Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open self-hosted deploy panel."]],
  }),
  row({
    id: "digitalocean",
    name: "DigitalOcean",
    vendor: "DigitalOcean",
    category: "Infrastructure",
    summary: "A developer cloud of droplets, managed Kubernetes, databases, and spaces.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current customer total is not cited on this card.",
    reach: "The cloud many small teams pick when a full AWS account is more console than they want.",
    licenseName: "DigitalOcean terms",
    licenseNote: "The cloud control plane and the managed services are proprietary.",
    gap: "A VPS from any host can run a VM. DigitalOcean's managed database, Kubernetes, and the app platform are the gap.",
    features: `Droplets | Droplets | A virtual machine with a chosen size, image, and region, billed by the hour.
Kubernetes | DOKS | A managed Kubernetes cluster with a control plane DigitalOcean operates.
Databases | Managed databases | Postgres, MySQL, Redis, and Kafka clusters with backups.
Spaces | Spaces | S3-compatible object storage for files and backups.
App | App Platform | Builds an app from Git and runs it without managing the droplet.
Networking | VPC and load balancers | Private networking between droplets and a load balancer in front.
Firewalls | Cloud firewalls | Rules that allow ports without logging into each machine.
Volumes | Block volumes | Attaches extra disk to a droplet and keeps it if the droplet is rebuilt.`,
    links: [["Product", "https://www.digitalocean.com/"], ["Docs", "https://docs.digitalocean.com/"]],
    alts: [["Incus", "https://github.com/lxc/incus", "Apache-2.0", "An open system for virtual machines and containers on hardware you own."]],
  }),
  row({
    id: "databricks",
    name: "Databricks",
    vendor: "Databricks",
    category: "Data",
    summary: "A lakehouse platform for Spark jobs, SQL warehouses, notebooks, and model serving.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The platform many data teams use when the warehouse and the Spark jobs need to live on the same tables.",
    licenseName: "Databricks terms",
    licenseNote: "The workspace, the runtime, and the managed control plane are proprietary. Spark itself is open source.",
    gap: "You can run Spark and a query engine yourself. Databricks' workspace, Unity Catalog, and the managed runtime are the gap.",
    features: `Notebooks | Notebooks | A notebook mixes SQL, Python, and markdown on a cluster attached to the workspace.
Jobs | Jobs | Schedules a notebook or a jar and retries it when a task fails.
SQL | SQL warehouses | A warehouse runs SQL on the same tables the notebooks use.
Catalog | Unity Catalog | Governs tables, files, and models with one permission model across workspaces.
Delta | Delta tables | Tables keep a transaction log so a reader sees a consistent version.
Serving | Model serving | Hosts a model behind an endpoint the application can call.
Workflows | Workflows | A DAG of tasks passes data from an ingest job to a publish job.
Marketplace | Marketplace | Shares a dataset or a model with another account without copying the files by hand.`,
    links: [["Product", "https://www.databricks.com/"], ["Docs", "https://docs.databricks.com/"]],
    alts: [["Apache Spark", "https://github.com/apache/spark", "Apache-2.0", "The open engine. You bring the cluster, the catalog, and the notebook UI."]],
  }),
  row({
    id: "bigquery",
    name: "BigQuery",
    vendor: "Google",
    category: "Data",
    summary: "Google's serverless warehouse, where a query runs against columns you do not provision as a cluster.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Google Cloud. BigQuery revenue is not reported as its own line.",
    reach: "The warehouse inside a huge number of companies that already keep data in Google Cloud.",
    licenseName: "Google Cloud terms",
    licenseNote: "BigQuery is a proprietary service. The SQL dialect and the storage are not an open product.",
    gap: "DuckDB or ClickHouse can query local files. BigQuery's serverless scale and the Google IAM tie-in are the gap.",
    features: `SQL | Standard SQL | Analysts write SQL, including nested fields and window functions, against tables in a dataset.
Storage | Columnar storage | Data sits in columnar files so a query reads only the columns it names.
Slots | Slot capacity | A reservation buys compute, or the project pays per byte scanned.
Load | Batch and streaming load | Files from Cloud Storage or a streaming insert land in a table.
Scheduled | Scheduled queries | A query runs on a timer and writes the result to another table.
BI | Connected sheets and Looker | Sheets and Looker can query the same tables with the warehouse's permissions.
ML | BigQuery ML | Trains a model with SQL instead of exporting the table to another system.
Omni | Cross-cloud query | A query can read data that still lives in another cloud's storage.`,
    links: [["Product", "https://cloud.google.com/bigquery"], ["Docs", "https://cloud.google.com/bigquery/docs"]],
    alts: [["ClickHouse", "https://github.com/ClickHouse/ClickHouse", "Apache-2.0", "An open columnar database you operate."]],
  }),
  row({
    id: "redshift",
    name: "Amazon Redshift",
    vendor: "Amazon",
    category: "Data",
    summary: "Amazon's columnar warehouse for SQL analytics inside a VPC.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of AWS. Redshift revenue is not reported alone.",
    reach: "The warehouse teams pick when the rest of the data already lives in S3 and IAM.",
    licenseName: "AWS terms",
    licenseNote: "Redshift is a proprietary managed warehouse.",
    gap: "ClickHouse or Postgres can answer SQL. Redshift's managed cluster and the S3 integration are the gap.",
    features: `Clusters | Provisioned clusters | A cluster of nodes stores the tables and runs the queries.
Serverless | Serverless workgroups | A workgroup scales compute without a cluster you size by hand.
Spectrum | Spectrum | A query reads files in S3 without loading them into the cluster first.
Unload | Unload to S3 | Writes a query result back to S3 as files.
Materialized | Materialized views | Stores the result of a heavy query and refreshes it.
WLM | Workload management | Queues stop one dashboard from starving the nightly ETL.
Shares | Data sharing | Another account can query a table without a copy.
IAM | IAM authentication | The same AWS identity that can read S3 can run the query.`,
    links: [["Product", "https://aws.amazon.com/redshift/"], ["Docs", "https://docs.aws.amazon.com/redshift/"]],
    alts: [["ClickHouse", "https://github.com/ClickHouse/ClickHouse", "Apache-2.0", "An open columnar engine you run yourself."]],
  }),
  row({
    id: "looker",
    name: "Looker",
    vendor: "Google",
    category: "Analytics",
    summary: "A semantic-layer BI tool where metrics are defined in LookML and explored in the browser.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Google. Looker revenue is not split out on this card.",
    reach: "The BI tool data teams choose when they want one definition of revenue, not a metric copied into every dashboard.",
    licenseName: "Looker terms",
    licenseNote: "Looker and LookML hosting are proprietary.",
    gap: "A dbt model plus an open BI tool can define a metric. Looker's explorer and the governed layer are the gap.",
    features: `LookML | LookML models | A model file defines views, joins, and measures the explorer is allowed to use.
Explore | Explores | A user pivots dimensions and measures without writing SQL by hand.
Looks | Saved looks | A saved query can be a tile on a dashboard.
Dashboards | Dashboards | Tiles share filters, such as a date range, across the page.
Embeds | Embedded analytics | A dashboard can be embedded in another product with a signed URL.
Git | Git integration | LookML changes go through a branch and a pull request.
Schedule | Scheduled deliveries | A dashboard arrives by email or a webhook on a schedule.
Permissions | Content permissions | A folder of looks can be limited to one team.`,
    links: [["Product", "https://cloud.google.com/looker"], ["Docs", "https://cloud.google.com/looker/docs"]],
    alts: [["Apache Superset", "https://github.com/apache/superset", "Apache-2.0", "An open BI app on top of the warehouse you already run."]],
  }),
  row({
    id: "tableau",
    name: "Tableau",
    vendor: "Salesforce",
    category: "Analytics",
    summary: "A visual analytics product for dragging fields onto a canvas and publishing the workbook.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Salesforce. Tableau revenue is not cited alone on this card.",
    reach: "Still the charting tool many analysts mean when they say build a dashboard for the exec meeting.",
    licenseName: "Tableau terms",
    licenseNote: "Tableau Desktop and Tableau Cloud are proprietary.",
    gap: "Superset or Metabase can chart a SQL table. Tableau's visual canvas and the extract engine are the gap.",
    features: `Sheets | Worksheets | A sheet maps dimensions and measures to rows, columns, color, and size.
Dashboards | Dashboards | Several sheets share filters on one page.
Extracts | Extracts | A packaged extract lets a workbook run when the live database is slow or offline.
Prep | Tableau Prep | Cleans and joins files before they become a data source.
Publish | Publish to Cloud | A workbook published to Tableau Cloud or Server keeps the permissions of that site.
Ask | Ask Data and explanations | A viewer can ask a question of a published data source in plain language.
Alerts | Data alerts | An email fires when a mark crosses a threshold.
Catalog | Data catalog | Lists which workbooks depend on a given column.`,
    links: [["Product", "https://www.tableau.com/"], ["Docs", "https://help.tableau.com/"]],
    alts: [["Apache Superset", "https://github.com/apache/superset", "Apache-2.0", "An open charting app you host on your warehouse."]],
  }),
  row({
    id: "mode",
    name: "Mode",
    vendor: "Mode",
    category: "Analytics",
    summary: "A SQL notebook and report product aimed at analysts who write the query themselves.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by analytics teams that want a query, a chart, and a written report in one link.",
    licenseName: "Mode terms",
    licenseNote: "The notebook, the report viewer, and the hosted Python runtime are proprietary.",
    gap: "A notebook and a warehouse you run can do the analysis. Mode's sharing and the scheduled report are the gap.",
    features: `SQL | SQL editor | An analyst writes SQL against a connected warehouse and sees the result grid.
Notebooks | Python notebooks | A notebook cell can use the query result as a dataframe.
Reports | Reports | A report mixes charts, text, and query results into a page a stakeholder can open.
Charts | Visual explorer | Builds a chart from a query result without leaving the report.
Schedule | Scheduled runs | The queries refresh on a timer so the report is not stale.
Collections | Collections | Groups reports for a team or a metric review.
Permissions | Database permissions | Uses the warehouse credentials the workspace admin connected.
Embeds | Private links | Shares a report with people inside the workspace.`,
    links: [["Product", "https://mode.com/"], ["Docs", "https://mode.com/help/"]],
    alts: [["Apache Superset", "https://github.com/apache/superset", "Apache-2.0", "An open SQL and charting app."]],
  }),
  row({
    id: "amplitude",
    name: "Amplitude",
    vendor: "Amplitude",
    category: "Analytics",
    summary: "A product-analytics suite for event funnels, retention, and experiment results.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "A default analytics tool for product managers who instrument clicks and want a funnel.",
    licenseName: "Amplitude terms",
    licenseNote: "The analytics service and the UI are proprietary.",
    gap: "PostHog's open core can chart events you host. Amplitude's warehouse and the session tools are the gap.",
    features: `Events | Event taxonomy | Events and properties are named once and reused in every chart.
Funnels | Funnels | A funnel shows how many people finished each step, and where they dropped.
Retention | Retention | A chart shows who came back on day one, day seven, and day thirty.
Cohorts | Cohorts | A saved definition, such as paid users in Germany, can filter any chart.
Sessions | Session replay | A replay shows what the screen did for one user's session.
Experiments | Experiments | Compares a metric between a control group and a variant.
CDP | Audiences | Syncs a cohort to an ad tool or a messaging tool.
Governance | Taxonomy governance | Flags an event that arrived with a property the plan did not expect.`,
    links: [["Product", "https://amplitude.com/"], ["Docs", "https://amplitude.com/docs"]],
    alts: [["PostHog", "https://github.com/PostHog/posthog", "MIT", "An open product-analytics suite you can host."]],
  }),
  row({
    id: "mixpanel",
    name: "Mixpanel",
    vendor: "Mixpanel",
    category: "Analytics",
    summary: "An event-analytics product for funnels, retention, and user profiles.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A long-running product-analytics tool for teams that track named events from a mobile or web app.",
    licenseName: "Mixpanel terms",
    licenseNote: "The Mixpanel service and its analysis UI are proprietary.",
    gap: "An open event pipeline and a warehouse can answer the same questions. Mixpanel's UI is the gap.",
    features: `Insights | Insights | A chart counts an event, broken down by a property such as plan or country.
Funnels | Funnels | Orders events into steps and shows the conversion between them.
Retention | Retention | Measures how many users did an event again after the first time.
Profiles | User profiles | A profile stores the properties and the event history of one person.
Cohorts | Cohorts | Saves a group from a chart and uses it as a filter elsewhere.
Lexicon | Lexicon | Documents what each event means so the next analyst does not guess.
Alerts | Custom alerts | Sends a message when a metric moves more than a threshold.
Warehouse | Warehouse connectors | Imports events into the product or exports them to a warehouse.`,
    links: [["Product", "https://mixpanel.com/"], ["Docs", "https://docs.mixpanel.com/"]],
    alts: [["PostHog", "https://github.com/PostHog/posthog", "MIT", "An open analytics product with funnels and retention."]],
  }),
  row({
    id: "segment",
    name: "Segment",
    vendor: "Twilio",
    category: "Data",
    summary: "A customer-data pipeline that collects events from apps and forwards them to other tools.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Twilio. Segment revenue is not cited alone on this card.",
    reach: "The pipe many companies put in front of analytics, ads, and the warehouse so each app emits one event stream.",
    licenseName: "Segment terms",
    licenseNote: "Segment is proprietary. The open-source analytics libraries are clients, not the pipeline.",
    gap: "RudderStack's open server can forward events. Segment's protocols and the hosted connections are the gap.",
    features: `Sources | Sources | A website, a mobile app, or a server sends identify and track calls to one source.
Destinations | Destinations | The same event is forwarded to a warehouse, an ad network, or an analytics tool.
Protocols | Protocols | A tracking plan rejects an event that is missing a required property.
Identity | Identity resolution | Merges anonymous and logged-in events into one profile.
Functions | Destination functions | A small function reshapes an event before it is delivered.
Replay | Replay | Sends historical events to a new destination without changing the app.
Warehouses | Warehouse sync | Loads tables of tracks, identifies, and pages into a warehouse.
Debugger | Event debugger | Shows the last events that arrived, including the ones a destination rejected.`,
    links: [["Product", "https://segment.com/"], ["Docs", "https://segment.com/docs/"]],
    alts: [["RudderStack", "https://github.com/rudderlabs/rudder-server", "Elastic-2.0", "The server is source-available under the Elastic License, not an OSI license. It is a real pipeline you can run, with that limit."]],
  }),
  row({
    id: "fivetran",
    name: "Fivetran",
    vendor: "Fivetran",
    category: "Data",
    summary: "A managed ELT service that copies SaaS and database tables into a warehouse.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The connector vendor data teams name when they do not want to maintain one script per SaaS API.",
    licenseName: "Fivetran terms",
    licenseNote: "The connectors and the hosted service are proprietary.",
    gap: "You can write an ingest job. Fivetran's catalog of maintained connectors is the gap.",
    features: `Connectors | Connector catalog | A connector logs into a source such as Salesforce, Stripe, or Postgres and reads the tables.
Schema | Schema migration | Adds a column in the destination when the source adds a field.
Sync | Incremental syncs | A cursor copies only the rows that changed since the last run.
Destinations | Warehouse destinations | Writes the tables into Snowflake, BigQuery, Redshift, or Databricks.
Transformations | dbt integration | Triggers a dbt job after the sync finishes.
Logs | Sync logs | Shows which table failed and which API error the source returned.
Governance | Column blocking | Stops a sensitive column from landing in the warehouse.
Scheduling | Sync frequency | A connector can run every few minutes or once a night.`,
    links: [["Product", "https://www.fivetran.com/"], ["Docs", "https://fivetran.com/docs"]],
    alts: [["Meltano", "https://github.com/meltano/meltano", "MIT", "An open ELT runner. You still maintain the taps."]],
  }),
  row({
    id: "dbt-cloud",
    name: "dbt Cloud",
    vendor: "dbt Labs",
    category: "Data",
    summary: "The hosted version of dbt, for building, testing, and documenting warehouse models.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The scheduler and IDE many teams use on top of dbt Core, which itself is open source.",
    licenseName: "dbt Cloud terms",
    licenseNote: "dbt Core is Apache-2.0. dbt Cloud, the IDE, and the scheduler are proprietary.",
    gap: "dbt Core plus a cron job and a CI runner covers the models. The hosted IDE and the semantic layer service are the gap.",
    features: `IDE | Browser IDE | Edits a model, compiles it, and previews the rows without a local install.
Jobs | Jobs | Runs a selection of models on a schedule or when the Git branch changes.
Tests | Tests | A job fails when a not-null or a unique test fails.
Docs | Docs site | Generates a lineage graph and a description for each model.
CI | Continuous integration | Builds only the models a pull request changed, in a schema for that request.
Semantic | Semantic layer | Defines a metric once and serves it to a BI tool.
Explorer | Explorer | A stakeholder browses the lineage without opening the Git repo.
Develop | Development schema | Each developer writes to their own schema so they do not clobber production.`,
    links: [["Product", "https://www.getdbt.com/product/dbt-cloud"], ["Docs", "https://docs.getdbt.com/"]],
    alts: [["dbt Core", "https://github.com/dbt-labs/dbt-core", "Apache-2.0", "The open compiler and runner. You schedule it yourself."]],
  }),
  row({
    id: "confluent",
    name: "Confluent Cloud",
    vendor: "Confluent",
    category: "Data",
    summary: "A hosted Kafka service with schema registry, connectors, and stream processing.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The Kafka service companies buy when they do not want to operate brokers.",
    licenseName: "Confluent terms",
    licenseNote: "Apache Kafka is open source. Confluent Cloud and several Confluent components are proprietary.",
    gap: "You can run Apache Kafka. The managed brokers, the commercial connectors, and the cloud UI are the gap.",
    features: `Clusters | Managed clusters | A cluster of brokers is patched and scaled by Confluent.
Topics | Topics and partitions | Producers append records to a topic, and consumers read them in order.
Schema | Schema registry | A schema is stored and checked so a producer cannot break a consumer.
Connect | Managed connectors | A connector copies a database table into a topic or the reverse.
Flink | Stream processing | A SQL job transforms a stream without a separate cluster you run.
ksql | ksqlDB | A continuous query writes a new topic from an existing one.
Governance | Stream governance | A catalog lists topics and who produces them.
Network | Private networking | Clients in your VPC reach the brokers without the public internet.`,
    links: [["Product", "https://www.confluent.io/"], ["Docs", "https://docs.confluent.io/"]],
    alts: [["Apache Kafka", "https://github.com/apache/kafka", "Apache-2.0", "The open log. You operate the brokers."]],
  }),
  row({
    id: "auth0",
    name: "Auth0",
    vendor: "Okta",
    category: "Identity",
    summary: "A hosted login service for applications that do not want to store passwords themselves.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Okta. Auth0 revenue is not cited alone on this card.",
    reach: "The login box in a huge number of SaaS apps, often still branded Auth0 after the Okta acquisition.",
    licenseName: "Auth0 terms",
    licenseNote: "The hosted service is proprietary. Some SDK source is open; the tenant is not.",
    gap: "Keycloak can host login, users, and social connections. Auth0's hosted rules and the dashboard are the gap.",
    features: `Universal | Universal Login | A hosted page handles email, password, and social login so the app never sees the password.
Connections | Social connections | Google, Apple, or a SAML identity provider can sign the user in.
Actions | Actions | A function runs at login to add a claim, block a user, or call another API.
Organizations | Organizations | One tenant can host many customer companies, each with its own connections.
MFA | Multi-factor | A second step can be a push, a code, or a WebAuthn key.
Users | User store | The dashboard searches users and blocks one without a database migration.
Tokens | API tokens | The app receives an ID token and an access token after login.
Attack | Attack protection | Blocks a credential-stuffing burst against the login page.`,
    links: [["Product", "https://auth0.com/"], ["Docs", "https://auth0.com/docs"]],
    alts: [["Keycloak", "https://github.com/keycloak/keycloak", "Apache-2.0", "An open identity server you host."]],
  }),
  row({
    id: "clerk",
    name: "Clerk",
    vendor: "Clerk",
    category: "Identity",
    summary: "A developer login product with prebuilt components for user accounts and organizations.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A common login choice in new Next.js and React apps that want components instead of a protocol tutorial.",
    licenseName: "Clerk terms",
    licenseNote: "The hosted users, the components' backend, and the dashboard are proprietary.",
    gap: "Keycloak or an open auth library can issue sessions. Clerk's components and the hosted user console are the gap.",
    features: `Components | Prebuilt components | A sign-in and a user-button component drop into a React app.
Users | User management | The dashboard lists users, sessions, and the providers they used.
Orgs | Organizations | A user can belong to an organization with roles such as admin and member.
Sessions | Session tokens | The app reads the session on the server without building the cookie format.
Social | Social providers | Google, GitHub, and other providers are toggled in the dashboard.
MFA | Multi-factor | Users can add a second factor from the account component.
Webhooks | Webhooks | The app is told when a user is created or deleted.
Restrictions | Allowlists | Sign-up can be limited to an email domain or an invite.`,
    links: [["Product", "https://clerk.com/"], ["Docs", "https://clerk.com/docs"]],
    alts: [["Keycloak", "https://github.com/keycloak/keycloak", "Apache-2.0", "An open identity server with hosted login pages you run."]],
  }),
  row({
    id: "firebase",
    name: "Firebase",
    vendor: "Google",
    category: "Infrastructure",
    summary: "Google's app backend for auth, a document database, file storage, and push messaging.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Google. Firebase revenue is not reported alone.",
    reach: "The backend behind a huge number of mobile apps that did not stand up their own servers.",
    licenseName: "Firebase terms",
    licenseNote: "The hosted Firebase services are proprietary. Some client SDKs are open; the project is not.",
    gap: "Appwrite or PocketBase can cover auth, a database, and files. Firebase's scale and the Google tie-in are the gap.",
    features: `Auth | Authentication | Email, phone, and social providers issue a user id the other services trust.
Firestore | Cloud Firestore | A document database with security rules that run on each read and write.
Storage | Cloud Storage | Uploads files against a rule that checks the signed-in user.
Functions | Cloud Functions | A function runs when a document changes or an HTTPS request arrives.
Messaging | Cloud Messaging | Sends a push notification to a device token.
Hosting | Hosting | Serves a static site on a global CDN with a config file in the repo.
Crash | Crashlytics | Groups crash reports from the mobile app.
Remote | Remote Config | Changes a flag in the app without shipping a new binary.`,
    links: [["Product", "https://firebase.google.com/"], ["Docs", "https://firebase.google.com/docs"]],
    alts: [["Appwrite", "https://github.com/appwrite/appwrite", "BSD-3-Clause", "An open backend for auth, databases, and storage."]],
  }),
  row({
    id: "algolia",
    name: "Algolia",
    vendor: "Algolia",
    category: "Infrastructure",
    summary: "A hosted search API for product catalogs, docs, and in-app search boxes.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The search box on a large number of documentation sites and online stores.",
    licenseName: "Algolia terms",
    licenseNote: "The hosted index and the API are proprietary.",
    gap: "The Meilisearch repository splits an engine from an enterprise edition under the Business Source License. Algolia's hosted relevance and the dashboard are the gap.",
    features: `Index | Indexes | Records are pushed into an index with attributes you mark as searchable or filterable.
Query | Query API | A keystroke sends a query and gets ranked hits in a few tens of milliseconds.
Facets | Facets | A response includes counts for brand, price, or category so the UI can draw filters.
Rules | Query rules | A merchandiser pins a record or hides one for a given query.
Synonyms | Synonyms | A search for one word also matches a synonym the index was told about.
Analytics | Search analytics | Shows queries that returned no hits so you can add synonyms or records for searches that failed.
Recommend | Recommendations | Returns related records from the same index.
Crawler | Crawler | Indexes a public website without a custom push pipeline.`,
    links: [["Product", "https://www.algolia.com/"], ["Docs", "https://www.algolia.com/doc/"]],
    alts: [["Meilisearch", "https://github.com/meilisearch/meilisearch", "MIT-and-BUSL", "The enterprise edition in that repo is Business Source License 1.1. Read LICENSE for which parts are not."]],
  }),
  row({
    id: "pinecone",
    name: "Pinecone",
    vendor: "Pinecone",
    category: "Data",
    summary: "A hosted vector database for similarity search over embeddings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A common store behind retrieval-augmented chat features that need nearest-neighbor search.",
    licenseName: "Pinecone terms",
    licenseNote: "The hosted index, the control plane, and the query service are proprietary.",
    gap: "Qdrant or pgvector can store embeddings you host. Pinecone's managed pods and the serverless index are the gap.",
    features: `Indexes | Indexes | An index stores vectors and metadata with a chosen dimension and metric.
Upsert | Upsert | A record is inserted or replaced by id, with a vector and a metadata map.
Query | Similarity query | A query vector returns the nearest ids, with optional metadata filters.
Namespaces | Namespaces | One index can separate tenants so a query stays inside one namespace.
Serverless | Serverless indexes | The service scales the index without a pod size you pick up front.
Sparse | Sparse and dense | Some indexes combine keyword-style sparse vectors with dense embeddings.
Backups | Collections and backups | A snapshot can be restored if an ingest job writes bad vectors.
Metrics | Index metrics | The console shows request rate and the size of the index.`,
    links: [["Product", "https://www.pinecone.io/"], ["Docs", "https://docs.pinecone.io/"]],
    alts: [["Qdrant", "https://github.com/qdrant/qdrant", "Apache-2.0", "An open vector database you can run."]],
  }),
  row({
    id: "twilio",
    name: "Twilio",
    vendor: "Twilio",
    category: "Communications",
    summary: "APIs for SMS, voice, WhatsApp, and verification codes.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current end-user total is not cited on this card.",
    reach: "The API a huge number of apps call when they send a text or place a call.",
    licenseName: "Twilio terms",
    licenseNote: "The APIs, the phone-number inventory, and the console are proprietary.",
    gap: "An open PBX can place a call on hardware you run. Twilio's global numbers and the APIs are the gap.",
    features: `SMS | Programmable SMS | An API sends and receives text messages on a Twilio number.
Voice | Programmable Voice | A webhook returns instructions that play audio, gather digits, or dial a person.
Verify | Verify | Sends a one-time code and checks the code the user typed.
WhatsApp | WhatsApp sender | Sends a template message on WhatsApp through the same account.
Numbers | Phone numbers | Buys a local or toll-free number in the console.
Studio | Studio flows | A visual flow handles a call or a message without a custom server for the simple cases.
Lookup | Lookup | Checks whether a phone number is valid and which carrier serves it.
Debugger | Debugger | Shows the last webhook errors so a failed signature is visible.`,
    links: [["Product", "https://www.twilio.com/"], ["Docs", "https://www.twilio.com/docs"]],
    alts: [["Asterisk", "https://github.com/asterisk/asterisk", "GPL-2.0", "An open telephony toolkit. You bring the carriers."]],
  }),
  row({
    id: "sendgrid",
    name: "SendGrid",
    vendor: "Twilio",
    category: "Communications",
    summary: "An email delivery API for transactional mail such as receipts, resets, and invites.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Twilio. SendGrid revenue is not cited alone.",
    reach: "The SMTP and HTTP API many apps use so their password-reset mail actually arrives.",
    licenseName: "SendGrid terms",
    licenseNote: "The delivery service and the template editor are proprietary.",
    gap: "A mail server you run can send mail. SendGrid's reputation, templates, and the event webhook are the gap.",
    features: `API | Mail send API | A JSON request sends a message to one or many recipients.
Templates | Dynamic templates | A template holds the layout, and the API fills handlebars-style fields.
Events | Event webhook | The app is told when a message is delivered, opened, bounced, or marked as spam.
Suppressions | Suppressions | A bounced or unsubscribed address is not mailed again.
IP | Dedicated IPs | A sender can warm a dedicated IP so reputation is not shared.
Validation | Address validation | Checks an address before the send and flags a mailbox that is likely to bounce.
Stats | Category stats | Tags a message with a category and charts delivery by category.
SMTP | SMTP relay | An existing app can relay through SMTP instead of the HTTP API.`,
    links: [["Product", "https://sendgrid.com/"], ["Docs", "https://docs.sendgrid.com/"]],
    alts: [["Listmonk", "https://github.com/knadh/listmonk", "AGPL-3.0", "An open mailing-list manager. You still need a server that inboxes will trust."]],
  }),
  row({
    id: "hubspot",
    name: "HubSpot",
    vendor: "HubSpot",
    category: "Sales",
    summary: "A CRM suite for marketing email, a sales pipeline, service tickets, and a CMS.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The CRM a huge number of mid-sized companies adopt before they buy Salesforce.",
    licenseName: "HubSpot terms",
    licenseNote: "The CRM, the marketing tools, and the CMS hosting are proprietary.",
    gap: "SuiteCRM or EspoCRM can track contacts and deals. HubSpot's marketing automation and the hosted CMS are the gap.",
    features: `CRM | Contact records | A contact has a company, a lifecycle stage, and a timeline of emails and meetings.
Pipeline | Deal pipeline | A deal moves through stages, with an amount and a close date.
Inbox | Shared inbox | A team works a sales inbox without forwarding mail by hand.
Marketing | Email and forms | A form on a site creates a contact, and a workflow sends the next email.
Service | Tickets | A support ticket is tied to the same contact the sales team already has.
CMS | Content CMS | Hosts landing pages and a blog on HubSpot's servers.
Reporting | Attribution reports | Shows which form or campaign the closed deal came from.
Calling | Calling and sequences | A sequence enrolls a contact in a series of emails and tasks.`,
    links: [["Product", "https://www.hubspot.com/"], ["Docs", "https://developers.hubspot.com/docs"]],
    alts: [["EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM for contacts, deals, and emails."]],
  }),
  row({
    id: "zendesk",
    name: "Zendesk",
    vendor: "Zendesk",
    category: "Support",
    summary: "A support desk for tickets, a help center, and chat with customers.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company after going private. No current public user total is cited here.",
    reach: "The ticket inbox a large share of support teams still live in.",
    licenseName: "Zendesk terms",
    licenseNote: "The desk, the help center, and the messaging product are proprietary.",
    gap: "Zammad or Chatwoot can take tickets and chat. Zendesk's help center and the marketplace are the gap.",
    features: `Tickets | Tickets | An email, a form, or a chat becomes a ticket with a status, a priority, and an assignee.
Views | Views | A view lists tickets that match a query, such as unsolved and assigned to the team.
Macros | Macros | Applies a canned reply and a set of field changes in one click.
Help | Help center | Publishes articles customers can search before they open a ticket.
Messaging | Messaging | A web widget chats with a customer and can become a ticket.
SLAs | Service targets | A policy says the first reply must happen within an hour.
Apps | Marketplace apps | A sidebar app shows an order from another system next to the ticket.
Explore | Explore reports | Charts ticket volume, wait time, and satisfaction.`,
    links: [["Product", "https://www.zendesk.com/"], ["Docs", "https://support.zendesk.com/"]],
    alts: [["Zammad", "https://github.com/zammad/zammad", "AGPL-3.0", "An open help desk you host."]],
  }),
  row({
    id: "intercom",
    name: "Intercom",
    vendor: "Intercom",
    category: "Support",
    summary: "A messenger for sales and support, with a bot and a shared inbox.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The chat widget on a large number of SaaS marketing sites.",
    licenseName: "Intercom terms",
    licenseNote: "The messenger, the inbox, and the bots are proprietary.",
    gap: "Chatwoot can run a website inbox you host. Intercom's bots and the product tours are the gap.",
    features: `Messenger | Messenger widget | A bubble on the site opens a conversation tied to the signed-in user.
Inbox | Team inbox | Teammates assign, snooze, and reply from one inbox.
Bots | Fin and custom bots | A bot answers from the help center before a person is invited in.
Tours | Product tours | A series of pointers walks a user through a screen.
Outbound | Outbound messages | Sends a chat or an email when a user matches a segment.
Articles | Help articles | The bot and the help center share the same articles.
Users | User and company records | A conversation shows the plan and the company of the person writing in.
Apps | App store | A sidebar shows data from another tool inside the conversation.`,
    links: [["Product", "https://www.intercom.com/"], ["Docs", "https://developers.intercom.com/docs"]],
    alts: [["Chatwoot", "https://github.com/chatwoot/chatwoot", "MIT", "An open customer-inbox for chat, email, and social channels."]],
  }),
  row({
    id: "outreach",
    name: "Outreach",
    vendor: "Outreach",
    category: "Sales",
    summary: "A sales-engagement product for sequences of email, calls, and tasks.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A standard tool for outbound sales teams that work a list of prospects every day.",
    licenseName: "Outreach terms",
    licenseNote: "The sequences, the dialer, and the analytics are proprietary.",
    gap: "A CRM plus a mailbox can send a sequence by hand. Outreach's pacing, dialer, and the safety checks are the gap.",
    features: `Sequences | Sequences | A sequence is a series of emails and call tasks with waits between them.
Mailboxes | Mailbox send | The email is sent from the rep's mailbox, not a shared marketing address.
Safety | Deliverability checks | Blocks a send that would hit too many people at one company in one day.
Dialer | Dialer | Places the call from the task and logs the disposition on the prospect.
Kaia | Conversation recording | Records a call and surfaces moments a manager asked to review.
Content | Snippets | Inserts an approved paragraph so every rep does not rewrite the pricing line.
Analytics | Sequence analytics | Shows reply rate by step so a weak email can be replaced.
CRM | CRM sync | A reply can move the Salesforce opportunity to the next stage.`,
    links: [["Product", "https://www.outreach.io/"], ["Docs", "https://support.outreach.io/"]],
    alts: [["EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM that can send mail and track deals. It is not a full dialer."]],
  }),
  row({
    id: "gong",
    name: "Gong",
    vendor: "Gong",
    category: "Sales",
    summary: "A revenue-intelligence product that records sales calls and scores what was said.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The call-recording system a lot of B2B sales teams require on every customer meeting.",
    licenseName: "Gong terms",
    licenseNote: "The recorder, the models, and the deal board are proprietary.",
    gap: "A recorder plus a transcript can store the call. Gong's deal warnings and the team analytics are the gap.",
    features: `Capture | Call capture | Joins a Zoom, Meet, or Teams call and records it when the host allows.
Transcript | Transcript | Produces a transcript a person can search by keyword.
Trackers | Trackers | Counts how often a competitor, a pricing objection, or a next step was mentioned.
Deals | Deal board | Warns when a deal has gone quiet or no next meeting is booked.
Scorecards | Scorecards | A manager scores a call against a checklist.
Library | Call library | Saves a clip of a good discovery call for the next new hire.
Forecast | Forecast | A forecast view uses call activity next to the CRM amount.
Coaching | Coaching comments | A manager leaves a comment on a timestamp.`,
    links: [["Product", "https://www.gong.io/"], ["Docs", "https://help.gong.io/"]],
    alts: [["Jitsi", "https://github.com/jitsi/jitsi-meet", "Apache-2.0", "An open meeting tool. Recording and transcription are yours to add."]],
  }),
  row({
    id: "zoominfo",
    name: "ZoomInfo",
    vendor: "ZoomInfo",
    category: "Sales",
    summary: "A contact and company database for B2B prospecting, plus a buyer-intent feed.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The database outbound teams search when they need a direct phone number and a title.",
    licenseName: "ZoomInfo terms",
    licenseNote: "The database and the intent feed are proprietary.",
    gap: "Public web pages and an open CRM can store contacts you already have. ZoomInfo's database is the gap.",
    features: `Search | Contact search | Filters people by title, department, company size, and technology.
Company | Company profiles | A company page lists employees, technologies, and news.
Intent | Buyer intent | A topic spike says which accounts are reading about a problem you sell to.
Enrich | Enrichment API | An API fills a CRM record with a phone number and an email.
Engage | Engage sequences | A sequence emails the contacts a search returned.
Chorus | Conversation intel | A related product records calls. It is part of the same company.
Scoops | Scoops | A note says a company is hiring for a role or changed leadership.
Lists | Exported lists | A rep exports a list into the CRM or a sequence, within the license.`,
    links: [["Product", "https://www.zoominfo.com/"], ["Docs", "https://tech-docs.zoominfo.com/"]],
    alts: [["EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM. It does not include a licensed contact database."]],
  }),
  row({
    id: "klaviyo",
    name: "Klaviyo",
    vendor: "Klaviyo",
    category: "Marketing",
    summary: "An email and SMS platform built around ecommerce events such as a checkout or a browse.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The marketing tool a large share of Shopify stores use for abandoned-cart mail.",
    licenseName: "Klaviyo terms",
    licenseNote: "The flows, the templates, and the hosted sending are proprietary.",
    gap: "Listmonk or Mautic can send a campaign. Klaviyo's ecommerce flows and the deliverability service are the gap.",
    features: `Flows | Flows | A flow sends a message when an event happens, such as a checkout that was not paid.
Campaigns | Campaigns | A one-time campaign goes to a segment, such as people who bought in the last year.
Segments | Segments | A segment is a query over profile properties and events.
Templates | Templates | A drag-and-drop editor builds the email, with product blocks.
SMS | SMS | The same flow can send a text where the shopper opted in.
Signups | Signup forms | A form on the store collects an email and a consent flag.
Benchmarks | Benchmarks | Compares open rate with other stores in the same category.
Reviews | Reviews product | A related tool asks for a review after delivery.`,
    links: [["Product", "https://www.klaviyo.com/"], ["Docs", "https://developers.klaviyo.com/en"]],
    alts: [["Mautic", "https://github.com/mautic/mautic", "GPL-3.0", "An open marketing automation app you host."]],
  }),
  row({
    id: "mailchimp",
    name: "Mailchimp",
    vendor: "Intuit",
    category: "Marketing",
    summary: "An email marketing product for newsletters, audiences, and simple automations.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Intuit. Mailchimp revenue is not cited alone on this card.",
    reach: "The newsletter tool a huge number of small businesses started with.",
    licenseName: "Mailchimp terms",
    licenseNote: "The editor, the audience, and the sending service are proprietary.",
    gap: "Listmonk can send a newsletter you host. Mailchimp's templates and the deliverability are the gap.",
    features: `Audience | Audiences | A contact has tags, a status, and the groups they joined.
Campaigns | Campaigns | A campaign is designed, tested, and sent to a segment.
Automations | Customer journeys | A journey sends a welcome mail, then a follow-up if they did not click.
Forms | Signup forms | An embedded form adds a subscriber with consent.
Templates | Templates | A template keeps the brand colors and the footer.
Reports | Reports | Shows opens, clicks, and bounces per campaign.
Stores | Store connection | An ecommerce store can feed purchase data into a segment.
Transactional | Transactional email | A separate stream sends receipts that are not marketing.`,
    links: [["Product", "https://mailchimp.com/"], ["Docs", "https://mailchimp.com/developer/"]],
    alts: [["Listmonk", "https://github.com/knadh/listmonk", "AGPL-3.0", "An open newsletter and mailing-list manager."]],
  }),
  row({
    id: "webflow",
    name: "Webflow",
    vendor: "Webflow",
    category: "Design",
    summary: "A visual website builder that publishes a hosted site and a CMS without a hand-written frontend.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The builder a lot of marketing teams use when they want a custom site without a ticket to engineering.",
    licenseName: "Webflow terms",
    licenseNote: "The designer, the hosting, and the CMS are proprietary.",
    gap: "You can write the HTML yourself and host it. Webflow's designer and the hosted CMS are the gap.",
    features: `Designer | Visual designer | Lays out sections, typography, and interactions on a canvas that emits the site.
CMS | CMS collections | A collection such as blog posts or jobs feeds a template page.
Hosting | Hosting | Publishes the site to Webflow's CDN with a certificate.
Interactions | Interactions | An animation runs on scroll or on hover without a separate JS file.
Components | Components | A navbar or a card is defined once and reused.
Forms | Forms | A form submission lands in the project or a connected tool.
Ecommerce | Ecommerce | A catalog, a cart, and checkout can live on the same site.
Editor | Editor role | A marketer edits CMS content without opening the designer.`,
    links: [["Product", "https://webflow.com/"], ["Docs", "https://developers.webflow.com/"]],
    alts: [["WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "An open CMS. The editing experience is different, and you host it."]],
  }),
  row({
    id: "framer",
    name: "Framer",
    vendor: "Framer",
    category: "Design",
    summary: "A design-and-publish tool for marketing sites, with a canvas that ships the page.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A frequent pick for startup marketing sites that used to be designed in one tool and rebuilt in another.",
    licenseName: "Framer terms",
    licenseNote: "The editor and the hosting are proprietary.",
    gap: "A static site you code can look the same. Framer's canvas-to-host path is the gap.",
    features: `Canvas | Design canvas | Places frames, text, and components the way a design tool does, then publishes them.
Components | Components and variants | A button has variants for size and state, reused across pages.
CMS | CMS | A collection fills a list page and a detail page.
Effects | Effects | Scroll and appear animations are set on the layer.
Hosting | Hosting and domains | The published site is served with a custom domain.
Localization | Localization | A page can have a locale with translated text.
Forms | Forms | Submissions are stored in the project or forwarded to an email address and a webhook.
Analytics | Analytics | A simple page-view count is built in so a published site can show traffic without a separate tag.`,
    links: [["Product", "https://www.framer.com/"], ["Docs", "https://www.framer.com/developers/"]],
    alts: [["WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "An open CMS you host yourself."]],
  }),
  row({
    id: "squarespace",
    name: "Squarespace",
    vendor: "Squarespace",
    category: "Design",
    summary: "A hosted website builder for brochure sites, blogs, and small shops.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "A default website for restaurants, artists, and small businesses that do not want a server.",
    licenseName: "Squarespace terms",
    licenseNote: "The templates, the editor, and the hosting are proprietary.",
    gap: "WordPress can run a similar site. Squarespace's templates and the all-in hosting are the gap.",
    features: `Templates | Templates | Starts from a template for a portfolio, a menu, or a shop.
Editor | Section editor | Adds blocks for text, images, video, and forms.
Commerce | Commerce | Sells a product with checkout, tax, and a shipping rule.
Domains | Domains and email | Registers a domain and can attach email forwarding.
Blogging | Blog | Publishes posts with categories and a subscription form.
Scheduling | Scheduling | A visitor books an appointment on the site.
Members | Member areas | A page is visible only after a person pays or signs in.
Analytics | Built-in analytics | Shows visits without a separate tag for the basic count.`,
    links: [["Product", "https://www.squarespace.com/"], ["Docs", "https://developers.squarespace.com/"]],
    alts: [["WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "An open CMS with themes and plugins."]],
  }),
  row({
    id: "miro",
    name: "Miro",
    vendor: "Miro",
    category: "Collaboration",
    summary: "An online whiteboard for workshops, diagrams, and sticky-note meetings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The board a lot of remote workshops open when the team cannot stand around a wall.",
    licenseName: "Miro terms",
    licenseNote: "The board, the templates, and the facilitation tools are proprietary.",
    gap: "Excalidraw can sketch a diagram you host. Miro's infinite board, timers, and the template library are the gap.",
    features: `Board | Infinite canvas | People add stickies, shapes, and images on a shared board.
Frames | Frames | A frame is a slide-sized region that a presentation can walk through.
Templates | Templates | Starts from a retro, a journey map, or a flowchart.
Facilitation | Timer and voting | A timer and a dot-vote run a workshop without a second tool.
Tables | Tables and docs | A table or a doc can sit on the board next to the stickies.
Talktrack | Talktrack | Records a walkthrough of the board for someone who missed the meeting.
Integrations | Embeds | Embeds a Jira issue, a Figma frame, or a document.
Permissions | Board permissions | A guest can view or edit one board without joining the whole team workspace.`,
    links: [["Product", "https://miro.com/"], ["Docs", "https://developers.miro.com/docs"]],
    alts: [["Excalidraw", "https://github.com/excalidraw/excalidraw", "MIT", "An open whiteboard for diagrams."]],
  }),
  row({
    id: "loom",
    name: "Loom",
    vendor: "Atlassian",
    category: "Collaboration",
    summary: "A screen-and-camera recorder that shares a link instead of a meeting.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Atlassian. Loom revenue is not cited alone.",
    reach: "The async video a lot of product and support teams send when a screenshot is not enough.",
    licenseName: "Loom terms",
    licenseNote: "The recorder, the hosting, and the viewer are proprietary.",
    gap: "OBS can record a screen to a file you host. Loom's instant link and the comments are the gap.",
    features: `Record | Screen and camera | Records the screen, a camera bubble, or both, from a desktop app or an extension.
Link | Instant link | The video gets a URL as soon as the recording stops.
Viewer | Viewer insights | Shows who watched and how far they got so the owner can see which part of the video lost people.
Comments | Timestamp comments | A viewer comments on a moment in the video.
Transcript | Transcript | A transcript makes the video searchable.
Edit | Trim and stitch | Trims the start and the end and can stitch clips into one video before it is shared.
Embed | Embeds | The link embeds in a doc, a ticket, or a pull request.
Workspace | Workspace library | A team library keeps videos that should not live only in someone's account.`,
    links: [["Product", "https://www.loom.com/"], ["Docs", "https://support.loom.com/"]],
    alts: [["OBS Studio", "https://github.com/obsproject/obs-studio", "GPL-2.0", "An open screen and camera recorder. You host the file."]],
  }),
  row({
    id: "calendly",
    name: "Calendly",
    vendor: "Calendly",
    category: "Collaboration",
    summary: "A scheduling page that shows when you are free and books the meeting.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The link people paste when they say book time with me.",
    licenseName: "Calendly terms",
    licenseNote: "The scheduling service and the routing features are proprietary.",
    gap: "Cal.com publishes the scheduler in its repository under the MIT license. Calendly's hosted pages and the routing are the gap.",
    features: `Event | Event types | A link offers 15 minutes, 30 minutes, or a paid session, with its own questions.
Calendar | Calendar check | Reads Google, Outlook, or another calendar so booked time is not offered.
Buffers | Buffers and limits | Adds a gap between meetings and a cap on how many happen in one day.
Routing | Routing forms | A form sends a lead to the right person's calendar.
Round | Round robin | Distributes bookings across a team so the next open host, not one calendar, receives the meeting.
Reminders | Reminders | Emails or texts both people before the meeting.
Workflows | Workflows | Sends a follow-up after the meeting ends.
Embed | Embeds | Drops the booking page into another website.`,
    links: [["Product", "https://calendly.com/"], ["Docs", "https://developer.calendly.com/"]],
    alts: [["Cal.com", "https://github.com/calcom/cal.com", "MIT", "The repository license is MIT. A hosted Cal.com account is a separate service."]],
  }),
  row({
    id: "dropbox",
    name: "Dropbox",
    vendor: "Dropbox",
    category: "Files",
    summary: "A file-sync product for a folder that stays the same on a laptop and on the web.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The synced folder a huge number of teams still use for shared files.",
    licenseName: "Dropbox terms",
    licenseNote: "The sync client and the service are proprietary.",
    gap: "Nextcloud can sync files you host. Dropbox's client and the sharing links are the gap.",
    features: `Sync | Desktop sync | A folder on the computer stays in step with the cloud copy.
Share | Shared links | A link can be view-only, expiring, or password protected.
Paper | Paper docs | A doc lives next to the files for a lightweight write-up.
Replay | Replay | Reviews a video file with frame comments.
Requests | File requests | Asks someone to upload into a folder without giving them the rest of the account.
Versions | Version history | Restores an older copy of a file from the version list after an overwrite or a bad save.
Admin | Admin console | An admin can see devices, wipe a session, and set sharing rules.
Transfer | Transfer | Sends a large file to someone who does not have an account.`,
    links: [["Product", "https://www.dropbox.com/"], ["Docs", "https://www.dropbox.com/developers"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file sync and share server you host."]],
  }),
  row({
    id: "box",
    name: "Box",
    vendor: "Box",
    category: "Files",
    summary: "An enterprise file platform with governance, retention, and app integrations.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The content layer a lot of regulated companies use instead of a consumer sync folder.",
    licenseName: "Box terms",
    licenseNote: "The service and the clients are proprietary.",
    gap: "Nextcloud covers sync and share. Box's retention, watermarking, and the compliance controls are the gap.",
    features: `Files | Files and folders | Stores files with previews for office documents, video, and images.
Sharing | Shared links and collaborators | Invites a person or creates a link with an expiry.
Governance | Retention and legal hold | A policy keeps a file for a required period or freezes it for a matter.
Shield | Classification | Labels a file and can watermark a download.
Notes | Box Notes | A collaborative note sits in the same folder as the files.
Relay | Workflow | A file can move through an approval before it is shared outside.
Sign | Box Sign | Collects a signature on a file in the same account.
Admin | Admin insights | Reports external sharing and inactive accounts.`,
    links: [["Product", "https://www.box.com/"], ["Docs", "https://developer.box.com/"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open content server you host."]],
  }),
  row({
    id: "docusign",
    name: "DocuSign",
    vendor: "DocuSign",
    category: "Business",
    summary: "An electronic-signature service for sending a document and collecting a legal signature.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The signature request a huge number of contracts still arrive as.",
    licenseName: "DocuSign terms",
    licenseNote: "The envelope service and the certificate of completion are proprietary.",
    gap: "An open signature tool can collect an image of a signature. DocuSign's envelope, audit trail, and the legal workflow are the gap.",
    features: `Envelopes | Envelopes | A sender uploads a PDF, places fields, and sends it to signers in order.
Fields | Fields | A signer fills a signature, a date, or a text field on the page.
Templates | Templates | A reusable template already has the fields for a standard contract.
Reminders | Reminders | Nudges a signer who has not finished by sending a reminder email on a schedule you set.
Certificate | Certificate of completion | A record lists who signed, from where, and when.
TemplatesPower | PowerForms | A public link starts an envelope without a person sending it each time.
CLM | Agreement workflow | A contract can be routed for approval before it is sent for signature.
API | Embedded signing | An app can embed the signing ceremony in its own page.`,
    links: [["Product", "https://www.docusign.com/"], ["Docs", "https://developers.docusign.com/"]],
    alts: [["Documenso", "https://github.com/documenso/documenso", "AGPL-3.0", "An open e-signature product you can host."]],
  }),
  row({
    id: "xero",
    name: "Xero",
    vendor: "Xero",
    category: "Finance",
    summary: "A small-business accounting product for invoices, bills, bank feeds, and a ledger.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "A default ledger for agencies and small companies outside the QuickBooks-only market.",
    licenseName: "Xero terms",
    licenseNote: "The ledger and the bank feeds are proprietary.",
    gap: "ERPNext can invoice and keep a ledger. Xero's bank feeds and the accountant workflow are the gap. Akaunting is under the Business Source License, so it is not the open alternative.",
    features: `Invoices | Invoices | Sends an invoice, records a payment, and chases an overdue one.
Bills | Bills | Enters a supplier bill and matches it to a bank line.
Bank | Bank feeds | Imports transactions from a bank and suggests a match.
Reconciliation | Reconciliation | Marks a statement line as explained by an invoice or a transfer.
Reports | Reports | A profit-and-loss and a balance sheet come from the same ledger.
Payroll | Payroll | In supported countries, a pay run calculates tax and files it.
Projects | Projects | Tracks time and costs against a customer project.
Advisors | Advisor access | An accountant can work in the file without sharing the owner's password.`,
    links: [["Product", "https://www.xero.com/"], ["Docs", "https://developer.xero.com/documentation/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with invoices, bills, and a ledger."]],
  }),
  row({
    id: "gusto",
    name: "Gusto",
    vendor: "Gusto",
    category: "People",
    summary: "A payroll and benefits product for small US companies.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A common payroll system for US startups that do not want to file taxes by hand.",
    licenseName: "Gusto terms",
    licenseNote: "The payroll engine, the tax filing, and the benefits marketplace are proprietary.",
    gap: "A spreadsheet can list salaries. Gusto's tax filing, direct deposit, and benefits are the gap.",
    features: `Payroll | Payroll runs | Calculates gross pay, taxes, and deductions and pays by direct deposit.
Taxes | Tax filing | Files payroll taxes and issues year-end forms in supported jurisdictions.
Benefits | Benefits | Offers health and retirement plans employees enroll in.
Time | Time tracking | Hourly employees submit hours that flow into the run.
Onboard | Hiring | Collects a new hire's tax forms and bank details.
PTO | Time off | Requests and balances sit next to the payroll record.
Contractors | Contractor pay | Pays a contractor and collects the tax form.
Reports | Payroll reports | Exports a journal for the accounting system.`,
    links: [["Product", "https://gusto.com/"], ["Docs", "https://docs.gusto.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with payroll features. US tax filing is not the same product."]],
  }),
  row({
    id: "rippling",
    name: "Rippling",
    vendor: "Rippling",
    category: "People",
    summary: "An employee system that combines HR records, payroll, devices, and app access.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Chosen by companies that want one hire to create the payroll record, the laptop, and the app accounts.",
    licenseName: "Rippling terms",
    licenseNote: "The Rippling HR, IT, and payroll platform is proprietary.",
    gap: "Separate open HR and device tools exist. Rippling's single employee graph is the gap.",
    features: `Directory | Employee directory | One record holds the job, the manager, the start date, and the documents.
Payroll | Payroll | Runs pay from the same record that holds the job.
Devices | Device management | Ships a laptop and can lock it if the person leaves.
Apps | App access | Grants Slack, Google, or another app based on the department.
Time | Time and attendance | Collects hours and time-off requests and sends approved time into the payroll run.
Workflows | Workflows | A hire triggers a checklist of tasks for IT and a manager.
Global | Global employment | Employs people in other countries through the product's entities, where offered.
Reports | Headcount reports | Charts starters, leavers, and cost by department.`,
    links: [["Product", "https://www.rippling.com/"], ["Docs", "https://developer.rippling.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open system for employees, payroll, and expenses."]],
  }),
  row({
    id: "bamboohr",
    name: "BambooHR",
    vendor: "BambooHR",
    category: "People",
    summary: "An HR system of record for employee data, time off, and hiring at mid-sized companies.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A frequent HRIS when a company has outgrown a spreadsheet and is not yet on Workday.",
    licenseName: "BambooHR terms",
    licenseNote: "The BambooHR human-resources system and its employee records are proprietary.",
    gap: "An open HR app can store employees and time off. BambooHR's hiring and the employee experience are the gap.",
    features: `Records | Employee records | Stores job, compensation, emergency contacts, and documents.
Timeoff | Time off | Employees request leave, and a manager approves it against a policy.
Onboarding | Onboarding checklists | A new hire sees the tasks they must finish in the first week.
Hiring | Applicant tracking | A job opens, candidates move through stages, and an offer is recorded.
Directory | Org chart | An org chart is generated from the manager field.
Performance | Performance | Collects a review on a cycle so a manager and an employee both write feedback before the meeting.
Reports | Custom reports | Exports a list of employees who match a filter.
Mobile | Mobile app | An employee can request time off from a phone.`,
    links: [["Product", "https://www.bamboohr.com/"], ["Docs", "https://documentation.bamboohr.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open employee and leave system."]],
  }),
  row({
    id: "greenhouse",
    name: "Greenhouse",
    vendor: "Greenhouse",
    category: "People",
    summary: "An applicant-tracking system for job posts, interviews, and scorecards.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A standard hiring tool at technology companies that run a structured interview loop.",
    licenseName: "Greenhouse terms",
    licenseNote: "The Greenhouse hiring system, scorecards, and candidate database are proprietary.",
    gap: "An open form and a spreadsheet can track candidates. Greenhouse's scorecards and the scheduling are the gap.",
    features: `Jobs | Job posts | A job has a description, a hiring team, and a public posting.
Stages | Pipeline stages | A candidate moves from application to screen to onsite to offer.
Scorecards | Scorecards | Each interviewer submits a structured score after the interview.
Scheduling | Interview scheduling | Proposes times that match the interviewers' calendars.
Approvals | Offer approvals | An offer cannot be sent until the approval chain finishes.
Reports | Pipeline reports | Shows where candidates drop out, by source and by stage.
CRM | Talent CRM | Keeps a person who is not in an open job, for a later search.
Permissions | Private jobs | A confidential search is hidden from the rest of the company.`,
    links: [["Product", "https://www.greenhouse.com/"], ["Docs", "https://developers.greenhouse.io/"]],
    alts: [["OpenCATS", "https://github.com/opencats/OpenCATS", "GPL-3.0", "An open applicant-tracking system."]],
  }),
  row({
    id: "airtable",
    name: "Airtable",
    vendor: "Airtable",
    category: "Product work",
    summary: "A spreadsheet-database hybrid for bases, views, and automations non-engineers can edit.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The tool operations teams open when a spreadsheet has become the product.",
    licenseName: "Airtable terms",
    licenseNote: "The base, the automations, and the interface pages are proprietary.",
    gap: "Grist can hold typed rows on a database you host. Airtable's interfaces and automations are the gap.",
    features: `Bases | Bases and tables | A base holds tables, and a row has typed fields such as a link, a date, or a select.
Views | Views | The same table can be a grid, a kanban, a calendar, or a gallery.
Links | Linked records | A field points at a row in another table, like a foreign key a person can click.
Interfaces | Interfaces | Builds a page for a teammate who should not see the raw grid.
Automations | Automations | Sends a message or updates a row when a field changes.
Forms | Forms | A public form creates a row in the base without giving the visitor access to the rest of the data.
Sync | Sync | A view in one base can appear in another.
API | API | Scripts and other products read and write rows with a token.`,
    links: [["Product", "https://www.airtable.com/"], ["Docs", "https://airtable.com/developers/web/api/introduction"]],
    alts: [["Grist", "https://github.com/gristlabs/grist-core", "Apache-2.0", "An Apache-2.0 spreadsheet-database you host."]],
  }),
  row({
    id: "coda",
    name: "Coda",
    vendor: "Coda",
    category: "Knowledge",
    summary: "A doc that behaves like an app, with tables, buttons, and packs that call other products.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by teams that want a written page and a working table in the same URL.",
    licenseName: "Coda terms",
    licenseNote: "The doc runtime and the packs are proprietary.",
    gap: "A wiki plus a database can split the same job. Coda's buttons and packs in one doc are the gap.",
    features: `Docs | Docs and pages | A doc is a set of pages with text, tables, and embeds.
Tables | Tables | A table has typed columns, formulas, and relations to other tables.
Buttons | Buttons | A button runs an action, such as adding a row or pushing a Slack message.
Packs | Packs | A pack pulls data from another product into the doc.
Automations | Automations | A rule runs on a schedule or when a row changes.
Sharing | Sharing | A page can be shared with the company or with a public link.
Locking | Page locking | Stops a reader from editing a finished page.
Versions | Version history | Restores an earlier copy of the doc, including tables and buttons, after an unwanted edit.`,
    links: [["Product", "https://coda.io/"], ["Docs", "https://coda.io/developers"]],
    alts: [["Docmost", "https://github.com/docmost/docmost", "AGPL-3.0", "An open wiki and doc space you host."]],
  }),
  row({
    id: "sketch",
    name: "Sketch",
    vendor: "Sketch",
    category: "Design",
    summary: "A Mac design tool for screens, symbols, and a shared library.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The Mac-native design tool many product teams used before the work moved to the browser.",
    licenseName: "Sketch license",
    licenseNote: "The Mac app and the cloud documents are proprietary.",
    gap: "Penpot can design screens in the browser. Sketch's Mac app and the library workflow are the gap.",
    features: `Artboards | Artboards | A file holds frames for each screen of a flow.
Symbols | Symbols | A component is defined once and instanced across the file.
Libraries | Shared libraries | A team library pushes color and component updates to other files.
Prototypes | Prototypes | Links hotspots so a click moves to another artboard.
Inspect | Inspect | A developer reads spacing, colors, and assets from the web app.
Cloud | Cloud documents | The file lives in Sketch's cloud and can be commented on.
Plugins | Plugins | A plugin generates content or exports assets.
Version | Version history | Restores an earlier save of the document.`,
    links: [["Product", "https://www.sketch.com/"], ["Docs", "https://www.sketch.com/docs/"]],
    alts: [["Penpot", "https://github.com/penpot/penpot", "MPL-2.0", "An open design tool for screens and components."]],
  }),
  row({
    id: "illustrator",
    name: "Adobe Illustrator",
    vendor: "Adobe",
    category: "Design",
    summary: "Adobe's vector editor for logos, icons, and print artwork.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Adobe. Illustrator revenue is not cited alone.",
    reach: "The vector tool print and brand designers still name first.",
    licenseName: "Adobe terms",
    licenseNote: "Illustrator is proprietary. The file format is not an open editor.",
    gap: "Inkscape edits SVG. Illustrator's type, color, and the Creative Cloud libraries are the gap.",
    features: `Vectors | Paths and anchors | Draws and edits bezier paths with anchors and handles.
Type | Type on a path | Sets type on a path or inside a shape, with OpenType features.
Color | Color and swatches | Uses swatches, gradients, and spot colors for print.
Artboards | Multiple artboards | One file holds several sizes, such as a logo lockup and an icon.
Libraries | Cloud libraries | Reuses a logo or a color from a Creative Cloud library.
Image | Image trace | Turns a raster image into editable vector paths that can be recolored and scaled.
Export | Export for screens | Exports SVG, PDF, and PNG at the sizes a product needs.
Repeat | Repeat and patterns | Builds a pattern tile or a radial repeat.`,
    links: [["Product", "https://www.adobe.com/products/illustrator.html"], ["Docs", "https://helpx.adobe.com/illustrator/user-guide.html"]],
    alts: [["Inkscape", "https://gitlab.com/inkscape/inkscape", "GPL-2.0", "An open vector editor."]],
  }),
  row({
    id: "after-effects",
    name: "Adobe After Effects",
    vendor: "Adobe",
    category: "Design",
    summary: "Adobe's motion-graphics tool for compositing layers over time.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Adobe. After Effects revenue is not cited alone.",
    reach: "The motion tool behind a huge amount of commercial animation and title sequences.",
    licenseName: "Adobe terms",
    licenseNote: "After Effects, its plugin host, and the project file format are proprietary.",
    gap: "Blender can animate and composite. After Effects' layer timeline and the plugin ecosystem are the gap.",
    features: `Layers | Layer timeline | Stacks footage, solids, and text on a timeline with in and out points.
Keyframes | Keyframes | Animates position, opacity, and effects with keyframes and easing.
Masks | Masks and mattes | Hides part of a layer with a mask or another layer's alpha.
Effects | Effect plugins | Applies a blur, a color grade, or a third-party effect to a layer.
Text | Text animators | Animates characters or words of a title independently.
Expressions | Expressions | A line of code drives one property from another.
Render | Render queue | Renders the composition to a movie or an image sequence.
Roundtrip | Premiere roundtrip | A composition can replace a clip in Premiere and come back rendered.`,
    links: [["Product", "https://www.adobe.com/products/aftereffects.html"], ["Docs", "https://helpx.adobe.com/after-effects/user-guide.html"]],
    alts: [["Blender", "https://projects.blender.org/blender/blender", "GPL-2.0", "An open 3D and motion tool. The workflow is different."]],
  }),
  row({
    id: "lightroom",
    name: "Adobe Lightroom",
    vendor: "Adobe",
    category: "Design",
    summary: "Adobe's photo library and raw editor for culling and developing a shoot.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Adobe. Lightroom revenue is not cited alone.",
    reach: "The library a huge number of photographers use to develop a shoot and sync it to a phone.",
    licenseName: "Adobe terms",
    licenseNote: "Lightroom and Lightroom Classic are proprietary.",
    gap: "Darktable develops raw files. Lightroom's cloud library and the mobile sync are the gap.",
    features: `Library | Photo library | Imports a card of photos and keeps them in albums and folders.
Develop | Develop controls | Adjusts exposure, white balance, color, and a tone curve on a raw file.
Masks | Masks | Paints an adjustment onto the sky, a subject, or a brushed area.
Presets | Presets | Applies a saved look to one photo or a whole set.
Cull | Flags and ratings | Rates and rejects photos so the export is only the keepers.
Sync | Cloud sync | Edits on the desktop show up on the phone.
Export | Export | Writes a JPEG or a TIFF at a size and a color space.
Heal | Heal and clone | Removes a sensor spot or a distraction by cloning nearby pixels across the selected photos.`,
    links: [["Product", "https://www.adobe.com/products/photoshop-lightroom.html"], ["Docs", "https://helpx.adobe.com/lightroom-cc/user-guide.html"]],
    alts: [["Darktable", "https://github.com/darktable-org/darktable", "GPL-3.0", "An open raw developer."]],
  }),
  row({
    id: "final-cut",
    name: "Final Cut Pro",
    vendor: "Apple",
    category: "Design",
    summary: "Apple's timeline editor for cutting picture and sound on a Mac.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Apple. Final Cut revenue is not reported alone.",
    reach: "The editor a large share of Mac-based video teams use instead of a rental suite.",
    licenseName: "Apple terms",
    licenseNote: "Final Cut Pro and its library format are proprietary Apple software.",
    gap: "Kdenlive can cut a timeline on hardware you own. Final Cut's magnetic timeline and the Mac performance are the gap.",
    features: `Timeline | Magnetic timeline | Clips stick to a primary storyline and connected clips ride above or below it.
Library | Libraries | A library holds events of footage and the projects that cut them.
Roles | Roles | Assigns dialogue, music, and effects so a mix can be soloed by role.
Color | Color wheels | Grades a clip with wheels, curves, and a LUT.
Multicam | Multicam | Cuts between angles that share a sync point.
Captions | Captions | Creates a caption file on the timeline and can burn or export those captions with the cut.
Effects | Effects and titles | Drops a title or an effect onto a clip and edits its timing in the inspector.
Export | Share destinations | Exports a master, a social file, or a send to another app.`,
    links: [["Product", "https://www.apple.com/final-cut-pro/"], ["Docs", "https://support.apple.com/final-cut-pro"]],
    alts: [["Kdenlive", "https://github.com/KDE/kdenlive", "GPL-2.0", "An open timeline editor."]],
  }),
  row({
    id: "runway",
    name: "Runway",
    vendor: "Runway",
    category: "AI",
    summary: "A generative video studio for text-to-video, inpainting, and editing shots.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "One of the tools video teams open when they want a generated shot without a full CG pipeline.",
    licenseName: "Runway terms",
    licenseNote: "The models and the studio are proprietary. Generated output is covered by Runway's terms, not an open license.",
    gap: "Open video models exist and change quickly. Runway's studio, the editor, and the hosted models are the gap.",
    features: `Generate | Text to video | Writes a prompt and generates a short clip.
Image | Image to video | Animates a still image the user uploaded.
Inpaint | Inpainting | Replaces an object in a shot while the rest of the frame stays.
Expand | Expand | Extends the frame beyond the original crop.
Motion | Motion brush | Paints where motion should happen in the frame.
Edit | Timeline edit | Trims generated clips on a simple timeline.
Act | Act-one style performance | Drives a character with a reference performance, where the tool offers it.
Assets | Asset library | Keeps generated clips in a project for the next edit.`,
    links: [["Product", "https://runwayml.com/"], ["Docs", "https://help.runwayml.com/"]],
    alts: [["ComfyUI", "https://github.com/comfyanonymous/ComfyUI", "GPL-3.0", "An open node editor for generative models you run. The models have their own licenses."]],
  }),
  row({
    id: "elevenlabs",
    name: "ElevenLabs",
    vendor: "ElevenLabs",
    category: "AI",
    summary: "A voice studio for synthetic speech, voice cloning, and dubbed audio.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The voice API a large number of products call when they want speech that does not sound like a classic TTS engine.",
    licenseName: "ElevenLabs terms",
    licenseNote: "The voices, the API, and the studio are proprietary. A cloned voice is allowed only under their consent rules.",
    gap: "Open TTS models can speak a sentence. ElevenLabs' voice library, dubbing, and the API reliability are the gap.",
    features: `TTS | Text to speech | Types text, picks a voice, and downloads the audio.
Clone | Voice clone | Creates a voice from samples when the account is allowed to do so.
Library | Voice library | Shares or uses a community voice under the product's rules.
Projects | Projects | A long script is split into paragraphs that can be regenerated one at a time.
Dubbing | Dubbing | Translates speech in a video into another language and keeps timing.
API | Speech API | An application requests audio with a voice id and a model id.
Agents | Conversational agents | A voice agent answers on a phone call or a web widget.
Isolation | Voice isolation | Separates a voice from background noise.`,
    links: [["Product", "https://elevenlabs.io/"], ["Docs", "https://elevenlabs.io/docs"]],
    alts: [["Piper", "https://github.com/OHF-Voice/piper1-gpl", "GPL-3.0", "An open local text-to-speech system. Voice quality and licensing of each voice still need a check."]],
  }),
  row({
    id: "descript",
    name: "Descript",
    vendor: "Descript",
    category: "AI",
    summary: "A video and podcast editor where the transcript is the timeline.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Used by podcasters and marketers who would rather delete a sentence than blade a waveform.",
    licenseName: "Descript terms",
    licenseNote: "The editor, the transcription, and the studio sound features are proprietary.",
    gap: "A transcript plus an open editor can cut audio. Descript's text-based edit and the studio features are the gap.",
    features: `Transcript | Transcript editing | Deletes a word in the transcript and the matching audio is removed.
Overdub | Overdub | Regenerates a short phrase in the speaker's voice, where the feature is offered.
Studio | Studio sound | Cleans a room tone and levels the voice.
Screen | Screen recording | Records a screen and a camera into the same project.
Scenes | Scenes | Arranges clips and titles on a scene timeline.
Publish | Publish | Exports a video or sends it to a publishing destination.
Rooms | Recording rooms | Remote guests record locally so the file is not a compressed call.
Comments | Comments | A reviewer marks a word instead of a timecode.`,
    links: [["Product", "https://www.descript.com/"], ["Docs", "https://help.descript.com/"]],
    alts: [["Kdenlive", "https://github.com/KDE/kdenlive", "GPL-2.0", "An open editor. You cut the timeline, not the transcript."]],
  }),
  row({
    id: "grammarly",
    name: "Grammarly",
    vendor: "Grammarly",
    category: "Writing",
    summary: "A writing assistant that underlines grammar, tone, and clarity in the browser and in docs.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The underline a huge number of people see in email, docs, and the browser.",
    licenseName: "Grammarly terms",
    licenseNote: "The suggestions service and the apps are proprietary.",
    gap: "A local language tool can flag grammar. Grammarly's tone rewrites and the everywhere-extension are the gap.",
    features: `Underline | Inline suggestions | Underlines a phrase and offers a replacement.
Tone | Tone rewrite | Rewrites a sentence to be more formal or more concise.
Clarity | Clarity | Flags a long sentence and proposes a split.
Plagiarism | Plagiarism check | Compares a document with published sources on the paid plan.
Goals | Audience goals | Sets the audience and the formality before the suggestions change.
Browser | Browser extension | Works in web mail and other text boxes so a suggestion appears where the sentence is typed.
Docs | Document editor | Uploads a doc and accepts suggestions in Grammarly's editor.
Snippets | Snippets | Expands a short code into a paragraph the person uses often.`,
    links: [["Product", "https://www.grammarly.com/"], ["Docs", "https://developer.grammarly.com/"]],
    alts: [["LanguageTool", "https://github.com/languagetool-org/languagetool", "LGPL-2.1", "An open proofreading server you can run."]],
  }),
  row({
    id: "perplexity",
    name: "Perplexity",
    vendor: "Perplexity",
    category: "AI",
    summary: "An answer engine that searches the web and cites the pages it used.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A widely used alternative to a classic search box when the person wants a sourced paragraph.",
    licenseName: "Perplexity terms",
    licenseNote: "The product, the ranking, and the apps are proprietary.",
    gap: "An open model plus a search index can answer with links. Perplexity's product and the citation UI are the gap.",
    features: `Answer | Cited answers | Writes an answer with numbered citations a person can open.
Focus | Focus modes | Limits the search to the web, academic papers, or another source set.
Follow | Follow-up questions | A thread keeps the earlier question so the next one can say tell me more.
Pages | Pages | Turns a research thread into a page that can be edited and shared as a write-up.
Files | File questions | Uploads a PDF and asks a question about that file.
Collections | Collections | Saves threads into a collection for a topic.
Pro | Model choice | A paid search can use a stronger model when the default answer is not enough.
API | Search API | An application can request a cited answer.`,
    links: [["Product", "https://www.perplexity.ai/"], ["Docs", "https://docs.perplexity.ai/"]],
    alts: [["SearXNG", "https://github.com/searxng/searxng", "AGPL-3.0", "An open metasearch engine. It does not write the answer."]],
  }),
  row({
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    category: "AI",
    summary: "Google's assistant and model family inside the Gemini app and across Google products.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Part of Google. Gemini revenue is not reported as a standalone consumer total here.",
    reach: "The assistant inside a Google account, on the web, on phones, and inside Workspace apps.",
    licenseName: "Google terms",
    licenseNote: "The Gemini app and the hosted models are proprietary. Some smaller Google models are released under open terms; this card is the product.",
    gap: "An open chat UI and an open model can converse. Gemini's Google account, the tools, and the product integration are the gap.",
    features: `Chat | Chat | A conversation can use text, and the app can search or run a tool when the product offers it.
Files | File understanding | Uploads a document or an image and asks about it.
Gems | Gems | Saves a custom instruction as a reusable assistant.
Workspace | Workspace side panel | Drafts or summarizes mail and docs where the account has access.
Extensions | Extensions | Connects a Google app so the answer can use that data.
Code | Code help | Explains or writes code in the same chat.
Live | Live conversation | A voice mode talks with the model, where the account has it.
API | Gemini API | Developers call the model with an API key, separate from the consumer app.`,
    links: [["Product", "https://gemini.google.com/"], ["Docs", "https://ai.google.dev/gemini-api/docs"]],
    alts: [["LibreChat", "https://github.com/danny-avila/LibreChat", "MIT", "An MIT chat interface. You bring the model. Open WebUI uses its own license, so it is not listed here."]],
  }),
  row({
    id: "grok",
    name: "Grok",
    vendor: "xAI",
    category: "AI",
    summary: "xAI's assistant, available on the web, in apps, and inside X.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The assistant bundled with X and offered as its own app and API.",
    licenseName: "xAI terms",
    licenseNote: "Grok the product, the chat service, and the apps are proprietary.",
    gap: "An open model and a chat UI can answer. Grok's product, the X context, and the API are the gap.",
    features: `Chat | Chat | A conversation with the model, including follow-up questions.
X | Context on X | Can look at public posts on X when the feature is enabled.
Images | Image understanding and generation | Reads an uploaded image and can generate an image where the plan allows.
Voice | Voice mode | Speaks an answer in a voice mode the app offers.
Files | File questions | A document can be attached to a conversation.
Agents | Tool use | The model can call a tool, such as search or code, when the product enables it.
API | API | An application calls the model with a key from the xAI console.
Memory | Conversation history | Past chats stay in the account so a person can return to one.`,
    links: [["Product", "https://x.ai/"], ["Docs", "https://docs.x.ai/"]],
    alts: [["LibreChat", "https://github.com/danny-avila/LibreChat", "MIT", "An MIT chat interface. You bring the model. Open WebUI uses its own license, so it is not listed here."]],
  }),
  row({
    id: "replit",
    name: "Replit",
    vendor: "Replit",
    category: "Developer tools",
    summary: "A browser IDE that runs a project on a hosted machine and can generate code into it.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "A place students and small teams start an app without installing a toolchain.",
    licenseName: "Replit terms",
    licenseNote: "The hosted workspace and the agent are proprietary. The code you write is yours, subject to their terms.",
    gap: "A local editor and a VM can run the same stack. Replit's hosted machine and the agent are the gap.",
    features: `Workspace | Hosted workspace | A project has a filesystem, a shell, and a language runtime in the browser.
Run | Run button | Starts the app and opens a preview URL from the same repl without a separate deploy step.
Agent | Agent | Asks for a change in plain language and applies a diff in the project.
Deploy | Deployments | Publishes the project to a reserved VM or an autoscaled service.
Secrets | Secrets | Stores a key outside the repository so the value is injected at run time and is not committed.
Multi | Multiplayer | Two people can edit the same repl at once and see each other's cursors.
Database | Built-in database | A small database can be attached without a separate host.
Templates | Templates | Starts from a template for a framework instead of an empty folder.`,
    links: [["Product", "https://replit.com/"], ["Docs", "https://docs.replit.com/"]],
    alts: [["code-server", "https://github.com/coder/code-server", "MIT", "VS Code in the browser, on a machine you run."]],
  }),
  row({
    id: "windsurf",
    name: "Windsurf",
    vendor: "Cognition",
    category: "Developer tools",
    summary: "An editor built around an agent that edits a codebase from a prompt.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "The product has changed hands. No audited user or revenue total is cited here.",
    reach: "One of the agent-first editors teams try next to Cursor and a plain VS Code setup.",
    licenseName: "Windsurf terms",
    licenseNote: "The editor product and the agent service are proprietary.",
    gap: "An open editor plus an open agent can edit files. Windsurf's integrated agent and the hosted models are the gap.",
    features: `Agent | Cascade agent | A prompt can create and edit several files, then show the diff.
Context | Codebase context | The agent reads the project so a change matches existing patterns.
Tab | Autocomplete | Suggests the next edit as the person types.
Terminal | Terminal use | The agent can run a command and read the output, when the user allows it.
Preview | Preview | A web preview shows the app the agent just changed.
Rules | Rules | A rules file tells the agent how this repository wants to be changed.
Models | Model choice | The user picks which hosted model runs the agent.
History | Checkpoints | A session can be reverted to an earlier checkpoint of the files.`,
    links: [["Product", "https://windsurf.com/"], ["Docs", "https://docs.windsurf.com/"]],
    alts: [["Continue", "https://github.com/continuedev/continue", "Apache-2.0", "An open coding assistant inside an editor you already use."]],
  }),
  row({
    id: "devin",
    name: "Devin",
    vendor: "Cognition",
    category: "Developer tools",
    summary: "A software-engineering agent that takes a task, edits a repo, and opens a pull request.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "Sold as an agent that works a ticket the way a junior engineer would, inside a remote machine.",
    licenseName: "Cognition terms",
    licenseNote: "The agent, the remote machine, and the session UI are proprietary.",
    gap: "An open agent in a sandbox can edit a repo. Devin's hosted computer and the product workflow are the gap.",
    features: `Session | Task session | A person writes a task and the agent works it in a session they can watch.
Shell | Remote shell | The agent has a terminal on a machine with the repository checked out.
Browser | Browser | The agent can open a page to check what it built.
Editor | Editor | File edits show up as a diff the person can review.
Pull | Pull request | The session can open a pull request when the task is done.
Wiki | Repo wiki | The product keeps notes about how the repository is structured.
Parallel | Parallel sessions | More than one task can run at the same time.
Secrets | Secrets | Credentials for the session are stored apart from the chat.`,
    links: [["Product", "https://devin.ai/"], ["Docs", "https://docs.devin.ai/"]],
    alts: [["OpenHands", "https://github.com/All-Hands-AI/OpenHands", "MIT", "An open agent that can edit a repository in a sandbox you run."]],
  }),
  row({
    id: "tabnine",
    name: "Tabnine",
    vendor: "Tabnine",
    category: "Developer tools",
    summary: "An AI completion tool for code, with an option to run in a private deployment.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "An older code-completion product still used by companies that want a private model.",
    licenseName: "Tabnine terms",
    licenseNote: "The product and the hosted models are proprietary.",
    gap: "An open completion model in an editor can suggest the next line. Tabnine's enterprise deployment is the gap.",
    features: `Complete | Line completion | Suggests the rest of a line or a block as the person types.
Chat | Chat | Asks a question about the open file and can insert the answer as a suggestion in the editor.
Context | Workspace context | Uses other files in the project when forming a suggestion.
Private | Private deployment | An enterprise plan can keep the model inside the company's network.
Provenance | Code provenance | Can warn when a suggestion matches a known public snippet, where the plan includes it.
IDEs | Editor plugins | Installs in common editors rather than replacing the editor.
Controls | Admin controls | An admin can disable a repository or a language.
Personalize | Learning from the repo | Suggestions can follow patterns in the repository the admin allowed.`,
    links: [["Product", "https://www.tabnine.com/"], ["Docs", "https://docs.tabnine.com/"]],
    alts: [["Continue", "https://github.com/continuedev/continue", "Apache-2.0", "An open assistant you can point at a local model."]],
  }),
  row({
    id: "palantir",
    name: "Palantir Foundry",
    vendor: "Palantir",
    category: "Data",
    summary: "An operating system for an organization's data, with pipelines, an ontology, and operational apps.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current end-user total is not cited on this card.",
    reach: "Deployed by governments and large companies that want one governed model of their operations.",
    licenseName: "Palantir terms",
    licenseNote: "Foundry and Gotham, and the pipelines that feed them, are proprietary.",
    gap: "A warehouse and a BI tool can report. Foundry's ontology and the operational apps are the gap.",
    features: `Ontology | Ontology | Objects such as an order or a truck are defined once and used by every app.
Pipeline | Pipelines | A build transforms raw files into datasets on a schedule.
Code | Code workbooks | Transforms can be written in code with the platform's libraries.
Workshop | Workshop apps | Builds an operational app on the ontology without a separate frontend stack.
Security | Markings | A marking restricts a row or a column to people who hold that mark.
Quiver | Analysis | An analyst explores object data and publishes a result.
AIP | AI platform | A model can read the ontology through the product's controls.
Lineage | Lineage | Shows which dataset a broken pipeline output came from.`,
    links: [["Product", "https://www.palantir.com/platforms/foundry/"], ["Docs", "https://palantir.com/docs/foundry/"]],
    alts: [["Apache Spark", "https://github.com/apache/spark", "Apache-2.0", "An open data-processing engine. It is not an ontology product."]],
  }),
  row({
    id: "uipath",
    name: "UiPath",
    vendor: "UiPath",
    category: "Automation",
    summary: "A robotic-process-automation suite that drives other software from a studio and a robot.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Public company. A current user total is not cited on this card.",
    reach: "The RPA vendor a lot of back offices buy when an old app has no API.",
    licenseName: "UiPath terms",
    licenseNote: "The studio, the robots, and the orchestrator are proprietary.",
    gap: "An open automation runner can click a UI or call an API. UiPath's studio and the attended robots are the gap.",
    features: `Studio | Studio | Designs a process as a flowchart of activities.
Robots | Robots | An unattended robot runs the process on a schedule, or an attended one runs beside a person.
Orchestrator | Orchestrator | Queues jobs, stores assets, and watches which robot is busy.
Selectors | UI selectors | A click targets a button in another application by a selector, not only by pixels.
Document | Document understanding | Extracts fields from an invoice before the robot types them.
Apps | Action center | A person approves a step the robot is not allowed to finish alone.
Integration | Integration service | Calls a SaaS API from the same process that drives a desktop app.
Insights | Insights | Reports how many jobs failed and how long they took.`,
    links: [["Product", "https://www.uipath.com/"], ["Docs", "https://docs.uipath.com/"]],
    alts: [["Robot Framework", "https://github.com/robotframework/robotframework", "Apache-2.0", "An open automation framework. You build the tasks."]],
  }),
  row({
    id: "zapier",
    name: "Zapier",
    vendor: "Zapier",
    category: "Automation",
    summary: "A no-code automation product that connects thousands of apps with triggers and actions.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "Private company. No audited user or revenue total is cited here.",
    reach: "The default if-this-then-that tool for small teams that do not want to host a worker.",
    licenseName: "Zapier terms",
    licenseNote: "The product and the app directory are proprietary.",
    gap: "Activepieces or n8n-style runners can connect APIs you host. Zapier's directory and the hosted runners are the gap. n8n itself is source-available, not OSI.",
    features: `Zaps | Zaps | A trigger in one app starts actions in others.
Steps | Multi-step zaps | A path can filter, format, and branch before the next action.
Tables | Tables | Stores a small table of rows the zap can read.
Interfaces | Interfaces | Builds a form that starts a zap when someone submits it, without writing a front end.
Agents | Agents | A step can ask a model to draft text inside the zap.
Transfer | Transfer | Moves existing rows once, not only new events.
Admin | Admin controls | A company plan can see which zaps are on.
History | Task history | Shows each run and the error the app returned.`,
    links: [["Product", "https://zapier.com/"], ["Docs", "https://docs.zapier.com/"]],
    alts: [["Activepieces", "https://github.com/activepieces/activepieces", "MIT", "An open automation builder you can host."]],
  }),
  row({
    id: "linkedin",
    name: "LinkedIn",
    vendor: "Microsoft",
    category: "Social",
    summary: "A professional network for profiles, posts, jobs, and company pages.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default public resume and hiring network for office workers in many countries.",
    licenseName: "LinkedIn terms",
    licenseNote: "The network, the feed, the jobs product, and the recruiter tools are proprietary.",
    gap: "A federated social server can host profiles and posts. LinkedIn's hiring graph and the ranked feed are the gap.",
    features: `Profile | Public profile | A member page lists work history, education, and a headline that other members can open.
Feed | Home feed | Posts from people and companies you follow, plus suggested posts, land in one scroll.
Jobs | Job posts | An employer publishes a role, and a member can apply with the profile already on the site.
Search | People search | Search filters people by title, company, and location from the public profile fields.
Inbox | Messaging | Members message each other. Recruiter mail sits in the same inbox as ordinary messages.
Pages | Company pages | A company page holds a description, posts, and people who list that employer on their profile.
Groups | Groups | A group collects posts on one professional topic, with its own members and moderators.
Alerts | Notifications | The product reports invitations, replies, and profile views, according to the settings on the account.`,
    links: [["Product", "https://www.linkedin.com/"], ["Docs", "https://www.linkedin.com/help/linkedin"]],
    alts: [["Mastodon", "https://github.com/mastodon/mastodon", "AGPL-3.0", "A federated social server you can host. It is not a job network."]],
  }),
  row({
    id: "x",
    name: "X",
    vendor: "X Corp",
    category: "Social",
    summary: "A public short-post network with replies, reposts, direct messages, and ads.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default public square for news, sports, and running commentary in many countries.",
    licenseName: "X terms",
    licenseNote: "The service, the ranking, and the ad system are proprietary. Some older client code was open. This card is the service.",
    gap: "A federated server can host short posts and replies. X's ranking, ads, and the single global namespace are the gap.",
    features: `Posts | Posts | A post is a short public text, with images or video when the composer allows them.
Replies | Replies | A reply hangs under the post, and the thread can be opened as its own page.
Reposts | Reposts | A repost puts someone else's post onto your profile and into your followers' feeds.
Messages | Direct messages | A private conversation stays off the public profile, between the accounts you choose.
Lists | Lists | A list is a feed of accounts you pick, separate from the ranked home timeline.
Bookmarks | Bookmarks | A private bookmark keeps a post so you can open it later without liking it.
Audio | Spaces | A live audio room has speakers and listeners, and the room ends when the host closes it.
Ads | Ads | Promoted posts are sold to advertisers and labeled in the timeline.`,
    links: [["Product", "https://x.com/"], ["Docs", "https://help.x.com/"]],
    alts: [["Mastodon", "https://github.com/mastodon/mastodon", "AGPL-3.0", "A federated short-post server. Each server chooses its own rules."]],
  }),
  row({
    id: "reddit",
    name: "Reddit",
    vendor: "Reddit",
    category: "Social",
    summary: "A network of topic communities with posts, comments, votes, and moderators.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default place many people go to ask strangers who already care about one narrow topic.",
    licenseName: "Reddit terms",
    licenseNote: "The site, the apps, and the ad system are proprietary. Some public data has been reachable by API under Reddit's own terms.",
    gap: "A federated forum can host communities and votes. Reddit's single account, the apps, and the ad load are the gap.",
    features: `Communities | Communities | Each community has a name, a description, rules, and its own list of posts.
Posts | Posts | A post is a link, a text, or an image, and it belongs to one community.
Comments | Comment threads | Comments nest under the post, and a reader can collapse a branch.
Votes | Votes | Members vote a post or a comment up or down, and the sort uses that score.
Mods | Moderator tools | Moderators remove posts, ban accounts, and set the rules shown on the community.
Profiles | Profiles and karma | A profile collects the posts and comments one account has made.
Chat | Chat | Direct and group chat sits beside the public communities.
Ads | Ads | Promoted posts appear in the feed and are sold through Reddit's ad tools.`,
    links: [["Product", "https://www.reddit.com/"], ["Docs", "https://support.reddithelp.com/"]],
    alts: [["Lemmy", "https://github.com/LemmyNet/lemmy", "AGPL-3.0", "A federated link-and-discussion server you can host."]],
  }),
  row({
    id: "pinterest",
    name: "Pinterest",
    vendor: "Pinterest",
    category: "Social",
    summary: "A visual bookmarking network of pins, boards, and shopping ideas.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default place to save recipes, clothes, and rooms, and a large ad surface for retailers.",
    licenseName: "Pinterest terms",
    licenseNote: "The site, the recommendations, and the ads are proprietary.",
    gap: "A federated photo server can host images and follows. Pinterest's boards, visual search, and shopping tags are the gap.",
    features: `Pins | Pins | A pin is an image, a link, and a short description saved from the web or uploaded.
Boards | Boards | A board groups pins. A board can be secret or visible on the profile.
Home | Home feed | The home feed recommends pins from boards and topics the account has touched.
Search | Visual search | Search takes words or an image and returns similar pins.
Shop | Product pins | A pin can carry a price and a link to a retailer when the catalog is connected.
Ideas | Idea Pins | A multi-page pin tells a short how-to without leaving the app.
Collab | Group boards | More than one account can save pins onto a shared board.
Ads | Ads | An advertiser promotes a pin into the home feed and search results.`,
    links: [["Product", "https://www.pinterest.com/"], ["Docs", "https://help.pinterest.com/"]],
    alts: [["Pixelfed", "https://github.com/pixelfed/pixelfed", "AGPL-3.0", "A federated photo server. It is not a shopping pin board."]],
  }),
  row({
    id: "snapchat",
    name: "Snapchat",
    vendor: "Snap",
    category: "Social",
    summary: "A camera-first messaging app for disappearing chats, stories, and lenses.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default camera and chat app for younger users in the United States and several other countries.",
    licenseName: "Snap terms",
    licenseNote: "The app, the lenses, and the ad system are proprietary.",
    gap: "An open messenger can send photos that expire. Snap's lenses, the map, and the ad machine are the gap.",
    features: `Snaps | Snaps | A photo or a short video is sent to selected friends and is meant to disappear after viewing.
Chat | Chat | Text chat can sit under a snap, with its own retention setting.
Stories | Stories | A story is a sequence of snaps that friends can watch for a limited time.
Lenses | Lenses | The camera applies a face or world effect before the snap is sent.
Spotlight | Spotlight | A public short-video feed shows snaps the creator chose to publish beyond friends.
Map | Snap Map | Friends can share a location on a map, and the map also shows public snaps from a place.
Memories | Memories | Snaps the account saves are kept in a private archive instead of disappearing.
Ads | Ads | Video ads run between stories and in Spotlight.`,
    links: [["Product", "https://www.snapchat.com/"], ["Docs", "https://help.snapchat.com/"]],
    alts: [["Signal-Server", "https://github.com/signalapp/Signal-Server", "AGPL-3.0", "An open messaging server. It does not provide lenses or a public story feed."]],
  }),
  row({
    id: "telegram",
    name: "Telegram",
    vendor: "Telegram",
    category: "Communications",
    summary: "A cloud messaging service with large groups, channels, and bots. The server is closed.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default messenger for large public channels in many countries, alongside a private chat.",
    licenseName: "Telegram terms",
    licenseNote: "Official clients are published as open source. The server that stores cloud chats is not. This card is the service.",
    gap: "Matrix or Signal can host chat you run. Telegram's cloud history, the channels, and the scale of the service are the gap.",
    features: `Chats | Cloud chats | A chat history is stored on Telegram's servers and shows up on each device signed into the account.
Secret | Secret chats | A device-to-device chat is not part of the cloud history.
Groups | Large groups | A group holds a large number of members, with admins and permissions.
Channels | Broadcast channels | A channel has a few publishers and a large number of subscribers.
Bots | Bots | A bot account answers commands and can post into a group or a channel.
Voice | Voice chats | A voice chat or video chat can run inside a group.
Files | Large files | The service accepts files far larger than a typical SMS attachment.
Stickers | Stickers | Sticker packs install onto the account and can be sent in any chat.`,
    links: [["Product", "https://telegram.org/"], ["Docs", "https://core.telegram.org/"]],
    alts: [["Element", "https://github.com/element-hq/element-web", "AGPL-3.0", "An open Matrix client. You still need a homeserver you trust."]],
  }),
  row({
    id: "messenger",
    name: "Messenger",
    vendor: "Meta",
    category: "Communications",
    summary: "Meta's messaging app for chats, calls, and business conversations tied to Facebook accounts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The chat app that rides along with a Facebook account for a very large number of people.",
    licenseName: "Meta terms",
    licenseNote: "The app and the service are proprietary.",
    gap: "An open messenger can do one-to-one chat and calls. Messenger's tie to Facebook profiles and business inboxes is the gap.",
    features: `Chats | Chats | A one-to-one or group thread holds text, photos, and voice notes.
Calls | Calls | Voice and video calls start from the same thread.
Stories | Stories | A story is a short-lived photo or video shown to friends.
Encryption | Encrypted chats | Some chats can be switched to an end-to-end encrypted mode the product offers.
Reactions | Reactions | A tap adds a reaction to a message without sending a new line of text.
Business | Business inbox | A business can answer a customer from a page inbox connected to Messenger.
Rooms | Rooms | A room link lets people join a video call without being friends first.
Apps | Chat extensions | A conversation can open a small app, such as a poll or a game, inside the thread.`,
    links: [["Product", "https://www.messenger.com/"], ["Docs", "https://www.facebook.com/help/messenger-app"]],
    alts: [["Element", "https://github.com/element-hq/element-web", "AGPL-3.0", "An open Matrix client for chat and calls. It is not tied to a Facebook profile."]],
  }),
  row({
    id: "wecom",
    name: "WeCom",
    vendor: "Tencent",
    category: "Communications",
    summary: "Tencent's work chat for company directories, approvals, and customer contacts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default work messenger at a large number of companies in China.",
    licenseName: "WeCom terms",
    licenseNote: "The app and the company admin console are proprietary.",
    gap: "An open team chat can hold channels and files. WeCom's company directory, check-in, and customer tools are the gap.",
    features: `Chat | Work chat | Employees message in direct chats and groups that an admin can govern.
Directory | Directory | The company address book lists people, departments, and titles.
Meetings | Meetings | A meeting can be started from a chat, with a link for the people invited.
Approvals | Approvals | A leave or expense request moves through a chain the admin configured.
Clock | Check-in | The app can record that someone checked in at a workplace.
Customers | Customer contacts | A salesperson keeps an external contact separate from the internal directory.
Docs | Shared files | Files and short docs live next to the chat that discusses them.
Announce | Announcements | An admin posts a notice that reaches the company or one department.`,
    links: [["Product", "https://work.weixin.qq.com/"], ["Docs", "https://developer.work.weixin.qq.com/document"]],
    alts: [["Zulip", "https://github.com/zulip/zulip", "Apache-2.0", "An open team chat with topics. It is not a company HR directory."]],
  }),
  row({
    id: "lark",
    name: "Lark",
    vendor: "ByteDance",
    category: "Collaboration",
    summary: "ByteDance's work suite of chat, docs, sheets, meetings, and approvals. Also sold as Feishu.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default all-in-one office suite at many companies in China and at some international teams.",
    licenseName: "Lark terms",
    licenseNote: "The suite, the clients, and the admin console are proprietary.",
    gap: "Open docs, chat, and calendars exist as separate servers. Lark's single account across all of them is the gap.",
    features: `Messenger | Messenger | Work chat has threads, groups, and a directory of coworkers.
Docs | Docs | A document is edited by several people, with comments on a passage.
Sheets | Sheets | A spreadsheet lives in the same account as the doc and the chat.
Meetings | Meetings | Video meetings start from a calendar event or from a chat.
Calendar | Calendar | Events, rooms, and invitations sit on the company calendar.
Approval | Approval | A form such as a purchase or a leave request routes to the people the admin named.
Wiki | Wiki | A wiki space holds longer pages the team treats as the record.
Minutes | Meeting notes | A meeting can produce notes and a transcript inside the same suite.`,
    links: [["Product", "https://www.larksuite.com/"], ["Docs", "https://open.larksuite.com/"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file, calendar, and office server you host. Chat is a separate app."]],
  }),
  row({
    id: "kakaotalk",
    name: "KakaoTalk",
    vendor: "Kakao",
    category: "Communications",
    summary: "Kakao's messenger, the default chat app for a large share of people in South Korea.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The chat app a phone in South Korea is expected to have, plus open chats and channels.",
    licenseName: "Kakao terms",
    licenseNote: "The app and the service are proprietary.",
    gap: "An open messenger can replace one-to-one chat. KakaoTalk's open chats, channels, and the national default status are the gap.",
    features: `Chats | One-to-one chat | Two accounts exchange text, photos, and voice notes.
Groups | Group chats | A group has members, a name, and a shared photo roll.
Open | Open chat | A link lets strangers join a room that is not limited to the address book.
Calls | Voice and video | A call starts from a chat without a separate phone number.
Profile | Profiles | A profile shows a photo, a status, and a background to friends.
Channels | Channels | A brand or a creator posts to followers who added the channel.
Emoticons | Emoticons | Paid and free emoticon sets send inside a chat.
Albums | Photo albums | Photos shared in a chat can be browsed as an album later.`,
    links: [["Product", "https://www.kakaocorp.com/page/service/service/KakaoTalk"], ["Docs", "https://developers.kakao.com/"]],
    alts: [["Element", "https://github.com/element-hq/element-web", "AGPL-3.0", "An open Matrix client. It is not a national default messenger."]],
  }),
  row({
    id: "threads",
    name: "Threads",
    vendor: "Meta",
    category: "Social",
    summary: "Meta's public text network, tied to an Instagram account.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A text feed for people who already have Instagram, offered by Meta as a public conversation app.",
    licenseName: "Meta terms",
    licenseNote: "The app and the ranking are proprietary.",
    gap: "A federated text server covers posts and follows. Threads' tie to Instagram and the ranking are the gap.",
    features: `Posts | Text posts | A post is a short public text, with images or a link when the composer allows them.
Replies | Replies | Replies nest under a post, and the author can limit who may reply.
Reposts | Reposts | A repost puts another account's post onto your profile.
Feed | Following feed | The following feed shows posts from accounts you chose, separate from a ranked view.
Profile | Profile | The profile reuses the Instagram identity and shows the posts from this app.
Search | Search | Search finds accounts and posts by words.
Activity | Activity | Likes, replies, and follows show up in an activity list.
Links | Link posts | A post can carry a link out to a page on the web.`,
    links: [["Product", "https://www.threads.net/"], ["Docs", "https://help.instagram.com/"]],
    alts: [["Mastodon", "https://github.com/mastodon/mastodon", "AGPL-3.0", "A federated text server. An account there is not an Instagram login."]],
  }),
  row({
    id: "nextdoor",
    name: "Nextdoor",
    vendor: "Nextdoor",
    category: "Social",
    summary: "A neighborhood social network that checks an address before a person can post.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The local feed many neighborhoods in the United States use for lost pets, recommendations, and alerts.",
    licenseName: "Nextdoor terms",
    licenseNote: "The network and the verification process are proprietary.",
    gap: "A local forum you host can cover a street. Nextdoor's address check and the national neighborhood graph are the gap.",
    features: `Feed | Neighborhood feed | Posts are limited to people the product has placed in the same neighborhood.
Verify | Address check | A new member confirms an address before posting in that neighborhood.
Recs | Recommendations | Neighbors ask for and leave recommendations for a local business.
Sale | For sale | A post lists an item for sale to nearby members.
Alerts | Alerts | Urgent posts, such as a safety notice, are marked differently from ordinary chatter.
Business | Business pages | A local business can have a page and reply to recommendations.
Groups | Groups | A group inside the neighborhood collects posts on one interest.
Events | Events | A neighbor posts a local event with a time and a place.`,
    links: [["Product", "https://nextdoor.com/"], ["Docs", "https://help.nextdoor.com/"]],
    alts: [["Mastodon", "https://github.com/mastodon/mastodon", "AGPL-3.0", "A federated social server. It does not verify a street address."]],
  }),
  row({
    id: "google-ads",
    name: "Google Ads",
    vendor: "Google",
    category: "Advertising",
    summary: "Google's ad system for search keywords, display, YouTube, and Performance Max.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product. Google reports advertising revenue for the company, not a user count for this tool.",
    reach: "The default place a business buys ads on Google Search and on a large share of the web.",
    licenseName: "Google Ads terms",
    licenseNote: "The auction, the editor, and the measurement tags are proprietary.",
    gap: "An open ad server can store creatives and count clicks on sites you run. Google's search auction is the gap.",
    features: `Search | Search campaigns | An advertiser bids on keywords and writes the text ad that can show on search.
Display | Display campaigns | Image ads run on sites that sell inventory through Google's display network.
Video | Video campaigns | Video ads can run on YouTube from the same account.
PMax | Performance Max | One campaign lets Google place ads across its properties from the assets you upload.
Conv | Conversion tags | A tag on the site reports a purchase or a signup back to the campaign.
Audiences | Audiences | A list of site visitors or customer emails can be used to limit who sees an ad.
Editor | Editor | Bulk changes to campaigns can be staged and uploaded.
Billing | Billing | The account charges a payment method and shows what each campaign spent.`,
    links: [["Product", "https://ads.google.com/"], ["Docs", "https://developers.google.com/google-ads/api/docs/start"]],
    alts: [["Revive Adserver", "https://github.com/revive-adserver/revive-adserver", "GPL-2.0", "An open ad server you host. It is not a search auction."]],
  }),
  row({
    id: "meta-ads",
    name: "Meta Ads",
    vendor: "Meta",
    category: "Advertising",
    summary: "Meta's ads manager for Facebook, Instagram, and the rest of its placements.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default paid distribution tool for brands that already have a Facebook or Instagram page.",
    licenseName: "Meta terms",
    licenseNote: "Ads Manager, the pixel, and the delivery system are proprietary.",
    gap: "An open ad server counts impressions on sites you control. Meta's social placements and the pixel are the gap.",
    features: `Manager | Ads Manager | Campaigns, ad sets, and ads are edited in one account shared by a business.
Pixel | Pixel | A snippet on a website reports views and purchases back to the ad account.
Audiences | Custom audiences | A file of customers, or people who visited the site, becomes an audience.
Placements | Placements | One ad can run in the feed, in stories, and in other Meta placements.
Catalog | Catalog ads | A product catalog feeds ads that show a specific item and its price.
Lead | Lead forms | A form opens inside the app so a person can submit contact details without a landing page.
Tests | Experiments | The account can split delivery to compare two creatives or two audiences.
Billing | Billing | Spend, a payment method, and a daily or lifetime budget sit on the ad account.`,
    links: [["Product", "https://www.facebook.com/business/ads"], ["Docs", "https://developers.facebook.com/docs/marketing-apis/"]],
    alts: [["Revive Adserver", "https://github.com/revive-adserver/revive-adserver", "GPL-2.0", "An open ad server you host. It does not buy Facebook inventory."]],
  }),
  row({
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    vendor: "Microsoft",
    category: "Advertising",
    summary: "LinkedIn's ad product for sponsored posts, message ads, and lead forms aimed at job titles.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The ad account business-to-business teams use when they want to reach a job title rather than a hobby.",
    licenseName: "LinkedIn terms",
    licenseNote: "Campaign Manager and the matched audiences are proprietary.",
    gap: "An open ad server does not know a member's employer. That professional graph is the gap.",
    features: `Sponsored | Sponsored content | A post from a company page is paid to reach people beyond its followers.
Message | Message ads | A sponsored message arrives in a member's LinkedIn inbox.
Leads | Lead gen forms | A form is prefilled from the member profile and sent to the advertiser.
Match | Matched audiences | The account can target people who visited the site or who are in an uploaded list.
Titles | Job targeting | Targeting can name a job title, a company, or an industry from the profile.
Conv | Conversion tracking | A site tag reports a signup or a demo request back to the campaign.
Budget | Budgets | Each campaign has a budget and a schedule.
Reports | Reporting | The account shows impressions, clicks, and leads by campaign.`,
    links: [["Product", "https://business.linkedin.com/marketing-solutions/ads"], ["Docs", "https://learn.microsoft.com/en-us/linkedin/marketing/"]],
    alts: [["Revive Adserver", "https://github.com/revive-adserver/revive-adserver", "GPL-2.0", "An open ad server. It has no professional-profile graph."]],
  }),
  row({
    id: "tiktok-ads",
    name: "TikTok Ads",
    vendor: "ByteDance",
    category: "Advertising",
    summary: "TikTok's ad manager for in-feed video ads, a pixel, and shop campaigns.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The paid side of a very large short-video app, used by brands that need that audience.",
    licenseName: "TikTok terms",
    licenseNote: "Ads Manager, the pixel, and the delivery system are proprietary.",
    gap: "An open ad server cannot place a video inside TikTok's feed. The placement and the pixel are the gap.",
    features: `Infeed | In-feed ads | A video ad runs between organic posts in the For You feed.
Spark | Spark ads | An existing organic post can be authorized and run as an ad.
Pixel | Pixel | A site tag reports a view or a purchase so the campaign can optimize for it.
Audiences | Audiences | Lookalike and retargeting audiences are built from pixel events or a customer file.
Objectives | Objectives | A campaign starts from a goal such as traffic, app installs, or catalog sales.
Creative | Creative tools | The manager can trim a video and add a caption before it is submitted.
Shop | Shop ads | A catalog from a TikTok shop can feed product ads.
Reports | Reporting | Spend, views, and conversions are reported by campaign and by ad.`,
    links: [["Product", "https://ads.tiktok.com/"], ["Docs", "https://ads.tiktok.com/help/"]],
    alts: [["Revive Adserver", "https://github.com/revive-adserver/revive-adserver", "GPL-2.0", "An open ad server you host. It does not sell TikTok inventory."]],
  }),
  row({
    id: "the-trade-desk",
    name: "The Trade Desk",
    vendor: "The Trade Desk",
    category: "Advertising",
    summary: "A demand-side platform for buying ads across many publishers from one seat.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A widely used buying tool for agencies that bid on display, video, and connected TV.",
    licenseName: "The Trade Desk terms",
    licenseNote: "The bidder, the seat, and the audience tools are proprietary.",
    gap: "An open ad server stores ads you own. A cross-publisher bidder and its identity graph are the gap.",
    features: `Bids | Bidding | The platform answers bid requests from many supply sources on the advertiser's behalf.
Inventory | Inventory | A buyer can include or exclude publishers, apps, and connected-TV sources.
Audiences | Audience segments | Third-party and first-party segments limit which impressions are bought.
Frequency | Frequency caps | A campaign can cap how often one person is shown the same ad.
Pacing | Pacing | Spend is spread across the flight instead of exhausting the budget on the first day.
Creatives | Creatives | Display, video, and other creative files are checked and attached to ad groups.
Identity | Identity | The platform offers its own identity tools for reaching a person across sites.
Reports | Reporting | Buyers pull delivery, reach, and conversion reports from the seat.`,
    links: [["Product", "https://www.thetradedesk.com/"], ["Docs", "https://partner.thetradedesk.com/v3/portal"]],
    alts: [["Revive Adserver", "https://github.com/revive-adserver/revive-adserver", "GPL-2.0", "An open ad server for inventory you control. It is not a demand-side bidder."]],
  }),
  row({
    id: "braze",
    name: "Braze",
    vendor: "Braze",
    category: "Marketing",
    summary: "A customer-engagement suite for email, push, in-app messages, and canvases.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common messaging platform at consumer apps that send more than a newsletter.",
    licenseName: "Braze terms",
    licenseNote: "The workspace, the SDKs' hosted features, and the canvases are proprietary.",
    gap: "An open marketing app can send email and track clicks. Braze's cross-channel canvas and the mobile SDKs are the gap.",
    features: `Campaigns | Campaigns | A campaign sends one message, or a short series, to a segment.
Canvas | Canvas | A canvas is a branching journey across email, push, and in-app steps.
Push | Push | The mobile SDK receives a push notification targeted at a segment.
Inapp | In-app messages | A message appears inside the app when a person opens a screen.
Email | Email | An email template is sent to a segment, with clicks reported back.
Segments | Segments | A segment filters users by events and attributes the app has sent.
Cards | Content cards | A feed inside the app shows messages a person can open later.
Analytics | Analytics | The workspace reports sends, opens, and conversions for each step.`,
    links: [["Product", "https://www.braze.com/"], ["Docs", "https://www.braze.com/docs"]],
    alts: [["Mautic", "https://github.com/mautic/mautic", "GPL-3.0", "An open marketing app. Confirm the current license file. It is not a hosted mobile SDK."]],
  }),
  row({
    id: "customer-io",
    name: "Customer.io",
    vendor: "Customer.io",
    category: "Marketing",
    summary: "Event-triggered messaging for email and push, aimed at product teams.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common tool when a product wants a message to fire because a user did, or did not do, something.",
    licenseName: "Customer.io terms",
    licenseNote: "The workspace and the delivery service are proprietary.",
    gap: "An open mailer can send a campaign on a schedule. Firing a message from your own product events is the gap people pay for.",
    features: `People | People | Each person has attributes and a list of events the product has sent in.
Events | Event triggers | A campaign can start when an event arrives, or when an expected event does not.
Segments | Segments | A segment is a saved filter over attributes and events.
Email | Email | A template with liquid-style fields is sent through Customer.io's mail path.
Push | Push | The same campaign can send a mobile push to a device token.
Workflows | Workflows | Delays, branches, and sends are drawn as a workflow on the person.
Snippets | Snippets | A reusable block of content can be dropped into more than one template.
Metrics | Metrics | Sends, opens, clicks, and conversions are counted per campaign.`,
    links: [["Product", "https://customer.io/"], ["Docs", "https://docs.customer.io/"]],
    alts: [["Mautic", "https://github.com/mautic/mautic", "GPL-3.0", "An open marketing app you host. You wire the events yourself."]],
  }),
  row({
    id: "attentive",
    name: "Attentive",
    vendor: "Attentive",
    category: "Marketing",
    summary: "A text-message marketing platform for retail sign-up units and SMS journeys.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common SMS vendor for online stores that want a phone number at the moment of a visit.",
    licenseName: "Attentive terms",
    licenseNote: "The sign-up units, the messaging, and the compliance tooling are proprietary.",
    gap: "An open mailer is not an SMS carrier. The sign-up unit and the carrier relationship are the gap.",
    features: `Signup | Sign-up units | A popup or a landing unit asks for a phone number and records consent.
Segments | Segments | Subscribers are split by what they bought or which unit they used.
Journeys | Journeys | A welcome series and a browse reminder are timed text messages.
Two | Two-way text | A subscriber can reply, and a person at the brand can answer in the inbox.
Quiet | Quiet hours | Sending can be held overnight so a text does not arrive at a bad hour.
Offers | Offers | A message can include a discount code the store created.
Compliance | Compliance records | The account keeps the consent record attached to the number.
Reports | Reporting | The account shows sends, clicks, and revenue it attributes to a text.`,
    links: [["Product", "https://www.attentive.com/"], ["Docs", "https://docs.attentive.com/"]],
    alts: [["Listmonk", "https://github.com/knadh/listmonk", "AGPL-3.0", "An open mailing-list manager. It does not send carrier SMS."]],
  }),
  row({
    id: "bigcommerce",
    name: "BigCommerce",
    vendor: "BigCommerce",
    category: "Commerce",
    summary: "A hosted store for a catalog, checkout, themes, and apps.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common store platform for brands that want a hosted checkout without running Magento.",
    licenseName: "BigCommerce terms",
    licenseNote: "The control panel, the checkout, and the theme runtime are proprietary.",
    gap: "An open commerce backend can run a catalog and a checkout on a server you host. BigCommerce's hosted panel is the gap.",
    features: `Catalog | Catalog | Products have variants, prices, and images managed in the control panel.
Checkout | Checkout | A hosted checkout takes payment and shipping details.
Themes | Themes | A theme controls the storefront. Developers can edit the theme files.
Apps | Apps | An app from the marketplace adds a feature and calls the store API.
Promos | Promotions | A coupon or an automatic discount applies at checkout.
Multi | Multi-storefront | One catalog can feed more than one storefront.
Orders | Orders | An order moves through payment, fulfillment, and refund states.
Tax | Tax and shipping | Shipping zones and tax rules are configured in the panel.`,
    links: [["Product", "https://www.bigcommerce.com/"], ["Docs", "https://developer.bigcommerce.com/docs"]],
    alts: [["Medusa", "https://github.com/medusajs/medusa", "MIT", "The core repository is MIT aside from enterprise files called out in its license. Read LICENSE."]],
  }),
  row({
    id: "adobe-commerce",
    name: "Adobe Commerce",
    vendor: "Adobe",
    category: "Commerce",
    summary: "Adobe's paid commerce suite on the Magento line, including cloud hosting and B2B features.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The commerce suite large catalogs use when they want Adobe's cloud edition rather than the open Magento release.",
    licenseName: "Adobe terms",
    licenseNote: "Adobe Commerce is the paid product. Magento Open Source is a separate edition under the Open Software License.",
    gap: "Magento Open Source already runs a catalog and checkout. Adobe's cloud operations and the paid B2B modules are the gap.",
    features: `Catalog | Catalog | Products, categories, and price rules are managed in the admin.
Checkout | Checkout | The storefront checkout collects shipping, tax, and payment.
Admin | Admin roles | Staff accounts have roles that limit which admin screens they can open.
B2B | Company accounts | A B2B module can give a buyer company its own roles and shared catalogs.
Staging | Content staging | A merchandiser can schedule a catalog or a page change.
Page | Page Builder | A page is laid out in a visual builder instead of only in code.
Cloud | Cloud hosting | Adobe's cloud edition runs the store on infrastructure Adobe operates.
API | APIs | Headless clients call the store through the documented APIs.`,
    links: [["Product", "https://business.adobe.com/products/magento/magento-commerce.html"], ["Docs", "https://developer.adobe.com/commerce/docs/"]],
    alts: [["Magento Open Source", "https://github.com/magento/magento2", "OSL-3.0", "The open Magento edition. Adobe Commerce is the paid product on that line."]],
  }),
  row({
    id: "etsy",
    name: "Etsy",
    vendor: "Etsy",
    category: "Commerce",
    summary: "A marketplace where independent sellers list handmade, vintage, and craft-supply goods.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default marketplace many small makers use instead of opening their own store.",
    licenseName: "Etsy terms",
    licenseNote: "The marketplace, search, and the seller tools are proprietary.",
    gap: "An open store can sell your own goods. Etsy's buyer traffic and the shared search are the gap.",
    features: `Listings | Listings | A seller writes a title, a price, photos, and variations for an item.
Shop | Shop | The shop page collects that seller's listings and policies.
Search | Search | Buyers search the whole marketplace, not one shop.
Checkout | Checkout | Etsy takes payment and pays the seller under its seller terms.
Ads | Etsy Ads | A seller can pay to promote a listing inside Etsy search.
Reviews | Reviews | A buyer leaves a review on a listing after a purchase.
Messages | Messages | A buyer and a seller write to each other about an order.
Labels | Shipping labels | A seller can buy a shipping label from inside the order.`,
    links: [["Product", "https://www.etsy.com/"], ["Docs", "https://developers.etsy.com/documentation/"]],
    alts: [["WooCommerce", "https://github.com/woocommerce/woocommerce", "GPL-2.0", "An open store plugin for WordPress. It does not bring Etsy's buyers."]],
  }),
  row({
    id: "amazon-seller",
    name: "Amazon Seller Central",
    vendor: "Amazon",
    category: "Commerce",
    summary: "The seller console for listing products, fulfilling orders, and advertising on Amazon.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The console a large share of online retail brands open every morning.",
    licenseName: "Amazon terms",
    licenseNote: "Seller Central, Fulfillment by Amazon, and the ad console are proprietary. This card is the seller tool, not the shopping site.",
    gap: "An open store sells on a site you own. Amazon's buyer demand and its warehouses are the gap.",
    features: `Listings | Listings | A seller creates a product detail page or offers an item on a page that already exists.
Orders | Orders | New orders appear in a queue with the buyer shipping address.
FBA | Fulfillment by Amazon | Inventory sent to Amazon's warehouses is picked and shipped by Amazon.
Ads | Advertising | Sponsored product ads are bought from the same seller account.
Payments | Payments | Amazon disburses sales on its payment schedule and shows the fees.
Cases | Cases | A buyer message or a policy notice opens a case the seller answers.
Inventory | Inventory | Stock levels are tracked per warehouse, including FBA stock.
Reports | Reports | Business reports show sessions, conversion, and fees by product.`,
    links: [["Product", "https://sellercentral.amazon.com/"], ["Docs", "https://developer-docs.amazon.com/sp-api/"]],
    alts: [["Medusa", "https://github.com/medusajs/medusa", "MIT", "An open commerce backend for a store you own. It is not a marketplace."]],
  }),
  row({
    id: "ebay",
    name: "eBay",
    vendor: "eBay",
    category: "Commerce",
    summary: "A marketplace for fixed-price listings and auctions, with a seller hub.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running marketplace for used goods, collectibles, and small sellers.",
    licenseName: "eBay terms",
    licenseNote: "The marketplace and Seller Hub are proprietary.",
    gap: "An open store does not include a global auction marketplace. The buyer pool is the gap.",
    features: `Listings | Listings | A listing has a title, item specifics, photos, and a price or an auction start.
Auctions | Auctions | Bidders raise the price until the listing ends.
Fixed | Buy It Now | A fixed-price listing sells immediately at the stated price.
Hub | Seller Hub | Orders, messages, and listings are managed from one seller home.
Messages | Messages | Buyers ask questions on the listing, and the seller answers there.
Feedback | Feedback | After a sale, each side can leave feedback on the account.
Promoted | Promoted listings | A seller can pay to have a listing shown more often in search.
Shipping | Shipping | The seller sets a service and can buy a label through the order.`,
    links: [["Product", "https://www.ebay.com/"], ["Docs", "https://developer.ebay.com/"]],
    alts: [["WooCommerce", "https://github.com/woocommerce/woocommerce", "GPL-2.0", "An open store on WordPress. It does not include eBay's buyers."]],
  }),
  row({
    id: "wix",
    name: "Wix",
    vendor: "Wix",
    category: "Design",
    summary: "A hosted website builder with templates, a visual editor, apps, and a store.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default website builder for small businesses that do not want to run a server.",
    licenseName: "Wix terms",
    licenseNote: "The editor, the hosting, and the app market are proprietary.",
    gap: "WordPress the software is open and can build a similar site. Wix's hosted editor is the thing people pay for.",
    features: `Editor | Visual editor | Pages are built by dragging sections, with no requirement to write the HTML.
Templates | Templates | A new site starts from a template for a restaurant, a portfolio, or another type.
Apps | App market | An app adds bookings, a chat, or another feature inside the site.
Store | Store | Products, checkout, and orders can be turned on for the same site.
Blog | Blog | Posts are written in the same account as the pages.
Domains | Domains | A custom domain connects to the hosted site.
SEO | SEO tools | Each page has a title, a description, and other fields the editor exposes for search.
Members | Members | A members area can require a login before a page is shown.`,
    links: [["Product", "https://www.wix.com/"], ["Docs", "https://dev.wix.com/"]],
    alts: [["WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "The open CMS. WordPress.com hosting is a separate service."]],
  }),
  row({
    id: "wordpress-com",
    name: "WordPress.com",
    vendor: "Automattic",
    category: "Design",
    summary: "Automattic's hosted WordPress. The software is GPL. This card is the hosting service.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The hosted way to run WordPress when a person does not want to administer a server.",
    licenseName: "WordPress.com terms",
    licenseNote: "WordPress the software is GPL. WordPress.com, the hosting plans, and some hosted features are a proprietary service.",
    gap: "The same software can be hosted by anyone. The managed platform, the domain upsell, and the support are the gap.",
    features: `Sites | Hosted sites | A site is created on Automattic's servers from the dashboard.
Themes | Themes | A theme is chosen from the ones the plan allows.
Plugins | Plugins | Paid plans can install plugins. The free hosted tier is more limited.
Domain | Domains | A domain can be registered or connected in the same dashboard.
Stats | Stats | A simple stats view shows visits without installing a separate analytics plugin.
Editor | Block editor | Pages and posts are edited with the block editor on the hosted site.
Commerce | Commerce | A store can be added on plans that include those features.
Reader | Reader | The account can follow other WordPress.com blogs in a reader.`,
    links: [["Product", "https://wordpress.com/"], ["Docs", "https://wordpress.com/support/"]],
    alts: [["WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "The software itself. You bring the hosting."]],
  }),
  row({
    id: "ecwid",
    name: "Ecwid",
    vendor: "Lightspeed",
    category: "Commerce",
    summary: "A store that embeds into an existing site, with a catalog and checkout.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common add-on when a site already exists and only the cart is missing.",
    licenseName: "Ecwid terms",
    licenseNote: "The control panel and the embedded storefront are proprietary.",
    gap: "WooCommerce or Medusa can add a cart to a site you host. Ecwid's embed and the hosted catalog are the gap.",
    features: `Embed | Embeddable store | A snippet drops the catalog and cart into a page on another site.
Catalog | Catalog | Products, options, and stock are edited in Ecwid's panel.
Checkout | Checkout | Checkout runs through Ecwid, including the payment step.
Social | Social selling | The same catalog can be pointed at a social shop where that integration exists.
Shipping | Shipping | Rates and zones are configured once for the embedded store.
Tax | Taxes | Tax rules apply at checkout based on the settings in the panel.
Apps | Apps | An app extends the panel or the storefront.
Orders | Orders | Orders from every embed show up in one order list.`,
    links: [["Product", "https://www.ecwid.com/"], ["Docs", "https://docs.ecwid.com/"]],
    alts: [["WooCommerce", "https://github.com/woocommerce/woocommerce", "GPL-2.0", "An open store for WordPress. You host it with the site."]],
  }),
  row({
    id: "square",
    name: "Square",
    vendor: "Block",
    category: "Finance",
    summary: "Block's point-of-sale and payments products for in-person and online selling.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default card reader and register for small shops, cafes, and sellers.",
    licenseName: "Square terms",
    licenseNote: "The reader, the point-of-sale app, and the payment service are proprietary.",
    gap: "An open ERP can record a sale. The card reader, the payment network, and the hardware are the gap.",
    features: `Register | Point of sale | A tablet register rings up items, tax, and a tender type.
Reader | Card reader | A reader takes a card or a phone tap and sends the charge to Square.
Online | Online checkout | A payment link or an online store charges a card without the counter.
Items | Item library | Items, modifiers, and prices are shared by the register and the online store.
Staff | Staff | Employees clock in and are limited to the register functions a manager allows.
Inventory | Inventory | Stock can decrement when an item is sold.
Payouts | Payouts | Card sales are deposited on Square's payout schedule.
Reports | Sales reports | The dashboard shows sales by item, by tender, and by time.`,
    links: [["Product", "https://squareup.com/"], ["Docs", "https://developer.squareup.com/docs"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with a point of sale. It does not include a card network."]],
  }),
  row({
    id: "paypal",
    name: "PayPal",
    vendor: "PayPal",
    category: "Finance",
    summary: "An online wallet and checkout used to pay and to get paid.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default way to pay on the web when a buyer does not want to type a card into the store.",
    licenseName: "PayPal terms",
    licenseNote: "The wallet, the checkout, and the risk systems are proprietary.",
    gap: "An open billing engine can invoice and record a payment. PayPal's consumer wallet and buyer protection program are the gap.",
    features: `Checkout | Checkout buttons | A button sends the buyer to PayPal to approve a payment, then back to the store.
Wallet | Balance | A person can hold a balance and pay from it.
Invoices | Invoices | A seller sends an invoice and the buyer pays it through PayPal.
Payouts | Payouts | A platform can send money to a batch of receivers.
Subscriptions | Subscriptions | A recurring charge bills a buyer on a schedule.
Disputes | Disputes | A buyer can open a dispute, and the seller answers with evidence.
Protection | Seller protection | Eligible transactions can be covered by PayPal's seller protection rules.
Api | APIs | A store charges and refunds through the documented APIs.`,
    links: [["Product", "https://www.paypal.com/"], ["Docs", "https://developer.paypal.com/docs/"]],
    alts: [["Kill Bill", "https://github.com/killbill/killbill", "Apache-2.0", "An open billing engine. It is not a consumer wallet."]],
  }),
  row({
    id: "adyen",
    name: "Adyen",
    vendor: "Adyen",
    category: "Finance",
    summary: "A payments company for online checkout, in-person terminals, and marketplace payouts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The payments stack at many large retailers that want one company for online and in-store.",
    licenseName: "Adyen terms",
    licenseNote: "The platform, the risk tools, and the terminals are proprietary.",
    gap: "An open billing engine does not acquire card payments worldwide. The acquiring and the risk tools are the gap.",
    features: `Checkout | Checkout | Drop-in components or an API take a payment on the merchant's site.
Methods | Payment methods | The same integration can offer cards and local methods Adyen supports.
Terminals | Terminals | An in-person terminal talks to the same merchant account as the website.
Risk | Risk rules | Rules score a payment and can block it before capture.
Platforms | Platforms | A marketplace can split a payment and pay out sellers.
Payouts | Payouts | Funds are paid to the merchant's bank on Adyen's schedule.
Reports | Reports | Settlement and accounting reports download from the customer area.
Tokens | Stored details | A shopper's card can be stored as a token for a later charge.`,
    links: [["Product", "https://www.adyen.com/"], ["Docs", "https://docs.adyen.com/"]],
    alts: [["Kill Bill", "https://github.com/killbill/killbill", "Apache-2.0", "An open subscription-billing engine. You still need a payment provider."]],
  }),
  row({
    id: "plaid",
    name: "Plaid",
    vendor: "Plaid",
    category: "Finance",
    summary: "A data network that lets an app read bank-account data the account holder approves.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The link many United States finance apps use when they ask to connect a bank.",
    licenseName: "Plaid terms",
    licenseNote: "The network, the connections, and the dashboard are proprietary.",
    gap: "A budget app you host can store transactions you import yourself. A network of live bank connections is the gap.",
    features: `Link | Link | A popup lets a person pick a bank and sign in, then hand the app a token.
Accounts | Accounts | The app can list accounts and balances the person approved.
Transactions | Transactions | The app can pull transactions from the linked account.
Auth | Auth | Account and routing numbers can be retrieved where that product is enabled.
Identity | Identity | The connection can return name and address data the product exposes.
Balance | Balance | A call reads the current balance without downloading every transaction.
Items | Items | Each linked login is an item the developer can see in the dashboard.
Webhooks | Webhooks | Plaid notifies the app when new transactions are ready.`,
    links: [["Product", "https://plaid.com/"], ["Docs", "https://plaid.com/docs/"]],
    alts: [["Actual", "https://github.com/actualbudget/actual", "MIT", "A local-first budget app. It is not a bank-data network."]],
  }),
  row({
    id: "brex",
    name: "Brex",
    vendor: "Brex",
    category: "Finance",
    summary: "Corporate cards, reimbursements, and bill pay for startups and finance teams.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common finance stack at venture-backed companies that do not want a traditional bank card.",
    licenseName: "Brex terms",
    licenseNote: "The cards, the underwriting, and the spend software are proprietary.",
    gap: "An open finance app can record expenses. Issuing a card and underwriting the company are the gap.",
    features: `Cards | Employee cards | An admin issues a card with a limit to an employee.
Limits | Spend limits | A limit can be tied to a merchant category or a budget.
Reimburse | Reimbursements | An employee submits an out-of-pocket expense and is paid back.
Bills | Bill pay | A vendor invoice is approved and paid from the account.
Receipts | Receipts | A photo of a receipt is matched to a card charge.
Export | Accounting export | Coded transactions export to the ledger the company uses.
Travel | Travel | Trips can be booked and the charges land on the same card program.
Rewards | Rewards | Card spend can earn rewards under the program's own rules.`,
    links: [["Product", "https://www.brex.com/"], ["Docs", "https://developer.brex.com/"]],
    alts: [["Firefly III", "https://github.com/firefly-iii/firefly-iii", "AGPL-3.0", "An open finance app. It does not issue cards."]],
  }),
  row({
    id: "ramp",
    name: "Ramp",
    vendor: "Ramp",
    category: "Finance",
    summary: "Corporate cards and spend software that pushes coded expenses into an accounting system.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A widely used card-and-spend product at finance teams that want controls before the charge, not after.",
    licenseName: "Ramp terms",
    licenseNote: "The cards, the controls, and the accounting sync are proprietary.",
    gap: "An open ledger records what already happened. Issuing the card and blocking a charge in real time are the gap.",
    features: `Cards | Cards | Employees get cards with limits set by an admin.
Controls | Spend controls | A rule can block a merchant category or require a receipt.
Bills | Bill pay | Vendor bills are approved and scheduled for payment.
Sync | Accounting sync | Transactions are coded and pushed to the company's ledger.
Reimburse | Reimbursements | Out-of-pocket spend is submitted and approved in the same product.
Procurement | Procurement | A purchase request can be approved before the money is spent.
Receipts | Receipt matching | A receipt is attached to the card line it explains.
Insights | Spend insights | The dashboard groups spend by vendor, team, and category.`,
    links: [["Product", "https://ramp.com/"], ["Docs", "https://docs.ramp.com/"]],
    alts: [["Firefly III", "https://github.com/firefly-iii/firefly-iii", "AGPL-3.0", "An open finance app for money you already have. It does not issue cards."]],
  }),
  row({
    id: "expensify",
    name: "Expensify",
    vendor: "Expensify",
    category: "Finance",
    summary: "Expense reports, receipt capture, and reimbursement for employees and finance teams.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running expense tool, especially where a photo of a receipt is the whole workflow.",
    licenseName: "Expensify terms",
    licenseNote: "The app, the receipt scanning, and the reimbursement service are proprietary.",
    gap: "An open finance app can store an expense you type in. The scanning service and the company card feed are the gap.",
    features: `Reports | Expense reports | An employee groups expenses into a report and submits it.
Scan | Receipt scan | A photo of a receipt is read for the amount and the merchant.
Approve | Approvals | A manager approves or rejects the report before anyone is paid.
Reimburse | Reimbursement | Approved out-of-pocket spend is paid back to the employee.
Cards | Company cards | Card charges can land in the same report as cash expenses.
Policy | Policy | A workspace sets categories, required receipts, and limits.
Export | Accounting export | A finished report exports to the ledger the company uses.
Categories | Categories | Each line is coded to a category the finance team defined.`,
    links: [["Product", "https://www.expensify.com/"], ["Docs", "https://integrations.expensify.com/Integration-Server/doc/"]],
    alts: [["Firefly III", "https://github.com/firefly-iii/firefly-iii", "AGPL-3.0", "An open finance app. You enter or import the transactions yourself."]],
  }),
  row({
    id: "bill-com",
    name: "BILL",
    vendor: "BILL",
    category: "Finance",
    summary: "Accounts-payable software for vendor invoices, approvals, and payments.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common bill-pay system for companies that have outgrown paying vendors from a bank website.",
    licenseName: "BILL terms",
    licenseNote: "The payment network and the approval product are proprietary.",
    gap: "An open ERP can record a vendor bill. Sending the payment and the approval chain are the gap.",
    features: `Inbox | Invoice inbox | Vendor invoices arrive by email or upload and wait to be coded.
Vendors | Vendor records | Each vendor has a name, a payment method, and a history of bills.
Approvals | Approvals | A bill cannot be paid until the people in the chain approve it.
Pay | Payments | Approved bills are paid by ACH or another method the product supports.
Sync | Accounting sync | Coded bills sync to the ledger so the books match the payments.
Recurring | Recurring bills | A regular vendor can be set to repeat without a new upload.
Roles | Roles | A clerk, an approver, and a payer can be different people.
Audit | Audit trail | The product keeps who approved a bill and when it was paid.`,
    links: [["Product", "https://www.bill.com/"], ["Docs", "https://developer.bill.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with vendor bills. You still move the money yourself."]],
  }),
  row({
    id: "netsuite",
    name: "NetSuite",
    vendor: "Oracle",
    category: "Business",
    summary: "Oracle's cloud ERP for the ledger, orders, inventory, and financial close.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default cloud ERP for mid-market companies that have outgrown a small-business ledger.",
    licenseName: "Oracle terms",
    licenseNote: "The application, SuiteScript customizations as a hosted product, and the data are proprietary.",
    gap: "An open ERP covers a ledger, inventory, and orders. NetSuite's hosted scale and the partner ecosystem are the gap.",
    features: `Ledger | General ledger | Journal entries, accounts, and subsidiaries live in one ledger.
Order | Order management | A sales order becomes an invoice and a fulfillment.
Stock | Inventory | Items, warehouses, and on-hand counts are tracked with the orders.
Close | Financial close | The period is closed after reconciliations and adjusting entries.
Roles | Roles | An accountant, a warehouse clerk, and a salesperson see different screens.
Script | SuiteScript | Custom logic runs on records inside the account.
Consolidate | Consolidation | Results from more than one subsidiary can be combined.
CRM | Customer records | Accounts and contacts sit next to the orders they place.`,
    links: [["Product", "https://www.netsuite.com/"], ["Docs", "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP you host, with a ledger, stock, and orders."]],
  }),
  row({
    id: "freshbooks",
    name: "FreshBooks",
    vendor: "FreshBooks",
    category: "Finance",
    summary: "Invoicing, expenses, and time tracking for freelancers and small firms.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common first ledger for a freelancer who needs to send an invoice today.",
    licenseName: "FreshBooks terms",
    licenseNote: "The service and the apps are proprietary.",
    gap: "An open ledger can send an invoice. FreshBooks' payment links and the hosted client portal are the gap.",
    features: `Invoices | Invoices | A client receives an invoice and can pay from the link.
Estimates | Estimates | An estimate can be turned into an invoice after the client accepts it.
Expenses | Expenses | A receipt is attached to an expense and coded to a category.
Time | Time tracking | Hours on a project can be billed onto an invoice.
Clients | Clients | Each client has contact details and a history of invoices.
Payments | Online payments | A card or bank payment can be taken on the invoice where enabled.
Reports | Reports | Profit, expenses, and tax summaries come from the same books.
Projects | Projects | Time and expenses can be grouped under a project for one client.`,
    links: [["Product", "https://www.freshbooks.com/"], ["Docs", "https://www.freshbooks.com/api/start"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with invoices and expenses. You host it."]],
  }),
  row({
    id: "sage-intacct",
    name: "Sage Intacct",
    vendor: "Sage",
    category: "Finance",
    summary: "Sage's cloud accounting system for multi-entity companies and dimensions.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common ledger when a finance team needs dimensions and more than one entity.",
    licenseName: "Sage terms",
    licenseNote: "The application and the close tools are proprietary.",
    gap: "An open ERP can keep a ledger. Intacct's dimensions, the close, and the accountant workflow are the gap.",
    features: `Ledger | General ledger | Accounts, journals, and entities are the core of the books.
Dimensions | Dimensions | A transaction can be tagged with more than one dimension, such as a department and a project.
AP | Accounts payable | Vendor bills are entered, approved, and paid.
AR | Accounts receivable | Customer invoices are issued and cash is applied.
Close | Close | A checklist walks the team through the period close.
Dash | Dashboards | Finance dashboards read from the same ledger.
Audit | Audit trail | Changes to a transaction are kept for later review.
Consolidate | Consolidation | More than one entity can be rolled into one set of statements.`,
    links: [["Product", "https://www.sage.com/en-us/products/sage-intacct/"], ["Docs", "https://developer.intacct.com/api/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ledger and ERP. It is not Intacct's dimension model."]],
  }),
  row({
    id: "concur",
    name: "SAP Concur",
    vendor: "SAP",
    category: "Finance",
    summary: "SAP's travel and expense product for requests, receipts, and reimbursement.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The expense system at a large number of big companies that already buy from SAP.",
    licenseName: "SAP terms",
    licenseNote: "The travel booking, the expense product, and the policy engine are proprietary.",
    gap: "An open finance app stores receipts. Concur's travel inventory and the corporate card feeds are the gap.",
    features: `Request | Travel requests | A trip is requested and approved before the tickets are bought.
Expense | Expense reports | After the trip, charges are collected into a report.
Receipts | Receipts | A photo is attached to a line and checked against policy.
Policy | Policy checks | A line that breaks a rule is flagged before approval.
Cards | Card feeds | Corporate card charges arrive in the report without retyping.
Approve | Approvals | A manager approves the report, then finance reimburses it.
Itinerary | Itineraries | Flights and hotels from the booking tool show on the trip.
Export | Export | Approved spend is sent to the company's ledger.`,
    links: [["Product", "https://www.concur.com/"], ["Docs", "https://developer.concur.com/"]],
    alts: [["Firefly III", "https://github.com/firefly-iii/firefly-iii", "AGPL-3.0", "An open finance app. It does not book flights or pull a corporate card feed."]],
  }),
  row({
    id: "lever",
    name: "Lever",
    vendor: "Lever",
    category: "People",
    summary: "An applicant tracking system for postings, interviews, and offers.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common hiring system at technology companies that want the pipeline in one place.",
    licenseName: "Lever terms",
    licenseNote: "The hiring workspace and the candidate data are proprietary.",
    gap: "An open applicant tracker can list candidates. Lever's scheduling, the career site, and the reporting are the gap.",
    features: `Posts | Job postings | A job has a description, a department, and a public posting.
Pipeline | Pipeline | Candidates move through stages from application to offer.
Score | Scorecards | Interviewers submit structured feedback after a conversation.
Schedule | Scheduling | Interview times are proposed against the interviewers' calendars.
Offers | Offers | An offer is drafted and approved before it is sent.
Site | Career site | The public job list is hosted from the same account.
Source | Sources | The pipeline can show which board or referral produced a candidate.
Reports | Reports | Time in stage and source quality are reported for the jobs.`,
    links: [["Product", "https://www.lever.co/"], ["Docs", "https://hire.lever.co/developer/documentation"]],
    alts: [["OpenCATS", "https://github.com/opencats/OpenCATS", "MPL-2.0", "An open applicant tracker. The project also carries a second license. Read both. It is an older codebase."]],
  }),
  row({
    id: "ashby",
    name: "Ashby",
    vendor: "Ashby",
    category: "People",
    summary: "A hiring platform that combines the applicant pipeline with scheduling and analytics.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A newer default ATS at many startups that want one system for the whole interview loop.",
    licenseName: "Ashby terms",
    licenseNote: "The product and the candidate data are proprietary.",
    gap: "An open tracker stores candidates. Ashby's scheduling and the hiring analytics are the gap.",
    features: `Jobs | Jobs | A job has a team, a location, and an interview plan.
Plan | Interview plans | The plan names the stages and which interview happens at each one.
Schedule | Scheduling | Candidates pick a time that fits every interviewer on that stage.
Feedback | Feedback forms | Each interviewer fills a form tied to the interview they ran.
Offers | Offers | An offer letter is generated and sent from the candidate's record.
Analytics | Analytics | The account reports pass-through rates by stage and by source.
CRM | Nurture | A person who is not hired can be kept for a later role.
Permissions | Permissions | A hiring manager sees their jobs, not every search in the company.`,
    links: [["Product", "https://www.ashbyhq.com/"], ["Docs", "https://developers.ashbyhq.com/"]],
    alts: [["OpenCATS", "https://github.com/opencats/OpenCATS", "MPL-2.0", "An open applicant tracker under MPL-2.0 plus a second license. Read both."]],
  }),
  row({
    id: "lattice",
    name: "Lattice",
    vendor: "Lattice",
    category: "People",
    summary: "Performance reviews, goals, and engagement surveys for managers and HR.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common performance suite at companies that want reviews off a spreadsheet.",
    licenseName: "Lattice terms",
    licenseNote: "The review cycles, the surveys, and the people data are proprietary.",
    gap: "An open survey tool can ask questions. Lattice's review cycle tied to the org chart is the gap.",
    features: `Reviews | Review cycles | A cycle asks employees and managers to write reviews in a window.
Goals | Goals | A person sets goals and updates progress during the cycle.
Feedback | Feedback | A coworker can leave feedback outside the formal review.
Surveys | Engagement surveys | HR sends a survey and reads results by team.
Org | Org chart | The product knows who manages whom, and routes the review that way.
One | One-on-ones | A manager keeps an agenda for recurring meetings with a report.
Updates | Updates | A short weekly update can be requested from each person.
Calibration | Calibration | Managers compare ratings in a session before they are shared.`,
    links: [["Product", "https://lattice.com/"], ["Docs", "https://developers.lattice.com/"]],
    alts: [["LimeSurvey", "https://github.com/LimeSurvey/LimeSurvey", "GPL-2.0", "An open survey server. It is not a performance-review product."]],
  }),
  row({
    id: "adp",
    name: "ADP",
    vendor: "ADP",
    category: "People",
    summary: "A payroll and HR service that calculates pay and files payroll taxes.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "One of the largest payroll processors, especially for companies that do not want to file payroll tax themselves.",
    licenseName: "ADP terms",
    licenseNote: "The payroll service, the filings, and the HR screens are proprietary.",
    gap: "An open ERP can calculate a pay run on data you enter. Filing taxes and the bank disbursement are the gap.",
    features: `Payroll | Payroll | A pay run calculates gross pay, deductions, and net pay.
Tax | Tax filing | Payroll taxes are calculated and filed where the service includes that.
Direct | Direct deposit | Net pay is sent to employee bank accounts.
Time | Time | Hours from a time clock can feed the pay run.
HR | Employee records | Hire date, job, and pay rate live on the employee.
Benefits | Benefits | Deductions for benefits can be taken in the same pay run.
Self | Self-service | An employee can view a pay stub and change tax withholding.
Reports | Reports | Payroll registers and tax reports download for the books.`,
    links: [["Product", "https://www.adp.com/"], ["Docs", "https://developers.adp.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with a payroll module. You remain the employer of record."]],
  }),
  row({
    id: "ukg",
    name: "UKG",
    vendor: "UKG",
    category: "People",
    summary: "A workforce suite for time, scheduling, payroll, and HR, from the company formed by Ultimate and Kronos.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common system for hourly workforces that need a schedule and a time clock tied to payroll.",
    licenseName: "UKG terms",
    licenseNote: "The suite and the time clocks' cloud service are proprietary.",
    gap: "An open ERP can store employees and a simple pay run. UKG's scheduling for a large hourly workforce is the gap.",
    features: `Schedule | Scheduling | Managers build a schedule of shifts for an hourly team.
Time | Timekeeping | Punches from a clock or an app become hours on the timesheet.
Payroll | Payroll | Approved hours flow into a pay run so payroll uses the time that managers already signed off.
Accrual | Accruals | Vacation and sick balances increment under a rule.
HR | HR records | Jobs, pay, and personal data sit on the employee.
Labor | Labor rules | The schedule can warn when a shift would break a labor rule the account configured.
Self | Employee self-service | A worker can see the schedule and request a swap.
Analytics | Analytics | Labor cost and attendance are reported by location.`,
    links: [["Product", "https://www.ukg.com/"], ["Docs", "https://developer.ukg.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP with employees and payroll. It is not a workforce-management suite."]],
  }),
  row({
    id: "deel",
    name: "Deel",
    vendor: "Deel",
    category: "People",
    summary: "A platform for hiring and paying people in other countries, including contractor payments.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common way for a company to employ or contract someone in a country where it has no entity.",
    licenseName: "Deel terms",
    licenseNote: "The contracts, the local employment service, and the payments are proprietary.",
    gap: "An open HR app can store a person and a salary. Being the employer of record in another country is the gap.",
    features: `Contracts | Contracts | A contractor or employee agreement is generated from a template.
Pay | Global payroll | Pay is calculated under the local rules the service claims to handle.
Contractors | Contractor invoices | A contractor submits an invoice and is paid through the platform.
Compliance | Compliance documents | Identity and tax documents are collected on the person.
Equipment | Equipment | A laptop order can be tracked for a remote hire where that feature is offered.
Time | Time off | Employees request leave in the same account that holds the contract.
Expenses | Expenses | A remote employee submits an expense for reimbursement.
Reports | Cost reports | The company sees the cost of each person, including the service fees.`,
    links: [["Product", "https://www.deel.com/"], ["Docs", "https://developer.deel.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open HR and payroll record. It does not employ people for you."]],
  }),
  row({
    id: "remote",
    name: "Remote",
    vendor: "Remote",
    category: "People",
    summary: "An employer-of-record and contractor-payment service for hiring outside your own country.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A competitor to Deel, used by companies that want payroll in a country where they have no legal entity.",
    licenseName: "Remote terms",
    licenseNote: "The employment service and the payroll are proprietary.",
    gap: "Open HR software records an employee. It does not become the legal employer in another country.",
    features: `EOR | Employer of record | Remote employs the person locally and the client company directs the work.
Payroll | Local payroll | Pay, tax, and statutory contributions are run in that country.
Contractors | Contractors | A contractor is paid against an invoice without an employment contract.
Onboard | Onboarding | Documents and a start date are collected before the first pay.
Benefits | Benefits | Local benefits can be attached to the employment where the country product includes them.
Time | Time off | Leave requests follow the local policy the employment uses.
Deposit | Deposits | The client funds payroll before Remote pays the employee.
Support | Local support | The employee can ask the service about local payroll questions.`,
    links: [["Product", "https://remote.com/"], ["Docs", "https://remote.com/resources"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open employee and payroll record you run yourself."]],
  }),
  row({
    id: "workable",
    name: "Workable",
    vendor: "Workable",
    category: "People",
    summary: "A recruiting tool for job posts, an applicant pipeline, and interview kits.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common ATS for small and mid-size companies that hire in more than one country.",
    licenseName: "Workable terms",
    licenseNote: "The product and the job-board distribution are proprietary.",
    gap: "An open tracker keeps candidates. Posting out to many job boards from one form is the gap.",
    features: `Jobs | Job editor | A job description is written once and can be sent to more than one board.
Pipeline | Pipeline | Applicants move through stages the team defined.
Profiles | Candidate profiles | A profile collects the resume, the source, and the messages.
Kits | Interview kits | Interviewers get a scorecard for the conversation they are about to have.
Schedule | Scheduling | A candidate books a time from a set of slots.
Careers | Careers page | The company's open jobs render on a careers page.
Reports | Reports | The account shows how many candidates each source produced.
Messages | Messages | Email to a candidate is kept on the profile.`,
    links: [["Product", "https://www.workable.com/"], ["Docs", "https://workable.readme.io/reference/generate-an-access-token"]],
    alts: [["OpenCATS", "https://github.com/opencats/OpenCATS", "MPL-2.0", "An open applicant tracker. Read the second license the repository also carries."]],
  }),
  row({
    id: "freshdesk",
    name: "Freshdesk",
    vendor: "Freshworks",
    category: "Support",
    summary: "A support desk for email tickets, a help center, and automations.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common help desk for small and mid-size support teams.",
    licenseName: "Freshworks terms",
    licenseNote: "The desk, the help center, and the automations are proprietary.",
    gap: "An open desk can take email tickets. Freshdesk's help-center themes and the marketplace are the gap.",
    features: `Tickets | Tickets | An email from a customer becomes a ticket with a status and an assignee.
Help | Help center | Articles are published so a customer can solve a question without a ticket.
Automations | Automations | A rule assigns a ticket or sets a priority when it arrives.
Collision | Collision detection | An agent can see when a teammate is already replying.
SLA | SLA policies | A timer tracks whether the first reply landed inside the promise.
Portal | Customer portal | A customer signs in to see their own tickets.
Apps | Apps | A marketplace app adds a side panel, such as an order lookup.
Reports | Reports | Volume, first-response time, and resolution time are reported.`,
    links: [["Product", "https://www.freshworks.com/freshdesk/"], ["Docs", "https://developers.freshdesk.com/"]],
    alts: [["Zammad", "https://github.com/zammad/zammad", "AGPL-3.0", "An open help desk you host."]],
  }),
  row({
    id: "front",
    name: "Front",
    vendor: "Front",
    category: "Support",
    summary: "A shared inbox that treats email, chat, and SMS as one queue for a team.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common inbox for teams that live in email and do not want a classic ticket number.",
    licenseName: "Front terms",
    licenseNote: "The inbox, the routing, and the integrations are proprietary.",
    gap: "An open help desk can share an email box. Front's comment-behind-the-message workflow is the gap.",
    features: `Inboxes | Shared inboxes | A team reads and replies from one address, such as support@ or billing@.
Comments | Internal comments | A teammate comments on a message without the customer seeing it.
Assign | Assignment | A conversation is assigned to a person or left in a queue.
Rules | Rules | A rule routes a message by the sender, the subject, or a tag.
Channels | Channels | Email, chat, and SMS can land in the same conversation list where connected.
Collision | Collision | The inbox shows when someone else is looking at or replying to the same thread.
Analytics | Analytics | Response time and volume are reported by inbox and by teammate.
Contacts | Contacts | A contact record collects every conversation with that person.`,
    links: [["Product", "https://front.com/"], ["Docs", "https://dev.frontapp.com/reference/introduction"]],
    alts: [["FreeScout", "https://github.com/freescout-help-desk/freescout", "AGPL-3.0", "An open shared inbox you host."]],
  }),
  row({
    id: "helpscout",
    name: "Help Scout",
    vendor: "Help Scout",
    category: "Support",
    summary: "A help desk built around an email-like inbox and a docs site.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common desk for small support teams that want to sound like a person, not a ticket system.",
    licenseName: "Help Scout terms",
    licenseNote: "The inbox, the beacon widget, and the docs hosting are proprietary.",
    gap: "An open desk covers shared email. Help Scout's docs site and the in-app beacon are the gap.",
    features: `Inbox | Inbox | Customer email is a conversation a teammate can assign and reply to.
Docs | Docs | A docs site is edited in the same account and published on your domain.
Beacon | Beacon | A widget on your site lets a customer search docs or start a conversation.
Saved | Saved replies | A reply can be inserted from a library of answers.
Workflows | Workflows | A rule tags or assigns a conversation when it arrives.
Reports | Reports | The account reports conversations and response times.
Customers | Customer profiles | Previous conversations with the same person are one click away.
Satisfaction | Ratings | A customer can rate the reply after the conversation closes.`,
    links: [["Product", "https://www.helpscout.com/"], ["Docs", "https://developer.helpscout.com/"]],
    alts: [["Zammad", "https://github.com/zammad/zammad", "AGPL-3.0", "An open help desk with email and a knowledge base."]],
  }),
  row({
    id: "gorgias",
    name: "Gorgias",
    vendor: "Gorgias",
    category: "Support",
    summary: "A support desk built for online stores, with the order visible next to the ticket.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common inbox for Shopify stores that want the order, the ticket, and a macro in one screen.",
    licenseName: "Gorgias terms",
    licenseNote: "The desk and the store integrations are proprietary.",
    gap: "An open inbox can answer email. Pulling the live order into the reply box is the gap.",
    features: `Tickets | Tickets | Email, chat, and social messages become tickets in one queue.
Orders | Order sidebar | The customer's recent orders from the store show beside the ticket.
Macros | Macros | A macro inserts a reply and can perform an action, such as adding a tag.
Rules | Rules | A rule auto-tags or closes a ticket that matches a pattern.
Intent | Intents | The product can suggest what the customer is asking, such as a refund or an order status.
Help | Help center | Articles can deflect a question before it becomes a ticket.
Revenue | Revenue stats | The account attributes some orders to a conversation the team handled.
Users | Team assignments | Tickets are assigned to agents and teams.`,
    links: [["Product", "https://www.gorgias.com/"], ["Docs", "https://developers.gorgias.com/"]],
    alts: [["Chatwoot", "https://github.com/chatwoot/chatwoot", "MIT", "The project publishes a mixed license header. Read LICENSE. It is an inbox, not a store desk."]],
  }),
  row({
    id: "kustomer",
    name: "Kustomer",
    vendor: "Kustomer",
    category: "Support",
    summary: "A customer-service CRM that keeps a timeline of every conversation with a person.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A support platform used by brands that want one timeline instead of a pile of tickets.",
    licenseName: "Kustomer terms",
    licenseNote: "The timeline, the routing, and the product are proprietary.",
    gap: "An open desk stores conversations. Kustomer's single customer timeline across channels is the gap.",
    features: `Timeline | Customer timeline | Orders, chats, and emails for one person appear on one timeline.
Conversations | Conversations | A new message continues the person, rather than starting from zero.
Routing | Routing | A conversation is sent to a queue by channel or by a field on the customer.
Shortcuts | Shortcuts | Agents insert a saved reply so a common answer goes out with the customer's details filled in.
Assist | Assist | Suggested replies can be offered from the knowledge the account has, where enabled.
Reporting | Reporting | Handle time and volume are reported by queue.
Channels | Channels | Email, chat, and messaging channels feed the same timeline.
Objects | Custom objects | The account can store an object, such as an order, next to the person.`,
    links: [["Product", "https://www.kustomer.com/"], ["Docs", "https://developer.kustomer.com/"]],
    alts: [["Zammad", "https://github.com/zammad/zammad", "AGPL-3.0", "An open help desk. Conversations are tickets, not one lifelong timeline."]],
  }),
  row({
    id: "genesys",
    name: "Genesys",
    vendor: "Genesys",
    category: "Support",
    summary: "A contact-center platform for voice, chat, and the routing that decides who answers.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default cloud contact center for large support and sales operations.",
    licenseName: "Genesys terms",
    licenseNote: "The cloud contact center, the routing, and the agent desktop are proprietary.",
    gap: "An open PBX can ring a queue. Genesys' workforce routing and the omnichannel desktop are the gap.",
    features: `Voice | Voice | Inbound and outbound calls are handled by agents in a queue.
Digital | Digital channels | Chat and messaging can land in the same agent desktop.
Routing | Routing | A rule sends the interaction to a queue based on skill or intent.
IVR | IVR | A caller hears a menu before an agent is involved.
Desktop | Agent desktop | The agent sees the customer and the script in one workspace.
WFM | Workforce management | Forecasts and schedules staff the queues.
Quality | Quality | A supervisor can review a recorded interaction.
Reports | Reports | Service level, handle time, and abandon rate are reported.`,
    links: [["Product", "https://www.genesys.com/"], ["Docs", "https://developer.genesys.cloud/"]],
    alts: [["Asterisk", "https://github.com/asterisk/asterisk", "GPL-2.0", "An open PBX. It is also offered under other terms. It is not a full contact-center suite."]],
  }),
  row({
    id: "indesign",
    name: "InDesign",
    vendor: "Adobe",
    category: "Design",
    summary: "Adobe's page-layout program for books, magazines, and other long documents.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default layout tool in professional publishing and in many marketing studios.",
    licenseName: "Adobe terms",
    licenseNote: "The application is proprietary. It is sold in Adobe's apps subscription.",
    gap: "An open desktop-publishing program can set type on a page. InDesign's production tools and the industry file format are the gap.",
    features: `Pages | Master pages | A master page holds the page number, the margins, and items that repeat.
Type | Typography | Styles control paragraphs and characters across a long document.
Frames | Frames | Text and images sit in frames that can be linked so a story flows.
Links | Linked images | A placed image stays linked to the file on disk and can be updated.
Export | PDF export | A press-ready or interactive PDF is exported from the layout.
Tables | Tables | A table is styled and can flow with the text.
Books | Books | Several documents can be combined into one book with a shared style source.
Preflight | Preflight | The program warns about missing fonts, low-resolution images, and overflow.`,
    links: [["Product", "https://www.adobe.com/products/indesign.html"], ["Docs", "https://helpx.adobe.com/indesign/user-guide.html"]],
    alts: [["Scribus", "https://www.scribus.net/", "GPL-2.0-or-later", "An open page-layout program. It does not open every InDesign package."]],
  }),
  row({
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    vendor: "Blackmagic Design",
    category: "Design",
    summary: "A video editor and color tool. The free download is still proprietary. Studio is paid.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A widely used editor, especially for color, in film and in online video.",
    licenseName: "Blackmagic terms",
    licenseNote: "Both the free application and Resolve Studio are proprietary. A no-cost download is not an open-source license.",
    gap: "An open editor can cut a timeline. Resolve's color page and the industry install base are the gap.",
    features: `Cut | Cut and edit pages | A timeline holds video and audio clips with trims and transitions.
Color | Color page | Nodes grade a shot. A still can be saved and compared.
Fairlight | Fairlight | Audio is mixed on its own page with tracks and effects.
Fusion | Fusion | Motion graphics and compositing are done on a node page.
Media | Media pool | Bins organize source clips before they go on a timeline.
Deliver | Deliver | A timeline is exported to a codec and a destination.
Collab | Project libraries | A project can be stored for more than one editor, in the editions that include it.
Studio | Studio features | The paid Studio edition adds features such as additional noise reduction and collaboration tools Blackmagic lists for that edition.`,
    links: [["Product", "https://www.blackmagicdesign.com/products/davinciresolve"], ["Docs", "https://www.blackmagicdesign.com/products/davinciresolve/training"]],
    alts: [["Kdenlive", "https://invent.kde.org/multimedia/kdenlive", "GPL-2.0-or-later", "An open timeline editor from KDE."]],
  }),
  row({
    id: "pro-tools",
    name: "Pro Tools",
    vendor: "Avid",
    category: "Design",
    summary: "Avid's digital audio workstation, a default in commercial music and film sound.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The session format many commercial studios still expect to receive.",
    licenseName: "Avid terms",
    licenseNote: "The application and the session format are proprietary.",
    gap: "An open workstation can record and mix. Pro Tools' session format and the studio install base are the gap.",
    features: `Sessions | Sessions | A session holds tracks, the tempo, and the audio files.
Record | Recording | Audio is recorded onto a track while other tracks play.
Edit | Editing | Clips are trimmed, faded, and moved on the timeline.
Mix | Mixing | Each track has a fader, pan, inserts, and sends.
MIDI | MIDI | MIDI tracks can drive a virtual instrument.
Plugins | Plugins | AAX plugins process audio on a track and can automate their parameters with the session.
Video | Video | A picture can be locked to the session so sound is edited to it.
Bounce | Bounce | A mix is rendered to a file to leave the session.`,
    links: [["Product", "https://www.avid.com/pro-tools"], ["Docs", "https://www.avid.com/resource-center/pro-tools-documentation"]],
    alts: [["Ardour", "https://github.com/Ardour/ardour", "GPL-2.0", "An open digital audio workstation. Read the license on the tag you build."]],
  }),
  row({
    id: "ableton",
    name: "Ableton Live",
    vendor: "Ableton",
    category: "Design",
    summary: "A music workstation with a clip view for playing ideas and an arrangement view for the song.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default instrument for electronic music and for performers who launch clips on stage.",
    licenseName: "Ableton terms",
    licenseNote: "The application, the instruments, and the packs are proprietary.",
    gap: "An open workstation can sequence audio. Live's clip launcher and the stock devices are the gap.",
    features: `Session | Session view | Clips are launched in a grid, which is how a set is played live.
Arrange | Arrangement view | The same clips are laid out on a timeline as a finished song.
Devices | Devices | Instruments and effects ship with the program and sit on a track.
Warp | Warping | An audio clip is stretched to the project tempo.
MIDI | MIDI editing | Notes are drawn and quantized in a piano roll.
Racks | Racks | Several devices can be grouped into one instrument rack.
Push | Hardware control | Ableton's Push controller drives the session. The hardware is a separate product.
Export | Export | The arrangement is rendered to an audio file.`,
    links: [["Product", "https://www.ableton.com/en/live/"], ["Docs", "https://help.ableton.com/"]],
    alts: [["Ardour", "https://github.com/Ardour/ardour", "GPL-2.0", "An open recorder and arranger. It does not have Live's session view."]],
  }),
  row({
    id: "logic-pro",
    name: "Logic Pro",
    vendor: "Apple",
    category: "Design",
    summary: "Apple's music production application for recording, MIDI, and mixing on the Mac.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default full studio app for a large number of musicians who already use a Mac.",
    licenseName: "Apple terms",
    licenseNote: "The application and the included sound library are proprietary.",
    gap: "An open workstation records and mixes. Logic's sound library and the Mac integration are the gap.",
    features: `Tracks | Tracks | Audio and software-instrument tracks are recorded into a project.
Library | Sound library | Drummer, synths, and patches ship with the application.
Piano | Piano roll | MIDI notes are edited on a grid with quantization.
Mixer | Mixer | Channel strips have EQ, compression, and sends.
Plugins | Audio Units | Third-party Audio Unit plugins load on a channel.
Flex | Flex Time | An audio region is stretched so a performance lands on the grid.
Score | Score | MIDI can be viewed as notation and printed or edited as a score inside the same project.
Bounce | Bounce | A project is bounced to a stereo file or to stems.`,
    links: [["Product", "https://www.apple.com/logic-pro/"], ["Docs", "https://support.apple.com/logic-pro"]],
    alts: [["Ardour", "https://github.com/Ardour/ardour", "GPL-2.0", "An open workstation that runs on more than one operating system."]],
  }),
  row({
    id: "solidworks",
    name: "SOLIDWORKS",
    vendor: "Dassault Systèmes",
    category: "Design",
    summary: "A mechanical CAD program for parts, assemblies, and drawings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default mechanical CAD tool in machine design and in many engineering schools.",
    licenseName: "Dassault terms",
    licenseNote: "The application and the models' native format are proprietary.",
    gap: "An open parametric modeler can build parts. SOLIDWORKS' assembly performance and the drawing tools are the gap.",
    features: `Parts | Part modeling | A part is built from sketches and features such as extrudes and cuts.
Assemblies | Assemblies | Parts are mated together into an assembly.
Drawings | Drawings | A 2D drawing with dimensions is generated from the model.
Config | Configurations | One file can hold variations, such as two lengths of the same part.
Toolbox | Toolbox | Standard fasteners can be dropped into an assembly from a library.
Simulation | Simulation | A study can check stress on a part in the editions that include it.
PDM | Data management | Versions of files can be stored in a vault product sold alongside.
Import | Import and export | STEP and other exchange files move geometry to another CAD tool.`,
    links: [["Product", "https://www.solidworks.com/"], ["Docs", "https://help.solidworks.com/"]],
    alts: [["FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open parametric modeler. It is not a drop-in SOLIDWORKS replacement."]],
  }),
  row({
    id: "revit",
    name: "Revit",
    vendor: "Autodesk",
    category: "Design",
    summary: "Autodesk's building-design application for a model shared by architecture, structure, and MEP.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default building-information model on a large share of commercial architecture projects.",
    licenseName: "Autodesk terms",
    licenseNote: "The application and the project file are proprietary.",
    gap: "Open BIM tools can read and write IFC. Revit's single parametric building model is the gap.",
    features: `Model | Building model | Walls, floors, roofs, and rooms are objects in one model, not separate drawings.
Views | Views | Plans, sections, and schedules are views of that same model.
Families | Families | A door or a window is a family with parameters.
Worksets | Worksharing | More than one person works in a central model through local copies.
Sheets | Sheets | Drawings are placed on sheets for issue.
Discipline | Disciplines | Architecture, structure, and systems can live in linked models.
Schedules | Schedules | A door schedule is a report of the doors in the model, not a table typed by hand.
IFC | IFC exchange | The model can be exported to IFC for someone who does not have Revit.`,
    links: [["Product", "https://www.autodesk.com/products/revit/"], ["Docs", "https://help.autodesk.com/view/RVT/2025/ENU/"]],
    alts: [["FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open modeler. It is not a multi-discipline building model."]],
  }),
  row({
    id: "fusion-360",
    name: "Fusion",
    vendor: "Autodesk",
    category: "Design",
    summary: "Autodesk's cloud-connected CAD and CAM program for parts and toolpaths.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common CAD tool for startups, hardware teams, and hobbyists who want one program for design and machining.",
    licenseName: "Autodesk terms",
    licenseNote: "The application and the cloud document storage are proprietary. A free personal license is still not open source.",
    gap: "An open parametric modeler can design a part. Fusion's cloud documents and the CAM toolpaths are the gap.",
    features: `Design | Parametric design | A timeline of sketches and features builds the part.
Assemble | Assemblies | Components are jointed into an assembly.
Cloud | Cloud documents | The file is stored in Autodesk's cloud and opened from there.
Render | Rendering | A visual is rendered from the model with materials and a camera, then saved as an image.
CAM | Manufacturing | Toolpaths are generated from the model for a mill or a printer.
Draw | Drawings | A 2D drawing is created from the design.
Sim | Simulation | A study can be run on the model in the workspaces that include it.
Share | Share links | A view-only link can be sent to someone who does not have the file.`,
    links: [["Product", "https://www.autodesk.com/products/fusion-360/"], ["Docs", "https://help.autodesk.com/view/fusion360/ENU/"]],
    alts: [["FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open parametric modeler with a path workbench. You keep the files."]],
  }),
  row({
    id: "rhino",
    name: "Rhino",
    vendor: "Robert McNeel & Associates",
    category: "Design",
    summary: "A 3D modeler known for NURBS surfaces, used in architecture, jewelry, and industrial design.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The modeler many designers open when the shape is freer than a mechanical part.",
    licenseName: "McNeel terms",
    licenseNote: "Rhino and the Grasshopper environment it ships are proprietary.",
    gap: "An open modeler can build surfaces. Rhino's NURBS tools and Grasshopper are the gap.",
    features: `NURBS | NURBS modeling | Curves and surfaces are edited by their control points.
Meshes | Meshes | A mesh can be created or imported next to the NURBS model.
Draft | Drafting | 2D curves and dimensions sit in the same file.
Grasshopper | Grasshopper | A visual script builds geometry from components without writing the whole program.
Plugins | Plugins | A plugin adds an analysis or a fabrication tool.
Render | Rendering | A viewport or a renderer shows materials on the model.
Layouts | Layouts | A layout sheet prints a view of the model with a scale.
Exchange | File exchange | STEP, IGES, and other formats move the geometry to another tool.`,
    links: [["Product", "https://www.rhino3d.com/"], ["Docs", "https://developer.rhino3d.com/"]],
    alts: [["FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open modeler. Its surface tools are not Rhino's."]],
  }),
  row({
    id: "unity",
    name: "Unity",
    vendor: "Unity",
    category: "Design",
    summary: "A proprietary game engine and editor for real-time 3D projects.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "One of the two engines most commercial game studios and many interactive projects still choose between.",
    licenseName: "Unity terms",
    licenseNote: "The editor and the runtime license are proprietary. This card is the engine product, not a game made with it.",
    gap: "An open engine can ship a real-time 3D project. Unity's asset store, the editor, and the company runtime terms are the gap.",
    features: `Editor | Editor | Scenes, objects, and components are edited in a visual editor.
Script | Scripting | Gameplay is written in C# against the engine API.
Assets | Asset pipeline | Models, textures, and audio are imported into the project.
Physics | Physics | Colliders and rigid bodies are simulated by the engine.
UI | UI toolkit | In-game and editor interfaces are built from the UI tools.
Platforms | Platform export | A project is built for the platforms the license allows.
Services | Online services | Optional company services cover ads, multiplayer helpers, and similar add-ons.
Store | Asset store | Packages are bought from Unity's store and imported.`,
    links: [["Product", "https://unity.com/"], ["Docs", "https://docs.unity.com/"]],
    alts: [["Godot", "https://github.com/godotengine/godot", "MIT", "An open game engine under the MIT license."]],
  }),
  row({
    id: "unreal",
    name: "Unreal Engine",
    vendor: "Epic Games",
    category: "Design",
    summary: "Epic's real-time 3D engine. The source can be read. The license is not an OSI license.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The other default commercial engine, especially for high-detail games and virtual production.",
    licenseName: "Unreal Engine EULA",
    licenseNote: "Epic publishes the engine source under its own EULA. That is source-available. It is not an OSI-approved open-source license. This card is not marked proprietary for that reason.",
    licenseKind: "source-available",
    gap: "Godot is an OSI-licensed engine. Unreal's editor, the marketplace, and the EULA's terms are the gap.",
    features: `Editor | Editor | Levels, actors, and components are placed in the editor.
Blueprint | Blueprints | Gameplay can be scripted in a visual graph as well as in C++.
Source | Readable source | The engine source is available to read and modify under the EULA.
Render | Rendering | The renderer targets high-detail real-time scenes.
Animation | Animation | Skeletal meshes, sequences, and control rigs are edited in the engine.
Niagara | Niagara | Particle effects are built in Niagara and spawned from a Blueprint or a level actor.
Platforms | Platform builds | A project is packaged for the platforms the license allows.
Marketplace | Marketplace | Assets and code plugins are sold through Epic's marketplace.`,
    links: [["Product", "https://www.unrealengine.com/"], ["Docs", "https://dev.epicgames.com/documentation/en-us/unreal-engine"]],
    alts: [["Godot", "https://github.com/godotengine/godot", "MIT", "An MIT-licensed engine. It is not covered by the Unreal EULA."]],
  }),
  row({
    id: "sketchup",
    name: "SketchUp",
    vendor: "Trimble",
    category: "Design",
    summary: "A 3D modeler aimed at architects and makers who want to push and pull a form quickly.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A widely used early-design modeler in architecture and in woodworking.",
    licenseName: "Trimble terms",
    licenseNote: "The application and the 3D Warehouse are proprietary. A free web tier is still not open source.",
    gap: "An open modeler can push and pull solids. SketchUp's component warehouse and the architectural workflow are the gap.",
    features: `Push | Push and pull | A face is extruded by pulling it, which is the basic modeling move.
Components | Components | A repeating object, such as a window, is a component used many times.
Groups | Groups | Geometry is grouped so later edits do not stick to everything else.
Materials | Materials | A face gets a color or a texture so the model reads as a material, not only a wire outline.
Scenes | Scenes | A scene saves a camera for a presentation.
LayOut | LayOut | A companion tool places model views on a sheet. It ships with the paid products.
Warehouse | 3D Warehouse | Models are downloaded from Trimble's public library.
Extension | Extensions | An extension adds a tool, such as a renderer.`,
    links: [["Product", "https://www.sketchup.com/"], ["Docs", "https://help.sketchup.com/"]],
    alts: [["FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open modeler. The workflow is not SketchUp's."]],
  }),
  row({
    id: "cinema-4d",
    name: "Cinema 4D",
    vendor: "Maxon",
    category: "Design",
    summary: "Maxon's 3D application for modeling, animation, and motion graphics.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common 3D tool in motion-graphics studios, often next to After Effects.",
    licenseName: "Maxon terms",
    licenseNote: "The application and its file format are proprietary.",
    gap: "Blender is an open 3D suite. Cinema 4D's motion-graphics tools and the studio pipeline around it are the gap.",
    features: `Model | Modeling | Polygon and other modeling tools build a mesh.
MoGraph | MoGraph | Cloner and effector objects build motion-graphics setups.
Materials | Materials | A material controls the look of a surface.
Animate | Animation | Keys on a timeline move objects and parameters.
Render | Rendering | A frame or a sequence is rendered in the built-in renderer.
Simulate | Simulation | Dynamics such as cloth or particles can be simulated.
UV | UVs | A mesh is unwrapped so a texture lands correctly.
Exchange | Exchange | Files move to and from other 3D and compositing tools.`,
    links: [["Product", "https://www.maxon.net/en/cinema-4d"], ["Docs", "https://help.maxon.net/c4d/"]],
    alts: [["Blender", "https://projects.blender.org/blender/blender", "GPL-2.0-or-later", "An open 3D suite. The source is GPL."]],
  }),
  row({
    id: "gitbook",
    name: "GitBook",
    vendor: "GitBook",
    category: "Knowledge",
    summary: "A hosted docs site with a Git sync and a visual editor for product documentation.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common docs host for software teams that want something quieter than a wiki free-for-all.",
    licenseName: "GitBook terms",
    licenseNote: "The hosted product and the editor are proprietary.",
    gap: "An open wiki or a static docs generator can publish the same pages. GitBook's hosted editor and the visitor auth are the gap.",
    features: `Spaces | Spaces | A space holds the docs for one product or one audience.
Editor | Editor | Pages are written in a visual editor, with Markdown underneath.
Git | Git sync | The pages can sync with a Git repository.
Search | Search | Readers search across the space and open the page that contains the matching heading.
Customize | Customization | The published site takes a logo, a domain, and some layout choices.
Permissions | Permissions | A space can be public or limited to members.
API | API | Content can be read or updated through the API.
Insights | Insights | The account can see which pages readers open.`,
    links: [["Product", "https://www.gitbook.com/"], ["Docs", "https://gitbook.com/docs"]],
    alts: [["BookStack", "https://github.com/BookStackApp/BookStack", "MIT", "An open wiki of books, chapters, and pages you host."]],
  }),
  row({
    id: "slite",
    name: "Slite",
    vendor: "Slite",
    category: "Knowledge",
    summary: "A team knowledge base of channels, docs, and a search box.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A smaller company wiki used by teams that found a full intranet too heavy.",
    licenseName: "Slite terms",
    licenseNote: "The workspace and the search are proprietary.",
    gap: "An open wiki holds the same pages. Slite's hosted search and the editor are the gap.",
    features: `Channels | Channels | Docs are grouped into channels so a team has a home.
Docs | Docs | A doc is written with headings, lists, and embeds.
Search | Search | Search looks across the workspace, not one channel.
Comments | Comments | A teammate comments on a doc without changing the text.
Templates | Templates | A new doc can start from a template, such as a meeting note.
Permissions | Permissions | A channel can be open to the company or to one group.
Import | Import | Pages can be brought in from another tool.
Ask | Ask | A question can be answered from the docs the workspace already has, where that feature is on.`,
    links: [["Product", "https://slite.com/"], ["Docs", "https://slite.com/api"]],
    alts: [["Docmost", "https://github.com/docmost/docmost", "AGPL-3.0", "An open wiki and doc space you host."]],
  }),
  row({
    id: "craft",
    name: "Craft",
    vendor: "Craft Docs",
    category: "Knowledge",
    summary: "A notes and docs app with linked pages, aimed at personal and small-team writing.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A paid notes app used by people who want linked documents without a company wiki.",
    licenseName: "Craft terms",
    licenseNote: "The apps and the sync service are proprietary.",
    gap: "An open notes app can link pages and sync a folder. Craft's hosted editor and the share links are the gap.",
    features: `Docs | Documents | A document is a page of blocks, such as text, a toggle, or an image.
Links | Page links | A page can link to another page in the same space.
Cards | Cards | A collection of cards can be viewed as a list or a gallery.
Share | Share links | A page can be shared on a link without inviting someone into the whole space.
Daily | Daily notes | A note can be tied to a date so the daily page collects what was written that day.
Offline | Offline edits | The native apps keep working and sync when the network returns.
Style | Style | A page can carry a cover and a style the app offers.
Export | Export | A page can be exported so it is not stuck in the account.`,
    links: [["Product", "https://www.craft.do/"], ["Docs", "https://support.craft.do/"]],
    alts: [["AppFlowy", "https://github.com/AppFlowy-IO/AppFlowy", "AGPL-3.0", "An open workspace for docs and tasks."]],
  }),
  row({
    id: "todoist",
    name: "Todoist",
    vendor: "Doist",
    category: "Product work",
    summary: "A personal and team task list with projects, dates, and a natural-language date field.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default to-do app for people who want one list across work and home.",
    licenseName: "Doist terms",
    licenseNote: "The service and the apps are proprietary.",
    gap: "An open task server can hold projects and due dates. Todoist's natural-language dates and the hosted reminders are the gap.",
    features: `Inbox | Inbox | A task with no project yet lands in the inbox.
Projects | Projects | A project holds tasks, sections, and collaborators.
Dates | Dates | A task has a date, and the field accepts a phrase such as next Friday.
Priority | Priority | A flag marks a task as more urgent than the others due that day.
Labels | Labels | A label filters tasks across projects so one tag, such as waiting, shows work from every list.
Today | Today view | One view shows everything due today, from every project.
Reminders | Reminders | A reminder fires before the due time on the platforms that support it.
Comments | Comments | A task can hold a comment and a file for the people who share the project.`,
    links: [["Product", "https://todoist.com/"], ["Docs", "https://developer.todoist.com/rest/v2/"]],
    alts: [["Vikunja", "https://github.com/go-vikunja/vikunja", "AGPL-3.0", "An open task list you host."]],
  }),
  row({
    id: "superhuman",
    name: "Superhuman",
    vendor: "Superhuman",
    category: "Communications",
    summary: "A paid email client built for speed, snippets, and a split inbox.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A client used by people who live in email and will pay for a faster interface on top of Gmail or Outlook.",
    licenseName: "Superhuman terms",
    licenseNote: "The client is proprietary. It sits on top of a mailbox the person already has.",
    gap: "An open mail client reads the same mailbox. Superhuman's snippets, the split inbox, and the hosted product are the gap.",
    features: `Split | Split inbox | Mail is split into streams, such as important people and other mail.
Snippets | Snippets | A short key expands into a paragraph the person sends often.
Command | Command palette | Actions run from the keyboard without hunting through menus.
Remind | Reminders | A sent message can come back if nobody replies.
Undo | Undo send | A send can be stopped for a short moment after the key is pressed.
Read | Read status | The product can show when a recipient opened a message, where that feature is enabled.
Calendar | Calendar on the side | A calendar sits next to the inbox so a time can be picked in the reply.
Team | Team comments | Teammates can comment on a shared conversation inside the client.`,
    links: [["Product", "https://superhuman.com/"], ["Docs", "https://help.superhuman.com/"]],
    alts: [["Thunderbird", "https://www.thunderbird.net/", "MPL-2.0", "An open mail client from the Thunderbird project. You use your own mailbox."]],
  }),
  row({
    id: "webex",
    name: "Webex",
    vendor: "Cisco",
    category: "Communications",
    summary: "Cisco's meetings, messaging, and calling suite for companies.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default meeting and calling system in companies that already buy from Cisco.",
    licenseName: "Cisco terms",
    licenseNote: "The cloud service, the devices, and the apps are proprietary.",
    gap: "An open meeting server can host a call. Webex's phone system and the room devices are the gap.",
    features: `Meetings | Meetings | A link joins a video meeting with screen share.
Messaging | Messaging | Spaces hold team chat next to the meetings.
Calling | Calling | A company phone number can ring in the app where the calling product is bought.
Devices | Room devices | A hardware room system joins the same meeting.
Record | Recording | A meeting can be recorded and stored in the account.
Webinars | Webinars | A larger event has presenters and an audience.
Whiteboard | Whiteboard | A shared board can be used in the meeting.
Admin | Admin controls | An admin sets who may join, whether a lobby is on, and how recordings are kept.`,
    links: [["Product", "https://www.webex.com/"], ["Docs", "https://developer.webex.com/"]],
    alts: [["Jitsi", "https://github.com/jitsi/jitsi-meet", "Apache-2.0", "An open video meeting you can host."]],
  }),
  row({
    id: "ringcentral",
    name: "RingCentral",
    vendor: "RingCentral",
    category: "Communications",
    summary: "A cloud phone system with team messaging and video meetings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common replacement for an office PBX at mid-size companies.",
    licenseName: "RingCentral terms",
    licenseNote: "The phone service, the numbers, and the apps are proprietary.",
    gap: "An open PBX can route calls on hardware you run. RingCentral's numbers, the carrier, and the apps are the gap.",
    features: `Phone | Cloud phone | An employee has an extension that rings the app or a desk phone.
SMS | Business SMS | Texts can be sent and received on the business number.
Meetings | Video meetings | A meeting link includes video and screen share.
Team | Team messaging | A team chat sits in the same app as the phone.
IVR | Auto attendant | A menu answers the main number and routes the caller.
Queues | Call queues | A sales or support queue rings a group of people.
Record | Call recording | Calls can be recorded under the account's rules.
Analytics | Analytics | The admin sees call volume and how long people waited.`,
    links: [["Product", "https://www.ringcentral.com/"], ["Docs", "https://developers.ringcentral.com/guide"]],
    alts: [["Asterisk", "https://github.com/asterisk/asterisk", "GPL-2.0", "An open PBX. You bring the phone lines."]],
  }),
  row({
    id: "sharepoint",
    name: "SharePoint",
    vendor: "Microsoft",
    category: "Files",
    summary: "Microsoft's intranet for document libraries, sites, and pages inside a tenant.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The file and intranet layer behind a large share of Microsoft 365 companies.",
    licenseName: "Microsoft terms",
    licenseNote: "SharePoint Online is a proprietary service. This card is that service, not a document format.",
    gap: "An open file server can store libraries and share links. SharePoint's tie to Microsoft 365 permissions is the gap.",
    features: `Libraries | Document libraries | Files live in a library with columns, versions, and permissions.
Sites | Sites | A team site holds libraries, pages, and news.
Pages | Pages | A page is built from web parts, such as a news list or a file viewer.
Sharing | Sharing | A file can be shared with a person or with anyone who has the link, under the tenant's rules.
Versions | Versions | An older copy of a file can be restored.
Search | Search | Search looks across sites the account is allowed to see.
Lists | Lists | A list is a table of items, separate from the files.
Sync | Sync client | The OneDrive sync client can keep a library on the desktop.`,
    links: [["Product", "https://www.microsoft.com/microsoft-365/sharepoint/collaboration"], ["Docs", "https://learn.microsoft.com/en-us/sharepoint/"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file server you host."]],
  }),
  row({
    id: "outlook",
    name: "Outlook",
    vendor: "Microsoft",
    category: "Communications",
    summary: "Microsoft's mail, calendar, and contacts client for Microsoft 365 and Exchange.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The mail client on a very large number of work computers.",
    licenseName: "Microsoft terms",
    licenseNote: "Outlook the app and Exchange Online are proprietary. This card is that product, not the mail protocol.",
    gap: "An open mail client can read a mailbox. Outlook's scheduling, the focused inbox, and the Exchange tie-in are the gap.",
    features: `Mail | Mail | Messages are filed in folders, with rules the user or the admin sets.
Calendar | Calendar | Meetings are scheduled with rooms and attendees.
Focus | Focused inbox | Mail is split into a focused pile and an other pile.
Search | Search | Search looks through the mailbox, including attachments the index covers.
Groups | Groups | A Microsoft 365 group has a mailbox and a calendar.
Addins | Add-ins | An add-in runs inside a message, such as a meeting poll.
Offline | Offline | The desktop client keeps a cache so mail opens without a network.
Shared | Shared mailboxes | A team reads a mailbox such as info@ without sharing one password.`,
    links: [["Product", "https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"], ["Docs", "https://support.microsoft.com/outlook"]],
    alts: [["Thunderbird", "https://www.thunderbird.net/", "MPL-2.0", "An open mail and calendar client. It can talk to many mail servers."]],
  }),
  row({
    id: "onenote",
    name: "OneNote",
    vendor: "Microsoft",
    category: "Knowledge",
    summary: "Microsoft's notebook app, with sections, pages, and free-form ink.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The notebook that ships with Microsoft 365 and with many school accounts.",
    licenseName: "Microsoft terms",
    licenseNote: "The app and the notebook sync are proprietary.",
    gap: "An open notes app can hold notebooks and sync them. OneNote's ink and the Microsoft account sync are the gap.",
    features: `Notebooks | Notebooks | A notebook contains sections, and a section contains pages.
Ink | Ink | A pen draws on the page, and the ink stays where it was placed.
Clip | Web clipper | A browser clipper sends a page or a selection into a notebook.
Tags | Tags | A tag marks a paragraph so it can be found later.
Share | Shared notebooks | A notebook can be shared with other people on the account.
Search | Search | Search looks through typed text and through ink the recognizer has read.
Insert | Inserts | A page holds images, files, and tables, not only paragraphs.
Offline | Offline | Pages edit offline and sync when the app reconnects.`,
    links: [["Product", "https://www.microsoft.com/microsoft-365/onenote/digital-note-taking-app"], ["Docs", "https://support.microsoft.com/onenote"]],
    alts: [["Joplin", "https://github.com/laurent22/joplin", "AGPL-3.0", "An open notebook. Some bundled pieces use other free licenses. Read the repo."]],
  }),
  row({
    id: "onedrive",
    name: "OneDrive",
    vendor: "Microsoft",
    category: "Files",
    summary: "Microsoft's file sync and sharing, for personal accounts and for work tenants.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The sync folder on a large share of Windows computers and Microsoft 365 accounts.",
    licenseName: "Microsoft terms",
    licenseNote: "The sync client and the hosting are proprietary.",
    gap: "An open file server syncs a folder you host. OneDrive's place inside Windows and Microsoft 365 is the gap.",
    features: `Sync | Folder sync | A desktop folder stays in step with the cloud copy.
Files | Files On-Demand | A file can appear in the folder and download only when it is opened.
Share | Sharing | A link can be limited to people in the organization or open to anyone with the link.
Versions | Versions | An older version of a file can be restored from the web.
Photos | Photo backup | A phone can upload the camera roll into the account.
Office | Office files | A Word or Excel file in the folder opens in the web app.
Vault | Personal Vault | A folder can require a stronger sign-in before it opens.
Known | Known folder move | Desktop, Documents, and Pictures can be redirected into the sync folder on a work PC.`,
    links: [["Product", "https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage"], ["Docs", "https://learn.microsoft.com/en-us/onedrive/"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file host with desktop sync clients."]],
  }),
  row({
    id: "icloud",
    name: "iCloud",
    vendor: "Apple",
    category: "Files",
    summary: "Apple's sync service for photos, files, and device backups.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The sync account on a very large number of iPhones and Macs.",
    licenseName: "Apple terms",
    licenseNote: "The service is proprietary. This card is iCloud, not the device operating system.",
    gap: "An open file and photo server can sync folders you host. iCloud's silent backup of an Apple device is the gap.",
    features: `Drive | iCloud Drive | Files and the Desktop and Documents folders can sync across Apple devices.
Photos | iCloud Photos | The photo library syncs, including edits made on one device.
Backup | Device backup | An iPhone can back up to the account when it is locked and charging.
Share | Shared albums and folders | A folder or an album can be shared with another Apple account.
Hide | Hidden and recently deleted | Deleted photos stay recoverable for a period before they are gone.
Keychain | Passwords and keys | The account can sync passwords and other secrets between Apple devices.
Mail | iCloud Mail | An optional mailbox lives on the same account.
Family | Family sharing | A family organizer can share a plan and some purchases with other accounts.`,
    links: [["Product", "https://www.apple.com/icloud/"], ["Docs", "https://support.apple.com/icloud"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file server. Photos can be added with a client. It is not an Apple device backup."]],
  }),
  row({
    id: "power-automate",
    name: "Power Automate",
    vendor: "Microsoft",
    category: "Automation",
    summary: "Microsoft's cloud flow product for connecting Microsoft 365 and other services.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The automation tool that shows up inside a Microsoft 365 tenant.",
    licenseName: "Microsoft terms",
    licenseNote: "The cloud flows and the connector catalog are proprietary.",
    gap: "An open flow tool can call APIs you host. Power Automate's catalog of Microsoft 365 connectors is the gap.",
    features: `Cloud | Cloud flows | A flow starts from a trigger, such as a new file, and runs actions.
Desktop | Desktop flows | A desktop flow can click through a program on a machine, where that product is used.
Connect | Connectors | A connector talks to a Microsoft service or to another vendor's API.
Approve | Approvals | An approval step waits for a person before the flow continues.
Button | Buttons | A button in the mobile app starts a flow.
Variables | Variables and conditions | A flow branches and stores a value between steps.
Share | Shared flows | A flow can be owned by a team, not only by the person who made it.
Monitor | Run history | Each run shows which step succeeded or failed.`,
    links: [["Product", "https://www.microsoft.com/power-platform/products/power-automate"], ["Docs", "https://learn.microsoft.com/en-us/power-automate/"]],
    alts: [["Node-RED", "https://github.com/node-red/node-red", "Apache-2.0", "An open flow editor you host. You build the connections."]],
  }),
  row({
    id: "power-apps",
    name: "Power Apps",
    vendor: "Microsoft",
    category: "Business",
    summary: "Microsoft's low-code app builder for forms and screens on top of business data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The tool a Microsoft shop uses when a department wants an app without a full engineering team.",
    licenseName: "Microsoft terms",
    licenseNote: "The maker studio and the hosting are proprietary.",
    gap: "An open flow tool is not a screen builder. Dataverse, the connectors, and the hosted player are the gap.",
    features: `Canvas | Canvas apps | Screens are laid out by hand and bound to data.
Model | Model-driven apps | An app is generated from tables and forms in Dataverse.
Data | Dataverse | Tables, relationships, and permissions live in Microsoft's data service.
Connect | Connectors | The app reads and writes SharePoint, SQL, or another connected source.
Forms | Forms | A form creates or edits a row in the connected table and can require fields before save.
Logic | Power Fx | Formulas on a control compute a value or call an action.
Share | Sharing | An app is shared with people in the tenant.
Mobile | Mobile player | The same app opens in a player on a phone.`,
    links: [["Product", "https://www.microsoft.com/power-platform/products/power-apps"], ["Docs", "https://learn.microsoft.com/en-us/power-apps/"]],
    alts: [["Node-RED", "https://github.com/node-red/node-red", "Apache-2.0", "An open flow tool. It does not host a gallery of business screens."]],
  }),
  row({
    id: "make",
    name: "Make",
    vendor: "Make",
    category: "Automation",
    summary: "A visual automation product that runs scenarios across apps. Formerly Integromat.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common alternative to Zapier for teams that want a more detailed scenario builder.",
    licenseName: "Make terms",
    licenseNote: "The hosted scenarios and the app catalog are proprietary.",
    gap: "An open flow editor can connect APIs you run. Make's hosted app catalog is the gap.",
    features: `Scenarios | Scenarios | A scenario is a graph of modules that run in order.
Modules | App modules | A module talks to an app, such as a sheet or a mailbox.
Router | Routers | A path splits so different bundles take different branches.
Iterator | Iterators | A list is processed one item at a time so each element runs the following modules on its own.
Schedule | Scheduling | A scenario runs on a timer or when a webhook arrives.
Data | Data stores | A small store keeps a value between runs.
Errors | Error handlers | A failed module can take a fallback path.
History | Execution history | Each run shows the bundles that passed through each module.`,
    links: [["Product", "https://www.make.com/"], ["Docs", "https://developers.make.com/"]],
    alts: [["Node-RED", "https://github.com/node-red/node-red", "Apache-2.0", "An open flow editor. You host it and you write the connections it does not already have."]],
  }),
  row({
    id: "workato",
    name: "Workato",
    vendor: "Workato",
    category: "Automation",
    summary: "An enterprise automation platform for recipes that connect business systems.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The integration product at companies that want IT to govern every recipe.",
    licenseName: "Workato terms",
    licenseNote: "The recipes, the connectors, and the hosting are proprietary.",
    gap: "An open integration engine can move data between systems you run. Workato's connector library and the governance are the gap.",
    features: `Recipes | Recipes | A recipe starts with a trigger and runs a sequence of actions.
Connect | Connectors | A connector is provided for a business system such as an ERP or a CRM.
Lookup | Lookup tables | A table maps a value in one system to a value in another.
Callable | Callable recipes | One recipe can call another and pass input fields, then wait for the called recipe's result.
Roles | Roles | An admin decides who may edit a recipe in a workspace.
Onprem | On-prem agent | An agent reaches a system that is not on the public internet.
Test | Testing | A recipe can be tried with sample data before it is started.
Jobs | Job history | Each run is stored so a failure can be inspected.`,
    links: [["Product", "https://www.workato.com/"], ["Docs", "https://docs.workato.com/"]],
    alts: [["Apache NiFi", "https://github.com/apache/nifi", "Apache-2.0", "An open data-flow system you operate."]],
  }),
  row({
    id: "boomi",
    name: "Boomi",
    vendor: "Boomi",
    category: "Automation",
    summary: "An integration platform for processes that connect applications and data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running integration product in IT departments that connect many internal systems.",
    licenseName: "Boomi terms",
    licenseNote: "The platform and the connectors are proprietary.",
    gap: "An open flow system can route data you host. Boomi's connector catalog and the hosted runtime are the gap.",
    features: `Process | Processes | A process is a graph of shapes that transform and send a document.
Connect | Connectors | A connector reads or writes a given application.
Map | Maps | A map translates fields from one profile to another.
Atom | Runtimes | A runtime executes the process in the cloud or on a machine the customer runs.
API | API management | An integration can be published as an API.
Queue | Queues | A document can wait in a queue between steps.
Track | Process reporting | Each execution shows where a document went.
Govern | Environments | A process is promoted from a test environment to production.`,
    links: [["Product", "https://boomi.com/"], ["Docs", "https://help.boomi.com/"]],
    alts: [["Apache NiFi", "https://github.com/apache/nifi", "Apache-2.0", "An open system for data flows you run."]],
  }),
  row({
    id: "mulesoft",
    name: "MuleSoft",
    vendor: "Salesforce",
    category: "Automation",
    summary: "Salesforce's integration product for APIs and for flows between systems.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The integration layer many Salesforce customers buy when the CRM has to talk to everything else.",
    licenseName: "Salesforce terms",
    licenseNote: "Anypoint Platform, including the design and runtime consoles, is proprietary.",
    gap: "An open integration framework can expose APIs. Anypoint's design, management, and hosting are the gap.",
    features: `Design | API design | An API specification is written and shared before the implementation.
Implement | Implementation | A flow implements the API and calls other systems.
Manage | API manager | Policies such as a rate limit are applied to a deployed API.
Connect | Connectors | A connector reaches a system such as a database or a SaaS app.
Exchange | Exchange | Assets such as connectors and templates are shared in a catalog.
Runtime | Runtimes | The implementation runs in a cloud or customer-hosted runtime.
Monitor | Monitoring | Calls, failures, and latency are visible for a deployed API.
Access | Access management | Teams are given rights to design or to deploy.`,
    links: [["Product", "https://www.mulesoft.com/"], ["Docs", "https://docs.mulesoft.com/"]],
    alts: [["Apache NiFi", "https://github.com/apache/nifi", "Apache-2.0", "An open data-flow system. It is not Anypoint."]],
  }),
  row({
    id: "informatica",
    name: "Informatica",
    vendor: "Informatica",
    category: "Data",
    summary: "A data-integration and data-management suite for moving and cleaning enterprise data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-standing data-integration vendor in large IT organizations.",
    licenseName: "Informatica terms",
    licenseNote: "The cloud platform and the transformation products are proprietary.",
    gap: "An open data-flow tool can move files and rows. Informatica's mappings, the catalog, and the operations console are the gap.",
    features: `Mappings | Mappings | A mapping reads a source, transforms rows, and writes a target.
Tasks | Tasks | A mapping task runs on a schedule or after another task and writes the target table.
Connections | Connections | A connection stores how to reach a database or an application.
Quality | Data quality | Rules can standardize or reject a row before it lands.
Catalog | Catalog | A catalog describes data sets the organization has.
Monitor | Monitoring | A run shows row counts and errors so a failed load can be restarted from the monitor.
Parameters | Parameters | A mapping can take a parameter so the same logic runs for more than one source.
Security | Access control | An admin decides who may edit a connection or run a task.`,
    links: [["Product", "https://www.informatica.com/"], ["Docs", "https://docs.informatica.com/"]],
    alts: [["Apache NiFi", "https://github.com/apache/nifi", "Apache-2.0", "An open tool for flows you operate. It is not a full data-management suite."]],
  }),
  row({
    id: "alteryx",
    name: "Alteryx",
    vendor: "Alteryx",
    category: "Data",
    summary: "A desktop and cloud product for dragging data-prep and analytic steps into a workflow.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common tool for analysts who prepare data without writing a pipeline in code.",
    licenseName: "Alteryx terms",
    licenseNote: "Designer and the cloud product are proprietary.",
    gap: "A notebook can prepare data in code. Alteryx's drag-and-drop workflow and the packaged tools are the gap.",
    features: `Canvas | Workflow canvas | Tools are placed on a canvas and wired together.
Input | Inputs | A workflow reads a file, a database, or another source.
Prep | Preparation | Filter, join, formula, and summarize tools reshape the rows.
Spatial | Spatial tools | Some workflows geocode or analyze a location.
Predictive | Predictive tools | A packaged statistical tool can run inside a workflow in the editions that include it.
Output | Outputs | The result is written to a file or a database.
Schedule | Scheduling | A finished workflow can be scheduled on a server product.
Macros | Macros | A group of tools can be saved and reused as one tool.`,
    links: [["Product", "https://www.alteryx.com/"], ["Docs", "https://help.alteryx.com/"]],
    alts: [["JupyterLab", "https://github.com/jupyterlab/jupyterlab", "BSD-3-Clause", "An open notebook. You write the steps. It is not a drag-and-drop designer."]],
  }),
  row({
    id: "mathematica",
    name: "Mathematica",
    vendor: "Wolfram",
    category: "Science",
    summary: "Wolfram's notebook for symbolic math, data, and the Wolfram Language.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A standard computer-algebra system in universities and in technical computing.",
    licenseName: "Wolfram terms",
    licenseNote: "The notebook front end and the language implementation are proprietary.",
    gap: "An open computer-algebra system can do a large part of the math. Mathematica's curated data and the notebook product are the gap.",
    features: `Notebook | Notebooks | A notebook mixes text, input, and output on one page.
Symbol | Symbolic math | Expressions can be simplified, solved, and integrated symbolically.
Numeric | Numeric computing | Large numeric calculations run in the same language.
Plot | Graphics | Plots and interactive graphics are produced from expressions.
Data | Curated data | Built-in data sets, such as geographic or scientific data, can be queried.
Import | Import and export | Files and external data are brought into a notebook.
Parallel | Parallel computation | A calculation can be spread across kernels.
Deploy | Deployment | A notebook can be published as a document or an interactive object under Wolfram's hosting options.`,
    links: [["Product", "https://www.wolfram.com/mathematica/"], ["Docs", "https://reference.wolfram.com/language/"]],
    alts: [["SageMath", "https://github.com/sagemath/sage", "GPL-2.0", "An open mathematics system. It is not a Mathematica notebook."]],
  }),
  row({
    id: "sas",
    name: "SAS",
    vendor: "SAS",
    category: "Science",
    summary: "A statistical and data-management system used heavily in regulated industries.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default analytics platform in insurance, banking, and government shops that standardized on it years ago.",
    licenseName: "SAS terms",
    licenseNote: "The language runtime and the visual products are proprietary.",
    gap: "R is a language for statistics. It is not a SAS runtime, and it does not include SAS's support contract.",
    features: `Data | Data steps | Rows are read, transformed, and written in a data step.
Procedures | Procedures | A procedure runs a named analysis, such as a regression or a frequency table.
SQL | SQL | Queries run against SAS data sets with PROC SQL and can join them to a database table.
Graph | Graphics | Charts are produced from the same data with ODS graphics and can be saved into a report.
Macro | Macros | A macro generates repeated code so one parameter change rebuilds a block of steps.
Access | Data access | Engines read databases and files so a LIBNAME can point at a warehouse or a spreadsheet.
Visual | Visual tools | A point-and-click product sits on the same platform in the editions that include it.
Publish | Publishing | A result can be saved as a report or a data set for someone else.`,
    links: [["Product", "https://www.sas.com/"], ["Docs", "https://documentation.sas.com/"]],
    alts: [["R", "https://www.r-project.org/", "GPL-2.0", "An open language for statistics. It does not run SAS programs unchanged."]],
  }),
  row({
    id: "spss",
    name: "SPSS Statistics",
    vendor: "IBM",
    category: "Science",
    summary: "IBM's statistical application with menus for tests, models, and charts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default statistics program in social science and in survey shops.",
    licenseName: "IBM terms",
    licenseNote: "The application and the syntax language are proprietary.",
    gap: "JASP and R can run the same families of tests. SPSS's menus, the syntax, and the support are the gap.",
    features: `Data | Data editor | Cases and variables are edited in a spreadsheet view.
Dialogs | Analysis dialogs | A test or a model is chosen from a menu and configured in a dialog.
Syntax | Syntax | The same analysis can be written as syntax and rerun.
Output | Output viewer | Tables and charts land in an output document.
Chart | Chart editor | A chart can be adjusted after it is created.
Missing | Missing values | A variable can define which codes count as missing.
Weight | Weighting | Cases can be weighted before a procedure runs.
Export | Export | Tables can be copied or exported for a paper.`,
    links: [["Product", "https://www.ibm.com/products/spss-statistics"], ["Docs", "https://www.ibm.com/docs/en/spss-statistics"]],
    alts: [["JASP", "https://github.com/jasp-stats/jasp-desktop", "AGPL-3.0", "An open statistics application with a spreadsheet and analyses."]],
  }),
  row({
    id: "stata",
    name: "Stata",
    vendor: "StataCorp",
    category: "Science",
    summary: "A statistical package and command language used widely in economics and epidemiology.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default tool in empirical economics and in many public-health groups.",
    licenseName: "StataCorp terms",
    licenseNote: "The application and the ado language are proprietary.",
    gap: "R can fit the same classes of models. It does not run Stata ado files unchanged.",
    features: `Data | Data in memory | A data set is loaded into memory and then transformed with commands.
Commands | Commands | An analysis is a command with options, typed or picked from a menu.
Do | Do-files | A script of commands can be rerun from a do-file so the same analysis is repeatable.
Regression | Estimation | Regression and other estimators return coefficients, errors, and tests.
Graph | Graphs | A graph command draws from the data in memory.
Frames | Frames | More than one data set can be open at once in current versions.
Community | Community packages | Extra commands are installed from a community archive Stata can reach.
Reports | Reports | Estimates and tables are exported for a paper.`,
    links: [["Product", "https://www.stata.com/"], ["Docs", "https://www.stata.com/manuals/"]],
    alts: [["R", "https://www.r-project.org/", "GPL-2.0", "An open statistical language. It is not a Stata runtime."]],
  }),
  row({
    id: "hex",
    name: "Hex",
    vendor: "Hex",
    category: "Data",
    summary: "A collaborative data workspace that mixes SQL, Python, and a published app.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A notebook used by data teams that want SQL and a shareable app in one project.",
    licenseName: "Hex terms",
    licenseNote: "The workspace and the publishing are proprietary.",
    gap: "JupyterLab is an open notebook. Hex's hosted SQL, the app builder, and the permissions are the gap.",
    features: `Notebook | Notebook cells | SQL and Python cells share a project and can pass a query result into the next cell.
Warehouse | Warehouse connections | A project runs SQL on a warehouse the workspace is connected to.
Charts | Charts | A cell's result can be charted without leaving the project.
App | Published apps | Inputs and outputs can be published as an app for someone who does not edit the notebook.
Share | Sharing | A project has permissions for editors and viewers.
Schedule | Scheduled runs | A project can refresh on a schedule and write the new result to the published app.
Version | History | Earlier versions of the project can be opened.
Secrets | Secrets | A connection's credentials are stored for the project rather than pasted in a cell.`,
    links: [["Product", "https://hex.tech/"], ["Docs", "https://learn.hex.tech/"]],
    alts: [["JupyterLab", "https://github.com/jupyterlab/jupyterlab", "BSD-3-Clause", "An open notebook you run. You bring the warehouse connection."]],
  }),
  row({
    id: "jmp",
    name: "JMP",
    vendor: "JMP Statistical Discovery",
    category: "Science",
    summary: "A visual statistics application from the SAS family, aimed at scientists and engineers.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common desktop statistics tool in labs and in industrial quality groups.",
    licenseName: "JMP terms",
    licenseNote: "The JMP application and its analysis platforms are proprietary.",
    gap: "R and an open GUI can explore a table. JMP's linked graphs and the design-of-experiments tools are the gap.",
    features: `Tables | Data tables | A table holds columns with types and properties.
Graph | Linked graphs | Selecting points in one graph highlights them in another.
Analyze | Analysis platforms | A distribution, a fit, or a model opens as a platform of reports.
DOE | Design of experiments | An experiment can be designed and then analyzed in the editions that include it.
Recode | Recode and formula | A column is recoded or computed from a formula.
Journal | Journals | A report is saved into a journal to share the steps.
Script | Scripting | A script reruns an analysis so the same platforms and graphs can be rebuilt from a table.
Import | Import | Spreadsheets and databases are imported into a table.`,
    links: [["Product", "https://www.jmp.com/"], ["Docs", "https://www.jmp.com/support/help/"]],
    alts: [["JASP", "https://github.com/jasp-stats/jasp-desktop", "AGPL-3.0", "An open statistics application. It does not include JMP's industrial toolkit."]],
  }),
  row({
    id: "datarobot",
    name: "DataRobot",
    vendor: "DataRobot",
    category: "AI",
    summary: "An enterprise product that trains and deploys many models against a table of data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A platform sold to companies that want automated model training with governance around it.",
    licenseName: "DataRobot terms",
    licenseNote: "The product and the hosted training are proprietary.",
    gap: "An open experiment tracker records runs you launch. DataRobot's automated search over models and the deployment product are the gap.",
    features: `Projects | Projects | A project starts from a data set and a target column.
Autopilot | Autopilot | The product trains many models and ranks them.
Leader | Leaderboard | Models are compared on a metric the user chose.
Explain | Explanations | A prediction can show which features pushed it.
Deploy | Deployment | A chosen model is deployed to an endpoint.
Monitor | Monitoring | A deployment tracks drift and accuracy after it is live.
Notebooks | Notebooks | A notebook in the platform can use the same data.
Access | Access control | An admin decides who may see a project or a deployment.`,
    links: [["Product", "https://www.datarobot.com/"], ["Docs", "https://docs.datarobot.com/"]],
    alts: [["MLflow", "https://github.com/mlflow/mlflow", "Apache-2.0", "An open tracker for experiments and models. It does not search a catalog of algorithms for you."]],
  }),
  row({
    id: "browserstack",
    name: "BrowserStack",
    vendor: "BrowserStack",
    category: "Developer tools",
    summary: "A cloud of real browsers and devices for manual and automated testing.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default device cloud for front-end teams that cannot own every phone.",
    licenseName: "BrowserStack terms",
    licenseNote: "The device cloud and the dashboards are proprietary.",
    gap: "An open browser automation library drives browsers you install. The farm of real devices is the gap.",
    features: `Live | Live testing | A person opens a site in a remote browser or device and clicks around.
Automate | Automate | A test suite drives those browsers through an automation grid.
Devices | Real devices | Phones and tablets in the cloud are the thing being rented.
Local | Local testing | A tunnel reaches a site that is not on the public internet.
Screenshots | Screenshots | A set of browsers can each capture the same page.
Logs | Logs | Console logs and network logs come back with the session.
CI | CI integration | A pipeline starts the automated run and reports the browser result back to the build.
Access | Access control | A team shares one account with separate users.`,
    links: [["Product", "https://www.browserstack.com/"], ["Docs", "https://www.browserstack.com/docs"]],
    alts: [["Playwright", "https://github.com/microsoft/playwright", "Apache-2.0", "An open browser automation library. You run the browsers."]],
  }),
  row({
    id: "saucelabs",
    name: "Sauce Labs",
    vendor: "Sauce Labs",
    category: "Developer tools",
    summary: "A cloud for cross-browser and mobile tests, with a dashboard of results.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running device and browser cloud used in large test organizations.",
    licenseName: "Sauce Labs terms",
    licenseNote: "The cloud and the analytics are proprietary.",
    gap: "Playwright or Selenium can drive a browser on a machine you own. Sauce's cloud and its result history are the gap.",
    features: `VMs | Virtual machines and devices | Tests run on browsers and devices Sauce hosts.
Frameworks | Framework support | Suites written with common automation libraries can point at the cloud.
Live | Live testing | A person can also open a manual session.
Tunnel | Tunnels | A tunnel tests a private environment so a job on Sauce can reach an app that is not public.
Results | Results dashboard | Videos, logs, and pass or fail status are stored per run.
Parallel | Parallel runs | Many sessions run at the same time, up to the account's limit.
CI | CI plugins | A build system starts the suite and collects the result.
Analytics | Analytics | Failure trends are reported across builds.`,
    links: [["Product", "https://saucelabs.com/"], ["Docs", "https://docs.saucelabs.com/"]],
    alts: [["Selenium", "https://github.com/SeleniumHQ/selenium", "Apache-2.0", "An open browser-automation project. You provide the machines."]],
  }),
  row({
    id: "lambdatest",
    name: "LambdaTest",
    vendor: "LambdaTest",
    category: "Developer tools",
    summary: "A browser and device cloud for manual checks and automated tests.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A lower-priced device cloud many teams try beside BrowserStack.",
    licenseName: "LambdaTest terms",
    licenseNote: "The LambdaTest cloud and its browser grid are proprietary.",
    gap: "An open automation library does not include the rented devices. That cloud is the gap.",
    features: `Realtime | Real-time testing | A site is opened in a chosen browser from the dashboard.
Automation | Automation grid | A test runner points at the cloud instead of a local browser.
Mobile | Mobile devices | Phone and tablet sessions are part of the same account.
Screenshot | Screenshot testing | The same URL is captured in many browsers.
Tunnel | Local tunnel | A private site can be reached from the cloud session.
Logs | Session logs | Console and network detail come back with the test.
Integrations | Integrations | A pipeline or an issue tracker can be connected.
Parallel | Parallel sessions | Several tests run together, within the plan's concurrency.`,
    links: [["Product", "https://www.lambdatest.com/"], ["Docs", "https://www.lambdatest.com/support/docs/"]],
    alts: [["Playwright", "https://github.com/microsoft/playwright", "Apache-2.0", "An open library that automates browsers you install."]],
  }),
  row({
    id: "jfrog",
    name: "JFrog Platform",
    vendor: "JFrog",
    category: "Developer tools",
    summary: "A binary repository and security platform. Artifactory stores the artifacts. Xray scans them.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default artifact manager at companies that publish more than container images.",
    licenseName: "JFrog terms",
    licenseNote: "The platform is proprietary. This card is Artifactory and the commercial platform, not an open client.",
    gap: "An open registry covers container images well. A single store for Maven, npm, and the rest, plus the scan policy, is the gap.",
    features: `Repos | Repositories | A repository stores artifacts of a given package type.
Proxy | Remote repositories | A remote repository caches a public registry.
Virtual | Virtual repositories | One URL can front several repositories so a client resolves a package without knowing which repo holds it.
Promote | Promotion | A build's artifacts can be moved from a snapshot repo to a release repo.
Xray | Xray scanning | A scan looks for known vulnerabilities in what was stored.
Policy | Policies | A watch can block a download that violates a rule.
Access | Permissions | A permission target decides who may read or write a repository.
Replication | Replication | Repositories can be replicated to another site.`,
    links: [["Product", "https://jfrog.com/"], ["Docs", "https://jfrog.com/help/r/jfrog-artifactory-documentation"]],
    alts: [["Harbor", "https://github.com/goharbor/harbor", "Apache-2.0", "An open container registry. It is not a universal package server."]],
  }),
  row({
    id: "sonarcloud",
    name: "SonarCloud",
    vendor: "SonarSource",
    category: "Developer tools",
    summary: "SonarSource's hosted code-quality service. The community server build is a different license.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The hosted scanner many GitHub and Azure DevOps repos run on every pull request.",
    licenseName: "SonarCloud terms",
    licenseNote: "SonarCloud the service is proprietary. SonarQube Community Build is a separate edition under the LGPL.",
    gap: "The community server can scan code you host. SonarCloud's hosted project, the automatic analysis, and the commercial languages are the gap.",
    features: `Analysis | Analysis | A scanner reads the repo and reports bugs, vulnerabilities, and smells.
Quality | Quality gate | A gate fails the analysis when new issues cross a threshold.
PR | Pull request decoration | Findings are posted back on the pull request.
Issues | Issues | Each issue has a file, a line, and a rule.
Hotspots | Security hotspots | A hotspot is a security-sensitive spot a person reviews.
Coverage | Coverage | Test coverage from a report is shown on the same lines.
Languages | Languages | The service lists which languages it analyzes.
Org | Organizations | Projects are grouped under an organization with members.`,
    links: [["Product", "https://www.sonarsource.com/products/sonarcloud/"], ["Docs", "https://docs.sonarsource.com/sonarqube-cloud/"]],
    alts: [["SonarQube Community Build", "https://github.com/SonarSource/sonarqube", "LGPL-3.0", "The community server is LGPL-3.0. Commercial editions add languages and enterprise gates."]],
  }),
  row({
    id: "socket",
    name: "Socket",
    vendor: "Socket",
    category: "Security",
    summary: "A supply-chain firewall that scores open-source packages before a team installs them.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A dependency scanner teams add to GitHub to catch a malicious or risky package.",
    licenseName: "Socket terms",
    licenseNote: "The service and the rules are proprietary.",
    gap: "An open scanner can compare a lockfile to a vulnerability database. Socket's behavioral scoring of a package is the gap.",
    features: `Scan | Pull request scan | A change to a lockfile is scanned when the pull request opens.
Issues | Issues | A new or upgraded dependency can raise an issue in the pull request.
Score | Package scores | A package page shows signals such as install scripts or network use, as Socket defines them.
Alerts | Alerts | The account lists issues across repositories.
Firewall | Firewall | A setting can block an install that fails a rule, where that product is enabled.
Reach | Reachability | The product tries to say whether a vulnerable function is used.
License | License view | A dependency's license is shown next to the security signals.
Org | Org settings | Rules can be set for the whole organization.`,
    links: [["Product", "https://socket.dev/"], ["Docs", "https://docs.socket.dev/"]],
    alts: [["OSV-Scanner", "https://github.com/google/osv-scanner", "Apache-2.0", "An open scanner against the OSV database. It does not sell a package-behavior score."]],
  }),
  row({
    id: "graphite",
    name: "Graphite",
    vendor: "Graphite",
    category: "Developer tools",
    summary: "A stacked pull-request workflow and review inbox for GitHub.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A tool teams adopt when one feature is split into a stack of small pull requests.",
    licenseName: "Graphite terms",
    licenseNote: "The hosted workflow and the client are proprietary.",
    gap: "A forge and git can hold branches. The stacked workflow, the restack command, and the review inbox are the gap.",
    features: `Stacks | Stacks | A branch depends on another branch, and each one is a pull request.
Restack | Restack | After the bottom of the stack changes, the branches above are rebased.
Submit | Submit | The command pushes the stack and opens or updates the pull requests.
Inbox | Review inbox | Pull requests waiting on you are listed as an inbox.
Merge | Merge | A stack can be merged from the bottom so each pull request lands after the one it depends on.
CI | CI on the stack | Each pull request still runs the forge's checks.
Comments | Review comments | Review happens on the GitHub pull request the tool is driving.
Insights | Insights | The product reports how the team's pull requests are moving.`,
    links: [["Product", "https://graphite.dev/"], ["Docs", "https://graphite.dev/docs"]],
    alts: [["Forgejo", "https://codeberg.org/forgejo/forgejo", "MIT", "An open forge. Stacked pull requests are a habit you do by hand."]],
  }),
  row({
    id: "codesandbox",
    name: "CodeSandbox",
    vendor: "CodeSandbox",
    category: "Developer tools",
    summary: "A browser IDE and cloud development environment for web projects.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A place teams open a repository in the browser instead of cloning it first.",
    licenseName: "CodeSandbox terms",
    licenseNote: "The hosted environments and the editor service are proprietary.",
    gap: "An open VS Code server can edit a repo on a machine you run. CodeSandbox's hosted boot and the share links are the gap.",
    features: `Editor | Browser editor | A project opens in a VS Code-style editor in the browser.
Dev | Dev environments | Dependencies install in a cloud environment tied to the project.
Preview | Previews | A running web app gets a URL from the environment.
Share | Share links | A link opens the same project for a teammate.
Import | Git import | A repository can be imported and kept in sync with its branch.
Terminal | Terminal | A terminal runs inside the environment so you can install a package or start a server next to the editor.
Templates | Templates | A new project can start from a template.
Collab | Live collaboration | More than one cursor can edit, where that feature is enabled.`,
    links: [["Product", "https://codesandbox.io/"], ["Docs", "https://codesandbox.io/docs"]],
    alts: [["code-server", "https://github.com/coder/code-server", "MIT", "An open VS Code server you host."]],
  }),
  row({
    id: "stackblitz",
    name: "StackBlitz",
    vendor: "StackBlitz",
    category: "Developer tools",
    summary: "A browser IDE that boots web projects quickly, including a local-looking Node environment.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common way to open a runnable example from a docs page.",
    licenseName: "StackBlitz terms",
    licenseNote: "The hosted boot environment and the editor service are proprietary.",
    gap: "An open IDE framework can be hosted by anyone. StackBlitz's instant environment is the gap.",
    features: `Editor | Editor | Files, a terminal, and a preview open in the browser.
Boot | Fast boot | A project is presented as already running, which is the product's main trick.
Node | Node projects | Server-side JavaScript projects run in the environment, not only static pages.
Git | GitHub projects | A public repository can be opened as a project.
Embed | Embeds | A project can be embedded in a documentation page.
Share | Share | A link hands someone the same environment.
Secrets | Secrets | Environment variables can be set for the project.
NPM | Package install | Dependencies install inside the environment from the project file.`,
    links: [["Product", "https://stackblitz.com/"], ["Docs", "https://developer.stackblitz.com/"]],
    alts: [["Eclipse Theia", "https://github.com/eclipse-theia/theia", "EPL-2.0", "An open IDE framework. You host it."]],
  }),
  row({
    id: "sourcegraph",
    name: "Sourcegraph",
    vendor: "Sourcegraph",
    category: "Developer tools",
    summary: "A code search and intelligence product across many repositories.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The search box large engineering orgs put over the whole company's code.",
    licenseName: "Sourcegraph terms",
    licenseNote: "The current product is proprietary. Older releases used a different license. This card is the product as sold now.",
    gap: "An open code indexer can search a tree you host. Sourcegraph's cross-repo intelligence and the hosted product are the gap.",
    features: `Search | Code search | A query searches symbols and text across the repositories connected to the instance.
Diff | Diff search | A search can be limited to what changed.
Nav | Go to definition | A symbol can be followed to its definition across repos.
Insights | Insights | The product can chart a pattern, such as a deprecated call, over time.
Batch | Batch changes | A change can be opened as pull requests across many repos.
Cody | Cody | An assistant in the product answers questions about the indexed code. It is part of the commercial product.
Perms | Permissions | Results are limited to repositories the person may see.
Self | Self-hosted option | A large customer can run an instance. The license is still the company's, not an OSI license.`,
    links: [["Product", "https://sourcegraph.com/"], ["Docs", "https://sourcegraph.com/docs"]],
    alts: [["OpenGrok", "https://github.com/oracle/opengrok", "CDDL-1.0", "An open code search index. Read the license file in the repo."]],
  }),
  row({
    id: "overleaf",
    name: "Overleaf",
    vendor: "Overleaf",
    category: "Science",
    summary: "A hosted LaTeX editor with collaboration. The public server code is a separate grant from the website.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The default place academics write a paper together in LaTeX.",
    licenseName: "Overleaf terms",
    licenseNote: "overleaf.com the service is proprietary. A public server repository exists under the AGPL. This card is the hosted product.",
    gap: "The public server code and a TeX distribution can edit a paper you host. The hosted compile service and the collaboration on overleaf.com are the gap.",
    features: `Editor | Source editor | A LaTeX source is edited beside a preview.
Compile | Compile | The service compiles the project and shows the log.
Collab | Collaboration | More than one person edits the same project.
History | History | Older versions of the project can be restored.
Track | Track changes | A suggested edit can be accepted in the modes that include it.
Comments | Comments | A comment sits on a passage so a coauthor can reply without changing the LaTeX source.
Files | Project files | Figures and bibliographies live in the project.
Submit | Journal submit | Some journals accept a submission straight from a project.`,
    links: [["Product", "https://www.overleaf.com/"], ["Docs", "https://www.overleaf.com/learn"]],
    alts: [["Overleaf public server", "https://github.com/overleaf/overleaf", "AGPL-3.0", "The public server repository is AGPL-3.0. Hosted overleaf.com is a different service. Read the tag you run."]],
  }),
  row({
    id: "semgrep-cloud",
    name: "Semgrep Cloud",
    vendor: "Semgrep",
    category: "Security",
    summary: "The hosted Semgrep product. The scan engine in the public repository is LGPL.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A code-security scan many teams run in pull requests.",
    licenseName: "Semgrep terms",
    licenseNote: "Semgrep Cloud, the managed rules, and the dashboard are proprietary. The engine in the public repository is LGPL-2.1.",
    gap: "The engine can run rules you write. The cloud dashboard, the managed rules, and the supply-chain product are the gap.",
    features: `Scan | Pull request scans | A scan runs on a pull request and reports findings.
Rules | Rules | A finding comes from a rule, which can be one you wrote or one the platform provides.
Editor | Rule editor | A rule can be tried against sample code in the product.
Supply | Supply chain | A dependency finding is reported alongside code findings, where that product is on.
Secrets | Secrets | A scan can look for a committed credential.
Policies | Policies | A policy decides which findings block a pull request.
Triage | Triage | A finding can be ignored or marked fixed.
Dashboard | Dashboard | Open findings are listed by repository so a team can see which projects still have a rule firing.`,
    links: [["Product", "https://semgrep.dev/"], ["Docs", "https://semgrep.dev/docs"]],
    alts: [["Semgrep", "https://github.com/semgrep/semgrep", "LGPL-2.1", "The engine. Semgrep Cloud is a separate product."]],
  }),
  row({
    id: "checkmarx",
    name: "Checkmarx",
    vendor: "Checkmarx",
    category: "Security",
    summary: "A commercial application-security scanner for source code and dependencies.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A scanner security teams at large companies mandate in the build.",
    licenseName: "Checkmarx terms",
    licenseNote: "The scanners and the results platform are proprietary.",
    gap: "An open engine can run rules you have. Checkmarx's managed queries and the enterprise results platform are the gap.",
    features: `SAST | Static analysis | Source is scanned for vulnerability patterns.
SCA | Dependencies | Open-source dependencies are matched to known vulnerabilities.
Results | Results viewer | A finding shows the file, the line, and a description.
Query | Queries | The product ships queries, and a customer can add one.
Policy | Policies | A threshold can fail a build when a new scan crosses a severity or a count you set.
Triage | Triage | A finding is marked as a risk to fix or as not exploitable.
Integrations | Integrations | Results can be sent to a pull request or a ticket.
Reports | Reports | A report summarizes findings for a release.`,
    links: [["Product", "https://checkmarx.com/"], ["Docs", "https://docs.checkmarx.com/"]],
    alts: [["Semgrep", "https://github.com/semgrep/semgrep", "LGPL-2.1", "An open scan engine. It is not Checkmarx's query set."]],
  }),
  row({
    id: "pycharm",
    name: "PyCharm Professional",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid Python IDE. The Community edition is a separate, free product.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default Python IDE in companies that want the paid web, data, and remote tools.",
    licenseName: "JetBrains terms",
    licenseNote: "PyCharm Professional is proprietary. PyCharm Community is free to use. The IntelliJ platform source is Apache-2.0. This card is the paid edition.",
    gap: "The Community edition and the Apache-licensed platform cover editing and debugging. Professional's web frameworks, databases, and remote development are the gap.",
    features: `Editor | Editor | Code completion, refactoring, and navigation are built for Python.
Debug | Debugger | A breakpoint can stop a process and show variables.
Test | Test runner | A test framework runs from the gutter so one test or the whole file starts without a separate command.
Venv | Environments | The IDE creates and selects a virtual environment or a conda env.
Web | Web frameworks | The paid edition adds framework-specific tools JetBrains lists for Professional.
Data | Database tools | A database console is part of the paid edition.
Jupyter | Jupyter | A notebook can be edited inside the IDE.
Remote | Remote development | A project can run on a remote machine from the local UI.`,
    links: [["Product", "https://www.jetbrains.com/pycharm/"], ["Docs", "https://www.jetbrains.com/help/pycharm/"]],
    alts: [["IntelliJ Community", "https://github.com/JetBrains/intellij-community", "Apache-2.0", "The open platform. PyCharm Professional is a paid product built beside it."]],
  }),
  row({
    id: "webstorm",
    name: "WebStorm",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid IDE for JavaScript and TypeScript.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common IDE for front-end teams that want JetBrains' refactoring on JavaScript.",
    licenseName: "JetBrains terms",
    licenseNote: "WebStorm is proprietary. There is no community edition of this product.",
    gap: "A build of Code-OSS edits JavaScript. WebStorm's framework refactorings and the debugger integrations are the gap.",
    features: `Editor | Editor | Completion and navigation understand JavaScript and TypeScript projects.
Refactor | Refactoring | A rename or an extract updates the references the IDE found.
Frameworks | Frameworks | The IDE has specific support for frameworks it lists, such as React or Angular.
Debug | Debugger | The IDE attaches to a browser or a Node process.
Test | Tests | A test runner shows results in the IDE and jumps to the assertion that failed.
Lint | Linters | ESLint and similar tools surface in the editor.
VCS | Version control | Diffs, commits, and pull requests are available in the IDE.
Terminal | Terminal | A terminal opens in the project directory.`,
    links: [["Product", "https://www.jetbrains.com/webstorm/"], ["Docs", "https://www.jetbrains.com/help/webstorm/"]],
    alts: [["VSCodium", "https://github.com/VSCodium/vscodium", "MIT", "A build of the MIT-licensed Code-OSS. It is not the Microsoft build of VS Code."]],
  }),
  row({
    id: "datagrip",
    name: "DataGrip",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' database IDE for querying and altering schemas.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common SQL tool for people who already live in JetBrains IDEs.",
    licenseName: "JetBrains terms",
    licenseNote: "DataGrip, the JetBrains database IDE, is proprietary commercial software.",
    gap: "An open database tool can run SQL against the servers you reach. DataGrip's schema tools and the JetBrains editor are the gap.",
    features: `Console | Query console | SQL runs against a saved data source, with results in a grid.
Complete | Completion | Table and column names complete from the schema the IDE introspected.
Edit | Data editor | A row in the grid can be edited and the change submitted.
Schema | Schema diff | Two schemas can be compared and the difference written as SQL you can review before it runs.
Export | Export | A result exports to a file such as CSV or JSON from the grid of the query.
Diagram | Diagrams | A diagram shows tables and foreign keys.
Source | Data sources | Each connection has a driver, a host, and credentials stored in the IDE.
History | Query history | Past queries can be recalled from the local history and run again against the same source.`,
    links: [["Product", "https://www.jetbrains.com/datagrip/"], ["Docs", "https://www.jetbrains.com/help/datagrip/"]],
    alts: [["DBeaver", "https://github.com/dbeaver/dbeaver", "Apache-2.0", "The community edition is Apache-2.0. The commercial edition is separate."]],
  }),
  row({
    id: "phpstorm",
    name: "PhpStorm",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid IDE for PHP, with debugging, Composer, and framework support in the editor.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default PHP IDE in agencies and product teams that still ship a lot of PHP.",
    licenseName: "JetBrains terms",
    licenseNote: "PhpStorm is proprietary. There is no community edition.",
    gap: "An open editor can highlight PHP. PhpStorm's framework integrations and the debugger are the gap.",
    features: `Editor | Editor | Completion and navigation understand PHP projects and Composer.
Frameworks | Frameworks | Laravel, Symfony, and other frameworks have dedicated support the product documents.
Debug | Debugger | Xdebug sessions stop in the IDE so you can inspect variables on a line of PHP.
Test | Tests | PHPUnit and similar runners show results in the IDE.
Database | Database | SQL can be run from the IDE against a configured source.
Quality | Quality tools | PHP_CodeSniffer and similar tools surface as inspections.
Deploy | Deployment | A project can be uploaded to a remote host from the IDE.
VCS | Version control | Git operations run inside the IDE, including commit, branch, and a side-by-side diff.`,
    links: [["Product", "https://www.jetbrains.com/phpstorm/"], ["Docs", "https://www.jetbrains.com/help/phpstorm/"]],
    alts: [["VSCodium", "https://github.com/VSCodium/vscodium", "MIT", "An MIT build of Code-OSS. It is not PhpStorm."]],
  }),
  row({
    id: "goland",
    name: "GoLand",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid IDE for Go, with a debugger, tests, and module tools in one window.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common Go IDE beside VS Code for people who want JetBrains' debugger and refactoring.",
    licenseName: "JetBrains terms",
    licenseNote: "GoLand is a proprietary JetBrains IDE sold separately from the Go toolchain.",
    gap: "An open editor plus the Go tools can build and test. GoLand's integrated debugger and refactorings are the gap.",
    features: `Editor | Editor | Completion uses the Go toolchain's knowledge of the module.
Refactor | Refactoring | Renames and extracts update references across the module instead of a single file.
Debug | Debugger | A breakpoint stops the Delve session the IDE started.
Test | Tests | A test function runs from the gutter and the IDE shows the failure next to the assertion.
Modules | Modules | go.mod dependencies are understood by the project view.
Profiler | Profiler | A profile can be captured and viewed in the editions that include it.
Database | Database tools | SQL tools ship in the IDE so a query can run against a database without leaving GoLand.
Run | Run configurations | A run configuration sets the package, the arguments, and the environment.`,
    links: [["Product", "https://www.jetbrains.com/go/"], ["Docs", "https://www.jetbrains.com/help/go/"]],
    alts: [["VSCodium", "https://github.com/VSCodium/vscodium", "MIT", "An MIT editor. The Go tools themselves are separate and mostly open."]],
  }),
  row({
    id: "clion",
    name: "CLion",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid IDE for C and C++, with CMake, a debugger, and code analysis.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common C++ IDE on top of CMake for teams that do not want to live only in a debugger frontend.",
    licenseName: "JetBrains terms",
    licenseNote: "CLion is a proprietary JetBrains IDE and is separate from the compilers it drives.",
    gap: "An open editor can call CMake and a debugger. CLion's integrated refactoring and the embedded tools are the gap.",
    features: `CMake | CMake projects | A CMake project loads as the IDE's model of the build.
Editor | Editor | Completion and navigation use the project's compile commands.
Debug | Debugger | GDB or LLDB stops on a breakpoint inside the IDE.
Sanitizers | Sanitizers | Address and other sanitizer output can be shown in the IDE.
Embedded | Embedded | Some toolchains for devices are supported as the product documents.
Test | Tests | A CTest or other test target runs from the IDE.
VCS | Version control | Git is integrated in the same window so a diff and a commit happen beside the editor.
Remote | Remote toolchains | A build can run on a remote machine configured as a toolchain.`,
    links: [["Product", "https://www.jetbrains.com/clion/"], ["Docs", "https://www.jetbrains.com/help/clion/"]],
    alts: [["VSCodium", "https://github.com/VSCodium/vscodium", "MIT", "An MIT editor. You bring a compiler and a debugger."]],
  }),
  row({
    id: "rubymine",
    name: "RubyMine",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "JetBrains' paid IDE for Ruby and Rails, with debugging, tests, and gem support.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common Rails IDE in teams that want more than a text editor and a terminal.",
    licenseName: "JetBrains terms",
    licenseNote: "RubyMine is a proprietary JetBrains IDE sold separately from Ruby itself.",
    gap: "An open editor can edit Ruby. RubyMine's Rails navigation and the integrated tools are the gap.",
    features: `Editor | Editor | Completion and go-to-definition work across a Rails app.
Rails | Rails navigation | A controller, a view, and a route can be jumped between.
Debug | Debugger | A request can be stopped in the debugger.
Test | Tests | RSpec or Minitest runs from the IDE and a failure jumps back to the example.
Database | Database | The IDE can show the tables Rails is using.
RuboCop | RuboCop | Style inspections appear in the editor so a RuboCop offense is marked on the line.
Bundler | Bundler | Gem dependencies are visible in the project.
Deploy | Capistrano and similar | Deployment tools the product supports can be run from the IDE.`,
    links: [["Product", "https://www.jetbrains.com/ruby/"], ["Docs", "https://www.jetbrains.com/help/ruby/"]],
    alts: [["VSCodium", "https://github.com/VSCodium/vscodium", "MIT", "An MIT editor. Rails itself is open. This IDE is not."]],
  }),
  row({
    id: "canvas-lms",
    name: "Canvas LMS",
    vendor: "Instructure",
    category: "Education",
    summary: "A learning management system for courses, assignments, grades, and quizzes.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The learning system at a large number of universities and school districts.",
    licenseName: "Instructure terms",
    licenseNote: "Canvas the hosted product is proprietary. This card is that service.",
    gap: "Moodle is an open learning system you host. Canvas's hosted operations and the product surface are the gap.",
    features: `Courses | Courses | A course has modules, files, and people in roles.
Assign | Assignments | A student submits work and a teacher grades it.
Grade | Gradebook | Scores collect in a gradebook the teacher can export.
Quiz | Quizzes | A quiz is timed and scored inside the course.
Discuss | Discussions | A discussion is graded or left as a conversation.
Speed | SpeedGrader | A teacher moves through submissions in one viewer.
Roster | Rosters | Students arrive from a student-information system or are added by hand.
Mobile | Mobile apps | Students open the course from a phone app.`,
    links: [["Product", "https://www.instructure.com/canvas"], ["Docs", "https://developerdocs.instructure.com/services/canvas"]],
    alts: [["Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system. You host it."]],
  }),
  row({
    id: "blackboard",
    name: "Blackboard Learn",
    vendor: "Anthology",
    category: "Education",
    summary: "A long-running learning system for courses, grades, and content at universities.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "Still the system of record for courses at many campuses that adopted it years ago.",
    licenseName: "Anthology terms",
    licenseNote: "The hosted learning system is proprietary.",
    gap: "Moodle covers courses and grades. Blackboard's hosted product and the campus integrations are the gap.",
    features: `Courses | Courses | Content, assignments, and people live in a course.
Content | Content areas | Files, links, and folders are organized for the term.
Grade | Grade center | The instructor records scores and calculates a grade.
Test | Tests | A test is delivered and scored in the course.
Discuss | Discussions | Students post in a forum the instructor created.
Groups | Groups | A class is split into groups with their own tools.
Integrate | Campus integration | Rosters can arrive from the campus identity system.
App | Apps | An external tool can be added to a course.`,
    links: [["Product", "https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard-learn"], ["Docs", "https://help.anthology.com/"]],
    alts: [["Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system you can run."]],
  }),
  row({
    id: "google-classroom",
    name: "Google Classroom",
    vendor: "Google",
    category: "Education",
    summary: "Google's class tool for assignments, materials, and grades on top of Google accounts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The class layer on a large number of school Google accounts.",
    licenseName: "Google terms",
    licenseNote: "Classroom is proprietary. It depends on Google accounts.",
    gap: "Moodle is a full learning system you host. Classroom's tie to Google Drive and school accounts is the gap.",
    features: `Classes | Classes | A teacher creates a class and invites students with a code or a roster.
Work | Classwork | Assignments, questions, and materials are posted in a stream.
Drive | Drive files | An assignment can hand each student a copy of a Doc.
Grade | Grades | Points are recorded and returned to the student.
Announce | Stream | An announcement posts to the class stream so every student sees it on the class page.
Roster | Rosters | Students and teachers have roles, and a teacher invites or removes people from the class.
Topics | Topics | Classwork is grouped by topic so assignments sit under a unit instead of one long list.
Guardian | Guardians | A guardian can be invited to see a summary, where the school allows it.`,
    links: [["Product", "https://classroom.google.com/"], ["Docs", "https://developers.google.com/classroom"]],
    alts: [["Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system. It does not require a Google account."]],
  }),
  row({
    id: "kahoot",
    name: "Kahoot",
    vendor: "Kahoot",
    category: "Education",
    summary: "A live quiz game a teacher or a presenter runs from a screen while the room answers on phones.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default live quiz in classrooms and in a lot of corporate training sessions.",
    licenseName: "Kahoot terms",
    licenseNote: "The service and the apps are proprietary.",
    gap: "An open learning system can hold a quiz. Kahoot's live game, the pin, and the public library are the gap.",
    features: `Kahoots | Kahoots | A quiz is a list of questions with answers and a timer.
Live | Live game | A pin on the screen lets phones join the same game.
Answers | Answers | Each phone picks an answer and the score updates.
Podium | Podium | A leaderboard is shown between questions.
Library | Discover | Public kahoots can be found and reused so a host can start a game someone else already wrote.
Reports | Reports | The host sees who answered what after the game.
Assign | Assignments | A kahoot can also be assigned for someone to play alone.
Business | Business training | The same format is sold for company training, as a separate audience.`,
    links: [["Product", "https://kahoot.com/"], ["Docs", "https://support.kahoot.com/"]],
    alts: [["Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system with quizzes. It is not a live phone game."]],
  }),
  row({
    id: "quizlet",
    name: "Quizlet",
    vendor: "Quizlet",
    category: "Education",
    summary: "Flashcards and study sets, with games and a paid study mode.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default flashcard site for secondary and university students.",
    licenseName: "Quizlet terms",
    licenseNote: "The site and the study modes are proprietary.",
    gap: "An open flashcard program stores a deck and schedules review. Quizlet's public library and the hosted games are the gap.",
    features: `Sets | Study sets | A set is a list of terms and definitions.
Cards | Flashcards | A card flips from term to definition, and a study mode repeats the ones that were missed.
Learn | Learn | A mode repeats the cards the person is missing.
Test | Test | A test mixes written and multiple-choice questions from the set.
Match | Match | A game matches terms to definitions against a clock.
Library | Public sets | Sets other people published can be studied.
Class | Classes | A teacher can send a set to a class so students open the same cards without a public link.
Audio | Audio | A term can be played aloud so a learner hears the pronunciation while studying the card.`,
    links: [["Product", "https://quizlet.com/"], ["Docs", "https://quizlet.com/help"]],
    alts: [["Anki", "https://github.com/ankitects/anki", "AGPL-3.0", "An open flashcard program. Decks stay on your devices."]],
  }),
  row({
    id: "typeform",
    name: "Typeform",
    vendor: "Typeform",
    category: "Research",
    summary: "A form product that shows one question at a time and records the answers.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default form when a team wants something that feels like a conversation rather than a spreadsheet grid.",
    licenseName: "Typeform terms",
    licenseNote: "The form hosting and the results are proprietary.",
    gap: "An open survey server can ask the same questions. Typeform's hosted design and the integrations are the gap.",
    features: `Forms | Forms | Questions are ordered, and the respondent sees them one at a time.
Logic | Logic | A later question can depend on an earlier answer.
Design | Design | A theme sets type, color, and images so the form matches a brand before it is shared.
Responses | Responses | Each submission is stored and can be exported.
Embed | Embeds | A form can be embedded in a page or opened from a link.
Hidden | Hidden fields | A link can carry a value, such as a campaign name, into the response.
Integrate | Integrations | A response can be sent to a sheet or another tool.
Video | Video questions | A question can include a video the respondent watches.`,
    links: [["Product", "https://www.typeform.com/"], ["Docs", "https://www.typeform.com/developers/"]],
    alts: [["LimeSurvey", "https://github.com/LimeSurvey/LimeSurvey", "GPL-2.0", "An open survey server you host."]],
  }),
  row({
    id: "surveymonkey",
    name: "SurveyMonkey",
    vendor: "SurveyMonkey",
    category: "Research",
    summary: "An online survey tool for questions, collectors, and result charts.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default survey link for teams that do not want to run a survey server.",
    licenseName: "SurveyMonkey terms",
    licenseNote: "The survey hosting and the analysis are proprietary.",
    gap: "LimeSurvey can run the questionnaire on a server you host. SurveyMonkey's collectors and the hosted charts are the gap.",
    features: `Design | Survey design | Questions include choices, matrices, and open text.
Logic | Skip logic | An answer sends the respondent to a later page.
Collect | Collectors | A link, an email, or an embedded form collects responses.
Results | Results | Charts summarize answers as they arrive.
Export | Export | Responses download as a spreadsheet so the answers can be opened outside SurveyMonkey.
Theme | Themes | A logo and colors brand the survey so the page shows the organization, not only the default theme.
Quota | Quotas | Collection can stop after a number of responses.
Share | Shared surveys | Teammates can be given access to the results.`,
    links: [["Product", "https://www.surveymonkey.com/"], ["Docs", "https://developer.surveymonkey.com/api/v3/"]],
    alts: [["LimeSurvey", "https://github.com/LimeSurvey/LimeSurvey", "GPL-2.0", "An open survey server."]],
  }),
  row({
    id: "qualtrics",
    name: "Qualtrics",
    vendor: "Qualtrics",
    category: "Research",
    summary: "An experience-management suite for surveys, panels, and dashboards.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The survey platform at many universities and large customer-experience teams.",
    licenseName: "Qualtrics terms",
    licenseNote: "The Qualtrics experience-management suite is proprietary.",
    gap: "An open survey server covers a questionnaire. Qualtrics' panels, the stats, and the dashboards are the gap.",
    features: `Survey | Survey builder | A survey has blocks, questions, and display logic.
Distribute | Distribution | A mailing list or an anonymous link collects responses.
Stats | Stats iQ | Analysis tools in the product run tests on the responses.
Dashboard | Dashboards | A dashboard shows results to people who do not build the survey.
Panel | Panels | A panel of respondents can be managed for more than one study.
Workflow | Workflows | A response can trigger a ticket or a message.
Roles | Roles | A brand admin decides who may edit a survey.
Export | Export | Raw data leaves the project as a file so a response set can be analyzed in another tool.`,
    links: [["Product", "https://www.qualtrics.com/"], ["Docs", "https://api.qualtrics.com/"]],
    alts: [["LimeSurvey", "https://github.com/LimeSurvey/LimeSurvey", "GPL-2.0", "An open survey server. It is not a panel-management suite."]],
  }),
  row({
    id: "hotjar",
    name: "Hotjar",
    vendor: "Hotjar",
    category: "Analytics",
    summary: "Heatmaps, recordings, and on-site surveys for a website.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common first tool when a marketing team wants to see where people click.",
    licenseName: "Hotjar terms",
    licenseNote: "The script, the recordings, and the dashboard are proprietary.",
    gap: "An open analytics tool counts visits. Hotjar's heatmaps and the session recordings are the gap.",
    features: `Heat | Heatmaps | A page shows where clicks and scrolling concentrate.
Record | Recordings | A session can be replayed as a video of the page.
Survey | Surveys | A survey pops up on the site after a visit or a click and stores the answer with the session.
Feedback | Feedback widgets | A visitor can leave a note on a page and the team sees the comment next to a screenshot.
Funnels | Funnels | A funnel shows how many sessions reached each step.
Events | Events | A click or a page view is available to filter recordings.
Suppress | Suppression | Fields can be masked so a recording does not keep a password.
Share | Sharing | A recording link can be sent to a teammate.`,
    links: [["Product", "https://www.hotjar.com/"], ["Docs", "https://help.hotjar.com/"]],
    alts: [["Matomo", "https://github.com/matomo-org/matomo", "GPL-3.0", "An open analytics server. Heatmaps are not the core product."]],
  }),
  row({
    id: "productboard",
    name: "Productboard",
    vendor: "Productboard",
    category: "Product work",
    summary: "A product-management system for feedback, a feature board, and a roadmap.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common system of record for product managers who collect feedback from many channels.",
    licenseName: "Productboard terms",
    licenseNote: "The Productboard workspace and its feedback inbox are proprietary.",
    gap: "An open issue tracker holds features. Productboard's feedback inbox tied to those features is the gap.",
    features: `Insights | Insights | A note of customer feedback is stored and can be linked to a feature.
Portal | Portal | Customers can submit an idea on a public portal.
Board | Features board | Features are columns of a hierarchy the team edits.
Score | Prioritization | A score can rank features by the inputs the team chose.
Roadmap | Roadmap | A roadmap shows what is planned, for an audience the team picks.
Releases | Releases | A feature is assigned to a release so the roadmap shows what is planned for that ship date.
Integrations | Integrations | Notes can arrive from a support tool or a call recorder.
Share | Shareable views | A view of the roadmap can be shared without giving edit rights.`,
    links: [["Product", "https://www.productboard.com/"], ["Docs", "https://developer.productboard.com/"]],
    alts: [["Plane", "https://github.com/makeplane/plane", "AGPL-3.0", "An open issue tracker. It is not a feedback repository."]],
  }),
  row({
    id: "aha",
    name: "Aha!",
    vendor: "Aha!",
    category: "Product work",
    summary: "A product-strategy suite for goals, roadmaps, and ideas.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A roadmap tool at product organizations that want strategy and delivery in one system.",
    licenseName: "Aha terms",
    licenseNote: "The Aha! product-strategy suite and its roadmaps are proprietary.",
    gap: "An open tracker can list work. Aha's strategy objects and the published roadmaps are the gap.",
    features: `Goals | Goals | A goal sits above the features that are supposed to serve it.
Ideas | Ideas | An idea is captured and can be promoted to a feature.
Roadmaps | Roadmaps | A roadmap is a view of initiatives over time.
Features | Features | A feature has a description, a score, and a release.
Whiteboard | Whiteboards | A whiteboard is used to sketch a flow next to the record.
Publish | Publishing | A roadmap can be published to a page for people outside the team.
Capacity | Capacity | Work can be compared with the capacity the team entered.
Develop | Development links | A feature can link to a ticket in a delivery tool.`,
    links: [["Product", "https://www.aha.io/"], ["Docs", "https://www.aha.io/api"]],
    alts: [["Plane", "https://github.com/makeplane/plane", "AGPL-3.0", "An open issue tracker with cycles. It is not a strategy suite."]],
  }),
  row({
    id: "pendo",
    name: "Pendo",
    vendor: "Pendo",
    category: "Analytics",
    summary: "A product-analytics and in-app guidance tool for web and mobile products.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common tool when a product team wants usage data and a walkthrough in the same vendor.",
    licenseName: "Pendo terms",
    licenseNote: "The analytics, the guides, and the snippet are proprietary.",
    gap: "An open analytics tool can count events you send. Pendo's in-app guides and the retroactive product analytics are the gap.",
    features: `Track | Event tracking | A snippet or a mobile SDK sends the events the team defined.
Pages | Page analytics | Views and feature clicks are reported for a tagged page so a team can see which controls are used.
Funnels | Funnels | A funnel shows drop-off between steps so you can see where people leave a flow.
Retention | Retention | A chart shows who came back after a first visit, grouped by the week they started.
Guides | Guides | A walkthrough or a tooltip is targeted at a segment.
Feedback | Feedback | An in-app poll asks a question and stores each answer against the visitor's account.
Segments | Segments | A segment filters the charts and who sees a guide.
Replay | Replay | Session replay is offered as part of the product where enabled.`,
    links: [["Product", "https://www.pendo.io/"], ["Docs", "https://developers.pendo.io/"]],
    alts: [["Plausible", "https://github.com/plausible/analytics", "AGPL-3.0", "An open page-analytics tool. It does not inject product walkthroughs."]],
  }),
  row({
    id: "optimizely",
    name: "Optimizely",
    vendor: "Optimizely",
    category: "Analytics",
    summary: "An experimentation platform for feature flags and for tests on a site or an app.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running experimentation vendor, now also a content and feature-flag product.",
    licenseName: "Optimizely terms",
    licenseNote: "The experimentation service and the snippet are proprietary.",
    gap: "An open flag server can ship a flag. Optimizely's stats engine and the visual editor are the gap.",
    features: `Flags | Feature flags | A flag turns a feature on for a percentage or a segment.
Experiments | Experiments | A visitor is bucketed and a metric is compared between variations.
Visual | Visual editor | A variation of a page can be edited without a full deploy, in the web product.
Events | Events | A conversion event is sent from the site or the app.
Stats | Statistics | The product reports whether a difference looks real under its own stats.
Audiences | Audiences | An audience limits who is in the test so only visitors who match a rule see the variation.
SDK | SDKs | An SDK evaluates flags in the application.
Recommend | Recommendations | A recommendations product exists beside experimentation. It is a separate capability.`,
    links: [["Product", "https://www.optimizely.com/"], ["Docs", "https://docs.developers.optimizely.com/"]],
    alts: [["Unleash", "https://github.com/Unleash/unleash", "AGPL-3.0", "An AGPL feature-flag server. It is not a full experimentation suite."]],
  }),
  row({
    id: "fullstory",
    name: "FullStory",
    vendor: "FullStory",
    category: "Analytics",
    summary: "A session-replay and product-analytics tool that records what people did in a web app.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A replay tool support and product teams use to see a bug instead of reading a ticket.",
    licenseName: "FullStory terms",
    licenseNote: "The recording script and the search are proprietary.",
    gap: "An open analytics tool does not reconstruct a session. The replay index is the gap.",
    features: `Replay | Session replay | A session plays back as the page changed, including clicks.
Search | Search | Sessions can be searched for a click, a page, or an error.
Heat | Heatmaps | Clicks on a page are aggregated into a heatmap so the team sees where people press.
Funnel | Funnels | A funnel is built from the events the snippet saw.
Frustration | Frustration signals | Rage clicks and similar signals are called out.
Privacy | Privacy controls | Elements can be masked before they are stored.
Segments | Segments | A segment is a saved search over sessions, such as rage clicks on one URL.
Integrate | Integrations | A session link can be attached to a support ticket.`,
    links: [["Product", "https://www.fullstory.com/"], ["Docs", "https://developer.fullstory.com/"]],
    alts: [["Matomo", "https://github.com/matomo-org/matomo", "GPL-3.0", "An open analytics server for visits you track. It is not a session-replay index."]],
  }),
  row({
    id: "logrocket",
    name: "LogRocket",
    vendor: "LogRocket",
    category: "Developer tools",
    summary: "Session replay plus front-end logs, aimed at debugging production.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A replay tool engineering teams add next to their error tracker.",
    licenseName: "LogRocket terms",
    licenseNote: "The SDK and the hosted replay are proprietary.",
    gap: "An open error tracker stores exceptions. LogRocket's replay of the network and the UI is the gap.",
    features: `Replay | Replay | The UI is replayed alongside console and network logs.
Errors | Exceptions | A JavaScript exception is tied to the session where it happened.
Network | Network | Requests and responses, with redaction, show in the replay.
Identify | Identify | A user id links sessions to a person the app named.
Search | Search | Sessions are filtered by an event, a URL, or an error.
Release | Releases | A release marker shows whether a bug started with a deploy.
Funnels | Funnels | Product funnels are built from the same events.
Galileo | Issues | The product groups sessions that look like the same problem.`,
    links: [["Product", "https://logrocket.com/"], ["Docs", "https://docs.logrocket.com/"]],
    alts: [["Matomo", "https://github.com/matomo-org/matomo", "GPL-3.0", "Open visit analytics. It does not replay a JavaScript session."]],
  }),
  row({
    id: "eventbrite",
    name: "Eventbrite",
    vendor: "Eventbrite",
    category: "Business",
    summary: "A marketplace and a tool for publishing an event and selling tickets.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default place to sell a ticket for a public event without building a checkout.",
    licenseName: "Eventbrite terms",
    licenseNote: "The marketplace and the organizer tools are proprietary.",
    gap: "An open event server can publish an event you host. Eventbrite's buyer marketplace and the ticket payments are the gap.",
    features: `Events | Event pages | An event has a date, a place, a description, and a ticket.
Tickets | Tickets | Paid and free tickets are sold, with a capacity.
Checkout | Checkout | The buyer pays on Eventbrite and receives a ticket.
Promote | Promotion | An event can be listed where Eventbrite shows public events.
Check | Check-in | The organizer scans a ticket at the door.
Email | Emails | Order confirmations and updates go to attendees.
Reports | Reports | Sales and attendance are reported so an organizer can see tickets sold and who checked in.
Organizer | Organizer page | A repeating organizer has a page of their events.`,
    links: [["Product", "https://www.eventbrite.com/"], ["Docs", "https://www.eventbrite.com/platform/api"]],
    alts: [["Mobilizon", "https://framagit.org/framasoft/mobilizon", "AGPL-3.0", "An open event server from Framasoft. It is not a ticket marketplace."]],
  }),
  row({
    id: "luma",
    name: "Luma",
    vendor: "Luma",
    category: "Business",
    summary: "An event page and guest list, widely used for tech meetups and small conferences.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The registration page on a large share of startup and AI community events.",
    licenseName: "Luma terms",
    licenseNote: "The hosted pages and the guest management are proprietary.",
    gap: "An open event server can take registrations you host. Luma's hosted pages and the calendar subscriptions are the gap.",
    features: `Pages | Event pages | A page shows the time, the place, and a registration button.
Guests | Guest list | The host sees who registered and can approve them.
Calendar | Calendars | A community calendar lists more than one event.
Tickets | Tickets | A paid event can charge for a ticket and the host sees the order on the guest list.
Check | Check-in | Hosts check guests in on a phone by scanning a ticket or marking the name present.
Blast | Blasts | A message goes to the guests of an event.
Subscribe | Subscriptions | A person can subscribe to a calendar so later events from that host show up for them.
Discover | Discover | Public events can be found in Luma's own discovery surface.`,
    links: [["Product", "https://lu.ma/"], ["Docs", "https://help.lu.ma/"]],
    alts: [["Mobilizon", "https://framagit.org/framasoft/mobilizon", "AGPL-3.0", "An open event platform you can host."]],
  }),
  row({
    id: "substack",
    name: "Substack",
    vendor: "Substack",
    category: "Writing",
    summary: "A hosted newsletter and publication, with subscriptions and a recommendation network.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default place an independent writer charges for a newsletter.",
    licenseName: "Substack terms",
    licenseNote: "The hosting, the payments, and the network are proprietary.",
    gap: "An open publishing platform can send a newsletter you host. Substack's recommendations and the subscriber payments are the gap.",
    features: `Posts | Posts | A post is emailed and published on the web.
Pay | Paid subscriptions | A reader pays for a publication, and the writer sets the price.
Notes | Notes | A short post exists beside the long letters.
Comments | Comments | Readers comment on a post, if the writer allows it.
Recommend | Recommendations | A publication recommends another, which is how growth works on the network.
Podcast | Podcasts | An audio post can be part of the publication.
Chat | Chat | A publication can have a chat for subscribers.
Stats | Stats | Opens, subscribers, and revenue are shown to the writer.`,
    links: [["Product", "https://substack.com/"], ["Docs", "https://support.substack.com/"]],
    alts: [["Ghost", "https://github.com/TryGhost/Ghost", "MIT", "An open publishing platform. You host it and you handle payments."]],
  }),
  row({
    id: "beehiiv",
    name: "beehiiv",
    vendor: "beehiiv",
    category: "Writing",
    summary: "A newsletter platform aimed at operators who want growth tools and a website.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common Substack alternative for writers who want more control over growth and ads.",
    licenseName: "beehiiv terms",
    licenseNote: "The beehiiv newsletter platform and its growth tools are proprietary.",
    gap: "An open list manager sends a newsletter. beehiiv's growth tools, the ad network, and the site are the gap.",
    features: `Posts | Posts | A newsletter is written, scheduled, and sent.
Web | Website | The same posts render as a site so a newsletter issue is also a public web page.
Grow | Growth tools | Recommendations and referral mechanics are part of the product.
Pay | Paid subscriptions | Readers can pay for a tier so some posts stay behind a subscription.
Ads | Ad network | A newsletter can carry an ad the platform sold, where the writer opts in.
Segment | Segments | A send can go to a segment of subscribers.
Automate | Automations | A welcome series can send after someone subscribes.
Stats | Stats | Opens, clicks, and subscriber growth are reported.`,
    links: [["Product", "https://www.beehiiv.com/"], ["Docs", "https://developers.beehiiv.com/"]],
    alts: [["Listmonk", "https://github.com/knadh/listmonk", "AGPL-3.0", "An open mailing-list manager you host."]],
  }),
  row({
    id: "medium",
    name: "Medium",
    vendor: "Medium",
    category: "Writing",
    summary: "A hosted publishing network where writers post essays and readers follow publications.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A large general-interest place to publish an essay without opening a site.",
    licenseName: "Medium terms",
    licenseNote: "The network and the membership are proprietary.",
    gap: "An open blogging server publishes an essay. Medium's network, the membership, and the distribution are the gap.",
    features: `Stories | Stories | An essay is published on the writer's profile.
Publications | Publications | A publication has editors and a home page.
Follow | Follows | A reader follows a writer or a publication.
Member | Membership | A paid membership unlocks reading the member library.
Partner | Partner program | A writer in the program can be paid from member reading, under Medium's rules.
Highlight | Highlights | A reader highlights a passage and can leave a note.
Responses | Responses | A response sits under the story so a reader can reply in public on the same page.
Stats | Stats | The writer sees views and reads for a story, including how far people scrolled.`,
    links: [["Product", "https://medium.com/"], ["Docs", "https://help.medium.com/"]],
    alts: [["WriteFreely", "https://github.com/writefreely/writefreely", "AGPL-3.0", "An open writing platform you can host."]],
  }),
  row({
    id: "patreon",
    name: "Patreon",
    vendor: "Patreon",
    category: "Business",
    summary: "A membership platform where a creator charges fans on a recurring basis.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default way for a podcaster, a musician, or a writer to charge a monthly membership.",
    licenseName: "Patreon terms",
    licenseNote: "The platform and the payments are proprietary.",
    gap: "An open publishing tool can put posts behind an account you run. Patreon's member payments and the discovery are the gap.",
    features: `Tiers | Tiers | A creator sets monthly tiers with different benefits.
Posts | Posts | A post can be public or limited to a tier.
Pay | Payments | A member is billed on a schedule and the creator is paid out.
Benefits | Benefits | A tier lists what the member receives, such as a post, a file, or a Discord role.
Messages | Messages | The creator can message members in a tier without exporting the mailing list.
Shop | Shop | A one-time product can be sold beside the membership, where enabled.
App | Creator page | The public page explains the membership.
Insights | Insights | The creator sees members, growth, and earnings.`,
    links: [["Product", "https://www.patreon.com/"], ["Docs", "https://docs.patreon.com/"]],
    alts: [["Ghost", "https://github.com/TryGhost/Ghost", "MIT", "An open site with paid memberships. You host it. It is not Patreon's creator network."]],
  }),
  row({
    id: "teachable",
    name: "Teachable",
    vendor: "Teachable",
    category: "Education",
    summary: "A hosted school for selling an online course, with students, lectures, and payments.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common storefront for an independent teacher selling a course.",
    licenseName: "Teachable terms",
    licenseNote: "The school hosting and the payments are proprietary.",
    gap: "Moodle can deliver a course you host. Teachable's checkout and the student storefront are the gap.",
    features: `Curriculum | Curriculum | A course is sections of video, text, and quizzes.
Students | Students | A student enrolls and sees their courses.
Pay | Checkout | A price, a coupon, and a payment sit on the course.
Drip | Drip | A lecture can unlock on a schedule so a student sees the next lesson only after a set date.
Certificate | Certificates | A completion certificate can be issued when a student finishes the required lessons.
Quiz | Quizzes | A quiz grades itself from the answer key.
Coach | Coaching products | A coaching offer can be sold beside a course.
Site | School site | The school has a domain, a theme, and a catalog of courses.`,
    links: [["Product", "https://teachable.com/"], ["Docs", "https://docs.teachable.com/"]],
    alts: [["Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system. You bring the students and the payments."]],
  }),
  row({
    id: "factset",
    name: "FactSet",
    vendor: "FactSet",
    category: "Finance",
    summary: "A financial-data workstation for research, models, and market data.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A standard terminal beside Bloomberg in many investment teams.",
    licenseName: "FactSet terms",
    licenseNote: "The workstation, the data, and the Excel tools are proprietary.",
    gap: "An open data library can analyze prices you already have. FactSet's licensed data and the workstation are the gap.",
    features: `Workstation | Workstation | A desktop holds the apps an analyst opens during the day.
Screen | Company screens | A company page shows financials, filings, and estimates the license includes.
Excel | Excel add-in | Formulas pull data into a spreadsheet so a cell stays linked to a FactSet identifier.
Chart | Charting | A price series is charted inside the product.
Portfolio | Portfolios | A portfolio is valued from the data license.
News | News | A news wire the license includes is searchable.
Screening | Screening | A screen filters a universe by a fundamental or a market field.
API | APIs | A program can request data the contract allows.`,
    links: [["Product", "https://www.factset.com/"], ["Docs", "https://developer.factset.com/"]],
    alts: [["pandas", "https://github.com/pandas-dev/pandas", "BSD-3-Clause", "An open data library. It is not a market-data terminal."]],
  }),
  row({
    id: "pitchbook",
    name: "PitchBook",
    vendor: "PitchBook",
    category: "Finance",
    summary: "A private-market database of companies, deals, investors, and funds.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default source when a venture or private-equity team looks up a company or a fund.",
    licenseName: "PitchBook terms",
    licenseNote: "The database and the research are proprietary.",
    gap: "Public filings and an open database can describe a public company. PitchBook's private deal data is the gap.",
    features: `Companies | Company profiles | A profile collects investors, funding rounds, and a description.
Deals | Deals | A financing or an acquisition is a record with a date and the parties.
Investors | Investors | A fund or a firm has a portfolio and a contact list.
Funds | Funds | A fund has a size, a vintage, and the investments attributed to it.
Screen | Screening | A search filters companies by round, location, or industry.
News | News | Editorial coverage sits next to the data.
Excel | Excel plugin | A list can be pulled into a spreadsheet.
Monitor | Alerts | An alert fires when a followed company has a new deal.`,
    links: [["Product", "https://pitchbook.com/"], ["Docs", "https://pitchbook.com/pitchbook-platform"]],
    alts: [["pandas", "https://github.com/pandas-dev/pandas", "BSD-3-Clause", "An open library for tables you already have. It does not include private-market data."]],
  }),
  row({
    id: "westlaw",
    name: "Westlaw",
    vendor: "Thomson Reuters",
    category: "Legal",
    summary: "A legal research service for cases, statutes, and secondary sources.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "One of the two research systems a large share of United States law firms still buy.",
    licenseName: "Thomson Reuters terms",
    licenseNote: "The database, the citator, and the search are proprietary.",
    gap: "Free case law exists for a slice of United States opinions. Westlaw's citator and the licensed secondary sources are the gap.",
    features: `Search | Search | A query searches cases, statutes, and the other libraries the contract includes.
Citator | KeyCite | A citator shows later cases that cite an opinion and how they treated it.
Docs | Document display | A case is read with the headnotes and the citing references.
Folders | Folders | A researcher saves documents into a folder for a matter.
Alerts | Alerts | An alert watches a search or a case and emails you when a new result or a new decision appears.
Secondary | Secondary sources | Treatises and articles are in the libraries the firm licensed.
History | Research history | Past searches can be reopened from the research history so a query does not have to be rebuilt.
Download | Download | A document can be downloaded or sent to a brief.`,
    links: [["Product", "https://legal.thomsonreuters.com/en/products/westlaw"], ["Docs", "https://legal.thomsonreuters.com/en/support"]],
    alts: [["CourtListener", "https://github.com/freelawproject/courtlistener", "see-repository", "Free Law Project publishes the code. Read LICENSE. It is case law, not a citator."]],
  }),
  row({
    id: "ironclad",
    name: "Ironclad",
    vendor: "Ironclad",
    category: "Legal",
    summary: "A contract lifecycle product for generating, negotiating, and storing agreements.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common contract system at companies that sign too many agreements for a shared drive.",
    licenseName: "Ironclad terms",
    licenseNote: "The workflow product and the repository are proprietary.",
    gap: "An open signature tool can collect a signature. Ironclad's workflow from template to signed repository is the gap.",
    features: `Workflow | Workflows | A contract moves through review, approval, and signature.
Template | Templates | A template fills from answers the business user gives.
Editor | Editor | Clauses are edited and commented on before signature.
Sign | Signature | The other party signs in the product or through a connected signature tool.
Repo | Repository | The signed file is stored and can be searched.
Playbook | Playbooks | A clause has a preferred position and a fallback.
Dashboard | Dashboard | Legal sees which contracts are stuck, who holds them, and how long that step has been open.
Report | Reports | Cycle time and volume are reported so a team can see how long contracts take to finish.`,
    links: [["Product", "https://ironcladapp.com/"], ["Docs", "https://developer.ironcladhq.com/"]],
    alts: [["Documenso", "https://github.com/documenso/documenso", "AGPL-3.0", "An open e-signature app. It is not a full contract-lifecycle system."]],
  }),
  row({
    id: "athenahealth",
    name: "athenaOne",
    vendor: "athenahealth",
    category: "Health",
    summary: "A cloud electronic health record and practice-management system for outpatient clinics.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common ambulatory record in United States clinics that do not run a hospital EHR.",
    licenseName: "athenahealth terms",
    licenseNote: "The record, the billing service, and the network are proprietary.",
    gap: "An open medical-record platform can store a chart you host. athenahealth's billing network and the hosted clinic workflow are the gap.",
    features: `Chart | Chart | Problems, medications, and notes live on the patient.
Schedule | Schedule | Appointments are booked and checked in on the clinic schedule for that provider and day.
Orders | Orders | A lab or an image is ordered from the encounter.
Prescribe | Prescribing | A prescription is sent to a pharmacy on the networks the product supports.
Bill | Billing | A claim is created from the visit and followed up.
Portal | Patient portal | A patient sees results and messages the clinic.
Quality | Quality measures | The product reports measures used in payment programs.
Network | Network services | Rules and payer connections are part of what the company sells with the record.`,
    links: [["Product", "https://www.athenahealth.com/"], ["Docs", "https://docs.athenahealth.com/"]],
    alts: [["OpenMRS", "https://github.com/openmrs/openmrs-core", "MPL-2.0", "An open medical-record platform. Read its license and healthcare notes. It is not a billing network."]],
  }),
  row({
    id: "veeva",
    name: "Veeva Vault",
    vendor: "Veeva",
    category: "Health",
    summary: "A content and data cloud for life sciences, including regulatory documents and a CRM for field teams.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default system at pharmaceutical companies for regulated content and for the field team's CRM.",
    licenseName: "Veeva terms",
    licenseNote: "Vault and the CRM, including the regulated document workflows, are proprietary.",
    gap: "An open ERP can store customers and documents. Veeva's regulated lifecycle and the life-sciences data model are the gap.",
    features: `Docs | Document management | A controlled document has versions, approvals, and a status.
Quality | Quality | A quality process such as a deviation can be tracked in a Vault application.
Clinical | Clinical | Trial documents can live in the clinical application.
Regulatory | Regulatory | A submission's documents are assembled and tracked.
CRM | CRM | A field rep records a call with a health professional.
Approved | Approved content | The rep sends only the content medical and legal have approved.
Audit | Audit trail | Changes to a regulated record are kept so a reviewer can see who edited a document and when.
Access | Access control | A role decides who may see a document in a given state.`,
    links: [["Product", "https://www.veeva.com/"], ["Docs", "https://developer.veevacrm.com/"]],
    alts: [["ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP. It is not a life-sciences regulatory system."]],
  }),
  row({
    id: "palo-alto",
    name: "Palo Alto Networks",
    vendor: "Palo Alto Networks",
    category: "Security",
    summary: "Firewalls and a security platform for traffic, threats, and remote access.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default enterprise firewall vendor in a large number of corporate networks.",
    licenseName: "Palo Alto terms",
    licenseNote: "The firewall software, the subscriptions, and the cloud console are proprietary.",
    gap: "An open firewall can filter traffic you route through it. Palo Alto's threat subscriptions and the management plane are the gap.",
    features: `Firewall | Firewall policy | Rules allow or deny traffic between zones.
Threat | Threat prevention | A subscription identifies known threats in the traffic, as the product describes it.
App | App identification | Traffic is classified as an application, not only a port.
VPN | VPN | A remote user or a site connects through a tunnel.
Decrypt | Decryption | TLS can be decrypted for inspection where the organization deploys that.
Manage | Management | Firewalls are managed from a console, including Panorama where it is used.
Log | Logging | Traffic and threat logs are stored and searched.
Wildfire | WildFire | An unknown file can be detonated in the company's sandbox service.`,
    links: [["Product", "https://www.paloaltonetworks.com/"], ["Docs", "https://docs.paloaltonetworks.com/"]],
    alts: [["OPNsense", "https://github.com/opnsense/core", "BSD-2-Clause", "An open firewall. It is not PAN-OS."]],
  }),
  row({
    id: "tenable",
    name: "Tenable",
    vendor: "Tenable",
    category: "Security",
    summary: "A vulnerability-management product that scans assets and ranks the findings.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default vulnerability scanner in many security programs, especially the Nessus line.",
    licenseName: "Tenable terms",
    licenseNote: "The scanners and the cloud platform are proprietary.",
    gap: "An open scanner can check a host for known issues. Tenable's coverage, the ranking, and the asset view are the gap.",
    features: `Scan | Scans | A scan checks a range of hosts or a cloud account.
Plugins | Plugins | Findings come from a feed of checks that Tenable updates and the scanner runs against a host.
Assets | Assets | A host is tracked over time, not only as one scan.
VPR | Priority | Findings are ranked so the team does not treat every item as equal.
Dash | Dashboards | Open risk is summarized for the program.
Compliance | Compliance audits | A scan can check a configuration benchmark.
Report | Reports | A report is exported for a team that will patch.
Integrate | Tickets | A finding can be sent to a ticket tracker.`,
    links: [["Product", "https://www.tenable.com/"], ["Docs", "https://docs.tenable.com/"]],
    alts: [["OpenVAS", "https://github.com/greenbone/openvas-scanner", "GPL-2.0", "An open vulnerability scanner. The Greenbone enterprise product is separate."]],
  }),
  row({
    id: "knowbe4",
    name: "KnowBe4",
    vendor: "KnowBe4",
    category: "Security",
    summary: "Security-awareness training and simulated phishing for employees.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default phishing-training vendor at companies that have to show they trained staff.",
    licenseName: "KnowBe4 terms",
    licenseNote: "The training library and the phishing service are proprietary.",
    gap: "An open phishing simulator can send a campaign you write. KnowBe4's course library and the reporting for auditors are the gap.",
    features: `Train | Training | An employee is assigned a course and a quiz.
Phish | Phishing campaigns | A simulated phish is sent, and a click is recorded.
Library | Content library | Courses and templates are provided by the vendor.
Report | Reporting | The admin sees who finished training and who clicked.
Phish alert | Phish-alert button | A button in the mail client lets a person report a message.
Risk | Risk score | A person is scored from training and from clicks, under the product's formula.
Automate | Automated enrollment | New employees can be enrolled from a directory sync.
Compliance | Compliance views | A report is shaped for an audit that asks whether training happened.`,
    links: [["Product", "https://www.knowbe4.com/"], ["Docs", "https://developer.knowbe4.com/"]],
    alts: [["Gophish", "https://github.com/gophish/gophish", "MIT", "An open phishing simulator. You write the emails and you host it."]],
  }),
  row({
    id: "proofpoint",
    name: "Proofpoint",
    vendor: "Proofpoint",
    category: "Security",
    summary: "An email-security gateway that filters phishing and malware before the mailbox.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default secure-email gateway at large companies.",
    licenseName: "Proofpoint terms",
    licenseNote: "The gateway and the threat intelligence are proprietary.",
    gap: "An open filter can score spam you receive. Proofpoint's targeted-attack products and the hosted gateway are the gap.",
    features: `Filter | Inbound filtering | Mail is scanned before it reaches the mailbox.
URL | URL defense | A rewritten link is checked when the person clicks it.
Attach | Attachment defense | An attachment can be sandbox-checked or rewritten.
Impostor | Impostor mail | A display-name trick is called out when the visible sender name does not match the real domain.
Quarantine | Quarantine | A held message can be released by the user or an admin.
Encrypt | Encryption | A sensitive outbound message can be sent through an encrypted channel the product provides.
Awareness | Training tie-in | Reported messages can feed a training workflow where that product is bought.
Logs | Message logs | An admin traces what happened to one message.`,
    links: [["Product", "https://www.proofpoint.com/"], ["Docs", "https://help.proofpoint.com/"]],
    alts: [["Rspamd", "https://github.com/rspamd/rspamd", "Apache-2.0", "An open mail filter you run in front of a mail server."]],
  }),
  row({
    id: "smartsheet",
    name: "Smartsheet",
    vendor: "Smartsheet",
    category: "Product work",
    summary: "A spreadsheet-shaped work system for sheets, reports, and automations.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The tool operations teams use when a project is still a grid but needs owners and reminders.",
    licenseName: "Smartsheet terms",
    licenseNote: "The sheets, the automations, and the dashboards are proprietary.",
    gap: "An open spreadsheet-database can hold the rows. Smartsheet's automations and the hosted forms are the gap.",
    features: `Sheets | Sheets | Rows and columns track work, with assignees and dates.
Views | Views | The same sheet can be a grid, a Gantt, or a card view.
Forms | Forms | A form adds a row without opening the whole sheet.
Automate | Automations | A rule notifies someone or moves a row when a date arrives.
Report | Reports | A report pulls rows from more than one sheet.
Dashboard | Dashboards | Charts and reports sit on one page so a team sees sheet numbers without opening every sheet.
Attach | Attachments | A row holds a file so the document stays attached to that record instead of a separate folder.
Share | Sharing | A sheet is shared with edit or view rights.`,
    links: [["Product", "https://www.smartsheet.com/"], ["Docs", "https://smartsheet.redoc.ly/"]],
    alts: [["Grist", "https://github.com/gristlabs/grist-core", "Apache-2.0", "An Apache-2.0 spreadsheet-database you host."]],
  }),
  row({
    id: "trello",
    name: "Trello",
    vendor: "Atlassian",
    category: "Product work",
    summary: "A kanban board of lists and cards, owned by Atlassian.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default simple board for teams that do not want a full issue tracker.",
    licenseName: "Atlassian terms",
    licenseNote: "Trello boards, cards, and the hosted service are proprietary Atlassian software.",
    gap: "An open kanban board covers lists and cards. Trello's power-ups and the Atlassian account are the gap.",
    features: `Boards | Boards | A board holds lists, and a list holds cards.
Cards | Cards | A card has a description, members, labels, and a due date.
Check | Checklists | A card contains a checklist so a task can be split into steps that are checked off in order.
Butler | Automation | A rule moves or labels a card when something happens.
Power | Power-ups | An add-on adds a field, a calendar, or a connection to another tool.
Comments | Comments | A comment and an attachment live on the card.
Views | Views | The same board can be seen as a calendar or a timeline where the plan allows.
Guest | Guests | A person outside the workspace can be invited to one board.`,
    links: [["Product", "https://trello.com/"], ["Docs", "https://developer.atlassian.com/cloud/trello/rest/"]],
    alts: [["WeKan", "https://github.com/wekan/wekan", "MIT", "An open kanban board you can host."]],
  }),
  row({
    id: "pipedrive",
    name: "Pipedrive",
    vendor: "Pipedrive",
    category: "Sales",
    summary: "A sales CRM organized as a pipeline of deals.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common CRM for a small sales team that wants a board more than a database.",
    licenseName: "Pipedrive terms",
    licenseNote: "The Pipedrive CRM and its pipeline views are proprietary.",
    gap: "An open CRM can track contacts and deals. Pipedrive's pipeline habits and the hosted automations are the gap.",
    features: `Pipeline | Pipelines | A deal sits in a stage, and the stages are the board.
Deals | Deals | A deal has a value, a contact, and an expected close date.
Activities | Activities | A call or a task is scheduled on the deal.
Leads | Leads | A lead can be converted into a deal so the early contact becomes a card on the pipeline.
Automate | Automations | A stage change can send a mail or create an activity.
Insights | Insights | The forecast adds up the deals in each stage.
Mail | Mail sync | Email with a contact can be filed on the deal.
Products | Products | A deal can contain products and a price.`,
    links: [["Product", "https://www.pipedrive.com/"], ["Docs", "https://developers.pipedrive.com/docs/api/v1"]],
    alts: [["EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM for contacts and deals."]],
  }),
  row({
    id: "dynamics-365",
    name: "Dynamics 365",
    vendor: "Microsoft",
    category: "Business",
    summary: "Microsoft's cloud CRM and ERP applications, sold as a family of apps.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The CRM and ERP a Microsoft-centered company buys instead of Salesforce or a separate ledger.",
    licenseName: "Microsoft terms",
    licenseNote: "The applications and Dataverse hosting are proprietary. This card is the product family, not every screen.",
    gap: "An open CRM and an open ERP cover contacts and a ledger. Dynamics' tie to Microsoft 365 and the hosted apps are the gap.",
    features: `Sales | Sales | Leads, opportunities, and quotes live in the sales app.
Service | Customer service | Cases are tracked and routed to a queue so a support team works from one case list.
Field | Field service | A work order can be scheduled to a technician.
Finance | Finance | A ledger, payables, and receivables are a separate app in the family.
Supply | Supply chain | Inventory and warehouses are another app.
Data | Dataverse | Records sit in the same data platform as Power Apps.
Flow | Power Automate | A flow can start when a record changes and then update another table or send a message.
Role | Security roles | A role decides which records a person sees.`,
    links: [["Product", "https://www.microsoft.com/dynamics-365"], ["Docs", "https://learn.microsoft.com/en-us/dynamics365/"]],
    alts: [["Odoo Community", "https://github.com/odoo/odoo", "LGPL-3.0", "The community edition is LGPL. Enterprise modules in that ecosystem are proprietary."]],
  }),
  row({
    id: "obsidian",
    name: "Obsidian",
    vendor: "Dynalist",
    category: "Knowledge",
    summary: "A local-first notes app of linked Markdown files. The app is not open source.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default personal knowledge base for people who want plain files and will pay for sync and publish.",
    licenseName: "Obsidian terms",
    licenseNote: "The application is proprietary. The notes are plain files. A free license for personal use is not an open-source license. Sync and Publish are paid services.",
    gap: "An open notes app can open the same Markdown folder. Obsidian's plugins community around a closed app, plus Sync and Publish, is the gap.",
    features: `Vault | Vaults | A vault is a folder of Markdown files the app indexes.
Links | Links | A note links to another note, and the graph shows those links.
Graph | Graph | A graph view draws the links in the vault.
Plugins | Plugins | A community plugin adds a feature. The plugin license is that author's, separate from the app.
Canvas | Canvas | A canvas arranges notes and cards in space.
Daily | Daily notes | A note is created for the day and opens from the calendar so that date has its own page.
Sync | Sync | The paid sync service copies the vault between devices.
Publish | Publish | The paid publish service turns notes into a site.`,
    links: [["Product", "https://obsidian.md/"], ["Docs", "https://help.obsidian.md/"]],
    alts: [["Joplin", "https://github.com/laurent22/joplin", "AGPL-3.0", "An open notebook. Your export is not locked to one vendor."]],
  }),
  row({
    id: "mailgun",
    name: "Mailgun",
    vendor: "Mailgun",
    category: "Communications",
    summary: "An API for sending and receiving transactional email.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default sending API for applications that need delivery more than a newsletter editor.",
    licenseName: "Mailgun terms",
    licenseNote: "The sending service and the dashboard are proprietary.",
    gap: "An open mail server can deliver mail you operate. Mailgun's delivered reputation and the API are the gap.",
    features: `Send | Sending API | An application posts a message and Mailgun delivers it.
Receive | Inbound routes | Incoming mail can be parsed and posted to your URL.
Domain | Domains | A domain is verified with DNS before it can send.
Logs | Logs | Each message has a log of accepted, delivered, or failed.
Suppress | Suppressions | Bounces and complaints are kept so the address is not retried blindly.
Template | Templates | A stored template is filled at send time.
Validate | Validation | An address can be checked before a send, as a separate feature.
Webhook | Webhooks | A delivery event is posted back to the application.`,
    links: [["Product", "https://www.mailgun.com/"], ["Docs", "https://documentation.mailgun.com/"]],
    alts: [["Postal", "https://github.com/postalserver/postal", "MIT", "An open mail delivery server you host. You still need domains and a reputation."]],
  }),
  row({
    id: "mapbox",
    name: "Mapbox",
    vendor: "Mapbox",
    category: "Infrastructure",
    summary: "Hosted maps, geocoding, and a map SDK for applications.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The map behind a large number of delivery, real-estate, and mobility apps.",
    licenseName: "Mapbox terms",
    licenseNote: "The hosted tiles, the geocoder, and the account are proprietary. Some client libraries have their own licenses. This card is the platform.",
    gap: "MapLibre can draw a map from tiles you have. Mapbox's hosted tiles, the geocoder, and the styles are the gap.",
    features: `Maps | Map styles | A style controls land, roads, and labels.
SDK | SDKs | A web or mobile SDK draws the map in an app.
Geocode | Geocoding | An address becomes a coordinate, and a coordinate becomes an address.
Directions | Directions | A route is returned for driving, walking, or cycling.
Search | Search | A place search returns candidates with coordinates so a map can center on the chosen result.
Tiles | Tilesets | Custom data can be turned into tiles the map serves.
Static | Static images | A URL returns a map image for an email or a report.
Tokens | Tokens | A token on the account meters usage so a map request is billed against that token.`,
    links: [["Product", "https://www.mapbox.com/"], ["Docs", "https://docs.mapbox.com/"]],
    alts: [["MapLibre GL JS", "https://github.com/maplibre/maplibre-gl-js", "BSD-3-Clause", "An open map renderer. Read LICENSE.txt. You bring the tiles."]],
  }),
  row({
    id: "vimeo",
    name: "Vimeo",
    vendor: "Vimeo",
    category: "Media",
    summary: "A hosted video platform for uploads, privacy controls, and an embeddable player.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default host for a film, a course video, or a marketing video that should not live only on a public social network.",
    licenseName: "Vimeo terms",
    licenseNote: "The hosting, the player, and the review tools are proprietary.",
    gap: "A federated video platform can host a file you store. Vimeo's player, the transcoding, and the privacy controls are the gap.",
    features: `Upload | Upload | A video is uploaded and transcoded so viewers get a stream instead of the original file.
Privacy | Privacy | A video can be public, unlisted, or restricted by a password or a domain.
Player | Player | An embeddable player is customized with colors and an end screen.
Review | Review | Comments can be left on a timestamp, in the tools aimed at teams.
Live | Live | A live event can be streamed to the same account, on the plans that include it.
Showcase | Showcases | Videos are grouped on a page so a series or a course has one public link.
Stats | Stats | Plays and finishes are reported for a video so you can see how far viewers got.
OTT | Subscription channels | A creator can sell access, where that product is enabled.`,
    links: [["Product", "https://vimeo.com/"], ["Docs", "https://developer.vimeo.com/api/guides/start"]],
    alts: [["PeerTube", "https://github.com/Chocobozzz/PeerTube", "AGPL-3.0", "A federated video platform you can host."]],
  }),
  row({
    id: "jasper",
    name: "Jasper",
    vendor: "Jasper",
    category: "AI",
    summary: "A marketing writing product that generates and edits copy from a prompt.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A writing tool marketing teams bought to draft ads, posts, and pages.",
    licenseName: "Jasper terms",
    licenseNote: "The product and the brand voice features are proprietary. It calls models the company operates or resells.",
    gap: "An open chat interface and a model you run can draft text. Jasper's brand voice, the campaigns, and the marketing workflow are the gap.",
    features: `Campaigns | Campaigns | A campaign holds the briefs and the drafts for one effort.
Voice | Brand voice | A style is saved so later drafts follow it.
Templates | Templates | A template starts a blog post, an ad, or a product description.
Editor | Editor | Generated text is edited in the product, not only in a chat transcript.
Knowledge | Knowledge | A document can be added so the draft uses the company's facts.
Art | Images | An image can be generated beside the copy, where that feature is on.
Chat | Chat | A chat mode drafts from a prompt and can rewrite the answer in the same thread.
Collab | Collaboration | Teammates work in the same workspace and can open a document another person started.`,
    links: [["Product", "https://www.jasper.ai/"], ["Docs", "https://www.jasper.ai/api"]],
    alts: [["LibreChat", "https://github.com/danny-avila/LibreChat", "MIT", "An MIT chat interface. You bring the model."]],
  }),
  row({
    id: "suno",
    name: "Suno",
    vendor: "Suno",
    category: "AI",
    summary: "A music generator that writes a song from a text prompt.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A widely used consumer music generator that people open in a browser to make songs.",
    licenseName: "Suno terms",
    licenseNote: "The product and the models are proprietary.",
    gap: "An open research codebase can generate audio. The model weights often have their own terms. Suno's product and its commercial song library are the gap.",
    features: `Prompt | Prompts | A description or a lyric produces a song.
Style | Style | The prompt names a genre or a mood and the generator uses that direction for the clip.
Extend | Extend | A clip can be continued from its ending so the song grows past the first generation.
Library | Library | Generated songs stay in the account so a later visit can play or download them again.
Edit | Replace section | A section of a song can be regenerated while the rest of the clip stays as it was.
Instrumental | Instrumentals | A song can be generated without a vocal.
Download | Download | A file can be downloaded under the plan's rules.
Rights | Commercial use | Paid plans describe whether a song may be used commercially. Those rules are the company's, not a software license.`,
    links: [["Product", "https://suno.com/"], ["Docs", "https://suno.com/about"]],
    alts: [["AudioCraft", "https://github.com/facebookresearch/audiocraft", "MIT", "The code is MIT. Model weights have their own terms. It is not a consumer music app."]],
  }),
  row({
    id: "aws",
    name: "Amazon Web Services",
    vendor: "Amazon",
    category: "Cloud",
    summary: "Amazon's cloud console and APIs for compute, storage, data, and a very large catalog of services.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No single user total is cited here. Amazon reports AWS revenue in its own releases. This card does not restate a figure.",
    reach: "The default cloud for a large share of the internet's backends.",
    licenseName: "AWS terms",
    licenseNote: "The console, the APIs, and the managed services are proprietary. Some AWS-published clients and a few engines are open. This card is the platform.",
    gap: "An open cloud can schedule virtual machines you operate. AWS's managed services and the global console are the gap.",
    features: `Compute | Compute | Virtual machines and container services run customer workloads.
Storage | Storage | Object storage and block volumes keep data.
Data | Data services | Managed databases, warehouses, and queues are separate services in the catalog.
IAM | Identity | Policies decide which API calls an account or a role may make.
Network | Networking | Virtual networks, load balancers, and DNS are configured in the account.
Console | Console | A web console and a CLI call the same APIs.
Regions | Regions | A resource is placed in a region the customer chooses.
Bill | Billing | Usage is metered and billed per service.`,
    links: [["Product", "https://aws.amazon.com/"], ["Docs", "https://docs.aws.amazon.com/"]],
    alts: [["OpenStack Nova", "https://github.com/openstack/nova", "Apache-2.0", "An open compute service. It is one part of a cloud, not the AWS console."]],
  }),
  row({
    id: "azure",
    name: "Microsoft Azure",
    vendor: "Microsoft",
    category: "Cloud",
    summary: "Microsoft's cloud for virtual machines, identity, data, and application services.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No single user total is cited here. Microsoft reports a cloud revenue figure in its own releases. This card does not restate one.",
    reach: "The default cloud for organizations that already run Microsoft identity and Windows.",
    licenseName: "Microsoft terms",
    licenseNote: "The portal and the managed services are proprietary.",
    gap: "An open compute service can run virtual machines you operate. Azure's portal, Entra tie-in, and the managed catalog are the gap.",
    features: `Compute | Virtual machines | A virtual machine runs in a region and a size the customer picks.
App | App services | A web app can be hosted without managing the machine.
Data | Data services | Managed SQL, storage accounts, and analytics services are in the catalog.
Identity | Entra ID | Access to the portal is the same identity many companies use for Microsoft 365.
Network | Networking | Virtual networks, private endpoints, and load balancers isolate workloads.
Portal | Portal | Resources are created from the portal, the CLI, or a template.
Policy | Policy | A policy can require tags or a region so a resource that breaks the rule is flagged or blocked.
Cost | Cost management | Spend is grouped by subscription and by resource group.`,
    links: [["Product", "https://azure.microsoft.com/"], ["Docs", "https://learn.microsoft.com/en-us/azure/"]],
    alts: [["OpenStack Nova", "https://github.com/openstack/nova", "Apache-2.0", "An open compute service. It is not the Azure portal."]],
  }),
  row({
    id: "gcp",
    name: "Google Cloud",
    vendor: "Google",
    category: "Cloud",
    summary: "Google's cloud for compute, data analytics, and application hosting.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No single user total is cited here. Alphabet reports Google Cloud revenue in its own releases. This card does not restate a figure.",
    reach: "The cloud data and application teams pick when they want Google's data services.",
    licenseName: "Google terms",
    licenseNote: "The console and the managed services are proprietary.",
    gap: "An open compute layer runs machines you operate. BigQuery and the rest of the managed catalog are the gap.",
    features: `Compute | Compute Engine | Virtual machines run in a project and a zone.
Run | Cloud Run | A container runs as a service without a cluster to manage.
Data | Data services | BigQuery, the hosted warehouse, is a flagship service in this cloud. It is proprietary.
GKE | Kubernetes | A managed Kubernetes cluster is offered. Kubernetes itself is open. The managed control plane is not.
IAM | IAM | A policy binds a member to a role on a project.
Network | VPC | A virtual private cloud isolates addresses and firewall rules.
Console | Console | The web console, the CLI, and Terraform providers call the APIs.
Billing | Billing | A billing account is linked to projects and exports usage.`,
    links: [["Product", "https://cloud.google.com/"], ["Docs", "https://cloud.google.com/docs"]],
    alts: [["OpenStack Nova", "https://github.com/openstack/nova", "Apache-2.0", "An open compute service. It is not Google Cloud."]],
  }),
  row({
    id: "clickhouse-cloud",
    name: "ClickHouse Cloud",
    vendor: "ClickHouse",
    category: "Data",
    summary: "The hosted ClickHouse service. The database engine itself is Apache-2.0.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A hosted columnar database teams use for event and analytics queries.",
    licenseName: "ClickHouse Cloud terms",
    licenseNote: "ClickHouse Cloud is proprietary. The ClickHouse engine is Apache-2.0. This card is the cloud, not the engine.",
    gap: "You can run the Apache engine yourself. The hosted service, the console, and the operations are the gap.",
    features: `Service | Services | A service is a cluster the console provisions.
SQL | SQL | Queries use ClickHouse SQL against tables in the service.
Ingest | Ingest | Rows arrive from a client, a file, or a streaming source the service supports.
Scale | Scaling | The service can be scaled from the console.
Backup | Backups | Backups are part of the hosted operation.
Users | Users and roles | Database users are managed for the service.
Monitor | Monitoring | Query load and errors are visible in the console.
Private | Private networking | A service can be reached on a private network where the plan allows it.`,
    links: [["Product", "https://clickhouse.com/cloud"], ["Docs", "https://clickhouse.com/docs"]],
    alts: [["ClickHouse", "https://github.com/ClickHouse/ClickHouse", "Apache-2.0", "The database engine. The cloud console is a separate product."]],
  }),
  row({
    id: "elastic-cloud",
    name: "Elastic Cloud",
    vendor: "Elastic",
    category: "Data",
    summary: "Elastic's hosted Elasticsearch and related services. The engine is not the same thing as the cloud.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The hosted search and observability cluster for teams that do not want to run the nodes.",
    licenseName: "Elastic Cloud terms",
    licenseNote: "Elastic Cloud is a proprietary service. Elasticsearch the engine is published under the AGPL and other terms Elastic offers. This card is the cloud.",
    gap: "The engine can be run by anyone who accepts its license. The hosted cluster, the console, and the support are the gap.",
    features: `Deploy | Deployments | A deployment is a cluster with a version and a size.
Search | Search | Indexes and queries are the core use, and the cluster runs as a managed service on Elastic Cloud.
Observe | Observability | Logs and metrics can be stored in the same hosted stack.
Security | Security features | Access control and detection features are configured on the deployment.
Snapshot | Snapshots | The service snapshots the cluster so an index can be restored after a bad write or a failure.
Scale | Scaling | Nodes can be added from the console so the cluster grows without rebuilding it by hand.
Traffic | Traffic filters | A deployment can limit which networks connect.
Upgrade | Upgrades | The console upgrades the version and walks the cluster through the supported path.`,
    links: [["Product", "https://www.elastic.co/cloud"], ["Docs", "https://www.elastic.co/guide/en/cloud/current/index.html"]],
    alts: [["Elasticsearch", "https://github.com/elastic/elasticsearch", "AGPL-3.0", "The engine. Elastic also publishes other license options. The cloud is separate."]],
  }),
  row({
    id: "lastpass",
    name: "LastPass",
    vendor: "LastPass",
    category: "Security",
    summary: "A password manager for vaults shared by a person or a company.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A long-running password vault, especially in companies that standardized on it.",
    licenseName: "LastPass terms",
    licenseNote: "The vault service and the clients are proprietary.",
    gap: "An open vault server can store passwords you host. LastPass's hosted vault and the company admin console are the gap.",
    features: `Vault | Vault | Logins, notes, and cards are stored in the account.
Fill | Autofill | The browser extension fills a saved login.
Generate | Generator | A generator proposes a password with a length and a character set you choose, then can save it.
Share | Shared folders | A folder of logins is shared with a group.
Admin | Admin console | A company admin can set policies and see who has access.
MFA | Multifactor | The account can require a second factor.
Emergency | Emergency access | A trusted contact can request access under a waiting period.
Breach | Breach monitoring | The product warns if a saved address showed up in a breach it tracks.`,
    links: [["Product", "https://www.lastpass.com/"], ["Docs", "https://support.lastpass.com/"]],
    alts: [["Vaultwarden", "https://github.com/dani-garcia/vaultwarden", "AGPL-3.0", "An open server compatible with Bitwarden clients. You host it."]],
  }),
  row({
    id: "google-calendar",
    name: "Google Calendar",
    vendor: "Google",
    category: "Collaboration",
    summary: "Google's calendar for events, guests, rooms, and working hours.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "The calendar behind a large share of Gmail accounts and many company scheduling links.",
    licenseName: "Google terms",
    licenseNote: "The Google Calendar service and its web and mobile apps are proprietary.",
    gap: "An open calendar server speaks the calendar protocols. Google's guest handling, rooms, and the Gmail tie-in are the gap.",
    features: `Events | Events | An event has a time, a place, a description, and guests.
Guests | Guests | Guests are invited and can accept or decline.
Rooms | Rooms | A room or another resource can be booked, in a work account.
Hours | Working hours | The calendar can show when someone is not to be booked.
Share | Shared calendars | A calendar is shared with view or edit rights.
Find | Find a time | A view shows when several guests are free.
Tasks | Tasks | A task list sits beside the calendar in the product.
Meet | Meet links | A video link can be added to the event automatically.`,
    links: [["Product", "https://calendar.google.com/"], ["Docs", "https://developers.google.com/calendar"]],
    alts: [["Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open calendar and file server you host."]],
  }),
  row({
    id: "marketo",
    name: "Marketo Engage",
    vendor: "Adobe",
    category: "Marketing",
    summary: "Adobe's marketing-automation product for email programs, scoring, and campaigns.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A default marketing-automation system in business-to-business companies that already buy Adobe.",
    licenseName: "Adobe terms",
    licenseNote: "Marketo Engage, the Adobe marketing-automation product, is proprietary.",
    gap: "An open marketing app can send email and score a lead on rules you write. Marketo's program library and the revenue attribution are the gap.",
    features: `Programs | Programs | A program holds emails, forms, and the campaign that sends them.
Smart | Smart campaigns | A trigger or a batch starts a flow of steps.
Score | Scoring | A lead's score changes when they take an action.
Email | Email editor | An email is built and tested before the send.
Forms | Forms | A form on a page creates or updates a lead.
Nurture | Nurture | A stream of content sends over time so a person receives the next email after a wait you set.
Revenue | Revenue cycle | Stages of a funnel are modeled for reporting.
CRM | CRM sync | Leads sync with a CRM such as Salesforce.`,
    links: [["Product", "https://business.adobe.com/products/marketo/adobe-marketo.html"], ["Docs", "https://experienceleague.adobe.com/en/docs/marketo/using/home"]],
    alts: [["Mautic", "https://github.com/mautic/mautic", "GPL-3.0", "An open marketing app. Confirm the license file on the tag you run."]],
  }),
  row({
    id: "salesloft",
    name: "Salesloft",
    vendor: "Salesloft",
    category: "Sales",
    summary: "A sales-engagement platform for cadences of email, calls, and tasks.",
    users: "Not disclosed",
    revenue: "Not disclosed",
    scaleNote: "No audited user or revenue total is cited for this product.",
    reach: "A common tool for an outbound sales team that works a list every day.",
    licenseName: "Salesloft terms",
    licenseNote: "The cadences and the dialer are proprietary.",
    gap: "An open CRM stores the contact. A cadence that sends the next touch and logs the call is the gap.",
    features: `Cadence | Cadences | A cadence is a series of emails, calls, and other steps.
People | People | A person is added to a cadence from a list or a CRM.
Email | Email | A step sends a templated email and records the reply.
Dialer | Dialer | A call is placed from the product and logged.
Tasks | Tasks | A step can be a task the rep completes by hand.
Analytics | Analytics | The team sees who replied and which cadence step did it.
CRM | CRM sync | Activities write back to the CRM so a call or an email shows on the contact record.
Team | Team cadences | A manager builds the cadence the reps run.`,
    links: [["Product", "https://www.salesloft.com/"], ["Docs", "https://developers.salesloft.com/"]],
    alts: [["EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM. It does not run a sales cadence product."]],
  }),
];
