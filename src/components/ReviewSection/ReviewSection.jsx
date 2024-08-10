import { Typography, Container } from "@mui/material";

import Rating from "@mui/material/Rating";

export default function ReviewSection() {
  return (
    <section className="pt-28 pb-48  bg-gray-dark">
      <Container maxWidth="xl" className="flex justify-center gap-6 flex-col">
        <span className="flex justify-center">
          <Typography
            variant="caption"
            className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase shadow-md shadow-black"
          >
            Reviews
          </Typography>
        </span>

        <section className="grid md:grid-cols-1 lg:grid-cols-3 xs:gap-16  md:gap-16 lg:gap-10 justify-start mt-20">
          <div className="  card flex flex-col bg-greey  pb-10 p-4   pt-8  relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 -z-1">
              <img src="/src/assets/review1.webp.png" alt="" className="" />
            </figure>
            <span className="flex flex-col ml-auto  xs:ml-40 md:ml-auto lg:pl-28  xl:ml-auto  xl:pl-20 mr-auto gap-2 text-nowrap">
              <Typography variant="h7" className=" -z-0 text-white ml-1">
                LARRA{" "}
                <span className="text-orange-dark font-light">- MANAGER</span>
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                className="text-orange"
              />
            </span>
            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 xl:text-lg text-wrap mt-10">
              Natoque penatibus et magnis dis. Massa <br /> eget egestas purus
              viverra accumsan in <br /> Sagittis aliquam malesuada bibendum
              arcu vitae. Massa id neque vestibulum blandit cursus.
            </Typography>
          </div>
          <div className="  card flex flex-col bg-greey  pb-10 p-4   pt-8  relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 -z-1">
              <img src="/src/assets/review2.webp.png" alt="" className="" />
            </figure>
            <span className="flex flex-col ml-auto  xs:ml-40 md:ml-auto lg:pl-28  xl:ml-auto  xl:pl-20 mr-auto gap-2 text-nowrap">
              <Typography variant="h7" className=" -z-0 text-white ml-1">
                DAVID
                <span className="text-orange-dark font-light">- DEVELOPER</span>
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                className="text-orange"
              />
            </span>
            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 xl:text-lg text-wrap mt-10">
              Natoque penatibus et magnis dis. Massa <br /> eget egestas purus
              viverra accumsan in <br /> Sagittis aliquam malesuada bibendum
              arcu vitae. Massa id neque vestibulum blandit cursus.
            </Typography>
          </div>
          <div className="  card flex flex-col bg-greey  pb-10 p-4   pt-8  relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 -z-1">
              <img src="/src/assets/review3.webp.png" alt="" className="" />
            </figure>
            <span className="flex flex-col ml-auto  xs:ml-40 md:ml-auto lg:pl-28  xl:ml-auto  xl:pl-20 mr-auto gap-2 text-nowrap">
              <Typography variant="h7" className=" -z-0 text-white ml-1">
                MARY
                <span className="text-orange-dark font-light">- DESIGNER</span>
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                className="text-orange"
              />
            </span>
            <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-10 xl:text-lg text-wrap mt-10">
              Natoque penatibus et magnis dis. Massa <br /> eget egestas purus
              viverra accumsan in <br /> Sagittis aliquam malesuada bibendum
              arcu vitae. Massa id neque vestibulum blandit cursus.
            </Typography>
          </div>
        </section>
      </Container>
    </section>
  );
}
