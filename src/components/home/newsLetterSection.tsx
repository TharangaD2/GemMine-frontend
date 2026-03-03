"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast.success('Thank you for subscribing!');
            setEmail('');
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f5f0] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl mx-auto text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2a47]/10 border border-[#1e2a47]/20 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-[#1e2a47]" />
                    <span className="text-[#1e2a47] text-sm">Stay Connected</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-[#1e2a47] mb-4">
                    Join the Aurum Circle
                </h2>

                <p className="text-[#1e2a47]/70 mb-10">
                    Be the first to discover new collections, exclusive events, and special offers from the world of Aurum.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white border-[#1e2a47] text-[#1e2a47] placeholder:text-[#1e2a47]/40 h-14 rounded-full px-6 focus-visible:ring-[#1e2a47] focus:border-[#2d3e6a]"
                    />
                    <Button
                        type="submit"
                        className="bg-gradient-to-r from-[#1e2a47] to-[#2d3e6a] hover:from-[#2d3e6a] hover:to-[#1e2a47] text-white font-medium h-14 px-8 rounded-full shadow-lg shadow-[#1e2a47]/20"
                    >
                        Subscribe
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </motion.div>
        </section>
    );
}