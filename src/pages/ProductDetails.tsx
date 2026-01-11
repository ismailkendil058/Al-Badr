import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ChevronLeft } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);


  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-arabic-display mb-4">المنتج غير موجود</h1>
            <Link to="/" className="text-primary hover:underline font-body">
              العودة للرئيسية
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };


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
              <Link to={`/category/${product.category}`} className="hover:text-primary transition-colors">
                {product.category === 'spices' && 'التوابل'}
                {product.category === 'herbs' && 'الأعشاب'}
                {product.category === 'grains' && 'الحبوب'}
                {product.category === 'blends' && 'الخلطات'}
                {product.category === 'boxes' && 'الصناديق الخاصة'}
              </Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-foreground">{product.nameAr}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {product.isNew && <span className="badge-new">جديد</span>}
                  {product.isPromo && <span className="badge-promo">عرض خاص</span>}
                  {product.isBestSeller && (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium rounded-full">
                      الأكثر مبيعاً
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-arabic-display font-bold text-secondary mb-2">
                    {product.nameAr}
                  </h1>
                  <p className="text-lg font-french text-muted-foreground">
                    {product.nameFr}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary" dir="ltr">
                    {product.price.toFixed(2)} د.ج
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through" dir="ltr">
                      {product.originalPrice.toFixed(2)} د.ج
                    </span>
                  )}

                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="font-body text-sm">
                    {product.stock > 0 ? 'متوفر' : 'غير متوفر'}
                  </span>
                </div>

                {/* Description */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-arabic font-semibold mb-2">الوصف</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.descriptionAr}
                  </p>
                  <p className="font-french text-sm text-muted-foreground mt-2">
                    {product.descriptionFr}
                  </p>
                </div>



                {/* Quantity & Add to Cart */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="font-body">الكمية:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-muted transition-colors"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-body">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-muted transition-colors"
                        disabled={product.stock === 0}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full font-body text-lg"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart className="w-5 h-5 ml-2" />
                    أضف للسلة
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-muted/50">
            <div className="container">
              <h2 className="text-2xl font-arabic-display font-bold text-secondary mb-6">
                منتجات مشابهة
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
