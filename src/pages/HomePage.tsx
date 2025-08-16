import Contact from "../components/HomePage/Contact";
import Header from "../components/HomePage/Header";
import Philosophy from "../components/HomePage/Philosophy";
import Reviews from "../components/HomePage/Reviews";
import Solutions from "../components/HomePage/solutions/Index";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Philosophy />
      <Solutions />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
