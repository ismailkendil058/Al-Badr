import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { categories, getProductsByCategory } from '@/data/products';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const products = getProductsByCategory(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-arabic-display mb-4">القسم غير موجود</h1>
            <Link to="/" className="text-primary hover:underline font-body">
              العودة للرئيسية
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
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
              <span className="text-foreground">{category.nameAr}</span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <section className="relative h-[200px] md:h-[250px] overflow-hidden">
          <img
            src={category.image}
            alt={category.nameAr}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-arabic-display font-bold text-primary-foreground mb-2">
                {category.nameAr}
              </h1>
              <p className="text-lg font-french text-primary-foreground/80">
                {category.nameFr}
              </p>
              <p className="text-sm font-body text-primary-foreground/70 mt-2">
                {products.length} منتج
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-body">
                  لا توجد منتجات في هذا القسم حالياً
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

export default CategoryPage;
