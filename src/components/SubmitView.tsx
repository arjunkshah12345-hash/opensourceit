import { useState, type FormEvent } from "react";
import type { Tool } from "../types";
import { parseFeatureLines, type Submission } from "../lib/submissions";
import { go } from "../lib/route";

const LICENSES = [
  "MIT",
  "Apache-2.0",
  "BSD-3-Clause",
  "MPL-2.0",
  "LGPL-3.0",
  "GPL-3.0",
  "AGPL-3.0",
  "EUPL-1.2",
  "Other OSI license",
];

const BLOCKED = /proprietary|source-available|sspl|busl|bsl\b|fsl|elastic license|commercial|all rights reserved|closed source|unlicensed/i;

function validUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function SubmitView({
  tools,
  selectedToolId,
  onCreate,
}: {
  tools: Tool[];
  selectedToolId?: string;
  onCreate: (item: Submission) => void;
}) {
  const [maker, setMaker] = useState("");
  const [project, setProject] = useState("");
  const [website, setWebsite] = useState("");
  const [repo, setRepo] = useState("");
  const [license, setLicense] = useState(LICENSES[0]);
  const [otherLicense, setOtherLicense] = useState("");
  const [replacesId, setReplacesId] = useState(
    tools.some((tool) => tool.id === selectedToolId) ? selectedToolId! : (tools[0]?.id ?? "other"),
  );
  const [summary, setSummary] = useState("");
  const [featureText, setFeatureText] = useState("");
  const [status, setStatus] = useState<Submission["status"]>("beta");
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Submission | null>(null);
  const [honeypot, setHoneypot] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (honeypot) return;
    const chosenLicense = license === "Other OSI license" ? otherLicense.trim() : license;
    const features = parseFeatureLines(featureText);
    if (maker.trim().length < 2) return setError("Add your name or the team name.");
    if (project.trim().length < 2) return setError("Add the project name.");
    if (!validUrl(website)) return setError("Homepage needs a full http or https URL.");
    if (!validUrl(repo)) return setError("Repository needs a full http or https URL.");
    if (chosenLicense.length < 2) return setError("Name the OSI license.");
    if (BLOCKED.test(chosenLicense)) {
      return setError("This list is for open source projects. Source-available and proprietary licenses are not accepted.");
    }
    if (summary.trim().length < 80) return setError("Describe the project in at least a couple of sentences.");
    if (features.length < 3) return setError("Add at least three features, one per line.");
    if (features.some((feature) => feature.description.length < 20)) {
      return setError("Each feature needs a real description, not only a name.");
    }
    const item: Submission = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      maker: maker.trim(),
      project: project.trim(),
      website: website.trim(),
      repo: repo.trim(),
      license: chosenLicense,
      replacesId,
      summary: summary.trim(),
      features,
      status,
      votes: 0,
    };
    onCreate(item);
    setCreated(item);
  }

  if (created) {
    const tool = tools.find((item) => item.id === created.replacesId);
    return (
      <div className="success portal-success">
        <p className="eyebrow">Submission received</p>
        <h2 className="entry-title">{created.project} is listed.</h2>
        <p>
          It shows on the community tab
          {tool ? ` and on the alternatives for ${tool.name}` : ""}. Nothing here is reviewed, and other
          people will not see it until the entry is merged into the catalog. Export it from the community tab
          when you want to send it.
        </p>
        <div className="success-meta">
          <span>{created.features.length} documented features</span>
          <span>{created.status} status</span>
          <span>0 votes so far</span>
        </div>
        <div className="actions">
          <a className="button" href="#/community">
            View community list
          </a>
          {tool && (
            <button className="button secondary" onClick={() => go(`#/tool/${tool.id}/alternatives`)}>
              See it beside {tool.name}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="hero compact portal-hero">
        <div>
          <p className="eyebrow">Open-source submissions</p>
          <h1 className="thesis">Put a serious alternative on the map.</h1>
          <p className="lede">
            Give people enough evidence to try what you built. Your entry appears in this browser immediately and
            can be exported for a maintainer review.
          </p>
        </div>
        <aside className="portal-brief" aria-label="Submission checklist">
          <p className="area-label">What makes a strong entry</p>
          <ol>
            <li><strong>Show the work.</strong><span>Link the product and its source.</span></li>
            <li><strong>Name the trade-off.</strong><span>Say what it replaces and where it differs.</span></li>
            <li><strong>Keep it current.</strong><span>Choose the maturity level honestly.</span></li>
          </ol>
        </aside>
      </section>
      <div className="portal-layout">
      <form className="form" onSubmit={onSubmit}>
        <div className="form-heading">
          <p className="eyebrow">01 / Project profile</p>
          <h2>Tell the index what you built.</h2>
          <p className="meta">Required fields are checked locally. Nothing is sent to a server.</p>
        </div>
        <label className="field">
          <span>Your name or team</span>
          <input value={maker} onChange={(event) => setMaker(event.target.value)} autoComplete="name" required />
        </label>
        <div className="row-2">
          <label className="field">
            <span>Project name</span>
            <input value={project} onChange={(event) => setProject(event.target.value)} required />
          </label>
          <label className="field">
            <span>Status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value as Submission["status"])}>
              <option value="prototype">Prototype</option>
              <option value="beta">Usable</option>
              <option value="production">Production</option>
            </select>
          </label>
        </div>
        <div className="row-2">
          <label className="field">
            <span>Homepage</span>
            <input
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              placeholder="https://"
              inputMode="url"
              required
            />
          </label>
          <label className="field">
            <span>Source repository</span>
            <input
              value={repo}
              onChange={(event) => setRepo(event.target.value)}
              placeholder="https://github.com/…"
              inputMode="url"
              required
            />
          </label>
        </div>
        <div className="row-2">
          <label className="field">
            <span>OSI license</span>
            <select value={license} onChange={(event) => setLicense(event.target.value)}>
              {LICENSES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Answers which closed tool</span>
            <select value={replacesId} onChange={(event) => setReplacesId(event.target.value)}>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name}
                </option>
              ))}
              <option value="other">Not a direct answer to one listed tool</option>
            </select>
          </label>
        </div>
        {license === "Other OSI license" && (
          <label className="field">
            <span>License identifier</span>
            <input value={otherLicense} onChange={(event) => setOtherLicense(event.target.value)} required />
          </label>
        )}
        <label className="field">
          <span>What it does <em>{summary.trim().length}/80 minimum</em></span>
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder="A couple of sentences on what you built and where it stands relative to the closed tool."
            required
          />
        </label>
        <label className="field">
          <span>Features, one per line <em>{parseFeatureLines(featureText).length} added · 3 minimum</em></span>
          <textarea
            value={featureText}
            onChange={(event) => setFeatureText(event.target.value)}
            placeholder={"Auto layout — Frames that reflow when the text changes.\nComments — Leave a note on a specific object."}
            required
          />
        </label>
        <label className="sr">
          Company
          <input value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <div className="actions">
          <button className="button" type="submit">
            Submit for review <span aria-hidden="true">→</span>
          </button>
          <span className="form-footnote">Saved locally until a maintainer merges it.</span>
        </div>
      </form>
      <aside className="portal-aside">
        <div className="aside-section">
          <p className="area-label">Accepted here</p>
          <p>Projects with an OSI-approved open-source license, a working homepage, and a public source repository.</p>
        </div>
        <div className="aside-section">
          <p className="area-label">Not a fit</p>
          <p>Source-available, proprietary, abandoned, or unverifiable projects. The portal is a starting point for review, not a paid listing.</p>
        </div>
        <a className="aside-link" href="#/leaderboard">See what the community is backing <span aria-hidden="true">↗</span></a>
      </aside>
      </div>
    </>
  );
}
