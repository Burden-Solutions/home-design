'use client'

import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  LogIn, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin, 
  Lightbulb, 
  Star,
  Apple,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  ArrowRight,
  Zap,
  Clock,
  PhoneIcon
} from 'lucide-react'

const BurdensHomepage = () => {
  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: '#F0F1F3' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md font-sans font-bold text-lg flex items-center justify-center" style={{ backgroundColor: '#1A2332', color: '#FFFFFF' }}>
            B
          </div>
          <span className="font-semibold text-lg tracking-tight" style={{ color: '#1A2332' }}>Burdens</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Vanities', 'Tapware', 'Bathroom', 'Kitchen', 'Plumbing', 'Brands'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium transition-colors hover:opacity-60" style={{ color: '#666E78' }}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ShoppingCart size={20} style={{ color: '#1A2332' }} className="cursor-pointer hover:opacity-60 transition-opacity" />
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 hidden sm:flex font-medium text-sm"
            style={{ color: '#1A2332' }}
          >
            <LogIn size={16} /> Login
          </Button>
        </div>
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-8 inline-block px-4 py-1.5 rounded-full" style={{ backgroundColor: '#F0F1F3' }}>
          <span className="text-xs font-semibold tracking-wide" style={{ color: '#1A2332' }}>
            TRUSTED BY 12,000+ CUSTOMERS
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ color: '#1A2332', letterSpacing: '-0.02em' }}>
          <span className="text-balance">Premium Plumbing & Bathroom Excellence</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#666E78' }}>
          Discover Australia's most trusted plumbing supplier. 60+ years of expertise, exceptional products, and service that exceeds expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            style={{ backgroundColor: '#1A2332', color: '#FFFFFF' }}
            className="text-base font-semibold px-8 h-12"
          >
            Shop Collection <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            style={{ color: '#1A2332', borderColor: '#D5D8DE', backgroundColor: '#FFFFFF' }}
            className="text-base font-semibold px-8 h-12 hover:bg-gray-50"
          >
            Trade Pricing
          </Button>
        </div>
        <p className="text-sm" style={{ color: '#999EA4' }}>
          No installation fee for the first 20 orders • Same-day delivery available
        </p>
      </div>
    </section>
  )

  const TrustBar = () => (
    <section style={{ backgroundColor: '#1A2332' }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { value: '12,000+', label: 'Customers', icon: Users },
          { value: '60+', label: 'Years Heritage', icon: Award },
          { value: '50K+', label: 'Orders', icon: TrendingUp },
          { value: '15', label: 'Stores', icon: MapPin }
        ].map((item) => (
          <div key={item.label} className="text-center text-white">
            <item.icon size={28} className="mx-auto mb-4 opacity-80" />
            <div className="text-3xl md:text-4xl font-bold tracking-tight">{item.value}</div>
            <div className="text-sm mt-2 opacity-70 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )

  const DualAudienceSection = () => (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A2332' }}>Tailored Solutions for Everyone</h2>
          <p className="text-lg" style={{ color: '#666E78' }}>Whether you're a trade professional or homeowner, we have exactly what you need</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Trade Professionals Card */}
          <div className="p-10 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F8F9FC', border: '1px solid #E8EAEF' }}>
            <div className="h-14 w-14 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#1A2332' }}>
              <Zap size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A2332' }}>
              For Trade Professionals
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                'Exclusive wholesale pricing & discounts',
                'Expert technical guidance always available',
                '60+ years of proven partnership history',
                'Priority fulfillment & same-day delivery'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1" style={{ color: '#1A2332' }}>✓</div>
                  <span style={{ color: '#666E78' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              style={{ backgroundColor: '#1A2332', color: '#FFFFFF' }}
              className="w-full text-base font-semibold h-11"
            >
              Join Trade Program
            </Button>
          </div>

          {/* Homeowners Card */}
          <div className="p-10 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F8F9FC', border: '1px solid #E8EAEF' }}>
            <div className="h-14 w-14 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#F0F1F3' }}>
              <Lightbulb size={28} style={{ color: '#1A2332' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A2332' }}>
              For Homeowners & Designers
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                'Curated showroom experience across Victoria',
                'Extensive premium product selection',
                'Design inspiration & expert consultation',
                '15 convenient locations near you'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1" style={{ color: '#1A2332' }}>✓</div>
                  <span style={{ color: '#666E78' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              style={{ color: '#1A2332', borderColor: '#D5D8DE', backgroundColor: '#FFFFFF' }}
              variant="outline"
              className="w-full text-base font-semibold h-11 hover:bg-gray-50"
            >
              Explore Showroom
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  const AppPromotionSection = () => (
    <section style={{ backgroundColor: '#FAFBFC' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A2332', letterSpacing: '-0.02em' }}>
            <span className="text-balance">Control Orders Anytime</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#666E78' }}>
            Download the Burdens Trade App for seamless order management, exclusive pricing access, and real-time updates wherever you are.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Real-time order tracking & updates',
              'Exclusive trade pricing & discounts',
              'One-click reordering from history',
              'Integrated account management'
            ].map((feature) => (
              <li key={feature} className="flex gap-3 items-center">
                <div className="h-6 w-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A2332' }}>
                  <span className="text-white text-xs">✓</span>
                </div>
                <span style={{ color: '#666E78' }} className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg"
              className="gap-2 text-base font-semibold h-12 px-8"
              style={{ backgroundColor: '#1A2332', color: '#FFFFFF' }}
            >
              <Apple size={20} /> App Store
            </Button>
            <Button 
              size="lg"
              className="gap-2 text-base font-semibold h-12 px-8"
              style={{ color: '#1A2332', borderColor: '#D5D8DE', backgroundColor: '#FFFFFF' }}
              variant="outline"
            >
              <Download size={20} /> Google Play
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm h-96 rounded-3xl flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#E8EAEF', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
            <div className="text-center" style={{ color: '#999EA4' }}>
              <PhoneIcon size={48} className="mx-auto mb-3 opacity-50" />
              <div className="text-sm font-semibold">App Preview Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const CategoriesGrid = () => (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#1A2332', letterSpacing: '-0.02em' }}>
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Vanities', icon: '🛁' },
            { name: 'Tapware', icon: '🚰' },
            { name: 'Basins', icon: '⚪' },
            { name: 'Toilets', icon: '🚽' },
            { name: 'Showers', icon: '🚿' },
            { name: 'Accessories', icon: '🔧' }
          ].map((category) => (
            <div 
              key={category.name}
              className="h-44 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 group"
              style={{ backgroundColor: '#F8F9FC', border: '1px solid #E8EAEF' }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
              <p className="font-semibold text-center" style={{ color: '#1A2332' }}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const WhyChooseSection = () => (
    <section style={{ backgroundColor: '#FAFBFC' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#1A2332', letterSpacing: '-0.02em' }}>
            Why Industry Leaders Choose Burdens
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Australian Heritage', icon: MapPin, desc: 'Locally owned and proudly serving Victoria' },
            { title: '15 Premium Locations', icon: Award, desc: 'Convenient showrooms across the state' },
            { title: 'Expert Guidance', icon: Lightbulb, desc: 'Industry specialists ready to help' },
            { title: '60+ Years Trusted', icon: Clock, desc: 'Proven excellence and reliability' }
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-2xl transition-all hover:shadow-md" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8EAEF' }}>
              <div className="h-12 w-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#F0F1F3' }}>
                <item.icon size={24} style={{ color: '#1A2332' }} />
              </div>
              <h3 className="font-bold mb-2 text-lg" style={{ color: '#1A2332' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: '#666E78' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const TestimonialsSection = () => (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#1A2332', letterSpacing: '-0.02em' }}>
            Loved by Industry Leaders
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Greg D', quote: 'Outstanding customer service and an incredible range. No better supplier in Victoria.', rating: 5, role: 'Licensed Plumber' },
            { name: 'Harry', quote: 'Been a client for years. Consistency, reliability, and genuine expertise in every interaction.', rating: 5, role: 'Bathroom Designer' },
            { name: 'Sarah M', quote: 'The team transformed our entire renovation project. True professionals.', rating: 5, role: 'Homeowner' }
          ].map((review) => (
            <div key={review.name} className="p-8 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F8F9FC', border: '1px solid #E8EAEF' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FDB022" style={{ color: '#FDB022' }} />
                ))}
              </div>
              <p style={{ color: '#666E78' }} className="mb-6 text-sm leading-relaxed italic">"{review.quote}"</p>
              <div>
                <p className="font-bold text-sm" style={{ color: '#1A2332' }}>{review.name}</p>
                <p className="text-xs" style={{ color: '#999EA4' }}>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const InstagramBanner = () => (
    <section style={{ backgroundColor: '#FAFBFC' }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1A2332' }}>Get Daily Inspiration</h3>
          <p style={{ color: '#666E78' }} className="text-sm md:text-base">Follow @burdens for stunning bathroom ideas and design trends</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#1A2332' }}>18.5K</div>
            <div className="text-xs" style={{ color: '#999EA4' }}>FOLLOWERS</div>
          </div>
          <Button 
            size="lg"
            style={{ backgroundColor: '#E4405F', color: '#FFFFFF' }}
            className="gap-2 font-semibold h-11 px-6"
          >
            <Instagram size={18} /> Follow
          </Button>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer style={{ backgroundColor: '#1A2332', color: '#FFFFFF' }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg font-bold text-lg flex items-center justify-center" style={{ backgroundColor: '#FFFFFF', color: '#1A2332' }}>
                B
              </div>
              <span className="font-bold text-lg">Burdens</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">Premium plumbing and bathroom solutions trusted by Victoria for over 60 years.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#FFFFFF' }}>Shop</h4>
            <ul className="text-sm space-y-2 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Bathrooms</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Kitchens</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Laundry</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">All Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#FFFFFF' }}>Company</h4>
            <ul className="text-sm space-y-2 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Locations</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#FFFFFF' }}>Contact</h4>
            <ul className="text-sm space-y-3 opacity-70">
              <li className="flex gap-2"><PhoneIcon size={16} className="mt-0.5 flex-shrink-0" /> <a href="tel:1300202010" className="hover:opacity-100 transition-opacity">1300 202 010</a></li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 flex-shrink-0" /> <a href="mailto:hello@burdens.com.au" className="hover:opacity-100 transition-opacity">hello@burdens.com.au</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8" style={{ borderColor: '#404A5A' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs opacity-60">© 2026 Burdens Bathrooms. All rights reserved.</p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, name: 'Facebook' },
                { Icon: Instagram, name: 'Instagram' },
                { Icon: Linkedin, name: 'LinkedIn' }
              ].map(({ Icon, name }) => (
                <a key={name} href="#" className="p-2.5 rounded-lg transition-all hover:opacity-80" style={{ backgroundColor: '#404A5A' }} title={name}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <TrustBar />
      <DualAudienceSection />
      <AppPromotionSection />
      <CategoriesGrid />
      <WhyChooseSection />
      <TestimonialsSection />
      <InstagramBanner />
      <Footer />
    </div>
  )
}

export default BurdensHomepage
