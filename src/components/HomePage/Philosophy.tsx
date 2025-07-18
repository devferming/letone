import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { useScrollParallax } from "../../hooks/useScrollParallaxX";
import { useFlashingElements } from "../../hooks/useFlashingElements";
import "./styles/philosophy.css";

const Philosophy: React.FC = () => {
  const { t } = useTranslation();
  const iconsPhrases = t("pages.homePage.components.philosophy.iconPhrases", {
    returnObjects: true,
  }) as Record<string, string>;
  const icons = Object.keys(iconsPhrases);

  const iconInterval = 1500;
  const rocketDelay = 4000;

  const delayMap = { rocket: rocketDelay };
  const { currentElement: currentIcon, crrIdxElement: currentIconIndex } =
    useFlashingElements<keyof typeof iconsPhrases>(
      iconInterval,
      icons,
      delayMap
    );

  const isRocket = currentIcon === "rocket";

  const { ref: sectionPhilosophyRef, motionStyle } = useScrollParallax(
    "40%",
    "-40%",
    "x"
  );
  
  const initialRocketAnimation = { opacity: 0, y: 0, scale: 0.95 };
  const initialFallbackAnimation = { opacity: 0, x: 10, scale: 0.98 };

  const rocketAnimation = {
    opacity: 1,
    y: [0, 0, -5, -5, 5, 5, -1000],
    scale: [1, 1.05, 0.95, 1.05, 0.95, 1, 1.2],
    transition: { duration: 3, ease: "easeInOut" },
  };

  const fallbackAnimation = {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const exitRocketAnimation = { opacity: 0 };
  const exitFallbackAnimation = { opacity: 0, x: -10, scale: 0.98 };

  return (
    <section className="philosophy" id="philosophy" ref={sectionPhilosophyRef}>
      <div className="philosophy__texts">
        <h2 className="philosophy__h2">
          {t("pages.homePage.components.philosophy.h2")}
        </h2>
        <p className="philosophy__p">
          {t("pages.homePage.components.philosophy.description")}
        </p>
      </div>

      <div className="philosophy__animation" role="status" aria-live="polite">
        <motion.span
          className="philosophy__animation__angle philosophy__angle--left"
          animate={{ x: isRocket ? "-70%" : "0%", opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            delay: isRocket ? 2.5 : 0,
          }}
        />

        <AnimatePresence mode="wait">
          <motion.span
            role="img"
            aria-label={iconsPhrases[currentIcon]}
            key={currentIconIndex}
            className="material-symbols-outlined philosophy__ico"
            initial={
              isRocket ? initialRocketAnimation : initialFallbackAnimation
            }
            animate={isRocket ? rocketAnimation : fallbackAnimation}
            exit={isRocket ? exitRocketAnimation : exitFallbackAnimation}
          >
            {currentIcon}
          </motion.span>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentIcon}
            className="philosophy__ico__text"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.3 }}
          >
            {iconsPhrases[currentIcon]}
          </motion.p>
        </AnimatePresence>

        <motion.span
          className="philosophy__animation__angle philosophy__angle--right"
          animate={{ x: isRocket ? "70%" : "0%", opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            delay: isRocket ? 2.5 : 0,
          }}
        />
      </div>

      <motion.img
        className="philosophy__animation__img"
        src="/philosophyImg002.png"
        alt="PNG image from es.pngtree.com"
        style={motionStyle}
      />
    </section>
  );
};

export default Philosophy;
