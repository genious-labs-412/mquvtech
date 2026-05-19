'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin,  } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaXTwitter} from 'react-icons/fa6';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden px-6 md:px-13 lg:px-22">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="text-white" size={72} />
            </Link>

            <p className="text-white/40">
              A premium creative technology agency delivering advanced software, mobile apps, and digital transformation solutions globally.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: FaXTwitter, href: 'https://x.com/mquvtech' },
                  { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/mquvtech' },
                  { Icon: FaInstagram, href: 'https://www.instagram.com/mquvtech' }
                ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
            {['About Us', 'Services', 'Portfolio', 'Contact'].map(link => {
              // Determine the href: if 'About Us', use '/about', otherwise format normally
              const href = link === 'About Us' 
                ? '/about' 
                : `/${link.toLowerCase().replace(' ', '-')}`;

              return (
                <li key={link}>
                  <Link href={href} className="text-white/40 hover:text-primary">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Mobile Apps', 'Web Development', 'CRM & ERP'].map(service => (
                <li key={service}>
                  <span className="text-white/40">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>

            <div className="space-y-4 text-white/40">
              <p className="flex items-center gap-3"><Mail size={18}/> connect@mquvtech.com</p>
              <p className="flex items-center gap-3"><Phone size={18}/> 8851053251</p>

              <a href="https://maps.app.goo.gl/si1q2EKbgkSbMUFg8" target="_blank" className="flex items-center gap-3 hover:text-primary">
                <MapPin size={18}/> Greater Noida, India
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between pt-12 border-t border-white/5 text-white/20 text-sm">
          <p>© {new Date().getFullYear()} MQUV TECH</p>
        </div>

      </div>
    </footer>
  );
}