
"use client";
import { div } from "motion/react-client";
import { ContainerScroll } from "./ui/container-scroll-animation";


function WhyChooseUs() {
  return (
    <div className="flex justify-between  px-20 items-center  ">
      <div className="flex flex-col w-[20% ]overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/linear.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    </div>
  )
}

export default WhyChooseUs