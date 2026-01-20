import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Automatically flip back to front when the user scrolls
  useEffect(() => {
    if (!isFlipped) return;

    const onScroll = () => setIsFlipped(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isFlipped]);

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''} ${className}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="glass-effect border-0 h-full cursor-pointer hover:bg-card-hover transition-all duration-300">
            <CardContent className="p-0 h-full">
              {front}
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="glass-effect border-0 h-full cursor-pointer hover:bg-card-hover transition-all duration-300">
            <CardContent className="p-6 h-full overflow-y-auto">
              {back}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;