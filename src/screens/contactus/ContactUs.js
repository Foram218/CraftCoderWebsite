import React, { useRef, useState } from "react";
import Header from "../../components/common/Header/Header";
import styles from "./ContactUs.module.css";
import background from "../../assets/images/contactUsBg.svg";
import VisitUs from "../../assets/images/visitUs.svg";
import Call from "../../assets/images/call.svg";
import Mail from "../../assets/images/mail.svg";
import SubmitIcon from "../../assets/images/teamBtn.svg";
// import Captcha from "./Captcha";
import Rating from "../../assets/images/rating.svg";
import Layer_1 from "../../assets/images/Layer_1.svg";
import Stack from "@mui/material/Stack";
import ClientBox from "../../assets/images/clientBox.svg";
import Star from "../../assets/images/5Star.svg";
// import Verify from "./images/verify.svg";
import ClientStories from "../clientstories/ClientStories";
import Footer from "../../components/common/Footer/Footer";
import { Slider } from "infinite-react-carousel/lib";

const ContactUs = () => {
  const ClientReview = [
    {
      clientBox: ClientBox,
      img: Star,
      desc: "Their team always followed through on their commitments, and they communicated well.",
      content: "Founder & CTO, IT Consulting Firm",
    },
    {
      clientBox: ClientBox,
      img: Star,
      desc: "They were very eager and helpful in translating our needs into the mobile app.",
      content: "Owner, PMKDatabase",
    },
    {
      clientBox: ClientBox,
      img: Star,
      desc: "They were ready to support us as needed at any time with advance notice.",
      content: "Director, Taxiemall Technologies Private Limited",
    },
    {
      clientBox: ClientBox,
      img: Star,
      desc: "I find them easy to work with and, most importantly, cost-effective.",
      content: "General Manager, Easicleans York Limited",
    },
    {
      clientBox: ClientBox,
      img: Star,
      desc: "The team has a lot of talent and expertise.",
      content: "CEO, Digital Business Card",
    },
    {
      clientBox: ClientBox,
      img: Star,
      desc: "Craft Coders Infotech LLP delivered what they promised — they never made a promise they couldn’t keep.",
      content: "Founder & CEO, J-Pad",
    },
  ];
  const selectorRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
    number: "",
  });

  return (
    <div className={styles.mainContainer}>
      <Header />

      {/* <------------------------------- Content Section -------------------------------------> */}

      <div className={styles.content}>
        <img
          src={background}
          alt=""
          style={{ width: "100%", borderRadius: 0, margin: 0 }}
          className={styles.bgImg}
        />
        <div className={styles.imageText}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.text}>
            Reach out to us to receive a complimentary quote and engage our
            committed developer for the development of mobile and web
            applications. We excel at meeting the most challenging project
            specifications while staying within your budget. Don’t hesitate to
            get in touch with us to discuss your requirements and explore the
            possibilities of partnering with our skilled team.
          </p>
          <div className={styles.buttonMobile}>
            <button className={styles.btnText}>Who we are</button>
          </div>
        </div>
      </div>

      {/* <-------------------------------- Contact and Visit Section --------------------------------> */}

      <div className={styles.ourContact}>
        <div className={styles.visitDetail}>
          <img src={VisitUs} alt="" className={styles.icon} />
          <div className={styles.twoDetail}>
            <div className={styles.titleBox}>Visit Us</div>
            <p className={styles.textBox}>
              1925, Second Floor, Stitching Point Fabrics <br />
              Ghanti Sheri, Limda Chowk, Bhagal, Surat, <br />
              Gujarat 395003
            </p>
          </div>
        </div>
        <div className={styles.visitDetail}>
          <img src={Call} alt="" className={styles.icon} />
          <div className={styles.twoDetail}>
            <div className={styles.titleBox}>Contact Us</div>
            <p className={styles.textBox}>+91 902 387 7905</p>
          </div>
        </div>
        <div className={styles.visitDetail}>
          <img src={Mail} alt="" className={styles.icon} />
          <div className={styles.twoDetail}>
            <div className={styles.titleBox}>Email Us</div>
            <a href="hr@craftcodersinfotech.com" style={{}}>
              <p className={styles.textBox}>hr@craftcodersinfotech.com</p>
            </a>
          </div>
        </div>
      </div>

      {/* <----------------------------------------------- Map and Contact Section -------------------------------------------> */}

      <div className={styles.contact}>
        <div className={styles.mainTitle}>CONTACT</div>
        <div className={styles.lastTitle}>Let's have talk?</div>
        <div className={styles.combineContainer}>
          <div className={styles.leftContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8545787166217!2d72.82572257605761!3d21.19793508194499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27e340a7d1%3A0x265386f316def20b!2sCraft%20Coders%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1689057672951!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            ></iframe>
          </div>

          <div className={styles.rightContainer}>
            <p className={styles.titleOfContact}>How do we help ?</p>
            <form
            // onSubmit={handleSubmit}
            >
              <input
                name="name"
                id="name"
                placeholder="Name"
                className={styles.input}
                required
              />
              <input
                name="email"
                id="email"
                placeholder="Email"
                className={styles.input}
                required
              />
              <input
                name="number"
                id="number"
                minLength={10}
                maxLength={10}
                placeholder="Phone"
                className={styles.input}
                required
              />
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                className={styles.message}
                required
              />
              <input
                type="file"
                id="file"
                name="file"
                // placeholder="Upload Your Resume"
                className={styles.file}
                style={{ display: "none" }}
                ref={selectorRef}
                // value={formData.file}
                // onChange={handleChange}
                required
              />
              <input
                onClick={() => selectorRef.current.click()}
                className={styles.border}
                style={{ cursor: "pointer" }}
                // value={formData.file}
                // onChange={handleChange}
                placeholder=" Attach Your File"
                required
              ></input>

              <div
                className={styles.both}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <Captcha /> */}
              </div>
              <div className={styles.container}>
                <button type="submit" className={styles.button}>
                  <p className={styles.textOfButton}>Submit</p>
                  <img
                    src={SubmitIcon}
                    alt=""
                    style={{ marginLeft: "10px" }}
                    className={styles.SubmitIcon}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <--------------------------------- Client's Clutch Reviews -----------------------------------> */}

      <div className={styles.clientStories}>
        <div className={styles.titleContainer}>
          <div className={styles.clientTitles}>
            <div className={styles.mainTitle}>REVIEW</div>
            <div className={styles.lastTitle}>
              Client Stories - Clutch Reviews
            </div>
          </div>
          <div className={styles.clientReviewDetail}>
            <div className={styles.clientContent}>
              <a href="https://clutch.co/profile/craft-coders-infotech-llp#highlights">
                <div className={styles.titleOfCC}>
                  Craft Coders Infotech LLP Reviews
                </div>
              </a>
              <Stack
                direction="row"
                spacing={2}
                className={styles.ratingSection}
              >
                <img src={Rating} alt="" className={styles.rating} />
                <p className={styles.textColor}>6 REVIEWS</p>
              </Stack>
            </div>
            <span className={styles.span}>
              <Stack className={styles.powered} spacing={2}>
                <p style={{ margin: 0 }}>Powered by </p>
                <img src={Layer_1} alt="" style={{ borderRadius: 0 }} />
              </Stack>
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: "red" }}></div>
        <div className={styles.map}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: "80%",
            }}
          >
            <Slider
              className={styles.slider}
              arrows={false}
              dots
              slidesToShow={3}
              autoplay={true}
              dotsClass="carousel-dots"
              pauseOnHover={false}
              centerPadding={0}
            >
              {ClientReview.map((item) => {
                return (
                  <ClientStories
                    clientBox={item.clientBox}
                    img={item.img}
                    desc={item.desc}
                    content={item.content}
                  />
                );
              })}
            </Slider>
          </div>
        </div>

        <div className={styles.map1}>
          <div
            style={{
              position: "absolute",
              left: "47%",
              transform: "translate(-50%, 0)",
              width: "80%",
            }}
          >
            <Slider
              className={styles.slider}
              arrows={false}
              dots
              slidesToShow={1}
              autoplay={true}
              dotsClass="carousel-dots"
              pauseOnHover={false}
              centerPadding={0}
            >
              {ClientReview.map((item) => {
                return (
                  <ClientStories
                    clientBox={item.clientBox}
                    img={item.img}
                    desc={item.desc}
                    content={item.content}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
