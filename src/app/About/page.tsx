"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const milestones = [
    { year: '1985', title: 'The Beginning', description: 'Founded with a vision to create timeless pieces' },
    { year: '1995', title: 'International Expansion', description: 'Opened flagship stores across Europe' },
    { year: '2005', title: 'Royal Recognition', description: 'Appointed as official jeweller to royalty' },
    { year: '2015', title: 'Innovation Award', description: 'Received the Global Excellence in Craftsmanship Award' },
    { year: '2024', title: 'Digital Era', description: 'Bringing luxury jewellery to the digital world' }
];

const values = [
    { icon: Diamond, title: 'Quality', description: 'Only the finest materials and gemstones' },
    { icon: Award, title: 'Craftsmanship', description: 'Handcrafted by master artisans' },
    { icon: Users, title: 'Heritage', description: 'Four generations of expertise' },
    { icon: Globe, title: 'Sustainability', description: 'Ethically sourced materials' }
];

export default function About() {
    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <img
                    src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">Our Story</span>
                            <h1 className="text-5xl md:text-7xl font-serif text-white mt-4 max-w-3xl">
                                A Legacy of Excellence
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Est. 1985</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">
                                Crafting Dreams Into Reality
                            </h2>
                            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    For nearly four decades, Aurum has been at the forefront of fine jewellery,
                                    creating pieces that transcend time and trends. Our journey began in a small
                                    atelier, driven by an unwavering commitment to excellence.
                                </p>
                                <p>
                                    Today, we continue to honor the traditions passed down through generations
                                    of master craftsmen, while embracing innovation to create jewellery that
                                    speaks to the modern connoisseur.
                                </p>
                                <p>
                                    Every piece that bears the Aurum name is a testament to our dedication
                                    to perfection – from the careful selection of ethically sourced gemstones
                                    to the final polish that brings each creation to life.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                                    alt="Master Craftsman"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
                                    alt="Jewellery Detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">What We Stand For</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Our Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotateY: 180 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center"
                                >
                                    <value.icon className="w-10 h-10 text-amber-400" />
                                </motion.div>
                                <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Our Journey</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">Milestones</h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-200 hidden lg:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                                            <span className="text-amber-600 font-serif text-2xl">{milestone.year}</span>
                                            <h3 className="text-xl font-medium text-[#1a1a1a] mt-2">{milestone.title}</h3>
                                            <p className="text-gray-500 mt-2">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-amber-200 hidden lg:block" />
                                    <div className="lg:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-amber-50 to-amber-100/50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                            Begin Your Story With Us
                        </h2>
                        <p className="text-gray-600 mt-6 text-lg">
                            Every piece of jewellery tells a story. Let us help you write yours.
                        </p>
                        <Link href={createPageUrl('Collections')}>
                            <Button className="mt-8 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-10 py-6 rounded-full text-lg">
                                Explore Collections
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}