import { Button, Typography, Container } from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

export default function BlogsSection() {
  return (
    <section
      className="  flex flex-col justify-between items-left pt-36 pb-48  bg-gray-dark"
      id="blogs"
    >
      <Container maxWidth="xl">
        <section>
          <section className="flex flex-col gap-6 justify-start mb-16">
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3 ml-1 font-normal rounded uppercase shadow-md shadow-black"
            >
              Recent Updation
            </Typography>
            <span className="text-left">
              <Typography
                variant="h3"
                className=" text-white capitalize mt-6 font-bold xs:text-2xl md:text-3xl lg:text-4xl"
              >
                Ai Related
                <span className="text-orange ml-3">Blogs </span>
              </Typography>
            </span>
          </section>
        </section>
      </Container>
      <Container maxWidth="xl" className="text-left gap-10  grid grid-cols-2">
        <section className="grid md:grid-cols-1 lg:grid-cols-2 bg-greey rounded-xl lg:h-fit   lg:pr-10 ">
          <figure className="relative ">
            <img src="/src/assets/blog2.png" className="  xs:h-full" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10  xs:text-xs md:text-xs xl:text-sm  rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 xl:p-8 xl:pr-14 p-4 lg:pl-8 xl:pl-14">
            <Typography
              variant="h7"
              className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap font-thin"
            >
              1 comment
            </Typography>
            <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-xl">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap ">
              Aliquam id diam maecenas ultricies mi. Auctor neque vitae tempus
              quam pellentesque. Vel facilisis...
            </Typography>
            <span>
              <Button variant="text" className="text-left text-white -ml-1">
                Read More <NorthEastIcon className="ml-1 text-white" />
              </Button>
            </span>
          </div>
        </section>
        <section className="grid md:grid-cols-1 lg:grid-cols-2 bg-greey rounded-xl lg:h-fit   lg:pr-10 ">
          <figure className="relative ">
            <img src="/src/assets/blog4.png" className="  xs:h-full" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10  xs:text-xs md:text-xs xl:text-sm  rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 xl:p-8 xl:pr-14 p-4 lg:pl-8 xl:pl-14">
            <Typography
              variant="h7"
              className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap font-thin"
            >
              1 comment
            </Typography>
            <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-xl">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap ">
              Aliquam id diam maecenas ultricies mi. Auctor neque vitae tempus
              quam pellentesque. Vel facilisis...
            </Typography>
            <span>
              <Button variant="text" className="text-left text-white -ml-1">
                Read More <NorthEastIcon className="ml-1 text-white" />
              </Button>
            </span>
          </div>
        </section>
        <section className="grid md:grid-cols-1 lg:grid-cols-2 bg-greey rounded-xl lg:h-fit   lg:pr-10 ">
          <figure className="relative ">
            <img src="/src/assets/blog3.png" className="  xs:h-full" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10  xs:text-xs md:text-xs xl:text-sm  rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 xl:p-8 xl:pr-14 p-4 lg:pl-8 xl:pl-14">
            <Typography
              variant="h7"
              className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap font-thin"
            >
              1 comment
            </Typography>
            <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-xl">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap ">
              Aliquam id diam maecenas ultricies mi. Auctor neque vitae tempus
              quam pellentesque. Vel facilisis...
            </Typography>
            <span>
              <Button variant="text" className="text-left text-white -ml-1">
                Read More <NorthEastIcon className="ml-1 text-white" />
              </Button>
            </span>
          </div>
        </section>
        <section className="grid md:grid-cols-1 lg:grid-cols-2 bg-greey rounded-xl lg:h-fit   lg:pr-10 ">
          <figure className="relative ">
            <img src="/src/assets/blog1.png" className="  xs:h-full" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10  xs:text-xs md:text-xs xl:text-sm  rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 xl:p-8 xl:pr-14 p-4 lg:pl-8 xl:pl-14">
            <Typography
              variant="h7"
              className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap font-thin"
            >
              1 comment
            </Typography>
            <Typography className="text-white capitalize  xs:text-xl md:text-2xl lg:text-xl">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 text-wrap ">
              Aliquam id diam maecenas ultricies mi. Auctor neque vitae tempus
              quam pellentesque. Vel facilisis...
            </Typography>
            <span>
              <Button variant="text" className="text-left text-white -ml-1">
                Read More <NorthEastIcon className="ml-1 text-white" />
              </Button>
            </span>
          </div>
        </section>
      </Container>
    </section>
  );
}
