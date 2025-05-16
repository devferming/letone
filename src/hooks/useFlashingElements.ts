import { useEffect, useState, useRef } from 'react'

export const useFlashingElements = (
  interval: number = 4000,
  elements: string[],
  delayMap?: Record<string, number>
) => {
  const [crrIdxElement, setCrrIdxElement] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentElement = elements[crrIdxElement]

  useEffect(() => {
    if (!elements.length) return

    const delay = delayMap?.[currentElement] ?? interval

    timeoutRef.current = setTimeout(() => {
      setCrrIdxElement((prev) => (prev + 1) % elements.length)
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [crrIdxElement, elements, interval, delayMap, currentElement])

  return {
    currentElement,
    crrIdxElement,
  }
}
