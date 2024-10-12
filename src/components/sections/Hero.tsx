import Image from "next/image";

const Hero: React.FC = () => {
  const whatsappNumber = '+256754888626';
  const message = 'Hello, I got this number from DreamWise web site...';

  return (
    <div className="container mx-auto px-6 lg:px-20 md:px-15 flex flex-col md:grid md:grid-cols-2 pt-10 pb-16 justify-center items-center relative gap-20 mt-10 sm:mt-10 md:mt-0">
      <div className="relative lg:max-w-[25rem] max-w-[23rem] order-2 md:order-1">
        <small className="absolute z-10 lg:-top-[-8.8rem] md:top-[1rem] top-4 md:-right-[3rem] -right-12 lg:px-1 lg:-right-[3.5rem] transform rotate-sm lg:rotate-[315deg] rounded-full px-1 font-Figtree font-medium text-dream-black bg-dream-state-bg border-2 border-dream-state inline-flex items-center">
          <Image alt="usa" src="/svg/usa.svg" width={32} height={32} className="lg:mr-1 lg:py-1" />
          United States
        </small>

        <div className="mt-12 lg:mt-[10rem] text-center lg:text-left">
          <h1 className="font-Figtree text-dream-black font-bold text-md lg:text-lg md:text-md sm:text-sm whitespace-nowrap lg:py-4">
            Start your journey
          </h1>

          {/* Canada Small Tag */}
          <small className="absolute lg:top-[14.5rem] md:top-[9.2rem]  top-[8.5rem] md:right-[1.4rem] lg:-right-[4rem] right-2 transform lg:rotate-[17deg] rotate-[30deg] rounded-full font-Figtree font-medium text-dream-black bg-dream-canada-bg border-2 border-dream-canada inline-flex items-center pr-2">
            <Image alt="canada" src="/svg/canada.svg" width={32} height={32} className="mr-1 lg:py-1" />
            Canada
          </small>

          {/* Adjusting spacing between the headers */}
            <h1 className=" font-Figtree font-bold text-dream-black text-md lg:text-lg mb-4 lg:mb-2 md:mt-4 mt-1 transform -translate-y-3 whitespace-nowrap bg-no-repeat w-full">
              to study abroad.
            </h1>

          {/* Rotated Small Tag for United Kingdom */}
          <small className="absolute lg:top-[20.23rem] md:top-[9.4rem] top-[8.5rem] md:right-[9.5rem] lg:-right-[1rem] right-32 transform rotate-[-20deg] sm:rotate-[-25deg] rounded-full lg:px-1 font-Figtree sm:font-small font-medium text-dream-black bg-dream-uk-bg border-2 border-dream-uk inline-flex items-center pr-2">
            <Image alt="uk" src="/svg/uk.svg" width={32} height={32} className="mr-1 lg:py-1" />
            UnitedKingdom
          </small>

          {/* Contact Us Button */}
          <div className="flex justify-center lg:justify-start sm:justify-center md:justify-start">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center md:ml-[5rem] md:mt-[4rem] mt-[6rem] lg:ml-[0rem] py-3 px-5 mt-18 sm:text-center border-dream-btn-bg bg-gradient-to-b from-custom-gradient-top to-custom-gradient-bottom border-2 text-dream-black font-Figtree hover:bg-green-200 rounded-custom-sm">
                <Image
                  src="/svg/vector.svg"
                  alt="Are you eligible"
                  width={26}
                  height={26}
                  className="mr-2"
                />
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section with Images */}
      <div className="relative flex flex-col justify-center items-center mb-5 lg:mt-40 md:mt-[9rem] bg-[url('/svg/herobg.svg')] bg-no-repeat bg-contain order-1 md:order-2">
        <div className="flex justify-center gap-8 lg:gap-16 items-center mb-10">
          <Image
            src="/svg/graduant.svg"
            alt="Graduate"
            width={70}
            height={70}
            className="mt-[-5rem] lg:mr-[3rem] md:mr-[1rem] sm:mr-[-2rem]"
          />
          <Image src="/svg/cat.svg" alt="Cat Icon" width={135} height={147} className="mt-[-5rem]" />
          <Image src="/svg/graduant1.svg" alt="Graduate 1" width={62} height={62} />
        </div>

        <div className="flex justify-center items-center mb-10">
          <Image src="/svg/graduant2.svg" alt="Graduate 2" width={155} height={155} />
        </div>

        <Image
          src="/svg/graduant4.svg"
          alt="Graduate 3"
          width={108}
          height={107}
          className="lg:mr-[-23rem] md:mr-[-19rem] mt-[-3rem] mr-[-15rem]"
        />
        <Image
          src="/svg/graduant3.svg"
          alt="Graduate 4"
          width={90}
          height={90}
          className="mt-[-6rem] lg:mr-[20rem] md:mr-[15rem] ml-[-15rem] lg:ml-[-2rem] md:ml-[-2rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
