import Image from "next/image";

const FindProgram: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between container mx-auto px-6 lg:px-40">
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative">
        <div className="rounded-xl p-6 flex justify-center items-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-no-repeat bg-contain -z-10 h-full" 
            style={{ backgroundImage: `url('/svg/findprogram.svg')`, backgroundPosition: "center" }}
          />
          <Image
            src="/svg/student.svg" 
            alt="Graduant"
            width={300}  
            height={354} 
            className="rounded-xl object-contain py-4" 
          />
          
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12 relative lg:py-10"> 
        
        <h2 className="bg-[url('/svg/stepsbg.svg')] font-Figtree font-bold text-dream-black text-2xl px-2 py-2 lg:text-4xl mb-6">
          Applying should be faster
        </h2>

        <ul className="space-y-9">
          {[
            {
              src: "/svg/questionmark.svg",
              alt: "Are you eligible",
              title: "Are you eligible",
              description: "We make sure you’ve got everything you need to apply",
            },
            {
              src: "/svg/cheaper.svg",
              alt: "Cheaper application fees",
              title: "Cheaper application fees",
              description: "You can often get a discount when you apply with us",
            },
            {
              src: "/svg/faster.svg",
              alt: "Faster applications",
              title: "Faster applications",
              description: "Apply to multiple universities and get started",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Image
                src={item.src}
                alt={item.alt}
                width={32}
                height={32}
                className="mr-4 border-dream-green bg-dream-bg-green border-2 rounded-md py-2"
              />
              <div>
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
