import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { YelpIcon } from "../assets/icons/YelpIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "Pricing", "Contact", "FAQ"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-36  mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo fill="rgb(217, 1, 102)" />
                </div>
                <div className="text-customPrimary font-['Inter'] font-bold text-xl">
                  U Fancy
                </div>
              </div>

              <div className="w-26 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                  aria-label="Twitter Link"
                >
                  <YelpIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  aria-label="Instagram Link"
                  href="#"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-black">Site Map</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li
                      key={i}
                      className="mb-4"
                    >
                      <a
                        className="text-customPrimary hover:text-black"
                        href="#"
                        aria-label={`${item}`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-black border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2024. MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
