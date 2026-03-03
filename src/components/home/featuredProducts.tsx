"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

interface Product {
    id: number | string;
    image_url: string;
    name: string;
    is_new?: boolean;
    category: string;
    price: number;
}

interface FeaturedProductsProps {
    products: Product[];
    onAddToWishlist?: (id: number | string) => void;
    wishlistIds?: (number | string)[];
}

export default function FeaturedProducts({
    products,
    onAddToWishlist,
    wishlistIds = []
}: FeaturedProductsProps) {
    const featuredProducts = products?.slice(0, 4) || [];

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f5f0]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
            >
                <div>
                    <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Signature Pieces</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] mt-4">Featured Treasures</h2>
                </div>
                <Link href={createPageUrl('Collections')}>
                    <Button variant="ghost" className="group text-[#1a1a1a] hover:text-amber-600 mt-4 md:mt-0">
                        View All
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                    >
                        <Link href={`${createPageUrl('Collections')}?category=${product.category}`}>
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="aspect-square overflow-hidden relative">
                                    <motion.img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <motion.button
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
                                        >
                                            <Eye className="w-5 h-5 text-[#1a1a1a]" />
                                        </motion.button>
                                    </div>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onAddToWishlist?.(product.id);
                                        }}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-all"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${wishlistIds.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                                        />
                                    </button>

                                    {/* Tags */}
                                    {product.is_new && (
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-medium rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="text-xs text-amber-600 uppercase tracking-wider">{product.category}</span>
                                    <h3 className="text-lg font-medium text-[#1a1a1a] mt-2 group-hover:text-amber-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                                        {product.name}
                                    </h3>
                                    <div className="mt-auto pt-4">
                                        <p className="text-2xl font-light text-[#1a1a1a]">
                                            ${product.price?.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}