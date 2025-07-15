import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Stoły",
    description: "Eleganckie stoły z naturalnego drewna",
    image: "🍽️",
    count: "120+ produktów"
  },
  {
    id: 2,
    name: "Krzesła",
    description: "Wygodne i stylowe krzesła",
    image: "🪑",
    count: "85+ produktów"
  },
  {
    id: 3,
    name: "Szafy",
    description: "Pojemne szafy i garderoby",
    image: "🚪",
    count: "45+ produktów"
  },
  {
    id: 4,
    name: "Komody",
    description: "Praktyczne komody i szafki",
    image: "📦",
    count: "60+ produktów"
  },
  {
    id: 5,
    name: "Łóżka",
    description: "Komfortowe łóżka do sypialni",
    image: "🛏️",
    count: "35+ produktów"
  },
  {
    id: 6,
    name: "Akcesoria",
    description: "Dodatki i akcesoria drewniane",
    image: "🎨",
    count: "90+ produktów"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nasze Kategorie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Przeszukaj naszą szeroką gamę mebli z naturalnego drewna, 
            starannie dobranych dla każdego pomieszczenia w Twoim domu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 natural-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="text-sm text-accent font-medium mb-6">
                  {category.count}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                >
                  Przeglądaj
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Zobacz wszystkie kategorie
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;