import Lottie from "lottie-react";

import { ICONS, IMAGES } from "../../assets";
import { Bubble } from "../../components";
import "./aboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div id="aboutUsSection">

      <div className="left">
        <div className="heading">
          <span>We</span>
          <span>
            <img src={ICONS.heart} alt="heart" />
          </span>
          <span>What We Do</span>
        </div>


        <div className="text text1">
          <p>
            We, a group of freelancers, have been immersed in nonprofit research and development.
            Grateful to Meity and Tezpur University, our lab emerged. Currently, we delve into IoT, SDN, web, and mobile app development,
            fog-edge computing, machine learning, and blockchain.
          </p>

          <p>
            Founded in 2021 as a small project group, we've evolved into a skilled team spanning hardware and software expertise in IoT,
            Networks, SDN, Computer systems, and Distributed systems.
          </p>
        </div>

        <div className="text text2">
          <p>
            Our club aims to monitor a healthy project environment and perform
            good research. Currently we are focused on developing things for
            healthcare sector. Who knows when we kick in !!!
          </p>

          <p>
            From Software Defined Networks solutions to healthcare innovations with hardware integration,
            our ongoing research explores the realms of distributed systems.
          </p>
          {/* <p>Software Defined Networks solutions and integration.</p> */}
          {/* <p>Healthcare solutions with hardware integration.</p> */}
          {/* <p>Ongoing research on distributed systems.</p> */}
        </div>

      </div>

      <div className="right aboutUsImage">
        <Lottie
          animationData={IMAGES.about_us_2}
          loop={true}
        />
      </div>

      <Bubble
        id="large"
        style={{
          position: "absolute",
          top: "-100px",
          right: "100px",
          zIndex: "-1",
          width: "15%",
        }}
      />

      <Bubble
        id="medium"
        style={{
          position: "absolute",
          bottom: "0px",
          left: "40%",
          zIndex: "-1",
          width: "100px",
        }}
      />

      <Bubble
        id="small"
        style={{
          position: "absolute",
          top: "-50px",
          left: "200px",
          zIndex: "-1",
          width: "40px",
        }}
      />

    </div>
  );
};

export default AboutUsSection;
