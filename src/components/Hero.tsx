import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const contractAddress = "0x1F5Bf7968582d79001A056107A058E27772E872B";
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied Successfully!",
      description: "Contract address copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/f2c8d026-2067-44e7-82b8-44638f6fb1c3.png" 
            alt="PENGJEW Mascot" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tight">
          $PENGJEW
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I found a broken ATM and took it as a sign from above now I'm waddling in cash and blessings
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-4"
            onClick={() => window.open('https://relay.link/abstract', '_blank')}
          >
            Buy PENGJEW Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg font-semibold px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://dexscreener.com/abstract/0x1F5Bf7968582d79001A056107A058E27772E872B:moon', '_blank')}
          >
            View Chart
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto p-6 bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-primary mb-3">Contract Address</h3>
          <div className="flex items-center justify-between bg-secondary p-3 rounded-lg">
            <code className="text-sm text-foreground font-mono break-all flex-1 mr-2">
              {contractAddress}
            </code>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyToClipboard}
              className="text-accent hover:text-accent-foreground hover:bg-accent flex-shrink-0"
            >
              Copy
            </Button>
          </div>
        </Card>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <Button
            variant="ghost"
            size="lg"
            className="flex flex-col items-center gap-2 hover:bg-accent/10 p-4 h-auto"
            onClick={() => window.open('https://dexscreener.com/abstract/0x1F5Bf7968582d79001A056107A058E27772E872B:moon', '_blank')}
          >
            <img 
              src="/DEXSCREENER LOGO.png" 
              alt="Dexscreener" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-muted-foreground">Dexscreener</span>
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="flex flex-col items-center gap-2 hover:bg-accent/10 p-4 h-auto"
            onClick={() => window.open('https://x.com/PengJewAbs', '_blank')}
          >
            <img 
              src="/X LOGO.png" 
              alt="X" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-muted-foreground">X</span>
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="flex flex-col items-center gap-2 hover:bg-accent/10 p-4 h-auto"
            onClick={() => window.open('https://t.me/pengjewabs', '_blank')}
          >
            <img 
              src="/TG LOGO .png" 
              alt="Telegram" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-muted-foreground">Telegram</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;