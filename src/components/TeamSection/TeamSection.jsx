// todo: remove unsused imports
import { Button, Typography, Container, ButtonGroup } from "@mui/material";

export default function TeamSection() {
  return (
    <section className=" bg-gray-dark flex justify-between items-center pt-32 pb-20">
      <Container maxWidth="xl" className="text center">
        <section className="flex flex-col text-center justify-center gap-6 ">
          <span className="flex justify-center">
            <Typography
              variant="body2"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase "
            >
              Our Team
            </Typography>
          </span>

          <Typography
            variant="h3"
            className=" text-white capitalize font-bold mb-3"
          >
            best Technical
            <span className="text-orange ml-3">Experts </span>
          </Typography>
        </section>

        <section className="flex gap-10 mt-10">
          <div className=" card h-fit w-fit bg-greey pb-8 rounded-b-xl">
            <figure className=" flex justify-left mb-8">
              <img
                src="/src/assets/person-2.png"
                alt=""
                className="max-w-full rounded-t-xl"
              />
            </figure>

            <section className="flex flex-col gap-4">
              <Typography variant="h5" className="text-white">
                George
              </Typography>

              <Typography variant="h7" className="text-zinc-400">
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
              <Typography variant="h5" className="text-white">
                Laraa
              </Typography>

              <Typography variant="h7" className="text-zinc-400">
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
              <Typography variant="h5" className="text-white">
                Thomas
              </Typography>

              <Typography variant="h7" className="text-zinc-400">
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
              <Typography variant="h5" className="text-white">
                Joe
              </Typography>

              <Typography variant="h7" className="text-zinc-400">
                Data Scientist
              </Typography>
            </section>
          </div>
        </section>
      </Container>
    </section>
  );
}
