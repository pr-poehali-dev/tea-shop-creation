import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-tea-dark-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-tea-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍃</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold">
                Золотой листок
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Премиальные чаи со всего мира. 25 лет опыта в создании идеального
              чайного вкуса.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="hover:text-tea-gold cursor-pointer transition-colors"
                size={24}
              />
              <Icon
                name="Facebook"
                className="hover:text-tea-gold cursor-pointer transition-colors"
                size={24}
              />
              <Icon
                name="Youtube"
                className="hover:text-tea-gold cursor-pointer transition-colors"
                size={24}
              />
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Каталог
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Черный чай
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Зеленый чай
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Белый чай
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Улун
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Пуэр
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Подарочные наборы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Чайные церемонии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Корпоративные подарки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tea-gold transition-colors"
                >
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Контакты
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Phone" className="mr-3 text-tea-gold" size={18} />
                <span className="text-white/80">+7 (926) 181-86-74</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-3 text-tea-gold" size={18} />
                <span className="text-white/80">zolotoilistok@mail.ru</span>
              </div>
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="mr-3 text-tea-gold mt-1"
                  size={18}
                />
                <span className="text-white/80">Москва, ул. Чайная, 15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Чайная Империя. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-white/60 hover:text-tea-gold transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-tea-gold transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
