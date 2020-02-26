import React from "react";
import "../css/style.css";
import typeGame from "../Capture.PNG";
import picArt from "../pic-art.PNG";
import { Link } from "react-router-dom";
function MyWorks() {
  return (
    <section className="works_section">
      <div className="title">
        <h1>My Works</h1>
      </div>
      <div className="works">
        <div className="card">
          <Link className="logo-link" to="/TypeGame">
            <img src={typeGame} alt="typeGame" />
            <div>
              <h4>HOW FAST CAN YOU TYPE?</h4>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="logo-link" to="/Photos">
            <img src={picArt} alt="typeGame" />
            <div>
              <h4>PIC ART</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MyWorks;
