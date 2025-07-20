const GuestbookSection = () => {
  const guestbookEntries = [
    { text: "Paid ₹420 to Ashu for Maggi 🍜", heart: "💜" },
    { text: "Transferred hearts ❤️", heart: "💜" },
    { text: "Sent ₹100 to Jiya 💕", heart: "💜" },
    { text: "Pizza party fund - ₹800 to Squad 🍕", heart: "💜" },
    { text: "Coffee money to bestie ₹150 ☕", heart: "💜" }
  ];

  return (
    <div className="pixel-border bg-card/80 p-6 rounded-lg mb-8">
      <h2 className="text-3xl pixel-font retro-glow text-primary mb-6 text-center">
        📝 Guestbook 📝
      </h2>
      
      <div className="space-y-3">
        {guestbookEntries.map((entry, index) => (
          <div 
            key={index}
            className="pixel-border bg-primary-foreground p-4 rounded-lg flex justify-between items-center hover:bg-accent/20 transition-colors"
          >
            <span className="pixel-font text-sm text-foreground">
              {entry.text}
            </span>
            <span className="text-xl cursor-pointer hover:scale-125 transition-transform">
              {entry.heart}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="retro-button py-2 px-6 rounded-lg text-sm pixel-font">
          💌 Sign Guestbook 💌
        </button>
      </div>
    </div>
  );
};

export default GuestbookSection;