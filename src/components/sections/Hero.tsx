import Image from "next/image";

const Hero: React.FC = () => {
  const whatsappNumber = '+256754888626';
  const message = 'Hello, I got this number from DreamWise web site...'; 

  return (
    <div className="container mx-auto px-6 lg:px-20 md:px-15 flex flex-col md:grid md:grid-cols-2 pt-10 pb-16 justify-center items-center relative gap-20"> 
      <div className="relative lg:max-w-[25rem] max-w-[23rem] order-2 md:order-1">
        <small className="absolute z-10 lg:-top-7 md:top-[2rem] top-6 md:-right-15 -right-12 lg:-right-16 transform rotate-sm lg:rotate-[310deg] rounded-full px-1 font-Figtree font-medium text-dream-black bg-dream-state-bg border-2 border-dream-state inline-flex items-center">
          <Image alt="usa" src="/svg/usa.svg" width={32} height={32} className="mr-1 px-1" />
          United States
        </small>

        <div className="mt-12 lg:mt-0 text-center lg:text-left">
          <h1 className="font-Figtree text-dream-black font-bold text-md lg:text-lg sm:text-lg whitespace-nowrap ">
            Start your journey
          </h1>

          {/* Canada Small Tag */}
          <small className="absolute lg:top-[3.4rem] md:top-[10.45rem] top-36 md:right-[3.4rem] lg:-right-[3.4rem] right-2 transform lg:rotate-[17deg] rotate-[30deg] rounded-full font-Figtree font-medium text-dream-black bg-dream-canada-bg border-2 border-dream-canada inline-flex items-center">
            <Image alt="canada" src="/svg/canada.svg" width={32} height={32} className="px-1" />
            Canada
          </small>

          {/* Second h1 with reduced margin */}
          <h1 className="bg-[url('/svg/background.svg')] bg-no-repeat bg-left-top lg:bg-left font-Figtree font-bold text-dream-black text-md lg:text-lg mb-28 lg:mb-2">
            to study abroad.
          </h1>

          {/* Rotated Small Tag for United Kingdom */}
          <small className="absolute lg:top-[7.7rem] md:top-[10.6rem] top-36 md:right-[11rem] lg:-right-6 right-32 transform rotate-[-20deg] rounded-full lg:px-1 font-Figtree font-medium text-dream-black bg-dream-uk-bg border-2 border-dream-uk inline-flex items-center">
            <Image alt="uk" src="/svg/uk.svg" width={32} height={32} className="px-1" />
            United Kingdom
          </small>

          {/* Contact Us Button */}
          <div className="flex justify-center lg:justify-start sm:justify-center md:justify-start">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="flex items-center py-3 px-5 mt-18 sm:text-center bg-bg-custom-gradient border-green-600 bg-dream-bg-green border-2 text-dream-black font-Figtree rounded-md hover:bg-green-200">
                    <Image
                        src="/svg/vector.svg"
                        alt="Are you eligible"
                        width={32}
                        height={32}
                        className="mr-2 rounded-md"
                    />
                    Contact Us
                </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section with Images */}
      <div className="relative flex flex-col justify-center items-center mb-5 lg:mt-20  bg-[url('/svg/herobg.svg')] bg-no-repeat bg-cover order-1 md:order-2">
        <div className="flex justify-center gap-8 lg:gap-16 items-center mb-10">
          <Image src="/svg/graduant.svg" alt="Graduate" width={70} height={70} />
          <Image src="/svg/cat.svg" alt="Cat Icon" width={135} height={147} />
          <Image src="/svg/graduant1.svg" alt="Graduate 1" width={62} height={62} />
        </div>

        <div className="flex justify-center items-center mb-10">
          <Image src="/svg/graduant2.svg" alt="Graduate 2" width={155} height={155} />
        </div>

        <div className="flex justify-center gap-12 lg:gap-16 items-center sm:gap-12 lg:space-x-16 mt-5">
          <Image src="/svg/graduant3.svg" alt="Graduate 3" width={90} height={90} />
          <Image src="/svg/graduant4.svg" alt="Graduate 4" width={108} height={108} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
