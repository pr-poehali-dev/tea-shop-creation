import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "Ценитель чая",
    rating: 5,
    text: "Потрясающее качество! Заказываю здесь уже 3 года. Особенно нравятся китайские улуны - такого вкуса не найдешь в обычных магазинах.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Михаил Иванов",
    role: "Директор компании",
    text: "Покупаю подарочные наборы для партнеров. Всегда получаю восторженные отзывы. Упаковка премиальная, чай отличный.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Елена Смирнова",
    role: "Домохозяйка",
    text: "Открыла для себя мир настоящего чая благодаря этому магазину. Консультанты помогли выбрать идеальные сорта.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    role: "Чайный мастер",
    text: "Как профессионал в области чая, могу сказать - здесь действительно понимают, что такое качественный продукт.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-tea-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 50 000 довольных клиентов по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="tea-card-hover animate-fade-in bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-tea-gold fill-current"
                      size={20}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {review.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  className="text-tea-gold fill-current"
                  size={20}
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">
              из 5 на основе 2,847 отзывов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
