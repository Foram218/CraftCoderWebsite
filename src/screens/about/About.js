import React from "react";
import Header from "../../components/common/Header/Header";
import styles from "./About.module.css";
import background from "../../assets/images/aboutBg.svg";
import vision from "../../assets/images/vision.svg";
import mission from "../../assets/images/mission.svg";
import CEOImage from "../../assets/images/CEO.svg";
import youtube from "../../assets/images/youtube.svg";
import clutch from "../../assets/images/clutchReview.svg";
import google from "../../assets/images/googleReview.svg";
import discover from "../../assets/images/discover.svg";
import design from "../../assets/images/design.svg";
import build from "../../assets/images/build.svg";
import deliver from "../../assets/images/deliver.svg";
import SimpleSoftwareDevelop from "../simplesoftwaredevelopment/SimpleSoftwareDevelop";
import Ratio from "../ratio/Ratio";
import mobileView from "../../assets/images/mobileView.svg";
import Stack from "@mui/material/Stack";
// import leftarrow from "./images/leftArrow.svg";
// import rightarrow from "./images/rightArrow.svg";
import Team from "../team/Team";
import JoinTeam from "../../assets/images/teamBtn.svg";
import Footer from "../../components/common/Footer/Footer";
// import TopBar from "./TopBar";

const About = () => {
  const simpleSoftware = [
    {
      img: discover,
      title: "Discover",
      titleColor: "#F8443B",
      desc: "Understand user needs, analyze market trends, define project scope through research, and align business objectives.",
    },
    {
      img: design,
      title: "Design",
      titleColor: "#FFBA00",
      desc: "User-centric design creates intuitive interfaces and engaging experiences through wireframes, prototypes, and visual designs.",
    },
    {
      img: build,
      title: "Build",
      titleColor: "#5AB8A2",
      desc: "Development team codes and builds software using programming languages, frameworks, and tools to bring design to life, ensuring quality.",
    },
    {
      img: deliver,
      title: "Deliver",
      titleColor: "#4193D2",
      desc: "Software delivered to end-users with training, documentation, support for smooth transition, feedback gathering, and continuous improvements.",
    },
  ];

  const ratio = [
    {
      number: 10,
      title: "Years of Excellence",
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

  const team = [
    {
      // img: VishalSingh,
      img: require("../../assets/images/vs.png"),
      name: "Vishal Singh",
      position: "Business Development Manager",
    },
    {
      // img: SudhirGamit,
      img: require("../../assets/images/sg.png"),
      name: "Sudhir Gamit",
      position: "Senior Flutter Developer",
    },
    {
      // img: JashPalavwala,
      img: require("../../assets/images/jk.png"),
      name: "Jay Kansara",
      position: "Senior React Native Developer",
    },
    {
      // img: VishalBhatt,
      img: require("../../assets/images/vb.png"),
      name: "Vishal Bhatt",
      position: "React Native Developer",
    },
  ];

  return (
    <div>
      {/* <TopBar /> */}

      <Header />

      {/* <-------------------------------- Content Section -------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>One of the fastest growing agency</h1>
          <p className={styles.MobileScreenText}>
            Capture your audience's attention with our top-notch mobile and web
            development solutions. Our team of experts specializes in
            transforming your innovative ideas into powerful applications that
            not only captivate users but also propel your business toward
            remarkable growth.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className={styles.mobileScreenbutton}>
              <button className={styles.button}>Who we are</button>
            </div>
          </div>
        </div>
      </div>

      {/* <----------------------------- About Section -------------------------------> */}

      <div className={styles.about}>
        <div className={styles.titles}>
          <div className={styles.mainTitle}>
            TRANSFORMING VISIONS INTO REALITY
          </div>
          <div className={styles.middleTitle}>
            Unlocking the Potential of our Clients through
          </div>
          <div className={styles.lastTitle}>Innovative Software Solutions</div>
        </div>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <p className={styles.text}>
              Craft Coders Infotech LLP is an India-based Mobile and Web
              application development company offering top-notch solutions to
              enterprises of all sizes. With a strong focus on quality, we
              leverage our vast technical expertise and business acumen to
              deliver unique and powerful solutions. From startups to large
              corporations, our services cater to diverse clients, helping them
              reach new heights in their business endeavors. Our dedication to
              excellence drives us to provide tailored solutions that propel
              businesses to the next level, making us a trusted partner in their
              growth journey.
            </p>
            <p className={styles.text1}>
              With a strong track record of success, we have gained a reputation
              for delivering high-quality products and services that exceed
              client expectations. Partner with us to unlock the full potential
              of your business and take it to new heights with our comprehensive
              mobile and web application development services.
            </p>
          </div>
          <div className={styles.right_container}>
            <div className={styles.firstContent}>
              <div>
                <img src={vision} alt="" className={styles.imageVision} />
              </div>
              <div className={styles.firstContentVision}>
                <p className={styles.visionTitle}>OUR VISION</p>
                <p className={styles.visionText}>
                  Our vision at Craft Coders Infotech LLP is to be a global
                  leader in mobile and web application development,
                  revolutionizing businesses through innovative and
                  transformative solutions.
                </p>
                <p className={styles.visionText}>
                  We aim to exceed client expectations by delivering
                  cutting-edge technology and exceptional services that propel
                  them towards long-term success.
                </p>
              </div>
            </div>

            <div className={styles.secondContent}>
              <div>
                <img src={mission} alt="" className={styles.imageVision} />
              </div>
              <div className={styles.firstContentVision}>
                <p className={styles.visionTitle}>OUR VISION</p>
                <p className={styles.visionText}>
                  Our mission at Craft Coders Infotech LLP is to empower
                  business with high-quality mobile and web application
                  solutions that drive growth and success.
                </p>
                {/* <p className={styles.visionText}>
                  We aim to exceed client expectations by delivering
                  cutting-edge technology and exceptional services that propel
                  them towards long-term success.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <------------------------------ Work and Review Section --------------------------------> */}

      <div className={styles.containerOfReview}>
        <div className={styles.images}>
          <img src={CEOImage} alt="" className={styles.image} />
          <img src={youtube} alt="" className={styles.youtube} />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.titlesOfReview}>
            <p className={styles.mainTitleOfReview}>A CLOSER LOOK AT</p>
            <div className={styles.both}>
              <p className={styles.middleTitleOfReview}>How We</p>
              <p className={styles.lastTitleOfReview}>Work</p>
            </div>
          </div>
          <p className={styles.textOfReview}>
            At Craft Coders Infotech LLP, we follow a collaborative and
            customer-centric approach to deliver exceptional results. We begin
            by thoroughly understanding our client's needs and goals. Our team
            then combines technical expertise with creative thinking to design
            and develop tailored mobile and web applications. Rigorous and
            quality assurance ensure flawless performance, followed by timely
            deployment.
          </p>
        </div>
      </div>
      <div className={styles.allReview}>
        <div className={styles.bothClient}>
          <p className={styles.middleTitle}>Read our</p>
          <p className={styles.lastTitle} style={{ marginLeft: 15 }}>
            reviews on
          </p>
        </div>
        <div className={styles.clientReviewImages}>
          <a href="https://clutch.co/profile/craft-coders-infotech-llp#highlights">
            <img src={clutch} alt="" className={styles.clutch} />
          </a>
          <div className={styles.border}></div>
          <a href="https://www.google.com/search?q=craftcodersinfotech&oq=craftcodersinfotech&aqs=chrome.0.69i59j46i10i175i199i512j69i60j69i65l2j69i60.7574j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3be04f27e340a7d1:0x265386f316def20b,1,,,,">
            <img src={google} alt="" className={styles.google} />
          </a>
        </div>
      </div>

      {/* <--------------------------- Software Development process ----------------------------------> */}

      <div className={styles.SimpleSoftware}>
        <div className={styles.mapTitles}>
          <div className={styles.mainTitle} style={{ textAlign: "center" }}>
            HOW WE PROCEED FEATURES
          </div>
          <div className={styles.middleTitle}>We Simplify Software</div>
          <div className={styles.lastTitle}>Development Process</div>
        </div>

        <div className={styles.map}>
          {simpleSoftware.map((item, index) => {
            return (
              <SimpleSoftwareDevelop
                index={index}
                img={item.img}
                title={item.title}
                titleColor={item.titleColor}
                desc={item.desc}
              />
            );
          })}
        </div>

        <img src={mobileView} alt="" className={styles.mobileView} />
      </div>

      {/* <-------------------------------------- Ratio Content ---------------------------------------> */}

      <div className={styles.ratio}>
        <div className={styles.titleOfRecentProjects}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Our</div>
            <div className={styles.lastTitle} style={{ marginLeft: 15 }}>
              Ratio
            </div>
          </div>
          <div className={styles.borderRatio}></div>
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
              alignItems: "flex-start",
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

      {/* <--------------------------------------- Events Content -----------------------------------> */}

      <div className={styles.ourEvents}>
        <Stack className={styles.events} justifyContent="center">
          <div className={styles.imgContainer}>
            {/* <img src={event1} alt="" className={styles.event1} /> */}
            <img
              src={require("../../assets/images/e1.png")}
              alt=""
              className={styles.event1}
            />
            <p className={styles.eventName}>Farm House Event</p>
            {/* <img src={event2} alt="" className={styles.event2} /> */}
            <img
              src={require("../../assets/images/e2.png")}
              alt=""
              className={styles.event1}
            />
            <p className={styles.eventName}>Navratri</p>
            <div className={styles.titlesOfEvent}>
              {/* <p className={styles.mainTitle} style={{ margin: 0 }}>
                PROJECT
              </p> */}
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
            {/* <img src={event3} alt="" className={styles.event1} /> */}
            <img
              src={require("../../assets/images/e3.png")}
              alt=""
              className={styles.event1}
            />
            <p className={styles.eventName}>Ganesh Chaturthi</p>
            {/* <img src={event4} alt="" className={styles.event1} /> */}
            <img
              src={require("../../assets/images/e4.png")}
              alt=""
              className={styles.event1}
            />
            <p className={styles.eventName}>Independence day</p>
            {/* <img src={event5} alt="" className={styles.event1} /> */}
            <img
              src={require("../../assets/images/e5.png")}
              alt=""
              className={styles.event1}
            />
          </div>
        </Stack>
      </div>

      {/* <--------------------------------- Team container ----------------------------------> */}

      <div className={styles.ourTeam}>
        <div className={styles.titlesOfTeam}>
          <div className={styles.both}>
            <div className={styles.middleTitle}>Meet</div>
            <div className={styles.lastTitle} style={{ marginLeft: 15 }}>
              Our Experts
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }} className={styles.teamContent}>
          {team.map((item) => {
            return (
              <Team img={item.img} name={item.name} position={item.position} />
            );
          })}
        </div>
        <div className={styles.buttonContainer}>
          <div style={{ display: "flex" }} className={styles.buttonBorder}>
            <p className={styles.buttonText}>Join Our Team</p>
            <img src={JoinTeam} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
