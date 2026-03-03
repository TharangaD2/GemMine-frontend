"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAMPLE_PRODUCTS, MOCK_USER } from '@/api/mockData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image_url: string;
    material?: string;
}

interface WishlistItem {
    id: string;
    product_id: string;
    user_email: string;
}

interface WishlistItemWithProduct extends WishlistItem {
    product: Product;
}

interface CartItem {
    id: string;
    product_id: string;
    quantity: number;
    user_email: string;
}

export default function Wishlist() {
    const queryClient = useQueryClient();

    // Use mock user
    const user = MOCK_USER;

    const { data: wishlistItems = [], isLoading } = useQuery<WishlistItem[]>({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const stored = localStorage.getItem(`wishlist_${user?.email}`);
            return stored ? JSON.parse(stored) : [];
        },
        enabled: !!user?.email
    });

    // Use mock products
    const products: Product[] = SAMPLE_PRODUCTS;

    const removeFromWishlistMutation = useMutation({
        mutationFn: async (id: string) => {
            const currentWishlist = JSON.parse(localStorage.getItem(`wishlist_${user?.email}`) || '[]');
            const updatedWishlist = currentWishlist.filter((item: WishlistItem) => item.id !== id);
            localStorage.setItem(`wishlist_${user?.email}`, JSON.stringify(updatedWishlist));
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlist', user?.email] });
            toast.success('Removed from wishlist');
        }
    });

    const addToCartMutation = useMutation({
        mutationFn: async (productId: string) => {
            if (!user) return;
            const storedCart = localStorage.getItem(`cart_${user.email}`);
            let cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

            const existingItemIndex = cart.findIndex(item => item.product_id === productId);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: Math.random().toString(36).substr(2, 9),
                    product_id: productId,
                    quantity: 1,
                    user_email: user.email
                });
            }

            localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cartItems', user?.email] });
            toast.success('Added to cart');
        }
    });

    const getProduct = (productId: string) => products.find(p => p.id === productId);

    const wishlistWithProducts: WishlistItemWithProduct[] = wishlistItems.map(item => ({
        ...item,
        product: getProduct(item.product_id) as Product
    })).filter(item => item.product);

    if (!user) {
        return (
            <div className="min-h-screen bg-[#f8f5f0] pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Heart className="w-20 h-20 mx-auto text-gray-300 mb-6" />
                        <h1 className="text-3xl font-serif text-[#1a1a1a] mb-4">Your Wishlist</h1>
                        <p className="text-gray-500 mb-8">Please login to view your wishlist</p>
                        <Button
                            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-6 rounded-full"
                        >
                            Login to Continue
                        </Button>
                    </motion.div>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#f8f5f0] pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                                <div className="aspect-square bg-gray-200" />
                                <div className="p-6 space-y-3">
                                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f5f0] pt-32 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-12"
                >
                    My Wishlist
                </motion.h1>

                {wishlistWithProducts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100"
                    >
                        <Heart className="w-20 h-20 mx-auto text-gray-200 mb-6" />
                        <h2 className="text-2xl font-serif text-gray-600 mb-4">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8">Save your favorite pieces for later</p>
                        <Link href={createPageUrl('collections')}>
                            <Button className="bg-[#1a1a1a] hover:bg-amber-700 text-white px-8 py-6 rounded-full transition-all shadow-lg hover:shadow-xl">
                                Explore Collections
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {wishlistWithProducts.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                                        <Link href={`${createPageUrl('productDetails')}?id=${item.product.id}`}>
                                            <div className="aspect-square overflow-hidden relative bg-gray-50">
                                                <motion.img
                                                    src={item.product.image_url}
                                                    alt={item.product.name}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.6 }}
                                                />

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-red-50 hover:text-red-500 rounded-full shadow-md z-10 transition-colors"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        removeFromWishlistMutation.mutate(item.id);
                                                    }}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </Link>

                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="text-[10px] text-amber-600 uppercase tracking-[0.2em] font-bold">
                                                {item.product.category}
                                            </span>
                                            <Link href={`${createPageUrl('productDetails')}?id=${item.product.id}`}>
                                                <h3 className="text-lg font-serif text-[#1a1a1a] mt-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                                                    {item.product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-xl font-medium text-[#1a1a1a] mt-2">
                                                ${item.product.price?.toLocaleString()}
                                            </p>

                                            <Button
                                                className="w-full mt-auto bg-[#1a1a1a] hover:bg-amber-700 text-white rounded-full transition-all shadow-md hover:shadow-lg h-11"
                                                onClick={() => addToCartMutation.mutate(item.product.id)}
                                                disabled={addToCartMutation.isPending}
                                            >
                                                <ShoppingBag className="w-4 h-4 mr-2" />
                                                {addToCartMutation.isPending ? 'Adding...' : 'Add to Cart'}
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}
