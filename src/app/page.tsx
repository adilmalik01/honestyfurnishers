"use client"
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/featureProduct';
import ServicesSection from '@/components/ServiceSection';

export default function Page() {
  return (
    <>
      <HeroSection />

      <AboutSection />
      <FeaturedProducts />
      <ServicesSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don t just take our word for it - hear from our satisfied customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  
                </div>
                <div>
                  <h4 className="font-semibold">Ahmed Raza</h4>
                  <p className="text-sm text-gray-500">Operations Manager, Karachi Interiors</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="..." />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                Honesty Furnishers ne humein modern aur functional office interior design provide kiya. Unki team ne deadlines meet ki aur quality kaafi achi thi. Humara office ka look hi badal gaya
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                 
                </div>
                <div>
                  <h4 className="font-semibold">Fatima Zahra</h4>
                  <p className="text-sm text-gray-500">Lahore Resident</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="..." />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                Unka custom furniture bilkul mere bedroom ke size aur theme ke mutabiq bana. Material ki quality aur finishing ne mujhe impress kar diya. Bahut he professional service thi
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                 
                </div>
                <div>
                  <h4 className="font-semibold">Bilal Khan</h4>
                  <p className="text-sm text-gray-500">Owner, Peshawar Tikka House</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="..." />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                Restaurant ke liye jo furniture banwaya tha us ne ambiance hi change kar diya. Customers se positive feedback mila aur furniture kaafi arsay tak durable bhi lagta hai.
              </p>
            </div>
          </div>

         
        </div>
      </section>


      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Honesty Furnishers?</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We combine quality craftsmanship with exceptional service to deliver furniture solutions that exceed expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-300">
                All our products are made from premium materials and undergo strict quality control.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-300">
                We respect your time and ensure prompt delivery and installation services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Team</h3>
              <p className="text-gray-300">
                Our experienced team provides expert advice and flawless execution.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-300">
                Your satisfaction is our priority, with after-sales service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and let our experts help you find the perfect furniture solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.125rem;
          color: #4b5563;
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 3rem auto;
        }
        
        .card {
          background-color: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-4px);
        }
        
        .btn-primary {
          display: inline-block;
          background-color: #16a34a;
          color: white;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: #15803d;
        }
        
        .btn-secondary {
          display: inline-block;
          background-color: transparent;
          color: #16a34a;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.375rem;
          border: 2px solid #16a34a;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background-color: #16a34a;
          color: white;
        }
      `}</style>
    </>
  );
}