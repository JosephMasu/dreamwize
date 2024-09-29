import Image from "next/image";

const HowToApply: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-dream-bg sm:rounded-sm md:rounded-md lg:px-30 items-start justify-between container mx-auto px-6 py-8 lg:py-20">
      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12 relative py-10">
        <h2 className="bg-[url('/svg/background.svg')] font-Figtree font-bold text-dream-black text-2xl lg:text-4xl mb-6 ">
          Study Options
        </h2>

        <ul className="space-y-6">
          <li className="flex items-start">
            <Image
              src="/svg/highschool.svg"
              alt="Are you eligible"
              width={32}
              height={32}
              className="mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2"
            />
            <div>
              <strong className="text-dream-black font-Figtree font-semibold">
                High School
                <br />
                <span className="text-dream-gray font-light">(I)GCSE, A-Levels, IB</span>
              </strong>
            </div>
          </li>

          <li className="flex items-start">
            <Image
              src="/svg/foundation.svg"
              alt="Cheaper application fees"
              width={32}
              height={32}
              className="mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2"
            />
            <div>
              <strong className="text-dream-black font-Figtree font-semibold">
                Foundation
                <br />
                <span className="text-dream-gray font-light">University Preparation</span>
              </strong>
            </div>
          </li>

          <li className="flex items-start">
            <Image
              src="/svg/undergraduate.svg"
              alt="Faster applications"
              width={32}
              height={32}
              className="mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2"
            />
            <div>
              <strong className="text-dream-black font-Figtree font-semibold">
                Undergraduate
                <br />
                <span className="text-dream-gray font-light">Bachelors Degree</span>
              </strong>
            </div>
          </li>
          
          <li className="flex items-start">
            <Image
              src="/svg/masters.svg"
              alt="Faster applications"
              width={32}
              height={32}
              className="mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2"
            />
            <div>
              <strong className="text-dream-black font-Figtree font-semibold">
                Graduate
                <br />
                <span className="text-dream-gray font-light">Pre-Masters & Masters</span>
              </strong>
            </div>
          </li>
        </ul>
      </div>

      {/* Image on the Right */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
        <div className="rounded-xl p-6 flex justify-center items-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-contain -z-10 h-auto"
            // style={{ backgroundImage: `url('/svg/findprogram.svg')`, backgroundPosition: "center" }} // Update with the path to your SVG
          />
          <Image
            src="/svg/options.svg"
            alt="Graduant"
            width={400} // Increased width for larger SVG
            height={474} // Increased height for larger SVG
            className="rounded-xl object-contain p-4 max-w-full h-auto" // Added padding class
          />
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
