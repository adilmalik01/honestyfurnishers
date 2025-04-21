"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const servicesData = [
    {
        id: 1,
        title: "Office Furnishers",
        description: "Complete office furniture solutions including workstations, conference tables, executive desks, and ergonomic seating for optimal productivity.",
        icon: "/service/office.png"
    },
    {
        id: 2,
        title: "Home Furnishers",
        description: "Stylish and functional home furniture for living rooms, bedrooms, and dining areas that combine comfort with aesthetic appeal.",
        icon: "/service/furniture.png"
    },
    {
        id: 3,
        title: "Kitchens",
        description: "Modern kitchen design and installation with custom cabinetry, countertops, and storage solutions for efficient cooking spaces.",
        icon: "/service/kitchen.png"
    },
    {
        id: 4,
        title: "Wardrobes",
        description: "Custom-designed wardrobes with optimized storage solutions to maximize space and organization in any bedroom.",
        icon: "/service/wardrobe.png"
    },
    {
        id: 5,
        title: "Doors",
        description: "Personalized furniture designs tailored to your specific requirements, style preferences, and space constraints.",
        icon: "/service/doors.png"
    },
    {
        id: 6,
        title: "Flooring",
        description: "Professional furniture assembly and installation services by trained technicians ensuring proper setup and functionality.",
        icon: "/service/flooring.png"
    }
];

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: any }) => {
    return (
        <motion.div
            className="card bg-white shadow-md rounded-lg p-8"
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
            }}
        >
            <motion.div
                className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 }
                }}
            >
                <img src={icon} className="w-8 h-8 text-green-600" alt="" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    We provide comprehensive furniture solutions tailored to your specific needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200 focus:outline-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        href="/services">
                        Learn More About Our Services
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;