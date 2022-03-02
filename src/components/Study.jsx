import React from "react";
import "./Study.css";
import img1 from "./../assets/images/img1.png";
import img2 from "./../assets/images/img2.png";
import img3 from "./../assets/images/img3.png";
import img4 from "./../assets/images/img4.png";
import img5 from "./../assets/images/img5.png";
import img6 from "./../assets/images/img6.png";

export default function Study() {
  return (
    <div>
      <div className="studySection container" id="study">
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>
                <div className="imgDiv">
                  <img src={img1} alt="img1" />
                </div>
                <h3>شرح وافي وبسيط</h3>
              </li>
              <li>
                <div className="imgDiv">
                  <img src={img2} alt="img2" />
                </div>
                <h3>متابعة دورية</h3>
              </li>
              <li>
                <div className="imgDiv">
                  <img src={img3} alt="img3" />
                </div>
                <h3>امتحانات و واجبات</h3>
              </li>
              <li>
                <div className="imgDiv">
                  <img src={img4} alt="img4" />
                </div>
                <h3>تقييم شهري</h3>
              </li>
              <li>
                <div className="imgDiv">
                  <img src={img5} alt="img5" />
                </div>
                <h3>مكافأة المجتهد</h3>
              </li>
              <li>
                <div className="imgDiv">
                  <img src={img6} alt="img6" />
                </div>
                <h3>متابعة مع ولي الامر</h3>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="liveSvg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
