import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const Collections = [
    {
        name: "Bridal Collection",
        description: "Timeless pieces for your special day",
        image: "/img/bridal.jpeg",
        category: "bridal"
    },
    {
        name: "Diamond Rings",
        description: "Brilliance in every facet",
        image: "/img/diamondring.jpeg",
        category: "rings"
    },
    {
        name: "Gold Necklaces",
        description: "Elegance that adorns",
        image: "/img/jewellery.jpg",
        category: "necklaces"
    },
    {
        name: "Royal Earrings",
        description: "Grace in every movement",
        image: "/img/e1.jpeg",
        category: "earrings"
    }
];

export default function CollectionsSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0f0f0f] to-[#f8f5f0]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-amber-500 tracking-[0.3em] uppercase text-sm">Curated Excellence</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-4">Our Collections</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Collections.map((Collection, index) => (
                    <motion.div
                        key={Collection.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Link href={`${createPageUrl('Collections')}?category=${Collection.category}`}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] cursor-pointer"
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <motion.img
                                        src={Collection.image}
                                        alt={Collection.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{Collection.name}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{Collection.description}</p>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity"
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-black" />
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-2xl transition-all duration-500"
                                />
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
