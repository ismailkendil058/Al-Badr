import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductSection from '@/components/home/ProductSection';
import FeaturesBar from '@/components/home/FeaturesBar';
import { getFeaturedProducts, getBestSellers, getPromoProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const promoProducts = getPromoProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-1">
        <HeroSlider />
        <FeaturesBar />
        <CategoryGrid />

        <div id="products-section">
          <ProductSection
            titleAr="منتجات مميزة"
            titleFr="Produits en Vedette"
            products={featuredProducts}
            bgClass="bg-muted/50"
            sectionKey="featured"
          />
        </div>

        <ProductSection
          titleAr="الأكثر مبيعاً"
          titleFr="Meilleures Ventes"
          products={bestSellers}
          sectionKey="bestsellers"
        />

        {promoProducts.length > 0 && (
          <ProductSection
            titleAr="صناديقنا الخاصة"
            titleFr="Nos Boîtes Spéciales"
            products={promoProducts}
            bgClass="bg-primary/5"
            sectionKey="promo"
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
