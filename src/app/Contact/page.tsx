"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['123 Luxury Avenue', 'Diamond District', 'New York, NY 10036']
    },
    {
        icon: Phone,
        title: 'Call Us',
        details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['contact@aurum.com', 'support@aurum.com']
    },
    {
        icon: Clock,
        title: 'Opening Hours',
        details: ['Mon - Sat: 10AM - 8PM', 'Sunday: 12PM - 6PM']
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mt-4">Contact Us</h1>
                    </motion.div>
                </div>
            </div>

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">Contact Information</span>
                            <h2 className="text-4xl font-serif text-[#1a1a1a] mt-4">
                                We'd Love to Hear From You
                            </h2>
                            <p className="text-gray-600 mt-6 leading-relaxed">
                                Whether you're looking for the perfect piece for a special occasion or need assistance
                                with an existing order, our team is here to help.
                            </p>

                            <div className="mt-12 space-y-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[#1a1a1a]">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-500 text-sm">{detail}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 aspect-video rounded-2xl overflow-hidden bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182919!2d-73.9855426!3d40.7579787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <MessageSquare className="w-6 h-6 text-amber-600" />
                                    <h3 className="text-2xl font-serif text-[#1a1a1a]">Send Us a Message</h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="mt-1"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="mt-1"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="mt-1"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="mt-1"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 min-h-[150px]"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white h-14 rounded-full text-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}