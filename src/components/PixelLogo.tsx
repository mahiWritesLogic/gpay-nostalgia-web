const PixelLogo = () => {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <div className="pixel-font text-8xl font-bold retro-glow text-primary-foreground">
          GPay
        </div>
        <div className="absolute -top-4 -right-4 blink text-4xl">
          💲
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelLogo;