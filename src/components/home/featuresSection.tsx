"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Award, Leaf, Shield } from 'lucide-react';

const features = [
    {
        icon: Diamond,
        title: "Certified Diamonds",
        description: "Every diamond is GIA certified for quality and authenticity"
    },
    {
        icon: Award,
        title: "Royal Craftsmanship",
        description: "Handcrafted by master artisans with decades of experience"
    },
    {
        icon: Leaf,
        title: "Ethically Sourced",
        description: "Responsibly sourced gemstones from trusted partners"
    },
    {
        icon: Shield,
        title: "Lifetime Warranty",
        description: "Comprehensive warranty and complimentary maintenance"
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e2a47] via-[#2d3e6a] to-[#1e2a47]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group text-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotateY: 180 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center"
                        >
                            <feature.icon className="w-10 h-10 text-amber-400" />
                        </motion.div>
                        <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}