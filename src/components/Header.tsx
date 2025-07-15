import { Search, Phone, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="glass border-b border-border/50 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary/5 backdrop-blur-sm py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-6">
            <span className="flex items-center font-medium">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              +48 123 456 789
            </span>
            <span className="hidden md:block">kontakt@ecowoods.pl</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden sm:block font-medium text-accent">
              ✨ Darmowa dostawa od 500 zł
            </span>
            <Button variant="ghost" size="sm" className="text-xs hover:bg-accent/10 hover:text-accent transition-colors">
              <User className="w-4 h-4 mr-1" />
              Moje konto
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center shadow-medium">
              <span className="text-2xl text-primary-foreground font-bold">E</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary tracking-tight">
                EcoWoods
              </h1>
              <span className="text-sm text-accent font-medium tracking-wide">
                Naturalnie Piękne
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input 
                placeholder="Szukaj produktów, kategorii..." 
                className="pl-4 pr-12 py-3 bg-muted/30 border-border/50 rounded-xl focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 gradient-accent rounded-lg"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Cart and menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative hover:bg-accent/10 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-medium">
                0
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="gradient-premium text-primary-foreground shadow-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 py-4">
            {[
              "Kategorie", "Stoły", "Krzesła", "Szafy", "Komody", "Łóżka", "Promocje", "Nowości"
            ].map((item, index) => (
              <Button 
                key={item}
                variant="ghost" 
                className={`text-primary-foreground hover:bg-primary-foreground/15 px-4 py-2 rounded-lg transition-all ${
                  item === "Nowości" ? "gradient-gold text-primary font-semibold" : ""
                } ${index === 0 ? "font-semibold" : ""}`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;