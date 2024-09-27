import React, { ComponentProps } from "react";

const Section = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`lg:max-w-screen-[1512px] max-w-full max-sm:px-5 max-sm:py-7 px-[5rem] w-full mx-auto py-20 max-lg:px-[3rem] xl:px-[5rem] 2xl:px-[10rem] min-[1700px]:px-[20rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;