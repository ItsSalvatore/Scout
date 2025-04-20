import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(amount: number = 0.5) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: amount,
  });

  return { ref, isInView };
} 