import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section with Premium Design */}
      <div className="gradient-accent py-16 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="ModulNewsletter bg-transparent border-0 text-center max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-12 shadow-luxury">
              <div className="mb-8">
                <span className="text-6xl mb-6 block">✉️</span>
                <h3 className="text-4xl font-bold text-accent-foreground mb-4">
                  Dołącz do Ekskluzywnego Klubu
                </h3>
                <p className="text-xl text-accent-foreground/90 leading-relaxed">
                  Otrzymuj pierwsze informacje o nowych kolekcjach, ekskluzywnych promocjach 
                  i profesjonalnych poradach projektowych
                </p>
              </div>
              
              <div className="max-w-md mx-auto mb-6">
                <div className="flex gap-3">
                  <Input 
                    type="email" 
                    placeholder="Twój adres email"
                    className="bg-white/90 backdrop-blur-sm text-primary border-0 rounded-xl px-6 py-4 text-lg placeholder:text-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                  <Button className="premium-button px-8">
                    Zapisz się
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-accent-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground/60"></div>
                  <span className="text-sm">Natychmiastowe 15% rabatu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground/60"></div>
                  <span className="text-sm">Ekskluzywne oferty</span>
                </div>
              </div>
              
              <small className="block mt-6 text-accent-foreground/70 text-sm">
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z RODO
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer with Premium Styling */}
      <div className="gradient-premium py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-medium">
                  <span className="text-2xl text-primary font-bold">E</span>
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground">EcoWoods</h3>
              </div>
              
              <p className="text-primary-foreground/80 mb-8 leading-relaxed text-lg">
                Tworzymy ponadczasowe meble z naturalnego drewna, które łączą 
                tradycyjne rzemiosło z nowoczesnym designem.
              </p>
              
              <div className="flex space-x-4">
                {[Facebook, Instagram, Youtube].map((Icon, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="sm" 
                    className="w-12 h-12 p-0 rounded-xl hover:bg-primary-foreground/15 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all"
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-primary-foreground mb-8 relative">
                Szybkie Linki
                <div className="absolute bottom-0 left-0 w-12 h-0.5 gradient-gold rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {["O nas", "Katalog produktów", "Realizacje", "Blog", "Kariera"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-2 transition-all duration-300 inline-block text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-bold text-primary-foreground mb-8 relative">
                Kategorie Premium
                <div className="absolute bottom-0 left-0 w-12 h-0.5 gradient-gold rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {["Stoły Premium", "Krzesła Designerskie", "Szafy na Wymiar", "Komody Exclusive", "Łóżka Comfort"].map((category) => (
                  <li key={category}>
                    <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-2 transition-all duration-300 inline-block text-lg">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold text-primary-foreground mb-8 relative">
                Kontakt & Showroom
                <div className="absolute bottom-0 left-0 w-12 h-0.5 gradient-gold rounded-full"></div>
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Showroom Warszawa</p>
                    <p className="text-primary-foreground/80">ul. Drewniana 123, 00-001 Warszawa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">+48 123 456 789</p>
                    <p className="text-primary-foreground/70 text-sm">Pn-Pt: 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">kontakt@ecowoods.pl</p>
                    <p className="text-primary-foreground/70 text-sm">Odpowiedź w 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-foreground/5 backdrop-blur-sm border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 EcoWoods Premium Furniture. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {["Polityka prywatności", "Regulamin", "Cookies"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;