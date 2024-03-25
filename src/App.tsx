import React from "react";
import Sidebar from "./components/sidebar";
import ContentCard from "./components/ContentCard";
import ConwayGrid from "./components/ConwayGrid";
import Resume from "./Resume.pdf";
import { useMediaQuery } from "react-responsive";
import "./App.css";

const physicsDescription = [
  "Some independent experiments I've done for PHYS 3310 @ Cornell",
  "Calculated the Rydberg constant for the Balmer Series",
  "Used Solar Radiometry technisques to measure the temperature of the Sun",
  "Compared attenuation coefficients of gamma rays in Al, Pb, and Cu",
];

const App = () => {
  const mobile = useMediaQuery({ query: "(max-device-width: 40em)" });

  return (
    <>
      <div className={mobile ? "mobileContainer" : "laptopContainer"}>
        <Sidebar />
        <div className={mobile ? "mobileContent" : "laptopContent"}>
          Hi! My name is Jacob, and I recently graduated from Cornell University
          studying Computer Science and Physics in May 2023.
          <p>
            I'm currently working as a software developer at{" "}
            <a href={"https://www.longtailedu.com"}>Longtail Education</a> in
            New York.
          </p>
          Below are some of the things I've built, worked on, or just found
          interesting.
          <p>
            For the info below in a much cleaner format, here is my most recent{" "}
            <a href={Resume} download={"Jacob_Kochian_Resume.pdf"}>
              {" "}
              resumé
            </a>
            .
          </p>
          <div>
            <h1>Stuff I've Built</h1>
            {/* <button onClick = {() => console.log({mobile})}>Is Mobile? </button> */}

            <ContentCard
              title="Asteroid Tracker Twitter Bot"
              bullets={[
                "Twitter bot that updates its status whenever a Near Earth Object (NEO) gets closest to Earth",
                "Uses NASA API data and orbital mechanics to plot orbits at their time of close approach",
              ]}
              link={"https://www.twitter.com/AsteroidAlmanac"}
              linkText={"@AsteroidAlmanac"}
            />

            <ContentCard
              title="Procedural Islands"
              bullets={[
                "Procedurally generated landscape using Unity and C# scripting for a computer graphics practicum",
                "Infinite octave noise function using a chunk-like system that supports an infinite world",
                "Used a suite of Unity features to increase immersion via particle effects, directional lighting, etc.",
              ]}
              link={"https://github.com/adamrnasir/cs4621-procedural-islands"}
              linkText={"GitHub"}
            />
          </div>
          <div>
            <h1>Where I've Helped Out</h1>
            <ContentCard
              title="AI-Learners"
              bullets={[
                "Worked in React to develop a responsive web platform to create playable games for students with disabilities",
                "Integrated an API with Firebase to handle user data and gameplay history",
                "Developed analytics software for the business team using Python that displayed key metrics with regards to student understanding and website performance",
              ]}
              link={"https://www.ai-learners.com"}
              linkText={"AI-Learners"}
            />
            <ContentCard
              title="PDF Rendering Service"
              bullets={[
                "As part of an internship, implemented a general purpose PDF rendering service that supports dynamic content injection",
                "Migrated deprecated invoice PDF generation logic in Go to a third party content management system to eliminate tech debt and reduce codebase complexity",
                "Implemented a webhook in Javascript so business employees could modify/create PDF templates without the need of an engineer",
              ]}
            />
          </div>
          <div>
            <h1>What I Find Interesting</h1>
            <ContentCard
              title="Assorted Physics Experiments I've Done"
              bullets={physicsDescription}
              link="https://www.github.com/jdkochian/3310"
              linkText={"GitHub & Papers"}
            />
          </div>
        </div>
      </div>
      {/* <ConwayGrid grid={[true, false]} /> */}
    </>
  );
};

export default App;
