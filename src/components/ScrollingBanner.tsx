const ScrollingBanner = () => {
  // Create the repeating content pattern
  const createContent = () => (
    <>
      <span className="text-2xl font-black text-primary mx-8">$PENGJEW</span>
      <img 
        src="/lovable-uploads/f2c8d026-2067-44e7-82b8-44638f6fb1c3.png" 
        alt="PENGJEW" 
        className="w-12 h-12 object-contain mx-8"
      />
    </>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-accent/95 backdrop-blur-sm border-t border-border overflow-hidden h-16">
      <div className="flex items-center h-full">
        <div className="flex items-center animate-infinite-scroll">
          {/* Create enough content to ensure seamless scrolling */}
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              {createContent()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;