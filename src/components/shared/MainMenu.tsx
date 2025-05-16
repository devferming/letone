import { useRef } from 'react'
import * as motion from "motion/react-client"
import { useAppSelector } from '../../hooks/useAppSelector'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { showMenu, hiddenMenu } from '../../features/mainMenu/mainMenuSlice';
import { darkMode, lightMode } from '../../features/mainMenu/mainModeSlice';
import './style/MainMenu.css'


const MainMenu: React.FC = () => {

  const { t } = useTranslation()
  const crrlang = i18n.language
  const dispatch = useAppDispatch()
  const crrMode = useAppSelector(state => state.mainMode.crrStatus)
  const littleMenu = useAppSelector(state => state.mainMenu.crrStatus)
  const littleMenuDiv = useRef<HTMLDivElement>(null)

  const handleLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang.toLowerCase());
  }

  const handleMode = () => {
    crrMode === 'darkMode' ? dispatch(lightMode()) : dispatch(darkMode())
  }

  const scrollToSection = (sectionId: string) => {
    //setLittleMenu('menu')
    littleMenuDiv.current?.classList.remove('showMenu')
    littleMenuDiv.current?.classList.add('hiddenMenu')
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLitteMenu = () => {
    if (littleMenu === 'menu') {
      dispatch(showMenu())
      littleMenuDiv.current?.classList.remove('hiddenMenu')
      littleMenuDiv.current?.classList.add('showMenu')
    } else {
      dispatch(hiddenMenu())
      littleMenuDiv.current?.classList.remove('showMenu')
      littleMenuDiv.current?.classList.add('hiddenMenu')
    }
  }

  const sections = t('shared.mainMenu.sections', { returnObjects: true }) as string[]

  return (
    <>
      <nav>

        <button className='littleMenu__btn' onClick={handleLitteMenu}>
          <i className={`littleMenu__btn--icon bx bx-${littleMenu}`}></i>
        </button>

        <div ref={littleMenuDiv} className='littleMenu hiddenMenu'>

          <div className='littleMenu__logo_container'>
            <h2 className='littleMenu__logo'>Fermín Gutiérrez</h2>
          </div>

          <ul className='littleMenu__control_ul'>
            {/* <li className='littleMenu__control_li' onClick={handleLanguage}>
              <span className='littleMenu__control_span material-symbols-outlined'>translate</span>
            </li> */}
            <li className='littleMenu__control_li' onClick={handleMode}>
              <span id='modeText' className='littleMenu__control_span material-symbols-outlined'>light_mode</span>
            </li>
          </ul>

          <ul className='littleMenu__ul'>
            {Object.entries(sections).map(([sectionId, sectionName]) => (
              <li
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className='littleMenu__li'
              >
                {sectionName}
              </li>
            ))}
          </ul>


        </div>

        <div className='mainMenu'>
          <div className='mainMenu__logo_container'>
            <h2 className='mainMenu__logo'>
              <span className='mainMenu__logo--span1'>{t('pages.homePage.components.header.brand.let')}</span>
              <span className='mainMenu__logo--span2'>{t('pages.homePage.components.header.brand.one')}</span>
            </h2>
          </div>
          <ul className='mainMenu__control_ul'>
            <li className='mainMenu__control_li'>
              <button className='mainMenu__control_btn' onClick={() => handleLanguage('en')}>
                <img className={`mainMenu__control_btn__flag ${crrlang === 'en' ? 'flagActive' : 'flagInactive'}`} src="flagUS.webp" alt="US" />
              </button>
            </li>
            <li className='mainMenu__control_li'>
              <button className='mainMenu__control_btn' onClick={() => handleLanguage('es')}>
                <img className={`mainMenu__control_btn__flag ${crrlang === 'es' ? 'flagActive' : 'flagInactive'}`} src="flagES.webp" alt="ES" />
              </button>
            </li>

            <button
              className="mainMenu__control_mode__btn"
              style={{
                justifyContent: "flex-" + (crrMode === 'lightMode' ? "start" : "end"),
              }}
              onClick={handleMode}
            >
              <motion.div
                className="mainMenu__control_mode__btn__circle"
                layout
                transition={{
                  type: "spring",
                  visualDuration: 0.2,
                  bounce: 0.2,
                }} >
                <span className="material-symbols-outlined mainMenu__control_mode__btn__ico">
                  {crrMode === 'darkMode' ? 'dark_mode' : 'wb_sunny'}
                </span>
              </motion.div>
            </button>
          </ul>

          <ul className='mainMenu__ul'>
            {Object.entries(sections).map(([sectionId, sectionName]) => (
              <li className='mainMenu__li' key={sectionId}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className='mainMenu__btn'
                >
                  {sectionName}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </>
  )
}

export default MainMenu