import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const blackTeaVarieties = [
  {
    id: "earl-grey",
    name: "Эрл Грей",
    origin: "Англия",
    description: "Классический черный чай с ароматом бергамота",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop",
    strength: "Средний",
    notes: ["Цитрус", "Бергамот", "Цветочный"],
    price: "450₽",
  },
  {
    id: "english-breakfast",
    name: "Английский завтрак",
    origin: "Англия",
    description: "Крепкий утренний чай, идеален с молоком",
    image:
      "https://images.unsplash.com/photo-1597142181687-b2d0b8c0d0d0?w=400&h=300&fit=crop",
    strength: "Крепкий",
    notes: ["Солодовый", "Насыщенный", "Терпкий"],
    price: "380₽",
  },
  {
    id: "ceylon",
    name: "Цейлон",
    origin: "Шри-Ланка",
    description: "Высокогорный чай с ярким вкусом и ароматом",
    image:
      "https://images.unsplash.com/photo-1563714193017-5a5fb74f2634?w=400&h=300&fit=crop",
    strength: "Средний",
    notes: ["Цитрусовый", "Свежий", "Легкий"],
    price: "420₽",
  },
  {
    id: "assam",
    name: "Ассам",
    origin: "Индия",
    description: "Плотный индийский чай с солодовыми нотами",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
    strength: "Очень крепкий",
    notes: ["Солодовый", "Медовый", "Пряный"],
    price: "390₽",
  },
  {
    id: "darjeeling",
    name: "Дарджилинг",
    origin: "Индия",
    description: "Мускатный аромат и изысканный вкус",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    strength: "Средний",
    notes: ["Мускатный", "Фруктовый", "Цветочный"],
    price: "520₽",
  },
  {
    id: "lapsang-souchong",
    name: "Лапсанг Сушонг",
    origin: "Китай",
    description: "Копченый чай с уникальным дымным ароматом",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    strength: "Средний",
    notes: ["Дымный", "Копченый", "Древесный"],
    price: "590₽",
  },
];

const BlackTeaVarieties = () => {
  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "Легкий":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Крепкий":
        return "bg-orange-100 text-orange-800";
      case "Очень крепкий":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-tea-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-tea-dark-green mb-4">
            Сорта черного чая
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Откройте для себя богатство вкусов классического черного чая — от
            английских традиций до экзотических азиатских сортов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blackTeaVarieties.map((tea, index) => (
            <Card
              key={tea.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${getStrengthColor(tea.strength)} border-0`}
                  >
                    {tea.strength}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-tea-dark-green px-3 py-1 rounded-full font-semibold">
                  {tea.price}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-playfair text-tea-dark-green">
                    {tea.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="text-xs text-tea-gold border-tea-gold"
                  >
                    {tea.origin}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tea.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-tea-dark-green mb-2">
                    Вкусовые ноты:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tea.notes.map((note) => (
                      <Badge
                        key={note}
                        variant="secondary"
                        className="text-xs bg-tea-gold/10 text-tea-dark-green hover:bg-tea-gold/20"
                      >
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-tea-dark-green hover:bg-tea-dark-green/90 text-white">
                  Добавить в корзину
                  <Icon name="ShoppingCart" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-tea-gold text-tea-dark-green hover:bg-tea-gold hover:text-white"
          >
            Посмотреть все сорта черного чая
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlackTeaVarieties;
