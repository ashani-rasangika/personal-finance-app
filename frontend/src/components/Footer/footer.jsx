import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-950 dark:bg-blue-950 text-gray-400">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Finguard
            </h2>
            <ul className="font-medium">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Mission", href: "/mission" },
                { name: "Team", href: "/team" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <li className="mb-4" key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Resources
            </h2>
            <ul className="font-medium">
              {[
                { name: "Expense Tracker", href: "/tracker" },
                { name: "Budget Templates", href: "/budget-templates" },
                { name: "Investment Tips", href: "/investment-tips" },
                { name: "Help Center", href: "/help" },
              ].map((item) => (
                <li className="mb-4" key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="font-medium">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Security", href: "/security" },
                { name: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li className="mb-4" key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Connect
            </h2>
            <ul className="font-medium">
              {[
                { name: "Contact Support", href: "/contact" },
                { name: "Community Forum", href: "/forum" },
                { name: "Newsletter", href: "/newsletter" },
                { name: "Feedback", href: "/feedback" },
              ].map((item) => (
                <li className="mb-4" key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              Finguard™
            </Link>
            . Empowering your financial freedom.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                svgPath: "M16 8a6 6 0 11-12 0...", // Replace with actual path
              },
              {
                label: "Facebook",
                href: "https://facebook.com",
                svgPath: "M6.135 3H8V0H6.135...", // Replace with actual path
              },
              {
                label: "Twitter",
                href: "https://twitter.com",
                svgPath: "M20 1.892a8.178 8.178...", // Replace with actual path
              },
              {
                label: "GitHub",
                href: "https://github.com",
                svgPath: "M10 .333A9.911 9.911...", // Replace with actual path
              },
            ].map(({ label, href, svgPath }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d={svgPath} clipRule="evenodd" />
                </svg>
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
