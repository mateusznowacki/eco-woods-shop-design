import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Stoły",
    description: "Eleganckie stoły z naturalnego drewna",
    image: "🍽️",
    count: "120+ produktów",
    gradient: "gradient-premium"
  },
  {
    id: 2,
    name: "Krzesła",
    description: "Wygodne i stylowe krzesła",
    image: "🪑",
    count: "85+ produktów",
    gradient: "gradient-accent"
  },
  {
    id: 3,
    name: "Szafy",
    description: "Pojemne szafy i garderoby",
    image: "🚪",
    count: "45+ produktów",
    gradient: "gradient-gold"
  },
  {
    id: 4,
    name: "Komody",
    description: "Praktyczne komody i szafki",
    image: "📦",
    count: "60+ produktów",
    gradient: "gradient-premium"
  },
  {
    id: 5,
    name: "Łóżka",
    description: "Komfortowe łóżka do sypialni",
    image: "🛏️",
    count: "35+ produktów",
    gradient: "gradient-accent"
  },
  {
    id: 6,
    name: "Akcesoria",
    description: "Dodatki i akcesoria drewniane",
    image: "🎨",
    count: "90+ produktów",
    gradient: "gradient-gold"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 right-20 w-96 h-96 rounded-full gradient-hero blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full gradient-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Poznaj Naszą Ofertę</span>
          </div>
          
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Premium <span className="gradient-premium bg-clip-text text-transparent">Kategorie</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Odkryj naszą starannie wybraną kolekcję mebli z naturalnego drewna, 
            które przekształcą każde pomieszczenie w przestrzeń pełną elegancji i ciepła.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="premium-card p-8 text-center h-full group-hover:shadow-luxury transition-all duration-500">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-xl ${category.gradient} flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-110`}>
                  <span className="text-4xl filter drop-shadow-sm">{category.image}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium text-accent">{category.count}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 rounded-xl border-2"
                >
                  Przeglądaj Kolekcję
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="premium-button text-lg px-10 py-6">
            Przeglądaj Wszystkie Kategorie
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;