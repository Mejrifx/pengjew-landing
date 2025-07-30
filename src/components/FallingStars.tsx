import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  createdAt: number;
}

const FallingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let starId = 0;
    
    // Function to create a single star
    const createStar = () => {
      const now = Date.now();
      const newStar: Star = {
        id: starId++,
        left: Math.random() * 100, // Random position from 0-100%
        animationDuration: Math.random() * 3 + 9, // 9-12 seconds for consistent speed
        animationDelay: 0, // No delay for immediate start
        createdAt: now,
      };
      
      setStars(prevStars => [...prevStars, newStar]);
    };

    // Create stars at regular intervals for smooth, even flow
    // Start with one star immediately
    createStar();
    
    // Then create new stars every 2 seconds for consistent flow
    const interval = setInterval(createStar, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 overflow-hidden h-screen">
      {stars.map((star) => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            left: `${star.left}%`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
          onAnimationEnd={() => {
            // Remove star after animation completes
            setStars(prevStars => prevStars.filter(s => s.id !== star.id));
          }}
        >
          <img 
            src="/Star Of David.png" 
            alt="Falling Star" 
            className="star-image"
          />
        </div>
      ))}
    </div>
  );
};

export default FallingStars;