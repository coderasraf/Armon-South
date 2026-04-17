import { Phone, ChevronDown, Check } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-armon-blue text-white py-2 text-[10px] font-bold uppercase tracking-wider">
        <div className="container mx-auto px-4 flex justify-center gap-8">
          <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-blue-300" /> 30 Year Guarantees</span>
          <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-blue-300" /> Fully Insured</span>
          <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-blue-300" /> Professional Surveyors</span>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-armon-blue p-2 rounded">
             <img src="https://picsum.photos/seed/armon-logo/40/40" alt="Logo" className="w-8 h-8 filter brightness-0 invert" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h1 className="font-extrabold text-xl text-armon-blue tracking-tight leading-none uppercase">Armon</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Damp Specialists</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group cursor-pointer flex items-center gap-1 text-sm font-semibold text-gray-700">
            Services <ChevronDown className="w-4 h-4" />
          </div>
          <div className="relative group cursor-pointer flex items-center gap-1 text-sm font-semibold text-gray-700">
            Areas We Cover <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="text-sm font-semibold text-gray-700">Awaab's Law</a>
        </div>

        <button className="bg-armon-blue text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-armon-blue-dark transition-colors">
          Book A Survey
        </button>
      </div>

      {/* Services bar */}
      <div className="bg-gray-50 border-y border-gray-100 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-4 py-3">
          {['Damp Proofing', 'Mould Removal', 'Roofing Repairs', 'Timber Treatment', 'Water Damage'].map((service) => (
            <button key={service} className="bg-white border border-gray-200 px-4 py-1.5 rounded-sm text-xs font-bold text-armon-blue hover:bg-armon-blue hover:text-white transition-all shadow-sm">
              {service}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
