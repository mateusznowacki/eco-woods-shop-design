import { Shield, Heart, Recycle, Users, Star, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Gwarancja Premium",
    description: "Każdy mebel objęty jest 15-letnią gwarancją jakości. Używamy wyłącznie najwyższej klasy materiałów i sprawdzonych technik produkcji.",
    gradient: "gradient-premium"
  },
  {
    icon: Heart,
    title: "Rzemiosło Artystyczne",
    description: "Nasze meble są tworzone przez mistrzów rzemiosła z wieloletnim doświadczeniem, którzy w każdy element wkładają pasję i precyzję.",
    gradient: "gradient-accent"
  },
  {
    icon: Recycle,
    title: "Zrównoważony Rozwój",
    description: "Dbamy o przyszłość planety - nasze drewno pochodzi z certyfikowanych lasów FSC, a procesy produkcji są w 100% ekologiczne.",
    gradient: "gradient-gold"
  },
  {
    icon: Users,
    title: "Ekskluzywne Doradztwo",
    description: "Nasz zespół projektantów wnętrz pomoże Ci stworzyć przestrzeń marzeń. Oferujemy bezpłatne konsultacje i projektowanie na miarę.",
    gradient: "gradient-premium"
  }
];

const stats = [
  { number: "15+", label: "Lat Doświadczenia", icon: Clock },
  { number: "8500+", label: "Zadowolonych Klientów", icon: Users },
  { number: "750+", label: "Unikalnych Produktów", icon: Award },
  { number: "99%", label: "Pozytywnych Opinii", icon: Star }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full gradient-accent blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full gradient-premium blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Dlaczego Jesteśmy Wyjątkowi</span>
          </div>
          
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Tworzymy <span className="gradient-accent bg-clip-text text-transparent">Legendy</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Od ponad dekady łączymy tradycyjne rzemiosło z innowacyjnym designem, 
            tworząc meble, które stają się dziedzictwem przekazywanym z pokolenia na pokolenie.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group hover:scale-105 transition-all duration-500"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="premium-card p-8 h-full group-hover:shadow-luxury transition-all duration-500">
                <div className="flex items-start space-x-6">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-medium group-hover:shadow-strong group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Stats Section */}
        <div className="glass rounded-2xl p-8 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 mx-auto text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold gradient-premium bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 pt-8 border-t border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gotowy na Transformację Swojego Wnętrza?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Skontaktuj się z nami już dziś i otrzymaj bezpłatną konsultację projektową
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="premium-button">
                Bezpłatna Konsultacja
              </button>
              <button className="px-8 py-4 rounded-xl font-medium border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Katalog 2024
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;