import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-armon-blue py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">Claim Your Damp Survey & Estimate</h2>
          <p className="text-blue-100 font-medium">Our team will inspect your property, evaluate any damp concerns, and provide a comprehensive treatment plan along with a full cost estimate.</p>
        </div>
        <button className="bg-white text-armon-blue px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl whitespace-nowrap">
          Receive Your Survey Results Within Just 24 Hours
        </button>
      </div>
    </section>
  );
}
