import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./JavaTechnologies.module.css";
import background from "../../../assets/images/JavaTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import JavaJTech from "../../../assets/images/JavaJTech.svg";
import serverSideTech from "../../../assets/images/serverSideTech.svg";
import crossPlatformTech from "../../../assets/images/crossPlatformTech.svg";
import enterpriseTech from "../../../assets/images/enterpriseTech.svg";
import securityTech from "../../../assets/images/securityTech.svg";
import APIJTech from "../../../assets/images/APIJTech.svg";
import mobileAppTech from "../../../assets/images/mobileAppTech.svg";
import webAppTech from "../../../assets/images/webAppTech.svg";
import ongoingJTech from "../../../assets/images/ongoingJTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferJava from "../../../assets/images/OfferJava.svg";
import OfferJavaMobile from "../../../assets/images/OfferJavaMobile.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const Java = () => {
  const appContent = [
    {
      img: JavaJTech,
      title: " Custom Java Solutions ",
      desc: "Our proficiency lies in delivering customized Java solutions that align precisely with your business goals. From enterprise-grade applications to cross-platform solutions, we develop software that meets your specific needs and challenges.",
    },
    {
      img: serverSideTech,
      title: " Server-side Excellence ",
      desc: " Java's reputation for server-side development excellence is well-founded. Our developers are skilled at crafting efficient and scalable server-side applications that handle complex tasks while ensuring optimal performance.",
    },
    {
      img: crossPlatformTech,
      title: " Cross-Platform Compatibility ",
      desc: " Java's write once, run anywhere philosophy makes it an ideal choice for cross-platform development. We create applications that seamlessly work on various devices and operating systems, reducing development time and costs. ",
    },
    {
      img: enterpriseTech,
      title: " Enterprise Applications ",
      desc: " Leverage Java's robustness for building powerful enterprise-level applications that streamline business processes, manage data, and enhance collaboration. Our solutions cater to your organization's unique workflows and requirements. ",
    },
    {
      img: securityTech,
      title: " Security and Performance ",
      desc: " Java's strong security features and memory management capabilities ensure the development of secure and high-performing applications. We prioritize the implementation of best practices to safeguard your application from vulnerabilities.",
    },
    {
      img: APIJTech,
      title: " API Development ",
      desc: " Our team specializes in creating APIs using Java, enabling seamless integration with other systems, applications, or third-party services. Our APIs are designed to be efficient, well-documented, and user-friendly. ",
    },
    {
      img: mobileAppTech,
      title: " Mobile Applications ",
      desc: " Java's versatility extends to mobile app development. We create Android applications that provide rich user experiences and access to a vast user base on the world's most popular mobile platform. ",
    },
    {
      img: webAppTech,
      title: " Web Applications ",
      desc: " From dynamic web portals to interactive e-commerce platforms, we leverage Java to develop web applications that engage users and drive business growth. Our solutions focus on user-centric design and performance optimization. ",
    },
    {
      img: ongoingJTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching an application is just the beginning. Our team offers continuous support and maintenance services to keep your Java application up-to-date, secure, and functioning optimally. ",
    },
  ];

  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabData = [
    { lable: "Frontend" },
    { lable: "Backend" },
    { lable: "Mobile" },
    { lable: "Design" },
    { lable: "Database" },
    { lable: "Project Management" },
  ];

  return (
    <div className={styles.mainContainer}>
      <Header />

      {/* <--------------------------------- Content Section ---------------------------------> */}

      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p className={styles.heading}>
            Java Development <br />
          </p>
          <p className={styles.desc}>
            Immerse yourself in the world of Java to create versatile and
            high-performance applications tailored to your unique business
            requirements. Our expert team of developers excels in utilizing
            Java's capabilities to build robust, scalable, and secure
            applications that cater to a wide range of industries and use cases.
          </p>
          {/* <p className={styles.desc}>
            We are here to help you to boost your business to stand out in the
            market and reach to your <br />
            customers and achieve your business goals. We are here to help you
            to boost your business <br />
            to stand out in the market and reach to your customers and achieve
            your business goals. <br />
            We are here to help you to boost your business to stand out in the
            market and reach to your <br />
            customers and achieve your business goals. We are here to help you
            to boost your business <br />
            to stand out in the market and reach to your customers and achieve
            your business goals.
          </p> */}
          <div className={styles.container}>
            <div className={styles.button}>
              <p className={styles.textOfButton}>
                Schedule a Developer Interview
              </p>
              <img src={SubmitIcon} alt="" className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={background} alt="" className={styles.background} />
        </div>
      </div>

      {/* <------------------------------------- React JS Development Section --------------------------------------> */}

      <div className={styles.mobileAppContent}>
        <div className={styles.titles}>
          <p className={styles.mainTitle}>OUR EXPERT TEAM</p>
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Help you with </p>
            <p className={styles.lastTitle}>below services</p>
          </Stack>
        </div>
        <div className={`${styles.appContent} px-6 md:px-[20%]`}>
          {appContent.map((item) => {
            return (
              <MobileContent
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>

      {/* <---------------------------------- Technologies and Platforms Section ----------------------------------> */}

      <div className={styles.headingOfplatform}>
        <p className={styles.mainTitleOfPlatform}>OUR TECH EXPERTISE</p>
        <Stack direction="row" spacing={2}>
          <p className={styles.centerTitleOfPlatform}>
            Technologies & Platforms
          </p>
          <p className={styles.lastTitleOfPlatform}>We Work With</p>
        </Stack>
        <div className={styles.main1}>
          <nav className={styles.platforms}>
            <Tabs
              sx={{ maxWidth: { xs: 320, sm: 480, md: 700, lg: 1875 } }}
              variant="scrollable"
              scrollButtons={false}
              value={value}
              onChange={handleChange}
              centered
            >
              {TabData.map((item, index) => {
                return (
                  <Tab
                    label={item.lable}
                    className={styles.list}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </Tabs>
          </nav>
        </div>
        <Platform activeIndex={activeIndex} />
      </div>

      {/* <--------------------------------------- React JS Combinations Section ------------------------------------> */}

      <div className={styles.offerContainer}>
        <img src={OfferJava} alt="" className={styles.OfferReactJs} />
        <img src={OfferJavaMobile} alt="" className={styles.OfferJavaMobile} />
      </div>

      {/* <----------------------------- React JS Development Services from Craft Coders -----------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles} style={{ textAlign: "center" }}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Mobile App Development Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <-------------------------------------- Review Section --------------------------------------> */}

      <div className={styles.reviewSection}>
        <Review />
      </div>

      {/* <----------------------------- Form Section For Contact with Senior ---------------------------------> */}

      <div className={styles.schedule}>
        <div className={styles.titlesOfSchedule}>
          {/* <div className={styles.mainTitleOfSchedule}>PROJECT</div> */}
          <div className={styles.middleTitleOfSchedule}>
            Schedule A Call with our Senior Mobile Lead & Get a Free
          </div>
          <div className={styles.lastTitleOfSchedule}>
            Quotation for your project
          </div>
        </div>

        <FormContainer />
      </div>

      {/* <--------------------------------------- Clients Review Section -----------------------------------------> */}

      {/* <ClientsReview /> */}
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
      <img
        src={ClientReviewMobileReactTech}
        alt=""
        className={styles.ClientReviewMobileReactTech}
      />

      <Footer />
    </div>
  );
};

export default Java;
