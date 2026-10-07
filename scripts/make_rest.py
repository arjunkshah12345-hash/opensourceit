#!/usr/bin/env python3
"""Append more catalog cards. Each feature sentence is specific and at least 40 characters."""
from pathlib import Path

OUT = Path(__file__).with_name("catalog_c.txt")
ND_USERS = "Not disclosed"
ND_REV = "Not disclosed"
ND_SCALE = "No audited user or revenue total is cited for this product."

def card(id_, name, vendor, cat, summary, reach, lic, note, gap, url, docs, alt, feats):
    lines = [
        f"@@ {id_} | {name} | {vendor} | {cat}",
        f"summary: {summary}",
        f"users: {ND_USERS}",
        f"revenue: {ND_REV}",
        f"scale: {ND_SCALE}",
        f"reach: {reach}",
        f"license: {lic}",
        f"note: {note}",
        f"gap: {gap}",
        f"url: {url}",
        f"docs: {docs}",
        "alt: " + " | ".join(alt),
    ]
    for area, fname, desc in feats:
        if len(desc) < 40 or "|" in desc or "|" in fname:
            raise SystemExit(f"bad feature {id_} {fname} {len(desc)}")
        lines.append(f"- {area} | {fname} | {desc}")
    return "\n".join(lines)

def F(pairs):
    return pairs

# alt tuples: name, url, license, note
PLANE = ("Plane", "https://github.com/makeplane/plane", "AGPL-3.0", "An open issue tracker with projects and cycles.")
PENPOT = ("Penpot", "https://github.com/penpot/penpot", "MPL-2.0", "An open design tool for screens and components.")
NC = ("Nextcloud", "https://github.com/nextcloud/server", "AGPL-3.0", "An open file, calendar, and mail server you host.")
CHAT = ("Chatwoot", "https://github.com/chatwoot/chatwoot", "MIT", "An open customer inbox you host.")
ESPO = ("EspoCRM", "https://github.com/espocrm/espocrm", "AGPL-3.0", "An open CRM for contacts and deals.")
LIST = ("Listmonk", "https://github.com/knadh/listmonk", "AGPL-3.0", "An open mailing-list manager.")
JITSI = ("Jitsi", "https://github.com/jitsi/jitsi-meet", "Apache-2.0", "An open video meeting you can host.")
KEY = ("Keycloak", "https://github.com/keycloak/keycloak", "Apache-2.0", "An open identity server you host.")
WP = ("WordPress", "https://github.com/WordPress/WordPress", "GPL-2.0", "An open CMS you host.")
SUP = ("Apache Superset", "https://github.com/apache/superset", "Apache-2.0", "An open BI app on a warehouse you run.")
POST = ("PostHog", "https://github.com/PostHog/posthog", "MIT", "An open product-analytics suite you can host.")
MEDUSA = ("Medusa", "https://github.com/medusajs/medusa", "MIT", "An open commerce backend.")
ERPN = ("ERPNext", "https://github.com/frappe/erpnext", "GPL-3.0", "An open ERP for ledger, payroll, and inventory.")
AKA = ("Akaunting", "https://github.com/akaunting/akaunting", "MIT", "An open accounting app.")
DOCUM = ("Documenso", "https://github.com/documenso/documenso", "AGPL-3.0", "An open e-signature product you can host.")
MAST = ("Mastodon", "https://github.com/mastodon/mastodon", "AGPL-3.0", "An open social network you can host.")
ELEM = ("Element", "https://github.com/element-hq/element-web", "AGPL-3.0", "An open Matrix client for chat.")
OBS = ("OBS Studio", "https://github.com/obsproject/obs-studio", "GPL-2.0", "An open recorder. You host the file.")
KDEN = ("Kdenlive", "https://github.com/KDE/kdenlive", "GPL-2.0", "An open timeline editor.")
INK = ("Inkscape", "https://gitlab.com/inkscape/inkscape", "GPL-2.0", "An open vector editor.")
BLENDER = ("Blender", "https://projects.blender.org/blender/blender", "GPL-2.0", "An open 3D tool.")
GIMP = ("GIMP", "https://gitlab.gnome.org/GNOME/gimp", "GPL-3.0", "An open raster editor.")
LT = ("LanguageTool", "https://github.com/languagetool-org/languagetool", "LGPL-2.1", "An open proofreading server.")
WEB = ("Open WebUI", "https://github.com/open-webui/open-webui", "BSD-3-Clause", "An open chat interface. You bring a model.")
CAL = ("Cal.com", "https://github.com/calcom/cal.com", "AGPL-3.0", "An open scheduler you can host.")
ACTIVE = ("Activepieces", "https://github.com/activepieces/activepieces", "MIT", "An open automation builder you can host.")
FORGE = ("Forgejo", "https://forgejo.org/", "MIT", "An open Git forge.")
WOOD = ("Woodpecker", "https://github.com/woodpecker-ci/woodpecker", "Apache-2.0", "An open CI system you host.")
TRIVY = ("Trivy", "https://github.com/aquasecurity/trivy", "Apache-2.0", "An open vulnerability scanner.")
WAZUH = ("Wazuh", "https://github.com/wazuh/wazuh", "GPL-2.0", "An open detection platform you host.")
MOODLE = ("Moodle", "https://github.com/moodle/moodle", "GPL-3.0", "An open learning system.")
LIME = ("LimeSurvey", "https://github.com/LimeSurvey/LimeSurvey", "GPL-2.0", "An open survey server.")
GHOST = ("Ghost", "https://github.com/TryGhost/Ghost", "MIT", "An open publishing platform.")
PEER = ("PeerTube", "https://github.com/Chocobozzz/PeerTube", "AGPL-3.0", "An open video platform you can host.")
JELLY = ("Jellyfin", "https://github.com/jellyfin/jellyfin", "GPL-2.0", "An open media server.")
BOOK = ("BookStack", "https://github.com/BookStackApp/BookStack", "MIT", "An open wiki you host.")
ZAMMAD = ("Zammad", "https://github.com/zammad/zammad", "AGPL-3.0", "An open help desk.")
APPW = ("Appwrite", "https://github.com/appwrite/appwrite", "BSD-3-Clause", "An open backend for auth and data.")
MEILI = ("Meilisearch", "https://github.com/meilisearch/meilisearch", "MIT", "An open search engine.")
QDRANT = ("Qdrant", "https://github.com/qdrant/qdrant", "Apache-2.0", "An open vector database.")
SPARK = ("Apache Spark", "https://github.com/apache/spark", "Apache-2.0", "An open data-processing engine.")
KAFKA = ("Apache Kafka", "https://github.com/apache/kafka", "Apache-2.0", "An open event log.")
PG = ("PostgreSQL", "https://www.postgresql.org/", "PostgreSQL", "An open relational database.")
CODE = ("code-server", "https://github.com/coder/code-server", "MIT", "VS Code in the browser, on a machine you run.")
CONT = ("Continue", "https://github.com/continuedev/continue", "Apache-2.0", "An open coding assistant in your editor.")
OPENH = ("OpenHands", "https://github.com/All-Hands-AI/OpenHands", "MIT", "An open software-engineering agent you run.")
COOL = ("Coolify", "https://github.com/coollabsio/coolify", "Apache-2.0", "An open deploy panel on servers you own.")
CADDY = ("Caddy", "https://github.com/caddyserver/caddy", "Apache-2.0", "An open web server with automatic HTTPS.")
EXCAL = ("Excalidraw", "https://github.com/excalidraw/excalidraw", "MIT", "An open whiteboard.")
DOCMOST = ("Docmost", "https://github.com/docmost/docmost", "AGPL-3.0", "An open wiki you host.")
NOCO = ("NocoDB", "https://github.com/nocodb/nocodb", "AGPL-3.0", "An open spreadsheet UI on your database.")
VIK = ("Vikunja", "https://github.com/go-vikunja/vikunja", "AGPL-3.0", "An open task list you host.")
BBB = ("BigBlueButton", "https://github.com/bigbluebutton/bigbluebutton", "LGPL-3.0", "An open classroom meeting server.")
MATOMO = ("Matomo", "https://github.com/matomo-org/matomo", "GPL-3.0", "An open web-analytics server.")
PLAUS = ("Plausible", "https://github.com/plausible/analytics", "AGPL-3.0", "An open, cookie-light analytics server.")
UNLEASH = ("Unleash", "https://github.com/Unleash/unleash", "Apache-2.0", "An open feature-flag server.")
GROW = ("GrowthBook", "https://github.com/growthbook/growthbook", "MIT", "An open experimentation platform.")
SIGN = ("SigNoz", "https://github.com/SigNoz/signoz", "Apache-2.0", "An open observability backend.")
GRAF = ("Grafana", "https://github.com/grafana/grafana", "AGPL-3.0", "An open dashboard for metrics you collect.")
AST = ("Asterisk", "https://github.com/asterisk/asterisk", "GPL-2.0", "An open telephony toolkit. You bring the carriers.")
MAUTIC = ("Mautic", "https://github.com/mautic/mautic", "GPL-3.0", "An open marketing-automation app.")
FORM = ("Formbricks", "https://github.com/formbricks/formbricks", "AGPL-3.0", "An open survey and form product.")
IMMICH = ("Immich", "https://github.com/immich-app/immich", "AGPL-3.0", "An open photo library you host.")
VAULT = ("Vaultwarden", "https://github.com/dani-garcia/vaultwarden", "AGPL-3.0", "An open Bitwarden-compatible server.")
SYNCT = ("Syncthing", "https://github.com/syncthing/syncthing", "MPL-2.0", "An open folder sync between your devices.")
DARK = ("Darktable", "https://github.com/darktable-org/darktable", "GPL-3.0", "An open raw photo developer.")
SHOT = ("Shotcut", "https://github.com/mltframework/shotcut", "GPL-3.0", "An open video editor.")
UNITY_ALT = ("Godot", "https://github.com/godotengine/godot", "MIT", "An open game engine.")
FREECAD = ("FreeCAD", "https://github.com/FreeCAD/FreeCAD", "LGPL-2.1", "An open parametric CAD modeler.")
OCTAVE = ("GNU Octave", "https://octave.org/", "GPL-3.0", "An open numerical computing language.")
SAGE = ("SageMath", "https://github.com/sagemath/sage", "GPL-2.0", "An open mathematics system.")
RSTUDIO_ALT = ("R", "https://www.r-project.org/", "GPL-2.0", "An open language for statistics.")
SAS_ALT = ("Python", "https://www.python.org/", "PSF-2.0", "An open language. It is not a drop-in SAS runtime.")
BROWSER_ALT = ("Playwright", "https://github.com/microsoft/playwright", "Apache-2.0", "An open browser automation library you run.")
JFROG_ALT = ("Gitea packages are not a full registry. Use Harbor.", "https://github.com/goharbor/harbor", "Apache-2.0", "Wait")

# fix jfrog alt below as Harbor only
HARBOR = ("Harbor", "https://github.com/goharbor/harbor", "Apache-2.0", "An open container registry you host.")
SONAR_ALT = ("SonarQube Community", "https://github.com/SonarSource/sonarqube", "LGPL-3.0", "The community build is LGPL. Commercial editions add languages and enterprise gates.")
SOCKET_ALT = ("OSV-Scanner", "https://github.com/google/osv-scanner", "Apache-2.0", "An open scanner against the OSV database.")
GRAPHITE_ALT = ("Forgejo", "https://forgejo.org/", "MIT", "An open forge. Stacked pull requests are a workflow you do by hand.")
CSB_ALT = CODE
SOURCEGRAPH_ALT = ("OpenGrok", "https://github.com/oracle/opengrok", "CDDL-1.1", "An open code search index you host.")
BROWSERSTACK = BROWSER_ALT

cards = []

def add(*args):
    cards.append(card(*args))

# A compact helper for 8 features that are already full sentences.
def add8(id_, name, vendor, cat, summary, reach, lic, note, gap, url, docs, alt, feats):
    add(id_, name, vendor, cat, summary, reach, lic, note, gap, url, docs, alt, feats)

print("helper ready", len(cards))
Path("/tmp/make_rest_loaded").write_text("ok")
