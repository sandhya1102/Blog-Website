import React, { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContext";

const Blogs = ({ onEditBlog, onDeleteBlog }) => {
  const { setselectedPost, setshowblogModel, blogs } = useContext(NewsContext);

  const handleBlogClick = (blog) => {
    setselectedPost(blog);
    setshowblogModel(true);
  };

  return (
    <div className="blogs bg-zinc-900 2xl:w-[600px] xl:h-[500px] xl-w-[400px] lg:h-[400px] lg:w-[370px] w-full h-auto rounded-xl overflow-auto">
      <h1 className="text-[3.5rem] font-light text-center text-white ">
        MY BLOGS
      </h1>
      <hr className="w-78 border-t-2 border-gray-400" />
      <div className="blogs-post grid md:grid-cols-2  lg:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <div
            onClick={() => handleBlogClick(blog)}
            key={index}
            className="single-post relative w-full h-auto bg-zinc-900 rounded-lg shadow-lg overflow-hidden cursor-grab"
          >
            <img
              className="w-full h-[150px] object-cover rounded-t-lg"
              src={blog.image}
              alt={blog.title}
            />
            <div className="btns absolute top-4 right-4 lg:top-2 lg:right-2 flex gap-6 text-3xl  opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button
                onClick={() => {
                  onEditBlog(blog);
                }}
              >
                <i className="fa-solid fa-pen-to-square cursor-pointer text-blue-500 hover:text-blue-700"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBlog(blog);
                }}
              >
                <i className="fa-solid fa-trash text-red-500 cursor-pointer hover:text-red-700"></i>
              </button>
            </div>
            <h2 className="p-2 bg-black/50 text-white text-lg font-medium text-center">
              {blog.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
