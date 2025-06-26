import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';

interface HoverVideoPlayerProps {
  src: string;
  poster?: string;
}

const HoverVideoPlayer: React.FC<HoverVideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from beginning on hover
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 2; // Reset to still frame at 2s
    }
  };

  return (
    <Card
      className="overflow-hidden group aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        poster={poster}
        className="w-full h-full object-cover"
      />
    </Card>
  );
};

export default HoverVideoPlayer;
