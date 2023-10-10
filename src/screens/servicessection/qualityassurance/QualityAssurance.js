import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./QualityAssurance.module.css";
import background from "../../../assets/images/qualityAssuranceBg.svg";
import Stack from "@mui/material/Stack";
import MobileContent from "../mobilecontent/MobileContent";
import QualityTesting from "../../../assets/images/qualityTesting.svg";
import FunctionalTesting from "../../../assets/images/functionalTesting.svg";
import PerformanceTesting from "../../../assets/images/performanceTesting.svg";
import SecurityTesting from "../../../assets/images/securityTesting.svg";
import UsabilityTesting from "../../../assets/images/usabilityTesting.svg";
import CompatibilityTesting from "../../../assets/images/compatibilityTesting.svg";
import Documentation from "../../../assets/images/documentation.svg";
import Platform from "../../platform/Platform";
// import RecentProject from "./RecentProject";
import MobileAppServices from "../mobileservices/MobileAppServices";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import QualityProcess from "../../../assets/images/QualityProcess.svg";
import QSMobile from "../../../assets/images/QSMobile.svg";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";
import FormContainer from "../../form/FormContainer";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";

const QualityAssurance = () => {
  const appContent = [
    {
      img: QualityTesting,
      title: "Quality Assurance Testing",
      desc: "We conduct rigorous quality assurance testing to verify that your software application meets the highest standards of quality, functionality, and performance. Our quality analysts perform thorough testing at various stages of development, including unit testing, integration testing, system testing, and user acceptance testing. By identifying and resolving issues early on, we help you deliver a flawless user experience.",
    },
    {
      img: FunctionalTesting,
      title: "Functional Testing",
      desc: "We meticulously test each feature and functionality of your software application to ensure it performs as intended. Our quality analysts validate that all features are working correctly, adhering to the specified requirements and business logic. We cover a wide range of functional testing techniques, including smoke testing, regression testing, and end-to-end testing.",
    },
    {
      img: PerformanceTesting,
      title: "Performance Testing",
      desc: "We assess the performance and scalability of your software application to ensure it can handle the expected load and perform optimally under various conditions. Our performance testing measures response times, throughput, and resource utilization to identify any bottlenecks or performance issues. We provide valuable insights to optimize your application's performance and deliver a seamless user experience.",
    },
    {
      img: SecurityTesting,
      title: "Security Testing",
      desc: "The security of your software application is of utmost importance. Our security testing services aim to identifyvulnerabilities and ensure the protection of sensitive data. We conduct comprehensive security testing, including penetration testing, vulnerability scanning, and code review, to identify potential security loopholes and provide recommendations for enhancing security measures.",
    },
    {
      img: UsabilityTesting,
      title: "Usability Testing",
      desc: "User experience is a critical factor in the success of any software application. Our usability testing services evaluate the user-friendliness, intuitiveness, and overall user experience of your application. Through user feedback, observations, and usability metrics, we identify areas for improvement and provide actionable recommendations to enhance the usability of your software.",
    },
    {
      img: CompatibilityTesting,
      title: "Compatibility Testing",
      desc: "We ensure your software application functions seamlessly across different platforms, browsers, and devices. Our compatibility testing services validate that your application is compatible with various operating systems, web browsers, screen resolutions, and mobile devices. By testing on multiple platforms, we ensure consistent performance and user experience for your target audience.",
    },
    {
      img: Documentation,
      title: "Reporting and Documentation",
      desc: "Throughout the quality analysis process, we provide detailed reports, documenting the testing procedures, identified issues, and recommendations for improvement. Our comprehensive documentation ensures transparency and facilitates efficient communication between our team and your development team.",
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
    <div className={styles.qualityAssuranceContainer}>
      {/* <TopBar /> */}

      <Header />

      {/* <-------------------------------------------- Content Section ---------------------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Quality Assurance</h1>
        </div>
      </div>

      {/* <---------------------------------- Quality Assurance Section --------------------------------------------> */}

      <div className={styles.qualityAssuranceMain}>
        <div className={styles.titles}>
          {/* <p className={styles.mainTitle}>PROJECT</p> */}
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Quality</p>
            <p className={styles.lastTitle}>Assurance</p>
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

      {/* <----------------------------------- Technologies and Platforms Section --------------------------------------> */}

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

      {/* <div>
        <div className={styles.titleOfRecentProjects}>
          <div className={styles.mainTitle}>PROJECT</div>
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <RecentProject />
      </div> */}

      {/* <------------------------------------- Quality Assurance Services from Craft Coders --------------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Quality Assurance Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <---------------------------------- Development Process Section -----------------------------------------> */}

      <div className={styles.developmentProcess}>
        <img src={QualityProcess} alt="" className={styles.QualityProcess} />
        <img src={QSMobile} alt="" className={styles.QSMobile} />
      </div>

      {/* <------------------------------------ Form Section for Contact with Senior -----------------------------------> */}

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

      {/* <------------------------------------- Clients Review Section ----------------------------------------> */}

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

export default QualityAssurance;
