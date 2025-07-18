import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { useFlashingElements } from "../../hooks/useFlashingElements";
import "./styles/Reviews.css";

interface Review {
  imgSrc: string;
  name: string;
  position: string;
  comment: string;
}

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const reviewsObj = t("pages.homePage.components.reviews", {
    returnObjects: true,
  }) as Record<string, Review>;

  const reviewKeys = Object.keys(reviewsObj);

  const { currentElement: currentReviewKey, crrIdxElement: currentIndex } =
    useFlashingElements<keyof typeof reviewsObj>(4000, reviewKeys);

  const review = reviewsObj[currentReviewKey];

  return (
    <section className="reviews" id="reviews">
      <h2
        className="reviews__h2"
        data-translate-en="Reviews"
        data-translate-es="Reseñas"
      >
        Reseñas
      </h2>

      <div className="reviews__container">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentReviewKey}
            className="reviews__container__card"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              x: 80,
              scale: 0.96,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1], // ease-in-out fluido (como CSS ease)
            }}
          >
            <span className="reviews__container__icon material-symbols-outlined">
              format_quote
            </span>
            <div className="reviews__container__card__person">
              <img
                className="reviews__container__card__person__img"
                src={review.imgSrc}
                alt={`Avatar de ${review.name}`}
              />
              <div>
                <h3 className="reviews__container__card__person__h3">
                  {review.name}
                </h3>
                <span className="reviews__container__card__person__span">
                  {review.position}
                </span>
              </div>
            </div>
            <p className="reviews__container__card__p">{review.comment}</p>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Reviews;
