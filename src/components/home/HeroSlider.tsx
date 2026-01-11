import { useState, useEffect, useCallback } from 'react';
import cinnamonImage from '@/assets/product-cinnamon.jpg';
import cuminImage from '@/assets/product-cumin.jpg';
import chiliImage from '@/assets/product-chili.jpg';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  image: string;
  sloganAr: string;
  sloganFr: string;
  ctaTextAr: string;
  ctaTextFr: string;
}

const slides: Slide[] = [
  { 
    id: 1, 
    image: cinnamonImage,
    sloganAr: "قرفة أصلية لنكهة لا تقاوم",
    sloganFr: "Cannelle authentique pour une saveur irrésistible",
    ctaTextAr: "تسوق الآن",
    ctaTextFr: "Shop Now",
  },
  { 
    id: 2, 
    image: cuminImage,
    sloganAr: "كمون طازج يغير أطباقك",
    sloganFr: "Cumin frais qui transforme vos plats",
    ctaTextAr: "اكتشف المزيد",
    ctaTextFr: "Discover More",
  },
  { 
    id: 3, 
    image: chiliImage,
    sloganAr: "حرارة طبيعية، طعم استثنائي",
    sloganFr: "Piquant naturel, goût exceptionnel",
    ctaTextAr: "تصفح المنتجات",
    ctaTextFr: "Browse Products",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArabic, setIsArabic] = useState(document.documentElement.lang === 'ar');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const langObserver = new MutationObserver(() => {
      setIsArabic(document.documentElement.lang === 'ar');
    });
    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      langObserver.disconnect();
      clearInterval(timer);
    };
  }, [nextSlide]);

  const handleCtaClick = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-2">
              {isArabic ? slide.sloganAr : slide.sloganFr}
            </h2>
            <Button 
              className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-4 text-lg md:text-xl"
              onClick={handleCtaClick}
            >
              {isArabic ? slide.ctaTextAr : slide.ctaTextFr}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
