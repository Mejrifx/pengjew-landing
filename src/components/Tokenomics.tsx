import { Card } from "@/components/ui/card";

const Tokenomics = () => {
  const tokenomicsData = [
    { label: "Total Supply", value: "1,000,000,000 PENGJEW" },
    { label: "LP Burned", value: "100% Burned" },
    { label: "Renounced Ownership", value: "Verified" },
    { label: "Buy/Sell Tax", value: "0%" },
  ];

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Tokenomics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fair distribution designed for long-term sustainability and community growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {tokenomicsData.map((item, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm text-center">
              <h3 className="text-lg font-bold text-primary mb-4">{item.label}</h3>
              <div className="text-2xl font-black text-accent mb-2 tokenomics-value">{item.value}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;