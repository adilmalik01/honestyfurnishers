"use client";

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;

  }
  


const productData:Product[] = [
    {
        "id": 1,
        "title": "Office Workstation",
        "category": "Office",
        "description": "Modern office workstation with storage drawers, perfect for productive work environments.",
        "image": "/products/offfice-workstation.png"
    },
    {
        "id": 2,
        "title": "Executive Chair",
        "category": "Office",
        "description": "Ergonomic executive chair with premium leather upholstery and adjustable settings.",
        "image": "/products/executive-charis.jpg"
    },
    {
        "id": 3,
        "title": "Conference Table",
        "category": "Office",
        "description": "Premium wooden conference table for professional meeting spaces. Available in various finishes.",
        "image": "/products/conference-table.jpg"
    },
    {
        "id": 4,
        "title": "Storage Cabinet",
        "category": "Office",
        "description": "Spacious storage cabinet for documents and office supplies with locking mechanism.",
        "image": "/products/storage-cabinet.jpg"
    },
    {
        "id": 5,
        "title": "Office Bookshelf",
        "category": "Office",
        "description": "Modern bookshelf with adjustable shelves, perfect for organizing books and displaying awards.",
        "image": "/products/office-bookshelf.png"
    },
    {
        "id": 6,
        "title": "Reception Desk",
        "category": "Office",
        "description": "Professional reception desk with curved design and built-in cable management.",
        "image": "/products/reception-desk.jpg"
    },
    {
        "id": 7,
        "title": "Modern Bedroom Set",
        "category": "Bedroom",
        "description": "Complete bedroom solution with bed, nightstands, and wardrobe in contemporary design.",
        "image": "/products/bed3.png"
    },
    {
        "id": 8,
        "title": "Queen Size Bed",
        "category": "Bedroom",
        "description": "Elegant queen size bed with padded headboard and solid wood frame.",
        "image": "/products/Queen.jpg"
    },
    {
        "id": 9,
        "title": "Wardrobe Cabinet",
        "category": "Bedroom",
        "description": "Spacious wardrobe with multiple compartments, drawers, and full-length mirror.",
        "image": "/products/Wardrobe.jpg"
    },
    {
        "id": 10,
        "title": "Bedside Table",
        "category": "Bedroom",
        "description": "Compact bedside table with drawer, perfect for keeping essentials within reach.",
        "image": "/products/Bedside.jpg"
    },
    {
        "id": 11,
        "title": "Dressing Table",
        "category": "Bedroom",
        "description": "Elegant dressing table with mirror and storage drawers for personal items.",
        "image": "/products/Dressing.jpg"
    },
    {
        "id": 12,
        "title": "Bedroom Bench",
        "category": "Bedroom",
        "description": "Comfortable bench for the foot of your bed with upholstered seat and storage space.",
        "image": "/products/Bedroom-bench.jpeg"
    },
    {
        "id": 13,
        "title": "Dining Table Set",
        "category": "Dining",
        "description": "6-seater dining table set with matching chairs, perfect for family meals and entertaining.",
        "image": "/products/Dining-table.webp"
    },
    {
        "id": 14,
        "title": "Bar Stool",
        "category": "Dining",
        "description": "Modern bar stool with adjustable height and comfortable seating for kitchen islands.",
        "image": "/products/bar-stool.jpg"
    },
    {
        "id": 15,
        "title": "Buffet Cabinet",
        "category": "Dining",
        "description": "Stylish buffet cabinet with ample storage for dinnerware, table linens, and serving pieces.",
        "image": "/products/buffet-cabinet.jpg"
    },
    {
        "id": 16,
        "title": "Round Dining Table",
        "category": "Dining",
        "description": "Elegant round dining table with solid wood construction, perfect for intimate gatherings.",
        "image": "/products/round-dinning-table.jpg"
    },
    {
        "id": 17,
        "title": "China Cabinet",
        "category": "Dining",
        "description": "Display and storage cabinet with glass doors for showcasing fine china and collectibles.",
        "image": "/products/china-cabinet.jpg"
    },
    {
        "id": 18,
        "title": "Dining Chair Set",
        "category": "Dining",
        "description": "Set of 4 dining chairs with ergonomic design and premium upholstery for comfort.",
        "image": "/products/chair-set.webp"
    }
];

    export default function FeaturedProducts() {
        const [selectedCategory, setSelectedCategory] = useState("all");
        const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

        const categories = ["all", ...Array.from(new Set(productData.map(product => product.category)))];

        useEffect(() => {
            const filtered = selectedCategory === "all"
                ? productData
                : productData.filter(product => product.category === selectedCategory);


            setDisplayedProducts(filtered.slice(0, 6));
        }, [selectedCategory]);

    return (
        <section  id="products" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Our Featured Products</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                    Discover our range of high-quality furniture solutions for every space.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category === "all" ? "All Products" : category}
                        </button>
                    ))}
                </div>

                <div className="flex  flex-wrap justify-center gap-10">
                    {displayedProducts.map((product:Product ) => (
                        <CardContainer key={product.id} className="inter-var w-[400px]">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="60"
                                    className="absolute top-4 right-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-xs px-2 py-1 rounded"
                                >
                                    {product.category}
                                </CardItem>

                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {product.title}
                                </CardItem>

                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                                >
                                    {product.description}
                                </CardItem>

                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={product.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                        alt={product.title}
                                    />
                                </CardItem>

                                <div className="flex justify-between items-center mt-8">

                                    <motion.a
                                        className="px-5 py-2 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200 focus:outline-none"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        href={`/products/${product.id}`}
                                        transition={{ duration: 1, delay: 0.6 }}
                                    >
                                        View Details
                                    </motion.a>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200 focus:outline-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        href={`/products${selectedCategory !== "all" ? `?category=${selectedCategory}` : ""}`}
                    >
                        View All {selectedCategory !== "all" ? selectedCategory : ""} Products
                    </motion.a>
                </div>
            </div>
        </section>
    );
}