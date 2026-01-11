import { Eye, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group border border-transparent hover:border-primary/30 rounded-lg overflow-hidden bg-card transition-all duration-300 shadow-sm hover:shadow-xl">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.nameAr}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          {product.isNew && (
            <span className="badge-new">جديد</span>
          )}
          {product.isBestSeller && (
            <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-md">
              الأكثر مبيعاً
            </span>
          )}
        </div>

        {/* Discount Badge */}
        {product.isPromo && discountPercent > 0 && (
          <div className="absolute top-0 left-0 bg-primary text-primary-foreground w-14 h-14 flex flex-col items-center justify-center rounded-br-2xl shadow-lg">
            <span className="text-xl font-bold leading-none">-{discountPercent}%</span>
          </div>
        )}

        {/* Quick Actions Overlay */}
        <div className="quick-view-overlay gap-3">
          <Link
            to={`/product/${product.id}`}
            className="wishlist-btn"
            aria-label="Quick view"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="flex-grow">
          <h3 className="font-arabic font-semibold text-lg text-foreground mb-1 line-clamp-2 hover:text-primary transition-colors">
            {product.nameAr}
          </h3>
          <p className="text-sm font-french text-muted-foreground mb-3 line-clamp-1">
            {product.nameFr}
          </p>
        </Link>
        
        {/* Price */}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
          <span className="text-2xl font-bold text-primary" dir="ltr">
            {product.price} د.ج
          </span>
          {product.originalPrice && (
            <span className="text-md text-muted-foreground/80 line-through" dir="ltr">
              {product.originalPrice} د.ج
            </span>
          )}
          <span className="text-sm text-muted-foreground">/ {product.unit}</span>
        </div>

        {/* Add to Cart */}
        <Button 
          className="w-full font-body mt-auto"
          onClick={() => addItem(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="w-4 h-4 ml-2" />
          {product.stock > 0 ? 'أضف للسلة' : 'غير متوفر'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
