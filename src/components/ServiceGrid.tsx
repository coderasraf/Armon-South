import { Home, Snowflake, Shield, Layers } from 'lucide-react';

export default function ServiceGrid() {
  const services = [
    {
      title: 'Damp Proofing',
      desc: 'We cover Dorset and Hampshire with expert internal and external damp proofing installations, resolving issues such as rising damp, moisture penetration, and condensation.',
      icon: Home
    },
    {
      title: 'Timber Treatment',
      desc: 'Comprehensive wood preservation and rot control for joists, beams, and roofing structures, covering dry rot, wet rot, and woodworm.',
      icon: Layers
    },
    {
      title: 'Mould Removal & Prevention',
      desc: 'Complete and safe mould removal, followed by effective ventilation systems to stop regrowth—covering Dorset and Hampshire properties.',
      icon: Snowflake
    },
    {
      title: 'Roofing Repairs & Upgrades',
      desc: 'Our services range from fixing minor roof leaks to complete slate, tile, and flat roof refurbishments, including ventilation systems, battening, and waterproofing.',
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-armon-blue group-hover:text-white transition-colors">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed italic line-clamp-4">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
