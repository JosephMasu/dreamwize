import Image from "next/image";
import React, { forwardRef } from "react";

const ApplyFaster = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="md:flex md:flex-col-2 lg:flex-row md:rounded-md lg:px-20 items-start justify-between container mx-auto px-6 py-8 lg:py-20 gap-20"
    >
      <div className="w-full lg:w-1/2 flex justify-center relative mb-6 lg:mb-0">
      <div
            className="absolute inset-0 bg-no-repeat bg-contain -z-10 h-full w-[full]"
            style={{ backgroundImage: `url('/svg/applyfaster.svg')`, backgroundPosition: "center"}}
          />
        <div className="rounded-xl p-6 flex justify-center items-center relative overflow-visible md:mt-[5rem]">  
          <Image
            src="/svg/books.svg"
            alt="Graduant"
            width={446}
            height={444}
            className="rounded-xl object-contain p-10 md:p-1 -mt-5 lg:-mb-[6rem]  md:-mb-[4rem] md:-mt-[-2rem]"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12 relative lg:py-0">
        <h2 className="bg-[url('/svg/stepsbg.svg')] font-Figtree font-bold text-dream-black text-xl px-2 md:text-2xl py-2 lg:text-3xl mb-6 whitespace-nowrap bg-no-repeat md:mt-12">
          Application steps simplified
        </h2>
        <ul className="space-y-9">
          {[
            {
              imgSrc: "/svg/getintuoch.svg",
              title: "Get in touch",
              description: (
              <>
              Discuss Career and Academic Options,<br/> Cost & Admission Requirements
              </>
              ),
            },
            {
              imgSrc: "/svg/apply.svg",
              title: "Apply",
              description: (
                <>
                Confirm University & Degree Choice,<br/> Provide Application Requirements
                </>
                ),
            },
            {
              imgSrc: "/svg/apply.svg",
              title: "Accept Offer",
              description: (
                <>
                Meet all the Required Conditions,,<br/> Pay Tuition Deposit or Full Fees,
                </>
                ),
              },
            {
              imgSrc: "/svg/voyage.svg",
              title: "Bon Voyage",
              description: (
                <>
                Apply for your Visa, Make Travel & Accommodation,<br/> Bookings. Safe Trip!
                </>
                ),
              },
          ].map((step, index) => (
            <li key={index} className="flex items-start md:-py-2">
              <Image
                src={step.imgSrc}
                alt={step.title}
                width={32}
                height={32}
                className="mr-2 border-dream-green bg-dream-bg-green border-2 rounded-custom-ssm md:w-[40px] md:h-[40px] w-[44px] h-[44px] flex items-center justify-center p-2 "
              />
              <div>
                <strong className="text-dream-black font-Figtree font-semibold ">
                  {step.title} <span className="text-dream-gray font-light">- {step.description}</span>
                </strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
ApplyFaster.displayName = "ApplyFaster";

export default ApplyFaster;
