import { useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Triggers transition to homepage
    }, 8000); // Show splash screen for 4 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-80 w-80 animate-zoomIn"
      />
    </div>
  );
};

export default SplashScreen;
