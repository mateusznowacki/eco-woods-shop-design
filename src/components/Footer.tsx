import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="ModulNewsletter bg-transparent border-0 text-center">
            <strong className="text-accent-foreground">Newsletter</strong>
            <p className="text-accent-foreground/80 mt-4 mb-6">
              <span>Zapisz się do naszego newslettera i otrzymaj</span>
              <span className="block font-bold">10% zniżki na pierwsze zakupy!</span>
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Twój adres email"
                  className="bg-white text-black border-0"
                />
                <Button variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Zapisz się
                </Button>
              </div>
              <small className="block mt-3 text-accent-foreground/70">
                Wyrażam zgodę na przetwarzanie danych osobowych
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">EcoWoods</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Tworzymy meble z naturalnego drewna z pasją i dbałością o każdy szczegół. 
                Jakość i ekologia to nasze priorytety.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Szybkie Linki</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">O nas</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Katalog produktów</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Promocje</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kategorie</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Stoły</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Krzesła</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Szafy</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Komody</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Łóżka</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">
                    ul. Drewniana 123<br />
                    00-001 Warszawa
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">+48 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">kontakt@ecowoods.pl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 EcoWoods. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Regulamin
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;