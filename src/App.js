import "./App.css";
import Sidebar from "./components/sidebar";
import ContentCard from "./components/contentCard";
import Resume from "./Resume.pdf";
import { useMediaQuery } from "react-responsive";

const physicsDescription = [
  "Some independent experiments I've done for PHYS 3310 @ Cornell",
  "Calculated the Rydberg constant for the Balmer Series",
  "Used Solar Radiometry technisques to measure the temperature of the Sun",
  "Compared attenuation coefficients of gamma rays in Al, Pb, and Cu",
];

function App() {
  const mobile = useMediaQuery({ query: "(max-device-width: 40em)" });

  return (
    <>
      <div className={mobile ? "mobileContainer" : "laptopContainer"}>
        <Sidebar />
        <div className={mobile ? "mobileContent" : "laptopContent"}>
          <p>
            Hi! My name is Jacob, and I recently graduated from Cornell
            University studying Computer Science and Physics in May 2023.
            <p>
              I'm currently working as a software developer at{" "}
              <a href={"https://www.longtailedu.com"}>Longtail Education</a> in
              New York.
            </p>
            Below are some of the things I've built, worked on, or just found
            interesting.
          </p>

          <p>
            For the info below in a much cleaner format, here is my most recent{" "}
            <a href={Resume} download={"Resume.pdf"}>
              {" "}
              resumé
            </a>
            .
          </p>

          <div>
            <h1>What I've Worked On</h1>
            {/* <button onClick = {() => console.log({mobile})}>Is Mobile? </button> */}

            <ContentCard
              title="PDF Rendering Service"
              bullets={[
                "As part of an internship, implemented a general purpose PDF rendering service that supports dynamic content injection",
                "Migrated deprecated invoice PDF generation logic in Go to a third party content management system to eliminate tech debt and reduce codebase complexity",
                "Implemented a webhook in Javascript so business employees could modify/create PDF templates without the need of an engineer",
              ]}
            />
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
              title="Procedural Islands"
              bullets={[
                "Created a procedurally generated landscape using Unity and C# scripting for a computer graphics practicum",
                "Extended octave noise function to infinity using a chunk-like system to support an infinite world",
                "Used a suite of Unity features to increase immersion via particle effects, directional lighting, etc.",
              ]}
              link={"https://github.com/adamrnasir/cs4621-procedural-islands"}
              linkText={"GitHub"}
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

            {/* <ContentCard 
          title="Truffle"
          bullets={[
            "Truffle is a web browser extension that aims to improve viewer experience on livestreams on YouTube by adding in features like predictions, channel points, improved chat, etc.", 
            "While early in its development, and only publicly available for a handful of creators, the project aims to take the user experience into the hands of creators and viewers", 
            "The CEO of YouTube has publicly acknowledged and commended the platform and its flagship creators, and thus represents an interesting case where one of the biggest media companies in the world is being outpaced by a handful of developers"
          ]}
          link="https://www.truffle.vip"
          linkText={'Truffle'}
          /> */}
          </div>
        </div>
      </div>
      {/* <ConwayGrid grid={[true, false]}/> */}
    </>
  );
}

export default App;
