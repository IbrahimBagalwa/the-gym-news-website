import logo from "../../assets/react.svg";
const Header = () => {
  return (
    <div className="text-[#002d5a] flex justify-between from-[#0067B7]  to-[#00A5FF] bg-gradient-to-r p-2 sticky top-0 z-[60]">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo-news" /> <p>React News Project</p>
      </div>
      <ul className="flex items-center justify-center gap-8 text-xl">
        <li className="cursor-pointer flex items-center justify-center">
          Lastest news
        </li>
        <li className="cursor-pointer">All news</li>
        <button className="bg-[#212529] rounded-full px-4 py-2 flex items-center gap-2">
          <i class="ri-focus-fill text-red-400"></i>
          Live TV
        </button>
      </ul>
    </div>
  );
};

export default Header;
