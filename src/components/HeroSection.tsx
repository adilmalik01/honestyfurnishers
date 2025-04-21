"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideContent = [
        {
            image: "/slider-1.jpg",
            heading: "Transform Your Space with Quality Furniture",
            subheading: "Honesty Furnishers provides premium furniture solutions for homes and offices. Our commitment to quality and customer satisfaction makes us the ideal choice for all your furniture needs."
        },
        {
            image: "/slider-02.jpg",
            heading: "Elegance and Comfort Combined",
            subheading: "Discover our handcrafted collection designed to bring luxury and functionality to every corner of your home."
        },
        {
            image: "/slider-03.jpg",
            heading: "Custom Solutions for Modern Living",
            subheading: "From contemporary designs to timeless classics, we offer furniture that adapts to your lifestyle and enhances your space."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideContent.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, [slideContent.length]);

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const textItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            transition: {
                duration: 0.5
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.6
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="relative h-screen bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {slideContent.map((slide, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: currentSlide === index ? 1 : 0,
                            transition: { duration: 1.5 }
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent z-10"></div>
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={`Furniture Showcase ${index + 1}`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
                {slideContent.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-green-500 w-6' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="max-w-3xl text-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textContainerVariants}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            variants={textItemVariants}
                        >
                            {slideContent[currentSlide].heading}
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-200 mb-8"
                            variants={textItemVariants}
                        >
                            {slideContent[currentSlide].subheading}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            variants={buttonVariants}
                        >
                            <motion.div
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="/products"
                                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
                                >
                                    Explore Products
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-md transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}