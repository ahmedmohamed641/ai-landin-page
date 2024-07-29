import { Button, Typography, Container, ButtonGroup } from "@mui/material";

import Rating from "@mui/material/Rating";

export default function ReviewSection() {
  return (
    <section className="pt-20 pb-48  bg-gray-dark">
      <Container maxWidth="xl" className="flex justify-center gap-6 flex-col">
        <span className="flex justify-center">
          <Typography
            variant="caption"
            className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase shadow-md shadow-black"
          >
            Reviews
          </Typography>
        </span>

        <section className="flex gap-10 justify-start mt-20">
          <div className=" card flex flex-col bg-greey  p-10  pt-8 relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 ">
              <img src="/src/assets/review1.webp.png" alt="" />
            </figure>
            <span className="flex flex-col ml-auto pl-20 mr-auto gap-2">
              <Typography variant="h7" className="text-white ml-1">
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
            <Typography variant="h6" className="text-zinc-400 mt-10">
              Natoque penatibus et magnis dis. Massa <br /> eget egestas purus
              viverra accumsan in <br /> Sagittis aliquam malesuada bibendum
              arcu vitae. Massa id neque vestibulum blandit cursus.
            </Typography>
          </div>
          <div className=" card flex flex-col bg-greey  p-10  pt-8 relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 ">
              <img src="/src/assets/review2.webp.png" alt="" />
            </figure>
            <span className="flex flex-col ml-auto pl-20 mr-auto gap-2">
              <Typography variant="h7" className="text-white ml-1">
                ROBERT{" "}
                <span className="text-orange-dark font-light">- DESIGNER</span>
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                className="text-orange"
              />
            </span>
            <Typography variant="h6" className="text-zinc-400 mt-10">
              Sagittis aliquam malesuada bibendum arcu <br /> vitae. Massa id
              neque aliquam vestibulum <br /> blandit cursus. Natoque penatibus
              et magnis dis. Massa eget egestas purus viverra accumsan in nisl.
            </Typography>
          </div>
          <div className=" card flex flex-col bg-greey  p-6  pt-8 relative rounded-2xl shadow-2xl shadow-black text-left">
            <figure className="absolute -top-10 ">
              <img src="/src/assets/review3.webp.png" alt="" />
            </figure>
            <span className="flex flex-col ml-auto pl-24 mr-auto gap-2">
              <Typography variant="h7" className="text-white ml-1">
                JASMINE{" "}
                <span className="text-orange-dark font-light">- DESIGNER</span>
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                className="text-orange"
              />
            </span>
            <Typography variant="h6" className="text-zinc-400 mt-10">
              Massa id neque aliquam vestibulum blandit <br /> cursus. Natoque
              penatibus et magnis dis. <br /> Massa eget egestas purus viverra
              accumsan in nisl. Sagittis aliquam malesuada bibendum arcu vitae.
            </Typography>
          </div>
        </section>
      </Container>
    </section>
  );
}
