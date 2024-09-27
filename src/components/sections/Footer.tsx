import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full h-[300px] flex items-center justify-center mt-20"
      style={{
        backgroundImage: "url('/svg/footer.svg'), linear-gradient(180deg, #FFFFFF 0%, #D7FF7B 100%)",
        backgroundSize: "95%, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-1 transform -translate-y-1/2 md:top-2 lg:top-3">
        <Image
          src="/svg/cat.svg"
          alt="Graduation Cap"
          width={300}
          height={200}
          className="object-contain mt-6 md:mt-10 lg:mt-12"
        />
      </div>
    </footer>
  );
};

export default Footer;
