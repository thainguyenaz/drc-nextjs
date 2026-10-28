import { describe, it, expect } from "vitest";
import { classifyPayer } from "./drip-intake";

// Mirrors drc-lead-drip WRONG_FIT_PAYERS: these payers get the wrong-fit
// resources sequence, never the nurture.
const WRONG_FIT = ["medicaid", "medicare", "ahcccs"];
const wrongFit = (text: string) => WRONG_FIT.includes(classifyPayer(text));

describe("classifyPayer: Arizona AHCCCS Complete Care plans are wrong-fit", () => {
  it.each([
    "Mercy Care",
    "MERCY CARE PLAN",
    "mercycare",
    "Banner University Family Care",
    "Banner-University Family Care",
    "University Family Care",
    "UAHP",
    "Arizona Complete Health",
    "Arizona Complete Health - Complete Care Plan",
    "complete care plan",
    "Care1st",
    "Care 1st Health Plan",
    "Health Choice Arizona",
    "BCBSAZ Health Choice",
    "health choice",
    "Molina",
    "Molina Healthcare",
    "UnitedHealthcare Community Plan",
    "United Healthcare Community Plan",
    "UHC Community Plan",
    "Arizona Physicians IPA",
    "APIPA",
  ])("%s -> ahcccs (wrong-fit)", (text) => {
    expect(classifyPayer(text)).toBe("ahcccs");
    expect(wrongFit(text)).toBe(true);
  });

  it("keeps the literal medicaid, medicare and ahcccs matches", () => {
    expect(classifyPayer("Medicaid")).toBe("medicaid");
    expect(classifyPayer("AHCCCS")).toBe("ahcccs");
    expect(classifyPayer("Medicare")).toBe("medicare");
  });

  it.each([
    "Aetna PPO",
    "Cigna",
    "UHC",
    "UHC Choice Plus",
    "UnitedHealthcare",
    "United Healthcare PPO",
    "BCBS",
    "Blue Cross Blue Shield of Arizona",
    "BCBSAZ",
    "Banner Aetna",
  ])("%s -> commercial (not wrong-fit)", (text) => {
    expect(classifyPayer(text)).toBe("commercial");
    expect(wrongFit(text)).toBe(false);
  });

  it('bare "banner" stays unknown (default unchanged)', () => {
    expect(classifyPayer("Banner")).toBe("unknown");
    expect(classifyPayer("")).toBe("unknown");
    expect(classifyPayer(null)).toBe("unknown");
  });
});
