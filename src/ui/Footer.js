import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const sections = [
    {
      links: [
        { name: 'Home', url: '/' },
        { name: 'GitHub', url: 'https://github.com/Buildeployship?tab=repositories' },
        { name: 'Projects', url: '/projects' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
      ],
    },
  ];

  return (
    <footer className="text-white font-sans">
      <div className="container mx-auto px-4 py-16">
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

        <div className="mt-16 mb-8 border-t border-gray-300 dark:border-gray-800">
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">

          <div className="flex justify-between md:justify-start space-x-6 text-2xl text-gray-400">
            <Link
              href="./"
              className="hover:text-white transition-colors duration-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="GitHub"
                width="24"
                height="24"
                className="dark:invert"
              />
            </Link>

            <Link
              href="https://github.com/Buildeployship?tab=repositories"
              className="hover:text-white transition-colors duration-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width="24"
                height="24"
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Right: legal */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left text-sm text-gray-400">
            <span className="whitespace-nowrap">© 2025 Buildeployship</span>
            <span className="whitespace-nowrap">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
