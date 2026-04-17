import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-armon-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-200 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Reviews</span>
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              More than 300 Homeowners in the South of England Rely on Us
            </h2>
            <p className="text-blue-100 font-medium leading-relaxed mb-8">
              Helping hundreds of clients—from new buyers to property investors—make smarter, safer property decisions through our surveys.
            </p>
            <div className="flex items-center gap-2 text-2xl font-black">
              9.9 / 10 reviewed on <span className="text-white underline decoration-blue-400">Trustpilot</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-10 rounded-2xl text-gray-900 shadow-2xl">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-armon-blue text-armon-blue" />)}
              </div>
              <h4 className="text-xl font-bold mb-4">Damp evaluation and roof repair solutions</h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8 italic">
                "They were quick to find the issue and explain it clearly, recommending a cost-effective approach instead of trying to add more work."
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                 <div>
                    <p className="text-2xl font-black italic text-armon-blue">10 <span className="text-[10px] uppercase align-middle text-gray-400 not-italic ml-1">✓ Verified Review</span></p>
                 </div>
                 <div className="flex gap-2">
                    <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
                    <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
