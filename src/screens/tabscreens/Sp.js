import React from "react";
import letter from "../../assets/images/letter.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/sp.png";
import ClientsReview from "../../assets/images/ClientsReview.svg";

const Sp = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={letter} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Stitching Point</p>
          {/* <p className={`${styles.text} my-5`}>
            Project URL : https://nantucketrentals.com/
          </p> */}
          <p className={`${styles.text} my-5`}>Categories : UI/ UX</p>
          <p className={styles.text}>Tools : Figma</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/sp.png")}
        alt=""
        className="mt-20"
      />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default Sp;
