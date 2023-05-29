import { Fragment, useState, FC, ChangeEvent } from "react";
import SearchInput from "./SearchInput";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export type HandleChangeProp = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Header: FC<HandleChangeProp> = ({ onChangeHandler }) => {
  const [live, setLive] = useState<Boolean>(false);
  return (
    <Fragment>
      <div className="text-[#002d5a] flex justify-around lg:justify-between from-[#0067B7]  to-[#00A5FF] bg-gradient-to-r p-2 sticky top-0 z-[60]">
        <Link to="/" className="md:flex items-center gap-4 hidden">
          <i className="ri-git-repository-line ri-xl"></i>
          <p>Reaction road news</p>
        </Link>
        <SearchInput onChangeHandler={onChangeHandler} />
        <div className="lg:flex hidden items-center justify-center gap-8 text-xl">
          <button
            className="bg-[#212529] md:hidden rounded-full px-4 py-2 lg:flex items-center gap-2"
            onClick={() => setLive(!live)}
          >
            <i className="ri-focus-fill text-red-400"></i>
            <span className="text-white">Live TV</span>
          </button>
        </div>
      </div>
      <Outlet context={live} />
      <Footer />
    </Fragment>
  );
};

export default Header;
