import React from 'react';

// This is a single, self-contained Next.js component for the footer.
// It uses Tailwind CSS for all styling to ensure a modern and responsive design.
// The component is designed to be easily integrated into any Next.js application.

const Footer = () => {
  // A simple data structure to represent the footer links.
  const sections = [
    {
      links: [
        { name: 'Home', url: 'https://github.com/Buildeployship?tab=repositories'},
        { name: 'Projects', url: '/projects'},
        'About',
        'Contact',
        'GitHub',
      ]
    },
  ];

  return (
    <footer className="text-white font-sans">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-gray-400 font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => {
                  if (typeof link === 'string') {
                    return (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-200 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  } else if (typeof link === 'object' && link !== null && link.name && link.url) {
                    return (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-gray-200 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="mt-16 mb-8 border-t border-gray-800"></div>

        {/* Social and Legal Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-400">
            {/* These are placeholder SVGs for the social media icons */}
            <a href="https://github.com/Buildeployship?tab=repositories" className="hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M11 7h2v10h-2V7z" />
                <path d="M7 11h10v2H7v-2z" />
              </svg>
            </a>
            <a href="https://github.com/Buildeployship?tab=repositories" className="hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M11 7h2v10h-2V7z" />
                <path d="M7 11h10v2H7v-2z" />
              </svg>
            </a>
            <a href="https://github.com/Buildeployship?tab=repositories" className="hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M11 7h2v10h-2V7z" />
                <path d="M7 11h10v2H7v-2z" />
              </svg>
            </a>
          </div>

          {/* Legal and Other Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left text-sm text-gray-400">
            <span className="whitespace-nowrap">© 2025 Buildeployship</span>
            <span className="whitespace-nowrap">All Rights Reserved</span>
            {/* <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
