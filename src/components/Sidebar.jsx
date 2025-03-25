import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const Sidebar = () => {
  const {
    selectedcatogery,
    setselectedcatogery,
    categories,
    setshowBookmarks,
  } = useContext(NewsContext);

  const handleCategory = (e, catogery) => {
    e.preventDefault();
    setselectedcatogery(catogery);
  };

  return (
    <>
      <div className="sidebar h-[70px] ">
        <hr />
        <div className="catog flex items-center 2xl:gap-8 p-4  justify-center">
          <div className="links flex text-black flex-wrap items-center justify-center text-[1.4rem]  gap-x-24 2xl:gap-6 2xl:text-[1.5rem] lg:text-[1.2rem]">
            {categories.length > 0 ? (
              categories.map((category) => (
                <a
                  href="#"
                  key={category}
                  className={`cursor-pointer  rounded-md ${
                    selectedcatogery === category
                      ? "bg-blue-500 text-black font-bold "
                      : "text-black hover:text-blue-500"
                  }`}
                  onClick={(e) => handleCategory(e, category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              ))
            ) : (
              <p className="text-red-400">No categories available</p>
            )}
            <a href="#" className="" onClick={() => setshowBookmarks(true)}>
              Bookmarks
              <i className="fa-solid fa-bookmark"></i>
            </a>
          </div>
        </div>
        <hr className="sidebar-hr"/>
      </div>
    </>
  );
};

export default Sidebar;
