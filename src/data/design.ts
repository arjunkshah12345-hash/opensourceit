import type { Tool } from "../types";
import { alts, feats } from "./define";

export const designTools: Tool[] = [
  {
    id: "figma",
    name: "Figma",
    vendor: "Figma",
    category: "Design and media",
    summary: "The collaborative interface design tool most product teams design in.",
    reach: "The default design surface for apps and websites in product companies. Engineers inspect Figma files the way they used to inspect exported specs.",
    licenseKind: "proprietary",
    licenseName: "Figma terms and subscription",
    licenseNote: "Figma is a closed multiplayer design tool. The file format is not a format you can run in an open editor with the same fidelity. Plugins are third-party code against Figma’s API.",
    gap: "Penpot is the open design tool aimed at this job. It is real and younger. Figma’s libraries, Dev Mode, and the files already in flight are the gap.",
    features: feats(`
Canvas | Multiplayer canvas | Several people on one file, with named cursors, in a browser or the desktop app.
Layout | Auto layout | Frames that stack, wrap, and resize the way a simple flex layout does, so a button grows when the label changes.
Components | Components, variants, and properties | A button is a component with variants for size and state, and properties for the label and icon, reused across files.
Tokens | Variables and modes | Color, number, and string variables, with modes for light and dark or for more than one brand.
Prototype | Prototyping | Link frames, overlay a menu, and animate between states. Stakeholders click the prototype without a build.
Dev | Dev Mode | Measurements, CSS snippets, and asset export aimed at the engineer implementing a frame. It is a paid mode.
Comments | Comments | A comment pinned to an object, resolved when the change lands.
Libraries | Team libraries | Publish a design system so other files subscribe to it and get updates.
History | Version history and branching | Restore an earlier file. Organization plans can branch a file and merge it back.
FigJam | FigJam | A whiteboard in the same account for workshops and diagrams, separate from the design canvas.
Slides | Figma Slides | A slide tool in the same vendor relationship, for decks that should use the design system.
Plugins | Plugins and REST API | Automate inside a file, or read the file from CI. The API does not let you host Figma.
`),
    links: [
      { label: "Product", href: "https://www.figma.com/" },
      { label: "Help", href: "https://help.figma.com/" },
      { label: "Developers", href: "https://www.figma.com/developers" },
    ],
    alternatives: alts([
      ["Penpot", "https://penpot.app", "MPL-2.0", "Open source design and prototyping, with a self-host option. The ecosystem is smaller."],
      ["Excalidraw", "https://excalidraw.com", "MIT", "A whiteboard, not a product-design tool. Useful where FigJam was the only Figma feature a team used."],
    ]),
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    vendor: "Adobe",
    category: "Design and media",
    summary: "The image editor the word “photoshop” came from.",
    reach: "The professional standard for photo retouching, compositing, and a lot of marketing art. Studios and schools teach it by name.",
    licenseKind: "proprietary",
    licenseName: "Adobe Creative Cloud subscription",
    licenseNote: "Photoshop is closed and, in current sales, rented through Creative Cloud. PSD is a widely read file. Reading a file is not the editor.",
    gap: "GIMP, Krita, and Photopea’s closed web app cover parts of the job. GIMP is the open one. Non-destructive smart objects, type, and color-managed print work are where files fall over.",
    features: feats(`
Layers | Layers, masks, and blend modes | Stack images, hide with masks, and blend with modes such as multiply and screen. This is the basic grammar of a Photoshop file.
Select | Select Subject and masks | Automatic subject selection, plus refine-edge masking for hair and other hard edges. Channels still exist for manual work.
Adjust | Adjustment layers | Color and tone changes that stay editable instead of being burned into the pixels.
Smart | Smart objects | Embed another file so transforms and filters stay reversible.
Retouch | Healing, clone, and content-aware fill | Patch a region using surrounding pixels. Content-aware fill is the feature retouchers use constantly.
Raw | Camera Raw | Develop a camera raw file before it becomes a layer, with the same engine family as Lightroom.
Type | Type and vector shapes | Live text and shape layers, which is why marketing files live here instead of in a pure photo tool.
Color | CMYK, spot color, and proofing | Press workflows: CMYK conversion, spot channels, and soft proofing. This is a reason print shops still ask for Photoshop.
Automate | Actions and batch | Record a sequence and run it across a folder.
Generate | Generative Fill | An Adobe Firefly feature that invents pixels in a selection. It runs in Adobe’s cloud under Adobe’s terms, and it is part of current Photoshop.
Libraries | Creative Cloud Libraries | Shared color and asset libraries across Adobe apps.
Export | Export and artboards | Artboards for screens, and export of slices or whole boards to PNG, JPEG, and other delivery formats.
Plugins | Plugin SDK | Third-party panels and filters. The SDK does not open the application itself.
Cloud | Cloud documents | Save a file to Adobe’s cloud so it shows up on another machine signed into the same account.
`),
    links: [
      { label: "Product", href: "https://www.adobe.com/products/photoshop.html" },
      { label: "Help", href: "https://helpx.adobe.com/photoshop/desktop.html" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Adobe_Photoshop" },
    ],
    alternatives: alts([
      ["GIMP", "https://www.gimp.org", "GPL-3.0", "A capable open image editor. The workflow and some print color features differ."],
      ["Krita", "https://krita.org", "GPL-3.0", "Built for painting and illustration more than for photo retouching."],
    ]),
  },
  {
    id: "premiere-pro",
    name: "Adobe Premiere Pro",
    vendor: "Adobe",
    category: "Design and media",
    summary: "The timeline editor a large share of professional video is cut in.",
    reach: "A standard in commercial editing, alongside Final Cut on Macs and DaVinci for color. Agencies exchange Premiere projects.",
    licenseKind: "proprietary",
    licenseName: "Adobe Creative Cloud",
    licenseNote: "Premiere Pro is closed. Project files are not an open interchange format other editors round-trip reliably.",
    gap: "Kdenlive, Shotcut, and Blender’s editor are open. High-end interchange with After Effects, productions across several editors, and the plugin ecosystem are the gap.",
    features: feats(`
Timeline | Multi-track timeline | Picture, dialogue, music, and graphics on separate tracks, with ripple, roll, slip, and slide edits.
Project | Bins and metadata | Organize rushes in bins, with markers and speech-to-text transcripts on eligible builds so editors can search dialogue.
Color | Lumetri Color | Primary and secondary color correction in the same app, or a round trip to DaVinci for heavier grades.
Audio | Essential Sound | Simple dialogue, music, and ambience treatments without sending every cut to a separate audio app.
Captions | Captions | Create and style captions, including speech-to-text on supported languages, and export them with the master.
Camera | Multicam | Sync several cameras and cut between them from a single sequence.
Proxy | Proxy workflow | Edit with lightweight copies, then relink to the camera originals for export.
AE | Motion graphics templates | Use a Motion Graphics template authored in After Effects without opening the full After Effects project.
Review | Frame.io panel | Adobe’s Frame.io review panel lives in current Premiere builds, so comments can come back onto the timeline.
Export | Export and Media Encoder | Queue encodes, including mezzanine and delivery presets, through Adobe Media Encoder.
Team | Productions | A production structure for large shows, so several editors can work without one giant project file.
Team | Team Projects | A hosted project for smaller collaborative edits, separate from Productions.
`),
    links: [
      { label: "Product", href: "https://www.adobe.com/products/premiere.html" },
      { label: "Help", href: "https://helpx.adobe.com/premiere-pro/desktop.html" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Adobe_Premiere_Pro" },
    ],
    alternatives: alts([
      ["Kdenlive", "https://kdenlive.org", "GPL-3.0", "A serious open timeline editor. Interchange with Premiere projects is limited."],
      ["Shotcut", "https://shotcut.org", "GPL-3.0", "A smaller open editor that is easier to pick up and less used on large commercial jobs."],
      ["Blender", "https://www.blender.org", "GPL-2.0", "The video sequence editor is usable. Blender is a 3D suite first."],
    ]),
  },
  {
    id: "canva",
    name: "Canva",
    vendor: "Canva",
    category: "Design and media",
    summary: "The template editor non-designers use to publish anyway.",
    reach: "Used by small businesses, social teams, teachers, and internal comms people who need a post, a slide, or a poster without hiring a design desk.",
    licenseKind: "proprietary",
    licenseName: "Canva terms",
    licenseNote: "Canva is a closed editor and template library. Brand kits and Magic Studio call Canva’s service. Exporting a PNG does not give you the editor.",
    gap: "Penpot and LibreOffice cover original layout. They do not include Canva’s template catalog, stock, or one-click resize for social sizes.",
    features: feats(`
Templates | Template library | Start from a post, story, presentation, poster, or resume instead of a blank page. The library is the product.
Brand | Brand kit | Logos, colors, and fonts locked for a team so a non-designer stays on brand.
Resize | Magic Resize | Turn one design into another aspect ratio. It is a cloud feature, not a local script you can keep.
Background | Background remover | Cut a subject out of a photo in the browser.
AI | Magic Studio | Writing, image, and layout assists under Canva’s AI brand. They run on Canva’s account, not as a local open model.
Collab | Real-time collaboration | Several people in one design, with comments.
Present | Present and record | Play a deck and record a talk track from the same file.
Schedule | Content planner | Schedule a social post from eligible plans. It is a lightweight social tool beside the editor.
Print | Print products | Order a physical print from a design. Fulfillment is part of Canva’s commerce.
Admin | Approvals and roles | On team plans, an admin can require approval before a design is used.
Apps | App marketplace | Install extra tools inside the editor, from stock photos to translations, without leaving the design.
Translate | Translate a design | Duplicate a design into another language from inside the editor, on supported plans.
`),
    links: [
      { label: "Product", href: "https://www.canva.com/" },
      { label: "Help", href: "https://www.canva.com/help/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Canva" },
    ],
    alternatives: alts([
      ["Penpot", "https://penpot.app", "MPL-2.0", "Open layout and prototyping. You bring your own templates."],
      ["LibreOffice", "https://www.libreoffice.org", "MPL-2.0", "Draw and Impress can make a poster or a deck. They are not a template social studio."],
    ]),
  },
  {
    id: "autocad",
    name: "AutoCAD",
    vendor: "Autodesk",
    category: "Engineering",
    summary: "The drafting program a large share of 2D technical drawings still originate in.",
    reach: "Architecture, engineering, and construction exchange DWG files. AutoCAD, or a vertical product built on it, is what many of those offices still license.",
    licenseKind: "proprietary",
    licenseName: "Autodesk subscription",
    licenseNote: "AutoCAD is closed. DWG is Autodesk’s format. Reading DWG in another tool is not the same as an open AutoCAD.",
    gap: "LibreCAD and FreeCAD cover a lot of 2D and some 3D. DWG fidelity, dynamic blocks, and the industry toolsets are the gap.",
    features: feats(`
Draw | Precision 2D drafting | Coordinates, object snaps, ortho, and polar tracking so a line lands on the geometry the drafter meant.
Files | DWG and DXF | DWG is the working file. DXF is the older interchange. TrustedDWG is Autodesk’s check that a file was written by a compatible product.
Blocks | Blocks and dynamic blocks | Reusable symbols, with dynamic blocks that stretch and flip without exploding into loose geometry.
Refs | External references | A drawing can reference another drawing, so a floor plan updates when the source file changes.
Sheets | Layouts, viewports, and plotting | Model in model space, compose sheets in paper space, and plot to PDF or a device with named page setups.
Annotate | Dimensions and annotation scales | Dimensions that follow geometry, and annotation that scales correctly across viewports.
3D | 3D solids | The full AutoCAD product includes solid modeling. Many offices still use it mainly for 2D.
API | AutoLISP and .NET | Automate drawings with AutoLISP, and with Autodesk’s .NET API. Huge office libraries exist only as Lisp.
Toolsets | Industry toolsets | Architecture, mechanical, electrical, and map toolsets ship with the AutoCAD subscription as extra commands and libraries.
Web | Web and mobile apps | View and make lighter edits in a browser or on a tablet. The full command set stays on the desktop.
Collab | Autodesk Docs markup | Share a drawing for markup through Autodesk’s cloud, which is the current home of that workflow.
Standards | CAD standards checking | Check a drawing against layers, styles, and other office standards before it is issued.
`),
    links: [
      { label: "Product", href: "https://www.autodesk.com/products/autocad/overview" },
      { label: "Help", href: "https://help.autodesk.com/view/ACD/2025/ENU/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/AutoCAD" },
    ],
    alternatives: alts([
      ["FreeCAD", "https://www.freecad.org", "LGPL-2.0", "Parametric modeling and a draft workbench. DWG support depends on external libraries and is not perfect."],
      ["LibreCAD", "https://librecad.org", "GPL-2.0", "A 2D CAD program aimed at DXF. It is not an AutoCAD command-compatible clone."],
    ]),
  },
  {
    id: "matlab",
    name: "MATLAB",
    vendor: "MathWorks",
    category: "Engineering",
    summary: "The numerical computing environment engineering schools and industry still standardize on.",
    reach: "Control systems, signal processing, and a lot of academic coursework are written in MATLAB. Toolboxes and Simulink are why labs stay.",
    licenseKind: "proprietary",
    licenseName: "MathWorks license",
    licenseNote: "MATLAB and Simulink are proprietary. Campus and commercial licenses are sold per user or per seat. The language is documented. The implementation and the toolboxes are not open.",
    gap: "Python with the scientific stack, Julia, and GNU Octave cover numerical work. Octave aims at MATLAB syntax. Simulink and most toolboxes do not have an open equivalent at the same depth.",
    features: feats(`
Language | Matrix language | Arrays are the default data structure. Linear algebra reads like the math, which is the reason the product won the classroom.
Desktop | Editor, debugger, and profiler | Run sections of a script, set breakpoints, and profile where time goes.
Plots | Publication plots | 2D and 3D plots with an export path to figures. The defaults are part of why papers still show MATLAB figures.
Live | Live scripts | A notebook-like document that mixes code, output, and formatted text, distinct from a plain .m file.
Apps | App Designer | Build a small GUI around a calculation without leaving the environment.
Toolboxes | Paid toolboxes | Signal processing, control systems, optimization, statistics, and deep learning are separate products on the same license server.
Simulink | Simulink | A graphical block diagram environment for simulation, sold beside MATLAB and widely required in controls and automotive work. It is its own closed product.
Codegen | Code generation products | Toolboxes that emit C or HDL from models. They are licensed separately and are a reason embedded teams stay.
Online | MATLAB Online | Run the same language in a browser under a MathWorks account.
Interop | MEX and external language calls | Call C, C++, Fortran, Python, or Java from MATLAB when the built-in functions are not enough.
Hardware | Hardware support packages | Target common boards and instruments. The packages are MathWorks-distributed.
Install | Add-on explorer | Install a toolbox or a community add-on through MathWorks’ explorer, tied to the license.
`),
    links: [
      { label: "Product", href: "https://www.mathworks.com/products/matlab.html" },
      { label: "Documentation", href: "https://www.mathworks.com/help/matlab/" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/MATLAB" },
    ],
    alternatives: alts([
      ["GNU Octave", "https://octave.org", "GPL-3.0", "A MATLAB-syntax numerical environment. Many scripts run. Most toolboxes and Simulink do not."],
      ["Python scientific stack", "https://www.python.org", "PSF and others", "NumPy, SciPy, and Jupyter are the open path most new work takes. It is not a drop-in for existing .m files."],
      ["Julia", "https://julialang.org", "MIT", "A numerical language designed in the open. The library and the classroom inertia are the gap."],
    ]),
  },
];
