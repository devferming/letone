import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import projectsInfoRaw from "../../data/projectsInfo.json";
import { useFlashingElements } from "../../hooks/useFlashingElements";
import "./styles/ProjectCard.css";


type ServiceKey = keyof typeof projectsInfoRaw;

interface ProjectItem {
  demoUrl: string;
  techUsed: string[];
  status: string;
}

const projectsInfo: Record<ServiceKey, ProjectItem> = projectsInfoRaw;

const ProjectsCard: React.FC = () => {
  const { t } = useTranslation();
  const tBase = "pages.homePage.components.projects";
  const projectKeys = Object.keys(projectsInfo) as ServiceKey[];

  const useIsMobile = (maxWidth = 950) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= maxWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [maxWidth]);

    return isMobile;
  };

  const isMobile = useIsMobile();

  const {
    currentElement: crrProject,
    goTo,
    pause,
    resume,
    isAnimating,
  } = useFlashingElements<ServiceKey>(400000, projectKeys);

  const [readMore, setReadMore] = useState<"read" | "noRead">("noRead");

  const handleReadMore = () => {
    setReadMore((prev) => (prev === "read" ? "noRead" : "read"));
  };

  useEffect(() => {
    readMore === "read" ? setReadMore("noRead") : "";
  }, [crrProject]);

  return (
    <article>
      <AnimatePresence mode="wait">
        <motion.div
          key={crrProject}
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="projects__article"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{
            opacity: isAnimating ? 0 : 1,
            y: isAnimating ? 15 : 0,
            filter: isAnimating ? "blur(6px)" : "blur(0)",
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="projects__article__div">
            <h3 className="projects__article__h3">
              {t(`${tBase}.projectsObj.${crrProject}.name`)}
              <a
                href={projectsInfo[crrProject].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__article__projectLink"
              >
                <span className="material-symbols-outlined projects__article__projectLink__ico">arrow_outward</span>
              </a>
            </h3>

            <div className="projects__article__tech">
              {projectsInfo[crrProject].techUsed.map((techName) => (
                <img
                  key={techName}
                  className="projects__article__tech__img"
                  src={`/technologies_${techName}.webp`}
                  alt={techName}
                />
              ))}
            </div>

            <motion.div layout className="projects__article__desc">
              <p className="projects__article__desc__p">
                {t(`${tBase}.projectsObj.${crrProject}.p1`)}
              </p>

              <AnimatePresence mode="wait">
                {readMore === "read" &&
                  ["p2", "p3"].map((pKey) => (
                    <motion.p
                      key={pKey}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="projects__article__desc__p"
                    >
                      {t(`${tBase}.projectsObj.${crrProject}.${pKey}`)}
                    </motion.p>
                  ))}
              </AnimatePresence>

              <span>
                <motion.button
                  layout
                  className="projects__article__desc__btn"
                  onClick={handleReadMore}
                >
                  {t(`${tBase}.readMoreBtnText.${readMore}`)}
                </motion.button>
              </span>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {!(readMore === "read" && isMobile) && (
              <motion.div
                className="projects__article__images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {["firts", "second"].map((imgKey) => (
                  <img
                    key={imgKey}
                    className={`projects__article__images__img projects__article__images__img--${imgKey}`}
                    src={`/projectsImgs/${crrProject}_img${
                      imgKey === "firts" ? 1 : 2
                    }.webp`}
                    alt={`${t(`${tBase}.alt`)} ${t(
                      `${tBase}.projectsObj.${crrProject}.name`
                    )}`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {(["left", "right"] as const).map((btnKey) => (
        <button
          onClick={() => goTo(btnKey)}
          key={btnKey}
          className={`projects__article__navigationButton projects__article__navigationButton--${btnKey}`}
          aria-label={
            btnKey === "left"
              ? t(`${tBase}.navigateBtnLeft`)
              : t(`${tBase}.navigateBtnRight`)
          }
        >
          <span
            className={`projects__article__navigationButton__bg projects__article__navigationButton__bg--${btnKey}`}
          ></span>
          <span className="material-symbols-outlined projects__article__navigationButton__ico">
            expand_circle_right
          </span>
        </button>
      ))}
    </article>
  );
};

export default ProjectsCard;
