"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'Products', href: '/products' },
    { label: 'Monetization', href: '/monetization' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Admin', href: '/admin' },
    { label: 'Sign Out', href: '/signout' },
  ];

  return (
    <nav className="#ffffff p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/vecteezy_beautiful-meeting-glyph-vector-icon_17515738.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-white hover:text-gray-300 ${
                    pathname === item.href ? 'font-bold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
