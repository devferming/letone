import * as motion from "motion/react-client";
import i18n from "i18next";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from '../../../hooks/useAppSelector'
import { darkMode, lightMode } from "../../../features/mainMenu/mainModeSlice";
import '../mainMenu/styles/MenuControls.css';

const MenuControls: React.FC = () => {
  const crrlang = i18n.language;
  const dispatch = useAppDispatch();

  const crrMode = useAppSelector((state) => state.mainMode.crrStatus);

  const handleLanguage = (lang: "en-EN" | "es-ES") => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  const handleMode = () => {
    crrMode === "darkMode" ? dispatch(lightMode()) : dispatch(darkMode());
  };

  return (
    <ul className="mainMenu__control_ul">
      <li className="mainMenu__control_li">
        <button
          className="mainMenu__control_btn"
          onClick={() => handleLanguage("en-EN")}
        >
          <img
            className={`mainMenu__control_btn__flag ${
              crrlang === "en-EN" ? "flagActive" : "flagInactive"
            }`}
            src="/src/assets/images/flagUS.webp"
            alt="US"
          />
        </button>
      </li>
      <li className="mainMenu__control_li">
        <button
          className="mainMenu__control_btn"
          onClick={() => handleLanguage("es-ES")}
        >
          <img
            className={`mainMenu__control_btn__flag ${
              crrlang === "es-ES" ? "flagActive" : "flagInactive"
            }`}
            src="/src/assets/images/flagES.webp"
            alt="ES"
          />
        </button>
      </li>

      <button
        className="mainMenu__control_mode__btn"
        style={{
          justifyContent: "flex-" + (crrMode === "lightMode" ? "start" : "end"),
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
          }}
        >
          <span className="material-symbols-outlined mainMenu__control_mode__btn__ico">
            {crrMode === "darkMode" ? "dark_mode" : "wb_sunny"}
          </span>
        </motion.div>
      </button>
    </ul>
  );
};

export default MenuControls;
