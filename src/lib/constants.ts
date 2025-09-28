export interface Option {
  value: string;
  label: string;
}

export const projectTypes: Option[] = [
  { value: "structural", label: "Structural Design" },
  { value: "commercial", label: "Commercial Building" },
  { value: "residential", label: "Residential Project" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

export const projectTimelines: Option[] = [
  { value: "immediate", label: "Immediate (Within 1 month)" },
  { value: "short", label: "Short-term (1-3 months)" },
  { value: "medium", label: "Medium-term (3-6 months)" },
  { value: "long", label: "Long-term (6+ months)" },
];

export const projectBudgetRanges: Option[] = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
];
