const Footer = () => {
  const contractAddress = "0x1F5Bf7968582d79001A056107A058E27772E872B";

  const footerLinks = {
    project: [
      { name: "About", href: "#about" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "How to Buy", href: "#how-to-buy" }
    ],
    community: [
      { name: "Telegram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Dexscreener", href: "https://dexscreener.com/abstract/0x1F5Bf7968582d79001A056107A058E27772E872B:moon" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f2c8d026-2067-44e7-82b8-44638f6fb1c3.png" 
                alt="PENGJEW" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-2xl font-bold">PENGJEW</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              The coolest penguin in the crypto arctic. Join our community and waddle to success together.
            </p>
            <div className="bg-primary-foreground/10 p-3 rounded-lg">
              <p className="text-xs text-primary-foreground/60 mb-1">Contract Address:</p>
              <code className="text-xs font-mono text-primary-foreground break-all">
                {contractAddress}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Project</h4>
            <ul className="space-y-2">
              {footerLinks.project.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 PENGJEW. All rights reserved.
            </p>
            <div className="text-sm">
              <a 
                href="https://t.me/mejrifx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Built by @Mejrifx
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;