import React from "react";
import styles from "./Footer.module.css";
import border from "../../../assets/images/border.svg";
import footerLogo from "../../../assets/images/footerLogo.svg";
import footerReview from "../../../assets/images/footerReview.svg";
import facebook from "../../../assets/images/fb.svg";
import instagram from "../../../assets/images/insta.svg";
import twitter from "../../../assets/images/twitter.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import behance from "../../../assets/images/behance.svg";
import footerDropdown from "../../../assets/images/footerDropdown.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.main}>
          {/* <------------------------------ Column 1 ------------------------------------------> */}

          <div className={styles.col1}>
            <img src={footerLogo} alt="" className={styles.logoFooter} />
            <p className={styles.text}>
              Schedule a call with our
              <br /> Experts
            </p>
            <button
              className={styles.button}
              // onClick={() => navigate("/ContactUs")}
            >
              Schedule a call
            </button>
            <a href="https://clutch.co/profile/craft-coders-infotech-llp#highlights">
              <img src={footerReview} alt="" className={styles.review} />
            </a>
          </div>

          {/* <------------------------------- Column 2 ---------------------------------> */}

          {/* <div className={styles.heading}> */}
          <div className={styles.col2}>
            <p className={styles.title}>Services</p>
            <img
              src={footerDropdown}
              alt=""
              className={styles.footerDropdown}
            />
            <img src={border} alt="" className={styles.border} />
            <ul className={styles.subContent}>
              <li
                onClick={() => {
                  navigate("/MobileAppDevelopment");
                }}
              >
                Mobile App Development
              </li>
              <li
                onClick={() => {
                  navigate("/WebAppDevelopment");
                }}
              >
                Web App Development
              </li>
              <li
                onClick={() => {
                  navigate("/CustomSoftwareDevelopment");
                }}
              >
                Custom Software Development
              </li>
              <li
                onClick={() => {
                  navigate("/GraphicDesign");
                }}
              >
                Graphic Design
              </li>
              <li
                onClick={() => {
                  navigate("/DigitalMarketing");
                }}
              >
                Digital Marketing
              </li>
              <li
                onClick={() => {
                  navigate("/QualityAssurance");
                }}
              >
                Quality Assurance
              </li>
            </ul>
          </div>

          {/* <------------------------------- Column 3 ---------------------------------> */}

          <div className={styles.col3}>
            <p className={styles.title}> Technologies</p>
            <img
              src={footerDropdown}
              alt=""
              className={styles.footerDropdown}
            />
            <img src={border} alt="" className={styles.border} />
            <div className={styles.thirdContainer}>
              <ul className={styles.subContent}>
                <li>React.js</li>
                <li>Angular.js</li>
                <li>Node.js</li>
                <li>PHP</li>
                <li>iOS</li>
              </ul>
              <ul className={styles.secondContent}>
                <li>React Native</li>
                <li>WordPress</li>
                <li>Android</li>
                <li>Flutter</li>
                <li>Java</li>
              </ul>
            </div>
          </div>

          {/* <------------------------------- Column 4 ---------------------------------> */}

          <div className={styles.col4}>
            <p className={styles.title}>Our Contact Info</p>
            <img src={border} alt="" className={styles.border} />
            <p className={styles.address}>
              1925, Second Floor, Stitching Point Fabrics <br /> Ghanti Sheri,
              Limda Chowk, Bhagal, <br /> Surat, Gujarat 395003
            </p>
            <p className={styles.mail}>hr@craftcodersinfotech.com</p>
            <p className={styles.mobileNo}>+91 902 387 7905</p>
            <div className={styles.allIcon}>
              <a href="https://www.facebook.com/craftcodersinfotech/">
                <img src={facebook} alt="" className={styles.icon} />
              </a>
              <a href="https://www.instagram.com/craftcodersinfotechllp/">
                <img src={instagram} alt="" className={styles.icons} />
              </a>
              <a href="https://twitter.com/craftcodersinfo">
                <img src={twitter} alt="" className={styles.icons} />
              </a>
              <a href="https://www.linkedin.com/company/craftcodersintofechllp/">
                <img src={linkedin} alt="" className={styles.icons} />
              </a>
              <a href="https://www.behance.net/craftcodersinfotech">
                <img src={behance} alt="" className={styles.icons} />
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* <------------------------------ End Section ---------------------------------> */}

        {/* <div className={styles.endBorder}></div>
        <div className={styles.end}>
          <p className={styles.endText}>
            Copyright @2022 All Right Reserved Craft Coders Infotech LLP
          </p>
          <div className={styles.rightEnd}>
            <p className={styles.rightText}>Privacy Policy</p>
            <div className={styles.vl}></div>
            <p className={styles.rightText}>Terms & Conditions</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
