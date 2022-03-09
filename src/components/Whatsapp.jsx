import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Whatsapp.css";

export default function Whatsapp() {
  return (
    <div>
      <a
        href="https://wa.link/yn6t31"
        target="_blank"
        className="whatsIcon"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
      </a>
    </div>
  );
}
