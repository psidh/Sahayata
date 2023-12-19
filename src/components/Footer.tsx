import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// Define the FooterProps interface
interface FooterProps {
  sections?: {
    title: string;
    links: { text: string; url: string }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ sections = [] }) => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto w-full py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
        {/* Logo and About Section */}
        <div className='p-4 md:p-0'>
          <h2 className="text-4xl font-bold py-2">Spruce-Dev</h2>
          <p className="text-blue-100 py-2">
          Your organization's mission or a brief description can go here.
          </p>
          <div className="flex mt-4 space-x-4 py-2">
            <a title='Twitter' href="https://twitter.com/p-s1dharth" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-400" />
            </a>
            <a title='Instagram' href="https://instagram.com/p-s1dharth" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-blue-600" />
            </a>
            <a title='LinkedIn' href="https://linkedin.com/in/p-sidharth" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-500" />
            </a>
            <a title='Github' href="https://github.com/psidh" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-gray-600" />
            </a>
          </div>
        </div>

        {/* Sections */}
        {sections &&
          sections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.url} className="hover:text-blue-400">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <div className="py-4 border-t border-gray-100 ">
        <p className="text-sm text-gray-100 text-center">
          &copy; {new Date().getFullYear()} Spruce-Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
