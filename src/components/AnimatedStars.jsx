// src/components/AnimatedStars.jsx
import React, { useEffect, useRef, useState } from 'react';

const AnimatedStars = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);
  const [currentNumberOfStars, setCurrentNumberOfStars] = useState(150); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { 
        setCurrentNumberOfStars(50); 
      } else if (width < 1024) { 
        setCurrentNumberOfStars(100);
      } else { 
        setCurrentNumberOfStars(150);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  useEffect(() => {
    if (!containerRef.current || currentNumberOfStars === 0) {
      setStars([]); 
      return;
    }

    const generateStars = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const newStars = Array.from({ length: currentNumberOfStars }).map((_, i) => ({
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: Math.random() * 4 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleDuration: Math.random() * 10 + 5, // Duración del parpadeo
        twinkleDelay: Math.random() * 5,
        moveDuration: Math.random() * 20 + 15, // Duración del movimiento (15-35s)
        moveDelay: Math.random() * 10,
        direction: Math.random() > 0.5 ? 1 : -1, // 1 para arriba, -1 para abajo
        moveDistance: Math.random() * 300 + 100, // Distancia de movimiento (100-400px)
      }));
      setStars(newStars);
    };

    generateStars();
    
  }, [currentNumberOfStars]);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <style jsx>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--star-base-opacity, 1); }
          50% { opacity: calc(var(--star-base-opacity, 1) * 0.3); }
        }
        
        @keyframes starMove {
          0% { transform: translateY(0px); }
          100% { transform: translateY(var(--move-distance)); }
        }
        
        .star {
          animation: 
            starTwinkle var(--twinkle-duration) infinite ease-in-out alternate var(--twinkle-delay),
            starMove var(--move-duration) infinite linear var(--move-delay);
        }
      `}</style>
      
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full star"
          style={{
            '--star-base-opacity': star.opacity,
            '--twinkle-duration': `${star.twinkleDuration}s`,
            '--twinkle-delay': `${star.twinkleDelay}s`,
            '--move-duration': `${star.moveDuration}s`,
            '--move-delay': `${star.moveDelay}s`,
            '--move-distance': `${star.direction * star.moveDistance}px`,
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStars;