import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const services = [
    'Complimentary Surveys & Estimates',
    'Urgent Damp Protection Solutions',
    'Moisture & Condensation Management',
    'Building & Foundation Waterproofing',
    'Lateral Damp Infiltration Remedies',
    'Dry Rot Eradication & Repair',
    'Mould Prevention & Elimination',
    'Wood Preservation & Timber Care',
    'Dry Rot Removal & Restoration',
    'Woodworm Extermination & Protection',
    'Structural Water Ingress Prevention',
    'Rising Damp Detection & Control'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/armon-work/800/1000" 
                alt="Armon Team Working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-armon-blue text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-black italic">20+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Years Experience</p>
            </div>
          </div>

          <div>
             <span className="text-armon-blue font-black uppercase tracking-[0.2em] text-xs mb-4 block">How It Works</span>
             <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
               What Happens When You Choose Armon
             </h2>
             <p className="text-gray-600 mb-8 leading-relaxed font-medium">
               Providing full damp, mould, and timber care in Bournemouth, Poole, Christchurch, Dorset & Hampshire, our services range from precise written surveys to expert contracting work.
             </p>

             <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
               {services.map((service) => (
                 <div key={service} className="flex items-center gap-2 group">
                   <CheckCircle2 className="w-5 h-5 text-armon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                   <span className="text-sm font-semibold text-gray-700">{service}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
