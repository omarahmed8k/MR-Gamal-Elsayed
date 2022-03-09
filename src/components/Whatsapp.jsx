import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Whatsapp.css";
import Fade from "react-reveal/Fade";

export default function Whatsapp() {
  return (
    <Fade Bottom>
      <a
        href="https://wa.link/yn6t31"
        target="_blank"
        className="whatsIcon"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
      </a>
    </Fade>
  );
}
