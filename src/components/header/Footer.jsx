import { WrapperContent } from "../wrapper";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#3b444d] p-20">
      <WrapperContent styles="flex md:justify-between justify-center">
        <div className="text-[11px] flex items-center">
          <p className="text-[#b2bcc5] mx-6 hover:underline truncate">
            © 2023 Ibrahim Bagalwa
          </p>
          <p className="text-white mx-2 hover:underline hidden md:block">
            Privacy Policy
          </p>
          <p className="text-white mx-2 hover:underline hidden md:block">
            Legal notice
          </p>
          <p className="text-white hover:underline hidden md:block">
            Digital accessibility
          </p>
        </div>
        <div className="text-white">
          <Link to="https://twitter.com/ibrahim_Bagalwa">
            <i className="ri-twitter-line mx-2"></i>
          </Link>
          <Link to="https://github.com/IbrahimBagalwa">
            <i className="ri-github-fill cursor-pointer"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/ibrahim-bagalwa-831400198/">
            <i className="ri-linkedin-fill mx-2 cursor-pointer"></i>
          </Link>
        </div>
      </WrapperContent>
    </div>
  );
};

export default Footer;
