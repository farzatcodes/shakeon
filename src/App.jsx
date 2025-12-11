import React, { useState, useEffect } from 'react';
import { Leaf, Shield, Zap, Menu, X, Check, ArrowRight, Instagram, Facebook, Twitter, Droplet } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-green-200">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="Shakeon Logo" className="h-10 w-auto object-contain rounded shadow-sm" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Flavors', 'Benefits', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-green-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              Get Fueled
            </button>
          </div>

          <button 
            className="md:hidden text-green-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-green-900' : 'text-green-900 md:text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 gap-4 border-t border-green-100">
            {['About', 'Flavors', 'Benefits', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-semibold text-green-900 py-2 border-b border-gray-100"
              >
                {item}
              </button>
            ))}
            <button className="bg-green-800 text-white w-full py-3 rounded-lg font-bold mt-2">
              Order Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-green-900">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-green-800 skew-x-12 translate-x-20 z-0 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-700 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1 text-sm font-medium text-green-100 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              New in Dhaka & Chittagong
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Fuel Your Go, <br />
              <span className="text-green-400">Naturally.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 font-light border-l-4 border-green-400 pl-4 italic">
              প্রাকৃতিক শক্তিতে এগিয়ে চলো
            </p>
            
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              The first plant-based, lactose-free protein shake designed for the Bangladeshi hustle. No crash, no bloating, just 20g of pure power.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-green-900 px-8 py-3.5 rounded-full font-bold hover:bg-green-50 transition-colors shadow-xl flex items-center gap-2">
                Find Near You <ArrowRight size={18} />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Nutrition
              </button>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-sm text-green-200/80">
              <div className="flex items-center gap-2">
                <Shield size={16} /> BSTI Certified
              </div>
              <div className="flex items-center gap-2">
                <Leaf size={16} /> 100% Vegan
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} /> No Added Sugar
              </div>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-transparent rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
            <img src="/hero.png" alt="Shakeon Hero Bottle" className="relative z-10 h-full w-auto object-contain drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-yellow-600/20 backdrop-blur-md rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-green-500/20 backdrop-blur-md rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 🔥 PROMO IMAGE 1 */}
      <div className="w-full py-10 px-4 md:px-8">
        <img 
          src="/promo-1.jpg"
          alt="Promotional Image 1"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <img src="/logo.png" alt="herologo" className="absolute bottom-0 left-1/2 h-72 w-auto object-contain drop-shadow-xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Western Nutrition, Bangladeshi Soul</h2>
            <p className="text-gray-600 text-lg">
              We ditched the chemicals and the sugar. We kept the flavor and the function. Shakeon is the bridge between your fitness goals and your taste buds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ... cards unchanged ... */}
          </div>
        </div>
      </section>

      {/* 🔥 PROMO IMAGE 2 */}
      <div className="w-full py-10 px-4 md:px-8">
        <img 
          src="/promo-2.jpg"
          alt="Promotional Image 2"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* Flavors */}
      <section id="flavors" className="py-24 bg-white">
        {/* ... existing flavor cards unchanged ... */}
      </section>

      {/* 🔥 PROMO IMAGE 3 */}
      <div className="w-full py-10 px-4 md:px-8">
        <img 
          src="/promo-3.jpg"
          alt="Promotional Image 3"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-green-50 overflow-hidden">
        {/* ... existing benefits section unchanged ... */}
      </section>

      {/* 🔥 PROMO IMAGE 4 */}
      <div className="w-full py-10 px-4 md:px-8">
        <img 
          src="/promo-4.jpg"
          alt="Promotional Image 4"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
        {/* ... footer unchanged ... */}
      </footer>

      {/* 🔥 PROMO IMAGE 5 */}
      <div className="w-full py-10 px-4 md:px-8">
        <img 
          src="/promo-5.jpg"
          alt="Promotional Image 5"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

    </div>
  );
};

export default App;
