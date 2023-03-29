import logo from "../../assets/react.svg";
import SearchInput from "./SearchInput";
const Header = ({ onChangeHandler }) => {
  return (
    <div className="text-[#002d5a] flex justify-between from-[#0067B7]  to-[#00A5FF] bg-gradient-to-r p-2 sticky top-0 z-[60]">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo-news" /> <p>React News Project</p>
      </div>
      <SearchInput onChangeHandler={onChangeHandler} />
      <ul className="flex items-center justify-center gap-8 text-xl">
        <li className="cursor-pointer flex items-center justify-center">
          Lastest news
        </li>
        <li className="cursor-pointer">All news</li>
        <button className="bg-[#212529] rounded-full px-4 py-2 flex items-center gap-2">
          <i class="ri-focus-fill text-red-400"></i>
          <span className="text-white">Live TV</span>
        </button>
      </ul>
    </div>
  );
};

export default Header;
