export const shieldingSpecification = {
  id: "S.02",
  title: "EMI/RFI Shielding Interlayer Assemblies",
  status: "Draft for review — testing and results TBD",
  overview:
    "HLG engineers and assembles fine copper mesh and printed-copper conductive interlayers, supplied ready to laminate to a customer-defined specification.",
  scif:
    "HLG supports SCIF (Sensitive Compartmented Information Facility) and secure-facility glazing projects with shielding interlayer assemblies engineered to the project's electromagnetic, optical, and integration requirements. Material selection, perimeter grounding, and qualification testing are coordinated against the specified shielding envelope and installation.",
  fields: [
    { label: "Supply format", value: "Engineered and assembled interlayer, ready to laminate" },
    { label: "Conductor options", value: "Fine copper mesh or printed-copper conductive film" },
    { label: "Mesh option", value: "80 openings per inch (OPI); final construction defined per project" },
    { label: "Film grade", value: "TBD following supplier and application review" },
    { label: "Perimeter interface", value: "Grounding and termination layout defined for the assembly and frame" },
    { label: "Shielding test", value: "Method, frequency range, and acceptance criteria TBD" },
    { label: "Shielding results", value: "TBD — no measured attenuation reported in this draft" },
    { label: "Optical evaluation", value: "Transmission, haze, conductor visibility, and moiré: testing/results TBD" },
    { label: "Lamination evaluation", value: "Stack-up and processing compatibility: testing/results TBD" },
  ],
  engineering:
    "Conductor selection balances the required shielding performance with optical transmission, visibility, and moiré behavior. HLG defines the assembly geometry, conductor integration, perimeter termination, and grounding interface against the agreed specification.",
  qualification:
    "Qualification is established by testing the representative laminate and its grounding/frame interface against project acceptance criteria. This draft defines the proposed supply and evaluation scope; it does not report completed testing or SCIF certification.",
  inputs:
    "Provide the frequency range and attenuation target, test method, aperture and laminate construction, optical requirements, grounding/frame details, environment, and quantity. The companion film assembly sheet will identify the selected grade and distinguish supplier material data from HLG assembly test results.",
};