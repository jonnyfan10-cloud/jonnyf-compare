import React from 'react';
import { motion } from 'framer-motion';

export default function Refund() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f]">Returns. Simplified.</h2>
      </motion.div>

      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[2rem] p-12 shadow-sm"
        >
          <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-12 text-center md:text-left">Apple</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">14</h4>
              <p className="text-[#86868b] font-medium">Days to return.</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">Free</h4>
              <p className="text-[#86868b] font-medium">In-store or mail.</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">Fast</h4>
              <p className="text-[#86868b] font-medium">Refund processing.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2rem] p-12 shadow-sm"
        >
          <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-12 text-center md:text-left">Sony</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">30</h4>
              <p className="text-[#86868b] font-medium">Days to return.</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">RMA</h4>
              <p className="text-[#86868b] font-medium">Required via support.</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold text-[#1d1d1f] mb-4">10-14</h4>
              <p className="text-[#86868b] font-medium">Days for refund.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
