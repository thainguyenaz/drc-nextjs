import { describe, it, expect } from "vitest";
import { GET_HELP_INSURANCE_OPTIONS } from "./get-help-insurance-options";
import { classifyPayer } from "./drip-intake";

describe("Get Help insurance dropdown", () => {
  it("submits exactly today's values, in today's order", () => {
    expect(GET_HELP_INSURANCE_OPTIONS.map((o) => o.value)).toEqual([
      "Private Insurance",
      "Commercial Insurance",
      "Medicaid",
      "Medicare",
      "Marketplace",
      "Private Pay",
    ]);
  });

  it("labels the Medicaid option with AHCCCS and its plan brands; value stays Medicaid", () => {
    const medicaid = GET_HELP_INSURANCE_OPTIONS.find((o) => o.value === "Medicaid");
    expect(medicaid).toEqual({
      value: "Medicaid",
      label: "Medicaid / AHCCCS (Mercy Care, Banner University Family Care, Molina, etc.)",
    });
  });

  it("every other label equals its value", () => {
    for (const o of GET_HELP_INSURANCE_OPTIONS) if (o.value !== "Medicaid") expect(o.label).toBe(o.value);
  });

  it("the drip still classifies the submitted Medicaid value as wrong-fit", () => {
    expect(classifyPayer("Medicaid")).toBe("medicaid");
    expect(classifyPayer("Medicare")).toBe("medicare");
  });
});
