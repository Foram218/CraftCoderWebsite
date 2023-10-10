import React from "react";
import styles from "./JobOpening.module.css";
import SubmitIcon from "../../assets/images/teamBtn.svg";
import { useNavigate } from "react-router-dom";

const JobOpening = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.title}> {props.title} </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Opening: <p className={styles.detail}>{props.openings}</p>
        </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Location:
          <p className={styles.detail}>Bhagal, Surat, Gujarat</p>
        </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Type:
          <p className={styles.detail}>Full Time</p>
        </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Qualification:
          <p className={styles.detail}>{props.qualification}</p>
        </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Experience:
          <p className={styles.detail}>1 to 3 Years</p>
        </div>
        <div style={{ display: "flex" }} className={styles.text}>
          Skill:
          <p className={styles.detail}>{props.skill}</p>
        </div>
        <div className={styles.container}>
          <div className={styles.button} onClick={() => navigate("/ReactJS")}>
            <p className={styles.textOfButton}>Apply Now</p>
            <img src={SubmitIcon} alt="" className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpening;
