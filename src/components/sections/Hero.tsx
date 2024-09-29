import Image from "next/image";

// interface HeroProps {
//   // Add any necessary props here if needed
// }

const Hero: React.FC = ({}) => {
  return (
    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:grid grid-cols-2 pt-10 pb-16 justify-center items-center relative">
      {/* Left Section */}
      <div className="relative lg:max-w-[25rem] max-w-[23rem] lg:order-1 order-2">
        {/* Rotated Small Tag for United States */}
        <small
          className="absolute z-10 lg:-top-7 top-6 -right-12 lg:-right-16 transform rotate-sm lg:rotate-[318deg] rounded-full px-1 font-Figtree font-medium text-dream-black bg-dream-state-bg border-2 border-dream-state inline-flex items-center"
        >
          <Image alt="usa" src="/svg/usa.svg" width={32} height={32} className="mr-1 px-1" />
          United States
        </small>

        {/* Container to align both h1s and button */}
        <div className="mt-12 lg:mt-0 text-center lg:text-left">
          {/* First h1 */}
          <h1 className="font-Figtree text-dream-black font-bold text-md lg:text-lg sm:text-lg whitespace-nowrap">
            Start your journey
          </h1>

          {/* Canada Small Tag */}
          <small
            className="absolute lg:top-14 top-36 lg:-right-16 right-2 transform lg:rotate-[10deg] rotate-[30deg] rounded-full font-Figtree font-medium text-dream-black bg-dream-canada-bg border-2 border-dream-canada inline-flex items-center"
          >
            <Image alt="canada" src="/svg/canada.svg" width={32} height={32} className="px-1" />
            Canada
          </small>

          {/* Second h1 with reduced margin */}
          <h1 className="bg-[url('/svg/background.svg')] bg-no-repeat bg-left-top lg:bg-left font-Figtree font-bold text-dream-black text-md lg:text-lg mb-28 lg:mb-2">
            to study abroad.
          </h1>

          {/* Rotated Small Tag for United Kingdom */}
          <small
            className="absolute lg:top-32 top-36 lg:-right-6 right-32 transform rotate-[-20deg] rounded-full lg:px-1 font-Figtree font-medium text-dream-black bg-dream-uk-bg border-2 border-dream-uk inline-flex items-center"
          >
            <Image alt="uk" src="/svg/uk.svg" width={32} height={32} className="px-1"/>
            United Kingdom
          </small>

          {/* Contact Us Button */}
          <div className="flex justify-center sm:justify-start">
  <button className="flex items-center py-3 px-5 mt-8 sm:mt-30 sm:text-center bg-bg-custom-gradient border-green-600 bg-dream-bg-green border-2 text-dream-black font-Figtree rounded-md hover:bg-green-200">
    <Image
      src="/svg/vector.svg"
      alt="Are you eligible"
      width={32}
      height={32}
      className="mr-2 rounded-md borderRadius"
    />
    Contact Us
  </button>
</div>
        </div>
      </div>

      {/* Right Section with Images */}
      <div className="relative flex flex-col justify-center items-center mb-5 lg:mt-20 bg-[url('/svg/herobg.svg')] bg-no-repeat bg-cover lg:order-2 order-1">
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