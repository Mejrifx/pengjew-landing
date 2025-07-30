import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/f2c8d026-2067-44e7-82b8-44638f6fb1c3.png" 
            alt="PENGJEW" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-primary header-brand">PENGJEW</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-accent transition-colors nav-handwritten">About</a>
          <a href="#tokenomics" className="text-foreground hover:text-accent transition-colors nav-handwritten">Tokenomics</a>
          <a href="#how-to-buy" className="text-foreground hover:text-accent transition-colors nav-handwritten">How to Buy</a>
        </nav>

        {/* Desktop Buy Button */}
        <Button 
          variant="default" 
          className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          onClick={() => window.open('https://relay.link/abstract', '_blank')}
        >
          Buy PENGJEW
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger-icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground hover:text-accent transition-colors nav-handwritten text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="text-foreground hover:text-accent transition-colors nav-handwritten text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#how-to-buy" 
              className="text-foreground hover:text-accent transition-colors nav-handwritten text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Buy
            </a>
            <Button 
              variant="default" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full mt-4"
              onClick={() => {
                window.open('https://relay.link/abstract', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Buy PENGJEW
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;