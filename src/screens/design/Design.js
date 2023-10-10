import Stack from "@mui/material/Stack";
import React from "react";
import styles from "./Design.module.css";

const Design = () => {
  return (
    <div className={styles.container}>
      {/* <------------------------------------------  Animation Content ---------------------------------------------------------> */}

      <div className={styles.circles}>
        <div className={styles.mainCircle}>
          <div className={styles.innerCircleWrapper}>
            <div className={styles.innerCircleAnim} />
          </div>
          <div className={styles.firstCircle}>
            <div className={styles.dot1}></div>
          </div>
          <div className={styles.secondCircle}>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
          </div>
          <div className={styles.thirdCircle}>
            <div className={styles.dot4}></div>
          </div>

          <div className={styles.fourthCircle}>
            <div className={styles.anii}>
              <p className={styles.animationText}>10+</p>
              <p className={styles.animationContent}>Years of Excellence</p>
            </div>
            <div className={styles.anii}>
              <p className={styles.animationText} style={{ color: "#02BCD2" }}>
                100+
              </p>
              <p className={styles.animationContent}>Happy Clients</p>
            </div>
            <div className={styles.anii}>
              <p className={styles.animationText} style={{ color: "#7ED602" }}>
                25+
              </p>
              <p className={styles.animationContent}>IT EXPERTS</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 0 }}>
        <div className={styles.titles}>
          <div className={styles.mainTitle}>INNOVATION</div>
          <div className={styles.both}>
            <div className={styles.centerTitle}>EXPERTISE EXCELLENCE</div>
            <div className={styles.lastTitle} style={{ marginLeft: 15 }}>
              RESULTS
            </div>
          </div>
        </div>
        <div className={styles.mixDiv}>
          <div className={styles.Circles}>
            <div className={styles.mainCircle}>
              <div className={styles.innerCircleWrapper}>
                <div className={styles.innerCircleAnim} />
              </div>
              <div className={styles.firstCircle}>
                <div className={styles.dot1}></div>
              </div>
              <div className={styles.secondCircle}>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
              </div>
              <div className={styles.thirdCircle}>
                <div className={styles.dot4}></div>
              </div>

              <div className={styles.fourthCircle}>
                <div className={styles.anii}>
                  <p className={styles.animationText}>10+</p>
                  <p className={styles.animationContent}>Years of Excellence</p>
                </div>
                <div className={styles.anii}>
                  <p
                    className={styles.animationText}
                    style={{ color: "#02BCD2" }}
                  >
                    100+
                  </p>
                  <p className={styles.animationContent}>Happy Clients</p>
                </div>
                <div className={styles.anii}>
                  <p
                    className={styles.animationText}
                    style={{ color: "#7ED602" }}
                  >
                    25+
                  </p>
                  <p className={styles.animationContent}>IT EXPERTS</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desc}>
            <p>
              Craft Coders Infotech LLP leverages experience and innovative
              solutions to tackle evolving market challenges. We deliver custom
              software, intuitive interfaces, advanced analytics, and harness
              AI. Choose us for reliable, cutting-edge solutions and strong
              client relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
