import type { Tool } from "../types";
import { alts, feats } from "./define";

export const platformTools: Tool[] = [
  {
    id: "windows-11",
    name: "Windows 11",
    vendor: "Microsoft",
    category: "Operating systems",
    summary: "The desktop operating system that ships on most new PCs.",
    reach: "Preinstalled by PC makers worldwide and the default desktop for a large majority of computers that are not Macs. Office work, school labs, and most PC games assume it.",
    licenseKind: "proprietary",
    licenseName: "Microsoft Software License Terms",
    licenseNote: "The kernel, shell, and driver model you actually run are closed. You can buy a license to use Windows. You cannot fork it into another operating system.",
    gap: "Linux covers servers and a minority of desktops. Wine and Proton run some Windows software. Nothing open reimplements the Win32, DirectX, and driver estate at the same coverage.",
    features: feats(`
Desktop | Snap layouts | Drag a window to the top of the screen and pick a half, third, or grid. The shell remembers arrangements so a laptop and an external monitor can each keep a working layout.
Desktop | Virtual desktops | Keep a work desktop and a personal desktop, with their own windows, and switch without signing out.
Files | File Explorer | Browse local NTFS disks, network shares, and OneDrive placeholder files. Tabs, recent files, and the gallery view are part of the closed shell.
Security | Windows Hello | Sign in with a PIN, fingerprint, or face on supported hardware. The key material is tied to the device TPM rather than sent as a reusable password.
Security | BitLocker | Encrypt the system drive. Pro and Enterprise expose a recovery key that organizations store in Entra ID or Active Directory.
Security | Microsoft Defender | Antivirus, a firewall, and SmartScreen download checks ship in the box. Cloud reputation lookups and tamper protection are Microsoft services.
Apps | Microsoft Store | Install and update packaged apps through a closed store client and catalog. WinGet, a separate command-line installer, is open source. The Store people click is not.
Compatibility | Win32 and DirectX | Decades of desktop software and games run because of this closed compatibility surface. That installed base is the reason most PCs stay on Windows.
Gaming | Xbox app and Game Bar | Game Bar captures clips and shows performance. The Xbox app installs Game Pass titles. Both are proprietary clients sitting on the OS.
Accounts | Microsoft account backup | Settings, Wi-Fi passwords, and the desktop can back up to a Microsoft account. The product steers people toward that cloud account.
Enterprise | Group Policy and Intune | Domain-joined PCs take Group Policy. Entra-joined PCs take Intune profiles, update rings, and app deployment. Those management planes are closed.
Accessibility | Narrator, Voice Access, live captions | A screen reader, voice control of the desktop, and on-device captions for audio ship with the OS rather than as a separate open component.
`),
    links: [
      { label: "Product", href: "https://www.microsoft.com/windows/windows-11" },
      { label: "Documentation", href: "https://support.microsoft.com/windows" },
      { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Windows_11" },
    ],
    alternatives: alts([
      ["Linux kernel and desktop distributions", "https://kernel.org", "GPL-2.0", "The kernel is open, and desktops such as GNOME and KDE are open. Hardware support and Windows software coverage are the gap."],
      ["ReactOS", "https://reactos.org", "GPL-2.0", "An incomplete reimplementation of the Windows NT architecture. It is not a daily driver for the Windows software catalog."],
    ]),
  },
  {
    id: "macos",
    name: "macOS",
    vendor: "Apple",
    category: "Operating systems",
    summary: "The desktop operating system that runs only on Macs.",
    reach: "Every Mac ships with it. It is the default machine for a large share of design, video, and software teams, and the only desktop that runs Xcode and the current Final Cut and Logic apps.",
    licenseKind: "proprietary",
    licenseName: "Apple software license",
    licenseNote: "Darwin, the kernel and some low-level Unix pieces, is open source. Finder, AppKit, SwiftUI as shipped, and the Apple apps that make a Mac a Mac are not. You cannot legally build a competing Mac from the open Darwin tree.",
    gap: "Linux and the BSDs cover the Unix layer. They do not run Mac App Store apps, and they do not get Apple’s continuity features with an iPhone.",
    features: feats(`
Desktop | Finder, Stage Manager, and Mission Control | Browse files in Finder, tile windows with Stage Manager, and spread open windows across Spaces. The desktop shell is closed even where Darwin underneath is not.
Search | Spotlight | Search files, apps, calculations, and definitions from the keyboard. Indexing and the on-device results UI are part of macOS.
Continuity | Handoff, Universal Clipboard, AirDrop, Continuity Camera | Start an email on the phone and finish it on the Mac, copy across devices, send a file nearby, or use an iPhone as a webcam. These features require Apple’s closed stack on both ends.
Security | FileVault, Gatekeeper, and app permissions | Encrypt the disk, refuse unsigned apps unless you override Gatekeeper, and grant cameras, microphones, and folders per app. Notarization is Apple’s closed check on distributed Mac software.
Accounts | iCloud on the desktop | Desktop and Documents can sync, Keychain passwords can sync, and the Apple ID is the account the system keeps offering.
Apps | Mac App Store | A closed store for sandboxed Mac apps, with its own review and update path beside apps downloaded from the web.
Backup | Time Machine | Hourly local backups to an external disk or a server that speaks Apple’s backup protocol, with a browser for restoring single files.
Automation | Shortcuts | Chain actions across Apple apps with a visual editor. The gallery and the system hooks are part of macOS.
Graphics | Metal | Apple’s graphics and compute API. Mac games, video apps, and machine-learning frameworks on Apple silicon target it. It is not an open standard Apple donates as the system API.
Windows | Apple silicon virtualization and iPhone mirroring | Supported macOS releases run Linux VMs through Apple’s virtualization framework and can mirror an iPhone onto the desktop. Both are closed integrations.
Privacy | Per-app TCC prompts | Camera, microphone, screen recording, and Documents folder access are decided per app and revocable in System Settings.
Platform | Universal apps | One app binary can contain Intel and Apple silicon code. The developer tools that produce it are Apple’s.
`),
    links: [
      { label: "Product", href: "https://www.apple.com/macos/" },
      { label: "Documentation", href: "https://support.apple.com/guide/mac-help/welcome/mac" },
      { label: "Darwin source", href: "https://github.com/apple-oss-distributions/distribution-macOS" },
    ],
    alternatives: alts([
      ["Linux desktop distributions", "https://kernel.org", "GPL-2.0 and others", "A real daily desktop for many developers. It does not run the Mac App Store or Apple’s device continuity."],
      ["FreeBSD", "https://www.freebsd.org", "BSD", "Darwin has FreeBSD ancestry. The FreeBSD desktop is not a Mac replacement."],
    ]),
  },
  {
    id: "ios",
    name: "iOS",
    vendor: "Apple",
    category: "Operating systems",
    summary: "The operating system on iPhone, and the gate in front of its app store.",
    reach: "Every iPhone runs it. In many countries the iPhone is half or more of the phone market, and a large share of mobile revenue still settles through Apple’s store.",
    licenseKind: "proprietary",
    licenseName: "Apple software license",
    licenseNote: "iOS is closed. In a few regulated regions, notably the European Union, alternative app marketplaces exist because of a law, not because Apple relicensed the system. Everywhere else, mainstream distribution is the App Store.",
    gap: "There is no open phone operating system with iOS’s app library or device support. GrapheneOS and other AOSP systems are alternatives to Google Android, not to the iPhone.",
    features: feats(`
Home | Home screen, App Library, and widgets | Icons, a search-driven App Library, and widgets on the home and lock screens. The launcher is not replaceable the way an Android launcher is.
Store | App Store distribution | Apps are reviewed, signed, and updated through Apple’s store. In the EU, alternative marketplaces are a regulated exception with Apple’s technical rules still around them.
Security | App sandbox and entitlements | Each app is jailed to its container. Capabilities such as push, health data, and in-app purchase are entitlements Apple grants.
Unlock | Face ID and Touch ID | On-device biometric unlock and payment confirmation. Templates stay in the Secure Enclave rather than in an app-readable file.
Backup | iCloud Backup | A restorable image of the phone, tied to an Apple ID, including app data for apps that opt in.
Privacy | Tracking permission and privacy report | Apps must ask before tracking across other companies’ apps, and Settings can show which sensors an app used recently.
Payments | Apple Pay and in-app purchase | Wallet payments in shops, and digital goods that Apple requires to use its purchase API, with Apple’s commission, outside the narrow regulatory carve-outs.
Continuity | Handoff, AirDrop, and Continuity Camera | The phone participates in the same closed continuity fabric as the Mac.
Automation | Shortcuts and Focus | Personal automations, and Focus modes that silence people and apps on a schedule shared with the rest of an Apple account.
Health | HealthKit platform | Apps can read and write health samples only through Apple’s API and permission prompts. The database format is not an open export you control end to end.
Safety | Screen Time and communication safety | App limits, downtime, and parental controls, plus on-device checks in Messages for some regions and ages.
Find | Find My | Locate, lock, and wipe a device, and participate in Apple’s crowdsourced finding network. That network is not an open protocol a competing phone can join on equal terms.
`),
    links: [
      { label: "Product", href: "https://www.apple.com/os/ios/" },
      { label: "iPhone user guide", href: "https://support.apple.com/guide/iphone/welcome/ios" },
      { label: "App Store review", href: "https://developer.apple.com/app-store/review/guidelines/" },
    ],
    alternatives: alts([
      ["GrapheneOS", "https://grapheneos.org", "Various open licenses on AOSP", "A hardened Android for Pixel phones. It is not an iPhone OS and it does not run iOS apps."],
      ["PostmarketOS", "https://postmarketos.org", "GPL", "A Linux distribution for some phones. Hardware support and the app ecosystem are a different universe from iOS."],
    ]),
  },
  {
    id: "android-gms",
    name: "Android with Google Play",
    vendor: "Google",
    category: "Operating systems",
    summary: "The phone stack most Android buyers actually get, which is not the open-source project alone.",
    reach: "Android is the majority phone operating system worldwide. Phones sold outside a few markets ship Google Play, Play Services, and a set of Google apps on top of the open Android Open Source Project.",
    licenseKind: "proprietary",
    licenseName: "Google Play and Play Services terms, on top of AOSP",
    licenseNote: "AOSP is Apache-2.0. The Google apps, the Play Store, and Play Services are proprietary. Many apps refuse to run without Play Services, so the open base is not the product people have.",
    gap: "AOSP forks such as GrapheneOS and /e/OS remove or replace Play Services. App compatibility is the gap, because popular apps call proprietary Google APIs for maps, push, and sign-in.",
    features: feats(`
Store | Google Play Store | The catalog, payments, updates, and app-bundle delivery most Android users install from. The client and the catalog are closed.
Services | Google Play Services | A privileged closed package that apps call for maps, location, sign-in, and push. It is updated by Google, not by the open-source system image.
Push | Firebase Cloud Messaging | The push channel a large share of Android apps depend on. Replacing it means the app vendor has to support another channel.
Identity | Google Sign-In and backup | Phone backup and many app logins go through the Google account on the device.
Integrity | Play Integrity | Apps and games ask Google whether a device looks certified and unmodified. That check fails closed forks on purpose.
Safety | Play Protect | Scanning of apps installed on the device, using Google’s service, not only a local signature check.
Location | Network location | A proprietary database that turns nearby radio signals into a fast location fix. The open OS has location APIs. This database is Google’s.
Pay | Google Wallet and Play Billing | Tap-to-pay on supported phones, and the billing API Google requires for many digital purchases in Play apps.
Nearby | Quick Share | AirDrop-style sharing between supported Android devices, implemented as a Google feature rather than an open standard the AOSP tree defines.
Certification | GMS certification | Manufacturers pass Google’s compatibility tests to preload Play. The certification agreement is how the proprietary layer becomes the default Android.
DRM | Widevine | A closed DRM component required by major streaming apps. It is not part of the open-source system in a form those services accept.
Assistant | Google app and Assistant hooks | Search, the assistant, and feed integrations preloaded on certified phones.
`),
    links: [
      { label: "Android", href: "https://www.android.com/" },
      { label: "Android Open Source Project", href: "https://source.android.com/" },
      { label: "Play services overview", href: "https://developers.google.com/android/guides/overview" },
    ],
    alternatives: alts([
      ["AOSP", "https://source.android.com/", "Apache-2.0", "The open base. It does not include the Play Store or Play Services."],
      ["GrapheneOS", "https://grapheneos.org", "Various", "A security-focused OS for Pixel phones that can run some Play-dependent apps in a sandbox, with friction."],
      ["/e/OS", "https://e.foundation/e-os/", "Various", "An AOSP derivative aimed at reducing Google account dependence. App compatibility is incomplete."],
    ]),
  },
  {
    id: "chrome",
    name: "Google Chrome",
    vendor: "Google",
    category: "Browsers",
    summary: "The browser most people mean when they say the web, which is Chromium plus a closed Google layer.",
    reach: "Chrome is the majority desktop and Android browser. A large share of web development treats its behavior as the default.",
    licenseKind: "proprietary",
    licenseName: "Google Chrome Terms of Service, on a BSD-style Chromium base",
    licenseNote: "The Chromium project is open source. The Chrome people download adds a closed license, Google account sync, Widevine DRM, a proprietary codec bundle in official builds, and the Chrome Web Store. The trademark is Google’s.",
    gap: "Ungoogled-chromium and other Chromium builds remove the Google services. Firefox is the main independent engine. Sites that require Widevine still push people back to an official browser.",
    features: feats(`
Sync | Google account sync | Bookmarks, passwords, history, and open tabs sync through a Google account. That sync client is part of Chrome, not part of the open Chromium tree you can ship under another name.
Safety | Safe Browsing | Google’s reputation service warns on sites and downloads. Chromium can call it. The lists and the service are Google’s.
DRM | Widevine | Encrypted playback for major video services. It is a closed CDM. Chromium builds without it fail those sites.
Codecs | Proprietary media in official builds | Official Chrome includes media codecs the bare open tree does not ship, which is why some video plays in Chrome and not in a minimal Chromium build.
Store | Chrome Web Store | Extensions are distributed through Google’s store, with review and a proprietary catalog. Sideloading is restricted on official builds.
Passwords | Google Password Manager | Save, fill, and share passwords, with breach warnings tied to the Google account.
Autofill | Addresses and payments | Checkout autofill synced with the Google account, including cards the user has stored.
Profiles | Multiple signed-in profiles | Separate people or work and personal browsing, each with its own sync account.
Translation | Full-page translate | A Google Translate call from the address bar. The model is not a local open package in official Chrome.
Cast | Cast to a TV | Send a tab to a Chromecast or Cast-enabled TV. The discovery and protocol support in the official client is a Google feature.
Performance | Memory and energy savers | Tab discarding and battery modes shipped in Chrome’s product UI.
Privacy | Privacy Guide | A first-run and settings flow for cookies, sync, and Safe Browsing choices, written as a Chrome product surface.
`),
    links: [
      { label: "Product", href: "https://www.google.com/chrome/" },
      { label: "Help", href: "https://support.google.com/chrome/" },
      { label: "Chromium", href: "https://www.chromium.org/Home/" },
    ],
    alternatives: alts([
      ["Firefox", "https://www.firefox.com/", "MPL-2.0", "An independent browser engine. The main open alternative that is not a Chromium skin."],
      ["Chromium", "https://www.chromium.org/Home/", "BSD-3-Clause", "The open project Chrome is built from. It does not include the Chrome Web Store or Widevine by default."],
    ]),
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    vendor: "Microsoft",
    category: "Developer tools",
    summary: "The editor most developers install, which is not the same thing as the open-source repository.",
    reach: "The default editor in surveys of working programmers. Tutorials, extensions, and AI tools assume the Microsoft build.",
    licenseKind: "proprietary",
    licenseName: "Microsoft software license for the product build; MIT for the Code - OSS repository",
    licenseNote: "The github.com/microsoft/vscode repository is MIT. The build from Microsoft’s site adds telemetry, a proprietary license, and a marketplace whose terms forks cannot use as-is. VSCodium is the project that ships the MIT tree without that layer.",
    gap: "VSCodium is the practical open build. Extension compatibility is the gap, because some extensions and the official marketplace are licensed only for Microsoft’s VS Code.",
    features: feats(`
Edit | Editor, debugger, and integrated terminal | Multi-cursor editing, breakpoints, and a terminal in the same window. Much of this surface is in the MIT tree. The product people download is still Microsoft’s build.
Extensions | Extension marketplace | Themes, language servers, and tools install from Microsoft’s marketplace. That catalog and its terms are not an open registry a fork is allowed to reuse.
Remote | Remote SSH, containers, and tunnels | Edit code on a server, in a container, or through a tunnel. Several of these remote pieces ship as Microsoft extensions rather than as MIT source in the core tree.
AI | Copilot integration | The editor is the main host for GitHub Copilot. Copilot itself is a separate proprietary subscription.
Accounts | Settings Sync | Settings, keybindings, and extensions sync through a Microsoft or GitHub account.
Search | Workspace search and symbol navigation | Ripgrep-powered search and language-server symbols. The experience in the Microsoft build is the one documentation screenshots show.
Tasks | Tasks and launch configs | tasks.json and launch.json run builds and debuggers from the editor.
SCM | Git UI | Stage, commit, diff, and resolve conflicts without leaving the window. Git itself is open. This UI ships inside the editor product.
Profiles | Profiles | Separate extension and setting sets for different kinds of work.
Testing | Test explorer | A common UI over language test adapters.
Ports | Port forwarding | Forward a port from a remote machine or dev container to the local browser.
Telemetry | Microsoft telemetry and the license | The official build reports telemetry under Microsoft’s privacy terms. That, plus the marketplace terms, is the practical difference from Code - OSS.
`),
    links: [
      { label: "Product", href: "https://code.visualstudio.com/" },
      { label: "Docs", href: "https://code.visualstudio.com/docs" },
      { label: "Code - OSS repository", href: "https://github.com/microsoft/vscode" },
    ],
    alternatives: alts([
      ["VSCodium", "https://vscodium.com/", "MIT", "A build of the MIT repository without Microsoft’s telemetry or marketplace branding. Some proprietary extensions will not install."],
      ["Code - OSS", "https://github.com/microsoft/vscode", "MIT", "The source Microsoft develops in the open. Building it yourself does not grant the Visual Studio Code marketplace."],
    ]),
  },
];
