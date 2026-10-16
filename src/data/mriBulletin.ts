import mriSuite from "@/assets/photos/mri-suite-window.jpg";
import type { HlgPhoto } from "@/data/hlgPhotos";

export const mriSuitePhoto: HlgPhoto = {
  src: mriSuite,
  alt: "MRI scan room viewed from the control room through a large RF-shielded observation window",
  caption: "RF-shielded observation window between an MRI control room and scan room.",
  label: "Medical & MRI RF shielding",
};

export const mriBulletin = {
  id: "TB-003",
  path: "/technical-bulletins/tb-003-mri-rf-shielded-windows",
  title: "RF-Shielded Windows for MRI Suites & Medical Imaging",
  overview:
    "MRI scanners rely on a quiet radio-frequency environment. Outside RF noise entering the scan room can degrade image quality, so the room is built as an RF enclosure and every opening in it—including the observation window—must maintain that shielding. Hotlineglass USA engineers RF-shielded observation windows as complete electrical assemblies, built to the customer, equipment or architectural supplied specification.",
  sections: [
    { title: "Why MRI Windows Are Different", text: "Architectural security glazing is intended to keep signals from leaving a space. An MRI window is intended to keep outside RF interference from entering the scan room. The window must provide clear, comfortable visibility of the patient while preserving the continuity of the RF enclosure." },
    { title: "Engineered Shielding Layers", text: "Depending on the specification, HLG assemblies may incorporate fine conductive mesh, transparent conductive films or multiple shielding layers laminated within the glass, selected to balance optical clarity against shielding performance." },
    { title: "Perimeter Collection & Grounding", text: "A shielding layer is only as effective as its connection to the enclosure. HLG engineers busbars and perimeter termination for continuous, low-resistance contact with the window frame and the RF room." },
    { title: "Optical Clarity for Patient Observation", text: "Technologists need an undistorted view of the patient. Mesh selection, orientation and laminate construction are engineered to support clear viewing and reduced moiré under clinical lighting." },
    { title: "100% Inspection", text: "Every assembly is inspected for defects and debris and electrically verified against the applicable specification, including continuity, busbar integrity and termination." },
    { title: "Experience Behind the Program", text: "HLG's MRI window program draws on prior hands-on experience manufacturing MRI windows, applied with HLG's engineered interlayer, busbar and inspection processes." },
  ],
  applicationsTitle: "Medical & MRI RF Shielding",
  applications: [
    "MRI scan room observation windows",
    "MRI control room windows",
    "RF-shielded doors and vision panels",
    "Diagnostic imaging centers",
    "Hospital and clinic imaging suites",
    "Research and veterinary MRI facilities",
    "MRI equipment OEM and RF-room integrator programs",
  ],
  specNote:
    "Shielding performance, frequency range and optical requirements are engineered to the customer, equipment or architectural supplied specification.",
  note: {
    title: "Important Note",
    text: "Actual shielding effectiveness depends on the complete installed RF enclosure, including window construction, frame, grounding, installation and site-specific testing. HLG engineers the shielded window to support the specified performance objectives.",
  },
};
