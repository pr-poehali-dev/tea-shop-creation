import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const teaCategories = [
  {
    id: "black",
    name: "Черный чай",
    description: "Классические сорта с насыщенным вкусом",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop",
    icon: "Coffee",
    count: "120+ сортов",
  },
  {
    id: "green",
    name: "Зеленый чай",
    description: "Свежесть и польза в каждом глотке",
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop",
    icon: "Leaf",
    count: "85+ сортов",
  },
  {
    id: "fruit",
    name: "Фруктовый чай",
    description: "Яркие вкусы и натуральные ароматы",
    image:
      "https://images.unsplash.com/photo-1563822249366-d5e92a1c8ef5?w=400&h=300&fit=crop",
    icon: "Apple",
    count: "60+ сортов",
  },
  {
    id: "herbal",
    name: "Травяной чай",
    description: "Целебные травы для здоровья и релакса",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    icon: "Flower2",
    count: "45+ сортов",
  },
  {
    id: "chinese",
    name: "Китайский чай",
    description: "Традиционные сорта из Поднебесной",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    icon: "Mountain",
    count: "70+ сортов",
  },
  {
    id: "yellow",
    name: "Желтый чай",
    description: "Редкие и изысканные императорские сорта",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
    icon: "Crown",
    count: "15+ сортов",
  },
  {
    id: "white",
    name: "Белый чай",
    description: "Деликатный вкус и максимум пользы",
    image:
      "https://images.unsplash.com/photo-1597318133175-26f670cb4b21?w=400&h=300&fit=crop",
    icon: "Snowflake",
    count: "25+ сортов",
  },
];

const TeaCategories = () => {
  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Каталог чая
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуйте наши коллекции премиального чая со всего мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teaCategories.map((category, index) => (
            <Card
              key={category.id}
              className="tea-card-hover group cursor-pointer animate-scale-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-tea-gold text-white p-2 rounded-full">
                  <Icon name={category.icon as any} size={20} />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-black/30 px-2 py-1 rounded">
                    {category.count}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-playfair text-tea-dark-green">
                  {category.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-tea-gold text-tea-dark-green hover:bg-tea-gold hover:text-white"
                >
                  Посмотреть сорта
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaCategories;
