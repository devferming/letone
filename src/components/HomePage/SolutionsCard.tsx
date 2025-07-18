import { SolutionTier, ServiceKey, PriceItem } from './Solutions';
import { useTranslation } from 'react-i18next'
import { motion } from "motion/react";
import './styles/SolutionsCard.css'


interface SolutionsCardProps {
 isFlipped: boolean
 crrLiFront: ServiceKey
 crrLiBack: ServiceKey
 crrLiSide: "front" | "back"
 list: Record<ServiceKey, SolutionTier>;
 prices: Record<ServiceKey, PriceItem>;
}

const SolutionsCard: React.FC<SolutionsCardProps> = ({ isFlipped, crrLiFront, crrLiBack, crrLiSide, list, prices }) => {

 const { t } = useTranslation()

 return (
  <div className='solutions__article__div__wrapper'>
   <motion.div
    className='solutions__article__div__card'
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.6, easing: "ease-in-out" }}
   >

    {['front', 'back'].map((face) => {

     const index: ServiceKey = face === 'front' ? crrLiFront : crrLiBack;
     const isActive = crrLiSide === face;
     
     return (
      < div
       key={face}
       role="tabpanel"
       aria-labelledby={`solution-tab-${index}`}
       aria-hidden={!isActive}
       hidden={!isActive}
       id={`solution-panel-${index}`}
       className={`solutions__article__div__face solutions__article__div__${face}`}
      >
       <h3 className='solutions__article__div__face__h3'>{list[index].longTittle}</h3>
       <p className='solutions__article__div__face__p'>{list[index].generalDescription}</p>

       <ul className='solutions__article__div__face__pricesCard'>
        {['Basic', 'Pro', 'Premium'].map((tier) => (
         <li
          key={tier}
          className={`solutions__article__div__face__pricesCard__li ${tier.toLowerCase() === 'pro' ? 'priceCard--liPro' : ''}`}
         >
          <div className='solutions__article__div__face__pricesCard__div'>
           <h4 className={`solutions__article__div__face__pricesCard__h4 ${tier.toLowerCase() === 'pro' ? 'priceCard--h4Pro' : ''}`}>{tier}</h4>

           <p className='solutions__article__div__face__pricesCard__div__price'>
            {prices[index].price[tier.toLowerCase() as keyof typeof prices[typeof index]['price']]}
            <span className='solutions__article__div__face__pricesCard__div__currency'> /USD</span>
           </p>

           <button className={`solutions__article__div__face__pricesCard__btn ${tier.toLowerCase() === 'pro' ? 'priceCard--btnPro' : ''}`}>
            {t('pages.homePage.components.solutions.button')}
           </button>
          </div>
          <p className='solutions__article__div__face__pricesCard__p'>
           {list[index][tier.toLowerCase() as keyof typeof list[typeof index]]}
          </p>
         </li>
        ))}
       </ul>

      </div>

     );
    })}

   </motion.div>
  </div>
 )
}

export default SolutionsCard