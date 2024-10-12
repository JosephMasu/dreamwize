import Image from "next/image";

const HowToApply: React.FC = () => {
  return (
    <div className="relative overflow-visible lg:rounded-custom-lg md:rounded-custom-md rounded-custom-sm container mx-auto px-6 lg:px-20">
      {/* Background Image Wrapper */}
      <div className="relative bg-dream-bg bg-no-repeat bg-cover lg:rounded-custom-lg md:rounded-custom-md rounded-custom-sm h-full lg:h-[32rem] md:h-[24rem]">
        <div className="absolute inset-0 bg-dream-bg bg-no-repeat bg-cover lg:rounded-custom-lg md:rounded-custom-md rounded-custom-sm"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col lg:mt-10 lg:pl-12 p-6 md:p-8">
            <h2 className="bg-[url('/svg/studybg.svg')] bg-no-repeat font-Figtree font-bold text-dream-black text-2xl lg:text-4xl mb-6">
              Study Options
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-custom-ssm py-2 w-[44px] h-[44px] flex items-center justify-center p-2">
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
                <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-custom-ssm py-2 w-[44px] h-[44px] flex items-center justify-center p-2">
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
                <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-custom-ssm py-2 w-[44px] h-[44px] flex items-center justify-center p-2">
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
                <div className="div-bg mr-4 border-dream-green bg-dream-bg-green border-2 rounded-custom-ssm py-2 w-[44px] h-[44px] flex items-center justify-center p-2">
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

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-13 lg:mb-0 relative xl:-mt-[8rem] overflow-visible z-10">
            <div className="rounded-xl md:mt-[-6rem] lg:mt-[3rem] lg:mb-[3rem] flex justify-center items-center relative overflow-visible">
              <Image
                src="/svg/options.svg"
                alt="Graduant"
                width={549}
                height={755}
                className="rounded-xl object-contain p-4 md:p-0 md:-mb-[4rem] lg:-mt-[10.5rem] md:-mt-[-0.5rem] overflow-visible"
              />
              <small className="absolute whitespace-nowrap z-10 xl:-top-[-12.5rem] lg:-top-[-6.5rem]  xl:right-[20.5rem] lg:right-[17.5rem]  md:-top-[-9.5rem] -top-[-11rem] right-[13rem] md:right-[13.5rem] transform rotate-sm lg:rotate-[345deg] md:rotate-[350deg] rounded-full px-1 font-Figtree font-medium text-dream-di bg-dream-di-bg border-2 border-dream-di inline-flex items-center">
                <Image
                  alt="usa"
                  src="/svg/dip.svg"
                  width={32}
                  height={32}
                  className="lg:px-1 lg:py-2"
                />
                Diploma Degree
              </small>
              <small className="absolute z-10 lg:-top-[-10rem] xl:right-[18rem] xl:-top-[-16rem] lg:right-[14rem]  md:top-[15.5rem] top-[15rem] right-[11rem] md:right-[11rem] transform rotate lg:rotate-[360deg] md:rotate-[360deg] sm:rotate-[300deg] rounded-full px-1 lg:py-1 font-Figtree font-medium text-dream-hi bg-dream-hi-bg border-2 border-dream-hi inline-flex items-center">
                <Image
                  alt="usa"
                  src="/svg/highschool.svg"
                  width={32}
                  height={32}
                  className="lg:px-1"
                />
                High School
              </small>
              <small className="absolute z-10 xl:right-[7rem] xl:-top-[-16rem] lg:-top-[-10rem] lg:right-[5rem] top-[15rem] right-8  transform rotate lg:rotate-[30deg] rotate-[30deg] rounded-full px-1 font-Figtree font-medium text-dream-ma bg-dream-ma-bg border-2 border-dream-ma inline-flex items-center">
                <Image
                  alt="usa"
                  src="/svg/mas.svg"
                  width={32}
                  height={32}
                  className="mr-1 lg:py-2 sm:px-1"
                />
                Masters Degree
              </small>
              <small className="absolute z-10 xl:right-[6.5rem] xl:top-[5.1rem] lg:right-[3.5rem] lg:top-[1.1rem]  md:top-[6.3rem] top-[8rem] right-5 transform rotate-sm lg:rotate-[-25deg] rounded-full px-1 font-Figtree font-medium text-dream-ba bg-dream-ba-bg border-2 border-dream-ba inline-flex items-center">
                <Image
                  alt="usa"
                  src="/svg/ba.svg"
                  width={32}
                  height={32}
                  className="mr-1 lg:py-1"
                />
                Bachelors Degree
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
