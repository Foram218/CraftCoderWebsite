import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./AndroidTechnologies.module.css";
import background from "../../../assets/images/AndroidTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import androidATech from "../../../assets/images/androidATech.svg";
import optimizedATech from "../../../assets/images/optimizedATech.svg";
import userCentricATech from "../../../assets/images/userCentricATech.svg";
import playStoreATech from "../../../assets/images/playStoreATech.svg";
import efficientATech from "../../../assets/images/efficientATech.svg";
import APIATech from "../../../assets/images/APIATech.svg";
import ongoingATech from "../../../assets/images/ongoingATech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferAndroid from "../../../assets/images/OfferAndroid.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";

const Android = () => {
  const appContent = [
    {
      img: androidATech,
      title: " Custom Android Solutions ",
      desc: "Our expertise lies in delivering custom Android solutions that align precisely with your business objectives. From sleek user interfaces to complex functionalities, we develop applications that cater to your unique requirements.",
    },
    {
      img: optimizedATech,
      title: " Optimized Performance ",
      desc: " Android's flexibility and versatility allow us to optimize every aspect of your application, ensuring smooth performance, quick load times, and a seamless user experience.",
    },
    {
      img: userCentricATech,
      title: " User-Centric Design ",
      desc: " Our designers work closely with developers to create intuitive and visually appealing interfaces that enhance user engagement and satisfaction. We follow industry best practices and adhere to platform-specific design guidelines. ",
    },
    {
      img: playStoreATech,
      title: " Play Store Deployment ",
      desc: " We guide you through the process of preparing your Android application for submission to the Google Play Store, ensuring it meets the platform's guidelines and requirements. ",
    },
    {
      img: efficientATech,
      title: " Efficient Development ",
      desc: " Android's comprehensive tools and frameworks facilitate efficient app development, enabling us to deliver your app faster without compromising quality. ",
    },
    {
      img: APIATech,
      title: " API Integration ",
      desc: " Our team specializes in integrating APIs into Android applications, enabling your app to communicate with external services, databases, and other systems seamlessly.Fragmentation Management: Android's diverse ecosystem presents unique challenges, but our developers ensure that your app functions flawlessly across various devices, screen sizes, and versions.",
    },
    {
      img: ongoingATech,
      title: " Ongoing Support and Maintenance ",
      desc: " Launching your Android app is just the beginning. Our team provides continuous support and maintenance to keep your application up-to-date, secure, and aligned with evolving platform updates. ",
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
          <p className={styles.heading}>Android App Development</p>
          <p className={styles.desc}>
            Immerse yourself in the world of mobile app innovation with Android,
            where creativity and functionality combine to create exceptional
            applications tailored to your unique needs. Our skilled team of
            developers excels in harnessing the power of Android to build
            dynamic, user-friendly apps that cater to diverse industries and
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

      <div className={styles.offerContainer}>
        <img src={OfferAndroid} alt="" className={styles.OfferReactJs} />
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

export default Android;
