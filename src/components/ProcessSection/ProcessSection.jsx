import { Typography, Container } from "@mui/material";
import "./PorcessSection.css";

export default function ProcessSection() {
  return (
    <section className=" process-section flex justify-between items-center pt-32 pb-20">
      <Container maxWidth="xl" className="text-left  grid grid-cols-2">
        <section className="">
          <section className="flex flex-col gap-6">
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3 ml-1 font-normal rounded uppercase shadow-md shadow-black"
            >
              Our process
            </Typography>

            <Typography className=" text-white capitalize mt-6 font-bold xs:text-2xl md:text-3xl lg:text-4xl">
              Artificial Intelligence is the power
              <span className="text-orange ml-3">of the future </span>
            </Typography>
          </section>

          <section className="xs:gap-4 grid xs:grid-cols-1  md:grid-cols-2  md:flex   gap-20 mt-14">
            <div className=" card  xs:w-80 md:w-96   relative  rounded">
              <figure className=" flex justify-left mb-4 ">
                <img src="/src/assets/cog.png" alt="" className="max-w-full" />
              </figure>

              <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl">
                Collecting Data Base
              </Typography>

              <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap ">
                Lacus sed viverra tellus in hac habitasse plate
              </Typography>
            </div>

            <div className=" card  xs:w-80 md:w-96   relative  rounded">
              <figure className=" flex justify-left mb-4 ">
                <img src="/src/assets/leaf.png" alt="" className="max-w-full" />
              </figure>

              <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl">
                Collecting Data Base
              </Typography>

              <Typography
                variant="h7"
                className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap "
              >
                Lacus sed viverra tellus in hac habitasse plate
              </Typography>
            </div>
          </section>
        </section>

        <figure className=" xs:w-10 md:flex w-fit">
          <img
            src="/src/assets/phone.png"
            alt=""
            className=" xs:absolute  xs:-z-10 xs:bottom-72 xs:-right-0 md:absolute lg:relative md:bottom-7 md:-right-0 h-auto xs:max-w-60  md:max-w-md  lg:max-w-lg  xl:max-w-2xl"
          />
        </figure>
      </Container>
    </section>
  );
}
