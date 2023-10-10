import React, { useRef } from "react";
import styles from "./Map.module.css";
import SubmitIcon from "../../assets/images/teamBtn.svg";

const Map = () => {
  const selectorRef = useRef();
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles.mainTitle}>CONTACT</div>
        <div className={styles.lastTitle}>Let's have talk?</div>
        <div className={styles.combineContainer}>
          <div className={styles.leftContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8545787166217!2d72.82572257605761!3d21.19793508194499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27e340a7d1%3A0x265386f316def20b!2sCraft%20Coders%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1689057672951!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className={styles.iFrame}
            ></iframe>
          </div>
          <div className={styles.rightContainer}>
            <p className={styles.titleOfContact}>Contact HR</p>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className={styles.input}
              required
            />
            <textarea
              placeholder="Message"
              className={styles.message}
              required
            />
            <input
              type="file"
              placeholder="Upload Your Resume"
              className={styles.file}
              style={{ display: "none" }}
              ref={selectorRef}
              required
            />
            <div
              onClick={() => selectorRef.current.click()}
              className={styles.border}
              style={{ cursor: "pointer" }}
            >
              Upload Your Resume
            </div>

            <div className={styles.container}>
              <div className={styles.button}>
                <p className={styles.textOfButton}>Submit</p>
                <img src={SubmitIcon} alt="" style={{ marginLeft: "10px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
