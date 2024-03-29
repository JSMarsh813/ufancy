import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.webp";
import feature4 from "../assets/images/feature4.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import Camera from "../assets/icons/camera";

export const About = () => {
  return (
    <section
      className="w-full bg-customDarkBg2  mb-8  sm:mb-16  lg:pt-10  xl:pt-0  "
      id="aboutus"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-28 md:mt-12 mb-8 text-4xl lg:text-5xl text-gold custom-block-big-title">
                About Us
              </h2>
              <p className="mb-10 pt-2 md:pt-6 text-white leading-loose">
                U fancy has provided quality services to clients by providing
                them with the professional care they deserve. Get in touch today
                to learn more about our Photo Booth Rental Services.
              </p>

              <p className="mb-10 text-white leading-loose">
                We serve counties near you!{" "}
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <Camera />
                  <span>Riverside </span>
                </li>
                <li className="mb-4 flex">
                  <Camera />
                  <span>San Bernardino</span>
                </li>
                <li className="mb-4 flex">
                  <Camera />
                  <span> Ventura</span>
                </li>
                <li className="mb-4 flex">
                  <Camera />
                  <span> Los Angeles </span>
                </li>
                <li className="mb-4 flex">
                  <Camera />
                  <span> San Diego </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  loading="lazy"
                  src={feature1.src}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2.src}
                  loading="lazy"
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  loading="lazy"
                  src={feature3.src}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  loading="lazy"
                  src={feature4.src}
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
