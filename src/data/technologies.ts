export type Faq = { q: string; a: string };

export type Technology = {
  slug: string;
  name: string;
  h1: string;
  summary: string;
  definition: string;
  advantages: string[];
  design: { t: string; d: string }[];
  materials: { t: string; d: string }[];
  process: { t: string; d: string }[];
  performance: { label: string; value: string; note: string }[];
  applications: string[];
  faqs: Faq[];
  downloads: { title: string; kind: string }[];
  related: string[];
};

export const technologies: Technology[] = [
  {
    slug: "embedded-wire-technology",
    name: "Embedded Wire Technology",
    h1: "Embedded Wire Technology for Laminated Glass",
    summary:
      "Fine conductor wire positioned within a polymer interlayer to create a durable, low-resistance electrical layer inside laminated glass.",
    definition:
      "Embedded wire technology places fine metallic conductors — typically tungsten, copper, or plated alloy wire — into a polymer interlayer such as PVB, EVA, or TPU before lamination. Once the assembly is autoclaved, the wire is fully encapsulated between glass plies and behaves as a permanent electrical circuit inside the transparency. The approach is used where a laminate must heat, sense, shield, or radiate while remaining optically usable.",
    advantages: [
      "Low sheet resistance without relying on a transparent conductive coating, so higher power density is achievable at practical supply voltages.",
      "Wire geometry is defined per part, allowing zoned heating, local camera or sensor patches, and non-rectangular apertures.",
      "Conductors are encapsulated inside the laminate, which protects them from abrasion, handling, and environmental exposure.",
      "Compatible with curved and complex transparencies where coated glass can be difficult to process.",
      "Repairable at the design stage — pitch, diameter, and bus bar layout can be re-tuned between prototype iterations without new coating tooling.",
    ],
    design: [
      { t: "Wire diameter", d: "Smaller diameters reduce visibility but raise resistance per unit length. Diameter is selected against the target power, voltage, and acceptable visual signature for the viewing distance." },
      { t: "Wire pitch", d: "Pitch controls both total circuit resistance and temperature uniformity across the aperture. Tighter pitch improves uniformity and raises power density; wider pitch reduces visibility and cost." },
      { t: "Run direction", d: "Wire runs should be perpendicular to the bus bars so every conductor presents a comparable path length between terminations. Skewed runs create uneven current sharing and hot or cold bands." },
      { t: "Aperture and edge margins", d: "Clearance is required between the outermost conductor and the glass edge, frit line, or frame bite to control edge stress and avoid visible termination artifacts." },
      { t: "Optical impact", d: "Human perception of fine wire depends on diameter, pitch, lighting, and viewing distance. Diffraction and haze effects should be evaluated on representative samples rather than from drawings." },
      { t: "Termination", d: "Every conductor must make a repeatable connection to the bus bar. Termination method, bus bar width, and lead exit point should be fixed early because they drive both reliability and edge appearance." },
    ],
    materials: [
      { t: "Tungsten wire", d: "High melting point and good dimensional stability at fine diameters. Common where low visibility and elevated operating temperature are both required." },
      { t: "Copper wire", d: "Higher conductivity per unit cross section. Used where lower resistance matters more than minimum visual signature, including antenna and heavier current paths." },
      { t: "Plated and clad conductors", d: "Surface treatments can be selected to influence solderability, corrosion behavior, and interlayer adhesion." },
      { t: "PVB interlayer", d: "The standard structural interlayer for architectural, automotive, and many aerospace laminates." },
      { t: "EVA and TPU interlayers", d: "Selected where lower processing temperature, higher moisture tolerance, or improved adhesion to films and inserts is needed." },
    ],
    process: [
      { t: "Design and layout", d: "Wire pattern, pitch, zone boundaries, and bus bar routing are defined against the target electrical and optical requirements." },
      { t: "Wire placement", d: "Conductors are laid into the interlayer in the defined geometry, including localized zones such as camera windows or wiper park areas." },
      { t: "Bus bar integration", d: "Bus bars are placed and joined so that all conductors terminate consistently, and lead wires are routed to the intended exit point." },
      { t: "Subassembly delivery", d: "The prepared interlayer is supplied to the customer as a pre-lamination subassembly, ready to drop into an existing stack-up." },
      { t: "Lamination by the customer", d: "The customer laminates using their qualified de-air and autoclave cycle. HLG supports cycle-related iteration where needed." },
      { t: "Electrical verification", d: "Resistance and continuity checks confirm the circuit matches the design intent before and after lamination." },
    ],
    performance: [
      { label: "Typical wire diameters", value: "~20-50 µm range", note: "Selected per application; finer wire lowers visibility, coarser wire lowers resistance." },
      { label: "Typical pitch range", value: "~2-20 mm", note: "Driven by uniformity, power density, and optical targets." },
      { label: "Supply voltages supported", value: "12 V to 400 V class designs", note: "Design target only; the circuit is engineered to the customer's available supply." },
      { label: "Zoning", value: "Single or multi-zone", note: "Independent zones can be defined for camera, wiper park, or partial-aperture heating." },
    ],
    applications: [
      "Heated automotive windshields, side glass, and backlights",
      "Aircraft windshields and cockpit transparencies",
      "Heated vision blocks and transparent armor",
      "Rail, marine, and heavy equipment glazing",
      "Camera and sensor window heating for ADAS",
      "Transparent antenna elements",
    ],
    faqs: [
      { q: "How hot can embedded wire laminated glass operate?", a: "Operating temperature is limited by the interlayer and the surrounding assembly rather than the wire itself. Standard PVB laminates are generally designed for modest surface temperature rise; higher-temperature builds use alternative interlayers and tighter thermal control. Target temperatures should be agreed per application and validated on representative samples." },
      { q: "How is the resistance of a wire heating circuit calculated?", a: "Circuit resistance is derived from the resistivity of the conductor material, the wire cross-sectional area, the length of each run between bus bars, and the number of parallel runs. Power is then P = V squared divided by R at the intended supply voltage. HLG works from the target power density and available voltage backwards to a wire diameter and pitch." },
      { q: "Is the wire visible in the finished glass?", a: "Fine wire is detectable on close inspection but is generally designed to be unobtrusive at normal viewing distance. Perceived visibility depends on diameter, pitch, lighting conditions, and background. Evaluation on a physical sample is the only reliable way to judge it." },
      { q: "Can embedded wire be used on curved glass?", a: "Yes. Wire-based conductors are well suited to curved and complex transparencies because the conductive layer is formed in the interlayer rather than deposited on a coated substrate." },
      { q: "Can more than one function share a single laminate?", a: "Yes. Heating, sensing, antenna, and shielding elements can be combined in a laminate, subject to electrical isolation, crosstalk, and space constraints. Combined builds should be reviewed as a system early in the design." },
    ],
    downloads: [
      { title: "Embedded Wire Technology Overview", kind: "PDF datasheet" },
      { title: "Wire Diameter and Pitch Selection Guide", kind: "Design guide" },
      { title: "Bus Bar Termination Reference", kind: "Technical drawing set" },
    ],
    related: ["heated-interlayers", "bus-bar-technology", "conductive-interlayers"],
  },
  {
    slug: "conductive-interlayers",
    name: "Conductive Interlayers",
    h1: "Electrically Conductive Interlayers for Advanced Glass Systems",
    summary:
      "Interlayer-format conductive layers — wire, mesh, film, or printed conductor — supplied as a pre-lamination subassembly.",
    definition:
      "A conductive interlayer is a polymer interlayer that carries an integrated electrical conductor, allowing a laminated glass unit to conduct current, heat, sense, shield, or radiate. HLG supplies conductive interlayers as pre-lamination subassemblies so that glass fabricators can add electrical capability without changing their core lamination process.",
    advantages: [
      "Electrical capability is added at the interlayer, so the customer's existing glass, coatings, and lamination cycle can remain unchanged.",
      "One format supports several conductor types: embedded wire, conductive mesh, transparent conductive film, and printed conductor patterns.",
      "Design changes are made in the interlayer rather than in glass tooling, shortening prototype iteration cycles.",
      "Supports curved, laminated, and multi-ply builds including transparent armor stacks.",
      "Bus bar and lead exit locations can be engineered to match the frame, gasket, and harness of the final assembly.",
    ],
    design: [
      { t: "Conductor selection", d: "Wire, mesh, TCO film, and printed conductors trade off differently across transparency, sheet resistance, and cost. The right choice depends on the electrical function and the optical requirement." },
      { t: "Electrical target", d: "Define supply voltage, available current, target power density, and any control or feedback requirement before the conductor is selected." },
      { t: "Optical target", d: "Visible light transmission, haze, and distortion requirements constrain the achievable conductor density." },
      { t: "Lamination compatibility", d: "Interlayer thickness, flow behavior, and de-air characteristics must suit the customer's autoclave cycle and stack-up." },
      { t: "Edge and termination", d: "Lead exit points, edge seal, and bus bar placement need to be coordinated with the frame and installation method." },
    ],
    materials: [
      { t: "PVB", d: "The default structural interlayer for most laminated glass builds." },
      { t: "EVA / TPU", d: "Used where lower-temperature processing, inserts, or moisture tolerance drive the build." },
      { t: "Fine metallic wire", d: "For heating, sensing, and antenna functions requiring low resistance." },
      { t: "Conductive mesh", d: "Woven or expanded metal mesh for shielding and area current distribution." },
      { t: "Transparent conductive films", d: "ITO and related coated films for uniform, low-visibility conductive area." },
    ],
    process: [
      { t: "Feasibility review", d: "Electrical function, environment, optical requirement, and existing process are reviewed together." },
      { t: "Interlayer engineering", d: "Conductor type, geometry, and termination are defined and documented." },
      { t: "Sample build", d: "Representative subassemblies are produced for evaluation in the customer's lamination process." },
      { t: "Iteration", d: "Geometry, termination, and preparation are refined against real lamination results." },
      { t: "Production supply", d: "The interlayer transitions to a defined, repeatable supply format." },
    ],
    performance: [
      { label: "Format", value: "Pre-lamination subassembly", note: "Supplied ready to place into the customer's stack-up." },
      { label: "Conductor types", value: "Wire, mesh, TCO film, printed", note: "Selected per application requirement." },
      { label: "Functions supported", value: "Heating, sensing, shielding, antenna", note: "Single or combined in one laminate." },
    ],
    applications: [
      "Aerospace transparencies",
      "Automotive and transportation glazing",
      "Defense glazing and transparent armor",
      "Secure facility and SCIF windows",
      "Industrial and equipment glazing",
    ],
    faqs: [
      { q: "What is an electrically conductive interlayer?", a: "It is a laminated glass interlayer that carries an integrated electrical conductor — wire, mesh, transparent conductive film, or printed conductor — so the finished laminate can heat, sense, shield, or radiate." },
      { q: "Does using a conductive interlayer change our lamination process?", a: "In most cases the interlayer is placed into the existing stack-up and laminated on the customer's qualified cycle. Some builds benefit from minor cycle adjustment, which is worked through during sample iteration." },
      { q: "Can conductive films and wire be combined in one laminate?", a: "Yes, subject to electrical isolation, thickness, and optical constraints. Combined builds are common where one function needs uniform area coverage and another needs a low-resistance path." },
      { q: "What information do you need to quote a conductive interlayer?", a: "Aperture size and shape, glass build and thickness, supply voltage and available current, target function and power, optical requirements, operating environment, and the frame or harness interface." },
    ],
    downloads: [
      { title: "Conductive Interlayer Design Guide", kind: "Design guide" },
      { title: "Conductive Interlayer Selection Matrix", kind: "Reference table" },
    ],
    related: ["embedded-wire-technology", "transparent-conductive-films", "functional-laminates"],
  },
  {
    slug: "heated-interlayers",
    name: "Heated Interlayers",
    h1: "Heated Interlayers for Laminated Glass",
    summary:
      "Interlayer-integrated heating circuits for defrost, de-ice, anti-fog, and elevated-temperature glazing.",
    definition:
      "A heated interlayer converts electrical power into distributed heat inside a laminate. The heating element may be fine embedded wire, a conductive coating, or a printed conductor, terminated at bus bars and driven from the vehicle, aircraft, or facility supply. The design objective is a defined power density delivered uniformly across the required aperture within the thermal limits of the laminate.",
    advantages: [
      "Heat is generated inside the laminate, close to the surface that needs to be cleared, which improves response compared with convective air alone.",
      "Zoned designs allow power to be concentrated where it matters — camera windows, wiper park areas, or the primary vision area.",
      "Power density and uniformity can be tuned through pitch and geometry rather than by increasing supply voltage.",
      "Compatible with curved, multi-ply, and armored builds.",
    ],
    design: [
      { t: "Power density", d: "Target watts per unit area is set by the clearing requirement, ambient conditions, airflow, and time-to-clear expectation." },
      { t: "Uniformity", d: "Temperature spread across the aperture is governed by conductor pitch, current sharing, and bus bar resistance. Uniformity targets should be stated explicitly." },
      { t: "Thermal limits", d: "Interlayer, adhesive, seal, and frame materials all impose temperature limits. The design must remain within the lowest of these under worst-case conditions." },
      { t: "Control and protection", d: "Thermostats, embedded sensors, or controller feedback are used to prevent overheat. Protection strategy should be defined with the heating design, not after it." },
      { t: "Supply and harness", d: "Available voltage, current limit, connector type, and cable routing constrain the achievable circuit resistance." },
    ],
    materials: [
      { t: "Embedded wire elements", d: "Fine tungsten or copper conductors for high power density and zoning flexibility." },
      { t: "Transparent conductive coatings", d: "Uniform area heating with minimal visible structure, at higher sheet resistance." },
      { t: "Printed conductors", d: "Patterned conductive inks for defined zones and lower-power applications." },
      { t: "Bus bar materials", d: "Copper foil, tinned copper, and braid options selected for current, termination, and edge profile." },
    ],
    process: [
      { t: "Thermal requirement definition", d: "Clearing target, ambient extremes, and duty cycle are captured." },
      { t: "Circuit design", d: "Conductor type, geometry, and resistance are engineered to the supply." },
      { t: "Prototype build and measurement", d: "Samples are built and measured for resistance, power draw, and temperature distribution." },
      { t: "Iteration", d: "Pitch, zoning, and bus bar layout are refined against measured results." },
      { t: "Production transition", d: "The validated design is released as a repeatable supply configuration." },
    ],
    performance: [
      { label: "Common design targets", value: "Defrost, de-ice, anti-fog", note: "Requirement is set per program and validated on samples." },
      { label: "Zoning", value: "Single or multi-zone", note: "Independent circuits for local high-power areas." },
      { label: "Feedback options", value: "Embedded sensor or external control", note: "Overheat protection strategy defined with the customer." },
    ],
    applications: [
      "Automotive heated windshields and backlights",
      "Aircraft windshield and cockpit transparency heating",
      "Rail and transit windshields",
      "Marine bridge windows",
      "Industrial and refrigeration viewing windows",
    ],
    faqs: [
      { q: "What power density does heated glass need to clear ice?", a: "It depends on ambient temperature, wind, ice type, glass build, and required clearing time. De-icing generally requires substantially more power than defogging. HLG works from your clearing requirement and environment to a target power density, then validates it on samples." },
      { q: "How do you prevent a heated laminate from overheating?", a: "Through a combination of design margin, zoning, and feedback. Embedded sensor elements or external thermostats can be used to limit surface temperature, and the control strategy is defined alongside the heating circuit." },
      { q: "Can heating be applied to only part of the glass?", a: "Yes. Zoned heating is common for camera windows, wiper park areas, and partial vision areas, and it reduces total power draw compared with full-aperture heating." },
      { q: "What voltage should a heated glass system use?", a: "The circuit is engineered around your available supply. Higher voltages allow thinner conductors or wider pitch for the same power, while low-voltage systems require lower circuit resistance and heavier bus bars." },
    ],
    downloads: [
      { title: "Designing Heated Laminated Glass", kind: "Design guide" },
      { title: "Defrost Performance Considerations", kind: "Application note" },
    ],
    related: ["embedded-wire-technology", "temperature-control-systems", "aircraft-heating-systems"],
  },
  {
    slug: "aircraft-heating-systems",
    name: "Aircraft Heating Systems",
    h1: "Aircraft Transparency Heating Systems",
    summary:
      "Heater mats, sensor mats, and pre-lamination subassemblies for aircraft windshields and cockpit transparencies.",
    definition:
      "Aircraft transparency heating keeps windshields and cockpit windows clear of ice and fog and maintains the transparency within its intended operating temperature band. HLG develops heater mats and sensor mats in interlayer format for integration by transparency manufacturers, alongside overheat protection elements and bus bar routing concepts.",
    advantages: [
      "Heater and sensor elements are supplied in a format that integrates into an existing transparency build.",
      "Sensor mats can be co-designed with the heater circuit so protection and control share a common layout.",
      "Zoning supports differing requirements across the primary vision area and surrounding regions.",
      "Wire-based elements suit the curved, thick, multi-ply construction typical of aircraft transparencies.",
    ],
    design: [
      { t: "Heater and sensor coordination", d: "Sensor placement should represent the thermally critical area of the heated zone rather than an arbitrary corner." },
      { t: "Uniformity across a thick stack", d: "Multi-ply aerospace builds change the thermal path between the element and the outer surface, which affects both response time and measured temperature." },
      { t: "Termination and harness interface", d: "Lead exits, connectors, and strain relief must suit the frame and the aircraft harness." },
      { t: "Environmental extremes", d: "Cold soak, rapid thermal transients, and altitude conditions inform both margin and material selection." },
      { t: "Program qualification", d: "Qualification is owned by the transparency manufacturer and the program. HLG supports the subassembly development that feeds it." },
    ],
    materials: [
      { t: "Fine tungsten wire elements", d: "Common for heater mats requiring low visibility and stable behavior at temperature." },
      { t: "Serpentine sensor elements", d: "Resistance-based temperature sensing elements with terminal pads and lead wires." },
      { t: "Aerospace-oriented interlayers", d: "Interlayer selection is matched to the transparency manufacturer's stack and cycle." },
      { t: "Bus bar and lead assemblies", d: "Terminated conductors routed to the intended exit point." },
    ],
    process: [
      { t: "Requirement capture", d: "Aperture geometry, stack-up, supply, control scheme, and environment are documented." },
      { t: "Mat layout", d: "Heater and sensor geometry are laid out together against the transparency outline." },
      { t: "Subassembly build", d: "Mats are produced as pre-lamination subassemblies for the transparency manufacturer." },
      { t: "Integration support", d: "HLG supports iteration through the customer's lamination and inspection results." },
    ],
    performance: [
      { label: "Element types", value: "Heater mat, sensor mat", note: "Supplied individually or as a coordinated pair." },
      { label: "Zoning", value: "Multi-zone capable", note: "Vision area and peripheral zones can be driven separately." },
      { label: "Protection", value: "Overheat sensing elements", note: "Designed to support the customer's control architecture." },
    ],
    applications: [
      "Fixed-wing cockpit windshields",
      "Helicopter windshields and windows",
      "Heated observation and mission windows",
      "Cabin and door transparencies",
    ],
    faqs: [
      { q: "Does HLG supply finished aircraft transparencies?", a: "No. HLG supplies heater mats, sensor mats, and conductive interlayer subassemblies to transparency manufacturers and integrators, who complete the laminate and own the program qualification." },
      { q: "Can sensors and heaters be combined in one mat?", a: "The heater circuit and sensor element are usually laid out together so that sensing represents the thermally critical part of the heated zone, then supplied as coordinated subassemblies." },
      { q: "What certifications do these products carry?", a: "HLG products are development and supply items, not certified assemblies. Certification and qualification are held at the transparency and aircraft program level. HLG supports the data gathering and iteration that feeds those activities." },
    ],
    downloads: [
      { title: "Aircraft Heater Mat Overview", kind: "PDF datasheet" },
      { title: "Sensor Mat Application Note", kind: "Application note" },
    ],
    related: ["sensor-integration", "heated-interlayers", "temperature-control-systems"],
  },
  {
    slug: "transparent-conductive-films",
    name: "Transparent Conductive Films",
    h1: "Transparent Conductive Films for Laminated Glass",
    summary:
      "ITO and related transparent conductive films integrated into laminated glass builds for uniform, low-visibility conduction.",
    definition:
      "Transparent conductive films carry a thin conductive coating — commonly indium tin oxide — on a polymer carrier or directly on glass. They provide area conduction with no visible conductor structure, at higher sheet resistance than metallic conductors. Films can be patterned by laser deletion to define zones, isolate circuits, or create antenna and sensing geometries.",
    advantages: [
      "No visible wire structure, which suits applications with strict optical requirements.",
      "Uniform area conduction across the coated region.",
      "Laser deletion allows precise zone definition and circuit isolation without additional tooling.",
      "Can be combined with wire or mesh where a low-resistance path is also needed.",
    ],
    design: [
      { t: "Sheet resistance", d: "Film sheet resistance sets the achievable power density for a given voltage and aperture, and is the primary constraint in film-based heating." },
      { t: "Aperture geometry", d: "Because current flows across the sheet, aspect ratio strongly affects total resistance and uniformity between bus bars." },
      { t: "Optical properties", d: "Transmission, reflected color, and haze vary by coating and carrier. These should be evaluated against the visual requirement early." },
      { t: "Handling and processing", d: "Coated films are sensitive to scratching, creasing, and contamination, so handling discipline is part of the design." },
      { t: "Patterning", d: "Laser deletion lines define zones and isolation gaps. Line placement affects both electrical behavior and visibility under certain lighting." },
    ],
    materials: [
      { t: "ITO film", d: "Transparent conductive oxide on a polymer carrier, laminated within the stack." },
      { t: "ITO-coated glass", d: "Coating applied directly to a glass ply where the build allows." },
      { t: "Alternative TCO and metal-layer coatings", d: "Evaluated where ITO properties do not fit the optical or resistance requirement." },
    ],
    process: [
      { t: "Film selection", d: "Candidate films are screened against sheet resistance, optical, and processing requirements." },
      { t: "Patterning", d: "Laser deletion defines zones, isolation, and termination areas." },
      { t: "Bus bar application", d: "Conductive bus bars are applied to distribute current into the film." },
      { t: "Encapsulation", d: "The film is encapsulated within the interlayer stack for lamination." },
    ],
    performance: [
      { label: "Conduction", value: "Uniform area", note: "No visible conductor structure." },
      { label: "Relative resistance", value: "Higher than wire", note: "Limits achievable power density at low voltage." },
      { label: "Patterning", value: "Laser deletion", note: "Zones and isolation defined without new tooling." },
    ],
    applications: [
      "Low-visibility heated glazing",
      "Anti-fog display and instrument windows",
      "Antenna and sensing patterns",
      "Combined film and wire builds",
    ],
    faqs: [
      { q: "Embedded wire or ITO — which should we use?", a: "Wire delivers much lower resistance and therefore higher power density, with a fine but detectable visual structure. ITO is visually clean but higher in sheet resistance, which typically limits it to lower power density or higher supply voltages. Large or low-voltage heating requirements usually favor wire; strict optical requirements at modest power favor film." },
      { q: "Can ITO film be patterned into zones?", a: "Yes. Laser deletion creates isolation lines that define independent zones, antenna geometries, or sensing areas without additional tooling." },
      { q: "Can film and wire be combined?", a: "Yes. A combined build can use film for uniform area coverage and wire for the low-resistance paths or high-power local zones." },
    ],
    downloads: [
      { title: "Embedded Wire vs ITO", kind: "White paper" },
      { title: "Transparent Conductive Film Handling Notes", kind: "Application note" },
    ],
    related: ["conductive-interlayers", "functional-laminates", "sensor-integration"],
  },
  {
    slug: "bus-bar-technology",
    name: "Bus Bar Technology",
    h1: "Bus Bar Technology for Conductive Laminated Glass",
    summary:
      "Current distribution, termination, and lead exit engineering for heated, shielded, and sensing laminates.",
    definition:
      "The bus bar is the conductor that distributes current into and out of the active layer. In conductive laminated glass it determines current sharing across the aperture, local heat generation at the edges, the visual appearance of the border region, and the mechanical robustness of the lead exit. Bus bar design is frequently the limiting factor in a heated glass program.",
    advantages: [
      "Correct bus bar sizing keeps edge temperature rise controlled and improves uniformity across the aperture.",
      "Termination geometry can be matched to the frame, frit line, and gasket so the border remains clean.",
      "Lead exit location and strain relief can be engineered to the harness rather than improvised at assembly.",
    ],
    design: [
      { t: "Cross section and current", d: "Bus bar cross section must carry the full circuit current with limited voltage drop; an undersized bus bar produces edge heating and non-uniform current sharing." },
      { t: "Contact to the active layer", d: "The joint between bus bar and conductor or film governs long-term resistance stability and is the most common failure point." },
      { t: "Placement and concealment", d: "Bus bars are usually located under a frit band, frame bite, or border region so they are not visible in the vision area." },
      { t: "Lead exit and strain relief", d: "Exit through the edge seal needs mechanical protection and a defined route to the connector." },
      { t: "Corrosion and edge seal", d: "The termination area must be sealed appropriately for the operating environment." },
    ],
    materials: [
      { t: "Copper foil", d: "Standard bus bar material with good conductivity and formability." },
      { t: "Tinned copper and braid", d: "Selected for joining behavior, flexibility, and corrosion performance." },
      { t: "Conductive inks and pastes", d: "Used for printed bus bars and film contact areas." },
      { t: "Connectors and lead assemblies", d: "Selected to match the customer harness and environmental requirement." },
    ],
    process: [
      { t: "Current budget", d: "Total current and acceptable voltage drop are established." },
      { t: "Layout", d: "Bus bar path, width, and termination points are laid out against the aperture and frame." },
      { t: "Joining and lead attachment", d: "Conductors are joined to the bus bar and leads are attached and relieved." },
      { t: "Verification", d: "Resistance and continuity are measured before and after lamination." },
    ],
    performance: [
      { label: "Key metric", value: "Voltage drop along the bus", note: "Drives uniformity between the near and far ends of the aperture." },
      { label: "Placement", value: "Frit or frame concealed", note: "Keeps the vision area clean." },
      { label: "Exit", value: "Edge lead with strain relief", note: "Location fixed to the customer harness." },
    ],
    applications: [
      "All heated laminated glass builds",
      "Shielded window inserts requiring perimeter grounding",
      "Antenna feed and ground terminations",
      "Sensor lead terminations",
    ],
    faqs: [
      { q: "Why does my heated glass get hot at the edges?", a: "Concentrated edge heating usually indicates an undersized bus bar, a poor bus bar to conductor joint, or non-uniform current sharing caused by conductor runs of unequal length. Reviewing bus bar cross section and termination is the first step." },
      { q: "Where should the lead wires exit the glass?", a: "The exit point should be selected with the frame, gasket, and harness in mind, and fixed early because it affects edge seal design and handling during lamination." },
      { q: "Can bus bars be hidden?", a: "In most builds bus bars are placed under a ceramic frit band or within the frame bite so they are not visible in the vision area." },
    ],
    downloads: [
      { title: "Bus Bar Design Guide", kind: "Design guide" },
      { title: "Lead Exit and Termination Details", kind: "Technical drawing set" },
    ],
    related: ["heated-interlayers", "power-distribution", "embedded-wire-technology"],
  },
  {
    slug: "sensor-integration",
    name: "Sensor Integration",
    h1: "Sensor Integration in Laminated Glass",
    summary:
      "Embedded temperature and overheat sensing elements laminated within the transparency.",
    definition:
      "Sensor integration places a sensing element inside the laminate so that temperature is measured where it matters rather than at the frame. HLG's typical element is a resistance-based serpentine sensor with terminal pads and lead wires, laminated alongside a heating circuit to support overheat protection and closed-loop control.",
    advantages: [
      "Measurement is taken within the laminate, closer to the thermally critical region than an externally mounted sensor.",
      "The sensor element can be positioned deliberately relative to the heater zone rather than at a convenient edge.",
      "Element and lead geometry can be matched to the customer's controller input.",
      "Encapsulation protects the element from handling and environmental exposure.",
    ],
    design: [
      { t: "Sensor placement", d: "Position should represent the hottest expected point of the controlled zone. Placement drives both protection effectiveness and control stability." },
      { t: "Element type and output", d: "Element resistance and temperature coefficient must be compatible with the customer's controller input range." },
      { t: "Lead routing", d: "Leads exit through the edge seal to a connector, requiring the same strain relief discipline as power leads." },
      { t: "Redundancy", d: "Safety-driven applications may require more than one sensing element or an independent protection path." },
      { t: "Optical footprint", d: "Sensor elements are small but not invisible; they are usually located in a frit band or non-critical area." },
    ],
    materials: [
      { t: "Serpentine sensing traces", d: "Fine parallel traces with hairpin turns forming a defined-resistance element." },
      { t: "Terminal pads", d: "Contact areas for joining the lead wires to the element." },
      { t: "Copper lead wires", d: "Routed from the element to the edge exit and connector." },
    ],
    process: [
      { t: "Control requirement review", d: "Controller input, target set point, and protection strategy are established." },
      { t: "Element layout", d: "Sensor geometry and location are laid out relative to the heater zone." },
      { t: "Subassembly build", d: "Sensor mats are produced for placement in the customer's stack-up." },
      { t: "Verification", d: "Element resistance and lead continuity are checked before delivery." },
    ],
    performance: [
      { label: "Element type", value: "Resistance-based serpentine", note: "Geometry defined to a target resistance." },
      { label: "Location", value: "Within the laminate", note: "Placed relative to the heated zone." },
      { label: "Interface", value: "Two-lead termination", note: "Matched to the customer controller." },
    ],
    applications: [
      "Aircraft windshield overheat protection",
      "Heated automotive and transit glazing control",
      "Industrial heated viewing windows",
      "Closed-loop temperature control in specialty glazing",
    ],
    faqs: [
      { q: "Can sensors be embedded in laminated glass?", a: "Yes. Resistance-based sensing elements can be laminated within the interlayer stack, with lead wires exiting the edge to a connector. They are commonly paired with a heating circuit for overheat protection or closed-loop control." },
      { q: "Where should an embedded sensor be placed?", a: "At the location expected to reach the highest temperature within the controlled zone. Placing a sensor at a convenient edge instead of the thermally critical point is a common cause of ineffective protection." },
      { q: "Can more than one sensor be used?", a: "Yes. Multiple elements are used where zones are controlled separately or where an independent protection channel is required." },
    ],
    downloads: [
      { title: "Embedded Sensor Element Datasheet", kind: "PDF datasheet" },
      { title: "Sensor Placement Application Note", kind: "Application note" },
    ],
    related: ["aircraft-heating-systems", "temperature-control-systems", "functional-laminates"],
  },
  {
    slug: "functional-laminates",
    name: "Functional Laminates",
    h1: "Functional Laminated Glass and Multi-Function Builds",
    summary:
      "Laminates that combine heating, sensing, shielding, antenna, and switchable functions in one transparency.",
    definition:
      "A functional laminate carries one or more active layers within the glass build so that the transparency performs an engineering role beyond glazing. In practice this means combining conductive layers, sensing elements, shielding meshes, antenna structures, and switchable films within a stack that still meets its optical and structural requirements.",
    advantages: [
      "Consolidates several functions into a single transparency rather than separate bolt-on components.",
      "Active layers are protected inside the laminate.",
      "Layer order and isolation can be engineered to limit interaction between functions.",
      "Supports incremental capability — a build can be designed for later addition of a function.",
    ],
    design: [
      { t: "Stack order", d: "The sequence of active layers affects optical performance, thermal path, and electrical isolation. Stack order should be fixed before detailed layout." },
      { t: "Electrical isolation", d: "Independent circuits sharing a laminate require defined isolation distances and separate terminations." },
      { t: "Interaction and crosstalk", d: "Shielding meshes and heating grids can affect antenna performance; these interactions need to be evaluated together, not separately." },
      { t: "Total thickness", d: "Each added layer increases stack thickness and affects lamination behavior and frame fit." },
      { t: "Serviceability", d: "Because the functions are permanent, failure modes and connector accessibility need consideration up front." },
    ],
    materials: [
      { t: "Conductive interlayers", d: "Wire, mesh, film, or printed conductor layers." },
      { t: "Shielding mesh", d: "Fine woven mesh for EMI/RF attenuation." },
      { t: "Sensor elements", d: "Embedded temperature and overheat sensing." },
      { t: "Switchable films", d: "Variable tint and privacy film integration support." },
    ],
    process: [
      { t: "System review", d: "All intended functions are reviewed together against the optical and structural requirement." },
      { t: "Stack definition", d: "Layer order, isolation, and thickness budget are defined." },
      { t: "Prototype build", d: "A representative multi-function subassembly is produced for evaluation." },
      { t: "Iteration and release", d: "Interactions are measured and the build is refined toward production." },
    ],
    performance: [
      { label: "Functions", value: "Heating, sensing, shielding, antenna, switchable", note: "Combined subject to isolation and thickness." },
      { label: "Format", value: "Multi-layer subassembly", note: "Delivered for the customer's lamination." },
    ],
    applications: [
      "ADAS-enabled automotive glazing",
      "Defense and secure facility glazing",
      "Aerospace mission windows",
      "Specialty transportation glazing",
    ],
    faqs: [
      { q: "What is functional laminated glass?", a: "Laminated glass that carries one or more active layers — conductive, sensing, shielding, antenna, or switchable — so the transparency performs an engineering function in addition to glazing." },
      { q: "Can heating, shielding, and antenna functions coexist in one laminate?", a: "Often yes, but they interact. A shielding mesh or dense heating grid can affect antenna performance, so combined builds should be designed and evaluated as a system." },
      { q: "Does HLG support switchable and variable tint glass?", a: "HLG supports the conductive and power distribution side of switchable builds — the layers that deliver and terminate current — rather than supplying the switchable film itself." },
    ],
    downloads: [
      { title: "Functional Laminated Glass Overview", kind: "White paper" },
      { title: "Multi-Function Stack Planning Worksheet", kind: "Design guide" },
    ],
    related: ["conductive-interlayers", "sensor-integration", "power-distribution"],
  },
  {
    slug: "power-distribution",
    name: "Power Distribution",
    h1: "Power Distribution in Laminated Glass Systems",
    summary:
      "Voltage selection, current budgeting, harness interface, and circuit protection for electrically active glazing.",
    definition:
      "Power distribution covers everything between the supply and the active layer: voltage selection, current budget, conductor sizing, connector and harness interface, switching, and protection. In electrically active glazing these choices constrain the conductor design as much as the thermal or optical requirement does.",
    advantages: [
      "Establishing the electrical envelope first prevents redesign of the conductor pattern later.",
      "Voltage selection has a direct effect on achievable wire diameter, pitch, and bus bar size.",
      "A defined harness and connector interface simplifies installation and field service.",
    ],
    design: [
      { t: "Voltage selection", d: "Higher voltage reduces current for the same power, allowing finer conductors and lighter bus bars. Lower voltage systems demand lower circuit resistance and heavier terminations." },
      { t: "Current budget", d: "The available current from the supply sets a hard ceiling on power; the circuit must be designed against the real supply, not the nominal one." },
      { t: "Circuit protection", d: "Fusing, current limiting, and thermal cut-out strategy should be defined together with the heating design." },
      { t: "Switching and control", d: "Relay, solid-state, or PWM control affects both the electrical design and the perceived thermal response." },
      { t: "Grounding and bonding", d: "Shielding and antenna builds require a defined grounding path to the frame or enclosure." },
    ],
    materials: [
      { t: "Bus bar and lead assemblies", d: "Sized to the current budget and termination method." },
      { t: "Connectors", d: "Selected for current, environment, and serviceability." },
      { t: "Protection devices", d: "Fuses, thermal cut-outs, and controller-side limits." },
    ],
    process: [
      { t: "Electrical envelope definition", d: "Supply voltage, available current, and protection are captured." },
      { t: "Conductor sizing", d: "Circuit resistance is engineered to deliver the target power within the envelope." },
      { t: "Interface definition", d: "Connector, lead length, and routing are fixed with the customer." },
      { t: "Verification", d: "Draw and voltage drop are measured on prototype builds." },
    ],
    performance: [
      { label: "Typical supplies", value: "12 V, 24 V, 28 V, 115 V, 400 V class", note: "Design target; engineered to the customer's system." },
      { label: "Protection", value: "Fusing and thermal cut-out", note: "Strategy defined with the customer." },
    ],
    applications: [
      "Automotive and commercial vehicle heated glazing",
      "Aircraft transparency heating",
      "Facility-powered shielded and heated windows",
      "Industrial equipment glazing",
    ],
    faqs: [
      { q: "What voltage is best for heated glass?", a: "There is no universal answer — the circuit is designed to the supply you have. Higher voltages allow thinner conductors and lighter bus bars for a given power, which usually improves optical performance; low-voltage systems require lower resistance and heavier terminations." },
      { q: "How do you calculate current draw?", a: "Current is the supply voltage divided by the measured circuit resistance, and power is the product of the two. Because resistance shifts slightly with temperature, cold and hot draw should both be considered against the supply limit." },
      { q: "Should heated glass be PWM controlled?", a: "PWM is a common way to regulate average power and manage surface temperature. The control approach should be defined alongside the heating circuit so that both the peak and average conditions stay within limits." },
    ],
    downloads: [
      { title: "Voltage Selection Guide", kind: "Design guide" },
      { title: "Power Distribution in Laminated Glass", kind: "White paper" },
    ],
    related: ["bus-bar-technology", "heated-interlayers", "temperature-control-systems"],
  },
  {
    slug: "temperature-control-systems",
    name: "Temperature Control Systems",
    h1: "Temperature Control for Heated Laminated Glass",
    summary:
      "Control strategy, feedback, and overheat protection for electrically heated transparencies.",
    definition:
      "Temperature control determines how a heated transparency reaches and holds its target condition without exceeding the thermal limits of the laminate. It combines sensing, control logic, and protection, and it is designed together with the heating circuit rather than added afterwards.",
    advantages: [
      "Feedback control allows higher usable power density while staying inside the laminate's thermal limits.",
      "Independent protection paths reduce the consequence of a single sensing or control failure.",
      "Zoned control matches power to the area that actually needs it.",
    ],
    design: [
      { t: "Set point and tolerance", d: "The target surface condition and acceptable variation drive both sensor placement and control resolution." },
      { t: "Sensing strategy", d: "Embedded elements measure inside the laminate; external sensors are simpler but less representative. The choice affects achievable margin." },
      { t: "Protection independence", d: "Where overheat consequences are significant, protection should not depend on the same element as normal control." },
      { t: "Thermal lag", d: "Thick multi-ply builds respond slowly, so control loops must account for lag to avoid overshoot." },
      { t: "Zone control", d: "Separate zones may need separate set points, sequencing, or power sharing to stay within the supply limit." },
    ],
    materials: [
      { t: "Embedded sensing elements", d: "Resistance-based elements laminated with the heater." },
      { t: "Thermostats and cut-outs", d: "Fixed-threshold protection devices." },
      { t: "Controller interfaces", d: "Lead and connector arrangements matched to the customer's controller." },
    ],
    process: [
      { t: "Control requirement definition", d: "Set point, tolerance, and protection thresholds are captured." },
      { t: "Sensor and heater co-layout", d: "Sensing is positioned relative to the heated zone." },
      { t: "Prototype measurement", d: "Response, overshoot, and uniformity are measured on samples." },
      { t: "Refinement", d: "Placement and geometry are adjusted against measured behavior." },
    ],
    performance: [
      { label: "Control approach", value: "Customer controller with embedded feedback", note: "HLG supplies the in-glass elements." },
      { label: "Protection", value: "Threshold or independent channel", note: "Defined by application consequence." },
    ],
    applications: [
      "Aircraft transparency overheat protection",
      "Automotive and transit heated glazing control",
      "Industrial heated viewing windows",
    ],
    faqs: [
      { q: "Does HLG supply the controller?", a: "No. HLG supplies the in-glass heating and sensing elements and works with your controller architecture. Control hardware and logic remain with the customer or their system supplier." },
      { q: "How is overheat protection implemented?", a: "Typically through an embedded sensing element that the controller monitors, and where the consequence warrants it, an independent threshold device so that protection does not rely on a single element." },
      { q: "Why does heated glass overshoot its set point?", a: "Thermal lag through a thick laminate delays the sensed response. Control tuning, sensor placement closer to the critical surface, and zoning all reduce overshoot." },
    ],
    downloads: [
      { title: "Heated Glass Control Strategy Notes", kind: "Application note" },
      { title: "Overheat Protection Considerations", kind: "Design guide" },
    ],
    related: ["sensor-integration", "heated-interlayers", "power-distribution"],
  },
];

export const getTechnology = (slug?: string) =>
  technologies.find((t) => t.slug === slug);
