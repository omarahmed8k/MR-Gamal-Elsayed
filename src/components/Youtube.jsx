import React from "react";
import "./Youtube.css";

export default function Youtube() {
  return (
    <div>
      <div className="youtubeSection container">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              src="https://www.youtube.com/embed/Sbis7t8Jmgo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
