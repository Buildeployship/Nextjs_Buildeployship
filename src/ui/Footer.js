import React from 'react';
import Link from 'next/link';

const Footer = () => {

  const socialIcons = [
    { name: 'LinkedIn', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", url: 'https://www.linkedin.com/in/buildeployship/' },
    { name: 'GitHub', path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.088-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.778.418-1.305.762-1.606-2.665-.3-5.466-1.33-5.466-5.931 0-1.31.465-2.385 1.233-3.22-.124-.3-.532-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.645 1.653.238 2.876.118 3.176.77.835 1.232 1.91 1.232 3.22 0 4.61-2.801 5.629-5.476 5.92-.42.365-.819 1.092-.819 2.203v3.256c0 .32.217.691.825.576 4.766-1.59 8.204-6.088 8.204-11.385 0-6.627-5.373-12-12-12z", url: 'https://github.com/Buildeployship?tab=repositories' },
  ];

  return (
    <footer className="py-12 px-4 md:px-12">
      <div className="container mx-auto">
        
        {/* Top section with Logo and Columns */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Main sections for links and contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
            
            {/* Left Column: Links */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
                </li>
                <li>
                  <a href="/projects" className="hover:text-white transition-colors duration-200">Projects</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">GitHub</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">Resume/CV</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">About</a>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <h3 className="font-bold text-lg mb-2 text-white">Contact</h3>
              <form className="flex mt-2">
                <input
                  type="email"
                  placeholder="user@gmail.com"
                  className="bg-[#1a1a1f] text-gray-200 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-[#2a2a2f] text-gray-200 rounded-r-md px-4 py-2 hover:bg-[#3a3a3f] transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </div>
            
          </div>
        </div>
        
        {/* Horizontal divider line */}
        <hr className="my-8 md:my-12 border-t border-gray-700" />
        
        {/* Bottom section with Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
          <p className="order-2 md:order-1">2025 © Copyright | Jordan Taylor | GNU AGPLv3 License</p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {socialIcons.map((icon) => (
              <a key={icon.name} href={icon.url} className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
