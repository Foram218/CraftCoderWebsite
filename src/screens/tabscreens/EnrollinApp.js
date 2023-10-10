import React from "react";
import logo2 from "../../assets/images/logo2.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/enrollin1.png";
import ClientsReview from "../../assets/images/ClientsReview.svg";

const EnrollinApp = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={logo2} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Enrollin</p>
          {/* <p className={`${styles.text} my-5`}>
            Project URL : https://nantucketrentals.com/
          </p> */}
          <p className={`${styles.text} my-5`}>Categories : Websites</p>
          <p className={styles.text}>Tools : Adobe Photoshop</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/enrollin1.png")}
        alt=""
        className="mt-20"
      />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default EnrollinApp;
