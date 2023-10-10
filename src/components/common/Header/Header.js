import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import styles from "./Header.module.css";
import Hamburger from "hamburger-react";

const users = [
  {
    name: "SERVICES",
    id: "md-1",
    data: [
      {
        id: "id-1",
        title: "Mobile App Development",
      },
      {
        id: "id-2",
        title: "Web App Development",
      },
      {
        id: "id-3",
        title: "Custom Software Development",
      },
      {
        id: "id-4",
        title: "Graphic Design",
      },
      {
        id: "id-5",
        title: "Digital Marketing",
      },
      {
        id: "id-6",
        title: "Quality Assurance",
      },
    ],
  },
  {
    name: "TECHNOLOGIES",
    id: "md-2",
    data: [
      {
        id: "id-1",
        title: "React js",
      },
      {
        id: "id-2",
        title: "Angular js",
      },
      {
        id: "id-3",
        title: "Node js",
      },
      {
        id: "id-4",
        title: "PHP",
      },
      {
        id: "id-5",
        title: "WordPress",
      },
      {
        id: "id-6",
        title: "React Native",
      },
      {
        id: "id-7",
        title: "Flutter",
      },
      {
        id: "id-8",
        title: "Android",
      },
      {
        id: "id-9",
        title: "iOS",
      },
      {
        id: "id-10",
        title: "Java",
      },
    ],
  },
  { name: "CAREER", id: "md-3" },
  { name: "ABOUT US", id: "md-4" },
];

const Header = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(undefined);
  const [dropDown, setDropDown] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [subMenuData, setSubMenuData] = useState("");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.left_container}>
          <img
            src={logo}
            alt=""
            className={styles.logo}
            onClick={() => navigate("/")}
          />
        </div>
        <div className={styles.hamburgerMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>

        <div className={styles.right_container}>
          {users.map((u, i) => (
            <div>
              <div
                onMouseOver={() => {
                  setActiveIndex(i);
                  setDropDown(true);
                }}
                className={
                  i === activeIndex ? styles.listContainer : styles.list
                }
                onClick={() => {
                  console.log("pressed");
                  setActiveIndex(i);
                  if (i === 0) {
                    setDropDown((prev) => !prev);
                  }
                  if (i === 3) {
                    navigate("/About");
                  }
                  if (i === 2) {
                    navigate("/Career");
                  }
                }}
                key={u.name}
              >
                {u.name}
              </div>
              <div className={styles.mainDropdown}>
                {i === 0 && i === activeIndex && dropDown ? (
                  <div
                    onMouseLeave={() => {
                      setActiveIndex(undefined);
                      setDropDown(false);
                    }}
                    className={i === activeIndex ? styles.dropdown : "#092A35"}
                  >
                    <li
                      onClick={() => {
                        navigate("/MobileAppDevelopment");
                        setDropDown(false);
                      }}
                    >
                      Mobile App Development
                    </li>
                    <li
                      onClick={() => {
                        navigate("/WebAppDevelopment");
                        setDropDown(false);
                      }}
                    >
                      Web App Development
                    </li>
                    <li
                      onClick={() => {
                        navigate("/CustomSoftwareDevelopment");
                        setDropDown(false);
                      }}
                    >
                      Custom Software Development
                    </li>
                    <li
                      onClick={() => {
                        navigate("/GraphicDesign");
                        setDropDown(false);
                      }}
                    >
                      Graphic Design
                    </li>
                    <li
                      onClick={() => {
                        navigate("/DigitalMarketing");
                        setDropDown(false);
                      }}
                    >
                      Digital marketing
                    </li>
                    <li
                      onClick={() => {
                        navigate("/QualityAssurance");
                        setDropDown(false);
                      }}
                    >
                      Quality Assurance
                    </li>
                  </div>
                ) : null}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div className={styles.techMainDropdown}>
                  {i === 1 && i === activeIndex && dropDown ? (
                    <div
                      onMouseLeave={() => {
                        setActiveIndex(undefined);
                        setDropDown(false);
                      }}
                      className={
                        i === activeIndex ? styles.dropdown1 : "#092A35"
                      }
                    >
                      <li
                        onClick={() => {
                          navigate("/ReactJS");
                          setDropDown(false);
                        }}
                      >
                        React js
                      </li>
                      <li
                        onClick={() => {
                          navigate("/AngularJS");
                          setDropDown(false);
                        }}
                      >
                        Angular js
                      </li>
                      <li
                        onClick={() => {
                          navigate("/NodeJS");
                          setDropDown(false);
                        }}
                      >
                        Node js
                      </li>
                      <li
                        onClick={() => {
                          navigate("/PHP");
                          setDropDown(false);
                        }}
                      >
                        PHP
                      </li>
                      <li
                        onClick={() => {
                          navigate("/WordPress");
                          setDropDown(false);
                        }}
                      >
                        WordPress
                      </li>
                    </div>
                  ) : null}

                  {i === 1 && i === activeIndex && dropDown ? (
                    <div
                      onMouseLeave={() => {
                        setActiveIndex(undefined);
                        setDropDown(false);
                      }}
                      className={
                        i === activeIndex ? styles.dropdown1 : "#092A35"
                      }
                    >
                      <li
                        onClick={() => {
                          navigate("/ReactNative");
                          setDropDown(false);
                        }}
                      >
                        React Native
                      </li>
                      <li
                        onClick={() => {
                          navigate("/Flutter");
                          setDropDown(false);
                        }}
                      >
                        Flutter
                      </li>
                      <li
                        onClick={() => {
                          navigate("/Android");
                          setDropDown(false);
                        }}
                      >
                        Android
                      </li>
                      <li
                        onClick={() => {
                          navigate("/IOS");
                          setDropDown(false);
                        }}
                      >
                        iOS
                      </li>
                      <li
                        onClick={() => {
                          navigate("/Java");
                          setDropDown(false);
                        }}
                      >
                        Java
                      </li>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}

          <button
            className={styles.button}
            onClick={() => navigate("/ContactUs")}
          >
            CONTACT US
          </button>
        </div>
      </div>
      <div
        className="transition-all flex xl:hidden bg-white w-full h-screen px-[20px]"
        style={{
          flexDirection: "column",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          marginTop: isOpen ? 0 : "calc(100vh)",
        }}
      >
        {users.map((rea) => {
          return (
            <div className="relative">
              <li
                className="text-[13px] font-bold pl-[22px]"
                onClick={() =>
                  setSubMenuData((prev) => (prev === rea.id ? "" : rea.id))
                }
              >
                {rea.name}
              </li>

              {rea.data && subMenuData === rea.id && (
                <ul className=" text-[13px] ml-[30px]">
                  {rea.data.map((res) => {
                    return (
                      <li
                        onClick={() => {
                          // const link = res.title.replace(/ /g, "");
                          // navigate(`/${link}`);
                        }}
                        className="list-[disc] my-3"
                        key={res.id}
                      >
                        {res.title}
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="w-full h-[1px] bg-[#D8E2E4] my-3" />
            </div>
          );
        })}
        <div className="flex justify-center items-center mt-4">
          <button className="h-[32px] w-[200px] border-solid border-2 rounded-[39px] border-slate-800 font-bold ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
