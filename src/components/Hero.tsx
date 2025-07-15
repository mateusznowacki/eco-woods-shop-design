import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative gradient-hero py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-premium animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full gradient-accent animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20">
                <Leaf className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm font-medium text-accent">100% Naturalne Drewno</span>
              </div>
              
              <h1 className="premium-heading">
                Meble Premium
                <span className="block text-accent">z Pasją Tworzone</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Odkryj kolekcję wyjątkowych mebli z naturalnego drewna. 
                Każdy element to połączenie tradycyjnego rzemiosła z nowoczesnym designem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="premium-button group">
                Odkryj Kolekcję
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-medium"
              >
                Bezpłatna Konsultacja
              </Button>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {[
                { icon: Leaf, title: "Eco-Friendly", desc: "Certyfikowane źródła", color: "text-accent" },
                { icon: Award, title: "Gwarancja Premium", desc: "15 lat pewności", color: "text-accent" },
                { icon: Truck, title: "Dostawa Gratis", desc: "Już od 500 zł", color: "text-accent" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 rounded-xl glass flex items-center justify-center group-hover:shadow-medium transition-all">
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            {/* Main showcase card */}
            <div className="relative premium-card p-8 animate-float">
              <div className="aspect-square rounded-xl gradient-hero flex items-center justify-center relative overflow-hidden">
                {/* Premium furniture showcase */}
                <div className="text-center space-y-6 z-10 relative">
                  <div className="w-40 h-40 rounded-full glass mx-auto flex items-center justify-center shadow-luxury">
                    <span className="text-8xl">🪑</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Kolekcja Premium</h3>
                    <p className="text-lg text-muted-foreground">Rzemiosło najwyższej jakości</p>
                  </div>
                </div>
                
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--primary)) 10px, hsl(var(--primary)) 11px)`
                  }}></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass px-6 py-3 rounded-xl shadow-luxury animate-glow">
              <div className="text-center">
                <div className="gradient-gold bg-clip-text text-transparent font-bold text-2xl">-25%</div>
                <div className="text-xs text-muted-foreground font-medium">Pierwszy zakup</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl shadow-medium">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                <span className="text-sm font-medium">5000+ zadowolonych klientów</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;