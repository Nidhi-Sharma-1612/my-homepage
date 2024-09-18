import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="content max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="logo flex items-center mb-6 md:mb-0">
            <img
              src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
              alt="Gelato logo"
              className="object-contain w-36"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text */}
            <p className="mb-3 lg:mb-0 text-center lg:text-left mr-2">
              Find Gelato on:
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-between space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gelato/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram link"
              >
                <button className="bg-black  text-white p-2 rounded-full hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 20 21"
                  >
                    <path
                      d="M10.0022 5.53241C7.16453 5.53241 4.87563 7.82182 4.87563 10.6602C4.87563 13.4985 7.16453 15.7879 10.0022 15.7879C12.8399 15.7879 15.1288 13.4985 15.1288 10.6602C15.1288 7.82182 12.8399 5.53241 10.0022 5.53241ZM10.0022 13.9939C8.16843 13.9939 6.66927 12.4988 6.66927 10.6602C6.66927 8.82149 8.16397 7.32645 10.0022 7.32645C11.8405 7.32645 13.3352 8.82149 13.3352 10.6602C13.3352 12.4988 11.836 13.9939 10.0022 13.9939ZM16.5343 5.32266C16.5343 5.98761 15.9989 6.51869 15.3385 6.51869C14.6737 6.51869 14.1428 5.98315 14.1428 5.32266C14.1428 4.66216 14.6782 4.12663 15.3385 4.12663C15.9989 4.12663 16.5343 4.66216 16.5343 5.32266ZM19.9297 6.53654C19.8539 4.93439 19.488 3.51523 18.3146 2.34598C17.1456 1.17672 15.7267 0.810775 14.1249 0.730445C12.4741 0.636727 7.52593 0.636727 5.87507 0.730445C4.27775 0.806313 2.8589 1.17226 1.68544 2.34151C0.511991 3.51076 0.150586 4.92993 0.0702733 6.53207C-0.0234244 8.18331 -0.0234244 13.1325 0.0702733 14.7838C0.146124 16.3859 0.511991 17.8051 1.68544 18.9743C2.8589 20.1436 4.27328 20.5095 5.87507 20.5899C7.52593 20.6836 12.4741 20.6836 14.1249 20.5899C15.7267 20.514 17.1456 20.1481 18.3146 18.9743C19.4835 17.8051 19.8494 16.3859 19.9297 14.7838C20.0234 13.1325 20.0234 8.18777 19.9297 6.53654ZM17.797 16.5555C17.449 17.4302 16.7752 18.1041 15.8963 18.4567C14.58 18.9788 11.4568 18.8583 10.0022 18.8583C8.54769 18.8583 5.41997 18.9743 4.1082 18.4567C3.23369 18.1086 2.55996 17.4347 2.20747 16.5555C1.68544 15.239 1.80591 12.115 1.80591 10.6602C1.80591 9.20529 1.68991 6.07687 2.20747 4.76481C2.55549 3.8901 3.22922 3.21622 4.1082 2.86366C5.42443 2.34151 8.54769 2.46201 10.0022 2.46201C11.4568 2.46201 14.5845 2.34598 15.8963 2.86366C16.7708 3.21176 17.4445 3.88564 17.797 4.76481C18.319 6.08133 18.1985 9.20529 18.1985 10.6602C18.1985 12.115 18.319 15.2434 17.797 16.5555Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/gelatoconnects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook link"
              >
                <button className="bg-black  text-white p-2 rounded-full hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 21"
                  >
                    <path
                      d="M12.3447 11.9102L12.8632 8.29062H9.62096V5.9418C9.62096 4.95156 10.0739 3.98633 11.526 3.98633H13V0.904688C13 0.904688 11.6624 0.660156 10.3835 0.660156C7.71337 0.660156 5.96806 2.39375 5.96806 5.53203V8.29062H3V11.9102H5.96806V20.6602H9.62096V11.9102H12.3447Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/gelato/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin link"
              >
                <button className="bg-black  text-white p-2 rounded-full hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 18 19"
                  >
                    <path
                      d="M4.02911 18.6602H0.297321V6.64248H4.02911V18.6602ZM2.16121 5.00315C0.967902 5.00315 0 4.01474 0 2.82141C8.54116e-09 2.24821 0.227698 1.69849 0.633002 1.29317C1.03831 0.887859 1.58802 0.660156 2.16121 0.660156C2.73439 0.660156 3.2841 0.887859 3.68941 1.29317C4.09471 1.69849 4.32241 2.24821 4.32241 2.82141C4.32241 4.01474 3.35411 5.00315 2.16121 5.00315ZM17.996 18.6602H14.2722V12.81C14.2722 11.4158 14.2441 9.62781 12.332 9.62781C10.3918 9.62781 10.0945 11.1426 10.0945 12.7096V18.6602H6.3667V6.64248H9.9458V8.2818H9.99804C10.4963 7.33758 11.7133 6.34113 13.5289 6.34113C17.3057 6.34113 18 8.82824 18 12.0587V18.6602H17.996Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/c/GelatoConnects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube link"
              >
                <button className="bg-black  text-white p-2 rounded-full hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 22 17"
                  >
                    <path
                      d="M21.5403 3.16361C21.2873 2.1782 20.5418 1.40211 19.5953 1.13874C17.8796 0.660156 11 0.660156 11 0.660156C11 0.660156 4.12044 0.660156 2.40474 1.13874C1.45821 1.40216 0.71273 2.1782 0.459711 3.16361C0 4.94974 0 8.67632 0 8.67632C0 8.67632 0 12.4029 0.459711 14.189C0.71273 15.1744 1.45821 15.9182 2.40474 16.1816C4.12044 16.6602 11 16.6602 11 16.6602C11 16.6602 17.8796 16.6602 19.5953 16.1816C20.5418 15.9182 21.2873 15.1744 21.5403 14.189C22 12.4029 22 8.67632 22 8.67632C22 8.67632 22 4.94974 21.5403 3.16361ZM8.74998 12.0598V5.29286L14.5 8.67641L8.74998 12.0598Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Column 1: Company Info */}
          <div>
            <p className="text-sm text-gray-400 mb-4">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </p>
            <a
              href="https://www.gelato.com/in/api/login"
              className="inline-block bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              Get started
            </a>
            <div className="mt-5">
              <span className="text-gray-400">Get the app:</span>
              <div className="flex space-x-3 mt-2">
                <img
                  src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"
                  alt="App Store"
                  className="w-24"
                />
                <img
                  src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"
                  alt="Google Play"
                  className="w-24"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Print on Demand Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Print on demand</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/in/print-on-demand"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  What is print on demand?
                </a>
              </li>
              <li>
                <a
                  href="/in/custom"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Product catalog
                </a>
              </li>
              <li>
                <a
                  href="/in/shipping-and-delivery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping and delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Integrations */}
          <div>
            <h4 className="font-semibold text-white mb-3">Integrations</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/in/print-on-demand/shopify"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shopify
                </a>
              </li>
              <li>
                <a
                  href="/in/print-on-demand/etsy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Etsy
                </a>
              </li>
              <li>
                <a
                  href="/in/print-on-demand/woocommerce"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WooCommerce
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/in/connect"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GelatoConnect
                </a>
              </li>
              <li>
                <a
                  href="/in/about-gelato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Gelato
                </a>
              </li>
              <li>
                <a
                  href="/in/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy & Language Selector */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          {/* Privacy Links */}
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a
              href="/in/contact"
              className="hover:text-white transition-colors"
            >
              Contact us
            </a>
            <a href="/in/legal" className="hover:text-white transition-colors">
              Legal
            </a>
            <a
              href="/in/legal/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="/in/legal/cookie"
              className="hover:text-white transition-colors"
            >
              Cookie policy
            </a>
            <a
              href="/in/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>

          {/* Language Selector */}
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-400 p-2 rounded-md">
              <option value="en-US">English</option>
              <option value="ca">English (Canada)</option>
              <option value="uk">English (United Kingdom)</option>
              <option value="au">English (Australia)</option>
              {/* Add more language options */}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
