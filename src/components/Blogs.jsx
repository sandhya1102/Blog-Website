import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const Blogs = ({ onEditBlog, onDeleteBlog }) => {
  const { setselectedPost, setshowblogModel, blogs } = useContext(NewsContext);

  const handleBlogClick = (blog) => {
    setselectedPost(blog);
    setshowblogModel(true);
  };

  return (
    <div className="blogs w-full ">
      <h1 className="text-[3.5rem] font-bold text-center flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        BLOGS
      </h1>
      <hr className="w-48 border-t-2 border-blue-600 mx-auto mb-4" />

      {blogs.length === 0 ? (
        <div className="no-post flex flex-col items-center justify-center text-center text-white h-[100%]">
          <h2 className="text-2xl font-semibold text-black">No Blogs Yet! 🚀</h2>
          <p className="text-gray-700 mt-2">
            Start writing and share your thoughts with the world.
          </p>
        </div>
      ) : (
        <div className="blogs-post w-full grid xl:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 h-[500px] overflow-auto gap-4 ">
          {blogs.map((blog, index) => (
            <div
              onClick={() => handleBlogClick(blog)}
              key={index}
              className="single-post relative rounded-lg cursor-grab flex flex-col items-center w-full max-w-[350px]"
            >
              <img
                className="w-[300px] h-[150px] object-cover rounded-t-lg"
                src={blog.image}
                alt={blog.title}
              />
              <div className="btns absolute top-4 right-4 lg:top-2 lg:right-12 flex gap-6 text-3xl opacity-0 transition-opacity duration-300 hover:opacity-100">
                <button onClick={() => onEditBlog(blog)}>
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
              <h2 className="blog-title p-2 text-black text-lg  2xl:text-2xl font-medium text-center">
                {blog.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;