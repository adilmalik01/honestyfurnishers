import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Honesty Furnishers</h3>
            <p className="text-gray-300 mb-4">
              Premium furniture solutions for homes and offices. Quality that speaks for itself.
            </p>
            <p className="text-gray-300 mb-2">Established: 2000</p>
            <p className="text-gray-300 mb-4">
              Proprietor: Muhammad Hussain Khatri (DAE Wood Working)
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.11 8.292l-4.12 2.47a.5.5 0 0 0-.25.43v2.5a.5.5 0 0 0 .75.43l4.12-2.47a.5.5 0 0 0 0-.86l-4.12-2.47a.5.5 0 0 0-.75.43v2.5a.5.5 0 0 0 .25.43l4.12 2.47a.5.5 0 0 0 .75-.43v-2.5a.5.5 0 0 0-.25-.43z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162,0,1,0,0,12.324 6.162 6.162,0,0,0,0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=office" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Office Furniture
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home Furniture
                </Link>
              </li>
              <li>
                <Link href="/products?category=kitchen" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Kitchens
                </Link>
              </li>
              <li>
                <Link href="/products?category=wardrobe" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/products?category=door" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Doors
                </Link>
              </li>
              <li>
                <Link href="/products?category=flooring" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Flooring
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Plot No. 3, Street 6, Sector-C, Punjab Road, Manzoor Colony, Karachi – 75460
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">
                  Cell: 0300-2199196<br />
                  Office: 021-35804390
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">
                  honestyfur@yahoo.com<br />
                  info@honestyfurnishers.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-gray-300">
                  www.honestyfurnishers.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2 text-gray-300">Tax Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <p>NTN. NO.: 1308366-0</p>
            <p>SST NO.: S1308366-0</p>
            <p>GST NO.: 11-00-9403-066-28</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2 text-gray-300">Staff Information</h4>
          <p className="text-gray-300">QUALIFIED STAFF: Under supervised of Associate Engineer in Wood Working Technology and experienced workers.</p>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Honesty Furnishers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}