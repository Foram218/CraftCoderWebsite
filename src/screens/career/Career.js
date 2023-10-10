import React from "react";
import styles from "./Career.module.css";
import Header from "../../components/common/Header/Header";
import background from "../../assets/images/careerBg.svg";
import SubmitIcon from "../../assets/images/teamBtn.svg";
import LearningAndDevelopment from "../../assets/images/learningAndDevelopment.svg";
import UnwindAndBond from "../../assets/images/unwindAndBond.svg";
import RecognizationAndRewards from "../../assets/images/recognizationAndRewards.svg";
import BonusesExtraEfforts from "../../assets/images/bonusesExtraEfforts.svg";
import WorkLifeBalance from "../../assets/images/workLifeBalance.svg";
import TeamBuilding from "../../assets/images/teamBuilding.svg";
import Jobs from "../jobs/Jobs";
import JobOpening from "../jobs/JobOpening";
import Stack from "@mui/material/Stack";
import Ratio from "../ratio/Ratio";
import Review from "../review/Review";
import event1 from "../../assets/images/event1.svg";
import event2 from "../../assets/images/event2.svg";
import event3 from "../../assets/images/event3.svg";
import event4 from "../../assets/images/event4.svg";
import event5 from "../../assets/images/event5.svg";
import Map from "../map/Map";
import Footer from "../../components/common/Footer/Footer";

const Career = () => {
  // const selectorRef = useRef();

  const jobs = [
    {
      img: LearningAndDevelopment,
      title: "Continuous Learning and Development",
      text: "Empower employees through practical training and mentorship to unlock their full potential and achieve excellence.",
    },
    {
      img: UnwindAndBond,
      title: "Unwind and Bond",
      text: "Bond as a team through events, picnics, and lunches, fostering relationships and creating lasting connections.",
    },
    {
      img: RecognizationAndRewards,
      title: "Recognition and Rewards",
      text: "Recognize and reward employee dedication, motivating them to excel and reach new heights of success.",
    },
    {
      img: BonusesExtraEfforts,
      title: "Bonuses for Extra Effort",
      text: "Recognize extra effort with holiday overtime bonuses, valuing work-life balance, and appreciation for dedication.",
    },
    {
      img: WorkLifeBalance,
      title: "Work-Life Balance",
      text: "Promote work-life balance with Saturdays off, fostering well-being, quality time, and personal growth for employees.",
    },
    {
      img: TeamBuilding,
      title: "Team Building",
      text: "Build trust and unity through team workshops and activities, fostering collaboration, communication, and innovation.",
    },
  ];

  const jobOpening = [
    {
      title: "React Native Developer",
      openings: 5,
      qualification: "BCA/MCA/BSC.IT/MSC.IT/B-Tech CS",
      skill: "Javascript, TypeScript, API Integrations, RN UI Components, Git",
    },
    {
      title: "Flutter Developer",
      openings: 5,
      qualification: "BCA/MCA/BSC.IT/MSC.IT/B-Tech CS",
      skill: "Dart, Flutter Widgets, API Integration, BLoC, CI/CD Tools",
    },
    {
      title: "React JS Developer",
      openings: 5,
      qualification: "BCA/MCA/BSC.IT/MSC.IT/B-Tech CS",
      skill:
        "HTML, CSS, Javascript, TypeScript,Material UI, API Integrations, RN UI Components, Git",
    },
    {
      title: "Full Stack Developer",
      openings: 5,
      qualification: "BCA/MCA/BSC.IT/MSC.IT/B-Tech CS",
      skill:
        "HTML, CSS, JavaScript, React.js /Angular/Vue.js, Node.js/Express.js, MYSQL/MongoDB/Firebase",
    },
    {
      title: "Business Developement Executive",
      openings: 2,
      qualification: "BCA/MCA",
      skill:
        "Communication, Online Bidding, Generating Leads,  Handling Clients ",
    },
    {
      title: "HR Executive",
      openings: 2,
      qualification: "BCA/MCA/BSC.IT/MSC.IT/B-Tech CS",
      skill:
        "Communication, HR Principles & Regulations, Recruitment & Selection, Compensation & Benefits, Training & Development",
    },
  ];

  const ratio = [
    {
      number: 10,
      title: "Years of Experience",
    },
    {
      number: 100,
      title: "Happy Clients",
    },
    {
      number: 25,
      title: "Talented IT Professionals",
    },
    {
      number: 100,
      title: "Project Delivered",
    },
    {
      number: 95,
      title: "Client Rentention Ratio",
    },
    {
      number: 100,
      title: "Project Delivery Success Ratio",
    },
  ];

  return (
    <div>
      {/* <TopBar /> */}

      <Header />

      {/* <-------------------------------------- Content Section ----------------------------------> */}

      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p className={styles.heading}>Join Our Team</p>
          <p className={styles.desc}>
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
          </p>
          <p className={styles.desc}>
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
            We are here to help you to boost your business to stand out in the
            market and reach to your customers and achieve your business goals.
          </p>
          <div className={styles.container}>
            <div className={styles.button}>
              <p className={styles.textOfButton}>Know More</p>
              <img src={SubmitIcon} alt="" className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.mobileScreenbutton}>
          <button className={styles.button}>Who we are</button>
        </div>
        <div className={styles.rightContent}>
          <img src={background} alt="" className={styles.background} />
        </div>
      </div>

      {/* <-------------------------------- Software Engineer job Section ----------------------------------> */}

      <div className={styles.jobs}>
        {/* <div className={styles.mainTitle}>PROJECT</div> */}
        <div className={styles.centerTitle}>Benefits To Join Us</div>

        <div className={styles.jobContent}>
          <div className={styles.job1}>
            {jobs.map((item, index) => {
              if (index <= 2) {
                return (
                  <Jobs
                    index={index}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className={styles.job1}>
            {jobs.map((item, index) => {
              if (index >= 3) {
                return (
                  <Jobs
                    index={index}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* <------------------------------------ Current Job Opening Section ---------------------------------->  */}

      <div className={styles.currentOpening}>
        <div className={styles.titles}>
          <div className={styles.mainTitleOfJobOpening}>WE ARE HIRING</div>
          <div className={styles.centerTitleOfJobOpening}>
            Current Job Openings
          </div>
        </div>
        <div className={styles.currentJob}>
          {jobOpening.map((item, index) => {
            if (index <= 2) {
              return (
                <JobOpening
                  title={item.title}
                  index={index}
                  openings={item.openings}
                  qualification={item.qualification}
                  skill={item.skill}
                />
              );
            }
            return null;
          })}
        </div>
        <div className={styles.currentJob}>
          {jobOpening.map((item, index) => {
            if (index >= 3) {
              return (
                <JobOpening
                  title={item.title}
                  index={index}
                  openings={item.openings}
                  qualification={item.qualification}
                  skill={item.skill}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* <-------------------------------------- Ratio Section ----------------------------------------> */}

      <div className={styles.ratio}>
        <div className={styles.titleOfRecentProjects}>
          <div className={styles.mainTitleOfRatio}>SCALE</div>
          <div className={styles.bothTitle}>
            <div className={styles.middleTitleOfRatio}>Our</div>
            <div className={styles.lastTitleRatio} style={{ marginLeft: 15 }}>
              Ratio
            </div>
          </div>
        </div>

        <div
          className={styles.ratioDetail}
          style={{
            flexDirection: "column",
            flex: 1,
            display: "flex",
          }}
        >
          <div
            className={styles.ratioDesc}
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            {ratio.map((item, index) => {
              if (index <= 2) {
                return (
                  <Ratio
                    index={index}
                    number={item.number}
                    title={item.title}
                  />
                );
              }
              return null;
            })}
          </div>
          <div
            className={styles.ratioDesc}
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {ratio.map((item, index) => {
              if (index >= 3) {
                return (
                  <Ratio
                    index={index}
                    number={item.number}
                    title={item.title}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* <-------------------------------------- Review Section -------------------------------------> */}

      <div style={{ backgroundColor: "#fff" }}>
        <Review />
      </div>

      {/* <-------------------------------------------- Events Section ----------------------------------------------> */}

      <div className={styles.ourEvents}>
        <Stack className={styles.events} justifyContent="center">
          <div className={styles.events12}>
            <img src={event1} alt="" className={styles.event1} />
            <p className={styles.eventName}>Farm House Event</p>
            <img src={event2} alt="" className={styles.event2} />
            <p className={styles.eventName}>Navratri</p>
            <div className={styles.titlesOfEvent}>
              <p className={styles.mainTitle} style={{ margin: 0 }}>
                CULTURE
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <p className={styles.middleTitle} style={{ margin: 0 }}>
                  Our
                </p>
                <p className={styles.lastTitleEvent}>Events</p>
              </div>
            </div>
          </div>
          <div className={styles.events1}>
            <p className={styles.eventName}>Fun Activity</p>
            <img src={event3} alt="" className={styles.event1} />
            <p className={styles.eventName}>Ganesh Chaturthi</p>
            <img src={event4} alt="" className={styles.event1} />
            <p className={styles.eventName}>Independence day</p>
            <img src={event5} alt="" className={styles.event1} />
          </div>
        </Stack>
      </div>

      {/* <------------------------------------ Let's have talk Section ------------------------------------> */}

      <Map />

      <Footer />
    </div>
  );
};

export default Career;
