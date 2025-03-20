import React, { useContext } from "react";
import user from "../assets/images/profile.jpg";
import { NewsContext } from "../context/NewsContext";

const Sidebar = () => {
  const {
    selectedcatogery,
    setselectedcatogery,
    categories,
    setshowBookmarks,
    handleblogform,
  } = useContext(NewsContext);

  const handleCategory = (e, catogery) => {
    e.preventDefault();
    setselectedcatogery(catogery);
  };

  return (
    <>
      <div className="sidebar flex flex-row lg:flex-col gap-5">
        <div
          className="img 2xl:w-[180px] lg:h-[100px] lg:w-[120px] md:h-[120px] md:w-[200px] w-[200px] bg-zinc-900 flex flex-col gap-5 justify-center items-center rounded-xl "
          onClick={() => {
            handleblogform();
          }}
        >
          <img
            src={user}
            alt="profile"
            className="w-[50px] h-[50px] cursor-pointer rounded-[50%] object-cover"
          />
          <p className="text-xl font-light">Sandhya's Blog</p>
        </div>
        <div className="catog bg-zinc-900 
        lg:h-[390px] lg:w-[120px] 2xl:h-[510px] xl:w-[120px] md:w-[650px] w-[500px] h-[120px] flex items-center flex-col 2xl:gap-8 rounded-xl">
          <h1 className="lg:text-[2.5rem] text-[2rem]">Catogory</h1>
          <div className="links flex lg:flex-col flex-wrap items-center justify-center w-[300px] text-[1.2rem] lg:text-[1.5rem] gap-2 2xl:gap-6">
            {categories.length > 0 ? (
              categories.map((category) => (
                <a
                  href="#"
                  key={category}
                  className={`cursor-pointer  rounded-md ${
                    selectedcatogery === category
                      ? "bg-yellow-500 text-black font-bold "
                      : "text-white hover:text-yellow-300"
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
      </div>
    </>
  );
};

export default Sidebar;
