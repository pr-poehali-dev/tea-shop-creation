import Icon from "@/components/ui/icon";

const Delivery = () => {
  return (
    <section id="delivery" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-tea-dark-green mb-4">
            Доставка и оплата
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Быстрая доставка премиальных чаев по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Бесплатная доставка */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-tea-gold/10 rounded-full flex items-center justify-center mr-4">
                <Icon name="Truck" className="text-tea-gold" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-tea-dark-green">
                Бесплатная доставка
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              По Москве от 3000 ₽<br />
              По России от 5000 ₽
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Курьерская доставка 1-2 дня</li>
              <li>• Почта России 3-7 дней</li>
            </ul>
          </div>

          {/* Способы оплаты */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-tea-gold/10 rounded-full flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-tea-gold" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-tea-dark-green">
                Удобная оплата
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">Любым удобным способом</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Банковская карта онлайн</li>
              <li>• Наличными курьеру</li>
              <li>• Банковский перевод</li>
            </ul>
          </div>

          {/* Гарантии */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-tea-gold/10 rounded-full flex items-center justify-center mr-4">
                <Icon name="Shield" className="text-tea-gold" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-tea-dark-green">
                Гарантии качества
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">100% гарантия свежести</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Возврат в течение 14 дней</li>
              <li>• Проверка качества перед отправкой</li>
              <li>• Сертификаты качества</li>
            </ul>
          </div>
        </div>

        {/* Зоны доставки */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border">
          <h3 className="text-2xl font-playfair font-semibold text-tea-dark-green mb-6 text-center">
            Зоны доставки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-tea-dark-green mb-3 flex items-center">
                <Icon name="MapPin" className="mr-2 text-tea-gold" size={18} />
                Москва и МО
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Курьерская доставка в день заказа</li>
                <li>• Самовывоз из магазина</li>
                <li>• Доставка до двери от 300 ₽</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-tea-dark-green mb-3 flex items-center">
                <Icon name="Globe" className="mr-2 text-tea-gold" size={18} />
                Регионы России
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Почта России 3-7 дней</li>
                <li>• СДЭК в пункты выдачи</li>
                <li>• Курьерские службы</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
