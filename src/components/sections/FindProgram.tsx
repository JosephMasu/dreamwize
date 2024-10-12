import Image from "next/image";

const FindProgram: React.FC = () => {
  return (
    <div className="md:flex md:flex-col-2 lg:flex-row items-start justify-between container mx-auto px-6 lg:px-20 gap-20 ">
      <div className="w-auto flex justify-center md:mb-10 -mb-[4rem] lg:mb-[7rem] relative">      
        <div className="rounded-xl p-10 flex justify-center items-center relative md:mt-[5rem]">
          <div 
            className="absolute inset-0 bg-no-repeat bg-contain -z-10 h-full" 
            style={{ backgroundImage: `url('/svg/findprogram.svg')`, backgroundPosition: "center" }}
          />
          <Image
            src="/svg/student.svg" 
            alt="Graduant"
            width={410}  
            height={474} 
            className="rounded-xl object-contain mb-16 lg:-mt-[7rem] md:mb-[1rem] sm:mt-[-0.5rem]" 
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12 relative lg:py-10 mb-16"> 
        <h2 className="bg-[url('/svg/stepsbg.svg')] font-Figtree font-bold text-dream-black text-2xl px-2 py-2 lg:text-4xl mb-6 whitespace-nowrap bg-no-repeat md:mt-12 ">
          Applying should be faster
        </h2>

        <ul className="space-y-9">
          {[
            {
              src: "/svg/questionmark.svg",
              alt: "Are you eligible",
              title: "Are you eligible",
              description: (
                <>
                  We make sure you’ve got everything <br /> you need to apply
                </>
              ),
            },
            {
              src: "/svg/cheaper.svg",
              alt: "Cheaper application fees",
              title: "Cheaper application fees",
              description: (
                <>
                  You can often get a discount <br /> when you apply with us
                </>
              ),
            },
            {
              src: "/svg/faster.svg",
              alt: "Faster applications",
              title: "Faster applications",
              description: (
                <>
                  Apply to multiple universities <br /> and get started
                </>
              ),
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="p-2 bg-dream-bg-green border-dream-green border-2 rounded-custom-ssm flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="ml-4">
                <strong className="text-dream-black font-Figtree font-semi-bold">
                  {item.title}{" "}
                  <span className="text-dream-gray font-light">
                    - {item.description}
                  </span>
                </strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindProgram;
