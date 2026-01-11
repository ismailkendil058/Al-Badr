import { Product, Category } from '@/types';

import categorySpices from '@/assets/category-spices.jpg';
import categoryHerbs from '@/assets/category-herbs.jpg';
import categoryGrains from '@/assets/category-grains.jpg';
import categoryBlends from '@/assets/category-blends.jpg';
import categoryBoxes from '@/assets/category-boxes.jpg';
import productTurmeric from '@/assets/product-turmeric.jpg';
import productChili from '@/assets/product-chili.jpg';
import productMint from '@/assets/product-mint.jpg';
import productCumin from '@/assets/product-cumin.jpg';
import productCinnamon from '@/assets/product-cinnamon.jpg';
import productRashanout from '@/assets/product-rashanout.jpg';
import productNewMintImage from '@/assets/20260107_190401.jpg';

// Raw category data without counts
const rawCategories: Omit<Category, 'productCount'>[] = [
  {
    id: 'spices',
    nameAr: 'التوابل',
    nameFr: 'Épices',
    image: categorySpices,
  },
  {
    id: 'herbs',
    nameAr: 'الأعشاب',
    nameFr: 'Herbes',
    image: categoryHerbs,
  },
  {
    id: 'grains',
    nameAr: 'الحبوب',
    nameFr: 'Céréales',
    image: categoryGrains,
  },
  {
    id: 'blends',
    nameAr: 'الخلطات',
    nameFr: 'Mélanges',
    image: categoryBlends,
  },
  {
    id: 'boxes',
    nameAr: 'الصناديق الخاصة',
    nameFr: 'Coffrets Spéciaux',
    image: categoryBoxes,
    isSpecial: true,
  },
];

export const products: Product[] = [
  {
    id: '1',
    nameAr: 'كركم طبيعي',
    nameFr: 'Curcuma Naturel',
    descriptionAr: 'كركم طبيعي 100% من أجود الأنواع',
    descriptionFr: 'Curcuma 100% naturel de première qualité',
    price: 450,
    image: productTurmeric,
    category: 'spices',
    isFeatured: true,
    stock: 50,
    unit: '100g',
  },
  {
    id: '2',
    nameAr: 'فلفل أحمر حار',
    nameFr: 'Piment Rouge',
    descriptionAr: 'فلفل أحمر حار مطحون طازج',
    descriptionFr: 'Piment rouge moulu frais',
    price: 380,
    image: productChili,
    category: 'spices',
    isBestSeller: true,
    stock: 35,
    unit: '100g',
  },
  {
    id: '3',
    nameAr: 'نعناع مجفف',
    nameFr: 'Menthe Séchée',
    descriptionAr: 'نعناع مجفف طبيعي للشاي والطبخ',
    descriptionFr: 'Menthe séchée naturelle pour thé et cuisine',
    price: 320,
    image: productNewMintImage,
    category: 'herbs',
    isFeatured: true,
    stock: 40,
    unit: '50g',
  },
  {
    id: '4',
    nameAr: 'زعتر بري',
    nameFr: 'Thym Sauvage',
    descriptionAr: 'زعتر بري من جبال الجزائر',
    descriptionFr: 'Thym sauvage des montagnes d\'Algérie',
    price: 290,
    image: categoryHerbs,
    category: 'herbs',
    isNew: true,
    stock: 30,
    unit: '50g',
  },
  {
    id: '5',
    nameAr: 'عدس أحمر',
    nameFr: 'Lentilles Rouges',
    descriptionAr: 'عدس أحمر نظيف وجاهز للطبخ',
    descriptionFr: 'Lentilles rouges nettoyées prêtes à cuire',
    price: 180,
    image: categoryGrains,
    category: 'grains',
    isBestSeller: true,
    stock: 100,
    unit: '500g',
  },
  {
    id: '6',
    nameAr: 'حمص كبير',
    nameFr: 'Pois Chiches',
    descriptionAr: 'حمص كبير ممتاز للحمص والأطباق التقليدية',
    descriptionFr: 'Gros pois chiches pour houmous et plats traditionnels',
    price: 220,
    image: categoryGrains,
    category: 'grains',
    stock: 80,
    unit: '500g',
  },
  {
    id: '7',
    nameAr: 'رأس الحانوت',
    nameFr: 'Ras El Hanout',
    descriptionAr: 'خلطة رأس الحانوت التقليدية الجزائرية',
    descriptionFr: 'Mélange Ras El Hanout traditionnel algérien',
    price: 650,
    image: productRashanout,
    category: 'blends',
    isFeatured: true,
    isBestSeller: true,
    stock: 25,
    unit: '100g',
  },
  {
    id: '8',
    nameAr: 'خلطة الكسكس',
    nameFr: 'Mélange Couscous',
    descriptionAr: 'خلطة توابل خاصة بالكسكس الجزائري',
    descriptionFr: 'Mélange d\'épices pour couscous algérien',
    price: 480,
    image: categoryBlends,
    category: 'blends',
    isNew: true,
    stock: 30,
    unit: '100g',
  },
  {
    id: '9',
    nameAr: 'صندوق رمضان',
    nameFr: 'Coffret Ramadan',
    descriptionAr: 'صندوق هدايا يحتوي على أفضل التوابل لشهر رمضان',
    descriptionFr: 'Coffret cadeau avec les meilleures épices pour le Ramadan',
    price: 2500,
    originalPrice: 3200,
    image: categoryBoxes,
    category: 'boxes',
    isPromo: true,
    stock: 15,
    unit: 'صندوق',
  },
  {
    id: '10',
    nameAr: 'صندوق العائلة',
    nameFr: 'Coffret Famille',
    descriptionAr: 'صندوق كبير يحتوي على تشكيلة متنوعة من التوابل والأعشاب',
    descriptionFr: 'Grand coffret avec une variety d\'épices et d\'herbes',
    price: 3800,
    originalPrice: 4500,
    image: categoryBoxes,
    category: 'boxes',
    isPromo: true,
    isFeatured: true,
    stock: 10,
    unit: 'صندوق',
  },
  {
    id: '11',
    nameAr: 'قرفة سيلان',
    nameFr: 'Cannelle de Ceylan',
    descriptionAr: 'قرفة سيلان الأصلية ذات الجودة العالية',
    descriptionFr: 'Cannelle de Ceylan authentique de haute qualité',
    price: 520,
    image: productCinnamon,
    category: 'spices',
    isNew: true,
    isFeatured: true,
    stock: 20,
    unit: '50g',
  },
  {
    id: '12',
    nameAr: 'كمون مطحون',
    nameFr: 'Cumin Moulu',
    descriptionAr: 'كمون مطحون طازج برائحة قوية',
    descriptionFr: 'Cumin moulu frais à l\'arôme intense',
    price: 350,
    image: productCumin,
    category: 'spices',
    isBestSeller: true,
    stock: 45,
    unit: '100g',
  },
];

// Calculate product counts for each category
const productCounts = products.reduce((acc, product) => {
  if (product.category) {
    acc[product.category] = (acc[product.category] || 0) + 1;
  }
  return acc;
}, {} as Record<string, number>);

// Combine raw category data with dynamic counts
export const categories: Category[] = rawCategories.map(category => ({
  ...category,
  productCount: productCounts[category.id] || 0,
}));

export const getFeaturedProducts = () => products.filter(p => p.isFeatured);
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getPromoProducts = () => products.filter(p => p.isPromo);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.category === categoryId);
