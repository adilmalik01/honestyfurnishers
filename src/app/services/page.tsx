"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Office Furnishers",
    description: "Complete office furniture solutions including workstations, conference tables, executive desks, and ergonomic seating for optimal productivity.",
    icon: "/service/office.png",
    features: [
      "Custom workstations and cubicles",
      "Executive office solutions",
      "Conference and meeting room setups",
      "Ergonomic seating options"
    ]
  },
  {
    id: 2,
    title: "Home Furnishers",
    description: "Stylish and functional home furniture for living rooms, bedrooms, and dining areas that combine comfort with aesthetic appeal.",
    icon: "/service/furniture.png",
    features: [
      "Living room furniture sets",
      "Bedroom collections",
      "Dining room essentials",
      "Accent pieces and decor"
    ]
  },
  {
    id: 3,
    title: "Kitchens",
    description: "Modern kitchen design and installation with custom cabinetry, countertops, and storage solutions for efficient cooking spaces.",
    icon: "/service/kitchen.png",
    features: [
      "Custom kitchen cabinetry",
      "Counter and backsplash installation",
      "Kitchen islands and breakfast bars",
      "Storage optimization solutions"
    ]
  },
  {
    id: 4,
    title: "Wardrobes",
    description: "Custom-designed wardrobes with optimized storage solutions to maximize space and organization in any bedroom.",
    icon: "/service/wardrobe.png",
    features: [
      "Walk-in closet designs",
      "Sliding door wardrobes",
      "Custom storage compartments",
      "Lighting and accessory options"
    ]
  },
  {
    id: 5,
    title: "Doors",
    description: "Personalized furniture designs tailored to your specific requirements, style preferences, and space constraints.",
    icon: "/service/doors.png",
    features: [
      "Interior and exterior doors",
      "Custom design options",
      "Various materials and finishes",
      "Secure locking mechanisms"
    ]
  },
  {
    id: 6,
    title: "Flooring",
    description: "Professional furniture assembly and installation services by trained technicians ensuring proper setup and functionality.",
    icon: "/service/flooring.png",
    features: [
      "Hardwood and engineered wood",
      "Laminate and vinyl options",
      "Tile and stone installation",
      "Eco-friendly flooring solutions"
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServiceCard = ({ title, description, icon, features }: {
  title: string,
  description: string,
  icon: string,
  features: string[]
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={icon}
            width={120}
            height={120}
            className="w-24 h-24 object-contain"
            alt={title}
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 mr-2 mt-1 bg-green-100 text-green-600 rounded-full">
                <Check className="w-3 h-3" />
              </span>
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <motion.button
          className="flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
          whileHover={{ x: 5 }}
        >
          Learn more
          <ArrowRight className="ml-1 w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServiceHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-green-100 transform -skew-x-12 -translate-x-1/2 opacity-50" />
        <div className="absolute right-0 bottom-0 h-full w-1/3 bg-blue-100 transform skew-x-12 translate-x-1/2 opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Professional Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            We provide comprehensive furniture and interior solutions tailored to transform your spaces into functional and beautiful environments.
          </p>
          <motion.div
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your needs, preferences, and budget to understand your vision."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team creates detailed designs and plans tailored to your requirements."
    },
    {
      number: "03",
      title: "Production",
      description: "We craft your furniture using quality materials and expert craftsmanship."
    },
    {
      number: "04",
      title: "Installation",
      description: "Our professional team handles delivery and installation with precision."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we ensure a seamless experience with our proven process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "The quality of furniture and attention to detail exceeded our expectations. Our office has never looked better.",
      name: "John Smith",
      role: "CEO, TechCorp"
    },
    {
      text: "From design to installation, their team was professional and delivered exactly what we needed for our home.",
      name: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      text: "The kitchen renovation transformed our space. We love the functionality and modern design they created.",
      name: "Michael Chen",
      role: "Restaurant Owner"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6"> {testimonial.text}</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Comprehensive Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end solutions for all your furniture and interior needs, combining functionality with aesthetic appeal
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.a
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200 focus:outline-none inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
            >
              Request a Custom Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      <ProcessSection />
      <TestimonialSection />

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you create the perfect environment for your home or office.
          </p>
          <motion.button
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Page;