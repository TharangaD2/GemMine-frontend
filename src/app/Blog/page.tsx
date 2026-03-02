"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, User, MessageCircle, ChevronRight } from 'lucide-react';

const BlogPage = () => {
    const blogPost = {
        title: "Tips for Buying Gemstones Online",
        date: "19-10-2013",
        author: "bennu",
        comments: 0,
        image: "/img/bridal.jpeg",
        content: [
            "Watch out for stock photographs",
            "Use a website of an actual store",
            "Use a website that has an inspection period and a return policy",
            "Check that the website's contact information is correct",
            "Choose a website that publishes its quality protocols",
            "Make sure you are purchasing from an accredited business (Eg: Gemological Institute of America)"
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            {/* Hero Section / Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li><a href="/" className="hover:text-amber-600 transition-colors">Home</a></li>
                        <ChevronRight className="w-4 h-4" />
                        <li><span className="text-gray-900 font-medium">Blog</span></li>
                    </ol>
                </nav>
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Journal</h1>
                <p className="text-lg text-gray-600 max-w-2xl">Discover the world of fine jewelry, gemstones, and the stories behind our timeless creations.</p>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-8 group shadow-xl">
                    <Image
                        src={blogPost.image}
                        alt={blogPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-amber-600" />
                        <span>By {blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-amber-600" />
                        <span>{blogPost.comments} Comments</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                    {blogPost.title}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
                    <p className="mb-8 italic text-xl text-gray-600 border-l-4 border-amber-500 pl-6 py-2">
                        Here are some things you should keep in mind when purchasing gemstones online:
                    </p>

                    <div className="grid gap-6">
                        {blogPost.content.map((tip, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-amber-50/50 transition-colors border border-transparent hover:border-amber-100 group"
                            >
                                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-amber-600 text-white rounded-full font-serif text-lg font-bold group-hover:scale-110 transition-transform">
                                    {index + 1}
                                </span>
                                <p className="text-lg text-gray-800 pt-1">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Share or Navigation could go here */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">Share:</span>
                        <div className="flex gap-4">
                            {['Twitter', 'Facebook', 'Pinterest'].map((social) => (
                                <button key={social} className="text-gray-400 hover:text-amber-600 transition-colors text-sm font-medium">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                    <a
                        href="/Blog"
                        className="text-amber-600 font-medium hover:text-amber-700 transition-colors flex items-center gap-2"
                    >
                        Back to Articles
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </article>
        </div>
    );
};

export default BlogPage;
