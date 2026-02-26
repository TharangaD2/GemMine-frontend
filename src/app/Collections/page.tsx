"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAMPLE_PRODUCTS, MOCK_USER } from '@/api/mockData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { createPageUrl } from '@/utils';
import { Heart, Eye, Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const categories = [
    { id: 'all', name: 'All Jewellery' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'bridal', name: 'Bridal' }
];

const materials = ['Gold', 'Silver', 'Platinum', 'Rose Gold', 'White Gold'];

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image_url: string;
    is_new?: boolean;
    material?: string;
    created_date?: string;
}

interface WishlistItem {
    id: string;
    product_id: string;
    user_email: string;
}

export default function Collections() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams?.get('category') || 'all';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedMaterial, setSelectedMaterial] = useState('all');

    const queryClient = useQueryClient();

    // Use mock user
    const user = MOCK_USER;

    // Use mock products
    const products: Product[] = SAMPLE_PRODUCTS;
    const isLoading = false;

    // Mock wishlist state (in a real app, this would be in a DB or global state)
    const { data: wishlist = [] } = useQuery<WishlistItem[]>({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            // Simulate API fetch from local storage or memory
            const stored = localStorage.getItem(`wishlist_${user?.email}`);
            return stored ? JSON.parse(stored) : [];
        },
        enabled: !!user?.email
    });

    const wishlistMutation = useMutation({
        mutationFn: async (productId: string) => {
            const currentWishlist = [...wishlist];
            const existingIndex = currentWishlist.findIndex(w => w.product_id === productId);

            if (existingIndex > -1) {
                currentWishlist.splice(existingIndex, 1);
            } else {
                currentWishlist.push({
                    id: Math.random().toString(36).substr(2, 9),
                    product_id: productId,
                    user_email: user.email
                });
            }

            localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(currentWishlist));
            return currentWishlist;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlist', user?.email] });
            toast.success('Wishlist updated');
        }
    });

    const handleAddToWishlist = (e: React.MouseEvent, productId: string) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            toast.error('Please login to add to wishlist');
            return;
        }
        wishlistMutation.mutate(productId);
    };

    const wishlistIds = wishlist.map(w => w.product_id);

    // Filter and sort products
    const filteredProducts = products
        .filter(p => selectedCategory === 'all' || p.category.toLowerCase() === selectedCategory.toLowerCase())
        .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
        .filter(p => selectedMaterial === 'all' || p.material?.includes(selectedMaterial))
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'name': return a.name.localeCompare(b.name);
                default:
                    const dateA = a.created_date ? new Date(a.created_date).getTime() : 0;
                    const dateB = b.created_date ? new Date(b.created_date).getTime() : 0;
                    return dateB - dateA;
            }
        });

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Banner */}
            <div className="relative h-[40vh] md:h-[50vh] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                <img
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
                    alt="Collections Banner"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
                            Our Collections
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-6">
                            Discover exquisite pieces crafted with passion and precision
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.id
                                ? 'bg-[#1a1a1a] text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat.name}
                        </motion.button>
                    ))}
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="gap-2">
                                    <SlidersHorizontal className="w-4 h-4" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] bg-white">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8 space-y-8">
                                    <div>
                                        <h4 className="font-medium mb-4">Price Range</h4>
                                        <Slider
                                            defaultValue={priceRange}
                                            max={50000}
                                            step={500}
                                            onValueChange={(val: number[]) => setPriceRange(val)}
                                            className="mt-2"
                                        />
                                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                                            <span>${priceRange[0].toLocaleString()}</span>
                                            <span>${priceRange[1].toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-4">Material</h4>
                                        <div className="space-y-2">
                                            <Button
                                                variant={selectedMaterial === 'all' ? 'default' : 'outline'}
                                                className="w-full justify-start"
                                                onClick={() => setSelectedMaterial('all')}
                                            >
                                                All Materials
                                            </Button>
                                            {materials.map((mat) => (
                                                <Button
                                                    key={mat}
                                                    variant={selectedMaterial === mat ? 'default' : 'outline'}
                                                    className="w-full justify-start"
                                                    onClick={() => setSelectedMaterial(mat)}
                                                >
                                                    {mat}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <span className="text-gray-500 text-sm">
                            {filteredProducts.length} products
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                                <SelectItem value="name">Name</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="hidden md:flex items-center gap-2 border rounded-lg p-1">
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => setViewMode('grid')}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'ghost'}
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => setViewMode('list')}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                                <div className="aspect-square bg-gray-200" />
                                <div className="p-6 space-y-3">
                                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        layout
                        className={viewMode === 'grid'
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            : "flex flex-col gap-6"
                        }
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link href={`${createPageUrl('ProductDetail')}?id=${product.id}`}>
                                        <motion.div
                                            whileHover={{ y: -8 }}
                                            className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${viewMode === 'list' ? 'flex' : ''
                                                }`}
                                        >
                                            <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}>
                                                <motion.img
                                                    src={product.image_url}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                />

                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                        whileHover={{ opacity: 1, scale: 1 }}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <Button className="bg-white text-black hover:bg-amber-500 hover:text-white rounded-full">
                                                            <Eye className="w-4 h-4 mr-2" /> Quick View
                                                        </Button>
                                                    </motion.div>
                                                </div>

                                                <button
                                                    onClick={(e) => handleAddToWishlist(e, product.id)}
                                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-all z-10"
                                                >
                                                    <Heart className={`w-5 h-5 ${wishlistIds.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                                </button>

                                                {product.is_new && (
                                                    <Badge className="absolute top-4 left-4 bg-amber-500 text-black border-none">New</Badge>
                                                )}
                                            </div>

                                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                                                <span className="text-xs text-amber-600 uppercase tracking-wider font-semibold">{product.category}</span>
                                                <h3 className="text-lg font-medium text-[#1a1a1a] mt-2 group-hover:text-amber-600 transition-colors">
                                                    {product.name}
                                                </h3>
                                                {product.material && (
                                                    <p className="text-sm text-gray-500 mt-1">{product.material}</p>
                                                )}
                                                <p className="text-2xl font-light text-[#1a1a1a] mt-3">
                                                    ${product.price?.toLocaleString()}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {filteredProducts.length === 0 && !isLoading && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found matching your criteria</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setSelectedCategory('all');
                                setPriceRange([0, 50000]);
                                setSelectedMaterial('all');
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
