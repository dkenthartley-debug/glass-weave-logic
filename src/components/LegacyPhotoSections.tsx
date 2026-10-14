import Figure from "@/components/Figure";
import { Section, SectionHeading } from "@/components/Section";
import {
  antennaPhotos, airportTugPhoto, dualAntennaPhoto, heaterDetails,
  railEvaluationPhotos, railPhotos, straightHeaterPhotos,
  wiggleHeaterPhoto, wiggleScalePhoto, fullHeaterMatPhoto, wiperParkPhotos, zonedHeaterPhoto,
} from "@/data/legacyPhotos";

export const WiperParkPhotos = () => (
  <Section tone="gray" id="wiper-park">
    <SectionHeading eyebrow="Localized heating" title="Heated wiper-park areas" />
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <Figure photo={wiperParkPhotos[0]} fit="contain" aspect="aspect-[16/10]" />
      <div className="space-y-6">
        <Figure photo={wiperParkPhotos[1]} fit="contain" aspect="aspect-[16/10]" />
        <Figure photo={wiperParkPhotos[2]} fit="contain" aspect="aspect-[3/1]" />
      </div>
    </div>
  </Section>
);

export const HeaterPhotos = () => (
  <>
    <Section id="full-heater-mat">
      <SectionHeading eyebrow="Actual HLG heater mat" title="Complete windshield heater mat" />
      <Figure photo={fullHeaterMatPhoto} fit="contain" aspect="aspect-[16/9]" />
    </Section>
    <Section id="fine-wire-details">
      <SectionHeading eyebrow="Actual HLG construction" title="Fine-wire heating details" />
      <div className="grid md:grid-cols-12 gap-6 items-start">
        <Figure photo={heaterDetails[0]} fit="contain" aspect="aspect-[4/3]" className="md:col-span-6" />
        <Figure photo={heaterDetails[1]} fit="contain" aspect="aspect-[1/2]" className="md:col-span-2" />
        <Figure photo={heaterDetails[2]} fit="contain" aspect="aspect-square" className="md:col-span-4" />
      </div>
    </Section>
    <Section tone="gray">
      <SectionHeading eyebrow="Zoned windshield heating" title="Driver, passenger and wiper park" />
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <Figure photo={zonedHeaterPhoto} fit="contain" aspect="aspect-[16/10]" className="lg:col-span-7" />
        <div className="lg:col-span-5 border-l border-primary pl-6">
          <h3 className="font-display text-2xl font-semibold uppercase">One mat. Three heated areas.</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">This HLG mat combines two separate windshield heating zones—one for the driver and one for the passenger—with a heated wiper-park area. Five connectors provide the electrical interfaces for this construction.</p>
        </div>
      </div>
    </Section>
    <Section>
      <SectionHeading eyebrow="Conductor formats" title="Straight and sinusoidal fine wire" />
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <Figure photo={straightHeaterPhotos[0]} fit="contain" aspect="aspect-[4/3]" />
        <Figure photo={wiggleHeaterPhoto} fit="contain" aspect="aspect-[4/3]" />
        <Figure photo={straightHeaterPhotos[1]} fit="contain" aspect="aspect-[16/10]" />
        <Figure photo={straightHeaterPhotos[2]} fit="contain" aspect="aspect-[16/10]" />
        <Figure photo={wiggleScalePhoto} fit="contain" aspect="aspect-[4/3]" className="md:col-span-2 md:max-w-3xl" />
      </div>
    </Section>
    <WiperParkPhotos />
  </>
);

export const AntennaPhotos = () => (
  <Section id="antenna-applications">
    <SectionHeading eyebrow="Actual HLG antenna integration" title="From antenna mat to installed windshield" />
    <div className="grid md:grid-cols-12 gap-6 items-start">
      <Figure photo={antennaPhotos[0]} fit="contain" aspect="aspect-[4/3]" className="md:col-span-5" />
      <Figure photo={antennaPhotos[1]} fit="contain" aspect="aspect-[3/4]" className="md:col-span-3" />
      <Figure photo={antennaPhotos[2]} fit="contain" aspect="aspect-[4/3]" className="md:col-span-4" />
    </div>
    <div className="mt-8 max-w-3xl">
      <Figure photo={dualAntennaPhoto} fit="contain" aspect="aspect-[16/9]" />
    </div>
  </Section>
);

export const RailPhotos = () => (
  <Section>
    <SectionHeading eyebrow="HEAT + SENSE" title="Rail-window heating and temperature feedback" />
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {railPhotos.map((photo) => <Figure key={photo.src} photo={photo} fit="contain" aspect="aspect-[3/4]" />)}
    </div>
    <div className="grid md:grid-cols-2 gap-6 items-start mt-6">
      {railEvaluationPhotos.map((photo) => <Figure key={photo.src} photo={photo} fit="contain" aspect="aspect-[16/9]" />)}
    </div>
  </Section>
);

export const AirportTugPhoto = () => (
  <Section>
    <SectionHeading eyebrow="Off-road heating" title="Heated visibility for an airport tug" />
    <div className="max-w-4xl"><Figure photo={airportTugPhoto} fit="contain" aspect="aspect-[4/3]" /></div>
  </Section>
);