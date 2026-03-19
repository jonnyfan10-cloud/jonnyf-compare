import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Smartphone } from 'lucide-react';

export default function Factors() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f]">How to choose.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-white shadow-sm rounded-full flex items-center justify-center mb-8">
            <CircleDollarSign className="w-10 h-10 text-[#1d1d1f]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Price</h3>
          <p className="text-xl text-[#86868b] leading-relaxed font-medium">
            $549 vs $299. <br/>
            Premium materials vs <br/> everyday portability.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-white shadow-sm rounded-full flex items-center justify-center mb-8">
            <Smartphone className="w-10 h-10 text-[#1d1d1f]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Ecosystem</h3>
          <p className="text-xl text-[#86868b] leading-relaxed font-medium">
            Apple-only magic vs <br/>
            universal compatibility.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
