import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24">
      <div className="container mx-auto px-4 pb-16 grid lg:grid-cols-4 md:grid-cols-2 gap-16">
        <div>
           <div className="flex items-center gap-2 mb-6">
            <div className="bg-armon-blue p-2 rounded">
               <img src="https://picsum.photos/seed/footer-logo/40/40" alt="Logo" className="w-8 h-8 filter brightness-0 invert" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl text-armon-blue tracking-tight leading-none uppercase">Armon</h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Damp Specialists</p>
            </div>
          </div>
          <address className="not-italic text-sm text-gray-500 font-medium leading-relaxed mb-6">
            19 Oxford Road, Oxford Point<br />
            Bournemouth, Dorset, BH8 8GS
          </address>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-armon-blue hover:bg-armon-blue hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-armon-blue hover:bg-armon-blue hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
              <Phone className="w-4 h-4 text-armon-blue" />
              01202 144027
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
              <Mail className="w-4 h-4 text-armon-blue" />
              admin@armonsouth.co.uk
            </li>
          </ul>
          <button className="mt-8 bg-armon-blue text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-armon-blue-dark">
            Book A Survey
          </button>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Important Links</h4>
          <ul className="space-y-3">
            {['Damp Proofing', 'Timber Treatment & Restoration', 'Roofing Repairs and Upgrades', 'Mould Removal', 'Armon Southampton', 'Armon Bournemouth', 'Armon Poole', 'Armon Christchurch'].map((link) => (
              <li key={link} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-1 h-1 bg-armon-blue rounded-full"></div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-armon-blue transition-colors">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
           <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Your Experience with Armon</h4>
           <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
             Armon delivers trusted damp solutions. If something doesn't meet your expectations, report it below, and our team will address it quickly.
           </p>
           <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-700 w-full transition-all">
             Report an issue
           </button>
        </div>
      </div>

      <div className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-[10px] font-bold text-gray-500">19 Oxford Road, Oxford Point, Bournemouth, Dorset, BH8 8GS</p>
            <p className="text-[10px] font-bold text-gray-500">Copyright © 2026 — Armon Restorations Ltd</p>
            <button className="w-6 h-6 bg-armon-blue text-white flex items-center justify-center rounded-sm">▲</button>
        </div>
      </div>
    </footer>
  );
}
