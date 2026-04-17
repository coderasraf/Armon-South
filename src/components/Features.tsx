import { motion } from 'motion/react';

export default function Features() {
  const steps = [
    {
      number: '1',
      title: 'Schedule Your Survey',
      desc: 'Get in touch via phone or complete our online form to book a specialist surveyor who will survey your property and offer a solution with a quote.',
      img: 'https://picsum.photos/seed/step1/400/250'
    },
    {
      number: '2',
      title: 'Choose Your Preferred Start Date',
      desc: "We'll coordinate with you to choose a convenient start date, and our specialist technicians will arrive ready to carry out the work efficiently.",
      img: 'https://picsum.photos/seed/step2/400/250'
    },
    {
      number: '3',
      title: 'Enjoy a Healthier, More Comfortable Home',
      desc: 'The agreed works will be completed by our specialist team within the set timeframe, delivering a clean and professional result using proven techniques.',
      img: 'https://picsum.photos/seed/step3/400/250'
    }
  ];

  return (
    <section className="py-24 bg-armon-blue text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-16 uppercase tracking-wider">Here's what to expect from Armon</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-baseline gap-2">
                  <span className="text-armon-blue bg-white w-6 h-6 inline-flex items-center justify-center rounded-sm text-sm p-3">{step.number}.</span>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
