import Lottie from "lottie-react";
import fireAnimation from "../../../assets/animations/fireLottie.json";

const FireAnimation = () => {
  return (
    <Lottie
      animationData={fireAnimation}
      loop={true}
      aria-label="fire animation"
      aria-hidden="true"
    />
  );
};

export default FireAnimation;
