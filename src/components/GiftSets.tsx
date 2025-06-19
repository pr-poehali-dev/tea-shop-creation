import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const giftSets = [
  {
    id: "classic",
    name: "Классический набор",
    description: "Идеальный подарок для знакомства с миром чая",
    price: "4 990 ₽",
    originalPrice: "6 500 ₽",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=400&fit=crop",
    items: [
      "5 сортов чая",
      "Фарфоровая чашка",
      "Деревянная ложка",
      "Красивая упаковка",
    ],
    badge: "Популярный",
  },
  {
    id: "premium",
    name: "Премиум коллекция",
    description: "Эксклюзивные сорта для истинных ценителей",
    price: "12 990 ₽",
    originalPrice: "16 000 ₽",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=400&fit=crop",
    items: [
      "10 редких сортов",
      "Чайный сервиз",
      "Гайвань",
      "Подарочная коробка",
    ],
    badge: "Эксклюзив",
  },
  {
    id: "ceremony",
    name: "Чайная церемония",
    description: "Полный набор для проведения традиционной церемонии",
    price: "18 990 ₽",
    originalPrice: "24 000 ₽",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    items: ["15 сортов чая", "Чайная доска", "Набор посуды", "Книга о чае"],
    badge: "Мастер-класс",
  },
];

const GiftSets = () => {
  return (
    <section id="gifts" className="py-20 bg-tea-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Подарочные наборы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изысканные коллекции и эксклюзивные наборы для особых случаев
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftSets.map((set, index) => (
            <Card
              key={set.id}
              className="tea-card-hover relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-tea-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                {set.badge}
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={set.image}
                  alt={set.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-tea-dark-green">
                  {set.name}
                </CardTitle>
                <p className="text-muted-foreground">{set.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-playfair font-bold text-tea-dark-green">
                    {set.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {set.originalPrice}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">В наборе:</h4>
                  <ul className="space-y-1">
                    {set.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Icon
                          name="Check"
                          className="mr-2 text-tea-gold"
                          size={16}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-tea-dark-green hover:bg-tea-light-green">
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-tea-gold text-tea-dark-green hover:bg-tea-gold hover:text-white"
          >
            Посмотреть все наборы
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiftSets;
