import { useEffect, useState } from "react";
import Selection from "./Selection";

export default function Congratulations() {
  

    const messages = [
    "Congratulations you defeated the dragon...",
    "And for that I thank you gladly brave Tisi",
    "Thank you for protecting this kingdom",
    "May many years of prosperity come along with this victory",
    "May many years of happiness come for this people",
    "May many years of peace come for this land",
    "And may many years of joy come for us all",
    "One final thing I wanted to ask you",
    "Would you like to be this king's valentines?",
  ];
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  useEffect(() => {
    const timers = messages.map((message, index) =>
      setTimeout(() => {
        setVisibleMessages((prevMessages) => [...prevMessages, message]);
      }, (index + 1) * 3000)
    );
    
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div>
      {visibleMessages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      {visibleMessages.length === messages.length && <Selection />}
    </div>
  );
}
