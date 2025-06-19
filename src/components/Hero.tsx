import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center tea-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Золотой листок
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя мир премиальных чаев из лучших плантаций планеты.
            Традиции, качество и безупречный вкус в каждой чашке.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-tea-amber hover:bg-tea-gold text-tea-dark-green font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Leaf" className="mr-2" size={20} />
              Исследовать каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-tea-dark-green px-8 py-3 text-lg"
            >
              <Icon name="Gift" className="mr-2" size={20} />
              Подарочные наборы
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-tea-amber mb-1">
                500+
              </div>
              <div className="text-white/80 text-sm">Сортов чая</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-tea-amber mb-1">
                15
              </div>
              <div className="text-white/80 text-sm">Стран</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-tea-amber mb-1">
                25
              </div>
              <div className="text-white/80 text-sm">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-tea-amber mb-1">
                50K+
              </div>
              <div className="text-white/80 text-sm">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white/70" size={24} />
      </div>
    </section>
  );
};

export default Hero;
