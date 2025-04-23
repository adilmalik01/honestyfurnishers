import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div id="about" className="container mx-auto  flex  items-center px-5 h-screen py-10  max-w-full">
      <div className="flex flex-col md:flex-row rounded-lg  overflow-hidden bg-gradient-to-r from-white via-white to-green-400">
        <motion.div 
          className="w-full md:w-1/2 p-6 md:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to Honesty Furnishers
            <motion.span 
              className="block h-1 w-16 bg-green-500 mt-4"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.h1>

          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {['Office furniture', 'Home furniture', "Youngster's furniture", 'Wardrobes', 'Kitchens'].map((category, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </motion.div>

          <motion.p 
            className="text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          >
            Honesty Furnishers has many product categories: Office furniture, Home furniture, youngster&apos;s furniture, Wardrobes, Kitchens, Doors, and Flooring. We tend to cater to the needs of company client furthermore as domestic client and our focus is the satisfaction of our customers.
          </motion.p>

          <motion.p 
            className="text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          >
            Honesty Furnishers cater many transnational and Domestic client. HF offers a wide-range of well designed, functional home furnishing products that reflects <span className="text-green-600 font-semibold">quality & luxuriousness at an affordable value</span>. Established in 2000, the dedicated team of designers conjures up the latest trend and the complementing team of workers does wonders with a piece of wood, conveyance you the simplest quality to embellish your valued places.
          </motion.p>

          <motion.button 
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 p-4 md:p-6 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/luxury-bedroom.jpg" 
                alt="Luxury Bedroom Furniture" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}