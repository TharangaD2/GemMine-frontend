"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAMPLE_PRODUCTS, INITIAL_CART_ITEMS, MOCK_USER } from '@/api/mockData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
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

interface CartItem {
    id: string;
    product_id: string;
    quantity: number;
    user_email: string;
}

interface CartItemWithProduct extends CartItem {
    product: Product;
}

export default function Cart() {
    const queryClient = useQueryClient();

    // Use mock user
    const user = MOCK_USER;

    const { data: cartItems = [], isLoading } = useQuery<CartItem[]>({
        queryKey: ['cartItems', user?.email],
        queryFn: async () => {
            const stored = localStorage.getItem(`cart_${user?.email}`);
            return stored ? JSON.parse(stored) : INITIAL_CART_ITEMS;
        },
        enabled: !!user?.email
    });

    // Use mock products
    const products: Product[] = SAMPLE_PRODUCTS;

    const updateQuantityMutation = useMutation({
        mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
            const currentCart = [...cartItems];
            const index = currentCart.findIndex(item => item.id === id);

            if (index > -1) {
                if (quantity <= 0) {
                    currentCart.splice(index, 1);
                } else {
                    currentCart[index] = { ...currentCart[index], quantity };
                }
                localStorage.setItem(`cart_${user.email}`, JSON.stringify(currentCart));
            }
            return currentCart;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cartItems', user?.email] });
        }
    });

    const removeItemMutation = useMutation({
        mutationFn: async (id: string) => {
            const currentCart = cartItems.filter(item => item.id !== id);
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(currentCart));
            return currentCart;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cartItems', user?.email] });
            toast.success('Item removed from cart');
        }
    });

    const getProduct = (productId: string) => products.find(p => p.id === productId);

    const cartWithProducts: CartItemWithProduct[] = cartItems.map(item => ({
        ...item,
        product: getProduct(item.product_id) as Product
    })).filter(item => item.product);

    const subtotal = cartWithProducts.reduce((sum: number, item: CartItemWithProduct) =>
        sum + (item.product.price * item.quantity), 0
    );

    const shipping = subtotal > 5000 ? 0 : 50;
    const total = subtotal + shipping;

    if (!user) {
        return (
            <div className="min-h-screen bg-[#f8f5f0] pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
                        <h1 className="text-3xl font-serif text-[#1a1a1a] mb-4">Your Cart</h1>
                        <p className="text-gray-500 mb-8">Please login to view your cart</p>
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
                    <div className="animate-pulse space-y-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-2xl p-6 flex gap-6">
                                <div className="w-32 h-32 bg-gray-200 rounded-xl" />
                                <div className="flex-1 space-y-4">
                                    <div className="h-6 bg-gray-200 rounded w-1/3" />
                                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                                    <div className="h-8 bg-gray-200 rounded w-1/5" />
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
                    Shopping Cart
                </motion.h1>

                {cartWithProducts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
                        <h2 className="text-2xl font-serif text-gray-600 mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Discover our exquisite collections</p>
                        <Link href={createPageUrl('Collections')}>
                            <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-6 rounded-full">
                                Explore Collections
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            <AnimatePresence>
                                {cartWithProducts.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex gap-6">
                                            <Link href={`${createPageUrl('ProductDetail')}?id=${item.product.id}`}>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden flex-shrink-0"
                                                >
                                                    <img
                                                        src={item.product.image_url}
                                                        alt={item.product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>
                                            </Link>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <span className="text-xs text-amber-600 uppercase tracking-wider font-semibold">
                                                                {item.product.category}
                                                            </span>
                                                            <Link href={`${createPageUrl('ProductDetail')}?id=${item.product.id}`}>
                                                                <h3 className="text-lg font-medium text-[#1a1a1a] hover:text-amber-600 transition-colors">
                                                                    {item.product.name}
                                                                </h3>
                                                            </Link>
                                                            {item.product.material && (
                                                                <p className="text-sm text-gray-500">{item.product.material}</p>
                                                            )}
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-gray-400 hover:text-red-500 -mr-2 -mt-2"
                                                            onClick={() => removeItemMutation.mutate(item.id)}
                                                        >
                                                            <X className="w-5 h-5" />
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-1 py-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 rounded-full hover:bg-white"
                                                            onClick={() => updateQuantityMutation.mutate({
                                                                id: item.id,
                                                                quantity: item.quantity - 1
                                                            })}
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </Button>
                                                        <span className="w-6 text-center font-medium">{item.quantity}</span>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 rounded-full hover:bg-white"
                                                            onClick={() => updateQuantityMutation.mutate({
                                                                id: item.id,
                                                                quantity: item.quantity + 1
                                                            })}
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </Button>
                                                    </div>

                                                    <p className="text-xl font-light text-[#1a1a1a]">
                                                        ${(item.product.price * item.quantity).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-2xl p-8 shadow-sm sticky top-32"
                            >
                                <h2 className="text-xl font-serif text-[#1a1a1a] mb-6">Order Summary</h2>

                                <div className="space-y-4 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-[#1a1a1a]">${subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="font-medium text-[#1a1a1a]">
                                            {shipping === 0 ? 'Free' : `$${shipping}`}
                                        </span>
                                    </div>
                                    {shipping > 0 && (
                                        <p className="text-xs text-amber-600">
                                            Free shipping on orders over $5,000
                                        </p>
                                    )}
                                </div>

                                <div className="border-t my-6" />

                                <div className="flex justify-between text-lg">
                                    <span className="font-medium">Total</span>
                                    <span className="font-serif text-2xl text-[#1a1a1a]">${total.toLocaleString()}</span>
                                </div>

                                <Link href={createPageUrl('Checkout')}>
                                    <Button className="w-full mt-8 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white h-14 rounded-full text-lg">
                                        Proceed to Checkout
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>

                                <div className="mt-6 p-4 bg-amber-50 rounded-xl flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-800">
                                        Each piece comes with a certificate of authenticity and complimentary gift packaging.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
