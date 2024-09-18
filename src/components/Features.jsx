import React from "react";

const Features = () => {
  return (
    <div className="w-full mt-3 md:mt-5 lg:mt-16 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">Why choose Gelato</h2>
      </div>

      {/* Feature Content */}
      <div className="flex flex-wrap-reverse md:flex-row-reverse w-full justify-center items-center text-center md:text-left">
        {/* Feature Text */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center items-center md:items-start">
          <h4 className="text-lg font-semibold">
            ▻ World's largest print-on-demand network
          </h4>
          <p className="mb-4">
            140+ print partners in 32 countries. Gelato is a truly global
            service.
          </p>

          <h4 className="text-lg font-semibold">
            ▻ Sell globally, produce locally
          </h4>
          <p className="mb-4">
            Your products are produced close to your customers, wherever they
            are.
          </p>

          <h4 className="text-lg font-semibold">▻ 100% free editing tools</h4>
          <p className="mb-4">
            Create your custom products using our suite of{" "}
            <a href="/design-maker" className="text-blue-600 hover:underline">
              free tools.
            </a>
          </p>

          <h4 className="text-lg font-semibold">▻ 60+ logistics partners</h4>
          <p className="mb-4">
            Our global network of logistics partners ensures your products are
            delivered fast.
          </p>

          <h4 className="text-lg font-semibold">▻ High-quality products</h4>
          <p className="mb-4">
            We partner with the world's leading brands to ensure the best
            quality products.
          </p>

          <h4 className="text-lg font-semibold">
            ▻ Endless creativity with Shutterstock Images
          </h4>
          <p className="mb-4">
            Access millions of images and graphics to create unique products you
            can sell in your store.
          </p>

          <h4 className="text-lg font-semibold">
            ▻ 1-click integration to the leading ecommerce platforms
          </h4>
          <p>
            Connect your store to Gelato using{" "}
            <a href="/integrations" className="text-blue-600 hover:underline">
              our integrations
            </a>{" "}
            with{" "}
            <a
              href="/print-on-demand/shopify"
              className="text-blue-600 hover:underline"
            >
              Shopify
            </a>
            ,{" "}
            <a
              href="/print-on-demand/etsy"
              className="text-blue-600 hover:underline"
            >
              Etsy
            </a>{" "}
            and more.
          </p>
        </div>

        {/* Feature Image */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex justify-center">
          <img
            src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/"
            alt="platinum"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Additional Section 1 */}
      <div className="flex flex-wrap md:flex-row mt-8 w-full justify-center items-center text-center md:text-left">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center items-center md:items-start">
          <p className="text-sm mb-2">For print on demand sellers</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Accelerate business growth with innovative design tools and apps
          </h2>
          <p className="text-lg">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </p>
          <div className="mt-3">
            <a
              href="/in/tools-and-apps"
              className="text-white bg-black py-2 px-4 rounded hover:bg-gray-800"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex justify-center">
          <img
            src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
            alt="hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Additional Section 2 */}
      <div className="flex flex-wrap-reverse md:flex-row-reverse mt-8 w-full justify-center items-center text-center md:text-left">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center items-center md:items-start">
          <p className="text-sm mb-2">For print producers</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GelatoConnect</h2>
          <p className="text-lg">
            Elevate efficiency, cut costs, and seamlessly automate with our
            all-in-one software solution for the print industry.
          </p>
          <div className="mt-3">
            <a
              href="/in/connect"
              className="text-white bg-black py-2 px-4 rounded hover:bg-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex justify-center">
          <img
            src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
            alt="connect"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
