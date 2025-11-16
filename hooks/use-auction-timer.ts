"use client";

import { useState, useEffect } from "react";

export function useAuctionTimer(endsAt: string) {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const end = new Date(endsAt).getTime();
      const diff = Math.max(0, Math.floor((end - now) / 1000));

      if (diff === 0) {
        setIsEnded(true);
        setTimeRemaining(0);
        return;
      }

      setTimeRemaining(diff);
      setIsEnded(false);
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return {
    timeRemaining,
    hours,
    minutes,
    seconds,
    isEnded,
    formatted: `${hours}h ${minutes}m ${seconds}s`,
  };
}

