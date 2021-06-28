import React from "react";
import Navbar from "../components/navbar/navbar";
import Showcase from "../components/showcase/showcase";
import Newsletter from "../components/newsletter/newsletter";
function WelcomePage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Newsletter />
    </div>
  );
}

export default WelcomePage;
