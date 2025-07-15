import { Shield, Heart, Recycle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Gwarancja Jakości",
    description: "Każdy mebel objęty jest 10-letnią gwarancją. Używamy tylko najwyższej jakości materiałów i sprawdzonych technik produkcji."
  },
  {
    icon: Heart,
    title: "Ręcznie Wykonane",
    description: "Nasze meble są tworzone przez doświadczonych rzemieślników z pasją do drewna i dbałością o każdy detal."
  },
  {
    icon: Recycle,
    title: "Ekologiczne",
    description: "Dbamy o środowisko - nasze drewno pochodzi z certyfikowanych, zrównoważonych źródeł. 100% naturalne produkty."
  },
  {
    icon: Users,
    title: "Obsługa Klienta",
    description: "Nasz zespek ekspertów pomoże Ci wybrać idealne meble. Oferujemy profesjonalne doradztwo i wsparcie."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dlaczego EcoWoods?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Od ponad 15 lat tworzymy meble, które łączą tradycyjne rzemiosło 
            z nowoczesnym designem. Poznaj nasze wartości i zobacz, 
            dlaczego klienci nam ufają.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors natural-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 deep-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Lat doświadczenia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-foreground/80">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Produktów w ofercie</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Pozytywnych opinii</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;