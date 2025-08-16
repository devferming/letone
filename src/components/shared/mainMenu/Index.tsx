import { useTranslation } from "react-i18next";
import MenuControls from "./MenuControls";
import LittleMenu from "./LittleMenu";
import { scrollToSection } from "../../../utils/scrollToSection";
import "./styles/Index.css";

const MainMenu: React.FC = () => {

  const { t } = useTranslation();
  const sections = t("shared.mainMenu.sections", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <nav>
        <LittleMenu sections={sections} />

        <div className="mainMenu">
          <div className="mainMenu__logo_container">
            <h2 className="mainMenu__logo">
              <span className="mainMenu__logo--span1">let</span>
              <span className="mainMenu__logo--span2">One</span>
            </h2>
          </div>

          <MenuControls />

          <ul className="mainMenu__ul">
            {Object.entries(sections).map(([sectionId, sectionName]) => (
              <li className="mainMenu__li" key={sectionId}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className="mainMenu__btn"
                >
                  {sectionName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
