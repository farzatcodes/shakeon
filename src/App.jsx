import React, { useState, useEffect } from 'react';
import { Leaf, Shield, Zap, Menu, X, Check, ArrowRight, Instagram, Facebook, Twitter, Droplet } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for sticky navbar styling
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
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {/* LOGO PLACEHOLDER */}
            <img 
              src="/logo.png" 
              alt="Shakeon Logo" 
              className="h-10 w-auto object-contain rounded shadow-sm"
            />
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-green-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-green-900' : 'text-green-900 md:text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
        {/* Abstract Background Shapes */}
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

          {/* Product Mockup Representation */}
          <div className="relative h-[500px] flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-transparent rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
            
            {/* HERO PRODUCT PLACEHOLDER */}
            <img 
              src="/hero.png" 
              alt="Shakeon Hero Bottle" 
              className="relative z-10 h-full w-auto object-contain drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
            />

            {/* Floating Ingredients */}
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-yellow-600/20 backdrop-blur-md rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-green-500/20 backdrop-blur-md rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About / USPs */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
           
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Western Nutrition, Bangladeshi Soul</h2>
            <p className="text-gray-600 text-lg">
              We ditched the chemicals and the sugar. We kept the flavor and the function. Shakeon is the bridge between your fitness goals and your taste buds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-green-600" />,
                title: "100% Plant Power",
                desc: "Pea, Mung Bean, Rice, and Chickpea proteins. Smooth texture without the dairy bloat."
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Safety First",
                desc: "BSTI Certified with a transparent label. The shield on our logo isn't just for show—it's a promise."
              },
              {
                icon: <Droplet className="w-10 h-10 text-green-600" />,
                title: "Zero Added Sugar",
                desc: "Diabetic friendly and gym approved. We use natural sweetness so you don't crash later."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-green-600 font-bold tracking-wider uppercase text-sm">The Lineup</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">Flavors You Actually Know</h2>
            </div>
            <p className="text-gray-500 max-w-md mt-4 md:mt-0">
              No fake "Blue Raspberry" here. We use ingredients familiar to every Bangladeshi household.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Flavor 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-amber-50 h-[500px] flex flex-col border border-amber-100 hover:border-amber-300 transition-all">
              <div className="p-8 z-10">
                <div className="inline-block bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-700 mb-4">ENERGY BOOSTER</div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Banana & <br/>Cinnamon</h3>
                <p className="text-slate-600 mb-4">Rice Protein Base</p>
                <div className="flex gap-2 text-sm text-slate-500">
                  <span className="bg-white px-2 py-1 rounded">Classic</span>
                  <span className="bg-white px-2 py-1 rounded">Smooth</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition-opacity"></div>
              
              {/* PRODUCT IMAGE 1 PLACEHOLDER */}
              <img 
                src="/banana.png" 
                alt="Banana Cinnamon Bottle" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-72 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Flavor 2 (Featured) */}
            <div className="group relative overflow-hidden rounded-3xl bg-green-900 h-[500px] flex flex-col shadow-2xl transform md:-translate-y-8">
              <div className="absolute top-0 right-0 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-20">BEST SELLER</div>
              <div className="p-8 z-10">
                <div className="inline-block bg-green-800/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-200 mb-4">LOCAL FAVORITE</div>
                <h3 className="text-3xl font-bold text-white mb-2">Dates & <br/>Almond</h3>
                <p className="text-green-200 mb-4">Pea Protein Base</p>
                <div className="flex gap-2 text-sm text-green-100/80">
                  <span className="bg-green-800 px-2 py-1 rounded">Khejur Gur</span>
                  <span className="bg-green-800 px-2 py-1 rounded">Nutty</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-600 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition-opacity"></div>
              
               {/* PRODUCT IMAGE 2 PLACEHOLDER */}
               <img 
                src="/dates.png" 
                alt="Dates Almond Bottle" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-80 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Flavor 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-stone-100 h-[500px] flex flex-col border border-stone-200 hover:border-stone-400 transition-all">
              <div className="p-8 z-10">
                <div className="inline-block bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-700 mb-4">GUILT FREE</div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Chocolate & <br/>Chickpea</h3>
                <p className="text-slate-600 mb-4">Chickpea Protein Base</p>
                <div className="flex gap-2 text-sm text-slate-500">
                  <span className="bg-white px-2 py-1 rounded">Rich</span>
                  <span className="bg-white px-2 py-1 rounded">Creamy</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-stone-400 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition-opacity"></div>
              
              {/* PRODUCT IMAGE 3 PLACEHOLDER */}
              <img 
                src="/chocolate.png" 
                alt="Chocolate Chickpea Bottle" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-72 w-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm font-mono text-gray-400 mb-4">Packaging features "NO CAP" transparency guarantee.</p>
            <button className="bg-slate-900 text-white px-10 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              View Nutritional Labels
            </button>
          </div>
        </div>
      </section>



<div className="w-full py-10 px-4 md:px-8 space-y-10">

  {/* Promo 1 */}
  <img 
    src="/promo-1.jpeg"
    alt="Promotional Image 1"
    className="w-full h-auto rounded-3xl shadow-xl object-cover"
  />

  {/* Promo 2 */}
  <img 
    src="/promo-2.jpeg"
    alt="Promotional Image 2"
    className="w-full h-auto rounded-3xl shadow-xl object-cover"
  />

  {/* Promo 3 */}
  <img 
    src="/promo-3.jpeg"
    alt="Promotional Image 3"
    className="w-full h-auto rounded-3xl shadow-xl object-cover"
  />

  {/* Promo 4 */}
  <img 
    src="/promo-4.jpeg"
    alt="Promotional Image 4"
    className="w-full h-auto rounded-3xl shadow-xl object-cover"
  />

  {/* Promo 5 */}
  <img 
    src="/promo-5.jpeg"
    alt="Promotional Image 5"
    className="w-full h-auto rounded-3xl shadow-xl object-cover"
  />

</div>

      {/* Target Audience / Benefits */}
      <section id="benefits" className="py-20 bg-green-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Who is <br/>
                <span className="text-green-600">Shakeon</span> for?
               </h2>
               
               <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-green-700">
                     <Zap size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">The Busy Achiever</h4>
                     <p className="text-slate-600 text-sm mt-1">
                       For the students rushing to an 8 AM class and young professionals skipping breakfast. Shake, drink, and conquer the morning.
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-green-700">
                     <div className="font-black text-xl leading-none">20g</div>
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">The Fitness Pursuer</h4>
                     <p className="text-slate-600 text-sm mt-1">
                       For gym-goers who hate the sandy taste and mess of powder shakers. Get clean post-workout recovery instantly.
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-green-700">
                     <Leaf size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">The Conscious Consumer</h4>
                     <p className="text-slate-600 text-sm mt-1">
                       Lactose intolerant? Diabetic? Or just trying to eat clean? We read the labels so you don't have to worry.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="bg-green-200 rounded-full absolute -right-10 -top-10 w-72 h-72 blur-3xl opacity-50"></div>
              <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-green-100">
                 <div className="text-green-600 font-bold uppercase text-xs tracking-wider mb-2">Testimonial</div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-4">"Finally, something that doesn't taste like chemicals."</h3>
                 <p className="text-slate-600 mb-6 italic">
                   "I used to drink Lassi, but it made me sleepy. Shakeon gives me that creamy texture without the heaviness. The Dates flavor is honestly nostalgic."
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                   <div>
                     <p className="font-bold text-slate-900 text-sm">Saad Zubair</p>
                     <p className="text-slate-500 text-xs">NSU Student</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-4">
                {/* FOOTER LOGO PLACEHOLDER */}
                <img 
                  src="/logo.png" 
                  alt="Shakeon Logo" 
                  className="h-8 w-auto object-contain rounded opacity-80"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Fuel Your Go, Naturally. <br/>
                North South University, Dhaka.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-green-400">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="hover:text-white cursor-pointer">Store Locator</li>
                <li className="hover:text-white cursor-pointer">Order Online</li>
                <li className="hover:text-white cursor-pointer">Gym Partners</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-green-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Ingredients</li>
                <li className="hover:text-white cursor-pointer">BSTI Certificates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-green-400">Connect</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram size={18} />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook size={18} />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter size={18} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 SHAKEON. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed by Team 6 • MKT460</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
