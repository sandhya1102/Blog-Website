import React from "react";
import techImg from "../assets/images/tech.jpg";

const Newsmodel = ({ show, article, onclose }) => {
  if (!show || !article) return null;
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-1000">
      <div className="bg-zinc-900 rounded-2xl lg:w-[28%]  w-[50%] h-[80%] relative shadow-[0_0_5rem_4rem_rgba(0,0,0,1.5)]">
        <span
          className="absolute right-1 -top-8 cursor-pointer"
          onClick={onclose}
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </span>
        <div className="news-model overflow-auto">
          <img
            className="rounded-2xl h-auto w-[100%] object-cover max-h-[30rem] "
            src={article.image || techImg}
            alt="source"
          />
          <div className="content relative">
            <h1 className="text-[2rem] font-bold">{article.title}</h1>
            <p className="text-xl font-medium">
              Source: {article.source?.name || "Unknown"}
            </p>
            <p className="font-sans text-lg text-gray-400 ">
              {article.publishedAt?.split("T")[0]}
            </p>
            <h4 className="text-[1.4rem] text-gray-200">
              {article.description.slice(0, 500)}
            </h4>
            <a
              className="bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-md font-medium text-[1.4rem] text-center leading-snug tracking-widest uppercase "
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsmodel;
