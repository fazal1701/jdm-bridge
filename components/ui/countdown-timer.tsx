"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date | string;
  label?: string;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  onComplete?: () => void;
}

export function CountdownTimer({
  targetDate,
  label,
  size = "md",
  showLabels = true,
  onComplete,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
        if (onComplete) onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        total: distance,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  const sizeClasses = {
    sm: {
      container: "gap-2",
      box: "px-3 py-2",
      number: "text-xl",
      label: "text-xs",
    },
    md: {
      container: "gap-3",
      box: "px-4 py-3",
      number: "text-2xl md:text-3xl",
      label: "text-sm",
    },
    lg: {
      container: "gap-4",
      box: "px-6 py-4",
      number: "text-3xl md:text-4xl",
      label: "text-base",
    },
  };

  const classes = sizeClasses[size];

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center">
        {label && <p className="text-red-600 font-bold mb-2">{label}</p>}
        <p className="text-gray-600 font-semibold">Time's Up!</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      {label && (
        <p className="text-gray-700 font-semibold mb-3 text-sm md:text-base">{label}</p>
      )}
      <div className={`flex items-center justify-center ${classes.container}`}>
        <TimeBox value={timeLeft.days} label="DAYS" classes={classes} showLabels={showLabels} />
        <Separator />
        <TimeBox value={timeLeft.hours} label="HOURS" classes={classes} showLabels={showLabels} />
        <Separator />
        <TimeBox
          value={timeLeft.minutes}
          label="MINUTES"
          classes={classes}
          showLabels={showLabels}
        />
        <Separator />
        <TimeBox
          value={timeLeft.seconds}
          label="SECONDS"
          classes={classes}
          showLabels={showLabels}
        />
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
  classes,
  showLabels,
}: {
  value: number;
  label: string;
  classes: any;
  showLabels: boolean;
}) {
  return (
    <motion.div
      key={value}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg ${classes.box} min-w-[70px] shadow-lg`}
    >
      <div className={`font-black ${classes.number}`}>
        {String(value).padStart(2, "0")}
      </div>
      {showLabels && (
        <div className={`font-semibold uppercase tracking-wider mt-1 ${classes.label}`}>
          {label}
        </div>
      )}
    </motion.div>
  );
}

function Separator() {
  return (
    <div className="text-blue-600 font-black text-xl md:text-2xl mx-1">:</div>
  );
}

