import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenortherapyLogo from "@/assets/logos/tenortherapy_logo.png";
import webdoxLogo from "@/assets/logos/webdox_logo.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs", invertBg: false },
  { src: tenortherapyLogo, alt: "Tenor Therapy", invertBg: true },
  { src: webdoxLogo, alt: "Webdox", invertBg: true },
  { src: samsaraLogo, alt: "Samsara", invertBg: false },
];

const SocialProof = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-6 md:h-8 max-w-[120px] md:max-w-[140px] w-auto object-contain transition-all duration-300 opacity-50 hover:opacity-80"
          style={{
            filter: logo.invertBg 
              ? "grayscale(100%) invert(1) brightness(2)" 
              : "grayscale(100%) brightness(0) invert(1)",
            mixBlendMode: "lighten",
          }}
        />
      ))}
    </div>
  );
};

export default SocialProof;
