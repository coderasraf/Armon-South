export default function TrustBadges() {
  const badges = [
    { name: 'ISSE', img: 'https://picsum.photos/seed/isse/100/40' },
    { name: 'Environment Agency', img: 'https://picsum.photos/seed/env/100/40' },
    { name: 'Checkatrade', img: 'https://picsum.photos/seed/checka/100/40' },
    { name: 'Trustmark', img: 'https://picsum.photos/seed/trust/100/40' },
    { name: 'Google Guaranteed', img: 'https://picsum.photos/seed/google/100/40' },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 font-bold text-lg mb-8 uppercase tracking-widest">Reliable, Recognized & Certified</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          {badges.map((badge) => (
            <img 
              key={badge.name} 
              src={badge.img} 
              alt={badge.name} 
              className="h-10 object-contain"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
