import Contact from "../components/HomePage/Contact";
import Header from "../components/HomePage/Header";
import Philosophy from "../components/HomePage/Philosophy";
import Projects from "../components/HomePage/Projects";
import Reviews from "../components/HomePage/Reviews";
import Solutions from "../components/HomePage/Solutions";
import Footer from "../components/shared/Footer";
import MainMenu from "../components/shared/MainMenu";

const HomePage: React.FC = () => {
  return (
    <>
      <MainMenu />
      <Header />
      <Philosophy />
      <Solutions />
      <Projects />
      <Reviews />
      <Contact />
      <Footer /> 
    </>
  );
};

export default HomePage;
