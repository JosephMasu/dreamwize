import Image from "next/image";
import React, { useState, useEffect, forwardRef } from "react";
const Footer = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((props, ref) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: "100%", 
    height: "auto",
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setImageDimensions({ width: "402px", height: "547px" });
      } else if (screenWidth >= 768) {
        setImageDimensions({ width: "200px", height: "auto" });
      } else if (screenWidth >= 640) {
        setImageDimensions({ width: "300px", height: "auto" });
      } else {
        setImageDimensions({ width: "100%", height: "auto" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      ref={ref}
      className="relative w-full md:h-[400px] h-[300px] flex items-center justify-center mt-20 md:mt-40"
      style={{
        backgroundImage: "url('/svg/footer.svg'), linear-gradient(180deg, #FFFFFF 0%, #D7FF7B 100%)",
        backgroundSize: "90%, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="transform -translate-y-1/2 mb-5 lg:-mb-[8rem]">
        <Image
          src="/svg/cat.svg"
          alt="Graduation Cap"
          width={502}
          height={547}
          style={{
            width: imageDimensions.width,
            height: imageDimensions.height,
            maxWidth: "100%",
          }}
        />
      </div>
    </footer>
  );
});

// Set the display name for the component
Footer.displayName = "Footer";

export default Footer;
