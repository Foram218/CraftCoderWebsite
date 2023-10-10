import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./FlutterTechnologies.module.css";
import background from "../../../assets/images/FlutterTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import flutterFTech from "../../../assets/images/flutterFTech.svg";
import beautifulFTech from "../../../assets/images/beautifulFTech.svg";
import fastFTech from "../../../assets/images/fastFTech.svg";
import efficientFTech from "../../../assets/images/efficientFTech.svg";
import customFTech from "../../../assets/images/customFTech.svg";
import costEffectiveFTech from "../../../assets/images/costEffectiveFTech.svg";
import APIFTech from "../../../assets/images/APIFTech.svg";
import AppFTech from "../../../assets/images/AppFTech.svg";
import ongoingFTech from "../../../assets/images/ongoingFTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferFlutter from "../../../assets/images/OfferFlutter.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const Flutter = () => {
  const appContent = [
    {
      img: flutterFTech,
      title: " Cross-Platform Excellence ",
      desc: "Flutter empowers us to develop applications that seamlessly function on both iOS and Android platforms, saving time and resources while delivering consistent user experiences.",
    },
    {
      img: beautifulFTech,
      title: " Beautiful Interfaces ",
      desc: " Flutter's expressive UI framework enables us to craft visually appealing and interactive interfaces that captivate users and enhance engagement.",
    },
    {
      img: fastFTech,
      title: " Fast and Smooth Performance ",
      desc: " With Flutter's native-like performance, your app will feel responsive and performant, providing a satisfying experience for users.",
    },
    {
      img: efficientFTech,
      title: " Efficient Development ",
      desc: " Flutter's hot reload feature facilitates quick iterations and faster development cycles, allowing us to deliver your app in a shorter timeframe. ",
    },
    {
      img: customFTech,
      title: " Custom Widgets ",
      desc: " We leverage Flutter's rich library of customizable widgets to create unique app components that align with your brand and design preferences.Seamless Integration: Flutter apps can seamlessly integrate with existing native modules and third-party libraries, allowing us to incorporate the features your app needs.",
    },
    {
      img: costEffectiveFTech,
      title: " Cost-Effective Solutions ",
      desc: " By building a single codebase for both iOS and Android, Flutter helps reduce development costs while delivering a consistent and engaging user experience across platforms. ",
    },
    {
      img: APIFTech,
      title: " API Integration ",
      desc: " Our team specializes in integrating APIs into Flutter applications, enabling your app to communicate with external services, databases, and other systems effortlessly. ",
    },
    {
      img: AppFTech,
      title: " App Deployment ",
      desc: " We guide you through the process of preparing your React Native application for submission to App Stores and Google Play Store, ensuring it meets the respective guidelines and requirements. ",
    },
    {
      img: ongoingFTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching your Flutter app is just the beginning. Our team provides continuous support and maintenance to keep your application up-to-date, secure, and aligned with evolving platform updates. ",
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
            Flutter Application <br />
            Development
          </p>
          <p className={styles.desc}>
            Dive into the world of cross-platform app development with Flutter,
            where creativity meets performance to create stunning applications
            tailored to your unique needs. Our skilled team of developers excels
            in harnessing the power of Flutter to build robust, high-quality
            apps that cater to diverse industries and user preferences.
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
        <img src={OfferFlutter} alt="" className={styles.OfferReactJs} />
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

export default Flutter;
