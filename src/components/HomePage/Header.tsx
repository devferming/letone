import { useTranslation } from "react-i18next"
import { AnimatePresence, motion } from "motion/react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { openForm } from "../../features/contactForm/contactFormSlice"
import { useFlashingElements } from "../../hooks/useFlashingElements"
import "./styles/Header.css"

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const phrases = t("pages.homePage.components.header.rotatingPhrases", {
    returnObjects: true,
  })

  const isArray = Array.isArray(phrases)

  const { currentElement: currentPhrase, crrIdxElement: currentIndex } =
    useFlashingElements(4000, isArray ? (phrases as string[]) : [])

  return (
    <header className="header" id="header">
      <div className="header__div">
        <h1 className="header__h1">
          <span className="header__h1--span1">
            {t("pages.homePage.components.header.brand.let")}
          </span>
          <span className="header__h1--span2">
            {t("pages.homePage.components.header.brand.one")}
          </span>
        </h1>
        <h2 className="header__h2">
          {t("pages.homePage.components.header.tagline")}
        </h2>
        <div className="header__buttons">
          <button
            type="button"
            aria-label={t("pages.homePage.components.header.contact_aria")}
            onClick={() => dispatch(openForm())}
            className="header__button header__button--firts"
          >
            {t("pages.homePage.components.header.contact")}
          </button>
        </div>
      </div>

      <div className="header__msg__container" role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentIndex}
            className="header__msg"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {currentPhrase}
          </motion.h3>
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
