import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will Armon's Treatment Permanently Resolve My Issue?",
      a: "Without a doubt. Every project undertaken by Armon is completed in full accordance with PCA (Property Care Association) standards, underpinned by a comprehensive ISSE-accredited assessment of your property. Each and every recommendation we provide is specifically aimed at eliminating the root cause of the problem — not simply masking the visible signs. By accurately identifying the issue and applying trusted Blokil Crown systems and materials, Armon ensures all completed work delivers a permanent, long-lasting resolution — solving the problem thoroughly and definitively, once and for all."
    },
    {
      q: "What Kind of Warranty Does Armon Provide on Completed Work?",
      a: "We provide comprehensive 20-year guarantees on damp proofing and timber treatments for your peace of mind."
    },
    {
      q: "What Options Are Available if the Work Exceeds My Budget?",
      a: "We offer flexible payment options and can prioritize essential works to fit within your budget constraints."
    },
    {
      q: "Is It Possible to Remain in the Property During Armon's Works?",
      a: "Yes, in most cases we work room-by-room to minimize disruption, allowing you to stay in your home."
    },
    {
      q: "Will Armon's Work Create a Lot of Mess in My Home?",
      a: "We take extreme care to protect your home with dust sheets and floor protection, leaving it clean at the end of every day."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12 font-medium leading-relaxed">
              At Armon, we believe in honest, straightforward communication when it comes to all aspects of damp treatment, mould elimination, and timber care services throughout Dorset and Hampshire. Our consistently outstanding 5-star ratings across a wide range of platforms are a true reflection of our workmanship, our dedication to keeping customers informed, and the lasting results we deliver.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className={`text-sm font-bold ${openIndex === idx ? 'text-armon-blue' : 'text-gray-800'}`}>{faq.q}</span>
                    {openIndex === idx ? <Minus className="w-4 h-4 text-armon-blue" /> : <Plus className="w-4 h-4 text-gray-400" />}
                  </button>
                  {openIndex === idx && (
                    <div className="p-6 pt-0 border-t border-gray-50">
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-24">
            <img 
               src="https://picsum.photos/seed/damp-house/800/1000" 
               alt="Property Survey" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
