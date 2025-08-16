import React from "react";
import { useRef } from "react";
import { scrollToSection } from "../../../utils/scrollToSection";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { showMenu, hiddenMenu } from "../../../features/mainMenu/mainMenuSlice";
import MenuControls from "./MenuControls";
import "./styles/LittleMenu.css";

interface LittleMenuProps {
  sections: string[];
}

const LittleMenu: React.FC<LittleMenuProps> = ({ sections }) => {
  const dispatch = useAppDispatch();
  const littleMenuDiv = useRef<HTMLDivElement>(null);
  const littleMenu = useAppSelector((state) => state.mainMenu.crrStatus);

  type DispatchMapKey = "menu" | "x";

  const dispatchMap: Record<
    DispatchMapKey,
    {
      action: () => any;
      classToRemove: string;
      classToAdd: string;
    }
  > = {
    menu: {
      action: showMenu,
      classToRemove: "hiddenMenu",
      classToAdd: "showMenu",
    },
    x: {
      action: hiddenMenu,
      classToRemove: "showMenu",
      classToAdd: "hiddenMenu",
    },
  };

  const userClick = (cmd: string) => {
    const cmdType: DispatchMapKey =
      cmd === "toggle" ? littleMenu : ("x" as DispatchMapKey);

    if (cmd !== "toggle") {
      scrollToSection(cmd);
    }

    dispatch(dispatchMap[cmdType].action());

    const menuDiv = littleMenuDiv.current;
    if (menuDiv) {
      menuDiv.classList.remove(dispatchMap[cmdType].classToRemove);
      menuDiv.classList.add(dispatchMap[cmdType].classToAdd);
    }
  };

  return (
    <>
      <button className="littleMenu__btn" onClick={() => userClick("toggle")}>
        <i className={`littleMenu__btn--icon bx bx-${littleMenu}`}></i>
      </button>

      <div ref={littleMenuDiv} className="littleMenu hiddenMenu">
        <div className="littleMenu__logo_container">
          <h2 className="littleMenu__logo">
            <span className="littleMenu__logo--span1">let</span>
            <span className="littleMenu__logo--span2">One</span>
          </h2>
        </div>

        <MenuControls />

        <ul className="littleMenu__ul">
          {Object.entries(sections).map(([sectionId, sectionName]) => (
            <li
              key={sectionId}
              onClick={() => userClick(sectionId)}
              className="littleMenu__li"
            >
              {sectionName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LittleMenu;
