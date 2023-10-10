import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./AngularJSTechnologies.module.css";
import background from "../../../assets/images/AngularJSTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import customAngularTech from "../../../assets/images/customAngularTech.svg";
import frontendTech from "../../../assets/images/frontendTech.svg";
import PlugInDevelopTech from "../../../assets/images/PlugInDevelopTech.svg";
import migrationTech from "../../../assets/images/migrationTech.svg";
import APIAngularTech from "../../../assets/images/APIAngularTech.svg";
import ResponsiveDesignAngularTech from "../../../assets/images/ResponsiveDesignAngularTech.svg";
import PerformanceOptiTech from "../../../assets/images/PerformanceOptiTech.svg";
import onGoingTech from "../../../assets/images/onGoingTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferAngularJs from "../../../assets/images/OfferAngularJs.svg";
import OfferAngularJsMobile from "../../../assets/images/OfferAngularJsMobile.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const AngularJS = () => {
  const appContent = [
    {
      img: customAngularTech,
      title: " Custom Angular.js Solutions ",
      desc: "Our team takes pride in delivering tailor-made Angular.js solutions that align perfectly with your business objectives. We understand that every project is unique, and our custom development approach ensures that your application is scalable, performant, and responsive across devices.",
    },
    {
      img: frontendTech,
      title: " Front-End Expertise ",
      desc: " Angular.js is at the forefront of modern front-end development, and we're here to leverage its power for your benefit. Our developers are well-versed in building seamless user interfaces and engaging user experiences that drive user satisfaction and business growth.",
    },
    {
      img: migrationTech,
      title: " Migration and Upgradation ",
      desc: " If you're looking to migrate your existing application to Angular.js or upgrade to a newer version, our experts are here to help. We ensure a smooth transition that preserves your data and functionality while taking advantage of Angular.js's advanced features. ",
    },
    {
      img: PlugInDevelopTech,
      title: " Plug-in and Module Development ",
      desc: " Enhance your application's functionality with our Angular.js plug-in and module development services. We create custom extensions that integrate seamlessly with your application, adding new features and capabilities. ",
    },
    {
      img: APIAngularTech,
      title: " API Integration ",
      desc: " Our team has a strong background in integrating APIs into Angular.js applications, allowing you to connect with third-party services and leverage external functionalities to enrich your app.",
    },
    {
      img: ResponsiveDesignAngularTech,
      title: " Responsive Design ",
      desc: " With the proliferation of mobile and tablet usage, responsive design is crucial. Our Angular.js solutions are developed with responsiveness in mind, ensuring that your application looks and functions flawlessly across various screen sizes. ",
    },
    {
      img: PerformanceOptiTech,
      title: " Performance Optimization ",
      desc: "We understand the importance of fast-loading and performant applications. Our developers employ best practices to optimize your Angular.js app's performance, ensuring quick load times and smooth user interactions. ",
    },
    {
      img: onGoingTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching your application is just the beginning. We provide continuous support and maintenance services to keep your Angular.js application up-to-date, secure, and running smoothly. ",
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
    <div>
      <div className={styles.mainContainer}>
        <Header />

        {/* <--------------------------------- Content Section ---------------------------------> */}

        <div className={styles.content}>
          <div className={styles.leftContent}>
            <p className={styles.heading}>AngularJS Development</p>
            <p className={styles.desc}>
              We are committed to unlocking Angular.js's full potential for
              crafting advanced web applications that align with your distinct
              business requirements. Our seasoned developers specialize in
              creating dynamic, interactive solutions like Single Page
              Applications (SPAs), Progressive Web Apps (PWAs), and real-time
              dashboards.
            </p>
            <p className={styles.desc}>
              With a focus on innovation and user engagement, we deliver
              tailored digital experiences that empower your business in the
              modern online landscape.
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

        <div className={styles.offerContainer}>
          <img src={OfferAngularJs} alt="" className={styles.OfferAngularJs} />
          <img
            src={OfferAngularJsMobile}
            alt=""
            className={styles.OfferAngularJsMobile}
          />
        </div>

        {/* <----------------------------- React JS Development Services from Craft Coders -----------------------------------> */}

        <div className={styles.mobileApps}>
          <div className={styles.titles} style={{ textAlign: "center" }}>
            {/* <div className={styles.mainTitle}>PROJECT</div> */}
            <div className={styles.middleTitle}>
              Why Choose Angular JS Development Services From
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
    </div>
  );
};

export default AngularJS;
