import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenorLogo from "@/assets/logos/tenor_dark.png";
import webdoxLogo from "@/assets/logos/webdox_logo.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs", filter: "standard" },
  { src: tenorLogo, alt: "Tenor", filter: "darkBg", bigger: true },
  { src: webdoxLogo, alt: "Webdox", filter: "darkBg", bigger: true },
  { src: samsaraLogo, alt: "Samsara", filter: "standard" },
];

const getFilterStyle = (filter: string) => {
  switch (filter) {
    case "lightBg":
      // Light background with dark content - use multiply to hide light bg
      return {
        filter: "grayscale(100%) contrast(0.8)",
        mixBlendMode: "multiply" as const,
        opacity: 0.7,
      };
    case "darkBg":
      // Dark background with light/colored content - just brighten, lighten blends dark away
      return {
        filter: "grayscale(100%) brightness(1.5)",
        mixBlendMode: "lighten" as const,
        opacity: 0.6,
      };
    default:
      // Standard - invert to make content white, lighten blends white bg away
      return {
        filter: "grayscale(100%) brightness(0) invert(1)",
        mixBlendMode: "lighten" as const,
        opacity: 0.6,
      };
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
            className={`${logo.bigger ? 'h-8 md:h-10' : 'h-6 md:h-8'} max-w-[120px] md:max-w-[160px] w-auto object-contain transition-all duration-300 hover:opacity-90`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default SocialProof;
