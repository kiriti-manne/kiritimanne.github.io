import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenorLogo from "@/assets/logos/tenor_transparent.png";
import webdoxLogo from "@/assets/logos/webdox_transparent.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs", filter: "standard" },
  { src: tenorLogo, alt: "Tenor", filter: "standard", size: "large" },
  { src: webdoxLogo, alt: "Webdox", filter: "standard", size: "medium" },
  { src: samsaraLogo, alt: "Samsara", filter: "standard" },
];

const getFilterStyle = (filter: string) => {
  switch (filter) {
    case "lightBg":
      return {
        filter: "grayscale(100%) contrast(0.8)",
        mixBlendMode: "multiply" as const,
        opacity: 0.7,
      };
    case "darkBg":
      return {
        filter: "grayscale(100%) brightness(1.5)",
        mixBlendMode: "lighten" as const,
        opacity: 0.6,
      };
    default:
      return {
        filter: "grayscale(100%) brightness(0) invert(1)",
        mixBlendMode: "lighten" as const,
        opacity: 0.6,
      };
  }
};

const getSizeClasses = (size?: string) => {
  switch (size) {
    case "large":
      return "h-10 md:h-14 max-w-[200px] md:max-w-[240px]";
    case "medium":
      return "h-8 md:h-11 max-w-[160px] md:max-w-[200px]";
    default:
      return "h-6 md:h-8 max-w-[140px] md:max-w-[180px]";
  }
};

const SocialProof = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map((logo) => {
        const style = getFilterStyle(logo.filter);
        return (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`${getSizeClasses(logo.size)} w-auto object-contain transition-all duration-300 hover:opacity-90`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default SocialProof;
