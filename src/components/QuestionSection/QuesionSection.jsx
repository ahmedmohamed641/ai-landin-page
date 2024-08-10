import {
  Button,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useState } from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import "./QuestionSection.css";

export default function QuestionSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className=" question-section flex justify-between items-center">
      <Container
        maxWidth="xl"
        className="text-left  ml-0 pl-0 pr-0 grid md:grid-cols-2 gap-20"
      >
        <section id="digital-art-marketplace">
          <figure className=" bg-office flex justify-center h-full relative pr-8">
            <div className="  md:absolute bottom-0 md:p-6 xs:p-10 xs:pl-6 lg:p-16 xl:p-20 grid md:grid-cols-2 gap-10 w-full ">
              <div className="back absolute bottom-0 xs:w-60 md:w-full blur-2xl  h-full opacity-60"></div>
              <span className="flex flex-col gap-6 md:text-left">
                <Typography className="text-white capitalize  xs:text-md md:text-lg lg:text-xl xl:text-2xl">
                  Digital Art Marketplace
                </Typography>
                <Typography className="text-white xs:text-sm md:text-base md:line-clamp-5 text-wrap">
                  Donec sit amet turpis tincidunt eros, <br /> nam porttitor
                  massa leo as reque.
                </Typography>
                <span className="">
                  <Button
                    variant="outlined"
                    className="rounded-lg text-white border-white w-40"
                  >
                    Discover more
                  </Button>
                </span>
              </span>

              <span className="flex flex-col gap-6 md:text-left">
                <Typography className="text-white capitalize  xs:text-md md:text-lg lg:text-xl xl:text-2xl">
                  Creative AI APPS
                </Typography>
                <Typography className="text-white xs:text-sm md:text-base md:line-clamp-5 text-wrap">
                  Porttitor donec sit amet turpis <br /> tincidunt eros, nam
                  massa leo as reque.
                </Typography>
                <span className="">
                  <Button
                    variant="outlined"
                    className="rounded-lg text-white border-white w-40"
                  >
                    Discover more
                  </Button>
                </span>
              </span>
            </div>
          </figure>
        </section>
        <section className=" flex flex-col gap-4 pt-20 xs:p-10 ">
          <span className="flex justify-left">
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase shadow-md shadow-black"
            >
              Our experts answers
            </Typography>
          </span>

          <Typography className=" text-white capitalize mt-6 font-bold xs:text-2xl md:text-3xl lg:text-4xl">
            Frequently asked
            <span className="text-orange ml-3">Questions </span>
          </Typography>

          <Typography className="text-zinc-400 xs:text-sm md:text-base md:line-clamp-4 text-wrap">
            Faucibus in ornare quam viverra. Sed id semper risus in. Enim eu
            turpis egestas pretium aenean. Sed sed risus pretium quam vulputate
            dignissim.
          </Typography>

          <section className=" flex flex-col gap-6 mt-10">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="accordion md:p-3 lg:p-8  w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white capitalize  xs:text-xl md:text-xl lg:text-2xl"
              >
                What Is Artificial Intelligence?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 xs:text-xs md:text-sm lg:text-base  md:line-clamp-4 text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="accordion md:p-3 lg:p-8 text-2xl w-full  "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white capitalize  xs:text-xl md:text-xl lg:text-2xl"
              >
                How Can An AI Help My Business?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 xs:text-xs md:text-sm lg:text-base  md:line-clamp-4 text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="accordion md:p-3 lg:p-8 text-2xl w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white capitalize  xs:text-xl md:text-xl lg:text-2xl"
              >
                How Many Days Does It Take To Activate AI?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 xs:text-xs md:text-sm lg:text-base  md:line-clamp-4 text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="accordion md:p-3 lg:p-8 text-2xl w-full  "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white capitalize  xs:text-xl md:text-xl lg:text-2xl"
              >
                Do You Have Querries?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 xs:text-xs md:text-sm lg:text-base  md:line-clamp-4 text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </section>
        </section>
      </Container>
    </section>
  );
}
