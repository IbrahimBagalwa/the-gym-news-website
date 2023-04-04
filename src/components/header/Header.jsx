import { Fragment } from "react";
import logo from "../../assets/react.svg";
import SearchInput from "./SearchInput";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Header = ({ onChangeHandler }) => {
  return (
    <Fragment>
      <div className="text-[#002d5a] flex justify-around lg:justify-between from-[#0067B7]  to-[#00A5FF] bg-gradient-to-r p-2 sticky top-0 z-[60]">
        <Link to="/" className="md:flex items-center gap-4 hidden">
          <img src={logo} alt="logo-news" /> <p>React News Project</p>
        </Link>
        <SearchInput onChangeHandler={onChangeHandler} />
        <ul className="lg:flex hidden items-center justify-center gap-8 text-xl">
          <Link to="/latest-news">
            <li className="cursor-pointer flex items-center justify-center">
              Lastest news
            </li>
          </Link>
          <Link to="/all-news">
            <li className="cursor-pointer">All news</li>
          </Link>
          <button className="bg-[#212529] md:hidden rounded-full px-4 py-2 lg:flex items-center gap-2">
            <i class="ri-focus-fill text-red-400"></i>
            <span className="text-white">Live TV</span>
          </button>
        </ul>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;
