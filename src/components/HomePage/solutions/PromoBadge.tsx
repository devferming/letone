import FireAnimation from "./FireAnimation";
import { ServiceKey, PriceItem } from "../../../types/Solutions.types";
import clsx from "clsx";
import "./styles/PromoBadge.css";

interface PromoBadgeProps {
  isActive: boolean;
  liName: ServiceKey;
  prices: Record<ServiceKey, PriceItem>;
}

const PromoBadge: React.FC<PromoBadgeProps> = ({
  isActive,
  liName,
  prices,
}) => {
  return (
    <div
      className={clsx("solutions__article__ul__li__promo", {
        hiddenElement: isActive,
      })}
    >
      <div className="solutions__article__ul__li__promo__animationContainer">
        <FireAnimation />
      </div>
      <h4 className="solutions__article__ul__li__promo__h4">
        {`${prices[liName].offer}% OFF`}
      </h4>
    </div>
  );
};

export default PromoBadge;
