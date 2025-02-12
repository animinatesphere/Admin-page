import React from "react";
import "../component/NavBar2.css";
import bell from "../images/akar-icons_bell.png";
import pass from "../images/unsplash_WNoLnJo7tS8.png";
const NanBar2 = () => {
  return (
    <>
      <div className="nav2-bus">
        <div className="nav2-chil">
          <div className="nav2-logo">
            <h1>Logo</h1>
          </div>
          <div className="nav2-last">
            <div className="last1">
              <img src={bell} alt="" />
            </div>
            <div className="last2">
              <img src={pass} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NanBar2;
