import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import CEOContent from "../contentCeo/CEOContent";
import ClientReview from "../clientReview/ClientReview";
import Content from "../content/Content";
import Design from "../design/Design";
import Features from "../features/Features";
import Footer from "../../components/common/Footer/Footer";
import styles from "./Home.module.css";
import Platform from "../platform/Platform";
import Projects from "../projects/Projects";
import Review from "../review/Review";
import HomeBg from "../../assets/images/HomeBg.png";
import HomeBgMobile from "../../assets/images/HomeBgMobile.png";
import HomeBgCustom from "../../assets/images/HomeBgCustom.png";
import Header from "../../components/common/Header/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slider from "infinite-react-carousel";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: HomeBg,
  },
  {
    image: HomeBgMobile,
  },
  {
    image: HomeBgCustom,
  },
];

const Home = () => {
  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

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

      {/* <--------------------------------- Content Section ------------------------------> */}

      <div className={styles.mainContentContainer}>
        <div className={styles.contentText}>
          <p className={styles.contentMainTitleAni}>
            Build an Engaging Online Presence
          </p>
          <div className={styles.animatedContent}>
            <p className={styles.contentMainTitleAni1}>with </p>
            <div className={styles.fourthCircle}>
              <div className={styles.anii}>
                <p className={styles.contentLastTitleAni}>
                  Web App Development
                </p>
              </div>
              <div className={styles.anii}>
                <p className={styles.contentLastTitleAni}>
                  Mobile App Development
                </p>
              </div>
              <div className={styles.anii}>
                <p className={styles.contentLastTitleAni}>
                  Custom Software Development
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contentDesc}>
            <span className={styles.spanTextAni}>
              Unlock Your Digital Potential with Expert Software Development
              Services. We specialize in crafting innovative solutions, from
              cutting-edge mobile and web app development to engaging websites
              and custom software.
            </span>
            <p className={styles.spanTextAni1}>
              Let us bring your ideas to life with our skilled team of
              developers, ensuring top-notch quality and timely delivery.
              Empower your business for success with our tailored software
              solutions.
            </p>
          </div>
          <button
            className={styles.buttonContainer}
            onClick={() => navigate("/ContactUs")}
          >
            <span>Consult Craft Coders</span>
          </button>
        </div>
        <div className={styles.right}>
          <Slider
            arrows={false}
            dots={false}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            centerPadding={0}
            autoplaySpeed={4000}
          >
            {slides.map((item) => {
              return (
                <div>
                  <img src={item.image} alt="" className={styles.animatedImg} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* <--------------------------------------  Design Section  ---------------------------------------->  */}

      <Design />

      {/* <---------------------------------- Features and Services Content -------------------------> */}

      <div className={styles.featuresContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.mainTitle}>WHAT WE OFFER</p>
          <p className={styles.centerTitle}>Our Features & </p>
          <p className={styles.lastTitle}>Services</p>
        </div>

        <Features />
      </div>

      {/* <---------------------------------- Project Section ----------------------------------> */}

      <div className={styles.projects}>
        <Projects />
      </div>

      {/* <-------------------------------------- Technologies and Platforms -------------------------------------> */}

      <div className={styles.heading}>
        <p className={styles.mainTitle}>OUR TECH EXPERTISE</p>
        <Stack className={styles.headingTitle}>
          <p className={styles.centerTitle}>Technologies & Platforms</p>
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

      <Content />

      <Review />

      <ClientReview />

      <CEOContent />

      <Footer />
    </div>
  );
};

export default Home;

<div id="loading"></div>;
