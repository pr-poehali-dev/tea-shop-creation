import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeaCategories from "@/components/TeaCategories";
import GiftSets from "@/components/GiftSets";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TeaCategories />
      <GiftSets />
      <Benefits />
      <Reviews />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Index;
