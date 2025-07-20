import { Button } from "@/components/ui/button";

const SendMoneySection = () => {
  return (
    <div className="text-center mb-12">
      <Button className="retro-button text-2xl py-6 px-12 rounded-xl pixel-font">
        💸 Send Money 💸
      </Button>
      <div className="mt-4 text-sm pixel-font text-muted-foreground">
        <div className="marquee">
          <div className="marquee-content">
            💰 UNIVERSAL PAYMENTS! 💰 SEND TO FRIENDS! 💰 INSTANT TRANSFERS! 💰
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoneySection;