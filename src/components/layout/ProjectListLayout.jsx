/* eslint-disable react/prop-types */
import { Carousel } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProjectList({
  featured,
  otherProjects,
  webDesignProject,
}) {
  return (
    <>
      <div>
        <Carousel
          autoplay
          effect="fade"
          className="duration-300 hover:scale-105"
        >
          {featured}
        </Carousel>
      </div>

      <Accordion
        style={{
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
          border: 0,
          boxShadow: "none",
          borderBottom: "1px solid gray",
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:fill-white" />}
          style={{
            backgroundColor: "transparent",
            padding: 0,
            boxShadow: "none",
          }}
        >
          <h3 className="mb-2 mt-5 font-bold text-gray-600 dark:text-gray-200">
            Mini Projects
          </h3>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "transparent",
            padding: 0,
            boxShadow: "none",
            marginBottom: "2%",
          }}
        >
          <div className="grid gap-5 md:grid-cols-3">{otherProjects}</div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
          border: 0,
          boxShadow: "none",
          borderBottom: "1px solid gray",
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:fill-white" />}
          style={{
            backgroundColor: "transparent",
            padding: 0,
            boxShadow: "none",
          }}
        >
          <h3 className="mb-2 mt-5 font-bold text-gray-600 dark:text-gray-200">
            Web Design Projects
          </h3>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "transparent",
            padding: 0,
            boxShadow: "none",
            marginBottom: "2%",
          }}
        >
          <div className="grid gap-5 md:grid-cols-3">{webDesignProject}</div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
