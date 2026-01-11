import { useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products, getFeaturedProducts, getBestSellers, getPromoProducts } from '@/data/products';

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');

  let displayProducts = products;
  let pageTitle = 'جميع المنتجات';
  let pageTitleFr = 'Tous les Produits';

  if (section === 'featured') {
    displayProducts = getFeaturedProducts();
    pageTitle = 'منتجات مميزة';
    pageTitleFr = 'Produits en Vedette';
  } else if (section === 'bestsellers') {
    displayProducts = getBestSellers();
    pageTitle = 'الأكثر مبيعاً';
    pageTitleFr = 'Meilleures Ventes';
  } else if (section === 'promo') {
    displayProducts = getPromoProducts();
    pageTitle = 'عروض خاصة';
    pageTitleFr = 'Promotions Spéciales';
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-3">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-foreground">{pageTitle}</span>
            </nav>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-arabic-display font-bold text-secondary">
                {pageTitle}
              </h1>
              <p className="text-muted-foreground font-french mt-1">{pageTitleFr}</p>
              <p className="text-sm text-muted-foreground font-body mt-2">
                {displayProducts.length} منتج
              </p>
            </div>

            {displayProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-body">
                  لا توجد منتجات متاحة حالياً
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;
