import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Main({ selectedTab }) {
  return (
    <main className="p-0">
      <div className=" rounded-lg min-h-full w-full">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className=" dark:text-white"
          >
            {selectedTab ? selectedTab.content : "😋"}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Main;
