"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const milestones = [
    { year: '2003', title: 'Traditional Gemmine Founded', description: 'Established with a vision to elevate Sri Lanka’s global presence in the gem trade.' },
    { year: '2010', title: 'Showroom Expansion', description: 'Opened our centrally located showroom in Colombo, showcasing curated fine jewellery.' },
    { year: '2015', title: 'Global Recognition', description: 'Expanded our reach to serving discerning clients in over a dozen countries.' },
    { year: '2023', title: '20 Years of Excellence', description: 'Celebrating two decades of delivering superior quality and enduring value.' },
    { year: '2025', title: 'Future of Luxury', description: 'Preparing to introduce ethically produced lab-grown diamonds to our collection.' }
];

const team = [
    {
        name: 'Mohammed Naagur Pitchai Ariz',
        role: 'Chairman',
        description: 'With over three decades in the gem industry, Mr. Ariz leading figures across Sri Lanka’s key gem-trading regions.'
    },
    {
        name: 'M.S.K.Rahman',
        role: 'Managing Director',
        description: 'A GIA-certified gemologist with more than 30 years of experience and deep technical expertise.'
    },
    {
        name: 'Mohammed Yousuf Faraz',
        role: 'Director, Strategy & Finance',
        description: 'Leveraging international experience from the UK, overseeing procurement, logistics, and overall operations.'
    },
    {
        name: 'Mohammed Abdulla Nilamdeen',
        role: 'Director, Consultant',
        description: 'CIMA (UK)-qualified accountant with over 35 years of international experience in financial planning.'
    }
];

const products = [
    {
        title: "Precious Gemstones",
        description: "Ceylon sapphires (royal blue, padparadscha), rare rubies, brilliant diamonds, and stunning emeralds.",
        icon: Diamond
    },
    {
        title: "Semi-Precious Gemstones",
        description: "Handpicked garnets, amethysts, aquamarines, topaz, tourmalines, and moonstones.",
        icon: Award
    },
    {
        title: "Exquisite Jewellery",
        description: "Intricately designed rings, earrings, pendants, and necklaces, from heirlooms to contemporary pieces.",
        icon: Users
    },
    {
        title: "Bespoke Services",
        description: "Custom designs and expert repairs, turning your vision into a wearable masterpiece.",
        icon: Globe
    }
];

export default function About() {
    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Section */}
            <div className="relative h-[75vh] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <img
                    src="/img/jewellery.jpg"
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
                            <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Est. 2003</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">
                                Our Heritage & Vision
                            </h2>
                            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2003, Traditional Gemmine (Pvt) Ltd has earned a distinguished reputation in Sri Lanka’s gem and jewellery industry. Guided by a vision to elevate the nation’s global presence in the gem trade, we uphold the highest standards of quality, integrity, and customer care.
                                </p>
                                <p>
                                    Our centrally located showroom in Colombo showcases a curated selection of fine jewellery, crafted to meet international benchmarks. We pride ourselves on delivering superior quality, personalized service, and enduring value to clients around the world.
                                </p>
                                <p>
                                    Our strength lies in our experienced and multilingual team, specializing in gemology, stone identification, and traditional jewellery design. We stay attuned to global trends while preserving the rich heritage of Sri Lankan craftsmanship.
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
                                <video
                                    src="/vedio/blue_ring.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="/img/bluering.jpeg"
                                    alt="Jewellery Detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e2a47] via-[#2d3e6a] to-[#1e2a47]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Products & Expertise</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: index * 0.1 },
                                    y: { duration: 0.5, delay: index * 0.1 },
                                    scale: { duration: 0.3 }
                                }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group cursor-default"
                            >
                                <div className="w-12 h-12 mb-6 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                                    <product.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-3">{product.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-4 tracking-[0.2em] uppercase">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                            Milestones & Achievements
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-amber-200 hidden lg:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className={`inline-block p-8 rounded-2xl bg-[#f8f5f0] border border-amber-100/50 hover:border-amber-200 transition-all ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-md shadow-sm hover:shadow-md`}>
                                            <span className="text-amber-600 font-serif text-xl font-bold">{milestone.year}</span>
                                            <h4 className="text-xl font-medium text-[#1a1a1a] mt-2">{milestone.title}</h4>
                                            <p className="text-gray-600 mt-2 leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Point */}
                                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-amber-500 border-4 border-white z-10 shadow-sm" />

                                    <div className="flex-1 hidden lg:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Clientele */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f5f0]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#1e2a47] via-[#2d3e6a] to-[#1e2a47] text-white p-12 rounded-3xl overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="relative z-10">
                            <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">Global Presence</span>
                            <h2 className="text-4xl font-serif mt-4 mb-8">Serving the World</h2>
                            <p className="text-amber-100/80 leading-relaxed mb-8 text-lg max-w-2xl">
                                Traditional Gemmine (Pvt) Ltd proudly serves a broad international market, with a dedicated clientele from across the globe.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['China', 'Korea', 'Singapore', 'India', 'Saudi Arabia', 'UAE', 'Russia', 'France', 'Switzerland'].map(country => (
                                    <span key={country} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/10 hover:bg-white/20 transition-colors">
                                        {country}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-sm italic text-amber-200/70">
                                    "Our doors are open 365 days a year, making us a dependable destination for tourists and global travellers alike."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">Leadership Team</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-[#f8f5f0] border border-transparent hover:border-amber-200 transition-all duration-500"
                            >
                                <h3 className="text-xl font-medium text-[#1a1a1a] mb-1 group-hover:text-amber-700 transition-colors">{member.name}</h3>
                                <p className="text-amber-600 text-sm font-medium mb-4">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Relations Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f5f0]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Our Community</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">Cherished Moments</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                            Every smile, every celebration — we are honoured to be a part of our customers' most treasured moments.
                        </p>
                    </motion.div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[
                            {
                                src: "/img/img1.png",
                                alt: "Bridal jewellery fitting",
                                caption: "Bridal Consultation",
                                sub: "A bride discovering her perfect piece"
                            },
                            {
                                src: "/img/img2.png",
                                alt: "Customer wearing necklace",
                                caption: "Timeless Elegance",
                                sub: "Wearing a custom gold necklace"
                            },
                            {
                                src: "/img/img3.png",
                                alt: "Couple choosing engagement ring",
                                caption: "A New Chapter",
                                sub: "Finding the perfect engagement ring"
                            },
                            {
                                src: "/img/img4.png",
                                alt: "Gift wrapping jewellery",
                                caption: "The Gift of Love",
                                sub: "Beautifully wrapped for a special someone"
                            },
                            {
                                src: "/img/img5.jpeg",
                                alt: "Lady wearing diamond earrings",
                                caption: "Radiant Confidence",
                                sub: "Sparkling diamond earrings for every occasion"
                            },
                            {
                                src: "/img/img6.jpeg",
                                alt: "Jewellery store experience",
                                caption: "In-Store Experience",
                                sub: "Personalised service in our boutique"
                            },
                            {
                                src: "/img/img7.png",
                                alt: "Elegant evening piece",
                                caption: "Evening Glamour",
                                sub: "Exquisite pieces for your special night"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.05,
                                    ease: [0.21, 0.47, 0.32, 0.98]
                                }}
                                className="break-inside-avoid group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                            >
                                <div className="relative overflow-hidden aspect-auto">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Caption Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                        <motion.div
                                            initial={{ x: -20 }}
                                            whileHover={{ x: 0 }}
                                            className="space-y-2"
                                        >
                                            <h3 className="text-white font-serif text-2xl leading-tight">
                                                {item.caption}
                                            </h3>
                                            <div className="w-12 h-0.5 bg-amber-400" />
                                            <p className="text-amber-100/90 text-sm font-light tracking-wide">
                                                {item.sub}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Subtle border on hover */}
                                    <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/10 transition-all duration-500 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab-Grown Diamonds Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1e2a47] via-[#2d3e6a] to-[#1e2a47] overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-amber-400 tracking-[0.3em] uppercase text-sm font-medium">Coming Soon</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Lab-Grown Diamonds</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                In line with our commitment to innovation and sustainability, Traditional Gemmine (Pvt) Ltd will soon introduce lab-grown diamonds into our offerings.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <span>Ethically Produced & Sustainable</span>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <span>Virtually Indistinguishable from Natural</span>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <span>Eco-Conscious Responsible Luxury</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer"
                        >
                            <div className="aspect-square rounded-full bg-gradient-to-tr from-amber-500/20 to-transparent absolute -inset-10 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="/img/img5.jpeg"
                                    alt="Modern Diamond Jewellery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Artistry in Motion Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Artistry in Motion</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mt-4">Witness the Craft</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                            Experience the soul of our craftsmanship. From the initial spark of inspiration to the final radiant polish, watch as we bring timeless beauty to life.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video"
                        >
                            <video
                                src="/vedio/clip1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-serif mb-2">The Meticulous Cut</h3>
                                <p className="text-amber-100/80 text-sm">Precision and patience in every facet.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video"
                        >
                            <video
                                src="/vedio/clip2.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-serif mb-2">The Radiant Finish</h3>
                                <p className="text-amber-100/80 text-sm">Where raw nature meets human artistry.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f5f0]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1e2a47]">
                            Experience Authenticity & Artistry
                        </h2>
                        <p className="text-[#1e2a47]/70 mt-6 text-lg">
                            Whether you’re a dedicated collector or a curious explorer, Traditional Gemmine (Pvt) Ltd promises authenticity, artistry, and timeless beauty.
                        </p>
                        <Link href={createPageUrl('collections')}>
                            <Button className="mt-8 bg-gradient-to-r from-[#1e2a47] to-[#2d3e6a] hover:from-[#2d3e6a] hover:to-[#1e2a47] text-white px-10 py-6 rounded-full text-lg">
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