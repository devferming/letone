import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import pricesJson from "../../../data/pricesServices.json";
import contactChannels from "../../../data/contactChannels.json";
import TierCard from "./TierCard";
import PromoBadge from "./PromoBadge";
import {
  SolutionTier,
  ServiceKey,
  PriceItem,
  ChannelItem,
} from "../../../types/Solutions.types";
import clsx from "clsx";
import "./styles/Index.css";

const Solutions: React.FC = () => {
  const { t } = useTranslation();
  const tBase = "pages.homePage.components.solutions";
  const typedChannel = contactChannels["whatsApp"] as ChannelItem;

  const prices: Record<ServiceKey, PriceItem> = pricesJson;
  const list = t("pages.homePage.components.solutions.ul", {
    returnObjects: true,
  }) as Record<ServiceKey, SolutionTier>;

  const [activeItem, setActiveItem] = useState<ServiceKey | null>(null);

  const directions = ["-100vw", "100vw", "100vh", "-100vh"];
  const getExitAnimation = (index: number) => {
    const direction = directions[index % directions.length];
    return {
      x: direction.includes("vw") ? direction : 0,
      y: direction.includes("vh") ? direction : 0,
      opacity: 0,
    };
  };

  return (
    <section className="solutions" id="solutions">
      <article className="solutions__article">
        <ul className="solutions__article__ul" role="tablist">

          <AnimatePresence mode="sync">
            {(Object.entries(list) as [ServiceKey, SolutionTier][]).map(
              ([liName, liInfo], index) => {
                const isActive = activeItem === liName;
                return (
                  <motion.li
                    key={liName + index}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1 : 1,
                      zIndex: isActive ? 10 : 1,
                    }}
                    exit={!isActive ? getExitAnimation(index) : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={clsx("solutions__article__ul__li", {
                      "solutions__article__ul__li--active": isActive,
                    })}
                    role="presentation"
                    onClick={() =>
                      setActiveItem((prev) => (prev === liName ? null : liName))
                    }
                  >
                    <span className="material-symbols-outlined solutions__article__ul__li__ico">
                      {isActive ? "close" : "arrow_outward"}
                    </span>

                    {prices[liName].offer > 0 && (
                      <PromoBadge
                        isActive={isActive}
                        liName={liName}
                        prices={prices}
                      />
                    )}

                    <span
                      className={clsx(
                        "solutions__article__ul__li__longTittle",
                        {
                          "solutions__article__ul__li__longTittle--active":
                            isActive,
                        }
                      )}
                    >
                      {!isActive ? liInfo.longTittle : liInfo.shortTittle}
                    </span>

                    <p
                      className={clsx("solutions__article__ul__li__price", {
                        hiddenElement: isActive,
                      })}
                    >
                      {`${t(`${tBase}.price prefix`)} ${
                        prices[liName].price.basic
                      }`}
                      <span>{`/usd`}</span>
                    </p>

                    <span
                      className={clsx(
                        "solutions__article__ul__li__generalDescription",
                        {
                          hiddenElement: !isActive,
                        }
                      )}
                    >
                      {liInfo.generalDescription}
                    </span>

                    <TierCard
                      isActive={isActive}
                      liName={liName}
                      liInfo={liInfo}
                      prices={prices}
                      typedChannel={typedChannel}
                      t={t}
                      tBase={tBase}
                      list={list}
                    />
                  </motion.li>
                );
              }
            )}
          </AnimatePresence>
          
        </ul>
      </article>
    </section>
  );
};

export default Solutions;
