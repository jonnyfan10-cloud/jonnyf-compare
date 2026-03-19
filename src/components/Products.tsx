import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          <motion.h1 
            animate={{ 
              opacity: hoveredProduct ? 0.3 : 1, 
              filter: hoveredProduct ? 'blur(8px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1d1d1f] mb-6"
          >
            Which one is <br/> right for you?
          </motion.h1>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* AirPods Max */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.1 }}
        >
          <motion.div 
            animate={{ 
              opacity: hoveredProduct === 'sony' ? 0.3 : 1, 
              scale: hoveredProduct === 'airpods' ? 1.05 : hoveredProduct === 'sony' ? 0.95 : 1,
              filter: hoveredProduct === 'sony' ? 'blur(8px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setHoveredProduct('airpods')}
            onMouseLeave={() => setHoveredProduct(null)}
            className="flex flex-col items-center text-center cursor-default"
          >
            <img 
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=800&hei=800&fmt=png-alpha" 
              alt="AirPods Max" 
              className="w-full max-w-md object-contain bg-white rounded-[2rem] mb-12 aspect-square shadow-sm p-4"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-2">AirPods Max</h2>
            <p className="text-xl text-[#86868b] mb-8 font-medium">Over-ear design.</p>
            <p className="text-2xl font-semibold text-[#1d1d1f] mb-12">$549</p>

            <div className="space-y-6 w-full max-w-xs">
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">High-fidelity</h4>
                <p className="text-[#86868b] font-medium">Computational audio.</p>
              </div>
              <div className="h-px w-full bg-[#d2d2d7]"></div>
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">Pro ANC</h4>
                <p className="text-[#86868b] font-medium">Active Noise Cancellation.</p>
              </div>
              <div className="h-px w-full bg-[#d2d2d7]"></div>
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">20 hrs</h4>
                <p className="text-[#86868b] font-medium">Listening time.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Sony WF-1000XM5 */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
        >
          <motion.div 
            animate={{ 
              opacity: hoveredProduct === 'airpods' ? 0.3 : 1, 
              scale: hoveredProduct === 'sony' ? 1.05 : hoveredProduct === 'airpods' ? 0.95 : 1,
              filter: hoveredProduct === 'airpods' ? 'blur(8px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setHoveredProduct('sony')}
            onMouseLeave={() => setHoveredProduct(null)}
            className="flex flex-col items-center text-center cursor-default"
          >
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80" 
              alt="Sony WF-1000XM5" 
              className="w-full max-w-md object-cover rounded-[2rem] mb-12 aspect-square shadow-sm"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-2">Sony WF-1000XM5</h2>
            <p className="text-xl text-[#86868b] mb-8 font-medium">In-ear design.</p>
            <p className="text-2xl font-semibold text-[#1d1d1f] mb-12">$299</p>

            <div className="space-y-6 w-full max-w-xs">
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">Hi-Res Audio</h4>
                <p className="text-[#86868b] font-medium">Dynamic Driver X.</p>
              </div>
              <div className="h-px w-full bg-[#d2d2d7]"></div>
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">Best-in-class</h4>
                <p className="text-[#86868b] font-medium">Noise cancellation.</p>
              </div>
              <div className="h-px w-full bg-[#d2d2d7]"></div>
              <div>
                <h4 className="text-2xl font-bold text-[#1d1d1f]">24 hrs</h4>
                <p className="text-[#86868b] font-medium">With charging case.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
