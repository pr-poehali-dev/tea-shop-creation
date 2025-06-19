import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Award",
    title: "Премиальное качество",
    description: "Отбираем только лучшие чаи с элитных плантаций мира",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем свежий чай по всей России за 1-3 дня",
  },
  {
    icon: "Shield",
    title: "Гарантия свежести",
    description: "100% гарантия качества или возврат денег",
  },
  {
    icon: "Users",
    title: "Экспертная поддержка",
    description: "Наши чайные мастера помогут выбрать идеальный чай",
  },
];

const Benefits = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            25 лет опыта в мире чая и тысячи довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 bg-tea-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tea-gold/20 transition-colors">
                <Icon
                  name={benefit.icon as any}
                  className="text-tea-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-tea-cream/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-tea-dark-green mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Сортов чая</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-tea-dark-green mb-2">
                50K+
              </div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-tea-dark-green mb-2">
                15
              </div>
              <div className="text-muted-foreground">Стран</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-tea-dark-green mb-2">
                25
              </div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
