import {
  Button,
  Typography,
  Container,
  Accordion,
  AccordionActions,
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
        className="text-left ml-0 pl-0 pr-0 grid grid-cols-2 gap-20"
      >
        <section>
          <figure className=" bg-office flex justify-center h-full relative">
            <div className=" absolute bottom-0 p-20 grid grid-cols-2 gap-10 w-full ">
              <div className="back absolute bottom-0 w-full blur-2xl  h-full opacity-60"></div>
              <span className="flex flex-col gap-6 text-left">
                <Typography className="text-white" variant="h5">
                  Digital Art Marketplace
                </Typography>
                <Typography variant="h7" className="text-white">
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

              <span className="flex flex-col gap-6 text-left   ">
                <Typography className="text-white" variant="h5">
                  Creative AI APPS
                </Typography>
                <Typography variant="h7" className="text-white">
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
        <section className=" flex flex-col gap-4 pt-20">
          <span className="flex justify-left">
            <Typography
              variant="caption"
              className="text-orange-dark bg-button-grey w-fit p-2 pl-3 pr-3  font-normal rounded uppercase shadow-md shadow-black"
            >
              Our experts answers
            </Typography>
          </span>

          <Typography
            variant="h3"
            className=" text-white capitalize font-bold mb-3"
          >
            Frequently asked
            <span className="text-orange ml-3">Questions </span>
          </Typography>

          <Typography variant="h7" className="text-zinc-400">
            Faucibus in ornare quam viverra. Sed id semper risus in. Enim eu
            turpis <br /> egestas pretium aenean. Sed sed risus pretium quam
            vulputate dignissim.
          </Typography>

          <section className=" flex flex-col gap-6 mt-10">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="accordion p-8 text-2xl w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white"
              >
                What Is Artificial Intelligence?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="accordion p-8 text-2xl w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white"
              >
                How Can An AI Help My Business?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="accordion p-8 text-2xl w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white"
              >
                How Many Days Does It Take To Activate AI?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="accordion p-8 text-2xl w-full "
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon className="text-white" />}
                className="text-white"
              >
                Do You Have Querries?
              </AccordionSummary>
              <AccordionDetails className="text-zinc-400 text-base">
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
