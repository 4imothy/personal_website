import { ParallaxProvider } from "react-scroll-parallax";
import Title from "./Title/Title";
import AllIcons from "./Icons/AllIcons";
import AboutMeText from "./AboutMe/AboutMeText";
import AboutMePhotos from "./AboutMe/AboutMePhotos";
import Projects from "./Projects/Projects";

const HomeNoParallax = () => {
  return (
    <ParallaxProvider>
      <Title />
      <AllIcons />
      <div style={{
        height: '150vh'
      }}>
        <AboutMeText />
        <AboutMePhotos />
      </div>
      <Projects />
    </ParallaxProvider >
  );
}

export default HomeNoParallax;