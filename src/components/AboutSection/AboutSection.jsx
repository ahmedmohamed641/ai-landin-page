import { Button, Typography, Container } from "@mui/material";

export default function AboutSection() {
  return (
    <>
      <div className="mt-20 bg-zinc-900">
        <img src="/src/assets/Section.png" alt="" className="max-w-full" />
      </div>

      <section className="pt-16 pb-20 p-2 text-center bg-gray-dark flex-col justify-center">
        <Typography
          variant="caption"
          className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase "
        >
          Who Are We
        </Typography>

        <Typography
          variant="h4"
          className="text-initial text-white capitalize mt-6 font-bold"
        >
          don't heistate to pick a new technology
          <span className="text-orange ml-3">Ai That </span>will <br /> improve
          your business growth and think smart and make <br /> big change get
          <span className="text-orange ml-3">Big Change</span>
        </Typography>

        <figure className="mt-20 mb-8  flex justify-center">
          <img src="/src/assets/sign.png" alt="" className="max-w-full" />
        </figure>
        <Typography variant="h7" className="text-zinc-300">
          Henry Farson <span className="text-orange">- CEO</span>
        </Typography>
      </section>

      <figure className=" flex justify-center">
        <img src="/src/assets/robo-com.png" alt="" className="max-w-full" />
      </figure>

      <section className="pt-20 pb-20 bg-greey  ">
        <Container
          maxWidth="xl"
          className=" grid grid-cols-1 md:grid-cols-3 gap-32 w-full "
        >
          {/*  button & chip image section */}

          <section>
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase "
            >
              Our Story
            </Typography>
            <figure className=" flex justify-center mt-10">
              <img
                src="/src/assets/chip.webp.png"
                alt=""
                className="max-w-full"
              />
            </figure>
          </section>

          {/* card section */}

          <section className="flex gap-10 justify-center flex-col">
            <div className=" card bg-gray w-80 p-8 pl-12 pr-12 relative  rounded">
              <span className="absolute -top-8 ">
                <Typography
                  variant="h3"
                  className=" text-white capitalize font-bold"
                >
                  20'
                  <span className="text-orange ml-1">12 </span>
                </Typography>
              </span>
              <Typography variant="h7" className="text-zinc-400 text-">
                Foundation starts with 15 <br /> Employees, and 40 Clients
              </Typography>
            </div>

            <div className=" card bg-gray w-80 p-8 pl-12 pr-12 relative  rounded">
              <span className="absolute -top-8 ">
                <Typography
                  variant="h3"
                  className=" text-white capitalize font-bold"
                >
                  20'
                  <span className="text-orange ml-1">18 </span>
                </Typography>
              </span>
              <Typography variant="h7" className="text-zinc-400 text-">
                Services expanded with 500+ <br /> Employees, and 2K Clients
              </Typography>
            </div>

            <div className=" card bg-gray w-80 p-8 pl-12 pr-12 relative  rounded">
              <span className="absolute -top-8 ">
                <Typography
                  variant="h3"
                  className=" text-white capitalize font-bold"
                >
                  20'
                  <span className="text-orange ml-1">23 </span>
                </Typography>
              </span>
              <Typography variant="h7" className="text-zinc-400">
                20+ Branches Worldwide with <br /> 10K Employees, and 15K
                Clients
              </Typography>
            </div>
          </section>

          {/* text content section */}

          <section className="flex gap-16 justify-center flex-col text-left mt-0 pt-0">
            <Typography
              variant="h4"
              className="text-initial text-white capitalize font-bold"
            >
              our team makes your
              <span className="text-orange ml-3">Life Easier </span>
            </Typography>
            <Typography variant="h7" className="text-zinc-400 text-">
              Morbi pulvinar tempor lectus in feugiat. Quisque ullamcorper
              dapibus eros, sit amet congue mi laoreet id . Maecenas pulvinar
              diam justo, id eleifend nulla viverra at. Vestibulum euismod
              venenatis lacinia. Prae sent suscipit orci in tristique malesuada.
              Ut sit amet vehicula eros. Praesent eleifend iaculis ipsum,
              efficitur pulvinar mi rhoncus id.
            </Typography>
            <Button
              className="bg-orange text-white capitalize w-40 h-auto text-center "
              variant="contained"
            >
              Discover More
            </Button>
          </section>
        </Container>
      </section>
    </>
  );
}
