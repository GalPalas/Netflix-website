import React from "react";
import InfoCards from "./infoCards";

function MainInfoCards() {
  return (
    <section>
      <InfoCards
        title="Enjoy on your TV."
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more."
        imageSrc="/images/undraw_home_cinema_l7yl.svg"
        reverse={false}
      />
      <InfoCards
        title="Download your shows to watch offline."
        description="Save your favorites easily and always have something to watch."
        imageSrc="/images/undraw_going_offline_ihag.svg"
        reverse={true}
      />
      <InfoCards
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
        "
        imageSrc="/images/undraw_web_devices_ad58.svg"
        reverse={false}
      />
      <InfoCards
        title="Create profiles for kids."
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        imageSrc="/images/undraw_Swipe_profiles_re_tvqm.svg"
        reverse={true}
      />
    </section>
  );
}

export default MainInfoCards;
