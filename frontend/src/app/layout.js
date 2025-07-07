import './globals.css'; // Tailwind/global styles
import Navbar from '../components/Navbar/navbar.jsx'; // ✅ Import Navbar
import Footer from '../components/Footer/footer.jsx'; // ✅ Import Footer
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FinGuard',
  description: 'Manage your money smartly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-gray-900">
        <Navbar />
        <main className="m-0 p-0 min-h-screen">{children}</main>
        <Footer /> {/* ✅ Now inside body */}
      </body>
    </html>
  );
}
