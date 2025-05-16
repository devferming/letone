import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from "motion/react";
import pricesJson from '../../data/pricesServices.json'
import './styles/Solutions.css'
import SolutionsPriceCard from './SolutionsPriceCard';

export type SolutionTier = {
  shortTittle: string;
  longTittle: string;
  generalDescription: string;
  basic: string;
  pro: string;
  premium: string;
};

export type ServiceKey = keyof typeof pricesJson;

export interface PriceItem {
  price: {
    basic: string;
    pro: string;
    premium: string;
  };
}


const Solutions: React.FC = () => {

  const { t } = useTranslation()

  const prices: Record<ServiceKey, PriceItem> = pricesJson;
  const list = t('pages.homePage.components.solutions.ul', { returnObjects: true }) as Record<ServiceKey, SolutionTier>;
  const [crrLiFront, setCrrLiFront] = useState<ServiceKey>('landingPages')
  const [crrLiBack, setCrrLiBack] = useState<ServiceKey>('landingPages')
  const [crrLi, setCrrLi] = useState<ServiceKey>('landingPages')
  const [crrLiSide, setCrrLiSide] = useState<"front" | "back">("front");
  const [isFlipped, setIsFlipped] = useState(false)

  const handleLi = (li: ServiceKey) => {
    if (crrLi === li) return
    setCrrLi(li)

    type Side = "front" | "back"
    const sideMap: Record<Side, Side> = { front: "back", back: "front" }
    const nextSide = sideMap[crrLiSide]

    nextSide === "front" ? setCrrLiFront(li) : setCrrLiBack(li)
    setCrrLiSide(nextSide)
    setIsFlipped(prev => !prev)
  };

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Suavizamos el movimiento con un resorte
  const springX = useSpring(x, { damping: 30, stiffness: 100 })
  const springY = useSpring(y, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const offsetX = (e.clientX - innerWidth / 2) / innerWidth
      const offsetY = (e.clientY - innerHeight / 2) / innerHeight

      x.set(-offsetX * 30) // multiplica para ajustar intensidad
      y.set(-offsetY * 30)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])


  return (
    <section className='solutions' id='solutions'>
      <h2 className='solutions__h2'>{t('pages.homePage.components.solutions.h2')}</h2>
      <article className='solutions__article'>

        <ul className='solutions__article__ul' role='tablist'>
          {Object.entries(list).map(([liName, liInfo]) => (
            <li key={liName} className='solutions__article__ul__li' role='presentation'>
              <button
                role="tab"
                aria-selected={crrLi === liName}
                aria-controls={`solution-panel-${liName}`}
                id={`solution-tab-${liName}`}
                className={`solutions__article__ul__btn ${crrLi === liName ? 'solutions__article__ul__btn--active' : ''}`}
                onClick={() => handleLi(liName as ServiceKey)}
              >
                {liInfo.shortTittle}
              </button>
            </li>
          ))}
        </ul>

        <SolutionsPriceCard
          isFlipped={isFlipped}
          crrLiFront={crrLiFront}
          crrLiBack={crrLiBack}
          crrLiSide={crrLiSide}
          prices={prices}
          list={list}
        />

      </article >
      <div className='solutions__imgDiv'>
        <motion.img
          className='solutions__imgDiv__img'
          src="/solutionsImg001.jpg"
          alt={t('pages.homePage.components.solutions.imagesAlt.solutionsImg001')}
          style={{ x: springX, y: springY }}
          aria-hidden="true"
        />
      </div>
    </section >
  )
}

export default Solutions