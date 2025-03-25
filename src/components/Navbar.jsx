import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

const Navbar = () => {
  const { selectedcatogery,setselectedcatogery,
    setshowBookmarks, categories,searchInput, setSearchInput, setSearchQuery,handleblogform } =
    useContext(NewsContext);
    const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
  };

  const handleCategory = (e, category) => {
    e.preventDefault();
    setselectedcatogery(category);
    setMenuOpen(false);
  };

  return (
    <div className="navbar w-full h-[60px] flex lg:justify-between justify-between items-center text-black">
      <h1 className="header text-[4rem] font-extrabold 2xl:text-[5rem] md:text-[3rem]">NEWS & BLOGS</h1>
      <div className="searchbar rounded-xl relative items-center">
        <form onSubmit={handleSearch}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="search"
            className="text-xl lg:w-[200px] lg:focus:w-[250px] w-[300px] h-[30px] rounded-4xl focus:w-[400px] transition-width duration-300 text-gray-900"
          />
          <button
            type="submit"
            className="right-9 top-[25%] absolute cursor-pointer "
            id="search"
            
          >
            <i className="fa-solid fa-magnifying-glass text-2xl text-zinc-900 "></i>
          </button>
        </form>
        </div>
        <div
  className="post-profile flex flex-col gap-5 items-center justify-center h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg scale-100 shadow-2xl shadow-black "
  onClick={handleblogform}
>
  <button className="2xl:text-3xl lg:text-2xl flex items-center text-xl gap-2 font-medium  rounded-lg transition-all duration-300  cursor-pointer text-black">New Blog <i className="fa-solid fa-pen-to-square"></i> 
  </button>
</div>
    {/* Mobile Menu Button */}
    <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars text-3xl"></i>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="menu w-[250px] absolute top-20 left-180  bg-gray-50 shadow-lg flex flex-col items-center p-5 space-y-4 gap-6 z-50">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className={`cursor-pointer rounded-md text-3xl ${
                selectedcatogery === category
                  ? "bg-blue-500 text-black font-bold"
                  : "text-black hover:text-blue-500"
              }`}
              onClick={(e) => handleCategory(e, category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          ))}
          <a href="#" className="text-2xl hover:text-blue-500" onClick={() => setshowBookmarks(true)}>
            Bookmarks <i className="fa-solid fa-bookmark"></i>
          </a>
        </div>
      )}

    </div>
  );
};

export default Navbar;
