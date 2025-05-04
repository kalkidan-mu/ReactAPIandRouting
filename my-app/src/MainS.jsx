import React from 'react'
import Alert from "./components/Alert/Alert";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import ForthSection from "./components/ForthSection/ForthSection";
import YoutubeVideos from "./components/youtube/YoutubeVideos";
function MainS() {
  return (
    <div>
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <YoutubeVideos />
    </div>
  );
}

export default MainS
