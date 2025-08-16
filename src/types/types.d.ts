

declare module 'react-lottie' {
  import { Component } from 'react';

  export interface Options {
    loop?: boolean;
    autoplay?: boolean;
    animationData: object;
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  }

  export interface LottieProps {
    options: Options;
    height?: number | string;
    width?: number | string;
    isStopped?: boolean;
    isPaused?: boolean;
    isClickToPauseDisabled?: boolean;
  }

  export default class Lottie extends Component<LottieProps> {}
}
