import {
  Button,
  Typography,
  Container,
  ButtonGroup,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
  Card,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

export default function BlogsSection() {
  return (
    <section className="  flex flex-col justify-between items-left pt-36 pb-48  bg-gray-dark">
      <Container maxWidth="xl">
        <section className=" ">
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
                className=" text-white capitalize font-bold mb-3"
              >
                Ai Related
                <span className="text-orange ml-3">Blogs </span>
              </Typography>
            </span>
          </section>
        </section>
      </Container>
      <Container maxWidth="xl" className="text-left gap-10  grid grid-cols-2">
        <section className="grid grid-cols-2 bg-greey rounded-xl">
          <figure className="relative">
            <img src="/src/assets/blog1.png" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10 rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 p-8 pr-14 pl-14">
            <Typography variant="h7" className="text-white font-thin">
              1 comment
            </Typography>
            <Typography variant="h5" className="text-white text-">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography variant="h7" className="text-zinc-400 text-">
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
        <section className="grid grid-cols-2 bg-greey rounded-xl">
          <figure className="relative">
            <img src="/src/assets/blog2.png" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10 rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 p-8 pr-14 pl-14">
            <Typography variant="h7" className="text-white font-thin">
              1 comment
            </Typography>
            <Typography variant="h5" className="text-white text-">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography variant="h7" className="text-zinc-400 text-">
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
        <section className="grid grid-cols-2 bg-greey rounded-xl">
          <figure className="relative">
            <img src="/src/assets/blog3.png" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10 rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 p-8 pr-14 pl-14">
            <Typography variant="h7" className="text-white font-thin">
              1 comment
            </Typography>
            <Typography variant="h5" className="text-white text-">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography variant="h7" className="text-zinc-400 text-">
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
        <section className="grid grid-cols-2 bg-greey rounded-xl">
          <figure className="relative">
            <img src="/src/assets/blog4.png" alt="" />
            <Button
              variant="contained"
              className="bg-orange-dark absolute top-10 left-10 rounded-md"
            >
              Jun 22, 2023
            </Button>
          </figure>
          <div className="flex flex-col gap-4 p-8 pr-14 pl-14">
            <Typography variant="h7" className="text-white font-thin">
              1 comment
            </Typography>
            <Typography variant="h5" className="text-white text-">
              New Trending Artificial Intelligence AI Bot
            </Typography>

            <Typography variant="h7" className="text-zinc-400 text-">
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
