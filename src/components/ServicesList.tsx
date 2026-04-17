import { Home, Droplet, Snowflake, TreeDeciduous, Shield, Search } from 'lucide-react';

export default function ServicesList() {
  const categories = [
    { name: 'Damp Proofing Services', icon: Home },
    { name: 'Mould Remediation & Prevention', icon: Snowflake },
    { name: 'Condensation', icon: Droplet },
    { name: 'Timber Preservation', icon: TreeDeciduous },
    { name: 'Roofing', icon: Shield },
    { name: 'Structural & Water Damage Services', icon: Droplet },
    { name: 'Survey & Diagnostic Services', icon: Search },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-armon-blue font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Types of Issues</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 uppercase">Delivering the Best Solution for You</h2>
            <p className="text-gray-600 font-medium leading-relaxed max-w-xl">
              Across Dorset and Hampshire, Armon offers expert damp proofing, mould removal, timber care, and ventilation upgrades. We tackle issues such as rising damp, condensation, mould, wet rot, and woodworm with an evidence-led approach, providing long-term solutions rather than temporary patches. Discover our guaranteed services above.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-armon-blue group-hover:bg-armon-blue group-hover:text-white transition-all">
                  <cat.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
