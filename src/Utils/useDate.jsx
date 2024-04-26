import { useEffect, useState } from "react";


// Custom hook to get the current date and time
export const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;
  const time = today.toLocaleDateString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
  };
};
