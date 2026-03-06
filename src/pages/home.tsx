"use client";

import { SAMPLE_PRODUCTS, MOCK_USER } from '@/api/mockData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useState } from 'react';

import HeroSection from '@/components/home/herosection';
import CollectionsSection from '@/components/home/collectionsSection';
import MarqueeSection from '@/components/home/marqueeSection';
import FeaturedProducts from '@/components/home/featuredProducts';
import FeaturesSection from '@/components/home/featuresSection';
import HeritageSection from '@/components/home/heritageSection';
import NewsletterSection from '@/components/home/newsLetterSection';

export default function Home() {
    const queryClient = useQueryClient();

    const [localWishlist, setLocalWishlist] = useState<string[]>([]);

    const { data: user } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => MOCK_USER
    });

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => SAMPLE_PRODUCTS
    });

    const wishlistMutation = useMutation({
        mutationFn: async (productId: string | number) => {
            const id = String(productId);
            setLocalWishlist(prev => {
                if (prev.includes(id)) {
                    return prev.filter(item => item !== id);
                }
                return [...prev, id];
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlist'] });
            toast.success('Wishlist updated');
        }
    });

    const handleAddToWishlist = (productId: string | number) => {
        if (!user) {
            toast.error('Please login to add to wishlist');
            return;
        }
        wishlistMutation.mutate(productId);
    };

    const wishlistIds = localWishlist;

    return (
        <div>
            <HeroSection />
            <CollectionsSection />
            <MarqueeSection />
            <FeaturedProducts />
            <FeaturesSection />
            <HeritageSection />
            <NewsletterSection />
        </div>
    );
}