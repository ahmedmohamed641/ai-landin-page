import { Typography, Container } from "@mui/material";

export default function TeamSection() {
  return (
    <section className=" bg-gray-dark flex justify-between items-center pt-32 pb-20">
      <Container maxWidth="xl" className="text center" id="team">
        <section className="flex flex-col text-center justify-center gap-6 ">
          <span className="flex justify-center">
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase "
            >
              Our Team
            </Typography>
          </span>

          <Typography
            variant="h3"
            className=" text-white capitalize mt-6 font-bold xs:text-2xl md:text-3xl lg:text-4xl"
          >
            best Technical
            <span className="text-orange ml-3">Experts </span>
          </Typography>
        </section>

        <section className="grid xs:grid-cols-2 md:grid-cols-4 xs:gap-6  md:gap-6 lg:gap-10 mt-10">
          <div className=" card h-fit w-fit bg-greey pb-8 rounded-b-xl">
            <figure className=" flex justify-left mb-8">
              <img
                src="/src/assets/person-2.png"
                alt=""
                className="max-w-full rounded-t-xl"
              />
            </figure>

            <section className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl"
              >
                George
              </Typography>

              <Typography
                variant="h7"
                className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap"
              >
                Data Analyst
              </Typography>
            </section>
          </div>

          <div className=" card h-fit w-fit bg-greey pb-8 rounded-b-xl">
            <figure className=" flex justify-left mb-8">
              <img
                src="/src/assets/person-1.png"
                alt=""
                className="max-w-full rounded-t-xl"
              />
            </figure>

            <section className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl"
              >
                Laraa
              </Typography>

              <Typography
                variant="h7"
                className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap"
              >
                Senior Developer
              </Typography>
            </section>
          </div>

          <div className=" card h-fit w-fit bg-greey pb-8 rounded-b-xl">
            <figure className=" flex justify-left mb-8">
              <img
                src="/src/assets/person-3.png"
                alt=""
                className="max-w-full rounded-t-xl"
              />
            </figure>

            <section className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl"
              >
                Thomas
              </Typography>

              <Typography
                variant="h7"
                className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap"
              >
                ML Engineer
              </Typography>
            </section>
          </div>

          <div className=" card h-fit w-fit bg-greey pb-8 rounded-b-xl">
            <figure className=" flex justify-left mb-8">
              <img
                src="/src/assets/person-4.png"
                alt=""
                className="max-w-full rounded-t-xl"
              />
            </figure>

            <section className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-white capitalize  xs:text-xl md:text-2xl lg:text-3xl"
              >
                Joe
              </Typography>

              <Typography
                variant="h7"
                className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-3 text-wrap"
              >
                Data Scientist
              </Typography>
            </section>
          </div>
        </section>
      </Container>
    </section>
  );
}
