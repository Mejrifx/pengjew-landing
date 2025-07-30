import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About PENGJEW</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a meme coin - we're building a community of ice-cold believers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">The Origin Story</h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              In the frozen depths of the crypto winter, PENGJEW emerged as a beacon of hope. 
              Born from the community's desire for something fresh, authentic, and genuinely fun, 
              PENGJEW represents the perfect fusion of meme culture and serious blockchain innovation.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Our mission is simple: create a sustainable ecosystem where holders can thrive, 
              laugh, and build lasting wealth together. We believe in transparency, community governance, 
              and the power of collective penguin energy.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-primary mb-6">Why PENGJEW?</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground">Community-driven development and decision making</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground">Transparent tokenomics with no hidden allocations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground">Strong focus on utility and real-world applications</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground">Experienced team with proven track record</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;