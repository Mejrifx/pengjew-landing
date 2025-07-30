import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HowToBuy = () => {
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

  const steps = [
    {
      number: "1",
      title: "Create a Wallet",
      description: "Create an abstract global wallet (AGW)",
      details: "Tip: Securely backup your seed phrases offline"
    },
    {
      number: "2", 
      title: "Get ABS Ethereum",
      description: "Deposit or transfer eth into your wallet",
      details: "Verify the $PENGJEW contract address against official sources before commiting a transaction"
    },
    {
      number: "3",
      title: "Buy $PENGJEW",
      description: "Acquire $PENGJEW to support the development of the abstract chain ecosystem and the PENG JEWS",
      details: ""
    }
  ];



  return (
    <section id="how-to-buy" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How to Buy PENGJEW</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to join the PENGJEW community
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-foreground mb-3">{step.description}</p>
                {step.details && <p className="text-sm text-muted-foreground">{step.details}</p>}
              </div>
            </Card>
          ))}
        </div>



        <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-3">Contract Address</h3>
            <p className="text-muted-foreground mb-4">Always verify this address before trading</p>
          </div>
          
          <div className="flex items-center justify-between bg-secondary p-4 rounded-lg mb-6">
            <code className="text-sm font-mono text-foreground break-all flex-1 mr-2">
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
          


          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Important:</strong> Always double-check the contract address and never share your private keys or seed phrase with anyone.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HowToBuy;