import type { Tool } from "../types";
import { alts, feats } from "./define";

export const devTools: Tool[] = [
  {
    id: "github",
    name: "GitHub",
    vendor: "Microsoft",
    category: "Developer tools",
    summary: "The forge where a huge share of public and private code is reviewed.",
    reach: "The default place open-source projects are published and the default pull-request host for a large share of companies. Git itself is open. GitHub is not.",
    licenseKind: "proprietary",
    licenseName: "GitHub terms of service",
    licenseNote: "Git is GPL. GitHub the website, Actions, Codespaces, Advanced Security, and the pull-request product are proprietary. Hosting a repo there does not make the forge open source.",
    gap: "Forgejo and GitLab’s open-source edition cover repositories, issues, and CI. Actions compatibility, the network effect, and Advanced Security are the gap.",
    features: feats(`
Review | Pull requests | Diffs, reviews, suggested changes, required reviewers, and merge queues. This is the workflow the site is organized around.
Issues | Issues, Projects, and Discussions | Trackers, a board, and a discussion forum beside the code.
CI | GitHub Actions | Workflows triggered by pushes and pull requests, with hosted or self-hosted runners. The runner software has open pieces. The product and the hosted minutes are GitHub’s.
Security | Dependabot and code scanning | Dependency update pulls, secret scanning, and CodeQL analysis. Advanced Security features are paid on private repositories.
Packages | GitHub Packages | Publish containers and language packages next to the repo.
Codespaces | Codespaces | A hosted development environment opened from a repository, billed as a GitHub feature.
Pages | GitHub Pages | Static sites from a branch, widely used for project documentation.
Search | Code search | Search across the code the account can see, with a newer index than the original site search.
Admin | Organizations, SSO, and rulesets | Teams, SAML, branch protection, and rulesets that block a push.
Releases | Releases and artifacts | Tagged releases with attached files, which is how a lot of desktop software is distributed.
Gists | Gists | Small snippets, secret or public, hosted by GitHub.
API | REST and GraphQL APIs | Automate the forge. The API is a client of the closed service.
`),
    links: [
      { label: "Product", href: "https://github.com/" },
      { label: "Docs", href: "https://docs.github.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/GitHub" },
    ],
    alternatives: alts([
      ["Forgejo", "https://forgejo.org", "GPL-3.0", "A community forge you can host, forked from the open Gitea line."],
      ["Gitea", "https://gitea.com", "MIT", "A lightweight self-hosted forge."],
    ]),
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    vendor: "GitHub / Microsoft",
    category: "Developer tools",
    summary: "The AI pair programmer wired into the editor and into GitHub.",
    reach: "The default paid coding assistant in companies that already pay GitHub, and a common individual subscription for people in VS Code.",
    licenseKind: "proprietary",
    licenseName: "GitHub Copilot subscription",
    licenseNote: "Copilot is a closed service. Suggestions come from hosted models. The weights are not published as open source, and the product terms restrict how the service may be used.",
    gap: "Continue, Tabby, and local models through Ollama can fill a similar UI. Quality on a company’s private codebase, and the admin controls, are the gap.",
    features: feats(`
Complete | Inline completions | Suggestions appear as you type and can be accepted by the word or the line.
Chat | Repo-aware chat | Ask questions about the open project, with the editor able to attach files and selections.
Edits | Multi-file edits | A mode that proposes a diff across several files from one instruction, rather than only a single completion.
Agent | Agent mode | A longer task that edits the project and can run commands, under the permissions of the editor host.
GitHub | Pull request help | Summaries, descriptions, and review comments on github.com, not only inside the IDE.
CLI | Copilot CLI | Ask for a shell command and an explanation from the terminal.
Policy | Business and enterprise controls | Organization policies, including whether suggestions that match public code are allowed to surface.
Models | Model choice on eligible plans | Some plans let the user pick among hosted models. The menu is GitHub’s, not a local weight file.
Knowledge | Enterprise knowledge | Index private repositories the organization allows, so answers can cite internal code.
IDE | Editor hosts | Official support centers on VS Code, Visual Studio, and JetBrains, plus Neovim through the CLI and extensions.
Billing | Per-user subscription | The service is metered as a subscription, separate from the cost of a GitHub repository.
Audit | Admin visibility | Enterprise admins can see adoption and policy state. That console is part of the product.
`),
    links: [
      { label: "Product", href: "https://github.com/features/copilot" },
      { label: "Docs", href: "https://docs.github.com/en/copilot" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/GitHub_Copilot" },
    ],
    alternatives: alts([
      ["Continue", "https://continue.dev", "Apache-2.0", "An open editor assistant that can talk to models you choose, including local ones."],
      ["Ollama", "https://ollama.com", "MIT", "Runs local models. It is not a full IDE product. Pair it with an open client."],
    ]),
  },
  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    category: "Developer tools",
    summary: "The proprietary AI editor that looks like VS Code and is not VS Code’s license.",
    reach: "A widely used editor among developers who want an agent in the window. It is a common recommendation in startup teams even where the company also pays for Copilot.",
    licenseKind: "proprietary",
    licenseName: "Cursor terms",
    licenseNote: "Cursor is a closed editor built on the VS Code interface. Using the open VS Code codebase as a base does not make this product open source.",
    gap: "VSCodium plus Continue is the open shape. Cursor’s agent, indexing, and model routing are the closed product people are paying for.",
    features: feats(`
Edit | VS Code-style workspace | Extensions, keybindings, and a familiar editor surface, shipped as Cursor’s own build rather than as Microsoft’s VS Code.
Complete | Tab completions | Inline edits that can jump beyond the current line, which is the feature the product demonstrated first.
Chat | Codebase chat | Questions answered with an index of the project, not only the open file.
Agent | Agent mode | A task that edits files and can run terminal commands under the permissions you configure.
Apply | Diff review | Proposed edits show up as a diff you accept, instead of only a chat transcript.
Rules | Project rules | Standing instructions in the repo so the agent follows local conventions.
Privacy | Privacy mode | A published setting that says prompts and code are not retained for training. That is a vendor promise in their policy, not an open client you can audit end to end.
Models | Model picker | Choose among hosted frontier models inside one subscription. The routing is Cursor’s.
Index | Codebase index | Embeddings of the repo so chat can retrieve relevant files.
Context | Explicit context | Attach files, folders, and docs to a request when the index is not enough.
Import | Settings import | Bring VS Code settings and extensions across, which is how the product recruits.
Account | Subscription and usage | Features are tied to a Cursor account and a plan, with usage limits on agent requests.
`),
    links: [
      { label: "Product", href: "https://cursor.com/" },
      { label: "Docs", href: "https://docs.cursor.com/" },
      { label: "Privacy", href: "https://cursor.com/privacy" },
    ],
    alternatives: alts([
      ["VSCodium", "https://vscodium.com/", "MIT", "The open editor shell. Add an open assistant if you want generation."],
      ["Continue", "https://continue.dev", "Apache-2.0", "Inline and chat assistance inside an editor you control."],
    ]),
  },
  {
    id: "intellij-ultimate",
    name: "IntelliJ IDEA Ultimate",
    vendor: "JetBrains",
    category: "Developer tools",
    summary: "The paid Java and polyglot IDE. The Community edition is a different license.",
    reach: "The IDE a large share of professional Java and Kotlin teams pay for, and the base of a family that includes WebStorm, PyCharm Professional, GoLand, Rider, and DataGrip.",
    licenseKind: "proprietary",
    licenseName: "JetBrains commercial license",
    licenseNote: "IntelliJ IDEA Community is Apache-2.0. Ultimate is not. The Java/Kotlin core is usable in Community. The web stack, Spring depth, database tools, and profiler are why companies buy Ultimate.",
    gap: "Community, Eclipse, and VSCodium cover a lot of editing. The paid framework intelligence is the part teams notice when they try to drop the subscription.",
    features: feats(`
Java | Deep Java and Kotlin support | Refactors, inspections, and completion that understand the language and common frameworks. Community already has a strong version of this.
Spring | Spring and enterprise frameworks | Ultimate adds first-class Spring, Jakarta EE, Micronaut, and Quarkus navigation that Community does not match.
Web | JavaScript and TypeScript | The same window edits the frontend, with framework support that JetBrains otherwise sells as WebStorm.
Data | Database tool window | Browse schemas, run SQL, and navigate from a query to the code. DataGrip is the standalone version of this idea.
Profile | Profiler | CPU and allocation profiling integrated with the debugger on supported runtimes.
HTTP | HTTP client | Save and replay HTTP requests beside the code, which replaces a separate GUI client for many services.
Remote | Remote development | Edit a project that is running on another machine, through JetBrains’ remote layer.
Together | Code With Me | A shared editing session. The host’s IDE license still applies.
AI | AI Assistant | JetBrains’ own paid assistant inside the IDE, separate from Copilot even when both can be installed.
Debug | Debugger and test runner | Shared in spirit with Community, and wired to Ultimate’s framework runners for Spring and application servers.
VCS | Git and local history | A Git UI and a local history of edits that does not depend on a commit.
License | Subscription and the All Products Pack | Ultimate is sold as a subscription, often as part of the pack that also licenses the other commercial JetBrains IDEs.
`),
    links: [
      { label: "Product", href: "https://www.jetbrains.com/idea/" },
      { label: "Help", href: "https://www.jetbrains.com/help/idea/" },
      { label: "Community edition source", href: "https://github.com/JetBrains/intellij-community" },
    ],
    alternatives: alts([
      ["IntelliJ IDEA Community", "https://github.com/JetBrains/intellij-community", "Apache-2.0", "The open edition. It is a real Java and Kotlin IDE and it omits Ultimate’s web, database, and many framework features."],
      ["Eclipse", "https://eclipseide.org", "EPL-2.0", "The other long-standing open Java IDE."],
    ]),
  },
  {
    id: "jira",
    name: "Jira",
    vendor: "Atlassian",
    category: "Developer tools",
    summary: "The issue tracker that still runs a huge share of software teams.",
    reach: "The default ticket system in many enterprises and in a lot of open-source projects that never left Atlassian. “File a Jira” is ordinary language.",
    licenseKind: "proprietary",
    licenseName: "Atlassian Cloud or Data Center subscription",
    licenseNote: "Jira is proprietary. Cloud is the current product. Data Center is the self-managed paid edition. Neither is an open-source tracker you can fork.",
    gap: "Plane and OpenProject cover issues and roadmaps. Jira’s installed workflows, JQL, and the marketplace apps companies have already bought are the gap.",
    features: feats(`
Issues | Issues and workflows | A ticket has a type, a status, and a workflow the admin drew. That workflow is the product more than the form fields.
Boards | Scrum and kanban boards | Backlogs, sprints, and boards on top of the same issues.
Query | JQL | A query language for issues, saved as filters and used by boards, dashboards, and automation.
Reports | Burndown and velocity | Sprint reports generated from the same data, which teams argue about in planning.
Roadmaps | Timelines | A timeline of issues inside a project. Cross-project planning is a higher plan.
Automation | Automation rules | If-this-then-that rules without writing an app, for transitions, assignments, and notifications.
Dashboards | Dashboards and gadgets | A wall of filters for a standup or a manager.
Permissions | Roles and permission schemes | Project roles, permission schemes, and issue security, which is why Jira admins exist as a job.
Integrate | Confluence, Bitbucket, and the marketplace | A tight link to Atlassian’s wiki, plus a marketplace of apps that become part of the team’s process.
Notify | Notification schemes | Email and in-product events driven by the workflow, often noisier than people want.
Admin | Cloud administration | Org-wide user management, sandbox changes on eligible plans, and audit logs.
AI | Atlassian Intelligence | Generative help inside issues on plans that include it.
`),
    links: [
      { label: "Product", href: "https://www.atlassian.com/software/jira" },
      { label: "Support", href: "https://support.atlassian.com/jira-software-cloud/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Jira_(software)" },
    ],
    alternatives: alts([
      ["Plane", "https://plane.so", "AGPL-3.0", "An open issue tracker with cycles and views aimed at software teams."],
      ["OpenProject", "https://www.openproject.org", "GPL-3.0", "Issues, Gantt charts, and project work you can host."],
    ]),
  },
  {
    id: "docker-desktop",
    name: "Docker Desktop",
    vendor: "Docker",
    category: "Developer tools",
    summary: "The Mac and Windows app people install when they say they installed Docker.",
    reach: "The usual way developers on a laptop run containers. The engine underneath is open. This desktop product is the piece with the commercial license.",
    licenseKind: "proprietary",
    licenseName: "Docker subscription agreement",
    licenseNote: "Moby and the Docker Engine are Apache-2.0. Docker Desktop, the graphical app and its license, is not. Docker’s terms require a paid subscription for many businesses. Read the current agreement before assuming a company qualifies for the free tier.",
    gap: "Podman, Rancher Desktop, and colima give developers a container engine without Docker Desktop. Compose compatibility and the exact GUI are the gap.",
    features: feats(`
Engine | A managed Linux VM | On macOS and Windows, Desktop runs a hidden Linux virtual machine so containers have a Linux kernel. That packaging is the product.
GUI | Images, containers, volumes, and logs | A graphical view of the engine: start, stop, delete, and read logs without living in the CLI.
Compose | Compose integration | docker compose projects show up in the same UI as single containers.
Kubernetes | Optional single-node Kubernetes | Turn on a local Kubernetes cluster from the settings. It is a convenience switch, not a production cluster.
Resources | CPU, memory, and disk controls | Set what the VM is allowed to consume, which is the setting laptops run out of.
Registry | Registry login | Sign in to Docker Hub and other registries and let pulls use those credentials.
Extensions | Extensions | Extra panels installed into Desktop. The marketplace is Docker’s.
Scout | Docker Scout | Vulnerability views for images when Scout is enabled. It is part of Docker’s commercial story.
Sync | File sharing | Bind-mount host folders into the VM, with the performance quirks Mac users already know.
Update | Product updates | Desktop updates itself and the bundled engine, which is also how the license terms arrive.
CLI | Bundled docker CLI | The familiar docker command, pointed at Desktop’s engine, so tutorials written for Docker work.
License | Commercial terms | Use inside many companies requires a paid plan. The threshold is whatever the current subscription agreement says, and it has changed before.
`),
    links: [
      { label: "Product", href: "https://www.docker.com/products/docker-desktop/" },
      { label: "Docs", href: "https://docs.docker.com/desktop/" },
      { label: "Engine is open", href: "https://github.com/moby/moby" },
    ],
    alternatives: alts([
      ["Podman", "https://podman.io", "Apache-2.0", "A daemonless container engine with a Desktop app of its own that is open source."],
      ["Rancher Desktop", "https://rancherdesktop.io", "Apache-2.0", "A desktop Kubernetes and container app."],
    ]),
  },
  {
    id: "postman",
    name: "Postman",
    vendor: "Postman",
    category: "Developer tools",
    summary: "The API client a large share of backend developers still click instead of writing a curl.",
    reach: "The shared place many teams keep example requests, collections, and a little documentation. It spread because the GUI was easier than raw HTTP.",
    licenseKind: "proprietary",
    licenseName: "Postman terms",
    licenseNote: "Postman is proprietary. Collections can be exported. The cloud workspaces, monitors, and the app itself are not open source.",
    gap: "Bruno and Hoppscotch cover local and collaborative HTTP clients. Postman’s monitors, mock servers, and the collections already stored in its cloud are the gap.",
    features: feats(`
Requests | HTTP requests | Build a request with headers, auth, and a body, and read the response without writing a script.
Collections | Collections and environments | Group requests and switch variables between local, staging, and production.
Share | Workspaces | A team workspace in Postman’s cloud so the collection is not a file on one laptop.
Auth | Auth helpers | OAuth, API keys, bearer tokens, and AWS-style signing filled in by the client.
Docs | Generated docs | Publish documentation from a collection.
Mock | Mock servers | A fake endpoint that answers from saved examples.
Monitors | Monitors | Run a collection on a schedule and alert when it fails. This is a paid cloud feature.
Tests | Test scripts | JavaScript assertions after a request, which is how collections become a suite.
CI | CLI and CI runners | newman and later Postman CLI run a collection in a pipeline. The runner talks to Postman’s ecosystem.
Govern | API governance | Rules and reports on higher plans for teams that want one house style.
Search | Private API network | An internal catalog of APIs the company has posted to Postman.
Local | Offline editing | Requests can be edited locally. Sync and sharing assume the account.
`),
    links: [
      { label: "Product", href: "https://www.postman.com/" },
      { label: "Learning", href: "https://learning.postman.com/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Postman_(software)" },
    ],
    alternatives: alts([
      ["Bruno", "https://www.usebruno.com", "MIT", "A Git-friendly API client that stores collections as files."],
      ["Hoppscotch", "https://hoppscotch.io", "MIT", "An open API client you can host."],
    ]),
  },
];
