import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Brands() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f]">Two philosophies.</h2>
        <p className="text-2xl text-[#86868b] mt-4 font-medium">One pursuit of sound.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[550px]">
        {/* Apple */}
        <motion.div 
          className="relative rounded-[2rem] bg-white p-10 md:p-14 overflow-hidden cursor-pointer flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 min-h-[400px] md:min-h-0"
          animate={{ flex: hovered === 'apple' ? 1.4 : hovered === 'sony' ? 0.8 : 1 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          onMouseEnter={() => setHovered('apple')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative z-10">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4"
              animate={{ scale: hovered === 'apple' ? 1.05 : 1, originX: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Apple
            </motion.h3>
            <p className="text-xl text-[#86868b] font-medium max-w-sm leading-relaxed">
              Seamless integration. <br/>
              Computational audio. <br/>
              Iconic design.
            </p>
          </div>

          <motion.div 
            className="relative z-10 mt-12 md:mt-0"
            animate={{ 
              opacity: hovered === 'apple' || hovered === null ? 1 : 0.3,
              y: hovered === 'apple' ? 0 : 10
            }}
            transition={{ duration: 0.4 }}
          >
            <ul className="space-y-5 text-lg font-semibold text-[#1d1d1f]">
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#1d1d1f] transition-all duration-300 group-hover:w-12"></span> 
                Ecosystem magic.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#1d1d1f] transition-all duration-300 group-hover:w-12"></span> 
                Spatial Audio.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#1d1d1f] transition-all duration-300 group-hover:w-12"></span> 
                Premium materials.
              </li>
            </ul>
          </motion.div>

          {/* Background Graphic */}
          <div className="absolute -bottom-16 -right-12 text-[24rem] font-bold text-gray-50 leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
            A
          </div>
        </motion.div>

        {/* Sony */}
        <motion.div 
          className="relative rounded-[2rem] bg-[#1d1d1f] p-10 md:p-14 overflow-hidden cursor-pointer flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-[400px] md:min-h-0"
          animate={{ flex: hovered === 'sony' ? 1.4 : hovered === 'apple' ? 0.8 : 1 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          onMouseEnter={() => setHovered('sony')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative z-10">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
              animate={{ scale: hovered === 'sony' ? 1.05 : 1, originX: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Sony
            </motion.h3>
            <p className="text-xl text-[#a1a1a6] font-medium max-w-sm leading-relaxed">
              Audiophile heritage. <br/>
              Industry-leading ANC. <br/>
              Platform agnostic.
            </p>
          </div>

          <motion.div 
            className="relative z-10 mt-12 md:mt-0"
            animate={{ 
              opacity: hovered === 'sony' || hovered === null ? 1 : 0.3,
              y: hovered === 'sony' ? 0 : 10
            }}
            transition={{ duration: 0.4 }}
          >
            <ul className="space-y-5 text-lg font-semibold text-white">
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-12"></span> 
                LDAC Hi-Res support.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-12"></span> 
                Custom EQ app.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-12"></span> 
                Lightweight comfort.
              </li>
            </ul>
          </motion.div>

          {/* Background Graphic */}
          <div className="absolute -bottom-16 -right-12 text-[24rem] font-bold text-[#2a2a2c] leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            S
          </div>
        </motion.div>
      </div>
    </div>
  );
}
