"use client";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const quotes = [
    "Ratisha's eye for great design made our wedding cards stand out. She's amazing.",
    "The custom invitation cards were beyond our expectations. Thank you, Paperie!",
    "Paperie turned our wedding into a work of art. Every detail was perfect!",
    "Our event was elevated by Paperie's creative stationery. We couldn’t be happier.",
    "The attention to detail in every design was remarkable. Highly recommended!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="px-4 py-8">
      <h1 className=" text-4xl font-semibold sm:text-4xl md:text-5xl text-center mb-4">
        Hear from what some of Our Clients say about Us
      </h1>
      <p className=" transition-discrete text-4xl sm:text-5xl md:text-3xl lg:text-7xl px-4 pb-4 text-center">
        &quot;{quotes[currentIndex]}&quot;
      </p>
    </div>
  );
};

export default Testimonials;
