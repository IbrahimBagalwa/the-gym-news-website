const SearchInput = ({ onChangeHandler }) => {
  return (
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="ri-search-line text-gray-500 dark:text-gray-400"></i>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-white border rounded-lg dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400"
          placeholder="Search Articles..."
          required
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default SearchInput;
