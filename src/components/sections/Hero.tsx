import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 lg:px-40 flex flex-col lg:grid grid-cols-2 pb-16 justify-center items-center relative">
      <div className="lg:max-w-[25rem] max-w-[23rem] relative lg:order-1 order-2">
        <small
          className="absolute -top-0 lg:-top-14 right-0 transform rounded-full px-3 py-1 font-Figtree font-medium text-dream-black bg-dream-state-bg border-2 border-dream-state inline-flex items-center"
          style={{ transform: 'rotate(320deg)' }}
        >
          <Image alt="usa" src="/svg/usa.svg" width={32} height={32} className="mr-2" />
          United States
        </small>

        <h1 className="font-Figtree mt-12 lg:mt-0 text-dream-black font-bold text-[1.25rem] lg:text-4xl flex flex-col text-center lg:text-left w-fit">
          Start your journey
          <div className="bg-[url('/svg/background.svg')] bg-no-repeat bg-left-top lg:bg-left mt-5">
            <span className="font-Figtree font-bold text-dream-black lg:text-4xl ml-5 mt-1">
              to study abroad.
            </span>
          </div>
        </h1>

        <div className="flex justify-center mt-8 lg:mt-8">
          <button className="flex items-center py-2 px-6 bg-bg-custom-gradient border-green-600 bg-dream-bg-green border-2 text-dream-black font-Figtree rounded-md hover:bg-green-200">
            <Image
              src="/svg/vector.svg"
              alt="Are you eligible"
              width={32}
              height={32}
              className="mr-2 rounded-md sm:rounded-sm"
            />
            Contact Us
          </button>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center mt-10 lg:mt-20 bg-[url('/svg/herobg.svg')] bg-no-repeat bg-cover lg:order-2 order-1">
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
}
