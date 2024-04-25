import React, { useEffect, useState } from "react";
import h from "./headshot.JPG";
import emailIcon from "../email.svg";
import linkedinIcon from "../linkedin.svg";
import githubIcon from "../github.svg";
import phoneIcon from "../phone.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
// import ConwayGrid from "./ConwayGrid";
import "../App.css";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatData = (data, firstDay, numWeeks) => {
  const weeksData = Array.from({ length: numWeeks }, () => Array(7).fill(null));

  data.forEach((puzzle, idx) => {
    const dayOfMonth = idx + 1;
    const weekIndex = Math.floor((dayOfMonth + firstDay - 1) / 7);
    const dayIndex = (dayOfMonth + firstDay - 1) % 7;
    weeksData[weekIndex][dayIndex] = puzzle;
  });

  return weeksData;
};

const Sidebar = () => {
  const mobile = useMediaQuery({ query: "(max-device-width: 40em)" });
  const [crosswordData, setCrosswordData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const currentDate = new Date();
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const numDaysInMonth = lastDayOfMonth.getDate();
      const numWeeksInMonth = Math.ceil(
        (numDaysInMonth + firstDayOfMonth.getDay()) / 7
      );

      const response = await axios.get(
        `http://127.0.0.1:5000/test?start_date=${formatDate(
          firstDayOfMonth
        )}&end_date=${formatDate(lastDayOfMonth)}`
      );

      setCrosswordData(
        formatData(
          response.data.result,
          firstDayOfMonth.getDay(),
          numWeeksInMonth
        )
      );
    }

    fetch().then(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(crosswordData);
  }, [crosswordData]);

  return (
    <div className="photoInfoLaptop">
      <div style={mobile ? { display: "flex", justifyContent: "center" } : {}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img className="headshotLaptop" alt="headshot" src={h}></img>
          <div
            style={mobile ? { display: "flex", justifyContent: "center" } : {}}
          >
            <p>
              Jacob Kochian <br /> Cornell University <br />
              jdkochian@gmail.com <br />
              732-890-8068{" "}
            </p>
          </div>
        </div>
      </div>
      <h3
        style={
          mobile ? { display: "flex", justifyContent: "center" } : { margin: 0 }
        }
      >
        Contact me:{" "}
      </h3>
      <div className={mobile ? "contactInfoMobile" : "contactInfoLaptop"}>
        <a
          href="https://www.linkedin.com/in/kochian"
          target="_blank"
          rel="noreferrer"
        >
          <img className="mediaIcon" src={linkedinIcon} alt="LinkedIn Icon" />
        </a>
        <a href="mailto: jdkochian@gmail.com" target="_blank" rel="noreferrer">
          <img
            className="mediaIcon"
            src={emailIcon}
            style={{ marginTop: "10%" }}
            alt="Email Icon"
          />
        </a>
        <a
          href="https://www.github.com/jdkochian"
          target="_blank"
          rel="noreferrer"
        >
          <img className="mediaIcon" src={githubIcon} alt="GitHub Icon" />
        </a>
        <a href="tel:732-890-8068" target="_blank" rel="noreferrer">
          <img className="mediaIcon" src={phoneIcon} alt="Phone Icon" />
        </a>
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          aspectRatio: "1/1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {loading ? (
          <>loading</>
        ) : (
          <>
            {crosswordData.map((row, idx) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  height: "20%",
                  gap: "0.1rem",
                }}
                key={idx}
              >
                {row.map((puzzle, puzzleIdx) => (
                  <div
                    style={{
                      height: "100%",
                      flexGrow: 1,
                      alignContent: "center",
                    }}
                  >
                    {puzzle !== null ? (
                      <div
                        style={{
                          backgroundColor: "green",
                          width: "100%",
                          aspectRatio: "1/1",
                        }}
                      ></div>
                    ) : (
                      <div
                        style={{
                          backgroundColor: "red",
                          width: "100%",
                          aspectRatio: "1/1",
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
