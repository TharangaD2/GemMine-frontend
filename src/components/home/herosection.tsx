"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1e2a47] via-[#2d3e6a] to-[#1e2a47]">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {isMounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#d4a89a]/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [-20, -500],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: 5 + i * 0.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Rose gold gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4a89a]/10 to-transparent" />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-20"
            >
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a89a]/20 border border-[#d4a89a]/30 rounded-full mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-[#d4a89a]" />
                        <span className="text-[#d4a89a] text-sm tracking-[0.2em] uppercase">Sparkles Make You Smile</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-serif"
                    >
                        <span className="block text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight">
                            Timeless
                        </span>
                        <span className="inline-block text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#d4a89a] via-[#e8c4b5] to-[#d4a89a] font-light italic mt-2 pb-4">
                            Elegance
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mt-8 leading-relaxed"
                    >
                        Discover handcrafted luxury jewellery that tells your unique story.
                        Each piece is a masterwork of artistry and passion.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
                    >
                        <Link href={createPageUrl('Collections')}>
                            <Button className="group bg-gradient-to-r from-[#d4a89a] to-[#c9a88a] hover:from-[#e8c4b5] hover:to-[#d4a89a] text-white font-medium px-8 py-6 text-lg rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(212,168,154,0.3)] hover:shadow-[0_0_50px_rgba(212,168,154,0.5)]">
                                Explore Collections
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href={createPageUrl('About')}>
                            <Button variant="outline" className="border-[#d4a89a]/50 text-[#d4a89a] hover:bg-[#d4a89a]/20 hover:text-[#e8c4b5] px-8 py-6 text-lg rounded-full transition-all duration-300">
                                Our Story
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - 3D Image Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:w-1/2 relative"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mx-auto">
                        {/* Glowing rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-[#d4a89a]/20"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-[#d4a89a]/30"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 rounded-full border border-[#d4a89a]/20"
                        />

                        {/* Main Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-12 rounded-full overflow-hidden shadow-[0_0_100px_rgba(212,168,154,0.2)] border-2 border-[#d4a89a]/30"
                            style={{ perspective: '1000px' }}
                        >
                            <video
                                src="/vedio/ring.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating sparkles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[#d4a89a] rounded-full"
                                style={{
                                    top: `${20 + i * 15}%`,
                                    left: `${i % 2 === 0 ? 5 : 90}%`
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[#d4a89a]/50 rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-[#d4a89a] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}