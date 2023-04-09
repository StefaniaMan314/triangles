import { Container } from "@mui/material";
import "./index.css";

const heart = (
    <svg fill="#48ff00" viewBox="0 0 400 400" id="Heart" version="1.1" width={25}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="XMLID_20_">
        {" "}
        <polygon
          id="XMLID_21_"
          points="133.3,40 133.3,13.3 106.7,13.3 80,13.3 80,40 106.7,40 "
        ></polygon>{" "}
        <polygon
          id="XMLID_186_"
          points="320,40 320,13.3 293.3,13.3 266.7,13.3 266.7,40 293.3,40 "
        ></polygon>{" "}
        <rect
          height="26.7"
          id="XMLID_187_"
          width="26.7"
          x="53.3"
          y="40"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_188_"
          width="26.7"
          x="133.3"
          y="40"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_189_"
          width="26.7"
          x="240"
          y="40"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_190_"
          width="26.7"
          x="320"
          y="40"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_191_"
          width="26.7"
          x="26.7"
          y="66.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_192_"
          width="26.7"
          x="160"
          y="66.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_193_"
          width="26.7"
          x="213.3"
          y="66.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_194_"
          width="26.7"
          x="346.7"
          y="66.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_195_"
          width="26.7"
          x="186.7"
          y="93.3"
        ></rect>{" "}
        <polygon
          id="XMLID_196_"
          points="373.3,93.3 373.3,120 373.3,146.7 373.3,173.3 373.3,200 400,200 400,173.3 400,146.7 400,120 400,93.3 "
        ></polygon>{" "}
        <polygon
          id="XMLID_197_"
          points="26.7,146.7 26.7,120 26.7,93.3 0,93.3 0,120 0,146.7 0,173.3 0,200 26.7,200 26.7,173.3 "
        ></polygon>{" "}
        <rect
          height="26.7"
          id="XMLID_198_"
          width="26.7"
          x="26.7"
          y="200"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_199_"
          width="26.7"
          x="346.7"
          y="200"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_200_"
          width="26.7"
          x="53.3"
          y="226.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_201_"
          width="26.7"
          x="320"
          y="226.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_202_"
          width="26.7"
          x="80"
          y="253.3"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_203_"
          width="26.7"
          x="293.3"
          y="253.3"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_204_"
          width="26.7"
          x="106.7"
          y="280"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_205_"
          width="26.7"
          x="266.7"
          y="280"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_206_"
          width="26.7"
          x="133.3"
          y="306.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_207_"
          width="26.7"
          x="240"
          y="306.7"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_208_"
          width="26.7"
          x="160"
          y="333.3"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_209_"
          width="26.7"
          x="213.3"
          y="333.3"
        ></rect>{" "}
        <rect
          height="26.7"
          id="XMLID_210_"
          width="26.7"
          x="186.7"
          y="360"
        ></rect>{" "}
      </g>{" "}
    </g>
  </svg>
);

const FooterLayout = () => {
  return (
    <div className="footer-wrapper">
      <Container className="footer-container" maxWidth="lg">
        <div className="copywrite">©2023 Triangles. All rights reserved.</div>
        <div className="developers">
          Developed with <span>{heart}</span> by Stefi.
        </div>
      </Container>
    </div>
  );
};

export default FooterLayout;
