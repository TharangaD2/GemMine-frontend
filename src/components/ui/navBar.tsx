"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './badge';

interface NavbarProps {
    cartCount?: number;
    wishlistCount?: number;
    isScrolled?: boolean;
    user?: any;
}

export default function Navbar({
    cartCount = 0,
    wishlistCount = 0,
    isScrolled = false,
    user
}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { name: 'Collections', path: 'Collections' },
        { name: 'Blog', path: 'Blog' },
        { name: 'About', path: 'About' },
        { name: 'Contact', path: 'Contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1e2a47]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6976324f456a9c4ce6479020/0b5c3b59c_gem.png"
                                alt="Gem Mine"
                                className="h-20 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={createPageUrl(link.path)}
                                    className="text-sm text-gray-300 hover:text-[#d4a89a] tracking-wider uppercase transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-300 hover:text-[#d4a89a] hover:bg-transparent"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="w-5 h-5" />
                            </Button>

                            <Link href={createPageUrl('Wishlist')}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-300 hover:text-[#d4a89a] hover:bg-transparent relative"
                                >
                                    <Heart className="w-5 h-5" />
                                    {wishlistCount > 0 && (
                                        <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#d4a89a] text-white text-xs">
                                            {wishlistCount}
                                        </Badge>
                                    )}
                                </Button>
                            </Link>

                            <Link href={createPageUrl('Cart')}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-300 hover:text-[#d4a89a] hover:bg-transparent relative"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    {cartCount > 0 && (
                                        <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#d4a89a] text-white text-xs">
                                            {cartCount}
                                        </Badge>
                                    )}
                                </Button>
                            </Link>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-gray-300 hover:text-amber-400 hover:bg-transparent"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#1a1a1a]"
                    >
                        <div className="flex flex-col h-full p-6">
                            <div className="flex justify-between items-center">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6976324f456a9c4ce6479020/0b5c3b59c_gem.png"
                                    alt="Gem Mine"
                                    className="h-20 w-auto"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <X className="w-6 h-6" />
                                </Button>
                            </div>

                            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={createPageUrl(link.path)}
                                            className="text-2xl text-white hover:text-[#d4a89a] transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-2xl px-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <input
                                type="text"
                                placeholder="Search for jewellery..."
                                className="w-full bg-transparent border-b-2 border-[#d4a89a] text-white text-2xl md:text-4xl font-light py-4 focus:outline-none placeholder:text-gray-600"
                                autoFocus
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-6 right-6 text-white"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <X className="w-8 h-8" />
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
