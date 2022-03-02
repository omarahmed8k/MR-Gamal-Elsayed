import React from "react";
import logo from "./../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
            <p>الكافي</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="#study" className="nav-link active">
                  الاستراتيجية التعليمية
                </a>
              </li>
              <li className="nav-item">
                <a href="#experiance" className="nav-link">
                  خبراتنا
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link contact">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
