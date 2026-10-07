export type LicenseKind = "proprietary" | "source-available";

export type Feature = {
  area: string;
  name: string;
  description: string;
};

export type OutLink = {
  label: string;
  href: string;
};

export type Alternative = {
  name: string;
  href: string;
  license: string;
  note: string;
};

export type Tool = {
  id: string;
  name: string;
  vendor: string;
  category: string;
  summary: string;
  /** Company-reported users, or "Not disclosed". */
  users?: string;
  /** Company-reported revenue, with the period named, or "Not disclosed". */
  revenue?: string;
  /** Where the scale figures come from, or why they are withheld. */
  scaleNote?: string;
  reach: string;
  licenseKind: LicenseKind;
  licenseName: string;
  licenseNote: string;
  gap: string;
  features: Feature[];
  links: OutLink[];
  alternatives: Alternative[];
};

export type Tab = "overview" | "features" | "links" | "alternatives";
