export const heatedSpecification = {
  title: "Heated Interlayer Voltage Range",
  overview: "HLG engineers heated interlayer assemblies around the customer's available supply voltage, required heating performance, and current limits. Conductor material, circuit layout, bus bars, and terminations are selected for the application.",
  fields: [
    { label: "Current supply range", value: "12 V to 440 V DC" },
    { label: "Supply format", value: "Engineered heated interlayer assembly, ready to laminate" },
    { label: "Conductor selection", value: "Tungsten for wiggle-wire HEAT; copper or other conductive metals typically used for wiper park and other heaters" },
    { label: "Heating requirement", value: "Target power, power density, heating zones, and thermal limits defined per application" },
    { label: "Current limits", value: "Available supply current and maximum permitted draw defined by the customer" },
    { label: "Termination", value: "Bus bars, connectors, and lead exits engineered for the circuit and integration requirements" },
    { label: "Validation", value: "Electrical and thermal performance evaluated against the agreed application specification" },
  ],
  design: "The stated range covers custom designs; it is not the operating range of a single interchangeable heater. Each assembly is engineered for its specified DC supply and agreed electrical and thermal requirements.",
  validation: "Circuit resistance, electrical function, and thermal uniformity are evaluated against the agreed specification. Representative laminated samples establish application-specific heating performance and compatibility with the customer's glass construction.",
  inputs: "Provide nominal supply voltage and operating limits, available current, target heating performance, aperture dimensions, laminate construction, heating zones, environmental conditions, and connector or lead-exit requirements.",
};