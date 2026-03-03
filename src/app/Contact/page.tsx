"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Copy, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Us',
        content: 'No: 9A, St Anthonys\'s Mawatha, Colombo 03, Sri Lanka',
        details: ['No: 9A, St Anthonys\'s Mawatha', 'Colombo 03', 'Sri Lanka']
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: '+94 777 483 464',
        details: ['+94 777 483 464', '+94 112 375 196']
    },
    {
        icon: Mail,
        title: 'Email Us',
        content: 'sales@gemminelk.com',
        details: ['sales@gemminelk.com']
    },
    {
        icon: Clock,
        title: 'Opening Hours',
        content: 'Mon - Sat: 9AM - 6PM',
        details: ['Mon - Sat: 9AM - 6PM', 'Sunday: Closed']
    }
];

const BackgroundParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-500/10 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [null, "-20%", "120%"],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                />
            ))}
        </div>
    );
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // Colombo Time Logic (UTC +5:30)
    useEffect(() => {
        const checkShopStatus = () => {
            const now = new Date();
            const colomboTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Colombo" }));
            const hours = colomboTime.getHours();
            const minutes = colomboTime.getMinutes();
            const day = colomboTime.getDay(); // 0 is Sunday

            // Mon-Sat: 9AM - 6PM
            const isOpen = day !== 0 && hours >= 9 && hours < 18;
            setIsShopOpen(isOpen);
            setCurrentTime(colomboTime.toLocaleTimeString("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };

        checkShopStatus();
        const interval = setInterval(checkShopStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation check
        if (formData.message.length < 10) {
            toast.error("Please provide a more detailed message (min 10 characters).");
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
        toast.info("Copied to clipboard");
    };

    return (
        <div className="min-h-screen bg-[#fcfaf7]">
            {/* Hero Section */}
            <div className="relative h-[85vh] bg-[#0f172a] overflow-hidden">
                <BackgroundParticles />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/20 to-[#fcfaf7]" />
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5 }}
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-400 tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Get In Touch</span>
                            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">Contact Us</h1>
                            <div className="flex items-center justify-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${isShopOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                <span className="text-white/80 font-light tracking-widest text-sm uppercase">
                                    {isShopOpen ? `Open Now until 6:00 PM` : `Currently Closed • Opens 9:00 AM`}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="py-24 px-6 md:px-12 lg:px-24 -mt-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-12">
                                <span className="text-amber-600 tracking-[0.3em] uppercase text-xs font-bold">Contact Information</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] mt-4 mb-6 leading-tight">
                                    Let's Start a <br /><span className="italic text-amber-700">Conversation</span>
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                                    From custom commissions to collection inquiries, our concierge team is dedicated to providing an unparalleled experience.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#0f172a] mb-2">{info.title}</h3>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-slate-500 text-sm">{detail}</p>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(info.content, index)}
                                                className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-amber-600"
                                                title="Copy to clipboard"
                                            >
                                                {copiedIndex === index ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Enhanced Map Section */}
                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge className="bg-white/90 backdrop-blur-md text-[#0f172a] border-none shadow-lg px-4 py-2 flex gap-2 items-center">
                                        <div className={`w-2 h-2 rounded-full ${isShopOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                                        Colombo Showroom
                                    </Badge>
                                </div>
                                <div className="aspect-video bg-slate-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.81938928828!2d79.85167!3d6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594191d4e0e1%3A0x6b8765f0e97214e2!2sTraditional%20Gem%20Mine!5e0!3m2!1sen!2slk!4v1709543166847!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                            </div>
                        </motion.div>

                        {/* Contact Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5 relative overflow-hidden ring-1 ring-slate-100">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl font-serif" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                            <MessageSquare className="w-6 h-6 text-blue-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-serif text-[#0f172a]">Send an Inquiry</h3>
                                            <p className="text-slate-400 text-sm">Response time: Usually within 4 hours</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-slate-700 font-medium ml-1">Full Name</Label>
                                                <div className="relative group">
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="h-14 bg-slate-50/50 border-slate-100 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl transition-all"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-slate-700 font-medium ml-1">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="h-14 bg-slate-50/50 border-slate-100 focus:border-amber-500 rounded-xl"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-slate-700 font-medium ml-1">Phone (Optional)</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="h-14 bg-slate-50/50 border-slate-100 focus:border-amber-500 rounded-xl"
                                                    placeholder="+94"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="subject" className="text-slate-700 font-medium ml-1">Inquiry Type</Label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="h-14 bg-slate-50/50 border-slate-100 focus:border-amber-500 rounded-xl"
                                                    placeholder="e.g. Bespoke Design"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-end ml-1">
                                                <Label htmlFor="message" className="text-slate-700 font-medium">Your Message</Label>
                                                <span className={`text-[10px] font-mono tracking-tighter ${formData.message.length < 10 ? 'text-slate-400' : 'text-green-500'}`}>
                                                    {formData.message.length} Characters
                                                </span>
                                            </div>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="min-h-[160px] bg-slate-50/50 border-slate-100 focus:border-amber-500 rounded-2xl resize-none p-6"
                                                placeholder="Tell us about the gemstone or design you are envisioning..."
                                            />
                                            {formData.message.length > 0 && formData.message.length < 10 && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-amber-600 text-[10px] flex items-center gap-1 mt-1"
                                                >
                                                    <Info className="w-3 h-3" /> Minimum 10 characters required
                                                </motion.p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-950 to-slate-900 hover:from-slate-900 hover:to-blue-950 text-white h-16 rounded-2xl text-lg font-medium shadow-lg shadow-blue-900/20 transition-all duration-500 group"
                                            disabled={isSubmitting}
                                        >
                                            <AnimatePresence mode="wait">
                                                {isSubmitting ? (
                                                    <motion.span
                                                        key="submitting"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="flex items-center justify-center gap-3"
                                                    >
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending Inquiry...
                                                    </motion.span>
                                                ) : (
                                                    <motion.span
                                                        key="send"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="flex items-center justify-center gap-3"
                                                    >
                                                        Submit Inquiry
                                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </Button>
                                    </form>

                                    <div className="mt-10 pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden ring-1 ring-slate-100">
                                                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Support Team" />
                                                </div>
                                            ))}
                                            <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-50 flex items-center justify-center text-[10px] font-bold text-amber-600 ring-1 ring-slate-100">
                                                +2
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs">Our artisans are ready to assist you</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
