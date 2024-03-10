import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TailcastLogo } from "../assets/logos/TailcastLogo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "About Us", href: "/#aboutus", ariaLabel: "aboutus" },
  { label: "Services", href: "/services", ariaLabel: "services" },
  { label: "Testimonials", href: "/#testimonials", ariaLabel: "testimonials" },
  { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  { label: "Contact", href: "/contact", ariaLabel: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // let btn = document.getElementById("toggleMobileNav");

  // document.addEventListener("keypress", (event) => {
  //   // event.keyCode or event.which  property will have the code of the pressed key
  //   let keyCode = event.keyCode ? event.keyCode : event.which;

  //   // 13 points the enter key
  //   if (keyCode === 13) {
  //     // call click function of the buttonn
  //     btn.click();
  //   }
  // });

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg2  lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl border-b-4 border-b-pink-300">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a
            className="navbar-link"
            href="/#home"
            aria-label="Home"
          >
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <TailcastLogo fill="rgb(255, 215, 0)" />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl fancyFont">
                U Fancy
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                <span className="fancyFont">{label} </span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        ></motion.div>

        <button
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gold rounded-md cursor-pointer hover:bg-pink-400 hover:text-black "
          tabindex="0"
          onClick={() => setIsOpen(!isOpen)}
          id="toggleMobileNav"
          aria-label="Toggle Mobile NavBar"
        >
          <div className="w-5 h-0.5 bg-gold mb-1"></div>
          <div className="w-5 h-0.5 bg-gold mb-1"></div>
          <div className="w-5 h-0.5 bg-gold "></div>
        </button>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0   bg-customDarkBg2  z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-pink-300 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
