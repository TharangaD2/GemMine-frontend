"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navBar';
import Footer from '@/components/ui/footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar isScrolled={isScrolled} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
