'use client';

import React from 'react';
import '../styles/flipcard.css';

const FlipCards = () => {
  const cards = [
    {
      id: 1,
      frontImage: '/projects/interior-design-ai/flipcard-1-0.png',
      backImage: '/projects/interior-design-ai/flipcard-1-1.png',
    },
    {
      id: 2,
      frontImage: '/projects/interior-design-ai/flipcard-2-0.png',
      backImage: '/projects/interior-design-ai/flipcard-2-1.png',
    },
    {
      id: 3,
      frontImage: '/projects/interior-design-ai/flipcard-3-0.png',
      backImage: '/projects/interior-design-ai/flipcard-3-1.png',
    },
    {
      id: 4,
      frontImage: '/projects/interior-design-ai/flipcard-4-0.png',
      backImage: '/projects/interior-design-ai/flipcard-4-1.png',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-2 lg:gap-4 h-full px-2 lg:px-0">
      {cards.map((card) => (
        <div key={card.id} className="flip-card h-full">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={card.frontImage}
                alt={`Flip Card ${card.id} Front`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flip-card-back">
              <img
                src={card.backImage}
                alt={`Flip Card ${card.id} Back`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards; 