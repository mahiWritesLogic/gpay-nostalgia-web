import { DollarSign, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-cyber pixel-border h-screen p-4 space-y-4">
      <div className="text-center mb-8">
        <div className="pixel-font text-2xl retro-glow text-primary-foreground">
          ✨ MENU ✨
        </div>
      </div>
      
      <div className="space-y-3">
        <button className="retro-button w-full py-3 px-4 rounded-lg flex items-center gap-3 text-sm">
          <DollarSign className="w-5 h-5" />
          <span className="pixel-font">Send $$</span>
        </button>
        
        <button className="retro-button w-full py-3 px-4 rounded-lg flex items-center gap-3 text-sm">
          <FileText className="w-5 h-5" />
          <span className="pixel-font">Transaction Log</span>
        </button>
        
        <button className="retro-button w-full py-3 px-4 rounded-lg flex items-center gap-3 text-sm">
          <Settings className="w-5 h-5" />
          <span className="pixel-font">CyberWallet Setup</span>
        </button>
      </div>

      <div className="mt-8 p-4 pixel-border bg-muted/50 rounded-lg">
        <div className="text-xs pixel-font text-center">
          <div className="blink text-neon-lime">🔥 HOT DEALS! 🔥</div>
          <div className="mt-2 text-foreground">Click here to WIN ₹1000!</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;