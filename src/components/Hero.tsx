import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative wood-texture py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-4 leading-tight">
                Naturalne Drewno
                <span className="block text-accent">dla Twojego Domu</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Odkryj piękno i trwałość mebli z naturalnego drewna. 
                Każdy element wykonany z pasją i dbałością o szczegóły.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Przeglądaj Kolekcję
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Skontaktuj się z nami
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">100% naturalne</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Jakość</h3>
                  <p className="text-sm text-muted-foreground">Gwarancja 10 lat</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dostawa</h3>
                  <p className="text-sm text-muted-foreground">Bezpłatna od 500zł</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative natural-shadow rounded-lg overflow-hidden bg-white p-8">
              <div className="aspect-square bg-gradient-to-br from-wood-light to-wood-cream rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-wood-dark/10 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-6xl">🪑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-wood-dark">Meble Premium</h3>
                  <p className="text-wood-medium">Z naturalnego drewna</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full natural-shadow">
              <span className="font-bold">-20%</span>
              <span className="block text-xs">Na pierwsze zakupy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;