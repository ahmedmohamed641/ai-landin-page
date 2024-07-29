import NorthEastIcon from "@mui/icons-material/NorthEast";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <main className="flex justify-between items-center">
      <div className="text-left">
        <Typography
          variant="caption"
          className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3 ml-1 font-normal rounded uppercase shadow-md shadow-black"
        >
          Chatbot
        </Typography>

        <Typography
          variant="h2"
          className="text-initial text-white capitalize mt-6 font-bold"
        >
          find your new friend who <br /> can solve your{" "}
          <span className="text-orange">doubts</span>
        </Typography>
        <section className="mt-20 mb-28">
          <div className="flex items-center w-fit h-fit p-6 pl-6 rounded-lg shadow-sm mb-4  bg-white">
            <input
              type="text"
              placeholder="what shall I create for you"
              className=" w-96 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 placeholder:italic placeholder:text-zinc-600"
            />
            <span className="text-white bg-orange rounded-md p-1 pl-2 pr-2">
              <NorthEastIcon />
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

        <section className="flex justify-start mt-4 space-x-12">
          <span>
            <Typography variant="h3" className="text-initial text-white">
              895 <span className="text-orange -ml-3">+</span>
            </Typography>
            <Typography variant="h7" className="text-zinc-300">
              COMPLETED PROJECTS
            </Typography>
          </span>
          <span>
            <Typography variant="h3" className="text-initial text-white">
              437 <span className="text-orange -ml-3">K</span>
            </Typography>
            <Typography variant="h7" className="text-zinc-300">
              HAPPY CLIENTS
            </Typography>
          </span>
          <span>
            <Typography variant="h3" className="text-initial text-white">
              10 <span className="text-orange -ml-3">+</span>
            </Typography>
            <Typography variant="h7" className="text-zinc-300">
              NEW TECHNOLOGIES
            </Typography>
          </span>
        </section>
      </div>
      <div className="ml-8">
        <img
          src="/src/assets/robo-main-page.webp.png"
          alt="Robot"
          className=" absolute lg:top-14 lg:right-20 max-w-full h-auto md:max-w-lg lg:max-w-4xl"
        />
      </div>
    </main>
  );
}
