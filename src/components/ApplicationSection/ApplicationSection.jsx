import { Typography, Container } from "@mui/material";

export default function ApplicationSection() {
  return (
    <section className="pt-20 pb-20  bg-gray-dark">
      <Container maxWidth="xl" className="flex justify-center gap-6 flex-col">
        <span className="flex justify-center">
          <Typography
            variant="caption"
            className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase shadow-md shadow-black"
          >
            Mobile applicationes
          </Typography>
        </span>
        <section className="">
          <Typography
            variant="h3"
            className=" text-white capitalize font-bold mb-3"
          >
            AI realted chat
            <span className="text-orange ml-3">Applicationes </span>
          </Typography>

          <Typography variant="h7" className="text-zinc-400">
            Donec eleifend quis felis eget cursus. Duis diam ligula, congue ac
            tortor nec, euismod. <br /> erat vitae libero convallis
            venenatis.Morbi vel euismod turpis, eu ultrices justo.
          </Typography>
        </section>

        <section className="flex gap-10 justify-start mt-20">
          <div className=" card bg-greey w-64 p-10 pr-6 pt-16 relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 ">
              <img src="/src/assets/twitter-orignal-image.webp.png" alt="" />
            </figure>

            <Typography variant="h5" className="text-white">
              Twitter
            </Typography>
            <Typography variant="h7" className="text-zinc-400">
              Vitae semper quis lectus <br /> nulla at volutp
            </Typography>
          </div>
          <div className=" card bg-greey w-64 p-10 pr-6 pt-16 relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 ">
              <img src="/src/assets/snapchat-originsl-image.webp.png" alt="" />
            </figure>

            <Typography variant="h5" className="text-white">
              Twitter
            </Typography>
            <Typography variant="h7" className="text-zinc-400">
              Vitae semper quis lectus <br /> nulla at volutp
            </Typography>
          </div>
        </section>
      </Container>
    </section>
  );
}
