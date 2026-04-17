export default function AboutTeam() {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/team-van/1920/1080" 
          alt="Armon Team" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-armon-blue/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
           <span className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Fully Trained & Insured</span>
           <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
             At Armon, we only hire the best. All our team are fully insured and trained to meet our high expectations.
           </h2>
        </div>
      </div>
    </section>
  );
}
