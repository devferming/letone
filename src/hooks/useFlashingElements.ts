import { useEffect, useRef, useState } from "react";

export const useFlashingElements = <T extends string>(
  interval: number = 4000,
  elements: T[] = [],
  delayMap?: Record<T, number>
) => {
  const [crrIdxElement, setCrrIdxElement] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentElement = elements[crrIdxElement];

  const clearTimers = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const changeWithAnimation = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCrrIdxElement(newIndex);
      setTimeout(() => setIsAnimating(false), 100); // entrada
    }, 400); // salida
  };

  const goTo = (direction: "left" | "right") => {
    const delta = direction === "right" ? 1 : -1;
    const newIndex = (crrIdxElement + delta + elements.length) % elements.length;
    changeWithAnimation(newIndex);

    setPaused(true);
    pauseTimeoutRef.current = setTimeout(() => setPaused(false), 6000);
  };

  const pause = () => {
    setPaused(true);
    clearTimers();
  };

  const resume = () => {
    setPaused(false);
  };

  useEffect(() => {
    if (paused || elements.length === 0) return;

    const delay = delayMap?.[elements[crrIdxElement]] ?? interval;

    timeoutRef.current = setTimeout(() => {
      const nextIndex = (crrIdxElement + 1) % elements.length;
      changeWithAnimation(nextIndex);
    }, delay);

    return () => clearTimers();
  }, [crrIdxElement, interval, paused, elements, delayMap]);

  return {
    currentElement,
    crrIdxElement,
    goTo,
    pause,
    resume,
    paused,
    isAnimating,
  };
};
