import automotiveWindshield from "@/assets/automotive-windshield-clean.jpg";

export default function AutomotiveFeatureMap({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative">
        <img
          src={automotiveWindshield}
          alt="Automotive windshield"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}


