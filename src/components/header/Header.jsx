import logo from "../../assets/react.svg";
const Header = () => {
  return (
    <div className="text-[#002d5a] flex justify-between from-[#0067B7]  to-[#00A5FF] bg-gradient-to-r p-2 sticky top-0 z-[60]">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo-news" /> <p>React News Project</p>
      </div>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Search Articles..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

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
