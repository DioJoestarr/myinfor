import React from "react";
import Tabs from "./Tabs";
import Animation from "../components/Animation";

const MainLayout = () => {
  return (
    <div>
      <div className="h-fit">
        <div className="opacity-60">
          <img
            src="https://images3.alphacoders.com/119/thumb-1920-1195019.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center w-full justify-center relative top-[-96px]">
          <div className="rounded-full z-10">
            {/* <img
              className="rounded-full w-full h-fit border-4 border-black"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/250748865_2861777274113291_1110232546663015312_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EvqLk7_bsrcAX82qSW-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-Oaq1clDFA0Li29tXBIfX-f0pRj5nhLpa1PPzbqrLyPA&oe=62D70168"
              alt=""
            /> */}
            <Animation />
          </div>
          <div className="w-full p-2">
            <div className="name">
              <span className="text-white font-sans font-medium text-center text-5xl md:text-6xl">
                Lê Đài
              </span>
            </div>
            <div className="describe mt-2">
              <span className="text-gray-400 font-sans font-medium text-center text-lg md:text-2xl">
                Goodbye World
              </span>
            </div>
          </div>
          <div className="p-4 w-full">
            <div className="w-full border-t opacity-30"></div>
          </div>
          <div className="p-2 w-full">
            <Tabs />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainLayout;
