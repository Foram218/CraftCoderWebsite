import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./ReactNativeTechnologies.module.css";
import background from "../../../assets/images/ReactNativeTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import crossPlatformRNTech from "../../../assets/images/crossPlatformRNTech.svg";
import nativeRNTech from "../../../assets/images/nativeRNTech.svg";
import userRNTech from "../../../assets/images/userRNTech.svg";
import efficientRNTech from "../../../assets/images/efficientRNTech.svg";
import seamlessRNTech from "../../../assets/images/seamlessRNTech.svg";
import costRNTech from "../../../assets/images/costRNTech.svg";
import apiRNTech from "../../../assets/images/apiRNTech.svg";
import appRNTech from "../../../assets/images/appRNTech.svg";
import ongoingRNTech from "../../../assets/images/ongoingRNTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
// import OfferReactNative from "./images/OfferReactNative.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const ReactNative = () => {
  const appContent = [
    {
      img: crossPlatformRNTech,
      title: " Cross-Platform Solutions ",
      desc: "React Native allows us to develop applications that work seamlessly on both iOS and Android platforms, reducing development time and costs while ensuring consistent user experiences.",
    },
    {
      img: nativeRNTech,
      title: " Native-like Performance ",
      desc: " Leveraging native components, React Native apps offer performance comparable to native apps. We ensure that your app runs smoothly, responds quickly, and provides a satisfying user experience.",
    },
    {
      img: userRNTech,
      title: " User-Centric Design ",
      desc: " Our designers work closely with developers to create intuitive and visually appealing interfaces that enhance user engagement and satisfaction. We follow industry best practices and adhere to platform-specific design guidelines. ",
    },
    {
      img: efficientRNTech,
      title: "Efficient Development ",
      desc: " React Native's reusable components and streamlined development process enable us to deliver your app faster, ensuring a quicker time-to-market without compromising quality. ",
    },
    {
      img: seamlessRNTech,
      title: " Seamless Integration ",
      desc: " React Native applications can seamlessly integrate with existing native modules and third-party libraries, allowing us to add functionality and features that best suit your app's requirements.",
    },
    {
      img: costRNTech,
      title: " Cost-Effective Solutions ",
      desc: " By developing a single codebase for both iOS and Android, React Native helps optimize development costs while delivering a consistent and engaging user experience across platforms. ",
    },
    {
      img: apiRNTech,
      title: " API Integration ",
      desc: " Our team specializes in integrating APIs into React Native applications, enabling your app to communicate with external services, databases, and other systems seamlessly. ",
    },
    {
      img: appRNTech,
      title: " App Deployment ",
      desc: " We guide you through the process of preparing your React Native application for submission to App Stores and Google Play Store, ensuring it meets the respective guidelines and requirements. ",
    },
    {
      img: ongoingRNTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching your React Native app is just the beginning. Our team provides continuous support and maintenance to keep your application up-to-date, secure, and aligned with evolving platform updates. ",
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
            React Native App <br />
            Development
          </p>
          <p className={styles.desc}>
            Immerse yourself in the world of cross-platform app development with
            React Native to create versatile and user-friendly applications
            tailored to your unique requirements. Our skilled team of developers
            excels in harnessing the power of React Native to build efficient,
            high-performance apps that cater to a wide range of industries and
            user preferences.
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
        <img src={OfferReactNative} alt="" className={styles.OfferReactJs} />
      </div> */}

      {/* <----------------------------- React JS Development Services from Craft Coders -----------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles} style={{ textAlign: "center" }}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose React Native App Development Services From
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

export default ReactNative;
