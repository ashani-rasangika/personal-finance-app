import React from "react";

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
              {["About Us", "Our Mission", "Team", "Blog"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
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
              {["Expense Tracker", "Budget Templates", "Investment Tips", "Help Center"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
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
              {["Privacy Policy", "Security", "Terms of Service"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
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
              {["Contact Support", "Community Forum", "Newsletter", "Feedback"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Finguard™
            </a>
            . Empowering your financial freedom.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { label: "LinkedIn", svgPath: "M16 8a6 6 0 11-12 0..." },
              { label: "Facebook", svgPath: "M6.135 3H8V0H6.135..." },
              { label: "Twitter", svgPath: "M20 1.892a8.178 8.178..." },
              { label: "GitHub", svgPath: "M10 .333A9.911 9.911..." },
            ].map(({ label, svgPath }, index) => (
              <a
                key={index}
                href="#"
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
