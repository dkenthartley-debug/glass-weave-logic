import whitePaperAtpd2352 from "@/assets/documents/atpd-2352-rev-u-sensor-white-paper.pdf.asset.json";

export type ResourceItem = {
  title: string;
  kind: "Design Guide" | "White Paper" | "Application Note";
  summary: string;
  topic: string;
  href?: string;
};


export const resources: ResourceItem[] = [
  { title: "Designing Heated Laminated Glass", kind: "Design Guide", topic: "Heated Glass", summary: "End-to-end approach: clearing requirement, power density target, conductor selection, uniformity, and validation." },
  { title: "Choosing Wire Diameter", kind: "Design Guide", topic: "Embedded Wire", summary: "How diameter trades against resistance, power density, and perceived visibility at the intended viewing distance." },
  { title: "Wire Spacing and Pitch Guide", kind: "Design Guide", topic: "Embedded Wire", summary: "Pitch selection for temperature uniformity, total circuit resistance, and optical acceptability." },
  { title: "Voltage Selection for Electrically Active Glazing", kind: "Design Guide", topic: "Power", summary: "Why supply voltage is the first decision in a heated glass program and how it constrains the conductor design." },
  { title: "Current Density and Thermal Limits", kind: "Design Guide", topic: "Heated Glass", summary: "Working within interlayer, seal, and frame temperature limits while achieving the required clearing performance." },
  { title: "Bus Bar Design Guide", kind: "Design Guide", topic: "Bus Bars", summary: "Cross-section sizing, joint quality, concealment, lead exit, and the failure modes that start at the termination." },
  { title: "Optical Performance of Conductive Interlayers", kind: "Design Guide", topic: "Optics", summary: "Transmission, haze, diffraction, and conductor visibility considerations across wire, mesh, and film." },
  { title: "Defrost and De-Ice Performance", kind: "Design Guide", topic: "Heated Glass", summary: "Relating ambient conditions, airflow, and power density to realistic clearing time expectations." },

  { title: "Embedded Wire vs ITO", kind: "White Paper", topic: "Conductor Selection", summary: "Resistance, power density, optical signature, and process implications compared for the same aperture." },
  { title: "Embedded Wire vs Silver Nanowire Films", kind: "White Paper", topic: "Conductor Selection", summary: "Where emerging transparent conductors fit relative to established wire and TCO approaches." },
  { title: "Conductive Interlayer Design", kind: "White Paper", topic: "Interlayers", summary: "The interlayer as an engineering platform: conductor formats, isolation, termination, and lamination compatibility." },
  { title: "Power Distribution in Laminated Glass", kind: "White Paper", topic: "Power", summary: "Supply, harness, protection, and grounding considerations for electrically active transparencies." },
  { title: "Heated Glass Reliability", kind: "White Paper", topic: "Reliability", summary: "Common failure modes, why most originate at terminations, and design practices that reduce them." },
  { title: "Functional Laminated Glass", kind: "White Paper", topic: "Multi-Function", summary: "Combining heating, sensing, shielding, and antenna functions in one transparency without unintended interaction." },
  { title: "Ensuring ATPD-2352 Revision U Durability Gains Are Preserved in Operational Service", kind: "White Paper", topic: "Heated Transparent Armor", summary: "Why embedded laminate temperature sensing is the practical next step for heated transparent armor windshields after ATPD-2352 Rev U qualification.", href: whitePaperAtpd2352.url },


  { title: "Aircraft Transparency Heating", kind: "Application Note", topic: "Aerospace", summary: "Heater and sensor mat coordination for thick, curved, multi-ply aerospace builds." },
  { title: "Military Vehicle Glazing", kind: "Application Note", topic: "Defense", summary: "Combining heating and shielding in a single vehicle window, with grounding and isolation notes." },
  { title: "Marine Bridge Windows", kind: "Application Note", topic: "Marine", summary: "Termination sealing and corrosion considerations for heated glazing in marine service." },
  { title: "Automotive Camera and Sensor Zones", kind: "Application Note", topic: "Automotive", summary: "Local heating zones behind camera apertures, exclusion areas, and ADAS field-of-view considerations." },
  { title: "Medical and Laboratory Viewing Windows", kind: "Application Note", topic: "Medical", summary: "Anti-fog and controlled-temperature viewing windows for enclosed equipment." },
  { title: "Architectural EMI Glazing", kind: "Application Note", topic: "Architectural", summary: "Mesh selection, transmission trade-offs, and frame bonding for shielded building apertures." },
  { title: "SCIF and Secure Facility Windows", kind: "Application Note", topic: "Security", summary: "How the glass insert fits into the broader shielded envelope and who owns which part of performance." },
  { title: "Industrial Equipment Glazing", kind: "Application Note", topic: "Industrial", summary: "Heated viewing windows for cold-chain, process, and outdoor equipment environments." },
];

export type LibraryFaq = { q: string; a: string; topic: string };

export const faqLibrary: LibraryFaq[] = [
  { topic: "Heated Glass", q: "How hot can embedded wire glass operate?", a: "The limit comes from the interlayer, edge seal, and frame rather than the wire. Standard PVB builds target modest surface temperature rise; higher-temperature builds use alternative interlayers. Targets are agreed per application and validated on samples." },
  { topic: "Heated Glass", q: "How is the resistance of a heated glass circuit calculated?", a: "From conductor resistivity, wire cross section, run length between bus bars, and the number of parallel runs. Power then follows from P = V squared / R at the supply voltage." },
  { topic: "Heated Glass", q: "How long does heated glass take to clear ice?", a: "Clearing time depends on power density, ambient temperature, wind, ice thickness, and glass build. It is established by test on representative samples rather than predicted from the circuit alone." },
  { topic: "Heated Glass", q: "Can only part of the glass be heated?", a: "Yes. Zoned heating for camera windows, wiper park areas, or the primary vision area is common and reduces total power draw." },
  { topic: "Heated Glass", q: "Why is my heated glass uneven?", a: "Usually unequal conductor run lengths, an undersized bus bar, or poor bus bar joints. Conductor runs should be perpendicular to the bus bars so path lengths are comparable." },
  { topic: "Embedded Wire", q: "What wire materials are available?", a: "Tungsten and copper are the most common, with plated and clad variants selected for solderability, corrosion behavior, or interlayer adhesion." },
  { topic: "Embedded Wire", q: "What wire diameters are typical?", a: "Fine conductors in roughly the 20 to 50 micrometre range are typical, chosen against the power target and the acceptable visual signature." },
  { topic: "Embedded Wire", q: "Is embedded wire visible?", a: "It is detectable on close inspection but generally unobtrusive at normal viewing distance. Perceived visibility depends on diameter, pitch, lighting, and background." },
  { topic: "Embedded Wire", q: "Can embedded wire be used on curved glass?", a: "Yes. Because the conductor lives in the interlayer, wire suits curved and complex transparencies well." },
  { topic: "Conductive Interlayers", q: "What is an electrically conductive interlayer?", a: "A laminated glass interlayer carrying an integrated conductor — wire, mesh, transparent conductive film, or printed pattern — so the laminate can heat, sense, shield, or radiate." },
  { topic: "Conductive Interlayers", q: "Does a conductive interlayer change our lamination process?", a: "In most cases it is placed into the existing stack-up and laminated on your qualified cycle. Minor cycle adjustments are worked through during sample iteration." },
  { topic: "Conductive Interlayers", q: "Can conductive films be combined with wire?", a: "Yes. Film provides uniform area conduction while wire provides low-resistance paths or high-power local zones." },
  { topic: "Sensors", q: "Can sensors be embedded in laminated glass?", a: "Yes. Resistance-based serpentine elements with terminal pads and lead wires can be laminated within the stack, typically for overheat protection or control feedback." },
  { topic: "Sensors", q: "Where should an embedded sensor be located?", a: "At the point expected to reach the highest temperature within the controlled zone, rather than at a convenient edge." },
  { topic: "Antennas", q: "Can antennas be embedded in glass?", a: "Yes. Conductor patterns can form antenna elements within the laminate. Interaction with heating grids and shielding layers must be evaluated, since both affect antenna behavior." },
  { topic: "Shielding", q: "What attenuation can shielded glass achieve?", a: "Attenuation is a property of the installed system — mesh, frame, gasket, bonding, and enclosure. HLG focuses on the glass insert and does not quote a glass-only figure." },
  { topic: "Shielding", q: "Does shielding mesh reduce visibility?", a: "Yes, to a degree. Finer, denser meshes attenuate more but reduce transmission and are more visible, so selection is a deliberate trade-off." },
  { topic: "Bus Bars", q: "Why does the edge of my heated glass run hot?", a: "Typically an undersized bus bar, a poor joint to the conductors, or unequal current sharing. Bus bar cross section and termination quality are the first things to review." },
  { topic: "Bus Bars", q: "Where do the lead wires exit?", a: "The exit point is chosen with the frame, gasket, and harness in mind, and is fixed early because it affects edge seal design and handling." },
  { topic: "Power", q: "What voltage should we use?", a: "The circuit is engineered to your available supply. Higher voltage allows finer conductors and lighter bus bars for the same power; low-voltage systems need lower resistance and heavier terminations." },
  { topic: "Power", q: "Can heated glass be PWM controlled?", a: "Yes, and it is a common way to regulate average power. Control should be defined alongside the heating circuit so peak and average conditions both stay within limits." },
  { topic: "Process", q: "What information do you need to start?", a: "Aperture size and shape, glass build, supply voltage and available current, intended function and power target, optical requirements, operating environment, and the frame or harness interface." },
  { topic: "Process", q: "Do you supply finished glass?", a: "No. HLG supplies interlayer-format subassemblies — heater mats, sensor mats, conductive interlayers, and shielding inserts — to glass fabricators, transparency manufacturers, and integrators." },
  { topic: "Process", q: "What certifications are available?", a: "HLG products are development and supply items. Qualification and certification are held at the transparency, vehicle, or facility program level; HLG supports the development and data gathering that feed those activities." },
  { topic: "Process", q: "Can you support prototype volumes?", a: "Yes. Prototype and low-volume development is a normal part of HLG's engagement model, and the interlayer format makes layout iteration inexpensive relative to coated-glass tooling." },
];

export const faqTopics = Array.from(new Set(faqLibrary.map((f) => f.topic)));

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aircraft-windshield-heater-mat",
    title: "Aircraft Windshield Heater and Sensor Mat Development",
    sector: "Aerospace",
    challenge: "A transparency manufacturer needed a heater element and coordinated overheat sensing for a curved, multi-ply cockpit windshield with a constrained lead exit.",
    approach: "HLG laid out the heater mat and serpentine sensor element together against the transparency outline, positioning the sensor at the thermally critical point of the heated zone, and fixed the lead exit to the frame interface early.",
    outcome: "Coordinated heater and sensor subassemblies were supplied for the customer's lamination and evaluation, with layout iterations driven by their measured results.",
  },
  {
    slug: "military-vehicle-heated-shielded-window",
    title: "Combined Heated and Shielded Vehicle Window",
    sector: "Defense",
    challenge: "A vehicle glazing program required both defog heating and electromagnetic attenuation in a single laminate without the two functions interfering.",
    approach: "The build was designed as a system: the shielding mesh and heating circuit were electrically isolated, separately terminated, and the grounding path to the frame was defined with the integrator.",
    outcome: "A multi-function subassembly was developed and iterated against the customer's lamination and installation constraints.",
  },
  {
    slug: "transit-windshield-zoned-heating",
    title: "Transit Windshield Zoned Heating",
    sector: "Transportation",
    challenge: "A bus windshield needed reliable defrost performance, but the vehicle's available current could not support full-aperture heating.",
    approach: "Heating was zoned to prioritise the driver vision area and wiper park, with voltage and bus bar sizing selected to keep draw inside the vehicle supply limit.",
    outcome: "A zoned interlayer layout was delivered that met the clearing priority within the available electrical budget.",
  },
  {
    slug: "rail-cab-de-icing",
    title: "Rail Cab Windshield De-Icing",
    sector: "Rail",
    challenge: "A large rail cab aperture produced long conductor runs, high circuit resistance, and unacceptable voltage drop along the bus bars.",
    approach: "Supply voltage was revisited with the customer and bus bar cross section increased, allowing wider pitch at the required power density.",
    outcome: "The revised layout improved uniformity across the aperture and brought the current draw within the vehicle's distribution capability.",
  },
  {
    slug: "marine-bridge-window",
    title: "Marine Bridge Window Termination Redesign",
    sector: "Marine",
    challenge: "Field returns pointed to termination degradation in a corrosive marine environment rather than to the heating circuit itself.",
    approach: "Bus bar material, joint method, edge seal detail, and lead strain relief were reworked as a package with the window fabricator.",
    outcome: "A revised termination approach was developed and supplied for the fabricator's requalification of the window build.",
  },
  {
    slug: "camera-zone-prototype",
    title: "ADAS Camera Zone Prototype",
    sector: "Automotive",
    challenge: "A camera aperture cleared too slowly and the initial conductor pattern intruded into the sensor field of view.",
    approach: "A dedicated high-density wire patch was placed behind the frit border with a defined exclusion zone through the sensing path, driven independently from the main circuit.",
    outcome: "Prototype interlayers were delivered for evaluation, with pattern orientation agreed alongside the sensor supplier.",
  },
  {
    slug: "scif-window-insert",
    title: "SCIF Window Insert Development",
    sector: "Security",
    challenge: "A secure facility contractor needed a shielded window insert consistent with the shielding approach used in the surrounding wall system.",
    approach: "HLG developed the laminated mesh insert and coordinated perimeter termination and frame bonding details with the contractor.",
    outcome: "Insert subassemblies were supplied for the contractor's installation and system-level verification.",
  },
];

export type Download = {
  title: string;
  kind: string;
  audience: string;
};

export const downloads: Download[] = [
  { title: "Conductive Interlayer Product Overview", kind: "Brochure", audience: "General" },
  { title: "Embedded Wire Technology Datasheet", kind: "Datasheet", audience: "Engineering" },
  { title: "Heater Mat Datasheet", kind: "Datasheet", audience: "Aerospace" },
  { title: "Embedded Sensor Element Datasheet", kind: "Datasheet", audience: "Aerospace" },
  { title: "EMI Shielding Insert Datasheet", kind: "Datasheet", audience: "Defense / Security" },
  { title: "Designing Heated Laminated Glass", kind: "Design Guide", audience: "Engineering" },
  { title: "Bus Bar Design Guide", kind: "Design Guide", audience: "Engineering" },
  { title: "Voltage Selection Guide", kind: "Design Guide", audience: "Engineering" },
  { title: "Embedded Wire vs ITO", kind: "White Paper", audience: "Engineering" },
  { title: "Ensuring ATPD-2352 Revision U Durability Gains Are Preserved in Operational Service", kind: "White Paper", audience: "Defense / Engineering" },
  { title: "Lead Exit and Termination Details", kind: "Drawing Set", audience: "Engineering" },
  { title: "Interlayer Subassembly Handling Guide", kind: "Installation Guide", audience: "Fabrication" },
  { title: "Electrical Verification Checklist", kind: "Testing Information", audience: "Fabrication" },

];
