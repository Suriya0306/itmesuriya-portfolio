// @ts-nocheck
import { Heart, ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/suriya0306', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Suriya0306', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/NSURIYA_03', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/toxic_suriya_11', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="font-heading font-bold text-2xl text-white hover:text-blue-400 transition-colors inline-block mb-4"
            >
              Portfolio<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Creating beautiful, user-centered designs that solve real problems.
              Let's work together to bring your vision to life.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-sm text-gray-500">Email</span>
                <a
                  href="mailto:nsuriya310@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  nsuriya310@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Phone</span>
                <a
                  href="tel:+918072426049"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 8072426049
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Location</span>
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} Portfolio. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Suriya N
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Back to top
              <span className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
