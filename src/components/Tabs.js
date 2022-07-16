import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const tabs = [
  { label: "About", icon: "🧑", content: <About/>, slug: "about" },
  { label: "Contact", icon: "📝", content: <Contact/>, slug: "contact" },
  { label: "Project", icon: "🔧", content: <Project/>, slug: "project" },
];
const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { pages } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    setSelectedTab(tabs.find((tab) => (pages ? tab.slug === pages  : tab.slug === "about")));
  }, [pages]);
  return (
    <div className="window">
      <nav>
        <ul className="nav-ul">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={
                item === selectedTab ? "selected nav-tab_li" : "nav-tab_li"
              }
              onClick={() => {
                navigate(item.slug !== "about" ? `/${item.slug}` : "/");
              }}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            {selectedTab ? selectedTab.content : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Tabs;
