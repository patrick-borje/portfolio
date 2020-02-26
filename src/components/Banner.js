import React from "react";
import "../css/style.css";

function Banner() {
  return (
    <section className="presentation">
      <div className="introduction">
        <div className="intro-text">
          <h1 className="hello">HELLO,</h1>
          <h1 className="name">I'M PATRICK</h1>
        </div>
      </div>
      <div class="about">
        <h2>About Me</h2>
        <p>
          I graduated form Phinma University Of Pangasinan with a critical
          experience in learning technology. I can implement effective and user
          friendly websites which enables me to help and satisfy clients.
        </p>
        <p>
          Striving to leverage my web development skills especially front end
          development.
        </p>
      </div>
    </section>
  );
}

export default Banner;
