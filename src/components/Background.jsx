import React from "react";
import "./Background.css";

export default function Header() {
  return (
    <div>
      <div className="backgroundSection container">
        <div className="rightDiv">
          <h6>مدرس أول اللغة العربية للمرحلة الثانوية</h6>
          <h1>
            الأستاذ
            <br />
            جمال السيد خميس
          </h1>
          <a href="#contact">تواصل معنا</a>
        </div>
        <div className="leftDiv"></div>
      </div>
    </div>
  );
}
