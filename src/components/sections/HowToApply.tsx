import Image from "next/image";

const HowToApply: React.FC = () => {
  return (
    <div className="relative overflow-visible bg-dream-bg lg:rounded-custom-lg md:rounded-custom-md rounded-custom-sm bg-no-repeat bg-cover md:flex md:flex-col-2 lg:flex-row items-start justify-between container mx-auto px-6 lg:px-20 lg:h-[28rem] md:h-[21rem]">
      {/* Overlay for better visibility */}

      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12 relative z-10 md:order-1"> {/* Added md:order-1 here */}
        <h2 className="font-Figtree font-bold text-dream-black text-2xl lg:text-4xl mb-6">
          Study Options
        </h2>

        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2 w-[44px] h-[44px] flex items-center justify-center">
              <Image
                src="/svg/highschool.svg"
                alt="Are you eligible"
                width={32}
                height={32}
              />
            </div>
            <div>
              <strong className="text-dream-black font-Figtree font-semi-bold">
                High School
                <br />
                <span className="text-dream-gray font-light">
                  (I)GCSE, A-Levels, IB
                </span>
              </strong>
            </div>
          </li>

          <li className="flex items-start">
            <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2 w-[44px] h-[44px] flex items-center justify-center">
              <Image
                src="/svg/foundation.svg"
                alt="Cheaper application fees"
                width={32}
                height={32}
              />
            </div>
            <div>
              <strong className="text-dream-black font-Figtree font-semi-bold">
                Foundation
                <br />
                <span className="text-dream-gray font-light">
                  University Preparation
                </span>
              </strong>
            </div>
          </li>

          <li className="flex items-start">
            <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2 w-[44px] h-[44px] flex items-center justify-center">
              <Image
                src="/svg/undergraduate.svg"
                alt="Faster applications"
                width={32}
                height={32}
              />
            </div>
            <div>
              <strong className="text-dream-black font-Figtree font-semi-bold">
                Undergraduate
                <br />
                <span className="text-dream-gray font-light">
                  Bachelors Degree
                </span>
              </strong>
            </div>
          </li>

          <li className="flex items-start">
            <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2 w-[44px] h-[44px] flex items-center justify-center">
              <Image
                src="/svg/masters.svg"
                alt="Faster applications"
                width={32}
                height={32}
              />
            </div>
            <div>
              <strong className="text-dream-black font-Figtree font-semi-bold">
                Graduate
                <br />
                <span className="text-dream-gray font-light">
                  Pre-Masters & Masters
                </span>
              </strong>
            </div>
          </li>
        </ul>
      </div>

      {/* Image on the Right */}
      <div className="w-full lg:w-1/2 flex justify-center mb-13 lg:mb-0 relative overflow-visible z-10 md:order-2"> {/* Keeping md:order-2 here */}
        <div className="rounded-xl md:mt-[-6rem] lg:mt-[3rem] flex justify-center items-center relative overflow-visible">
          <Image
            src="/svg/options.svg"
            alt="Graduant"
            width={549}
            height={755}
            className="rounded-xl object-contain p-4 lg:-mt-[20.5rem] md:-mt-[3rem] overflow-visible"
          />
          <small className="absolute z-10 lg:-top-[-2.5rem] md:-top-[-9.5rem] top-[10rem] right-[13rem] lg:right-[22rem] md:right-[13.5rem] transform rotate-sm lg:rotate-[345deg] md:rotate-[340deg] rounded-full px-1 font-Figtree font-medium text-dream-di bg-dream-di-bg border-2 border-dream-di inline-flex items-center">
            <Image alt="usa" src="/svg/dip.svg" width={32} height={32} className="mr-1 px-1 sm:px-1" />
            Diploma
          </small>
          <small className="absolute z-10 lg:top-[6rem] md:top-[13.5rem] top-[15rem] right-[11rem] lg:right-[17.3rem] md:right-[11rem] transform rotate lg:rotate-[360deg] md:rotate-[360deg] sm:rotate-[300deg] rounded-full px-1 font-Figtree font-medium text-dream-hi bg-dream-hi-bg border-2 border-dream-hi inline-flex items-center">
            <Image alt="usa" src="/svg/highschool.svg" width={32} height={32} className="mr-1 sm:px-1 px-1" />
            High School
          </small>
          <small className="absolute z-10 lg:top-[6.4rem] top-[15rem] right-8 lg:right-[7.5rem] transform rotate lg:rotate-[30deg] rotate-[30deg] rounded-full px-1 font-Figtree font-medium text-dream-ma bg-dream-ma-bg border-2 border-dream-ma inline-flex items-center">
            <Image alt="usa" src="/svg/mas.svg" width={32} height={32} className="mr-1 px-1 sm:px-1" />
            Masters Degree
          </small>
          <small className="absolute z-10 lg:top-[-4.1rem] md:top-[6.3rem] top-[8rem] right-5 lg:right-[6.7rem] transform rotate-sm lg:rotate-[-25deg] rounded-full px-1 font-Figtree font-medium text-dream-ba bg-dream-ba-bg border-2 border-dream-ba inline-flex items-center">
            <Image alt="usa" src="/svg/ba.svg" width={32} height={32} className="mr-1 px-1" />
            Bachelors Degree
          </small>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
