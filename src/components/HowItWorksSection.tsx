const HowItWorksSection = () => {
  return (
    <div className="pixel-border bg-card/80 p-6 rounded-lg mb-8">
      <h2 className="text-3xl pixel-font retro-glow text-primary mb-6 text-center">
        How It Works
      </h2>
      
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 pixel-border bg-gradient-cyber rounded-lg flex items-center justify-center">
            <div className="text-4xl">🤖</div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="pixel-border bg-primary-foreground p-4 rounded-lg relative">
            <div className="absolute -left-4 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-primary-foreground"></div>
            <p className="pixel-font text-sm text-foreground">
              <span className="retro-glow text-primary">Universal Payments!</span><br/>
              Just send money to friends and more...<br/>
              <span className="blink text-neon-lime">✨ It's totally rad! ✨</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="pixel-border bg-secondary/50 p-3 rounded-lg">
          <div className="text-2xl mb-2">📱</div>
          <div className="pixel-font text-xs">Open App</div>
        </div>
        <div className="pixel-border bg-accent/50 p-3 rounded-lg">
          <div className="text-2xl mb-2">💳</div>
          <div className="pixel-font text-xs">Enter UPI</div>
        </div>
        <div className="pixel-border bg-primary/50 p-3 rounded-lg">
          <div className="text-2xl mb-2">🚀</div>
          <div className="pixel-font text-xs text-primary-foreground">Send $$$</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;