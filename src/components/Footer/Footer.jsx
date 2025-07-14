import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

      
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">Aura</h3>
          <p className="text-sm leading-relaxed mb-4">
            Discover your signature scent with our collection of luxury perfumes crafted for the modern individual.
          </p>
          <div className="flex space-x-4">
          
            <a href="#" className="text-gray-400 red-200" aria-label="Facebook">
              
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.502 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22h7.493c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 -200" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c1.267.765 2.628 1.166 4.09 1.166 4.7 0 8.644-3.944 8.644-8.644 0-.131-.013-.261-.027-.391A6.992 6.992 0 0023 6.953a7.35 7.35 0 01-2.083.565 3.67 3.67 0 001.606-2.008 7.347 7.347 0 01-2.327.892 3.666 3.666 0 00-6.265 3.35c-3.05-.152-5.753-1.611-7.567-3.834a3.673 3.673 0 00-.49 1.84c0 1.27.646 2.392 1.636 3.053a3.616 3.616 0 01-1.657-.457v.047c0 1.777 1.266 3.257 2.946 3.593a3.633 3.633 0 01-1.652.063 3.669 3.669 0 003.424 2.559c-1.353 1.06-3.057 1.69-4.904 1.69-.319 0-.635-.018-.949-.056a10.283 10.283 0 005.617 1.644" /></svg>
            </a>
            <a href="#" className="text-gray-400 -200" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.332 3.25H8.668C6.962 5.25 5.25 6.962 5.25 8.668v6.664c0 1.706 1.712 3.418 3.418 3.418h6.664c1.706 0 3.418-1.712 3.418-3.418V8.668c0-1.706-1.712-3.418-3.418-3.418zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-6.25-1.5c.69 0 1.25-.56 1.25-1.25S6.44 6.5 5.75 6.5s-1.25.56-1.25 1.25.56 1.25 1.25 1.25z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 -200" aria-label="Pinterest">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878.528.082.684-.216.684-.482 0-.236-.011-1.042-.016-1.821-2.906.63-3.518-1.25-3.518-1.25-.47-.946-1.144-1.199-.08-1.223.874-.016 1.332.802 1.332.802.775 1.328 2.035.947 2.534.726.078-.567.302-.947.548-1.167-1.928-.219-3.947-.965-3.947-4.304 0-.949.34-1.723.902-2.327-.091-.219-.39-.998.086-2.477 0 0 .736-.233 2.404.914.697-.193 1.434-.29 2.168-.29.734 0 1.47.097 2.168.29 1.668-1.147 2.404-.914 2.404-.914.476 1.479.177 2.258.087 2.477.563.604.902 1.378.902 2.327 0 3.348-2.022 4.08-3.955 4.3C14.747 18.067 15.01 18.599 15.01 19.342c0 1.165-.01 2.102-.01 2.385 0 .267.164.57.688.48C18.344 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Shop All</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Collections</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">New Arrivals</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Bestsellers</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-black mb-4">Customer Care</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Shipping Info</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">Returns &amp; Exchanges</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 ">FAQ</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-black mb-4">Stay Connected</h4>
          <p className="text-sm leading-relaxed mb-4">
            Subscribe to receive updates on new collections and exclusive offers.
          </p>
            <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-l-md w-full bg-white border border-gray-600 text-black placeholder-gray-500 "
              aria-label="Email for newsletter subscription"
            />
            <button
              className="bg-white text-black border border-black p-3 rounded-r-md flex items-center justify-center transition-colors duration-200 hover:bg-gray-200"
              aria-label="Subscribe"
            >
             
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p className="mb-2">&copy; 2025 Aura Perfumes. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="-200">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;