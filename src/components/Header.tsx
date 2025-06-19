import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-tea-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍃</span>
            </div>
            <h1 className="text-2xl font-playfair font-bold text-tea-dark-green">
              Золотой листок
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#catalog"
              className="text-foreground hover:text-tea-gold transition-colors"
            >
              Каталог
            </a>
            <a
              href="#gifts"
              className="text-foreground hover:text-tea-gold transition-colors"
            >
              Подарки
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-tea-gold transition-colors"
            >
              О нас
            </a>
            <a
              href="#reviews"
              className="text-foreground hover:text-tea-gold transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#delivery"
              className="text-foreground hover:text-tea-gold transition-colors"
            >
              Доставка
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#catalog"
                className="text-foreground hover:text-tea-gold transition-colors"
              >
                Каталог
              </a>
              <a
                href="#gifts"
                className="text-foreground hover:text-tea-gold transition-colors"
              >
                Подарки
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-tea-gold transition-colors"
              >
                О нас
              </a>
              <a
                href="#reviews"
                className="text-foreground hover:text-tea-gold transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#delivery"
                className="text-foreground hover:text-tea-gold transition-colors"
              >
                Доставка
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
