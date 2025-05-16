import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/shared/MainMenu';
import HomePage from './pages/HomePage';
import ContactForm from './components/shared/ContactForm';
import { useAppSelector } from './hooks/useAppSelector'
//import Footer from './components/shared/Footer';
import './App.css'



function App() {

  const isOpen = useAppSelector(state => state.contactForm.isOpen)
  const crrMode = useAppSelector(state => state.mainMode.crrStatus)
  

  return (
    <div className={`body ${crrMode === 'darkMode' ? 'body--dark' : 'body--light'} `}>
      <div className={`contactForm__container ${!isOpen && 'form__close'}`}>
        <ContactForm />
      </div>
      <MainMenu/>
      <Routes>
        <Route path='/' element={
          <HomePage/>
        }
        />
      </Routes>
    </div>
  )
}

export default App
