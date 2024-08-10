import React, { forwardRef } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";

const HeroSection = forwardRef((props, ref) => {
  return (
    <main className="flex flex-col lg:flex-row justify-center lg:justify-between px-4 lg:px-16 py-6">
      <div className="text-left">
        <Typography
          variant="caption"
          className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3 ml-1 font-normal rounded uppercase shadow-md shadow-black"
        >
          Chatbot
        </Typography>

        <Typography className=" text-white capitalize mt-6 font-bold xs:text-2xl md:text-3xl lg:text-5xl ">
          find your new friend who <br /> can solve your
          <span className="text-orange xs:ml-1">Doubts</span>
        </Typography>
        <section className="lg:mt-20 lg:mb-28 md:mt-10  md:mb-20 xs:mt-10 xs:mb-10">
          <div className="flex items-center w-fit h-fit xs:p-2 xs:pl-4 xs:pr-4  md:p-6 md:pl-6 rounded-lg shadow-sm mb-4  bg-white">
            <input
              type="text"
              placeholder="what shall I create for you"
              className=" xl:w-96 lg:w-64  md:w-56 xs:w-56 rounded-lg shadow-sm focus:outline-none placeholder:italic placeholder:text-zinc-600 "
              ref={ref}
            />
            <span className="text-white bg-orange rounded-md xs:p-1 xs:pl-2  md:p-1 md:pl-2 md:w-10">
              <NorthEastIcon className="lg:w-6 md:w-5 xs:w-4" />
            </span>
          </div>
          <a
            className="text-zinc-300 font-extralight text-sm underline"
            href="#"
          >
            <span>
              <CircleIcon className="text-xs mr-1 text-orange" />
            </span>
            How Exactly It works?
          </a>
        </section>

        <section className="flex justify-start md:mt-0 lg:mt-4 xs:space-x-4  md:space-x-12">
          <span>
            <Typography className="text-initial text-white lg:text-4xl md:text-2xl">
              895{" "}
              <span className="text-orange sm:-ml-0 lg:-ml-3 lg:text-4xl md:text-2xl">
                +
              </span>
            </Typography>
            <Typography className="text-zinc-300 xs:text-xs   md:text-sm lg:text-sm xl:text-base ">
              COMPLETED PROJECTS
            </Typography>
          </span>
          <span>
            <Typography className="text-initial text-white lg:text-4xl md:text-2xl">
              437{" "}
              <span className="text-orange sm:-ml-0 lg:-ml-3 lg:text-4xl md:text-2xl">
                K
              </span>
            </Typography>
            <Typography className="text-zinc-300 xs:text-xs   md:text-sm lg:text-sm xl:text-base ">
              HAPPY CLIENTS
            </Typography>
          </span>
          <span>
            <Typography className=" text-white lg:text-4xl md:text-2xl">
              10{" "}
              <span className="text-orange sm:-ml-0 lg:-ml-3 lg:text-4xl md:text-2xl">
                +
              </span>
            </Typography>
            <Typography className="text-zinc-300 xs:text-xs   md:text-sm lg:text-sm xl:text-base ">
              NEW TECHNOLOGIES
            </Typography>
          </span>
        </section>
      </div>
      <div className="ml-8 hidden md:block">
        <img
          src="/src/assets/robo-main-page.webp.png"
          alt="Robot"
          className=" -z-10 absolute xl:top-14 xl:right-20 lg:top-56 lg:right-0 md:right-0 md:top-80 sm: max-w-full h-auto  sm:max-w-4  md:max-w-md  lg:max-w-2xl  xl:max-w-4xl "
        />
      </div>
    </main>
  );
});

export default HeroSection;
