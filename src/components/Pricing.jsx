import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div>
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <section className="w-screen flex justify-center bg-white relative">
        <div
          className="absolute -top-16"
          id="pricing"
        />

        <div className="pb-20 pt-12 bg-white  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <span className="custom-block-subtitle text-black">
                  Find Your Perfect Fit
                </span>
                <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-black">
                  Choose your best plan
                </h2>
                <p className="mb-6 text-black">All our plans include:</p>
                <ul className="text-black">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left">Unlimited Photo Sessions</span>
                  </li>

                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left">
                      Fun Props included: Signs, Glasses, Mustaches etc.
                    </span>
                  </li>

                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left">
                      {" "}
                      Friendly Photo Booth Attendant{" "}
                    </span>
                  </li>

                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left">
                      Printing on site: Each person in the photo booth gets a
                      print
                    </span>
                  </li>

                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left">Free Setup & Tear Down</span>
                  </li>

                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span className="text-left"> *Travel fees may apply*</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
                <section className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <div className="p-8 bg-customDarkBg2 rounded-3xl">
                    <h3 className="mb-2 text-xl font-bold font-heading text-gold">
                      2 hours
                    </h3>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-5xl font-bold text-white mt-4 mr-2">
                        $275
                      </div>
                    </div>
                  </div>
                </section>

                <section className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <div className="p-8 bg-customDarkBg2  rounded-3xl">
                    <h3 className="mb-2 text-xl font-bold font-heading  text-gold">
                      3 hours
                    </h3>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-5xl font-bold text-white mt-4 mr-2">
                        $325
                      </div>
                    </div>
                  </div>
                </section>

                <section className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <div className="p-8 bg-customDarkBg2  rounded-3xl">
                    <h4 className="mb-2 text-xl font-bold font-heading  text-gold">
                      4 hours
                    </h4>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-5xl font-bold text-white mt-4 mr-2">
                        $375
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="text-center mt-10">
                <span className="block mb-6 text-4xl">
                  Ready to start the party?
                </span>
                <a
                  className="w-64 sm:w-96 h-20 golden-button"
                  href="/contact/"
                >
                  <span className="golden-text">Contact Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </div>
  );
};
