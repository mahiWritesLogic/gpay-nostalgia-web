import Sidebar from "@/components/Sidebar";
import PixelLogo from "@/components/PixelLogo";
import SendMoneySection from "@/components/SendMoneySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GuestbookSection from "@/components/GuestbookSection";
import UnderConstructionSection from "@/components/UnderConstructionSection";
import RetroHeader from "@/components/RetroHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-retro">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <RetroHeader />
          
          <div className="max-w-4xl mx-auto">
            {/* Logo Section */}
            <div className="mb-12">
              <PixelLogo />
            </div>
            
            {/* Send Money Section */}
            <SendMoneySection />
            
            {/* How It Works Section */}
            <HowItWorksSection />
            
            {/* Guestbook Section */}
            <GuestbookSection />
            
            {/* Under Construction Section */}
            <UnderConstructionSection />
            
            {/* Footer */}
            <div className="text-center mt-12 p-6">
              <div className="pixel-font text-sm text-muted-foreground">
                <div className="blink">✨ Made with 💜 in the 90s ✨</div>
                <div className="mt-2">© 1995 GPay Industries • All Rights Reserved</div>
                <div className="mt-1">Best viewed in Netscape Navigator 📺</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
