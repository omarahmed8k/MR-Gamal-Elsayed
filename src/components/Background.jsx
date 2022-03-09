import React from "react";
import "./Background.css";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <div className="backgroundSection container">
      <Fade bottom>
        <div className="rightDiv">
          <h6>مدرس أول اللغة العربية للمرحلة الثانوية</h6>
          <h1>
            الأستاذ
            <br />
            جمال السيد خميس
          </h1>
          <a href="#contact">تواصل معنا</a>
        </div>
      </Fade>
      <div className="leftDiv"></div>
    </div>
  );
}
