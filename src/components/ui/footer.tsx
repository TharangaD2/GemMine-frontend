"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1e2a47] text-white border-t border-[#2d3e6a]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <Link href={createPageUrl('Home')} className="inline-block mb-6">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6976324f456a9c4ce6479020/0b5c3b59c_gem.png"
                                alt="Gem Mine"
                                className="h-20 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Sparkles make you smile. Crafting timeless elegance with every piece.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#d4a89a] hover:border-[#d4a89a] transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Collections', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={createPageUrl(link)}
                                        className="text-gray-400 hover:text-[#d4a89a] transition-colors text-sm"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href={createPageUrl('Collections')}
                                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                                >
                                    High Jewellery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Categories</h4>
                        <ul className="space-y-3">
                            {['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Bridal'].map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`${createPageUrl('Collections')}?category=${category.toLowerCase()}`}
                                        className="text-gray-400 hover:text-[#d4a89a] transition-colors text-sm"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#d4a89a] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    123 Luxury Avenue, Diamond District, New York, NY 10036
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#d4a89a] flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#d4a89a] flex-shrink-0" />
                                <span className="text-gray-400 text-sm">contact@gemmine.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Gem Mine. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
