import React from "react";
import styles from "./Projects.module.css";
import project1 from "../../assets/images/project1.svg";
import project2 from "../../assets/images/project2.svg";
import project3 from "../../assets/images/project3.svg";
import project4 from "../../assets/images/project4.svg";
import AppleIcon from "../../assets/images/appleIcon.svg";
import AndroidIcon from "../../assets/images/androidIcon.svg";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.mainTitle}>OUR PORTFOLIO</div>
        <div className={styles.combineTitle}>
          <div className={styles.centerTitle}>Project</div>
          <div className={styles.lastTitle}>Gallery</div>
        </div>

        <div className={styles.description}>
          Our portfolio displays mobile and web expertise, <br /> featuring
          successful projects and satisfied clients. <br /> Captivating apps and
          websites blend aesthetics <br /> with seamless functionality. Explore
          diverse projects <br />
          showcasing our ability to transform ideas into <br /> exceptional
          digital experiences. Partner with <br /> us for your vision.
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.leftImage} style={{ display: "flex" }}>
          <div class={styles.profile_pic}>
            <img src={project1} alt="" className={styles.firstImg} />
            <div className={styles.edit}>
              <a href="https://apps.apple.com/us/app/nantucket-rentals/id6444303183">
                <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nantucketrentals.nr">
                <img src={AndroidIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
            </div>
          </div>
          <div class={styles.profile_pic}>
            <img src={project2} alt="" className={styles.secondImage} />
            <div className={styles.edit}>
              <a href="https://apps.apple.com/us/app/r-dee-by-radiologex/id1509173310">
                <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.radiologex.production">
                <img src={AndroidIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }} className={styles.rightImg}>
          <div class={styles.profile_pic}>
            <img src={project3} alt="" className={styles.thirdImage} />
            <div className={styles.edit}>
              <a href="https://apps.apple.com/us/app/easi/id1571717904">
                <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.easi">
                <img src={AndroidIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
            </div>
          </div>
          <div class={styles.profile_pic}>
            <img src={project4} alt="" className={styles.fourthImage} />
            <div className={styles.edit}>
              <a href="https://apps.apple.com/us/app/gokar/id1458198749">
                <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.taxiemall.rider.application.gokar.trial">
                <img src={AndroidIcon} alt="" style={{ margin: "0px 10px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* <div className={styles.arrow}>
          <img
            src={require("./images/backArrow.png")}
            alt=""
            className={styles.backArrow}
          />
          <img src={require("./images/nextArrow.png")} alt="" />
        </div> */}
      </div>

      <div className={styles.mobileView}>
        <div className={styles.rightContainer1}>
          <div className={styles.leftImage} style={{ display: "flex" }}>
            <span className={styles.appName}>Nantucket Rentals</span>
            <div class={styles.profile_pic}>
              <img src={project1} alt="" className={styles.firstImg} />
              <div className={styles.edit}>
                <a href="https://apps.apple.com/us/app/nantucket-rentals/id6444303183">
                  <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.nantucketrentals.nr">
                  <img
                    src={AndroidIcon}
                    alt=""
                    style={{ margin: "0px 10px" }}
                  />
                </a>
              </div>
            </div>
            <span className={styles.appName}>RADIOLOGEX</span>
            <div class={styles.profile_pic}>
              <img src={project2} alt="" className={styles.secondImage} />
              <div className={styles.edit}>
                <a href="https://apps.apple.com/us/app/r-dee-by-radiologex/id1509173310">
                  <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.radiologex.production">
                  <img
                    src={AndroidIcon}
                    alt=""
                    style={{ margin: "0px 10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className={styles.rightImg}>
            <span className={styles.appName}>Easi</span>
            <div class={styles.profile_pic}>
              <img src={project3} alt="" className={styles.thirdImage} />
              <div className={styles.edit}>
                <a href="https://apps.apple.com/us/app/easi/id1571717904">
                  <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.easi">
                  <img
                    src={AndroidIcon}
                    alt=""
                    style={{ margin: "0px 10px" }}
                  />
                </a>
              </div>
            </div>
            <span className={styles.appName}>Sameep</span>
            <div class={styles.profile_pic}>
              <img src={project4} alt="" className={styles.fourthImage} />
              <div className={styles.edit}>
                <a href="https://apps.apple.com/us/app/gokar/id1458198749">
                  <img src={AppleIcon} alt="" style={{ margin: "0px 10px" }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.taxiemall.rider.application.gokar.trial">
                  <img
                    src={AndroidIcon}
                    alt=""
                    style={{ margin: "0px 10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Description}>
          Our portfolio displays mobile and web expertise, featuring successful
          projects and satisfied clients. Captivating apps and websites blend
          aesthetics with seamless functionality. Explore diverse projects
          showcasing our ability to transform ideas into exceptional digital
          experiences. Partner with us for your vision.
        </div>
      </div>
    </div>
  );
};

export default Projects;
