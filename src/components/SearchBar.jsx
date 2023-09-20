import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  let searchTxt = "KFC"
  return (
    <>
      <div className="flex items-center justify-between border- border-2 my-7 mx-8 md:mx-48 rounded-lg p-2 space-x-2">
        <input
          type="text"
          placeholder="Search your foods and restaurants"
          className="w-full outline-none"
          value={searchTxt}
          onChange={(e) => {
            searchTxt = e.target.value
          }}
        />
        <span className="text-2xl text-zinc-400">
          <AiOutlineSearch />
        </span>
        <button className="p-1 px-2 pb-2 bg-orange-500 font-bold text-white hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-300">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
