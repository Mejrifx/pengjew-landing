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
              XX XXX XXXXXX XXXXXX XX XXX XXXXXX XXXXXX, XXXXXXX XXXXXXX XX X XXXXXX XX XXXX. 
              XXXX XXXX XXX XXXXXXXXXX XXXXXX XXX XXXXXXXXX XXXXX, XXXXXXXXX, XXX XXXXXXXXX XXX, 
              XXXXXXX XXXXXXXXXX XXX XXXXXXX XXXXXX XX XXXX XXXXXXX XXX XXXXXXX XXXXXXXXXX XXXXXXXXXX.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              XXX XXXXXXX XX XXXXXX: XXXXXX X XXXXXXXXXXX XXXXXXXXX XXXXX XXXXXXX XXX XXXXXX, 
              XXXXX, XXX XXXXX XXXXXXX XXXXXX XXXXXXXX. XX XXXXXXX XX XXXXXXXXXXXX, XXXXXXXXX XXXXXXXXXX, 
              XXX XXX XXXXX XX XXXXXXXXXX XXXXXXX XXXXXX.
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
                <p className="text-foreground">XXXXXXXXX-XXXXXX XXXXXXXXXXX XXX XXXXXXXX XXXXXX</p>
              </div>
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground">XXXXXXXXXX XXXXXXXXXX XXXX XX XXXXXX XXXXXXXXXXX</p>
              </div>
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground">XXXXXX XXXXX XX XXXXXXX XXX XXXX-XXXXX XXXXXXXXXXXX</p>
              </div>
              <div className="flex items-start space-x-3">
                <img 
                  src="/Star Of David.png" 
                  alt="Star" 
                  className="w-3 h-3 object-contain mt-2 flex-shrink-0"
                />
                <p className="text-foreground">XXXXXXXXXX XXXX XXXX XXXXXX XXXXX XXXXXX</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;