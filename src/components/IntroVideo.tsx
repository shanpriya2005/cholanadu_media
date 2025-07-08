// src/components/IntroVideo.tsx
import { useEffect } from "react";

const IntroVideo = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Call the function to navigate after video ends
    }, 21000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video 
        src="/videos/cholanadu intro.mp4" // Your video path
        autoPlay 
        muted 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default IntroVideo;
