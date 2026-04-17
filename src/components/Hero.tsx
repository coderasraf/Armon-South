import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/damp-van/1920/1080" 
          alt="Armon Van" 
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-armon-blue/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6 bg-black/20 backdrop-blur-md w-fit p-2 rounded-lg border border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/person-${i}/40/40`} 
                  className="w-8 h-8 rounded-full border-2 border-armon-blue" 
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider">Customers have rated us as excellent</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            No.1 Rated Damp Proofer<br/> in The South
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-lg font-medium leading-relaxed">
            We are a local company with a tight team of professionals, our surveys are experts in mould and damp solutions.
          </p>

          <div className="mb-8">
            <p className="text-3xl font-black mb-2 tracking-tight">01202 144027</p>
            <ul className="space-y-1">
              {['Guaranteed for 20 Years', 'High-Quality Service', 'Team of Specialists'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-armon-blue">
                    <Star className="w-2.5 h-2.5 fill-current" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-armon-blue text-white px-8 py-4 rounded-lg font-extrabold text-sm uppercase tracking-wider hover:bg-armon-blue-dark transition-all w-fit shadow-lg shadow-black/20">
            Our Service
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-2xl relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-50 text-armon-blue px-6 py-2 rounded-full font-bold text-sm border border-blue-100 shadow-sm">
            Get a Report and Quote in as Fast as 24 Hours
          </div>

          <form className="mt-4 space-y-4">
            <h3 className="text-center font-bold text-gray-800 mb-6 mt-4">Please Provide Your Details Below:</h3>
            
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Full Name *</label>
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-armon-blue/20" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Email *</label>
              <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-armon-blue/20" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Phone (add +44) *</label>
              <input type="tel" placeholder="Phone" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-armon-blue/20" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Post Code *</label>
              <input type="text" placeholder="Postal Code" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-armon-blue/20" />
            </div>

            <button className="w-full bg-armon-blue text-white py-4 rounded-lg font-bold flex items-center justify-between px-6 hover:bg-armon-blue-dark transition-all mt-6 shadow-lg shadow-armon-blue/20">
              Submit Form
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
