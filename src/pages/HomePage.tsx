import Header from '../components/HomePage/Header'
import Philosophy from '../components/HomePage/Philosophy'
import Projects from '../components/HomePage/Projects'
import Solutions from '../components/HomePage/Solutions'

//import Technologies from '../components/HomePage/Technologies'
//import Reviews from '../components/HomePage/Reviews'
//import Contact from '../components/HomePage/Contact'

//const HomePage = ( { currentPhrases, setToggleContactForm, currentReviews } ) => {

const HomePage: React.FC = () => {

  return (
    <>
      <Header />

      <Philosophy />
      <Solutions />
      <Projects />
      {/*      

      <Technologies />
      
      
      <Reviews
        currentReviews={currentReviews}
      />
      <Contact
        setToggleContactForm={setToggleContactForm}
      />
      */}
    </>
  )

}

export default HomePage