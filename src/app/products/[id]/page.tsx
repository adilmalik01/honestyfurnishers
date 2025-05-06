"use client"
import { productData } from "@/data";
import { motion } from 'framer-motion';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";

export default function Page({ params }) {
    const { id } = params;

    const product = productData.find(item => item.id.toString() === id);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                        <span className="text-red-600 text-2xl">!</span>
                    </div>
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h1>
                    <p className="mb-6 text-gray-600">Sorry, the product you re looking for doesn t exist or has been removed.</p>

                </div>
            </div>
        );
    }

    const relatedProducts = productData
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 3);

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <Link href="/products" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Products
                    </Link>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto p-4 md:p-8">
                {/* Product Detail */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="bg-gray-100 relative h-96 md:h-full p-8 flex items-center justify-center">
                            {product.image ? (
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-gray-500">No image available</p>
                                </div>
                            )}

                            {/* Hot badge */}
                            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                HOT
                            </div>
                        </div>

                        {/* Product Info Section */}
                        <div className="p-6 md:p-8">
                            <div className="flex items-center mb-2">
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {product.category}
                                </span>

                            </div>

                            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>


                            {/* Description */}
                            <div className="border-t border-b py-4 my-4">
                                <h2 className="text-xl font-semibold mb-2">Description</h2>
                                <p className="text-gray-700">{product.description}</p>
                            </div>


                        </div>
                    </div>
                </div>


                {relatedProducts.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {relatedProducts.map(item => (
                                <Link key={item.id} href={`/products/${item.id}`}>
                                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative h-48 bg-gray-100">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-contain p-4"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <p className="text-gray-500">No image</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                                                {item.category}
                                            </span>
                                            <h3 className="font-medium text-gray-900">{item.title}</h3>
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
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}