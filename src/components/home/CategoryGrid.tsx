import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">الأقسام</h2>
          <p className="section-subtitle font-french">Découvrez nos catégories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`category-card group aspect-square ${category.isSpecial ? 'ring-2 ring-primary ring-offset-2' : ''}`}
            >
              <img src={category.image} alt={category.nameAr} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
                {category.isSpecial && <span className="badge-promo mb-2 text-xs">عرض خاص</span>}
                <h3 className="text-xl md:text-2xl font-arabic-display font-bold text-primary-foreground">{category.nameAr}</h3>
                <p className="text-sm font-french text-primary-foreground/80 mt-1">{category.nameFr}</p>
                <span className="text-sm font-body text-primary-foreground/70 mt-2">{category.productCount} منتج</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
