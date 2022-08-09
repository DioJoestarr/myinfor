import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { tabs } from "./MainLayout";

const Tabs = ({selectedTab}) => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="nav-ul">
        {tabs.map((item) => (
          <motion.li
            key={item.label}
            className={
              item === selectedTab ? "selected nav-tab_li" : "nav-tab_li"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              navigate(item.slug !== "about" ? `/${item.slug}` : "/");
            }}
          >
            <span className="nav-tab_span nav-tab_icon">{item.icon}</span>
            <span className="nav-tab_span ml-1 nav-tab_label">
              {item.label}
            </span>
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
