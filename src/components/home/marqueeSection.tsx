"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond } from 'lucide-react';

const words1 = ["Luxury", "Craftsmanship", "Heritage", "Excellence", "Pure Gold", "Diamonds"];
const words2 = ["Elegance", "Timeless", "Beauty", "Royal", "Collection", "Bespoke", "Artistry"];

export default function MarqueeSection() {
    return (
        <section className="py-12 bg-[#f8f5f0] overflow-hidden">
            {/* First Row - Moving Right */}
            <motion.div
                className="flex whitespace-nowrap mb-4"
                animate={{ x: [0, -1920] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {[...words1, ...words1, ...words1, ...words1].map((word, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a]/20">{word}</span>
                        <Diamond className="w-4 h-4 text-amber-500 ml-8" />
                    </div>
                ))}
            </motion.div>

            {/* Second Row - Moving Left */}
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [-1920, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                {[...words2, ...words2, ...words2, ...words2].map((word, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-amber-600/30">{word}</span>
                        <Diamond className="w-4 h-4 text-[#1a1a1a]/30 ml-8" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}