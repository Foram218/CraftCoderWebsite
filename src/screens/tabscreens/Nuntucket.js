import React from "react";
import AD3 from "../../assets/images/AD3.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/NR.png";
import ClientsReview from "../../assets/images/ClientsReview.svg";

const Nuntucket = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={AD3} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Nantucket Rentals</p>
          <p className={`${styles.text} my-5`}>Categories : UI/UX Design</p>
          <p className={styles.text}>Tools : Adobe XD, Adobe Illustrator</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/NR.png")}
        alt=""
        className="mt-20"
      />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default Nuntucket;
