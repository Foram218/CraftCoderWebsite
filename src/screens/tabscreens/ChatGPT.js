import React from "react";
import logo1 from "../../assets/images/logo1.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/ChatGPT.png";
import ClientsReview from "../../assets/images/ClientsReview.svg";

const ChatGPT = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={logo1} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Chat GPT</p>
          <p className={`${styles.text} my-5`}>Categories : UI/UX Design</p>
          <p className={styles.text}>Tools : Adobe XD, Adobe Illustrator</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/ChatGPT.png")}
        alt=""
        className="mt-20"
      />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default ChatGPT;
