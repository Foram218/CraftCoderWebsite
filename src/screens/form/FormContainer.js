import React from "react";
import styles from "./FormContainer.module.css";
import SubmitIcon from "../../assets/images/teamBtn.svg";

const FormContainer = () => {
  return (
    <div className={styles.form}>
      <div className={styles.content}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>
      <input
        type="text"
        placeholder="Message..."
        className={styles.messageContainer}
      />

      <div className={styles.container}>
        <div className={styles.button}>
          <p className={styles.text}>Submit</p>
          <img src={SubmitIcon} alt="" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
