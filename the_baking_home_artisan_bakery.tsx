import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ShoppingBag, Phone, MapPin, Instagram, Facebook, 
  ChevronRight, ArrowRight, Star, Clock, Heart, Sparkles, ExternalLink, Send
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('ALL');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('order'); // 'order', 'enquire', 'call'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', note: '', date: '' });

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type, product = null) => {
    setModalType(type);
    setSelectedProduct(product);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // auto close modal after confirmation
    }, 4000);
  };

  const menuItems = [
    {
      id: 1,
      name: "Classic Mango Fresh Cream Cake",
      category: "CAKES",
      description: "Light vanilla sponge layered with fresh Alphonso mango pulp and whipped dairy cream.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Belgian Choco Mocha Gateaux",
      category: "CAKES",
      description: "Rich dark chocolate sponge infused with espresso, layered with silky chocolate ganache.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Classic Vanilla Bean Sponge",
      category: "CAKES",
      description: "Traditional delicate sponge scented with natural Madagascar vanilla beans and light cream.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Fresh Strawberry Celebration Cake",
      category: "CAKES",
      description: "Hand-picked fresh strawberries folded into light sponge with velvety cream frosting.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      name: "Butter Croissant",
      category: "PASTRIES",
      description: "Flaky, golden-brown laminated pastry baked fresh every morning with pure European butter.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      name: "Almond Frangipane Tart",
      category: "PASTRIES",
      description: "Crisp shortcrust pastry filled with rich almond cream and toasted sliced almonds.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      name: "Artisan Sourdough Loaf",
      category: "BREADS",
      description: "Naturally fermented slow-risen sourdough with a blistered crust and open, chewy crumb.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      name: "Rustic Rosemary Focaccia",
      category: "BREADS",
      description: "Soft Italian flatbread infused with extra virgin olive oil, fresh rosemary, and sea salt flakes.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      name: "Classic Tiramisu Cup",
      category: "DESSERTS",
      description: "Savoiardi biscuits dipped in rich espresso, layered with velvety mascarpone and cocoa dust.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 10,
      name: "Baked Berry Cheesecake Slice",
      category: "DESSERTS",
      description: "New York style baked cream cheese on a buttery graham crust, topped with house berry compote.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 11,
      name: "Spiced Vegetable Puff",
      category: "SAVOURIES",
      description: "Golden flaky puff pastry filled with seasoned garden-fresh vegetables and warm aromatic spices.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1621236378699-8599fd6c3f7d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 12,
      name: "Artisan Cold Brew Coffee",
      category: "BEVERAGES",
      description: "Steeped for 18 hours for a smooth, bold, and naturally sweet refreshing pick-me-up.",
      price: "Ask us for today's price",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredMenu = activeMenuTab === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeMenuTab);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2A29] font-sans selection:bg-[#6A1B29] selection:text-[#FAF8F5] antialiased">
      
      {}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-4' : 'bg-[#FAF8F5] py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-widest font-bold text-[#6A1B29]">THE BAKING HOME</span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-medium">Artisan Bakery & Cafe</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.15em] uppercase text-[#2C2A29]">
            <a href="#home" className="hover:text-[#6A1B29] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[#6A1B29] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#6A1B29] transition-colors">About Us</a>
            <a href="#cakes" className="hover:text-[#6A1B29] transition-colors">Cakes</a>
            <a href="#gallery" className="hover:text-[#6A1B29] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#6A1B29] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => openModal('order')}
              className="bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2C2A29] focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF8F5] border-b border-[#E5E0D8] shadow-lg py-6 px-8 flex flex-col space-y-4 animate-fadeIn">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              Home
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              Menu
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              About Us
            </a>
            <a 
              href="#cakes" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              Cakes
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#6A1B29]"
            >
              Contact
            </a>
            <div className="pt-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); openModal('order'); }}
                className="w-full bg-[#6A1B29] text-[#FAF8F5] py-3 rounded-full text-xs font-semibold uppercase tracking-widest shadow-sm text-center"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920" 
            alt="Artisan bakery hero background" 
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A29]/80 via-[#2C2A29]/60 to-[#2C2A29]/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#FAF8F5]">
          <span className="inline-block font-serif italic text-[#C5A880] text-lg md:text-xl tracking-wider mb-4 animate-fade-in">
            Freshly Baked
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 leading-[1.1]">
            FRESHLY BAKED.<br />
            <span className="italic font-light text-[#FAF8F5]/90">MADE WITH LOVE.</span>
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[#FAF8F5]/80 font-light mb-10 leading-relaxed">
            Handcrafted cakes, pastries and bakery favourites made fresh for every celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-[#FAF8F5]/90 text-[#2C2A29] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-md text-center"
            >
              View Our Menu
            </a>
            <button 
              onClick={() => openModal('order')}
              className="w-full sm:w-auto bg-[#6A1B29] hover:bg-[#531420] border border-[#C5A880]/40 text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-md text-center"
            >
              Order Now
            </button>
          </div>

          <div className="inline-flex items-center space-x-2 bg-[#2C2A29]/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C5A880]/30 text-xs tracking-[0.2em] uppercase text-[#FAF8F5]">
            <MapPin size={14} className="text-[#C5A880]" />
            <span>Kammanahalli • Bengaluru</span>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 md:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-block font-serif italic text-[#6A1B29] text-base md:text-lg mb-3">
              Welcome to The Baking Home
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2A29] leading-tight mb-6">
              Baked Fresh.<br />
              <span className="italic font-light text-[#6A1B29]">Made for Moments.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2C2A29]/80 font-light leading-relaxed mb-8">
              At The Baking Home, every bake is prepared with care, using quality ingredients and a passion for creating something worth coming back for. From morning sourdough to rich celebration cakes, we serve our Kammanahalli community daily with pride.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="#about" 
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6A1B29] hover:text-[#531420] transition-colors group"
              >
                <span>Read Our Story</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#E5E0D8]">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000" 
                alt="Fresh artisanal croissants and baked goods" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#6A1B29] text-[#FAF8F5] p-6 rounded-xl hidden sm:block shadow-lg border border-[#C5A880]/30 max-w-xs">
              <p className="font-serif italic text-lg mb-1">"Daily Fresh Bakes"</p>
              <p className="text-xs text-[#FAF8F5]/80 font-light">Crafted with patience and premium ingredients in Bengaluru.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-white border-y border-[#E5E0D8]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-serif italic text-[#6A1B29] text-base">Our Specialties</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2C2A29] mt-2">Handcrafted Daily</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1: Cakes */}
            <div 
              onClick={() => { setActiveMenuTab('CAKES'); document.getElementById('menu').scrollIntoView({behavior: 'smooth'}); }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8]/60 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                <img 
                  src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800" 
                  alt="Cakes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2A29] mb-2">CAKES</h3>
                  <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light mb-4">Celebration cakes made for birthdays, milestones and special moments.</p>
                </div>
                <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#6A1B29] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Category 2: Pastries */}
            <div 
              onClick={() => { setActiveMenuTab('PASTRIES'); document.getElementById('menu').scrollIntoView({behavior: 'smooth'}); }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8]/60 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
                  alt="Pastries" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2A29] mb-2">PASTRIES</h3>
                  <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light mb-4">Freshly baked pastries and sweet treats for any time of day.</p>
                </div>
                <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#6A1B29] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Category 3: Breads */}
            <div 
              onClick={() => { setActiveMenuTab('BREADS'); document.getElementById('menu').scrollIntoView({behavior: 'smooth'}); }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8]/60 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
                  alt="Breads" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2A29] mb-2">BREADS</h3>
                  <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light mb-4">Fresh bakery favourites made for everyday cravings.</p>
                </div>
                <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#6A1B29] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Category 4: Desserts */}
            <div 
              onClick={() => { setActiveMenuTab('DESSERTS'); document.getElementById('menu').scrollIntoView({behavior: 'smooth'}); }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8]/60 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                <img 
                  src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" 
                  alt="Desserts" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2A29] mb-2">DESSERTS</h3>
                  <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light mb-4">Delicious desserts for when you want something special.</p>
                </div>
                <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#6A1B29] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="cakes" className="py-24 md:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-serif italic text-[#6A1B29] text-base md:text-lg mb-3 block">Signature Cakes</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2A29] leading-tight mb-6">
              Made for Your<br />
              <span className="italic font-light text-[#6A1B29]">Celebrations</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2C2A29]/80 font-light leading-relaxed mb-8">
              From intimate celebrations to big milestones, discover cakes designed to make the moment memorable. Crafted with fine sponge layers, luscious fruit fillings, and artisanal frostings.
            </p>
            <button 
              onClick={() => openModal('order')}
              className="bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Explore Cakes
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#E5E0D8]">
              <img 
                src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1000" 
                alt="Signature celebration cake" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="menu" className="py-24 bg-white border-t border-[#E5E0D8]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-serif italic text-[#6A1B29] text-base">Taste The Quality</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2C2A29] mt-2">OUR MENU</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
            {['ALL', 'CAKES', 'PASTRIES', 'BREADS', 'DESSERTS', 'SAVOURIES', 'BEVERAGES'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveMenuTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                  activeMenuTab === tab 
                    ? 'bg-[#6A1B29] text-[#FAF8F5] shadow-sm' 
                    : 'bg-[#FAF8F5] text-[#2C2A29]/80 hover:bg-[#E5E0D8]/40 border border-[#E5E0D8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                className="bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E0D8]/60 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#E5E0D8]">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#C5A880] mb-2 block">{item.category}</span>
                    <h3 className="font-serif text-xl font-normal text-[#2C2A29] mb-2">{item.name}</h3>
                    <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light mb-4">{item.description}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#E5E0D8]/40 mt-auto pt-4">
                  <span className="text-xs font-medium text-[#6A1B29] italic">{item.price}</span>
                  <button 
                    onClick={() => openModal('order', item)}
                    className="bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-serif italic text-[#6A1B29] text-base">The Artisan Standard</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2C2A29] mt-2">WHY THE BAKING HOME</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E0D8]/60 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-6 text-[#6A1B29]">
                <Clock size={22} />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2C2A29] mb-2">FRESHLY BAKED</h3>
              <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light">Prepared fresh for you daily with dedicated care and timing.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E0D8]/60 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-6 text-[#6A1B29]">
                <Sparkles size={22} />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2C2A29] mb-2">QUALITY INGREDIENTS</h3>
              <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light">Carefully selected ingredients ensuring rich flavor and authentic texture.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E0D8]/60 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-6 text-[#6A1B29]">
                <Heart size={22} />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2C2A29] mb-2">MADE WITH CARE</h3>
              <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light">Every bake receives undivided attention to detail from our bakers.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E0D8]/60 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-6 text-[#6A1B29]">
                <MapPin size={22} />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2C2A29] mb-2">LOCAL & PERSONAL</h3>
              <p className="text-xs text-[#2C2A29]/70 leading-relaxed font-light">A welcoming neighbourhood bakery built for the community of Bengaluru.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="gallery" className="py-24 bg-white border-t border-[#E5E0D8]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-serif italic text-[#6A1B29] text-base">Visual Moments</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2C2A29] mt-2">OUR GALLERY</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800" alt="Gallery item 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" alt="Gallery item 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 pt-6 md:pt-12">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" alt="Gallery item 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" alt="Gallery item 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" alt="Gallery item 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800" alt="Gallery item 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 pt-6 md:pt-12">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&q=80&w=800" alt="Gallery item 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-[#E5E0D8]">
                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800" alt="Gallery item 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6A1B29] hover:text-[#531420] transition-colors group"
            >
              <span>See More on Instagram</span>
              <ExternalLink size={14} className="ml-1 transform group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-24 md:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#E5E0D8]">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Bakery storefront and ambiance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="font-serif italic text-[#6A1B29] text-base md:text-lg mb-3 block">Our Heritage</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2A29] leading-tight mb-6">
              A Little About Us
            </h2>
            <p className="text-base sm:text-lg text-[#2C2A29]/80 font-light leading-relaxed mb-6">
              The Baking Home is a neighbourhood bakery in Kammanahalli, Bengaluru, bringing freshly prepared cakes, pastries and bakery favourites to the local community.
            </p>
            <p className="text-sm sm:text-base text-[#2C2A29]/70 font-light leading-relaxed mb-8">
              Situated conveniently on Nehru Road opposite Ujjivan Small Finance Bank in St Thomas Town, our doors are open to anyone looking for comforting bakes, delightful celebration cakes, and a warm neighborhood atmosphere.
            </p>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#6A1B29] font-medium">
              <MapPin size={16} />
              <span>Kammanahalli, Bengaluru</span>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-[#6A1B29] text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal mb-6 tracking-tight">
            SOMETHING SWEET<br />
            <span className="italic font-light text-[#C5A880]">IS WAITING FOR YOU.</span>
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#FAF8F5]/80 font-light mb-10 leading-relaxed">
            Planning a celebration or simply craving something freshly baked? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => openModal('order')}
              className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-[#FAF8F5]/90 text-[#6A1B29] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-md text-center"
            >
              Order Now
            </button>
            <button 
              onClick={() => openModal('call')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-[#FAF8F5]/40 text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 text-center inline-flex items-center justify-center space-x-2"
            >
              <Phone size={14} />
              <span>Call Us</span>
            </button>
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-serif italic text-[#6A1B29] text-base mb-3 block">Find Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2A29] mb-6">COME VISIT US</h2>
            <div className="space-y-4 text-sm text-[#2C2A29]/80 font-light mb-8 leading-relaxed">
              <p className="font-serif text-xl text-[#6A1B29]">THE BAKING HOME</p>
              <p>
                130, Nehru Road,<br />
                Opp. Ujjivan Small Finance Bank,<br />
                St Thomas Town, Heerti Layout,<br />
                Kammanahalli, Bengaluru, Karnataka 560084, India
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/place/THE+BAKING+HOME/@13.0147603,77.4917476,12z/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all shadow-sm"
            >
              <MapPin size={16} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E5E0D8] bg-[#E5E0D8] relative">
            {/* Simulated interactive map embed or styled placeholder */}
            <div className="absolute inset-0 bg-[#E5E0D8] flex flex-col items-center justify-center p-8 text-center">
              <MapPin size={40} className="text-[#6A1B29] mb-4 animate-bounce" />
              <p className="font-serif text-lg text-[#2C2A29] mb-1">The Baking Home, Kammanahalli</p>
              <p className="text-xs text-[#2C2A29]/70 max-w-xs mb-6">130, Nehru Road, St Thomas Town, Bengaluru</p>
              <a 
                href="https://www.google.com/maps/place/THE+BAKING+HOME/@13.0147603,77.4917476,12z/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2C2A29] text-[#FAF8F5] px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#6A1B29] transition-colors"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#2C2A29] text-[#FAF8F5] py-16 border-t border-[#3E3C3A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <span className="font-serif text-xl tracking-widest font-bold text-[#FAF8F5]">THE BAKING HOME</span>
            <p className="text-xs text-[#FAF8F5]/70 font-light leading-relaxed">
              Freshly baked. Made with love for the vibrant community of Bengaluru.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FAF8F5]/70 hover:text-[#C5A880] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FAF8F5]/70 hover:text-[#C5A880] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C5A880] mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs font-light text-[#FAF8F5]/80">
              <li><a href="#home" className="hover:text-[#C5A880] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#C5A880] transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-[#C5A880] transition-colors">About Us</a></li>
              <li><a href="#cakes" className="hover:text-[#C5A880] transition-colors">Cakes</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A880] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C5A880] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C5A880] mb-4">Location</h4>
            <p className="text-xs font-light text-[#FAF8F5]/80 leading-relaxed">
              130, Nehru Road, Opp. Ujjivan Small Finance Bank,<br />
              St Thomas Town, Heerti Layout,<br />
              Kammanahalli, Bengaluru, Karnataka 560084
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C5A880] mb-4">Contact & Hours</h4>
            <p className="text-xs font-light text-[#FAF8F5]/80 leading-relaxed mb-4">
              Phone: Enquire via order form<br />
              WhatsApp: Available for orders
            </p>
            <button 
              onClick={() => openModal('order')}
              className="bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#3E3C3A] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF8F5]/50 font-light">
          <p>© 2026 The Baking Home. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Artisan Bakery & Cafe in Kammanahalli, Bengaluru</p>
        </div>
      </footer>

      {}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF8F5] rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl relative border border-[#E5E0D8]">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#2C2A29]/60 hover:text-[#2C2A29] p-1"
            >
              <X size={20} />
            </button>

            {modalType === 'call' ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#6A1B29]/10 text-[#6A1B29] flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#2C2A29] mb-2">Call The Baking Home</h3>
                <p className="text-xs text-[#2C2A29]/70 font-light mb-6">
                  Speak directly with our bakery team in Kammanahalli for quick orders and custom cake inquiries.
                </p>
                <div className="bg-white p-4 rounded-xl border border-[#E5E0D8] mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-1">Direct Phone</p>
                  <p className="font-serif text-xl text-[#6A1B29]">+91 98450 XXXXX</p>
                </div>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="w-full bg-[#6A1B29] text-[#FAF8F5] py-3 rounded-full text-xs font-semibold uppercase tracking-widest shadow-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#C5A880] mb-1 block">
                  {selectedProduct ? selectedProduct.category : 'Order & Enquiry'}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#2C2A29] mb-2">
                  {selectedProduct ? selectedProduct.name : 'Place an Order / Enquiry'}
                </h3>
                <p className="text-xs text-[#2C2A29]/70 font-light mb-6">
                  Fill in your details and our team will contact you promptly to confirm availability and timing.
                </p>

                {formSubmitted ? (
                  <div className="bg-white p-6 rounded-xl border border-[#C5A880]/30 text-center my-6">
                    <p className="font-serif text-lg text-[#6A1B29] mb-2">Thank You!</p>
                    <p className="text-xs text-[#2C2A29]/70 font-light">
                      Your enquiry has been received. We will reach out to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-[#2C2A29] mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-[#E5E0D8] text-xs text-[#2C2A29] focus:outline-none focus:border-[#6A1B29]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-[#2C2A29] mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-[#E5E0D8] text-xs text-[#2C2A29] focus:outline-none focus:border-[#6A1B29]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-[#2C2A29] mb-1">Special Notes / Date</label>
                      <textarea 
                        rows="3"
                        value={formData.note}
                        onChange={(e) => setFormData({...formData, note: e.target.value})}
                        placeholder="Mention any custom requirements or delivery date..."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-[#E5E0D8] text-xs text-[#2C2A29] focus:outline-none focus:border-[#6A1B29]"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#6A1B29] hover:bg-[#531420] text-[#FAF8F5] py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all shadow-sm"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}