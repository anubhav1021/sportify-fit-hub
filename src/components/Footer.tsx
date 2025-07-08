
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const productCategories = [
    "Gym Equipment",
    "Badminton",
    "Cricket",
    "Football",
    "Accessories"
  ];

  const services = [
    "Racket Stringing",
    "Equipment Repair",
    "Custom Grips",
    "Personal Training"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SZ</span>
              </div>
              <span className="text-xl font-bold">SportZone</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in sports and fitness. We provide quality equipment 
              and expert services to help you achieve your athletic goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Offerings</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-200 mb-2">Products</h4>
                <ul className="space-y-1">
                  {productCategories.slice(0, 3).map((category) => (
                    <li key={category}>
                      <span className="text-gray-300 text-sm">{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-200 mb-2">Services</h4>
                <ul className="space-y-1">
                  {services.slice(0, 3).map((service) => (
                    <li key={service}>
                      <span className="text-gray-300 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Sports Street, Fitness District, Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@sportzone.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sun: 10:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SportZone. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
