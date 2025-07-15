import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 dark:bg-blue-950">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/** Column 1 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["About", "Careers", "Brand Center", "Blog"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/** Column 2 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Discord Server", "Twitter", "Facebook", "Contact Us"].map(
                (item) => (
                  <li className="mb-4" key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/** Column 3 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Privacy Policy", "Licensing", "Terms & Conditions"].map(
                (item) => (
                  <li className="mb-4" key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/** Column 4 */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["iOS", "Android", "Windows", "MacOS"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/** Bottom bar */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025{" "}
            <a href="" className="hover:underline">
              Finguard™
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { label: "Facebook page", svgPath: "M6.135 3H8V0H6.135..." },
              {
                label: "Discord community",
                svgPath: "M16.942 1.556a16.3 16.3...",
              },
              { label: "Twitter page", svgPath: "M20 1.892a8.178 8.178..." },
              { label: "GitHub account", svgPath: "M10 .333A9.911 9.911..." },
              { label: "Dribbble account", svgPath: "M10 0a10 10 0 1 0..." },
            ].map(({ label, svgPath }, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
