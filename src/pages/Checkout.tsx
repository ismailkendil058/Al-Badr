import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Truck, Building2, CheckCircle } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const WILAYAS = [
  "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة",
  "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة",
  "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو",
  "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة",
  "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة",
  "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
  "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس",
  "36 - الطارف", "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة",
  "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة",
  "46 - عين تموشنت", "47 - غرداية", "48 - غليزان", "49 - تيميمون", "50 - برج باجي مختار",
  "51 - أولاد جلال", "52 - بني عباس", "53 - عين صالح", "54 - عين قزام", "55 - تقرت",
  "56 - جانت", "57 - المغير", "58 - المنيعة"
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    wilaya: '',
    deliveryMethod: 'home',
    address: ''
  });

  const deliveryFee = formData.deliveryMethod === 'home' ? 500 : 300;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.phone || !formData.wilaya) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    if (formData.deliveryMethod === 'home' && !formData.address) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال عنوان التوصيل",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setOrderPlaced(true);
    clearCart();
    setIsSubmitting(false);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-arabic-display mb-4">سلة التسوق فارغة</h1>
            <Link to="/" className="text-primary hover:underline font-body">
              العودة للتسوق
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-arabic-display font-bold text-secondary mb-4">
              تم تأكيد طلبك بنجاح!
            </h1>
            <p className="text-muted-foreground font-body mb-6">
              شكراً لك على طلبك. سنتواصل معك قريباً لتأكيد التفاصيل.
            </p>
            <Button onClick={() => navigate('/')} className="font-body">
              العودة للرئيسية
            </Button>
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
              <span className="text-foreground">تأكيد الطلب</span>
            </nav>
          </div>
        </div>

        {/* Checkout Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <h1 className="text-2xl md:text-3xl font-arabic-display font-bold text-secondary mb-8">
              تأكيد الطلب
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Info */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h2 className="text-xl font-arabic font-semibold mb-4">معلومات الزبون</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm mb-2">الاسم <span className="text-primary">*</span></label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="أدخل اسمك"
                          required
                          className="font-body"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-sm mb-2">رقم الهاتف <span className="text-primary">*</span></label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0660 40 85 20"
                          required
                          className="font-body"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Wilaya Selection */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h2 className="text-xl font-arabic font-semibold mb-4">الولاية <span className="text-primary">*</span></h2>
                    
                    <Select
                      value={formData.wilaya}
                      onValueChange={(value) => setFormData({ ...formData, wilaya: value })}
                    >
                      <SelectTrigger className="w-full font-body">
                        <SelectValue placeholder="اختر الولاية" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {WILAYAS.map((wilaya) => (
                          <SelectItem key={wilaya} value={wilaya} className="font-body">
                            {wilaya}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Delivery Method */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h2 className="text-xl font-arabic font-semibold mb-4">طريقة التوصيل</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryMethod: 'home' })}
                        className={`p-4 rounded-lg border-2 transition-all text-right ${
                          formData.deliveryMethod === 'home'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Truck className={`w-8 h-8 mb-2 ${formData.deliveryMethod === 'home' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <h3 className="font-arabic font-semibold">توصيل للمنزل</h3>
                        <p className="text-sm text-muted-foreground font-body">Livraison à domicile</p>
                        <p className="text-primary font-bold mt-2" dir="ltr">500 د.ج</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryMethod: 'bureau', address: '' })}
                        className={`p-4 rounded-lg border-2 transition-all text-right ${
                          formData.deliveryMethod === 'bureau'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Building2 className={`w-8 h-8 mb-2 ${formData.deliveryMethod === 'bureau' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <h3 className="font-arabic font-semibold">مكتب التوصيل</h3>
                        <p className="text-sm text-muted-foreground font-body">Bureau</p>
                        <p className="text-primary font-bold mt-2" dir="ltr">300 د.ج</p>
                      </button>
                    </div>

                    {/* Address field - only shown for home delivery */}
                    {formData.deliveryMethod === 'home' && (
                      <div className="mt-4">
                        <label className="block font-body text-sm mb-2">
                          العنوان الكامل <span className="text-primary">*</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="الحي، الشارع، رقم المنزل..."
                          required
                          className="font-body"
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-body text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جاري تأكيد الطلب...' : 'تأكيد الطلب'}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                  <h2 className="text-xl font-arabic font-semibold mb-4">ملخص الطلب</h2>
                  
                  {/* Products */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.nameAr}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-arabic text-sm font-medium line-clamp-1">
                            {item.product.nameAr}
                          </h4>
                          <p className="text-xs text-muted-foreground font-body">
                            الكمية: {item.quantity}
                          </p>
                          <p className="text-primary font-semibold text-sm" dir="ltr">
                            {item.product.price * item.quantity} د.ج
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between font-body">
                      <span className="text-muted-foreground">المجموع الفرعي</span>
                      <span dir="ltr">{totalPrice} د.ج</span>
                    </div>
                    <div className="flex justify-between font-body">
                      <span className="text-muted-foreground">التوصيل</span>
                      <span dir="ltr">{deliveryFee} د.ج</span>
                    </div>
                    <div className="flex justify-between font-arabic font-bold text-lg pt-2 border-t border-border">
                      <span>المجموع الكلي</span>
                      <span className="text-primary" dir="ltr">{finalTotal} د.ج</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
