import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo, { orgSchema } from "@/components/Seo";

import facilityExterior from "@/assets/hlg-facility-exterior.jpg.asset.json";
import teamEntrance from "@/assets/hlg-team-entrance.jpg.asset.json";
import floorWide from "@/assets/cleanroom-production-floor-wide.jpg.asset.json";
import dispenseCells from "@/assets/cleanroom-dispense-cells.jpg.asset.json";
import dispenseStation from "@/assets/cleanroom-dispense-station.jpg.asset.json";
import leadAttach from "@/assets/cleanroom-lead-attach.jpg.asset.json";
import backlitInspection from "@/assets/cleanroom-backlit-inspection.jpg.asset.json";
import busBarLayout from "@/assets/cleanroom-bus-bar-layout-table.jpg.asset.json";
import drumBusBarBench from "@/assets/cleanroom-drum-bus-bar-bench.jpg.asset.json";
import drumRoomLayup from "@/assets/drum-room-2-layup-line.jpg.asset.json";
import drumRoomDrum from "@/assets/drum-room-2-interlayer-drum.jpg.asset.json";
import drumRoomMasterRoll from "@/assets/drum-room-2-master-roll.jpg.asset.json";
import materialBay from "@/assets/shop-material-bay-dock.jpg.asset.json";
import cleanroomBagging from "@/assets/cleanroom-vacuum-bagging.jpg.asset.json";
import thermalTest from "@/assets/heater-mat-thermal-test.jpg.asset.json";

type Photo = { src: string; title: string; caption: string; wide?: boolean };

const productionFloor: Photo[] = [
  {
    src: floorWide.url,
    title: "Cleanroom production floor",
    caption:
      "Multiple gowned build cells running in parallel across the controlled floor, each station dedicated to a separate program.",
    wide: true,
  },
  {
    src: dispenseCells.url,
    title: "Automated dispense cells",
    caption:
      "Gantry dispense stations running programmed paths over staged interlayer stacks for repeatable bead and wire placement.",
  },
  {
    src: dispenseStation.url,
    title: "Gantry station — patterned layup",
    caption:
      "Single-cell gantry tracing a windshield profile on the layup table with bus bar tape staged along the perimeter.",
  },
];

const buildAndTerminate: Photo[] = [
  {
    src: leadAttach.url,
    title: "Lead attach and in-process soldering",
    caption:
      "Leads and terminations attached at the layup table while the assembly is still flat and fully accessible.",
  },
  {
    src: busBarLayout.url,
    title: "Bus bar and lead kitting",
    caption:
      "Formed bus bar and lead sets laid out to a printed template so every assembly is built to the same routing and length.",
  },
  {
    src: drumBusBarBench.url,
    title: "Drum station and bus bar bench",
    caption:
      "Interlayer drum in operation alongside the bench where terminations and braid assemblies are prepared and inspected.",
  },
  {
    src: backlitInspection.url,
    title: "Backlit inspection bay",
    caption:
      "High-intensity light table used for debris, wire, and bond-line inspection before the stack is bagged.",
  },
];

const drumRooms: Photo[] = [
  {
    src: drumRoomLayup.url,
    title: "Drum Room #2 — layup line",
    caption:
      "Full-length layup tables with glass staged alongside the interlayer drum for continuous stack build.",
    wide: true,
  },
  {
    src: drumRoomDrum.url,
    title: "Interlayer drum station",
    caption:
      "Temperature- and humidity-controlled interlayer drum with automated traverse for repeatable sheet pull and cutting.",
  },
  {
    src: drumRoomMasterRoll.url,
    title: "Master roll and stack layout",
    caption:
      "Master interlayer roll feeding the layup table, with taped layout references marking cut lines and stack positions.",
  },
];

const supportAreas: Photo[] = [
  {
    src: cleanroomBagging.url,
    title: "Vacuum bagging",
    caption:
      "Assemblies bagged and sealed for the de-air and autoclave cycle — the step that determines optical and bond quality.",
  },
  {
    src: materialBay.url,
    title: "Material receiving and transfer bay",
    caption:
      "Controlled transfer bay used for glass handling, incoming material staging, and outbound crating.",
  },
];

const PhotoGrid = ({ photos }: { photos: Photo[] }) => (
  <div className="grid md:grid-cols-2 gap-px bg-border mt-8">
    {photos.map((p) => (
      <figure
        key={p.title}
        className={`bg-background ${p.wide ? "md:col-span-2" : ""}`}
      >
        <img
          src={p.src}
          alt={`${p.title} — Hotlineglass USA facility`}
          loading="lazy"
          className={`w-full object-cover ${p.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
        />
        <figcaption className="p-6">
          <div className="font-display text-lg font-semibold text-primary">{p.title}</div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.caption}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);

const Facility = () => (
  <>
    <Seo
      title="Facility, Cleanroom Production & Thermal Testing — Hotlineglass USA (HLG)"
      description="Inside the HLG facility: cleanroom layup cells, automated dispense gantries, interlayer drum rooms, bus bar and lead attach benches, backlit inspection, controlled material handling, and in-house thermal testing of engineered heater designs."
      path="/facility"
      schema={orgSchema}
    />
    <PageHero
      eyebrow="Facility"
      title="Cleanroom production, drum rooms, and in-house thermal testing"
      subtitle="HLG builds conductive interlayers, heater mats, sensor mats, and bus bar assemblies inside a controlled production envelope — and thermally validates each engineered design on the bench before a program moves forward."
    />

    <Section>
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <img
            src={facilityExterior.url}
            alt="Hotlineglass USA production facility exterior"
            className="w-full aspect-[16/9] object-cover border border-border"
          />
        </div>
        <div className="lg:col-span-5">
          <Eyebrow>The Building</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mt-3">
            One site for development, layup, and production.
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Development work, tooling, layup, termination, and inspection all happen in the same
              building — so a prototype and a production run follow the same process, on the same
              equipment, with the same people.
            </p>
            <p>
              Production is organized into dedicated build cells so separate customer programs run in
              parallel without cross-contamination of materials or documentation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border mt-8">
            {[
              ["Cleanroom envelope", "Gowned build cells"],
              ["Drum rooms", "Temp / humidity controlled"],
              ["Dispense gantries", "Programmed wire paths"],
              ["Traceability", "Lot-number tracking"],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-5">
                <div className="mono text-[11px] uppercase tracking-wide text-primary">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <img
            src={thermalTest.url}
            alt="Laminated heater mat instrumented with thermocouples for in-house thermal testing"
            loading="lazy"
            className="w-full aspect-[3/2] object-cover border border-border"
          />
        </div>
        <div className="lg:col-span-5">
          <Eyebrow>In-House Thermal Testing</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mt-3">
            Each engineered design is thermally validated on the bench.
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every heater mat, wiper park, camera zone, and heated glass concept is instrumented with
              surface thermocouples across the active area, powered at the intended operating voltage,
              and logged over time to observe warm-up rate, steady-state temperature, and zone-to-zone
              distribution.
            </p>
            <p>
              Multi-channel logging and timed runs let us compare zones against each other and against a
              previous build, so wire pitch, bus bar placement, and termination changes can be evaluated
              on real assemblies before a program moves into qualification or production.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border mt-8">
            {[
              ["Instrumentation", "Multi-channel surface thermocouples"],
              ["Power-up", "Operating-voltage bench supply"],
              ["Logged", "Warm-up, steady state, and uniformity"],
              ["Compared", "Zone-to-zone and build-to-build"],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-5">
                <div className="mono text-[11px] uppercase tracking-wide text-primary">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Production Floor</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mt-3">
          Gowned build cells and automated dispense.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Wire and bead placement is driven by programmed gantry paths so pattern geometry, pitch, and
          routing repeat run to run rather than depending on hand layout.
        </p>
      </div>
      <PhotoGrid photos={productionFloor} />
    </Section>

    <Section>
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <img
            src={teamEntrance.url}
            alt="The Hotlineglass USA production and engineering team"
            loading="lazy"
            className="w-full aspect-[16/9] object-cover border border-border"
          />
        </div>
        <div className="lg:col-span-5">
          <Eyebrow>The Team</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mt-3">
            The people who build the parts.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Production and engineering work side by side at the Hotlineglass USA facility. The same team
            that develops a pattern or termination approach is the team that runs it in production.
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className="panel p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl md:text-3xl font-bold">Want to walk through a build?</div>
          <p className="text-muted-foreground mt-2">
            We can review process flow, tolerances, and qualification path for your program.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
        >
          Contact HLG <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </>
);

export default Facility;
