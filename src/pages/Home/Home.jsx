import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Services from "../../pages/Services/Services";
import Achievements from "../../pages/Achievements/Achievements";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import RecentProjects from "../../pages/RecentProjects/RecentProjects";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <RecentProjects/>
      <Services />
      <Testimonials />
      <Team />
      <Achievements />
      {/* You'll add more sections here later */}
    </div>
  );
}

export default Home;