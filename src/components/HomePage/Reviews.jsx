import React, { useEffect, useState } from 'react'
import './styles/Reviews.css'

const Reviews = ( { currentReviews }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentReviews.length)
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const review = currentReviews[currentIndex];

  return (
    <section className='reviews' id='reviews'>
      <h2 className='reviews__h2'
        data-translate-en='Reviews'
        data-translate-es='Reseñas'>
        Reseñas
      </h2>

      <div className='reviews__container'>
        <article
          className='reviews__container__card' key={review.imgSrc}
          style={{
            animation: 'reviewFadeIn 0.7s ease-in forwards'
          }}
        >
          <span className='reviews__container__icon material-symbols-outlined'>
            format_quote
          </span>
          <div className='reviews__container__card__person'>
            <img className='reviews__container__card__person__img' src={review.imgSrc} alt="avatar img" />
            <div>
              <h3 className='reviews__container__card__person__h3'>
                {review.name}
              </h3>
              <span className='reviews__container__card__person__span'>
                {review.position}
              </span>
            </div>
          </div>
          <p className='reviews__container__card__p'>
            {review.comment}
          </p>
        </article>
      </div>
    </section>
  )
}

export default Reviews