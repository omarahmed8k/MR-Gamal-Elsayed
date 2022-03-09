import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <Fade bottom>
      <div className="contactSection" id="contact">
        <div className="container">
          <h3>تواصل معنا</h3>
          <div className="row">
            <div className="col-md-5">
              <ul className="tel">
                <li>
                  <a href="tel:01147093344">
                    01147093344
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                  </a>
                </li>
                <li>
                  <a href="tel:01224726223">
                    01224726223
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <hr />
            </div>
            <div className="col-md-5">
              <ul className="icon">
                <li>
                  <a
                    href="https://www.facebook.com/gamal.elsayed.9822"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.link/yn6t31"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
