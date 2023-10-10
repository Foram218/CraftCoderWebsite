import React from "react";
import styles from "./MobileAppServices.module.css";
import Services from "./Services";

const MobileAppServices = () => {
  const services = [
    {
      title: "Advanced Development Methodology",
    },
    {
      title: "Adaptable Collaboration Framework",
    },
    {
      title: "Client-Focused Approach",
    },
    {
      title: "End-to-End Solutions - From Design to Deployment",
    },
    {
      title: "Enhanced Performance Assurance",
    },
    {
      title: "Guaranteed Security Conformity",
    },
    {
      title: "Ongoing Support and Maintenance",
    },
    {
      title: "Prepared for Deployment Solutions",
    },
  ];

  return (
    <div className={styles.main}>
      <p className={styles.para}>
        We believe in creating web applications that provide exceptional user
        experiences. Our design process focuses on understanding your target
        audience and crafting intuitive interfaces that engage and delight
        users. By putting your customers at the center of our development
        process, we ensure higher user satisfaction and increased conversions.
      </p>
      <div className={styles.platform}>
        <div>
          {services.map((item, index) => {
            if (index <= 3) {
              return <Services key={index} title={item.title} />;
            }
            return null;
          })}
        </div>
        <div>
          {services.map((item, index) => {
            if (index >= 4) {
              return <Services key={index} title={item.title} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileAppServices;
