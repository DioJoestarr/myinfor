import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/MyRouter";
import MyRouter from "./routes/MyRouter";
import SwitchButon from "./components/SwitchButon";
import React, { useRef, useMemo } from "react";

function App() {
  const [enabled, setEnabled] = React.useState(false);
  const ref = useRef();
  useMemo(() => {
    if (enabled) {
      ref.current?.classList.add("dark");
    } else {
      ref.current?.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <div ref={ref} className=" App  w-full h-full">
      <div className=" dark:bg-black bg-gray-666 ">
        <div className=" fixed z-50 right-4 bottom-6 md:bottom-36 flex flex-col">
          <div className=" relative mb-2 text-lg dark:text-white text-black ">{enabled ? "Light Mode" : "Dark Mode"}</div>
          <SwitchButon enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="container mx-auto">
          <MyRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
