import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

type Axis = 'x' | 'y';

export function useScrollParallax(
  start: string,
  end: string,
  axis: Axis = 'x'
) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const motionValue = useTransform(scrollYProgress, [0, 1], [start, end]);

  return {
    ref,
    motionStyle: { [axis]: motionValue }
  };
}