import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenorLogo from "@/assets/logos/tenortherapy_logo.png";
import webdoxLogo from "@/assets/logos/webdox_logo.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs", lightBg: false },
  { src: tenorLogo, alt: "Tenor", lightBg: true, bigger: true },
  { src: webdoxLogo, alt: "Webdox", lightBg: true },
  { src: samsaraLogo, alt: "Samsara", lightBg: false },
];

const SocialProof = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className={`${logo.bigger ? 'h-8 md:h-10' : 'h-6 md:h-8'} max-w-[120px] md:max-w-[160px] w-auto object-contain transition-all duration-300 hover:opacity-90`}
          style={logo.lightBg ? {
            filter: "grayscale(100%) contrast(0.8)",
            mixBlendMode: "multiply",
            opacity: 0.7,
          } : {
            filter: "grayscale(100%) brightness(0) invert(1)",
            mixBlendMode: "lighten",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default SocialProof;
