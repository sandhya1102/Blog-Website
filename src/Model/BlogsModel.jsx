import React from "react";
import blogspic from "../assets/images/blogs.jpg";

const BlogsModel = ({ show, post, onclose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-1000">
      <div className=" bg-zinc-900 rounded-2xl lg:w-[28%]  w-[50%] h-[80%] relative shadow-[0_0_5rem_4rem_rgba(0,0,0,1.5)] ">
        <span
          onClick={onclose}
          className="absolute right-1 -top-8 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-4xl "></i>
        </span>
        <div className="blogs-model overflow-auto">
          <img
            className="rounded-2xl h-auto w-[100%] object-cover max-h-[30rem] "
            src={post.image || { blogspic }}
            alt="source"
          />
          <div className="content relative">
            <h1 className="text-[2rem] font-bold">{post.title}</h1>
            <p className="text-xl font-medium">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsModel;
