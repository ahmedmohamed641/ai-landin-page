import { Button, Typography, Container, ButtonGroup } from "@mui/material";
import "./PorcessSection.css";

export default function () {
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

            <Typography
              variant="h3"
              className=" text-white capitalize font-bold mb-3"
            >
              Artificial Intelligence is the <br /> power
              <span className="text-orange ml-3">of the future </span>
            </Typography>
          </section>

          <section className="flex  gap-20 mt-14">
            <div className=" card  w-96  relative  rounded">
              <figure className=" flex justify-left mb-4 ">
                <img src="/src/assets/cog.png" alt="" className="max-w-full" />
              </figure>

              <Typography variant="h5" className="text-white text-">
                Collecting Data Base
              </Typography>

              <Typography variant="h7" className="text-zinc-400 text-">
                Lacus sed viverra tellus in hac habitasse plate
              </Typography>
            </div>

            <div className=" card w-96   relative  rounded">
              <figure className=" flex justify-left mb-4 ">
                <img src="/src/assets/leaf.png" alt="" className="max-w-full" />
              </figure>

              <Typography variant="h5" className="text-white text-">
                Collecting Data Base
              </Typography>

              <Typography variant="h7" className="text-zinc-400 text-">
                Lacus sed viverra tellus in hac habitasse plate
              </Typography>
            </div>
          </section>
        </section>

        <figure className=" flex justify-center">
          <img src="/src/assets/phone.png" alt="" className="max-w-full" />
        </figure>
      </Container>
    </section>
  );
}
