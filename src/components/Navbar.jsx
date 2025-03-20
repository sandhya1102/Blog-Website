import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const Navbar = () => {
  const { searchInput, setSearchInput, setSearchQuery } =
    useContext(NewsContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
  };

  return (
    <div className="navbar w-full bg-zinc-900 flex lg:justify-between justify-between">
      <h1 className="header text-5xl font-extrabold 2xl:text-[5rem]">NEWS & BLOGS</h1>
      <div className="searchbar rounded-xl relative">
        <form onSubmit={handleSearch}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="search"
            className="text-xl bg-zinc-950 w-[200px] h-[30px] rounded-4xl focus:w-[300px] transition-width duration-300"
          />
          <button
            type="submit"
            className="right-9 top-[35%] absolute cursor-pointer"
            id="search"
          >
            <i className="fa-solid fa-magnifying-glass text-2xl text-zinc-400"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
