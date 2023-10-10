import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./IOSTechnologies.module.css";
import background from "../../../assets/images/iOSTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import customiOSTech from "../../../assets/images/customiOSTech.svg";
import useriOSTech from "../../../assets/images/useriOSTech.svg";
import optimizediOSTech from "../../../assets/images/optimizediOSTech.svg";
import swiftProgramiOsTEch from "../../../assets/images/swiftProgramiOsTEch.svg";
import UxTech from "../../../assets/images/UxTech.svg";
import appStoreTech from "../../../assets/images/appStoreTech.svg";
import nativeTech from "../../../assets/images/nativeTech.svg";
import interfacesTech from "../../../assets/images/interfacesTech.svg";
import ongoingiOSTech from "../../../assets/images/ongoingiOSTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
// import OfferPHP from "./images/OfferPHP.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const IOS = () => {
  const appContent = [
    {
      img: customiOSTech,
      title: " Custom iOS Solutions ",
      desc: "Our expertise lies in delivering custom iOS solutions that align seamlessly with your business objectives. From intuitive user interfaces to complex functionalities, we develop applications that fulfill your unique requirements.",
    },
    {
      img: useriOSTech,
      title: " User-Centric Design ",
      desc: " We prioritize user experience in iOS app development. Our developers create intuitive and engaging interfaces that ensure smooth navigation and interactions, enhancing user satisfaction and engagement.",
    },
    {
      img: optimizediOSTech,
      title: " Optimized Performance ",
      desc: " iOS is known for its performance and stability. Our team optimizes every aspect of your application to ensure it runs seamlessly, loads quickly, and offers a flawless user experience. ",
    },
    {
      img: swiftProgramiOsTEch,
      title: " Swift Programming ",
      desc: " We leverage Swift, Apple's modern programming language, to create efficient, readable, and maintainable code. Swift's versatility and performance contribute to the overall success of your iOS application. ",
    },
    {
      img: UxTech,
      title: " UI/UX Excellence ",
      desc: " Our designers collaborate closely with developers to ensure the design of your iOS application is not only visually appealing but also aligns with user expectations and Apple's design guidelines.",
    },
    {
      img: appStoreTech,
      title: " App Store Deployment ",
      desc: " We guide you through the process of preparing your iOS application for submission to the App Store, ensuring it meets Apple's guidelines and requirements for approval. ",
    },
    {
      img: nativeTech,
      title: " Native App Development ",
      desc: " Our focus is on native iOS app development, utilizing the platform's full potential to deliver apps that seamlessly integrate with iOS features and provide an optimized experience. ",
    },
    {
      img: interfacesTech,
      title: " Responsive Interfaces ",
      desc: " Whether for iPhones, iPads, or both, our iOS applications feature a responsive design that ensures consistent and appealing user experiences across various devices. ",
    },
    {
      img: ongoingiOSTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching your iOS app is just the beginning. Our team provides continuous support and maintenance to keep your application up-to-date, secure, and aligned with evolving iOS updates. ",
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
            iOS App Development <br />
          </p>
          <p className={styles.desc}>
            Delve into the world of iOS to craft elegant and high-performance
            applications tailored to your specific needs. Our skilled team of
            developers excels in harnessing the capabilities of the iOS platform
            to build innovative and user-centric applications that cater to
            various industries and user preferences.
          </p>
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

      {/* <div className={styles.offerContainer}>
        <img src={OfferPHP} alt="" className={styles.OfferAngularJs} />
      </div> */}

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

export default IOS;
