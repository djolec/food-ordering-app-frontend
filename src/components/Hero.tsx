import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        className="w-full max-h-[600px] object-cover"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default Hero;
