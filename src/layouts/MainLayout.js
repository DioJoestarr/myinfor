import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tabs from "./Tabs";
import Animation from "../components/Animation";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skill";
import Main from "./Main";
export const tabs = [
  { label: "About", icon: "🧑", content: <About />, slug: "about" },
  { label: "Skills", icon: "💪", content: <Skills />, slug: "skill" },
  { label: "Project", icon: "🔧", content: <Project />, slug: "project" },
  { label: "Contact", icon: "📝", content: <Contact />, slug: "contact" },
];
const MainLayout = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { pages } = useParams();
  useEffect(() => {
    setSelectedTab(
      tabs.find((tab) => (pages ? tab.slug === pages : tab.slug === "about"))
    );
  }, [pages]);
  return (
    <div className="dark:bg-black bg-gray-666">
      <div className="h-fit">
        <div className="dark:opacity-60 relative z-20">
          <img
            src="https://images3.alphacoders.com/119/thumb-1920-1195019.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center w-full justify-center  relative top-[-96px]">
          <div className=" w-full ">
            <div className=" rounded-lg shadow-md bg-white dark:bg-black flex flex-col items-center justify-center">
              <Animation />
              <div className="w-full p-2">
                <div className="name">
                  <span className="dark:text-white text-black font-sans font-medium text-center text-5xl md:text-6xl">
                    Lê Đài
                  </span>
                </div>
                <div className="describe  mt-2">
                  <span className="dark:text-gray-400 text-gray-888 font-sans font-medium text-center text-lg md:text-2xl">
                    Goodbye World
                  </span>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="w-full border-t dark:border-gray-300 border-black opacity-30"></div>
              </div>
              <div className="p-2 w-full">
                <Tabs selectedTab={selectedTab} />
              </div>
            </div>
          </div>
          <div className="window dark:bg-black bg-white mt-6 px-8">
            <Main selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
