import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "../reactjs/ReactJSTechnologies.module.css";
import background from "../../../assets/images/ReactJSTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import CustomReactWebDevelop from "../../../assets/images/CustomReactWebDevelop.svg";
import ReactJsEnterpriseTech from "../../../assets/images/ReactJsEnterpriseTech.svg";
import PlugInDevelopTech from "../../../assets/images/PlugInDevelopTech.svg";
import API from "../../../assets/images/API.svg";
import migrationTech from "../../../assets/images/migrationTech.svg";
import SupportTech from "../../../assets/images/SupportTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferReactJs from "../../../assets/images/OfferReactJs.svg";
import OfferReactJsMobile from "../../../assets/images/OfferReactJsMobile.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const ReactJS = () => {
  const appContent = [
    {
      img: CustomReactWebDevelop,
      title: " Custom ReactJS Web Development ",
      desc: "At Craft Coders Infotech LLP, we pride ourselves on delivering customized, lightweight, and easily scalable web applications that are tailor-made to meet your specific business needs. Our ReactJS development services are geared towards providing long-term reliability and 100% guaranteed satisfaction. With a successful track record of over 30+ ReactJS projects, we have the experience and expertise to bring your vision to life.",
    },
    {
      img: ReactJsEnterpriseTech,
      title: " ReactJS Enterprise App Development ",
      desc: " When it comes to building large-scale B2B and enterprise web applications, our offshore ReactJS developers are second to none. We offer scalable and secure solutions that enable rapid development and seamless integration with diverse third-party tools. Whether you require a short-term project or a long-term partnership, you can hire our experienced ReactJS dedicated developers to tackle even the most complex enterprise-level projects.",
    },
    {
      img: PlugInDevelopTech,
      title: " Plug-in Development ",
      desc: " Extend the functionality of your web application with our top-notch ReactJS Plugin Development Services. Our team of skilled React specialists excels in developing and integrating plugins and modules to enhance your application's capabilities. If you encounter any issues with your existing plugin functionality, our custom ReactJS plugin development services are here to help you overcome them. ",
    },
    {
      img: API,
      title: " API Integration and Development ",
      desc: " Embrace the power of API-driven ReactJS projects with our expert team. We offer seamless API integration for your ReactJS applications, along with feature enhancements and optimizations. Leverage robust 3rd-party solutions to take  your web application to the next level. ",
    },
    {
      img: migrationTech,
      title: " Migration and Upgradation ",
      desc: " Our React developers possess proven expertise in seamless migration and upgradation of existing apps to the ReactJS platform. With us, you can realign your business applications without losing any data, ensuring a smooth transition to a modern and dynamic environment.",
    },
    {
      img: SupportTech,
      title: " Support & Maintenance ",
      desc: " Building an app is just the beginning; we understand the importance of timely updates and maintenance to ensure a seamless user experience. Our team offers complete support and maintenance services, ensuring your app remains glitch-free and up-to-date with the latest versions and features. ",
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
          <p className={styles.heading}>ReactJS Development</p>
          <p className={styles.desc}>
            Welcome to Craft Coders Infotech LLP, your destination for
            cutting-edge React.js web development solutions. Our team of skilled
            developers is committed to providing innovative and
            performance-oriented web applications that will propel your business
            to new heights of success.
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
          <p className={styles.mainTitle}> OUR EXPERT TEAM </p>
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}> Help you with </p>
            <p className={styles.lastTitle}> below services</p>
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
        <img src={OfferReactJs} alt="" className={styles.OfferReactJs} />
        <img
          src={OfferReactJsMobile}
          alt=""
          className={styles.OfferReactJsMobile}
        />
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

export default ReactJS;
