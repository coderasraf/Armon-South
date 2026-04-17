export default function AwaabsLaw() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
               src="https://picsum.photos/seed/awaab/800/600" 
               alt="Awaab's Law Compliance" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <span className="text-armon-blue font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Awaabs Law</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
              Need Advice on Complying with Awaab's Law for Damp and Mould?
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              <span className="font-bold text-gray-900">Armon</span> helps landlords, housing associations, and letting agents across the UK stay Awaab's Law compliant. Our certified damp and mould inspections follow HHSRS standards, delivering fast, clear, actionable reports.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed mb-8">
              With guaranteed remediation and expert support, we keep your properties fully compliant—protecting tenants, reputation, and investment, whether it's one flat or a large portfolio.
            </p>
            <button className="bg-armon-blue text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider flex items-center gap-3 hover:bg-armon-blue-dark transition-all">
              Book Compliance Inspection 
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">■</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
