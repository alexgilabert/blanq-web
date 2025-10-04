// src/components/ScrollCards.jsx
import { useEffect, useRef, useState } from 'react';
import { PiRocketLaunchFill } from "react-icons/pi";

const ScrollCards = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({}); // 👈 Nuevo estado

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.scroll-card');
    if (!cards) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      setVisibleCards((prev) => {
        const updated = { ...prev };
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          updated[index] = entry.isIntersecting;
        });
        return updated;
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const cardsData = [
    {
      number: 1,
      title: "Te entiende, te escucha.",
      subtitle: "Accede a conversaciones en tiempo real con Laia.",
      delay: 0,
      showIcon: true,
    },
    {
      number: 2,
      title: "Preparada para ser tu guía",
      subtitle: "La IA más sincera",
      delay: 0,
      showIcon: true,
    },
    {
      number: 3,
      title: "Aumenta tu potencial",
      subtitle: "Te ayudará a convertirte en quien quieres llegar a ser.",
      delay: 0,
      showIcon: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 
                 py-12 px-4 
                 w-full max-w-screen-xl mx-auto
                 bg-bg-dark-purple"
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          data-index={index}
          data-delay={card.delay}
          className={`
            scroll-card group
            bg-card-background/80
            border-2 border-card-border-color
            rounded-[16px] sm:rounded-[30px]
            w-[60%] sm:w-[350px]
            h-[150px] sm:h-[200px]
            flex flex-col justify-center items-center
            text-center px-3 py-3 sm:px-6 sm:py-4
            shadow-lg
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-xl
            ${visibleCards[index]
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }
            sm:translate-y-30%
          `}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2 bg-number-purple/15 text-white font-bold text-lg">
            <PiRocketLaunchFill className="w-5 h-5 text-number-purple" />
          </div>
          <h3 className="font-sans text-[1rem] sm:text-xl text-white font-semibold mb-2 group-hover:text-gray-200 transition-colors duration-300">
            {card.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-gray-300 group-hover:text-gray-400 transition-colors duration-300 px-2 sm:px-4 text-left leading-snug">
            {card.subtitle}
          </p>
          <div className="w-16 h-px bg-card-border-color mt-6 group-hover:bg-button-purple transition-colors duration-300"></div>
        </div>
      ))}
    </section>
  );
};

export default ScrollCards;
