import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                Discover the latest trends, insights, and tutorials in AI and IT on our blog. Stay ahead in the tech world with us!
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: contact@techinsights.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Tech Lane, Innovation City, AI 56789</li>
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/usama.adnan.733/"
                  target="_blank"
                  className="hover:text-primary transition"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </Link>
                {/* Twitter */}
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-primary transition"
                  rel="noreferrer"
                >
                  <FaTwitter/>
                </Link>
                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-primary transition"
                  rel="noreferrer"
                >
                 <FaLinkedinIn/>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            © 2024 Osama&#039;s Blog. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  