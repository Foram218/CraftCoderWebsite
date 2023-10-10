import React, { useState } from "react";
import styles from "./MobileAppDevelopment.module.css";
import Stack from "@mui/material/Stack";
import background from "../../../assets/images/mobileAppbg.svg";
import MobileContent from "../mobilecontent/MobileContent";
import Android from "../../../assets/images/android.svg";
import iOS from "../../../assets/images/iOS.svg";
import ReactNative from "../../../assets/images/reactNative.svg";
import Flutter from "../../../assets/images/flutter.svg";
import MobileAppSupport from "../../../assets/images/mobileAppSupport.svg";
import MobileApptest from "../../../assets/images/mobileAppTest.svg";
import Platform from "../../platform/Platform";
import RecentProject from "../recentproject/RecentProject";
import MobileAppServices from "../mobileservices/MobileAppServices";
import Header from "../../../components/common/Header/Header";
// import MobileDevelopmentProcess from "./MobileDevelopmentProcess";
import FormContainer from "../../form/FormContainer";
// import ClientsReview from "./ClientsReview";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MobileProcess from "../../../assets/images/MobileProcess.svg";
import mobileDevProcess from "../../../assets/images/mobileDevProcess.svg";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const MobileAppDevelopment = () => {
  const appContent = [
    {
      img: Android,
      title: " Android App Development ",
      desc: "Transform your business ideas into reality with our top-notch Android app development services, leveraging the latest technologies and best practices to deliver high-performance applications.",
    },
    {
      img: iOS,
      title: " iOS App Development ",
      desc: "From concept to launch, our skilled team of iOS developers will bring your ideas to life, creating visually stunning and user-friendly applications that captivate your target audience on Apple devices.",
    },
    {
      img: ReactNative,
      title: " React Native Cross Platform App Development ",
      desc: " Empower your business with our expert React Native app development solutions, delivering seamless user experiences and rapid deployment across iOS and Android platforms. ",
    },
    {
      img: Flutter,
      title: " Flutter Cross Platform App Development ",
      desc: " Elevate your user experiences with our expert Flutter app development solutions, leveraging the power of Google's UI toolkit to deliver fast, flexible, and beautiful cross-platform applications. ",
    },
    {
      img: MobileAppSupport,
      title: " Mobile App Support & Maintenance ",
      desc: " Ensure the smooth functioning of your mobile applications with our reliable support and maintenance services, providing timely updates, bug fixes, and performance optimizations. ",
    },
    {
      img: MobileApptest,
      title: " Mobile App Testing ",
      desc: " Ensure the quality and performance of your mobile applications with our comprehensive mobile app testing services, leveraging industry-leading tools and methodologies to deliver accurate and reliable results. ",
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
    <div className={styles.mobileMainContainer}>
      {/* <TopBar /> */}

      <Header />

      {/* <------------------------------- Content Section -----------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Mobile App Development</h1>
        </div>
      </div>

      {/* <------------------------------------ Mobile App Development Section -------------------------------------> */}

      <div className={styles.mobileAppContent}>
        <div>
          <div className={styles.titles}>
            <p className={styles.mainTitle}>OUR EXPERT TEAM</p>
            <Stack direction="row" className={styles.bothTitle}>
              <p className={styles.middleTitle}>Mobile App</p>
              <p className={styles.lastTitle}>Development</p>
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
      </div>

      {/* <---------------------------------------- Technologies and Platforms Section ---------------------------------------> */}

      <div className={styles.heading}>
        {/* <p className={styles.mainTitle}>PROJECT</p> */}
        <Stack direction="row" spacing={2}>
          <p className={styles.middleTitle}>Technologies & Platforms</p>
          <p className={styles.lastTitle}>We Work With</p>
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

      {/* <------------------------------------- Recent Projects -----------------------------------------> */}

      <div>
        <div className={styles.titleOfRecentProjects}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <RecentProject />
      </div>

      {/* <----------------------------- Mobile App Development Services from Craft Coders ---------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Mobile App Development Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <------------------------------- Development Process Section ----------------------------------> */}

      <div className={styles.developmentProcess}>
        <img src={MobileProcess} alt="" className={styles.mobileProcess} />
        <img
          src={mobileDevProcess}
          alt=""
          className={styles.mobileDevProcess}
        />
      </div>

      {/* <----------------------------------- Form Section For Contact With Senior -------------------------------> */}

      <div className={styles.schedule}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Schedule A Call with our Senior Mobile Lead & Get a Free
          </div>
          <div className={styles.lastTitle}>Quotation for your project</div>
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

export default MobileAppDevelopment;
