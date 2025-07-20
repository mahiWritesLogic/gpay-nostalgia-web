const UnderConstructionSection = () => {
  return (
    <div className="pixel-border bg-card/80 p-6 rounded-lg">
      <h2 className="text-3xl pixel-font retro-glow text-primary mb-6 text-center">
        🚧 Under Construction 🚧
      </h2>
      
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">👷‍♂️</div>
        
        <div className="pixel-font text-2xl mb-4">
          <span className="blink text-neon-lime">COMING SOON!</span>
        </div>
        
        <div className="text-lg pixel-font text-foreground mb-4">
          "Send to Bank" feature is being built by our cyber-engineers!
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-4 h-4 bg-neon-lime rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-neon-pink rounded-full animate-pulse delay-100"></div>
          <div className="w-4 h-4 bg-electric-blue rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="pixel-border bg-muted/50 p-4 rounded-lg">
          <div className="text-sm pixel-font">
            <div className="blink text-destructive">⚡ SNEAK PEEK ⚡</div>
            <div className="mt-2">Direct bank transfers, crypto payments, and more radical features!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionSection;