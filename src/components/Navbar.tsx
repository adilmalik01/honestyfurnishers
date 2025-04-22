"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        setActiveItem(window.location.pathname);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1, duration: 0.3 }
        }),
        hover: {
            scale: 1.05,
            color: "#10b981",
            transition: { duration: 0.2 }
        }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/products', label: 'Products' },
        { path: '/contact', label: 'Contact Us' }
    ];

    return (
        <header className={`${scrolled ? 'bg-white backdrop-blur-sm' : 'bg-white'} flex items-center sticky h-[9vh] top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={logoVariants}
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src={"/logo.png"} className={`transition-all duration-300 ${scrolled ? 'w-44' : 'w-54'}`} width={100} height={100} alt='Logo' />
                        </Link>
                    </motion.div>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                variants={menuItemVariants}
                            >
                                <Link
                                    href={item.path}
                                    className={`font-medium transition-all duration-300 relative px-2 py-1 rounded-md ${activeItem === item.path
                                            ? 'text-emerald-600'
                                            : 'text-gray-800 hover:text-emerald-600'
                                        }`}
                                >
                                    {item.label}
                                    {activeItem === item.path && (
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full"
                                            layoutId="underline"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}

                    </nav>

                    <motion.button
                        className="md:hidden text-gray-800 focus:outline-none"
                        onClick={toggleMobileMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu with Animation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.nav
                            className="md:hidden mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={mobileMenuVariants}
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        custom={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            href={item.path}
                                            className={`block transition-colors duration-300 ${activeItem === item.path
                                                    ? 'text-emerald-600 font-semibold'
                                                    : 'text-gray-800 hover:text-emerald-600'
                                                }`}
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                >
                                    <Link
                                        href="/vip"
                                        className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        VIP Access
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}