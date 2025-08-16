import { TFunction } from "i18next";
import {
  SolutionTier,
  ServiceKey,
  PriceItem,
  ChannelItem,
} from "../../../types/Solutions.types";
import clsx from "clsx";
import "./styles/TierCard.css";

interface TierProps {
  isActive: boolean;
  liName: ServiceKey;
  liInfo: SolutionTier;
  prices: Record<ServiceKey, PriceItem>;
  typedChannel: ChannelItem;
  t: TFunction;
  tBase: string;
  list: Record<ServiceKey, SolutionTier>;
}

const TierCard: React.FC<TierProps> = ({
  isActive,
  liName,
  liInfo,
  prices,
  typedChannel,
  t,
  tBase,
  list,
}) => {
  return (
    <ul
      className={`solutions__article__ul_priceCard ${
        !isActive ? "hiddenElement" : ""
      }`}
    >

      {["Basic", "Pro", "Premium"].map((tier) => (
        <li
          key={tier}
          className={clsx("solutions__article__ul_priceCard__li", {
            "priceCard--liPro": tier === "Pro",
          })}
        >
          <div className="solutions__article__ul_priceCard__div">
            <h4
              className={clsx("solutions__article__ul_priceCard__h4", {
                "priceCard--h4Pro": tier === "Pro",
              })}
            >
              {tier}
            </h4>

            <p
              className={clsx("solutions__article__ul_priceCard__div__price", {
                withOffer: prices[liName].offer > 0,
              })}
            >
              {
                prices[liName].price[
                  tier.toLowerCase() as keyof (typeof prices)[typeof liName]["price"]
                ]
              }
              <span className="solutions__article__ul_priceCard__div__currency">
                {` /usd`}
              </span>
            </p>

            {prices[liName].offer > 0 && (
              <p className="solutions__article__ul_priceCard__div__price">
                {(
                  Number(
                    prices[liName].price[
                      tier.toLowerCase() as keyof (typeof prices)[typeof liName]["price"]
                    ]
                  ) *
                  (1 - prices[liName].offer / 100)
                ).toFixed(0)}
                <span className="solutions__article__ul_priceCard__div__currency">
                  {` /usd`}
                </span>
              </p>
            )}

            <a
              className={clsx("solutions__article__ul_priceCard__a", {
                "priceCard--aRegular": tier.toLowerCase() !== "pro",
              })}
              href={
                typedChannel.href +
                t(`${tBase}.a.href.${tier.toLowerCase()}`) +
                `%20${liInfo.shortTittle}`
              }
              aria-label={`${t(`${tBase}.a.ariaLabel`)} ${tier.toLowerCase()} ${
                liInfo.shortTittle
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(`${tBase}.a.text`)}
            </a>
          </div>
          <p className="solutions__article__ul_priceCard__p">
            {
              list[liName][
                tier.toLowerCase() as keyof (typeof list)[typeof liName]
              ]
            }
          </p>
        </li>
      ))}

    </ul>
  );
};

export default TierCard;
