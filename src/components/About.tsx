import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About PENGJEW</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto handwritten-text">
            More than just a meme coin - we're building a community of ice-cold believers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">The Origin Story</h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed handwritten-text">
              Born from a community tired of rug pulls and gefilte coin knockoffs, PENGJEW is here to schlep us all to the promised land of memes and meaningful blockchain tech.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed handwritten-text">
              PENGJEW isn't just another token it's a mishpacha (family). We value tradition: transparency, community governance, and the kind of communal warmth you only find at a Shabbat dinner table. Except this table is on the blockchain… and everyone's invited.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed handwritten-text">
              So whether you're here for the crypto, the culture, or just the free bagels (airdrop pending), know this: with enough penguin power and a little chutzpah, we're building something worth believing in.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-semibold handwritten-text">
              L'chaim and let's moon, already. 🐧
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-primary mb-6">Why PENGJEW?</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground handwritten-text">Jews Run the World</p>
              </div>
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground handwritten-text">Jews Run the World</p>
              </div>
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground handwritten-text">Jews Run the World</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;