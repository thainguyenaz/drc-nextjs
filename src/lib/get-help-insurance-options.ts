// Options for the Get Help form's "My insurance provider is" dropdown.
// `value` is what the form submits (to HubSpot, CTM, Dazos and the drip):
// never change a value without a reviewed HubSpot change. `label` is the
// visible text only.
export interface InsuranceOption {
  value: string;
  label: string;
}

export const GET_HELP_INSURANCE_OPTIONS: readonly InsuranceOption[] = [
  { value: "Private Insurance", label: "Private Insurance" },
  { value: "Commercial Insurance", label: "Commercial Insurance" },
  // AHCCCS members often carry cards branded by their health plan with no
  // "Medicaid" on them, so the label names the plans. The value stays
  // "Medicaid".
  { value: "Medicaid", label: "Medicaid / AHCCCS (Mercy Care, Banner University Family Care, Molina, etc.)" },
  { value: "Medicare", label: "Medicare" },
  { value: "Marketplace", label: "Marketplace" },
  { value: "Private Pay", label: "Private Pay" },
];
