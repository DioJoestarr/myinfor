import React from "react";
import { Route, Routes } from "react-router";
import Profile from "../pages/Profile";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/:pages" element={<Profile />} />
    </Routes>
  );
};

export default MyRouter;
