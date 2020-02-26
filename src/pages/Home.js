import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MyWorks from "../components/MyWorks";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <Banner />
      <MyWorks />
    </main>
  );
}

export default Home;
