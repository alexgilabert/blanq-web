// src/components/ScrollCards.jsx
import { useEffect, useRef, useState } from 'react';

const ScrollCards = ({ t = {} }) => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    if (!cards) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
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

  const features = [
    {
      title: t.card1_title,
      description: t.card1_desc,
      icon: t.card1_icon || '⚽',
    },
    {
      title: t.card2_title,
      description: t.card2_desc,
      icon: t.card2_icon || '📅',
    },
    {
      title: t.card3_title,
      description: t.card3_desc,
      icon: t.card3_icon || '📊',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-8 bg-bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`
                feature-card
                bg-card-bg
                border border-border-light
                rounded-card
                p-8
                shadow-card
                hover:shadow-card-hover
                transition-all duration-300
                ${visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }
              `}
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-card-title text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
