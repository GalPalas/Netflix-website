import React from "react";
import Navbar from "../components/navbar/navbar";
import Showcase from "../components/showcase/showcase";
import Newsletter from "../components/newsletter/newsletter";
import MainInfoCards from "../components/infoCards/mainInfoCards";

function WelcomePage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Newsletter />
      <MainInfoCards />
    </div>
  );
}

export default WelcomePage;
